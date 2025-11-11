import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Target, Shield, TrendingUp, Sparkles, Zap, ArrowRight, Star } from "lucide-react";
import { MagneticButton } from "@/components/MagneticButton";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ParallaxCard } from "@/components/ParallaxCard";
import { useEffect, useState } from "react";
import atRiskDashboard from "@/assets/at-risk-dashboard.jpg";
import customerEmma from "@/assets/customer-emma.jpg";
import customerRobert from "@/assets/customer-robert.jpg";
import aiAgentInterface from "@/assets/ai-agent-interface.jpg";
const Index = () => {
  return <div className="min-h-screen bg-background bg-gradient-mesh overflow-hidden relative">
      
      {/* Animated background orbs */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{
        animationDelay: '-3s'
      }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-glow"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-2xl animate-float" style={{
        animationDelay: '-1.5s'
      }}></div>
        
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
              <div className="absolute inset-0 blur-xl bg-secondary/30 animate-glow" style={{
              animationDelay: '-1.5s'
            }}></div>
            </div>
            <span className="text-xl font-bold gradient-text">Butter AI</span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Features</a>
            <a href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition-colors">How It Works</a>
            <a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
            <a href="#faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors">FAQ</a>
          </div>
          <div className="flex items-center gap-4">
            <MagneticButton 
              className="text-sm rounded-full px-6 bg-gradient-primary hover:shadow-lg hover:shadow-primary/50 transition-all animate-gradient"
              onClick={() => window.open('https://form.typeform.com/to/vR5xA4U4', '_blank')}
            >
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
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight animate-slide-up" style={{
          animationDelay: '0.1s'
        }}>
            <span className="gradient-text">Stop Losing Customers.</span>
            <br />
            <span className="text-foreground">Start Growing Revenue.</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-slide-up" style={{
          animationDelay: '0.2s'
        }}>
            Join the waitlist for early access. Be among the first to identify at-risk customers and prevent churn before it happens.
          </p>
          <div className="flex gap-4 justify-center flex-wrap pt-4 animate-slide-up" style={{
          animationDelay: '0.3s'
        }}>
            <MagneticButton 
              size="lg" 
              className="text-base px-8 py-6 rounded-full bg-gradient-primary hover:shadow-2xl hover:shadow-primary/50 animate-pulse-glow group relative overflow-hidden"
              onClick={() => window.open('https://form.typeform.com/to/vR5xA4U4', '_blank')}
            >
              <span className="relative z-10 flex items-center">
                Get Early Access
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 animate-shimmer"></div>
            </MagneticButton>
          </div>
          <p className="text-sm text-muted-foreground pt-4 animate-slide-up" style={{
          animationDelay: '0.4s'
        }}>
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
                  <div className="text-4xl font-bold mb-2 gradient-text group-hover:scale-110 transition-transform">3x ROI</div>
                  <p className="text-muted-foreground">Return on investment from retention vs acquisition</p>
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
      <section id="features" className="container mx-auto px-6 py-20 md:py-32">
        <div className="max-w-6xl mx-auto space-y-32">
          {/* Feature 1: Identify */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <ScrollReveal className="order-2 md:order-1">
              <ParallaxCard className="p-0 glass border-2 border-primary/20 rounded-3xl shadow-2xl overflow-hidden hover-lift hover:shadow-primary/20 card-3d relative group">
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity animate-gradient"></div>
                <img src={atRiskDashboard} alt="At-risk customers dashboard showing health scores and customer list" className="w-full h-auto" />
              </ParallaxCard>
            </ScrollReveal>
            <ScrollReveal className="space-y-6 order-1 md:order-2" delay={200}>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                <span className="gradient-text">See Where</span>
                <br />
                <span className="text-stone-950">Customers Are Slipping</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">Uncover hidden churn risks by connecting all your tools and data to find where revenue is silently leaking.</p>
            </ScrollReveal>
          </div>

          {/* Feature 2: Retain */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <ScrollReveal className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                <span className="gradient-text">Turn Insights</span>
                <br />
                <span className="text-foreground">Into Actions</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">Cut through the noise and know exactly which customers and tasks will move the needle this week.</p>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <ParallaxCard className="p-0 glass border-2 border-secondary/20 rounded-3xl shadow-2xl overflow-hidden hover-lift hover:shadow-secondary/20 card-3d relative group">
                <div className="absolute inset-0 bg-gradient-secondary opacity-0 group-hover:opacity-5 transition-opacity animate-gradient"></div>
                <img src={customerRobert} alt="Customer profile showing critical risk status and account details" className="w-full h-auto" />
              </ParallaxCard>
            </ScrollReveal>
          </div>

          {/* Feature 3: Grow */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <ScrollReveal className="order-2 md:order-1">
              <ParallaxCard className="p-0 glass border-2 border-accent/20 rounded-3xl shadow-2xl overflow-hidden hover-lift hover:shadow-accent/20 card-3d relative group">
                <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-5 transition-opacity animate-gradient"></div>
                <img src={aiAgentInterface} alt="AI agent interface showing customer analysis and recommended action plans" className="w-full h-auto" />
              </ParallaxCard>
            </ScrollReveal>
            <ScrollReveal className="space-y-6 order-1 md:order-2" delay={200}>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                <span className="gradient-text">Let Butter </span>
                <br />
                <span className="text-foreground">Work For You</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">Butter manages outreach and customer follow-ups for you. It runs your customer success playbook automatically so you can focus on building, not babysitting customers.</p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <ScrollReveal>
        <section id="how-it-works" className="container mx-auto px-6 py-20 md:py-32 relative">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold">
                <span className="gradient-text">How It Works</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Three simple steps to revolutionize your customer retention
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mt-16">
              <ScrollReveal delay={0}>
                <ParallaxCard className="p-8 glass border-2 border-primary/20 rounded-3xl hover-lift relative group">
                  <div className="absolute -top-4 left-8 w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    1
                  </div>
                  <div className="mt-4 space-y-4">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto">
                      <Target className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">Connect Your Data</h3>
                    <p className="text-muted-foreground">
                      Seamlessly integrate with your CRM, billing, and support tools. Our AI starts learning from day one.
                    </p>
                  </div>
                </ParallaxCard>
              </ScrollReveal>

              <ScrollReveal delay={100}>
                <ParallaxCard className="p-8 glass border-2 border-primary/20 rounded-3xl hover-lift relative group">
                  <div className="absolute -top-4 left-8 w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    2
                  </div>
                  <div className="mt-4 space-y-4">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto">
                      <Zap className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">Get AI Insights</h3>
                    <p className="text-muted-foreground">
                      Our AI analyzes patterns, predicts churn risk, and identifies upsell opportunities in real-time.
                    </p>
                  </div>
                </ParallaxCard>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <ParallaxCard className="p-8 glass border-2 border-primary/20 rounded-3xl hover-lift relative group">
                  <div className="absolute -top-4 left-8 w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    3
                  </div>
                  <div className="mt-4 space-y-4">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto">
                      <TrendingUp className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">Take Action</h3>
                    <p className="text-muted-foreground">
                      Get personalized action plans and automated workflows to retain customers and grow revenue.
                    </p>
                  </div>
                </ParallaxCard>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Pricing Section */}
      <ScrollReveal>
        <section id="pricing" className="container mx-auto px-6 py-20 md:py-32">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold">
                <span className="gradient-text">Founding Member Pricing</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Lock in exclusive lifetime discounts by joining early
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mt-16">
              <ScrollReveal delay={0}>
                <ParallaxCard className="p-8 glass border-2 border-border rounded-3xl hover-lift">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">Starter</h3>
                      <p className="text-muted-foreground">Perfect for small teams</p>
                    </div>
                    <div>
                      <div className="text-4xl font-bold gradient-text">$99</div>
                      <div className="text-muted-foreground">/month</div>
                      <div className="text-sm text-primary mt-1">Regular: $149/mo</div>
                    </div>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                          <div className="w-2 h-2 rounded-full bg-primary"></div>
                        </div>
                        <span className="text-sm">Up to 500 customers</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                          <div className="w-2 h-2 rounded-full bg-primary"></div>
                        </div>
                        <span className="text-sm">Basic AI insights</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                          <div className="w-2 h-2 rounded-full bg-primary"></div>
                        </div>
                        <span className="text-sm">Email support</span>
                      </li>
                    </ul>
                    <MagneticButton 
                      className="w-full bg-gradient-primary rounded-full py-3"
                      onClick={() => window.open('https://form.typeform.com/to/vR5xA4U4', '_blank')}
                    >
                      Reserve Spot
                    </MagneticButton>
                  </div>
                </ParallaxCard>
              </ScrollReveal>

              <ScrollReveal delay={100}>
                <ParallaxCard className="p-8 glass border-2 border-primary/40 rounded-3xl hover-lift relative">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-primary rounded-full text-xs font-bold text-white">
                    MOST POPULAR
                  </div>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">Growth</h3>
                      <p className="text-muted-foreground">For scaling businesses</p>
                    </div>
                    <div>
                      <div className="text-4xl font-bold gradient-text">$299</div>
                      <div className="text-muted-foreground">/month</div>
                      <div className="text-sm text-primary mt-1">Regular: $449/mo</div>
                    </div>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                          <div className="w-2 h-2 rounded-full bg-primary"></div>
                        </div>
                        <span className="text-sm">Up to 2,500 customers</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                          <div className="w-2 h-2 rounded-full bg-primary"></div>
                        </div>
                        <span className="text-sm">Advanced AI predictions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                          <div className="w-2 h-2 rounded-full bg-primary"></div>
                        </div>
                        <span className="text-sm">Priority support</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                          <div className="w-2 h-2 rounded-full bg-primary"></div>
                        </div>
                        <span className="text-sm">Custom integrations</span>
                      </li>
                    </ul>
                    <MagneticButton 
                      className="w-full bg-gradient-primary rounded-full py-3"
                      onClick={() => window.open('https://form.typeform.com/to/vR5xA4U4', '_blank')}
                    >
                      Reserve Spot
                    </MagneticButton>
                  </div>
                </ParallaxCard>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <ParallaxCard className="p-8 glass border-2 border-border rounded-3xl hover-lift">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
                      <p className="text-muted-foreground">For large organizations</p>
                    </div>
                    <div>
                      <div className="text-4xl font-bold gradient-text">Custom</div>
                      <div className="text-muted-foreground">Let's talk</div>
                    </div>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                          <div className="w-2 h-2 rounded-full bg-primary"></div>
                        </div>
                        <span className="text-sm">Unlimited customers</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                          <div className="w-2 h-2 rounded-full bg-primary"></div>
                        </div>
                        <span className="text-sm">White-label options</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                          <div className="w-2 h-2 rounded-full bg-primary"></div>
                        </div>
                        <span className="text-sm">Dedicated success manager</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                          <div className="w-2 h-2 rounded-full bg-primary"></div>
                        </div>
                        <span className="text-sm">Custom AI training</span>
                      </li>
                    </ul>
                    <MagneticButton 
                      variant="outline" 
                      className="w-full border-2 rounded-full py-3"
                      onClick={() => window.open('https://form.typeform.com/to/vR5xA4U4', '_blank')}
                    >
                      Contact Sales
                    </MagneticButton>
                  </div>
                </ParallaxCard>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* FAQ Section */}
      <ScrollReveal>
        <section id="faq" className="container mx-auto px-6 py-20 md:py-32">
          <div className="max-w-3xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold">
                <span className="gradient-text">Frequently Asked</span> Questions
              </h2>
            </div>

            <div className="space-y-4">
              <ParallaxCard className="p-6 glass border border-border rounded-2xl hover-lift">
                <h3 className="font-bold text-lg mb-2">When will Butter AI launch?</h3>
                <p className="text-muted-foreground">
                  We're planning to launch in Q2 2025. Waitlist members will get early access and exclusive founding member pricing.
                </p>
              </ParallaxCard>

              <ParallaxCard className="p-6 glass border border-border rounded-2xl hover-lift">
                <h3 className="font-bold text-lg mb-2">What integrations do you support?</h3>
                <p className="text-muted-foreground">
                  We'll launch with support for major CRMs (Salesforce, HubSpot), billing platforms (Stripe, Chargebee), and support tools (Zendesk, Intercom). Custom integrations available for Enterprise.
                </p>
              </ParallaxCard>

              <ParallaxCard className="p-6 glass border border-border rounded-2xl hover-lift">
                <h3 className="font-bold text-lg mb-2">How does the AI work?</h3>
                <p className="text-muted-foreground">
                  Our AI analyzes customer behavior patterns, engagement metrics, support tickets, and billing data to predict churn risk and identify growth opportunities with 95% accuracy.
                </p>
              </ParallaxCard>

              <ParallaxCard className="p-6 glass border border-border rounded-2xl hover-lift">
                <h3 className="font-bold text-lg mb-2">Is my data secure?</h3>
                <p className="text-muted-foreground">
                  Absolutely. We use enterprise-grade encryption, SOC 2 compliance, and never share your data with third parties. Your customer data stays yours.
                </p>
              </ParallaxCard>

              <ParallaxCard className="p-6 glass border border-border rounded-2xl hover-lift">
                <h3 className="font-bold text-lg mb-2">What makes Butter AI different?</h3>
                <p className="text-muted-foreground">
                  Unlike traditional analytics tools, our AI doesn't just show you data—it tells you exactly what to do and automates the retention workflows for you.
                </p>
              </ParallaxCard>
            </div>
          </div>
        </section>
      </ScrollReveal>

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
            <div className="w-[400px] h-[400px] bg-secondary/10 rounded-full blur-3xl animate-glow" style={{
            animationDelay: '-1.5s'
          }}></div>
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
                  onClick={() => window.open('https://form.typeform.com/to/vR5xA4U4', '_blank')}
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
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-primary" />
                <span className="font-bold gradient-text">Butter AI</span>
              </div>
              <p className="text-sm text-muted-foreground">
                AI-powered customer retention that actually works.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#features" className="hover:text-foreground transition-colors">Features</a></li>
                <li><a href="#how-it-works" className="hover:text-foreground transition-colors">How It Works</a></li>
                <li><a href="#pricing" className="hover:text-foreground transition-colors">Pricing</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#faq" className="hover:text-foreground transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Documentation</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">About</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Privacy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © 2025 Butter AI. All rights reserved.
            </p>
            <div className="flex items-center gap-2">
              <p className="text-sm text-muted-foreground">Made with</p>
              <Sparkles className="w-4 h-4 text-primary animate-pulse" />
              <p className="text-sm text-muted-foreground">by the Butter team</p>
            </div>
          </div>
        </div>
      </footer>
    </div>;
};
export default Index;