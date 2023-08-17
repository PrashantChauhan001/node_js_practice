const bcrypt = require("bcrypt");
const userModel = require("../models/userModel");

const USER_NAMES = [
  "Prashant",
  "Akshat",
  "Anjana",
  "Anjali",
  "Parth",
  "Ankit",
  "Chirag",
  "Divya",
  "Fena",
  "Ishika",
  "Jenni",
  "Ketan",
  "Levi",
  "Monika",
  "Nikki",
  "Minali",
  "Oslo",
  "Viru",
  "Xenin",
  "Zoro",
];

const addMultipleRecords = async (count) => {
  let nameIndex = 0;
  const currentTime = Date.now();
  for (let i = 0; i < count; i++) {
    if (USER_NAMES.length > nameIndex) {
      nameIndex = 0;
    }
    const { username, email, password } = {
      username: `${USER_NAMES[nameIndex]}-${i}-${currentTime}`,
      email: `${USER_NAMES[nameIndex]}${i}${currentTime}.yopmail.com`,
      password: `${USER_NAMES[nameIndex]}@${i}#${nameIndex}`,
    };
    const hashPass = await bcrypt.hash(password, 10);
    const user = await userModel.create({
      username,
      email,
      password: hashPass,
    });
    nameIndex++;
  }
};

module.exports = { addMultipleRecords };
