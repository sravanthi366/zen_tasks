class Bank{
    code
    address
    manages()
    maintains()

}
class ATM{
    location
    managedby
    identifies()
    transactions()
    
}
class ATMTransaction{
    transactionid
    date
    type
    account
    postbalance
    modifies()

}
class Account{
    number
    balance
    deposit()
    withdraw()
    createtransaction()
    
}
class Customer{
    name
    address
    DOB
    Card_no
    pin
    verifypassword()
}
class SavingAccount{
    account_no
     balance
}
class CurrentAccount{
    account_no
     balance
     withdraw()
}