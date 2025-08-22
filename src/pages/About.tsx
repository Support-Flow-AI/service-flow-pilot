import { Navigation } from "@/components/ui/navigation";
import { FooterSection } from "@/components/sections/FooterSection";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20">
        <div className="container-custom py-20">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              About SupportFlow AI
            </h1>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-xl mb-8 text-foreground">
                We're revolutionizing customer support with AI-powered solutions that combine the efficiency of automation with the empathy of human touch.
              </p>
              
              <h2 className="text-2xl font-semibold text-foreground mb-4">Our Mission</h2>
              <p className="mb-6">
                To empower businesses of all sizes with intelligent customer support tools that reduce response times, 
                increase customer satisfaction, and scale effortlessly with your growth.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mb-4">Our Story</h2>
              <p className="mb-6">
                Founded by a team of AI researchers and customer experience experts, SupportFlow AI was born from the 
                frustration of managing overwhelming support tickets while maintaining personalized customer relationships. 
                We believe that technology should enhance human connection, not replace it.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mb-4">Why Choose Us</h2>
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="p-6 bg-card border border-border rounded-lg">
                  <h3 className="text-lg font-semibold mb-3 text-foreground">AI-First Approach</h3>
                  <p>Our RAG-powered AI learns from your knowledge base to provide contextual, accurate responses.</p>
                </div>
                <div className="p-6 bg-card border border-border rounded-lg">
                  <h3 className="text-lg font-semibold mb-3 text-foreground">Human Oversight</h3>
                  <p>Seamless escalation to human agents when empathy and complex problem-solving are needed.</p>
                </div>
                <div className="p-6 bg-card border border-border rounded-lg">
                  <h3 className="text-lg font-semibold mb-3 text-foreground">Easy Integration</h3>
                  <p>Deploy our widget on any website in minutes with our simple embeddable solution.</p>
                </div>
                <div className="p-6 bg-card border border-border rounded-lg">
                  <h3 className="text-lg font-semibold mb-3 text-foreground">Scalable Architecture</h3>
                  <p>Multi-tenant platform that grows with your business, from startup to enterprise.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <FooterSection />
    </div>
  );
};

export default About;