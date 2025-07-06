
import React, { useState, useEffect } from 'react';
import { Heart, MapPin, Headphones, Trophy, Users, BookOpen, Compass, ChevronRight, User, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { toast } from 'sonner';
import SplashScreen from '@/components/SplashScreen';
import EmergencySOS from '@/components/EmergencySOS';
import MetricsDashboard from '@/components/MetricsDashboard';
import ProfileSection from '@/components/ProfileSection';
import SerendipityGenerator from '@/components/SerendipityGenerator';
import AudioCompanion from '@/components/AudioCompanion';
import MilestoneTracker from '@/components/MilestoneTracker';
import GhostConnections from '@/components/GhostConnections';
import SafetyNetwork from '@/components/SafetyNetwork';
import TodaysFocus from '@/components/TodaysFocus';
import MobileNavigation from '@/components/MobileNavigation';
import WeatherLocalInfo from '@/components/WeatherLocalInfo';
import LocalCultureTips from '@/components/LocalCultureTips';
import NearbyEssentials from '@/components/NearbyEssentials';
import CurrencyConverter from '@/components/CurrencyConverter';
import LanguageHelper from '@/components/LanguageHelper';

const Index = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [activeTab, setActiveTab] = useState('home');
  const [activeFeature, setActiveFeature] = useState<string | null>(null);

  useEffect(() => {
    if (!showSplash) {
      setTimeout(() => {
        toast.success("Welcome back, adventurer! 🌟", {
          description: "Ready for your next journey?",
        });
      }, 500);
    }
  }, [showSplash]);

  const features = [
    {
      id: 'serendipity',
      title: 'Serendipity Generator',
      description: 'Discover magical moments based on your current mood',
      icon: Compass,
      gradient: 'from-wanderheart-sage to-wanderheart-ocean',
      component: SerendipityGenerator
    },
    {
      id: 'audio',
      title: 'Audio Companion',
      description: 'Gentle guidance and meditations for your journey',
      icon: Headphones,
      gradient: 'from-wanderheart-sunset to-accent',
      component: AudioCompanion
    },
    {
      id: 'milestones',
      title: 'Confidence Milestones',
      description: 'Celebrate your brave moments and personal growth',
      icon: Trophy,
      gradient: 'from-yellow-400 to-orange-500',
      component: MilestoneTracker
    },
    {
      id: 'currency',
      title: 'Currency Converter',
      description: 'Quick currency conversion and local price guide',
      icon: User,
      gradient: 'from-green-400 to-emerald-500',
      component: CurrencyConverter
    },
    {
      id: 'language',
      title: 'Language Helper',
      description: 'Essential phrases and pronunciation guide',
      icon: BookOpen,
      gradient: 'from-blue-400 to-indigo-500',
      component: LanguageHelper
    },
    {
      id: 'nearby',
      title: 'Nearby Essentials',
      description: 'Find ATMs, pharmacies, and necessities around you',
      icon: MapPin,
      gradient: 'from-red-400 to-pink-500',
      component: NearbyEssentials
    }
  ];

  const ActiveComponent = features.find(f => f.id === activeFeature)?.component;

  if (showSplash) {
    return <SplashScreen onComplete={() => setShowSplash(false)} />;
  }

  const renderContent = () => {
    if (activeFeature) {
      return (
        <div className="animate-fade-in">
          <div className="flex items-center gap-4 mb-6">
            <Button
              variant="ghost"
              onClick={() => setActiveFeature(null)}
              className="text-muted-foreground hover:text-foreground p-2"
            >
              ← Back
            </Button>
            <div className="flex-1">
              <h2 className="text-xl font-semibold">
                {features.find(f => f.id === activeFeature)?.title}
              </h2>
              <p className="text-sm text-muted-foreground">
                {features.find(f => f.id === activeFeature)?.description}
              </p>
            </div>
          </div>
          
          {ActiveComponent && <ActiveComponent />}
        </div>
      );
    }

    switch (activeTab) {
      case 'home':
        return (
          <div className="space-y-6">
            {/* Your Journey Header */}
            <div className="text-center space-y-2 animate-[fade-in_0.6s_ease-out]">
              <h2 className="text-xl font-bold bg-gradient-to-r from-primary to-wanderheart-ocean bg-clip-text text-transparent">
                Your Journey
              </h2>
              <p className="text-sm text-muted-foreground">Every step is progress</p>
            </div>

            {/* Metrics Dashboard */}
            <div className="animate-[fade-in_0.6s_ease-out_0.2s_both]">
              <MetricsDashboard />
            </div>

            {/* Weather & Local Info */}
            <div className="animate-[fade-in_0.6s_ease-out_0.3s_both]">
              <WeatherLocalInfo />
            </div>

            {/* Today's Focus */}
            <div className="animate-[fade-in_0.6s_ease-out_0.4s_both]">
              <TodaysFocus />
            </div>

            {/* Culture Tips */}
            <div className="animate-[fade-in_0.6s_ease-out_0.5s_both]">
              <LocalCultureTips />
            </div>

            {/* Quick Encouragement */}
            <div className="bg-gradient-to-r from-wanderheart-sage/20 to-wanderheart-ocean/20 rounded-2xl p-4 text-center animate-[fade-in_0.6s_ease-out_0.6s_both]">
              <p className="text-sm font-medium text-foreground mb-1">
                "The world is waiting for your brave heart" 💫
              </p>
              <p className="text-xs text-muted-foreground">
                You've grown so much since your last adventure
              </p>
            </div>
          </div>
        );

      case 'explore':
        return (
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-xl font-bold text-foreground">Explore & Discover</h2>
              <p className="text-sm text-muted-foreground">Find your next adventure</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card 
                    key={feature.id}
                    className="bg-card/80 backdrop-blur-sm border-0 shadow-lg cursor-pointer hover:shadow-xl transition-all duration-300 hover:scale-[1.02] animate-[fade-in_0.6s_ease-out]"
                    onClick={() => setActiveFeature(feature.id)}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CardContent className="p-4 text-center">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mx-auto mb-3 animate-[gentle-float_4s_ease-in-out_infinite]`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="font-semibold text-foreground text-sm mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        );

      case 'safety':
        return <SafetyNetwork />;

      case 'connections':
        return <GhostConnections />;

      case 'profile':
        return (
          <div className="space-y-6">
            <ProfileSection />
            
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                    <span className="text-sm font-medium">Notifications</span>
                    <ChevronRight className="w-4 h-4 text-muted-foreground" />
                  </div>
                  <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                    <span className="text-sm font-medium">Privacy Settings</span>
                    <ChevronRight className="w-4 h-4 text-muted-foreground" />
                  </div>
                  <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                    <span className="text-sm font-medium">Emergency Contacts</span>
                    <ChevronRight className="w-4 h-4 text-muted-foreground" />
                  </div>
                  <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                    <span className="text-sm font-medium">Help & Support</span>
                    <ChevronRight className="w-4 h-4 text-muted-foreground" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      <EmergencySOS />
      
      {/* Mobile Header */}
      <div className="sticky top-0 z-30 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Heart className="w-8 h-8 text-primary animate-pulse" />
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-wanderheart-ocean bg-clip-text text-transparent">
                  Wanderheart
                </h1>
                <p className="text-xs text-muted-foreground">Your travel companion</p>
              </div>
            </div>
            
            {/* Profile Avatar - Updated with cute girl image */}
            <Avatar className="w-12 h-12 ring-2 ring-primary/20 cursor-pointer hover:ring-primary/40 transition-all shadow-lg" onClick={() => setActiveTab('profile')}>
              <AvatarImage src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=150&h=150&fit=crop&crop=face" alt="Profile" />
              <AvatarFallback className="bg-primary/10 text-primary text-sm font-semibold">
                A
              </AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-4 pt-6">
        {renderContent()}
      </div>

      {/* Mobile Navigation */}
      <MobileNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
};

export default Index;
