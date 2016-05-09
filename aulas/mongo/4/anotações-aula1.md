- CRUD
	
	- Update || update()
	 
	* A difereça entre o save() e o update(), é que no save(), é necessário primeiro buscar o documento (por exemplo deixando-o em uma variável) e o update() isso não é necessário. 

	- Sintaxe

		db.colecao.update(query, modificação, options)

	- Operadores De Modificação
	
		$set
		
		* Modifica e Cria um valor (caso ele não exista), ou um campo

			- Sintaxe

				db.collection.update(
					{
						$set: {
							campo: valor
						}
					}
				)		

		$unset
			
			* Remove os campos 

				- Sintaxe

					db.collection.update(
						{
							$unset: {
								campo: 1 || true
							}
						}
					)


		$inc
			
			* Operador de incremento. Caso o campo não exista ele irá criar e setar o valor. Para decrementar, bastará usar um valor negativo.

				- Sintaxe

					db.collection.update(
						{
							$inc: {
								campo: valor
								||
								campo: -valor
							}
						}
					)

			
	- Operadores De Arrays
	
		$push
		
			* Adiciona um valor ao campo, caso não exista ele cria um novo campo. Se o campo não existir e não for um Array, retora um erro.

			- Sintaxe

				db.collection.update(
					{
						$push: {
							campo: valor
						}
					}
				)

		$pushAll
		
			* Adiciona cada valor de [Array-de-valores], caso o campo seja um "Array" existente, caso não exista ele cria um novo campo. Se o campo não existir e não for um Array, retora um erro.

			- Sintaxe

				db.collection.update(
					{
						$pushAll: {
							campo: [Array-de-Valores]
						}
					}
				)

		$pull
		
			* Retira valores do campo.. Se o campo não existir e não for um Array, retora um erro.

			- Sintaxe

				db.collection.update(
					{
						$pull: {
							campo: valor
						}
					}
				)

		$pullAll
		
			* Retira cada valor de [Array-de-valores], caso o campo seja um "Array" existente, caso não exista não acontece bada. Se o campo não existir e não for um Array, retora um erro.

			- Sintaxe

				db.collection.update(
					{
						$pullAll: {
							campo: [Array-de-Valores]
						}
					}
				)


