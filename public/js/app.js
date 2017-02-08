'use strict';

var testComponent = React.createClass({
  displayName: 'testComponent',

  render: function render() {
    return React.createElement(
      'h1',
      null,
      'hello kirby'
    );
  }
});

ReactDOM.render(React.createElement(
  'h1',
  null,
  'hello kirby'
), document.getElementById('app'));