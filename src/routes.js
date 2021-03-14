import { lazy } from "react";
const Portfolio = lazy(() => import("./pages/Portfolio"));
const sreExcel = lazy(() => import("./pages/Portfolio/sreExcel"));
const chiSqrt = lazy(() => import("./pages/Portfolio/chiSqrt"));
const challenges = lazy(() => import("./pages/Portfolio/challenges"));
const About = lazy(() => import("./pages/About"));

export const routes = [
  {
    path: "/about",
    component: About,
  },
  {
    path: "/portfolio",
    component: Portfolio,
  },
  {
    path: "/portfolio/sreExcel",
    component: sreExcel,
  },
  {
    path: "/portfolio/chiSqrt",
    component: chiSqrt,
  },
  {
    path: "/portfolio/challenges",
    component: challenges,
  },
];
