import { createAccessToken } from "../libs/jwt.js";
import userModel from "../models/user.model.js";
import bcrypt from "bcryptjs";

// SignUp
export const signup = async (req, res) => {
  const { email, password, firstname, lastname } = req.body;
  console.log(email, password, firstname, lastname);

  try {
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
    res.status(500).json({message:error.message});
  }
};

// Login
export const login = async (req, res) => {
    const { email, password} = req.body;
  
    try {

        const userFound = await User.findOne({email});
        if (!userFound) return res.status(400).json({message:"Usuario no encontrado"})

      const isMatch = await bcrypt.compare(password, userFound.password); //va a verificar si la contraseña exista en la base de datos para poder ingresar al login
  //avisara devolviendo un true o false para la verificacion
  if (!isMatch) return res.status(400).json({ message: "contraseña invalida" });

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
      res.status(500).json({message:error.message});
    }
  };
  