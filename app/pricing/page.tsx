import { Metadata } from "next";

export const metadata: Metadata = {
  title: "OSINT101 Pricing",
  description: "Explore our flexible pricing plans designed to meet your OSINT needs. Choose the tier that best suits your budget and feature requirements.",
};

// Define pricing data directly in the component for simplicity
const pricingData = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Limited access to core OSINT tools",
      "Basic search capabilities",
      "Community support",
      "1 Project limit",
    ],
    cta: "Get Started for Free",
    highlight: false,
  },
  {
    title: "Pro",
    price: "$29",
    features: [
      "Full access to all OSINT tools",
      "Advanced search filters",
      "Priority email support",
      "Unlimited projects",
      "Data export options",
    ],
    cta: "Start Your Free Trial",
    highlight: true,
  },
  {
    title: "Enterprise",
    price: "Contact Us",
    features: [
      "All Pro features",
      "Dedicated account manager",
      "Custom integrations",
      "Advanced analytics",
      "On-demand training",
    ],
    cta: "Request a Demo",
    highlight: false,
  },
];

export default function PricingPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-8">Flexible Pricing for Every Need</h1>
      <p className="text-lg text-center text-gray-600 mb-12 max-w-3xl mx-auto">
        Choose the OSINT101 plan that empowers your investigations. From individual researchers to enterprise teams, we have a solution for you.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {pricingData.map((plan) => (
          <div
            key={plan.title}
            className={`p-8 rounded-lg shadow-lg flex flex-col justify-between ${plan.highlight ? 'border-2 border-blue-500 scale-105' : 'border border-gray-200'}`}
          >
            <div>
              <h2 className="text-3xl font-bold mb-4 text-center">{plan.title}</h2>
              <div className="text-5xl font-bold text-center mb-6">{plan.price}</div>
              <ul className="space-y-3 mb-8 text-gray-700">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <svg
                      className="w-5 h-5 text-green-500 mr-3 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <button
              className={`mt-auto w-full py-3 px-6 rounded-md font-semibold transition duration-300 ${plan.highlight ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-gray-200 hover:bg-gray-300 text-gray-800'}`}
            >
              {plan.cta}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
