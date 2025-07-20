import ProjectCard from "@/components/ProjectCard";
import Image from "next/image";

export default function About() {
  const featuredProjects = [
    {
      title: "Lions Gate Hospital",
      year: "2023",
      description: "IT Technical Project Management for the new Acute Care Facility (ACF) redevelopment project at Lions Gate Hospital.",
      tags: ["Healthcare IT", "Infrastructure", "Technical PM"],
      imageSrc: "/images/past-work/lions-gate-hospital.jpg",
      imageAlt: "Lions Gate Hospital",
      logoSrc: "/images/logos/lionsgate.webp"
    },
    {
      title: "Vancity Contact Centre",
      year: "2022",
      description: "Program Management for Vancity's Member Experience Contact Centre program with Genesys SAAS cloud-based call centre solution and API integrations.",
      tags: ["Program Management", "Genesys", "API Integration"],
      imageSrc: "/images/past-work/vancity-contact-centre.jpg",
      imageAlt: "Vancity Contact Centre",
      logoSrc: "/images/logos/Logo-vancity.png"
    },
    {
      title: "BC Hydro Cybersecurity",
      year: "2022",
      description: "Project management for BC Hydro Cybersecurity portfolio including Next Generation cybersecurity firewall and datacentre network security projects.",
      tags: ["Cybersecurity", "Firewall", "Datacentre"],
      imageSrc: "/images/past-work/bc-hydro-cybersecurity.jpg",
      imageAlt: "BC Hydro Cybersecurity",
      logoSrc: "/images/logos/bc_hydro.png"
    }
  ];

  const teamMembers = [
    {
      name: "Donald Balanecki",
      title: "CEO/President/Management Consultant",
      description: "Leading strategic initiatives and providing executive-level project management consulting."
    },
    {
      name: "Josh Bradley",
      title: "IT Director/IT Solution Delivery Lead",
      description: "Overseeing IT infrastructure projects and solution delivery across complex technical environments."
    },
    {
      name: "Amit Kurana",
      title: "PMO Director/Project Management Delivery Lead",
      description: "Managing project portfolio delivery and establishing PMO best practices and methodologies."
    },
    {
      name: "Donna Balanecki",
      title: "Operations Director/RN/Health Care Clinical SME",
      description: "Providing healthcare expertise and clinical operations management for healthcare IT projects."
    },
    {
      name: "Eric Balanecki",
      title: "IT Specialist/MS Team Voice Engineer",
      description: "Specializing in Microsoft Teams voice solutions and technical implementation support."
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero/Intro Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl mb-6">
            About LPMI
          </h1>
          <p className="text-lg leading-8 text-muted-foreground max-w-3xl mx-auto">
            The Leading PM Institute (LPMI) is a project management consulting and professional development firm dedicated to empowering organizations and individuals to achieve project excellence. With a proven track record across diverse industries, we deliver tailored solutions, expert guidance, and transformative results for our clients.
          </p>
        </div>
      </section>

      {/* Values & Approach Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground mb-6">
              Our Approach
            </h2>
            <ul className="space-y-4 text-lg text-muted-foreground">
              <li><span className="text-primary font-semibold mr-2">•</span>Client-Centric: We listen, understand, and adapt to your unique needs and goals.</li>
              <li><span className="text-primary font-semibold mr-2">•</span>Expertise-Driven: Our consultants bring deep industry knowledge and hands-on experience.</li>
              <li><span className="text-primary font-semibold mr-2">•</span>Results-Focused: We deliver measurable value, sustainable improvements, and project success.</li>
              <li><span className="text-primary font-semibold mr-2">•</span>Collaborative: We work as an extension of your team, fostering trust and transparency.</li>
            </ul>
          </div>
          <div className="flex justify-center">
            <Image
              src="/images/about/approach-team.jpg"
              alt="LPMI Team at work"
              width={400}
              height={300}
              className="rounded-2xl shadow-lg object-cover w-full h-64"
            />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
              Our Leadership Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Meet the experienced professionals who drive our success and deliver exceptional results for our clients.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="text-center">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium text-sm mb-3">
                    {member.title}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-left mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Selected Past Projects
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
              Our experience spans healthcare, finance, utilities, and more. Here are a few examples of how we&apos;ve helped clients achieve their project goals:
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                year={project.year}
                description={project.description}
                tags={project.tags}
                imageSrc={project.imageSrc}
                imageAlt={project.imageAlt}
                logoSrc={project.logoSrc}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 