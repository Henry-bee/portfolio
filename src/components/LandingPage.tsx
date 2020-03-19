import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { Typography, Link } from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import EmailIcon from "@material-ui/icons/Email";
import { LinkedInIcon } from "./icons/linkedin";
import { GithubIcon } from "./icons/github";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    title: {
      color: "rgb(90,70,70)",
      fontSize: "1.3rem",
      fontWeight: 500
    },
    bodyGrid: {
      textAlign: "justify"
    },
    body: {
      fontSize: "1rem",
      lineHeight: "1.75rem",
      letterSpacing: "0.01rem"
    },
    contactIcon: {
      fontSize: "2rem",
      color: "rgb(90,70,70)"
    }
  })
);

export const LandingPage: React.FC = () => {
  const classes = useStyles();
  return (
    <div>
      <Container maxWidth="sm" className={classes.root}>
        <Grid container direction="column" spacing={5}>
          <Grid container item direction="column" spacing={1}>
            <Grid
              container
              item
              direction="row"
              alignContent="center"
              spacing={1}
            >
              <Grid item>
                <PersonIcon className={classes.title} />
              </Grid>
              <Grid item>
                <Typography
                  variant="h4"
                  component="h4"
                  className={classes.title}
                >
                  About Me
                </Typography>
              </Grid>
            </Grid>

            <Grid item className={classes.bodyGrid}>
              <Typography
                variant="body2"
                component="p"
                className={classes.body}
              >
                Hi, I am Henry Hee, a Software Engineer currently based in
                Singapore. Since 2018, I have been building scalable backend
                services (and microservices) on AWS cloud.
                <br />
                <br />
                My expertise mainly lies in backend development and cloud
                infrastructure design. However, I do have experience using
                front-end framework such as <b>React</b> (this website) and I'm
                definitely keen to do more. I'm comfortable using{" "}
                <b>Javascript/Typescript</b> and <b>Python </b>, used{" "}
                <b>Golang</b>. for some projects and very keen to pick up Rust.
                I have obtained{" "}
                <b>AWS Certified Solutions Architect - Associate</b>{" "}
                certification in Jan 2020.
                <br />
                <br />
                To me, nothing is more satisfying than coming up with simple,
                elegant and readable code and a well architected system.
              </Typography>
            </Grid>
          </Grid>
          <Grid container item direction="row">
            <Grid item xs={3} md={1}>
              <Link href="#">
                <LinkedInIcon className={classes.contactIcon} />
              </Link>
            </Grid>
            <Grid item xs={3} md={1}>
              <Link href="#">
                <GithubIcon className={classes.contactIcon} />
              </Link>
            </Grid>
            <Grid item xs={3} md={1}>
              <Link href="mailto:henrybyhee@gmail.com">
                <EmailIcon className={classes.contactIcon} />
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
