/* 
$(function () {
	let divExamples = document.getElementById('container');
	let buttons = divExamples.getElementsByClassName('navbar-nav').getElementsByClassName('document');
	
	let categories = $('#container');
	cleanMessage();
	let bOpen = $('<button class="btn btn-primary m-1">Abrir ventana</button>');
	bOpen.click(function (event) {
		mywindow = window.open("auxPage.html", "Mywindow", "width=800, height=600, top=250, left=250, titlebar=yes, toolbar=no, menubar=no, location=no");
	});
	categories.append(bOpen);
});

if (!mywindow || mywindow.closed) {
	mywindow = window.open("auxPage.html", "Mywindow", "width=800, height=600, top=250, left=250, titlebar=yes, toolbar=no, menubar=no, location=no");
} else {
	mywindow.focus();
} *//* 
(function () {
	let mywindow = null;
	let menu = $('.navbar-nav');
	let divExamples = document.getElementsByClassName('container')[0];
	console.log(divExamples);
	//let botones = $(divExamples.getElementsByClassName("collapse")[0].getElementsByTagName("div")[0].getElementsByClassName('navbar-nav'));
	//console.log(botones);
	console.log(menu);
	let bot = $(`<div class="buttons">
					<ul class="navbar-nav windows">
						<li class="nav-item ">
							<a class="nav-link " href="#" id="navWindow" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							Abrir Ventana
							</a>
						</li>
						<li class="nav-item ">
							<a class="nav-link btn " href="#" id="navWindow" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							 Cerrar Ventana
							</a>
						</li>
					</ul>
				</div>`);
	menu.append(bot);
	console.log($(menu).children().last());
	let buttons=$(menu).children().last().children().children().children();
	console.log(buttons[0]); */
	/* buttons[0].addEventListener('click', function () {
		//$$result.clear();
		console.log('Funciones globales sin window');
		 console.log(document.getElementById('message').textContent);
		console.log('Funciones globales con window');
		console.log(window.document.getElementById('message').textContent);  
	});

	buttons[1].addEventListener('click', function () {
		console.log('Dimensiones de la ventana');
		console.log("Altura: " + window.innerHeight);
		console.log("Anchura: " + window.innerWidth);
	}); *//* 
	buttons[0].addEventListener('click', function () {
		window.mywindow = null;

			if (!mywindow || mywindow.closed) {
				mywindow = window.open("auxPage.html", "Mywindow", "width=800, height=600, top=250, left=250, titlebar=yes, toolbar=no, menubar=no, location=no");
			} else {
				mywindow.focus();
			}
	});
	buttons[1].addEventListener('click', function () {
		if (mywindow && !(mywindow.closed)) {
				mywindow.close();
				console.log('Acabas de cerrar la ventana.');
			} else {
				console.log('La ventana está cerrada.');
			}
		
	}); */
	/* 
	buttons[9].addEventListener('click', function () {
		console.log('Gestión de nueva ventana');
		console.log('Abrir ventanas');
		console.log('Pasar el foco entre ventanas');
		console.log('Modificar contenido entre ventanas');
		console.log('Invocar funciones entre ventanas');
		console.log('Abrir enlaces en nueva ventana');
		console.log('Mover ventanas');
		console.log('Redimensionar ventanas');

		window.mywindow = null;
		let categories = $('#categories');
		let bOpen = $('<button class="btn btn-primary m-1">Abrir ventana</button>');
		bOpen.click(function (event) {
			if (!mywindow || mywindow.closed) {
				mywindow = window.open("auxPage.html", "Mywindow", "width=800, height=600, top=250, left=250, titlebar=yes, toolbar=no, menubar=no, location=no");
			} else {
				mywindow.focus();
			}
		});
		categories.prepend(bOpen);

		// Close Window
		let bClose = $('<button class="btn btn-danger m-1">Cerrar Ventana </button>');
		bClose.click(function (event) {
			if (mywindow && !(mywindow.closed)) {
				mywindow.close();
				console.log('Acabas de cerrar la ventana.');
			} else {
				console.log('La ventana está cerrada.');
			}
		});
		bOpen.after(bClose);

		// moveTo
		let bMoveTo = $('<button class="btn btn-primary m-1">Mover</button>');
		bMoveTo.click(function (event) {
			if (mywindow && !(mywindow.closed)) {
				mywindow.moveTo(1250, 1250);
				mywindow.focus();
			} else {
				console.log('La ventana está cerrada.');
			}
		});
		link.after(bMoveTo);


	});

	function reload() {
		window.location.reload();
	} */

//})();


