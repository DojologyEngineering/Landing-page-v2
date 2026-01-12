export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4">
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          We Engineer <br />
          You Scale 🚀
        </h1>
        <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-colors">
          Get Started
        </button>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
        <div className="text-center">
          <div className="text-4xl font-bold mb-2">1</div>
          <div className="text-gray-400 text-sm">Metric</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold mb-2">6</div>
          <div className="text-gray-400 text-sm">Metric</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold mb-2">$.5M</div>
          <div className="text-gray-400 text-sm">Metric</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold mb-2">600k</div>
          <div className="text-gray-400 text-sm">Metric</div>
        </div>
      </div>
    </section>
  );
}
