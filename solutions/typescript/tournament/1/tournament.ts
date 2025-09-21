class Team {
    name: string;
    matches: number;
    wins: number;
    draws: number;
    losses: number;
    points: number;

    constructor(name: string) {
        this.name = name;
        this.matches = 0;
        this.wins = 0;
        this.draws = 0;
        this.losses = 0;
        this.points = 0;
    }

    win() {
        this.matches++;
        this.wins++;
        this.points += 3;
    }

    draw() {
        this.matches++;
        this.draws++;
        this.points++;
    }

    loss() {
        this.matches++;
        this.losses++;
    }
}

export class Tournament {
    public tally(input: string): string {
        const teams: { [key: string]: Team } = {};

        if (input === '') {
            return 'Team                           | MP |  W |  D |  L |  P';
        }

        const matches = input.split('\n');

        for (const match of matches) {
            const [team1Name, team2Name, result] = match.split(';');

            if (!teams[team1Name]) {
                teams[team1Name] = new Team(team1Name);
            }
            if (!teams[team2Name]) {
                teams[team2Name] = new Team(team2Name);
            }

            const team1 = teams[team1Name];
            const team2 = teams[team2Name];

            switch (result) {
                case 'win':
                    team1.win();
                    team2.loss();
                    break;
                case 'draw':
                    team1.draw();
                    team2.draw();
                    break;
                case 'loss':
                    team1.loss();
                    team2.win();
                    break;
            }
        }

        const sortedTeams = Object.values(teams).sort((a, b) => {
            if (a.points !== b.points) {
                return b.points - a.points;
            }
            return a.name.localeCompare(b.name);
        });

        let output = 'Team                           | MP |  W |  D |  L |  P';

        for (const team of sortedTeams) {
            const name = team.name.padEnd(30);
            const mp = team.matches.toString().padStart(2);
            const w = team.wins.toString().padStart(2);
            const d = team.draws.toString().padStart(2);
            const l = team.losses.toString().padStart(2);
            const p = team.points.toString().padStart(2);
            output += `\n${name} | ${mp} | ${w} | ${d} | ${l} | ${p}`;
        }

        return output;
    }
}
