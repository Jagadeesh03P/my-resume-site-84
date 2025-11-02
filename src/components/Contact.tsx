import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Linkedin, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Let's connect and discuss opportunities
          </p>
        </div>

        <Card className="p-8 md:p-12 bg-card border-border shadow-xl">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-muted-foreground hover:text-foreground smooth-transition">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <a href="mailto:jagadeeshsivam313@gmail.com" className="hover:underline">
                      jagadeeshsivam313@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <span>+91 9363037560</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <span>Coimbatore, India</span>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <Button
                  size="lg"
                  className="w-full gap-2 bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl smooth-transition"
                  onClick={() => window.open('https://www.linkedin.com/in/jagadeesh-p-76b604255', '_blank')}
                >
                  <Linkedin className="w-4 h-4" />
                  Connect on LinkedIn
                </Button>
              </div>
            </div>

            <div className="bg-muted/50 rounded-xl p-6 flex flex-col justify-center">
              <h4 className="text-xl font-semibold mb-4">Open to Opportunities</h4>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                I'm actively seeking opportunities in Electronics Engineering, IoT Development, 
                Machine Learning, and Web Development. Let's collaborate on innovative projects!
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">IoT</span>
                <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Machine Learning</span>
                <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Web Dev</span>
                <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Python</span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
