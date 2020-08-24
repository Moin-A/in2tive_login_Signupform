import React from "react";
import Form from "./utils/Form";
import Joi from "joi-browser";
import Card from "@material-ui/core/Card";
import { Typography } from "@material-ui/core";
import { Box } from "@material-ui/core";
import { CardContent } from "@material-ui/core";
import ConfirmDialog from "./Dialog";

class Loginform extends Form {
  pattern = /^[a-zA-Z0-9!@#$%&*]{3,25}$/;
  schema = {
    Username: Joi.string().alphanum().min(4).max(30).required(),
    Password: Joi.string().alphanum().min(8).max(30).required(),
  };

  doSubmit() {
    let item = localStorage.getItem(this.state.data.Username);
    if (item) {
      setTimeout(() => {
        this.props.history.push({
          pathname: "/profilepage",
          state: { detail: this.state.data.Username },
        });
      }, 5000);
    } else {
      this.setState({
        title: "User is not registered",
        content: "please head to Signup page",
        Dialog: true,
      });
      setTimeout(() => {
        this.setState({ Dialog: false });
      }, 2000);
    }
  }

  render() {
    return (
      <Box m={12} style={{ textAlign: "center" }}>
        <ConfirmDialog
          open={this.state.Dialog}
          title={this.state.title}
          content={this.state.content}
        />
        <Card raised={true}>
          <CardContent>
            <Typography
              gutterBottom
              variant="h2"
              component="h2"
              textAlign="center"
            >
              Login
            </Typography>

            <form onSubmit={this.handleSubmit}>
              {this.renderInput("Username", "Username")}
              {this.renderInput("Password", "Password", "password")}
              {this.renderButton("LOGIN")}
            </form>
          </CardContent>
        </Card>
      </Box>
    );
  }
}

export default Loginform;
