
import React, { useState, useEffect } from 'react';
import { Shield, Battery, Wifi, MapPin, Signal, Clock, Users, Phone, Heart, CheckCircle, AlertTriangle, Pause, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { useToast } from '@/hooks/use-toast';

const SafetyNetwork = () => {
  const [isActive, setIsActive] = useState(true);
  const [lastCheckin, setLastCheckin] = useState(0);
  const [checkInInterval, setCheckInInterval] = useState(4);
  const { toast } = useToast();

  useEffect(() => {
    const timer = setInterval(() => {
      setLastCheckin(prev => prev + 1);
    }, 60000); // Update every minute

    return () => clearInterval(timer);
  }, []);

  const handleQuickCheckIn = (status: string) => {
    setLastCheckin(0);
    toast({
      title: "✅ Check-in sent",
      description: `Status: ${status} - Your contacts have been notified.`,
    });
  };

  const toggleProtection = () => {
    setIsActive(!isActive);
    toast({
      title: isActive ? "🔒 Protection Paused" : "🛡️ Protection Active",
      description: isActive 
        ? "Safety monitoring is now paused" 
        : "Your safety network is now watching over you",
    });
  };

  const trustedContacts = [
    { name: "Mom", relationship: "Mother", priority: "all", icon: "👩‍👧‍👦" },
    { name: "Sarah", relationship: "Best Friend", priority: "important", icon: "👭" },
    { name: "Travel Buddy", relationship: "Friend", priority: "emergency", icon: "🧳" }
  ];

  const recentCheckins = [
    { time: "2h ago", status: "All Good", location: "Central Park" },
    { time: "6h ago", status: "Exploring", location: "Museum District" },
    { time: "10h ago", status: "Safe at Hotel", location: "Downtown" }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold text-foreground">Safety Network</h2>
        <p className="text-muted-foreground">Invisible protection that watches over you</p>
      </div>

      {/* Protection Status */}
      <Card className="border-0 shadow-lg bg-gradient-to-r from-green-50 to-emerald-50">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                isActive ? 'bg-green-500 animate-pulse' : 'bg-gray-400'
              }`}>
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">
                  {isActive ? 'Protection Active' : 'Protection Paused'}
                </h3>
                <p className="text-sm text-muted-foreground">
                  Last Check-in: {lastCheckin}m ago
                </p>
              </div>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={toggleProtection}
              className="flex items-center gap-2"
            >
              {isActive ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              {isActive ? 'Pause' : 'Resume'}
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="text-center">
              <Users className="w-5 h-5 mx-auto mb-1 text-green-600" />
              <div className="text-sm font-medium">Watching Over</div>
              <div className="text-lg font-bold text-green-600">3 contacts</div>
            </div>
            <div className="text-center">
              <Clock className="w-5 h-5 mx-auto mb-1 text-blue-600" />
              <div className="text-sm font-medium">Check-in Interval</div>
              <div className="text-lg font-bold text-blue-600">{checkInInterval}h</div>
            </div>
          </div>

          {/* Quick Check-in Buttons */}
          <div className="space-y-3">
            <h4 className="font-medium text-sm">Quick Check-in</h4>
            <div className="grid grid-cols-3 gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleQuickCheckIn('All Good')}
                className="flex items-center gap-1 bg-green-50 hover:bg-green-100"
              >
                <CheckCircle className="w-3 h-3 text-green-600" />
                All Good
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleQuickCheckIn('Watchful')}
                className="flex items-center gap-1 bg-yellow-50 hover:bg-yellow-100"
              >
                <AlertTriangle className="w-3 h-3 text-yellow-600" />
                Watchful
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleQuickCheckIn('Need Help')}
                className="flex items-center gap-1 bg-red-50 hover:bg-red-100"
              >
                <Heart className="w-3 h-3 text-red-600" />
                Need Help
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Device Status */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-lg">Device Status</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-3">
              <Battery className="w-5 h-5 text-green-600" />
              <div>
                <div className="font-medium">Battery</div>
                <div className="text-sm text-muted-foreground">78%</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Signal className="w-5 h-5 text-blue-600" />
              <div>
                <div className="font-medium">Signal</div>
                <div className="text-sm text-muted-foreground">Strong</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Wifi className="w-5 h-5 text-purple-600" />
              <div>
                <div className="font-medium">WiFi</div>
                <div className="text-sm text-muted-foreground">Connected</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-red-600" />
              <div>
                <div className="font-medium">Location</div>
                <div className="text-sm text-muted-foreground">Active</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Auto Check-in Settings */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-lg">Auto Check-in Settings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <div className="font-medium mb-3">Check-in Interval: {checkInInterval} hours</div>
            <div className="grid grid-cols-4 gap-2">
              {[1, 4, 6, 12].map((interval) => (
                <Button
                  key={interval}
                  variant={checkInInterval === interval ? "default" : "outline"}
                  size="sm"
                  onClick={() => setCheckInInterval(interval)}
                  className="text-xs"
                >
                  {interval}h
                </Button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Recent Check-ins */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-lg">Recent Check-ins</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {recentCheckins.map((checkin, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
              <div>
                <div className="font-medium text-sm">{checkin.status}</div>
                <div className="text-xs text-muted-foreground">{checkin.location}</div>
              </div>
              <div className="text-xs text-muted-foreground">{checkin.time}</div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Trusted Contacts */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-lg">Trusted Contacts</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {trustedContacts.map((contact, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="text-lg">{contact.icon}</div>
                <div>
                  <div className="font-medium">{contact.name}</div>
                  <div className="text-xs text-muted-foreground">{contact.relationship}</div>
                </div>
              </div>
              <Badge variant="outline" className="text-xs">
                {contact.priority}
              </Badge>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default SafetyNetwork;
