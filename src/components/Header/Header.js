import React, { useState } from 'react';
import './Header.css';
import moon from '../../assets/icon-moon.svg';
import sun from '../../assets/icon-sun.svg';

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const onThemeClick = () => {
    const modeToggle = document.getElementById('root');

    setIsDarkMode((boolean) => !boolean);
    modeToggle.classList.toggle('dark-theme');
  };

  return (
    <header>
      <div className="header_logo-text">devfiner</div>
      <div className="header_light-dark-mode" onClick={onThemeClick}>
        {isDarkMode ? (
          <>
            <span>LIGHT</span>
            <img src={sun} alt="sun" className="sun" />
          </>
        ) : (
          <>
            <span>DARK</span>
            <img src={moon} alt="moon" className="moon" />
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
