import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Target, Shield, TrendingUp, Sparkles, Zap, ArrowRight, Star } from "lucide-react";
import { MagneticButton } from "@/components/MagneticButton";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ParallaxCard } from "@/components/ParallaxCard";
import { useEffect, useState } from "react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background bg-gradient-mesh overflow-hidden relative">
      
      {/* Animated background orbs */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-glow"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-2xl animate-float" style={{ animationDelay: '-1.5s' }}></div>
        
        {/* Animated gradient mesh overlay */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 animate-gradient"></div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="container mx-auto px-6 py-6 sticky top-0 z-50 glass backdrop-blur-xl border-b border-border/50 animate-slide-up">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="relative">
              <Sparkles className="w-6 h-6 text-primary animate-pulse" />
              <div className="absolute inset-0 blur-md bg-primary/50 animate-glow"></div>
              <div className="absolute inset-0 blur-xl bg-secondary/30 animate-glow" style={{ animationDelay: '-1.5s' }}></div>
            </div>
            <span className="text-xl font-bold gradient-text">Butter AI</span>
          </div>
          <div className="flex items-center gap-4">
            <MagneticButton className="text-sm rounded-full px-6 bg-gradient-primary hover:shadow-lg hover:shadow-primary/50 transition-all animate-gradient">
              Join Waitlist
            </MagneticButton>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 md:py-32 relative">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-sm text-muted-foreground border border-primary/20 animate-slide-up shadow-lg hover:shadow-primary/20 transition-all">
            <Zap className="w-4 h-4 text-primary animate-pulse" />
            <span>Coming Soon • Pre-Launch Access</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <span className="gradient-text">Stop Losing Customers.</span>
            <br />
            <span className="text-foreground">Start Growing Revenue.</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Join the waitlist for early access. Be among the first to identify at-risk customers and prevent churn before it happens.
          </p>
          <div className="flex gap-4 justify-center flex-wrap pt-4 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <MagneticButton 
              size="lg" 
              className="text-base px-8 py-6 rounded-full bg-gradient-primary hover:shadow-2xl hover:shadow-primary/50 animate-pulse-glow group relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                Get Early Access
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 animate-shimmer"></div>
            </MagneticButton>
          </div>
          <p className="text-sm text-muted-foreground pt-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            Be the first to know when we launch • Exclusive founding member benefits
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-6 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollReveal delay={0}>
              <ParallaxCard className="p-8 text-center border-border glass rounded-3xl hover-lift hover-glow group cursor-pointer relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity animate-gradient"></div>
                <div className="relative">
                  <div className="flex items-center justify-center mb-3">
                    <Star className="w-8 h-8 text-primary animate-pulse" />
                  </div>
                  <div className="text-4xl font-bold mb-2 gradient-text group-hover:scale-110 transition-transform">5-7x</div>
                  <p className="text-muted-foreground">Cheaper to keep customers than acquire new ones</p>
                </div>
              </ParallaxCard>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <ParallaxCard className="p-8 text-center border-border glass rounded-3xl hover-lift hover-glow group cursor-pointer relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-secondary opacity-0 group-hover:opacity-5 transition-opacity animate-gradient"></div>
                <div className="relative">
                  <div className="flex items-center justify-center mb-3">
                    <TrendingUp className="w-8 h-8 text-secondary animate-pulse" />
                  </div>
                  <div className="text-4xl font-bold mb-2 gradient-text group-hover:scale-110 transition-transform">80%</div>
                  <p className="text-muted-foreground">Growth comes from keeping your current customers happy</p>
                </div>
              </ParallaxCard>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <ParallaxCard className="p-8 text-center border-border glass rounded-3xl hover-lift hover-glow group cursor-pointer relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-5 transition-opacity animate-gradient"></div>
                <div className="relative">
                  <div className="flex items-center justify-center mb-3">
                    <Zap className="w-8 h-8 text-primary animate-pulse" />
                  </div>
                  <div className="text-4xl font-bold mb-2 gradient-text group-hover:scale-110 transition-transform">95%</div>
                  <p className="text-muted-foreground">Accuracy in predicting customer churn</p>
                </div>
              </ParallaxCard>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-20 md:py-32 relative">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <ScrollReveal>
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="gradient-text">Your Complete Customer</span>
                <br />
                <span className="text-foreground">Success Platform</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                From identifying risk to driving growth, everything you need in one place
              </p>
            </ScrollReveal>
          </div>

          {/* Connecting line visualization */}
          <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-[600px] bg-gradient-to-b from-transparent via-primary/20 to-transparent pointer-events-none"></div>

          {/* Feature 1: Identify - Large Left */}
          <div className="relative mb-32">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <ScrollReveal className="lg:col-span-7 relative">
                <div className="absolute -top-12 -left-12 w-24 h-24 bg-primary/5 rounded-full blur-2xl animate-glow"></div>
                <ParallaxCard className="p-0 glass border-2 border-primary/20 rounded-3xl shadow-2xl overflow-hidden hover-lift hover:shadow-primary/20 card-3d relative group transform lg:scale-105">
                  <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity animate-gradient"></div>
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
                </ParallaxCard>
              </ScrollReveal>
              <ScrollReveal className="lg:col-span-5 space-y-6" delay={200}>
                <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-sm border border-primary/20">
                  <Target className="w-4 h-4 text-primary" />
                  <span className="font-semibold gradient-text">Identify</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold leading-tight">
                  <span className="gradient-text">See Where Customers</span>
                  <br />
                  <span className="text-foreground">Are At Risk</span>
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Identify the signals of churn and intervene before it is too late. Our AI analyzes behavior patterns, engagement metrics, and support interactions to flag at-risk accounts automatically.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Zap className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-muted-foreground">Real-time risk scoring</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Zap className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-muted-foreground">Behavioral pattern detection</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Zap className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-muted-foreground">Automated alerts & notifications</span>
                  </li>
                </ul>
              </ScrollReveal>
            </div>
          </div>

          {/* Feature 2: Retain - Small Right with Overlap */}
          <div className="relative mb-32">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <ScrollReveal className="lg:col-span-5 space-y-6 order-2 lg:order-1">
                <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-sm border border-secondary/20">
                  <Shield className="w-4 h-4 text-secondary" />
                  <span className="font-semibold gradient-text">Retain</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold leading-tight">
                  <span className="gradient-text">Keep Your</span>
                  <br />
                  <span className="text-foreground">Customers Happy</span>
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Learn why your customer is at risk and get AI-powered recommendations on how to act. Every insight comes with a specific, actionable plan you can execute immediately.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Shield className="w-4 h-4 text-secondary" />
                    </div>
                    <span className="text-muted-foreground">AI-generated action plans</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Shield className="w-4 h-4 text-secondary" />
                    </div>
                    <span className="text-muted-foreground">Root cause analysis</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Shield className="w-4 h-4 text-secondary" />
                    </div>
                    <span className="text-muted-foreground">Track intervention outcomes</span>
                  </li>
                </ul>
              </ScrollReveal>
              <ScrollReveal className="lg:col-span-7 relative order-1 lg:order-2" delay={200}>
                <div className="absolute -top-12 -right-12 w-24 h-24 bg-secondary/5 rounded-full blur-2xl animate-glow" style={{ animationDelay: '-1s' }}></div>
                <ParallaxCard className="p-0 glass border-2 border-secondary/20 rounded-3xl shadow-2xl overflow-hidden hover-lift hover:shadow-secondary/20 card-3d relative group transform lg:-translate-x-12">
                  <div className="absolute inset-0 bg-gradient-secondary opacity-0 group-hover:opacity-5 transition-opacity animate-gradient"></div>
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
                </ParallaxCard>
              </ScrollReveal>
            </div>
          </div>

          {/* Feature 3: Grow - Medium Center */}
          <div className="relative">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <ScrollReveal className="lg:col-span-6 lg:col-start-2 relative">
                <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-32 h-32 bg-accent/5 rounded-full blur-2xl animate-glow" style={{ animationDelay: '-2s' }}></div>
                <ParallaxCard className="p-0 glass border-2 border-accent/20 rounded-3xl shadow-2xl overflow-hidden hover-lift hover:shadow-accent/20 card-3d relative group">
                  <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-5 transition-opacity animate-gradient"></div>
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
                </ParallaxCard>
              </ScrollReveal>
              <ScrollReveal className="lg:col-span-5 space-y-6" delay={200}>
                <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-sm border border-accent/20">
                  <TrendingUp className="w-4 h-4 text-primary" />
                  <span className="font-semibold gradient-text">Grow</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold leading-tight">
                  <span className="gradient-text">Grow Your</span>
                  <br />
                  <span className="text-foreground">Business</span>
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Find the accounts that are ready to expand and act quickly. Identify expansion opportunities and optimize your revenue per customer with precision targeting.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <TrendingUp className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-muted-foreground">Identify upsell opportunities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <TrendingUp className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-muted-foreground">Revenue expansion tracking</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <TrendingUp className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-muted-foreground">Perfect timing recommendations</span>
                  </li>
                </ul>
              </ScrollReveal>
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
      <ScrollReveal>
        <section className="container mx-auto px-6 py-20 md:py-32 relative">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl animate-glow"></div>
            <div className="w-[400px] h-[400px] bg-secondary/10 rounded-full blur-3xl animate-glow" style={{ animationDelay: '-1.5s' }}></div>
          </div>
          <ParallaxCard className="max-w-4xl mx-auto p-12 md:p-16 bg-gradient-primary rounded-3xl text-center space-y-8 shadow-2xl hover:shadow-primary/50 card-3d relative overflow-hidden animate-gradient group">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute inset-0 animate-shimmer"></div>
            </div>
            <div className="relative">
              <div className="flex items-center justify-center mb-4">
                <Sparkles className="w-12 h-12 text-white animate-pulse" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Join the Pre-Launch Waitlist
              </h2>
              <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
                Be among the first to experience Butter AI. Sign up now for exclusive early access and founding member benefits.
              </p>
              <div className="flex gap-4 justify-center flex-wrap pt-4">
                <MagneticButton 
                  size="lg" 
                  className="text-base px-8 py-6 rounded-full bg-white text-primary hover:bg-white/90 shadow-lg hover:shadow-2xl group relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center">
                    Reserve Your Spot
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity"></div>
                </MagneticButton>
              </div>
              <p className="text-sm text-white/70 pt-4">
                Limited spots available • No commitment required • Exclusive founding member pricing
              </p>
            </div>
          </ParallaxCard>
        </section>
      </ScrollReveal>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-12 border-t border-border/50">
        <div className="text-center text-sm text-muted-foreground">
          <p className="flex items-center justify-center gap-2">
            Made with <Sparkles className="w-4 h-4 text-primary animate-pulse" /> by <span className="gradient-text font-semibold">Butter AI</span>
          </p>
          <p className="mt-2">© 2025 Butter AI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
