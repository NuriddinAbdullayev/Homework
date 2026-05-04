import express from "express";
import * as controller from "../controllers/order.controller.js";
import validate from "../middlewares/validate.js";
import { orderSchema } from "../validators/order.validator.js";
import checkObjectId from "../middlewares/checkObjectId.js";

const router = express.Router();

router.post("/", validate(orderSchema), controller.createOrder);
router.patch("/:id/cancel", checkObjectId, controller.cancelOrder);

export default router;
