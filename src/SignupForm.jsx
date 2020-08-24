import React from "react";
import Form from "./utils/Form";
import Joi from "joi-browser";
import Card from "@material-ui/core/Card";
import { Typography } from "@material-ui/core";
import { Box } from "@material-ui/core";
import { CardContent } from "@material-ui/core";
import ConfirmDialog from "./Dialog";

class Loginform extends Form {
  schema = {
    Username: Joi.string().alphanum().min(6).max(30).required(),
    Password: Joi.string().alphanum().min(6).max(30).required(),
    Email: Joi.string().email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net"] },
    }),
    Name: Joi.string().required().label("Name"),
  };

  doSubmit() {
    this.setState({ Dialog: true });
    setTimeout(() => {
      this.props.history.push({
        pathname: "/profilepage",
        state: { detail: this.state.data.Name },
      });
      this.setState({ Dialog: false });
    }, 5000);
  }
  render() {
    return (
      <Box m={5} style={{ textAlign: "center" }} boxShadow={4}>
        <ConfirmDialog
          open={this.state.Dialog}
          title={this.state.title}
          content={this.state.content}
        />
        <Card>
          <CardContent>
            <div>
              <Typography
                gutterBottom
                variant="h2"
                component="h2"
                textAlign="center"
              >
                SIGNUP
              </Typography>
              <form onSubmit={this.handleSubmit}>
                {this.renderInput("Name", "Name")}
                {this.renderInput("Username", "Username")}
                {this.renderInput("Email", "Email")}
                {this.renderInput("Password", "Password", "password")}
                {this.renderButton("Register")}
              </form>
              <div className="container"></div>
            </div>
          </CardContent>
        </Card>
      </Box>
    );
  }
}

export default Loginform;
