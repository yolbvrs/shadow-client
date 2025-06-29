import React, { createContext, useContext, useState } from 'react';
import { Job, Provider, Application } from '@/types';
import { mockJobs, mockProviders } from '@/data/mockData';

interface AppContextType {
  sidebarOpen: boolean;
  toggleSidebar: () => void;
  jobs: Job[];
  providers: Provider[];
  applications: Application[];
  addJob: (job: Omit<Job, 'id' | 'postedDate' | 'status'>) => void;
  addApplication: (application: Omit<Application, 'id' | 'appliedDate' | 'status'>) => void;
}

const defaultAppContext: AppContextType = {
  sidebarOpen: false,
  toggleSidebar: () => {},
  jobs: [],
  providers: [],
  applications: [],
  addJob: () => {},
  addApplication: () => {},
};

const AppContext = createContext<AppContextType>(defaultAppContext);

export const useAppContext = () => useContext(AppContext);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [jobs, setJobs] = useState<Job[]>(mockJobs);
  const [applications, setApplications] = useState<Application[]>([]);

  const toggleSidebar = () => {
    setSidebarOpen(prev => !prev);
  };

  const addJob = (jobData: Omit<Job, 'id' | 'postedDate' | 'status'>) => {
    const newJob: Job = {
      ...jobData,
      id: Date.now().toString(),
      postedDate: 'Just now',
      status: 'open'
    };
    setJobs(prev => [newJob, ...prev]);
  };

  const addApplication = (appData: Omit<Application, 'id' | 'appliedDate' | 'status'>) => {
    const newApplication: Application = {
      ...appData,
      id: Date.now().toString(),
      appliedDate: 'Just now',
      status: 'pending'
    };
    setApplications(prev => [newApplication, ...prev]);
  };

  return (
    <AppContext.Provider
      value={{
        sidebarOpen,
        toggleSidebar,
        jobs,
        providers: mockProviders,
        applications,
        addJob,
        addApplication,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};