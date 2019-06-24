const enhancer = require('./enhancer.js');
// test away!

describe('enhancer.js', () => {



        describe('succeed()', () =>{
            it('Should increase the enhancement by 1 if less than 20', () => {
                const item = {
                    durability: 100,
                    enhancement: 3
                };
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

    
});


