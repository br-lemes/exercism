type Student = string;

const DEFAULT_STUDENTS: Student[] = [
    'Alice',
    'Bob',
    'Charlie',
    'David',
    'Eve',
    'Fred',
    'Ginny',
    'Harriet',
    'Ileana',
    'Joseph',
    'Kincaid',
    'Larry',
];

const PLANT_CODES = {
    G: 'grass',
    V: 'violets',
    R: 'radishes',
    C: 'clover',
} as const;

type Plant = (typeof PLANT_CODES)[keyof typeof PLANT_CODES];
type Plants = Plant[];

export class Garden {
    private diagram: string;
    private students: Student[];

    constructor(diagram: string, students = DEFAULT_STUDENTS) {
        this.diagram = diagram;
        this.students = students.sort();
    }

    public plants(student: Student): Plants {
        const offset = this.students.indexOf(student) * 2;

        const [row1, row2] = this.diagram.split('\n');

        return [
            PLANT_CODES[row1[offset] as keyof typeof PLANT_CODES],
            PLANT_CODES[row1[offset + 1] as keyof typeof PLANT_CODES],
            PLANT_CODES[row2[offset] as keyof typeof PLANT_CODES],
            PLANT_CODES[row2[offset + 1] as keyof typeof PLANT_CODES],
        ];
    }
}
