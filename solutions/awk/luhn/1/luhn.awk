{
    i = length($0)
    sum = 0
    count = 0
    double = 0
    while (i > 0) {
        char = substr($0, i, 1)
        i -= 1
        if (char == " ") {
            continue;
        }
        if (char < 0 || char > 9) {
            print "false"
            exit
        }
        if (double) {
            doubled = char * 2
            sum += (doubled > 9) ? doubled - 9 : doubled
        } else {
            sum += char
        }
        double = !double
        count += 1
    }
    print ((count > 1) && (sum % 10 == 0)) ? "true" : "false"
}
