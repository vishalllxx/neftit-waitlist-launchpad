
import React, { useState } from 'react';
import WaitlistLanding from '@/components/WaitlistLanding';
import WaitlistDashboard from '@/components/WaitlistDashboard';

interface UserData {
  email: string;
  twitterFollowed: boolean;
  discordJoined: boolean;
}

const Index = () => {
  const [currentView, setCurrentView] = useState<'landing' | 'dashboard'>('landing');
  const [userData, setUserData] = useState<UserData | null>(null);

  const handleWaitlistComplete = (data: UserData) => {
    setUserData(data);
    setCurrentView('dashboard');
  };

  const handleBackToLanding = () => {
    setCurrentView('landing');
  };

  return (
    <div className="relative">
      {/* Landing page */}
      <div className={`transition-transform duration-700 ease-in-out ${
        currentView === 'landing' ? 'translate-x-0' : '-translate-x-full'
      }`}>
        {currentView === 'landing' && (
          <WaitlistLanding onComplete={handleWaitlistComplete} />
        )}
      </div>

      {/* Dashboard page */}
      <div className={`${
        currentView === 'dashboard' ? 'block' : 'hidden'
      } transition-all duration-700 ease-in-out`}>
        {currentView === 'dashboard' && userData && (
          <WaitlistDashboard 
            userData={userData} 
            onBack={handleBackToLanding}
          />
        )}
      </div>
    </div>
  );
};

export default Index;
