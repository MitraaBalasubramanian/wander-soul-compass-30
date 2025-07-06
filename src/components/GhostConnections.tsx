import React, { useState, useEffect } from 'react';
import { Users, MapPin, Heart, MessageCircle, Shield, Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { useToast } from '@/hooks/use-toast';

const GhostConnections = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [nearbyTravelers, setNearbyTravelers] = useState([]);
  const [selectedTraveler, setSelectedTraveler] = useState(null);
  const { toast } = useToast();

  // Simulated nearby travelers data
  const generateNearbyTravelers = () => {
    const travelers = [
      {
        id: 1,
        distance: "50m away",
        direction: "Northeast",
        vibe: "Contemplative",
        recentActivity: "Just visited a local bookstore",
        sharedMoment: "Also took a photo of the sunset 20 minutes ago",
        encouragement: "There's magic in wandering without a plan ✨",
        safetyLevel: "Verified solo traveler",
        connectionStrength: 85
      },
      {
        id: 2,
        distance: "120m away",
        direction: "South",
        vibe: "Adventurous",
        recentActivity: "Exploring the old town market",
        sharedMoment: "Both of you stopped at the same café today",
        encouragement: "Trust your instincts - they've brought you this far 🌟",
        safetyLevel: "Community verified",
        connectionStrength: 70
      },
      {
        id: 3,
        distance: "200m away",
        direction: "West",
        vibe: "Peaceful",
        recentActivity: "Sitting in the botanical gardens",
        sharedMoment: "You both chose quiet moments today",
        encouragement: "Sometimes the best discoveries are the quiet ones 🕊️",
        safetyLevel: "Long-time user",
        connectionStrength: 92
      }
    ];
    
    setNearbyTravelers(travelers);
  };

  useEffect(() => {
    if (isVisible) {
      generateNearbyTravelers();
      toast({
        title: "👻 Ghost mode activated",
        description: "You can now sense fellow wanderers nearby.",
      });
    } else {
      setNearbyTravelers([]);
      toast({
        title: "🌫️ Going invisible",
        description: "You're now traveling in complete privacy.",
      });
    }
  }, [isVisible, toast]);

  const getVibeColor = (vibe) => {
    const vibeColors = {
      'Contemplative': 'bg-purple-100 text-purple-800',
      'Adventurous': 'bg-orange-100 text-orange-800',
      'Peaceful': 'bg-green-100 text-green-800',
      'Creative': 'bg-blue-100 text-blue-800',
      'Social': 'bg-pink-100 text-pink-800'
    };
    return vibeColors[vibe] || 'bg-gray-100 text-gray-800';
  };

  const sendEncouragement = (traveler) => {
    toast({
      title: "💌 Encouragement sent",
      description: `Your anonymous support has reached a fellow traveler.`,
    });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold text-foreground">Ghost Connections</h2>
        <p className="text-muted-foreground">Feel less alone, stay private</p>
      </div>

      {/* Privacy Controls */}
      <Card className="wanderheart-gentle-shadow">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="w-5 h-5" />
            Privacy-First Connection
          </CardTitle>
          <p className="text-muted-foreground text-sm">
            Connect with fellow solo travelers while maintaining complete anonymity and safety
          </p>
        </CardHeader>
        
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-wanderheart-cream/30 rounded-lg">
            <div className="flex items-center gap-3">
              {isVisible ? (
                <Eye className="w-5 h-5 text-primary" />
              ) : (
                <EyeOff className="w-5 h-5 text-muted-foreground" />
              )}
              <div>
                <div className="font-medium">
                  {isVisible ? 'Presence Visible' : 'Complete Privacy'}
                </div>
                <div className="text-xs text-muted-foreground">
                  {isVisible 
                    ? 'Other solo travelers can sense your general presence' 
                    : 'You are completely invisible to other travelers'
                  }
                </div>
              </div>
            </div>
            <Switch
              checked={isVisible}
              onCheckedChange={setIsVisible}
            />
          </div>
          
          <div className="text-xs text-muted-foreground p-3 bg-blue-50 rounded-lg border-l-4 border-l-blue-400">
            <strong>Your safety is paramount:</strong> No real names, locations, or personal details are ever shared. 
            Only general presence, mood, and anonymous encouragement.
          </div>
        </CardContent>
      </Card>

      {/* Nearby Travelers */}
      {isVisible && nearbyTravelers.length > 0 && (
        <Card className="wanderheart-gentle-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              Fellow Wanderers Nearby
            </CardTitle>
            <p className="text-muted-foreground text-sm">
              {nearbyTravelers.length} solo travelers are exploring near you
            </p>
          </CardHeader>
          
          <CardContent className="space-y-4">
            {nearbyTravelers.map((traveler) => (
              <div
                key={traveler.id}
                className="p-4 border rounded-lg hover:bg-muted/30 transition-colors"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <Badge variant="outline" className="text-xs">
                      <MapPin className="w-3 h-3 mr-1" />
                      {traveler.distance} {traveler.direction}
                    </Badge>
                    <Badge className={getVibeColor(traveler.vibe)}>
                      {traveler.vibe}
                    </Badge>
                  </div>
                  
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Heart className="w-3 h-3 text-red-400" />
                    {traveler.connectionStrength}% connection
                  </div>
                </div>
                
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <span className="text-muted-foreground">Currently:</span>
                    <span>{traveler.recentActivity}</span>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <span className="text-muted-foreground">Shared moment:</span>
                    <span className="italic text-wanderheart-ocean">
                      {traveler.sharedMoment}
                    </span>
                  </div>
                  
                  <div className="p-3 bg-wanderheart-cream/50 rounded-md border-l-4 border-l-accent">
                    <div className="text-xs text-muted-foreground mb-1">
                      💌 They left encouragement for future travelers:
                    </div>
                    <div className="text-sm italic">
                      "{traveler.encouragement}"
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between mt-4">
                  <Badge variant="outline" className="text-xs">
                    <Shield className="w-3 h-3 mr-1" />
                    {traveler.safetyLevel}
                  </Badge>
                  
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => sendEncouragement(traveler)}
                    className="text-xs"
                  >
                    <MessageCircle className="w-3 h-3 mr-1" />
                    Send Encouragement
                  </Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      )}

      {/* Community Wisdom */}
      <Card className="wanderheart-gentle-shadow">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Heart className="w-5 h-5" />
            Anonymous Wisdom Exchange
          </CardTitle>
          <p className="text-muted-foreground text-sm">
            Leave encouragement for future travelers, receive support from past ones
          </p>
        </CardHeader>
        
        <CardContent className="space-y-4">
          <div className="grid gap-3">
            <div className="p-4 bg-gradient-to-r from-blue-50 to-teal-50 rounded-lg border-l-4 border-l-blue-400">
              <div className="text-sm text-blue-800 mb-1">
                💙 From a traveler who was here 3 days ago:
              </div>
              <div className="italic text-sm">
                "The little café on the corner serves the most amazing local pastry. 
                Don't be afraid to point at what others are eating - they'll understand and smile."
              </div>
            </div>
            
            <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border-l-4 border-l-green-400">
              <div className="text-sm text-green-800 mb-1">
                💚 From a traveler who was here 1 week ago:
              </div>
              <div className="italic text-sm">
                "Trust that feeling in your gut about which street to explore. 
                Some of my most beautiful discoveries came from following curiosity over plans."
              </div>
            </div>
            
            <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border-l-4 border-l-purple-400">
              <div className="text-sm text-purple-800 mb-1">
                💜 From a traveler who was here 2 weeks ago:
              </div>
              <div className="italic text-sm">
                "You're braver than you think. Every solo traveler feels overwhelmed sometimes. 
                That's not weakness - that's growth happening in real time."
              </div>
            </div>
          </div>
          
          <Button className="w-full mt-4" variant="outline">
            <MessageCircle className="w-4 h-4 mr-2" />
            Leave Your Own Wisdom
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default GhostConnections;
