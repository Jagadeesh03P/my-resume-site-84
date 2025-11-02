import { Card } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "IOT (Internet of Things)",
      company: "Emglitz Technologies",
      location: "Coimbatore",
      date: "Jan 2023",
      type: "Internship",
    },
    {
      title: "Python with Machine Learning",
      company: "Emglitz Technologies",
      location: "Coimbatore",
      date: "Jun 2023",
      type: "Internship",
    },
    {
      title: "Web Development",
      company: "Accent Techno Soft",
      location: "Coimbatore",
      date: "Jan 2023",
      type: "Internship",
    },
    {
      title: "Industrial Visit",
      company: "Schaeffler India Limited",
      location: "Hosur",
      date: "Jan 2025",
      type: "Industrial Visit",
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Internships and industry exposure
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-xl smooth-transition border-border bg-card group"
            >
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 smooth-transition">
                    <Briefcase className="w-6 h-6 text-accent" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                    <h3 className="text-lg font-semibold">{exp.title}</h3>
                    <span className="text-xs px-2 py-1 bg-accent/10 text-accent rounded-full">
                      {exp.type}
                    </span>
                  </div>
                  <p className="text-foreground font-medium mb-1">{exp.company}</p>
                  <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                    <span>{exp.location}</span>
                    <span>•</span>
                    <span>{exp.date}</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
