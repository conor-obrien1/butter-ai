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
              <Card className="p-0 bg-white border border-border rounded-3xl shadow-lg overflow-hidden">
                <div className="p-8 bg-background">
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    <div className="bg-card border-l-4 border-red-500 rounded-xl p-6">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <div className="text-sm font-semibold text-foreground mb-1">At-Risk Customers</div>
                          <div className="text-xs text-muted-foreground">Needs immediate attention</div>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center">
                          <Target className="w-5 h-5 text-red-600" />
                        </div>
                      </div>
                      <div className="text-3xl font-bold mb-2">26</div>
                      <div className="text-xs text-red-600 font-medium">Take action →</div>
                    </div>
                    <div className="bg-card border-l-4 border-green-500 rounded-xl p-6">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <div className="text-sm font-semibold text-foreground mb-1">Stable Customers</div>
                          <div className="text-xs text-muted-foreground">No action needed</div>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center">
                          <Shield className="w-5 h-5 text-green-600" />
                        </div>
                      </div>
                      <div className="text-3xl font-bold mb-2">24</div>
                      <div className="text-xs text-green-600 font-medium">Monitor →</div>
                    </div>
                    <div className="bg-card border-l-4 border-blue-500 rounded-xl p-6">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <div className="text-sm font-semibold text-foreground mb-1">Upsell Opportunities</div>
                          <div className="text-xs text-muted-foreground">High-potential customers</div>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
                          <TrendingUp className="w-5 h-5 text-blue-600" />
                        </div>
                      </div>
                      <div className="text-3xl font-bold mb-2">7</div>
                      <div className="text-xs text-blue-600 font-medium">Capture revenue →</div>
                    </div>
                  </div>
                  <div className="border border-border rounded-xl p-4 bg-card">
                    <div className="text-xs font-semibold text-muted-foreground mb-4">CUSTOMER OVERVIEW</div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-4 text-xs">
                        <div className="flex-1 font-medium text-foreground">Contact 38 • Initech</div>
                        <div className="flex items-center gap-2">
                          <div className="w-24 h-2 bg-border rounded-full overflow-hidden">
                            <div className="w-1/5 h-full bg-red-500"></div>
                          </div>
                          <span className="text-muted-foreground">2</span>
                        </div>
                        <span className="text-red-600 font-semibold">Critical</span>
                        <span className="text-muted-foreground">Multiple support tickets</span>
                      </div>
                      <div className="flex items-center gap-4 text-xs">
                        <div className="flex-1 font-medium text-foreground">Contact 7 • Hooli</div>
                        <div className="flex items-center gap-2">
                          <div className="w-24 h-2 bg-border rounded-full overflow-hidden">
                            <div className="w-1/4 h-full bg-red-500"></div>
                          </div>
                          <span className="text-muted-foreground">7</span>
                        </div>
                        <span className="text-red-600 font-semibold">Critical</span>
                        <span className="text-muted-foreground">Payment issues</span>
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
                Identify the signals of churn and intervene before it is too late.
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
                Learn why your customer is at risk and how you should act to keep them.
              </p>
            </div>
            <Card className="p-0 bg-white border border-border rounded-3xl shadow-lg overflow-hidden">
              <div className="p-8 bg-background">
                <div className="grid grid-cols-3 gap-6 mb-6">
                  <div className="col-span-1">
                    <div className="text-xs font-semibold text-muted-foreground mb-2">Health Score</div>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-2 bg-border rounded-full overflow-hidden">
                        <div className="w-1/12 h-full bg-red-500"></div>
                      </div>
                      <span className="text-2xl font-bold text-red-600">1</span>
                    </div>
                    <div className="mt-2 text-xs text-muted-foreground">Previous: 0</div>
                  </div>
                  <div className="col-span-2 bg-red-50 rounded-xl p-4">
                    <div className="text-xs font-semibold text-red-900 mb-2">Risk Analysis</div>
                    <div className="text-sm text-red-800">Contact 49 from Wayne Enterprises is <span className="font-bold">at critical risk of churning</span></div>
                    <div className="mt-3">
                      <div className="text-xs font-semibold text-red-900 mb-1">Primary Reason:</div>
                      <div className="text-sm text-red-800">Payment issues</div>
                    </div>
                  </div>
                </div>
                <div className="bg-blue-50 rounded-xl p-4 mb-6">
                  <div className="text-xs font-semibold text-blue-900 mb-3">Recommended Actions</div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-blue-800">
                      <span className="w-5 h-5 rounded-full bg-blue-200 flex items-center justify-center text-xs font-bold">1</span>
                      <span>Schedule an urgent check-in call</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-blue-800">
                      <span className="w-5 h-5 rounded-full bg-blue-200 flex items-center justify-center text-xs font-bold">2</span>
                      <span>Send gift card for feedback</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-blue-800">
                      <span className="w-5 h-5 rounded-full bg-blue-200 flex items-center justify-center text-xs font-bold">3</span>
                      <span>Create custom success plan</span>
                    </div>
                  </div>
                </div>
                <div className="border border-border rounded-xl p-4 bg-card">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-xs font-semibold text-foreground">Action Plans</div>
                    <Button size="sm" className="h-7 text-xs rounded-full">+ New Plan</Button>
                  </div>
                  <div className="space-y-3">
                    <div className="text-xs">
                      <div className="font-semibold text-foreground mb-1">Billing discussion</div>
                      <div className="text-muted-foreground mb-2">Contact to discuss payment options and potential plan adjustments</div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="ghost" className="h-6 text-xs text-blue-600">Start</Button>
                        <Button size="sm" variant="ghost" className="h-6 text-xs text-green-600">Complete</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Feature 3: Grow */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <Card className="p-0 bg-white border border-border rounded-3xl shadow-lg overflow-hidden">
                <div className="p-8 bg-background">
                  <div className="bg-blue-50 rounded-xl p-4 mb-6">
                    <div className="flex items-center gap-2 text-sm text-blue-900 mb-2">
                      <TrendingUp className="w-5 h-5 text-blue-600" />
                      <span className="font-semibold">This customer shows high potential for an upsell from <span className="text-blue-600">Pro</span> to <span className="text-blue-600">Enterprise</span>.</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 mb-6 pb-6 border-b border-border">
                    <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center text-xl font-bold">C32</div>
                    <div>
                      <div className="text-lg font-semibold text-foreground">Contact 32</div>
                      <div className="text-sm text-muted-foreground">Initech</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-card border border-border rounded-xl p-4">
                      <div className="text-xs font-semibold text-muted-foreground mb-2">Current Tier:</div>
                      <div className="text-xl font-bold text-foreground mb-1">Pro</div>
                      <div className="text-xs text-blue-600 font-medium">Upgrade to: Enterprise</div>
                    </div>
                    <div className="bg-card border border-border rounded-xl p-4">
                      <div className="text-xs font-semibold text-muted-foreground mb-2">Health Score:</div>
                      <div className="flex items-center gap-2">
                        <div className="flex-1 h-2 bg-border rounded-full overflow-hidden">
                          <div className="w-4/5 h-full bg-green-500"></div>
                        </div>
                        <span className="text-xl font-bold text-green-600">79</span>
                      </div>
                    </div>
                    <div className="bg-card border border-border rounded-xl p-4">
                      <div className="text-xs font-semibold text-muted-foreground mb-2">Current Revenue:</div>
                      <div className="text-xl font-bold text-foreground">$5,301</div>
                    </div>
                    <div className="bg-card border border-border rounded-xl p-4">
                      <div className="text-xs font-semibold text-muted-foreground mb-2">Potential Revenue:</div>
                      <div className="text-xl font-bold text-green-600">$10,602</div>
                      <div className="text-xs text-green-600 flex items-center gap-1">
                        <TrendingUp className="w-3 h-3" />
                        <span>+100%</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-blue-50 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp className="w-5 h-5 text-blue-600" />
                      <span className="text-sm font-semibold text-blue-900">Upsell Opportunity</span>
                    </div>
                    <div className="text-sm text-blue-800">Ready for Enterprise upgrade</div>
                  </div>
                </div>
              </Card>
            </div>
            <div className="space-y-6 order-1 md:order-2">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                Grow Your Business
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Find the accounts that are ready to expand and act quickly.
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
