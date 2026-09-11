import { SoftwareProject, GameDevProject, SkillCategory, TimelineItem } from '@/types';

export const PERSONAL_INFO = {
  name: 'Arivuchezhiyan E',
  title: 'Systems & AI Architect / AAA Game Developer',
  degree: 'M.Tech Integrated Computer Science and Engineering',
  institution: 'Sri Sivasubramaniya Nadar (SSN) College of Engineering',
  location: 'Chennai, Tamil Nadu, India',
  email: 'arivuchezhiyan.e@ssn.edu.in',
  github: 'https://github.com/arivuchezhiyan-e',
  linkedin: 'https://linkedin.com/in/arivuchezhiyan-e',
  bioSoftware: 'Senior Staff level Software Architect specializing in AI multi-agent orchestration, high-concurrency systems programming, distributed cloud infrastructure, and modern web engines.',
  bioGameDev: 'AAA Graphics & Gameplay Engineer passionate about Unreal Engine 5 C++ frameworks, real-time rendering pipelines, volumetric raymarching shaders, VR spatial physics, and photorealistic virtual environments.',
  stats: {
    gpa: '9.4 / 10.0',
    commits: '1,450+',
    fpsTarget: '60 - 120 FPS',
    shaderOptimization: '-40% Draw Calls',
  }
};

export const SOFTWARE_PROJECTS: SoftwareProject[] = [
  {
    id: 'open-continuity-ai',
    title: 'OpenContinuity AI',
    subtitle: 'Autonomous Multi-Agent AI Engine & Context Memory Fabric',
    description: 'An enterprise-grade local LLM orchestration framework built with Rust and TypeScript. Features vector search memory indexing, dynamic agent graph routing, and ultra-low latency streaming response pipelines.',
    category: 'AI / Machine Learning',
    tags: ['Rust', 'TypeScript', 'Next.js 15', 'Python', 'PyTorch', 'Vector DB', 'gRPC'],
    highlights: [
      'Engineered multi-agent event loop processing over 4,000 token tokens/sec locally',
      'Integrated real-time long-term context retention using hierarchical HNSW graph embeddings',
      'Zero-latency stream multiplexing with custom SSE/WebSocket fallback handlers'
    ],
    metrics: [
      { label: 'Agent Throughput', value: '4.2k tokens/s' },
      { label: 'Latency Reduction', value: '-65%' },
      { label: 'Memory Footprint', value: '1.2 GB' }
    ],
    architecture: {
      components: ['React 19 Dashboard', 'Rust Agent Dispatcher', 'PyTorch Embeddings Worker', 'ChromaVector DB'],
      dataFlow: 'Client WebSockets -> Rust Dispatcher -> Local LLM Model API -> Vector Context Retrieval -> Streamed UI Matrix',
      databaseSchema: 'MongoDB (Agents & Sessions) + Qdrant (HNSW Dense Vector Embeddings)',
      optimization: 'Zero-copy memory buffers in Rust and SIMD vector dot-product acceleration.'
    },
    githubUrl: 'https://github.com/arivuchezhiyan-e/open-continuity-ai',
    liveUrl: 'https://open-continuity-ai.demo',
    featured: true,
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'hyperdrive-kv',
    title: 'HyperDrive KV Engine',
    subtitle: 'High-Throughput C++20 Distributed In-Memory Store',
    description: 'Ultra-fast in-memory key-value database featuring Lock-Free SkipLists, LRU-K cache eviction, custom memory pool allocators, and Raft consensus for multi-node linearizable fault tolerance.',
    category: 'Systems & Backend',
    tags: ['C++20', 'Raft Consensus', 'Lock-Free Structures', 'gRPC', 'CMake', 'Linux Epoll'],
    highlights: [
      'Achieved over 1.8 Million IOPS per node with sub-millisecond p99 latency',
      'Implemented Raft consensus log replication supporting automatic leader election',
      'Custom memory allocator eliminating malloc overhead by 78%'
    ],
    metrics: [
      { label: 'Max Throughput', value: '1.8M IOPS' },
      { label: 'p99 Latency', value: '< 0.4 ms' },
      { label: 'Fault Tolerance', value: 'Raft Multi-Node' }
    ],
    architecture: {
      components: ['C++ Network Reactor (Epoll)', 'SkipList Index', 'Raft Log Replication State Machine', 'Disk WAL Engine'],
      dataFlow: 'TCP Payload -> Non-blocking Epoll Dispatch -> Lock-Free SkipList Write -> Raft Peer Broadcast -> WAL Flush',
      databaseSchema: 'Custom Binary Append-Only Write Ahead Log (WAL) with CRC32 checksums',
      optimization: 'Custom slab memory pool allocator avoiding kernel heap fragmentation.'
    },
    githubUrl: 'https://github.com/arivuchezhiyan-e/hyperdrive-kv',
    featured: true,
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'vanguard-cloud',
    title: 'Vanguard Microservices Hub',
    subtitle: 'Resilient Cloud Mesh & Real-time Telemetry Dashboard',
    description: 'Cloud-native microservices architecture platform featuring automated circuit breaking, distributed tracing (OpenTelemetry), GraphQL federation, and Kafka event streaming.',
    category: 'Cloud & Distributed',
    tags: ['Next.js', 'Go', 'Docker', 'Kubernetes', 'Apache Kafka', 'GraphQL', 'Prometheus'],
    highlights: [
      'Orchestrated 15+ microservices with sub-50ms inter-service communication',
      'Integrated real-time topology graph rendering using D3.js & WebGL',
      'Automated zero-downtime blue/green deployment strategy via Kubernetes CRDs'
    ],
    metrics: [
      { label: 'System Uptime', value: '99.99%' },
      { label: 'Event Lag', value: '< 12 ms' },
      { label: 'Nodes Managed', value: '100+' }
    ],
    architecture: {
      components: ['Next.js Command Center', 'Go Gateway Router', 'Kafka Event Bus', 'Prometheus & Grafana'],
      dataFlow: 'Client GraphQL Request -> Go Gateway -> Kafka Event Pipeline -> Microservice Cluster -> Redis Cache -> Response',
      optimization: 'eBPF kernel packet filtering for instant microservice network observability.'
    },
    githubUrl: 'https://github.com/arivuchezhiyan-e/vanguard-cloud',
    featured: false,
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
  }
];

