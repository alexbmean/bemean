// upsert

	var query = {name: /squirtle/i}
	var mod = {$set: {active: true}}
	var options = {upsert: true}
	db.pokemons.update(query, mod, options)

	// upsert quando não encontra o documento.

		var query = {name: /PokemonInexistente/i}
		var mod = {$set: {active: true}}
		var options = {upsert: true}
		db.pokemons.update(query, mod, options)	

	// setOnInsert

		var query = {name: /NaoExisteMon/i}
		var mod = {
			$set: {
				active: true,
			},
			$setOnInsert: {
				name: 'NaoExisteMon',
				attack: null,
				defense: null,
				height: null,
				description: 'Sem maiores informações'
			}
		}
		var options = {upsert: true}
		db.pokemons.update(query, mod, options)	

// multi

	var query = {}
	var mod = {$set: {active: false}}
	var options = {multi: true}
	db.pokemons.update(query, mod, options)


// adicionando ataques em todos os pokemons

	var query = {}
	var mod = {$set: {moves: ['investida']}}
	var options = {multi: true}
	db.pokemons.update(query, mod, options)

	var query = {name: /bulbassauro/i}
	var mod = {$push: {moves: 'folha navalha'}}
	db.pokemons.update(query, mod)

// in	

	var query = {moves: {$in: [/choque do trovão/i]}}
	db.pokemons.find(query)

	|| 

	var query = {moves: {$in: [ /choque do trovão/i, /teste/i]}}
	db.pokemons.find(query)

	|| 

	var query = {moves: {$in: [ /choque do trovão/i, /hidro bomba/i]}}
	db.pokemons.find(query)

// nin	

	var query = {moves: {$nin: [/choque do trovão/i]}}
	db.pokemons.find(query)

	|| 

	var query = {moves: {$nin: [/choque do trovão/i , /hidro bomba/i]}}
	db.pokemons.find(query)

// all

	var query = {moves: {$all: ['hidro bomba', 'investida']}}	
	db.pokemons.find(query)

// ne

	var query = {type: {$ne: 'grama'}}
	db.pokemons.find(query)

// not

	var query = {name: {$not: /pikachu/i}}
	db.pokemons.find(query)

// remove
	
	var query = {name: /Squirtle/i}
	db.pokemons.remove(query)
