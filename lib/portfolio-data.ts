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
  links: string[];
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
    links: ["Social Media", "App Store", "Play Store"],
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
  },
  {
    id: "cashgrow",
    label: "CASHGROW68",
    title: "CashGrow68",
    detailTitle: "CashGrow68",
    bgColor: "#f59245",
    logo: {
      src: "/logo/cashgrow68.png",
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
    links: ["Admin Portal", "Mobile App", "Customer Support"],
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
  },
  {
    id: "prohose",
    label: "PROHOSE",
    title: "Prohose Official",
    detailTitle: "Prohose Official",
    bgColor: "#6cc51d",
    logo: {
      src: "/logo/Prohose_white_logo.png",
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
    links: ["Website", "Social Media", "Partner Inquiry"],
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
  },
  {
    id: "agritrace",
    label: "KHMER AGRITRACE",
    title: "Khmer Agritrace",
    detailTitle: "Khmer Agritrace",
    bgColor: "#006d30",
    logo: {
      src: "/logo/umami white logo.png",
      alt: "Khmer Agritrace Logo",
      width: 303,
      height: 80,
    },
    description:
      "AgriTrace is an end-to-end agricultural management ecosystem designed to digitize the farming lifecycle in Cambodia. By connecting physical field data, such as land plots and crop cycles, to a digital marketplace.",
    detailDescription:
      "Khmer Agritrace connects field operations, crop-cycle records, and marketplace readiness into one agricultural management ecosystem for Cambodian farming teams.",
    services: commonServices,
    tasks: [
      "Field Data Architecture",
      "UX/UI Design",
      "Web Platform",
      "Marketplace Workflow",
      "Cloud Infrastructure",
    ],
    links: ["Field Portal", "Marketplace", "Partner Dashboard"],
    other: ["Industry: AgriTech", "Model: Venture Technology Partner"],
    metrics: [
      { label: "Traceability", value: "100%", caption: "Crop lifecycle visibility", tone: "dark" },
      { label: "Farm Records", value: "2,400", caption: "Digitized field entries", tone: "light" },
      { label: "Workflow Modules", value: "9", caption: "From farm to market", tone: "dark" },
      { label: "Market Access", value: "Live", caption: "Seller readiness", tone: "dark" },
    ],
    quote: {
      body: "Field records became easier to track, verify, and prepare for commercial use.",
      name: "Khmer Agritrace Team",
      role: "Agricultural Operations",
    },
  },
  {
    id: "nsgcable",
    label: "NGS CABLE",
    title: "NSG Cable",
    detailTitle: "NGS Cable",
    bgColor: "#4f1ad6",
    logo: {
      src: "/logo/logo.png",
      alt: "NGS Cable Logo",
      width: 200,
      height: 54,
    },
    description:
      "A comprehensive, dual-platform management ecosystem connecting field agents, warehouse operations, and retailers through a Telegram-based Field Intelligence Bot and a Centralized Command Center web portal.",
    detailDescription:
      "NGS Cable connects field agents, warehouse teams, and retailer workflows through a Telegram-based field intelligence bot and centralized command center.",
    services: commonServices,
    tasks: [
      "Telegram Bot",
      "Command Center",
      "Retailer Workflow",
      "Warehouse Operations",
      "Cloud Infrastructure",
    ],
    links: ["Command Center", "Field Bot", "Operations Dashboard"],
    other: ["Industry: Telecom Operations", "Model: Systems Partner"],
    metrics: [
      { label: "Field Coverage", value: "3x", caption: "More visible operations", tone: "dark" },
      { label: "Retailer Records", value: "860", caption: "Connected profiles", tone: "light" },
      { label: "Response Time", value: "-42%", caption: "Faster issue routing", tone: "dark" },
      { label: "Ops Channels", value: "2", caption: "Bot plus command center", tone: "dark" },
    ],
    quote: {
      body: "Operations moved from scattered updates into a single command flow the team could act on.",
      name: "NGS Cable Team",
      role: "Field Operations",
    },
  },
  {
    id: "ecochef",
    label: "GREENSPROUT",
    title: "ECOCHEF",
    detailTitle: "ECOCHEF",
    bgColor: "#1a1a2e",
    logo: {
      src: "/logo/Feng shui white logo.png",
      alt: "GreenSprout Logo",
      width: 200,
      height: 200,
    },
    description:
      "EcoChef is an AI-powered meal planner that helps users minimize food waste by suggesting recipes based on ingredients they already have at home.",
    detailDescription:
      "EcoChef helps households reduce food waste with AI-powered meal planning, ingredient-aware recipes, and practical guidance for what to cook next.",
    services: ["Data Science", "Interaction Design", "Backend Development", "Machine Learning"],
    tasks: [
      "AI Recipe Logic",
      "Interaction Design",
      "Backend Development",
      "Ingredient Matching",
      "Machine Learning",
    ],
    links: ["Prototype", "Recipe Engine", "User Testing"],
    other: ["Industry: Consumer Sustainability", "Model: Product Build Partner"],
    metrics: [
      { label: "Recipe Matches", value: "12k", caption: "Generated suggestions", tone: "dark" },
      { label: "Waste Reduction", value: "28%", caption: "Pilot household target", tone: "light" },
      { label: "Ingredient Types", value: "640", caption: "Mapped pantry items", tone: "dark" },
      { label: "AI Flow", value: "Live", caption: "Recommendation logic", tone: "dark" },
    ],
    quote: {
      body: "The product turned scattered ingredients into a clear cooking path for users.",
      name: "EcoChef Team",
      role: "AI Meal Planning",
    },
  },
];

export const portfolioFilterLabels = [
  "All",
  "UMAMI",
  "PROHOSE",
  "NGS CABLE",
  "CASHGROW68",
  "KHMER AGRITRACE",
  "GREENSPROUT",
  "ZENITH TECH",
];

export function getPortfolioProject(id: string): PortfolioProject | undefined {
  return portfolioProjects.find((project) => project.id === id);
}
