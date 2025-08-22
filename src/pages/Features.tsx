import { Navigation } from "@/components/ui/navigation";
import { FooterSection } from "@/components/sections/FooterSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { IntegrationSection } from "@/components/sections/IntegrationSection";
import { Button } from "@/components/ui/button";
import { Bot, Mic, Building, Plug, Shield, Zap, Clock, Users } from "lucide-react";

const Features = () => {
  const additionalFeatures = [
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level encryption, SOC 2 compliance, and GDPR-ready data protection for your peace of mind."
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Average response time under 2 seconds with intelligent caching and optimized AI processing."
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Never miss a customer inquiry with round-the-clock AI support and smart escalation protocols."
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Built-in tools for agent collaboration, ticket handoffs, and internal communication."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <div className="container-custom py-20">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
              Powerful Features for Modern Support
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Everything you need to deliver exceptional customer service with AI-powered automation and human expertise.
            </p>
            <Button className="btn-hero text-lg px-8 py-3">
              Start Free Trial
            </Button>
          </div>
        </div>

        {/* Main Features */}
        <FeaturesSection />

        {/* Additional Features Grid */}
        <div className="container-custom py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Built for Scale & Security
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Enterprise-grade features that grow with your business and keep your data secure.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalFeatures.map((feature, index) => (
              <div key={index} className="feature-card group">
                <div className="w-16 h-16 bg-gradient-hero rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Feature Deep Dive */}
        <div className="bg-card/50">
          <div className="container-custom py-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  AI That Actually Understands
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Our RAG (Retrieval-Augmented Generation) technology doesn't just generate responses—it understands your business context, learns from your documentation, and provides answers that feel authentically yours.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Bot className="w-3 h-3 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Context-Aware Responses</h3>
                      <p className="text-muted-foreground">AI that remembers conversation history and user preferences</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Shield className="w-3 h-3 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Confidence Scoring</h3>
                      <p className="text-muted-foreground">Smart escalation when AI isn't confident in its response</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Zap className="w-3 h-3 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Continuous Learning</h3>
                      <p className="text-muted-foreground">Gets smarter with every interaction and feedback</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-hero rounded-2xl p-1">
                <div className="bg-background rounded-xl p-8">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                        <Bot className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-sm text-muted-foreground">SupportFlow AI</span>
                    </div>
                    <div className="bg-primary/5 rounded-lg p-4">
                      <p className="text-sm">
                        "I understand you're having trouble with your billing. Based on your account history, I can see you're on the Pro plan. Let me help you update your payment method..."
                      </p>
                    </div>
                    <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>98% confidence • Human escalation available</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Integration Section */}
        <IntegrationSection />
      </main>
      <FooterSection />
    </div>
  );
};

export default Features;