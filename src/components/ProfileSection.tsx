
import React from 'react';
import { User, Settings, Heart, Star } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const ProfileSection = () => {
  return (
    <Card className="bg-gradient-to-r from-wanderheart-cream to-card border-0 shadow-lg animate-fade-in">
      <CardHeader className="pb-4">
        <div className="flex items-center space-x-4">
          <Avatar className="w-16 h-16 ring-2 ring-wanderheart-sage ring-offset-2">
            <AvatarImage src="/placeholder.svg" alt="Profile" />
            <AvatarFallback className="bg-wanderheart-sage text-white text-lg font-semibold">
              A
            </AvatarFallback>
          </Avatar>
          
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-foreground">
              Alex Wanderer
            </h3>
            <p className="text-sm text-muted-foreground">
              Solo adventurer since 2023
            </p>
            <div className="flex items-center mt-2 space-x-2">
              <Badge variant="secondary" className="text-xs">
                <Star className="w-3 h-3 mr-1" />
                Explorer
              </Badge>
              <Badge variant="outline" className="text-xs">
                Level 3
              </Badge>
            </div>
          </div>
          
          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
            <Settings className="w-4 h-4" />
          </Button>
        </div>
      </CardHeader>
      
      <CardContent className="pt-0">
        <div className="text-center">
          <p className="text-sm text-muted-foreground mb-3">
            "Every journey teaches something new about courage" 
          </p>
          
          <div className="flex justify-center space-x-4 text-xs text-muted-foreground">
            <div className="flex items-center">
              <Heart className="w-3 h-3 mr-1 text-red-500" />
              <span>Confidence: Growing</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileSection;
