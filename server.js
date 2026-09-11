const http = require('http');
const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

const PORT = process.env.PORT || 3000;
const ROOT = __dirname;

const MIME_TYPES = {
  '.html': 'text/html; charset=UTF-8',
  '.css': 'text/css; charset=UTF-8',
  '.js': 'application/javascript; charset=UTF-8',
  '.json': 'application/json; charset=UTF-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.mp4': 'video/mp4',
  '.webm': 'video/webm',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
  '.ttf': 'font/ttf'
};

const server = http.createServer((req, res) => {
  let reqPath = decodeURIComponent(req.url.split('?')[0]);
  if (reqPath === '/' || reqPath === '') {
    reqPath = '/index.html';
  }

  let filePath = path.join(ROOT, reqPath);

  if (reqPath === '/favicon.ico') {
    res.writeHead(200, {
      'Content-Type': 'image/svg+xml',
      'Cache-Control': 'public, max-age=31536000, immutable',
      'X-Content-Type-Options': 'nosniff'
    });
    res.end("<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><circle cx='50' cy='50' r='48' fill='#060b13' stroke='#38bdf8' stroke-width='4'/><text x='50%' y='58%' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-weight='900' font-size='40' fill='#38bdf8'>AE</text></svg>");
    return;
  }

  if (!filePath.startsWith(ROOT)) {
    res.writeHead(403);
    res.end('403 Forbidden');
    return;
  }

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      const publicPath = path.join(ROOT, 'public', reqPath);
      if (publicPath.startsWith(ROOT) && fs.existsSync(publicPath) && fs.statSync(publicPath).isFile()) {
        filePath = publicPath;
        stats = fs.statSync(publicPath);
      } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
        return;
      }
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    // Base security headers for all responses
    const headers = {
      'Access-Control-Allow-Origin': '*',
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'SAMEORIGIN',
      'Referrer-Policy': 'strict-origin-when-cross-origin'
    };

    // Cache-Control headers optimized for Lighthouse Best Practices (1 year for assets, 1 hour for HTML)
    headers['Cache-Control'] = (ext === '.html')
      ? 'public, max-age=3600, must-revalidate'
      : 'public, max-age=31536000, immutable';

    // Support HTTP Range requests for video streaming
    const range = req.headers.range;
    if (range && ext === '.mp4') {
      const parts = range.replace(/bytes=/, '').split('-');
      const start = parseInt(parts[0], 10);
      const end = parts[1] ? parseInt(parts[1], 10) : stats.size - 1;
      const chunkSize = end - start + 1;
      const fileStream = fs.createReadStream(filePath, { start, end });

      headers['Content-Range'] = `bytes ${start}-${end}/${stats.size}`;
      headers['Accept-Ranges'] = 'bytes';
      headers['Content-Length'] = chunkSize;
      headers['Content-Type'] = contentType;

      res.writeHead(206, headers);
      fileStream.pipe(res);
      return;
    }

    const acceptEncoding = req.headers['accept-encoding'] || '';
    const compressible = ['.html', '.css', '.js', '.json', '.svg'].includes(ext);

    if (compressible && acceptEncoding.includes('gzip')) {
      headers['Content-Type'] = contentType;
      headers['Content-Encoding'] = 'gzip';
      headers['Vary'] = 'Accept-Encoding';

      res.writeHead(200, headers);
      const gzip = zlib.createGzip({ level: 6 });
      fs.createReadStream(filePath).pipe(gzip).pipe(res);
    } else {
      headers['Content-Length'] = stats.size;
      headers['Content-Type'] = contentType;
      headers['Accept-Ranges'] = 'bytes';

      res.writeHead(200, headers);
      fs.createReadStream(filePath).pipe(res);
    }
  });
});

server.listen(PORT, () => {
  console.log(`High-performance portfolio server running at: http://localhost:${PORT}`);
});
