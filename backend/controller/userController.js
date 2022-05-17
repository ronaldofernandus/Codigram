const { User } = require("../models");
const { encrypt, decrypt } = require("../helpers/bcrypt");
class userController {
  static async getUsers(req, res) {
    try {
      let getUsers = await User.findAll({});
      res.status(200).json(getUsers);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  static async register(req, res) {
    try {
      const { email, username, password, nama } = req.body;
      let register = await User.create({
        email,
        username,
        password: encrypt(password),
        nama,
      });
      res.status(201).json(register);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async login(req, res) {
    try {
      const { username, password } = req.body;
      let login = await User.findOne({
        where: {
          username,
        },
      });
      if (login) {
        if (decrypt(password, login.password)) {
          res.status(200).json(login);
        } else {
          res.status(403).json({
            message: "Invalid password",
          });
        }
      } else {
        res.status(404).json({
          message: "Not found",
        });
      }
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

module.exports = userController;
