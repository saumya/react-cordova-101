/*
 * Application Entry
 */
(function(){
  // react
  var React = require('react');
  var ReactDOM = require('react-dom');
  // router
  var Router = require('react-router').Router;
  var Route = require('react-router').Route;
  var IndexRoute = require('react-router').IndexRoute;
  var hashHistory = require('react-router').hashHistory;
  // materia-ui
  // ref : https://www.npmjs.com/package/react-tap-event-plugin
  var injectTapEventPlugin = require("react-tap-event-plugin");
  injectTapEventPlugin();


  // Application
  var AppControllerView = require('./component/ControllerViewApp.react');
  var HomeView = require('./component/ControllerViewHome.react');
  var BootView = require('./component/ControllerViewBoot.react');
  var OneView = require('./component/One.react');
  var TwoView = require('./component/Two.react');

  // routes
  var routes = (
    <Route path="/" component={AppControllerView}>
      <IndexRoute component={BootView} />
      <Route path="home" component={HomeView} />
      <Route path="one" component={OneView} />
      <Route path="two" component={TwoView} />
    </Route>
  );

  var App = ReactDOM.render(<Router routes={routes} history={hashHistory} />,document.getElementById('react-app'));
})();
