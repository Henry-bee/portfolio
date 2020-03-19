import React from "react";
import { Container, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import Typography from "@material-ui/core/Typography";
import { NodeJsIcon } from "./icons/nodejs";
import { SkillWithDescriptionCard, LabelledSkill } from "./SkillCard";
import { SkillWithDescription, SkillPercent } from "./skills.types";
import { DjangoIcon } from "./icons/django";
import { PostgresIcon } from "./icons/postgres";
import { RedisIcon } from "./icons/redis";
import { GraphqlIcon } from "./icons/graphql";
import { GolangIcon } from "./icons/golang";
import { AwsIcon } from "./icons/aws";
import { DockerIcon } from "./icons/docker";
import { ReactIcon } from "./icons/react";
import { JenkinsIcon } from "./icons/jenkins";
import Rating from "@material-ui/lab/Rating";

const useStyles = makeStyles(theme => ({
  title: {
    color: "rgb(90,70,70)",
    fontSize: "1.3rem",
    fontWeight: 500
  },
  skillsSubheaderText: {
    color: "rgb(90,70,70)",
    fontWeight: 500,
    fontSize: "1.3rem"
  },
  languageCard: {},
  languageItem: {},
  textBody: {
    fontSize: "0.9rem",
    fontWeight: 450,
    color: "#616161"
  },
  skillBarDisabled: {
    color: theme.palette.primary.main
  },
  skillBarLabel: {
    background: theme.palette.primary.main
  },
  icon: {
    color: theme.palette.primary.main
  },
  cardSize: {},
  backendList: {},
  listTitle: {}
}));

export const SkillsOverview: React.FC = () => {
  const classes = useStyles();

  const languages: SkillPercent[] = [
    { name: "Python 3", score: 4 },
    { name: "Javascript (ES6)", score: 4 },
    { name: "TypeScript", score: 4 },
    { name: "Golang", score: 3.5 }
  ];

  const frontend = [{ name: "React", icon: ReactIcon }];
  const backend: SkillWithDescription[] = [
    {
      name: "Node.js",
      icon: NodeJsIcon
    },
    {
      name: "Django",
      icon: DjangoIcon
    },
    {
      name: "PostgreSQL",
      icon: PostgresIcon
    },
    {
      name: "Redis",
      icon: RedisIcon
    },
    {
      name: "GraphQL",
      icon: GraphqlIcon
    },
    {
      name: "Golang",
      icon: GolangIcon
    },
    {
      name: "Docker",
      icon: DockerIcon
    },
    {
      name: "Jenkins",
      icon: JenkinsIcon
    }
  ];

  const tools: SkillWithDescription[] = [
    {
      name: "Amazon Web Services",
      description:
        "My number one cloud provider for any infrastructure needs. Worked extensively with API Gateway, Lambda, S3, RDS, DynamoDB, ECS, Route53, SQS and ELB to design highly available microservices",
      icon: AwsIcon
    }
  ];

  return (
    <Container maxWidth="sm">
      <Grid container direction="column" spacing={2}>
        <Grid container item direction="column" spacing={4}>
          {/** Language Proficiency */}
          <Grid container item direction="column" spacing={2}>
            <Grid item>
              <Typography
                variant="h6"
                component="h6"
                className={classes.skillsSubheaderText}
              >
                Language Proficiency
              </Typography>
            </Grid>
            <Grid
              item
              container
              direction="column"
              justify="space-between"
              xs={12}
              spacing={5}
            >
              {languages.map(skillPercent => (
                <Grid
                  item
                  container
                  direction="row"
                  justify="space-around"
                  alignContent="center"
                  alignItems="center"
                  className={classes.languageItem}
                >
                  <Grid item xs={4}>
                    <Typography
                      variant="body2"
                      component="p"
                      className={classes.textBody}
                    >
                      {skillPercent.name}
                    </Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <Rating value={skillPercent.score} precision={0.5} />
                  </Grid>
                </Grid>
              ))}
            </Grid>
          </Grid>
          {/** Frontend Development */}
          <Grid container item direction="column">
            <Grid item>
              <Typography
                variant="h6"
                component="h6"
                className={classes.skillsSubheaderText}
              >
                Frontend Development
              </Typography>
              <Box>
                <Grid
                  item
                  container
                  direction="row"
                  spacing={3}
                  justify="center"
                >
                  {frontend.map(item => (
                    <Grid item xs={2} md={3}>
                      <LabelledSkill skill={item} SkillIcon={item.icon} />
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Grid>
            <Grid item />
          </Grid>
          {/** BACKEND */}
          <Grid container item direction="column">
            <Grid item container direction="column" spacing={2}>
              <Grid item>
                <Typography
                  variant="h6"
                  component="h6"
                  className={classes.skillsSubheaderText}
                >
                  Backend Development
                </Typography>
              </Grid>
              <Box>
                <Grid
                  item
                  container
                  direction="row"
                  spacing={3}
                  justify="center"
                >
                  {backend.map(item => (
                    <Grid item xs={4} md={3}>
                      <LabelledSkill skill={item} SkillIcon={item.icon} />
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Grid>
            <Grid item />
          </Grid>

          {/** Infrastructure & Tools */}
          <Grid container item direction="column">
            <Grid item container direction="column" spacing={2}>
              <Grid item>
                <Typography
                  variant="h6"
                  component="h6"
                  className={classes.skillsSubheaderText}
                >
                  Infrastructure
                </Typography>
              </Grid>
              <Grid
                item
                container
                direction="row"
                justify="center"
                alignItems="center"
              >
                {tools.map(skill => (
                  <Grid item xs={12}>
                    <SkillWithDescriptionCard
                      SkillIcon={skill.icon}
                      skill={skill}
                    />
                  </Grid>
                ))}
              </Grid>
            </Grid>
            <Grid item />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};
