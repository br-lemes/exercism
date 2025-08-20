export class DnDCharacter {
    readonly strength: number;
    readonly dexterity: number;
    readonly constitution: number;
    readonly intelligence: number;
    readonly wisdom: number;
    readonly charisma: number;
    readonly hitpoints: number;

    constructor() {
        this.strength = DnDCharacter.generateAbilityScore();
        this.dexterity = DnDCharacter.generateAbilityScore();
        this.constitution = DnDCharacter.generateAbilityScore();
        this.intelligence = DnDCharacter.generateAbilityScore();
        this.wisdom = DnDCharacter.generateAbilityScore();
        this.charisma = DnDCharacter.generateAbilityScore();
        this.hitpoints = 10 + DnDCharacter.getModifierFor(this.constitution);
    }

    public static generateAbilityScore(): number {
        return Math.random() * (18 - 3) + 3;
    }

    public static getModifierFor(abilityValue: number): number {
        return Math.floor((abilityValue - 10) / 2);
    }
}
