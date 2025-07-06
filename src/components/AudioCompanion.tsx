
import React, { useState, useRef, useEffect } from 'react';
import { Headphones, Play, Pause, Volume2, VolumeX, Heart, Compass, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';

const AudioCompanion = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState([70]);
  const [isMuted, setIsMuted] = useState(false);
  const progressInterval = useRef<NodeJS.Timeout>();
  const { toast } = useToast();

  const tracks = [
    {
      id: 1,
      title: "Courage Whisper",
      subtitle: "For when you need a gentle push",
      category: "Confidence",
      duration: "5:30",
      icon: Heart,
      description: "A warm voice reminding you of your strength and capability. Perfect for before entering new situations.",
      gradient: "bg-gradient-to-r from-red-100 to-pink-100"
    },
    {
      id: 2,
      title: "Navigation Meditation",
      subtitle: "Stay calm while finding your way",
      category: "Guidance",
      duration: "8:15",
      icon: Compass,
      description: "Breathing techniques and gentle guidance for when you're lost or overwhelmed in new places.",
      gradient: "bg-gradient-to-r from-blue-100 to-teal-100"
    },
    {
      id: 3,
      title: "Evening Reflection",
      subtitle: "Process your day with kindness",
      category: "Reflection",
      duration: "12:45",
      icon: Moon,
      description: "A guided reflection to help you appreciate your daily adventures and prepare for tomorrow.",
      gradient: "bg-gradient-to-r from-purple-100 to-indigo-100"
    },
    {
      id: 4,
      title: "Street Smart Scenarios",
      subtitle: "Build your urban intuition",
      category: "Safety",
      duration: "10:20",
      icon: Compass,
      description: "Interactive scenarios that help you trust your instincts and make safer decisions while exploring.",
      gradient: "bg-gradient-to-r from-green-100 to-emerald-100"
    },
    {
      id: 5,
      title: "Social Courage Boost",
      subtitle: "For approaching new people",
      category: "Social",
      duration: "6:40",
      icon: Heart,
      description: "Confidence-building affirmations and conversation starters for connecting with locals and fellow travelers.",
      gradient: "bg-gradient-to-r from-orange-100 to-yellow-100"
    }
  ];

  const currentAudio = tracks[currentTrack];
  const Icon = currentAudio.icon;

  useEffect(() => {
    if (isPlaying) {
      progressInterval.current = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            setIsPlaying(false);
            setProgress(0);
            toast({
              title: "✨ Session Complete",
              description: `"${currentAudio.title}" has finished. How do you feel?`,
            });
            return 0;
          }
          return prev + 0.5;
        });
      }, 100);
    } else {
      if (progressInterval.current) {
        clearInterval(progressInterval.current);
      }
    }

    return () => {
      if (progressInterval.current) {
        clearInterval(progressInterval.current);
      }
    };
  }, [isPlaying, currentAudio.title, toast]);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
    if (!isPlaying) {
      toast({
        title: `🎧 Now Playing`,
        description: `"${currentAudio.title}" - Let the gentle guidance begin.`,
      });
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const getCurrentTime = () => {
    const totalSeconds = parseInt(currentAudio.duration.replace(':', '')) * 6 / 10; // rough conversion
    return Math.floor((progress / 100) * totalSeconds);
  };

  return (
    <div className="space-y-6">
      {/* Current Playing */}
      <Card className="wanderheart-gentle-shadow bg-gradient-to-br from-wanderheart-cream to-background">
        <CardHeader className="text-center pb-4">
          <div className={`w-24 h-24 rounded-full ${currentAudio.gradient} mx-auto mb-4 flex items-center justify-center shadow-lg`}>
            <Icon className="w-12 h-12 text-gray-700" />
          </div>
          <CardTitle className="text-xl">{currentAudio.title}</CardTitle>
          <p className="text-muted-foreground">{currentAudio.subtitle}</p>
          <Badge variant="secondary" className="w-fit mx-auto">
            {currentAudio.category}
          </Badge>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <p className="text-sm text-muted-foreground text-center leading-relaxed">
            {currentAudio.description}
          </p>
          
          {/* Progress */}
          <div className="space-y-2">
            <Progress value={progress} className="h-2" />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>{formatTime(getCurrentTime())}</span>
              <span>{currentAudio.duration}</span>
            </div>
          </div>
          
          {/* Controls */}
          <div className="flex items-center justify-center gap-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentTrack(Math.max(0, currentTrack - 1))}
              disabled={currentTrack === 0}
            >
              Previous
            </Button>
            
            <Button
              onClick={togglePlayPause}
              size="lg"
              className="w-16 h-16 rounded-full"
            >
              {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
            </Button>
            
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentTrack(Math.min(tracks.length - 1, currentTrack + 1))}
              disabled={currentTrack === tracks.length - 1}
            >
              Next
            </Button>
          </div>
          
          {/* Volume */}
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMute}
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </Button>
            <Slider
              value={isMuted ? [0] : volume}
              onValueChange={setVolume}
              max={100}
              step={1}
              className="flex-1"
            />
            <span className="text-xs text-muted-foreground w-8">
              {isMuted ? 0 : volume[0]}
            </span>
          </div>
        </CardContent>
      </Card>

      {/* Track List */}
      <Card className="wanderheart-gentle-shadow">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Headphones className="w-5 h-5" />
            Audio Library
          </CardTitle>
          <p className="text-muted-foreground text-sm">
            Gentle companions for every moment of your journey
          </p>
        </CardHeader>
        
        <CardContent>
          <div className="space-y-3">
            {tracks.map((track, index) => {
              const TrackIcon = track.icon;
              return (
                <div
                  key={track.id}
                  className={`
                    p-4 rounded-lg border cursor-pointer transition-all duration-200
                    ${index === currentTrack 
                      ? 'bg-primary/5 border-primary shadow-sm' 
                      : 'hover:bg-muted/50'
                    }
                  `}
                  onClick={() => setCurrentTrack(index)}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full ${track.gradient} flex items-center justify-center flex-shrink-0`}>
                      <TrackIcon className="w-5 h-5 text-gray-700" />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium text-sm">{track.title}</h4>
                        <Badge variant="outline" className="text-xs">
                          {track.duration}
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">
                        {track.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AudioCompanion;
