import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Target, Shield, TrendingUp, Sparkles } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-6 h-6" />
            <span className="text-xl font-bold">Butter AI</span>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="text-sm">
              Sign In
            </Button>
            <Button className="text-sm rounded-full px-6">
              Get Started
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent rounded-full text-sm text-muted-foreground border border-border">
            <Sparkles className="w-4 h-4" />
            <span>AI-Powered Churn Prevention</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-foreground tracking-tight leading-tight">
            Stop Losing Customers.
            <br />
            Start Growing Revenue.
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Don't let churn destroy your business. Identify at-risk customers before they leave and take action that actually works.
          </p>
          <div className="flex gap-4 justify-center flex-wrap pt-4">
            <Button size="lg" className="text-base px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="text-base px-8 py-6 rounded-full">
              Watch Demo
            </Button>
          </div>
          <p className="text-sm text-muted-foreground pt-4">
            No credit card required • Free 14-day trial
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-6 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 text-center border-border bg-card rounded-3xl">
              <div className="text-4xl font-bold mb-2">5-7x</div>
              <p className="text-muted-foreground">Cheaper to keep customers than acquire new ones</p>
            </Card>
            <Card className="p-8 text-center border-border bg-card rounded-3xl">
              <div className="text-4xl font-bold mb-2">80%</div>
              <p className="text-muted-foreground">Of revenue comes from existing customers</p>
            </Card>
            <Card className="p-8 text-center border-border bg-card rounded-3xl">
              <div className="text-4xl font-bold mb-2">95%</div>
              <p className="text-muted-foreground">Accuracy in predicting customer churn</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-20 md:py-32">
        <div className="max-w-6xl mx-auto space-y-32">
          {/* Feature 1: Identify */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <Card className="p-12 bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 border-0 rounded-3xl shadow-sm">
                <div className="space-y-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white shadow-sm">
                    <Target className="w-8 h-8 text-orange-600" />
                  </div>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="text-sm font-medium text-muted-foreground">IDENTIFY</div>
                      <h3 className="text-2xl font-bold">At-Risk Dashboard</h3>
                    </div>
                    <div className="space-y-3 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-red-500"></div>
                        <span>Real-time health scores</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                        <span>Risk level segmentation</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                        <span>Churn signal detection</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
            <div className="space-y-6 order-1 md:order-2">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                Spot Which Customers Are At Risk
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Stop guessing. Our AI instantly identifies the signals of churn and shows you exactly who needs your attention—before it's too late.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Every lost customer is revenue walking out the door. Don't let that happen.
              </p>
            </div>
          </div>

          {/* Feature 2: Retain */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                Keep Your Customers
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Know exactly why each customer is at risk and get proven strategies to win them back.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                No more generic outreach. Get personalized action plans that actually work to save relationships and protect your revenue.
              </p>
            </div>
            <Card className="p-12 bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 border-0 rounded-3xl shadow-sm">
              <div className="space-y-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white shadow-sm">
                  <Shield className="w-8 h-8 text-purple-600" />
                </div>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="text-sm font-medium text-muted-foreground">RETAIN</div>
                    <h3 className="text-2xl font-bold">Action Recommendations</h3>
                  </div>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                      <span>Root cause analysis</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-pink-500"></div>
                      <span>Personalized playbooks</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-rose-500"></div>
                      <span>Success tracking</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Feature 3: Grow */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <Card className="p-12 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 border-0 rounded-3xl shadow-sm">
                <div className="space-y-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white shadow-sm">
                    <TrendingUp className="w-8 h-8 text-green-600" />
                  </div>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="text-sm font-medium text-muted-foreground">GROW</div>
                      <h3 className="text-2xl font-bold">Expansion Opportunities</h3>
                    </div>
                    <div className="space-y-3 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        <span>Upsell readiness scoring</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                        <span>Engagement trend analysis</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-teal-500"></div>
                        <span>Perfect timing alerts</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
            <div className="space-y-6 order-1 md:order-2">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                Grow Your Business
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Don't just prevent churn—unlock growth. Find accounts that are ready to expand and strike while the iron is hot.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Your best customers are waiting to give you more revenue. We'll show you exactly when to ask.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Join hundreds of growing companies
            </h2>
            <p className="text-xl text-muted-foreground">
              Stop losing customers. Start protecting revenue.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="container mx-auto px-6 py-20 md:py-32">
        <Card className="max-w-4xl mx-auto p-12 md:p-16 bg-gradient-to-br from-foreground to-foreground/90 rounded-3xl text-center space-y-8 shadow-2xl">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground leading-tight">
            Ready to Save Your Customers?
          </h2>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Every day you wait, you lose more revenue. Start preventing churn today—no credit card required.
          </p>
          <div className="flex gap-4 justify-center flex-wrap pt-4">
            <Button size="lg" variant="secondary" className="text-base px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="text-base px-8 py-6 rounded-full bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
              Talk to Sales
            </Button>
          </div>
          <p className="text-sm text-primary-foreground/60 pt-4">
            14-day free trial • No credit card required • Cancel anytime
          </p>
        </Card>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-12 border-t border-border">
        <div className="text-center text-sm text-muted-foreground">
          <p>© 2025 Butter AI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
