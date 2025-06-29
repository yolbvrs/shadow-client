import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Shield, Plus, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

interface HeaderProps {
  onPostJob: () => void;
  searchTerm: string;
  onSearchChange: (term: string) => void;
}

export const Header = ({ onPostJob, searchTerm, onSearchChange }: HeaderProps) => {
  return (
    <header className="bg-gradient-to-r from-slate-900 to-slate-700 text-white">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <Shield className="w-8 h-8" />
            <div>
              <h1 className="text-2xl font-bold">SHADOW</h1>
              <p className="text-slate-300 text-sm">Security Matchmaking Platform</p>
            </div>
          </div>
          <Button onClick={onPostJob} className="bg-blue-600 hover:bg-blue-700">
            <Plus className="w-4 h-4 mr-2" />
            Post Job
          </Button>
        </div>
        
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            placeholder="Search jobs or providers..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-gray-300"
          />
        </div>
      </div>
    </header>
  );
};