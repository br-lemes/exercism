type ComputedEntry = {
    compute: () => number;
    initial?: number;
    checkEquality?: boolean;
};

const callbacks: (() => void)[] = [];
const computed: ComputedEntry[] = [];

export const createInput = (initial: number) => {
    callbacks.length = 0;
    computed.length = 0;

    let curr = initial;
    return [
        () => curr,
        (next: number) => {
            const eqCompute = computed.find((entry) => entry.checkEquality);
            const eqResult = () => eqCompute?.compute();
            const currEq = eqResult();
            curr = next;
            const nextEq = eqResult();
            if (eqCompute && currEq === nextEq) {
                return eqCompute?.initial;
            }
            for (const callback of callbacks) {
                callback();
            }
            return curr;
        },
    ] as const;
};

export const createComputed = (
    compute: () => number,
    initial?: number,
    checkEquality?: boolean,
) => {
    computed.push({ compute, initial, checkEquality });
    return compute;
};

export const createCallback = (callback: () => void) => {
    callbacks.push(callback);
    return () => {
        const callbackPos = callbacks.indexOf(callback);
        if (callbackPos !== -1) callbacks.splice(callbackPos, 1);
    };
};
