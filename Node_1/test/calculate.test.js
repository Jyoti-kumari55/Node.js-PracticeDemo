const assert = require("assert");
const { operation } = require("../Calculate");

describe("Testing part of the node_1", function(){
    it("add operation testing", function() {
        const result = operation(5,6,"add")
        assert.equal(result, 11)
    });

});
