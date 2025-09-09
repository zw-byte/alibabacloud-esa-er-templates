import type { Route } from "./+types/home";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "ESA Pages - Deploy web projects instantly" },
    { name: "description", content: "Deploy your web projects instantly with ESA Pages. Fast, reliable, and seamless deployment platform." },
  ];
}

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient section-spacing">
        <div className="container-custom text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 fade-in-up">
            Deploy web projects
            <br />
            <span className="text-yellow-300">instantly</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90 fade-in-up delay-1">
            ESA Pages makes it easy to deploy and scale your web applications
            with lightning-fast performance and global CDN distribution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center fade-in-up delay-2">
            <Link to="/products" className="apple-button text-lg px-8 py-4">
              Get Started
            </Link>
            <Link to="/about" className="apple-button-secondary bg-transparent border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-4">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-spacing bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Why choose ESA Pages?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Built for developers who demand the best in performance, reliability, and ease of use.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className={`apple-card text-center fade-in-up delay-${index + 1}`}>
                <div className="w-16 h-16 mx-auto mb-6 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                  <feature.icon />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing">
        <div className="container-custom text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Ready to get started?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              Join thousands of developers who trust ESA Pages for their deployment needs.
            </p>
            <Link to="/products" className="apple-button text-lg px-8 py-4">
              Start Deploying
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

const features = [
  {
    title: "Lightning Fast",
    description: "Global CDN ensures your sites load instantly anywhere in the world with 99.95% uptime guarantee.",
    icon: () => (
      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Git Integration",
    description: "Connect your GitHub, GitLab, or Bitbucket repository and deploy automatically on every push.",
    icon: () => (
      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    title: "Scale Globally",
    description: "Built-in scalability means your applications can handle millions of users without missing a beat.",
    icon: () => (
      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];
