export const sidebar = [
  {
    id: 1,
    name: "Dashboard",
    link: "/",
    hasLink: false,
  },
  {
    id: 2,
    name: "Inventory",
    link: "/inventory",
    hasLink: true,
    subItem: [
      {
        id: 1,
        link: "/inventory/listOfMedicine",
        name: "List of Medicine ",
      },
      {
        id: 2,
        link: "/inventory/medicineGroup",
        name: "Medicine Group",
      },
    ],
  },
  {
    id: 3,
    name: "Report",
    link: "",
    hasLink: true,
    subItem: [
      {
        id: 1,
        link: "/report/salesreport",
        name: "Sales Report ",
      },
      {
        id: 2,
        link: "/report/paymentsreport",
        name: "Payment Report",
      },
    ],
  },
  {
    id: 4,
    name: "Configuration",
    link: "/configuration",
    hasLink: false,
  },
];
