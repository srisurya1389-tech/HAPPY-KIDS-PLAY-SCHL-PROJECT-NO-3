import React from 'react';
import './Alphabet.css';

const ALPHABET = [
  { letter: 'A', word: 'Apple', emoji: '🍎' },
  { letter: 'B', word: 'Ball', emoji: '⚽' },
  { letter: 'C', word: 'Cat', emoji: '🐱' },
  { letter: 'D', word: 'Dog', emoji: '🐶' },
  { letter: 'E', word: 'Elephant', emoji: '🐘' },
  { letter: 'F', word: 'Fish', emoji: '🐟' },
  { letter: 'G', word: 'Grapes', emoji: '🍇' },
  { letter: 'H', word: 'Hat', emoji: '🎩' },
  { letter: 'I', word: 'Ice Cream', emoji: '🍦' },
  { letter: 'J', word: 'Juice', emoji: '🧃' },
  { letter: 'K', word: 'Kite', emoji: '🪁' },
  { letter: 'L', word: 'Lion', emoji: '🦁' },
  { letter: 'M', word: 'Moon', emoji: '🌙' },
  { letter: 'N', word: 'Nest', emoji: '🪺' },
  { letter: 'O', word: 'Orange', emoji: '🍊' },
  { letter: 'P', word: 'Panda', emoji: '🐼' },
  { letter: 'Q', word: 'Queen', emoji: '👑' },
  { letter: 'R', word: 'Rainbow', emoji: '🌈' },
  { letter: 'S', word: 'Sun', emoji: '☀️' },
  { letter: 'T', word: 'Tiger', emoji: '🐯' },
  { letter: 'U', word: 'Umbrella', emoji: '☂️' },
  { letter: 'V', word: 'Van', emoji: '🚐' },
  { letter: 'W', word: 'Whale', emoji: '🐳' },
  { letter: 'X', word: 'Xylophone', emoji: '🎶' },
  { letter: 'Y', word: 'Yo-yo', emoji: '🪀' },
  { letter: 'Z', word: 'Zebra', emoji: '🦓' }
];

const LEARNING_FLOW = [
  { stage: 'Step 1', detail: 'Letter recognition A–M — tracing, songs and picture matching.' },
  { stage: 'Step 2', detail: 'Letter recognition N–Z — tracing, songs and picture matching.' },
  { stage: 'Step 3', detail: 'Phonics sounds — connecting every letter to how it sounds.' },
  { stage: 'Step 4', detail: 'First sight words — simple 3-letter words built from known letters.' },
  { stage: 'Step 5', detail: 'Read-aloud circle time — building confidence with real sentences.' }
];

const Alphabet = () => {
  return (
    <section id="alphabet" className="alphabet section-padding">
      <div className="container">
        <div className="section-title">
          <span className="section-subtitle">ENGLISH ALPHABETS</span>
          <h2>Learning to Read, Starting from A 🔤</h2>
          <p className="alphabet-intro">
            No prior reading needed — every child starts from the very beginning.
            We build English foundations letter by letter, sound by sound.
          </p>
        </div>

        <div className="alphabet-flow">
          {LEARNING_FLOW.map((step) => (
            <div key={step.stage} className="alphabet-flow-item">
              <span className="alphabet-flow-stage">{step.stage}</span>
              {step.detail}
            </div>
          ))}
        </div>

        <div className="alphabet-grid">
          {ALPHABET.map((item) => (
            <div key={item.letter} className="alphabet-card">
              <span className="alphabet-letter">{item.letter}</span>
              <span className="alphabet-emoji">{item.emoji}</span>
              <span className="alphabet-word">{item.word}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Alphabet;
