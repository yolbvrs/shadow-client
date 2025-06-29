import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, DollarSign, User, MessageSquare } from 'lucide-react';
import { Application, Job, Provider } from '@/types';

interface ApplicationsListProps {
  applications: Application[];
  jobs: Job[];
  providers: Provider[];
  onAccept?: (applicationId: string) => void;
  onReject?: (applicationId: string) => void;
}

export const ApplicationsList = ({ 
  applications, 
  jobs, 
  providers, 
  onAccept, 
  onReject 
}: ApplicationsListProps) => {
  const getJob = (jobId: string) => jobs.find(j => j.id === jobId);
  const getProvider = (providerId: string) => providers.find(p => p.id === providerId);
  
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'accepted': return 'bg-green-100 text-green-800';
      case 'rejected': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  if (applications.length === 0) {
    return (
      <div className="text-center py-12">
        <MessageSquare className="w-12 h-12 text-gray-400 mx-auto mb-4" />
        <h3 className="text-lg font-medium text-gray-900 mb-2">No Applications Yet</h3>
        <p className="text-gray-500">Applications will appear here when providers apply to jobs.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {applications.map((application) => {
        const job = getJob(application.jobId);
        const provider = getProvider(application.providerId);
        
        return (
          <Card key={application.id} className="hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="text-lg">
                  Application for: {job?.title}
                </CardTitle>
                <Badge className={getStatusColor(application.status)}>
                  {application.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span className="font-medium">{provider?.name}</span>
                  <span className="text-gray-500">• {provider?.experience}</span>
                </div>
                
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <DollarSign className="w-4 h-4" />
                    {application.proposedRate}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {application.appliedDate}
                  </div>
                </div>
                
                <p className="text-gray-700">{application.message}</p>
                
                {application.status === 'pending' && (
                  <div className="flex gap-2 pt-2">
                    <Button 
                      onClick={() => onAccept?.(application.id)}
                      size="sm"
                      className="bg-green-600 hover:bg-green-700"
                    >
                      Accept
                    </Button>
                    <Button 
                      onClick={() => onReject?.(application.id)}
                      size="sm"
                      variant="outline"
                    >
                      Reject
                    </Button>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};