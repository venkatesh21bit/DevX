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
          width: 800px;
          margin: 0 auto;
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
        }
        
        .speech-bubble {
          position: relative;
          background-color: white;
          border: 2px solid black;
          border-radius: 10px;
          padding: 5px 10px;
          margin-left: 5px;
          font-size: 12px;
          font-weight: bold;
        }
        
        .speech-bubble:before {
          content: '';
          position: absolute;
          left: -10px;
          top: 15px;
          border-width: 5px;
          border-style: solid;
          border-color: transparent white transparent transparent;
        }
        
        .header-right {
          display: flex;
          align-items: center;
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
        }
        
        .search-tips {
          font-size: 12px;
          color: blue;
          text-decoration: underline;
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
          padding: 5px 10px;
        }
        
        .nintendo-logo {
          flex: 0 0 auto;
          margin-right: 20px;
        }
        
        .nav-items {
          flex: 1;
          display: flex;
        }
        
        .nav-item {
          color: white;
          text-decoration: none;
          font-size: 12px;
          font-weight: bold;
          margin-right: 15px;
          padding: 5px 0;
        }
        
        .nav-icons {
          display: flex;
          gap: 10px;
        }
        
        .secondary-nav {
          display: flex;
          justify-content: space-between;
          background-color: #e6e6e6;
          padding: 5px 10px;
        }
        
        .bottom-nav {
          display: flex;
        }
        
        .bottom-nav-item {
          color: blue;
          text-decoration: none;
          font-size: 12px;
          padding: 0 10px;
          border-right: 1px solid #999;
        }
        
        .bottom-nav-item:last-child {
          border-right: none;
        }
        
        .gba-hero-section {
          display: flex;
          align-items: center;
          background-color: #9aa1c8;
          padding: 10px;
          position: relative;
          height: 160px;
        }
        
        .gba-device {
          flex: 0 0 auto;
          margin-right: 20px;
        }
        
        .gba-logo {
          flex: 1;
        }
        
        .gba-text {
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
        
        .three-column-layout {
          display: flex;
          gap: 10px;
          padding: 10px;
        }
        
        .column {
          flex: 1;
        }
        
        .column-header {
          background-color: #333;
          padding: 5px 10px;
          color: white;
          font-size: 12px;
          position: relative;
        }
        
        .column-header h3 {
          margin: 0;
          padding: 0;
          font-size: 14px;
        }
        
        .column-header:before {
          content: '≡';
          position: absolute;
          left: 5px;
          top: 50%;
          transform: translateY(-50%);
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
          flex: 0 0 auto;
          margin-right: 10px;
        }
        
        .sites-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 5px;
          background-color: white;
          padding: 5px;
        }
        
        .site-item {
          text-align: center;
        }
        
        .site-thumbnail {
          width: 80px;
          height: 80px;
          margin-bottom: 5px;
        }
        
        .site-link {
          font-size: 10px;
          color: blue;
        }
        
        .more-sites {
          background-color: white;
          padding: 5px;
          text-align: center;
        }
        
        .more-sites-dropdown {
          width: 180px;
          font-size: 12px;
        }
        
        .poll-question {
          background-color: white;
          padding: 10px;
          font-size: 12px;
          font-weight: bold;
        }
        
        .poll-options {
          background-color: white;
          padding: 10px;
        }
        
        .poll-option {
          display: flex;
          align-items: center;
          margin-bottom: 5px;
          font-size: 12px;
        }
        
        .poll-submit {
          background-color: white;
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
          top: 250px;
          width: 150px;
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
        
        .finder-description {
          background-color: white;
          padding: 10px;
          font-size: 10px;
        }
        
        .survey-banner {
          text-align: center;
          padding: 10px;
        }
        
        .survey-button {
          background-color: #e6e6e6;
          border: 1px solid #999;
          font-size: 12px;
          padding: 5px 15px;
          border-radius: 15px;
        }
        
        .footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background-color: black;
          padding: 10px;
          color: #999;
          font-size: 10px;
        }
        
        .copyright {
          flex: 1;
        }
        
        .esrb {
          flex: 0 0 auto;
        }
        
        .esrb-logo {
          width: 80px;
          height: 40px;
        }
      `}</style>
      {children}
    </>
  );
};

export default NintendoGBAPageLayout;