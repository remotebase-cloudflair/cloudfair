const db = require("../models");
const Victim = db.victim;

const register = async (req, res, next) => {
    try {
        const newvictim = await Victim.create({ ... req.body });
        res.status(200).send(newvictim);
    } catch (error) {
        next(error)
    }
}

const findAll = async (req, res, next) => {
    try {
        const victim = await Victim.findAll();
        res.status(200).send(victim);
    } catch (error) {
        next(error)
    }
}

const deleteVictim = async ( req, res, next) => {
    try {
        const victim = await Victim.destroy({ where: { id: req.params.id }});
        res.status(200).send(`Volunteer with ${req.params.id} deleted successfully`);
    } catch (error) {
        next(error)
    }
}

const updateVictim = async (req,res, next) => {
    try {
        const victim = await Victim.update({ ...req.body }, { where: { id: req.params.id }})
        res.status(200).send(victim);
    } catch (error) {
        next(error)
    }
}

module.exports = { register, findAll, deleteVictim, updateVictim }