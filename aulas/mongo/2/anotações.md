
- mongod nome_databese 
	Para ir direto pra a data base sem que se passe para db test

- formatos de inserção na collection com insert

	db.test.insert({})

		|| ou

	var json = {}
	db.test.insert(json)

- formatos de inserção na collection com save que Insere e Salva ao mesmo tempo

	var obj = {}
	db.test.save(obj)


- CRUD
	
	- C - Create


- Alteração de documento com uma query de busca e depois com save

	var query = {campo: valor}
	var f = db.dbName.find(query)

		|| para poder inserir propriedades no documento

			var f = db.dbName.findOne(query)
			f.propertyToInsert = valor
			db.dbName.save(f)