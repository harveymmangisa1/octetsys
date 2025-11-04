
import { 
  Server, Shield, 
  Headset, GraduationCap, Code, FileCode, Camera, BrainCircuit
} from 'lucide-react';

export const serviceData = {
  'web-development': {
    icon: Code,
    title: 'Web & Mobile Development',
    description: 'Professional web solutions tailored to your business needs',
    color: 'indigo',
    packages: [
      {
        name: 'Starter',
        price: 150,
        period: 'one-time',
        description: 'Perfect for small businesses and startups',
        features: [
          { text: 'Up to 5 pages', included: true },
          { text: '1 year domain registration', included: true },
          { text: '1 year hosting included', included: true },
          { text: '30 professional email accounts', included: true },
          { text: 'Mobile responsive design', included: true },
          { text: 'Basic SEO optimization', included: true },
          { text: 'Contact form integration', included: true },
          { text: '3 months support', included: true },
          { text: 'SSL certificate', included: true },
          { text: 'Social media integration', included: true },
          { text: 'Booking system', included: false },
          { text: 'User registration', included: false },
          { text: 'E-commerce functionality', included: false },
        ],
        popular: false
      },
      {
        name: 'Professional',
        price: 450,
        period: 'one-time',
        description: 'For growing businesses with advanced needs',
        features: [
          { text: 'Up to 15 pages', included: true },
          { text: '1 year domain registration', included: true },
          { text: '1 year hosting included', included: true },
          { text: '50 professional email accounts', included: true },
          { text: 'Mobile responsive design', included: true },
          { text: 'Advanced SEO optimization', included: true },
          { text: 'Booking/appointment system', included: true },
          { text: 'User registration & login', included: true },
          { text: 'Custom database integration', included: true },
          { text: 'Payment gateway setup', included: true },
          { text: '6 months support', included: true },
          { text: 'Admin dashboard', included: true },
          { text: 'E-commerce functionality', included: false },
        ],
        popular: true
      },
      {
        name: 'Enterprise',
        price: 800,
        period: 'starting at',
        description: 'Custom solutions for complex requirements',
        features: [
          { text: 'Unlimited pages', included: true },
          { text: '1 year domain registration', included: true },
          { text: '1 year premium hosting', included: true },
          { text: 'Unlimited email accounts', included: true },
          { text: 'Full e-commerce platform', included: true },
          { text: 'Custom features & integrations', included: true },
          { text: 'Advanced user management', included: true },
          { text: 'Multi-vendor marketplace', included: true },
          { text: 'API development', included: true },
          { text: 'Analytics & reporting', included: true },
          { text: '12 months priority support', included: true },
          { text: 'Dedicated account manager', included: true },
          { text: 'Performance optimization', included: true },
        ],
        popular: false
      }
    ]
  },
  'networking': {
    icon: Server,
    title: 'Networking & Infrastructure',
    description: 'Enterprise-grade network solutions',
    color: 'blue',
    packages: [
      {
        name: 'Small Office',
        price: 500,
        period: 'starting at',
        description: 'For offices with up to 20 devices',
        features: [
          { text: 'Network assessment & planning', included: true },
          { text: 'Router & switch installation', included: true },
          { text: 'Up to 2 access points', included: true },
          { text: 'Basic firewall configuration', included: true },
          { text: 'Cable management', included: true },
          { text: 'VPN setup (basic)', included: true },
          { text: '3 months monitoring', included: true },
          { text: 'Documentation', included: true },
          { text: 'Redundancy systems', included: false },
          { text: '24/7 monitoring', included: false },
        ],
        popular: false
      },
      {
        name: 'Business',
        price: 1500,
        period: 'starting at',
        description: 'For medium businesses (20-100 devices)',
        features: [
          { text: 'Comprehensive network design', included: true },
          { text: 'Enterprise-grade equipment', included: true },
          { text: 'Up to 5 access points', included: true },
          { text: 'Advanced firewall & security', included: true },
          { text: 'VLAN configuration', included: true },
          { text: 'VPN setup (advanced)', included: true },
          { text: 'Network monitoring system', included: true },
          { text: '6 months 24/7 support', included: true },
          { text: 'Redundancy & backup systems', included: true },
          { text: 'Staff training', included: true },
        ],
        popular: true
      },
      {
        name: 'Enterprise',
        price: 5000,
        period: 'starting at',
        description: 'Large-scale infrastructure solutions',
        features: [
          { text: 'Full infrastructure architecture', included: true },
          { text: 'Premium enterprise equipment', included: true },
          { text: 'Unlimited access points', included: true },
          { text: 'Advanced security suite', included: true },
          { text: 'Multi-site connectivity', included: true },
          { text: 'Load balancing', included: true },
          { text: 'Disaster recovery plan', included: true },
          { text: '12 months 24/7 priority support', included: true },
          { text: 'Dedicated network engineer', included: true },
          { text: 'Ongoing optimization', included: true },
        ],
        popular: false
      }
    ]
  },
  'cybersecurity': {
    icon: Shield,
    title: 'Cybersecurity Consulting',
    description: 'Protect your digital assets',
    color: 'red',
    packages: [
      {
        name: 'Security Audit',
        price: 300,
        period: 'one-time',
        description: 'Comprehensive security assessment',
        features: [
          { text: 'Vulnerability assessment', included: true },
          { text: 'Network security scan', included: true },
          { text: 'Policy review', included: true },
          { text: 'Detailed report with recommendations', included: true },
          { text: 'Basic staff training (2 hours)', included: true },
          { text: 'Penetration testing', included: false },
          { text: 'Ongoing monitoring', included: false },
        ],
        popular: false
      },
      {
        name: 'Protection Suite',
        price: 150,
        period: 'per month',
        description: 'Continuous security management',
        features: [
          { text: 'Monthly security audits', included: true },
          { text: '24/7 threat monitoring', included: true },
          { text: 'Firewall management', included: true },
          { text: 'Incident response', included: true },
          { text: 'Quarterly staff training', included: true },
          { text: 'Security updates & patches', included: true },
          { text: 'Compliance reporting', included: true },
          { text: 'Email security', included: true },
        ],
        popular: true
      },
      {
        name: 'Enterprise Security',
        price: 500,
        period: 'per month',
        description: 'Complete security ecosystem',
        features: [
          { text: 'All Protection Suite features', included: true },
          { text: 'Advanced penetration testing', included: true },
          { text: 'Security operations center (SOC)', included: true },
          { text: 'Compliance management', included: true },
          { text: 'Dedicated security team', included: true },
          { text: 'Custom security solutions', included: true },
          { text: 'Incident forensics', included: true },
          { text: 'Executive security briefings', included: true },
        ],
        popular: false
      }
    ]
  },
  'training': {
    icon: GraduationCap,
    title: 'IT Training & Development',
    description: 'Empower your team with knowledge',
    color: 'purple',
    packages: [
      {
        name: 'Single Workshop',
        price: 100,
        period: 'per session',
        description: 'Half-day training session',
        features: [
          { text: '4-hour workshop', included: true },
          { text: 'Up to 15 participants', included: true },
          { text: 'Digital materials', included: true },
          { text: 'Certificate of attendance', included: true },
          { text: 'Q&A session', included: true },
          { text: 'Follow-up support (1 week)', included: true },
        ],
        popular: false
      },
      {
        name: 'Training Program',
        price: 800,
        period: 'per program',
        description: 'Comprehensive multi-day training',
        features: [
          { text: '3-day intensive program', included: true },
          { text: 'Up to 30 participants', included: true },
          { text: 'Hands-on exercises', included: true },
          { text: 'Printed & digital materials', included: true },
          { text: 'Official certification', included: true },
          { text: 'Follow-up support (1 month)', included: true },
          { text: 'Access to online resources', included: true },
          { text: 'Assessment & reporting', included: true },
        ],
        popular: true
      },
      {
        name: 'Corporate Package',
        price: 2500,
        period: 'per quarter',
        description: 'Ongoing training & development',
        features: [
          { text: 'Monthly training sessions', included: true },
          { text: 'Unlimited participants', included: true },
          { text: 'Custom curriculum', included: true },
          { text: 'On-site or online delivery', included: true },
          { text: 'Individual coaching', included: true },
          { text: 'Progress tracking', included: true },
          { text: 'Certification programs', included: true },
          { text: 'Dedicated training manager', included: true },
        ],
        popular: false
      }
    ]
  },
  'cctv': {
    icon: Camera,
    title: 'CCTV & Biometric Systems',
    description: 'Advanced security & access control',
    color: 'orange',
    packages: [
      {
        name: 'Basic Security',
        price: 600,
        period: 'starting at',
        description: 'Essential surveillance system',
        features: [
          { text: '4 HD cameras', included: true },
          { text: 'DVR with 1TB storage', included: true },
          { text: 'Installation & cabling', included: true },
          { text: 'Mobile app access', included: true },
          { text: 'Night vision', included: true },
          { text: '3 months warranty', included: true },
          { text: 'Cloud backup', included: false },
          { text: 'Biometric access', included: false },
        ],
        popular: false
      },
      {
        name: 'Professional',
        price: 1500,
        period: 'starting at',
        description: 'Complete security solution',
        features: [
          { text: '8 HD cameras', included: true },
          { text: 'NVR with 2TB storage', included: true },
          { text: 'Professional installation', included: true },
          { text: 'Mobile & web access', included: true },
          { text: 'Motion detection & alerts', included: true },
          { text: 'Cloud backup (3 months)', included: true },
          { text: 'Basic access control (2 doors)', included: true },
          { text: '6 months warranty & support', included: true },
        ],
        popular: true
      },
      {
        name: 'Enterprise',
        price: 5000,
        period: 'starting at',
        description: 'Advanced integrated system',
        features: [
          { text: 'Unlimited cameras', included: true },
          { text: 'Enterprise NVR with 8TB+', included: true },
          { text: 'Complete system integration', included: true },
          { text: 'Advanced analytics & AI', included: true },
          { text: 'Facial recognition', included: true },
          { text: 'Biometric access control', included: true },
          { text: 'Centralized monitoring', included: true },
          { text: '12 months priority support', included: true },
        ],
        popular: false
      }
    ]
  },
  'support': {
    icon: Headset,
    title: 'System Support',
    description: 'Reliable remote and on-site support',
    color: 'green',
    packages: []
  },
  'software': {
    icon: FileCode,
    title: 'Software Development',
    description: 'Bespoke software solutions',
    color: 'teal',
    packages: []
  },
  'ai-awareness': {
    icon: BrainCircuit,
    title: 'AI Awareness & Training',
    description: 'Expert-led AI awareness campaigns',
    color: 'pink',
    packages: []
  },
};