export const GAME_DEV_PROJECTS: GameDevProject[] = [
  {
    id: 'project-chronos',
    title: 'Project Chronos: Cyberpunk Odyssey',
    subtitle: 'AAA Open-World Action RPG Framework in Unreal Engine 5.4',
    description: 'A photorealistic open-world cyberpunk action RPG prototype built ground-up in Unreal Engine 5.4 using C++ Gameplay Ability System (GAS), custom motion warping physics, Nanite mesh streaming, and Lumen real-time global illumination.',
    engine: 'Unreal Engine 5',
    techStack: ['C++', 'UE5 GAS System', 'Chaos Physics', 'Lumen', 'Nanite', 'HLSL Shaders', 'Substance 3D'],
    features: [
      'Custom C++ Gameplay Ability System (GAS) for multi-tiered combat skills',
      'Modular procedural character locomotion system with Inverse Kinematics (IK)',
      'Dynamic weather system with custom HLSL volumetric fog & wetness shaders',
      'Optimized HLSL raymarching holograms and GPU particle systems using Niagara'
    ],
    blueprintVsCppRatio: '85% C++ Architecture / 15% Blueprints UI & Data Assets',
    renderingTech: ['Lumen GI & Reflections', 'Nanite Virtualized Geometry', 'Niagara Fluid Particles', 'Sub-Surface Scattering Skin Shader'],
    performanceMetrics: {
      fps: '72 FPS (4K Ultra)',
      resolution: '3840x2160 native (TSR Enhanced)',
      drawCalls: 'Under 1,800 Batch Calls'
    },
    githubUrl: 'https://github.com/arivuchezhiyan-e/project-chronos-ue5',
    videoUrl: '/PRO1.mp4',
    featured: true,
    image: '/space_station_thumb.jpg',
  },
  {
    id: 'cybercore-vr',
    title: 'CyberCore VR Tactical Combat',
    subtitle: 'Physically Driven VR Interaction Framework in C++ & OpenXR',
    description: 'Immersive VR combat and spatial interaction framework featuring physics-based two-handed weapon handling, interactive 3D cockpits, physical dynamic recoil, and spatial audio HRTF positioning.',
    engine: 'VR / Spatial Computing',
    techStack: ['Unreal Engine 5', 'OpenXR C++', 'Chaos VR Physics', 'Spatial Audio API', 'Custom IK Rig'],
    features: [
      'Physics-based finger collision tracking and door/lever manipulation',
      'Zero motion-sickness smooth locomotion algorithm with dynamic vignette blur',
      'C++ custom inverse kinematics solver for full-body player avatars'
    ],
    blueprintVsCppRatio: '90% C++ Core Mechanics / 10% Blueprint Animation Graphs',
    renderingTech: ['Stereo Instanced Forward Shading', 'Variable Rate Shading (VRS)', 'Custom Eye-Tracked Foveated Rendering'],
    performanceMetrics: {
      fps: '90 FPS Lock',
      resolution: '2160x2160 per eye (Meta Quest 3 / SteamVR)',
      drawCalls: 'Under 900 Calls'
    },
    githubUrl: 'https://github.com/arivuchezhiyan-e/cybercore-vr-cpp',
    featured: true,
    image: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'aetheria-landscape',
    title: 'Aetheria Volumetric Terrain Engine',
    subtitle: 'Procedural Voxel Landscape Shader & GPU Raymarching',
    description: 'A custom graphics experiment featuring real-time procedural terrain generation using Simplex Noise GLSL/HLSL shaders, volumetric clouds, dynamic erosion simulation, and distance field ambient occlusion.',
    engine: 'Custom C++ Engine',
    techStack: ['OpenGL 4.6', 'C++20', 'GLSL Shaders', 'Compute Shaders', 'ImGui', 'GLM'],
    features: [
      'Real-time GPU compute shader hydraulic erosion over 4096x4096 heightmap',
      'Triplanar texture projection removing texture stretching on vertical cliffs',
      'Atmospheric scattering algorithm modeling Rayleigh & Mie atmospheric light refraction'
    ],
    blueprintVsCppRatio: '100% C++ & Custom GLSL Shaders',
    renderingTech: ['GPU Compute Shaders', 'Triplanar Material Blending', 'Cascaded Shadow Maps (CSM)', 'Volumetric Mie Scattering'],
    performanceMetrics: {
      fps: '144 FPS (1440p)',
      resolution: '2560x1440',
      drawCalls: 'Single Instanced Compute Pass'
    },
    githubUrl: 'https://github.com/arivuchezhiyan-e/aetheria-shader-engine',
    featured: false,
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'AAA Game Engineering',
    iconName: 'Gamepad2',
    skills: [
      { name: 'Unreal Engine 5', level: 95, category: 'gamedev' },
      { name: 'C++20 Architecture', level: 92, category: 'gamedev' },
      { name: 'Gameplay Ability System (GAS)', level: 90, category: 'gamedev' },
      { name: 'Blueprints Visual Scripting', level: 96, category: 'gamedev' },
      { name: 'Lumen & Nanite Optimization', level: 88, category: 'gamedev' },
      { name: 'HLSL / GLSL Shaders', level: 85, category: 'gamedev' },
      { name: 'VR / OpenXR Spatial Physics', level: 87, category: 'gamedev' },
    ]
  },
  {
    title: 'Software & Systems Architecture',
    iconName: 'Cpu',
    skills: [
      { name: 'Systems Programming (C++ / Rust)', level: 90, category: 'software' },
      { name: 'AI & Multi-Agent Orchestration', level: 92, category: 'software' },
      { name: 'Next.js 15 & React 19', level: 95, category: 'software' },
      { name: 'TypeScript & Modern ES', level: 96, category: 'software' },
      { name: 'Distributed Systems & Raft', level: 86, category: 'software' },
      { name: 'Microservices, Docker & K8s', level: 85, category: 'software' },
      { name: 'MongoDB, PostgreSQL, Redis', level: 90, category: 'software' },
    ]
  },
  {
    title: 'Real-Time Graphics & WebGL',
    iconName: 'Layers',
    skills: [
      { name: 'Three.js & React Three Fiber', level: 92, category: 'both' },
      { name: 'Custom WebGL Shader Pipelines', level: 86, category: 'both' },
      { name: 'Framer Motion & GSAP Animations', level: 94, category: 'both' },
      { name: 'GPU Particle Systems (Niagara/R3F)', level: 88, category: 'both' },
      { name: 'Tailwind CSS & Glassmorphism UI', level: 98, category: 'both' },
    ]
  }
];

