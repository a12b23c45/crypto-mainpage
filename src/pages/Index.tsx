import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Rocket, Link as LinkIcon, BarChart3, User, Shield, History } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gradient-to-r from-info to-cyan-400 text-white py-6 px-4 shadow-lg">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <Rocket className="w-8 h-8" />
            <h1 className="text-3xl font-bold">ERC-20 Token & Crowdsale Demo</h1>
          </div>
          <p className="text-white/90 text-sm ml-11">Assignment Simulation - Localhost</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 space-y-6">
        {/* Connection Status */}
        <Card className="border-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-foreground">
              <LinkIcon className="w-5 h-5" />
              Connection Status
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="bg-success/10 border border-success/20 rounded-lg p-3">
              <p className="text-success font-medium">Connected to wallet: 0xf39F...2266</p>
            </div>
            <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
              Connect Wallet
            </Button>
          </CardContent>
        </Card>

        {/* Contract Information */}
        <Card className="border-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-foreground">
              <BarChart3 className="w-5 h-5" />
              Contract Information
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Token Details */}
              <div className="space-y-3">
                <h3 className="font-bold text-lg text-foreground">Token Details</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground font-medium">Name:</span>
                    <span className="font-semibold">ExampleToken</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground font-medium">Symbol:</span>
                    <span className="font-semibold">ET</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground font-medium">Total Supply:</span>
                    <span className="font-semibold">5000.0 ET</span>
                  </div>
                </div>
              </div>

              {/* Crowdsale Stats */}
              <div className="space-y-3">
                <h3 className="font-bold text-lg text-foreground">Crowdsale Stats</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground font-medium">Funds Raised:</span>
                    <span className="font-semibold">1.0 ETH</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground font-medium">Tokens Available:</span>
                    <span className="font-semibold">4949.9999999999995</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground font-medium">Status:</span>
                    <Badge className="bg-success text-success-foreground">Active</Badge>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* User Actions */}
        <Card className="border-2 bg-gradient-to-br from-cyan-50/50 to-blue-50/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-foreground">
              <User className="w-5 h-5" />
              User Actions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              {/* My Balance */}
              <Card className="bg-card">
                <CardHeader>
                  <CardTitle className="text-base">My Balance</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div>
                    <p className="text-sm text-muted-foreground">ETH:</p>
                    <p className="text-lg font-bold text-info break-all">
                      9999.987601991558296314 ETH
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Tokens:</p>
                    <p className="text-lg font-bold text-primary">50.0 ATK</p>
                  </div>
                </CardContent>
              </Card>

              {/* Buy Tokens */}
              <Card className="bg-card">
                <CardHeader>
                  <CardTitle className="text-base">Buy Tokens</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">ETH Amount:</label>
                    <Input 
                      type="text" 
                      placeholder="0.1" 
                      className="bg-background"
                    />
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                    Buy Tokens
                  </Button>
                </CardContent>
              </Card>

              {/* Transfer Tokens */}
              <Card className="bg-card">
                <CardHeader>
                  <CardTitle className="text-base">Transfer Tokens</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Recipient Address:</label>
                    <Input 
                      type="text" 
                      placeholder="0x..." 
                      className="bg-background"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Token Amount:</label>
                    <Input 
                      type="text" 
                      placeholder="10" 
                      className="bg-background"
                    />
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                    Send Tokens
                  </Button>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>

        {/* Admin Actions */}
        <Card className="border-2 bg-gradient-to-br from-yellow-50/50 to-amber-50/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-foreground">
              <Shield className="w-5 h-5" />
              Admin Actions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              {/* Crowdsale Control */}
              <Card className="bg-card">
                <CardHeader>
                  <CardTitle className="text-base">Crowdsale Control</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                    Pause Crowdsale
                  </Button>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                    Unpause Crowdsale
                  </Button>
                </CardContent>
              </Card>

              {/* Whitelist Management */}
              <Card className="bg-card">
                <CardHeader>
                  <CardTitle className="text-base">Whitelist Management</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Address to Whitelist:</label>
                    <Input 
                      type="text" 
                      placeholder="0x..." 
                      className="bg-background"
                    />
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                    Add to Whitelist
                  </Button>
                </CardContent>
              </Card>

              {/* External Purchase */}
              <Card className="bg-card">
                <CardHeader>
                  <CardTitle className="text-base">External Purchase</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Beneficiary Address:</label>
                    <Input 
                      type="text" 
                      placeholder="0x..." 
                      className="bg-background"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Token Amount:</label>
                    <Input 
                      type="text" 
                      placeholder="1000" 
                      className="bg-background"
                    />
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                    Process External Purchase
                  </Button>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>

        {/* Transaction History */}
        <Card className="border-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-foreground">
              <History className="w-5 h-5" />
              Transaction History
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-center py-4">No transactions yet...</p>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Index;
