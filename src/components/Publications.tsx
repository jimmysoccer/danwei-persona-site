
const Publications = () => {
  const publications = [
    {
      title: "WorldMedQA-V: Multilingual, multimodal medical dataset",
      conference: "NAACL 2025",
      description: "A comprehensive dataset covering 12 languages and multiple modalities for medical question answering."
    },
    {
      title: "Interpretable prediction of adverse drug events using LLM-based approaches",
      conference: "Nature Medicine, 2024",
      description: "Novel methods for explainable AI in predicting medication side effects."
    },
    {
      title: "Social determinants of health in electronic health records: Analysis using foundation models",
      conference: "NPJ Digital Medicine, 2024",
      description: "Using large language models to extract and analyze social determinants of health from unstructured EHR data."
    },
    {
      title: "Safety considerations for healthcare LLMs: A systematic review",
      conference: "EMNLP 2024",
      description: "Comprehensive analysis of safety risks in healthcare-specific language models."
    }
  ];

  return (
    <section id="publications" className="py-12">
      <div className="container max-w-2xl mx-auto px-4 md:px-6">
        <h2 className="text-2xl font-bold mb-6">Selected Publications</h2>
        <ul className="space-y-6">
          {publications.map((pub, index) => (
            <li key={index} className="list-disc ml-6">
              <p className="mb-1">
                <span className="font-bold">{pub.title}.</span> {pub.conference}
              </p>
              <p className="text-gray-700 text-sm">{pub.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Publications;
