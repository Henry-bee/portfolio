import React from "react";
import { Switch, Route } from "react-router-dom";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { LandingPage } from "./LandingPage";
import { PortfolioComponent } from "./Portfolio";
import { HeaderWithRouter } from "./Header";
import { SkillsOverview } from "./SkillsOverview";
import ExperienceComponent from "./Experience";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    body: {
      minHeight: "50vh",
      paddingTop: "3rem",
      paddingBottom: "3rem"
    }
  })
);

export const Main = () => {
  const classes = useStyles();
  return (
    <div>
      <HeaderWithRouter />
      <div className={classes.body}>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/skills" component={SkillsOverview} />
          <Route path="/portfolio" component={PortfolioComponent} />
          <Route path="/experience" component={ExperienceComponent} />
        </Switch>
      </div>
    </div>
  );
};
