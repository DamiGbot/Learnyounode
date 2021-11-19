const fs = require("fs");
const path = require("path");

fs.readdir(process.argv[2], (err, list) => {
	if (err) {
		console.log(err);
	}
	list.forEach((el) => {
		if (path.extname(el) === `.${process.argv[3]}`) {
			console.log(el);
		}
	});
});
