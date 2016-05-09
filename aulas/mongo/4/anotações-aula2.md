- CRUD
	
	- Update || update()
	 
	* A difereça entre o save() e o update(), é que no save(), é necessário primeiro buscar o documento (por exemplo deixando-o em uma variável) e o update() isso não é necessário. 

	- Sintaxe

		db.colecao.update(query, modificação, options)

	- Options
	
	* Serve para configurar valores do padrão para o udpate.

		- Sintaxe

			{
				upsert: bolean,
				multi: boolean,
				writeConcern: document
			}

		upsert
		
		* Serve para caso o documento não seja encontra pela query ele insira o objeto que está sendo passado como modificação.	

			$setOnInsert

			* Serve para inserir valores definidos que serão adicionados caso ocorra o upsert.

		multi
		
		* Serve para alterar TODOS os documentos encontrados pela query, como ele é setado como false, ele irá alterar apenas o primeiro documento achado pela query.

		writeConcern
		
		* Descreve a garantia de que o MongoDB fornece ao relatar o sucesso de uma operação escrita.

	- Operadores de Bucas em Arrays

		$in
			
			* Retorna os documentos que possui valores verdadeiros em algum dos valores passados no [Array-de-Valores]

				- Sintaxe

					db.collection.find(
						campo: {
							$in : [Array-de-Valores]
						}
					)

		$nin
					
			* Retorna os documentos que NÃO possui em algum dos valores passados no [Array-de-Valores]

				- Sintaxe

					db.collection.find(
						campo: {
							$nin : [Array-de-Valores]
						}
					)

		$all
					
			* Retorna os documentos SE TODOS OS VALORES PASSADOS no [Array-de-Valores] forem encontrados

				- Sintaxe

					db.collection.find(
						campo: {
							$all : [Array-de-Valores]
						}
					)

	- Operadores de Negação

		$ne 	é 	not Equal

			- Sintaxe
					
				db.collenction.find(
					campo: {
						$ne: valor
					}
				)

			* Não pode utilizar com REGEX	

		$not 	é 	not

			- Sintaxe
					
				db.collenction.find(
					campo: {
						$not: valor
					}

			* Aceita REGEX			
				)

	- Delete || remove()
	
	* Apaga documentos que são encontrados dentro de uma query

		- Sintaxe

			db.collection.remove(
				{ 
					campo : valor
				}
			)

			ATENÇÃO, O REMOVE É MULTI: TRUE, cuidado pois se não passar nada dentro da query, ele removerá TODOS OS DOCUMENTOS.


		