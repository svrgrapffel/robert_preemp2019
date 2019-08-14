const fs = require("fs");
module.exports = params => {
  console.log(params.name);
  fs.readFile(
    `./products/${params.name}.json`,

    function(err, data) {
      if (err) {
        return console.log(err);
      }
      console.log(JSON.parse(data));
    }
  );
};
