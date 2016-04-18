/*
 * Home View Component
 *
 */
var React = require ('react');
import RaisedButton from 'material-ui/RaisedButton';
// var AppBar = require('material-ui/AppBar')['default'] ;
import Dialog from 'material-ui/Dialog';
import DatePicker from 'material-ui/DatePicker';
import Paper from 'material-ui/Paper';
//
var Link = require('react-router').Link;
var IndexLink = require('react-router').IndexLink;
//
var Home = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired,
  },
  render: function(){
    var that = this;
    const style = {
      height: 100,
      width: 100,
      margin: 20,
      textAlign: 'center',
      display: 'inline-block',
    };
    return(
      <div>
          One 
        </div>
    );
  },
});
module.exports = Home;
