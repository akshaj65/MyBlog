import { Box, makeStyles, Typography } from "@material-ui/core";
import { Edit } from '@material-ui/icons';
import { Delete } from '@material-ui/icons';
import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { deletePost, getPost } from "../../service/api";


const useStyles = makeStyles((theme) => ({
    container: {
        padding: '0 100px',
        // for responsiveness:when its less than md(medium) then padding become 0
        [theme.breakpoints.down('md')]: {
            padding: 0
        }
    },
    image: {
        width: '100%',
        height: '50vh',
        objectFit: 'cover'
    },
    icons: {
        float: 'right'
    },
    icon: {
        margin: 5,
        border: '1px solid #878787',
        padding: 5,
        borderRadius: 10,
        fontSize: 30
    },
    heading: {
        fontSize: 38,
        fontWeight: 600,
        textAlign: 'center',
        margin: '50px 0 10px 0'
    },
    subheading: {
        color: '#878787',
        display: 'flex',
        margin: '20px 0',
        [theme.breakpoints.down('sm')]: {
            display: 'block'
        }
    },
    link: {
        backgroundColor: 'unset',
        color:'inherit'
    }

}));

const DetailView = ({ match }) => {  //default prop for every functional component known as match :it matches what is there in url
    const classes = useStyles();
    const url = 'https://images.unsplash.com/photo-1529553815871-df205a9a2891?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80';

    const [post, setPost] = useState({});
    const history = useHistory();


    useEffect(() => {
        const fetchData = async () => {
            let data = await getPost(match.params.id);
            setPost(data);
        }
        fetchData();
    }, [])

    const deleteBlog = async () => {
        await deletePost(post._id);
        history.push('/');
    }

    return (
        <Box className={classes.container}>
            <img src={post.picture || url} alt="banner" className={classes.image} />
            <Box className={classes.icons}>
                <Link to={`/update/${post._id}`} className={classes.link}><Edit className={classes.icon} color={'primary'} /></Link>
                <Delete onClick={() => deleteBlog()} className={classes.icon} color={'error'} />
            </Box>
            <Typography className={classes.heading}>{post.title}</Typography>
            <Box className={classes.subheading}>
                <Link to={`/?username=${post.username}`} className={classes.link}>
                    <Typography >Author:<span style={{ fontWeight: 600 }}>{post.username}</span></Typography>
                </Link>
                <Typography style={{ marginLeft: 'auto' }}>{new Date(post.createdAt).toDateString()}</Typography>
            </Box>

            <Typography>{post.description}</Typography>
        </Box>
    )
};

export default DetailView;
