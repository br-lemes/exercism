export class GradeSchool {
    private schoolRoster: Map<number, string[]> = new Map();

    roster(): Record<number, string[]> {
        const rosterCopy: Record<number, string[]> = {};
        const sortedGrades = Array.from(this.schoolRoster.keys()).sort((a, b) => a - b);

        for (const grade of sortedGrades) {
            rosterCopy[grade] = [...(this.schoolRoster.get(grade) || [])];
        }

        return rosterCopy;
    }

    add(name: string, grade: number): void {
        this.removeStudent(name);
        const students = this.schoolRoster.get(grade) || [];
        students.push(name);
        students.sort();
        this.schoolRoster.set(grade, students);
    }

    grade(grade: number): string[] {
        return [...(this.schoolRoster.get(grade) || [])];
    }

    private removeStudent(name: string): void {
        for (const [grade, students] of this.schoolRoster.entries()) {
            const studentIndex = students.indexOf(name);
            if (studentIndex !== -1) {
                students.splice(studentIndex, 1);
                if (students.length === 0) {
                    this.schoolRoster.delete(grade);
                }
                return;
            }
        }
    }
}
