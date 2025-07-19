import React, { useState, useEffect } from 'react';
import Card from './components/Card';
import './App.css';

const baseImages = [
  '/card1.png',
  '/card2.png',
  '/card3.png',
  '/card4.png',
  '/card5.png',
  '/card6.png',
  '/card7.png',
  '/card8.png',
  '/card9.png',
  '/card10.png',
  '/card11.png',
  '/card12.png',
  '/card13.png',
  '/card14.png',
  '/card15.png',
  '/card16.png',
];

const images = [...baseImages, ...baseImages];

function App() {
  const [cards, setCards] = useState([]);
  const [selected, setSelected] = useState([]);
  const [matched, setMatched] = useState([]);

  useEffect(() => {
    const shuffled = [...images]
      .sort(() => 0.5 - Math.random())
      .map((img, index) => ({
        id: index,
        img,
        flipped: false,
      }));
    setCards(shuffled);
  }, []);

  const handleClick = (index) => {
    if (selected.length === 2 || cards[index].flipped) return;

    const newCards = [...cards];
    newCards[index].flipped = true;
    const newSelected = [...selected, index];

    setCards(newCards);
    setSelected(newSelected);

    if (newSelected.length === 2) {
      const [first, second] = newSelected;
      if (newCards[first].img === newCards[second].img) {
        setMatched((prev) => [...prev, newCards[first].img]);
        setSelected([]);
      } else {
        setTimeout(() => {
          newCards[first].flipped = false;
          newCards[second].flipped = false;
          setCards([...newCards]);
          setSelected([]);
        }, 1000);
      }
    }
  };

  return (
    <>
      <div className="video-background">
        <video autoPlay loop muted playsInline>
          <source src="/fundo-universo.mp4" type="video/mp4" />
          Seu navegador não suporta vídeo.
        </video>
      </div>

      <div className="app">
        <h1>Jogo da Memória</h1>
        <div className="grid">
          {cards.map((card, index) => (
            <Card
              key={card.id}
              imagem={card.img}
              virada={card.flipped}
              onClick={() => handleClick(index)}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
