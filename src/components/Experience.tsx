import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import {
  Container,
  Grid,
  Typography,
  Box,
  Link,
  CardContent,
  Card
} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
  container: {},
  timeline: {},
  title: {
    color: "rgb(90,70,70)",
    fontSize: "1.3rem",
    fontWeight: 500
  },
  jobTitle: {
    color: "rgb(90, 40, 40)",
    fontWeight: 500
  },
  companyLink: {
    textDecoration: "none",
    fontWeight: 700,
    color: "#404040",
    "&:hover": {
      color: theme.palette.primary.main,
      height: "100%",
      textDecoration: "none"
    }
  },
  jobDate: {
    color: "#616161",
    fontSize: "0.9rem",
    letterSpacing: "0.05rem"
  },
  bodyContainer: {
    textAlign: "justify"
  },
  body: {
    fontSize: "1rem",
    lineHeight: "1.75rem",
    letterSpacing: "0.01rem"
  },

  educationTitle: {
    fontSize: "1rem",
    lineHeight: "1.75rem",
    letterSpacing: "0.01rem"
  }
}));

export default function ExperienceComponent() {
  const classes = useStyles();
  return (
    <Container maxWidth="sm" className={classes.container}>
      <Grid container direction="column" justify="space-evenly" spacing={5}>
        <Grid item>
          <Card>
            <CardContent>
              <Grid container direction="column" spacing={2}>
                <Grid item>
                  <Box display="flex" flexDirection="column">
                    <Typography
                      variant="h6"
                      component="h6"
                      className={classes.jobTitle}
                    >
                      AWS Certified Solution Architect (Associate)
                    </Typography>
                    <Typography
                      variant="body1"
                      component="p"
                      className={classes.jobDate}
                    >
                      2020-01 - 2023-01
                    </Typography>
                  </Box>
                </Grid>

                <Grid item className={classes.bodyContainer}>
                  <Typography
                    variant="body2"
                    component="p"
                    className={classes.body}
                  >
                    Obtained my AWS certification as a mandatory requirement for
                    AWS Enterprise partnership.
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        <Grid item>
          <Card>
            <CardContent>
              <Grid container direction="column" spacing={2}>
                <Grid item>
                  <Box display="flex" flexDirection="column">
                    <Typography
                      variant="h6"
                      component="h6"
                      className={classes.jobTitle}
                    >
                      Software Engineer @{" "}
                      <Link
                        href="https://www.cynopsis-solutions.com/"
                        className={classes.companyLink}
                      >
                        Cynopsis Solutions
                      </Link>{" "}
                    </Typography>
                    <Typography
                      variant="body1"
                      component="p"
                      className={classes.jobDate}
                    >
                      2018-07 - Present
                    </Typography>
                  </Box>
                </Grid>

                <Grid item className={classes.bodyContainer}>
                  <Typography
                    variant="body2"
                    component="p"
                    className={classes.body}
                  >
                    Built modern REST applications with<b> Django </b>,{" "}
                    <b>Celery</b> and <b>PostgreSQL</b>, integrated with AWS
                    services (<i>ECS, RDS, S3, SQS, Cognito, Lambda</i>) for
                    core products.
                    <br />
                    Developed microservices using <b>NodeJS</b> and{" "}
                    <b>Docker</b>, deployed on AWS ECS that interact with third
                    party APIs (AWS Rekognition API, Google Search API, Dow
                    Jones API, etc).
                    <br />
                    Led development initiative to revamp legacy Transaction
                    Monitoring product (Athena2.0) and acted as primary point of
                    contact for client related issue and project management
                    team.
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        <Grid item>
          <Card>
            <CardContent>
              <Grid container direction="column" spacing={2}>
                <Grid item>
                  <Box display="flex" flexDirection="column">
                    <Typography
                      variant="h6"
                      component="h6"
                      className={classes.jobTitle}
                    >
                      National University of Singapore
                    </Typography>
                    <Typography
                      variant="body1"
                      component="p"
                      className={classes.jobDate}
                    >
                      2014-05 - 2018-05
                    </Typography>
                  </Box>
                </Grid>

                <Grid item className={classes.bodyContainer}>
                  <Typography
                    variant="body2"
                    component="p"
                    className={classes.body}
                  >
                    Graduated with Bachelors of Engineering in{" "}
                    <i>Industrial & Systems Engineering</i> from National
                    University of Singapore.
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
