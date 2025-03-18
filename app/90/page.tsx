import React from 'react';

interface NintendoGBAPageLayoutProps {
  children: React.ReactNode;
}

const NintendoGBAPageLayout: React.FC<NintendoGBAPageLayoutProps> = ({ children }) => {
  return (
    <>
      <style>{`
        body {
          margin: 0;
          padding: 0;
          font-family: Arial, sans-serif;
          background-color: #f0f0f0;
        }
        
        .nintendo-container {
          position: relative;
          width: 900px;
          margin: 20px auto;
          background-color: #96a2c8;
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 0 10px rgba(0,0,0,0.5);
          padding: 10px;
        }
        
        .header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          padding: 5px 10px;
        }
        
        .header-left {
          display: flex;
          align-items: flex-start;
        }
        
        .mario-icon {
          width: 50px;
          height: 50px;
          background-color: #ff0000;
          display: flex;
          justify-content: center;
          align-items: center;
          color: white;
          font-weight: bold;
          font-size: 24px;
        }
        
        .welcome-banner {
          background-color: white;
          border: 2px solid #333;
          border-radius: 15px;
          padding: 5px 15px;
          margin-left: 10px;
          font-size: 14px;
          font-weight: bold;
        }
        
        .header-right {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
        }
        
        .search-area {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
        }
        
        .search-text {
          font-size: 12px;
          color: white;
          margin-right: 5px;
          display: flex;
          align-items: center;
        }
        
        .search-text .icon {
          color: #00adef;
          font-size: 16px;
          margin-right: 5px;
        }
        
        .search-tips {
          font-size: 12px;
          color: blue;
          text-decoration: underline;
          text-align: right;
        }
        
        .search-box {
          display: flex;
          margin-top: 5px;
        }
        
        .search-input {
          width: 150px;
          height: 20px;
          border: 1px solid #ccc;
        }
        
        .search-button {
          background-color: #ffcc00;
          border: 1px solid black;
          font-size: 10px;
          font-weight: bold;
          padding: 2px 5px;
        }
        
        .main-nav {
          display: flex;
          align-items: center;
          background-color: black;
          padding: 0;
          margin-top: 10px;
        }
        
        .nintendo-logo {
          background-color: #ff0000;
          padding: 10px 15px;
          color: white;
          font-weight: bold;
          font-size: 16px;
        }
        
        .nav-items {
          display: flex;
          flex: 1;
        }
        
        .nav-item {
          color: white;
          text-decoration: none;
          font-size: 12px;
          font-weight: bold;
          margin-right: 15px;
          padding: 10px 15px;
        }
        
        .nav-icons {
          display: flex;
          gap: 5px;
          padding: 5px 10px;
        }
        
        .nav-icon {
          width: 24px;
          height: 24px;
          display: flex;
          justify-content: center;
          align-items: center;
          color: white;
          font-weight: bold;
        }
        
        .icon-p {
          background-color: #0000ff;
        }
        
        .icon-m {
          background-color: #00aa00;
        }
        
        .icon-s {
          background-color: #ffaa00;
        }
        
        .secondary-nav {
          display: flex;
          background-color: #e6e6e6;
          padding: 0;
        }
        
        .bottom-nav-item {
          color: blue;
          text-decoration: none;
          font-size: 12px;
          padding: 5px 10px;
          border-right: 1px solid #999;
        }
        
        .bottom-nav-item:last-child {
          border-right: none;
        }
        
        .gba-hero-section {
          display: flex;
          align-items: center;
          background-color: #96a2c8;
          padding: 10px;
          position: relative;
          height: 160px;
        }
        
        .gba-device {
          width: 150px;
          height: 150px;
          background-color: white;
          display: flex;
          justify-content: center;
          align-items: center;
          color: #777;
          font-size: 42px;
          font-weight: bold;
          margin-right: 20px;
        }
        
        .gba-text-container {
          display: flex;
          flex-direction: column;
        }
        
        .game-boy-text {
          font-size: 30px;
          font-weight: bold;
          color: white;
          text-shadow: 2px 2px #000;
        }
        
        .advance-text {
          font-size: 46px;
          font-weight: bold;
          color: white;
          text-shadow: 2px 2px #000;
          line-height: 0.9;
        }
        
        .gba-tagline {
          position: absolute;
          right: 30px;
          top: 50%;
          transform: translateY(-50%);
          display: flex;
          align-items: flex-start;
        }
        
        .tagline-dot {
          color: green;
          font-size: 24px;
          margin-right: 5px;
          line-height: 1;
        }
        
        .tagline-text {
          font-size: 12px;
          color: black;
          text-align: left;
        }
        
        .category-dropdown {
          padding: 5px 10px;
          background-color: #e6e6e6;
        }
        
        .categories {
          padding: 2px;
          font-size: 12px;
        }
        
        .content-layout {
          display: flex;
          position: relative;
        }
        
        .main-content {
          flex: 1;
          padding: 10px;
          padding-right: 170px; /* Make room for sidebar */
        }
        
        .three-column-layout {
          display: flex;
          gap: 10px;
        }
        
        .column {
          flex: 1;
        }
        
        .column-header {
          background-color: #333;
          padding: 5px 10px;
          color: white;
          font-size: 14px;
          position: relative;
          display: flex;
          align-items: center;
        }
        
        .column-header h3 {
          margin: 0;
          padding: 0;
          font-size: 14px;
          margin-left: 15px;
        }
        
        .column-header:before {
          content: '≡';
          position: absolute;
          left: 5px;
          font-size: 16px;
        }
        
        .news-items {
          background-color: white;
          padding: 5px;
        }
        
        .news-item {
          display: flex;
          align-items: center;
          padding: 5px 0;
          border-bottom: 1px solid #ccc;
          font-size: 12px;
        }
        
        .news-icon {
          width: 30px;
          height: 30px;
          background-color: #0000ff;
          display: flex;
          justify-content: center;
          align-items: center;
          color: white;
          font-weight: bold;
          margin-right: 10px;
        }
        
        .sites-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
          background-color: white;
          padding: 10px;
        }
        
        .site-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }
        
        .site-thumbnail {
          width: 100px;
          height: 80px;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 5px;
          font-size: 14px;
          font-weight: bold;
          color: white;
        }
        
        .gameboy-thumb {
          background-color: #0000ff;
        }
        
        .pokemon-thumb {
          background-color: #ffff00;
          color: black;
        }
        
        .zelda-thumb {
          background-color: #008800;
        }
        
        .mario-thumb {
          background-color: #ff0000;
        }
        
        .site-link {
          font-size: 10px;
          color: blue;
          text-decoration: underline;
        }
        
        .more-sites {
          background-color: white;
          padding: 10px;
          text-align: center;
        }
        
        .more-sites-dropdown {
          width: 180px;
          font-size: 12px;
        }
        
        .poll-container {
          background-color: white;
        }
        
        .poll-question {
          padding: 10px;
          font-size: 12px;
          font-weight: bold;
        }
        
        .poll-options {
          padding: 10px;
        }
        
        .poll-option {
          display: flex;
          align-items: center;
          margin-bottom: 5px;
          font-size: 12px;
        }
        
        .poll-submit {
          padding: 10px;
          text-align: right;
        }
        
        .submit-button {
          background-color: #ffcc00;
          border: 1px solid black;
          font-size: 10px;
          font-weight: bold;
          padding: 2px 10px;
        }
        
        .sidebar {
          position: absolute;
          right: 10px;
          top: 10px;
          width: 150px;
        }
        
        .sidebar-buttons {
          display: flex;
          flex-direction: column;
          gap: 5px;
          margin-bottom: 10px;
        }
        
        .sidebar-button {
          background-color: #333;
          color: white;
          border: none;
          padding: 10px;
          text-align: center;
          font-size: 12px;
          font-weight: bold;
        }
        
        .sidebar-item {
          margin-bottom: 10px;
          background-color: #333;
          border-radius: 5px;
          overflow: hidden;
        }
        
        .sidebar-header {
          padding: 5px;
          color: white;
          font-size: 12px;
          font-weight: bold;
          text-align: center;
        }
        
        .sidebar-content {
          background-color: #96a2c8;
          text-align: center;
          padding: 20px 10px;
          font-size: 32px;
          font-weight: bold;
          color: white;
        }
        
        .footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background-color: black;
          padding: 10px;
          color: #999;
          font-size: 10px;
          margin-top: 20px;
        }
        
        .buttons-container {
          position: absolute;
          right: 10px;
          top: 10px;
          background-color: #999;
          color: white;
          padding: 5px 10px;
          font-size: 12px;
          border-radius: 3px;
        }
      `}</style>
      <div className="nintendo-container">
        <div className="header">
          <div className="header-left">
            <div className="mario-icon">M</div>
            <div className="welcome-banner">WELCOME TO NINTENDO.COM</div>
          </div>
          <div className="header-right">
            <div className="search-area">
              <div className="search-text">
                <span className="icon">🔍</span> Search
              </div>
              <div className="search-tips">Tips</div>
              <div className="search-box">
                <input type="text" className="search-input" />
                <button className="search-button">GO</button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="main-nav">
          <div className="nintendo-logo">Nintendo</div>
          <div className="nav-items">
            <a href="#" className="nav-item">GAMES</a>
            <a href="#" className="nav-item">SYSTEMS</a>
            <a href="#" className="nav-item">NEWS</a>
            <a href="#" className="nav-item">NSIDER</a>
            <a href="#" className="nav-item">DOWNLOADS</a>
          </div>
          <div className="nav-icons">
            <div className="nav-icon icon-p">P</div>
            <div className="nav-icon icon-m">M</div>
            <div className="nav-icon icon-s">S</div>
          </div>
        </div>
        
        <div className="secondary-nav">
          <a href="#" className="bottom-nav-item">Parents</a>
          <a href="#" className="bottom-nav-item">Customer Service</a>
          <a href="#" className="bottom-nav-item">Corporate</a>
          <a href="#" className="bottom-nav-item">Global</a>
          <a href="#" className="bottom-nav-item">Privacy</a>
          <a href="#" className="bottom-nav-item">Store</a>
          <a href="#" className="bottom-nav-item">Contact</a>
          <div className="buttons-container">Buttons</div>
        </div>
        
        <div className="gba-hero-section">
          <div className="gba-device">GBA</div>
          <div className="gba-text-container">
            <div className="game-boy-text">GAME BOY</div>
            <div className="advance-text">ADVANCE</div>
          </div>
          <div className="gba-tagline">
            <div className="tagline-dot">•</div>
            <div className="tagline-text">
              Gorgeous graphics and<br/>
              sound! New games<br/>
              are hitting the road!
            </div>
          </div>
        </div>
        
        <div className="content-layout">
          <div className="main-content">
            <div className="three-column-layout">
              <div className="column">
                <div className="column-header">
                  <h3>OFFICIAL NEWS</h3>
                </div>
                <div className="news-items">
                  <div className="news-item">
                    <div className="news-icon">N1</div>
                    <div>Acclaim To Publish 12 NINTENDO GAMECUBE Titles</div>
                  </div>
                  <div className="news-item">
                    <div className="news-icon">N2</div>
                    <div>Game Boy Advance 2001 Summer Tour Update - Washington D.C.</div>
                  </div>
                  <div className="news-item">
                    <div className="news-icon">N3</div>
                    <div>Two New Marvel Titles Ship to Game Boy Color</div>
                  </div>
                  <div className="news-item">
                    <div className="news-icon">N4</div>
                    <div>Nintendo Power Magazine Publisher Wins Trip To E3</div>
                  </div>
                  <div className="news-item">
                    <div className="news-icon">N5</div>
                    <div>NINTENDO GAMECUBE Set At $199; Marks Price Of $100 Less...</div>
                  </div>
                </div>
              </div>
              
              <div className="column">
                <div className="column-header">
                  <h3>FEATURED SITES</h3>
                </div>
                <div className="sites-grid">
                  <div className="site-item">
                    <div className="site-thumbnail gameboy-thumb">GameBoy</div>
                    <a href="#" className="site-link">www.gameboy.com</a>
                  </div>
                  <div className="site-item">
                    <div className="site-thumbnail pokemon-thumb">Pokemon</div>
                    <a href="#" className="site-link">www.pokemon.com</a>
                  </div>
                  <div className="site-item">
                    <div className="site-thumbnail zelda-thumb">Zelda</div>
                    <a href="#" className="site-link">www.zelda.com</a>
                  </div>
                  <div className="site-item">
                    <div className="site-thumbnail mario-thumb">Mario</div>
                    <a href="#" className="site-link">www.crossroads.com</a>
                  </div>
                </div>
                <div className="more-sites">
                  <select className="more-sites-dropdown">
                    <option>More Game Sites</option>
                  </select>
                </div>
              </div>
              
              <div className="column">
                <div className="column-header">
                  <h3>PLAYERS POLL</h3>
                </div>
                <div className="poll-container">
                  <div className="poll-question">
                    Which Zelda Oracle title are you most excited about?
                  </div>
                  <div className="poll-options">
                    <div className="poll-option">
                      <input type="radio" name="zelda" id="seasons" />
                      <label htmlFor="seasons">Oracle of Seasons</label>
                    </div>
                    <div className="poll-option">
                      <input type="radio" name="zelda" id="ages" />
                      <label htmlFor="ages">Oracle of Ages</label>
                    </div>
                    <div className="poll-option">
                      <input type="radio" name="zelda" id="both" />
                      <label htmlFor="both">Both!</label>
                    </div>
                    <div className="poll-option">
                      <input type="radio" name="zelda" id="neither" />
                      <label htmlFor="neither">Im still stuck on...</label>
                    </div>
                  </div>
                  <div className="poll-submit">
                    <button className="submit-button">SUBMIT</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="sidebar">
            <div className="sidebar-buttons">
              <button className="sidebar-button">LOGIN</button>
              <button className="sidebar-button">REGISTER</button>
              <button className="sidebar-button">NEWSLETTER</button>
              <button className="sidebar-button">HELP</button>
              <button className="sidebar-button">GAME FINDER</button>
            </div>
            <div className="sidebar-item">
              <div className="sidebar-header">GAME BOY ADVANCE</div>
              <div className="sidebar-content">GBA</div>
            </div>
          </div>
        </div>
        
        <div className="footer">
          <div className="copyright">© 2002 Nintendo. All Rights Reserved.</div>
        </div>
      </div>
      {children}
    </>
  );
};

export default NintendoGBAPageLayout;