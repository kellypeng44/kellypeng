import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image'
import { Typography, Grid, Paper, Container } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Mask from '../images/mask.png';

const useStyles = makeStyles({
    paper: {
        heigh: '70vh',
        outline: 'none',
    },
    content: {
        paddingTop: '20px',
        paddingLeft: '40px',
        paddingRight: '40px', 
    },
});

export default function Hero() {
    const classes = useStyles();
    return(
        <Paper elevation={0} className={classes.paper}>
            {/* <Container maxWidth='md' className={classes.container}> */}
                <Grid container direction='row' alignItems='center' justifyContent='center' className={classes.content}>
                    <Grid item className={classes.image}>
                        <img src={Mask} alt="Mask on"></img>
                        {/* <StaticImage src='../images/mask.png' alt='mask on'></StaticImage> */}
                    </Grid>
                    <Grid item maxWidth='sm'>
                        <Typography sx={{ fontFamily: 'Karla', fontSize: '23px' }}>
                            Hi, this is Kelly and she is graduating from Stony Brook University in May 2022 with a bachelor degree in Computer Science.
                            <br />
                            <br />
                            Kelly is interested in web development especially for front-end and she's currently looking for new grad SE positions.
                        </Typography>
                    </Grid>
                </Grid>
            {/* </Container> */}
        </Paper>
    );
};