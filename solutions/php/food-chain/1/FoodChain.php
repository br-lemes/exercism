<?php
declare(strict_types=1);

class FoodChain
{
    const ANIMALS = [
        ['fly', "I don't know why she swallowed the fly. Perhaps she'll die."],
        ['spider', 'It wriggled and jiggled and tickled inside her.'],
        ['bird', 'How absurd to swallow a bird!'],
        ['cat', 'Imagine that, to swallow a cat!'],
        ['dog', 'What a hog, to swallow a dog!'],
        ['goat', 'Just opened her throat and swallowed a goat!'],
        ['cow', "I don't know how she swallowed a cow!"],
        ['horse', "She's dead, of course!"],
    ];

    function verse(int $verseNumber): array
    {
        $index = $verseNumber - 1;
        [$animal, $line] = self::ANIMALS[$index];

        $result = ["I know an old lady who swallowed a {$animal}.", $line];

        if ($animal === 'horse') {
            return $result;
        }

        if ($animal === 'fly') {
            return $result;
        }

        for ($i = $index; $i > 0; $i--) {
            $currentAnimal = self::ANIMALS[$i][0];
            $nextAnimal = self::ANIMALS[$i - 1][0];
            $specialLine =
                $nextAnimal === 'spider'
                    ? ' that wriggled and jiggled and tickled inside her'
                    : '';
            $result[] = sprintf(
                'She swallowed the %s to catch the %s%s.',
                $currentAnimal,
                $nextAnimal,
                $specialLine,
            );
        }

        $result[] =
            "I don't know why she swallowed the fly. Perhaps she'll die.";
        return $result;
    }

    function verses(int $start, int $end): array
    {
        $result = [];
        for ($i = $start; $i <= $end; $i++) {
            $result = array_merge($result, $this->verse($i));
            if ($i < $end) {
                $result[] = '';
            }
        }
        return $result;
    }

    function song(): array
    {
        return $this->verses(1, count(self::ANIMALS));
    }
}
