const db = require("../models");
const Volunteer = db.volunteer;

const register = async (req, res, next) => {
    try {
        const newVolunteer = await Volunteer.create({ ... req.body });
        res.status(200).send(newVolunteer);
    } catch (error) {
        next(error)
    }
}

const findAll = async (req, res, next) => {
    try {
        const volunteers = await Volunteer.findAll();
        res.status(200).send(volunteers);
    } catch (error) {
        next(error)
    }
}

const deleteVolunteer = async ( req, res, next) => {
    try {
        const volunteers = await Volunteer.destroy({ where: { id: req.params.id }});
        res.status(200).send(`Volunteer with ${req.params.id} deleted successfully`);
    } catch (error) {
        next(error)
    }
}

const updateVolunteer = async (req,res, next) => {
    try {
        const volunteer = await Volunteer.update({ ...req.body }, { where: { id: req.params.id }})
        res.status(200).send(volunteer);
    } catch (error) {
        next(error)
    }
}

module.exports = { register, findAll, deleteVolunteer, updateVolunteer }