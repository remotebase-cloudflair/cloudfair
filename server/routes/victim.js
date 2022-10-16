const  express = require("express");
const router = express.Router();
const { register, findAll, deleteVictim, updateVictim } = require("../controllers/victim.controller");

//@desc create a volunteer
router.post("/", register);

//@desc find all volunteers
router.get("/", findAll)

//@desc delete a volunteer
router.delete("/:id", deleteVictim)

//@desc update a volunteer
router.patch("/:id", updateVictim)

module.exports = router;