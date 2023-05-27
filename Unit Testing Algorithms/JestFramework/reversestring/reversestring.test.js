const reverseString = require('./reversestring');

describe('Reverse String', () =>
{
    it ('Should be a function',() =>
    {
        expect(typeof reverseString).toEqual('function');
    });
    
    it ('Should return a string',() =>
    {
        expect(typeof reverseString('hello')).toEqual('string');
    });

    it('should return the reversed string', () =>
    {
        expect(reverseString('hello')).toEqual('olleh');
        expect(reverseString('merhaba')).toEqual('abahrem');
        expect(reverseString('nasilsin')).toEqual('nislisan');
    })


})





