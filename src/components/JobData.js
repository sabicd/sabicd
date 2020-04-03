import React from 'react';
import Chip from '@material-ui/core/Chip';
import job from '../constants/job.json';
import { makeStyles } from '@material-ui/core/styles';
import { Frame, Stack } from 'framer';
const { techsUsed, ...jobData } = job;
const jobDataKeys = Object.keys(jobData);

const useStyles = makeStyles((theme) => ({
  techChip: {
    margin: theme.spacing(0.5),
  },
  jobChip: {
    color: 'white',
    backgroundColor: '#bdbdbd',
    margin: theme.spacing(0.5),
  },
}));
const JobTitle = () => {
  const classes = useStyles();

  return (
    <>
      {jobDataKeys.map((jobKey) => (
        <Chip
          key={jobKey}
          label={`${jobKey}: ${job[jobKey]}`}
          className={classes.jobChip}
        />
      ))}
      <Stack
        height={40}
        width={60 * techsUsed.length}
        gap={20}
        position={'relative'}
        distribution='center'
        direction={'horizontal'}>
        {techsUsed.map((tech) => (
          <Frame
            height={35}
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            drag={true}
            width={tech.length < 5 ? 35 : 45 + tech.length}
            whileHover={{ scale: 0.95 }}
            background={null}
            dragTransition={{ bounceStiffness: 300, bounceDamping: 10 }}
            key={tech}>
            <Chip
              size='small'
              key={tech}
              label={tech}
              clickable
              className={classes.techChip}
            />
          </Frame>
        ))}
      </Stack>
    </>
  );
};

export default JobTitle;
