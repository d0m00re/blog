const assert = require("assert");
const Article = require("./../models/article");

// Describe our tests
describe("Finding records", () => {
  // Add a character to the db before each tests
  let char;
  beforeEach((done) => {
    char = new Article({
      title: "testouille",
      description: "miaouu",
    });

    char.save().then(() => {
      done();
    });
  });
  // Create tests
  it("Finds one record from the database", (done) => {
    Article.findOne({ title: "testouille" }).then((result) => {
      assert(result.title === "testouille");
      done();
    });
  });

  it('Finds one record by ID from the database', (done) => {
    Article.findOne({_id : char._id}).then((result) => {
        assert(result._id.toString() === char._id.toString());
        done();
    })
})
});
