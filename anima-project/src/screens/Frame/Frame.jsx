import React from "react";
import { Card, CardContent } from "../../components/ui/card";

export const Frame = () => {
  const portfolioScreens = [
    {
      id: "home",
      alt: "Portfolio home",
      src: "https://c.animaapp.com/mfeye8fcpO0pkY/img/porfolio-home-desktop.png",
      delay: "0ms",
    },
    {
      id: "home-game-over",
      alt: "Portfolio home game over",
      src: "https://c.animaapp.com/mfeye8fcpO0pkY/img/porfolio-home-desktop-game-over.png",
      delay: "200ms",
    },
    {
      id: "home-v2",
      alt: "Portfolio home v2",
      src: "https://c.animaapp.com/mfeye8fcpO0pkY/img/porfolio-home-desktop-v2.png",
      delay: "400ms",
    },
    {
      id: "about",
      alt: "Portfolio about",
      src: "https://c.animaapp.com/mfeye8fcpO0pkY/img/porfolio-about-desktop.png",
      delay: "600ms",
    },
    {
      id: "projects",
      alt: "Portfolio projects",
      src: "https://c.animaapp.com/mfeye8fcpO0pkY/img/porfolio-projects-desktop.png",
      delay: "800ms",
    },
    {
      id: "contact",
      alt: "Portfolio contact",
      src: "https://c.animaapp.com/mfeye8fcpO0pkY/img/porfolio-contact-desktop.png",
      delay: "1000ms",
    },
    {
      id: "contact-code",
      alt: "Portfolio contact code snippet",
      src: "https://c.animaapp.com/mfeye8fcpO0pkY/img/porfolio-contact-desktop-code-snippet.png",
      delay: "1200ms",
    },
    {
      id: "contact-thank-you",
      alt: "Portfolio contact thank you",
      src: "https://c.animaapp.com/mfeye8fcpO0pkY/img/porfolio-contact-desktop-thank-you.png",
      delay: "1400ms",
    },
    {
      id: "404",
      alt: "404 desktop",
      src: "https://c.animaapp.com/mfeye8fcpO0pkY/img/404-desktop.png",
      delay: "1600ms",
    },
  ];

  return (
    <main
      className="bg-white min-h-screen w-full flex flex-col items-center"
      data-model-id="171:1330"
    >
      <section className="bg-white w-full max-w-[1920px] flex flex-col">
        {portfolioScreens.map((screen, index) => (
          <Card
            key={screen.id}
            className="translate-y-[-1rem] animate-fade-in opacity-0 border-0 shadow-none rounded-none"
            style={{ "--animation-delay": screen.delay }}
          >
            <CardContent className="p-0">
              <img
                className="w-full h-[1080px] object-cover"
                alt={screen.alt}
                src={screen.src}
              />
            </CardContent>
          </Card>
        ))}
      </section>
    </main>
  );
};
