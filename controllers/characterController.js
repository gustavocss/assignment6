const Character = require('../models/Character.js');

const getCharacters = (req, res, next) => {
    const { type } = req.params;
    if (type === 'heroes') {
        Character.findByType('hero')
            .select('name _id')
            .exec()
            .then((heroes) => {
                res.status(200).json(heroes);
            })
            .catch((error) => {
                res.status(500).json(error);
            });
    } else if (type === 'villains') {
        Character.findByType('villain')
            .exec()
            .then((villains) => {
                res.status(200).json(villains);
            })
            .catch((error) => {
                res.status(500).json(error);
            });
    } else {
        res.status(404).send('Not found');
    }
};

const getCharacter = (req, res) => {
    const { type } = req.params;
    if (type === 'heroes') {
        Character.findOne({ _id: req.params.id })
            .exec()
            .then((result) => {
                newResult = result.toObject();
                delete newResult.id;
                res.status(200).json(newResult);
            })
            .catch((error) => {
                res.status(500).json(error);
            });
    } else if (type === 'villains') {
        Character.findOne({ _id: req.params.id })
            .exec()
            .then((result) => {
                res.status(200).json(result);
            })
            .catch((error) => {
                res.status(500).json(error);
            });
    } else {
        res.status(404).send('Not found');
    }
};

const postCharacter = (req, res) => {
    let { type } = req.params;
    type === 'heroes' ? (req.body.type = 'hero') : (req.body.type = 'villain');
    let newCharacter = new Character(req.body);

    newCharacter
        .save()
        .then((result) => {
            res.set('content-location', `/api/v1/${type}/${result._id}`);
            res.status(201).json({
                url: `/api/v1/${type}/${result._id}`,
                data: result,
            });
        })
        .catch((error) => {
            res.status(500).json(error);
        });
};

module.exports = {
    getCharacter,
    getCharacters,
    postCharacter,
};
