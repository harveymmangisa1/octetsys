
import { 
  Server, Shield, Headset, GraduationCap, Code, FileCode, Camera, BrainCircuit,
  Lock, Activity, Users, Cloud, Scan, Search, Building, Landmark, Microscope,
  FileLock, BotIcon, Factory, Skull, UserCheck, TestTube, Link, Beaker,
  ShieldQuestion, Package, Briefcase
} from 'lucide-react';

export const serviceData = {
  'soc-services': {
    icon: Activity,
    title: 'SOC Services',
    description: '24/7 security monitoring, threat intelligence, and incident response to protect your organization around the clock.',
    packages: [
      { name: 'Essential', price: 500, period: 'per month', description: 'Core 24/7 monitoring and alerting.', features: [{ text: '24/7 Security Monitoring', included: true }, { text: 'Security Event Management', included: true }, { text: 'Basic Threat Intelligence', included: false }, { text: 'Incident Response Support', included: false }], popular: false },
      { name: 'Managed', price: 1500, period: 'per month', description: 'Comprehensive SOC-as-a-Service.', features: [{ text: 'All Essential features', included: true }, { text: 'Proactive Threat Hunting', included: true }, { text: 'Managed Incident Response', included: true }, { text: 'SOC-as-a-Service model', included: true }], popular: true },
      { name: 'Advanced', price: 4500, period: 'per month', description: 'Dedicated threat intelligence and response.', features: [{ text: 'All Managed features', included: true }, { text: 'Custom Threat Intelligence', included: true }, { text: 'Rapid Containment & Recovery', included: true }, { text: 'Dedicated Analyst', included: true }], popular: false }
    ]
  },
  'managed-detection-response': {
    icon: Scan,
    title: 'Managed Detection & Response',
    description: 'Advanced EDR, NDR, and XDR solutions with automated response playbooks and forensic investigation.',
    packages: []
  },
  'identity-access-management': {
    icon: Users,
    title: 'Identity & Access Management',
    description: 'Secure your organization with PAM, MFA, SSO, and Zero Trust architecture implementation.',
    packages: []
  },
  'cloud-security': {
    icon: Cloud,
    title: 'Cloud Security Services',
    description: 'Secure your cloud environments (AWS, Azure, GCP) with CSPM, workload protection, and DevSecOps integration.',
    packages: []
  },
  'application-security': {
    icon: FileCode,
    title: 'Application Security',
    description: 'Protect your applications with secure code review, WAF, API security, and mobile app testing.',
    packages: []
  },
  'threat-intelligence': {
    icon: Search,
    title: 'Threat Intelligence & Hunting',
    description: 'Proactive defense with CTI, dark web monitoring, brand protection, and threat actor profiling.',
    packages: []
  },
  'security-architecture': {
    icon: Building,
    title: 'Security Architecture & Engineering',
    description: 'Design robust security blueprints, network segmentation, and secure infrastructure for on-prem and hybrid environments.',
    packages: []
  },
  'compliance-management': {
    icon: Landmark,
    title: 'Compliance Management',
    description: 'Achieve and maintain compliance with GDPR, HIPAA, PCI-DSS, SOC 2, and ISO 27001.',
    packages: []
  },
  'risk-management': {
    icon: ShieldQuestion,
    title: 'Risk Management Services',
    description: 'Comprehensive risk assessments, third-party risk management, and risk quantification.',
    packages: []
  },
  'data-protection-privacy': {
    icon: FileLock,
    title: 'Data Protection & Privacy',
    description: 'Implement DLP, data classification, and encryption to protect your sensitive information.',
    packages: []
  },
  'ai-security': {
    icon: BotIcon,
    title: 'Artificial Intelligence Security',
    description: 'Secure your AI/ML models, implement GenAI security policies, and leverage AI for threat detection.',
    packages: []
  },
  'ot-security': {
    icon: Factory,
    title: 'Operational Technology (OT) Security',
    description: 'Protect industrial control systems (ICS), SCADA, and critical infrastructure.',
    packages: []
  },
  'cyber-warfare-defense': {
    icon: Skull,
    title: 'Cyber Warfare & Advanced Threats',
    description: 'Defend against Advanced Persistent Threats (APTs) with Red/Purple team exercises and threat emulation.',
    packages: []
  },
  'security-awareness-training': {
    icon: GraduationCap,
    title: 'Security Awareness & Training',
    description: 'Strengthen your human firewall with executive briefings, phishing simulations, and secure development training.',
    packages: []
  },
  'digital-forensics': {
    icon: Microscope,
    title: 'Digital Forensics & Incident Response',
    description: 'Expert computer, mobile, and network forensics, malware analysis, and e-discovery support.',
    packages: []
  },
  'virtual-ciso': {
    icon: Briefcase,
    title: 'Virtual CISO (vCISO)',
    description: 'Fractional CISO services for security strategy, board reporting, and program maturity.',
    packages: []
  },
  'pen-testing': {
    icon: TestTube,
    title: 'Penetration Testing & Red Teaming',
    description: 'Simulate real-world attacks to identify and remediate vulnerabilities in your systems.',
    packages: []
  },
  'security-transformation': {
    icon: Beaker,
    title: 'Security Transformation',
    description: 'Secure your digital transformation initiatives and modernize legacy system security.',
    packages: []
  },
  'managed-security-services': {
    icon: Headset,
    title: 'Managed Security Services (MSS)',
    description: 'Managed firewall, SIEM, endpoint security, and vulnerability scanning services.',
    packages: []
  },
  'security-testing-services': {
    icon: UserCheck,
    title: 'Security Testing Services',
    description: 'Continuous automated testing, bug bounty program management, and configuration audits.',
    packages: []
  },
  'sector-specific-security': {
    icon: Landmark,
    title: 'Sector-Specific Security',
    description: 'Tailored security solutions for financial services, healthcare, government, and critical infrastructure.',
    packages: []
  },
  'supply-chain-security': {
    icon: Link,
    title: 'Supply Chain Security',
    description: 'Manage software supply chain risks (SBOM), vendor security, and third-party monitoring.',
    packages: []
  },
  'security-research': {
    icon: Microscope,
    title: 'Security Research & Development',
    description: 'Custom threat intelligence, bespoke security tool development, and emerging threat analysis.',
    packages: []
  },
  'blockchain-security': {
    icon: Package,
    title: 'Blockchain & Cryptocurrency Security',
    description: 'Secure your decentralized applications with smart contract audits, wallet assessments, and DeFi risk management.',
    packages: []
  }
};
