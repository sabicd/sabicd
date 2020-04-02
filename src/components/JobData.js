import React from "react";
import Chip from "@material-ui/core/Chip";
import job from "../constants/job.json";

import { makeStyles } from "@material-ui/core/styles";
const { techsUsed, ...jobData } = job;
const jobDataKeys = Object.keys(jobData);

const useStyles = makeStyles(theme => ({
	chip: {
		margin: theme.spacing(0.5)
	}
}));
const JobTitle = () => {
	const classes = useStyles();

	return (
		<>
			{jobDataKeys.map(jobKey => (
				<Chip
					key={jobKey}
					label={`${jobKey}: ${job[jobKey]}`}
					className={classes.chip}
				/>
			))}
			<br />
			{techsUsed.map(tech => (
				<Chip
					size='small'
					key={tech}
					label={`${tech}`}
					className={classes.chip}
				/>
			))}
		</>
	);
};

export default JobTitle;
