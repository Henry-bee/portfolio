import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { SkillWithDescription } from "./skills.types";
import {
  Card,
  Box,
  CardContent,
  Typography,
  SvgIconProps,
  Grid
} from "@material-ui/core";

interface Props {
  SkillIcon: (props: SvgIconProps) => JSX.Element;
  skill: SkillWithDescription;
}

const useStyles = makeStyles(theme => ({
  card: {
    maxHeight: "260px"
  },
  cardContent: {
    padding: "0rem 1rem 2rem 1rem"
  },
  cardHeader: {
    padding: "0.5rem 0rem 0rem 1rem"
  },
  cardHeaderIcon: {
    height: "64px",
    width: "64px"
  },
  cardContentTitleBackground: {},
  cardContentTitle: {
    fontSize: "1rem",
    fontWeight: 500,
    color: "#616161"
  },
  cardContentDescriptionBackground: {
    marginTop: "1rem",
    maxHeight: "130px",
    overflow: "auto"
  },
  cardContentDescription: {
    color: "rgb(102, 102, 102)",
    fontSize: "0.8rem",
    lineHeight: "1.2rem",
    fontWeight: 400
  }
}));

export function SkillWithDescriptionCard(props: Props) {
  const { SkillIcon, skill } = props;
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <Box className={classes.cardHeader}>
        <SkillIcon className={classes.cardHeaderIcon} />
      </Box>
      <CardContent className={classes.cardContent}>
        <Box className={classes.cardContentTitleBackground}>
          <Typography
            variant="body2"
            component="p"
            className={classes.cardContentTitle}
          >
            {skill.name}
          </Typography>
        </Box>
        {skill.description && (
          <Box className={classes.cardContentDescriptionBackground}>
            <Typography
              variant="subtitle2"
              component="p"
              className={classes.cardContentDescription}
            >
              {skill.description}
            </Typography>
          </Box>
        )}
      </CardContent>
    </Card>
  );
}

const useLabelledSkill = makeStyles(theme => ({
  labelledSkillBackground: {},
  labelledSkillIcon: {
    height: "64px",
    width: "64px"
  },
  labelledSkillTitle: {
    fontSize: "1rem",
    fontWeight: 500,
    color: "#616161"
  }
}));

export function LabelledSkill(props: Props) {
  const { SkillIcon, skill } = props;
  const classes = useLabelledSkill();

  return (
    <Grid
      item
      container
      className={classes.labelledSkillBackground}
      direction="column"
      alignItems="center"
    >
      <Grid item>
        <SkillIcon className={classes.labelledSkillIcon} />
      </Grid>
      <Grid item>
        <Typography
          variant="subtitle2"
          component="p"
          className={classes.labelledSkillTitle}
        >
          {skill.name}
        </Typography>
      </Grid>
    </Grid>
  );
}
