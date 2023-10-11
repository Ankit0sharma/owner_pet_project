const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Person = require("../models/person.model");

const registerPerson = async (req, res) => {
  try {
    const { name, email, age, address, password } = req.body;
    // Checking if the person already exists in the database
    const existingPerson = await Person.query().findOne({
      email,
    });
    if (existingPerson) {
      return res.status(400).json({ message: "Person already exists" });
    }
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    personData = await Person.query().insert({
      name,
      email,
      age,
      address,
      password: hashedPassword,
    });
    return res.status(201).json({
      success: true,
      message: "Person created successfully",
      createdPerson: personData,
    });
  } catch (error) {
    return res.status(500).json({
      sucess: false,
      message: error.message,
    });
  }
};

const logInPerson = async (req, res) => {
  try {
    const { email, password } = req.body;
    const person = await Person.query().findOne({ email });
    if (!person) {
      return res.status(401).json({
        success: false,
        message: "Authentication failed",
      });
    }
    const passwordMatch = await bcrypt.compare(password, person.password);
    if (!passwordMatch) {
      return res.status(401).json({
        success: false,
        message: "Authentication failed",
      });
    }
    const token = jwt.sign({ userId: person.id }, process.env.SECRET_KEY, {
      expiresIn: "1h",
    });

    return res.status(200).json({
      success: true,
      message: "User logged in successfully",
      generatedToken: token,
    });
  } catch (error) {
    return res.status(500).json({
      sucess: false,
      message: error.message,
    });
  }
};

module.exports = {
  registerPerson,
  logInPerson,
};
