// const fs = require('fs');
const { log } = require('console');
const fs = require('fs/promises');

// Write to a file


// Callback version
// fs.writeFile('file1.txt','Hello World',(err) =>
// {
//     if(err) throw err;
//     console.log('File Created');
// });


// Promise version
// fs.writeFile('file2.txt','Kadircann merhabaa')
// .then(() => {
//     console.log('File Created');
// })
// .catch((err) => {
//     console.log(err);
// })


// Sync version
// fs.writeFileSync('file3.txt', 'Kaaadiiiirrrcooon');
// console.log('File created');


// Async/Await version
async function createFile(filename, content)
{
    try
    {
        await fs.writeFile(filename, content);
        console.log('File Created');
    }
    catch(error)
    {
        console.log(error);
    }
}


// createFile('file4.txt','bu da 4. method')

async function readFile(filename)
{

    try
    {
        const data = await fs.readFile(filename,'utf8');
        console.log(data);
    }
    catch(error)
    {
        console.log(error);
    }
}

// Delete File

async function deleteFile(filename)
{
    try
    {
        await fs.unlink(filename);
        console.log(`File ${filename} deleted`);
    }
    catch(error)
    {   
        console.log(error);
    }
}

// deleteFile('file3.txt');

// Rename a file

async function renameFile(oldName, newName)
{
    try
    {
        await fs.rename(oldName, newName)
        console.log(`File ${oldName} renamed to ${newName}`);
    }
    catch(error)
    {
        console.log(error);  
    }
}

// Create a folder
async function createFolder(folderName)
{
    try
    {
        await fs.mkdir(folderName);
        console.log("Folder  created");

    }
    catch(error)
    {
        console.log(error);
    }
}



// renameFile('file1.txt','file5.txt')


// createFolder('folder1');
readFile('file5.txt');
readFile('file2.txt');
// readFile('file3.txt');









