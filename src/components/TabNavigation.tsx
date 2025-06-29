import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Briefcase, Users, MessageSquare } from 'lucide-react';

interface TabNavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export const TabNavigation = ({ activeTab, onTabChange }: TabNavigationProps) => {
  return (
    <div className="border-b bg-white">
      <div className="container mx-auto px-4">
        <Tabs value={activeTab} onValueChange={onTabChange}>
          <TabsList className="grid w-full max-w-md grid-cols-3 bg-gray-100">
            <TabsTrigger value="jobs" className="flex items-center gap-2">
              <Briefcase className="w-4 h-4" />
              Jobs
            </TabsTrigger>
            <TabsTrigger value="providers" className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              Providers
            </TabsTrigger>
            <TabsTrigger value="applications" className="flex items-center gap-2">
              <MessageSquare className="w-4 h-4" />
              Applications
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </div>
  );
};