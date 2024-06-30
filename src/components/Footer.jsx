import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>Explore more about Jujutsu Kaisen:</p>
        <ul className="footer-links">
          <li><a href="https://jujutsu-kaisen.fandom.com/wiki/Jujutsu_Kaisen_Wiki">Characters</a></li>
          <li><a href="https://anicrush.to/search?keyword=jujutsu+">Episodes</a></li>
          <li><a href="https://mangareader.to/jujutsu-kaisen-168#list-chapter">Manga</a></li>
          <li><a href="https://jujutsukaisen.store/">Merchandise</a></li>
        </ul>
      </div>
      <div className="footer-info">
        <p>&copy; 2024 JJK Fan Club</p>
        <p>Designed  ❤️ Pradeepraja</p>
      </div>
    </footer>
  );
};

export default Footer;
