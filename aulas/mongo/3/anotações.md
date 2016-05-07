- CRUD
	
	- Retrieve || find()
	 
	- Sintaxe

		db.colecao.find({clausulas} , {campos})
		
		* Usos
			
			var query = {propriedade : valor}
			var fields = { propriedade1: true/false , propriedade2: true/false, ...}
			db.collection.find(query , fields)


	- Operadores Aritméticos

		< 	é 	$lt (less than)
		<=	é	$lte (less than or equal)
		>	é	$gt (greater than)
		>=	é	$gte (greater than or equal)

			* Sintaxe

				db.collections.find(
					{
						propriedade: {
							$operador: valor
						}	 
					}, 
					{campos}
				)

	
	- Operadores Lógicos

			OU 	é 	$or
		NOT OU 	é 	$nor
			E 	é 	$and

				* Sintaxe

					db.collections.find(
						{
							$operador: [
								{propriedade1: valor1},
								{propriedade2: valor2},
							]	
						},
						{campos}
					)


	- Operador Exsitencial

			existe 	é 	$exists

				* Sintaxe

					db.collections.find(
						{
							campo: {$exists: true}
						}
					)





