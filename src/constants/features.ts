import { Shield, Lock, Bell, BarChart, Zap, Users } from 'lucide-react';

export const features = [
  {
    icon: Shield,
    title: 'Advanced Threat Detection',
    description: 'AI-powered system that identifies and blocks sophisticated cyber threats in real-time.',
  },
  {
    icon: Lock,
    title: 'End-to-End Encryption',
    description: 'Military-grade encryption for all your data, both in transit and at rest.',
  },
  {
    icon: Bell,
    title: '24/7 Monitoring',
    description: 'Round-the-clock surveillance of your systems with instant alert notifications.',
  },
  {
    icon: BarChart,
    title: 'Analytics Dashboard',
    description: 'Comprehensive security analytics and reporting for informed decision-making.',
  },
  {
    icon: Zap,
    title: 'Quick Response',
    description: 'Automated incident response system for immediate threat neutralization.',
  },
  {
    icon: Users,
    title: 'Access Control',
    description: 'Granular access management with role-based permissions and authentication.',
  },
] as const;