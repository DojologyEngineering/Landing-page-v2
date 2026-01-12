export default function TechnologiesSection() {
  const features = [
    {
      icon: "🤖",
      title: "AI Development",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor"
    },
    {
      icon: "🔗",
      title: "Blockchain Solutions",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor"
    },
    {
      icon: "☁️",
      title: "Cloud Infrastructure",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor"
    },
    {
      icon: "🔒",
      title: "Cybersecurity",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Transform your business with
            <br />
            <span className="text-blue-500">Advanced Technologies</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-900 to-gray-950 p-8 rounded-2xl border border-gray-800 hover:border-blue-500/50 transition-colors"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
