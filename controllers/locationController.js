const Location = require('../models/Location');

const postLocation = (req, res) => {
    let location = new Location(req.body);

    location
        .save()
        .then((result) => {
            res.set('content-location', `/api/v1/locations/${result._id}`);
            res.status(201).json({
                url: `/api/v1/locations/${result._id}`,
                data: result,
            });
        })
        .catch((error) => {
            res.status(500).json(error);
        });
};

const getLocations = (req, res) => {
    Location.find({})
        .exec()
        .then((results) => {
            res.status(200).json(results);
        })
        .catch((error) => {
            res.status(500).json(error);
        });
};

const getLocation = (req, res) => {
    Location.findOne({ _id: req.params.id })
        .exec()
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((error) => {
            res.status(500).json(error);
        });
};

module.exports = {
    postLocation,
    getLocation,
    getLocations,
};
