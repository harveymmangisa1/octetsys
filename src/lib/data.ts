import { 
  Server, Shield, Headset, GraduationCap, Code, FileCode, Camera, BrainCircuit,
  Lock, Activity, Users, Cloud, Scan, Search, Building, Landmark, Microscope,
  FileLock, BotIcon, Factory, Skull, UserCheck, TestTube, Link, Beaker,
  ShieldQuestion, Package, Briefcase
} from 'lucide-react';
import React from 'react';
import { LucideProps } from 'lucide-react';

export interface IPackage {
  name: string;
  price: number;
  period: string;
  description: string;
  features: { text: string; included: boolean }[];
  popular: boolean;
  cta?: string;
}

export interface IFeature {
  icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
  text: string;
}

export interface IMetric {
  value: string;
  label: string;
}

export interface IService {
  icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
  title: string;
  description: string;
  image?: string;
  content?: string;
  packages: IPackage[];
  badge?: string;
  subtitle?: string;
  features?: IFeature[];
  metrics?: IMetric[];
}

export interface IServiceData {
  [key: string]: IService;
}

export const serviceData: IServiceData = {
    'soc-services': {
        icon: Activity,
        title: 'SOC Services',
        description: '24/7 security monitoring, threat intelligence, and incident response to protect your organization around the clock.',
        image: '/placeholder-images/soc-services.jpg',
        content: `
### Proactive Defense with 24/7 SOC Services

Our Security Operations Center (SOC) services provide continuous monitoring and rapid response to cyber threats, ensuring your organization is protected around the clock. We combine advanced technology with expert human analysis to detect, analyze, and respond to security incidents effectively.

#### Key Features:
*   **24/7 Monitoring:** Constant surveillance of your network, endpoints, and cloud environments.
*   **Threat Intelligence:** Leveraging up-to-date global threat intelligence to anticipate and neutralize emerging threats.
*   **Incident Response:** Swift and decisive action to contain breaches, eradicate threats, and restore normal operations.
*   **Vulnerability Management:** Proactive identification and remediation of security weaknesses.
*   **Compliance Reporting:** Detailed reports to help you meet regulatory requirements.

Our SOC team acts as an extension of your own, providing peace of mind and robust protection against the ever-evolving threat landscape.
`,
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
        image: '/placeholder-images/mdr.jpg',
        content: `
### Proactive Threat Hunting with Managed Detection & Response (MDR)

Our MDR services go beyond traditional security, offering proactive threat hunting, advanced detection capabilities, and rapid response to sophisticated cyberattacks. We integrate Endpoint Detection and Response (EDR), Network Detection and Response (NDR), and Extended Detection and Response (XDR) to provide a holistic view of your security posture.

#### Our MDR Approach:
*   **24/7 Threat Hunting:** Our experts actively search for hidden threats and anomalies within your environment.
*   **Advanced Analytics:** Utilizing AI and machine learning to identify complex attack patterns and reduce false positives.
*   **Automated Response:** Implementing automated playbooks to quickly contain and neutralize threats.
*   **Forensic Investigation:** In-depth analysis of security incidents to understand the root cause and prevent future occurrences.
*   **Expert Guidance:** Providing actionable recommendations to improve your overall security posture.

With MDR, you gain a dedicated team of security experts working tirelessly to protect your assets and minimize the impact of cyber threats.
`,
        packages: []
    },
    'identity-access-management': {
        icon: Users,
        title: 'Identity & Access Management',
        description: 'Secure your organization with PAM, MFA, SSO, and Zero Trust architecture implementation.',
        image: '/placeholder-images/iam.jpg',
        content: `
### Robust Security with Identity & Access Management (IAM)

Identity and Access Management (IAM) is critical for controlling who has access to what resources within your organization. Our IAM services help you implement strong authentication and authorization policies, reducing the risk of unauthorized access and data breaches.

#### Our IAM Solutions:
*   **Privileged Access Management (PAM):** Securing and monitoring accounts with elevated privileges.
*   **Multi-Factor Authentication (MFA):** Adding an extra layer of security beyond just passwords.
*   **Single Sign-On (SSO):** Streamlining user access to multiple applications with a single set of credentials.
*   **Zero Trust Architecture:** Implementing a "never trust, always verify" approach to security.
*   **Identity Governance:** Ensuring compliance with policies and auditing user access.

By establishing a strong IAM framework, we help you enhance security, improve operational efficiency, and meet compliance requirements.
`,
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
    },
    'security-audits': {
        icon: TestTube,
        title: 'Security Audits',
        description: 'Comprehensive security audits to identify vulnerabilities and ensure compliance.',
        image: '/placeholder-images/security-audits.jpg',
        content: `
### Comprehensive Security Audits for Robust Protection

Our security audit services provide an in-depth analysis of your systems, applications, and networks to identify vulnerabilities and ensure compliance with industry standards. We help you understand your security posture and provide actionable recommendations to mitigate risks.

#### Our Audit Process:
*   **Scope Definition:** Working with you to define the scope of the audit, including systems, applications, and data.
*   **Vulnerability Assessment:** Utilizing automated tools and manual techniques to identify security weaknesses.
*   **Penetration Testing:** Simulating real-world attacks to test the effectiveness of your security controls.
*   **Compliance Review:** Assessing your adherence to regulatory requirements such as GDPR, HIPAA, and PCI-DSS.
*   **Detailed Reporting:** Providing a comprehensive report with findings, risk levels, and practical recommendations.
*   **Remediation Support:** Guiding you through the remediation process to address identified vulnerabilities.

Regular security audits are essential for maintaining a strong security posture and protecting your organization from evolving cyber threats.
`,
        packages: [
            { name: 'Basic Audit', price: 2000, period: 'one-time', description: 'Fundamental vulnerability scan and report.', features: [{ text: 'Automated Vulnerability Scan', included: true }, { text: 'Basic Report', included: true }, { text: 'Executive Summary', included: true }], popular: false },
            { name: 'Advanced Audit', price: 7500, period: 'one-time', description: 'In-depth penetration testing and detailed analysis.', features: [{ text: 'Manual Penetration Testing', included: true }, { text: 'Detailed Technical Report', included: true }, { text: 'Remediation Recommendations', included: true }, { text: 'Post-Audit Support', included: true }], popular: true }
        ]
    }
};