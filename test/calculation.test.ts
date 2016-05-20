import { add, multiply } from "../src/scripts/calculation";

describe("Calculations", () => {
    describe("Add", () => {
        it("should return 0 when no arguments provided", () => {
            chai.assert.strictEqual(add(), 0);
        });

        it("should return 1 when 1 is provided as argument", () => {
            chai.assert.strictEqual(add(1), 1);
        });

        it("should return 10 when 1, 2, 3, and 4 are provided as arguments", () => {
            chai.assert.strictEqual(add(1, 2, 3, 4), 10);
        });
    });

    describe("Multiply", () => {
        it("should return 0 when no arguments provided", () => {
            chai.assert.strictEqual(multiply(), 1);
        });

        it("should return 1 when 1 is provided as argument", () => {
            chai.assert.strictEqual(multiply(1), 1);
        });

        it("should return 24 when 1, 2, 3, and 4 are provided as arguments", () => {
            chai.assert.strictEqual(multiply(1, 2, 3, 4), 24);
        });
    });
});
