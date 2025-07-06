
import React from 'react';
import { MapPin, Heart, Trophy, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const MetricsDashboard = () => {
  const metrics = [
    {
      icon: MapPin,
      value: '7',
      label: 'Cities explored',
      color: 'text-wanderheart-ocean'
    },
    {
      icon: Heart,
      value: '23',
      label: 'Brave moments',
      color: 'text-red-500'
    },
    {
      icon: Trophy,
      value: '12',
      label: 'Milestones',
      color: 'text-yellow-500'
    },
    {
      icon: Users,
      value: '45',
      label: 'Connections felt',
      color: 'text-wanderheart-sage'
    }
  ];

  return (
    <div className="grid grid-cols-2 gap-3 mb-6">
      {metrics.map((metric, index) => {
        const Icon = metric.icon;
        return (
          <Card 
            key={metric.label}
            className="bg-card/80 backdrop-blur-sm border-0 shadow-sm animate-[fade-in_0.6s_ease-out] hover:scale-105 transition-transform duration-200"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <CardContent className="p-4 text-center">
              <Icon className={`w-6 h-6 mx-auto mb-2 ${metric.color}`} />
              <div className="text-2xl font-bold text-foreground mb-1">
                {metric.value}
              </div>
              <div className="text-xs text-muted-foreground">
                {metric.label}
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default MetricsDashboard;
