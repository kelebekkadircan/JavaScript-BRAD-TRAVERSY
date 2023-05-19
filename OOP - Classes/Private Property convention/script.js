class Wallet
{   
    #balance = 0;
    #transactions = [];


    // constructor()
    // {
    //     this._balance = 0;
    //     this._transactions = [];
    // }

    deposit(amount)
    {
        this.#processDeposit(amount);
        this.#balance += amount;

    }
    withdraw(amount)
    {   
        if (amount > this.#balance ){
            console.log('Not enough funds');
            return;
        }
        this.#processWithdraw(amount);
        this.#balance -= amount;
    }

    #processDeposit(amount)
    {
        console.log(`Depositing ${amount}`);

        this.#transactions.push({type:'Depositing',amount})
    }

    #processWithdraw(amount)
    {
        console.log(`Withdraw ${amount}`);

        this.#transactions.push({type:'Withdraw',amount})
    }

    get balance()
    {
        return this.#balance;
    }

    get transactions()
    {
        return this.#transactions;
    }

}

// wallet.deposit(300);
// wallet.withdraw(50);

// // console.log(wallet._balance);

// console.log(wallet.Balance);

// console.log(wallet.transactions);

// // _processDeposit(20);

const wallet = new Wallet(); 

wallet.deposit(500);
wallet.withdraw(100);
// wallet.#processWithdraw(200);
console.log(wallet.balance);














