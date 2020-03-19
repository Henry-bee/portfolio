import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import {
  Container,
  Grid,
  Typography,
  Divider,
  Chip,
  Link,
  Button
} from "@material-ui/core";
import LivenessImg from "../static/Liveness.jpg";
import GitHubIcon from "@material-ui/icons/GitHub";

const useStyles = makeStyles((theme: Theme) => ({
  container: {},

  projectContainer: {
    margin: "2rem 0rem 2rem 0rem"
  },
  title: {
    color: "rgb(90,70,70)",
    fontSize: "1.5rem",
    fontWeight: 700,
    letterSpacing: "0.01rem"
  },
  subtitle: {
    color: "#616161",
    fontSize: "0.9rem",
    letterSpacing: "0.05rem"
  },
  body: {
    fontSize: "1rem",
    lineHeight: "1.75rem",
    letterSpacing: "0.01rem"
  },
  iconLink: {
    height: theme.spacing(5),
    width: theme.spacing(5),
    color: "black"
  },
  technologies: {
    background: "red"
  }
}));

export const PortfolioComponent: React.FC = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="sm">
      <Grid container item direction="column" spacing={2}>
        <Grid
          container
          item
          direction="column"
          className={classes.projectContainer}
          justify="space-around"
          alignItems="center"
          spacing={2}
        >
          <Grid item alignContent="center" alignItems="center">
            <img alt="liveness" src={LivenessImg} height="250" width="280" />
          </Grid>
          <Grid item container direction="column" spacing={3}>
            <Grid item>
              <Typography variant="h2" component="h2" className={classes.title}>
                Liveness Detection
              </Typography>
              <Typography
                variant="subtitle1"
                component="p"
                className={classes.subtitle}
              >
                Completed in 2020-01
              </Typography>
            </Grid>

            <Grid item>
              <Typography
                variant="body2"
                component="p"
                className={classes.body}
              >
                A simple cloud-based liveness detection application that
                leverages on AWS services such as AWS Rekognition and AWS
                Serverless Application Model (SAM). To succeed, user has to
                respond to a series of randomised challenges. His actions will
                be captured in a video and analysed in server.
              </Typography>
            </Grid>
          </Grid>

          <Grid item>
            <Button>View Demo</Button>
          </Grid>

          <Grid item container direction="column" spacing={2}>
            <Grid item>
              <Typography
                variant="body2"
                component="p"
                className={classes.subtitle}
              >
                Technologies:
              </Typography>
            </Grid>
            <Grid
              item
              container
              direction="row"
              alignContent="center"
              alignItems="center"
            >
              <Grid item xs={2}>
                <Chip label={"NodeJS"} color="primary" />
              </Grid>
              <Grid item xs={2}>
                <Chip label={"Graphql"} color="primary" />
              </Grid>
              <Grid item xs={2}>
                <Chip label={"React"} color="primary" />
              </Grid>
              <Grid item xs={2}>
                <Chip label={"AWS"} color="primary" />
              </Grid>
            </Grid>
            <Grid item>
              <Link href="#">
                <GitHubIcon className={classes.iconLink} />
              </Link>
            </Grid>
          </Grid>
        </Grid>
        <Divider />
        <Grid
          container
          item
          direction="row"
          className={classes.projectContainer}
          justify="space-around"
        >
          <Grid item container direction="column" xs={12} spacing={3}>
            <Grid item>
              <Typography variant="h2" component="h2" className={classes.title}>
                TradingTensors
              </Typography>
              <Typography
                variant="subtitle1"
                component="p"
                className={classes.subtitle}
              >
                Completed in 2017-12
              </Typography>
            </Grid>

            <Grid item>
              <Typography
                variant="body2"
                component="p"
                className={classes.body}
              >
                Can the financial markets be beaten like chess? A trading
                simulation engine inspired by OpenAI framework that explores the
                profitabiliy of Reinforcement Learning algorithms such as{" "}
                <i>DQN (Deep Q Network)</i> and{" "}
                <i>A3C (Asynchronous Advantage Actor Critic)</i>. Models are
                built with Tensorflow. Results are rather fascinating!
              </Typography>
            </Grid>

            <Grid item container direction="column" spacing={2}>
              <Grid item>
                <Typography
                  variant="body2"
                  component="p"
                  className={classes.subtitle}
                >
                  Technologies:
                </Typography>
              </Grid>

              <Grid
                item
                container
                direction="row"
                alignContent="center"
                alignItems="center"
              >
                <Grid item xs={2}>
                  <Chip label={"Python"} color="primary" />
                </Grid>
                <Grid item xs={3}>
                  <Chip label={"Tensorflow"} color="primary" />
                </Grid>
                <Grid item xs={2}>
                  <Chip label={"Numpy"} color="primary" />
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Link href="https://github.com/Henry-bee/TradingTensors">
                <GitHubIcon className={classes.iconLink} />
              </Link>
            </Grid>
          </Grid>
        </Grid>
        <Divider />
      </Grid>
    </Container>
  );
};
