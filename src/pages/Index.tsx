import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare } from "lucide-react";
import { useState, useEffect } from "react";

const Index = () => {
  const [isAnimated, setIsAnimated] = useState(false);
  
  useEffect(() => {
    // Запускаем анимацию после монтирования компонента
    setIsAnimated(true);
    
    // Создаем звезды при монтировании
    createStars();
  }, []);

  const createStars = () => {
    const starsContainer = document.querySelector('.stars');
    if (!starsContainer) return;
    
    // Очищаем контейнер
    starsContainer.innerHTML = '';
    
    // Количество звезд зависит от размера экрана
    const starCount = Math.min(window.innerWidth, window.innerHeight) * 0.15;
    
    for (let i = 0; i < starCount; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      
      // Случайное положение
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      
      // Случайные параметры для анимации
      const size = Math.random() * 2 + 1;
      const opacity = Math.random() * 0.7 + 0.3;
      const duration = Math.random() * 5 + 2 + 's';
      const delay = Math.random() * 5 + 's';
      
      star.style.left = `${x}%`;
      star.style.top = `${y}%`;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.setProperty('--opacity', opacity.toString());
      star.style.setProperty('--duration', duration);
      star.style.setProperty('--delay', delay);
      
      starsContainer.appendChild(star);
    }
  };

  const handleTelegramClick = () => {
    window.location.href = "https://t.me/origcrime";
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background p-4 relative overflow-hidden">
      {/* Фоновые звезды */}
      <div className="stars" />
      
      {/* Основной синий градиент */}
      <div className="absolute inset-0 bg-gradient-radial from-accent/30 via-background/20 to-background pointer-events-none" />
      
      {/* Размытые световые эффекты */}
      <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-accent/20 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-1/3 h-1/3 bg-primary/20 blur-[80px] rounded-full pointer-events-none" />
      
      <div 
        className={`relative z-10 transform transition-all duration-700 ${
          isAnimated ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <Card className="w-[320px] sm:w-[380px] bg-card/60 backdrop-blur-md border-accent/10 shadow-lg shadow-accent/10">
          <CardHeader className="text-center pb-2">
            <CardTitle className="text-4xl font-ustroke tracking-tight bg-gradient-to-r from-primary via-accent to-primary/80 bg-clip-text text-transparent">
              ORIGCRIME
            </CardTitle>
            <CardDescription className="text-muted-foreground mt-2 font-ustroke">
              Официальный сайт канала
            </CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center pb-6 pt-4">
            <div className="w-24 h-24 rounded-full bg-secondary/80 backdrop-blur-sm flex items-center justify-center border border-accent/20 shadow-inner shadow-accent/10">
              <MessageSquare size={50} className="text-primary" />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col gap-4">
            <Button 
              onClick={handleTelegramClick}
              className="w-full py-6 text-lg font-ustroke font-medium bg-accent hover:bg-accent/90 transition-all shadow-md shadow-accent/20"
            >
              Перейти в Телеграм
            </Button>
            <p className="text-sm text-muted-foreground text-center font-ustroke">
              t.me/origcrime
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Index;
