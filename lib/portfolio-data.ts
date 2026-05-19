export type PortfolioProject = {
  id: string;
  label: string;
  title: string;
  detailTitle: string;
  bgColor: string;
  logo: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  description: string;
  detailDescription: string;
  services: string[];
  tasks: string[];
  links: {
    label: string;
    url?: string;
    icon?: "facebook" | "telegram" | "instagram";
  }[];
  other: string[];
  metrics: {
    label: string;
    value: string;
    caption: string;
    tone?: "light" | "dark";
  }[];
  quote: {
    body: string;
    name: string;
    role: string;
  };
  mockups?: {
    featured: string;
    grid: string[];
    carousel: string[];
    heroTop?: string;
  };
};

const commonServices = [
  "Engineering",
  "UX/UI Design",
  "Web and Mobile Development",
  "Cloud Infrastructure",
];

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "umami",
    label: "UMAMI",
    title: "UMAMI",
    detailTitle: "UMAMI",
    bgColor: "#003223",
    logo: {
      src: "/logo/umami white logo.png",
      alt: "Umami Logo",
      width: 303,
      height: 80,
    },
    description:
      "Umami is a FoodTech platform dedicated to reducing food waste across Cambodia by connecting consumers with local restaurants and food vendors. Umami allows businesses to sell their surplus food at the end of the day.",
    detailDescription:
      "Umami is a FoodTech platform dedicated to reducing food waste across Cambodia by connecting consumers with local restaurants and food vendors. Umami allows businesses to sell their surplus food at the end of the day, ensuring that perfectly good meals are enjoyed rather than thrown away.",
    services: commonServices,
    tasks: [
      "Engineering",
      "UX/UI Design",
      "Web and Mobile Development",
      "Internal Admin Portal",
      "Merchant Portal",
      "Mobile App",
      "Cloud Infrastructure",
    ],
    links: [
      {
        label: "Facebook",
        url: "https://web.facebook.com/profile.php?id=61587125687833",
        icon: "facebook",
      },
      {
        label: "Telegram",
        url: "https://t.me/umamikh",
        icon: "telegram",
      },
      {
        label: "Instagram",
        url: "https://www.instagram.com/umami.eco/",
        icon: "instagram",
      },
      {
        label: "Website",
        url: "https://www.umamikh.app",
      },
      {
        label: "App Store",
        url: "https://apps.apple.com/kh/app/umami-save-food-save-money/id6760289489",
      },
      {
        label: "Play Store",
        url: "https://play.google.com/store/apps/details?id=com.dojo.umami&pcampaignid=web_share",
      },
    ],
    other: ["Industry: FoodTech", "Model: Co-founder & Technology Partner"],
    metrics: [
      { label: "Revenue Growth", value: "+588%", caption: "Marketplace traction", tone: "dark" },
      { label: "Active Users", value: "5,200", caption: "Monthly platform users", tone: "dark" },
      { label: "Partner Vendors", value: "320", caption: "Incoming restaurant partners", tone: "light" },
      { label: "Conversion Rate", value: "3.7%", caption: "Target efficiency", tone: "dark" },
    ],
    quote: {
      body: "The transformation has been structural and permanent. We moved from an idea-stage marketplace into a full operating platform with measurable food-waste impact.",
      name: "Umami Operations",
      role: "FoodTech Platform",
    },
    mockups: {
      featured: "/umami_mockup/umami_first.png",
      grid: [
        "/umami_mockup/umami_leftgrid.png",
        "/umami_mockup/umami_rightgrid.png",
      ],
      carousel: [
        "/umami_mockup/umami_topgrid.png",
        "/umami_mockup/umami_scroll_1.png",
        "/umami_mockup/umami_scroll_2.png",
        "/umami_mockup/umami_scroll_3.png",
        "/umami_mockup/umami_scroll_4.png",
        "/umami_mockup/umami_scroll_5.png",
      ],
    },
  },
  {
    id: "cashgrow",
    label: "CASHGROW68",
    title: "CashGrow68",
    detailTitle: "CashGrow68",
    bgColor: "#f59245",
    logo: {
      src: "/logo/cashgrow68-figma.png",
      alt: "CashGrow68 Logo",
      width: 200,
      height: 200,
    },
    description:
      "A comprehensive digital ecosystem featuring a robust web portal for administrative teams and a user-friendly mobile app, empowering customers to seamlessly apply for low-interest, collateral-backed loans.",
    detailDescription:
      "CashGrow68 is a digital lending ecosystem built around operational clarity, faster application handling, and better customer access to collateral-backed loan products.",
    services: commonServices,
    tasks: [
      "Engineering",
      "UX/UI Design",
      "Admin Portal",
      "Customer Mobile App",
      "Loan Workflow Automation",
      "Cloud Infrastructure",
    ],
    links: [
      { label: "Play Store: CashGrow68 - Secure Asset Loan", url: "https://play.google.com/store/apps/details?id=com.cashgrow.pawnshop&pcampaignid=web_share" },
      { label: "Website: cashgrow68.shop", url: "http://cashgrow68.shop/" },
      { label: "Customer Support" },
    ],
    other: ["Industry: FinTech", "Model: Technology Partner"],
    metrics: [
      { label: "Processing Speed", value: "4x", caption: "Faster application review", tone: "dark" },
      { label: "Loan Requests", value: "1,840", caption: "Tracked applications", tone: "light" },
      { label: "Ops Coverage", value: "12", caption: "Workflow stages", tone: "dark" },
      { label: "Availability", value: "99.9%", caption: "Cloud uptime target", tone: "dark" },
    ],
    quote: {
      body: "The platform gave lending teams one connected workflow from customer intake to operational review.",
      name: "CashGrow68 Team",
      role: "Digital Lending",
    },
    mockups: {
      featured: "/cashgrow_mockup/cashgrow_first .png",
      grid: [
        "/cashgrow_mockup/cashgrow_leftgrid.png",
        "/cashgrow_mockup/cashgrow_rightgrid.png",
      ],
      carousel: [
        "/cashgrow_mockup/cashgrow_topgrid.png",
        "/cashgrow_mockup/cashgrow_scroll_1.png",
        "/cashgrow_mockup/cashgrow_scroll_2.png",
        "/cashgrow_mockup/cashgrow_scroll_3.png",
        "/cashgrow_mockup/cashgrow_scroll_4.png",
        "/cashgrow_mockup/cashgrow_scroll_5.png",
      ],
      heroTop: "-9%",
    },
  },
  {
    id: "prohose",
    label: "PROHOSE",
    title: "Prohose Official",
    detailTitle: "Prohose Official",
    bgColor: "#6cc51d",
    logo: {
      src: "/logo/prohose-figma.png",
      alt: "Prohose Logo",
      width: 300,
      height: 200,
    },
    description:
      "A professional landing page showcasing Prohose's mission and story, dedicated to bringing Khmer agricultural produce to the digital marketplace.",
    detailDescription:
      "Prohose Official presents a focused digital presence for Khmer agricultural produce, telling the brand story while giving customers and partners a clear route into the business.",
    services: commonServices,
    tasks: [
      "Brand Website",
      "UX/UI Design",
      "Responsive Development",
      "Content Structure",
      "Deployment",
    ],
    links: [
      { label: "Website: prohose-official.com", url: "https://prohose-official.com/" },
      { label: "Social Media" },
      { label: "Partner Inquiry" },
    ],
    other: ["Industry: Agriculture", "Model: Web Technology Partner"],
    metrics: [
      { label: "Brand Presence", value: "Full Digital", caption: "From offline to online", tone: "dark" },
      { label: "Launch Time", value: "14 Days", caption: "Design to deployment", tone: "light" },
      { label: "Pages", value: "8", caption: "Core content views", tone: "dark" },
      { label: "Regional Focus", value: "Cambodia", caption: "Khmer produce market", tone: "dark" },
    ],
    quote: {
      body: "The website clarified the brand story and made the product mission easier for partners to understand.",
      name: "Prohose Team",
      role: "Agricultural Brand",
    },
    mockups: {
      featured: "/prohouse_mockup/prohouse_first.png",
      grid: [
        "/prohouse_mockup/prohouse_leftgrid.png",
        "/prohouse_mockup/prohouse_rightgrid.png",
      ],
      carousel: [
        "/prohouse_mockup/prohouse_topgrid.png",
        "/prohouse_mockup/prohouse_scroll_1.png",
        "/prohouse_mockup/prohouse_scroll_2.png",
        "/prohouse_mockup/prohouse_scroll_3.png",
        "/prohouse_mockup/prohouse_scroll_4.png",
        "/prohouse_mockup/prohouse_scroll_5.png",
      ],
    },
  },
  {
    id: "agritrace",
    label: "ARG TECH",
    title: "ARG TECH",
    detailTitle: "ARG TECH",
    bgColor: "#006d30",
    logo: {
      src: "/logo/ARG TECH white logo.png",
      alt: "ARG TECH Logo",
      width: 1563,
      height: 1563,
    },
    description:
      "ARG TECH is an end-to-end agricultural management ecosystem designed to digitize the farming lifecycle in Cambodia. By connecting physical field data, such as land plots and crop cycles, to a digital marketplace.",
    detailDescription:
      "ARG TECH connects field operations, crop-cycle records, and marketplace readiness into one agricultural management ecosystem for Cambodian farming teams.",
    services: commonServices,
    tasks: [
      "Field Data Architecture",
      "UX/UI Design",
      "Web Platform",
      "Marketplace Workflow",
      "Cloud Infrastructure",
    ],
    links: [
      { label: "Field Portal" },
      { label: "Marketplace" },
      { label: "Partner Dashboard" },
    ],
    other: ["Industry: AgriTech", "Model: Venture Technology Partner"],
    metrics: [
      { label: "Traceability", value: "100%", caption: "Crop lifecycle visibility", tone: "dark" },
      { label: "Farm Records", value: "2,400", caption: "Digitized field entries", tone: "light" },
      { label: "Workflow Modules", value: "9", caption: "From farm to market", tone: "dark" },
      { label: "Market Access", value: "Live", caption: "Seller readiness", tone: "dark" },
    ],
    quote: {
      body: "Field records became easier to track, verify, and prepare for commercial use.",
      name: "ARG TECH Team",
      role: "Agricultural Operations",
    },
  },
  {
    id: "nsgcable",
    label: "NSG CABLE",
    title: "NSG Cable",
    detailTitle: "NSG Cable",
    bgColor: "#4f1ad6",
    logo: {
      src: "/logo/nsg-card-figma.png",
      alt: "NSG Cable Logo",
      width: 200,
      height: 200,
    },
    description:
      "A comprehensive, dual-platform management ecosystem connecting field agents, warehouse operations, and retailers through a Telegram-based Field Intelligence Bot and a Centralized Command Center web portal.",
    detailDescription:
      "NSG Cable connects field agents, warehouse teams, and retailer workflows through a Telegram-based field intelligence bot and centralized command center.",
    services: commonServices,
    tasks: [
      "Telegram Bot",
      "Command Center",
      "Retailer Workflow",
      "Warehouse Operations",
      "Cloud Infrastructure",
    ],
    links: [
      { label: "Command Center" },
      { label: "Field Bot" },
      { label: "Operations Dashboard" },
    ],
    other: ["Industry: Telecom Operations", "Model: Systems Partner"],
    metrics: [
      { label: "Field Coverage", value: "3x", caption: "More visible operations", tone: "dark" },
      { label: "Retailer Records", value: "860", caption: "Connected profiles", tone: "light" },
      { label: "Response Time", value: "-42%", caption: "Faster issue routing", tone: "dark" },
      { label: "Ops Channels", value: "2", caption: "Bot plus command center", tone: "dark" },
    ],
    quote: {
      body: "Operations moved from scattered updates into a single command flow the team could act on.",
      name: "NSG Cable Team",
      role: "Field Operations",
    },
  },
];

export const portfolioFilterLabels = [
  "All",
  "UMAMI",
  "PROHOSE",
  "NSG CABLE",
  "CASHGROW68",
  "KHMER AGRITRACE",
];

export function getPortfolioProject(id: string): PortfolioProject | undefined {
  return portfolioProjects.find((project) => project.id === id);
}
