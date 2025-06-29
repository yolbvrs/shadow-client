import { Job, Provider } from '@/types';

export const mockJobs: Job[] = [
  {
    id: '1',
    title: 'Personal Bodyguard for Celebrity Event',
    description: 'Need experienced security for high-profile client at red carpet event. Must have celebrity protection experience.',
    location: 'Los Angeles, CA',
    budget: '$150-200/hour',
    clientName: 'Elite Events LLC',
    postedDate: '2 days ago',
    category: 'event',
    status: 'open'
  },
  {
    id: '2',
    title: 'Corporate Office Security Guard',
    description: 'Seeking professional security guard for tech company headquarters. Night shift position.',
    location: 'San Francisco, CA',
    budget: '$25-35/hour',
    clientName: 'TechCorp Inc',
    postedDate: '1 day ago',
    category: 'corporate',
    status: 'open'
  },
  {
    id: '3',
    title: 'Family Protection Services',
    description: 'Need discreet personal protection for family of 4. Long-term arrangement preferred.',
    location: 'Miami, FL',
    budget: '$75-100/hour',
    clientName: 'Private Client',
    postedDate: '3 hours ago',
    category: 'personal',
    status: 'open'
  }
];

export const mockProviders: Provider[] = [
  {
    id: '1',
    name: 'Marcus Johnson',
    rating: 4.9,
    experience: '8 years',
    specialties: ['Executive Protection', 'Event Security', 'Threat Assessment'],
    hourlyRate: '$120',
    verified: true,
    avatar: '/placeholder.svg'
  },
  {
    id: '2',
    name: 'Sarah Chen',
    rating: 4.8,
    experience: '6 years',
    specialties: ['Corporate Security', 'Surveillance', 'Risk Management'],
    hourlyRate: '$85',
    verified: true,
    avatar: '/placeholder.svg'
  },
  {
    id: '3',
    name: 'David Rodriguez',
    rating: 4.7,
    experience: '10 years',
    specialties: ['Personal Protection', 'Armed Security', 'Investigation'],
    hourlyRate: '$95',
    verified: true,
    avatar: '/placeholder.svg'
  }
];