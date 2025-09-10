class Song {
    private readonly animals: { animal: string; line: string }[] = [
        {
            animal: 'fly',
            line: "I don't know why she swallowed the fly. Perhaps she'll die.",
        },
        {
            animal: 'spider',
            line: 'It wriggled and jiggled and tickled inside her.',
        },
        { animal: 'bird', line: 'How absurd to swallow a bird!' },
        { animal: 'cat', line: 'Imagine that, to swallow a cat!' },
        { animal: 'dog', line: 'What a hog, to swallow a dog!' },
        {
            animal: 'goat',
            line: 'Just opened her throat and swallowed a goat!',
        },
        { animal: 'cow', line: "I don't know how she swallowed a cow!" },
        { animal: 'horse', line: "She's dead, of course!" },
    ];

    verse(verseNumber: number): string {
        const index = verseNumber - 1;
        const { animal, line } = this.animals[index];
        let result = `I know an old lady who swallowed a ${animal}.\n${line}\n`;

        if (animal === 'horse') {
            return result;
        }

        if (animal === 'fly') {
            return result;
        }

        for (let i = index; i > 0; i--) {
            const currentAnimal = this.animals[i].animal;
            const nextAnimal = this.animals[i - 1].animal;
            const specialLine =
                nextAnimal === 'spider'
                    ? ' that wriggled and jiggled and tickled inside her'
                    : '';
            result += `She swallowed the ${currentAnimal} `;
            result += `to catch the ${nextAnimal}${specialLine}.\n`;
        }

        result +=
            "I don't know why she swallowed the fly. Perhaps she'll die.\n";
        return result;
    }

    verses(start: number, end: number): string {
        let result = '';
        for (let i = start; i <= end; i++) {
            result += this.verse(i);
            if (i < end) {
                result += '\n';
            }
        }
        return result;
    }
}

const song = new Song();

export function verse(verseNumber: number): string {
    return song.verse(verseNumber);
}

export function verses(start: number, end: number): string {
    return song.verses(start, end);
}
