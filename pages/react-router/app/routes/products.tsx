import type { Route } from "./+types/products";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Products - ESA Pages" },
    { name: "description", content: "Discover our powerful deployment platform features and pricing plans." },
  ];
}

export default function Products() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-spacing bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
        <div className="container-custom text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 fade-in-up">
            Powerful deployment
            <br />
            <span className="text-blue-600">made simple</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto fade-in-up delay-1">
            Everything you need to deploy, manage, and scale your web applications
            with enterprise-grade performance and security.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            {productFeatures.map((feature, index) => (
              <div key={index} className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="apple-card">
                  <div className="mb-6">
                    <feature.icon />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  <ul className="space-y-3">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-gray-700 dark:text-gray-300">
                        <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section-spacing bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Choose your plan
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Start free, scale as you grow
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`apple-card text-center relative ${plan.popular ? 'ring-2 ring-blue-500 scale-105' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {plan.name}
                </h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900 dark:text-white">
                    ${plan.price}
                  </span>
                  <span className="text-gray-600 dark:text-gray-400">/month</span>
                </div>
                <ul className="space-y-3 mb-8 text-left">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 px-6 rounded-full font-medium transition-all duration-200 ${
                  plan.popular 
                    ? 'bg-blue-600 text-white hover:bg-blue-700 hover:scale-105' 
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700'
                }`}>
                  {plan.buttonText}
                </button>
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
              Ready to deploy faster?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              Join over 10,000 developers who have deployed millions of projects with ESA Pages.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="apple-button text-lg px-8 py-4">
                Start Free Trial
              </button>
              <button className="apple-button-secondary text-lg px-8 py-4">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

const productFeatures = [
  {
    title: "Instant Deployments",
    description: "Deploy your projects in seconds, not minutes. Our intelligent build system automatically optimizes your code for maximum performance.",
    icon: () => (
      <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-2xl flex items-center justify-center">
        <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      </div>
    ),
    benefits: [
      "Zero-config deployment",
      "Automatic SSL certificates",
      "Global edge caching",
      "Instant rollbacks"
    ]
  },
  {
    title: "Git Integration",
    description: "Seamlessly connect with your favorite Git providers. Every push triggers a new deployment automatically with our advanced CI/CD pipeline.",
    icon: () => (
      <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-2xl flex items-center justify-center">
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      </div>
    ),
    benefits: [
      "GitHub, GitLab & Bitbucket",
      "Branch deployments",
      "Pull request previews",
      "Commit status checks"
    ]
  },
  {
    title: "Global Scale",
    description: "Your applications are deployed to our global edge network, ensuring lightning-fast load times for users anywhere in the world.",
    icon: () => (
      <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-2xl flex items-center justify-center">
        <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
    ),
    benefits: [
      "3000+ global edge locations",
      "99.95% uptime SLA",
      "Auto-scaling infrastructure",
      "DDoS protection"
    ]
  },
  {
    title: "Advanced Analytics",
    description: "Get deep insights into your application's performance, user behavior, and deployment metrics with our comprehensive analytics dashboard.",
    icon: () => (
      <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900 rounded-2xl flex items-center justify-center">
        <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      </div>
    ),
    benefits: [
      "Real-time performance metrics",
      "User analytics",
      "Error monitoring",
      "Custom dashboards"
    ]
  }
];

const pricingPlans = [
  {
    name: "Starter",
    price: 0,
    popular: false,
    buttonText: "Get Started Free",
    features: [
      "3 projects",
      "100GB bandwidth",
      "Community support",
      "Basic analytics",
      "SSL certificates"
    ]
  },
  {
    name: "Pro",
    price: 19,
    popular: true,
    buttonText: "Start Pro Trial",
    features: [
      "Unlimited projects",
      "1TB bandwidth",
      "Priority support",
      "Advanced analytics",
      "Custom domains",
      "Team collaboration",
      "Branch deployments"
    ]
  },
  {
    name: "Enterprise",
    price: 99,
    popular: false,
    buttonText: "Contact Sales",
    features: [
      "Everything in Pro",
      "Unlimited bandwidth",
      "24/7 phone support",
      "SLA guarantee",
      "Custom integrations",
      "Advanced security",
      "Dedicated support"
    ]
  }
];
