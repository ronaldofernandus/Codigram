const { User } = require("../models");

class postingController {
  static async getPosting(req, res) {
    try {
      let postingController = await User.find({
        include: [User],
      });

      res.status(200).json(postingController);
    } catch (error) {
      res.status(400).json(error);
    }
  }
}
module.exports = postingController;
