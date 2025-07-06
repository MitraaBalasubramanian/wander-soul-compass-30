
import React, { useState } from 'react';
import { MessageSquare, Volume2, BookOpen, Heart } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';

const LanguageHelper = () => {
  const [selectedCategory, setSelectedCategory] = useState('essentials');
  const { toast } = useToast();

  const phrases = {
    essentials: [
      { english: "Hello", local: "สวัสดี (Sa-wat-dee)", category: "greeting" },
      { english: "Thank you", local: "ขอบคุณ (Kob-kun)", category: "courtesy" },
      { english: "Excuse me", local: "ขอโทษ (Kor-tot)", category: "courtesy" },
      { english: "How much?", local: "เท่าไหร่ (Tao-rai)", category: "shopping" }
    ],
    emergency: [
      { english: "Help!", local: "ช่วยด้วย! (Chuay duay!)", category: "urgent" },
      { english: "I need a doctor", local: "ฉันต้องการหาหมอ (Chan tong-gan ha mor)", category: "medical" },
      { english: "Where is the police?", local: "สถานีตำรวจอยู่ที่ไหน (Sa-ta-nee tam-ruat yu tee nai)", category: "safety" }
    ],
    food: [
      { english: "I'm vegetarian", local: "ฉันทานมังสวิรัติ (Chan tan mang-sa-wi-rat)", category: "dietary" },
      { english: "Not spicy", local: "ไม่เผ็ด (Mai pet)", category: "preference" },
      { english: "The bill, please", local: "เช็คบิล (Check bin)", category: "payment" }
    ]
  };

  const categories = [
    { id: 'essentials', label: 'Essentials', icon: Heart },
    { id: 'emergency', label: 'Emergency', icon: MessageSquare },
    { id: 'food', label: 'Food', icon: BookOpen }
  ];

  const playPronunciation = (phrase: string) => {
    toast({
      title: "🔊 Playing pronunciation",
      description: `"${phrase}"`,
    });
  };

  return (
    <div className="space-y-4">
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-blue-600" />
            Language Helper
          </CardTitle>
          <p className="text-sm text-muted-foreground">Essential Thai phrases for your journey</p>
        </CardHeader>
        
        <CardContent className="space-y-4">
          {/* Category Selector */}
          <div className="flex gap-2 overflow-x-auto pb-2">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                  className="flex items-center gap-1 whitespace-nowrap"
                >
                  <Icon className="w-3 h-3" />
                  {category.label}
                </Button>
              );
            })}
          </div>
          
          {/* Phrases */}
          <div className="space-y-3">
            {phrases[selectedCategory as keyof typeof phrases].map((phrase, index) => (
              <div key={index} className="p-3 bg-muted/30 rounded-lg">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1">
                    <div className="font-medium text-sm mb-1">{phrase.english}</div>
                    <div className="text-primary font-medium">{phrase.local}</div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => playPronunciation(phrase.local)}
                  >
                    <Volume2 className="w-4 h-4" />
                  </Button>
                </div>
                <Badge variant="secondary" className="text-xs mt-2">
                  {phrase.category}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LanguageHelper;
