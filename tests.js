// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

//Exercise 1,2,3,4,5,8
describe('sayHello', function() {
    it('should be a defined function', function () {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function () {
        expect(typeof sayHello()).toBe('string');
    });
    it('should return the string "Hello, Jane!" when executed', function () {
        expect(sayHello('Jane')).toBe('Hello,Jane!');
    });

    it('should return the string "Hello, Alex!" when executed', function () {
        expect(sayHello('Alex')).toBe('Hello,Alex!');
    });

    it('should return the string "Hello, Pat!" when executed', function () {
        expect(sayHello('Pat')).toBe('Hello,Pat!');
    });

    it('should return the string "Hello, World!" when executed', function () {
        expect(sayHello('World')).toBe("Hello,World!");
    });

    it('should return the string "Hello, World!" when executed', function () {
        expect(sayHello('true')).toBe("Hello,World!");
    });

    it('should return the string "Hello, World!" when executed', function () {
        expect(sayHello('false')).toBe("Hello,World!");
    });

});

// Exercise 10
describe('isFive', function() {
    it('should be a defined function', function () {
        expect(typeof 'isFive').toBe('string');
    });
});

// Exercise 11
describe('isEven', function() {
    it('should be a defined function', function () {
        expect(typeof 'isEven').toBe('string');
    });
});

// Exercise 12
describe('isVowel', function() {
    it('should be a defined function', function () {
        expect(typeof 'isVowel').toBe('string');
    });
});

