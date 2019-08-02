const fs = require("fs");
module.exports = params => {
  console.log(params);
  fs.writeFile(
    `./products/${params.name}.json`,
    JSON.stringify(params),
    function(err) {
      if (err) {
        return console.log(err);
      }
    }
  );
};
