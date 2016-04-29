var query = {name : 'Pikachu'}
db.pokemons.find(query)
	// {
	//   "_id": ObjectId("5722bce2ffd9fbce3fdd2a42"),
	//   "name": "Pikachu",
	//   "description": "Rato elétrico bem fofinho",
	//   "type": "electric",
	//   "attack": 55,
	//   "height": 0.4
	// }

var query = {name : 'Pikachu'}
var fields = {name: 1, description: 1}
db.pokemons.find(query , fields)
	// {
	//   "_id": ObjectId("5722bce2ffd9fbce3fdd2a42"),
	//   "name": "Pikachu",
	//   "description": "Rato elétrico bem fofinho"
	// }

// Aritiméticos

var query = {height: {$lt: 0.5}}
var query = {height: {$lte: 0.5}}
var query = {height: {$gt: 0.5}}	
var query = {height: {$gte: 0.5}}	

// Lógicos

var query = {height: {$gte: 0.5}}
var query = {$or: [{name: 'Charmander'}, {attack: 48}]}
var query = {$nor: [{name: 'Charmander'}, {attack: 48}]}
var query = {$and: [{name: 'Pikachu'}, {attack: 55}]}