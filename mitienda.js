// import * as ShoppingCartTest from './shoppingcart/shoppingCartTest.js';
// import {testShoppingCart as newTestFunctionName} from './shoppingcart/shoppingCartTest.js';
//import * as VideoSystemCartTest from './VideoSystem/VideoSystemTest.js';

import VideoSystemApp from './VideoSystem/VideoSystemApp.js';

const historyActions = {
	init: () => {
		VideoSystemApp.handleInit();
		ShoppingCartApp.handleInit();
	},
	showShoppingCart: () => ShoppingCartApp.handleShowShoppingCart(),
	productsCategoryList: (event) => VideoSystemApp.handleProductsCategoryList(event.state.category),
	productsTypeList: (event) =>	VideoSystemApp.handleProductsTypeList(event.state.type),
	showProduct: (event) => VideoSystemApp.handleShowProduct(event.state.serial)
}

window.addEventListener('popstate', function(event) {
  if (event.state){
		historyActions[event.state.action](event);
  }
});

history.replaceState({action: 'init'}, null);

function showResultLayer(){
	// Mostramos capa de ejemplos
	let examples = $('#examples');
	let examplesRows = examples.children();
	examplesRows.hide();
	$(examplesRows[examplesRows.length - 1]).show();
	$('#result').empty();

	// Invocación de ejemplos
	$$result.clear();
}

//showResultLayer();
//VideoSystemCartTest.testVideoSystem();
