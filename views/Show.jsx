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
        <h2>
          Title: <a href={`/logs/${log.id}`}>{log.title}</a>
        </h2>
        <p>{log.entry}</p>
        <h4>How about the ship?</h4>
        <p>
          {log.shipIsBroken
            ? `Unfortunately it is broken again`
            : `We're good, it is not broken`}
        </p>
      </div>
    );
  }
}

module.exports = Show;