export const TIMELINE_DATA: TimelineItem[] = [
  {
    year: '2022 - 2027 (Expected)',
    title: 'M.Tech Integrated Computer Science and Engineering',
    organization: 'Sri Sivasubramaniya Nadar (SSN) College of Engineering',
    location: 'Chennai, Tamil Nadu, India',
    type: 'education',
    badge: 'CGPA 9.4 / 10.0',
    description: [
      'Specializing in Advanced Data Structures, Systems Architecture, AI & Real-Time Computer Graphics.',
      'Active researcher in High-Performance Computing, Local LLM Agent Orchestration & Unreal Engine C++ systems.',
      'Lead Student Coordinator for Tech & Gaming Symposia.'
    ],
    skills: ['C++', 'Data Structures', 'Operating Systems', 'AI & Machine Learning', 'Computer Graphics', 'Distributed Computing']
  },
  {
    year: '2024 - Present',
    title: 'Lead Autonomous Systems & AI Developer',
    organization: 'SSN NextGen AI & Graphics Lab',
    location: 'Chennai, India',
    type: 'experience',
    badge: 'Research Project',
    description: [
      'Architected OpenContinuity AI, an autonomous multi-agent graph orchestrator using Rust and PyTorch.',
      'Reduced memory latency by 65% through custom lock-free memory indexing and zero-copy streaming.',
      'Published open-source benchmarks comparing local LLM throughput across heterogenous GPU clusters.'
    ],
    skills: ['Rust', 'PyTorch', 'TypeScript', 'Next.js', 'Vector DBs', 'gRPC']
  },
  {
    year: '2023 - 2024',
    title: 'AAA Unreal Engine 5 Systems Engineer',
    organization: 'Virtual Worlds & Interactive Systems Lab',
    location: 'Chennai, India',
    type: 'experience',
    badge: 'AAA Project Showcase',
    description: [
      'Developed C++ Gameplay Ability System (GAS) modules for open-world locomotion and combat.',
      'Authored HLSL shaders for procedural volumetric terrain raymarching and sub-surface skin scattering.',
      'Optimized draw call efficiency by 40% using Nanite virtual geometry and Niagara instancing.'
    ],
    skills: ['Unreal Engine 5', 'C++', 'HLSL', 'GAS System', 'Chaos Physics', 'OpenXR']
  }
];
