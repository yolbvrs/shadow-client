import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Calendar, DollarSign } from 'lucide-react';
import { Job } from '@/types';

interface JobCardProps {
  job: Job;
  onApply?: (jobId: string) => void;
  showApplyButton?: boolean;
}

export const JobCard = ({ job, onApply, showApplyButton = true }: JobCardProps) => {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'personal': return 'bg-blue-100 text-blue-800';
      case 'corporate': return 'bg-green-100 text-green-800';
      case 'event': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg">{job.title}</CardTitle>
          <Badge className={getCategoryColor(job.category)}>
            {job.category}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 mb-4">{job.description}</p>
        <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
          <div className="flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            {job.location}
          </div>
          <div className="flex items-center gap-1">
            <DollarSign className="w-4 h-4" />
            {job.budget}
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            {job.postedDate}
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium">By {job.clientName}</span>
          {showApplyButton && (
            <Button onClick={() => onApply?.(job.id)} size="sm">
              Apply Now
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};