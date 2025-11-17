import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Rocket, Link as LinkIcon, BarChart3, User, Shield, History } from "lucide-react";
import cryptoHero from "@/assets/crypto-hero.jpg";
import tokenIcon from "@/assets/token-icon.jpg";
import blockchainNetwork from "@/assets/blockchain-network.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header with Hero Image */}
      <header className="relative bg-gradient-to-r from-background to-card text-foreground py-8 px-4 shadow-2xl border-b-2 border-primary/30 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src={cryptoHero} 
            alt="Crypto background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary shadow-lg shadow-primary/50">
              <img src={tokenIcon} alt="Token" className="w-full h-full object-cover" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold title-shine">ERC-20 Token & Crowdsale Demo</h1>
          </div>
          <p className="text-muted-foreground text-sm md:text-base ml-15">Assignment Simulation - Localhost</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 space-y-6">
        {/* Connection Status */}
        <Card className="border-2 border-primary/30 bg-gradient-to-br from-card to-background shadow-lg shadow-primary/10">
          <CardHeader className="border-b border-primary/20">
            <CardTitle className="flex items-center gap-2 text-foreground">
              <LinkIcon className="w-5 h-5 text-primary" />
              <span className="text-white">Connection Status</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 pt-6">
            <div className="bg-success/20 border-2 border-success/40 rounded-lg p-4 backdrop-blur-sm">
              <p className="text-success font-semibold text-lg">✓ Connected to wallet: <span className="text-primary">0xf39F...2266</span></p>
            </div>
            <Button className="w-full bg-primary hover:bg-primary/90 text-black font-bold text-lg py-6 shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all">
              Connect Wallet
            </Button>
          </CardContent>
        </Card>

        {/* Contract Information with Background */}
        <Card className="border-2 border-primary/30 bg-gradient-to-br from-card to-background shadow-lg shadow-primary/10 overflow-hidden relative">
          <div className="absolute right-0 top-0 w-1/3 h-full opacity-10">
            <img src={blockchainNetwork} alt="Network" className="w-full h-full object-cover" />
          </div>
          <CardHeader className="border-b border-primary/20 relative z-10">
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-primary" />
              <span className="text-white">Contract Information</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6 relative z-10">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Token Details */}
              <div className="space-y-3 bg-background/50 backdrop-blur-sm p-4 rounded-lg border border-primary/20">
                <h3 className="font-bold text-xl text-primary">Token Details</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground font-medium">Name:</span>
                    <span className="font-bold text-white text-lg">ExampleToken</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground font-medium">Symbol:</span>
                    <span className="font-bold text-primary text-lg">ET</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground font-medium">Total Supply:</span>
                    <span className="font-bold text-white text-lg">5000.0 ET</span>
                  </div>
                </div>
              </div>

              {/* Crowdsale Stats */}
              <div className="space-y-3 bg-background/50 backdrop-blur-sm p-4 rounded-lg border border-primary/20">
                <h3 className="font-bold text-xl text-primary">Crowdsale Stats</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground font-medium">Funds Raised:</span>
                    <span className="font-bold text-white text-lg">1.0 ETH</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground font-medium">Tokens Available:</span>
                    <span className="font-bold text-white text-lg">4949.99</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground font-medium">Status:</span>
                    <Badge className="bg-success text-success-foreground font-bold">Active</Badge>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* User Actions */}
        <Card className="border-2 border-primary/30 bg-gradient-to-br from-card to-background shadow-lg shadow-primary/10">
          <CardHeader className="border-b border-primary/20 bg-info/10">
            <CardTitle className="flex items-center gap-2">
              <User className="w-5 h-5 text-primary" />
              <span className="text-white">User Actions</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-3 gap-4">
              {/* My Balance */}
              <Card className="bg-background/80 backdrop-blur-sm border-2 border-primary/20">
                <CardHeader className="bg-gradient-to-br from-primary/10 to-transparent">
                  <CardTitle className="text-base text-white">My Balance</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 pt-4">
                  <div>
                    <p className="text-sm text-muted-foreground">ETH:</p>
                    <p className="text-base font-bold text-info break-all">
                      9999.98 ETH
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Tokens:</p>
                    <p className="text-2xl font-bold text-primary">50.0 ATK</p>
                  </div>
                </CardContent>
              </Card>

              {/* Buy Tokens */}
              <Card className="bg-background/80 backdrop-blur-sm border-2 border-primary/20">
                <CardHeader className="bg-gradient-to-br from-primary/10 to-transparent">
                  <CardTitle className="text-base text-white">Buy Tokens</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 pt-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white">ETH Amount:</label>
                    <Input 
                      type="text" 
                      placeholder="0.1" 
                      className="bg-background border-primary/30 text-white"
                    />
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-black font-bold shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all">
                    Buy Tokens
                  </Button>
                </CardContent>
              </Card>

              {/* Transfer Tokens */}
              <Card className="bg-background/80 backdrop-blur-sm border-2 border-primary/20">
                <CardHeader className="bg-gradient-to-br from-primary/10 to-transparent">
                  <CardTitle className="text-base text-white">Transfer Tokens</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 pt-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white">Recipient Address:</label>
                    <Input 
                      type="text" 
                      placeholder="0x..." 
                      className="bg-background border-primary/30 text-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white">Token Amount:</label>
                    <Input 
                      type="text" 
                      placeholder="10" 
                      className="bg-background border-primary/30 text-white"
                    />
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-black font-bold shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all">
                    Send Tokens
                  </Button>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>

        {/* Admin Actions */}
        <Card className="border-2 border-primary/30 bg-gradient-to-br from-card to-background shadow-lg shadow-primary/10">
          <CardHeader className="border-b border-primary/20 bg-primary/10">
            <CardTitle className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-primary" />
              <span className="text-white">Admin Actions</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-3 gap-4">
              {/* Crowdsale Control */}
              <Card className="bg-background/80 backdrop-blur-sm border-2 border-primary/20">
                <CardHeader className="bg-gradient-to-br from-primary/10 to-transparent">
                  <CardTitle className="text-base text-white">Crowdsale Control</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 pt-4">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-black font-bold shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all">
                    Pause Crowdsale
                  </Button>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-black font-bold shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all">
                    Unpause Crowdsale
                  </Button>
                </CardContent>
              </Card>

              {/* Whitelist Management */}
              <Card className="bg-background/80 backdrop-blur-sm border-2 border-primary/20">
                <CardHeader className="bg-gradient-to-br from-primary/10 to-transparent">
                  <CardTitle className="text-base text-white">Whitelist Management</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 pt-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white">Address to Whitelist:</label>
                    <Input 
                      type="text" 
                      placeholder="0x..." 
                      className="bg-background border-primary/30 text-white"
                    />
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-black font-bold shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all">
                    Add to Whitelist
                  </Button>
                </CardContent>
              </Card>

              {/* External Purchase */}
              <Card className="bg-background/80 backdrop-blur-sm border-2 border-primary/20">
                <CardHeader className="bg-gradient-to-br from-primary/10 to-transparent">
                  <CardTitle className="text-base text-white">External Purchase</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 pt-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white">Beneficiary Address:</label>
                    <Input 
                      type="text" 
                      placeholder="0x..." 
                      className="bg-background border-primary/30 text-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white">Token Amount:</label>
                    <Input 
                      type="text" 
                      placeholder="1000" 
                      className="bg-background border-primary/30 text-white"
                    />
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-black font-bold shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all">
                    Process Purchase
                  </Button>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>

        {/* Transaction History */}
        <Card className="border-2 border-primary/30 bg-gradient-to-br from-card to-background shadow-lg shadow-primary/10">
          <CardHeader className="border-b border-primary/20">
            <CardTitle className="flex items-center gap-2">
              <History className="w-5 h-5 text-primary" />
              <span className="text-white">Transaction History</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="text-center py-8 border-2 border-dashed border-primary/30 rounded-lg bg-background/50">
              <p className="text-muted-foreground text-lg">No transactions yet...</p>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Index;
