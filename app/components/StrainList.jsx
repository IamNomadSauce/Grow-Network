var React = require('react');
var Strain = require('Strain');
// THIS OPERATES AS A REPLACEMENT FOR CannabisMessage
var StrainList = React.createClass({
  render: function() {
    var {strains, value} = this.props;
    // console.log('StrainList - RENDER - PRE-RETURN dataL: ' + {dataL});
    var renderStrains = () => {
      return strains.map((strain) => {
        return (
          <Strain key={strain.id} {...strain} />
          // <Strain key={strain.id} name={name} {...strain} />
        );
      });
    };
    return (
      <div>
        {renderStrains()}
      </div>
    );
  }
});

module.exports = StrainList;
