const React = require("react");
const Link = require("react-router-dom").Link;
//const styles = require("../App.css");
const MyWork = require("./links/MyWork");
/* the main page for the index route of this app */

class Footer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showThis: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      showThis: !this.state.showThis,
    });
    console.log("handled ", this.state.showThis);
  }

  render() {
    return (
      <footer>
        <MyWork />

        <div className="row textAlign">
          <Link className="col link border p-1" to="/about">
            About Me
          </Link>
          <br />
          <Link className="col link border p-1" to="/contact">
            Contact Me
          </Link>
          <br />
          <Link className="col link border p-1" to="/">
            Home
          </Link>
        </div>
      </footer>
    );
  }
}
export default Footer;