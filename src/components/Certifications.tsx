import { Card } from "@/components/ui/card";
import { Award } from "lucide-react";

const Certifications = () => {
  const certifications = [
    { name: "Python", provider: "HackerRank" },
    { name: "Nasscom Python Basics", provider: "Accenture" },
    { name: "ZenClass Full Stack Developer", provider: "ZenClass" },
    { name: "Java", provider: "Infosys" },
    { name: "Introduction to RPA and Automation", provider: "UiPath" },
    { name: "Azadi Ka Amrit Mahotsav", provider: "Government Initiative" },
  ];

  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Continuous learning and professional development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-xl smooth-transition border-border bg-card group"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 smooth-transition">
                    <Award className="w-5 h-5 text-accent" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{cert.name}</h3>
                  <p className="text-sm text-muted-foreground">{cert.provider}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
