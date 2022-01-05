let habilidades = ['Bash', 'Counter', 'Healing'];

interface Personaje {
    nombre: string;
    hp: number;
    habilidades: string[];
    puebloNatal?: string;
}

const personaje: Personaje = {
    nombre: 'Jerornimo',
    hp: 100,
    habilidades: ['Bash', 'Counter', 'Healing'],
}

personaje.puebloNatal = 'Santiago';

console.log(personaje);
console.table(personaje);