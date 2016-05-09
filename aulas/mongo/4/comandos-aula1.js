var poke = {
	name: "Testemon",
	attack: 8000,
	defense: 8000,
	height: 2.1,
	description: "Pokemon de teste"
}

db.pokemons.save(poke)

var query = {name: /testemon/i}
db.pokemons.find(query)
"_id": ObjectId("572e691b836da8b7dbe4e3d3")

var query = {"_id": ObjectId("572e691b836da8b7dbe4e3d3")}
var mod = {description: "Mudei aqui mermaoooo"}
db.pokemons.update(query, mod)
	// db.pokemons.find(query)
	// {
	//   "_id": ObjectId("572e691b836da8b7dbe4e3d3"),
	//   "description": "Mudei aqui mermaoooo"
	// }

// $set
	
	var query = {"_id": ObjectId("572e691b836da8b7dbe4e3d3")}
	var mod = {
		$set: {
			name: "Testemon",
			attack: 8000,
			defense: 8000,
			height: 2.1,
			description: "Pokemon de teste"
		}
	}
	db.pokemons.update(query, mod)		

// $unset
	
	var query = {"_id": ObjectId("572e691b836da8b7dbe4e3d3")}
	var mod = {
		$unset: {
			height: 1
		}
	}
	db.pokemons.update(query, mod)		

// $inc
	
	var query = {"_id": ObjectId("572e691b836da8b7dbe4e3d3")}
	var mod = {
		$inc: {
			attack: -1
		}
	}
	db.pokemons.update(query, mod)		

// $push
	
	var query = {name: /pikachu/i}
	var mod = {
		$push: {
			moves: 'choque do trovão'
		}
	}
	db.pokemons.update(query, mod)		

// $pushAll
	
	var attacks = ['choque elétrico', 'ataque rápido', 'bola elétrica']
	var mod = {
		$pushAll: {
			moves: attacks
		}
	}
	db.pokemons.update(query, mod)		

// $pull
	
	var query = {name: /pikachu/i}
	var mod = {
		$pull: {
			moves: 'bola elétrica'
		}
	}
	db.pokemons.update(query, mod)		

// $pullAll
	
	var query = {name: /pikachu/i}
	var attacks = ['choque elétrico', 'ataque rápido']
	var mod = {
		$pullAll: {
			moves: attacks
		}
	}
	db.pokemons.update(query, mod)		