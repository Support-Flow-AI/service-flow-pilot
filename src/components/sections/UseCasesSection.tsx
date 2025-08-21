import { ShoppingCart, Monitor, Rocket, Users } from "lucide-react";

const useCases = [
  {
    icon: ShoppingCart,
    title: "E-commerce",
    description: "Handle order inquiries, shipping questions, and product support automatically while reducing cart abandonment.",
    benefits: ["24/7 order support", "Automated shipping updates", "Product recommendations"]
  },
  {
    icon: Monitor,
    title: "Tech Support",
    description: "Provide instant technical assistance with AI-powered troubleshooting and seamless escalation to human experts.",
    benefits: ["Instant troubleshooting", "Technical documentation", "Expert escalation"]
  },
  {
    icon: Rocket,
    title: "SaaS Onboarding",
    description: "Guide new users through setup processes and answer common questions to improve user adoption and retention.",
    benefits: ["Interactive onboarding", "Feature tutorials", "Usage analytics"]
  },
  {
    icon: Users,
    title: "Customer Success",
    description: "Proactively engage customers, gather feedback, and identify expansion opportunities through intelligent conversations.",
    benefits: ["Proactive outreach", "Feedback collection", "Upsell opportunities"]
  }
];

export const UseCasesSection = () => {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Perfect for <span className="gradient-text">Every Industry</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how different businesses use SupportFlow AI to transform their customer experience and drive growth.
          </p>
        </div>

        {/* Use Cases Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => {
            const IconComponent = useCase.icon;
            return (
              <div key={index} className="feature-card">
                {/* Header */}
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-hero flex items-center justify-center">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold">{useCase.title}</h3>
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {useCase.description}
                </p>

                {/* Benefits */}
                <div className="space-y-3">
                  {useCase.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <span className="text-sm text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text mb-2">500+</div>
            <div className="text-sm text-muted-foreground">Active Companies</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text mb-2">1M+</div>
            <div className="text-sm text-muted-foreground">Conversations</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text mb-2">95%</div>
            <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text mb-2">24/7</div>
            <div className="text-sm text-muted-foreground">Availability</div>
          </div>
        </div>
      </div>
    </section>
  );
};