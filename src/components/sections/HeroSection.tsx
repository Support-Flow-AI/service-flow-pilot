import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-dashboard.jpg";

export const HeroSection = () => {
  return (
    <section className="section-padding pt-32 bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                <span className="gradient-text">AI-Powered Support</span>
                <br />
                for Faster Customer Service
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Combine AI efficiency with human expertise to deliver seamless customer service at scale. 
                Reduce response times by 70% and boost satisfaction with our embeddable support widget.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-hero group">
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <Button variant="outline" size="lg" className="group">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center space-x-8 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text">70%</div>
                <div className="text-sm text-muted-foreground">Faster Response</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text">50K+</div>
                <div className="text-sm text-muted-foreground">Tickets Handled</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text">99.9%</div>
                <div className="text-sm text-muted-foreground">Uptime</div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative z-10 animate-float">
              <img
                src={heroImage}
                alt="SupportFlow AI Dashboard Interface"
                className="w-full h-auto rounded-2xl shadow-2xl border border-border"
              />
            </div>
            
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-hero opacity-20 blur-3xl rounded-full scale-75"></div>
          </div>
        </div>
      </div>
    </section>
  );
};