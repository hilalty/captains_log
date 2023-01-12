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
              <li>
                <h3>Title: {log.title}</h3> 
                <p>{log.entry}</p> 
                <p>The ship? {log.shipIsBroken ? `It is broken again` : `We're good, it is not broken`}</p>
                
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

module.exports = Index;
