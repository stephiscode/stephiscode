import trackMoniLogo from "../images/project-icons/trackmoni-logo.svg";
import theepluggLogo from "../images/project-icons/theeplugg-logo.svg";
import kismatLogo from "../images/project-icons/kismat-logo.png";

// Add new projects here; cards and their individual breakdowns use this data.
export const projects = [
  {
    id: "trackmoni",
    name: "TrackMoni",
    category: "Personal finance",
    live: "https://www.trackmoni.online/",
    logo: trackMoniLogo,
    color: "#EDF3EE",
    description: "A personal finance app that brings income, expenses, bills, and everyday money decisions into one clear dashboard.",
    highlights: ["Income, expense, bill, and transaction tracking", "Dashboard summaries and financial insights", "An installable PWA for convenient access on the go"],
    stack: ["Next.js", "TypeScript", "Prisma", "Recharts", "PWA"],
    breakdown: [
      { title: "The need", copy: "Make everyday finances easier to understand without relying on scattered notes and spreadsheets." },
      { title: "The experience", copy: "A connected dashboard for recording transactions, reviewing spending, and keeping track of bills." },
      { title: "Product detail", copy: "An installable progressive web app brings the experience closer to a familiar mobile app." },
      { title: "Business value", copy: "Designed to help people see spending patterns and plan their next financial decisions with more clarity." },
    ],
  },
  {
    id: "theeplugg",
    name: "TheePlugg",
    category: "E-commerce",
    live: "https://theeplugg.com/",
    logo: theepluggLogo,
    color: "#F5EBE1",
    description: "A complete online store connecting a smooth shopping experience with the tools a growing retail business needs behind the scenes.",
    highlights: ["Customer accounts, profiles, and password management", "Shopping cart, wishlists, and Paystack checkout", "Customer messaging and order notifications", "Inventory, order, and delivery management", "Team administration and downloadable PDF sales reports"],
    stack: ["Next.js", "React", "TypeScript", "Prisma", "Paystack"],
    breakdown: [
      { title: "The need", copy: "Give customers a convenient way to shop while helping the business manage its daily retail operations." },
      { title: "The experience", copy: "Customers can create an account, save favourites, manage their cart, pay through Paystack, and contact the store from their profile." },
      { title: "Business tools", copy: "A dedicated management workspace supports inventory, order fulfilment, customer updates, team accounts, and sales reporting." },
      { title: "Business value", copy: "Brings the storefront and day-to-day store management together in one cohesive platform." },
    ],
  },
  {
    id: "kismat",
    name: "Kismat Properties",
    category: "Real estate",
    live: "https://www.kismatproperties.com/",
    logo: kismatLogo,
    color: "#F3EDEA",
    description: "A property discovery website for a real estate and property management company, built to turn browsing into meaningful enquiries.",
    highlights: ["Property listings with imagery and useful details", "Direct enquiries about available properties", "Content management for publishing and updating listings", "A responsive showcase for property sales and management services"],
    stack: ["Next.js", "React", "TypeScript", "PostgreSQL", "Prisma"],
    breakdown: [
      { title: "The need", copy: "Present available properties professionally and make it easy for prospective clients to reach the right team." },
      { title: "The experience", copy: "Visitors explore properties, review listing details, and send enquiries about properties that interest them." },
      { title: "Business tools", copy: "A dedicated content management area lets the team publish and update property listings on the public website." },
      { title: "Business value", copy: "Creates a clear digital presence for property sales and management, with a direct path from discovery to conversation." },
    ],
  },
];
