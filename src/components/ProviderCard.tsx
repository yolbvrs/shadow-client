import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star, Shield, DollarSign } from 'lucide-react';
import { Provider } from '@/types';

interface ProviderCardProps {
  provider: Provider;
  onHire?: (providerId: string) => void;
  showHireButton?: boolean;
}

export const ProviderCard = ({ provider, onHire, showHireButton = true }: ProviderCardProps) => {
  return (
    <Card
      className={`hover:shadow-lg transition-shadow ${
        provider.available ? 'border-green-500' : 'opacity-70'
      }`}
    >
      <CardHeader>
        <div className="flex items-center gap-3">
          <Avatar className="w-12 h-12">
            <AvatarImage src={provider.avatar} alt={provider.name} />
            <AvatarFallback>{provider.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <CardTitle className="text-lg flex items-center gap-2">
              {provider.name}
              {provider.verified && (
                <Shield className="w-4 h-4 text-green-500" />
              )}
            </CardTitle>
            <div className="flex items-center gap-1 text-sm text-gray-600">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              {provider.rating} • {provider.experience}
            </div>
          </div>
          {provider.available && (
            <Badge variant="success" size="sm" className="ml-auto">
              Available
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-1 mb-3">
          <DollarSign className="w-4 h-4" />
          <span className="font-medium">{provider.hourlyRate}/hour</span>
        </div>
        <div className="flex flex-wrap gap-2 mb-4">
          {provider.specialties.map((specialty, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {specialty}
            </Badge>
          ))}
        </div>
        {showHireButton && (
          <Button
            onClick={() => provider.available && onHire?.(provider.id)}
            className="w-full"
            variant="outline"
            disabled={!provider.available}
          >
            {provider.available ? 'Contact Provider' : 'Unavailable'}
          </Button>
        )}
      </CardContent>
    </Card>
  );
};