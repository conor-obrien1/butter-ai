import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Target, Shield, TrendingUp } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground tracking-tight">
            Reduce Churn,
            <br />
            <span className="text-primary">Protect Your Revenue</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Keep your customers by spotting who's at risk and why, so you can act quickly to keep them happy and grow your business.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="text-lg px-8 py-6 rounded-full">
              Get Started
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 rounded-full">
              See How It Works
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto space-y-24">
          {/* Feature 1: Identify */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <Card className="p-8 bg-accent/30 border-accent/50 rounded-3xl">
              <div className="flex items-center justify-center h-full">
                <div className="text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-4">
                    <Target className="w-8 h-8" />
                  </div>
                  <h3 className="text-3xl font-bold text-foreground">Identify</h3>
                  <p className="text-muted-foreground">Real-time health score tracking</p>
                </div>
              </div>
            </Card>
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-foreground">
                Know who needs attention
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Instantly identify which customers need attention without manual analysis. Our AI-powered health scores prioritize your outreach to those who need it most, giving you peace of mind and the ability to predict your revenue.
              </p>
            </div>
          </div>

          {/* Feature 2: Retain */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4 md:order-2">
              <h2 className="text-4xl font-bold text-foreground">
                Act before it's too late
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Get the reasoning behind every risk score with actionable recommendations. We prioritize customers by likelihood to churn and tell you exactly what to do to keep them, so you can step in at the right moment.
              </p>
            </div>
            <Card className="p-8 bg-primary/5 border-primary/20 rounded-3xl md:order-1">
              <div className="flex items-center justify-center h-full">
                <div className="text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-4">
                    <Shield className="w-8 h-8" />
                  </div>
                  <h3 className="text-3xl font-bold text-foreground">Retain</h3>
                  <p className="text-muted-foreground">Smart recommendations to save customers</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Feature 3: Learn */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <Card className="p-8 bg-secondary/50 border-secondary rounded-3xl">
              <div className="flex items-center justify-center h-full">
                <div className="text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-secondary-foreground/10 text-secondary-foreground mb-4">
                    <TrendingUp className="w-8 h-8" />
                  </div>
                  <h3 className="text-3xl font-bold text-foreground">Learn</h3>
                  <p className="text-muted-foreground">Understand patterns and improve</p>
                </div>
              </div>
            </Card>
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-foreground">
                Build a better product
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Discover why customers leave and what keeps them engaged. Our insights help you identify patterns across your customer base, so you can improve your product and reduce future churn.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <Card className="max-w-4xl mx-auto p-12 bg-primary/5 border-primary/20 rounded-3xl text-center space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Ready to reduce churn?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Because keeping customers is the foundation of predictable, sustainable growth.
          </p>
          <Button size="lg" className="text-lg px-8 py-6 rounded-full">
            Start Free Trial
          </Button>
        </Card>
      </section>
    </div>
  );
};

export default Index;
