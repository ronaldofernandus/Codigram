const { Posting, User } = require("../models");
const { getVerification } = require("../helpers/jwtFile");

class postingController {
  static async getPosting(req, res) {
    try {
      let getPosting = await Posting.findAll({
        include: [User],
      });

      res.status(200).json(getPosting);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async createPosting(req, res) {
    try {
      const { image, title, caption } = req.body;
      // console.log(req.headers);
      const getToken = req.headers.get_token;

      let UserId = getVerification(getToken).id;
      console.log(UserId);
      let createPosting = await Posting.create({
        image,
        title,
        caption,
        UserId,
      });
      res.status(201).json(createPosting);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
module.exports = postingController;
