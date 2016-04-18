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
        <Paper style={style} zDepth={1} />
        <Paper style={style} zDepth={2} />
        <Paper style={style} zDepth={3} />
        <Paper style={style} zDepth={4} />
        <Paper style={style} zDepth={5} />
      </div>
    );
  },
});
module.exports = Home;
