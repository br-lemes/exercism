<?php
declare(strict_types=1);

class Bob
{
    public function respondTo(string $str): string
    {
        $str = trim($str);
        if (empty($str)) {
            return 'Fine. Be that way!';
        }
        if (!preg_match('/[a-z]/', $str) && preg_match('/[A-Z]/', $str)) {
            if (substr($str, -1) === '?') {
                return 'Calm down, I know what I\'m doing!';
            }
            return 'Whoa, chill out!';
        }
        if (substr($str, -1) === '?') {
            return 'Sure.';
        }
        return 'Whatever.';
    }
}
