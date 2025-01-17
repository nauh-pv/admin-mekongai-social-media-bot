import React from "react";

const DashboardIcon = <i className="bx bx-home side-menu__icon"></i>;

const PagesIcon = <i className="bx bx-file-blank side-menu__icon"></i>;

const CommentIcon = <i className="bx bx-comment side-menu__icon"></i>;

const MessageIcon = <i className="bx bx-message side-menu__icon"></i>;

const PostManagerIcon = <i className="bx bx-edit-alt side-menu__icon"></i>;

const BalanceIcon = <i className="bx bx-wallet side-menu__icon"></i>;

const badge = (
  <span className="badge !bg-warning/10 !text-warning !py-[0.25rem] !px-[0.45rem] !text-[0.75em] ms-2">
    12
  </span>
);
const badge1 = (
  <span className="text-secondary text-[0.75em] rounded-sm !py-[0.25rem] !px-[0.45rem] badge !bg-secondary/10 ms-2">
    New
  </span>
);
const badge2 = (
  <span className="text-danger text-[0.75em] rounded-sm badge !py-[0.25rem] !px-[0.45rem] !bg-danger/10 ms-2">
    Hot
  </span>
);
const badge4 = (
  <span className="text-success text-[0.75em] badge !py-[0.25rem] !px-[0.45rem] rounded-sm bg-success/10 ms-2">
    3
  </span>
);

export const MenuItemsUser: any = [
  {
    menutitle: "MAIN",
  },
  {
    icon: DashboardIcon,
    badgetxt: badge,
    title: "Dashboards",
    type: "link",
    active: false,
    selected: false,
    path: "/admin-dashboard",
  },
  {
    icon: MessageIcon,
    title: "Payment Manager",
    type: "link",
    active: false,
    selected: false,
    path: "/admin-dashboard/payment-manager",
  },
  {
    icon: MessageIcon,
    title: "Product Manager",
    type: "link",
    active: false,
    selected: false,
    path: "/admin-dashboard/product-manager",
  },
];
