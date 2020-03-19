import React from "react";
import selfie from "../static/avatar.jpg";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Avatar } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    avatar: {
      width: theme.spacing(20),
      height: theme.spacing(20),
      margin: theme.spacing(5)
    }
  })
);

export const ProfilePic: React.FC = () => {
  const classes = useStyles();
  return <Avatar className={classes.avatar} alt="Henry" src={selfie} />;
};
