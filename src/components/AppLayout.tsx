import { useState } from 'react';
import { Header } from './Header';
import { TabNavigation } from './TabNavigation';
import { JobCard } from './JobCard';
import { ProviderCard } from './ProviderCard';
import { PostJobForm } from './PostJobForm';
import { ApplicationsList } from './ApplicationsList';
import LandingPage from './LandingPage';
import { mockJobs, mockProviders } from '@/data/mockData';
import { Job, Provider, Application } from '@/types';
import { toast } from '@/components/ui/use-toast';

const AppLayout = () => {
  const [showLanding, setShowLanding] = useState(true);
  const [activeTab, setActiveTab] = useState('jobs');
  const [showPostForm, setShowPostForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [jobs, setJobs] = useState<Job[]>(mockJobs);
  const [applications, setApplications] = useState<Application[]>([]);

  const handleRequestClick = () => {
    setShowLanding(false);
  };

  const handlePostJob = (jobData: Omit<Job, 'id' | 'postedDate' | 'status'>) => {
    const newJob: Job = {
      ...jobData,
      id: Date.now().toString(),
      postedDate: 'Just now',
      status: 'open'
    };
    setJobs(prev => [newJob, ...prev]);
    setShowPostForm(false);
    toast({ title: 'Job posted successfully!' });
  };

  const handleApply = (jobId: string) => {
    const newApplication: Application = {
      id: Date.now().toString(),
      jobId,
      providerId: '1',
      message: 'I am interested in this position and have relevant experience.',
      proposedRate: '$100/hour',
      appliedDate: 'Just now',
      status: 'pending'
    };
    setApplications(prev => [newApplication, ...prev]);
    toast({ title: 'Application submitted!' });
  };

  const handleHire = (providerId: string) => {
    toast({ title: 'Contact request sent to provider!' });
  };

  const handleAcceptApplication = (applicationId: string) => {
    setApplications(prev => 
      prev.map(app => 
        app.id === applicationId ? { ...app, status: 'accepted' } : app
      )
    );
    toast({ title: 'Application accepted!' });
  };

  const handleRejectApplication = (applicationId: string) => {
    setApplications(prev => 
      prev.map(app => 
        app.id === applicationId ? { ...app, status: 'rejected' } : app
      )
    );
    toast({ title: 'Application rejected.' });
  };

  if (showLanding) {
    return <LandingPage onRequestClick={handleRequestClick} />;
  }

  const filteredJobs = jobs.filter(job => 
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredProviders = mockProviders.filter(provider =>
    provider.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    provider.specialties.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  if (showPostForm) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header onPostJob={() => setShowPostForm(true)} searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        <div className="container mx-auto px-4 py-8">
          <PostJobForm onSubmit={handlePostJob} onCancel={() => setShowPostForm(false)} />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onPostJob={() => setShowPostForm(true)} searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />
      
      <div className="container mx-auto px-4 py-8">
        {activeTab === 'jobs' && (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredJobs.map(job => (
              <JobCard key={job.id} job={job} onApply={handleApply} />
            ))}
          </div>
        )}
        
        {activeTab === 'providers' && (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredProviders.map(provider => (
              <ProviderCard key={provider.id} provider={provider} onHire={handleHire} />
            ))}
          </div>
        )}
        
        {activeTab === 'applications' && (
          <ApplicationsList 
            applications={applications}
            jobs={jobs}
            providers={mockProviders}
            onAccept={handleAcceptApplication}
            onReject={handleRejectApplication}
          />
        )}
      </div>
    </div>
  );
};

export default AppLayout;