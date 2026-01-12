export default function PrinciplesSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          The essence of who we are, what drives us, and
          <br />
          the principles that guide everything we do.
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {/* Card 1 */}
          <div className="bg-gradient-to-br from-purple-900/50 to-purple-950/30 p-6 rounded-2xl border border-purple-500/20">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Who we are?</h3>
                <p className="text-gray-400 text-sm">
                  Description about who we are and our mission
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-gradient-to-br from-purple-900/50 to-purple-950/30 p-6 rounded-2xl border border-purple-500/20">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
              <div>
                <h3 className="text-xl font-semibold mb-2">What we does?</h3>
                <p className="text-gray-400 text-sm">
                  Description about our services and offerings
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-gradient-to-br from-purple-900/50 to-purple-950/30 p-6 rounded-2xl border border-purple-500/20">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
              <div>
                <h3 className="text-xl font-semibold mb-2">What we objective?</h3>
                <p className="text-gray-400 text-sm">
                  Description about our goals and objectives
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
