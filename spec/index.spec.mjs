import { getIndex } from '../helper.mjs';

describe("get number index", function() {    
    let keys = ["materials3334", 'adsd'];
    let mapped = keys.map((key) => Number(getIndex(key)));
    it("contains spec with an expectation", function() {        
        expect(mapped[0]).toBe(3334);
        expect(mapped[1]).toBeNaN();
    });
});