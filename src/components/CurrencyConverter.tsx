
import React, { useState } from 'react';
import { DollarSign, ArrowUpDown, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const CurrencyConverter = () => {
  const [amount, setAmount] = useState('100');
  const [convertedAmount, setConvertedAmount] = useState('3,420');
  const { toast } = useToast();

  const handleConvert = () => {
    // Mock conversion calculation
    const newAmount = (parseFloat(amount) * 34.2).toLocaleString();
    setConvertedAmount(newAmount);
    
    toast({
      title: "💱 Converted!",
      description: `$${amount} = ฿${newAmount} THB`,
    });
  };

  return (
    <div className="space-y-6">
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <DollarSign className="w-5 h-5 text-green-600" />
            Quick Convert
          </CardTitle>
        </CardHeader>
        
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Input
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter amount"
                className="flex-1"
              />
              <span className="text-sm font-medium text-muted-foreground">USD</span>
            </div>
            
            <div className="flex justify-center">
              <ArrowUpDown className="w-4 h-4 text-muted-foreground" />
            </div>
            
            <div className="flex items-center gap-2">
              <div className="flex-1 p-3 bg-muted/30 rounded-lg">
                <span className="text-lg font-semibold">฿{convertedAmount}</span>
              </div>
              <span className="text-sm font-medium text-muted-foreground">THB</span>
            </div>
          </div>
          
          <Button onClick={handleConvert} className="w-full" size="sm">
            Convert Now
          </Button>
          
          <div className="flex items-center justify-center gap-1 text-xs text-muted-foreground">
            <TrendingUp className="w-3 h-3" />
            <span>Rate: 1 USD = 34.20 THB</span>
          </div>
        </CardContent>
      </Card>

      {/* Quick Reference */}
      <Card className="border-0 shadow-sm bg-gradient-to-r from-green-50 to-emerald-50">
        <CardContent className="p-4">
          <h4 className="font-medium text-sm mb-2">💡 Local Price Guide</h4>
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div>Coffee: ฿80-150</div>
            <div>Street food: ฿50-120</div>
            <div>Local transport: ฿15-40</div>
            <div>Water bottle: ฿15-25</div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CurrencyConverter;
