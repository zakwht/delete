const { unlink } = require("fs");

unlink("delete.js", (e) => {
  if (e) throw e;
})