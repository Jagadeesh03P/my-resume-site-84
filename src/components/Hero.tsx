import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, MapPin, Phone } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-6xl w-full mx-auto text-center space-y-8 py-20">
        <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
            Hi, I'm <span className="gradient-text">Jagadeesh P</span>
          </h1>
          <p className="text-2xl sm:text-3xl text-muted-foreground font-medium">
            Electronics & Communication Engineer
          </p>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Specializing in IoT, Machine Learning & Web Development
          </p>
        </div>

        <div className="flex flex-wrap gap-3 justify-center items-center text-sm text-muted-foreground animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>Coimbatore, India</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <span>+91 9363037560</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
          <Button
            size="lg"
            className="gap-2 bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl smooth-transition"
            onClick={() => window.location.href = 'mailto:jagadeeshsivam313@gmail.com'}
          >
            <Mail className="w-4 h-4" />
            Get in Touch
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="gap-2 hover:border-primary smooth-transition"
            onClick={() => window.open('https://www.linkedin.com/in/jagadeesh-p-76b604255', '_blank')}
          >
            <Linkedin className="w-4 h-4" />
            LinkedIn
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="gap-2 hover:border-primary smooth-transition"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Projects
          </Button>
        </div>

        <div className="pt-12 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
          <div className="inline-block p-6 bg-card rounded-2xl shadow-lg border border-border">
            <p className="text-sm text-muted-foreground mb-3">Summary</p>
            <p className="text-base max-w-3xl leading-relaxed">
              Electronics and Communication Engineering student with expertise in programming and IoT technologies. 
              Experienced in Python, Machine Learning, and web development. Creator of innovative solutions including 
              real-time face recognition systems and smart helmet technology.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
