
import React, { useState } from 'react';
import { Lightbulb, Heart, HandHeart, Users, Utensils } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const LocalCultureTips = () => {
  const [currentTip, setCurrentTip] = useState(0);

  const tips = [
    {
      title: "Greeting Etiquette",
      content: "The traditional Thai greeting is the 'wai' - palms together, slight bow. The higher the hands, the more respect shown.",
      icon: HandHeart,
      category: "Respect",
      color: "text-pink-500"
    },
    {
      title: "Temple Visits",
      content: "Cover shoulders and legs. Remove shoes before entering. Never point feet toward Buddha statues.",
      icon: Heart,
      category: "Sacred",
      color: "text-purple-500"
    },
    {
      title: "Street Food Joy",
      content: "Embrace the adventure! Point at what looks good, smile, and don't worry about perfect communication.",
      icon: Utensils,
      category: "Food",
      color: "text-orange-500"
    },
    {
      title: "Bargaining Spirit",
      content: "Haggling is expected at markets! Start at 50% of asking price, smile, and have fun with it.",
      icon: Users,
      category: "Shopping",
      color: "text-green-500"
    }
  ];

  const nextTip = () => {
    setCurrentTip((prev) => (prev + 1) % tips.length);
  };

  const currentTipData = tips[currentTip];
  const Icon = currentTipData.icon;

  return (
    <Card className="border-0 shadow-lg bg-gradient-to-r from-wanderheart-cream to-yellow-50">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-base">
          <Lightbulb className="w-4 h-4 text-yellow-500" />
          Culture Compass
        </CardTitle>
      </CardHeader>
      
      <CardContent className="pt-0 space-y-4">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Icon className={`w-5 h-5 ${currentTipData.color}`} />
            <Badge variant="secondary" className="text-xs">
              {currentTipData.category}
            </Badge>
          </div>
          
          <div>
            <h4 className="font-semibold text-sm mb-2">{currentTipData.title}</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {currentTipData.content}
            </p>
          </div>
        </div>
        
        <div className="flex items-center justify-between pt-2">
          <div className="flex gap-1">
            {tips.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentTip ? 'bg-primary' : 'bg-muted'
                }`}
              />
            ))}
          </div>
          
          <button
            onClick={nextTip}
            className="text-xs text-primary hover:text-primary/80 transition-colors"
          >
            Next tip →
          </button>
        </div>
      </CardContent>
    </Card>
  );
};

export default LocalCultureTips;
