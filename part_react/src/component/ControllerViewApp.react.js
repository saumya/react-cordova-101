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

// Component declaration
var AppControllerView = React.createClass({
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
    return(
      <nav>
          <AppBar
            title={<span style={style.title}>My App Bar</span>}
            iconElementRight={<FlatButton label="Done" />} />
          <Drawer docked={false} width={300} swipeAreaWidth={100} open={false} >
              <MenuItem>Profile</MenuItem>
              <MenuItem>View All Items</MenuItem>
              <MenuItem>Logout</MenuItem>
          </Drawer>

          { /* renders the children */ this.props.children }

          <FloatingActionButton mini={false} secondary={false} style={style}>
            <ContentAdd />
          </FloatingActionButton>
      </nav>
    );
  },
});
module.exports = AppControllerView;
