describe("pow", function() {

    it("2 raised to power 3 is 8", function() {
      assert.equal(pow(2, 3), 8);
    });
  
    it("3 raised to power 4 is 81", function() {
      assert.equal(pow(3, 4), 81);
    });

    describe("raises x to power 3", function() {

        function makeTest(x) {
          let expected = x * x * x;
          it(`${x} in the power 3 is ${expected}`, function() {
            assert.equal(pow(x, 3), expected);
          });
        }
    
        for (let x = 1; x <= 5; x++) {
          makeTest(x);
        }
    
    });

    it("for negative n the result is NaN", function() {
        assert.isNaN(pow(2, -1));
      });
    
    it("for non-integer n the result is NaN", function() {
    assert.isNaN(pow(2, 1.5));
    });
  
  });

  describe("test", function() {

    // Mocha usually waits for the tests for 2 seconds before considering them wrong
 
   this.timeout(200000); // With this code we increase this - in this case to 200,000 milliseconds
 
    // This is because of the "alert" function, because if you delay pressing the "OK" button the tests will not pass!
 
   before(() => alert("Testing started – before all tests"));
   after(() => alert("Testing finished – after all tests"));
 
   beforeEach(() => alert("Before a test – enter a test"));
   afterEach(() => alert("After a test – exit a test"));
 
   it('test 1', () => alert(1));
   it('test 2', () => alert(2));
 
 });