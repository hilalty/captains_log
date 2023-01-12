const React = require("react");

class Show extends React.Component {
  render() {
    const log = this.props.log;


    return (
      <div>
        <h1>Logs show page</h1>
        <nav>
          <a href="/logs">Back</a>
        </nav>
        <h2>Title: {this.props.log.title}</h2>
        <h4>{this.props.log.entry}</h4>
        <h4>Technical Part: {this.prop.log.shipIsBroken
          ? `Unfortunately ship is broken`
          : `Hora! Ship is not broken`}</h4>
        
      </div>
    );
  }
}

module.exports = Show;