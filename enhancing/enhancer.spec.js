const enhancer = require('./enhancer.js');
// test away!

describe('enhancer.js', () => {



        describe('succeed()', () =>{
            it('Should increase the enhancement by 1 if less than 20', () => {
      
                expect(enhancer.succeed({enhancement: 15}).enhancement).toBe(16);
            });

            it("should not change the enhancement level if it is 20", () => {
                const item = { enhancement: 20, durability: 80 };
                const expected = {
                enhancement: 20,
                durability: 80
                };
        
                const actual = enhancer.succeed(item);
        
                expect(actual).toEqual(expected);
        });
    });

    describe('repair()', () => {
        it('restores durability to 100', () => {

            expect(enhancer.repair({ durability: 78 }).durability).toBe(100)
            expect(enhancer.repair({ durability: 76 }).durability).toBe(100)
            expect(enhancer.repair({ durability: 77 }).durability).toBe(100)
            expect(enhancer.repair({ durability: 1000 }).durability).toBe(100)
            expect(enhancer.repair({ durability: 374568480 }).durability).toBe(100)
            expect(enhancer.repair({ durability: -7 }).durability).toBe(100)
            expect(enhancer.repair({ durability: 777 }).durability).toBe(100)
        });
    });

    describe("fail()", () => {
    it("should decrease the durability of an item by 5 if the enhancement is less than 15", () => {
      const item = { name: "sword", enhancement: 14, durability: 80 };
      const expected = {
        name: "sword",
        enhancement: 14,
        durability: 75
      };
      const actual = enhancer.fail(item);

      expect(actual).toEqual(expected);
    });

    it("should decrease the durability of the item by 10 if the enhancement is 15 or more", () => {
      const item = { name: "sword", enhancement: 16, durability: 80 };
      const expected = {
        name: "sword",
        enhancement: 16,
        durability: 70
      };

      const actual = enhancer.fail(item);

      expect(actual).toEqual(expected);
    });

    it("decreases the enhancement level by one if the enhancement level is greater than 16 and durability by 10", () => {
      const item = { name: "sword", enhancement: 17, durability: 80 };
      const expected = {
        name: "sword",
        enhancement: 16,
        durability: 70
      };

      const actual = enhancer.fail(item);

      expect(actual).toEqual(expected);
    });
  });
});


