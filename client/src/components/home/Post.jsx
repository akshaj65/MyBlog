import { Box, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles({  
    container: {
        height:350,
        margin:10,
        borderRadius:10,
        border:'1px solid #d3cede',
        display:'flex',
        alignItems:'center',
        flexDirection:'column',
        '& > *': {
            padding:'0 5px 5px 5px'
        }
        
     },
     image:{
         height:150,
         width: "100%",
         objectFit:'cover',
        borderRadius:'10px 10px 0 0',
     },
     text:{
         color:'#878787',
         fontSize:12
     },
     heading:{
         fontSize:18,
         fontWeight:600,
         textAlign:'center'
     },
     detail:{
         fontSize:14,
         wordBreak:'break-word'
     }
  
  });
const Post = ({post}) => {
    const classes=useStyles();
    const url =post.picture || 'https://images.pexels.com/photos/2312369/pexels-photo-2312369.jpeg'
  return (
      <Box className={classes.container}>
          <img src={url} alt="wrapper" className={classes.image}/>
          <Typography className={classes.text}>{post.category}</Typography>
          <Typography className={classes.heading}>{post.title}</Typography>
          <Typography className={classes.text}>Author: {post.username}</Typography>
          <Typography className={classes.detail}>{post.description}</Typography>
      </Box>
  )
};

export default Post;
