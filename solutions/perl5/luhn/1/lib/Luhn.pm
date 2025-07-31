package Luhn;

use v5.38;

use Exporter qw<import>;
our @EXPORT_OK = qw<is_luhn_valid>;

sub is_luhn_valid ($number) {
    my $i = length($number);
    my $sum = 0;
    my $count = 0;
    my $double = 0;
    while ($i > 0) {
        $i--;
        my $char = substr($number, $i, 1);
        if ($char eq ' ') {
            next;
        }
        if ($char lt '0' || $char gt '9') {
            return 0;
        }
        my $digit = ord($char) - ord('0');
        if ($double) {
            my $doubled = $digit * 2;
            $sum += $doubled > 9 ? $doubled - 9 : $doubled;
        } else {
            $sum += $digit;
        }
        $double = !$double;
        $count++;
    }
    return $count > 1 && $sum % 10 == 0;
}
