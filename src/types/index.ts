export interface Job {
  id: string;
  title: string;
  description: string;
  location: string;
  budget: string;
  clientName: string;
  postedDate: string;
  category: 'personal' | 'corporate' | 'event';
  status: 'open' | 'in-progress' | 'completed';
}

export interface Provider {
  id: string;
  name: string;
  rating: number;
  experience: string;
  specialties: string[];
  hourlyRate: string;
  verified: boolean;
  avatar: string;
  available?: boolean;
}

export interface Application {
  id: string;
  jobId: string;
  providerId: string;
  message: string;
  proposedRate: string;
  appliedDate: string;
  status: 'pending' | 'accepted' | 'rejected';
}