
import React from 'react';
import { Cloud, Sun, MapPin, Clock, Thermometer } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const WeatherLocalInfo = () => {
  const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  
  return (
    <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-cyan-50">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-base">
          <Sun className="w-4 h-4 text-yellow-500" />
          Local Info
        </CardTitle>
      </CardHeader>
      
      <CardContent className="pt-0 space-y-3">
        <div className="grid grid-cols-2 gap-3">
          <div className="flex items-center gap-2">
            <Thermometer className="w-4 h-4 text-orange-500" />
            <div>
              <div className="text-lg font-semibold">24°C</div>
              <div className="text-xs text-muted-foreground">Sunny</div>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-blue-500" />
            <div>
              <div className="text-lg font-semibold">{currentTime}</div>
              <div className="text-xs text-muted-foreground">Local time</div>
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-2 pt-2">
          <MapPin className="w-4 h-4 text-green-500" />
          <span className="text-sm">Bangkok, Thailand</span>
          <Badge variant="outline" className="text-xs ml-auto">Safe zone</Badge>
        </div>
      </CardContent>
    </Card>
  );
};

export default WeatherLocalInfo;
