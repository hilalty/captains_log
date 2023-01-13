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
        <p>
          The ship?{" "}
          {log.shipIsBroken
            ? `It is broken again`
            : `We're good, it is not broken`}
        </p>
      </div>
    );
  }
}

module.exports = Show;
