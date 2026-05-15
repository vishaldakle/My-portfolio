/**
 * SINGLE SOURCE OF TRUTH
 * Edit this file to update any content on the website.
 */

export const personalInfo = {
  name: "Vishal Patil",
  title: "Full-Stack Engineer",
  location: "Pune, India",
  email: "vishal025d@gmail.com",
  profileImage: "/profile.jpg", // This points to a file you will upload
  bio: "Java Full Stack Developer with expert knowledge of Core Java, OOPs, Collections, and modern web frameworks. I specialize in building scalable, real-time applications using Spring Boot, React, and Node.js. Passionate about solving complex problems and enhancing technical skills in professional development environments.",
  socials: {
    github: "https://github.com/vishaldakle",
    linkedin: "https://www.linkedin.com/in/vishaldakle/",
    twitter: "#", // Add if available
  }
};

export const skills = [
  {
    category: "Frontend",
    items: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"]
  },
  {
    category: "Backend",
    items: ["Java", "Spring Boot", "Spring Data JPA", "Hibernate", "Node.js", "Express.js", "Python"]
  },
  {
    category: "Database",
    items: ["MySQL", "PostgreSQL", "MongoDB", "JDBC"]
  },
  {
    category: "Tools & DevOps",
    items: ["Git", "GitHub", "Docker", "AWS", "Maven", "Postman", "VS Code", "Eclipse"]
  },
  {
    category: "Soft Skills",
    items: ["Leadership", "Mentoring", "Agile Methodology", "Debugging", "Problem Solving"]
  }
];

export const projects = [
  {
    title: "AI-Powered Smart Parking System",
    description: "A full-stack parking management platform with real-time slot tracking and reservation capabilities. Built to reduce urban congestion through efficient slot management.",
    image: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?q=80&w=1000&auto=format&fit=crop",
    tech: ["React.js", "Node.js", "MongoDB", "Socket.io", "Google Maps API"],
    features: [
      "Real-time slot availability using Socket.io",
      "Integrated Razorpay for seamless bookings",
      "OTP-based authentication for security"
    ],
    links: {
      demo: "#",
      github: "#"
    }
  },
  {
    title: "Freelancer Marketplace Platform",
    description: "A professional multi-user collaboration platform where clients post projects and developers apply. Features role-based access and real-time communication.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop",
    tech: ["React.js", "Redux Toolkit", "Node.js", "Express.js", "MongoDB", "Socket.io"],
    features: [
      "Role-based authentication (Client/Freelancer)",
      "Real-time project chat system",
      "Milestone tracking and progress uploads"
    ],
    links: {
      demo: "#",
      github: "#"
    }
  },
  {
    title: "Banking Transaction System",
    description: "A secure Java-based banking application focusing on layered architecture and consistent transaction handling. Features robust error recovery and verification.",
    image: "https://images.unsplash.com/photo-1550565118-3a14e8d0386f?q=80&w=1000&auto=format&fit=crop",
    tech: ["Java", "Spring Boot", "MySQL", "Spring Data JPA", "JWT"],
    features: [
      "OTP-verified money transfers",
      "Transaction rollback functionality for data consistency",
      "Comprehensive transaction history and account management"
    ],
    links: {
      demo: "#",
      github: "#"
    }
  }
];

export const education = [
  {
    institution: "K. D. K College of Engineering, Nagpur",
    degree: "Bachelor of Technology in Computer Science Engineering",
    duration: "Dec 2021 - June 2025",
    result: "CGPA: 8.5",
    status: "Current"
  },
  {
    institution: "Rajashri Shahu Maharaj Higher Secondary School",
    degree: "Senior Secondary (Class XII)",
    duration: "Aug 2019 - Aug 2021",
    result: "Percentage: 86.8%"
  },
  {
    institution: "Modern New High School",
    degree: "Secondary (Class X)",
    duration: "March 2018",
    result: "Percentage: 83.4%"
  }
];
