import { AppBar, Grid, Toolbar, Typography } from "@material-ui/core";
import React from "react";

const BannerNav = () => {
  return (
    <AppBar position="static" className='flex items-center justify-center' color="primary">
      <Toolbar>
        <Grid container justify="center" wrap="wrap">
          <Grid item>
            <Typography variant="h6">
              سامانه دسته‌بندی اخبار 
            </Typography>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default BannerNav;
