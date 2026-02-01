export function format(name: string, number: number) {
    let suffix = 'th';
    if (number % 10 === 1 && number % 100 !== 11) {
        suffix = 'st';
    } else if (number % 10 === 2 && number % 100 !== 12) {
        suffix = 'nd';
    } else if (number % 10 === 3 && number % 100 !== 13) {
        suffix = 'rd';
    }
    return (
        `${name}, you are the ${number}${suffix} customer we serve today.` +
        ' Thank you!'
    );
}
