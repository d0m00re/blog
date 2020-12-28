const assert = require("assert");
const Article = require("./../models/article");

// describve tests
describe("Saving records", () => {
  // creat tests

  it("Save a record to the database", (done) => {
    let art = new Article({
      title: "miaou",
      description: "ok man",
    });

    art.save().then(() => {
      assert(art.isNew === false);
      done(); // inform mocha test is done
    });
  });
});
