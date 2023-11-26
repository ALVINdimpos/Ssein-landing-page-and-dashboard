export const Links = [
  {
    id: 1,
    label: "Dashboard",
    icon: <i class="bi bi-columns-gap"></i>,

    adjacentLinks: [
      {
        id: 1,
        label: "Home",
        path: "/dashboard",
      },
      {
        id: 2,
        label: "Food order",
        path: "/dashboard/food-order",
      },
      {
        id: 3,
        label: "Order history",
        path: "/dashboard/order-history",
      },
      {
        id: 4,
        label: "Message",
        path: "/dashboard/message",
      },
      {
        id: 5,
        label: "Bill",
        path: "/dashboard/bill",
      },
      {
        id: 6,
        label: "Setting",
        path: "/dashboard/setting",
      },
    ],
  },
  {
    id: 2,
    label: "Restaurant",
    icon: <i class="bi bi-house"></i>,

    adjacentLinks: [
      {
        id: 1,
        label: "Restaurant",
        path: "/dashboard/restourant",
      },
      {
        id: 2,
        label: "Menu",
        path: "/dashboard/restourant/menu",
      },
      {
        id: 3,
        label: "Orders",
        path: "/dashboard/restourant/orders",
      },
      {
        id: 4,
        label: "Reviews",
        path: "/dashboard/restourant/reviews",
      },
    ],
  },
  {
    id: 3,
    label: "Drivers",
    icon: <i class="bi bi-bicycle"></i>,

    adjacentLinks: [
      {
        id: 1,
        label: "Dashboard",
        path: "/dashboard/drivers",
      },
      {
        id: 2,
        label: "orders",
        path: "/dashboard/drivers/orders",
      },
      {
        id: 3,
        label: "feedbacks",
        path: "/dashboard/drivers/feedbacks",
      },
    ],
  },
];
