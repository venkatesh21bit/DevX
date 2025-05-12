"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import EraSelector from '@/components/era_selector';
import WelcomePage from '@/components/WelcomePage';

export default function Home() {
  const [selectedEra, setSelectedEra] = useState('modern'); // Default to 'modern'
  const [hasEntered, setHasEntered] = useState(false);
  const router = useRouter();

  const handleNavigation = (url: string) => {
    window.location.href = url;
  };

  const renderContent = () => {
    return (
      <>
        <EraSelector selectedEra={selectedEra} onEraChange={setSelectedEra} />
        {selectedEra && (
          <div className="mt-8">
            {selectedEra === 'modern' && (
              <div className="modern-era">
                <h1 className="text-4xl font-bold">DevX - Modern Era</h1>
                <p className="text-lg mt-4">Welcome to the modern coding challenge!</p>
                <button
                  onClick={() => handleNavigation('https://modern-website-three-tau.vercel.app/')}
                  className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
                >
                  Go to Modern Page
                </button>
              </div>
            )}
            {selectedEra === 'classic' && (
              <div className="classic-era">
                <h1 className="text-4xl font-bold">DevX - Classic Era</h1>
                <p className="text-lg mt-4">Welcome to the classic coding challenge!</p>
                <button
                  onClick={() => router.push('/2kpage')}
                  className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
                >
                  Go to Classic Page
                </button>
              </div>
            )}
          </div>
        )}
      </>
    );
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-4 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {hasEntered ? (
        <>
         
          {renderContent()}
        </>
      ) : (
        <WelcomePage onEnter={() => setHasEntered(true)} />
      )}
    </div>
  );
}