const fs = require("fs");
const path = require("path");

const directory = (dir, ext, callback) => {
	fs.readdir(dir, (err, list) => {
		if (err) {
			return callback(err);
		}

		const data = list.filter((el) => path.extname(el) === `.${ext}`);
		callback(null, data);
	});
};

module.exports = directory;
