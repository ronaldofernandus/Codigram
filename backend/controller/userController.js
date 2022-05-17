const { User, Posting } = require("../models");
const { encrypt, decrypt } = require("../helpers/bcrypt");

const { getJwt, getVerification } = require("../helpers/jwtFile");
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
          let get_token = getJwt(login);
          res.status(200).json({
            get_token,
          });
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

  static async updateUser(req, res) {
    try {
      const id = req.params.id;
      const { email, username, password, nama } = req.body;

      let updateUser = await User.update(
        {
          email,
          username,
          password: encrypt(password),
          nama,
        },
        {
          where: { id },
        }
      );

      updateUser[0] === 1
        ? res.status(200).json({
            message: `Data updated`,
          })
        : res.status(403).json({
            message: `Data not updated`,
          });
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async getUsersById(req, res) {
    try {
      const id = +req.params.id;
      let getUsersById = await User.findByPk(id);

      res.status(200).json(getUsersById);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

module.exports = userController;
