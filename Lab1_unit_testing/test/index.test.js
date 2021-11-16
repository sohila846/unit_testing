import { capitalizeText, createArray} from "../index.js";
import { expect,assert,should } from "chai";
let x =1;
describe("testing capitilize texts" , function(){
    

    it("testing the returned value is string" , ()=>{
        expect("test return type",capitalizeText("sohila")).to.be.a("string")
    });

    it("the returned are capitilized letters",()=>{
        assert.equal(capitalizeText("sohila"),"SOHILA");
    })

    it("check the return value",()=>{
        assert.notEqual(capitalizeText("iti"),"HELLO");
    })
    context("with args that aren't string ",()=>{
        expect(()=>{
            capitalizeText(1)
        }).to.throw(TypeError,"parameter should be string");
    })

})

describe(" test if it creates array",()=>{
    beforeEach(done => setTimeout(done, 500));

    it("the returned value is an array",()=>{
        assert.isArray(createArray(5));
    });

    it("the returned array is of a certail length and includes 1",()=>{
        expect(createArray(3)).to.have.lengthOf(3).that.includes(1);
    });
})