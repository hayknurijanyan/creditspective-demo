import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Platform",
    newTab: false,
    submenu: [
      {
        id: 11,
        title: "Deal Discovery",
        path: "/#features",
        newTab: false,
      },
      {
        id: 12,
        title: "Underwriting",
        path: "/#how-it-works",
        newTab: false,
      },
      {
        id: 13,
        title: "Monitoring",
        path: "/#benefits",
        newTab: false,
      },
      {
        id: 14,
        title: "Portfolio Management",
        path: "/#benefits",
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
  {
    id: 5,
    title: "Login",
    path: "/signin",
    newTab: false,
  },
  {
    id: 6,
    title: "Request Demo",
    path: "/#contact",
    newTab: false,
  },
];
export default menuData;
