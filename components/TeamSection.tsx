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

export default function TeamSection() {
  const teamMembers = [
    {
      name: "Team Member 1",
      role: "Position",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
      image: "/team/member1.jpg"
    },
    {
      name: "Team Member 2",
      role: "Position",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
      image: "/team/member2.jpg"
    }
  ];

  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      variants={fadeUp}
      className="py-20 px-4 bg-gradient-to-b from-purple-900/20 to-transparent"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Meet the Team behind <span className="text-yellow-400">YOUR SUCCESS</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt
          </p>
        </div>

        {/* Team Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 rounded-2xl overflow-hidden"
        >
          <div className="bg-gradient-to-br from-purple-900/50 to-purple-950/30 p-8 h-64 flex items-center justify-center">
            <p className="text-gray-400">Team Photo Placeholder</p>
          </div>
        </motion.div>

        {/* Team Member Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 gap-8"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              className="bg-gradient-to-br from-purple-900/30 to-transparent p-6 rounded-2xl border border-purple-500/20"
            >
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-purple-500/20 rounded-full flex-shrink-0"></div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-purple-400 text-sm mb-2">{member.role}</p>
                  <p className="text-gray-400 text-sm">{member.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
