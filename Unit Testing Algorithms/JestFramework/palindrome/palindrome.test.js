const palindrome = require('./palindrome');

describe('palindrome',() =>
{
    it ('should be a function',() =>
    {
        expect(typeof palindrome).toEqual('function');
    })
    it ('should return a boolean',() =>
    {
        expect(typeof palindrome('hello')).toEqual('boolean');
    })
    it ('should return true if is a palindrome',() =>
    {
        expect(palindrome('kayak')).toBeTruthy();
        expect(palindrome('rotator')).toBeTruthy();
        expect(palindrome('wow')).toBeTruthy();
    })
    it ('should return false  if is not a palindrome',() =>
    {
        expect(palindrome('merhaba')).toBeFalsy();
        expect(palindrome('naber')).toBeFalsy();
        expect(palindrome('görüsürüz')).toBeFalsy();
    })
})

