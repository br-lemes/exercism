<?php
declare(strict_types=1);

class House
{
    const PARTS = [
        ['subject' => 'the house that Jack built.'],
        ['subject' => 'the malt', 'verb' => 'that lay in'],
        ['subject' => 'the rat', 'verb' => 'that ate'],
        ['subject' => 'the cat', 'verb' => 'that killed'],
        ['subject' => 'the dog', 'verb' => 'that worried'],
        [
            'subject' => 'the cow with the crumpled horn',
            'verb' => 'that tossed',
        ],
        ['subject' => 'the maiden all forlorn', 'verb' => 'that milked'],
        ['subject' => 'the man all tattered and torn', 'verb' => 'that kissed'],
        [
            'subject' => 'the priest all shaven and shorn',
            'verb' => 'that married',
        ],
        [
            'subject' => 'the rooster that crowed in the morn',
            'verb' => 'that woke',
        ],
        ['subject' => 'the farmer sowing his corn', 'verb' => 'that kept'],
        [
            'subject' => 'the horse and the hound and the horn',
            'verb' => 'that belonged to',
        ],
    ];

    public function verse(int $verseNumber): array
    {
        $result = [];
        $result[] = 'This is ' . self::PARTS[$verseNumber - 1]['subject'];
        for ($i = $verseNumber - 2; $i >= 0; $i--) {
            $result[] =
                self::PARTS[$i + 1]['verb'] . ' ' . self::PARTS[$i]['subject'];
        }
        return $result;
    }

    public function verses(int $start, int $end): array
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
}
