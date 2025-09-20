type Player = 'X' | 'O';

export class Board {
    private board: string[][];
    private readonly width: number;
    private readonly height: number;

    constructor(board: string[]) {
        this.board = board.map((row) =>
            row.split('').filter((char) => char !== ' '),
        );
        this.height = this.board.length;
        this.width = this.board[0].length;
    }

    public winner(): string {
        if (this.hasPath('O')) {
            return 'O';
        }
        if (this.hasPath('X')) {
            return 'X';
        }
        return '';
    }

    private hasPath(player: Player): boolean {
        const visited = new Set<string>();
        const startNodes = this.getStartNodes(player);

        for (const startNode of startNodes) {
            if (this.dfs(startNode, player, visited)) {
                return true;
            }
        }

        return false;
    }

    private getStartNodes(player: Player): [number, number][] {
        const startNodes: [number, number][] = [];
        if (player === 'O') {
            for (let j = 0; j < this.width; j++) {
                if (this.board[0][j] === 'O') {
                    startNodes.push([0, j]);
                }
            }
        } else {
            for (let i = 0; i < this.height; i++) {
                if (this.board[i][0] === 'X') {
                    startNodes.push([i, 0]);
                }
            }
        }
        return startNodes;
    }

    private dfs(
        node: [number, number],
        player: Player,
        visited: Set<string>,
    ): boolean {
        const [row, col] = node;
        const key = `${row},${col}`;

        if (visited.has(key)) {
            return false;
        }
        visited.add(key);

        if (this.isEndNode(node, player)) {
            return true;
        }

        for (const neighbor of this.getNeighbors(node)) {
            const [nRow, nCol] = neighbor;
            if (
                this.board[nRow] &&
                this.board[nRow][nCol] === player &&
                this.dfs(neighbor, player, visited)
            ) {
                return true;
            }
        }

        return false;
    }

    private isEndNode(node: [number, number], player: Player): boolean {
        const [row, col] = node;
        if (player === 'O') {
            return row === this.height - 1;
        }
        return col === this.width - 1;
    }

    private getNeighbors(node: [number, number]): [number, number][] {
        const [row, col] = node;
        const neighbors: [number, number][] = [];

        if (row > 0) {
            neighbors.push([row - 1, col]);
        }
        if (row > 0 && col < this.width - 1) {
            neighbors.push([row - 1, col + 1]);
        }
        if (col > 0) {
            neighbors.push([row, col - 1]);
        }
        if (col < this.width - 1) {
            neighbors.push([row, col + 1]);
        }
        if (row < this.height - 1 && col > 0) {
            neighbors.push([row + 1, col - 1]);
        }
        if (row < this.height - 1) {
            neighbors.push([row + 1, col]);
        }

        return neighbors;
    }
}
