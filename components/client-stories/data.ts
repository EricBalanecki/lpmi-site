import { Award, Calendar, Target, Users } from "lucide-react";

export type CoreProject = {
  title: string;
  year: string;
  description: string;
  tags: string[];
  logoSrc: string;
};

export type TelecomProject = {
  organization: string;
  year?: string;
  highlights: string[];
};

export const coreProjects: CoreProject[] = [
  {
    title: "Lions Gate Hospital",
    year: "2023",
    description:
      "IT Technical Project Management for the new Acute Care Facility (ACF) redevelopment project at Lions Gate Hospital.",
    tags: ["Healthcare IT", "Infrastructure", "Technical PM"],
    logoSrc: "/images/logos/lionsgate.webp",
  },
  {
    title: "Van City",
    year: "2020",
    description:
      "Program Management for Vancity's Member Experience Contact Centre program with Genesys SAAS cloud-based call centre solution and API integrations.",
    tags: ["Program Management", "Genesys", "API Integration"],
    logoSrc: "/images/logos/Logo-vancity.png",
  },
  {
    title: "BC Hydro Cybersecurity",
    year: "2019",
    description:
      "Project management for BC Hydro Cybersecurity portfolio including Next Generation cybersecurity firewall and datacentre network security projects.",
    tags: ["Cybersecurity", "Firewall", "Datacentre"],
    logoSrc: "/images/logos/bc_hydro.png",
  },
  {
    title: "WorkSafe BC",
    year: "2019",
    description:
      "Project delivery leadership and Technical SME for a unified communications and call center operational sustainment transition project.",
    tags: ["Unified Communications", "Call Centre", "Technical SME"],
    logoSrc: "/images/logos/worksafe_bc.png",
  },
  {
    title: "Best Buy Canada",
    year: "2017",
    description:
      "Project management planning for a $40M+ datacentre move program, cybersecurity network segmentation, and SolarWinds network monitoring projects.",
    tags: ["Datacentre", "Cybersecurity", "Network Segmentation"],
    logoSrc: "/images/logos/Best_Buy_Logo.png",
  },
  {
    title: "Coast Capital Savings",
    year: "2016",
    description:
      "Project management for Coast Capital's NextGen Contact Centre program with Aspects call centre solution and custom CRM development across 4 environments.",
    tags: ["Contact Centre", "CRM Development", "Multi-Environment"],
    logoSrc: "/images/logos/Coast-Capital-Savings.png",
  },
  {
    title: "City of Surrey",
    year: "2014",
    description:
      "Telecom design and replacement delivery for 55 sites and approximately 2,200 phones across the city, including WAN and network modernization.",
    tags: ["Telecom Design", "Network Replacement", "Municipal"],
    logoSrc: "/images/logos/leading_pm_logo.png",
  },
  {
    title: "ICBC",
    year: "2012",
    description:
      "Project management support for enterprise infrastructure and communications initiatives with a focus on service continuity and stakeholder alignment.",
    tags: ["Enterprise Infrastructure", "Communications", "Project Delivery"],
    logoSrc: "/images/logos/leading_pm_logo.png",
  },
];

export const telecomProjects: TelecomProject[] = [
  {
    organization: "City of Surrey",
    year: "2014",
    highlights: [
      "Telecom design and replacement for 55 sites and 2,200 phones across the city.",
      "Network design and replacement for 55 sites, 30 WAN sites, and 4,800 network ports.",
    ],
  },
  {
    organization: "City of Abbotsford",
    highlights: [
      "Telecom assessment.",
      "Unified communications assessment.",
      "Telecom PST access for Teams Voice RFP.",
      "MS Teams Voice installation across the city (in progress).",
    ],
  },
  {
    organization: "City of Nanaimo",
    highlights: ["Telecom audit (in progress)."],
  },
  {
    organization: "Town of Whitecourt, AB",
    highlights: [
      "Unified communications assessment.",
      "MS Teams Voice installation across the town (in progress).",
    ],
  },
  {
    organization: "Vancouver Island University",
    highlights: [
      "Unified communications assessment.",
      "MS Teams Voice installation across all campus locations.",
    ],
  },
  {
    organization: "Town of Langley",
    highlights: ["Telecom assessment.", "Unified communications assessment."],
  },
  {
    organization: "Justice Institute of BC",
    highlights: ["Unified communications assessment."],
  },
];

export const storyStats = [
  { icon: Award, value: "50+", label: "Projects Delivered" },
  { icon: Users, value: "25+", label: "Clients Served" },
  { icon: Target, value: "99%", label: "Success Rate" },
  { icon: Calendar, value: "25+", label: "Years Experience" },
];
