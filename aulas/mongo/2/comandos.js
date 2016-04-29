show collections
	// restaurantes → 10.138MB / 3.910MB

db.restaurantes.count()
	// 25359

db.restaurantes.find({}).count()
	// 25359

use be-mean-instagram
	// switched to db be-mean-instagram

show dbs
	// be-mean → 0.004GB
	// local   → 0.000GB

db.teste.insert({
	nome: 'Alex',
	idade: 32
})
	// Inserted 1 record(s) in 1ms
	// WriteResult({
	//   "nInserted": 1
	// })

var json = {escola: "Webschool" , active: true}
db.teste.insert(json)
	// Inserted 1 record(s) in 1ms
	// WriteResult({
	//   "nInserted": 1
	// })

var pokemons = {
	'name': 'Pikachu',
	'description': 'Rato elétrico bem fofinho',
	'type': 'electric',
	attack: 100,
	height: 0.4
}

db.pokemons.insert(pokemons)	
	// Inserted 1 record(s) in 41ms
	// WriteResult({
	//   "nInserted": 1
	// })

db.pokemons.find()
	// {
	//   "_id": ObjectId("5722bce2ffd9fbce3fdd2a42"),
	//   "name": "Pikachu",
	//   "description": "Rato elétrico bem fofinho",
	//   "type": "electric",
	//   "attack": 100,
	//   "height": 0.4
	// }
	// Fetched 1 record(s) in 5ms

var pokemons2 = [
	{'name': 'Bulbassauro','description': 'Chicote de Trepadeira','type': 'grama','attack': 49,height: 0.4},
	{'name': 'Charmander','description': 'Esse é o cão chupando manda de fofinho','type': 'fogo','attack': 52,height: 0.6},
	{'name': 'Squirtle','description': 'Ejeta água que passarinho não bebe','type': 'água','attack': 48,height: 0.6}
]

db.pokemons.insert(pokemons2)
	// Inserted 1 record(s) in 2ms
	// BulkWriteResult({
	//   "writeErrors": [ ],
	//   "writeConcernErrors": [ ],
	//   "nInserted": 3,
	//   "nUpserted": 0,
	//   "nMatched": 0,
	//   "nModified": 0,
	//   "nRemoved": 0,
	//   "upserted": [ ]
	// })

var pokemon = {'name': 'Caterpie','description': 'Larva Lutadora','type': 'inseto','attack': 30,height: 0.3}
db.pokemons.save(pokemon)

var query = {name: 'Caterpie'}
var f = db.pokemons.find(query)

var f = db.pokemons.findOne(query)
f.defense = 35
db.pokemons.save(f)
	// Updated 1 existing record(s) in 2ms
	// WriteResult({
	//   "nMatched": 1,
	//   "nUpserted": 0,
	//   "nModified": 1
	// })
