import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Background Image */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center pt-20">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/backgrounds/home_page_background.jpg"
            alt="Hero Background"
            fill
            className="object-cover"
            priority
          />
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
        
        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="max-w-2xl">
            {/* Semi-transparent bubble */}
            <div className="bg-background/95 backdrop-blur-md rounded-3xl p-10 shadow-2xl">
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
                Leading PM
              </h1>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Empowering project managers with the skills, knowledge, and leadership 
                capabilities needed to drive successful project outcomes and advance their careers.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <a
                  href="#services"
                  className="rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-colors"
                >
                  Explore Services
                </a>
                <a
                  href="#about"
                  className="text-sm font-semibold leading-6 text-foreground"
                >
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-left">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl ">
              Our Services
            </h2>
            {/* <p className="mt-4 text-lg text-muted-foreground">
              Comprehensive solutions to elevate your project management career
            </p> */}
          </div>
                      <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="bg-background rounded-2xl shadow-lg overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                  <Image
                    src="/images/services/consulting-service.jpg"
                    alt="Consulting Service"
                    width={200}
                    height={200}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-semibold text-foreground mb-3">Project Management Consulting</h3>
                  <p className="text-muted-foreground mb-6">
                    Strategic consulting services to optimize your project management processes 
                    and improve team performance.
                  </p>
                  <Link href="/services/consulting" className="font-medium transition-colors text-blue-600 hover:text-blue-500">
                    Learn More 
                  </Link>
                </div>
              </div>
              <div className="bg-background rounded-2xl shadow-lg overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                  <Image
                    src="/images/services/training-service.jpg"
                    alt="Training Service"
                    width={200}
                    height={200}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-semibold text-foreground mb-3">Training</h3>
                  <p className="text-muted-foreground mb-6">
                    Professional development programs designed to enhance your project 
                    management skills and leadership capabilities.
                  </p>
                  <Link href="/services/training" className="font-medium transition-colors text-blue-600 hover:text-blue-500">
                    Learn More 
                  </Link>
                </div>
              </div>
              <div className="bg-background rounded-2xl shadow-lg overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                  <Image
                    src="/images/services/coaching-service.jpg"
                    alt="Coaching Service"
                    width={200}
                    height={200}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-semibold text-foreground mb-3">Coaching</h3>
                  <p className="text-muted-foreground mb-6">
                    One-on-one coaching and mentorship to accelerate your career growth 
                    and overcome professional challenges.
                  </p>
                  <Link href="/services/coaching" className="font-medium transition-colors text-blue-600 hover:text-blue-500">
                    Learn More 
                  </Link>
                </div>
              </div>
            </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                About LPMI
              </h2>
              <p className="mt-6 text-lg text-muted-foreground">
                The Leading PM Institute is dedicated to advancing the project management 
                profession through education, training, and professional development. 
                We believe that great project managers are made, not born, and we&apos;re 
                committed to providing the resources and support needed to excel in this 
                dynamic field.
              </p>
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">Why Choose LPMI?</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center">
                    <span className="mr-2 text-primary">✓</span>
                    Expert-led training programs
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-primary">✓</span>
                    Industry-recognized certifications
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-primary">✓</span>
                    Personalized coaching and mentorship
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-primary">✓</span>
                    Ongoing professional development support
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-background rounded-2xl p-8 shadow-lg">
              <div className="text-center">
                <div className="h-24 w-24 rounded-2xl bg-primary flex items-center justify-center mx-auto mb-6">
                  <span className="text-primary-foreground font-bold text-2xl">LPMI</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Join Our Community
                </h3>
                <p className="text-muted-foreground mb-8">
                  Connect with fellow project managers and industry experts
                </p>
                <button className="bg-primary text-primary-foreground px-8 py-3 rounded-xl hover:bg-primary/90 transition-colors font-medium">
                  Get Started Today
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
