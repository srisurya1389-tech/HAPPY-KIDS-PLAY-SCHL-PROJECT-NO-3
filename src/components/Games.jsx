import React, { useEffect, useState } from 'react';
import './Games.css';

const EMOJIS = ['🍎', '🐻', '🎈', '⭐', '🚗', '🐰'];

const shuffledDeck = () =>
  [...EMOJIS, ...EMOJIS]
    .map((emoji, index) => ({ id: index, emoji, flipped: false, matched: false }))
    .sort(() => Math.random() - 0.5);

const MORE_GAMES = [
  { icon: '🔤', title: 'Alphabet Bingo', desc: 'Match letters to sounds and pictures.' },
  { icon: '🔺', title: 'Shape Sorting', desc: 'Learn shapes through hands-on sorting toys.' },
  { icon: '🔢', title: 'Number Treasure Hunt', desc: 'Search-and-count games that build early math skills.' },
  { icon: '🧩', title: 'Puzzle Time', desc: 'Jigsaw puzzles that build focus and problem-solving.' }
];

const Games = () => {
  const [cards, setCards] = useState(shuffledDeck);
  const [selected, setSelected] = useState([]);
  const [moves, setMoves] = useState(0);

  const won = cards.every((card) => card.matched);

  useEffect(() => {
    if (selected.length !== 2) return;
    const [a, b] = selected;
    setMoves((m) => m + 1);

    if (cards[a].emoji === cards[b].emoji) {
      setCards((prev) =>
        prev.map((card, i) => (i === a || i === b ? { ...card, matched: true } : card))
      );
      setSelected([]);
    } else {
      const timer = setTimeout(() => {
        setCards((prev) =>
          prev.map((card, i) => (i === a || i === b ? { ...card, flipped: false } : card))
        );
        setSelected([]);
      }, 700);
      return () => clearTimeout(timer);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected]);

  const handleCardClick = (index) => {
    if (selected.length === 2 || cards[index].flipped || cards[index].matched) return;
    setCards((prev) => prev.map((card, i) => (i === index ? { ...card, flipped: true } : card)));
    setSelected((prev) => [...prev, index]);
  };

  const playAgain = () => {
    setCards(shuffledDeck());
    setSelected([]);
    setMoves(0);
  };

  return (
    <section id="games" className="games section-padding">
      <div className="container">
        <div className="section-title">
          <span className="section-subtitle">LEARNING THROUGH PLAY</span>
          <h2>Games Kids Love 🎲</h2>
        </div>

        <div className="games-layout">
          <div className="memory-game">
            <div className="memory-header">
              <h3>Memory Match</h3>
              <span className="memory-moves">Moves: {moves}</span>
            </div>

            <div className="memory-grid">
              {cards.map((card, index) => (
                <button
                  key={card.id}
                  className={`memory-card ${card.flipped || card.matched ? 'is-flipped' : ''} ${card.matched ? 'is-matched' : ''}`}
                  onClick={() => handleCardClick(index)}
                  aria-label={card.flipped || card.matched ? card.emoji : 'Hidden card'}
                >
                  {card.flipped || card.matched ? card.emoji : '❓'}
                </button>
              ))}
            </div>

            {won && (
              <div className="memory-won">
                <p>🎉 Matched them all in {moves} moves!</p>
                <button className="btn-primary" onClick={playAgain}>Play Again</button>
              </div>
            )}
            {!won && (
              <button className="btn-secondary memory-reset" onClick={playAgain}>Restart</button>
            )}
          </div>

          <div className="more-games">
            <h3>More games we play</h3>
            <ul className="more-games-list">
              {MORE_GAMES.map((game) => (
                <li key={game.title} className="more-games-item">
                  <span className="more-games-icon">{game.icon}</span>
                  <div>
                    <strong>{game.title}</strong>
                    <p>{game.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Games;
