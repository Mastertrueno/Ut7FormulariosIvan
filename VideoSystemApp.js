import VideoSystem from './VideoSystemModel.js';
import VideoSystemController from './VideoSystemController.js';
import VideoSystemView from './VideoSystemView.js';

const VideoSystemApp = new VideoSystemController(
    VideoSystem.getInstance(), new VideoSystemView()
  );
const historyActions = {
    init: () => {
        VideoSystemApp.handleInit();
    },

       ActorListInMenu: () => VideoSystemApp.handleActorList(),
       bindDirectorListInMenu: (event) => VideoSystemApp.handleDirectorList(event.state.director),
       bindProductsCategoryList: (event) => VideoSystemApp.handleProductionsCategoryList(event.state.category),

       bindProducts: (event) => VideoSystemApp.handleProduction(event.state.product),
       /* bindProductsList: (event) => VideoSystemApp.handleAletProductionList(event.state.product),
       bindInit: (event) => VideoSystemApp.handleInit(event.state.category),
       bindProductsTypeList: (event) => VideoSystemApp.handleProductionsTypeList(event.state.category),
       bindProductsCategoryListInMenu: (event) => VideoSystemApp.handleProductionsCategoryList(event.state.category),
       bindActors: (event) => VideoSystemApp.handleActor(event.state.actor),
       bindProductsPerson: (event) => VideoSystemApp.handleProductionPerson(event.state.actor),
       bindActorsProd: (event) => VideoSystemApp.handleActorProd(event.state.actor),
       bindActorsProd: (event) => VideoSystemApp.handleShowProduct(event.state.actor),
       bindDirectors: (event) => VideoSystemApp.handleDirector(event.state.director),
       bindShowProduct: (event) => VideoSystemApp.handleShowProduct(event.state.type)  */


}
window.addEventListener('popstate', function (event) {
    if (event.state) {
        console.log(event.state);
        historyActions[event.state.action](event);
    }
});
history.replaceState({action: 'init'}, null);

export default VideoSystemApp;
