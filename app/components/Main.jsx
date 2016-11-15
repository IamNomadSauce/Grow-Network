var React = require('react');
var NavBarDeluxe = require('NavBarDeluxe');
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';


var Main = (props) => {
  return (
      <div className="col-md-12">
        <NavBarDeluxe />
        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
          {props.children}
        </MuiThemeProvider>
      </div>
  );
}

module.exports = Main;
