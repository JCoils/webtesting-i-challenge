const enhancer = require('./enhancer.js');
// test away!

describe('enhancer.js', () => {



        describe('succeed()', () =>{
            it('Should increase the enhancement by 1 if less than 20', () => {
                // const item = {
                //     durability: 120,
                //     enhancement: 6
                // };
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
            // const item = {
            //     durability: 140,
            //     enhancement: 6
            // };

            expect(enhancer.repair({ durability: 78 }).durability).toBe(100)
            expect(enhancer.repair({ durability: 76 }).durability).toBe(100)
            expect(enhancer.repair({ durability: 77 }).durability).toBe(100)
            expect(enhancer.repair({ durability: 1000 }).durability).toBe(100)
            expect(enhancer.repair({ durability: 374568480 }).durability).toBe(100)
            expect(enhancer.repair({ durability: -7 }).durability).toBe(100)
            expect(enhancer.repair({ durability: 777 }).durability).toBe(100)
        });
    });

});


