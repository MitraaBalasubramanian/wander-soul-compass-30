
import React from 'react';
import { MapPin, Navigation, Clock, Star } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const NearbyEssentials = () => {
  const { toast } = useToast();

  const essentials = [
    {
      type: 'ATM',
      name: 'Bangkok Bank ATM',
      distance: '50m',
      walkTime: '1 min',
      status: 'open',
      icon: '🏧',
      rating: 4.2
    },
    {
      type: 'Pharmacy',
      name: 'Boots Pharmacy',
      distance: '120m',
      walkTime: '2 min',
      status: 'open',
      icon: '💊',
      rating: 4.5
    },
    {
      type: 'Convenience',
      name: '7-Eleven',
      distance: '80m',
      walkTime: '1 min',
      status: 'open 24h',
      icon: '🏪',
      rating: 4.0
    },
    {
      type: 'WiFi Spot',
      name: 'Starbucks Coffee',
      distance: '200m',
      walkTime: '3 min',
      status: 'open',
      icon: '📶',
      rating: 4.3
    }
  ];

  const getDirections = (placeName: string) => {
    toast({
      title: "🗺️ Opening directions",
      description: `Navigating to ${placeName}`,
    });
  };

  return (
    <Card className="border-0 shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MapPin className="w-5 h-5 text-red-500" />
          Nearby Essentials
        </CardTitle>
        <p className="text-sm text-muted-foreground">What you need, right around you</p>
      </CardHeader>
      
      <CardContent>
        <div className="space-y-3">
          {essentials.map((place, index) => (
            <div key={index} className="p-3 border border-border/50 rounded-lg hover:bg-muted/30 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="text-lg">{place.icon}</div>
                  <div className="flex-1">
                    <div className="font-medium text-sm">{place.name}</div>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge 
                        variant={place.status.includes('open') ? 'default' : 'secondary'} 
                        className="text-xs"
                      >
                        {place.status}
                      </Badge>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        <span>{place.rating}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="text-right">
                  <div className="text-sm font-medium text-primary">{place.distance}</div>
                  <div className="text-xs text-muted-foreground flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {place.walkTime}
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => getDirections(place.name)}
                    className="mt-1 h-6 px-2 text-xs"
                  >
                    <Navigation className="w-3 h-3" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default NearbyEssentials;
