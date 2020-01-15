const Dev = require("../models/Dev");
const stringToArray = require("../utils/stringToArray");

module.exports = {
  async index(req, res) {
    const { latitude, longitude, techs } = req.query;
    const techsArr = stringToArray(techs);

    // mongo operators
    const devs = await Dev.find({
      techs: {
        $in: techsArr // resolver lowercase / uppercase
      },
      location: {
        $near: {
          $geometry: {
            type: "Point",
            coordinates: [longitude, latitude]
          },
          $maxDistance: 10000
        }
      }
    });

    return res.json({ devs });
  }
};
