enum Signal {
    Wink = 'wink',
    DoubleBlink = 'double blink',
    CloseYourEyes = 'close your eyes',
    Jump = 'jump',
}

export function commands(number: number) {
    const signals: Signal[] = [];

    number = number & 31;

    if (number & 1) {
        signals.push(Signal.Wink);
    }
    if (number & 2) {
        signals.push(Signal.DoubleBlink);
    }
    if (number & 4) {
        signals.push(Signal.CloseYourEyes);
    }
    if (number & 8) {
        signals.push(Signal.Jump);
    }

    if (number & 16 && signals.length > 0) {
        signals.reverse();
    }

    return signals;
}
