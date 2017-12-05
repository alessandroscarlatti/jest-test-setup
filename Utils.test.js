const Utils = require('./Utils');

test("adding 1 + 2 gives 3", () => {
	expect(Utils.add(1, 2)).toBe(3);
});

test("adding 2 + 2 gives 4", () => {
	expect(Utils.add(2, 2)).toBe(4);
});
