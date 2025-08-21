import { Database, Code, MessageSquare } from "lucide-react";

const steps = [
  {
    icon: Database,
    title: "Connect Your Knowledge Base",
    description: "Upload your documentation, FAQs, and support materials. Our AI learns from your content to provide accurate responses."
  },
  {
    icon: Code,
    title: "Install the Widget",
    description: "Add our lightweight widget to your website with a simple code snippet. Customize the appearance to match your brand."
  },
  {
    icon: MessageSquare,
    title: "AI Handles Tickets",
    description: "AI automatically responds to common queries while humans handle complex issues. Perfect balance of efficiency and quality."
  }
];

export const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold">
            How <span className="gradient-text">SupportFlow AI</span> Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get up and running in minutes with our simple three-step process. No technical expertise required.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-24 left-1/2 transform -translate-x-1/2 w-full max-w-4xl">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 w-1/3 border-t-2 border-dashed border-primary/30"></div>
              <div className="absolute inset-y-0 right-0 w-1/3 border-t-2 border-dashed border-primary/30"></div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="text-center relative">
                  {/* Step Number */}
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-hero text-white font-bold text-xl mb-6 relative z-10">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div className="flex justify-center mb-6">
                    <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 p-8 bg-gradient-card rounded-2xl border border-border">
          <h3 className="text-2xl font-semibold mb-4">Ready to get started?</h3>
          <p className="text-muted-foreground mb-6">Join thousands of businesses already using SupportFlow AI</p>
          <button className="btn-hero">
            Install Widget Now
          </button>
        </div>
      </div>
    </section>
  );
};