const fs = require("fs");

const files = fs.readdirSync("./images");

const obj = files.map((image) => ({ src: "/images/" + image }));

console.log(obj);
