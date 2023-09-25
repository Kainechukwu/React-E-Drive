import { lazy } from "react";
import { paths } from "./paths";

export const routes = [
  {
    path: paths.BUY,
    name: "Buy",
    exact: true,
    component: lazy(() => import("../pages/landing-pages/Buy")),
  },
  {
    path: paths.LEASE,
    name: "Lease",
    exact: true,
    component: lazy(() => import("../pages/landing-pages/Lease")),
  },
  {
    path: paths.RENT,
    name: "Rent",
    exact: true,
    component: lazy(() => import("../pages/landing-pages/Rent")),
  },
  // {
  //   path: paths.BULK_BRANCH_CREATION_VIEW,
  //   name: "Bulk Branch Creation View",
  //   exact: true,
  //   component: lazy(() => import("../pages/branch-management/summary/IndexComponent")),
  // },
  // {
  //   path: paths.BRANCH_CREATION_VIEW,
  //   name: "Branch Creation View",
  //   exact: true,
  //   component: lazy(() => import("../pages/branch-management/summary/IndexComponent")),
  // },
  // {
  //   path: paths.CREATE_BRANCH,
  //   exact: true,
  //   component: lazy(() => import("../pages/branch-management/create-branch/IndexComponent")),
  // },
  // {
  //   path: paths.MODIFY_REQUEST,
  //   exact: true,
  //   component: lazy(() => import("../pages/branch-management/create-branch/IndexComponent")),
  // },
  // {
  //   path: paths.CONTINUE_REQUEST,
  //   exact: true,
  //   component: lazy(
  //     () => import("../pages/branch-management/edit-request/IndexComponent")
  //   ),
  // },
  // {
  //   path: paths.BRANCH_MODIFY,
  //   exact: true,
  //   component: lazy(
  //     () => import("../pages/branch-management/edit-request/IndexComponent")
  //   ),
  // },

  // {
  //   path: paths.BRANCH_CREATION_REVIEW,
  //   exact: true,
  //   component: lazy(() => import("../pages/branch-management/summary/IndexComponent")),
  // },
  // {
  //   path: paths.BRANCH_DEACTIVATION_REVIEW,
  //   exact: true,
  //   component: lazy(() => import("../pages/branch-management/summary/IndexComponent")),
  // },
  // {
  //   path: paths.BRANCH_MODIFICATION_REVIEW,
  //   exact: true,
  //   component: lazy(() => import("../pages/branch-management/summary/IndexComponent")),
  // },

  // {
  //   path: paths.BULK_BRANCH_CREATION_REVIEW,
  //   exact: true,
  //   component: lazy(() => import("../pages/branch-management/summary/IndexComponent")),
  // },
  // {
  //   path: paths.BRANCH_REVIEW,
  //   exact: true,
  //   component: lazy(() => import("../pages/branch-management/summary/IndexComponent")),
  // },
];

export default routes;
