import React from 'react';
import Head from  'next/head';
import { AppBar, Container, Toolbar, Typography } from '@mui/material';
import useStyles from '../utils/styles';

const Layout = ({children}) => {
  const classes = useStyles();
  return (
    <React.Fragment>
    <Head>
    <title> Lester Zona</title>
    </Head>
      
      <AppBar position="static" className={classes.navbar}>
      <Toolbar>
        <Typography>LesterZona</Typography>
      </Toolbar>
      </AppBar>
      <Container  className={classes.main}>
      {children}
      </Container>

      {/* create a footer with all rights reserved */}
      <footer className={classes.footer}>
        <Typography>
          All rights reserved. LesterZona
        </Typography>
      </footer>
    </React.Fragment>
  )
}

export default Layout

