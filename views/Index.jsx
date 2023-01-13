const React = require("react");

class Index extends React.Component {
  render() {
    const { logs } = this.props;

    return (
      <div>
        <h1>Logs index page</h1>
        <nav>
          <a href="/logs/new">Create a New Log</a>
        </nav>
        <ul>
          {this.props.logs.map((log, i) => {
            return (
              <li key={i}>
                <h3>
                  Title: <a href={`/logs/${log.id}`}>{log.title}</a>
                </h3>
                <p>{log.entry}</p>
                <p>
                  Is ship broken?{"  "}
                  {log.shipIsBroken
                    ? `Yes`
                    : `No`}
                </p>
                <form
                  action={`/logs/${log._id}?_method=DELETE`}
                  method="POST"
                >
                  <input type="submit" value="remove" />
                </form>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

module.exports = Index;
