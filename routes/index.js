const router = require("express").Router({ mergeParams: true });

const characterRouter = require("./characters.js");
const locationRouter = require("./locations.js");

router.use("/locations", locationRouter);
router.use("/", characterRouter);

module.exports = router;
