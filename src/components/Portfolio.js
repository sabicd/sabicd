import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Socials from "./Socials";
import JobData from "./JobData";
import ProfilePicture from "../images/ProfilePicture.jpeg";
const useStyles = makeStyles(theme => ({
	large: {
		width: theme.spacing(12),
		height: theme.spacing(12)
	}
}));
function Portfolio() {
	const classes = useStyles();
	return (
		<React.Fragment>
			<Grid container direction='column' alignItems='center' justify='center'>
				<Grid item>
					<Avatar
						alt='Daniel Sabic'
						src={ProfilePicture}
						className={classes.large}
					/>
				</Grid>
				<Grid item>
					<JobData />
				</Grid>
				<Grid item>
					<Socials />
				</Grid>
			</Grid>
		</React.Fragment>
	);
}

export default Portfolio;
