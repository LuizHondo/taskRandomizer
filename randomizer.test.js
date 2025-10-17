const randomizer = require("./randomizer");

it('should return a random number grater than the minimum',() =>{
    const min = 10;

    expect(randomizer()).toBeGreaterThan(min);
})
it('should return a number lesser than the maximum',()=>{
    const max = 80
    expect(randomizer()).toBeLessThan(max); 
})
it('should return a Int value',()=>{
    expect(typeof(randomizer())).toEqual(typeof(10));
})
it('should return a number',()=>{
    expect(typeof randomizer()).toBe("number");
})

