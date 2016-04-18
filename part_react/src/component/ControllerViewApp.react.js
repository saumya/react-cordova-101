/*
 * Application Entry
 * mb1 : mui-0.15.0-beta-1
 */
var React = require ('react');
// react-router
var Router = require('react-router').Router;
var Link = require('react-router').Link;
var IndexLink = require('react-router').IndexLink;
var browserHistory = require('react-router').browserHistory;
// react material-ui
//var AppBar = require('material-ui/AppBar') ;// this way throws Error !
//import AppBar from 'material-ui/AppBar';// changes for material-ui 0.15.0-beta-1

// ref : https://github.com/callemall/material-ui/issues/4017
var AppBar = require('material-ui/AppBar')['default'] ;

import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';

//import LeftNav from 'material-ui/left-nav';
import Drawer from 'material-ui/Drawer';// previously left-nav
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import ContentAdd from 'material-ui/svg-icons/content/add';

//import HardwareVideogameAsset from 'material-ui/svg-icons/hardware/videogame-asset';

// changes for material-ui 0.15.0-beta-1
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

// Application components
var HomeView = require('./ControllerViewHome.react');
var BootView = require('./ControllerViewBoot.react');


// Component declaration
var ControllerViewApp = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired,
  },
  // changes for material-ui 0.15.0-beta-1
  childContextTypes:{
    muiTheme: React.PropTypes.object.isRequired,
  },
  getChildContext() {
    return {muiTheme: getMuiTheme(baseTheme)};
  },
  // changes for material-ui 0.15.0-beta-1

  // Cordova initialisation
  getInitialState: function(){
    return ({isDeviceReady:'NOPE',isDrawerOpen: false});
  },
  componentWillMount: function(){
    var that = this;
    document.addEventListener("deviceready", that.onDeviceReady, false); // Cordova Event
  },
  componentWillUnmount: function(){
    var that = this;
    document.removeEventListener("deviceready", that.onDeviceReady, false);
  },


  render: function(){
    var that = this;
    var style = {
      position: 'absolute',
      bottom:20,
      right:20,
      title: {
        cursor: 'pointer',
      },
    };

    var onLeftIconTouchTapHandler = function(){
      that.onLeftMenuTouchTap();
    }

      // Two ways to go about after checking the onDeviceReady event.
      // 1. First is just move to a different route on the event
      // 2. Second is adding a if-else and either return a default view or the application on the event

      if(this.state.isDeviceReady==='YEP'){
        return(
          <nav>
          <AppBar
            title={<span style={style.title}>My App Bar</span>}
            iconElementRight={<FlatButton label="Done" />}
            onLeftIconButtonTouchTap={onLeftIconTouchTapHandler} />
          <Drawer docked={false}
                  width={300} swipeAreaWidth={100}
                  open={this.state.isDrawerOpen}
                  onRequestChange={that.onRequestChange} >
              <MenuItem>Profile</MenuItem>
              <MenuItem onTouchTap={that.onMenuOne}>One</MenuItem>
              <MenuItem onTouchTap={that.onMenuTwo}>Two</MenuItem>
          </Drawer>

          { /* renders the children */ this.props.children }

          <FloatingActionButton mini={false} secondary={false} style={style}>
            <ContentAdd />
          </FloatingActionButton>
          </nav>
        );
      }else{
        return(<BootView />);
      }

  },

  // Cordova event handler
  onDeviceReady: function(){
    //alert('AppControllerView : Device Ready!');
    this.setState({isDeviceReady:'YEP'});// type 2: checks the if-else and then moves to the route too
    //this.context.router.push('/home');// type 1: just a different route
  },
  // Drawer
  onLeftMenuTouchTap: function(){
    this.setState({isDrawerOpen: !this.state.isDrawerOpen});
  },
  onRequestChange: function(){
    this.setState({isDrawerOpen: !this.state.isDrawerOpen});
  },
  // End Drawer
  // Menu
  onMenuOne: function(){
    this.context.router.push('/one');
  },
  onMenuTwo: function(){
    this.context.router.push('/two');
  },

});
module.exports = ControllerViewApp;
