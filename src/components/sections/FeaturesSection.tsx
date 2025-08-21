import { Bot, Mic, Building, Puzzle } from "lucide-react";
import aiIcon from "@/assets/ai-icon.jpg";
import voiceIcon from "@/assets/voice-icon.jpg";
import architectureIcon from "@/assets/architecture-icon.jpg";
import widgetIcon from "@/assets/widget-icon.jpg";

const features = [
  {
    icon: Bot,
    image: aiIcon,
    title: "AI-Powered RAG",
    description: "Intelligent document processing and contextual responses that learn from your knowledge base, ensuring accurate and relevant customer support."
  },
  {
    icon: Mic,
    image: voiceIcon,
    title: "Voice Support",
    description: "Real-time voice communication for instant customer assistance, providing a human touch when text-based support isn't enough."
  },
  {
    icon: Building,
    image: architectureIcon,
    title: "Multi-Tenant Architecture",
    description: "Secure, scalable setup supporting unlimited companies on one platform, with complete data isolation and customization."
  },
  {
    icon: Puzzle,
    image: widgetIcon,
    title: "Widget Plugin",
    description: "Embeddable support widget that integrates seamlessly into any website in minutes, matching your brand and design perfectly."
  }
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="section-padding bg-muted/30">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Powerful Features for 
            <span className="gradient-text"> Modern Support</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to transform your customer support experience with AI-powered automation and human oversight.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="feature-card group">
                {/* Feature Image/Icon */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-hero p-0.5 group-hover:scale-110 transition-transform duration-300">
                    <div className="w-full h-full rounded-2xl bg-background flex items-center justify-center">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                </div>

                {/* Feature Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">Ready to transform your customer support?</p>
          <button className="btn-hero">
            Start Free Trial
          </button>
        </div>
      </div>
    </section>
  );
};