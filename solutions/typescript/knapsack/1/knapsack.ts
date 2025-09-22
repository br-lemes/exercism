type Item = { weight: number; value: number };

export function maximumValue({
    maximumWeight,
    items,
}: {
    maximumWeight: number;
    items: Item[];
}): number {
    const dp = new Array(maximumWeight + 1).fill(0);

    for (const item of items) {
        for (let w = maximumWeight; w >= item.weight; w--) {
            dp[w] = Math.max(dp[w], dp[w - item.weight] + item.value);
        }
    }

    return dp[maximumWeight];
}
