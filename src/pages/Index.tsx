import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare } from "lucide-react";
import { useState, useEffect } from "react";

const Index = () => {
  const [isAnimated, setIsAnimated] = useState(false);
  
  useEffect(() => {
    // Запускаем анимацию после монтирования компонента
    setIsAnimated(true);
  }, []);

  const handleTelegramClick = () => {
    window.location.href = "https://t.me/origcrime";
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background p-4">
      <div 
        className={`transform transition-all duration-700 ${
          isAnimated ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <Card className="w-[320px] sm:w-[380px] bg-card border-accent/20 shadow-lg shadow-accent/5">
          <CardHeader className="text-center pb-2">
            <CardTitle className="text-4xl font-bold tracking-tight bg-gradient-to-r from-accent via-accent/80 to-primary bg-clip-text text-transparent">
              ORIGCRIME
            </CardTitle>
            <CardDescription className="text-muted-foreground mt-2">
              Официальный сайт канала
            </CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center pb-6 pt-4">
            <div className="w-24 h-24 rounded-full bg-secondary flex items-center justify-center border-2 border-accent/20">
              <MessageSquare size={50} className="text-accent" />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col gap-4">
            <Button 
              onClick={handleTelegramClick}
              className="w-full py-6 text-lg font-medium bg-accent hover:bg-accent/90 transition-all"
            >
              Перейти в Телеграм
            </Button>
            <p className="text-sm text-muted-foreground text-center">
              t.me/origcrime
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Index;
