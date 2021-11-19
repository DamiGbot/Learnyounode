// import directory from "./mymodule";
const directory = require("./mymodule");

const dir = process.argv[2];
const ext = process.argv[3];

directory(dir, ext, (err, list) => {
	if (err) {
		return console.error(err);
	}
	list.forEach((el) => console.log(el));
});
