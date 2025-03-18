"use client";

import React, { useState } from 'react';
import EraSelector from '@/components/era_selector';
import WelcomePage from '@/components/WelcomePage';

export default function Home() {
  const [selectedEra, setSelectedEra] = useState('modern');
  const [hasEntered, setHasEntered] = useState(false);

  const renderContent = () => {
    switch (selectedEra) {
      case 'modern':
        return (
          <div className="modern-era">
            <h1 className="text-4xl font-bold">DevX - Modern Era</h1>
            <p className="text-lg mt-4">Welcome to the modern coding challenge!</p>
          </div>
        );
      case 'classic':
        return (
          <div className="classic-era">
            <h1 className="text-4xl font-bold">DevX - Classic Era</h1>
            <p className="text-lg mt-4">Welcome to the classic coding challenge!</p>
          </div>
        );
      case 'retro':
        return (
          <div className="retro-era">
            <h1 className="text-4xl font-bold">DevX - Retro Era</h1>
            <p className="text-lg mt-4">Welcome to the retro coding challenge!</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-4 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {hasEntered ? (
        <>
          <EraSelector selectedEra={selectedEra} onEraChange={setSelectedEra} />
          {renderContent()}
        </>
      ) : (
        <WelcomePage onEnter={() => setHasEntered(true)} />
      )}
    </div>
  );
}