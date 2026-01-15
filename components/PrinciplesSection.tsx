"use client";

import { motion, fadeUp } from "./motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function PrinciplesSection() {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      variants={fadeUp}
      className="py-20 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          The essence of who we are, what drives us, and
          <br />
          the principles that guide everything we do.
        </h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-3 gap-6 mt-12"
        >
          {/* Card 1 */}
          <motion.div
            variants={item}
            whileHover={{ scale: 1.02, y: -5, transition: { duration: 0.2 } }}
            className="bg-gradient-to-br from-purple-900/50 to-purple-950/30 p-6 rounded-2xl border border-purple-500/20"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Who we are?</h3>
                <p className="text-gray-400 text-sm">
                  Description about who we are and our mission
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            variants={item}
            whileHover={{ scale: 1.02, y: -5, transition: { duration: 0.2 } }}
            className="bg-gradient-to-br from-purple-900/50 to-purple-950/30 p-6 rounded-2xl border border-purple-500/20"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
              <div>
                <h3 className="text-xl font-semibold mb-2">What we does?</h3>
                <p className="text-gray-400 text-sm">
                  Description about our services and offerings
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            variants={item}
            whileHover={{ scale: 1.02, y: -5, transition: { duration: 0.2 } }}
            className="bg-gradient-to-br from-purple-900/50 to-purple-950/30 p-6 rounded-2xl border border-purple-500/20"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
              <div>
                <h3 className="text-xl font-semibold mb-2">What we objective?</h3>
                <p className="text-gray-400 text-sm">
                  Description about our goals and objectives
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
