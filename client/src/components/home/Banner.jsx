import React from 'react';
import { makeStyles,Box ,Typography } from '@material-ui/core';

const useStyles = makeStyles({  
  root: {
    background: `url(${'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg'}) center/55% repeat-x #000`,
    width:'100%',
    height:'50vh',
    position: 'relative',
    zIndex:-1,
    
   },
   overlay:{
    backgroundColor: 'rgba(0,0,0,0.5)',
    position: 'absolute',
    height:'50vh',
    top: 68,
    bottom: 0,
    left: 0,
    right: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex:-1,  //so that suggeston we be above stack


    '& :first-child':{
      fontSize:66,
      color:'#ffffff',
      lineHeight:1.2,
    },
    '& :last-child':{

      fontSize:20,
      padding:4,
      background:'#ffffff',
      color:'#575252',
      letterSpacing:3,
      fontWeight:'bolder'
    }
   }

});
 const Banner = () => {
  const classes = useStyles();
  return <>
    <Box className={classes.root }>
    </Box>
    <Box className={classes.overlay}>
      <Typography>MYBLOG</Typography>
      <Typography>Read It ; Write It</Typography>
    </Box>
  </>;
};

export default Banner;