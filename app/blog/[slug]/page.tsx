import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import { blogPosts } from "../../../lib/blog-data";
import FooterSection from "../../../components/FooterSection";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function BlogDetailsPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="bg-black relative min-h-screen w-full font-['Manrope'] overflow-x-hidden">
      {/* Lighting / background effect */}
      <div className="absolute left-1/2 -translate-x-1/2 top-[-606px] w-[1440px] h-[990px] overflow-hidden bg-[#08081e] pointer-events-none z-0 hidden md:block">
        <div className="absolute bottom-0 left-0 w-[1440px] h-[990px] bg-gradient-to-b from-[#010103] via-[rgba(1,1,3,0)] to-[#010103]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/20 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative z-10 w-full max-w-[1440px] mx-auto pt-[160px] pb-0 flex flex-col items-center">
        
        {/* Article Header */}
        <div className="w-full max-w-[1052px] flex flex-col gap-[40px] md:gap-[62px] px-6 md:px-0">
          <div className="flex flex-col gap-[20px] md:gap-[32px]">
            <p className="font-['Manrope'] font-normal text-[16px] text-white/50 uppercase">
              {post.date}
            </p>
            <h1 className="font-['Manrope'] font-bold text-[36px] md:text-[64px] leading-tight text-white">
              {post.title}
            </h1>
          </div>
          
          <div className="flex flex-col gap-[40px] md:gap-[64px] w-full">
            <p className="font-['Manrope'] font-normal text-[20px] md:text-[24px] text-white/80">
              {post.excerpt}
            </p>
            
            {/* Hero Image */}
            <div className="w-full h-[250px] md:h-[524px] overflow-hidden relative rounded-xl bg-[#0A0A0A]">
              <Image 
                src={post.image} 
                alt={post.title}
                fill
                sizes="(max-width: 1052px) 100vw, 1052px"
                className="object-contain"
                priority
              />
            </div>
            
            {/* Article Content */}
            <div className="w-full pb-[80px] md:pb-[120px]">
              {post.content}
            </div>
          </div>
        </div>

      </div>

      {/* Footer */}
      <div className="relative z-20 w-full mt-auto border-t border-white/10">
        <FooterSection />
      </div>
    </div>
  );
}
