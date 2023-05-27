// const app = 
// {   
//     nextIndex: 0,
//     teams: ['red sox', 'yankees', ' astros','dodgers'],
//     next()
//     {
//         if (this.nextIndex >= this.teams.length)
//         {
//             return {done: true}
//         }

//         const returnValue = { value: this.teams[this.nextIndex], done: false}
//         this.nextIndex++;
//         return returnValue;
//     }
// }


// console.log(app.next());
// console.log(app.next());
// console.log(app.next());
// console.log(app.next());
// console.log(app.next());

const app = 
{
    teams:['red sox','yankees','astros','dodgers'],
    [Symbol.iterator]: function ()
    {
        let nextIndex = 0;
        return
        {
            next: () => 
            {
                return nextIndex < this.teams.length
                ? {value: this.teams[nextIndex++], done:false}
                : {done:true} 
            }

        
        }
    },

};

const iterator = app[Symbol.iterator]();


// console.log(a.next().value)



for(const team of app)
{
    console.log(team);
}




