<?php
declare(strict_types=1);

class KindergartenGarden
{
    const STUDENTS = [
        'Alice',
        'Bob',
        'Charlie',
        'David',
        'Eve',
        'Fred',
        'Ginny',
        'Harriet',
        'Ileana',
        'Joseph',
        'Kincaid',
        'Larry',
    ];

    const PLANT_CODES = [
        'G' => 'grass',
        'C' => 'clover',
        'R' => 'radishes',
        'V' => 'violets',
    ];

    private string $diagram;

    public function __construct(string $diagram)
    {
        $this->diagram = $diagram;
    }

    public function plants(string $student): array
    {
        $offset = array_search($student, self::STUDENTS) * 2;
        [$row1, $row2] = explode("\n", $this->diagram);
        return [
            self::PLANT_CODES[$row1[$offset]],
            self::PLANT_CODES[$row1[$offset + 1]],
            self::PLANT_CODES[$row2[$offset]],
            self::PLANT_CODES[$row2[$offset + 1]],
        ];
    }
}
