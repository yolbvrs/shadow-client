import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Job } from '@/types';

interface PostJobFormProps {
  onSubmit: (job: Omit<Job, 'id' | 'postedDate' | 'status'>) => void;
  onCancel: () => void;
}

export const PostJobForm = ({ onSubmit, onCancel }: PostJobFormProps) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    location: '',
    budget: '',
    clientName: '',
    category: '' as 'personal' | 'corporate' | 'event'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.title && formData.description && formData.category) {
      onSubmit(formData);
    }
  };

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Post a Security Job</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="title">Job Title</Label>
            <Input
              id="title"
              value={formData.title}
              onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
              placeholder="e.g., Personal Bodyguard for Event"
              required
            />
          </div>
          
          <div>
            <Label htmlFor="category">Category</Label>
            <Select onValueChange={(value) => setFormData(prev => ({ ...prev, category: value as any }))}>
              <SelectTrigger>
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="personal">Personal Security</SelectItem>
                <SelectItem value="corporate">Corporate Security</SelectItem>
                <SelectItem value="event">Event Security</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
              placeholder="Describe your security needs..."
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="location">Location</Label>
              <Input
                id="location"
                value={formData.location}
                onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
                placeholder="City, State"
              />
            </div>
            <div>
              <Label htmlFor="budget">Budget</Label>
              <Input
                id="budget"
                value={formData.budget}
                onChange={(e) => setFormData(prev => ({ ...prev, budget: e.target.value }))}
                placeholder="$50-100/hour"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="clientName">Your Name/Company</Label>
            <Input
              id="clientName"
              value={formData.clientName}
              onChange={(e) => setFormData(prev => ({ ...prev, clientName: e.target.value }))}
              placeholder="John Doe / ABC Corp"
            />
          </div>

          <div className="flex gap-2">
            <Button type="submit" className="flex-1">Post Job</Button>
            <Button type="button" variant="outline" onClick={onCancel}>Cancel</Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};