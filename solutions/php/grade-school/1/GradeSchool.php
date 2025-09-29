<?php
declare(strict_types=1);

class GradeSchool
{
    private array $students = [];

    function add(string $name, int $grade): bool
    {
        if (isset($this->students[$name])) {
            return false;
        }
        $this->students[$name] = $grade;
        return true;
    }

    function grade(int $grade): array
    {
        $students = array_keys($this->students, $grade);
        sort($students);
        return $students;
    }

    function roster(): array
    {
        $students = array_keys($this->students);
        usort($students, function (string $a, string $b) {
            $cmp = $this->students[$a] <=> $this->students[$b];
            return $cmp !== 0 ? $cmp : $a <=> $b;
        });
        return $students;
    }
}
