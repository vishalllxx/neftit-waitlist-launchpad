
import React, { useState } from 'react';
import { Mail, Twitter, MessageCircle, ArrowRight, Star, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface WaitlistLandingProps {
  onComplete: (data: { email: string; twitterFollowed: boolean; discordJoined: boolean }) => void;
}

const WaitlistLanding = ({ onComplete }: WaitlistLandingProps) => {
  const [email, setEmail] = useState('');
  const [twitterFollowed, setTwitterFollowed] = useState(false);
  const [discordJoined, setDiscordJoined] = useState(false);
  const [emailError, setEmailError] = useState('');

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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 p-6">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg flex items-center justify-center">
            <Zap className="w-5 h-5 text-white" />
          </div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            NEFTIT
          </h1>
        </div>
      </header>

      {/* Main content */}
      <div className="relative z-10 flex items-center justify-center min-h-[calc(100vh-200px)] px-6">
        <div className="max-w-lg w-full">
          {/* Hero section */}
          <div className="text-center mb-12">
            <div className="mb-6">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <Star className="w-4 h-4 text-yellow-400" />
                <span className="text-sm text-white/80">Early Access Available</span>
              </div>
              <h2 className="text-5xl font-bold text-white mb-4 leading-tight">
                Join the Future of
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent"> NFTs</span>
              </h2>
              <p className="text-xl text-white/70 mb-8">
                Be among the first to experience the next generation of digital collectibles. 
                Get exclusive early access and join our community.
              </p>
            </div>
          </div>

          {/* Waitlist form */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl">
            <h3 className="text-2xl font-semibold text-white mb-6 text-center">Join the Waitlist</h3>
            
            {/* Email input */}
            <div className="mb-6">
              <label className="block text-white/80 text-sm font-medium mb-2">
                <Mail className="w-4 h-4 inline mr-2" />
                Email Address
              </label>
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={handleEmailChange}
                className="bg-white/10 border-white/20 text-white placeholder-white/50 focus:border-purple-400 focus:ring-purple-400"
              />
              {emailError && (
                <p className="text-red-400 text-sm mt-2">{emailError}</p>
              )}
            </div>

            {/* Social actions */}
            <div className="space-y-4 mb-8">
              <Button
                onClick={handleTwitterFollow}
                variant="outline"
                className={`w-full bg-white/10 border-white/20 text-white hover:bg-white/20 transition-all duration-300 ${
                  twitterFollowed ? 'border-green-400 bg-green-400/20' : ''
                }`}
              >
                <Twitter className="w-4 h-4 mr-2" />
                {twitterFollowed ? '✓ Following on Twitter' : 'Follow us on Twitter'}
              </Button>

              <Button
                onClick={handleDiscordJoin}
                variant="outline"
                className={`w-full bg-white/10 border-white/20 text-white hover:bg-white/20 transition-all duration-300 ${
                  discordJoined ? 'border-green-400 bg-green-400/20' : ''
                }`}
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                {discordJoined ? '✓ Joined Discord' : 'Join our Discord'}
              </Button>
            </div>

            {/* Complete button */}
            <Button
              onClick={handleComplete}
              disabled={!isCompleteEnabled}
              className={`w-full py-3 text-lg font-semibold transition-all duration-300 ${
                isCompleteEnabled
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white shadow-lg hover:shadow-purple-500/50'
                  : 'bg-gray-600 text-gray-400 cursor-not-allowed'
              }`}
            >
              Complete & Enter
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>

          {/* Footer info */}
          <div className="text-center mt-8">
            <p className="text-white/60 text-sm">
              Join <span className="text-purple-400 font-semibold">1,247</span> other early adopters
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaitlistLanding;
