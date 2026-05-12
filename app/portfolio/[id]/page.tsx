import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowUpRight, BarChart3, Check, CircleDollarSign, TrendingUp } from "lucide-react";
import AutoHorizontalCarousel from "@/components/AutoHorizontalCarousel";
import CTASection from "@/components/CTASection";
import FooterSection from "@/components/FooterSection";
import PortfolioMoreProjectsSection from "@/components/PortfolioMoreProjectsSection";
import {
  getPortfolioProject,
  portfolioFilterLabels,
  portfolioProjects,
} from "@/lib/portfolio-data";

type Props = {
  params: Promise<{ id: string }>;
};

type DetailColumnItem =
  | string
  | {
      label: string;
      url?: string;
    };

export function generateStaticParams() {
  return portfolioProjects.map((project) => ({ id: project.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const project = getPortfolioProject(id);

  if (!project) {
    return {
      title: "Project Not Found | Dojology",
    };
  }

  return {
    title: `${project.detailTitle} | Dojology Portfolio`,
    description: project.detailDescription,
  };
}

function DetailColumn({
  title,
  items,
}: {
  title: string;
  items: DetailColumnItem[];
}) {
  return (
    <div className="flex w-full md:w-[329px] flex-col gap-3">
      <p className="m-0 font-[family-name:var(--font-manrope)] text-[20px] font-normal leading-normal text-white/50">
        {title}
      </p>
      <div className="flex flex-col font-[family-name:var(--font-manrope)] text-[20px] font-normal leading-normal text-white">
        {items.map((item, index) => {
          const label = typeof item === "string" ? item : item.label;
          const url = typeof item === "string" ? undefined : item.url;
          const itemKey = `${label}-${url ?? index}`;

          if (url) {
            return (
              <a
                key={itemKey}
                href={url}
                target="_blank"
                rel="noreferrer"
                className="m-0 text-white no-underline transition-opacity hover:opacity-75"
              >
                {label}
              </a>
            );
          }

          return (
            <p key={itemKey} className="m-0">
              {label}
            </p>
          );
        })}
      </div>
    </div>
  );
}

function ImagePanel({
  className,
  src,
  crop = "large",
  rounded = true,
  heroTop,
}: {
  className?: string;
  src: string;
  crop?: "hero" | "large" | "small";
  rounded?: boolean;
  heroTop?: string;
}) {
  const cropClassName =
    crop === "hero"
      ? "absolute left-0 h-[128.06%] w-full max-w-none"
      : crop === "small"
        ? "absolute left-1/2 top-1/2 h-[128.06%] w-[162.3%] max-w-none -translate-x-1/2 -translate-y-1/2"
        : "absolute left-1/2 top-1/2 h-[128.06%] w-[136.88%] max-w-none -translate-x-1/2 -translate-y-1/2";
  const objectFitClassName = "object-cover object-center";
  const imageStyle = crop === "hero" ? { top: heroTop ?? "-16%" } : undefined;

  return (
    <div
      className={`relative overflow-hidden bg-white ${rounded ? "rounded-[32px]" : ""} ${className || ""}`}
    >
      <Image
        src={src}
        alt=""
        width={2300}
        height={1534}
        priority={crop === "hero"}
        className={`${cropClassName} ${objectFitClassName}`}
        style={imageStyle}
      />
    </div>
  );
}

function ProgressBars({ light = false, width = "100%" }: { light?: boolean; width?: string }) {
  return (
    <div className="flex flex-col gap-3" style={{ width }}>
      <div className={`h-[6px] overflow-hidden rounded-full ${light ? "bg-black/5" : "bg-white/5"}`}>
        <div className={`h-full w-[10%] rounded-full ${light ? "bg-black/10" : "bg-white/10"}`} />
      </div>
      <div className={`h-[10px] overflow-hidden rounded-full ${light ? "bg-black/5" : "bg-white/5"}`}>
        <div className="h-full w-[80%] rounded-full bg-[#4f46e5] shadow-[0_0_15px_rgba(79,70,229,0.4)]" />
      </div>
    </div>
  );
}

function FigmaMetricCard({
  className,
  label,
  value,
  caption,
  inception = "N/A",
  inceptionCaption = "No system",
  light = false,
  icon,
}: {
  className?: string;
  label: string;
  value: string;
  caption: string;
  inception?: string;
  inceptionCaption?: string;
  light?: boolean;
  icon: ReactNode;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-[32px] border p-6 md:p-[32px] ${
        light
          ? "border-black/10 bg-white text-black"
          : "border-white/[0.05] bg-[#111] text-white"
      } ${className || ""}`}
    >
      <div className="flex items-start justify-between">
        <p className={`m-0 font-[family-name:var(--font-inter)] text-[10px] font-black uppercase leading-[15px] tracking-[2px] ${light ? "text-black/40" : "text-white/30"}`}>
          {label}
        </p>
        <span className={`flex size-[34px] items-center justify-center rounded-[14px] ${light ? "bg-black/5 text-black/55" : "bg-white/5 text-white/55"}`}>
          {icon}
        </span>
      </div>

      <div className="mt-6">
        <ProgressBars light={light} />
      </div>

      <div className="mt-[30px] flex items-end gap-4">
        <div className="w-[104px] shrink-0">
          <p className={`m-0 font-[family-name:var(--font-inter)] text-[10px] font-bold uppercase leading-[15px] tracking-[1px] ${light ? "text-black/40" : "text-white/20"}`}>
            Inception State
          </p>
          <p className={`m-0 mt-1 font-[family-name:var(--font-inter)] text-[24px] md:text-[30px] font-light italic leading-[30px] ${light ? "text-black/30" : "text-white/30"}`}>
            {inception}
          </p>
          <p className={`m-0 mt-1 font-[family-name:var(--font-inter)] text-[8px] font-bold uppercase leading-[12px] tracking-[0.8px] ${light ? "text-black/20" : "text-white/10"}`}>
            {inceptionCaption}
          </p>
        </div>
        <div className={`h-12 w-px shrink-0 ${light ? "bg-black/10" : "bg-white/10"}`} />
        <div>
          <p className="m-0 font-[family-name:var(--font-inter)] text-[10px] font-black uppercase leading-[15px] tracking-[1px] text-[#4f46e5]">
            Current Impact
          </p>
          <p className="m-0 mt-1 font-[family-name:var(--font-inter)] text-[42px] md:text-[58.55px] font-bold leading-[1] md:leading-[58.55px] tracking-[-2px] md:tracking-[-3px]">
            {value}
          </p>
          <p className={`m-0 mt-1 font-[family-name:var(--font-inter)] text-[8px] font-black uppercase leading-[12px] tracking-[0.8px] ${light ? "text-black/40" : "text-white/40"}`}>
            {caption}
          </p>
        </div>
      </div>
    </div>
  );
}

function ScreenshotCarouselCard({ index, src }: { index: number; src: string }) {
  return (
    <div
      className="relative h-[280px] md:h-[432px] w-[340px] md:w-[514px] shrink-0 overflow-hidden rounded-[32px] bg-white"
      aria-hidden={index > 5}
    >
      <Image
        src={src}
        alt=""
        width={2300}
        height={1534}
        className="absolute left-1/2 top-1/2 h-[128.06%] w-[162.3%] max-w-none -translate-x-1/2 -translate-y-1/2 object-cover object-center"
      />
    </div>
  );
}

export default async function PortfolioDetailPage({ params }: Props) {
  const { id } = await params;
  const project = getPortfolioProject(id);

  if (!project) {
    notFound();
  }

  const relatedProjects = portfolioProjects.filter((item) => item.id !== project.id);
  const relatedFilterLabels = [
    "All",
    ...portfolioFilterLabels.filter(
      (label) =>
        label !== "All" && relatedProjects.some((relatedProject) => relatedProject.label === label),
    ),
  ];
  const [metricOne, metricTwo, metricThree, metricFour] = project.metrics;
  const mockups = project.mockups ?? {
    featured: "/assets/portfolio/project-mockup-large.png",
    grid: [
      "/assets/portfolio/project-mockup-small.png",
      "/assets/portfolio/project-mockup-small.png",
    ],
    carousel: Array.from({ length: 5 }, () => "/assets/portfolio/project-mockup-small.png"),
  };
  const heroMockupSrc = project.mockups ? mockups.featured : "/assets/portfolio/project-hero-bg.png";
  const sectionFeaturedMockupSrc = project.mockups ? mockups.carousel[0] : mockups.featured;
  const carouselMockups = project.mockups ? mockups.carousel.slice(1) : mockups.carousel;
  const screenshotCards = carouselMockups.map((src, index) => ({ index, src }));

  return (
    <main className="w-full overflow-x-hidden bg-black text-white relative">
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-10 lg:px-[194px] flex flex-col relative">
        
        {/* Header */}
        <div className="w-full flex flex-col gap-10 md:gap-[60px] pt-24 md:pt-[158px] mb-16 md:mb-[80px]">
          <h1 className="m-0 w-full bg-[linear-gradient(90.835deg,#fff_0.102%,#4f46e5_99.923%)] bg-clip-text font-[family-name:var(--font-manrope)] text-[clamp(48px,8vw,96px)] font-extrabold leading-tight text-transparent max-w-[1052px]">
            {project.detailTitle}
          </h1>
          <div className="flex flex-col md:flex-row w-full items-start justify-between gap-10 max-w-[1052px]">
            <DetailColumn title="PROJECTS TASK" items={project.tasks} />
            <DetailColumn title="LINK" items={project.links} />
            <DetailColumn title="OTHER" items={project.other} />
          </div>
        </div>

        {/* Hero Image */}
        <ImagePanel
          className="w-[100vw] relative left-1/2 -translate-x-1/2 h-[300px] md:h-[500px] lg:h-[750px] mb-16"
          src={heroMockupSrc}
          crop="hero"
          rounded={false}
          heroTop={project.mockups?.heroTop}
        />

        {/* Separator / Gap */}
        <div className="w-full h-10 md:h-[134px]" />

        {/* Description */}
        <p className="w-full text-center font-[family-name:var(--font-manrope)] text-[16px] md:text-[20px] font-normal leading-relaxed text-white mx-auto max-w-[1052px] mb-24 px-4 md:px-0">
          {project.detailDescription}
        </p>

        {/* Mockups */}
        <ImagePanel
          className="w-full h-[300px] md:h-[500px] lg:h-[750px] max-w-[1052px] mx-auto mb-6"
          src={sectionFeaturedMockupSrc}
        />
        <div className="w-full max-w-[1052px] mx-auto flex flex-col md:flex-row gap-6 mb-24">
          <ImagePanel
            className="w-full md:w-1/2 h-[300px] md:h-[432px]"
            src={mockups.grid[0]}
            crop="small"
          />
          <ImagePanel
            className="w-full md:w-1/2 h-[300px] md:h-[432px]"
            src={mockups.grid[1]}
            crop="small"
          />
        </div>

        {/* Divider */}
        <div className="w-full max-w-[1052px] mx-auto h-px bg-white/20 mb-20" />

        {/* Before & Result Tag */}
        <div className="w-full max-w-[1052px] mx-auto mb-8">
          <div className="inline-flex h-[46px] items-center rounded-full border border-white/10 bg-white/[0.03] px-[7px] pr-4">
            <span className="flex size-8 items-center justify-center rounded-full bg-[#4f46e5]">
              <BarChart3 size={18} />
            </span>
            <span className="ml-[10px] font-[family-name:var(--font-inter)] text-[14px] font-medium text-white/75">
              Before &amp; Result
            </span>
          </div>
        </div>

        {/* Result Header */}
        <div className="w-full max-w-[1052px] mx-auto flex flex-col lg:flex-row items-start justify-between gap-10 mb-16">
          <div>
            <p className="m-0 font-[family-name:var(--font-inter)] text-[10px] font-black uppercase leading-[15px] tracking-[1px] text-white/40">
              Case Study / Southeast Asia / Cambodia
            </p>
            <h2 className="m-0 mt-3 font-[family-name:var(--font-inter)] text-[clamp(40px,6vw,72px)] font-bold leading-[1.1] tracking-[-2px] md:tracking-[-3px] text-white max-w-[711px]">
              Digital Transformation
              <br />
              in Phnom Penh
            </h2>
          </div>
          <div className="lg:mt-[92px] lg:text-right">
            <p className="m-0 font-[family-name:var(--font-inter)] text-[clamp(40px,5vw,60px)] font-extralight leading-[1] tracking-[-3px] text-[#4f46e5]">
              {metricOne.value}
            </p>
            <p className="m-0 mt-1 font-[family-name:var(--font-inter)] text-[10px] font-bold uppercase leading-[15px] tracking-[1px] text-white/40">
              Efficiency Alpha
            </p>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="w-full max-w-[1052px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 mb-24">
          <FigmaMetricCard
            className="lg:col-span-5 h-auto min-h-[348px]"
            label="User Growth"
            value={metricTwo.value}
            caption="Monthly Active Users"
            inceptionCaption="No users tracked"
            icon={<TrendingUp size={18} />}
          />
          <FigmaMetricCard
            className="lg:col-span-7 h-auto min-h-[348px]"
            label="Revenue Growth"
            value="$8,500"
            caption="Monthly Recurring"
            inception="0"
            inceptionCaption="No online revenue"
            icon={<CircleDollarSign size={18} />}
          />
          <FigmaMetricCard
            className="lg:col-span-6 h-auto min-h-[279px]"
            label="Lead Generation"
            value={metricThree.value}
            caption="Incoming Leads"
            light
            icon={<ArrowUpRight size={18} />}
          />
          <FigmaMetricCard
            className="lg:col-span-6 h-auto min-h-[279px]"
            label="Conversion Rate"
            value={metricFour.value}
            caption="Target Efficiency"
            inceptionCaption="Not measurable"
            icon={<ArrowUpRight size={18} />}
          />
        </div>

        {/* Quote & Features Row */}
        <div className="w-full max-w-[1052px] mx-auto flex flex-col lg:flex-row gap-6 mb-24">
          {/* Quote */}
          <div className="w-full lg:w-[763px] overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.05] p-6 md:p-10 flex flex-col justify-between min-h-[310px]">
            <p className="m-0 max-w-[566px] font-[family-name:var(--font-inter)] text-[clamp(18px,2vw,24px)] font-medium italic leading-[1.6] text-white/80">
              &quot;The transformation has been structural and permanent. We went from monolithic legacy servers to edge compute cluster excellence in under 12 weeks.&quot;
            </p>
            <div className="mt-10 flex items-center gap-4">
              <span className="size-10 rounded-full bg-[#4f46e5] shadow-[0_0_15px_rgba(79,70,229,0.3)] shrink-0" />
              <div>
                <p className="m-0 font-[family-name:var(--font-inter)] text-[14px] font-bold leading-5 text-white">
                  Sarah Chen
                </p>
                <p className="m-0 font-[family-name:var(--font-inter)] text-[10px] font-bold uppercase leading-[15px] tracking-[1px] text-white/40">
                  VP Engineering / Global Ops
                </p>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="w-full lg:flex-1 flex flex-col gap-4 justify-between min-h-[310px]">
            {[
              ["Brand Presence", "Full Digital"],
              ["Market Velocity", "14 Days"],
              ["Regional Focus", "Cambodia"],
            ].map(([label, value]) => (
              <div key={label} className="flex h-[80px] lg:flex-1 items-center justify-between rounded-[16px] border border-white/[0.05] bg-[#111] px-6">
                <div className="flex items-center gap-4">
                  <Check size={20} className="text-white/35 shrink-0" />
                  <p className="m-0 font-[family-name:var(--font-inter)] text-[10px] font-bold uppercase tracking-[1px] text-white/40 max-w-[80px] md:max-w-none">
                    {label}
                  </p>
                </div>
                <p className="m-0 font-[family-name:var(--font-inter)] text-[14px] font-bold tracking-[1.4px] text-white text-right">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Screenshots Carousel */}
        <div className="w-[100vw] relative left-1/2 -translate-x-1/2 mb-24">
          <AutoHorizontalCarousel
            className="w-full overflow-x-auto overflow-y-hidden px-4 md:px-10 lg:px-0 pb-10"
            trackClassName="gap-4 md:gap-[30px]"
            trackStyle={{
              paddingLeft: 'max(194px, calc(50vw - 526px))',
              paddingRight: 'max(194px, calc(50vw - 526px))',
            }}
            itemSpan={544}
            itemWidth={514}
            logicalCount={screenshotCards.length}
            showIndicators
            indicatorsClassName="flex justify-center mt-6"
            allowTrailingSpacer={false}
          >
            {screenshotCards.map((item) => (
              <ScreenshotCarouselCard key={`${item.src}-${item.index}`} index={item.index} src={item.src} />
            ))}
          </AutoHorizontalCarousel>
        </div>

        <PortfolioMoreProjectsSection
          filterLabels={relatedFilterLabels}
          projects={relatedProjects}
        />

      </div>

      <CTASection />
      <FooterSection />
    </main>
  );
}
