/*
 * Boot View Component
 *
 */
var React = require ('react');
import RaisedButton from 'material-ui/RaisedButton';
// var AppBar = require('material-ui/AppBar')['default'] ;
import Dialog from 'material-ui/Dialog';
import DatePicker from 'material-ui/DatePicker';
import Paper from 'material-ui/Paper';
//
var Boot = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired,
  },
  render: function(){
    return(
      <div> Device Not yet Ready !</div>
    );
  },
});
module.exports = Boot;
