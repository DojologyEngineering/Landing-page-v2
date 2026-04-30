import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, BarChart3, Check, CircleDollarSign, TrendingUp } from "lucide-react";
import AutoHorizontalCarousel from "@/components/AutoHorizontalCarousel";
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
  items: string[];
}) {
  return (
    <div className="flex w-[329px] flex-col gap-3">
      <p className="m-0 font-[family-name:var(--font-manrope)] text-[20px] font-normal leading-normal text-white/50">
        {title}
      </p>
      <div className="flex flex-col font-[family-name:var(--font-manrope)] text-[20px] font-normal leading-normal text-white">
        {items.map((item) => (
          <p key={item} className="m-0">
            {item}
          </p>
        ))}
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
  className: string;
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
      className={`absolute overflow-hidden bg-white ${rounded ? "rounded-[32px]" : ""} ${className}`}
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
  className: string;
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
      className={`absolute overflow-hidden rounded-[32px] border p-[32px] ${
        light
          ? "border-black/10 bg-white text-black"
          : "border-white/[0.05] bg-[#111] text-white"
      } ${className}`}
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
        <div className="w-[104px]">
          <p className={`m-0 font-[family-name:var(--font-inter)] text-[10px] font-bold uppercase leading-[15px] tracking-[1px] ${light ? "text-black/40" : "text-white/20"}`}>
            Inception State
          </p>
          <p className={`m-0 mt-1 font-[family-name:var(--font-inter)] text-[30px] font-light italic leading-[30px] ${light ? "text-black/30" : "text-white/30"}`}>
            {inception}
          </p>
          <p className={`m-0 mt-1 font-[family-name:var(--font-inter)] text-[8px] font-bold uppercase leading-[12px] tracking-[0.8px] ${light ? "text-black/20" : "text-white/10"}`}>
            {inceptionCaption}
          </p>
        </div>
        <div className={`h-12 w-px ${light ? "bg-black/10" : "bg-white/10"}`} />
        <div>
          <p className="m-0 font-[family-name:var(--font-inter)] text-[10px] font-black uppercase leading-[15px] tracking-[1px] text-[#4f46e5]">
            Current Impact
          </p>
          <p className="m-0 mt-1 font-[family-name:var(--font-inter)] text-[58.55px] font-bold leading-[58.55px] tracking-[-3px]">
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
      className="relative block h-[610px] w-[460px] shrink-0 overflow-hidden rounded-[24px] bg-[#10131c] p-4 text-white no-underline transition-transform duration-200 hover:-translate-y-1"
    >
      <div
        className="flex h-[308px] items-center justify-center rounded-[12px]"
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
      <div className="mt-8 flex w-[428px] flex-col gap-4">
        <div className="flex items-start justify-between gap-4">
          <p className="m-0 font-[family-name:var(--font-manrope)] text-[28px] font-bold leading-normal">
            {project.title}
          </p>
          <ArrowUpRight className="mt-2 shrink-0 text-white/50" size={22} />
        </div>
        <p className="m-0 line-clamp-4 font-[family-name:var(--font-manrope)] text-[16px] font-normal leading-[24.375px] tracking-[-0.2344px] text-white/60">
          {project.description}
        </p>
      </div>
    </Link>
  );
}

function ScreenshotCarouselCard({ index }: { index: number }) {
  return (
    <div
      className="relative h-[432px] w-[514px] shrink-0 overflow-hidden rounded-[32px] bg-white"
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
      className="absolute left-[205px] top-[5772px] z-20 flex h-[260px] w-[1030px] flex-col items-start rounded-[20px] p-8"
      style={{
        background:
          "conic-gradient(from 90deg, rgba(0,0,0,0) 0%, #000 100%), linear-gradient(89.9618deg, #4f46e5 0%, rgba(79,70,229,0.6) 24.064%, #fff 82.033%)",
      }}
    >
      <p className="m-0 w-[592px] font-[family-name:var(--font-manrope)] text-[36px] font-bold leading-normal text-white">
        Ready to Unlock Your Business Potential?
      </p>
      <div className="mt-8 flex w-full items-center justify-between">
        <p className="m-0 w-[534px] font-[family-name:var(--font-manrope)] text-[24px] font-normal leading-normal text-white">
          Let&apos;s collaborate to innovate, grow, and transform your business for lasting success.
        </p>
        <Link
          href="/#contact"
          className="flex h-[52px] items-center justify-center gap-4 rounded-[30px] bg-[linear-gradient(180deg,#2f1893_17.081%,#190c39_73.835%)] px-12 text-[#fbfbfd] no-underline"
        >
          <span className="font-[family-name:var(--font-manrope)] text-[20px] font-medium">
            Start Your Journey
          </span>
          <ArrowUpRight size={24} />
        </Link>
      </div>
    </div>
  );
}

