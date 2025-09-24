<?php
declare(strict_types=1);

class HighSchoolSweetheart
{
    public function firstLetter(string $name): string
    {
        $name = trim($name);
        return $name[0];
    }

    public function initial(string $name): string
    {
        return strtoupper($this->firstLetter($name)) . '.';
    }

    public function initials(string $name): string
    {
        $names = explode(' ', $name);
        return "{$this->initial($names[0])} {$this->initial($names[1])}";
    }

    public function pair(string $sweetheart_a, string $sweetheart_b): string
    {
        $sweetheart_a_b =
            '' .
            $this->initials($sweetheart_a) .
            '  +  ' .
            $this->initials($sweetheart_b);
        return <<<END
             ******       ******
           **      **   **      **
         **         ** **         **
        **            *            **
        **                         **
        **     $sweetheart_a_b     **
         **                       **
           **                   **
             **               **
               **           **
                 **       **
                   **   **
                     ***
                      *
        END;
    }
}
