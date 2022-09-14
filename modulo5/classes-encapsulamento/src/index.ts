import app from "./app"

// Exercicio 1 

// a) O construtor serve para criamos variaveis de forma pratica utilizando o padrão da classe. Chamamos usando const nomeDaVariavel: classe = new nomeDaVariavel.

// b) 

class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];

    constructor(
        cpf: string,
        name: string,
        age: number,
        transactions: Transaction[] = []
    ) {
        console.log("Chamando o construtor da classe UserAccount")
        this.cpf = cpf;
        this.name = name;
        this.age = age;
    }
    public getCpf() : string {
        return this.cpf
    
       }
    
       public getName(): string {
        return this.name
       }
    
       public getAge(): number {
        return this.age
       }
    
       public setCpf(cpf: string) {
        this.cpf = cpf
       }
    
       public setName(name: string) {
        this.name = name
       }
    
       public setAge(age: number) {
        this.age = age
       }
    
       public getTransactions(){
        return this.transactions
       }
}

const usuario: UserAccount = 
new UserAccount("Alice", "Alice no país das maravilhas", 22)

console.log(usuario)

// R: o tipo transaction ainda não foi criado, por tanto nenhuma vez.

// c) Atraves de getters and setters



// Exercicio 2

class Transaction {
    private date: string;
    private value: number;
    private description: string;

    constructor(date: string, value: number, description: string) {
        this.date = date;
        this.value = value;
        this.description = description
    }
    public getDate(){
        return this.date
    }
    public getValue(){
        return this.value
    }
    public getDescription(){
        return this.description
    }
    
    public setDate(date: string){
        this.date = date
    }
    public setValue(value: number){
        this.value = value
    }
    public setDescription(description: string){
        this.description = description
    }
}

const transacao1: Transaction = 
new Transaction("05/09/2022", 500, "empréstimo")

console.log(transacao1)

const usuario2: UserAccount = 
new UserAccount("Pedro", "Pedro123", 22, [transacao1])

console.log(usuario)

// Exercicio 3

class Bank {
    private accounts: UserAccount[];
  
    constructor(accounts: UserAccount[]) {
      this.accounts = accounts;
    }
    
    public setAccounts(accounts: UserAccount[]){
        this.accounts = accounts
    }

    public getAccounts(){
        return this.accounts
    }
  }
  
  export const contaJorge: Bank = new Bank([usuario2])
