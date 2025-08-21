import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Head of Customer Success",
    company: "TechFlow Inc.",
    content: "SupportFlow AI reduced our response time by 70% and our customers love the instant support. The AI is incredibly accurate and the human handoff is seamless.",
    rating: 5,
    avatar: "SC"
  },
  {
    name: "Marcus Rodriguez",
    role: "Support Manager",
    company: "EcomPlus",
    content: "We handle 3x more support tickets with the same team size. The widget integration was incredibly easy and our CSAT scores have never been higher.",
    rating: 5,
    avatar: "MR"
  },
  {
    name: "Emily Watson",
    role: "Founder",
    company: "StartupLab",
    content: "As a small team, we couldn't afford 24/7 support staff. SupportFlow AI gives us enterprise-level support capabilities at a fraction of the cost.",
    rating: 5,
    avatar: "EW"
  }
];

export const TestimonialsSection = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold">
            What Our <span className="gradient-text">Customers Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. See what businesses are saying about their experience with SupportFlow AI.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="feature-card relative">
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-20">
                <Quote className="w-8 h-8 text-primary" />
              </div>

              {/* Rating */}
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-muted-foreground mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-gradient-hero flex items-center justify-center text-white font-semibold">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role} at {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Success Metrics */}
        <div className="mt-16 p-8 bg-gradient-card rounded-2xl border border-border">
          <div className="text-center space-y-6">
            <h3 className="text-2xl font-semibold">Proven Results</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="text-3xl font-bold gradient-text mb-2">70%</div>
                <div className="text-sm text-muted-foreground">Faster Response Time</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text mb-2">95%</div>
                <div className="text-sm text-muted-foreground">Customer Satisfaction</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text mb-2">60%</div>
                <div className="text-sm text-muted-foreground">Cost Reduction</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Availability</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};