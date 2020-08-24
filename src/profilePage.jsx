import React, { Component } from "react";
import { Box } from "@material-ui/core/";
import { Typography } from "@material-ui/core/";
class Profilepage extends Component {
  state = { item: {} };

  componentDidMount() {
    const item = JSON.parse(
      localStorage.getItem(this.props.location.state["detail"])
    );
    this.setState({ Name: this.props.location.state["detail"], item });
  }
  render() {
    return (
      <Box m={12} style={{ textAlign: "center" }}>
        <Typography variant="h2" component="h2">
          {"Welcome " + this.state.Name}
        </Typography>
        <Typography variant="h4" component="h3">
          {"Username : " + this.state.item.Username}
        </Typography>
      </Box>
    );
  }
}

export default Profilepage;
