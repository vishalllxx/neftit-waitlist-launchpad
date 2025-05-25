
import React, { useState, useEffect } from 'react';
import { Copy, Users, Trophy, Share2, ExternalLink, ArrowLeft, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';

interface UserData {
  email: string;
  twitterFollowed: boolean;
  discordJoined: boolean;
}

interface WaitlistDashboardProps {
  userData: UserData;
  onBack: () => void;
}

const WaitlistDashboard = ({ userData, onBack }: WaitlistDashboardProps) => {
  const [referralCount, setReferralCount] = useState(0);
  const [position, setPosition] = useState(1247);
  const [referralLink, setReferralLink] = useState('');

  // Mock Twitter profile data
  const twitterProfile = {
    username: 'johndoe',
    displayName: 'John Doe',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  };

  // Mock leaderboard data
  const leaderboard = [
    { rank: 1, name: 'CryptoWhale', referrals: 47, avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=40&h=40&fit=crop&crop=face' },
    { rank: 2, name: 'NFTMaster', referrals: 34, avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face' },
    { rank: 3, name: 'DigitalArt', referrals: 28, avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face' },
    { rank: 4, name: 'BlockchainBro', referrals: 23, avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face' },
    { rank: 5, name: 'MetaCollector', referrals: 19, avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face' },
  ];

  useEffect(() => {
    // Generate a unique referral link
    const userId = Math.random().toString(36).substr(2, 9);
    setReferralLink(`https://neftit.com/waitlist?ref=${userId}`);
    
    // Simulate random referral count
    setReferralCount(Math.floor(Math.random() * 15));
  }, []);

  const copyReferralLink = async () => {
    try {
      await navigator.clipboard.writeText(referralLink);
      toast({
        title: "Link copied!",
        description: "Your referral link has been copied to clipboard.",
      });
    } catch (err) {
      toast({
        title: "Failed to copy",
        description: "Please copy the link manually.",
        variant: "destructive",
      });
    }
  };

  const shareOnTwitter = () => {
    const text = `Just joined the NEFTIT waitlist! 🚀 Join me and get early access to the future of NFTs! ${referralLink}`;
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Enhanced animated background - matching landing page */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full mix-blend-screen filter blur-3xl opacity-25 animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse delay-2000"></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      {/* Header - matching landing page */}
      <header className="relative z-10 p-8 flex items-center justify-between">
        <Button
          onClick={onBack}
          variant="ghost"
          className="text-white hover:bg-white/10"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-2xl shadow-purple-500/50">
            <Zap className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
            NEFTIT
          </h1>
        </div>
        <div className="w-20"></div>
      </header>

      {/* Main content */}
      <div className="relative z-10 flex items-center justify-center min-h-[calc(100vh-200px)] px-8">
        <div className="max-w-2xl w-full text-center">
          {/* Welcome section with Twitter profile */}
          <div className="mb-16">
            <div className="group relative mb-12">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative bg-gradient-to-r from-gray-900/80 to-black/80 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                <div className="flex flex-col items-center space-y-4">
                  <img
                    src={twitterProfile.avatar}
                    alt="Profile"
                    className="w-20 h-20 rounded-full border-4 border-purple-400 shadow-2xl shadow-purple-500/50"
                  />
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-2">Welcome Pioneer!</h2>
                    <p className="text-xl text-white/70 mb-2">@{twitterProfile.username}</p>
                    <p className="text-purple-400 font-medium">✓ Connected & Verified</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative bg-gradient-to-r from-gray-900/80 to-black/80 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-300">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold text-white">Position</h3>
                  </div>
                </div>
                <div className="text-4xl font-bold text-purple-400 mb-2">#{position}</div>
                <p className="text-white/60">in waitlist</p>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative bg-gradient-to-r from-gray-900/80 to-black/80 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-blue-500/50 transition-all duration-300">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                    <Share2 className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold text-white">Referrals</h3>
                  </div>
                </div>
                <div className="text-4xl font-bold text-green-400 mb-2">{referralCount}</div>
                <p className="text-white/60">friends joined</p>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative bg-gradient-to-r from-gray-900/80 to-black/80 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-300">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                    <Trophy className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold text-white">Points</h3>
                  </div>
                </div>
                <div className="text-4xl font-bold text-yellow-400 mb-2">{referralCount * 10}</div>
                <p className="text-white/60">bonus points</p>
              </div>
            </div>
          </div>

          {/* Referral section */}
          <div className="group relative mb-12">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
            <div className="relative bg-gradient-to-r from-gray-900/80 to-black/80 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-300">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <Share2 className="w-7 h-7 text-white" />
                </div>
                <div className="text-left">
                  <h3 className="text-2xl font-bold text-white">Share & Earn</h3>
                  <p className="text-white/70">Each friend gives you +10 points</p>
                </div>
              </div>
              
              <div className="bg-white/10 rounded-xl p-4 border border-white/20 mb-6">
                <code className="text-white text-sm break-all font-mono">{referralLink}</code>
              </div>

              <div className="flex space-x-4">
                <Button
                  onClick={shareOnTwitter}
                  className="flex-1 py-4 text-lg font-bold rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white shadow-2xl shadow-blue-500/50 border-0 transition-all duration-300"
                >
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Share on Twitter
                </Button>
                <Button
                  onClick={copyReferralLink}
                  className="flex-1 py-4 text-lg font-bold rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white shadow-2xl shadow-purple-500/50 border-0 transition-all duration-300"
                >
                  <Copy className="w-5 h-5 mr-2" />
                  Copy Link
                </Button>
              </div>
            </div>
          </div>

          {/* Leaderboard */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-orange-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
            <div className="relative bg-gradient-to-r from-gray-900/80 to-black/80 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-yellow-500/50 transition-all duration-300">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-14 h-14 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center">
                  <Trophy className="w-7 h-7 text-white" />
                </div>
                <div className="text-left">
                  <h3 className="text-2xl font-bold text-white">Leaderboard</h3>
                  <p className="text-white/70">Top referrers</p>
                </div>
              </div>

              <div className="space-y-4">
                {leaderboard.map((user) => (
                  <div
                    key={user.rank}
                    className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300"
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold ${
                        user.rank === 1 ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white' :
                        user.rank === 2 ? 'bg-gradient-to-r from-gray-400 to-gray-500 text-white' :
                        user.rank === 3 ? 'bg-gradient-to-r from-amber-600 to-orange-600 text-white' :
                        'bg-white/20 text-white'
                      }`}>
                        {user.rank}
                      </div>
                      <img
                        src={user.avatar}
                        alt={user.name}
                        className="w-10 h-10 rounded-full border-2 border-white/20"
                      />
                      <span className="text-white font-semibold text-lg">{user.name}</span>
                    </div>
                    <div className="text-purple-400 font-bold text-lg">
                      {user.referrals}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Footer stats */}
          <div className="mt-12 text-center">
            <p className="text-white/50 text-lg">
              You're among <span className="text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text font-bold text-xl">1,247</span> pioneers
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaitlistDashboard;
