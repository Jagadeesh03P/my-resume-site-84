import { Card } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "BE Electronics and Communication Engineering",
      institution: "Hindusthan Institute of Technology",
      location: "Coimbatore",
      period: "2021 – 2025",
      score: "CGPA: 6.66",
    },
    {
      degree: "12th Standard",
      institution: "Senthil Metric Higher Secondary School",
      location: "Dharmapuri",
      period: "2019 – 2021",
      score: "Percentage: 65.86%",
    },
    {
      degree: "10th Standard",
      institution: "Vijay Vidyalaya Metric Higher Secondary School",
      location: "Dharmapuri",
      period: "2018 – 2019",
      score: "Percentage: 51.8%",
    },
  ];

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="gradient-text">Education</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            My academic journey
          </p>
        </div>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-xl smooth-transition border-border bg-card group"
            >
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 smooth-transition">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                    <h3 className="text-xl font-semibold">{edu.degree}</h3>
                    <span className="text-sm text-muted-foreground">{edu.period}</span>
                  </div>
                  <p className="text-foreground font-medium mb-1">{edu.institution}</p>
                  <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                    <span>{edu.location}</span>
                    <span>•</span>
                    <span className="font-medium text-primary">{edu.score}</span>
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

export default Education;
