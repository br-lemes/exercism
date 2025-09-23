export class GradeSchool {
    constructor() {
        /** @type {Map<number, string[]>} */
        this.schoolRoster = new Map();
    }

    roster() {
        const allStudents = [];
        const sortedGrades = Array.from(this.schoolRoster.keys()).sort(
            (a, b) => a - b,
        );

        for (const grade of sortedGrades) {
            const students = this.schoolRoster.get(grade) || [];
            allStudents.push(...students);
        }

        return allStudents;
    }

    /**
     * @param {string} name
     * @param {number} grade
     */
    add(name, grade) {
        for (const students of this.schoolRoster.values()) {
            if (students.includes(name)) {
                return false;
            }
        }

        const studentsInGrade = this.schoolRoster.get(grade) || [];
        studentsInGrade.push(name);
        studentsInGrade.sort();
        this.schoolRoster.set(grade, studentsInGrade);
        return true;
    }

    /** @param {number} grade */
    grade(grade) {
        return [...(this.schoolRoster.get(grade) || [])];
    }
}
