import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Product",
    newTab: false,
    submenu: [
      {
        id: 11,
        title: "Deal Discovery",
        path: "/product#deal-discovery",
        newTab: false,
      },
      {
        id: 12,
        title: "Underwriting",
        path: "/product#underwriting",
        newTab: false,
      },
      {
        id: 13,
        title: "Monitoring",
        path: "/product#monitoring",
        newTab: false,
      },
      {
        id: 14,
        title: "Portfolio Management",
        path: "/product#portfolio-management",
        newTab: false,
      },
    ],
  },
  {
    id: 2,
    title: "Industries",
    newTab: false,
    submenu: [
      {
        id: 21,
        title: "Private Credit",
        path: "/#benefits",
        newTab: false,
      },
      {
        id: 22,
        title: "BSL Investors",
        path: "/#benefits",
        newTab: false,
      },
      {
        id: 23,
        title: "Banks",
        path: "/#benefits",
        newTab: false,
      },
      {
        id: 24,
        title: "Insurance",
        path: "/#benefits",
        newTab: false,
      },
      {
        id: 25,
        title: "Private Equity",
        path: "/#benefits",
        newTab: false,
      },
    ],
  },
  {
    id: 3,
    title: "Users",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "Credit Analysts",
        path: "/#benefits",
        newTab: false,
      },
      {
        id: 32,
        title: "Port Managers",
        path: "/#benefits",
        newTab: false,
      },
      {
        id: 33,
        title: "Credit Committee",
        path: "/#benefits",
        newTab: false,
      },
      {
        id: 34,
        title: "Credit Oversight",
        path: "/#benefits",
        newTab: false,
      },
    ],
  },
  {
    id: 4,
    title: "Company",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "About",
        path: "/about",
        newTab: false,
      },
      {
        id: 42,
        title: "Blog & News",
        path: "/blog",
        newTab: false,
      },
      {
        id: 43,
        title: "Careers",
        path: "/#contact",
        newTab: false,
      },
    ],
  },
];
export default menuData;
