class VideoSystemgerView {
	constructor() {
		this.main = $('main');
		this.categories = $('#categories');
		this.menu = $('.navbar-nav');
		this.Videosystem = null;
		this.windows = [];
	}
	#excecuteHandler(handler, handlerArguments, scrollElement, data, url, event) {
		handler(...handlerArguments);
		//$(scrollElement).get(0).scrollIntoView();
		history.pushState(data, null, url);
		event.preventDefault();
	}
	bindInit(handler) {
		$('#init').click((event) => {
			this.#excecuteHandler(handler, [], 'body', { action: 'init' }, '#', event);
		});
		$('#logo').click((event) => {
			this.#excecuteHandler(handler, [], 'body', { action: 'init' }, '#', event);
		});
	}

	showCategories(categories) {
		//console.log(categories);
		if (this.categories.children().length > 1)
			this.categories.children()[1].remove();
		let container = $('<div id="category-list" class="row"></div>');
		for (let category of categories) {
			console.log(category[0]);
			container.append(`<div class="col-lg-3 col-md-6"><a data-category="${category[0].Name}" href="#product-list">
					<div class="cat-list-image"><img alt="${category[0].Name}" src="images/${category[0].Name}.jfif" />
					</div>
					<div class="cat-list-text">
						<h3>${category[0].Name}</h3>
						
					</div>
				</a>
			</div>`);
		}
		container.prepend(`<h1>Categorias</h1>`);
		this.categories.append(container);
	}
	showProductions(categories) {
		if (this.categories.length > 1)
			this.categories.remove();
		let container = $('<div id="category-list" class="row"></div>');
		for (let category of categories) {
			container.append(`<div class="col-lg-3 col-md-6"><a data-category="${category[0].Name}" href="#product-list">
		<div class="cat-list-image"><img alt="${category[0].Name}" src="images/${category[0].Name}.jfif" />
		</div>
		<div class="cat-list-text">
					<h3>${category[0].Name}</h3>
					<div>${category[0].Description}</div>
				</div>
			</a>
		</div>`);
		}
		this.categories.append(container);
	}
	showAletProductions(productions) {
		this.main.empty();
		console.log(productions);
		/* 		if (this.productions.length > 1)
					this.productions.children()[1].remove(); */
		let container = $(`<div id="product-list" class="container my-3"><div class="row"> </div></div>`);
		let list = [];
		for (let product of productions) {
			//console.log(product);
			list.push(product);

		}
		let len;
		for (let index = 0; index < 3; index++) {
			len = Math.floor(Math.random() * list.length);
			//console.log(len);

			let div = (`<div class="col-lg-3 col-md-6>
				<figure class="card card-product-grid card-lg">
					<figcaption class="info-wrap">
						<div class="row">
						<a data-product="${list[len].Title}" href="#single-product" class="img-wrap"><img data-product="${list[len].Title}" class="${list[len].Title}" src="images/${list[len].Title}.jfif"></a>

							<div class="col-md-8"> <a data-product="${list[len].Title}" href="#single-product" class="title"><h2>${list[len].Title}</h2></a> </div>
						</div>
					</figcaption>
					
				</figure>
			</div>`);
			list.splice(len, 1);
			//console.log(list);
			container.children().first().append(div);
		}
		this.categories.append(container);
		container.prepend(`<h1>Populares</h1>`);
		this.main.append(container);
	}
	showCategoriesInMenu(categories) {
		let li = $(`<li class="nav-item dropdown">
			<a class="nav-link dropdown-toggle" href="#" id="navCats" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
				Categor??as
			</a>
		</li>`);
		let container = $('<div class="dropdown-menu" aria-labelledby="navCats"></div>');
		//if (!category.done) shopping
		for (let category of categories) {
			container.append(`<a data-category="${category[0].Name}"
		class="dropdown-item" href="#product-list">${category[0].Name}</a>`);
		}
		li.append(container);
		this.menu.append(li);
	}
	showActorsInMenu() {
		let li = $(`<li class="nav-item ">
			<a class="nav-link " href="#" id="navActor" role="button" data-actors="Actores" aria-haspopup="true" aria-expanded="false">
				Actores
			</a>
			</li>`);
		this.menu.append(li);
	}/* 
	showActor(actors) {//hace una lista en el menu
		let li = $(`<li class="nav-item dropdown">
			<a class="nav-link dropdown-toggle" href="#" id="navActor" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
				Actores
			</a>
			</li>`);
		let container = $('<div id="product-list" class="container my-3"><div class="row"> </div></div>');
		//if (!category.done) shopping
		for (let actor of actors) {
			//console.log(actor[0].Lastname1);
			container.append(`<a data-actor="${actor[0].Name}${actor[0].Lastname1}"
		class="dropdown-item" href="#actor-list">${actor[0].Name} ${actor[0].Lastname1} ${actor[0].Lastname2}</a>`);
		}
		li.append(container);
		this.menu.append(li);
	} */
	showDirectorsInMenu() {
		let li = $(`<li class="nav-item ">
			<a class="nav-link " href="#" id="navDirector" role="button" data-director="Directores" aria-haspopup="true" aria-expanded="false">
				Directores
			</a>
			</li>`);
		this.menu.append(li);
	}
	//boton de cerrar la ventana
	closeWindowbutton() {
		let li = $(`<li class="nav-item ">
		<button class="btn btn-danger m-1" id="closewindow">Cerrar Ventana </button>
			</li>`);
		this.menu.append(li);
	}
	//bind que cierra la ventana
	bindCloseWindow(handler) {
		$('#closewindow').click((event) => {
			console.log($('#closewindow'));
			console.log(this.windows);
			console.log(event);
			for (let index = 0; index < this.windows.length; index++) {
				this.windows[index].closed;
				this.windows.pop(index);
			}
		});
	}


	/* 	showDirectorsInMenu(directors) {//hace una lista en el menu
			let li = $(`<li class="nav-item dropdown">
				<a class="nav-link dropdown-toggle" href="#" id="navDirector" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					Directores
				</a>
				</li>`);
			let container = $('<div class="dropdown-menu" aria-labelledby="navDirec"></div>');
			//if (!category.done) shopping
			for (let director of directors) {
				//console.log(director[0].Lastname1);
				container.append(`<a data-actor="${director[0].Name}"
			class="dropdown-item" href="#actor-list">${director[0].Name} ${director[0].Lastname1}</a>`);
			}
			li.append(container);
			this.menu.append(li);
		} */
	listProductions(production, category, Videosystem) {
		this.main.empty();
		if (production.length > 1)
			production.remove();
		let container = $(`<div id="product-list" class="container my-3"><div class="row"> </div></div>`);
		//let product = production.next();

		for (let product of production) {
			//console.log(product);

			let div = $(`<div class="col-lg-3 col-md-6>
				<figure class="card card-product-grid card-lg"> 
					<figcaption class="info-wrap">
						<div class="row">
						<a data-product="${product.Title}" href="#single-product" class="img-wrap"><img data-production="${product.Title}" class="${product.Title}-style" src="images/${product.Title}.jfif"></a>

							<div class="col-md-8"> <a data-product="${product.Title}" href="#single-product" class="title"><h2>${product.Title}</h2></a> </div>
						</div>
					</figcaption>
					
				</figure>
			</div>`);
			container.children().first().append(div);
			/* for (let actor of Videosystem.actors) {
				console.log(actor);
			} */
			/* for (let actor of Videosystem.getCast(product)) {
				 console.log(actor);
				console.log(actor.Name); 
				container.children().children().children().last().append(`<div class="actor-wrap"><a data-actor="${actor.Name}${actor.Lastname1}"
				class="dropdown-item" href="#actor-list">${actor.Name} ${actor.Lastname1} ${actor.Lastname2}</a> </div>`);
			} */

			//product = production.next();
		}
		container.prepend(`<h1>${category}</h1>`);
		this.main.append(container);
	}
	listProduction(product, Videosystem) {
		this.main.empty();
		/* if (production.length > 1)
			production.remove(); */
		let container = $(`<div id="product-list" class="container my-3"><div class="row"> </div></div>`);
		//let product = production.next();

		//console.log(product);
		console.log(product);
		let div = $(`<div class="col-md-4">
				<figure class="card card-product-grid card-lg"> <img class="${product.Title}-style" data="${product.Title}" src="images/${product.Title}.jfif">
					<figcaption class="info-wrap">
						<div class="row">
							<div class="col-md-8"> <h2>${product.Title}</h2></div>
						</div>
						<div class="col-md-8"><h3>Nacionalidad</h3><span class="product h4">${product.Nacionality}</span></a>  </div>
						<div class="col-md-8"><h3>Publicacion</h3></a><span class="product h4">${product.Publication}</span> <br> </div>
						<div class="col-md-8"><h3>Sinopsis</h3></a><span class="product h4">${product.Synopsis}</span> <br> </div>
					</figcaption>
					<h2>Actores</h2>
				</figure>
			</div>
			`);
		container.children().first().append(div);
		/* for (let actor of Videosystem.actors) {
			console.log(actor);
		} */
		for (let actor of Videosystem.getCast(product)) {
			/* console.log(actor);
			console.log(actor.Name); */
			container.children().children().children().last().append(`<div class="actor-wrap"> <h5><a href="#${actor.Name}${actor.Lastname1}" data-actor="${actor.Name} ${actor.Lastname1} ${actor.Lastname2}" class="actor h5">${actor.Name} ${actor.Lastname1} ${actor.Lastname2}</a></h5>  </div>`);
		}

		//product = production.next();
		container.children().children().children().last().append(`<h4><a class="windown nav-link" data-window ="${product.Title}" href="#" role="button"  aria-haspopup="true" aria-expanded="false">Abrir en ventana</a></h4>`);

		container.prepend(`<h1>${product.Title}</h1>`);
		this.main.append(container);
	}
	listActors(actors, Videosystem) {
		this.main.empty();
		console.log(actors);
		let container = $(`<div id="actors-list" class="container my-3"><div class="row"> </div></div>`);
		//let product = production.next();
		//for (let index = 0; index < actors.length; index++) {
		for (let actor of actors) {
			//console.log(actor[0]);
			let div = $(`<div class="col-md-4">
				<figure class="card card-actor-grid card-lg"> <a data-actor="${actor}" href="#single-actor" class="img-wrap"></a>
					
					
				</figure>
			</div>`);
			container.children().first().append(div);
			//console.log(Videosystem.getProductionsActor(actor[0]));
			for (let prod of Videosystem.getProductionsActor(actor[0])) {
				//console.log(prod);
				console.log(prod.Title);
				container.children().children().children().last().append(`<div class="production-wrap"> <span class="production h5">${prod.Title}</span> <br> </div>`);
			}
			div.prepend(`<h2 > <a data-actor="${actor[0].Name} ${actor[0].Lastname1} ${actor[0].Lastname2}"
		class="actor" href="#actor-list">${actor[0].Name} ${actor[0].Lastname1} ${actor[0].Lastname2}</a></h2>`)
		}
		//product = production.next();

		container.prepend(`<h1>Actores</h1>`);
		this.main.append(container);
	}
	listActor(actor, Videosystem) {
		this.main.empty();
		/* if (production.length > 1)
			production.remove(); */
		let container = $(`<div id="actor-list" class="container my-3"><div class="row"> </div></div>`);
		//let product = production.next();

		console.log(actor);

		let div = $(`<div class="col-md-4">
				<figure class="card card-actor-grid card-lg">
					<figcaption class="info-wrap">

						<div class="col-md-8"><h3>Fecha nacimiento</h3><span class="actor h4">${actor.Born}</span></a>  </div>

					</figcaption>
					<h2>Trabajos</h2>
				</figure>
			</div>
			`);
		container.children().first().append(div);
		/* for (let actor of Videosystem.actors) {
			console.log(actor);
		} */
		for (let product of Videosystem.getProductionsActor(actor)) {
			/* console.log(actor);
			console.log(actor.Name); */
			container.children().children().children().last().append(`<div class="product-wrap"><h5> <a data-product="${product.Title}"
				href="#product-list">${product.Title}</a></h5> </div>`);
		}

		//product = production.next();
		container.prepend(`<h1>${actor.Name} ${actor.Lastname1} ${actor.Lastname2}</h1>`);
		this.main.append(container);
	}
	listDirector(director, Videosystem) {
		this.main.empty();
		/* if (production.length > 1)
			production.remove(); */
		let container = $(`<div id="director-list" data-directors="Directores" class="container my-3"><div class="row"> </div></div>`);
		//let product = production.next();

		console.log(director);

		let div = $(`<div class="col-md-4">
				<figure class="card card-director-grid card-lg">
					<figcaption class="info-wrap">

						<div class="col-md-8"><h3>Fecha nacimiento</h3><span class="director h4">${director.Born}</span>  </div>

					</figcaption>
					<h2>Trabajos</h2>
				</figure>
			</div>
			`);
		container.children().first().append(div);
		/* for (let actor of Videosystem.actors) {
			console.log(actor);
		} */
		for (let product of Videosystem.getProductionsDirector(director)) {
			/* console.log(director);
			console.log(director.Name); */
			container.children().children().children().last().append(`<div class="product-wrap"><h5> <a data-product="${product.Title}"
				 href="#product-list">${product.Title}</a></h5>  </div>`);
		}

		//product = production.next();

		container.prepend(`<h1>${director.Name} ${director.Lastname1} ${director.Lastname2}</h1>`);
		this.main.append(container);
	}
	showDirectors(directors, Videosystem) {
		this.main.empty();
		console.log(directors);
		let container = $(`<div id="directors-list" class="container my-3"><div class="row"> </div></div>`);
		//let product = production.next();
		//for (let index = 0; index < actors.length; index++) {
		for (let director of directors) {
			console.log(director[0]);
			let div = $(`<div class="col-md-4">
				<figure class="card card-director-grid card-lg"> <a data-director="${director}" href="#single-director" class="img-wrap"></a>
					
					
				</figure>
			</div>`);
			container.children().first().append(div);
			console.log(Videosystem.getProductionsDirector(director[0]));
			for (let prod of Videosystem.getProductionsDirector(director[0])) {
				//console.log(prod);
				console.log(prod.Title);
				container.children().children().children().last().append(`<div class="production-wrap"> <span class="production h5">${prod.Title}</span> <br> </div>`);
			}
			div.prepend(`<h2><a  data-director="${director[0].Name} ${director[0].Lastname1} ${director[0].Lastname2}"
		class="director" href="#director-list">${director[0].Name} ${director[0].Lastname1} ${director[0].Lastname2}</a></h2>`)
		}
		//product = production.next();

		container.prepend(`<h1>Directores</h1>`);
		this.main.append(container);
	}
	/* 	bindInit(handler) {
			$('#init').click((event) => {
				handler();
			});
			$('#logo').click((event) => {
				handler();
			});
		} */
	bindProductsCategoryListInMenu(handler) {
		console.log(handler);
		$('#navCats').next().children().click((event) => {
			console.log((event.target));
			let category = $(event.target).closest($('a')).get(0).dataset.category;
			console.log(category);
			this.#excecuteHandler(
				handler, [category],
				'main',
				{ action: 'productsCategoryList', category: category },
				'#category-list', event
			);
			console.log(this.#excecuteHandler);
		});
	}
	bindProductsCategoryList(handler) {
		$('#category-list').find('a').click((event) => {
			let category = $(event.target).closest($('a')).get(0).dataset.category;
			this.#excecuteHandler(
				handler, [category],
				'main',
				{ action: 'productsCategoryList', category: category },
				'#category-list', event
			);
		});
	}
	bindProductsList(handler) {
		console.log(handler);
		console.log($('#product-list'));
		$('#product-list').find('a').click((event) => {
			let prod = $(event.target).closest($('a')).get(0).dataset.product;
			console.log(prod);
			this.#excecuteHandler(
				handler, [prod],
				'main',
				{ action: 'productsCategoryList', product: prod },
				'#product-list', event
			);
		});
	}
	bindProducts(handler) {
		console.log(handler);
		console.log($('#product-list'));
		console.log($('#product-list').find('a'));
		$('#product-list').find('a').click((event) => {
			let prod = $(event.target).closest($('a')).get(0).dataset.product;
			console.log(prod);
			this.#excecuteHandler(
				handler, [prod],
				'main',
				{ action: 'productsList', product: prod },
				'#product-list', event
			);
		});
	}
	bindActors(handler) {
		console.log(handler);
		console.log($('h2').find(".actor"));
		$('h2').find('.actor').click((event) => {
			console.log($(event.target));
			let act = $(event.target).closest($('a')).get(0).dataset.actor;
			console.log(act);
			this.#excecuteHandler(
				handler, [act],
				'main',
				{ action: 'actorlist', actor: act },
				'#actor-list', event
			);
		});
		//console.log(this.#excecuteHandler);
	}
	/* bindWindows(handler) {
		console.log(handler);
		console.log($('h4').find("a"));
		$('h4').find('a').click((event) => {
			console.log($(event.target));
			let win = $(event.target).closest($('a')).get(0).dataset.data;
			console.log(win);
			this.#excecuteHandler(
				handler, [win],
				'main',
				{ action: 'windown', window: win },
				'#window-list', event
			);
			window.mywindow = null;

			if (!mywindow || mywindow.closed) {
				mywindow = window.open("auxPage.html", "Mywindow", "width=800, height=600, top=250, left=250, titlebar=yes, toolbar=no, menubar=no, location=no");
			} else {
				mywindow.focus();
			}
		});
		//console.log(this.#excecuteHandler);
	} */
	bindActorsProd(handler) {
		console.log(handler);
		console.log($('actor-wrap'));
		$('h5').find('a').click((event) => {
			console.log($(event.target));
			let act = $(event.target).closest($('a')).get(0).dataset.actor;
			console.log(act);
			this.#excecuteHandler(
				handler, [act],
				'main',
				{ action: 'actorlist', actor: act },
				'#actor-list', event
			);
		});
		console.log(this.#excecuteHandler);
	}
	bindDirectors(handler) {
		console.log(handler);
		console.log($('h2'));
		$('h2').find('a').click((event) => {
			console.log($(event.target));
			let dir = $(event.target).closest($('a')).get(0).dataset.director;
			console.log(dir);
			this.#excecuteHandler(
				handler, [dir],
				'main',
				{ action: 'directorlist', director: dir },
				'#director-list', event
			);
		});
		console.log(this.#excecuteHandler);
	}
	bindProductsPerson(handler) {
		console.log(handler);
		console.log($('h5'));
		$('h5').find('a').click((event) => {
			console.log($(event.target));
			let prod = $(event.target).closest($('a')).get(0).dataset.product;
			console.log(prod);
			this.#excecuteHandler(
				handler, [prod],
				'main',
				{ action: 'product', product: prod },
				'#actor', event
			);
		});
		console.log(this.#excecuteHandler);
	}
	bindActorListInMenu(handler) {
		console.log("bindactor");
		console.log($('#navActor'));
		console.log(handler);
		$('#navActor').click((event) => {
			console.log(event.target);
			let act = $(event.target).closest($('a')).get(0).dataset.actors;
			console.log(act);
			this.#excecuteHandler(
				handler, [act],
				'main',
				{ action: 'productsActorList', actor: act },
				'#actor-list', event
			);
			console.log(this.#excecuteHandler);
		});
	}
	bindDirectorListInMenu(handler) {
		console.log("binddirector");
		console.log($('#navDirector'));
		console.log(handler);
		$('#navDirector').click((event) => {
			console.log(event.target);
			let dir = $(event.target).closest($('a')).get(0).dataset.director;
			console.log(dir);
			this.#excecuteHandler(
				handler, [dir],
				'main',
				{ action: 'productsDirectorList', director: dir },
				'#director-list', event
			);
			console.log(this.#excecuteHandler);
		});
	}
	/* bindPersonListInMenu(handler) {
		$('#navCats').next().children().click((event) => {
			console.log((event.target));
			let person = $(event.target).closest($('a')).get(0).dataset.category;
			let type;
			if (event.target.text == "Actor") {
				this.#excecuteHandler(
					handler, [person],
					'main',
					{ action: 'productsCategoryList', person: person },
					'#actor-list', event
				);
			} else {
				this.#excecuteHandler(
					handler, [person],
					'main',
					{ action: 'productsCategoryList', person: person },
					'#director-list', event
				);
			}

		});
	} */
	/* bindShowProduct(handler) {
		//console.log($('#product-list').children());
		$('#product-list').click((event) => {
			//console.log("aqui");
			let category = $(event.target).closest($('a')).get(0).dataset.category;
			this.#excecuteHandler(
				handler, [category],
				'main',
				{ action: 'productsCategoryList', category: category },
				'#category-list', event
			);
		});
		$('#product-list').find('figcaption a').click((event) => {
			this.#excecuteHandler(
				handler, [category],
				'main',
				{ action: 'productsCategoryList', category: category },
				'#category-list', event
			);
		});
	} */
	bindProductsTypeList(handler) {
		$('#type-list').find('a').click((event) => {
			let type = $(event.target).closest($('a')).get(0).dataset.type;
			this.#excecuteHandler(
				handler, [type],
				'#product-list',
				{ action: 'productsTypeList', type: type },
				'#type-list', event
			);
		});
	}
	showProductInNewWindow(product, message, tipo, Videosystem) {
		let main = $(this.Videosystem.document).find('main');
		console.log(main);
		let header = $(this.Videosystem.document).find('header nav');
		console.log(tipo);
		main.empty();
		header.empty();
		console.log(product);
		let container;
		if (product) {
			console.log("entra en el window")
			if (tipo == "persona") {
				console.log("es persona")
				this.Videosystem.document.title = `${product.Name}`;
				header.append(`<h1 data-serial="${product.Name}" class="display-5">${product.Name} ${product.Lastname1} ${product.Lastname2}</h1>`);
				container = $(`<div id="single-product" class="${product.Name}-style container mt-5 mb-5"> 
				  <div class="row d-flex justify-content-center"> 
					  <div class="col-md-10">
						
					</div>
				</div> 
					 </div> 
					 <button class="btn btn-primary text-uppercase m-2 px-4" onClick="window.close()">Cerrar</button>`);
				//let container = $(`<div id="director-list" data-directors="Directores" class="container my-3"><div class="row"> </div></div>`);
				//let product = production.next();


				for (let product of Videosystem.getProductionsDirector(director)) {
					/* console.log(director);
					console.log(director.Name); */
					container.children().children().last().append(`<div class="product-wrap"><h5> <a data-product="${product.Title}"
				 href="#product-list">${product.Title}</a></h5>  </div>`);
				}
			} else {
				console.log("Es un objeto");
				console.log(product);
				this.Videosystem.document.title = `${product.Title}`;
				header.append(`<h1 data-serial="${product.Title}" class="display-5">${product.Title}</h1>`);
				container = $(`<div id="single-product" class="${product.Title}-style container mt-5 mb-5"> 
			  <div class="row d-flex justify-content-center"> 
			  	<div class="col-md-10">
			  		<div class="card">
			    		<div class="row"> 
			 				<div class="col-md-12"> 
			  					<div class="images p-3"> 
			  						<div class="text-center p-4"> 
										<img id="main-image" src="images/${product.Title}.jfif"/>
			   						</div> 
			   					</div> 
			   				</div> 
			   				<div class="col-md-12"> 
			   					<div class="product p-4">
									<div class="mt-4 mb-3"> 
										<h5 class="text-uppercase">${product.Title}</h5> 
									</div> 
									<p class="about">${product.Synopsis}</p>
									<p class="about">${product.Publication}</p>
									<p class="about">${product.Nacionality}</p>
								</div> 
							</div> 
						</div> 
					</div> 
				</div>
			</div> 
				 </div> 
				 <button class="btn btn-primary text-uppercase m-2 px-4" onClick="window.close()">Cerrar</button>`);
				console.log(container);
				for (let actor of Videosystem.getCast(product)) {
					/* console.log(actor);
					console.log(actor.Name); */
					container.children().children().children().last().append(`<div class="actor-wrap"> <h5><a href="#${actor.Name}${actor.Lastname1}" data-actor="${actor.Name} ${actor.Lastname1} ${actor.Lastname2}" class="actor h5">${actor.Name} ${actor.Lastname1} ${actor.Lastname2}</a></h5>  </div>`);
				}
				console.log(container);
				//product = production.next();
				container.children().children().children().last().append(`<h4><a class="windown nav-link" data-window ="${product.Title}" href="#" role="button"  aria-haspopup="true" aria-expanded="false">Abrir en ventana</a></h4>`);
				console.log(container);
			}
			//container.find('h6').after(this.#instance[product.constructor.name]);
		} else {
			container = $(` <div class="container mt-5 mb-5"> <div class="row d-flex justify-content-center"> ${message} </div> </div>`);
		}
		main.append(container);
		this.Videosystem.document.body.scrollIntoView();
	}

	bindShowProductInNewWindow(handler) {
		console.log(handler);
		$("h4").find('.windown').click((event) => {
			console.log(event.target);
			if (!this.Videosystem || this.Videosystem.closed) {
				this.Videosystem = window.open("auxpage.html", "productWindow", "width=800, height=600, top=250, left=250, titlebar=yes, toolbar=no, menubar=no, location=no");
				this.windows.push(this.Videosystem);

				this.Videosystem.addEventListener('DOMContentLoaded', () => {
					console.log(event.target.dataset.window);
					handler(event.target.dataset.window)
				});
			} else {
				if ($(this.Videosystem.document).find('header nav h1').get(0).dataset.serial !== event.target.dataset.serial) {
					handler(event.target.dataset.window);
				}
				this.Videosystem.focus();
			}
		});
	}
	buttonsHistory() {
		// Bot??n atr??s
		let bGoBack = $('<button class="btn btn-primary m-1">go (-1)</button>');
		bGoBack.click(function (event) {
			window.history.go(-1);
		});
		bForward.after(bGoBack);
		// Bot??n reload
		let bGoReload = $('<button class="btn btn-primary m-1">go ()</button>');
		bGoReload.click(function (event) {
			window.history.go();
		});
		bGoBack.after(bGoReload);
		// Bot??n reload
		let bGoForward = $('<button class="btn btn-primary m-1">go (1)</button>');
		bGoForward.click(function (event) {
			window.history.go(1);
		});
		bGoReload.after(bGoForward);
	}



	showAdminMenu() {
		let li = $(`<li class="nav-item dropdown"> 
		<a class="nav-link dropdown-toggle" href="#" id="navAdmin" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> 
		Administraci??n </a> 
		</li>`);
		let container = $(`<div class="dropdown-menu" aria-labelledby="navAdmin"> 
			<a id="lnewCategory" class="dropdown-item" href="#new-category">Crear categor??a</</a> 
			<a id="ldelCategory" class="dropdown-item" href="#new-category">Eliminar categor??a</a> 
			<a id="lnewPelicula" class="dropdown-item" href="#new-product">Crear pelicula</a>
			<a id="ldelPelicula" class="dropdown-item" href="#new-product">Eliminar pelicula</a> 
			<a id="lnewSerie" class="dropdown-item" href="#new-product">Crear serie</a>
			<a id="ldelSerie" class="dropdown-item" href="#new-product">Eliminar serie</a> 
			<a id="lnewActor" class="dropdown-item" href="#new-actor">Crear actor</a>
			<a id="ldelActor" class="dropdown-item" href="#new-actor">Eliminar actor</a>
			<a id="lnewDirector" class="dropdown-item" href="#new-director">Crear Director</a>
			<a id="ldelDirector" class="dropdown-item" href="#new-director">Eliminar director</a>
		</div>`);
		li.append(container); this.menu.append(li);
	}

	showNewPeliculaForm() {
		this.main.empty();
		console.log(this.categories.children());
		if (this.categories.children().length > 1) this.categories.children()[1].remove();
		let container = $(`<div id="new-formPelicula" class="container my-3">
		<h1 class="display-5">Nueva Pelicula</h1>
		<form name="fNewFormPelicula" role="form" novalidate>
			<div class="form-row">
				<div class="col-md-6 mb-3">
					<label for="ncTitle">T??tulo *</label>
					<div class="input-group">
						<div class="input-group-prepend">
							<span class="input-group-text" id="titlePrepend"> <i class="fas fa-heading"></i></span>
						</div>
						<input type="text" class="form-control" id="ncTitle" name="ncTitle" placeholder="T??tulo de producto"
							aria-describedby="titlePrepend" value="" required>
						<div class="invalid-feedback">
							El t??tulo es obligatorio.
						</div>
						<div class="valid-feedback">
							Correcto.
						</div>
					</div>
				</div>
			</div>
			<div class="col-md-6 mb-3">
				<label for="ncNacionality">Nacionalidad *</label>
				<div class="input-group">
					<div class="input-group-prepend"> <span class="input-group-text" id="nacionalityPrepend"><i
								class="fas fa-image"></i></span>
					</div>
					<input type="Nacionality" class="form-control" id="ncNacionality" name="ncNacionality"
						placeholder="Espa??ola" aria-describedby="nacionalityPrepend" value="" required>
					<div class="invalid-feedback">
						La Nacinalidad no es v??lida.
					</div>
					<div class="valid-feedback">
						Correcto.
					</div>
				</div>
			</div>
			<div class="form-row">
				<div class="col-md-6 mb-3">
					<label for="ncPublication">Publicacion *</label>
					<div class="input-group">
						<div class="input-group-prepend"> <span class="input-group-text" id="publicationPrepend"><i
									class="fas fa-image"></i></span>
						</div>
						<input type="Publication" class="form-control" id="ncPublication" name="ncPublication"
							placeholder="10/11/2013" aria-describedby="publicationPrepend" value="" required>
						<div class="invalid-feedback">
							La Nacinalidad no es v??lida.
						</div>
						<div class="valid-feedback">
							Correcto.
						</div>
					</div>
				</div>
			</div>
			<div class="form-row">
				<div class="col-md-6 mb-3 ncImagen"> <label for="ncImagen">Imagen *</label>
					<div class="input-group">
						<div class="input-group-prepend"> <span class="input-group-text" id="imagenPrepend"><i
									class="fas fa-image"></i></span>
						</div>
						<input type="file" class="form-control" id="ncImagen" name="ncImagen"
							aria-describedby="imagenPrepend" value="" required>
						<div class="invalid-feedback">
							La Imagen no es v??lida.
						</div>
						<div class="valid-feedback">
							Correcto.
						</div>
					</div>
				</div>
			</div>
			<div class="form-row">
				<div class="col-md-6 mb-3 ncDuration"> <label for="ncDuration">Duracion *</label>
					<div class="input-group">
						<div class="input-group-prepend"> <span class="input-group-text" id="durationPrepend"><i
									class="fas fa-image"></i></span>
						</div>
						<input type="number" class="form-control" id="ncDuration" name="ncDuration"
							aria-describedby="durationPrepend" value="" required>
						<div class="invalid-feedback">
							La duracion no es v??lida.
						</div>
						<div class="valid-feedback">
							Correcto.
						</div>
					</div>
				</div>
			</div>
			<div class="form-row">
				<div class="col-md-6 mb-3 ncLink"> <label for="ncLink">Link *</label>
					<div class="input-group">
						<div class="input-group-prepend"> <span class="input-group-text" id="linkPrepend"><i
									class="fas fa-image"></i></span>
						</div>
						<input type="text" class="form-control" id="ncLink" name="ncLink" aria-describedby="linkPrepend"
							value="" required>
						<div class="invalid-feedback">
							el Link no es v??lida.
						</div>
						<div class="valid-feedback">
							Correcto.
						</div>
					</div>
				</div>
			</div>
			
			<div class="form-row">
				<div class="col-md-12 mb-3">
					<label for="ncSynopsis">Synopsis</label>
					<div class="input-group">
						<div class="input-group-prepend"> <span class="input-group-text" id="descPrepend">
								<i class="fas fa-align-left"></i></span>
						</div>
						<input type="text" class="form-control" id="ncSynopsis" name="ncSynopsis"
							aria-describedby="descPrepend" value="" required>
						<div class="invalid-feedback">
						</div>
						<div class="valid-feedback">
							Correcto.
						</div>
					</div>
				</div>
			</div>
			<div class="form-row">
		 <div class="col-md-6 mb-3">
			 <label for="ncLat">Latitud</label>
			 <div class="input-group">
				 <div class="input-group-prepend"> <span class="input-group-text" id="descPrepend">
						 <i class="fas fa-align-left"></i></span>
				 </div>
				 <input type="number" class="form-control" id="ncLat" name="ncLat" aria-describedby="descPrepend"
					 value="" required>
				 <div class="invalid-feedback">
				 </div>
				 <div class="valid-feedback">
					 Correcto.
				 </div>
			 </div>
		 </div>
		 <div class="col-md-6 mb-3">
			 <label for="ncLong">Longitud</label>
			 <div class="input-group">
				 <div class="input-group-prepend"> <span class="input-group-text" id="descPrepend">
						 <i class="fas fa-align-left"></i></span>
				 </div>
				 <input type="number" class="form-control" id="ncLong" name="ncLong" aria-describedby="descPrepend"
					 value="" required>
				 <div class="invalid-feedback">
				 </div>
				 <div class="valid-feedback">
					 Correcto.
				 </div>
			 </div>
		 </div>
	 </div>
			<button class="btn btn-primary" type="submit">Enviar</button>
			<button class="btn btn-primary" type="reset">Cancelar</button>
		</form>
	</div>
		`);
		this.main.append(container);
	}

	showNewSerieForm() {
		this.main.empty();
		console.log(this.categories.children());
		if (this.categories.children().length > 1) this.categories.children()[1].remove();
		let container = $(`<div id="new-formSerie" class="container my-3"> 
		<h1 class="display-5">Nueva Serie</h1> 
		 <form name="fNewFormSerie" role="form" novalidate> 
		 <div class="form-row">
		 <div class="col-md-6 mb-3">
			 <label for="ncTitle">T??tulo *</label>
			 <div class="input-group">
				 <div class="input-group-prepend">
					 <span class="input-group-text" id="titlePrepend"> <i class="fas fa-heading"></i></span>
				 </div>
				 <input type="text" class="form-control" id="ncTitle" name="ncTitle" placeholder="T??tulo de producto"
					 aria-describedby="titlePrepend" value="" required>
				 <div class="invalid-feedback">
					 El t??tulo es obligatorio.
				 </div>
				 <div class="valid-feedback">
					 Correcto.
				 </div>
			 </div>
		 </div>
	 </div>
	 <div class="col-md-6 mb-3">
		 <label for="ncNacionality">Nacionalidad *</label>
		 <div class="input-group">
			 <div class="input-group-prepend"> <span class="input-group-text" id="nacionalityPrepend"><i
						 class="fas fa-image"></i></span>
			 </div>
			 <input type="Nacionality" class="form-control" id="ncNacionality" name="ncNacionality"
				 placeholder="Espa??ola" aria-describedby="nacionalityPrepend" value="" required>
			 <div class="invalid-feedback">
				 La Nacinalidad no es v??lida.
			 </div>
			 <div class="valid-feedback">
				 Correcto.
			 </div>
		 </div>
	 </div>
	 <div class="form-row">
		 <div class="col-md-6 mb-3">
			 <label for="ncPublication">Publicacion *</label>
			 <div class="input-group">
				 <div class="input-group-prepend"> <span class="input-group-text" id="publicationPrepend"><i
							 class="fas fa-image"></i></span>
				 </div>
				 <input type="Publication" class="form-control" id="ncPublication" name="ncPublication"
					 placeholder="10/11/2013" aria-describedby="publicationPrepend" value="" required>
				 <div class="invalid-feedback">
					 La Nacinalidad no es v??lida.
				 </div>
				 <div class="valid-feedback">
					 Correcto.
				 </div>
			 </div>
		 </div>
	 </div>
	 <div class="form-row">
		 <div class="col-md-6 mb-3 ncImagen"> <label for="ncImagen">Imagen *</label>
			 <div class="input-group">
				 <div class="input-group-prepend"> <span class="input-group-text" id="imagenPrepend"><i
							 class="fas fa-image"></i></span>
				 </div>
				 <input type="file" class="form-control" id="ncImagen" name="ncImagen"
					 aria-describedby="imagenPrepend" value="" required>
				 <div class="invalid-feedback">
					 La Imagen no es v??lida.
				 </div>
				 <div class="valid-feedback">
					 Correcto.
				 </div>
			 </div>
		 </div>
	 </div>
	 <div class="form-row">
		 <div class="col-md-6 mb-3 ncDuration"> <label for="ncDuration">Duracion *</label>
			 <div class="input-group">
				 <div class="input-group-prepend"> <span class="input-group-text" id="durationPrepend"><i
							 class="fas fa-image"></i></span>
				 </div>
				 <input type="number" class="form-control" id="ncDuration" name="ncDuration"
					 aria-describedby="durationPrepend" value="" required>
				 <div class="invalid-feedback">
					 La duracion no es v??lida.
				 </div>
				 <div class="valid-feedback">
					 Correcto.
				 </div>
			 </div>
		 </div>
	 </div>
	 <div class="form-row">
		 <div class="col-md-6 mb-3 ncLink"> <label for="ncLink">Link *</label>
			 <div class="input-group">
				 <div class="input-group-prepend"> <span class="input-group-text" id="linkPrepend"><i
							 class="fas fa-image"></i></span>
				 </div>
				 <input type="text" class="form-control" id="ncLink" name="ncLink" aria-describedby="linkPrepend"
					 value="" required>
				 <div class="invalid-feedback">
					 el Link no es v??lida.
				 </div>
				 <div class="valid-feedback">
					 Correcto.
				 </div>
			 </div>
		 </div>
	 </div>
	 
	 <div class="form-row">
		 <div class="col-md-12 mb-3">
			 <label for="ncSynopsis">Synopsis</label>
			 <div class="input-group">
				 <div class="input-group-prepend"> <span class="input-group-text" id="descPrepend">
						 <i class="fas fa-align-left"></i></span>
				 </div>
				 <input type="text" class="form-control" id="ncSynopsis" name="ncSynopsis"
					 aria-describedby="descPrepend" value="" required>
				 <div class="invalid-feedback">
				 </div>
				 <div class="valid-feedback">
					 Correcto.
				 </div>
			 </div>
		 </div>
	 </div>
	
	 <div class="form-row">
		 <div class="col-md-6 mb-3">
			 <label for="ncLat">Latitud</label>
			 <div class="input-group">
				 <div class="input-group-prepend"> <span class="input-group-text" id="descPrepend">
						 <i class="fas fa-align-left"></i></span>
				 </div>
				 <input type="number" class="form-control" id="ncLat" name="ncLat" aria-describedby="descPrepend"
					 value="" required>
				 <div class="invalid-feedback">
				 </div>
				 <div class="valid-feedback">
					 Correcto.
				 </div>
			 </div>
		 </div>
		 <div class="col-md-6 mb-3">
			 <label for="ncLong">Longitud</label>
			 <div class="input-group">
				 <div class="input-group-prepend"> <span class="input-group-text" id="descPrepend">
						 <i class="fas fa-align-left"></i></span>
				 </div>
				 <input type="number" class="form-control" id="ncLong" name="ncLong" aria-describedby="descPrepend"
					 value="" required>
				 <div class="invalid-feedback">
				 </div>
				 <div class="valid-feedback">
					 Correcto.
				 </div>
			 </div>
		 </div>
	 </div>
	 <div class="form-row">
		 <div class="col-md-6 mb-3">
			 <label for="ncTemp">Temporadas</label>
			 <div class="input-group">
				 <div class="input-group-prepend"> <span class="input-group-text" id="descPrepend">
						 <i class="fas fa-align-left"></i></span>
				 </div>
				 <input type="number" class="form-control" id="ncTemp" name="ncTemp" aria-describedby="descPrepend"
					 value="" required>
				 <div class="invalid-feedback">
				 </div>
				 <div class="valid-feedback">
					 Correcto.
				 </div>
			 </div>
		 </div>
	 </div>
	 <button class="btn btn-primary" type="submit">Enviar</button>
	 <button class="btn btn-primary" type="reset">Cancelar</button>
 </form>
</div>
		`);
		this.main.append(container);
	}
	bindAdminMenu(hNewCategory, hRemoveCategory, hNewPelicula, hNewSerie, hNewActor, hNewDirector) {
		$('#lnewCategory').click((event) => {
			this.#excecuteHandler(hNewCategory, [],
				'#new-category', { action: 'newCategory' },
				'#', event);
		});
		$('#ldelCategory').click((event) => {
			this.#excecuteHandler(hRemoveCategory, [],
				'#remove-category', { action: 'removeCategory' },
				'#', event);
		});
		$('#lnewPelicula').click((event) => {
			this.#excecuteHandler(hNewPelicula, [],
				'#new-pelicula', { action: 'newPelicula' },
				'#', event);
		});
		$('#lnewSerie').click((event) => {
			this.#excecuteHandler(hNewSerie, [],
				'#new-serie', { action: 'newSerie' },
				'#', event);
		});
		$('#lnewActor').click((event) => {
			this.#excecuteHandler(hNewActor, [],
				'#new-actor', { action: 'newActor' },
				'#', event);
		});
		$('#lnewDirector').click((event) => {
			this.#excecuteHandler(hNewDirector, [],
				'#new-director', { action: 'newDirector' },
				'#', event);
		});
	}

	showNewCategoryModal(done, cat, error) {
		$(document.fNewCategory).find('div.error').remove();
		if (done) {
			let modal = $(`<div class="modal fade" id="newCategoryModal" tabindex="-1" data-backdrop="static" data-keyboard="false" role="dialog" aria-labelledby="newCategoryModalLabel" aria-hidden="true"> 
			<div class="modal-dialog" role="document"> <div class="modal-content"> 
				<div class="modal-header"> <h5 class="modal-title" id="newCategoryModalLabel">Categor??a creada</h5> 
					<button type="button" class="close" data-dismiss="modal" aria-label="Close"> 
						<span aria-hidden="true">&times;</span> </button>
		 		</div>
		  		<div class="modal-body"> 
		  			La categor??a <strong>${cat.title}</strong> ha sido creada correctamente.
		   		</div>
		    	<div class="modal-footer"> 
					<button type="button" class="btn btn-primary" data-dismiss="modal">Aceptar</button> 
				</div> 
			</div>
		</div>
		</div>`);
			$('body').append(modal);
			let newCategoryModal = $('#newCategoryModal');
			newCategoryModal.modal('show');
			newCategoryModal.find('button').click(() => {
				newCategoryModal.on('hidden.bs.modal', function (event) {
					document.fNewCategory.reset();
					document.fNewCategory.ncTitle.focus();
					this.remove();
				}); newCategoryModal.modal('hide');
			})
		} else {
			$(document.fNewCategory).prepend(`<div class="error text-danger p-3">
			<i class="fas fa-exclamation-triangle"></i> La categor??a <strong>${cat.title}</strong> ya est?? creada.
			</div>`);
		}
	}
	showNewCategoryForm() {
		this.main.empty();
		if (this.categories.children().length > 1) this.categories.children()[1].remove();
		let container = $(`<div id="new-category" class="container my-3"> <h1 class="display-5">Nueva categor??a</h1>
		<form name="fNewCategory"  role="form" novalidate>
		<div class="form-row">
			<div class="col-md-6 mb-3">
				<label for="ncTitle">T??tulo *</label>
				<div class="input-group">
					<div class="input-group-prepend"> <span class="input-group-text" id="titlePrepend">
							<i class="fas fa-heading"></i></span>
					</div>
					<input type="text" class="form-control" id="ncTitle" name="ncTitle" placeholder="T??tulo de categor??a"
						aria-describedby="titlePrepend" value="" required>
					<div class="invalid-feedback">
						El t??tulo es obligatorio.
					</div>
					<div class="valid-feedback">
						Correcto.
					</div>
				</div>
			</div>
		</div>
		<div class="form-row">
			<div class="col-md-12 mb-3">
				<label for="ncDescription">Descripci??n</label>
				<div class="input-group">
					<div class="input-group-prepend">
						<span class="input-group-text" id="descPrepend"><i class="fas fa-align-left"></i></span>
					</div>
					<input type="text" class="form-control" id="ncDescription" name="ncDescription"
						aria-describedby="descPrepend" value="" required>
					<div class="invalid-feedback">
					</div>
					<div class="valid-feedback">
						Correcto.
					</div>
				</div>
			</div>
		</div>
		<button class="btn btn-primary" type="submit">Enviar</button>
		<button class="btn btn-primary" type="reset">Cancelar</button>
	</form>
	</div>
`);
		this.main.append(container);
	}
	showRemoveCategoryForm(categories) {
		this.main.empty();
		if (this.categories.children().length > 1) this.categories.children()[1].remove();
		let container = $(`<div id="remove-category" class="container my-3"> <h1 class="display-5">Eliminar una categor??a</h1>
		 	<div id="category-list" class="row">
		 	</div> 
		 </div>`);
		console.log(this.categories.children());
		for (let category of categories) {
			//console.log(category);


			container.children().nextAll('div').append(`<div class="cat col-lg-3 col-md-6">
			<a data-category="${category[0].Name}" href="#product-list">
			 	<div class="cat-list-image">
					<img alt="${category[0].Name}"  src="images/${category[0].Name}.jfif" /> 
			 	</div> 
			 	<div class="cat-list-text"> 
				<h3>${category[0].Name}</h3> 
			 		<div><button class="btn btn-primary" data-category="${category[0].Name}" type='button'>Eliminar</button>
					</div> 
				</div> 
				</a> 
		</div>`);
		}
		this.categories.append(container);
		this.main.append(container);
	}
	showRemoveCategoryModal(done, cat, position, error) {
		$('remove-category').find('div.error').remove();
		if (done) {
			let modal = $(`<div class="modal fade" id="removeCategoryModal" tabindex="-1" data-backdrop="static"
			data-keyboard="false" role="dialog" aria-labelledby="removeCategoryModalLabel" aria-hidden="true">
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title" id="removeCategoryModalLabel">Categor??a eliminada</h5>
						<button type="button" class="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div class="modal-body">
						La categor??a <strong>${cat.Name}</strong> ha sido eliminada correctamente.
					</div>
					<div class="modal-footer"> <button type="button" class="btn btn-primary" data-dismiss="modal">
							Aceptar
						</button>
					</div>
				</div>
			</div>
		</div>`); $('body').append(modal);
			let removeCategoryModal = $('#removeCategoryModal');
			removeCategoryModal.modal('show');
			removeCategoryModal.find('button').click(() => {
				removeCategoryModal.on('hidden.bs.modal', function (event) {
					this.remove();
				});
				removeCategoryModal.modal('hide');
				let divCat = $('#remove-category').find(`div > div:nth-child(${position + 1})`);
				divCat.remove();
			})
		} else {console.log(cat);
			$('#removeCategoryModal').prepend(`<div class="error text-danger p-3">
			<i class="fas fa-exclamation-triangle"></i> La categor??a <strong>${cat.Name}</strong> no exite en la aplicacion.
		</div>`);
		}
	}
	bindRemoveCategoryForm(handler) {
		$('#remove-category').find('button').click(function (event) {
			handler(this.dataset.category, 
				$(this).closest('div.cat').index());
		})
	}
	bindNewCategoryForm(handler) {
		newCategoryValidation(handler);
	}
	bindNewPeliculaForm(handler) {
		newPeliValidation(handler);
	}
	bindNewSerieForm(handler) {
		newSerieValidation(handler);
	}
	bindNewActorForm(handler) {
		newActorValidation(handler);
	}
	bindNewDirectorForm(handler) {
		newDirectorValidation(handler);
	}
	showNewActorForm() {
		this.main.empty();
		if (this.categories.children().length > 1) this.categories.children()[1].remove();
		let container = $(`<div id="new-actor" class="container my-3">
		<h1 class="display-5">Nuevo Actor</h1>
		<form name="fNewActor" role="form" novalidate>
			<div class="form-row">
				<div class="col-md-6 mb-3"> <label for="ncNombre">Nombre *</label>
					<div class="input-group">
						<div class="input-group-prepend"> <span class="input-group-text" id="nombrePrepend"><i
									class="fas fa-heading"></i></span>
						</div>
						<input type="text" class="form-control" id="ncNombre" name="ncNombre" placeholder="Jose"
							aria-describedby="nombrePrepend" value="" required>
						<div class="invalid-feedback">
							El Nombre es obligatorio.
						</div>
						<div class="valid-feedback">
							Correcto.
						</div>
					</div>
				</div>
			</div>
			<div class="form-row">
				<div class="col-md-6 mb-3"> <label for="ncApellido1">Apellido1 *</label>
					<div class="input-group">
						<div class="input-group-prepend"> <span class="input-group-text" id="apellido1Prepend"><i
									class="fas fa-image"></i></span>
						</div>
						<input type="text" class="form-control" id="ncApellido1" name="ncApellido1" placeholder="Lirio"
							aria-describedby="apellido1Prepend" value="" required>
						<div class="invalid-feedback">
							El Apellido1 no es v??lida.
						</div>
						<div class="valid-feedback">
							Correcto.
						</div>
					</div>
				</div>
			</div>
			<div class="form-row">
				<div class="col-md-6 mb-3"> <label for="ncApellido2">Apellido2 *</label>
					<div class="input-group">
						<div class="input-group-prepend"> <span class="input-group-text" id="apellido2Prepend"><i
									class="fas fa-image"></i></span>
						</div>
						<input type="text" class="form-control" id="ncApellido2" name="ncApellido2" placeholder="Ramos"
							aria-describedby="apellido2Prepend" value="" required>
						<div class="invalid-feedback">
							El Apellido2 no es v??lida.
						</div>
						<div class="valid-feedback">
							Correcto.
						</div>
					</div>
				</div>
			</div>
			<div class="form-row">
				<div class="col-md-6 mb-3"> <label for="ncBorn">A??o nacimiento *</label>
					<div class="input-group">
						<div class="input-group-prepend"> <span class="input-group-text" id="BornPrepend"><i
									class="fas fa-image"></i></span>
						</div>
						<input type="date" class="form-control" id="ncBorn" name="ncBorn" placeholder="Born"
							aria-describedby="bornPrepend" value="" required>
						<div class="invalid-feedback">
							El a??o no es v??lido.
						</div>
						<div class="valid-feedback">
							Correcto.
						</div>
					</div>
				</div>
			</div>
			<div class="form-row">
				<div class="col-md-6 mb-3 ncImagen"> <label for="ncImagen">Imagen *</label>
					<div class="input-group">
						<div class="input-group-prepend"> <span class="input-group-text" id="imagenPrepend"><i
									class="fas fa-image"></i></span>
						</div>
						<input type="file" class="form-control" id="ncImagen" name="ncImagen"
							aria-describedby="imagenPrepend" value="" required>
						<div class="invalid-feedback">
							La Imagen no es v??lida.
						</div>
						<div class="valid-feedback">
							Correcto.
						</div>
					</div>
				</div>
			</div>
			<button class="btn btn-primary" type="submit">Enviar</button>
			<button class="btn btn-primary" type="reset">Cancelar</button>
		</form>
	</div>`);
		this.main.append(container);
	}

	showNewDirectorForm() {
		this.main.empty();
		if (this.categories.children().length > 1) this.categories.children()[1].remove();
		let container = $(`<div id="new-director" class="container my-3"> <h1 class="display-5">Nuevo Director</h1>
		 <form name="fNewDirector" role="form" novalidate> 
		 <div class="form-row">
				<div class="col-md-6 mb-3"> <label for="ncNombre">Nombre *</label>
					<div class="input-group">
						<div class="input-group-prepend"> <span class="input-group-text" id="nombrePrepend"><i
									class="fas fa-heading"></i></span>
						</div>
						<input type="text" class="form-control" id="ncNombre" name="ncNombre" placeholder="Jose"
							aria-describedby="nombrePrepend" value="" required>
						<div class="invalid-feedback">
							El Nombre es obligatorio.
						</div>
						<div class="valid-feedback">
							Correcto.
						</div>
					</div>
				</div>
			</div>
			<div class="form-row">
				<div class="col-md-6 mb-3"> <label for="ncApellido1">Apellido1 *</label>
					<div class="input-group">
						<div class="input-group-prepend"> <span class="input-group-text" id="apellido1Prepend"><i
									class="fas fa-image"></i></span>
						</div>
						<input type="text" class="form-control" id="ncApellido1" name="ncApellido1" placeholder="Lirio"
							aria-describedby="apellido1Prepend" value="" required>
						<div class="invalid-feedback">
							El Apellido1 no es v??lida.
						</div>
						<div class="valid-feedback">
							Correcto.
						</div>
					</div>
				</div>
			</div>
			<div class="form-row">
				<div class="col-md-6 mb-3"> <label for="ncApellido2">Apellido2 *</label>
					<div class="input-group">
						<div class="input-group-prepend"> <span class="input-group-text" id="apellido2Prepend"><i
									class="fas fa-image"></i></span>
						</div>
						<input type="text" class="form-control" id="ncApellido2" name="ncApellido2" placeholder="Ramos"
							aria-describedby="apellido2Prepend" value="" required>
						<div class="invalid-feedback">
							El Apellido2 no es v??lida.
						</div>
						<div class="valid-feedback">
							Correcto.
						</div>
					</div>
				</div>
			</div>
			<div class="form-row">
				<div class="col-md-6 mb-3"> <label for="ncBorn">A??o nacimiento *</label>
					<div class="input-group">
						<div class="input-group-prepend"> <span class="input-group-text" id="BornPrepend"><i
									class="fas fa-image"></i></span>
						</div>
						<input type="date" class="form-control" id="ncBorn" name="ncBorn" placeholder="Born"
							aria-describedby="bornPrepend" value="" required>
						<div class="invalid-feedback">
							El a??o no es v??lido.
						</div>
						<div class="valid-feedback">
							Correcto.
						</div>
					</div>
				</div>
			</div>
			<div class="form-row">
				<div class="col-md-6 mb-3 ncImagen"> <label for="ncImagen">Imagen *</label>
					<div class="input-group">
						<div class="input-group-prepend"> <span class="input-group-text" id="imagenPrepend"><i
									class="fas fa-image"></i></span>
						</div>
						<input type="file" class="form-control" id="ncImagen" name="ncImagen"
							aria-describedby="imagenPrepend" value="" required>
						<div class="invalid-feedback">
							La Imagen no es v??lida.
						</div>
						<div class="valid-feedback">
							Correcto.
						</div>
					</div>
				</div>
			</div>
			<button class="btn btn-primary" type="submit">Enviar</button>
			<button class="btn btn-primary" type="reset">Cancelar</button>
		</form>
	</div>`);
		this.main.append(container);
	}


	showNewPersonForm() {
		this.main.empty();
		if (this.categories.children().length > 1) this.categories.children()[1].remove();
		let container = $(`<div id="new-person" class="container my-3"> <h1 class="display-5">Nueva Persona</h1>
		 <form name="fNewPerson" role="form" novalidate> 
		 <div class="form-row"> 
		 <div class="col-md-6 mb-3"> <label for="ncNombre">Nombre *</label> 
		 <div class="input-group"> 
		 <div class="input-group-prepend"> <span class="input-group-text" id="nombrePrepend"><i class="fas fa-heading"></i></span> 
		 </div> 
		 <input type="text" class="form-control" id="ncNombre" name="ncNombre" placeholder="Jose" aria-describedby="nombrePrepend" value="" required> 
		 <div class="invalid-feedback">
		 El Nombre es obligatorio.
		 </div> 
		 <div class="valid-feedback">
		 Correcto.
		 </div> 
		 </div> 
		 </div> 
		 <div class="col-md-6 mb-3"> <label for="ncApellido1">Apellido1 *</label> <div class="input-group"> 
		 	<div class="input-group-prepend"> <span class="input-group-text" id="apellido1Prepend"><i class="fas fa-image"></i></span> 
		 	</div> 
		 	<input type="text" class="form-control" id="ncApellido1" name="ncApellido1" placeholder="Lirio" aria-describedby="apellido1Prepend" value="" required>
			<div class="invalid-feedback">
				El Apellido1 no es v??lida.
			</div> 
			<div class="valid-feedback">
				Correcto.
			</div> 
		 </div> 
		  <div class="col-md-6 mb-3"> <label for="ncApellido2">Apellido2 *</label> <div class="input-group"> 
		 	<div class="input-group-prepend"> <span class="input-group-text" id="apellido2Prepend"><i class="fas fa-image"></i></span> 
		 	</div> 
		 	<input type="text" class="form-control" id="ncApellido2" name="ncApellido2" placeholder="Ramos" aria-describedby="apellido2Prepend" value="" required>
			<div class="invalid-feedback">
				El Apellido2 no es v??lida.
			</div> 
			<div class="valid-feedback">
				Correcto.
			</div> 
		 </div>
		 <div class="col-md-6 mb-3"> <label for="ncBorn">A??o nacimiento *</label> <div class="input-group"> 
		 	<div class="input-group-prepend"> <span class="input-group-text" id="BornPrepend"><i class="fas fa-image"></i></span> 
		 	</div> 
		 	<input type="date" class="form-control" id="ncBorn" name="ncBorn" placeholder="Born" aria-describedby="bornPrepend" value="" required>
			<div class="invalid-feedback">
				El Apellido2 no es v??lida.
			</div> 
			<div class="valid-feedback">
				Correcto.
			</div> 
		 </div> 
		 </div> 
		 </div>
		 
		</div> 
		</div> 
		<button class="btn btn-primary" type="submit">Enviar</button> 
		<button class="btn btn-primary" type="reset">Cancelar</button> 
		</form> 
		</div> 
		</div>`);
		this.main.append(container);
	}
}
export default VideoSystemgerView;
