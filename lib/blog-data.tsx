import React from 'react';
import CollaborateButton from '../components/CollaborateButton';

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
    slug: "why-we-invest-in-founders",
    date: "MAY 4, 2026",
    title: "Why We Invest in Founders: Our Approach to Tech-for-Equity Partnerships",
    excerpt: "How tech-for-equity partnerships align incentives, accelerate execution, and turn software teams into long-term startup partners.",
    image: "/image/booth_image.png",
    content: (
      <div className="font-['Manrope',sans-serif] font-normal relative shrink-0 text-[15px] md:text-[24px] text-white w-full space-y-6 leading-[1.7]">
        <p className="leading-[normal]">For most startups, the &quot;Valley of Death&quot; is not just about a lack of ideas. It is about a lack of execution. You have a vision that could disrupt an industry, a market that is ready for a solution, and a roadmap that looks perfect on paper. Then you hit the technical wall: hiring a high-quality development team is expensive, and outsourcing to the lowest bidder often results in a product that cannot scale.</p>
        <p className="leading-[normal]">This is why we do things differently. We do not just build software for clients; we invest our expertise in founders through Tech-for-Equity partnerships.</p>

        <h2 className="leading-[1.2] pt-6 text-[20px] md:text-[32px] font-bold">The Shift from Vendor to Partner</h2>
        <p className="leading-[normal]">In a traditional agency model, the relationship is transactional. You pay for a feature, and the agency builds it. If the feature does not help you grow, the agency still gets paid.</p>
        <p className="leading-[normal]">When we take a sweat equity stake in a project, the dynamic shifts instantly. Our success becomes tied to yours. We are not just looking at a checklist of requirements; we are looking at product-market fit, user retention, and long-term scalability. We are not just your developers. We are your technical co-founders.</p>

        <h2 className="leading-[1.2] pt-6 text-[20px] md:text-[32px] font-bold">Why We Choose the Equity Model</h2>
        <p className="leading-[normal]">People often ask why a tech solution company would choose to work for equity instead of cash. The answer is simple: we believe in the power of the founder.</p>
        <ul className="ml-5 md:ml-6 list-disc space-y-3 leading-[normal]">
          <li><span className="font-bold">Aligned incentives:</span> When we own a piece of the future pie, we are incentivized to build the best version of the product, not just the one that is easiest to code. We think about clean architecture and security from day one because we know we will be there to support it on day 1,000.</li>
          <li><span className="font-bold">Speed to market:</span> Founders often waste months chasing venture capital just to pay for development. By partnering with us, you bypass the fundraising hurdle and move straight into the build phase.</li>
          <li><span className="font-bold">Skin in the game:</span> Being all-in allows us to offer strategic guidance that goes beyond code. We help navigate technical debt, choose the right tech stacks, and integrate complex systems like fintech payment gateways or logistics tracking.</li>
        </ul>

        <h2 className="leading-[1.2] pt-6 text-[20px] md:text-[32px] font-bold">What We Look for in a Partnership</h2>
        <p className="leading-[normal]">Because sweat equity requires a significant investment of our time and talent, we are highly selective. We look for three key indicators:</p>
        <ol className="ml-5 md:ml-6 list-decimal space-y-3 leading-[normal]">
          <li><span className="font-bold">Domain expertise:</span> Does the founder deeply understand the problem they are solving? Whether it is agritech, fintech, or a niche marketplace, we look for insider knowledge.</li>
          <li><span className="font-bold">A scalable vision:</span> We invest in products that have the potential to grow beyond a single market. We want to build systems that can handle ten users today and ten million tomorrow.</li>
          <li><span className="font-bold">Relentless grit:</span> Building a startup is hard. We partner with founders who are as committed to the grind as we are to the code.</li>
        </ol>

        <h2 className="leading-[1.2] pt-6 text-[20px] md:text-[32px] font-bold">How the Process Works</h2>
        <p className="leading-[normal]">A Tech-for-Equity deal is not a handshake agreement; it is a professional partnership. We typically structure our engagements with clear milestones:</p>
        <ul className="ml-5 md:ml-6 list-disc space-y-3 leading-[normal]">
          <li><span className="font-bold">The discovery phase:</span> We map out the System Requirement Specifications and user stories to ensure we are building exactly what the market needs.</li>
          <li><span className="font-bold">Vesting schedules:</span> Just like a co-founder, our equity is usually earned over time or based on specific product milestones, such as a successful beta launch or reaching a user threshold.</li>
          <li><span className="font-bold">Ongoing evolution:</span> Even after the initial launch, we stay involved to iterate based on user feedback, ensuring the product stays competitive and secure.</li>
        </ul>

        <h2 className="leading-[1.2] pt-6 text-[20px] md:text-[32px] font-bold">Let&apos;s Build the Future</h2>
        <p className="leading-[normal]">If you are a founder who is tired of the cash-for-code cycle and looking for a partner who believes in your vision as much as you do, let&apos;s talk. We are not just building apps; we are building companies.</p>
        <p className="leading-[normal]">Ready to turn your vision into a scalable product?</p>
        <CollaborateButton className="mt-2 rounded-[8px] bg-[#34CB4D] px-6 py-3 text-[14px] md:text-base font-normal text-[#0A0A0A] transition-colors hover:bg-[#2fb846]">
          Reach out to our team
        </CollaborateButton>
      </div>
    )
  },
  {
    slug: "founder-idea-to-functional-app-in-3-months",
    date: "MAY 4, 2026",
    title: "The Blueprint: How We Turn a Founder's Idea into a Functional App in 3 Months",
    excerpt: "A practical look at our 90-day Discovery, Build, and Launch process for turning startup ideas into web, Android, and iOS products.",
    image: "/image/booth_image.png",
    content: (
      <div className="font-['Manrope',sans-serif] font-normal relative shrink-0 text-[15px] md:text-[24px] text-white w-full space-y-6 leading-[1.7]">
        <p className="leading-[normal]">The biggest mistake most startups make is starting with code. They dive into development before the foundation is set, leading to feature creep and missed deadlines. Our 90-day sprint is divided into three distinct phases: <span className="font-bold">Discovery, Build, and Launch.</span></p>

        <h2 className="leading-[1.2] pt-6 text-[20px] md:text-[32px] font-bold">Month 1: The Architecture of an Idea</h2>
        <p className="leading-[normal]">Before we open a code editor, we focus on the logic of the business. We spend the first few weeks mapping out every user journey and system requirement.</p>
        <ul className="ml-5 md:ml-6 list-disc space-y-3 leading-[normal]">
          <li><span className="font-bold">Requirements mapping:</span> We translate the founder&apos;s vision into a technical document, the SRS. If it is a fintech app, we map the interest logic; if it is an e-commerce platform, we map the logistics flow.</li>
          <li><span className="font-bold">UI/UX design:</span> We create high-fidelity wireframes. This is not just about looking polished; it is about ensuring a user can get from A to B with as few clicks as possible.</li>
          <li><span className="font-bold">The technical roadmap:</span> We decide on the Clean Architecture of the project. This ensures that the app we build today can easily grow when you reach 100,000 users next year.</li>
        </ul>

        <h2 className="leading-[1.2] pt-6 text-[20px] md:text-[32px] font-bold">Month 2: The Power of Flutter for Web and Mobile</h2>
        <p className="leading-[normal]">This is where the heavy lifting happens. We use <span className="font-bold">Flutter</span>, a powerful framework by Google that allows us to build for <span className="font-bold">iOS, Android, and the Web</span> using a single codebase.</p>
        <ul className="ml-5 md:ml-6 list-disc space-y-3 leading-[normal]">
          <li><span className="font-bold">The single codebase advantage:</span> Instead of hiring three separate teams for web, Android, and iOS, we build everything once. This ensures that your brand looks and feels identical across all devices while significantly reducing development time and cost.</li>
          <li><span className="font-bold">Rapid iteration:</span> Because we use a modular framework, we can build and test features in sprints. By the end of Month 2, the founder is usually holding a beta version of the app.</li>
          <li><span className="font-bold">Scalable backend:</span> While the frontend looks great, we spend equal time ensuring the engine is robust. We integrate necessary third-party tools, such as payment gateways, geolocation services, or cloud storage, to make the app fully functional.</li>
        </ul>

        <h2 className="leading-[1.2] pt-6 text-[20px] md:text-[32px] font-bold">Month 3: Refinement and the Store Gauntlet</h2>
        <p className="leading-[normal]">The final 30 days are about polish and navigation through the often-confusing world of app store submissions.</p>
        <ul className="ml-5 md:ml-6 list-disc space-y-3 leading-[normal]">
          <li><span className="font-bold">Rigorous testing:</span> We put the app through its paces. We test for edge cases, security vulnerabilities, and performance speed to ensure that the first users have a seamless experience.</li>
          <li><span className="font-bold">The Play Store and App Store journey:</span> Publishing an app is not as simple as clicking upload. Google Play requires specific asset sizing, privacy policies, and review. Apple&apos;s review team is strict about design guidelines and user data privacy. We handle the entire submission process, from metadata and screenshots to responding to reviewer feedback.</li>
          <li><span className="font-bold">The web launch:</span> While the mobile stores are reviewing the apps, we deploy the web app to a live server, giving the founder an immediate platform to start onboarding users or showing to investors.</li>
        </ul>

        <h2 className="leading-[1.2] pt-6 text-[20px] md:text-[32px] font-bold">The Result: Day 90</h2>
        <p className="leading-[normal]">By the end of the third month, the idea has become a product. The founder has:</p>
        <ol className="ml-5 md:ml-6 list-decimal space-y-3 leading-[normal]">
          <li>A professional web application for desktop users.</li>
          <li>An Android app live on the Play Store.</li>
          <li>An iOS app live on the App Store.</li>
          <li>A clean, documented architecture that is ready for the next phase of growth.</li>
        </ol>

        <h2 className="leading-[1.2] pt-6 text-[20px] md:text-[32px] font-bold">Ready to Start Your 90-Day Countdown?</h2>
        <p className="leading-[normal]">We do not just build apps; we build the technical foundation of your business. If you have the vision, we have the blueprint to make it a reality.</p>
        <CollaborateButton className="mt-2 rounded-[8px] bg-[#34CB4D] px-6 py-3 text-[14px] md:text-base font-normal text-[#0A0A0A] transition-colors hover:bg-[#2fb846]">
          Contact us today to discuss your project.
        </CollaborateButton>
      </div>
    )
  },
];
