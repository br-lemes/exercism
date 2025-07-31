
export const isValid = (isbn) => {
    if (isbn.match(/[^-X0-9]/)) {
        return false
    }
    isbn = isbn.replace(/-/g, '')
    if (isbn.length !== 10) {
        return false
    }
    let sum = 0
    for (let i = 0; i < 10; i++) {
        if (isbn[i] === 'X') {
            if (i !== 9) {
                return false
            }
            sum += 10
            continue
        }
        sum += parseInt(isbn[i]) * (10 - i)
    }
    if (sum % 11 !== 0) {
        return false
    }
    return true
};
