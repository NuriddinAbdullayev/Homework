import express from "express";
import * as controller from "../controllers/book.controller.js";
import validate from "../middlewares/validate.js";
import { bookSchema } from "../validators/book.validator.js";
import isAdmin from "../middlewares/isAdmin.js";
import checkObjectId from "../middlewares/checkObjectId.js";

const router = express.Router();

router.get("/", controller.getAll);
router.get("/:id", checkObjectId, controller.getOne);

router.post("/", isAdmin, validate(bookSchema), controller.create);
router.put("/:id", isAdmin, checkObjectId, controller.update);
router.delete("/:id", isAdmin, checkObjectId, controller.remove);

export default router;
