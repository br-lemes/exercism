const parts = [
    { subject: 'the house that Jack built.' },
    { subject: 'the malt', verb: 'that lay in' },
    { subject: 'the rat', verb: 'that ate' },
    { subject: 'the cat', verb: 'that killed' },
    { subject: 'the dog', verb: 'that worried' },
    { subject: 'the cow with the crumpled horn', verb: 'that tossed' },
    { subject: 'the maiden all forlorn', verb: 'that milked' },
    { subject: 'the man all tattered and torn', verb: 'that kissed' },
    { subject: 'the priest all shaven and shorn', verb: 'that married' },
    { subject: 'the rooster that crowed in the morn', verb: 'that woke' },
    { subject: 'the farmer sowing his corn', verb: 'that kept' },
    {
        subject: 'the horse and the hound and the horn',
        verb: 'that belonged to',
    },
];

export function verse(n: number): string[] {
    const result: string[] = [];
    result.push(`This is ${parts[n - 1].subject}`);

    for (let i = n - 2; i >= 0; i--) {
        result.push(`${parts[i + 1].verb} ${parts[i].subject}`);
    }

    return result;
}

export function verses(start: number, end: number): string[] {
    let result: string[] = [];
    for (let i = start; i <= end; i++) {
        result = result.concat(verse(i));
        if (i < end) {
            result.push('');
        }
    }
    return result;
}