function DetailFooter() {
  return (
    <footer className="absolute bottom-0 left-0 h-[657px] w-[1440px] overflow-hidden bg-[#2f1893]">
      <div className="absolute left-[926px] top-1/2 h-[612px] w-[514px] -translate-y-1/2">
        <div className="absolute inset-0 overflow-hidden opacity-5">
          <Image
            src="/assets/portfolio/footer-logo-figma.png"
            alt=""
            width={2279}
            height={612}
            className="absolute left-[-0.16%] top-0 h-full w-[443.42%] max-w-none object-cover"
          />
        </div>
      </div>

      <div className="absolute left-[100px] top-[188px] flex h-[337px] flex-col justify-between">
        <Image
          src="/assets/portfolio/footer-logo-figma.png"
          alt="Dojology"
          width={257}
          height={69}
          className="h-[69px] w-[257px] object-contain"
        />
        <p className="m-0 font-['Alexandria',sans-serif] text-[64px] font-medium leading-[74px] text-white">
          Growth.
          <br />
          Agility.
          <br />
          Commitment.
        </p>
      </div>

      <div className="absolute left-[717.5px] top-[188px] flex w-[170px] flex-col gap-[42px]">
        <p className="m-0 font-[family-name:var(--font-manrope)] text-[24px] font-bold text-white">
          Important Link
        </p>
        <div className="flex flex-col gap-6">
          {[
            ["About us", "/#about"],
            ["Services", "/#services"],
            ["FAQs", "/#faqs"],
            ["Partnership", "/#portfolio"],
          ].map(([label, href]) => (
            <a key={label} href={href} className="flex items-center justify-between font-[family-name:var(--font-manrope)] text-[18px] font-medium text-white no-underline">
              {label}
              <Image
                src="/assets/portfolio/footer-arrow-icon.svg"
                alt=""
                width={24}
                height={24}
                className="size-6"
              />
            </a>
          ))}
        </div>
      </div>

      <div className="absolute left-[1054px] top-[188px] flex w-[286px] flex-col gap-[42px]">
        <p className="m-0 font-[family-name:var(--font-manrope)] text-[24px] font-bold text-white">
          Get in Touch
        </p>
        <div className="flex flex-col gap-4 font-[family-name:var(--font-manrope)] text-[16px]">
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

      <div className="absolute left-0 top-[566px] flex h-[91px] w-[1440px] items-center justify-between border-t border-white px-[100px]">
        <p className="m-0 font-[family-name:var(--font-manrope)] text-[16px] font-medium text-white">
          Dojology © 2025 All Rights Reserved
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://www.facebook.com/dojologytechandventures"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
            className="flex transition-opacity hover:opacity-75"
          >
            <Icon name="facebook" />
          </a>
          <a
            href="https://t.me/dojology"
            target="_blank"
            rel="noreferrer"
            aria-label="Telegram"
            className="flex transition-opacity hover:opacity-75"
          >
            <Icon name="telegram" />
          </a>
          <a
            href="https://www.linkedin.com/company/dojology-tech-and-ventures"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="flex transition-opacity hover:opacity-75"
          >
            <Icon name="linkedin" />
          </a>
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
    <main className="overflow-x-hidden bg-black text-white">
      <div className="relative mx-auto h-[6559px] w-[1440px] bg-black">
        <div className="absolute left-[194px] top-[158px] flex w-[1052px] flex-col gap-[60px]">
          <h1 className="m-0 w-full bg-[linear-gradient(90.835deg,#fff_0.102%,#4f46e5_99.923%)] bg-clip-text font-[family-name:var(--font-manrope)] text-[96px] font-extrabold leading-normal text-transparent">
            {project.detailTitle}
          </h1>
          <div className="flex w-full items-start justify-between">
            <DetailColumn title="PROJECTS TASK" items={project.tasks} />
            <DetailColumn title="LINK" items={project.links.map((link) => `${link}:`)} />
            <DetailColumn title="OTHER" items={project.other} />
          </div>
        </div>

        <ImagePanel
          className="left-0 top-[583px] h-[750px] w-[1440px]"
          src="/assets/portfolio/project-hero-bg.png"
          crop="hero"
          rounded={false}
        />

        <p className="absolute left-1/2 top-[1363px] m-0 w-[1052px] -translate-x-1/2 text-center font-[family-name:var(--font-manrope)] text-[20px] font-normal leading-normal text-white">
          {project.detailDescription}
        </p>

        <ImagePanel
          className="left-[194px] top-[1474px] h-[750px] w-[1052px]"
          src="/assets/portfolio/project-mockup-large.png"
        />
        <ImagePanel
          className="left-[194px] top-[2254px] h-[432px] w-[511px]"
          src="/assets/portfolio/project-mockup-small.png"
          crop="small"
        />
        <ImagePanel
          className="left-[735px] top-[2254px] h-[432px] w-[511px]"
          src="/assets/portfolio/project-mockup-small.png"
          crop="small"
        />

        <div className="absolute left-[194px] top-[2800px] h-px w-[1052px] bg-white/20" />

        <div className="absolute left-[194px] top-[2731px] flex h-[46px] w-[193px] items-center rounded-full border border-white/10 bg-white/[0.03] px-[7px]">
          <span className="flex size-8 items-center justify-center rounded-full bg-[#4f46e5]">
            <BarChart3 size={18} />
          </span>
          <span className="ml-[10px] font-[family-name:var(--font-inter)] text-[14px] font-medium text-white/75">
            Before &amp; Result
          </span>
        </div>

        <div className="absolute left-[194px] top-[2847px] flex h-[204px] w-[1100px] items-start justify-between">
          <div>
            <p className="m-0 font-[family-name:var(--font-inter)] text-[10px] font-black uppercase leading-[15px] tracking-[1px] text-white/40">
              Case Study / Southeast Asia / Cambodia
            </p>
            <h2 className="m-0 mt-3 w-[711px] font-[family-name:var(--font-inter)] text-[72px] font-bold leading-[72px] tracking-[-3px] text-white">
              Digital Transformation
              <br />
              in Phnom Penh
            </h2>
          </div>
          <div className="mt-[92px] w-[196px] text-right">
            <p className="m-0 font-[family-name:var(--font-inter)] text-[60px] font-extralight leading-[60px] tracking-[-3px] text-[#4f46e5]">
              {metricOne.value}
            </p>
            <p className="m-0 mt-1 font-[family-name:var(--font-inter)] text-[10px] font-bold uppercase leading-[15px] tracking-[1px] text-white/40">
              Efficiency Alpha
            </p>
          </div>
        </div>

        <FigmaMetricCard
          className="left-[194px] top-[3091px] h-[348px] w-[432px]"
          label="User Growth"
          value={metricTwo.value}
          caption="Monthly Active Users"
          inceptionCaption="No users tracked"
          icon={<TrendingUp size={18} />}
        />
        <FigmaMetricCard
          className="left-[647px] top-[3089px] h-[348px] w-[647px]"
          label="Revenue Growth"
          value="$8,500"
          caption="Monthly Recurring"
          inception="0"
          inceptionCaption="No online revenue"
          icon={<CircleDollarSign size={18} />}
        />
        <FigmaMetricCard
          className="left-[194px] top-[3455.14px] h-[279px] w-[564.414px]"
          label="Lead Generation"
          value={metricThree.value}
          caption="Incoming Leads"
          light
          icon={<ArrowUpRight size={18} />}
        />
        <FigmaMetricCard
          className="left-[770px] top-[3453px] h-[279px] w-[524px]"
          label="Conversion Rate"
          value={metricFour.value}
          caption="Target Efficiency"
          inceptionCaption="Not measurable"
          icon={<ArrowUpRight size={18} />}
        />

        <div className="absolute left-[194px] top-[3750px] h-[310px] w-[763px] overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.05] p-10">
          <p className="m-0 w-[566px] font-[family-name:var(--font-inter)] text-[24px] font-medium italic leading-[39px] text-white/80">
            &quot;The transformation has been structural and permanent. We went from monolithic legacy servers to edge compute cluster excellence in under 12 weeks.&quot;
          </p>
          <div className="absolute left-10 top-[228px] flex h-10 items-center gap-4">
            <span className="size-10 rounded-full bg-[#4f46e5] shadow-[0_0_15px_rgba(79,70,229,0.3)]" />
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

        <div className="absolute left-[978.66px] top-[3748.09px] flex h-[310px] w-[315.664px] flex-col justify-between">
          {[
            ["Brand Presence", "Full Digital"],
            ["Market Velocity", "14 Days"],
            ["Regional Focus", "Cambodia"],
          ].map(([label, value]) => (
            <div key={label} className="flex h-20 items-center justify-between rounded-[16px] border border-white/[0.05] bg-[#111] px-[26px]">
              <div className="flex items-center gap-4">
                <Check size={20} className="text-white/35" />
                <p className="m-0 font-[family-name:var(--font-inter)] text-[10px] font-bold uppercase tracking-[1px] text-white/40">
                  {label}
                </p>
              </div>
              <p className="m-0 font-[family-name:var(--font-inter)] text-[14px] font-bold tracking-[1.4px] text-white">
                {value}
              </p>
            </div>
          ))}
        </div>

        <AutoHorizontalCarousel
          className="absolute left-[194px] top-[4221px] h-[432px] w-[1246px] overflow-x-auto overflow-y-hidden"
          trackClassName="gap-[30px]"
          itemSpan={544}
          itemWidth={514}
          logicalCount={screenshotCards.length}
          showIndicators
          indicatorsClassName="absolute left-[194px] top-[4683px]"
          allowTrailingSpacer={false}
        >
          {screenshotCards.map((item) => (
            <ScreenshotCarouselCard key={item} index={item} />
          ))}
        </AutoHorizontalCarousel>

        <div className="absolute left-[183px] top-[4732px] flex w-[1052px] flex-col items-center gap-[60px]">
          <div className="relative h-[203px] w-[629px] font-[family-name:var(--font-manrope)] text-[128px] font-extrabold leading-[102.4px] text-transparent">
            <p className="absolute left-[140px] top-0 m-0 bg-gradient-to-b from-[#4f46e5] to-white bg-clip-text tracking-[-7px]">
              MORE
            </p>
            <p className="absolute left-0 top-[100px] m-0 bg-gradient-to-b from-white to-[#4f46e5] bg-clip-text tracking-[-5px]">
              PROJECTS
            </p>
          </div>
          <div className="tags-scroll flex h-[71px] w-[1052px] items-start overflow-x-auto rounded-[90px] bg-white/[0.05] px-6 py-3">
            <div className="flex gap-3">
              {portfolioFilterLabels.slice(0, 7).map((label, index) => (
                <span
                  key={label}
                  className={`flex h-[47px] shrink-0 items-center justify-center rounded-[40px] px-[31px] font-[family-name:var(--font-manrope)] text-[16px] leading-[24.375px] tracking-[-0.2344px] text-white ${
                    index === 0 ? "bg-[#4f1ad6] font-bold" : "border border-white/20 font-normal"
                  }`}
                >
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>

        <AutoHorizontalCarousel
          className="absolute left-[183px] top-[5126px] h-[610px] w-[1257px] overflow-x-auto overflow-y-hidden"
          trackClassName="gap-[30px]"
          itemSpan={490}
          itemWidth={460}
          logicalCount={relatedProjects.length}
          allowTrailingSpacer={false}
        >
          {relatedProjects.map((relatedProject) => (
            <RelatedProjectCard key={relatedProject.id} project={relatedProject} />
          ))}
        </AutoHorizontalCarousel>

        <DetailCta />
        <DetailFooter />
      </div>
    </main>
  );
}
