/**
 * ==============================================================================
 * ENTERPRISE PORTFOLIO DISPATCH SYSTEM — GOOGLE APPS SCRIPT
 * Target Recipient: arivuchezhiyan000@gmail.com
 * Standard: Industrial-Grade HTML Layout • Verified Delivery Architecture
 * ==============================================================================
 */

const RECIPIENT_EMAIL = "arivuchezhiyan000@gmail.com";
const RECAPTCHA_SECRET = "6LdjUbUtAAAAALLfnrNGpmoTzz8ZdvTFSJE71vvU";

// OPTIONAL: Paste Google Sheet ID to maintain an audit log of all inquiries.
// Leave as "" to only send email notifications.
const SPREADSHEET_ID = "";

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.tryLock(10000);

  try {
    let data = {};

    // Support both raw JSON payload and standard URL-encoded form submissions
    if (e && e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (err) {
        data = e.parameter || {};
      }
    } else if (e && e.parameter) {
      data = e.parameter;
    }

    // Sanitize and normalize input data
    const name = (data.name || "Unspecified Organization / Recruiter").trim();
    const email = (data.email || "no-reply@unspecified.domain").trim();
    const message = (data.message || "No project scope details provided.").trim();
    const mode = data.mode === 'gd' 
      ? 'Game Development & Interactive 3D Systems' 
      : 'Full-Stack Software Architecture & Systems';
    const modeTag = data.mode === 'gd' ? 'GAME-DEV' : 'FULL-STACK';
    const timestamp = Utilities.formatDate(new Date(), "Asia/Kolkata", "dd MMM yyyy, hh:mm:ss a") + " (IST)";
    const inquiryId = "INQ-" + Utilities.formatDate(new Date(), "Asia/Kolkata", "yyyyMMdd-HHmmss");

    // SERVER-SIDE GOOGLE RECAPTCHA VERIFICATION
    if (RECAPTCHA_SECRET) {
      const token = data.recaptchaToken || data['g-recaptcha-response'];
      if (!token) {
        return ContentService.createTextOutput(JSON.stringify({ 
          result: "error", 
          error: "Missing reCAPTCHA security verification token." 
        })).setMimeType(ContentService.MimeType.JSON);
      }

      const verifyRes = UrlFetchApp.fetch("https://www.google.com/recaptcha/api/siteverify", {
        method: "post",
        payload: {
          secret: RECAPTCHA_SECRET,
          response: token
        },
        muteHttpExceptions: true
      });

      const verifyJson = JSON.parse(verifyRes.getContentText());
      if (!verifyJson.success) {
        return ContentService.createTextOutput(JSON.stringify({ 
          result: "error", 
          error: "reCAPTCHA verification failed. Submission rejected.",
          details: verifyJson["error-codes"] || []
        })).setMimeType(ContentService.MimeType.JSON);
      }
    }

    // Industrial Subject Header
    const subject = `[INQUIRY] ${name} — ${modeTag} Candidate Engagement`;

    // High-End Enterprise Industrial HTML Template (Zero Playful Emojis)
    const htmlBody = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body {
      margin: 0;
      padding: 32px 16px;
      background-color: #030712;
      color: #f8fafc;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
    }
    .wrapper {
      max-width: 620px;
      margin: 0 auto;
      background: #090f1d;
      border: 1px solid #1e293b;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.85);
    }
    .header {
      background: #0f172a;
      border-bottom: 1px solid #1e293b;
      padding: 24px 28px;
    }
    .meta-tag {
      display: inline-block;
      font-family: 'SF Mono', 'Roboto Mono', Menlo, Consolas, monospace;
      font-size: 10px;
      font-weight: 700;
      letter-spacing: 1.2px;
      text-transform: uppercase;
      color: #38bdf8;
      background: rgba(56, 189, 248, 0.1);
      border: 1px solid rgba(56, 189, 248, 0.3);
      padding: 3px 10px;
      border-radius: 4px;
      margin-bottom: 12px;
    }
    .title {
      font-size: 20px;
      font-weight: 700;
      color: #ffffff;
      margin: 0 0 6px 0;
      letter-spacing: -0.01em;
    }
    .timestamp {
      font-family: 'SF Mono', 'Roboto Mono', Menlo, Consolas, monospace;
      font-size: 11px;
      color: #64748b;
      margin: 0;
    }
    .content {
      padding: 28px;
    }
    .field-group {
      margin-bottom: 20px;
    }
    .field-label {
      font-family: 'SF Mono', 'Roboto Mono', Menlo, Consolas, monospace;
      font-size: 10px;
      font-weight: 700;
      color: #94a3b8;
      text-transform: uppercase;
      letter-spacing: 0.8px;
      margin-bottom: 6px;
    }
    .field-value {
      font-size: 14.5px;
      color: #f1f5f9;
      font-weight: 500;
      background: #0c1322;
      border: 1px solid #1e293b;
      border-radius: 6px;
      padding: 12px 14px;
    }
    .field-value a {
      color: #38bdf8;
      text-decoration: none;
    }
    .message-block {
      background: #0c1322;
      border: 1px solid #1e293b;
      border-left: 3px solid #38bdf8;
      border-radius: 6px;
      padding: 16px;
      font-size: 14px;
      line-height: 1.65;
      color: #e2e8f0;
      white-space: pre-wrap;
      word-break: break-word;
    }
    .grid-two {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 20px;
    }
    .grid-two td {
      width: 50%;
      vertical-align: top;
      padding: 0 6px 0 0;
    }
    .grid-two td:last-child {
      padding: 0 0 0 6px;
    }
    .btn-container {
      margin-top: 28px;
      text-align: center;
    }
    .action-btn {
      display: inline-block;
      background: #0284c7;
      color: #ffffff !important;
      text-decoration: none;
      font-family: 'SF Mono', 'Roboto Mono', Menlo, Consolas, monospace;
      font-size: 12px;
      font-weight: 700;
      letter-spacing: 0.5px;
      text-transform: uppercase;
      padding: 13px 32px;
      border-radius: 6px;
      border: 1px solid #38bdf8;
    }
    .footer {
      background: #060b14;
      border-top: 1px solid #1e293b;
      padding: 18px 28px;
      font-size: 11px;
      color: #64748b;
      font-family: 'SF Mono', 'Roboto Mono', Menlo, Consolas, monospace;
      text-align: center;
      line-height: 1.6;
    }
    .footer strong {
      color: #94a3b8;
    }
  </style>
</head>
<body>
  <div class="wrapper">
    <div class="header">
      <div class="meta-tag">INQUIRY REF: ${inquiryId}</div>
      <h1 class="title">Technical Portfolio Engagement</h1>
      <p class="timestamp">DISPATCHED: ${timestamp} | REGION: ASIA/KOLKATA (IST)</p>
    </div>

    <div class="content">
      <table class="grid-two">
        <tr>
          <td>
            <div class="field-label">Sender / Organization</div>
            <div class="field-value">${escapeHtml(name)}</div>
          </td>
          <td>
            <div class="field-label">Contact Address</div>
            <div class="field-value"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></div>
          </td>
        </tr>
      </table>

      <div class="field-group">
        <div class="field-label">Portfolio Domain Engagement</div>
        <div class="field-value" style="font-family:'SF Mono',Consolas,monospace;font-size:12.5px;color:#38bdf8">
          ${mode}
        </div>
      </div>

      <div class="field-group">
        <div class="field-label">Statement of Work / Candidate Inquiry Details</div>
        <div class="message-block">${escapeHtml(message)}</div>
      </div>

      <div class="btn-container">
        <a href="mailto:${escapeHtml(email)}?subject=Re:%20Technical%20Engagement%20-%20Arivuchezhiyan%20E&body=Dear%20${encodeURIComponent(name)},%0D%0A%0D%0AThank%20you%20for%20contacting%20me%20through%20my%20portfolio." class="action-btn">
          REPLY TO ${escapeHtml(name).toUpperCase()}
        </a>
      </div>
    </div>

    <div class="footer">
      <strong>SYSTEM NOTICE:</strong> Verified submission received via official portfolio web client.<br>
      Arivuchezhiyan E • M.Tech Computer Science & Engineering • SSN College of Engineering (7.887 CGPA)
    </div>
  </div>
</body>
</html>
    `;

    // Dispatch via Google MailApp with direct replyTo configuration
    MailApp.sendEmail({
      to: RECIPIENT_EMAIL,
      replyTo: email,
      subject: subject,
      htmlBody: htmlBody
    });

    // Optional Sheet logging
    if (SPREADSHEET_ID) {
      try {
        const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
        const sheet = ss.getActiveSheet();
        if (sheet.getLastRow() === 0) {
          sheet.appendRow(["Reference ID", "Timestamp", "Name / Organization", "Email", "Domain Mode", "Message"]);
        }
        sheet.appendRow([inquiryId, timestamp, name, email, mode, message]);
      } catch (sheetErr) {
        Logger.log("Sheet Error: " + sheetErr.toString());
      }
    }

    return ContentService
      .createTextOutput(JSON.stringify({ 
        result: "success", 
        inquiryId: inquiryId,
        recipient: RECIPIENT_EMAIL 
      }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ 
        result: "error", 
        error: error.toString() 
      }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ 
      status: "active", 
      system: "Enterprise Portfolio Dispatch Webhook",
      recipient: RECIPIENT_EMAIL 
    }))
    .setMimeType(ContentService.MimeType.JSON);
}

// XSS Sanitizer
function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
