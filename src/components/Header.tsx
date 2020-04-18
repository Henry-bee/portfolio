import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { ProfilePic } from "./selfie";
import { Grid, Container, Typography } from "@material-ui/core";
import { withRouter, RouteComponentProps } from "react-router-dom";

const avatarHeaderStyle = makeStyles((theme: Theme) =>
  createStyles({
    container: {},
    gridItem: {},
    name: {
      fontWeight: 800,
      fontSize: "4rem",
      color: "rgb(70,70,70)",
      letterSpacing: "0.2rem"
    },
    subtitle: {
      fontSize: "1.2rem",
      color: "rgb(100,100,100)"
    }
  })
);

function AvatarHeaderComponent() {
  const classes = avatarHeaderStyle();

  return (
    <Container maxWidth="lg">
      <Grid
        container
        direction="row"
        justify="center"
        alignContent="center"
        alignItems="center"
        className={classes.container}
      >
        <Grid item className={classes.gridItem}>
          <ProfilePic />
        </Grid>
        <Grid
          item
          container
          xs={6}
          className={classes.gridItem}
          direction="column"
        >
          <Grid item>
            <Typography variant="h2" component="h2" className={classes.name}>
              Henry Hee
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="subtitle1"
              component="p"
              className={classes.subtitle}
            >
              Software Engineer and cloud fanatic
              <br />
              who cares deeply about <b>clean code</b> and <b>scalability</b>.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

const useSkillsPortfolioHeaderStyle = makeStyles((theme: Theme) => ({
  container: {},
  name: {
    fontWeight: 800,
    fontSize: "4rem",
    color: "rgb(70,70,70)",
    letterSpacing: "0.2rem"
  },
  subtitle: {
    fontSize: "1.2rem",
    color: "rgb(100,100,100)"
  }
}));

function SkillsHeaderComponent() {
  const classes = useSkillsPortfolioHeaderStyle();
  return (
    <Container maxWidth="lg">
      <Grid
        container
        direction="row"
        justify="center"
        alignContent="center"
        alignItems="center"
        className={classes.container}
      >
        <Grid item>
          <ProfilePic />
        </Grid>
        <Grid item container xs={6} direction="column">
          <Grid item>
            <Typography variant="h2" component="h2" className={classes.name}>
              Skills.
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="subtitle1"
              component="p"
              className={classes.subtitle}
            >
              And technologies used.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

const useExperienceHeaderStyle = makeStyles((theme: Theme) => ({
  name: {
    fontWeight: 800,
    fontSize: "4rem",
    color: "rgb(70,70,70)",
    letterSpacing: "0.2rem"
  },
  subtitle: {
    fontSize: "1.2rem",
    color: "rgb(100,100,100)"
  },
  wordBox: {
    background: "red"
  }
}));

function ExperienceHeaderComponent() {
  const classes = useExperienceHeaderStyle();
  return (
    <Container maxWidth="lg">
      <Grid
        container
        direction="row"
        justify="center"
        alignContent="center"
        alignItems="center"
      >
        <Grid item>
          <ProfilePic />
        </Grid>
        <Grid item container xs={12} sm={6} direction="column">
          <Grid item>
            <Typography variant="h2" component="h2" className={classes.name}>
              Experience.
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="subtitle1"
              component="p"
              className={classes.subtitle}
            >
              Career milestones
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

const usePortfolioHeaderStyle = makeStyles((theme: Theme) => ({
  name: {
    fontWeight: 800,
    fontSize: "4rem",
    color: "rgb(70,70,70)",
    letterSpacing: "0.2rem"
  },
  subtitle: {
    fontSize: "1.2rem",
    color: "rgb(100,100,100)"
  },
  wordBox: {
    background: "red"
  }
}));

function PortfolioHeaderComponent() {
  const classes = usePortfolioHeaderStyle();
  return (
    <Container maxWidth="lg">
      <Grid
        container
        direction="row"
        justify="center"
        alignContent="center"
        alignItems="center"
      >
        <Grid item>
          <ProfilePic />
        </Grid>
        <Grid item container xs={12} sm={6} direction="column">
          <Grid item>
            <Typography variant="h2" component="h2" className={classes.name}>
              Portfolio.
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="subtitle1"
              component="p"
              className={classes.subtitle}
            >
              Things I've built for the web
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

const headerStyle = makeStyles((theme: Theme) => ({
  headerBox: {
    background: "rgb(230,230,230,0.6)",
    paddingTop: "0.5rem",
    paddingBottom: "3rem",
    borderBottomStyle: "solid",
    borderBottomWidth: "1px",
    borderBottomColor: "rgba(0,0,0,.2)"
  }
}));

function DynamicHeaderComponent(props: RouteComponentProps) {
  const classes = headerStyle();
  const { location } = props;
  const { pathname } = location;

  return (
    <header className={classes.headerBox}>
      {pathname === "/portfolio" ? (
        <PortfolioHeaderComponent />
      ) : pathname === "/skills" ? (
        <SkillsHeaderComponent />
      ) : pathname === "/experience" ? (
        <ExperienceHeaderComponent />
      ) : (
        <AvatarHeaderComponent />
      )}
    </header>
  );
}

export const HeaderWithRouter = withRouter(props => (
  <DynamicHeaderComponent {...props} />
));
