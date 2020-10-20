//ex4-a) tsc src/ex4.ts
//ex4-b) sim, precisamos passar o caminho do arquivo. No meu caso, já está na pasta source, então utilizaria 'tsc src/ex4.ts'. Caso não estivesse poderia ser 'tsc ex4.ts' na pasta raíz.
//ex4-c) É possível transpilar mais de um arquivo por vez passando todos os caminhos separados por espaço. Por ex.: tsc src/ex5.ts src/ex6.ts
//ex4-d) Ao gerar o tsconfig.json algumas linhas estão comentadas ou diferentes:
// target: es5 ao invés de es6
//sourceMap vem comentado
//outDir e rootDir vêm comentados e sem caminho especificado
//remmoveComments vem comentado
//noImplicitAny vem comentado


type pokemon = {
	name: string,
    types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}