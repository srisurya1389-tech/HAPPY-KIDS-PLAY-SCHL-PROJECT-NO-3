import React from 'react';
import './Team.css';
import directorImg from '../assets/director_portrait_1783747104773.png';
import nurseryTeacherImg from '../assets/nursery_teacher_portrait_1783747117597.png';
import artTeacherImg from '../assets/art_teacher_portrait_1783747129330.png';

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Ms. Sarah Jenkins',
      role: 'Director & Founder',
      education: 'M.Ed. in Child Development',
      experience: '12+ Years Experience',
      quote: '“Every child is a unique flower, and together they make this world a beautiful garden.”',
      image: directorImg,
      bgColor: '#FFE4E6',
      badgeColor: '#FF6B6B'
    },
    {
      id: 2,
      name: 'Ms. Emily Cooper',
      role: 'Nursery Lead Educator',
      education: 'B.S. in Early Childhood Ed',
      experience: '6+ Years Experience',
      quote: '“Watching a toddler achieve a new milestone is the most rewarding feeling in the world.”',
      image: nurseryTeacherImg,
      bgColor: '#E0F7FA',
      badgeColor: '#1C7ED6'
    },
    {
      id: 3,
      name: 'Ms. Chloe Rivera',
      role: 'LKG Creative Arts Lead',
      education: 'Certified Waldorf Educator',
      experience: '5+ Years Experience',
      quote: '“We use colors, music, and dance to let kids express what words cannot yet say.”',
      image: artTeacherImg,
      bgColor: '#FFF3BF',
      badgeColor: '#FFCF54'
    }
  ];

  return (
    <section id="team" className="team section-padding">
      <div className="container">
        <div className="section-title">
          <span className="section-subtitle">OUR EDUCATORS</span>
          <h2>Meet the hearts behind <br/> the hugs</h2>
        </div>

        <div className="team-grid">
          {teamMembers.map(member => (
            <div key={member.id} className="team-card" style={{ '--member-bg': member.bgColor }}>
              <div className="team-image-wrapper">
                <img src={member.image} alt={member.name} className="team-img" />
                <div className="team-experience" style={{ backgroundColor: member.badgeColor }}>
                  {member.experience}
                </div>
              </div>
              <div className="team-info">
                <span className="team-role">{member.role}</span>
                <h3 className="team-name">{member.name}</h3>
                <span className="team-education">🎓 {member.education}</span>
                <p className="team-quote">{member.quote}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
