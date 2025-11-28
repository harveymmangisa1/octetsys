import { 
  Server, Shield, Headset, GraduationCap, Code, FileCode, Camera, BrainCircuit,
  Lock, Activity, Users, Cloud, Scan, Search, Building, Landmark, Microscope,
  FileLock, BotIcon, Factory, Skull, UserCheck, TestTube, Link, Beaker,
  ShieldQuestion, Package, Briefcase
} from 'lucide-react';
import React from 'react';
import { LucideProps } from 'lucide-react';

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
        faqs: [{ q: 'Do you replace our SOC?', a: 'We can augment or operate co-managed with your SOC.' }]
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
        faqs: [{ q: 'Can you integrate with HR systems?', a: 'Yes, to drive lifecycle automation and JML flows.' }]
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
        faqs: [{ q: 'Do you support multi-cloud?', a: 'Yes, AWS/Azure/GCP with common guardrail patterns.' }]
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
        faqs: [{ q: 'Do you offer secure SDLC training?', a: 'Yes, for developers and architects.' }]
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
        faqs: [{ q: 'How current is your threat intel?', a: 'We provide real-time feeds with 24/7 analysis and updates.' }]
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
        faqs: [{ q: 'Do you support hybrid cloud architectures?', a: 'Yes, we design for on-prem, cloud, and hybrid environments.' }]
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
        faqs: [{ q: 'Which frameworks do you support?', a: 'We support major frameworks including ISO 27001, SOC 2, PCI DSS, HIPAA, and GDPR.' }]
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
        faqs: [{ q: 'Do you use quantitative risk analysis?', a: 'Yes, we combine both qualitative and quantitative methods including FAIR model.' }]
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
        faqs: [{ q: 'Can you help with GDPR compliance?', a: 'Yes, we provide full GDPR compliance support including DPA and DPIA.' }]
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
        faqs: [{ q: 'Do you cover GenAI security?', a: 'Yes, we specialize in securing generative AI implementations and preventing prompt injection.' }]
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
        faqs: [{ q: 'Do you work with legacy OT systems?', a: 'Yes, we specialize in securing legacy OT systems without disrupting operations.' }]
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
        faqs: [{ q: 'Are your red team exercises safe?', a: 'Yes, all exercises are carefully scoped and monitored to ensure operational safety.' }]
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
        faqs: [{ q: 'Do you customize training for different roles?', a: 'Yes, we provide role-based training for executives, developers, and general staff.' }]
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
        faqs: [{ q: 'Do you conduct actual recovery tests?', a: 'Yes, we conduct both tabletop and full-scale recovery exercises.' }]
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
        faqs: [{ q: 'Do you provide court testimony?', a: 'Yes, our experts provide expert witness testimony and legal support.' }]
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
        faqs: [{ q: 'Can you present to our board?', a: 'Yes. We tailor materials for executives and regulators.' }]
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
        faqs: [{ q: 'Do you provide retesting?', a: 'Yes, included in most engagements.' }]
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
        faqs: [{ q: 'Do you work with legacy systems?', a: 'Yes, we specialize in securing legacy systems during modernization.' }]
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
        faqs: [{ q: 'Do you support our existing security tools?', a: 'Yes, we can manage your existing tools or recommend optimal solutions.' }]
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
        faqs: [{ q: 'Do you manage bug bounty programs?', a: 'Yes, we provide full bug bounty program management and researcher relations.' }]
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
        faqs: [{ q: 'Which industries do you specialize in?', a: 'We specialize in financial services, healthcare, government, and critical infrastructure sectors.' }]
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
        faqs: [{ q: 'Do you support SBOM generation?', a: 'Yes, we provide SBOM generation and management for software supply chains.' }]
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
        faqs: [{ q: 'Do you develop custom security tools?', a: 'Yes, we develop bespoke security tools tailored to your specific needs.' }]
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
        faqs: [{ q: 'Do you audit DeFi protocols?', a: 'Yes, we specialize in DeFi protocol security and smart contract audits.' }]
    },
    'security-audits': {
        icon: TestTube,
        title: 'Security Audits',
        description: 'Comprehensive security audits to identify vulnerabilities and ensure compliance.',
        image: '/placeholder-images/security-audits.jpg'
    }
};