"use client";

import { useState } from "react";
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
  const [activeTab, setActiveTab] = useState<"founders" | "dojo">("founders");

  const founders = [
    {
      name: "Lymeng PEN",
      role: "Founder & CEO",
      description:
        "Visionary leader with 10+ years in technology innovation and strategic growth",
      linkedIn: "https://www.linkedin.com/in/penlymeng/",
      image: "/image/ceo-image.png",
    },
    {
      name: "Dalen SIENG",
      role: "Co-founder & CFO",
      description:
        "Financial and operational expert driving efficiency and scaling excellence across the organization",
      linkedIn: "https://www.linkedin.com/in/dalen-sieng-930769131/",
      image: "/image/cfo-image.png",
    },
    {
      name: "Pak Maneth",
      role: "Co-Founder & CTO",
      description:
        "Great products come from systems that stay reliable when the pressure rises.",
      linkedIn: "https://www.linkedin.com/in/maneth-pak/",
      image: "/image/Pak_Maneth.png",
    },
  ];

  const dojoPlaceholders = [
    {
      id: "dojo-1",
      name: "Thai Sodalin",
      role: "IT Business Analyst",
      image: "/image/thai_darlin.png",
    },
    {
      id: "dojo-2",
      name: "Dout Sophanha",
      role: "UX/UI Designer",
      image: "/image/dout_sophanha.png",
    },
    {
      id: "dojo-3",
      name: "Ly Rassa",
      role: "UX/UI Designer",
      image: "/image/Ly_Rassa.png",
    },
    {
      id: "dojo-4",
      name: "Kumari Laxmi Sharma",
      role: "Project Manager",
      image: "/image/Kumari-Laxmi-Sharma.png",
    },
    {
      id: "dojo-6",
      name: "Chandy Neath",
      role: "Mobile Developer",
      image: "/image/Chandy_Neath.png",
    },
    {
      id: "dojo-7",
      name: "Bin Sodina",
      role: "Mobile Developer",
      image: "/image/Bin_Sodina.png",
    },
    {
      id: "dojo-9",
      name: "Ry Satya",
      role: "Backend Developer",
      image: "/image/Ry_Satya.png",
    },
    {
      id: "dojo-10",
      name: "Dul Kimhak",
      role: "Fullstack Developer",
      image: "/image/dul_kimhak.png",
    },
    {
      id: "dojo-11",
      name: "Nhek Chanpanha",
      role: "Fullstack Developer",
      image: "/image/Nhek_Chanpanha.png",
    },
  ];

  return (
    <motion.section
      id="team"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      variants={fadeUp}
      className="bg-[#2F1893] px-4 py-24 md:px-10 lg:px-[194px] lg:py-[100px]"
    >
      <div className="mx-auto flex w-full max-w-[1052px] flex-col gap-16 text-white lg:gap-[100px]">
        <div className="flex flex-col gap-5 md:gap-[30px]">
          <h2 className="font-[family-name:var(--font-manrope)] font-bold leading-none tracking-[-0.4px] text-white">
            <span className="text-[34px] leading-[1.22] md:text-[42px] md:leading-[52px]">
              Meet the Team Behind
            </span>
            <span className="ml-2 text-[40px] leading-[1.05] text-[#34CB4D] md:text-[64px] md:leading-[52px]">
              Your Success
            </span>
          </h2>
          <p className="max-w-[1052px] font-[family-name:var(--font-manrope)] text-base font-medium text-white/90 md:text-[22px] md:leading-[32px]">
            Our team is made up of passionate professionals who bring their
            expertise and creativity to every project.
          </p>
        </div>

        <div className="flex flex-col items-center gap-10 lg:gap-[100px]">
          <div className="w-full">
            <div className="mx-auto w-full max-w-[806px]">
              <img
                src="/image/team-image.png"
                alt="Dojology team"
                className="block h-auto w-full object-contain"
              />
            </div>

            <div className="mt-0 w-screen border-b-2 border-white/10 bg-white/10 relative left-1/2 right-1/2 -mx-[50vw] px-4 sm:px-8 md:px-16 lg:px-[194px]">
              <div className="mx-auto flex w-full max-w-[1052px] items-center justify-center gap-[40px] overflow-x-auto">
                <button
                  onClick={() => setActiveTab("founders")}
                  className={`px-2 py-3 font-[family-name:var(--font-manrope)] text-sm font-semibold whitespace-nowrap md:text-base ${
                    activeTab === "founders"
                      ? "border-b-2 border-[#34CB4D] text-[#34CB4D]"
                      : "text-white"
                  }`}
                >
                  Founding Team
                </button>
                <button
                  onClick={() => setActiveTab("dojo")}
                  className={`px-2 py-3 font-[family-name:var(--font-manrope)] text-sm font-semibold whitespace-nowrap md:text-base ${
                    activeTab === "dojo"
                      ? "border-b-2 border-[#34CB4D] text-[#34CB4D]"
                      : "text-white"
                  }`}
                >
                  Dojo Team
                </button>
              </div>
            </div>
          </div>

          {activeTab === "founders" ? (
            <motion.div
              key="founders"
              variants={container}
              initial="hidden"
              animate="show"
              className="grid w-full grid-cols-3 items-start gap-2 sm:gap-3 md:min-h-[384px] md:gap-8 lg:gap-12"
            >
              {founders.map((member) => (
                <motion.div
                  key={member.name}
                  variants={item}
                  className="flex h-full min-h-[260px] flex-col items-center gap-3 px-1 py-3 text-center md:min-h-[360px] md:gap-4 md:px-2 md:py-4"
                >
                  <div className="relative h-16 w-16 overflow-hidden rounded-full bg-[linear-gradient(135deg,#9333EA_0%,#4338CA_70.711%)] ring-1 ring-white/15 sm:h-20 sm:w-20 md:h-32 md:w-32">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="flex min-h-[46px] flex-col items-center justify-start md:min-h-[64px]">
                    <h3 className="font-[family-name:var(--font-manrope)] text-[11px] font-bold leading-[1.2] text-white sm:text-[13px] md:text-[20px] md:leading-7">
                      {member.name}
                    </h3>
                    <p className="font-[family-name:var(--font-manrope)] text-[10px] font-bold leading-[1.2] text-[#34CB4D] sm:text-[11px] md:text-base md:leading-6">
                      {member.role}
                    </p>
                  </div>

                  <p className="min-h-[72px] max-w-[140px] font-[family-name:var(--font-manrope)] text-[9px] leading-[1.35] text-white/90 sm:max-w-[160px] sm:text-[10px] md:min-h-[80px] md:max-w-[420px] md:text-sm md:leading-5">
                    {member.description}
                  </p>

                  <div className="mt-auto flex items-center gap-3">
                    <a
                      href={member.linkedIn}
                      aria-label={`${member.name} LinkedIn`}
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-[11px] font-semibold text-white transition-colors hover:bg-white/30 md:h-10 md:w-10 md:text-sm"
                    >
                      in
                    </a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="dojo"
              variants={container}
              initial="hidden"
              animate="show"
              className="w-full min-h-[384px] pr-1"
            >
              <div className="grid w-full grid-cols-2 gap-4 md:grid-cols-3 md:gap-8 lg:grid-cols-4">
                {dojoPlaceholders.map((member) => (
                  <motion.div
                    key={member.id}
                    variants={item}
                    className="flex flex-col items-center justify-center gap-3 px-1 py-3 text-center md:gap-4 md:px-2 md:py-4"
                  >
                    <div className="relative h-16 w-16 overflow-hidden rounded-full bg-[linear-gradient(135deg,#9333EA_0%,#4338CA_70.711%)] ring-1 ring-white/15 sm:h-20 sm:w-20 md:h-24 md:w-24">
                      {member.image && (
                        <img
                          src={member.image}
                          alt={member.name}
                          className="h-full w-full object-cover"
                        />
                      )}
                    </div>
                    <div>
                      <h3 className="font-[family-name:var(--font-manrope)] text-[13px] font-bold leading-5 text-white sm:text-[15px] md:text-[18px] md:leading-7">
                        {member.name}
                      </h3>
                      <p className="font-[family-name:var(--font-manrope)] text-[11px] text-white/80 sm:text-[12px] md:text-[14px]">
                        {member.role}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </motion.section>
  );
}
