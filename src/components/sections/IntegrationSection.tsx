import { Shield, Zap, Code, Globe } from "lucide-react";

const integrations = [
  {
    icon: Code,
    title: "Easy Integration",
    description: "Install our widget with a single line of code. Works with any website, CMS, or platform."
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "SOC 2 Type II compliant with end-to-end encryption and enterprise-grade security features."
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Sub-second response times with globally distributed infrastructure and smart caching."
  },
  {
    icon: Globe,
    title: "Global Scale",
    description: "Multi-language support with automatic translation and cultural context awareness."
  }
];

const integrationLogos = [
  "Slack", "Microsoft Teams", "Zendesk", "Intercom", "Salesforce", "HubSpot",
  "Shopify", "WordPress", "Webflow", "React", "Vue", "Angular"
];

export const IntegrationSection = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold">
            <span className="gradient-text">Seamless Integration</span> & Security
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Built for developers, trusted by enterprises. Deploy in minutes with confidence in our security and reliability.
          </p>
        </div>

        {/* Integration Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {integrations.map((integration, index) => {
            const IconComponent = integration.icon;
            return (
              <div key={index} className="text-center space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-hero mx-auto flex items-center justify-center">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold">{integration.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {integration.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Integration Code Example */}
        <div className="feature-card mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold mb-4">Install in seconds</h3>
            <p className="text-muted-foreground">Copy and paste this code snippet into your website</p>
          </div>
          
          <div className="bg-muted rounded-lg p-6 overflow-x-auto">
            <pre className="text-sm">
              <code className="text-muted-foreground">
{`<!-- Add this to your website's HTML -->
<script>
  (function() {
    var script = document.createElement('script');
    script.src = 'https://widget.supportflow.ai/embed.js';
    script.setAttribute('data-widget-id', 'your-widget-id');
    document.head.appendChild(script);
  })();
</script>`}
              </code>
            </pre>
          </div>
        </div>

        {/* Integration Logos */}
        <div className="text-center space-y-8">
          <h3 className="text-xl font-semibold text-muted-foreground">
            Integrates with your favorite tools
          </h3>
          
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center">
            {integrationLogos.map((logo, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-lg bg-muted border border-border flex items-center justify-center mx-auto mb-2">
                  <span className="text-xs font-medium text-muted-foreground">{logo}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Security Badges */}
        <div className="mt-16 p-8 bg-gradient-card rounded-2xl border border-border">
          <div className="text-center space-y-6">
            <h3 className="text-2xl font-semibold">Enterprise-Grade Security</h3>
            <div className="flex flex-wrap justify-center items-center gap-8">
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">SOC 2 Type II</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">GDPR Compliant</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">ISO 27001</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">HIPAA Ready</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};