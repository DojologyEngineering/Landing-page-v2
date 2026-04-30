import React from 'react';

export type BlogPost = {
  slug: string;
  date: string;
  title: string;
  excerpt: string;
  image: string;
  content: React.ReactNode;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "scaling-engineering-teams",
    date: "MARCH 24, 2026",
    title: "Scaling Engineering Teams in the Age of AI",
    excerpt: "How we implemented autonomous agents to accelerate our development cycle by 40%.",
    image: "/image/booth_image.png",
    content: (
      <div className="font-['Manrope',sans-serif] font-normal leading-[0] relative shrink-0 text-[24px] text-white w-full">
        <p className="leading-[normal] mb-0 font-bold">The New Paradigm of Engineering</p>
        <br/>
        <p className="leading-[normal] mb-0">As we navigate the complexities of modern software development, the integration of Artificial Intelligence has shifted from a luxury to a fundamental necessity. At Synthesis, we've spent the last year retooling our internal processes to support AI-augmented workflows.</p>
        <br/>
        <p className="leading-[normal] mb-0">Our findings indicate that the most significant bottleneck in scaling isn't the number of developers, but the cognitive overhead of managing distributed systems. By implementing autonomous agents for routine CI/CD tasks and code reviews, we've unlocked a 40% increase in velocity.</p>
        <br/>
        <p className="leading-[normal] mb-0 mt-8 font-bold">The Role of Autonomous Agents</p>
        <br/>
        <p className="leading-[normal]">These agents aren't just simple scripts; they are context-aware entities that understand our specific architectural patterns. They handle everything from automated documentation updates to identifying potential race conditions before they hit staging.</p>
      </div>
    )
  },
  {
    slug: "navigating-ethical-ai",
    date: "APRIL 12, 2026",
    title: "Navigating Ethical AI in Product Design",
    excerpt: "Exploring frameworks to ensure responsible and inclusive AI-driven user experiences.",
    image: "/image/booth_image.png",
    content: (
      <div className="font-['Manrope',sans-serif] font-normal leading-[0] relative shrink-0 text-[24px] text-white w-full">
        <p className="leading-[normal]">Content coming soon...</p>
      </div>
    )
  },
];
