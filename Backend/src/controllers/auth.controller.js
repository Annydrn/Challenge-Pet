import { TOKEN_SECRET } from "../config.js";
import { createAccessToken } from "../libs/jwt.js";
import userModel from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// SignUp
export const signup = async (req, res) => {
  const { email, password, firstname, lastname } = req.body;

  try {
    const userFound = await userModel.findOne({ email });
    if (userFound) return res.status(400).json(["El e-mail ya existe"]);

    const passwordHashs = await bcrypt.hash(password, 10); //encriptacion de la contaseña al usar hash para que sean aleatorios los caracteres

    const newUser = new userModel({
      firstname,
      lastname,
      email,
      password: passwordHashs,
    });
    const userSaved = await newUser.save();
    const token = await createAccessToken({ id: userSaved._id });
    res.cookie("token", token);
    res.json({
      id: userSaved._id,
      firstname: userSaved.firstname,
      lastname: userSaved.lastname,
      email: userSaved.email,
      createdAt: userSaved.createdAt,
      updatedAt: userSaved.updatedAt,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Login
export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const userFound = await userModel.findOne({ email: email });
    console.log(userFound);
    if (!userFound)
      return res.status(400).json({ message: "Usuario no encontrado" });

    const isMatch = await bcrypt.compare(password, userFound.password); //va a verificar si la contraseña exista en la base de datos para poder ingresar al login
    //avisara devolviendo un true o false para la verificacion
    if (!isMatch)
      return res.status(400).json({ message: "contraseña invalida" });

    const token = await createAccessToken({ id: userFound._id });

    res.cookie("token", token);
    res.json({
      id: userFound._id,
      firstname: userFound.firstname,
      lastname: userFound.lastname,
      email: userFound.email,
      createdAt: userFound.createdAt,
      updatedAt: userFound.updatedAt,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Logout

export const logout = (req, res) => {
  res.cookie("token", "", { expires: new Date(0) });
  return res.sendStatus(200);
};

export const profile = async (req, res) => {
  const userFound = await userModel.findById(req.user.id);

  if (!userFound)
    return res.status(400).json({ message: "Usuario no encontrado" });

  return res.json({
    id: userFound._id,
    firstname: userFound.firstname,
    lastname: userFound.lastname,
    email: userFound.email,
    createdAt: userFound.createdAt,
    updatedAt: userFound.updatedAt,
  });
  res.send("profile");
};

export const verifyToken = async (req, res) => {
  const { token } = req.cookies;

  if (!token) return res.status(401).json({ message: "No autorizado" });

  jwt.verify(token, TOKEN_SECRET, async (error, user) => {
    if (error) return res.status(401).json({ message: "No autorizado" });
    const userFound = await userModel.findById(user.id);
    if (!userFound) return res.status(401).json({ message: "No autorizado" });

    return res.json({
      id: userFound._id,
      firstname: userFound.firstname,
      email: userFound.email,
    });
  });
};
