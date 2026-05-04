import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, BarChart3, Check, CircleDollarSign, TrendingUp } from "lucide-react";
import AutoHorizontalCarousel from "@/components/AutoHorizontalCarousel";
import CollaborateButton from "@/components/CollaborateButton";
import Icon from "@/assets/icons/icon-asset";
import {
  getPortfolioProject,
  portfolioFilterLabels,
  portfolioProjects,
  type PortfolioProject,
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
        {items.map((item) => {
          const label = typeof item === "string" ? item : item.label;
          const url = typeof item === "string" ? undefined : item.url;

          if (url) {
            return (
              <a
                key={label}
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
            <p key={label} className="m-0">
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
}: {
  className?: string;
  src: string;
  crop?: "hero" | "large" | "small";
  rounded?: boolean;
}) {
  const cropClassName =
    crop === "hero"
      ? "absolute left-0 top-[-23.43%] h-[128.06%] w-full max-w-none"
      : crop === "small"
        ? "absolute left-[-31.05%] top-[-23.43%] h-[128.06%] w-[162.3%] max-w-none"
        : "absolute left-[-18.44%] top-[-23.43%] h-[128.06%] w-[136.88%] max-w-none";

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
        className={`${cropClassName} object-fill`}
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

function RelatedProjectCard({ project }: { project: PortfolioProject }) {
  return (
    <Link
      href={`/portfolio/${project.id}`}
      className="relative block h-[500px] md:h-[610px] w-[320px] md:w-[460px] shrink-0 overflow-hidden rounded-[24px] bg-[#10131c] p-4 text-white no-underline transition-transform duration-200 hover:-translate-y-1"
    >
      <div
        className="flex h-[200px] md:h-[308px] items-center justify-center rounded-[12px]"
        style={{ background: project.bgColor }}
      >
        <Image
          src={project.logo.src}
          alt={project.logo.alt}
          width={project.logo.width}
          height={project.logo.height}
          className="h-auto max-h-[120px] w-auto max-w-[78%] object-contain"
        />
      </div>
      <div className="mt-6 md:mt-8 flex w-[100%] md:w-[428px] max-w-full flex-col gap-4">
        <div className="flex items-start justify-between gap-4">
          <p className="m-0 font-[family-name:var(--font-manrope)] text-[22px] md:text-[28px] font-bold leading-normal">
            {project.title}
          </p>
          <ArrowUpRight className="mt-2 shrink-0 text-white/50" size={22} />
        </div>
        <p className="m-0 line-clamp-4 font-[family-name:var(--font-manrope)] text-[14px] md:text-[16px] font-normal leading-[1.5] tracking-[-0.2344px] text-white/60">
          {project.description}
        </p>
      </div>
    </Link>
  );
}

function ScreenshotCarouselCard({ index }: { index: number }) {
  return (
    <div
      className="relative h-[280px] md:h-[432px] w-[340px] md:w-[514px] shrink-0 overflow-hidden rounded-[32px] bg-white"
      aria-hidden={index > 5}
    >
      <Image
        src="/assets/portfolio/project-mockup-small.png"
        alt=""
        width={2300}
        height={1534}
        className="absolute left-[-31.05%] top-[-23.43%] h-[128.06%] w-[162.3%] max-w-none object-fill"
      />
    </div>
  );
}

function DetailCta() {
  return (
    <div
      className="w-full relative flex flex-col items-start rounded-[20px] p-8 md:p-12"
      style={{
        background:
          "conic-gradient(from 90deg, rgba(0,0,0,0) 0%, #000 100%), linear-gradient(89.9618deg, #4f46e5 0%, rgba(79,70,229,0.6) 24.064%, #fff 82.033%)",
      }}
    >
      <p className="m-0 w-full md:w-[592px] max-w-full font-[family-name:var(--font-manrope)] text-[28px] md:text-[36px] font-bold leading-normal text-white">
        Ready to Unlock Your Business Potential?
      </p>
      <div className="mt-8 flex w-full flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <p className="m-0 w-full md:w-[534px] font-[family-name:var(--font-manrope)] text-[18px] md:text-[24px] font-normal leading-normal text-white">
          Let's collaborate to innovate, grow, and transform your business for lasting success.
        </p>
        <CollaborateButton
          className="flex h-[52px] w-full md:w-auto items-center justify-center gap-4 rounded-[30px] bg-[linear-gradient(180deg,#2f1893_17.081%,#190c39_73.835%)] px-8 md:px-12 text-[#fbfbfd] no-underline whitespace-nowrap cursor-pointer transition-opacity hover:opacity-85"
        >
          <span className="font-[family-name:var(--font-manrope)] text-[18px] md:text-[20px] font-medium">
            Start Your Journey
          </span>
          <ArrowUpRight size={24} />
        </CollaborateButton>
      </div>
    </div>
  );
}

function DetailFooter() {
  return (
    <footer className="w-[100vw] relative left-1/2 -translate-x-1/2 overflow-hidden bg-[#2f1893]">
      <div className="absolute right-0 top-1/2 h-full w-[514px] -translate-y-1/2 opacity-5 pointer-events-none hidden lg:block">
        <Image
          src="/assets/portfolio/footer-logo-figma.png"
          alt=""
          fill
          sizes="514px"
          className="object-cover"
        />
      </div>

      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-10 lg:px-[100px] py-[60px] md:py-[100px] flex flex-col lg:flex-row gap-[60px] lg:gap-[150px] justify-between relative z-10">
        
        {/* Left Column */}
        <div className="flex flex-col gap-[40px] md:gap-[60px]">
          <Image
            src="/assets/portfolio/footer-logo-figma.png"
            alt="Dojology"
            width={257}
            height={69}
            className="h-[50px] md:h-[69px] w-auto object-contain"
          />
          <p className="m-0 font-['Alexandria',sans-serif] text-[40px] md:text-[64px] font-medium leading-[1.1] text-white">
            Growth.
            <br />
            Agility.
            <br />
            Commitment.
          </p>
        </div>

        {/* Links Columns */}
        <div className="flex flex-col md:flex-row gap-[40px] md:gap-[150px]">
          {/* Important Links */}
          <div className="flex flex-col gap-[30px] md:gap-[42px] min-w-[170px]">
            <p className="m-0 font-[family-name:var(--font-manrope)] text-[20px] md:text-[24px] font-bold text-white">
              Important Link
            </p>
            <div className="flex flex-col gap-4 md:gap-6">
              {[
                ["About us", "/#about"],
                ["Services", "/#services"],
                ["FAQs", "/#faqs"],
                ["Partnership", "/#portfolio"],
              ].map(([label, href]) => (
                <a key={label} href={href} className="flex items-center gap-2 font-[family-name:var(--font-manrope)] text-[16px] md:text-[18px] font-medium text-white no-underline transition-opacity hover:opacity-75">
                  {label}
                  <Image
                    src="/assets/portfolio/footer-arrow-icon.svg"
                    alt=""
                    width={24}
                    height={24}
                    className="size-5 md:size-6 ml-2"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Get in Touch */}
          <div className="flex flex-col gap-[30px] md:gap-[42px] max-w-[286px]">
            <p className="m-0 font-[family-name:var(--font-manrope)] text-[20px] md:text-[24px] font-bold text-white">
              Get in Touch
            </p>
            <div className="flex flex-col gap-4 font-[family-name:var(--font-manrope)] text-[14px] md:text-[16px]">
              {[
                ["CONTACT", "(855) 98-992-895 / 89-992-895"],
                ["EMAIL", "info@dojology.com"],
                ["HEAD QUARTER", "Lettuce Building , 3rd Floor , Street 371, Phnom Penh"],
                ["WORK HOUR", "Mon - Sat, 8:00AM - 5:00PM"],
              ].map(([label, value]) => (
                <div key={label} className="flex flex-col gap-1">
                  <p className="m-0 font-bold text-white">{label}</p>
                  <p className="m-0 font-medium text-white/70">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="w-full border-t border-white/20">
        <div className="w-full max-w-[1440px] mx-auto px-4 md:px-10 lg:px-[100px] py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="m-0 font-[family-name:var(--font-manrope)] text-[14px] md:text-[16px] font-medium text-white text-center md:text-left">
            Dojology © 2025 All Rights Reserved
          </p>
          <div className="flex items-center justify-center md:justify-end gap-4">
            <a href="https://www.facebook.com/dojologytechandventures" target="_blank" rel="noreferrer" aria-label="Facebook" className="flex transition-opacity hover:opacity-75">
              <Icon name="facebook" />
            </a>
            <a href="https://t.me/dojology" target="_blank" rel="noreferrer" aria-label="Telegram" className="flex transition-opacity hover:opacity-75">
              <Icon name="telegram" />
            </a>
            <a href="https://www.linkedin.com/company/dojology-tech-and-ventures" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="flex transition-opacity hover:opacity-75">
              <Icon name="linkedin" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default async function PortfolioDetailPage({ params }: Props) {
  const { id } = await params;
  const project = getPortfolioProject(id);

  if (!project) {
    notFound();
  }

  const relatedProjects = portfolioProjects.filter((item) => item.id !== project.id);
  const [metricOne, metricTwo, metricThree, metricFour] = project.metrics;
  const screenshotCards = Array.from({ length: 5 }, (_, index) => index);

  return (
    <main className="w-full overflow-x-hidden bg-black text-white relative">
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-10 lg:px-[194px] flex flex-col relative pb-32">
        
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
          src="/assets/portfolio/project-hero-bg.png"
          crop="hero"
          rounded={false}
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
          src="/assets/portfolio/project-mockup-large.png"
        />
        <div className="w-full max-w-[1052px] mx-auto flex flex-col md:flex-row gap-6 mb-24">
          <ImagePanel
            className="w-full md:w-1/2 h-[300px] md:h-[432px]"
            src="/assets/portfolio/project-mockup-small.png"
            crop="small"
          />
          <ImagePanel
            className="w-full md:w-1/2 h-[300px] md:h-[432px]"
            src="/assets/portfolio/project-mockup-small.png"
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
              <ScreenshotCarouselCard key={item} index={item} />
            ))}
          </AutoHorizontalCarousel>
        </div>

        {/* More Projects Header */}
        <div className="w-full max-w-[1052px] mx-auto flex flex-col items-center gap-10 md:gap-[60px] mb-12">
          <div className="relative text-center font-[family-name:var(--font-manrope)] text-[clamp(64px,10vw,128px)] font-extrabold leading-[0.8] text-transparent">
            <p className="m-0 bg-gradient-to-b from-[#4f46e5] to-white bg-clip-text tracking-[-2px] md:tracking-[-7px] ml-[10%]">
              MORE
            </p>
            <p className="m-0 bg-gradient-to-b from-white to-[#4f46e5] bg-clip-text tracking-[-2px] md:tracking-[-5px] mr-[10%]">
              PROJECTS
            </p>
          </div>
          
          <div className="w-full overflow-x-auto pb-4 scrollbar-hide">
            <div className="flex gap-3 w-max mx-auto bg-white/[0.05] rounded-[90px] p-2 md:px-6 md:py-3">
              {portfolioFilterLabels.slice(0, 7).map((label, index) => (
                <span
                  key={label}
                  className={`flex h-[40px] md:h-[47px] shrink-0 items-center justify-center rounded-[40px] px-4 md:px-[31px] font-[family-name:var(--font-manrope)] text-[14px] md:text-[16px] leading-normal tracking-[-0.23px] text-white ${
                    index === 0 ? "bg-[#4f1ad6] font-bold" : "border border-white/20 font-normal"
                  }`}
                >
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Related Projects Carousel */}
        <div className="w-[100vw] relative left-1/2 -translate-x-1/2 mb-32">
          <AutoHorizontalCarousel
            className="w-full overflow-x-auto overflow-y-hidden px-4 md:px-10 lg:px-0 py-4"
            trackClassName="gap-4 md:gap-[30px]"
            trackStyle={{
              paddingLeft: 'max(194px, calc(50vw - 526px))',
              paddingRight: 'max(194px, calc(50vw - 526px))',
            }}
            itemSpan={490}
            itemWidth={460}
            logicalCount={relatedProjects.length}
            allowTrailingSpacer={false}
          >
            {relatedProjects.map((relatedProject) => (
              <RelatedProjectCard key={relatedProject.id} project={relatedProject} />
            ))}
          </AutoHorizontalCarousel>
        </div>

        {/* CTA */}
        <div className="w-[100vw] relative left-1/2 -translate-x-1/2 max-w-[1440px] px-4 md:px-10 lg:px-[194px]">
          <DetailCta />
        </div>

      </div>

      <DetailFooter />
    </main>
  );
}
