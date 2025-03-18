import React from 'react';
import '@/styles/globals.css';

interface WelcomePageProps {
  onEnter: () => void;
}

const WelcomePage: React.FC<WelcomePageProps> = ({ onEnter }) => {
  return (
    <div className="welcome-page flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-4 sm:p-20">
      <h1 className="text-4xl font-bold">Welcome to DevX</h1>
      <p className="text-lg mt-4">Experience different webpage UIs from various eras.</p>
      <button
        className="mt-8 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
        onClick={onEnter}
      >
        Enter
      </button>
    </div>
  );
};

export default WelcomePage;