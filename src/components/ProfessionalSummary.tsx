
const ProfessionalSummary = () => {
  return (
    <section id="summary" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Professional Summary</h2>
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 transform hover:scale-105 transition-transform duration-300">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              <strong className="text-blue-600">Engineering leader</strong> with 22+ years spanning AEM/CMS platform
              ownership, headless commerce integration, and Adobe Experience Cloud strategy across agency and
              enterprise environments. Proven track record <strong className="text-blue-600">building and leading
              engineering and architecture teams</strong> — hiring, coaching, and performance management — while
              owning end-to-end content architecture, taxonomies, and segmentation for multi-brand, multi-region
              personalization (Adobe Target, Analytics, AJO, CJA, AEP).
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Deep hands-on experience integrating AEM with headless commerce platforms including Shopify,
              React/Next.js front ends, and GraphQL/REST APIs, extended most recently to edge delivery, caching, and
              security (Akamai). Actively applies <strong className="text-blue-600">AI to boost engineering and
              platform productivity</strong>: building AI agent factories that turn Jira tickets into working
              frontend, backend, and analytics implementations, AI engines that generate AEM Content Fragment models,
              GraphQL endpoints, and Edge Delivery Services building blocks from source designs, RAG-based chat and
              search experiences, and MCP-based integrations connecting agents to AEM, Adobe, and Akamai systems.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Skilled vendor and agency relationship manager with a strong record of SLA/SLO ownership, incident
              response, and translating business goals into scalable technical solutions for Fortune 500 and global
              brands.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalSummary;
