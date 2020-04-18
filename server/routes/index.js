const express = require("express");
const DecorCtrl = require("../controllers/decor-ctrl");
const router = express.Router();

router.post("/decor", DecorCtrl.createDecor);
router.put("/decor/:id", DecorCtrl.updateDecor);
router.delete("/decor/:id", DecorCtrl.deleteDecor);
router.get("/decor/:id", DecorCtrl.getDecorById);
router.get("/decors", DecorCtrl.getDecors);

module.exports = router;
