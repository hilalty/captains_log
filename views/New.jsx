const React = require("react");

class New extends React.Component {
  render() {
    return (
      <div>
        <h1>New Log page</h1>
        <form action="/logs" method="POST">
          Title: <input type="text" name="title" />
          <br />
          Entry: <input type="text" name="entry" />
          <br />
          Is The Ship Broken?: <input type="checkbox" name="shipIsBroken" value="true" checked/>
          <br />
          <input type="submit" name="" value="Make a Log" />
        </form>
      </div>
    );
  }
}

module.exports = New;
