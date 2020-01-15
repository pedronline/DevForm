const axios = require("axios");
const Dev = require("../models/Dev");
const stringToArray = require("../utils/stringToArray");

// regular methods
// index, show, store, update, destroy

module.exports = {
  async index(req, res) {
    const devs = await Dev.find();
    return res.json(devs);
  },

  async store(req, res) {
    const { github_username, techs, latitude, longitude } = req.body;

    let dev = await Dev.findOne({ github_username });

    if (!dev) {
      const response = await axios.get(
        `https://api.github.com/users/${github_username}`
      );

      const { name = login, avatar_url, bio } = response.data;

      const techsArr = stringToArray(techs);

      const location = {
        type: "Point",
        coordinates: [longitude, latitude]
      };

      dev = await Dev.create({
        github_username,
        name,
        avatar_url,
        bio,
        techs: techsArr,
        location
      });
    }

    return res.json(dev);
  },

  async update() {}, //update tudo menos github_username
  async destroy() {} // destruir usuario da DB
};
