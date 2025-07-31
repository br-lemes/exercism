export function hey(message: string): string {
    message = message.trim()
    if (message === '') {
        return 'Fine. Be that way!'
    }
    if (!message.match(/[a-z]/) && message.match(/[A-Z]/)) {
        if (message.endsWith('?')) {
            return "Calm down, I know what I'm doing!"
        }
        return 'Whoa, chill out!'
    }
    if (message.endsWith('?')) {
        return 'Sure.'
    }
    return 'Whatever.'
}
