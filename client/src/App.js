import React from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';

import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import memories from './images/memories.png'
import useStyles from "./styles";

const App = () => {
    const classes = useStyles();

    return (
        <Container maxwidth="lg">
            <AppBar className={classes.appBar} pisition="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center">Memories</Typography>
                <img className={classes.image} src={memories} alt="memories" height="60" maxwidth="10"/>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItens="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form />                            
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
}

export default App;