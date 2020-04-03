import React from 'react';
import Grid from '@material-ui/core/Grid';
import Socials from './Socials';
import JobData from './JobData';
import ProfilePicture from '../images/ProfilePicture.jpeg';
import { Frame } from 'framer';
function Portfolio() {
  return (
    <React.Fragment>
      <Grid container direction='column' alignItems='center' justify='center'>
        <Grid item>
          <Frame
            size={100}
            radius={100}
            position={'relative'}
            drag={true}
            dragPropagation={true}
            dragConstraints={{ top: 0, bottom: 0, left: -200, right: 200 }}
            dragElastic={0.6}
            dragTransition={{ bounceStiffness: 300, bounceDamping: 10 }}
            background={null}
            image={ProfilePicture}></Frame>
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
