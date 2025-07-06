
import React, { useState } from 'react';
import { Shield, Phone, MapPin, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const EmergencySOS = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isActivated, setIsActivated] = useState(false);
  const { toast } = useToast();

  const handleSOSActivation = () => {
    setIsActivated(true);
    toast({
      title: "🚨 Emergency Alert Sent",
      description: "Help is on the way. Stay calm and stay safe.",
      variant: "destructive"
    });
    
    setTimeout(() => {
      toast({
        title: "📍 Location Shared",
        description: "Your precise location has been sent to emergency contacts.",
      });
    }, 2000);
  };

  const emergencyActions = [
    {
      id: 'call',
      title: 'Emergency Call',
      description: 'Call local emergency services',
      icon: Phone,
      action: () => {
        toast({
          title: "📞 Calling Emergency Services",
          description: "Connecting to local emergency number...",
        });
      }
    },
    {
      id: 'location',
      title: 'Share Location',
      description: 'Send your exact location to trusted contacts',
      icon: MapPin,
      action: () => {
        toast({
          title: "📍 Location Shared",
          description: "GPS coordinates sent to your emergency contacts.",
        });
      }
    },
    {
      id: 'panic',
      title: 'Silent Alert',
      description: 'Discrete help request without drawing attention',
      icon: Heart,
      action: () => {
        toast({
          title: "🤫 Silent Alert Sent",
          description: "Discrete alert sent. Help will arrive quietly.",
        });
      }
    }
  ];

  return (
    <>
      {/* Floating Emergency Button - Made Bigger and More Prominent */}
      <div className="fixed bottom-6 right-6 z-50 animate-[gentle-float_3s_ease-in-out_infinite]">
        <Button
          onClick={() => setIsExpanded(!isExpanded)}
          className={`
            w-16 h-16 rounded-full shadow-2xl transition-all duration-300 hover:scale-110
            ${isActivated 
              ? 'bg-red-500 hover:bg-red-600 animate-pulse ring-4 ring-red-300/50' 
              : 'bg-red-600 hover:bg-red-700 ring-4 ring-red-200/50'
            }
            text-white border-4 border-white/30 backdrop-blur-sm
            shadow-red-500/30 drop-shadow-2xl
          `}
        >
          <Shield className="w-7 h-7" />
          <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-red-600 font-semibold bg-white/95 px-3 py-1 rounded-full shadow-lg animate-pulse">
            SOS
          </span>
        </Button>
      </div>

      {/* Expanded Emergency Panel */}
      {isExpanded && (
        <div className="fixed inset-0 bg-black/50 z-40 flex items-center justify-center p-4 animate-fade-in">
          <Card className="w-full max-w-sm bg-card border-2 border-red-200 animate-scale-in">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-red-100 rounded-full mx-auto mb-4 flex items-center justify-center animate-pulse">
                <Shield className="w-8 h-8 text-red-600" />
              </div>
              <CardTitle className="text-lg text-red-600">Emergency Help</CardTitle>
              <p className="text-xs text-muted-foreground">
                Quick access to safety features when you need them most
              </p>
            </CardHeader>
            
            <CardContent className="space-y-3">
              <Button
                onClick={handleSOSActivation}
                className="w-full bg-red-600 hover:bg-red-700 text-white py-6 text-base font-semibold animate-pulse"
                disabled={isActivated}
              >
                {isActivated ? '🚨 HELP ACTIVATED' : '🆘 GET HELP NOW'}
              </Button>

              <div className="grid grid-cols-1 gap-2 pt-2">
                {emergencyActions.map((action) => {
                  const Icon = action.icon;
                  return (
                    <Button
                      key={action.id}
                      variant="outline"
                      onClick={action.action}
                      className="justify-start h-auto p-3 text-left hover:bg-red-50 transition-colors"
                    >
                      <Icon className="w-4 h-4 mr-3 text-red-600" />
                      <div>
                        <div className="font-medium text-sm">{action.title}</div>
                        <div className="text-xs text-muted-foreground">{action.description}</div>
                      </div>
                    </Button>
                  );
                })}
              </div>

              <Button
                variant="ghost"
                onClick={() => setIsExpanded(false)}
                className="w-full mt-4 text-sm"
              >
                Close
              </Button>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
};

export default EmergencySOS;
