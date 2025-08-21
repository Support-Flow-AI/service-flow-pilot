import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    question: "How accurate is the AI in handling customer inquiries?",
    answer: "Our AI achieves 95% accuracy on common support queries through advanced RAG (Retrieval-Augmented Generation) technology. It learns from your knowledge base and improves over time. Complex issues are automatically escalated to human agents."
  },
  {
    question: "How do you ensure data privacy and security?",
    answer: "We use enterprise-grade security with end-to-end encryption, SOC 2 Type II compliance, and GDPR compliance. Your data is stored securely and never used to train models for other customers. We offer on-premise deployment for enterprise clients."
  },
  {
    question: "How long does it take to set up the widget?",
    answer: "Installation takes less than 5 minutes. Simply copy and paste our widget code into your website. The AI can start responding immediately using our pre-trained models, and you can customize responses by uploading your knowledge base."
  },
  {
    question: "When does the AI escalate to human agents?",
    answer: "The AI automatically escalates when it detects complex issues, customer frustration, or requests outside its knowledge base. You can also set custom escalation rules. Human agents receive full conversation context for seamless handoffs."
  },
  {
    question: "Can I customize the widget to match my brand?",
    answer: "Yes! The widget is fully customizable. You can change colors, fonts, messaging, position, and behavior to match your brand perfectly. Pro plans include advanced customization options and white-label solutions."
  },
  {
    question: "What integrations are available?",
    answer: "We integrate with popular tools like Slack, Microsoft Teams, Zendesk, Intercom, Salesforce, and more. Our API allows custom integrations, and we can build specific integrations for enterprise clients."
  },
  {
    question: "Is there a limit on the number of agents?",
    answer: "No, there's no limit on human agents. You pay based on conversation volume, not user seats. This allows your entire team to collaborate on customer support without additional costs."
  },
  {
    question: "Do you offer phone and voice support?",
    answer: "Yes! Our Pro and Business plans include voice support capabilities. Customers can speak directly with our AI or request voice calls with human agents. The AI can handle voice queries in multiple languages."
  }
];

export const FAQSection = () => {
  return (
    <section id="faq" className="section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Got questions? We've got answers. If you can't find what you're looking for, our support team is here to help.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="feature-card border-0">
                <AccordionTrigger className="text-left font-semibold hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pt-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 p-8 bg-gradient-card rounded-2xl border border-border">
          <h3 className="text-2xl font-semibold mb-4">Still have questions?</h3>
          <p className="text-muted-foreground mb-6">
            Our support team is available 24/7 to help you get started
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-hero">
              Contact Support
            </button>
            <Button variant="outline">
              Schedule Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};