import React, { useState } from 'react';
import { Target, CheckCircle, Circle, Sparkles } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const TodaysFocus = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Explore the local market", completed: false, icon: "🛒" },
    { id: 2, text: "Try a traditional local dish", completed: false, icon: "🍽️" }
  ]);
  
  const toggleTask = (taskId: number) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
    
    const task = tasks.find(t => t.id === taskId);
    if (task && !task.completed) {
      toast.success("🎉 Great job!", {
        description: `You completed: ${task.text}`,
      });
    }
  };

  const completedCount = tasks.filter(task => task.completed).length;

  return (
    <Card className="border-0 shadow-lg bg-gradient-to-r from-wanderheart-cream to-accent/10">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-lg">
          <Target className="w-5 h-5 text-accent" />
          Today's Focus
          <Sparkles className="w-4 h-4 text-yellow-500 ml-auto" />
        </CardTitle>
        <p className="text-xs text-muted-foreground">
          {completedCount}/{tasks.length} completed
        </p>
      </CardHeader>
      
      <CardContent className="pt-0 space-y-3">
        {tasks.map((task) => (
          <div
            key={task.id}
            className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-200 cursor-pointer hover:bg-white/50 ${
              task.completed ? 'bg-green-50 opacity-75' : 'bg-white/30'
            }`}
            onClick={() => toggleTask(task.id)}
          >
            <div className="text-lg">{task.icon}</div>
            <div className="flex-1">
              <span className={`text-sm ${task.completed ? 'line-through text-muted-foreground' : 'text-foreground'}`}>
                {task.text}
              </span>
            </div>
            {task.completed ? (
              <CheckCircle className="w-5 h-5 text-green-600" />
            ) : (
              <Circle className="w-5 h-5 text-muted-foreground" />
            )}
          </div>
        ))}
        
        {completedCount === tasks.length && (
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <div className="text-lg mb-1">🎉</div>
            <div className="text-sm font-medium text-green-800">
              Amazing! You've completed all your focus tasks for today!
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default TodaysFocus;
