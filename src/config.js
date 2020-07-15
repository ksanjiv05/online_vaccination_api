require("dotenv").config();

const { BASE_URL } = process.env;
//console.log("xxxxxg", BASE_URL);
const config = {
  base_url: "http://localhost:3001",
};
console.log(process.env.BASE_URL);

export default config;
