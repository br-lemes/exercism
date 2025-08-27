export function degreesOfSeparation(
    familyTree: Record<string, string[]>,
    personA: string,
    personB: string,
): number {
    if (personA === personB) return 0;

    const adj: Record<string, string[]> = {};

    for (const parent in familyTree) {
        if (!adj[parent]) {
            adj[parent] = [];
        }
        const children = familyTree[parent];
        adj[parent].push(...children);

        for (const child of children) {
            if (!adj[child]) {
                adj[child] = [];
            }
            adj[child].push(parent);
            adj[child].push(...children.filter((c) => c !== child));
        }
    }

    const queue: [string, number][] = [[personA, 0]];
    const visited = new Set<string>([personA]);

    while (queue.length > 0) {
        const element = queue.shift();
        if (!element) continue;
        const [current, distance] = element;

        if (current === personB) return distance;

        if (adj[current]) {
            for (const neighbor of adj[current]) {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    queue.push([neighbor, distance + 1]);
                }
            }
        }
    }

    return -1;
}
