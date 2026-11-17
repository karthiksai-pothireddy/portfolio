export const ABOUT_TEXT =
  "Software engineer with 5+ years building high-scale, event-driven systems across fintech, telecom, and e-commerce. I design resilient microservices in Java, Spring Boot, React, Kafka, Redis, and AWS — platforms that handle 300K+ concurrent sessions with sub-300ms checkouts and 99.98% uptime. Let's build something reliable together!";

export const SKILLS = [
  {
    name: 'Backend & Microservices',
    description:
      'Java, Spring Boot, Hibernate, GraphQL and REST — idempotent, PCI-DSS compliant services with circuit breakers, retries, and saga-based consistency.',
  },
  {
    name: 'Event-Driven Systems',
    description:
      'Kafka streams, Redis (incl. Lua scripting), DynamoDB, PostgreSQL and Spark — pipelines and ledgers that stay correct at 100K+ ops/sec.',
  },
  {
    name: 'Frontend Engineering',
    description:
      'React, Redux, React Router and TypeScript — real-time, drill-down dashboards and checkout flows used across web and mobile.',
  },
  {
    name: 'Cloud & DevOps',
    description:
      'AWS (ECS Fargate, EKS, Lambda, Step Functions, API Gateway, S3), Docker, Kubernetes, Jenkins, canary deploys, Grafana and Prometheus.',
  },
  {
    name: 'ML & AI Integration',
    description:
      'PyTorch, TensorFlow, scikit-learn and LLMs wired into production services — personalization, intent classification, RAG and summarization.',
  },
];

export const EXPERIENCE = [
  {
    company: 'Verizon',
    role: 'Software Development Engineer',
    meta: 'Aug 2024 – Present · Houston, TX',
    stats: [
      { value: '300K+', label: 'concurrent sessions' },
      { value: '3.2s → 280ms', label: 'checkout latency' },
      { value: '99.98%', label: 'uptime' },
    ],
    images: [
      '/experience/verizon/1.webp',
      '/experience/verizon/2.avif',
      '/experience/verizon/3.webp',
    ],
  },
  {
    company: 'Discover',
    role: 'Software Engineer',
    meta: 'Jun 2023 – Aug 2024 · Chicago, IL',
    stats: [
      { value: '12%', label: 'lift in offer adoption' },
      { value: '92%', label: 'intent accuracy' },
      { value: 'Millions', label: 'of users personalized' },
    ],
    images: [
      '/experience/discover/1.png',
      '/experience/discover/2.avif',
      '/experience/discover/3.webp',
    ],
  },
  {
    company: 'CRED',
    role: 'Full Stack Engineer',
    meta: 'May 2020 – Dec 2021 · Bangalore, India',
    stats: [
      { value: '10M+', label: 'monthly ledger txns' },
      { value: '100K+/s', label: 'concurrent redemptions' },
      { value: '-70%', label: 'reconciliation issues' },
    ],
    images: [
      '/experience/cred/1.png',
      '/experience/cred/2.jpg',
      '/experience/cred/3.webp',
    ],
  },
];

export const PROJECTS = [
  {
    name: 'Distributed Key-Value Store',
    tags: ['C++', 'Raft'],
    description:
      'Raft-based replicated store with leader election and log replication — linearizable reads/writes at 10K+ ops/sec across 3-node clusters.',
  },
  {
    name: 'RAG Document Q&A',
    tags: ['FAISS', 'GPT-2', 'Python'],
    description:
      'Retrieval-augmented pipeline for semantic search and Q&A over unstructured PDFs; 40% fewer irrelevant answers than vanilla GPT-2.',
  },
  {
    name: 'Multi-Threaded File System',
    tags: ['C++', 'POSIX'],
    description:
      'POSIX-compliant file system simulator with read/write locks and journaling — 70% faster throughput under concurrent access.',
  },
  {
    name: 'Transformer Summarization',
    tags: ['BERT', 'PEGASUS', 'PyTorch'],
    description:
      'Fine-tuned BERT/PEGASUS for abstractive news summarization, improving ROUGE-L by 22% over seq2seq baselines.',
  },
];
