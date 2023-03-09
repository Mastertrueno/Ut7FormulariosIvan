import "./VideoSystemApp.js";
const historyActions = {
    init: () => {
        VideoSystemApp.handleInit();
    },
    /*    showCategories: () => VideoSystemApp.handleShowShoppingCart(),
       showProductions: (event) => VideoSystemApp.handleProductsCategoryList(event.state.category),
       showAletProductions: (event) => VideoSystemApp.handleProductsCategoryList(event.state.category),
   
       showCategoriesInMenu: (event) => VideoSystemApp.handleProductsCategoryList(event.state.category),
       showActorsInMenu: (event) => VideoSystemApp.handleProductsCategoryList(event.state.category),
       showActor: (event) => VideoSystemApp.handleProductsCategoryList(event.state.category),
       showDirectorsInMenu: (event) => VideoSystemApp.handleProductsCategoryList(event.state.category),
       listProductions: (event) => VideoSystemApp.handleProductsCategoryList(event.state.category),
       listProduction: (event) => VideoSystemApp.handleProductsCategoryList(event.state.category),
       listActors: (event) => VideoSystemApp.handleProductsCategoryList(event.state.category),
       showProductions: (event) => VideoSystemApp.handleProductsCategoryList(event.state.category),
       showProductions: (event) => VideoSystemApp.handleProductsCategoryList(event.state.category),
       showProductions: (event) => VideoSystemApp.handleProductsCategoryList(event.state.category), */
       ActorListInMenu: () => VideoSystemApp.handleActorList(),
       bindDirectorListInMenu: (event) => VideoSystemApp.handleDirectorList(event.state.category),
       bindProductsCategoryList: (event) => VideoSystemApp.handleProductionsCategoryList(event.state.category),

       bindProducts: (event) => VideoSystemApp.handleProduction(event.state.category),
       bindProductsList: (event) => VideoSystemApp.handleAletProductionList(event.state.category),
       bindInit: (event) => VideoSystemApp.handleInit(event.state.category),
       bindProductsTypeList: (event) => VideoSystemApp.handleProductionsTypeList(event.state.category),
       bindProductsCategoryListInMenu: (event) => VideoSystemApp.handleProductionsCategoryList(event.state.category),
       bindActors: (event) => VideoSystemApp.handleActor(event.state.category),
       bindProductsPerson: (event) => VideoSystemApp.handleProductionPerson(event.state.category),
       bindActorsProd: (event) => VideoSystemApp.handleActorProd(event.state.category),
       bindActorsProd: (event) => VideoSystemApp.handleShowProduct(event.state.category),
       bindDirectors: (event) => VideoSystemApp.handleDirector(event.state.category),
       bindShowProduct: (event) => VideoSystemApp.handleShowProduct(event.state.type),


    //showProduct: (event) => VideoSystemApp.handleShowProduct(event.state.serial)
}
window.addEventListener('popstate', function (event) {
    if (event.state) {
        console.log(event.state);
        historyActions[event.state.action](event);
    }
});



/*showCategories(categories)
showProductions(categories)
showAletProductions(productions)
showCategoriesInMenu(categories)
showActorsInMenu()
showActor(actors)
showDirectorsInMenu()
listProductions(production, category, Videosystem)
listProduction(product, Videosystem)
listActors(actors, Videosystem)
listActor(actor, Videosystem)
listDirector(director, Videosystem)
showDirectors(directors, Videosystem) */


/* this.#VideoSystemView.bindActorListInMenu(
    this.handleActorList
);
this.#VideoSystemView.bindDirectorListInMenu(
    this.handleDirectorList
);
this.#VideoSystemView.bindProductsCategoryList(
    this.handleProductionsCategoryList
);
this.#VideoSystemView.bindProducts(
    this.handleProduction
);
this.#VideoSystemView.bindProductsList(
    this.handleAletProductionList
);
this.#VideoSystemView.bindInit(this.handleInit)
this.#VideoSystemView.bindProductsTypeList(this.handleProductionsTypeList);


this.#VideoSystemView.bindProductsCategoryListInMenu(
    this.handleProductionsCategoryList
);

this.#VideoSystemView.bindActors(
    this.handleActor
);
this.#VideoSystemView.bindProductsPerson(
    this.handleProductionPerson
);
this.#VideoSystemView.bindActorsProd(
    this.handleActorProd,
    this.handleShowProduct
);
this.#VideoSystemView.bindDirectors(
    this.handleDirector
);
this.#VideoSystemView.bindShowProduct(this.handleShowProduct); */