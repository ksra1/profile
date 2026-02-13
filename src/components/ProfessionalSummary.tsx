
const ProfessionalSummary = () => {
  return (
    <section id="summary" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Professional Summary</h2>
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 transform hover:scale-105 transition-transform duration-300">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              <strong className="text-blue-600">Strategic Engineering Leader</strong> with over 20 years of experience 
              driving enterprise-scale digital transformation and managing global development teams. Expert in leading 
              high-value technical initiatives, defining digital strategies, and delivering scalable solutions across 
              the <strong className="text-blue-600">Adobe Experience Cloud ecosystem</strong> (AEM, Edge Delivery Services, GenStudio) 
              and <strong className="text-blue-600">cutting-edge AI technologies</strong> (MCP, Agentic Workflows, and Generative AI).
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Proven success in managing cross-functional teams of 15+ engineers, fostering executive client relationships, 
              and achieving exceptional project delivery metrics. Track record of driving 700% YOY growth through strategic 
              technology implementations while managing $20M+ project budgets and delivering measurable business impact.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Adept at aligning technical solutions with business objectives to maximize client value realization, 
              combining deep technical expertise with strong leadership capabilities to deliver innovative digital 
              experiences and optimize operational efficiency across global enterprises.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalSummary;
