import { flat } from '../../src/flat'
import { reduce } from '../../src/reduce'

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
describe('reduce', function() {
	it("should return 6", () => {
	    expect(reduce([1, 2, 3],(pre,item,index) => {
	    	return pre + item;
	    })).toEqual(6);
	});

	it("should return 7", () => {
	    expect(reduce([1, 2, 3],(pre,item,index) => {
	    	return pre + item;
	    },1)).toEqual(7);
	});

	it("should return 10", () => {
	    expect(reduce([{a:1}, {a:2}, {a:3}, {a:4}],(pre,item,index) => {
	    	return pre + item.a;
	    })).toEqual(10);
	});

	it("should return 11", () => {
	    expect(reduce([{a:1}, {a:2}, {a:3}],(pre,item,index) => {
	    	return pre + item.a;
	    },5)).toEqual(11);
	});
});