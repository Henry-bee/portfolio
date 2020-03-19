import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

function Copyright() {
  return (
    <Typography
      variant="body2"
      color="textSecondary"
      align="center"
      style={{ color: "#999" }}
    >
      {"Copyright © henrybyhee " + new Date().getFullYear()}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: "#353535",
    paddingTop: "1rem",
    paddingBottom: "1rem"
  },
  text: {
    color: "#999"
  }
}));

export function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Copyright />
        <Typography
          variant="body2"
          color="textSecondary"
          align="center"
          component="p"
          className={classes.text}
        >
          Icons made by{" "}
          <a
            href="https://www.flaticon.com/authors/dave-gandy"
            title="Dave Gandy"
            className={classes.text}
          >
            Dave Gandy
          </a>
          {", "}
          <a
            href="https://www.flaticon.com/authors/freepik"
            title="Freepik"
            className={classes.text}
          >
            Freepik
          </a>{" "}
          from{" "}
          <a
            href="https://www.flaticon.com/"
            title="Flaticon"
            className={classes.text}
          >
            {" "}
            www.flaticon.com
          </a>
        </Typography>
      </Container>
    </footer>
  );
}
