import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Eye, Camera, Shield, Mail, Clock, BookUser, ImageOff } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Face Recognition Attendance System",
      icon: Camera,
      description: "Real-time attendance tracking system using computer vision and machine learning",
      features: [
        "Real-time Attendance Tracking: Captures attendance in real-time, minimizing manual entry errors",
        "Uses cv2 and face-recognition libraries to capture webcam frames, detect faces, and compare against stored encodings",
        "User-friendly Interface: Simple and intuitive interface for easy interaction",
        "Email Notifications: Automated email notifications for attendance status",
      ],
      technologies: ["Python", "OpenCV", "Face Recognition", "CSV", "Email API"],
      color: "primary",
    },
    {
      title: "Smart Helmet Driving System",
      icon: Shield,
      description: "IoT-based safety system designed to enhance road safety for riders",
      features: [
        "Road Safety Enhancement: Ensures rider safety with smart features like alcohol detection and real-time alerts",
        "Integrated alcohol and motion sensors with microcontroller for real-time data capture and processing",
        "IoT technology to notify emergency contacts during accidents",
        "User-Friendly Interface: Simple and effective design for easy interaction",
        "Real-Time Alerts: Automated alerts to emergency contacts in case of accidents or unsafe conditions",
      ],
      technologies: ["IoT", "Sensors", "Microcontroller", "Real-time Systems"],
      color: "accent",
    },
    {
      title: "Address Book",
      icon: BookUser,
      description: "Command-line address book application with file persistence and advanced sorting",
      features: [
        "Complete CRUD Operations: Create, Read, Update, and Delete contacts with name, phone, and email",
        "Advanced Sorting: Sort contacts by name, phone number, or email address",
        "File Persistence: Automatic saving and loading of contacts from CSV file",
        "Search Functionality: Search contacts by name, phone, or email with partial matching",
        "Data Validation: Input validation for phone numbers and email addresses",
        "Memory Efficient: Optimized data structures for handling up to 100 contacts",
      ],
      technologies: ["C", "File I/O", "CSV", "Data Structures", "Algorithms"],
      color: "primary",
    },
    {
      title: "LSB Steganography",
      icon: ImageOff,
      description: "Secure data hiding system using Least Significant Bit steganography in BMP images",
      features: [
        "LSB Encoding: Hide secret data inside BMP images by modifying least significant bits",
        "Data Extraction: Decode and extract hidden data from steganographic images",
        "File Format Support: Works with BMP image format and text files",
        "Magic String Validation: Verify if image contains hidden data using magic string",
        "Capacity Checking: Ensures image has sufficient capacity before encoding",
        "Dual Mode Operation: Command-line interface for both encoding and decoding operations",
      ],
      technologies: ["C", "Image Processing", "Cryptography", "File I/O", "Bit Manipulation"],
      color: "accent",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Innovative solutions to real-world challenges
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <Card
                key={index}
                className="p-8 hover:shadow-2xl smooth-transition border-border bg-card group"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className={`p-4 bg-${project.color}/10 rounded-xl group-hover:bg-${project.color}/20 smooth-transition`}>
                    <Icon className={`w-8 h-8 text-${project.color}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground">{project.description}</p>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  {project.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex gap-3">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      </div>
                      <p className="text-sm leading-relaxed">{feature}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
