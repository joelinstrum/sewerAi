import React from "react";
import { connect } from "react-redux";
import * as utils from "@lib/utils";

class Home extends React.PureComponent {
  componentDidMount() {
    utils.setWindowTitle(this.props.title);
  }

  render() {
    return <div>Home</div>;
  }
}

const mapState = ({ appReducer }) => ({
  title: appReducer.title,
});

export default connect(mapState)(Home);
