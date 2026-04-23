import ServicePage from '../../components/ServicePage'

export default function CloudServices() {
  return (
    <ServicePage
      icon="◫"
      title="Cloud Solutions"
      tagline="Modernise your infrastructure with scalable, secure cloud architecture designed for performance and cost-efficiency."
      intro="Whether you're migrating from on-premise, optimising an existing cloud setup, or building a new cloud-native product, our cloud practice has the expertise to guide and execute every step. We are cloud-agnostic, working across AWS, Azure, and Google Cloud to find the right fit for your needs."
      features={[
        'Cloud Migration Strategy & Execution',
        'Infrastructure as Code (Terraform, Pulumi)',
        'Multi-Cloud & Hybrid Architecture',
        'Cloud Cost Optimisation',
        'Kubernetes & Container Orchestration',
        'Serverless Architecture',
        'Cloud Security & Compliance',
        'Backup & Disaster Recovery',
      ]}
      process={[
        { title: 'Discovery', desc: 'Assess your current workloads, dependencies, and cloud readiness.' },
        { title: 'Architecture Design', desc: 'Design a target-state cloud architecture aligned to cost and performance goals.' },
        { title: 'Migration', desc: 'Execute a phased migration with minimal disruption to your operations.' },
        { title: 'Optimise', desc: 'Ongoing cost monitoring, security hardening, and performance tuning.' },
      ]}
      cta="Move to the Cloud with Confidence"
    />
  )
}
