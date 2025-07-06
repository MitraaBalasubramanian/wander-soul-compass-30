
import React, { useState } from 'react';
import { BookOpen, Camera, Heart, MapPin, Calendar, Download, Share, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { useToast } from '@/hooks/use-toast';

const StoryWeave = () => {
  const [currentStory, setCurrentStory] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const { toast } = useToast();

  // Simulated story data based on journey
  const journeyData = {
    photos: 47,
    moments: 23,
    emotions: ['curious', 'brave', 'peaceful', 'amazed', 'grateful'],
    locations: ['Historic Quarter', 'Riverside Park', 'Local Market', 'Art District', 'Mountain Viewpoint'],
    interactions: 12,
    discoveries: 8,
    reflections: 15
  };

  const storyTemplates = [
    {
      id: 'courage',
      title: 'The Courage Chronicle',
      theme: 'Personal Growth',
      description: 'A story of how you faced fears and found strength',
      previewText: 'It started with a single step outside my comfort zone...',
      estimatedPages: 8
    },
    {
      id: 'serendipity',
      title: 'Serendipitous Wanderings',
      theme: 'Unexpected Discoveries',
      description: 'The magical moments that happened when you least expected them',
      previewText: 'Some of the most beautiful experiences come unplanned...',
      estimatedPages: 12
    },
    {
      id: 'connections',
      title: 'Threads of Connection',
      theme: 'Human Encounters',
      description: 'The people who touched your journey, even briefly',
      previewText: 'Every smile exchanged, every kindness received...',
      estimatedPages: 10
    },
    {
      id: 'transformation',
      title: 'The Journey Within',
      theme: 'Personal Transformation',
      description: 'How travel changed your perspective and sense of self',
      previewText: 'I left as one person and returned as another...',
      estimatedPages: 15
    }
  ];

  const generateStory = async (template) => {
    setIsGenerating(true);
    
    setTimeout(() => {
      const generatedStory = {
        ...template,
        content: generateStoryContent(template),
        generatedAt: new Date().toISOString(),
        wordCount: Math.floor(Math.random() * 2000) + 1500,
        readingTime: Math.floor(Math.random() * 10) + 5
      };
      
      setCurrentStory(generatedStory);
      setIsGenerating(false);
      
      toast({
        title: "✨ Your story has been woven!",
        description: `"${template.title}" is ready to be cherished forever.`,
      });
    }, 3000);
  };

  const generateStoryContent = (template) => {
    const storyContent = {
      courage: {
        chapters: [
          {
            title: "The First Step",
            content: "Standing at the threshold of adventure, you felt the familiar flutter of nervousness mixed with excitement. The decision to travel solo wasn't made lightly - it was born from a deep desire to know yourself beyond the comfortable boundaries of home.\n\nThat morning, as you shouldered your backpack and took your first independent step into the unknown, you had no idea how profoundly this journey would reshape your understanding of courage.",
            emotions: ['nervous', 'excited', 'determined'],
            location: 'Airport'
          },
          {
            title: "Finding Your Voice",
            content: "The moment you successfully asked for directions in a language that felt foreign on your tongue was transformative. The elderly shopkeeper's patient smile and helpful gestures reminded you that kindness transcends language barriers.\n\nEach small interaction built your confidence like stones in a foundation - ordering coffee, navigating public transport, asking about local customs. These weren't just practical tasks; they were acts of courage disguised as daily life.",
            emotions: ['proud', 'connected', 'growing'],
            location: 'Local Market'
          },
          {
            title: "The Breakthrough",
            content: "There was a moment - perhaps sitting alone in that quiet café or watching the sunset from an unfamiliar hill - when you realized you were no longer the person who started this journey. The fears that once seemed insurmountable now felt like old friends you'd learned to understand.\n\nYou discovered that courage isn't the absence of fear; it's the decision to act despite it. Every solo meal, every navigation challenge, every moment of solitude had been quietly teaching you this truth.",
            emotions: ['peaceful', 'wise', 'transformed'],
            location: 'Mountain Viewpoint'
          }
        ]
      },
      serendipity: {
        chapters: [
          {
            title: "The Unplanned Detour",
            content: "You missed your intended bus stop, and what seemed like a mistake became magic. The unfamiliar neighborhood you found yourself in held treasures no guidebook had mentioned - a hidden garden where locals gathered for evening tea, children's laughter echoing off ancient stone walls.\n\nThis detour taught you your first lesson about serendipity: sometimes getting lost is the only way to be found.",
            emotions: ['surprised', 'delighted', 'curious'],
            location: 'Hidden Garden'
          },
          {
            title: "The Stranger's Kindness",
            content: "When you looked confused studying the museum map, a gentle voice offered help. What began as simple directions evolved into a spontaneous local tour, complete with stories about the neighborhood's history that no tourist would ever hear.\n\nThat afternoon reminded you that the most valuable experiences aren't purchased with money - they're gifted through human connection and openness to unexpected encounters.",
            emotions: ['grateful', 'connected', 'amazed'],
            location: 'Art District'
          },
          {
            title: "The Perfect Timing",
            content: "You arrived at the riverside just as the local festival was beginning. The timing was pure coincidence, but it felt like destiny. Dancing with strangers, sharing food with families who welcomed you like old friends, watching fireworks reflected in the water - these moments couldn't have been planned.\n\nSerendipity, you learned, rewards those who stay open to possibility.",
            emotions: ['joyful', 'included', 'blessed'],
            location: 'Riverside Park'
          }
        ]
      }
    };
    
    return storyContent[template.id] || storyContent.courage;
  };

  return (
    <div className="space-y-6">
      {/* Journey Summary */}
      <Card className="wanderheart-gentle-shadow bg-gradient-to-br from-wanderheart-cream to-background">
        <CardHeader className="text-center">
          <div className="w-20 h-20 wanderheart-gradient rounded-full mx-auto mb-4 flex items-center justify-center">
            <BookOpen className="w-10 h-10 text-white" />
          </div>
          <CardTitle className="text-2xl">Your Journey So Far</CardTitle>
          <p className="text-muted-foreground">
            Ready to weave your experiences into a beautiful story
          </p>
        </CardHeader>
        
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="text-center p-3 bg-wanderheart-cream/30 rounded-lg">
              <Camera className="w-6 h-6 mx-auto mb-2 text-primary" />
              <div className="text-2xl font-bold">{journeyData.photos}</div>
              <div className="text-xs text-muted-foreground">Photos</div>
            </div>
            <div className="text-center p-3 bg-wanderheart-cream/30 rounded-lg">
              <Heart className="w-6 h-6 mx-auto mb-2 text-red-400" />
              <div className="text-2xl font-bold">{journeyData.moments}</div>
              <div className="text-xs text-muted-foreground">Moments</div>
            </div>
            <div className="text-center p-3 bg-wanderheart-cream/30 rounded-lg">
              <MapPin className="w-6 h-6 mx-auto mb-2 text-green-500" />
              <div className="text-2xl font-bold">{journeyData.locations.length}</div>
              <div className="text-xs text-muted-foreground">Places</div>
            </div>
            <div className="text-center p-3 bg-wanderheart-cream/30 rounded-lg">
              <Sparkles className="w-6 h-6 mx-auto mb-2 text-purple-500" />
              <div className="text-2xl font-bold">{journeyData.discoveries}</div>
              <div className="text-xs text-muted-foreground">Discoveries</div>
            </div>
          </div>

          <div className="space-y-3">
            <div>
              <div className="text-sm font-medium mb-2">Emotional Journey</div>
              <div className="flex flex-wrap gap-2">
                {journeyData.emotions.map(emotion => (
                  <Badge key={emotion} variant="secondary" className="capitalize">
                    {emotion}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div>
              <div className="text-sm font-medium mb-2">Places Explored</div>
              <div className="flex flex-wrap gap-2">
                {journeyData.locations.map(location => (
                  <Badge key={location} variant="outline">
                    <MapPin className="w-3 h-3 mr-1" />
                    {location}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {!currentStory ? (
        /* Story Templates */
        <div className="grid gap-6">
          <Card className="wanderheart-gentle-shadow">
            <CardHeader>
              <CardTitle>Choose Your Story Theme</CardTitle>
              <p className="text-muted-foreground text-sm">
                Each theme will weave your experiences into a unique narrative
              </p>
            </CardHeader>
          </Card>
          
          {storyTemplates.map((template) => (
            <Card 
              key={template.id}
              className="wanderheart-gentle-shadow hover:shadow-lg transition-all duration-300 cursor-pointer"
              onClick={() => !isGenerating && generateStory(template)}
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{template.title}</h3>
                    <Badge variant="secondary" className="mb-3">
                      {template.theme}
                    </Badge>
                    <p className="text-muted-foreground text-sm mb-3">
                      {template.description}
                    </p>
                    <div className="italic text-sm text-wanderheart-ocean border-l-4 border-l-accent pl-3">
                      "{template.previewText}"
                    </div>
                  </div>
                  <div className="text-right text-sm text-muted-foreground ml-4">
                    <div>~{template.estimatedPages} pages</div>
                    <div className="text-xs">Estimated length</div>
                  </div>
                </div>
                
                <Button 
                  className="w-full"
                  disabled={isGenerating}
                >
                  {isGenerating ? (
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 animate-spin" />
                      Weaving your story...
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <BookOpen className="w-4 h-4" />
                      Create This Story
                    </div>
                  )}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        /* Generated Story */
        <div className="space-y-6">
          <Card className="wanderheart-gentle-shadow">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-primary mb-2">
                {currentStory.title}
              </CardTitle>
              <Badge variant="secondary">{currentStory.theme}</Badge>
              <div className="flex justify-center gap-6 mt-4 text-sm text-muted-foreground">
                <div>{currentStory.wordCount} words</div>
                <div>{currentStory.readingTime} min read</div>
                <div>{currentStory.content.chapters.length} chapters</div>
              </div>
            </CardHeader>
            
            <CardContent>
              <div className="space-y-6">
                {currentStory.content.chapters.map((chapter, index) => (
                  <div key={index} className="border-l-4 border-l-primary/30 pl-6">
                    <h3 className="text-lg font-semibold mb-3 text-primary">
                      Chapter {index + 1}: {chapter.title}
                    </h3>
                    <div className="prose prose-sm max-w-none text-muted-foreground leading-relaxed mb-4">
                      {chapter.content.split('\n\n').map((paragraph, pIndex) => (
                        <p key={pIndex} className="mb-4">{paragraph}</p>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {chapter.emotions.map(emotion => (
                        <Badge key={emotion} variant="outline" className="text-xs capitalize">
                          {emotion}
                        </Badge>
                      ))}
                      <Badge variant="outline" className="text-xs">
                        <MapPin className="w-3 h-3 mr-1" />
                        {chapter.location}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="flex gap-3 mt-8 pt-6 border-t">
                <Button className="flex-1">
                  <Download className="w-4 h-4 mr-2" />
                  Download Story
                </Button>
                <Button variant="outline" className="flex-1">
                  <Share className="w-4 h-4 mr-2" />
                  Share Story
                </Button>
                <Button 
                  variant="ghost"
                  onClick={() => setCurrentStory(null)}
                >
                  Create Another
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
      
      {isGenerating && (
        <Card className="wanderheart-gentle-shadow">
          <CardContent className="p-8 text-center">
            <Sparkles className="w-12 h-12 mx-auto mb-4 text-primary animate-spin" />
            <h3 className="text-lg font-semibold mb-2">Weaving Your Story</h3>
            <p className="text-muted-foreground mb-4">
              Connecting your moments, emotions, and discoveries into a beautiful narrative...
            </p>
            <Progress value={33} className="w-full max-w-md mx-auto" />
            <p className="text-sm text-muted-foreground mt-2">
              This may take a few moments as we craft something truly special
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default StoryWeave;
