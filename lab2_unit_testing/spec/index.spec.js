let Math = require('../index');
var count = {
    currentValues: function () {
      return 1;
    },
  };

describe("testing math utilities", () => {
    let pos_vals;
    let neg_vals;
    let vals;
    let sum_of_vals;


    beforeAll(()=>{
        pos_vals = [0,1,6,5,7,9,5,4,1,2,4,5];
        neg_vals = [-12,-5,-6,-8,-9,-11,-8,-4];
        vals = pos_vals.concat(neg_vals);
        sum_of_vals = vals.reduce((x,y)=> x + y , 0);
    })
    
    
    beforeEach(()=>{
        console.log(vals , sum_of_vals);
    })
    

    afterEach(()=>{
        console.log("excuted");
    })

    afterAll(()=>{
        pos_vals = 0;
        neg_vals = 0;
        vals = 0;
        sum_of_vals = 0
    })
    it("the function resukts must be equal to the sum of the values", () => {
        expect(Math.sum(vals)).toEqual(sum_of_vals);
    });
  
    it("the positive function results should equal to positive values", () => {

        expect(Math.positive(vals)).toEqual(pos_vals);
    });
  });

 
function sumOfValues() {
    return count.currentValues();
}
   
describe("mock and spy", function () {
     
     
     
    it("the spying", function () {
      count.currentValues = jasmine.createSpy(100);
      expect(sumOfValues()).toEqual(count.currentValues());
      expect(count.currentValues).toHaveBeenCalledTimes(1); 
    });
   
});
   