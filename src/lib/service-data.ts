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
  // New optional fields to power detail pages
  category?: string;
  highlights?: string[];
  overview?: string;
  benefits?: string[];
  methodology?: string[];
  deliverables?: string[];
  outcomes?: string[];
  complianceAlignment?: string[];
  pricing?: { tier: string; summary: string; startingAt?: string }[];
  faqs?: { q: string; a: string }[];
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
        category: 'Core Security',
        highlights: [
          '24/7 monitoring and response',
          'MITRE ATT&CK-informed playbooks',
          'Executive-ready reporting & SLAs'
        ],
        overview: 'Our SOC delivers continuous detection and response with human-led investigation, automation, and intelligence fusion. We integrate with your SIEM/XDR and tools to provide triage, containment and improvement cycles.',
        benefits: [
          'Reduced MTTD/MTTR with 24/7 triage and response',
          'Threat hunting and incident investigation included',
          'Coverage across endpoints, network and cloud',
          'Board-ready weekly and monthly reports'
        ],
        methodology: [
          'Onboarding & Use-Case Mapping',
          'Integrations & Data Onboarding (SIEM/XDR/CSPM)',
          'Detection Engineering & Runbooks',
          '24/7 Monitoring, Triage, Response, Review'
        ],
        deliverables: [
          'Runbooks & Detection Catalog',
          'Incident Reports and Postmortems',
          'Threat Intel Briefings',
          'Weekly/Monthly KPI & Trends'
        ],
        outcomes: [
          'Measured reduction in dwell time',
          'Higher detection fidelity and lower false positives',
          'Audit-ready evidence trails'
        ],
        complianceAlignment: ['NIST CSF, ISO 27001', 'CIS Controls v8', 'MITRE ATT&CK'],
        pricing: [
          { tier: 'Foundation', summary: 'Core monitoring & alerting', startingAt: 'From $3,000/mo' },
          { tier: 'Managed', summary: 'Co-managed SOC with SLAs', startingAt: 'From $7,000/mo' },
          { tier: 'Enterprise', summary: 'Custom 24/7 SOC-as-a-Service', startingAt: 'Custom Quote' }
        ],
        faqs: [
          { q: 'Do you integrate with our current SIEM/XDR?', a: 'Yes. We integrate with common stacks and can operate bring-your-own-license models.' },
          { q: 'What response SLAs do you offer?', a: 'Typical triage within 15 minutes and containment guidance within agreed windows.' }
        ],
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
        category: 'Core Security',
        highlights: ['24/7 eyes-on-glass', 'ATT&CK-informed hunting', '15-min triage SLA'],
        overview: 'MDR that pairs expert analysts with automation to detect, triage, and contain threats quickly across endpoints, network, and cloud.',
        benefits: ['Reduced MTTD/MTTR', 'Lower false positives', 'Continuous threat hunting'],
        methodology: ['Deploy & Integrate EDR/XDR', 'Tune detections', 'Hunt, Triage, Respond', 'Report & Improve'],
        deliverables: ['Runbooks', 'Incident Reports', 'Hunting Findings', 'Weekly Trends'],
        outcomes: ['Containment within SLA', 'Improved detection coverage'],
        complianceAlignment: ['NIST CSF', 'MITRE ATT&CK'],
        pricing: [
          { tier: 'Foundation', summary: 'Core MDR coverage', startingAt: 'From $2,500/mo' },
          { tier: 'Managed', summary: '24/7 MDR with SLAs', startingAt: 'From $5,000/mo' }
        ],
        faqs: [{ q: 'Do you replace our SOC?', a: 'We can augment or operate co-managed with your SOC.' }],
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
        packages: [
            { 
                name: 'Essential MDR', 
                price: 2500, 
                period: 'per month', 
                description: 'Core endpoint detection and response with 24/7 monitoring.', 
                features: [
                    { text: '24/7 EDR Monitoring', included: true }, 
                    { text: 'Automated Threat Detection', included: true }, 
                    { text: 'Basic Incident Response', included: true }, 
                    { text: 'Monthly Reporting', included: true },
                    { text: 'Advanced Threat Hunting', included: false }, 
                    { text: 'Dedicated Analyst', included: false }
                ], 
                popular: false 
            },
            { 
                name: 'Advanced MDR', 
                price: 5000, 
                period: 'per month', 
                description: 'Comprehensive MDR with network detection and proactive hunting.', 
                features: [
                    { text: 'All Essential features', included: true }, 
                    { text: 'Network Detection & Response', included: true }, 
                    { text: 'Proactive Threat Hunting', included: true }, 
                    { text: 'Rapid Response SLA (15 min)', included: true },
                    { text: 'Weekly Intelligence Reports', included: true },
                    { text: 'Dedicated Security Analyst', included: false }
                ], 
                popular: true 
            },
            { 
                name: 'Enterprise MDR', 
                price: 12000, 
                period: 'per month', 
                description: 'Full-spectrum MDR with XDR and dedicated analyst team.', 
                features: [
                    { text: 'All Advanced features', included: true }, 
                    { text: 'Extended Detection & Response (XDR)', included: true }, 
                    { text: 'Dedicated Analyst Team', included: true }, 
                    { text: 'Custom Integration Support', included: true },
                    { text: 'Executive Briefings', included: true },
                    { text: 'Red Team Exercises', included: true }
                ], 
                popular: false 
            }
        ]
    },
    'identity-access-management': {
        icon: Users,
        title: 'Identity & Access Management',
        description: 'Secure your organization with PAM, MFA, SSO, and Zero Trust architecture implementation.',
        image: '/placeholder-images/iam.jpg',
        category: 'Core Security',
        highlights: ['Zero Trust-first', 'Lifecycle automation', 'Least privilege by design'],
        overview: 'Identity-first security with modern IAM patterns: SSO/MFA, PAM, IGA and JML automation across cloud and on-prem.',
        benefits: ['Reduced credential abuse risk', 'Faster onboarding/offboarding', 'Audit-ready access trails'],
        methodology: ['Discovery & Role Modeling', 'SSO/MFA rollout', 'IGA automation', 'PAM hardening'],
        deliverables: ['Access control blueprints', 'Role/Policy catalog', 'Automation playbooks'],
        outcomes: ['Reduced standing privilege', 'Higher access accuracy'],
        complianceAlignment: ['NIST 800-63', 'ISO 27001 A.9'],
        pricing: [{ tier: 'Foundation', summary: 'SSO/MFA baseline', startingAt: 'From $3,000' }, { tier: 'Managed', summary: 'IGA & PAM with automation', startingAt: 'From $8,000/mo' }],
        faqs: [{ q: 'Can you integrate with HR systems?', a: 'Yes, to drive lifecycle automation and JML flows.' }],
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
        packages: [
            { 
                name: 'SSO & MFA Foundation', 
                price: 3000, 
                period: 'one-time setup', 
                description: 'Implement single sign-on and multi-factor authentication across your organization.', 
                features: [
                    { text: 'SSO Implementation (5 apps)', included: true }, 
                    { text: 'MFA Deployment', included: true }, 
                    { text: 'User Training', included: true }, 
                    { text: 'Basic Policy Setup', included: true },
                    { text: 'Advanced SSO Integration', included: false }, 
                    { text: 'Identity Governance', included: false }
                ], 
                popular: false 
            },
            { 
                name: 'Identity Governance Suite', 
                price: 8000, 
                period: 'per month', 
                description: 'Complete IAM with governance, lifecycle management, and privileged access.', 
                features: [
                    { text: 'All Foundation features', included: true }, 
                    { text: 'Identity Governance & Administration', included: true }, 
                    { text: 'Privileged Access Management', included: true }, 
                    { text: 'Automated Lifecycle Management', included: true },
                    { text: 'HR System Integration', included: true },
                    { text: 'Advanced Analytics & Reporting', included: true }
                ], 
                popular: true 
            },
            { 
                name: 'Zero Trust Enterprise', 
                price: 15000, 
                period: 'per month', 
                description: 'Comprehensive Zero Trust architecture with advanced analytics.', 
                features: [
                    { text: 'All Governance features', included: true }, 
                    { text: 'Zero Trust Architecture Design', included: true }, 
                    { text: 'Behavioral Analytics', included: true }, 
                    { text: 'Continuous Authentication', included: true },
                    { text: 'Advanced Threat Detection', included: true },
                    { text: '24/7 IAM Support', included: true }
                ], 
                popular: false 
            }
        ]
    },
    'cloud-security': {
        icon: Cloud,
        title: 'Cloud Security Services',
        description: 'Secure your cloud environments (AWS, Azure, GCP) with CSPM, workload protection, and DevSecOps integration.',
        category: 'Advanced Security',
        highlights: ['Secure landing zones', 'Policy-as-code', 'CSPM & workload hardening'],
        overview: 'Cloud security engineered with guardrails: landing zones, identity-first controls, CSPM baselines, and DevSecOps integrations.',
        benefits: ['Fewer misconfigurations', 'Faster compliant deployments', 'Shift-left security'],
        methodology: ['Assess & Baseline', 'Landing Zone Design', 'Guardrails & Policies', 'CSPM & CWPP rollout'],
        deliverables: ['Landing zone templates', 'Policy libraries', 'Hardened baselines'],
        outcomes: ['Reduced critical findings', 'Automated remediation pipelines'],
        complianceAlignment: ['CIS Benchmarks', 'NIST CSF'],
        pricing: [{ tier: 'Foundation', summary: 'Cloud baseline hardening', startingAt: 'From $4,000' }, { tier: 'Managed', summary: 'Guardrails & CSPM ops', startingAt: 'From $7,000/mo' }],
        faqs: [{ q: 'Do you support multi-cloud?', a: 'Yes, AWS/Azure/GCP with common guardrail patterns.' }],
        packages: [
            { 
                name: 'Cloud Foundation', 
                price: 4000, 
                period: 'one-time setup', 
                description: 'Secure cloud landing zone setup with baseline security controls.', 
                features: [
                    { text: 'Landing Zone Design', included: true }, 
                    { text: 'CIS Benchmark Hardening', included: true }, 
                    { text: 'Identity & Access Setup', included: true }, 
                    { text: 'Network Security Configuration', included: true },
                    { text: 'Continuous Monitoring', included: false }, 
                    { text: 'DevSecOps Integration', included: false }
                ], 
                popular: false 
            },
            { 
                name: 'Cloud Security Posture Management', 
                price: 7000, 
                period: 'per month', 
                description: 'Ongoing CSPM with automated remediation and compliance monitoring.', 
                features: [
                    { text: 'All Foundation features', included: true }, 
                    { text: '24/7 CSPM Monitoring', included: true }, 
                    { text: 'Automated Remediation', included: true }, 
                    { text: 'Compliance Reporting', included: true },
                    { text: 'Cloud Workload Protection', included: true },
                    { text: 'DevSecOps Pipeline Integration', included: false }
                ], 
                popular: true 
            },
            { 
                name: 'Enterprise Cloud Security', 
                price: 12000, 
                period: 'per month', 
                description: 'Full-spectrum cloud security with advanced threat protection.', 
                features: [
                    { text: 'All CSPM features', included: true }, 
                    { text: 'Advanced Threat Protection', included: true }, 
                    { text: 'Multi-Cloud Management', included: true }, 
                    { text: 'DevSecOps Full Integration', included: true },
                    { text: 'Cloud-Native Security', included: true },
                    { text: 'Dedicated Cloud Security Team', included: true }
                ], 
                popular: false 
            }
        ]
    },
    'application-security': {
        icon: FileCode,
        title: 'Application Security',
        description: 'Protect your applications with secure code review, WAF, API security, and mobile app testing.',
        category: 'Advanced Security',
        highlights: ['SDLC security', 'SAST/DAST/IAST', 'Threat modeling & SBOM'],
        overview: 'Developer-first AppSec: tooling, training, and governance embedded into your SDLC and CI/CD.',
        benefits: ['Fewer vulns in prod', 'Faster developer feedback', 'Supply-chain assurance'],
        methodology: ['Threat modeling', 'Toolchain integration', 'Policy gates in CI/CD', 'Secure coding enablement'],
        deliverables: ['Threat models', 'Findings backlog', 'AppSec playbooks'],
        outcomes: ['Vuln reduction rate', 'Lead-time-to-remediation improvements'],
        complianceAlignment: ['OWASP ASVS/SAMM'],
        pricing: [{ tier: 'Foundation', summary: 'SAST/DAST baseline', startingAt: 'From $3,500' }, { tier: 'Managed', summary: 'AppSec program with training', startingAt: 'From $8,000/mo' }],
        faqs: [{ q: 'Do you offer secure SDLC training?', a: 'Yes, for developers and architects.' }],
        packages: [
            { 
                name: 'AppSec Foundation', 
                price: 3500, 
                period: 'one-time setup', 
                description: 'Static and dynamic analysis tools setup with basic security testing.', 
                features: [
                    { text: 'SAST Tool Integration', included: true }, 
                    { text: 'DAST Tool Setup', included: true }, 
                    { text: 'Basic Security Testing', included: true }, 
                    { text: 'Developer Guidelines', included: true },
                    { text: 'Advanced Threat Modeling', included: false }, 
                    { text: 'CI/CD Security Gates', included: false }
                ], 
                popular: false 
            },
            { 
                name: 'Secure SDLC Program', 
                price: 8000, 
                period: 'per month', 
                description: 'Comprehensive AppSec program with training and automated security testing.', 
                features: [
                    { text: 'All Foundation features', included: true }, 
                    { text: 'Threat Modeling Workshops', included: true }, 
                    { text: 'CI/CD Security Gates', included: true }, 
                    { text: 'Developer Security Training', included: true },
                    { text: 'API Security Testing', included: true },
                    { text: 'Mobile App Security', included: false }
                ], 
                popular: true 
            },
            { 
                name: 'Enterprise AppSec', 
                price: 15000, 
                period: 'per month', 
                description: 'Full-spectrum application security with advanced protection and monitoring.', 
                features: [
                    { text: 'All SDLC features', included: true }, 
                    { text: 'Interactive Application Security Testing (IAST)', included: true }, 
                    { text: 'Runtime Application Self-Protection (RASP)', included: true }, 
                    { text: 'Mobile App Security', included: true },
                    { text: 'Software Supply Chain Security', included: true },
                    { text: 'Dedicated AppSec Team', included: true }
                ], 
                popular: false 
            }
        ]
    },
    'threat-intelligence': {
        icon: Search,
        title: 'Threat Intelligence & Hunting',
        description: 'Proactive defense with CTI, dark web monitoring, brand protection, and threat actor profiling.',
        category: 'Advanced Security',
        highlights: ['Real-time threat feeds', 'Dark web monitoring', 'Actor profiling & TTPs'],
        overview: 'Strategic threat intelligence combining automated feeds with expert analysis to anticipate and neutralize emerging threats.',
        benefits: ['Early threat warnings', 'Contextualized intelligence', 'Proactive defense posture'],
        methodology: ['Feed aggregation', 'Analysis & enrichment', 'Threat hunting', 'Executive briefings'],
        deliverables: ['Threat intel reports', 'IOC feeds', 'Actor profiles', 'Hunting results'],
        outcomes: ['Reduced surprise attacks', 'Faster threat detection', 'Improved incident response'],
        complianceAlignment: ['NIST CSF', 'MITRE ATT&CK'],
        pricing: [{ tier: 'Foundation', summary: 'Basic threat feeds', startingAt: 'From $2,000/mo' }, { tier: 'Managed', summary: 'Full intel program', startingAt: 'From $6,000/mo' }],
        faqs: [{ q: 'How current is your threat intel?', a: 'We provide real-time feeds with 24/7 analysis and updates.' }],
        packages: [
            { 
                name: 'Threat Feeds Basic', 
                price: 2000, 
                period: 'per month', 
                description: 'Access to curated threat intelligence feeds and basic indicators.', 
                features: [
                    { text: 'IOC Feeds', included: true }, 
                    { text: 'Vulnerability Intelligence', included: true }, 
                    { text: 'Basic Threat Reports', included: true }, 
                    { text: 'Email Alerts', included: true },
                    { text: 'Dark Web Monitoring', included: false }, 
                    { text: 'Custom Intelligence', included: false }
                ], 
                popular: false 
            },
            { 
                name: 'Strategic Intelligence', 
                price: 6000, 
                period: 'per month', 
                description: 'Comprehensive threat intelligence with analysis and hunting support.', 
                features: [
                    { text: 'All Basic features', included: true }, 
                    { text: 'Dark Web Monitoring', included: true }, 
                    { text: 'Threat Actor Profiling', included: true }, 
                    { text: 'Custom Intelligence Reports', included: true },
                    { text: 'Threat Hunting Support', included: true },
                    { text: 'Executive Briefings', included: false }
                ], 
                popular: true 
            },
            { 
                name: 'Enterprise Intelligence', 
                price: 12000, 
                period: 'per month', 
                description: 'Full-spectrum intelligence with dedicated analysts and custom research.', 
                features: [
                    { text: 'All Strategic features', included: true }, 
                    { text: 'Dedicated Intelligence Analysts', included: true }, 
                    { text: 'Custom Research Projects', included: true }, 
                    { text: 'Brand Protection Monitoring', included: true },
                    { text: 'Competitive Threat Intelligence', included: true },
                    { text: '24/7 Intelligence Operations', included: true }
                ], 
                popular: false 
            }
        ]
    },
    'security-architecture': {
        icon: Building,
        title: 'Security Architecture & Engineering',
        description: 'Design robust security blueprints, network segmentation, and secure infrastructure for on-prem and hybrid environments.',
        category: 'Consulting & Managed',
        highlights: ['Zero Trust design', 'Network segmentation', 'Secure infrastructure'],
        overview: 'Strategic security architecture design that aligns with business objectives and regulatory requirements.',
        benefits: ['Scalable security posture', 'Reduced complexity', 'Future-proof infrastructure'],
        methodology: ['Assessment & discovery', 'Architecture design', 'Implementation planning', 'Validation'],
        deliverables: ['Security blueprints', 'Implementation roadmaps', 'Policy frameworks'],
        outcomes: ['Aligned security investments', 'Improved risk posture', 'Operational efficiency'],
        complianceAlignment: ['SABSA', 'TOGAF', 'NIST CSF'],
        pricing: [{ tier: 'Foundation', summary: 'Architecture assessment', startingAt: 'From $8,000' }, { tier: 'Managed', summary: 'Full design & implementation', startingAt: 'From $15,000' }],
        faqs: [{ q: 'Do you support hybrid cloud architectures?', a: 'Yes, we design for on-prem, cloud, and hybrid environments.' }],
        packages: [
            { 
                name: 'Security Assessment', 
                price: 8000, 
                period: 'one-time', 
                description: 'Comprehensive assessment of current security architecture and gaps.', 
                features: [
                    { text: 'Current State Analysis', included: true }, 
                    { text: 'Gap Assessment', included: true }, 
                    { text: 'Risk Prioritization', included: true }, 
                    { text: 'Recommendations Report', included: true },
                    { text: 'Architecture Design', included: false }, 
                    { text: 'Implementation Support', included: false }
                ], 
                popular: false 
            },
            { 
                name: 'Architecture Design', 
                price: 15000, 
                period: 'one-time', 
                description: 'Complete security architecture design with implementation roadmap.', 
                features: [
                    { text: 'All Assessment features', included: true }, 
                    { text: 'Security Architecture Design', included: true }, 
                    { text: 'Network Segmentation Plan', included: true }, 
                    { text: 'Implementation Roadmap', included: true },
                    { text: 'Policy Framework Design', included: true },
                    { text: 'Implementation Oversight', included: false }
                ], 
                popular: true 
            },
            { 
                name: 'Enterprise Architecture', 
                price: 25000, 
                period: 'one-time', 
                description: 'Full enterprise security architecture with implementation support.', 
                features: [
                    { text: 'All Design features', included: true }, 
                    { text: 'Zero Trust Architecture', included: true }, 
                    { text: 'Cloud Security Architecture', included: true }, 
                    { text: 'Implementation Project Management', included: true },
                    { text: 'Staff Training & Knowledge Transfer', included: true },
                    { text: 'Post-Implementation Review', included: true }
                ], 
                popular: false 
            }
        ]
    },
    'compliance-management': {
        icon: Landmark,
        title: 'Compliance Management',
        description: 'Achieve and maintain compliance with GDPR, HIPAA, PCI-DSS, SOC 2, and ISO 27001.',
        category: 'Consulting & Managed',
        highlights: ['Multi-framework support', 'Audit readiness', 'Continuous compliance'],
        overview: 'Comprehensive compliance management covering gap analysis, remediation, and ongoing monitoring.',
        benefits: ['Audit success', 'Reduced compliance costs', 'Automated evidence collection'],
        methodology: ['Gap analysis', 'Remediation planning', 'Implementation', 'Monitoring'],
        deliverables: ['Compliance reports', 'Evidence packages', 'Policy templates'],
        outcomes: ['Successful audits', 'Continuous compliance', 'Reduced risk'],
        complianceAlignment: ['ISO 27001', 'SOC 2', 'PCI DSS', 'HIPAA', 'GDPR'],
        pricing: [{ tier: 'Foundation', summary: 'Gap analysis', startingAt: 'From $5,000' }, { tier: 'Managed', summary: 'Full compliance program', startingAt: 'From $10,000/mo' }],
        faqs: [{ q: 'Which frameworks do you support?', a: 'We support major frameworks including ISO 27001, SOC 2, PCI DSS, HIPAA, and GDPR.' }],
        packages: [
            { 
                name: 'Compliance Gap Analysis', 
                price: 5000, 
                period: 'one-time', 
                description: 'Detailed assessment against your chosen compliance framework.', 
                features: [
                    { text: 'Gap Analysis Report', included: true }, 
                    { text: 'Risk Assessment', included: true }, 
                    { text: 'Remediation Roadmap', included: true }, 
                    { text: 'Evidence Inventory', included: true },
                    { text: 'Policy Templates', included: false }, 
                    { text: 'Audit Support', included: false }
                ], 
                popular: false 
            },
            { 
                name: 'Compliance Implementation', 
                price: 10000, 
                period: 'per month', 
                description: 'Full compliance program implementation with ongoing monitoring.', 
                features: [
                    { text: 'All Gap Analysis features', included: true }, 
                    { text: 'Policy & Procedure Development', included: true }, 
                    { text: 'Control Implementation', included: true }, 
                    { text: 'Continuous Monitoring', included: true },
                    { text: 'Evidence Collection Automation', included: true },
                    { text: 'Audit Preparation Support', included: true }
                ], 
                popular: true 
            },
            { 
                name: 'Enterprise Compliance', 
                price: 20000, 
                period: 'per month', 
                description: 'Multi-framework compliance management with dedicated support.', 
                features: [
                    { text: 'All Implementation features', included: true }, 
                    { text: 'Multi-Framework Management', included: true }, 
                    { text: 'Dedicated Compliance Manager', included: true }, 
                    { text: 'Third-Party Risk Management', included: true },
                    { text: 'Board Reporting', included: true },
                    { text: '24/7 Compliance Support', included: true }
                ], 
                popular: false 
            }
        ]
    },
    'risk-management': {
        icon: ShieldQuestion,
        title: 'Risk Management Services',
        description: 'Comprehensive risk assessments, third-party risk management, and risk quantification.',
        category: 'Consulting & Managed',
        highlights: ['Quantitative analysis', 'Third-party risk', 'Risk-based decisions'],
        overview: 'Strategic risk management combining qualitative and quantitative approaches to inform business decisions.',
        benefits: ['Informed risk decisions', 'Reduced uncertainty', 'Better resource allocation'],
        methodology: ['Risk identification', 'Analysis & evaluation', 'Treatment planning', 'Monitoring'],
        deliverables: ['Risk registers', 'Risk reports', 'Treatment plans'],
        outcomes: ['Reduced risk exposure', 'Improved governance', 'Strategic alignment'],
        complianceAlignment: ['ISO 31000', 'COSO', 'NIST RMF'],
        pricing: [{ tier: 'Foundation', summary: 'Risk assessment', startingAt: 'From $6,000' }, { tier: 'Managed', summary: 'Full risk program', startingAt: 'From $12,000/mo' }],
        faqs: [{ q: 'Do you use quantitative risk analysis?', a: 'Yes, we combine both qualitative and quantitative methods including FAIR model.' }],
        packages: [
            { 
                name: 'Risk Assessment', 
                price: 6000, 
                period: 'one-time', 
                description: 'Comprehensive risk assessment with qualitative and quantitative analysis.', 
                features: [
                    { text: 'Risk Identification Workshop', included: true }, 
                    { text: 'Qualitative Risk Analysis', included: true }, 
                    { text: 'Risk Register Development', included: true }, 
                    { text: 'Risk Treatment Plan', included: true },
                    { text: 'Quantitative Analysis', included: false }, 
                    { text: 'Third-Party Risk Assessment', included: false }
                ], 
                popular: false 
            },
            { 
                name: 'Advanced Risk Management', 
                price: 12000, 
                period: 'per month', 
                description: 'Comprehensive risk program with quantitative analysis and third-party management.', 
                features: [
                    { text: 'All Assessment features', included: true }, 
                    { text: 'Quantitative Risk Analysis (FAIR)', included: true }, 
                    { text: 'Third-Party Risk Management', included: true }, 
                    { text: 'Risk Monitoring & Reporting', included: true },
                    { text: 'Risk Appetite Framework', included: true },
                    { text: 'Board Risk Reporting', included: false }
                ], 
                popular: true 
            },
            { 
                name: 'Enterprise Risk Program', 
                price: 20000, 
                period: 'per month', 
                description: 'Full enterprise risk management with dedicated risk team.', 
                features: [
                    { text: 'All Advanced features', included: true }, 
                    { text: 'Enterprise Risk Framework', included: true }, 
                    { text: 'Dedicated Risk Analyst', included: true }, 
                    { text: 'Predictive Risk Analytics', included: true },
                    { text: 'Board & Executive Reporting', included: true },
                    { text: 'Risk Culture Development', included: true }
                ], 
                popular: false 
            }
        ]
    },
    'data-protection-privacy': {
        icon: FileLock,
        title: 'Data Protection & Privacy',
        description: 'Implement DLP, data classification, and encryption to protect your sensitive information.',
        category: 'Advanced Security',
        highlights: ['Data discovery', 'DLP implementation', 'Privacy by design'],
        overview: 'Comprehensive data protection combining technology controls with privacy program management.',
        benefits: ['Reduced data breaches', 'Privacy compliance', 'Data governance'],
        methodology: ['Data discovery', 'Classification', 'Control implementation', 'Monitoring'],
        deliverables: ['Data inventory', 'DLP policies', 'Privacy frameworks'],
        outcomes: ['Protected sensitive data', 'Privacy compliance', 'Reduced breach risk'],
        complianceAlignment: ['GDPR', 'CCPA', 'HIPAA', 'PIPL'],
        pricing: [{ tier: 'Foundation', summary: 'Data discovery & classification', startingAt: 'From $4,000' }, { tier: 'Managed', summary: 'Full DLP program', startingAt: 'From $9,000/mo' }],
        faqs: [{ q: 'Can you help with GDPR compliance?', a: 'Yes, we provide full GDPR compliance support including DPA and DPIA.' }],
        packages: [
            { 
                name: 'Data Discovery', 
                price: 4000, 
                period: 'one-time', 
                description: 'Identify and classify sensitive data across your organization.', 
                features: [
                    { text: 'Data Discovery & Mapping', included: true }, 
                    { text: 'Data Classification Framework', included: true }, 
                    { text: 'Sensitive Data Inventory', included: true }, 
                    { text: 'Data Flow Analysis', included: true },
                    { text: 'DLP Implementation', included: false }, 
                    { text: 'Privacy Program Setup', included: false }
                ], 
                popular: false 
            },
            { 
                name: 'Data Protection Program', 
                price: 9000, 
                period: 'per month', 
                description: 'Comprehensive data protection with DLP and privacy management.', 
                features: [
                    { text: 'All Discovery features', included: true }, 
                    { text: 'DLP Implementation', included: true }, 
                    { text: 'Encryption Strategy', included: true }, 
                    { text: 'Privacy Program Management', included: true },
                    { text: 'Data Subject Request Handling', included: true },
                    { text: 'Privacy Impact Assessments', included: false }
                ], 
                popular: true 
            },
            { 
                name: 'Enterprise Data Protection', 
                price: 16000, 
                period: 'per month', 
                description: 'Full-spectrum data protection with advanced analytics and automation.', 
                features: [
                    { text: 'All Program features', included: true }, 
                    { text: 'Advanced DLP Analytics', included: true }, 
                    { text: 'Automated Data Governance', included: true }, 
                    { text: 'Cross-Border Data Management', included: true },
                    { text: 'Privacy by Design Consulting', included: true },
                    { text: 'Dedicated Data Protection Officer', included: true }
                ], 
                popular: false 
            }
        ]
    },
    'ai-security': {
        icon: BotIcon,
        title: 'Artificial Intelligence Security',
        description: 'Secure your AI/ML models, implement GenAI security policies, and leverage AI for threat detection.',
        category: 'Advanced Security',
        highlights: ['ML model security', 'GenAI governance', 'AI-powered defense'],
        overview: 'Comprehensive AI security covering model protection, data privacy, and responsible AI implementation.',
        benefits: ['Secure AI deployments', 'Regulatory compliance', 'Enhanced threat detection'],
        methodology: ['Model assessment', 'Security controls', 'Monitoring', 'Governance'],
        deliverables: ['AI security policies', 'Model protection', 'Monitoring frameworks'],
        outcomes: ['Secure AI systems', 'Compliance with AI regulations', 'Improved detection'],
        complianceAlignment: ['NIST AI RMF', 'EU AI Act', 'ISO/IEC 23894'],
        pricing: [{ tier: 'Foundation', summary: 'AI security assessment', startingAt: 'From $7,000' }, { tier: 'Managed', summary: 'AI security program', startingAt: 'From $12,000/mo' }],
        faqs: [{ q: 'Do you cover GenAI security?', a: 'Yes, we specialize in securing generative AI implementations and preventing prompt injection.' }],
        packages: [
            { 
                name: 'AI Security Assessment', 
                price: 7000, 
                period: 'one-time', 
                description: 'Comprehensive security assessment of AI/ML models and systems.', 
                features: [
                    { text: 'Model Vulnerability Assessment', included: true }, 
                    { text: 'Data Privacy Review', included: true }, 
                    { text: 'Adversarial Attack Testing', included: true }, 
                    { text: 'Security Recommendations', included: true },
                    { text: 'Model Protection Implementation', included: false }, 
                    { text: 'AI Governance Framework', included: false }
                ], 
                popular: false 
            },
            { 
                name: 'AI Security Program', 
                price: 12000, 
                period: 'per month', 
                description: 'Ongoing AI security management with protection and monitoring.', 
                features: [
                    { text: 'All Assessment features', included: true }, 
                    { text: 'Model Protection Implementation', included: true }, 
                    { text: 'AI Security Monitoring', included: true }, 
                    { text: 'GenAI Security Policies', included: true },
                    { text: 'AI Governance Framework', included: true },
                    { text: 'AI Threat Detection', included: false }
                ], 
                popular: true 
            },
            { 
                name: 'Enterprise AI Security', 
                price: 20000, 
                period: 'per month', 
                description: 'Full-spectrum AI security with advanced threat detection and compliance.', 
                features: [
                    { text: 'All Program features', included: true }, 
                    { text: 'AI-Powered Threat Detection', included: true }, 
                    { text: 'Advanced Model Protection', included: true }, 
                    { text: 'Regulatory Compliance Management', included: true },
                    { text: 'AI Red Team Exercises', included: true },
                    { text: 'Dedicated AI Security Team', included: true }
                ], 
                popular: false 
            }
        ]
    },
    'ot-security': {
        icon: Factory,
        title: 'Operational Technology (OT) Security',
        description: 'Protect industrial control systems (ICS), SCADA, and critical infrastructure.',
        category: 'Advanced Security',
        highlights: ['ICS/SCADA protection', 'Critical infrastructure', 'Safety-first security'],
        overview: 'Specialized OT security that protects industrial systems while maintaining operational safety and reliability.',
        benefits: ['Protected critical infrastructure', 'Operational continuity', 'Safety compliance'],
        methodology: ['Asset discovery', 'Risk assessment', 'Segmentation', 'Monitoring'],
        deliverables: ['OT security architecture', 'Incident response plans', 'Compliance reports'],
        outcomes: ['Secure industrial systems', 'Regulatory compliance', 'Reduced disruption risk'],
        complianceAlignment: ['IEC 62443', 'NERC CIP', 'NIST CSF'],
        pricing: [{ tier: 'Foundation', summary: 'OT security assessment', startingAt: 'From $10,000' }, { tier: 'Managed', summary: 'OT security program', startingAt: 'From $15,000/mo' }],
        faqs: [{ q: 'Do you work with legacy OT systems?', a: 'Yes, we specialize in securing legacy OT systems without disrupting operations.' }],
        packages: [
            { 
                name: 'OT Security Assessment', 
                price: 10000, 
                period: 'one-time', 
                description: 'Comprehensive assessment of OT/ICS security posture and risks.', 
                features: [
                    { text: 'OT Asset Discovery', included: true }, 
                    { text: 'Vulnerability Assessment', included: true }, 
                    { text: 'Network Architecture Review', included: true }, 
                    { text: 'Risk Assessment Report', included: true },
                    { text: 'Security Implementation', included: false }, 
                    { text: '24/7 OT Monitoring', included: false }
                ], 
                popular: false 
            },
            { 
                name: 'OT Security Implementation', 
                price: 15000, 
                period: 'per month', 
                description: 'OT security implementation with monitoring and incident response.', 
                features: [
                    { text: 'All Assessment features', included: true }, 
                    { text: 'Network Segmentation', included: true }, 
                    { text: 'Security Controls Implementation', included: true }, 
                    { text: '24/7 OT Security Monitoring', included: true },
                    { text: 'OT Incident Response', included: true },
                    { text: 'Compliance Management', included: false }
                ], 
                popular: true 
            },
            { 
                name: 'Critical Infrastructure Protection', 
                price: 25000, 
                period: 'per month', 
                description: 'Comprehensive critical infrastructure protection with dedicated support.', 
                features: [
                    { text: 'All Implementation features', included: true }, 
                    { text: 'Advanced Threat Detection', included: true }, 
                    { text: 'Physical Security Integration', included: true }, 
                    { text: 'Regulatory Compliance Management', included: true },
                    { text: 'Dedicated OT Security Team', included: true },
                    { text: 'Emergency Response Planning', included: true }
                ], 
                popular: false 
            }
        ]
    },
    'cyber-warfare-defense': {
        icon: Skull,
        title: 'Cyber Warfare & Advanced Threats',
        description: 'Defend against Advanced Persistent Threats (APTs) with Red/Purple team exercises and threat emulation.',
        category: 'Consulting & Managed',
        highlights: ['APT defense', 'Red team exercises', 'Threat emulation'],
        overview: 'Advanced threat defense combining offensive security testing with strategic defense planning.',
        benefits: ['APT preparedness', 'Advanced detection', 'Incident response readiness'],
        methodology: ['Threat intelligence', 'Red team exercises', 'Defense hardening', 'Blue team training'],
        deliverables: ['Threat reports', 'Exercise results', 'Defense improvements'],
        outcomes: ['Enhanced APT defense', 'Improved detection capabilities', 'Response readiness'],
        complianceAlignment: ['NIST CSF', 'MITRE ATT&CK'],
        pricing: [{ tier: 'Foundation', summary: 'Threat assessment', startingAt: 'From $8,000' }, { tier: 'Managed', summary: 'Red team program', startingAt: 'From $15,000/mo' }],
        faqs: [{ q: 'Are your red team exercises safe?', a: 'Yes, all exercises are carefully scoped and monitored to ensure operational safety.' }],
        packages: [
            { 
                name: 'Threat Assessment', 
                price: 8000, 
                period: 'one-time', 
                description: 'Assess your organization\'s readiness against advanced persistent threats.', 
                features: [
                    { text: 'APT Threat Analysis', included: true }, 
                    { text: 'Current State Assessment', included: true }, 
                    { text: 'Threat Intelligence Briefing', included: true }, 
                    { text: 'Defense Recommendations', included: true },
                    { text: 'Red Team Exercise', included: false }, 
                    { text: 'Purple Team Exercise', included: false }
                ], 
                popular: false 
            },
            { 
                name: 'Red Team Engagement', 
                price: 15000, 
                period: 'one-time', 
                description: 'Comprehensive red team exercise to test defenses against advanced threats.', 
                features: [
                    { text: 'All Assessment features', included: true }, 
                    { text: 'Red Team Exercise', included: true }, 
                    { text: 'Advanced Attack Simulation', included: true }, 
                    { text: 'Blue Team Support', included: true },
                    { text: 'Detailed Exercise Report', included: true },
                    { text: 'Defense Improvement Plan', included: false }
                ], 
                popular: true 
            },
            { 
                name: 'Advanced Threat Program', 
                price: 25000, 
                period: 'per month', 
                description: 'Ongoing advanced threat defense with continuous testing and improvement.', 
                features: [
                    { text: 'All Red Team features', included: true }, 
                    { text: 'Purple Team Exercises', included: true }, 
                    { text: 'Continuous Threat Hunting', included: true }, 
                    { text: 'Advanced Detection Implementation', included: true },
                    { text: 'Dedicated Threat Analyst', included: true },
                    { text: 'Custom Threat Emulation', included: true }
                ], 
                popular: false 
            }
        ]
    },
    'security-awareness-training': {
        icon: GraduationCap,
        title: 'Security Awareness & Training',
        description: 'Strengthen your human firewall with executive briefings, phishing simulations, and secure development training.',
        category: 'Consulting & Managed',
        highlights: ['Human firewall', 'Phishing simulations', 'Role-based training'],
        overview: 'Comprehensive security awareness program that transforms your workforce into a strong defense line.',
        benefits: ['Reduced human error', 'Improved security culture', 'Compliance readiness'],
        methodology: ['Assessment', 'Training delivery', 'Simulations', 'Measurement'],
        deliverables: ['Training materials', 'Simulation reports', 'Culture metrics'],
        outcomes: ['Security-aware workforce', 'Reduced phishing success', 'Strong security culture'],
        complianceAlignment: ['ISO 27001', 'PCI DSS', 'HIPAA'],
        pricing: [{ tier: 'Foundation', summary: 'Basic awareness program', startingAt: 'From $3,000' }, { tier: 'Managed', summary: 'Full training program', startingAt: 'From $7,000/mo' }],
        faqs: [{ q: 'Do you customize training for different roles?', a: 'Yes, we provide role-based training for executives, developers, and general staff.' }],
        packages: [
            { 
                name: 'Security Awareness Basics', 
                price: 3000, 
                period: 'one-time', 
                description: 'Essential security awareness training for all employees.', 
                features: [
                    { text: 'Security Awareness Training', included: true }, 
                    { text: 'Phishing Simulation', included: true }, 
                    { text: 'Training Materials', included: true }, 
                    { text: 'Basic Reporting', included: true },
                    { text: 'Advanced Simulations', included: false }, 
                    { text: 'Executive Training', included: false }
                ], 
                popular: false 
            },
            { 
                name: 'Comprehensive Training Program', 
                price: 7000, 
                period: 'per month', 
                description: 'Ongoing security training with advanced simulations and role-based content.', 
                features: [
                    { text: 'All Basic features', included: true }, 
                    { text: 'Advanced Phishing Simulations', included: true }, 
                    { text: 'Role-Based Training', included: true }, 
                    { text: 'Executive Security Briefings', included: true },
                    { text: 'Secure Development Training', included: true },
                    { text: 'Culture Assessment', included: false }
                ], 
                popular: true 
            },
            { 
                name: 'Enterprise Security Culture', 
                price: 12000, 
                period: 'per month', 
                description: 'Full security culture transformation with dedicated support and measurement.', 
                features: [
                    { text: 'All Comprehensive features', included: true }, 
                    { text: 'Security Culture Program', included: true }, 
                    { text: 'Behavioral Analytics', included: true }, 
                    { text: 'Gamification Elements', included: true },
                    { text: 'Dedicated Security Trainer', included: true },
                    { text: 'Culture Metrics Dashboard', included: true }
                ], 
                popular: false 
            }
        ]
    },
    'business-continuity': {
        icon: Shield,
        title: 'Business Continuity & Disaster Recovery',
        description: 'Comprehensive BCP planning, disaster recovery solutions, and resilience testing to ensure operational continuity.',
        category: 'Consulting & Managed',
        highlights: ['BCP development', 'DR solutions', 'Resilience testing'],
        overview: 'Strategic business continuity planning and disaster recovery to ensure critical operations continue during disruptions.',
        benefits: ['Operational resilience', 'Reduced downtime', 'Regulatory compliance'],
        methodology: ['BIA analysis', 'BCP development', 'DR implementation', 'Testing & maintenance'],
        deliverables: ['BCP documentation', 'DR procedures', 'Test reports', 'Recovery time objectives'],
        outcomes: ['Proven recovery capabilities', 'Reduced business impact', 'Stakeholder confidence'],
        complianceAlignment: ['ISO 22301', 'NIST SP 800-34', 'DRII'],
        pricing: [{ tier: 'Foundation', summary: 'BCP assessment', startingAt: 'From $8,000' }, { tier: 'Managed', summary: 'Full BCP/DR program', startingAt: 'From $12,000/mo' }],
        faqs: [{ q: 'Do you conduct actual recovery tests?', a: 'Yes, we conduct both tabletop and full-scale recovery exercises.' }],
        packages: [
            { 
                name: 'BCP Assessment', 
                price: 8000, 
                period: 'one-time', 
                description: 'Comprehensive business continuity assessment and gap analysis.', 
                features: [
                    { text: 'Business Impact Analysis (BIA)', included: true }, 
                    { text: 'Risk Assessment', included: true }, 
                    { text: 'Gap Analysis', included: true }, 
                    { text: 'Recovery Objectives (RTO/RPO)', included: true },
                    { text: 'BCP Documentation', included: false }, 
                    { text: 'DR Implementation', included: false }
                ], 
                popular: false 
            },
            { 
                name: 'BCP Development', 
                price: 12000, 
                period: 'per month', 
                description: 'Full business continuity planning with documentation and testing.', 
                features: [
                    { text: 'All Assessment features', included: true }, 
                    { text: 'BCP Documentation', included: true }, 
                    { text: 'Disaster Recovery Planning', included: true }, 
                    { text: 'Tabletop Exercises', included: true },
                    { text: 'Crisis Management Planning', included: true },
                    { text: 'Full Recovery Testing', included: false }
                ], 
                popular: true 
            },
            { 
                name: 'Enterprise Resilience', 
                price: 20000, 
                period: 'per month', 
                description: 'Comprehensive resilience program with advanced testing and managed services.', 
                features: [
                    { text: 'All Development features', included: true }, 
                    { text: 'Full-Scale Recovery Testing', included: true }, 
                    { text: 'Managed DR Solutions', included: true }, 
                    { text: 'Continuous Monitoring', included: true },
                    { text: 'Dedicated Resilience Team', included: true },
                    { text: 'Advanced Analytics & Reporting', included: true }
                ], 
                popular: false 
            }
        ]
    },
    'digital-forensics': {
        icon: Microscope,
        title: 'Digital Forensics & Incident Response',
        description: 'Expert computer, mobile, and network forensics, malware analysis, and e-discovery support.',
        category: 'Consulting & Managed',
        highlights: ['24/7 IR response', 'Forensic investigations', 'Legal support'],
        overview: 'Expert digital forensics and incident response with legal-grade evidence collection and analysis.',
        benefits: ['Rapid incident containment', 'Legal-grade evidence', 'Root cause analysis'],
        methodology: ['Incident triage', 'Evidence collection', 'Analysis', 'Reporting'],
        deliverables: ['Forensic reports', 'Evidence packages', 'Testimony support'],
        outcomes: ['Incident resolution', 'Legal compliance', 'Prevention improvements'],
        complianceAlignment: ['ISO 27037', 'NIST SP 800-86', 'ACPO'],
        pricing: [{ tier: 'Foundation', summary: 'IR retainer', startingAt: 'From $5,000/mo' }, { tier: 'Managed', summary: 'Full forensics service', startingAt: 'From $15,000/incident' }],
        faqs: [{ q: 'Do you provide court testimony?', a: 'Yes, our experts provide expert witness testimony and legal support.' }],
        packages: [
            { 
                name: 'IR Retainer', 
                price: 5000, 
                period: 'per month', 
                description: '24/7 incident response retainer with rapid deployment guarantee.', 
                features: [
                    { text: '24/7 IR Hotline', included: true }, 
                    { text: '4-Hour Response SLA', included: true }, 
                    { text: 'Incident Triage', included: true }, 
                    { text: 'Basic Containment', included: true },
                    { text: 'Full Forensic Investigation', included: false }, 
                    { text: 'Legal Support', included: false }
                ], 
                popular: false 
            },
            { 
                name: 'Forensic Investigation', 
                price: 15000, 
                period: 'per incident', 
                description: 'Comprehensive digital forensic investigation with detailed analysis.', 
                features: [
                    { text: 'All Retainer features', included: true }, 
                    { text: 'Full Forensic Investigation', included: true }, 
                    { text: 'Malware Analysis', included: true }, 
                    { text: 'Detailed Forensic Report', included: true },
                    { text: 'Evidence Preservation', included: true },
                    { text: 'Expert Testimony', included: false }
                ], 
                popular: true 
            },
            { 
                name: 'Enterprise Forensics', 
                price: 25000, 
                period: 'per incident', 
                description: 'Full-spectrum forensics with legal support and expert testimony.', 
                features: [
                    { text: 'All Investigation features', included: true }, 
                    { text: 'Expert Witness Testimony', included: true }, 
                    { text: 'e-Discovery Support', included: true }, 
                    { text: 'Multi-Jurisdiction Support', included: true },
                    { text: 'Advanced Recovery Services', included: true },
                    { text: 'Dedicated Forensic Team', included: true }
                ], 
                popular: false 
            }
        ]
    },
    'virtual-ciso': {
        icon: Briefcase,
        title: 'Virtual CISO (vCISO)',
        description: 'Fractional CISO services for security strategy, board reporting, and program maturity.',
        category: 'Consulting & Managed',
        highlights: ['Board-ready reporting', 'Strategy & roadmap', 'Budget & vendor governance'],
        overview: 'Executive-grade cyber leadership on-demand. Strategy, roadmap, governance, and measurable KPIs.',
        benefits: ['Aligned cyber & business goals', 'Audit readiness', 'Right-sized budgets'],
        methodology: ['Baseline maturity & risks', 'Roadmap & budget planning', 'Quarterly OKRs', 'Board reporting'],
        deliverables: ['Cyber strategy', 'Board pack', 'KPI dashboard'],
        outcomes: ['Improved audit pass rates', 'Program maturity uplift'],
        complianceAlignment: ['NIST CSF', 'ISO 27001'],
        pricing: [{ tier: 'Part-time', summary: 'Monthly fractional CISO', startingAt: 'From $8,000/mo' }, { tier: 'On-demand', summary: 'Project-based leadership', startingAt: 'From $15,000' }],
        faqs: [{ q: 'Can you present to our board?', a: 'Yes. We tailor materials for executives and regulators.' }],
        packages: [
            { 
                name: 'Part-Time vCISO', 
                price: 8000, 
                period: 'per month', 
                description: 'Fractional CISO service with strategic guidance and board reporting.', 
                features: [
                    { text: 'Security Strategy Development', included: true }, 
                    { text: 'Quarterly Board Reporting', included: true }, 
                    { text: 'Risk Management Oversight', included: true }, 
                    { text: 'Budget Planning', included: true },
                    { text: 'Vendor Management', included: false }, 
                    { text: '24/7 Incident Support', included: false }
                ], 
                popular: true 
            },
            { 
                name: 'Full-Time vCISO', 
                price: 15000, 
                period: 'per month', 
                description: 'Dedicated virtual CISO with comprehensive security leadership.', 
                features: [
                    { text: 'All Part-Time features', included: true }, 
                    { text: 'Dedicated Leadership', included: true }, 
                    { text: 'Vendor Management', included: true }, 
                    { text: 'Team Mentoring', included: true },
                    { text: 'Incident Response Leadership', included: true },
                    { text: 'M&A Due Diligence Support', included: false }
                ], 
                popular: false 
            },
            { 
                name: 'Project-Based CISO', 
                price: 15000, 
                period: 'one-time', 
                description: 'Project-based CISO services for specific initiatives.', 
                features: [
                    { text: 'Project Strategy', included: true }, 
                    { text: 'Implementation Oversight', included: true }, 
                    { text: 'Compliance Management', included: true }, 
                    { text: 'Final Reporting', included: true },
                    { text: 'Staff Training', included: false }, 
                    { text: 'Ongoing Support', included: false }
                ], 
                popular: false 
            }
        ]
    },
    'pen-testing': {
        icon: TestTube,
        title: 'Penetration Testing & Red Teaming',
        description: 'Simulate real-world attacks to identify and remediate vulnerabilities in your systems.',
        category: 'Consulting & Managed',
        highlights: ['Real-world attack simulation', 'ATT&CK mapping', 'Actionable remediation'],
        overview: 'Pen testing and adversary emulation to validate controls and reduce exploitable risk.',
        benefits: ['Prioritized findings', 'Improved defenses', 'Executive & technical reporting'],
        methodology: ['Scoping', 'Recon & Exploitation', 'Post-exploitation', 'Reporting & Retest'],
        deliverables: ['Exec summary', 'Detailed report', 'Retest results'],
        outcomes: ['Reduced critical vulns', 'Improved detection & response'],
        complianceAlignment: ['PCI DSS', 'SOC2'],
        pricing: [{ tier: 'Web/API', summary: 'App/Api penetration test', startingAt: 'From $6,000' }, { tier: 'Internal/External', summary: 'Network pen test', startingAt: 'From $8,000' }],
        faqs: [{ q: 'Do you provide retesting?', a: 'Yes, included in most engagements.' }],
        packages: [
            { 
                name: 'Web Application Pen Test', 
                price: 6000, 
                period: 'one-time', 
                description: 'Comprehensive web application penetration testing including OWASP Top 10.', 
                features: [
                    { text: 'OWASP Top 10 Testing', included: true }, 
                    { text: 'Business Logic Testing', included: true }, 
                    { text: 'Authentication Testing', included: true }, 
                    { text: 'Executive Summary', included: true },
                    { text: 'API Testing', included: false }, 
                    { text: 'Mobile App Testing', included: false }
                ], 
                popular: false 
            },
            { 
                name: 'Network Pen Test', 
                price: 8000, 
                period: 'one-time', 
                description: 'Internal and external network penetration testing with infrastructure assessment.', 
                features: [
                    { text: 'External Network Testing', included: true }, 
                    { text: 'Internal Network Testing', included: true }, 
                    { text: 'Configuration Review', included: true }, 
                    { text: 'Detailed Technical Report', included: true },
                    { text: 'Social Engineering', included: false }, 
                    { text: 'Physical Security Testing', included: false }
                ], 
                popular: true 
            },
            { 
                name: 'Comprehensive Pen Test', 
                price: 15000, 
                period: 'one-time', 
                description: 'Full-spectrum penetration testing including applications, networks, and social engineering.', 
                features: [
                    { text: 'All Network features', included: true }, 
                    { text: 'Web & API Testing', included: true }, 
                    { text: 'Mobile App Testing', included: true }, 
                    { text: 'Social Engineering', included: true },
                    { text: 'Physical Security Testing', included: true },
                    { text: 'Red Team Exercise', included: false }
                ], 
                popular: false 
            },
            { 
                name: 'Advanced Red Team', 
                price: 25000, 
                period: 'one-time', 
                description: 'Advanced red team exercise with multi-vector attack simulation.', 
                features: [
                    { text: 'All Comprehensive features', included: true }, 
                    { text: 'Advanced Red Team Exercise', included: true }, 
                    { text: 'APT Simulation', included: true }, 
                    { text: 'Blue Team Engagement', included: true },
                    { text: 'Custom Attack Scenarios', included: true },
                    { text: 'Multiple Retests', included: true }
                ], 
                popular: false 
            }
        ]
    },
    'security-transformation': {
        icon: Beaker,
        title: 'Security Transformation',
        description: 'Secure your digital transformation initiatives and modernize legacy system security.',
        category: 'Consulting & Managed',
        highlights: ['Digital transformation security', 'Legacy modernization', 'DevSecOps integration'],
        overview: 'Strategic security transformation that enables business innovation while managing risk.',
        benefits: ['Secure transformation', 'Reduced technical debt', 'Agile security'],
        methodology: ['Current state assessment', 'Target architecture', 'Roadmap development', 'Implementation'],
        deliverables: ['Transformation roadmap', 'Security architecture', 'Implementation plan'],
        outcomes: ['Secure digital initiatives', 'Modern security posture', 'Business agility'],
        complianceAlignment: ['NIST CSF', 'COBIT', 'ITIL'],
        pricing: [{ tier: 'Foundation', summary: 'Transformation assessment', startingAt: 'From $12,000' }, { tier: 'Managed', summary: 'Full transformation program', startingAt: 'From $20,000/mo' }],
        faqs: [{ q: 'Do you work with legacy systems?', a: 'Yes, we specialize in securing legacy systems during modernization.' }],
        packages: [
            { 
                name: 'Transformation Assessment', 
                price: 12000, 
                period: 'one-time', 
                description: 'Assess current security state and develop transformation roadmap.', 
                features: [
                    { text: 'Current State Assessment', included: true }, 
                    { text: 'Gap Analysis', included: true }, 
                    { text: 'Target Architecture Design', included: true }, 
                    { text: 'Transformation Roadmap', included: true },
                    { text: 'Implementation Support', included: false }, 
                    { text: 'Ongoing Governance', included: false }
                ], 
                popular: false 
            },
            { 
                name: 'Security Transformation Program', 
                price: 20000, 
                period: 'per month', 
                description: 'Full security transformation program with implementation and governance.', 
                features: [
                    { text: 'All Assessment features', included: true }, 
                    { text: 'Implementation Project Management', included: true }, 
                    { text: 'DevSecOps Integration', included: true }, 
                    { text: 'Legacy System Modernization', included: true },
                    { text: 'Change Management', included: true },
                    { text: 'Ongoing Governance', included: false }
                ], 
                popular: true 
            },
            { 
                name: 'Enterprise Transformation', 
                price: 35000, 
                period: 'per month', 
                description: 'Enterprise-wide security transformation with dedicated team and governance.', 
                features: [
                    { text: 'All Program features', included: true }, 
                    { text: 'Dedicated Transformation Team', included: true }, 
                    { text: 'Advanced Governance Framework', included: true }, 
                    { text: 'Business Process Integration', included: true },
                    { text: 'Innovation Enablement', included: true },
                    { text: 'Executive Advisory', included: true }
                ], 
                popular: false 
            }
        ]
    },
    'managed-security-services': {
        icon: Headset,
        title: 'Managed Security Services (MSS)',
        description: 'Managed firewall, SIEM, endpoint security, and vulnerability scanning services.',
        category: 'Core Security',
        highlights: ['24/7 monitoring', 'Expert management', 'Comprehensive coverage'],
        overview: 'Comprehensive managed security services providing expert oversight of your security infrastructure.',
        benefits: ['Reduced operational burden', 'Expert security team', 'Predictable costs'],
        methodology: ['Assessment', 'Implementation', 'Monitoring', 'Optimization'],
        deliverables: ['Security reports', 'Incident responses', 'Compliance evidence'],
        outcomes: ['Improved security posture', 'Reduced incidents', 'Compliance maintenance'],
        complianceAlignment: ['ISO 27001', 'PCI DSS', 'HIPAA'],
        pricing: [{ tier: 'Foundation', summary: 'Basic managed services', startingAt: 'From $3,000/mo' }, { tier: 'Managed', summary: 'Comprehensive MSS', startingAt: 'From $8,000/mo' }],
        faqs: [{ q: 'Do you support our existing security tools?', a: 'Yes, we can manage your existing tools or recommend optimal solutions.' }],
        packages: [
            { 
                name: 'Essential MSS', 
                price: 3000, 
                period: 'per month', 
                description: 'Core managed security services with 24/7 monitoring and basic incident response.', 
                features: [
                    { text: '24/7 Security Monitoring', included: true }, 
                    { text: 'Managed Firewall', included: true }, 
                    { text: 'Basic SIEM Management', included: true }, 
                    { text: 'Monthly Reporting', included: true },
                    { text: 'Advanced Threat Detection', included: false }, 
                    { text: 'Vulnerability Management', included: false }
                ], 
                popular: false 
            },
            { 
                name: 'Comprehensive MSS', 
                price: 8000, 
                period: 'per month', 
                description: 'Full-spectrum managed security with advanced threat detection and vulnerability management.', 
                features: [
                    { text: 'All Essential features', included: true }, 
                    { text: 'Advanced SIEM Management', included: true }, 
                    { text: 'Endpoint Protection Management', included: true }, 
                    { text: 'Vulnerability Scanning & Management', included: true },
                    { text: 'Threat Intelligence Integration', included: true },
                    { text: 'Dedicated Security Engineer', included: false }
                ], 
                popular: true 
            },
            { 
                name: 'Enterprise MSS', 
                price: 15000, 
                period: 'per month', 
                description: 'Enterprise-grade managed security with dedicated team and advanced capabilities.', 
                features: [
                    { text: 'All Comprehensive features', included: true }, 
                    { text: 'Dedicated Security Team', included: true }, 
                    { text: 'Advanced Threat Hunting', included: true }, 
                    { text: 'Security Orchestration & Automation', included: true },
                    { text: 'Custom Integration Support', included: true },
                    { text: 'Executive Security Dashboard', included: true }
                ], 
                popular: false 
            }
        ]
    },
    'security-testing-services': {
        icon: UserCheck,
        title: 'Security Testing Services',
        description: 'Continuous automated testing, bug bounty program management, and configuration audits.',
        category: 'Consulting & Managed',
        highlights: ['Continuous testing', 'Bug bounty management', 'Automated scanning'],
        overview: 'Comprehensive security testing combining automated tools with expert analysis.',
        benefits: ['Continuous vulnerability detection', 'Cost-effective testing', 'Expert validation'],
        methodology: ['Tool deployment', 'Test execution', 'Analysis', 'Remediation support'],
        deliverables: ['Test reports', 'Vulnerability findings', 'Remediation guidance'],
        outcomes: ['Reduced vulnerabilities', 'Faster remediation', 'Improved security'],
        complianceAlignment: ['OWASP', 'NIST CSF', 'PCI DSS'],
        pricing: [{ tier: 'Foundation', summary: 'Automated testing', startingAt: 'From $2,500/mo' }, { tier: 'Managed', summary: 'Full testing program', startingAt: 'From $6,000/mo' }],
        faqs: [{ q: 'Do you manage bug bounty programs?', a: 'Yes, we provide full bug bounty program management and researcher relations.' }],
        packages: [
            { 
                name: 'Automated Security Testing', 
                price: 2500, 
                period: 'per month', 
                description: 'Continuous automated security testing with vulnerability scanning.', 
                features: [
                    { text: 'Continuous Vulnerability Scanning', included: true }, 
                    { text: 'Automated Security Testing', included: true }, 
                    { text: 'Configuration Audits', included: true }, 
                    { text: 'Monthly Reports', included: true },
                    { text: 'Manual Testing', included: false }, 
                    { text: 'Bug Bounty Management', included: false }
                ], 
                popular: false 
            },
            { 
                name: 'Comprehensive Testing', 
                price: 6000, 
                period: 'per month', 
                description: 'Full security testing program with automated and manual testing.', 
                features: [
                    { text: 'All Automated features', included: true }, 
                    { text: 'Manual Security Testing', included: true }, 
                    { text: 'Bug Bounty Program Management', included: true }, 
                    { text: 'Expert Validation', included: true },
                    { text: 'Remediation Support', included: true },
                    { text: 'Custom Test Scenarios', included: false }
                ], 
                popular: true 
            },
            { 
                name: 'Enterprise Testing', 
                price: 12000, 
                period: 'per month', 
                description: 'Enterprise security testing with advanced capabilities and dedicated support.', 
                features: [
                    { text: 'All Comprehensive features', included: true }, 
                    { text: 'Advanced Testing Tools', included: true }, 
                    { text: 'Custom Test Development', included: true }, 
                    { text: 'Dedicated Testing Team', included: true },
                    { text: 'DevSecOps Integration', included: true },
                    { text: 'Testing Governance Framework', included: true }
                ], 
                popular: false 
            }
        ]
    },
    'sector-specific-security': {
        icon: Landmark,
        title: 'Sector-Specific Security',
        description: 'Tailored security solutions for financial services, healthcare, government, and critical infrastructure.',
        category: 'Consulting & Managed',
        highlights: ['Industry expertise', 'Regulatory compliance', 'Specialized controls'],
        overview: 'Specialized security solutions designed for specific industry requirements and regulations.',
        benefits: ['Regulatory compliance', 'Industry best practices', 'Specialized expertise'],
        methodology: ['Industry assessment', 'Compliance mapping', 'Solution design', 'Implementation'],
        deliverables: ['Industry-specific controls', 'Compliance evidence', 'Specialized reports'],
        outcomes: ['Regulatory compliance', 'Industry-appropriate security', 'Reduced risk'],
        complianceAlignment: ['Industry-specific frameworks'],
        pricing: [{ tier: 'Foundation', summary: 'Industry assessment', startingAt: 'From $8,000' }, { tier: 'Managed', summary: 'Sector-specific program', startingAt: 'From $15,000/mo' }],
        faqs: [{ q: 'Which industries do you specialize in?', a: 'We specialize in financial services, healthcare, government, and critical infrastructure sectors.' }],
        packages: [
            { 
                name: 'Industry Assessment', 
                price: 8000, 
                period: 'one-time', 
                description: 'Comprehensive security assessment for your specific industry sector.', 
                features: [
                    { text: 'Industry-Specific Risk Assessment', included: true }, 
                    { text: 'Regulatory Compliance Review', included: true }, 
                    { text: 'Best Practices Analysis', included: true }, 
                    { text: 'Gap Analysis Report', included: true },
                    { text: 'Implementation Support', included: false }, 
                    { text: 'Ongoing Compliance Management', included: false }
                ], 
                popular: false 
            },
            { 
                name: 'Sector Security Program', 
                price: 15000, 
                period: 'per month', 
                description: 'Ongoing sector-specific security management with compliance monitoring.', 
                features: [
                    { text: 'All Assessment features', included: true }, 
                    { text: 'Industry-Specific Controls', included: true }, 
                    { text: 'Compliance Management', included: true }, 
                    { text: 'Regulatory Reporting', included: true },
                    { text: 'Industry Threat Intelligence', included: true },
                    { text: 'Dedicated Industry Expert', included: false }
                ], 
                popular: true 
            },
            { 
                name: 'Enterprise Sector Security', 
                price: 25000, 
                period: 'per month', 
                description: 'Comprehensive sector security with dedicated expertise and advanced capabilities.', 
                features: [
                    { text: 'All Program features', included: true }, 
                    { text: 'Dedicated Industry Expert', included: true }, 
                    { text: 'Advanced Sector Controls', included: true }, 
                    { text: 'Multi-Regulatory Management', included: true },
                    { text: 'Industry Innovation Support', included: true },
                    { text: 'Executive Advisory', included: true }
                ], 
                popular: false 
            }
        ]
    },
    'supply-chain-security': {
        icon: Link,
        title: 'Supply Chain Security',
        description: 'Manage software supply chain risks (SBOM), vendor security, and third-party monitoring.',
        category: 'Advanced Security',
        highlights: ['SBOM management', 'Vendor risk assessment', 'Third-party monitoring'],
        overview: 'Comprehensive supply chain security covering software components, vendors, and third-party risks.',
        benefits: ['Reduced supply chain risk', 'Vendor transparency', 'Compliance readiness'],
        methodology: ['Supply chain mapping', 'Risk assessment', 'Control implementation', 'Monitoring'],
        deliverables: ['SBOM reports', 'Vendor assessments', 'Risk registers'],
        outcomes: ['Secure supply chain', 'Vendor compliance', 'Reduced third-party risk'],
        complianceAlignment: ['NIST CSF', 'ISO 28000', 'C-SCRM'],
        pricing: [{ tier: 'Foundation', summary: 'Supply chain assessment', startingAt: 'From $6,000' }, { tier: 'Managed', summary: 'Full supply chain program', startingAt: 'From $12,000/mo' }],
        faqs: [{ q: 'Do you support SBOM generation?', a: 'Yes, we provide SBOM generation and management for software supply chains.' }],
        packages: [
            { 
                name: 'Supply Chain Assessment', 
                price: 6000, 
                period: 'one-time', 
                description: 'Comprehensive assessment of your software and vendor supply chain risks.', 
                features: [
                    { text: 'Supply Chain Mapping', included: true }, 
                    { text: 'Vendor Risk Assessment', included: true }, 
                    { text: 'SBOM Analysis', included: true }, 
                    { text: 'Risk Register Development', included: true },
                    { text: 'Continuous Monitoring', included: false }, 
                    { text: 'SBOM Generation', included: false }
                ], 
                popular: false 
            },
            { 
                name: 'Supply Chain Security Program', 
                price: 12000, 
                period: 'per month', 
                description: 'Ongoing supply chain security management with monitoring and compliance.', 
                features: [
                    { text: 'All Assessment features', included: true }, 
                    { text: 'Continuous Vendor Monitoring', included: true }, 
                    { text: 'SBOM Generation & Management', included: true }, 
                    { text: 'Third-Party Risk Management', included: true },
                    { text: 'Compliance Reporting', included: true },
                    { text: 'Vendor Security Assessments', included: false }
                ], 
                popular: true 
            },
            { 
                name: 'Enterprise Supply Chain Security', 
                price: 20000, 
                period: 'per month', 
                description: 'Comprehensive supply chain security with advanced monitoring and vendor management.', 
                features: [
                    { text: 'All Program features', included: true }, 
                    { text: 'Advanced SBOM Analytics', included: true }, 
                    { text: 'Vendor Security Assessments', included: true }, 
                    { text: 'Supply Chain Threat Intelligence', included: true },
                    { text: 'Dedicated Supply Chain Team', included: true },
                    { text: 'Custom Risk Scoring', included: true }
                ], 
                popular: false 
            }
        ]
    },
    'security-research': {
        icon: Microscope,
        title: 'Security Research & Development',
        description: 'Custom threat intelligence, bespoke security tool development, and emerging threat analysis.',
        category: 'Consulting & Managed',
        highlights: ['Custom research', 'Tool development', 'Emerging threats'],
        overview: 'Advanced security research and development for custom solutions and emerging threats.',
        benefits: ['Custom solutions', 'Cutting-edge capabilities', 'Competitive advantage'],
        methodology: ['Research planning', 'Development', 'Testing', 'Deployment'],
        deliverables: ['Research reports', 'Custom tools', 'Technical documentation'],
        outcomes: ['Unique security capabilities', 'Advanced threat protection', 'Innovation leadership'],
        complianceAlignment: ['Research standards', 'Industry best practices'],
        pricing: [{ tier: 'Foundation', summary: 'Research project', startingAt: 'From $15,000' }, { tier: 'Managed', summary: 'R&D program', startingAt: 'From $25,000/mo' }],
        faqs: [{ q: 'Do you develop custom security tools?', a: 'Yes, we develop bespoke security tools tailored to your specific needs.' }],
        packages: [
            { 
                name: 'Research Project', 
                price: 15000, 
                period: 'one-time', 
                description: 'Custom security research project focused on specific threats or technologies.', 
                features: [
                    { text: 'Custom Research Project', included: true }, 
                    { text: 'Threat Analysis', included: true }, 
                    { text: 'Research Report', included: true }, 
                    { text: 'Technical Recommendations', included: true },
                    { text: 'Tool Development', included: false }, 
                    { text: 'Ongoing Research', included: false }
                ], 
                popular: false 
            },
            { 
                name: 'Security R&D Program', 
                price: 25000, 
                period: 'per month', 
                description: 'Ongoing security research and development program with custom tool creation.', 
                features: [
                    { text: 'All Research Project features', included: true }, 
                    { text: 'Custom Tool Development', included: true }, 
                    { text: 'Prototype Development', included: true }, 
                    { text: 'Continuous Research', included: true },
                    { text: 'Technical Support', included: true },
                    { text: 'Dedicated Research Team', included: false }
                ], 
                popular: true 
            },
            { 
                name: 'Advanced R&D Lab', 
                price: 40000, 
                period: 'per month', 
                description: 'Advanced security research lab with dedicated team and cutting-edge capabilities.', 
                features: [
                    { text: 'All R&D Program features', included: true }, 
                    { text: 'Dedicated Research Team', included: true }, 
                    { text: 'Advanced Tool Development', included: true }, 
                    { text: 'Patent Support', included: true },
                    { text: 'Academic Collaboration', included: true },
                    { text: 'Innovation Workshops', included: true }
                ], 
                popular: false 
            }
        ]
    },
    'blockchain-security': {
        icon: Package,
        title: 'Blockchain & Cryptocurrency Security',
        description: 'Secure your decentralized applications with smart contract audits, wallet assessments, and DeFi risk management.',
        category: 'Advanced Security',
        highlights: ['Smart contract audits', 'DeFi security', 'Crypto asset protection'],
        overview: 'Specialized blockchain security covering smart contracts, DeFi protocols, and cryptocurrency assets.',
        benefits: ['Secure smart contracts', 'Protected crypto assets', 'DeFi risk mitigation'],
        methodology: ['Code review', 'Vulnerability testing', 'Risk assessment', 'Security implementation'],
        deliverables: ['Audit reports', 'Security recommendations', 'Risk assessments'],
        outcomes: ['Secure blockchain implementations', 'Reduced exploit risk', 'Compliance readiness'],
        complianceAlignment: ['Blockchain security standards', 'DeFi best practices'],
        pricing: [{ tier: 'Foundation', summary: 'Smart contract audit', startingAt: 'From $8,000' }, { tier: 'Managed', summary: 'Full blockchain security', startingAt: 'From $15,000/mo' }],
        faqs: [{ q: 'Do you audit DeFi protocols?', a: 'Yes, we specialize in DeFi protocol security and smart contract audits.' }],
        packages: [
            { 
                name: 'Smart Contract Audit', 
                price: 8000, 
                period: 'one-time', 
                description: 'Comprehensive smart contract security audit with vulnerability assessment.', 
                features: [
                    { text: 'Smart Contract Code Review', included: true }, 
                    { text: 'Vulnerability Assessment', included: true }, 
                    { text: 'Gas Optimization Review', included: true }, 
                    { text: 'Detailed Audit Report', included: true },
                    { text: 'DeFi Protocol Audit', included: false }, 
                    { text: 'Wallet Security Assessment', included: false }
                ], 
                popular: false 
            },
            { 
                name: 'Blockchain Security Program', 
                price: 15000, 
                period: 'per month', 
                description: 'Comprehensive blockchain security with smart contracts, DeFi, and wallet protection.', 
                features: [
                    { text: 'All Audit features', included: true }, 
                    { text: 'DeFi Protocol Security', included: true }, 
                    { text: 'Wallet Security Assessment', included: true }, 
                    { text: 'Transaction Monitoring', included: true },
                    { text: 'Compliance Support', included: true },
                    { text: '24/7 Security Monitoring', included: false }
                ], 
                popular: true 
            },
            { 
                name: 'Enterprise Blockchain Security', 
                price: 25000, 
                period: 'per month', 
                description: 'Full-spectrum blockchain security with advanced monitoring and dedicated support.', 
                features: [
                    { text: 'All Program features', included: true }, 
                    { text: '24/7 Security Monitoring', included: true }, 
                    { text: 'Advanced Threat Detection', included: true }, 
                    { text: 'Dedicated Blockchain Security Team', included: true },
                    { text: 'Custom Security Solutions', included: true },
                    { text: 'Regulatory Compliance Management', included: true }
                ], 
                popular: false 
            }
        ]
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
