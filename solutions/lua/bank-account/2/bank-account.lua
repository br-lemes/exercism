local BankAccount = {}

function BankAccount:new()
    return setmetatable({ _balance = 0, _isOpen = false }, { __index = self })
end

function BankAccount:open()
    assert(not self._isOpen)
    self._balance = 0
    self._isOpen = true
end

function BankAccount:close()
    assert(self._isOpen)
    self._isOpen = false
end

function BankAccount:deposit(amount)
    assert(self._isOpen)
    assert(amount >= 0)
    self._balance = self._balance + amount
end

function BankAccount:withdraw(amount)
    assert(self._isOpen)
    assert(amount >= 0)
    assert(amount <= self._balance)
    self._balance = self._balance - amount
end

function BankAccount:balance()
    assert(self._isOpen)
    return self._balance
end


return BankAccount
