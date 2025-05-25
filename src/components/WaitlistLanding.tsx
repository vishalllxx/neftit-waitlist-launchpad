
import React, { useState } from 'react';
import { Mail, Twitter, MessageCircle, ArrowRight, Star, Zap, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface WaitlistLandingProps {
  onComplete: (data: { email: string; twitterFollowed: boolean; discordJoined: boolean }) => void;
}

const WaitlistLanding = ({ onComplete }: WaitlistLandingProps) => {
  const [email, setEmail] = useState('');
  const [twitterFollowed, setTwitterFollowed] = useState(false);
  const [discordJoined, setDiscordJoined] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [showEmailInput, setShowEmailInput] = useState(false);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    if (value && !validateEmail(value)) {
      setEmailError('Please enter a valid email address');
    } else {
      setEmailError('');
    }
  };

  const handleTwitterFollow = () => {
    window.open('https://twitter.com/neftit', '_blank');
    setTwitterFollowed(true);
  };

  const handleDiscordJoin = () => {
    window.open('https://discord.gg/neftit', '_blank');
    setDiscordJoined(true);
  };

  const handleComplete = () => {
    if (!email || !validateEmail(email)) {
      setEmailError('Please enter a valid email address');
      return;
    }
    onComplete({ email, twitterFollowed, discordJoined });
  };

  const isCompleteEnabled = email && validateEmail(email) && twitterFollowed && discordJoined;

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Enhanced animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full mix-blend-screen filter blur-3xl opacity-25 animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse delay-2000"></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 p-8">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-2xl shadow-purple-500/50">
            <Zap className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
            NEFTIT
          </h1>
        </div>
      </header>

      {/* Main content */}
      <div className="relative z-10 flex items-center justify-center min-h-[calc(100vh-200px)] px-8">
        <div className="max-w-2xl w-full text-center">
          {/* Hero section */}
          <div className="mb-16">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-lg rounded-full px-6 py-3 mb-8 border border-purple-500/30">
              <Star className="w-5 h-5 text-yellow-400" />
              <span className="text-white/90 font-medium">Exclusive Early Access</span>
            </div>
            
            <h2 className="text-7xl font-bold text-white mb-6 leading-tight">
              The Future of
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                NFTs is Here
              </span>
            </h2>
            
            <p className="text-2xl text-white/70 mb-12 max-w-3xl mx-auto leading-relaxed">
              Join the revolution. Be among the first to experience next-generation 
              digital collectibles and shape the future of web3.
            </p>
          </div>

          {/* Action cards */}
          <div className="grid gap-6 mb-12">
            {/* Email Action */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative bg-gradient-to-r from-gray-900/80 to-black/80 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-300">
                {!showEmailInput ? (
                  <div 
                    onClick={() => setShowEmailInput(true)}
                    className="cursor-pointer flex items-center justify-between"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
                        <Mail className="w-7 h-7 text-white" />
                      </div>
                      <div className="text-left">
                        <h3 className="text-xl font-semibold text-white mb-1">Connect Your Email</h3>
                        <p className="text-white/60">Get priority access and updates</p>
                      </div>
                    </div>
                    <ArrowRight className="w-6 h-6 text-white/60 group-hover:text-white transition-colors" />
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
                        <Mail className="w-7 h-7 text-white" />
                      </div>
                      <div className="text-left">
                        <h3 className="text-xl font-semibold text-white mb-1">Connect Your Email</h3>
                      </div>
                    </div>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={handleEmailChange}
                      className="w-full bg-white/5 border border-white/20 rounded-xl px-6 py-4 text-white placeholder-white/50 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 focus:outline-none text-lg backdrop-blur-sm"
                      autoFocus
                    />
                    {emailError && (
                      <p className="text-red-400 text-sm">{emailError}</p>
                    )}
                  </div>
                )}
                {email && validateEmail(email) && (
                  <div className="absolute top-4 right-4">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <Check className="w-5 h-5 text-white" />
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Twitter Action */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div 
                onClick={handleTwitterFollow}
                className="relative bg-gradient-to-r from-gray-900/80 to-black/80 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-blue-500/50 transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                      <Twitter className="w-7 h-7 text-white" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-xl font-semibold text-white mb-1">
                        {twitterFollowed ? 'Following on Twitter' : 'Follow on Twitter'}
                      </h3>
                      <p className="text-white/60">Stay updated with latest news</p>
                    </div>
                  </div>
                  {twitterFollowed ? (
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <Check className="w-5 h-5 text-white" />
                    </div>
                  ) : (
                    <ArrowRight className="w-6 h-6 text-white/60 group-hover:text-white transition-colors" />
                  )}
                </div>
              </div>
            </div>

            {/* Discord Action */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div 
                onClick={handleDiscordJoin}
                className="relative bg-gradient-to-r from-gray-900/80 to-black/80 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                      <MessageCircle className="w-7 h-7 text-white" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-xl font-semibold text-white mb-1">
                        {discordJoined ? 'Joined Discord' : 'Join Discord'}
                      </h3>
                      <p className="text-white/60">Connect with the community</p>
                    </div>
                  </div>
                  {discordJoined ? (
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <Check className="w-5 h-5 text-white" />
                    </div>
                  ) : (
                    <ArrowRight className="w-6 h-6 text-white/60 group-hover:text-white transition-colors" />
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Complete button */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 rounded-2xl blur opacity-50 group-hover:opacity-70 transition-opacity"></div>
            <Button
              onClick={handleComplete}
              disabled={!isCompleteEnabled}
              className={`relative w-full py-6 text-xl font-bold rounded-2xl transition-all duration-300 ${
                isCompleteEnabled
                  ? 'bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 hover:from-purple-500 hover:via-blue-500 hover:to-cyan-500 text-white shadow-2xl shadow-purple-500/50 border-0'
                  : 'bg-gray-800 text-gray-500 cursor-not-allowed border border-gray-700'
              }`}
            >
              {isCompleteEnabled ? 'Enter NEFTIT' : 'Complete All Steps'}
              <ArrowRight className="w-6 h-6 ml-3" />
            </Button>
          </div>

          {/* Footer stats */}
          <div className="mt-12 text-center">
            <p className="text-white/50 text-lg">
              Join <span className="text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text font-bold text-xl">1,247</span> pioneers
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaitlistLanding;
