const React = require('react');

class Edit extends React.Component{
  render() {
    const { title, id, shipIsBroken, entry } = this.props.log
    return (
      <>
      <h1>{title} Edit Page</h1>
      <form action={`/logs/${id}?_method=PUT`} method="POST">
          Title: <input type="text" name="title" defaultValue={title}/><br/>
          Entry: <input type="text" name="entry"  defaultValue={entry}/><br/>
          Is Ship Broken?:
              { shipIsBroken? <input type="checkbox" name="shipIsBroken" defaultChecked />: <input type="checkbox" name="shipIsBroken"/> }
          <br/>
          <input type="submit" value="Update"/>
      </form>
      </>
    )
  }
}
module.exports= Edit;