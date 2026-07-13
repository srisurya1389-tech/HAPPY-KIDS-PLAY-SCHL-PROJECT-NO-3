import React, { useState } from 'react';
import './ParentResources.css';

const ParentResources = () => {
  const [activeArticle, setActiveArticle] = useState(null);

  const articles = [
    {
      id: 1,
      tag: 'Preschool Prep',
      readTime: '3 min read',
      title: '5 Tips for transitioning your toddler to preschool',
      summary: 'Starting preschool is a major milestone. Learn how visual routines, positive chat, and gradual drop-offs ease separation anxiety.',
      content: `Starting school is an emotional milestone for both parent and child. Here are 5 practical ways to prepare:
      1. Visit the School Together: Walk around the classrooms and playground before the first day.
      2. Set a Visual Schedule: Draw pictures of the morning routine (brush teeth, put on bag, say goodbye).
      3. Keep Goodbye Short & Positive: A quick hug and a confident smile reassure your child that they are safe.
      4. Talk about the Fun Activities: Emphasize coloring, storytelling, and playtime.
      5. Plan a Special Pickup Greeting: Give them something fun to look forward to at the end of the day.`,
      icon: '🎒'
    },
    {
      id: 2,
      tag: 'Child Development',
      readTime: '4 min read',
      title: 'Why sensory play is crucial for brain development',
      summary: 'Sensory play builds nerve connections in the brain\'s pathways. Discover the benefits of mud, dough, and water play.',
      content: `Sensory activities stimulate a child's senses: sight, sound, touch, taste, and smell. Here is why it matters:
      - Brain Pathways: Actively builds neural connections that support complex thinking and cognitive tasks.
      - Motor Skills: Pinching, pouring, and mixing strengthen small hand muscles (fine motor skills).
      - Language Skills: Descriptive words like "squishy," "crunchy," and "warm" expand your child's vocabulary.
      - Emotional Regulation: Sensory bins (like kinetic sand or water bowls) have a natural calming effect.`,
      icon: '🧠'
    },
    {
      id: 3,
      tag: 'Healthy Living',
      readTime: '5 min read',
      title: 'Quick nutritious breakfast ideas for active school mornings',
      summary: 'Energize your little explorer! Explore kid-approved, quick-prep breakfast ideas loaded with protein and healthy fats.',
      content: `A wholesome breakfast fuels cognitive focus and playground energy. Try these quick preschooler recipes:
      - Banana Oatmeal Pancakes: Just blender oats, a ripe banana, and one egg cooked in butter.
      - Rainbow Fruit Parfait: Greek yogurt topped with honey, strawberries, and a dash of chia seeds.
      - Nut Butter Toast with Smiles: Whole-grain toast with almond butter, using banana slices for eyes and a strawberry for the mouth.
      - Egg & Cheese Egg Bites: Whisk eggs, cheese, and spinach, bake in muffin cups for grab-and-go mornings.`,
      icon: '🍌'
    }
  ];

  return (
    <section id="resources" className="parent-resources section-padding">
      <div className="container">
        <div className="section-title">
          <span className="section-subtitle">PARENT CORNER</span>
          <h2>Resources & Child Development Tips</h2>
        </div>

        <div className="resources-grid">
          {articles.map(art => (
            <div key={art.id} className="resource-card">
              <div className="resource-header">
                <span className="resource-tag">{art.tag}</span>
                <span className="resource-time">{art.readTime}</span>
              </div>
              <div className="resource-body">
                <span className="resource-card-icon">{art.icon}</span>
                <h3>{art.title}</h3>
                <p>{art.summary}</p>
              </div>
              <button 
                className="btn-secondary resource-btn" 
                onClick={() => setActiveArticle(art)}
              >
                Read Article 📖
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Article Detail Modal */}
      {activeArticle && (
        <div className="article-modal-overlay" onClick={() => setActiveArticle(null)}>
          <div className="article-modal" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setActiveArticle(null)}>✖</button>
            <div className="article-modal-header">
              <span className="resource-tag">{activeArticle.tag}</span>
              <span className="resource-time">{activeArticle.readTime}</span>
            </div>
            <h2>{activeArticle.title}</h2>
            <div className="article-modal-body">
              <p className="article-content-text">{activeArticle.content}</p>
            </div>
            <button className="btn-primary" onClick={() => setActiveArticle(null)} style={{ marginTop: '20px' }}>
              Close Article
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ParentResources;
