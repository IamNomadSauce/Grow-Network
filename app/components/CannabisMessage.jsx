var React = require('react');

var CannabisMessage = ({name, dataL}) => {
  return(
    <div>
      <h1>Results for {name}</h1>
      <h2>{dataL}</h2>
    </div>
  );
}
module.exports = CannabisMessage;
