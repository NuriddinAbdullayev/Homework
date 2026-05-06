const User = require("../models/Users");
const {registerSchema, loginSchema} = require("../validators/userValidator");
const bcrypt = require("bcrypt");

// exports.createUser = async (req, res) => {
//   try {
//     const user = await User.create(req.body);
//     res.status(201).json(user);
//   } catch(error) {
//     res.status(500).json({error: error.message});
//   }
// }

exports.registerUser = async (req, res) => {
  try {
    const validation = registerSchema.safeParse(req.body);

    if (!validation.success) {
      return res.status(400).json({message: error});
    }

    const {name, surname, age, email, password} = req.body;

    const existingEmail = await User.findOne({email});

    if (existingEmail) {
      return res.status(400).json({message: "User is registired!"});
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      name,
      surname,
      age,
      email,
      password: hashedPassword
    });

    res.status(201).json({message: "User registered", user: newUser});

  } catch (error) {
    res.status(500).json({message: "server error"})
  }
}

exports.loginUser = async (req, res) => {
  try {
    const validation = registerSchema.safeParse(req.body);

    if (!validation.success) {
      return res.status(400).json({message: error});
    }

    const {email, password} = req.body; 

    const existingEmail = await User.findone({email});

    const isMatch = await bcrypt.compare(
      password,
      user.password
    );

    if (!isMatch) {
      return res.status(400).json({message: "User is not found!"});
    }

    if (!existingEmail) {
      res.status(400).json({message: "Bu email mavjud emas!"});
    }

    res.status(200).json({message: "Login successfully1"});
  } catch (error) {
    
  }
}

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch(error) {
    res.status(500).json({ error: error.message });
  }
}