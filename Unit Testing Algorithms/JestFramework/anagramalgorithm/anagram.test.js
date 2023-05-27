const anagram = require('./anagram');

describe('Anagram Algorithm', () => 
{
    it ('should return function',() =>
    {
        expect(typeof anagram).toEqual('function');
    })

    it ('should return boolean',() =>
    {
        expect(typeof anagram('ram','arm')).toEqual('boolean');
    })

    it ('should return true if it is anagram',() =>
    {
        expect(anagram('ram','arm')).toBeTruthy();
        expect(anagram('cinema','iceman')).toBeTruthy();
        expect(anagram('god','dog')).toBeTruthy();
    })

    it ('should return false if it is not an anagram',() =>
    {
        expect(anagram('hello','arm')).toBeFalsy();
        expect(anagram('malamine','iceman')).toBeFalsy();
        expect(anagram('essebo','dog')).toBeFalsy();
    })
})


