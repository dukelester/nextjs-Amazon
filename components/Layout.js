import React from 'react';
import Head from  'next/head';
import { AppBar, Container, Toolbar, Typography } from '@mui/material';
const Layout = ({children}) => {
  return (
    <React.Fragment>
    <Head>
    <title> Lester Zona</title>
    </Head>
      
      <AppBar position="static">
      <Toolbar>
        <Typography>LesterZona</Typography>
      </Toolbar>
      </AppBar>
      <Container >
      {children}
      </Container>

      {/* create a footer with all rights reserved */}
      <footer>
        <Typography>
          All rights reserved. LesterZona
        </Typography>
      </footer>
    </React.Fragment>
  )
}

export default Layout

