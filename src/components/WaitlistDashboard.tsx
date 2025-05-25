
import React, { useState, useEffect } from 'react';
import { Copy, Users, Trophy, Share2, ExternalLink, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 p-6 flex items-center justify-between">
        <Button
          onClick={onBack}
          variant="ghost"
          className="text-white hover:bg-white/10"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">N</span>
          </div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            NEFTIT
          </h1>
        </div>
        <div className="w-20"></div>
      </header>

      <div className="relative z-10 max-w-4xl mx-auto px-6 pb-12">
        {/* Welcome section with Twitter profile */}
        <div className="mb-8">
          <Card className="bg-white/10 backdrop-blur-lg border-white/20">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <img
                  src={twitterProfile.avatar}
                  alt="Profile"
                  className="w-16 h-16 rounded-full border-2 border-purple-400"
                />
                <div>
                  <h2 className="text-2xl font-bold text-white">Welcome back!</h2>
                  <p className="text-white/70">@{twitterProfile.username}</p>
                  <p className="text-purple-400 text-sm">✓ Twitter Connected</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Stats grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-white/10 backdrop-blur-lg border-white/20">
            <CardHeader className="pb-2">
              <CardTitle className="text-white text-sm font-medium">Your Position</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-purple-400">#{position}</div>
              <p className="text-white/60 text-sm">in waitlist</p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-lg border-white/20">
            <CardHeader className="pb-2">
              <CardTitle className="text-white text-sm font-medium">Referrals</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-green-400">{referralCount}</div>
              <p className="text-white/60 text-sm">friends joined</p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-lg border-white/20">
            <CardHeader className="pb-2">
              <CardTitle className="text-white text-sm font-medium">Bonus Points</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-yellow-400">{referralCount * 10}</div>
              <p className="text-white/60 text-sm">early access points</p>
            </CardContent>
          </Card>
        </div>

        {/* Referral section */}
        <Card className="bg-white/10 backdrop-blur-lg border-white/20 mb-8">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Share2 className="w-5 h-5 mr-2" />
              Share & Earn
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-white/70">
              Share your referral link and move up the waitlist! Each friend who joins gives you +10 points.
            </p>
            
            <div className="flex items-center space-x-2">
              <div className="flex-1 bg-white/10 rounded-lg p-3 border border-white/20">
                <code className="text-white text-sm break-all">{referralLink}</code>
              </div>
              <Button
                onClick={copyReferralLink}
                variant="outline"
                size="sm"
                className="bg-white/10 border-white/20 text-white hover:bg-white/20"
              >
                <Copy className="w-4 h-4" />
              </Button>
            </div>

            <div className="flex space-x-3">
              <Button
                onClick={shareOnTwitter}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Share on Twitter
              </Button>
              <Button
                onClick={copyReferralLink}
                variant="outline"
                className="flex-1 bg-white/10 border-white/20 text-white hover:bg-white/20"
              >
                <Copy className="w-4 h-4 mr-2" />
                Copy Link
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Leaderboard */}
        <Card className="bg-white/10 backdrop-blur-lg border-white/20">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Trophy className="w-5 h-5 mr-2" />
              Leaderboard
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {leaderboard.map((user) => (
                <div
                  key={user.rank}
                  className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/10"
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                      user.rank === 1 ? 'bg-yellow-500 text-black' :
                      user.rank === 2 ? 'bg-gray-400 text-black' :
                      user.rank === 3 ? 'bg-amber-600 text-white' :
                      'bg-white/20 text-white'
                    }`}>
                      {user.rank}
                    </div>
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className="w-8 h-8 rounded-full"
                    />
                    <span className="text-white font-medium">{user.name}</span>
                  </div>
                  <div className="text-purple-400 font-semibold">
                    {user.referrals} referrals
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default WaitlistDashboard;
