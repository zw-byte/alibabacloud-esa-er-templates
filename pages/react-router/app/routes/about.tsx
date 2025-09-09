import type { Route } from "./+types/about";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About - ESA Pages" },
    { name: "description", content: "Learn about ESA Pages' mission to make web deployment simple and accessible for everyone." },
  ];
}

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-spacing bg-gradient-to-b from-blue-50 to-white dark:from-blue-950 dark:to-gray-950">
        <div className="container-custom text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 fade-in-up">
            Building the future of
            <br />
            <span className="text-blue-600">web deployment</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto fade-in-up delay-1">
            We believe that deploying web applications should be as simple as pushing code.
            That's why we built ESA Pages - to make deployment accessible to everyone.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                At ESA Pages, we're on a mission to democratize web deployment. We believe that
                every developer, regardless of their experience level, should have access to
                enterprise-grade deployment infrastructure.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                Founded by developers for developers, we understand the pain points of traditional
                deployment processes. That's why we've built a platform that eliminates complexity
                while maintaining the power and flexibility you need.
              </p>
            </div>
            <div className="apple-card">
              <div className="grid grid-cols-2 gap-8 text-center">
                {stats.map((stat, index) => (
                  <div key={index}>
                    <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                      {stat.value}
                    </div>
                    <div className="text-gray-600 dark:text-gray-400 text-sm">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-spacing bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              These principles guide everything we do and every decision we make.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="apple-card text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                  <value.icon />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              We're a diverse team of engineers, designers, and product experts
              united by our passion for great developer experiences.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <div key={index} className="apple-card text-center">
                <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {member.name}
                </h3>
                <p className="text-blue-600 dark:text-blue-400 mb-3 font-medium">
                  {member.role}
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="section-spacing bg-gray-50 dark:bg-gray-900">
        <div className="container-custom text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Join Our Journey
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              We're always looking for talented individuals who share our vision
              of making web deployment better for everyone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="apple-button text-lg px-8 py-4">
                View Open Positions
              </button>
              <button className="apple-button-secondary text-lg px-8 py-4">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

const stats = [
  { value: "10K+", label: "Developers" },
  { value: "1M+", label: "Deployments" },
  { value: "99.95%", label: "Uptime" },
  { value: "150+", label: "Countries" }
];

const values = [
  {
    title: "Developer First",
    description: "Every feature we build is designed with the developer experience in mind. We believe great tools should feel intuitive and powerful.",
    icon: () => (
      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    title: "Reliability",
    description: "Your applications deserve infrastructure you can trust. We maintain 99.95% uptime because your success depends on it.",
    icon: () => (
      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Innovation",
    description: "We're constantly pushing the boundaries of what's possible in web deployment, always looking for ways to make it faster and easier.",
    icon: () => (
      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

const team = [
  {
    name: "Sarah Chen",
    role: "CEO & Co-founder",
    bio: "Former engineering lead at a major cloud provider. Passionate about making complex technology accessible to everyone."
  },
  {
    name: "Marcus Rodriguez",
    role: "CTO & Co-founder",
    bio: "Full-stack engineer with 10+ years experience building scalable web infrastructure and developer tools."
  },
  {
    name: "Emily Johnson",
    role: "Head of Product",
    bio: "Product leader focused on creating delightful user experiences. Previously at top tech companies building developer platforms."
  },
  {
    name: "David Kim",
    role: "Lead Engineer",
    bio: "Infrastructure expert specializing in distributed systems and performance optimization. Open source contributor."
  },
  {
    name: "Lisa Wang",
    role: "Head of Design",
    bio: "Design leader with a focus on creating intuitive interfaces for complex technical products. Apple Design Award winner."
  },
  {
    name: "Alex Thompson",
    role: "DevRel Manager",
    bio: "Developer advocate helping the community build amazing things. Speaker at major tech conferences worldwide."
  }
];
