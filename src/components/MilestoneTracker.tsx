
import React, { useState } from 'react';
import { Trophy, Star, Heart, Compass, CheckCircle, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const MilestoneTracker = () => {
  const [newMilestone, setNewMilestone] = useState({ title: '', description: '' });
  const [showAddForm, setShowAddForm] = useState(false);
  const [milestones, setMilestones] = useState([
    {
      id: 1,
      title: "Asked for directions in local language",
      description: "Successfully communicated with a local shopkeeper despite the language barrier",
      category: "Communication",
      completed: true,
      dateCompleted: "2024-01-15",
      confidenceGain: 15
    },
    {
      id: 2,
      title: "Ate alone at a local restaurant",
      description: "Enjoyed a peaceful meal by myself at a traditional family restaurant",
      category: "Self-confidence",
      completed: true,
      dateCompleted: "2024-01-14",
      confidenceGain: 20
    },
    {
      id: 3,
      title: "Navigate public transport solo",
      description: "Figure out the metro system and get to my destination independently",
      category: "Independence",
      completed: false,
      confidenceGain: 25
    },
    {
      id: 4,
      title: "Strike up conversation with fellow traveler",
      description: "Make a genuine connection with someone new while staying safe",
      category: "Social",
      completed: false,
      confidenceGain: 30
    },
    {
      id: 5,
      title: "Visit a cultural site off the beaten path",
      description: "Discover and explore a place not mentioned in guidebooks",
      category: "Adventure",
      completed: false,
      confidenceGain: 35
    }
  ]);

  const { toast } = useToast();

  const totalConfidence = milestones
    .filter(m => m.completed)
    .reduce((sum, m) => sum + m.confidenceGain, 0);
  
  const maxPossibleConfidence = milestones
    .reduce((sum, m) => sum + m.confidenceGain, 0);

  const completedCount = milestones.filter(m => m.completed).length;

  const categories = [
    { name: 'Communication', color: 'bg-blue-100 text-blue-800', icon: '💬' },
    { name: 'Self-confidence', color: 'bg-purple-100 text-purple-800', icon: '💫' },
    { name: 'Independence', color: 'bg-green-100 text-green-800', icon: '🗺️' },
    { name: 'Social', color: 'bg-pink-100 text-pink-800', icon: '👥' },
    { name: 'Adventure', color: 'bg-orange-100 text-orange-800', icon: '🌟' }
  ];

  const completeMilestone = (id: number) => {
    setMilestones(prev => prev.map(m => 
      m.id === id ? { 
        ...m, 
        completed: true, 
        dateCompleted: new Date().toISOString().split('T')[0] 
      } : m
    ));
    
    const milestone = milestones.find(m => m.id === id);
    if (milestone) {
      toast({
        title: "🎉 Milestone Achieved!",
        description: `You've gained +${milestone.confidenceGain} confidence points! You're growing stronger.`,
      });
    }
  };

  const addMilestone = () => {
    if (!newMilestone.title.trim()) return;
    
    const newId = Math.max(...milestones.map(m => m.id)) + 1;
    setMilestones(prev => [...prev, {
      id: newId,
      title: newMilestone.title,
      description: newMilestone.description,
      category: 'Personal',
      completed: false,
      confidenceGain: 20
    }]);
    
    setNewMilestone({ title: '', description: '' });
    setShowAddForm(false);
    
    toast({
      title: "✨ New milestone created!",
      description: "Another opportunity to grow and build confidence.",
    });
  };

  const getCategoryInfo = (categoryName: string) => {
    return categories.find(c => c.name === categoryName) || 
           { name: categoryName, color: 'bg-gray-100 text-gray-800', icon: '📝' };
  };

  return (
    <div className="space-y-6">
      {/* Progress Overview */}
      <Card className="wanderheart-gentle-shadow bg-gradient-to-br from-wanderheart-cream to-background">
        <CardHeader className="text-center">
          <div className="w-20 h-20 wanderheart-sunset-gradient rounded-full mx-auto mb-4 flex items-center justify-center">
            <Trophy className="w-10 h-10 text-white" />
          </div>
          <CardTitle className="text-2xl">Your Confidence Journey</CardTitle>
          <p className="text-muted-foreground">
            Every brave step builds your travel confidence
          </p>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <div className="text-center space-y-2">
            <div className="text-3xl font-bold text-primary">
              {totalConfidence}
            </div>
            <div className="text-sm text-muted-foreground">
              Confidence Points Earned
            </div>
            <Progress 
              value={(totalConfidence / maxPossibleConfidence) * 100} 
              className="h-3 mt-2"
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-4 bg-wanderheart-cream/30 rounded-lg">
              <div className="text-2xl font-bold text-green-600">
                {completedCount}
              </div>
              <div className="text-xs text-muted-foreground">
                Milestones Achieved
              </div>
            </div>
            <div className="text-center p-4 bg-wanderheart-cream/30 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">
                {milestones.length - completedCount}
              </div>
              <div className="text-xs text-muted-foreground">
                Adventures Ahead
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Add New Milestone */}
      <Card className="wanderheart-gentle-shadow">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Plus className="w-5 h-5" />
              Create Personal Challenge
            </CardTitle>
            <Button
              variant="outline"
              onClick={() => setShowAddForm(!showAddForm)}
            >
              {showAddForm ? 'Cancel' : 'Add New'}
            </Button>
          </div>
        </CardHeader>
        
        {showAddForm && (
          <CardContent className="space-y-4">
            <Input
              placeholder="What challenge would you like to set for yourself?"
              value={newMilestone.title}
              onChange={(e) => setNewMilestone(prev => ({ ...prev, title: e.target.value }))}
            />
            <Textarea
              placeholder="Describe why this challenge matters to you..."
              value={newMilestone.description}
              onChange={(e) => setNewMilestone(prev => ({ ...prev, description: e.target.value }))}
              className="min-h-[80px]"
            />
            <Button onClick={addMilestone} className="w-full">
              Create My Challenge
            </Button>
          </CardContent>
        )}
      </Card>

      {/* Milestones List */}
      <div className="space-y-4">
        {milestones.map((milestone) => {
          const categoryInfo = getCategoryInfo(milestone.category);
          
          return (
            <Card 
              key={milestone.id}
              className={`
                wanderheart-gentle-shadow transition-all duration-300
                ${milestone.completed 
                  ? 'bg-green-50/50 border-green-200' 
                  : 'hover:shadow-md cursor-pointer'
                }
              `}
              onClick={() => !milestone.completed && completeMilestone(milestone.id)}
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className={`
                    w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0
                    ${milestone.completed 
                      ? 'bg-green-100 text-green-600' 
                      : 'bg-gray-100 text-gray-400'
                    }
                  `}>
                    {milestone.completed ? (
                      <CheckCircle className="w-6 h-6" />
                    ) : (
                      <Star className="w-6 h-6" />
                    )}
                  </div>
                  
                  <div className="flex-1 space-y-2">
                    <div className="flex items-start justify-between">
                      <h3 className={`
                        font-semibold
                        ${milestone.completed 
                          ? 'text-green-800 line-through' 
                          : 'text-foreground'
                        }
                      `}>
                        {milestone.title}
                      </h3>
                      <Badge className={categoryInfo.color}>
                        {categoryInfo.icon} {milestone.category}
                      </Badge>
                    </div>
                    
                    <p className="text-sm text-muted-foreground">
                      {milestone.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Heart className="w-4 h-4 text-red-400" />
                        <span className="text-sm text-muted-foreground">
                          +{milestone.confidenceGain} confidence
                        </span>
                      </div>
                      
                      {milestone.completed && (
                        <span className="text-xs text-green-600">
                          Completed {milestone.dateCompleted}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default MilestoneTracker;
