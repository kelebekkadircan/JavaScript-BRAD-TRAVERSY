function anagram(str1, str2)
{
    const aCharmap = buildCharMap(str1)
    const bCharmap = buildCharMap(str2)

    if(Object.keys(aCharmap).length !== Object.keys(bCharmap).length)
    {
        return false
    }
    // console.log(aCharmap,bCharmap);

    for(let char in aCharmap)
    {
        if (aCharmap[char] !== bCharmap[char]){
            return false;
        }
    }

    return true;
}

function buildCharMap(str)
{
    const charMap ={};

    for(let char of str.toLowerCase())
    {
        charMap[char] = charMap[char] + 1 || 1;
    }

    return charMap;
}
// anagram('hello','world');


module.exports=anagram;