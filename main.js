axios.get('https://api.github.com/users/muNeves3')
	.then(function(response){
		console.log(response);
	})
	.catch(function(error)  {
		console.warn(error);
	});



//----- exemplos das aulas

//Promises -> .then(resultado esperado), .catch(desvio/erro)

// axios.get('https://api.github.com/users/muNeves3')
// 	.then(function(response){
// 		console.log(response);
// 	})
// 	.catch(function(error)  {
// 		console.warn(error);
// 	});

// var minhaPromise = function() {
// 	return new Promise(function(resolve, reject){
// 		var xhr = new XMLHttpRequest();
// 		xhr.open('GET','https://api.github.com/users/muNeves3');
// 		xhr.send(null);

// 		xhr.onreadystatechange = function(){
// 			if (xhr.readyState === 4){
// 				if(xhr.status === 200){
// 					resolve(JSON.parse(xhr.responseText));
// 				}
// 				else{
// 					reject('Erro na requisição');
// 				}
// 			}
// 		}
// 	});
// }

// minhaPromise()
// 	.then(function(response){
// 		console.log(response);
// 	})
// 	.catch(function(error)  {
// 		console.warn(error);
// 	});

// var xhr = new XMLHttpRequest();

// xhr.open('GET', 'https://api.github.com/users/muNeves3');
// xhr.send(null);

// xhr.onreadystatechange = function(){
// 	if (xhr.readyState === 4){
// 		 console.log(JSON.parse(xhr.responseText));
// 	}
// }

/*	-----Exercicio 1

var idade = parseInt(prompt('Digite sua idade: '),10);

function checaIdade(idade){
	return new Promise(function(resolve, reject){
		setTimeout(function(){
			if(idade >= 18){
				resolve();
			}
			else{
				reject();
			}
		}, 2000)
	});
}

checaIdade(idade)
	.then(function() {
		console.log('Maior que 18');
	})
	.catch(function() {
		console.warn('Menor que 18');
	});

	-----Fim exercicio 1
*/
