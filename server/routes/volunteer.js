const  express = require("express");
const router = express.Router();
const { register, findAll, deleteVolunteer, updateVolunteer } = require("../controllers/volunteer.controller.js");

//@desc create a volunteer
router.post("/", register);

//@desc find all volunteers
router.get("/", findAll)

//@desc delete a volunteer
router.delete("/:id", deleteVolunteer)

//@desc update a volunteer
router.patch("/:id", updateVolunteer)

module.exports = router;