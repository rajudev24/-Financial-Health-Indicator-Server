import express from "express";
import { AuthRoutes } from "../modules/user/auth.routes";
import { FinancialRoutes } from "../modules/financial/financial.routes";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/auth",
    route: AuthRoutes,
  },
  {
    path: "/financial-score",
    route: FinancialRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
