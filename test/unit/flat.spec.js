import { flat } from '../../src/flat'
describe('flat', function() {
    // 当参数只有一层数组时
	it("should return [1,2,3]", () => {
	    expect(flat([1, 2, [3]])).toEqual([1,2,3]);
	});
	// 当参数有多层数组时
	it("should return [1, 2, [3, [4, [5]]],9]", () => {
	    expect(flat([1, 2, [3, [4, [5]]],9])).toEqual([1, 2, 3, 4, 5,9]);
	});
	// 当参数有空数组时
	it("should return [1, 2, [3, [4, []]],9,[4,[6]],[[2]]]", () => {
	    expect(flat([1, 2, [3, [4, []]],9,[4,[6]],[[2]]])).toEqual([1, 2, 3, 4,9,4,6,2]);
	});
});
