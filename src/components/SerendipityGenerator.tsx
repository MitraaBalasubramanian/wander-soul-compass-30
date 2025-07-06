
import React, { useState } from 'react';
import { Compass, Sparkles, MapPin, Clock, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';

const SerendipityGenerator = () => {
  const [currentMood, setCurrentMood] = useState<string | null>(null);
  const [suggestion, setSuggestion] = useState<any>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const { toast } = useToast();

  const moods = [
    { id: 'curious', emoji: '🤔', label: 'Curious', color: 'bg-blue-100 text-blue-800' },
    { id: 'adventurous', emoji: '🌟', label: 'Adventurous', color: 'bg-orange-100 text-orange-800' },
    { id: 'peaceful', emoji: '🕊️', label: 'Peaceful', color: 'bg-green-100 text-green-800' },
    { id: 'creative', emoji: '🎨', label: 'Creative', color: 'bg-purple-100 text-purple-800' },
    { id: 'social', emoji: '🤝', label: 'Social', color: 'bg-pink-100 text-pink-800' },
    { id: 'reflective', emoji: '🌙', label: 'Reflective', color: 'bg-indigo-100 text-indigo-800' }
  ];

  const suggestions = {
    curious: [
      {
        title: "The Hidden Museum Basement",
        description: "Most museums have storage areas with incredible pieces not on display. Ask a curator about what's 'behind the scenes'.",
        location: "Local History Museum",
        time: "30-60 minutes",
        serendipity: "You might discover a story that changes how you see this place forever."
      },
      {
        title: "Follow the Locals' Coffee Trail",
        description: "Find where office workers grab their afternoon coffee. Strike up conversations about their favorite hidden spots.",
        location: "Business district",
        time: "45 minutes",
        serendipity: "You could uncover the city's best-kept culinary secrets."
      }
    ],
    adventurous: [
      {
        title: "The Sunrise Challenge",
        description: "Wake up before dawn and find the highest accessible point in the city. Watch the world wake up with you.",
        location: "City viewpoint or hill",
        time: "2-3 hours",
        serendipity: "You might meet other early risers with incredible stories to share."
      },
      {
        title: "Random Bus Adventure",
        description: "Take a bus to its final stop in a direction you've never explored. Walk back partway, discovering new neighborhoods.",
        location: "Public transport",
        time: "Half day",
        serendipity: "You could stumble upon a festival, market, or community event."
      }
    ],
    peaceful: [
      {
        title: "Garden Meditation Walk",
        description: "Visit a botanical garden and sit by different plants for 5 minutes each. Notice how each spot feels different.",
        location: "Botanical garden or park",
        time: "60-90 minutes",
        serendipity: "You might find your new favorite thinking spot or meet a wise gardener."
      },
      {
        title: "Library Time Travel",
        description: "Find old newspapers from exactly 50 years ago today. Read about what people were worried about then.",
        location: "Public library",
        time: "45 minutes",
        serendipity: "You could gain perspective that shifts how you see current challenges."
      }
    ],
    creative: [
      {
        title: "Street Art Treasure Hunt",
        description: "Follow murals and street art like breadcrumbs. Each piece leads you to explore a new area of the city.",
        location: "Arts districts",
        time: "2-3 hours",
        serendipity: "You might witness art being created or meet the artists themselves."
      },
      {
        title: "Photo Series Challenge",
        description: "Create a photo series of 'Doorways' or 'Windows' or 'Shadows'. Let the theme guide your wandering.",
        location: "Old neighborhoods",
        time: "60-90 minutes",
        serendipity: "You could capture a moment that becomes your favorite travel photo."
      }
    ],
    social: [
      {
        title: "Community Kitchen Experience",
        description: "Find a community center offering cooking classes or communal meals. Join in and learn local recipes.",
        location: "Community center",
        time: "2-3 hours",
        serendipity: "You might be invited to someone's home for a traditional meal."
      },
      {
        title: "Language Exchange Café",
        description: "Visit a café known for international visitors. Offer to help someone with English in exchange for local tips.",
        location: "International café or hostel",
        time: "60-90 minutes",
        serendipity: "You could make a friend who shows you their secret local spots."
      }
    ],
    reflective: [
      {
        title: "Cemetery Stories",
        description: "Visit an old cemetery and read headstones from different eras. Reflect on the lives and times they represent.",
        location: "Historic cemetery",
        time: "60 minutes",
        serendipity: "You might discover fascinating local history or meet someone researching family roots."
      },
      {
        title: "Sunset Letter Writing",
        description: "Find a quiet spot with a view. Write a letter to your future self about this moment and this place.",
        location: "Scenic overlook or waterfront",
        time: "45 minutes",
        serendipity: "You could have a profound realization about your journey or life direction."
      }
    ]
  };

  const generateSuggestion = () => {
    if (!currentMood) return;
    
    setIsGenerating(true);
    
    setTimeout(() => {
      const moodSuggestions = suggestions[currentMood as keyof typeof suggestions];
      const randomSuggestion = moodSuggestions[Math.floor(Math.random() * moodSuggestions.length)];
      setSuggestion(randomSuggestion);
      setIsGenerating(false);
      
      toast({
        title: "✨ Serendipity awaits!",
        description: "Your mood-matched adventure is ready.",
      });
    }, 2000);
  };

  return (
    <div className="space-y-6">
      <Card className="wanderheart-gentle-shadow">
        <CardHeader className="text-center">
          <div className="w-16 h-16 wanderheart-gradient rounded-full mx-auto mb-4 flex items-center justify-center">
            <Compass className="w-8 h-8 text-white" />
          </div>
          <CardTitle className="text-2xl">How are you feeling right now?</CardTitle>
          <p className="text-muted-foreground">
            Your current mood will guide us to the perfect serendipitous experience
          </p>
        </CardHeader>
        
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
            {moods.map((mood) => (
              <Button
                key={mood.id}
                variant={currentMood === mood.id ? "default" : "outline"}
                onClick={() => setCurrentMood(mood.id)}
                className="h-auto p-4 flex flex-col items-center gap-2"
              >
                <span className="text-2xl">{mood.emoji}</span>
                <span className="text-sm font-medium">{mood.label}</span>
              </Button>
            ))}
          </div>
          
          <Button
            onClick={generateSuggestion}
            disabled={!currentMood || isGenerating}
            className="w-full py-6 text-lg"
          >
            {isGenerating ? (
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 animate-spin" />
                Weaving magic...
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5" />
                Generate My Serendipity
              </div>
            )}
          </Button>
        </CardContent>
      </Card>

      {suggestion && (
        <Card className="wanderheart-gentle-shadow animate-fade-in border-l-4 border-l-primary">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle className="text-xl text-primary mb-2">
                  {suggestion.title}
                </CardTitle>
                <p className="text-muted-foreground leading-relaxed">
                  {suggestion.description}
                </p>
              </div>
              <Heart className="w-6 h-6 text-red-400 wanderheart-float" />
            </div>
          </CardHeader>
          
          <CardContent className="space-y-4">
            <div className="flex flex-wrap gap-3">
              <Badge variant="secondary" className="flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                {suggestion.location}
              </Badge>
              <Badge variant="secondary" className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {suggestion.time}
              </Badge>
            </div>
            
            <div className="p-4 bg-wanderheart-cream/50 rounded-lg border-l-4 border-l-accent">
              <p className="text-sm font-medium text-accent-foreground mb-1">
                ✨ Serendipity Potential:
              </p>
              <p className="text-sm text-muted-foreground italic">
                {suggestion.serendipity}
              </p>
            </div>
            
            <div className="flex gap-3">
              <Button className="flex-1">
                Accept This Adventure
              </Button>
              <Button variant="outline" onClick={generateSuggestion}>
                Try Another
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default SerendipityGenerator;
