<?php
declare(strict_types=1);

class SimpleCipher
{
    public string $key;

    public function __construct(?string $key = null)
    {
        if ($key === null) {
            $this->key = $this->generateRandomKey();
            return;
        }
        if (empty($key)) {
            throw new InvalidArgumentException('Key cannot be empty');
        }
        if (preg_match('/[^a-z]/', $key)) {
            throw new InvalidArgumentException(
                'Key can only contain lowercase letters',
            );
        }
        $this->key = $key;
    }

    private function generateRandomKey(): string
    {
        $result = '';
        $characters = 'abcdefghijklmnopqrstuvwxyz';
        $charactersLength = strlen($characters);
        for ($i = 0; $i < 100; $i++) {
            $result .= $characters[rand(0, $charactersLength - 1)];
        }
        return $result;
    }

    public function encode(string $plainText): string
    {
        $cipherText = '';
        for ($i = 0; $i < strlen($plainText); $i++) {
            $plainChar = ord($plainText[$i]) - 97;
            $keyChar = ord($this->key[$i % strlen($this->key)]) - 97;
            $cipherChar = ($plainChar + $keyChar) % 26;
            $cipherText .= chr($cipherChar + 97);
        }
        return $cipherText;
    }

    public function decode(string $cipherText): string
    {
        $plainText = '';
        for ($i = 0; $i < strlen($cipherText); $i++) {
            $cipherChar = ord($cipherText[$i]) - 97;
            $keyChar = ord($this->key[$i % strlen($this->key)]) - 97;
            $plainChar = ($cipherChar - $keyChar + 26) % 26;
            $plainText .= chr($plainChar + 97);
        }
        return $plainText;
    }
}
