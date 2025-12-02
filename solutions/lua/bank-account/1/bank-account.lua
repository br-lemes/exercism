local BankAccount = {}

function BankAccount:new()
    return setmetatable({ _balance = 0, _isOpen = false }, { __index = self })
end

function BankAccount:open()
    if self._isOpen then
        error()
    end
    self._balance = 0
    self._isOpen = true
end

function BankAccount:close()
    if not self._isOpen then
        error()
    end
    self._isOpen = false
end

function BankAccount:deposit(amount)
    if not self._isOpen or amount < 0 then
        error()
    end
    self._balance = self._balance + amount
end

function BankAccount:withdraw(amount)
    if not self._isOpen or amount < 0 or amount > self._balance then
        error()
    end
    self._balance = self._balance - amount
end

function BankAccount:balance()
    if not self._isOpen then
        error()
    end
    return self._balance
end


return BankAccount
