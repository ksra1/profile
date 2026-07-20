
import { Calendar, Award, TrendingUp } from 'lucide-react';

const stats = [
  {
    icon: <Calendar className="w-5 h-5" />,
    value: "22+",
    label: "Years in AEM, CMS & Digital Leadership"
  },
  {
    icon: <Award className="w-5 h-5" />,
    value: "9+",
    label: "Full-Cycle AEMaaCS Projects Delivered"
  },
  {
    icon: <TrendingUp className="w-5 h-5" />,
    value: "700%",
    label: "YoY eCommerce Growth Driven"
  }
];

const credentials = [
  "Adobe Certified AEM Developer",
  "Fortune 500 & Global Brands",
  "AI Agent Systems (MCP, RAG)",
  "Adobe Rockstar Finalist"
];

const ProfessionalSummary = () => {
  return (
    <section id="summary" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Professional Summary</h2>

          <div className="grid lg:grid-cols-[260px_1fr] gap-8 lg:gap-12 items-start">
            {/* Stats sidebar */}
            <div className="bg-slate-900 rounded-2xl p-8 space-y-8 lg:sticky lg:top-24">
              {stats.map((stat, index) => (
                <div key={index} className={index !== 0 ? "pt-8 border-t border-white/10" : ""}>
                  <div className="flex items-center gap-2 text-blue-400 mb-2">
                    {stat.icon}
                    <span className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      {stat.value}
                    </span>
                  </div>
                  <div className="text-sm text-slate-300 leading-snug">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Narrative */}
            <div>
              <p className="text-xl md:text-2xl font-medium text-gray-900 leading-snug mb-6">
                Engineering leader with 22+ years spanning AEM/CMS platform ownership, headless commerce
                integration, and Adobe Experience Cloud strategy across agency and enterprise environments.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-5">
                Proven track record building and leading engineering and architecture teams — hiring, coaching,
                and performance management — while owning end-to-end content architecture, taxonomies, and
                segmentation for multi-brand, multi-region personalization (Adobe Target, Analytics, AJO, CJA,
                AEP).
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-5">
                Deep hands-on experience integrating AEM with headless commerce platforms including Shopify,
                React/Next.js front ends, and GraphQL/REST APIs, extended most recently to edge delivery, caching,
                and security with Akamai. Actively applies AI to boost engineering and platform productivity —
                building AI agent factories that turn Jira tickets into working frontend, backend, and analytics
                implementations, AI engines that generate AEM Content Fragment models and GraphQL endpoints,
                RAG-based chat experiences, and MCP-based integrations connecting agents to AEM, Adobe, and Akamai
                systems.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Skilled vendor and agency relationship manager with a strong record of SLA/SLO ownership, incident
                response, and translating business goals into scalable technical solutions for Fortune 500 and
                global brands.
              </p>

              <div className="flex flex-wrap gap-3">
                {credentials.map((credential, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 rounded-full border border-gray-200 bg-white text-sm font-medium text-gray-700 shadow-sm"
                  >
                    {credential}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalSummary;
