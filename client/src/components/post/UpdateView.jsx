import { Box, Button, FormControl, InputBase, makeStyles, TextareaAutosize } from "@material-ui/core";
import { AddCircle } from '@material-ui/icons';
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { getPost, updatePost } from "../../service/api";


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
    form: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 10
    },
    textField: {
        flex: 1,
        margin: '0 30px',
        fontSize: 25
    },
    textArea: {
        width: '100%',
        margin: '50px 0',
        fontSize: 18,
        border: 'none',
        '&:focus-visible': {
            outline: 'none'
        }
    }
}));

const initialValues = {
    title: '' ,
    description: '',
    picture: '',
    username: 'akshaj',
    category: 'All',
    createdDate: new Date(),
}
const UpdateView = ({ match }) => {
    const classes = useStyles();
    const url = 'https://images.unsplash.com/photo-1540535099023-85e352781693?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y3JlYXRlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60';


    const [post, setPost] = useState({ initialValues });
    const history = useHistory();
    const handleChange = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value })
    }

    const updateBlog = async () => {
        if(post.title.length <2)  return ; // this prevents from updating empty title
        await updatePost(match.params.id, post);
        history.push(`/details/${match.params.id}`);
    }

    useEffect(() => {
        const fetchData = async () => {
            let data = await getPost(match.params.id);
            setPost(data);
        }
        fetchData();
    },[])

    return (
        <Box className={classes.container}>
            <img src={post.picture || url} alt="banner" className={classes.image} />
            <FormControl className={classes.form}>
                <AddCircle fontSize="large" color="secondary" />
                <InputBase 
                    placeholder="Title"
                    name="title"
                    className={classes.textField}
                    value={post.title}
                    onChange={(e) => handleChange(e)}
                />
                <Button type="submit" onClick={() => updateBlog()} variant="contained" color="secondary">Update</Button>
            </FormControl>
            <TextareaAutosize
                minRows={5}
                name="description"
                placeholder='Share your knowledge.... '
                className={classes.textArea}
                onChange={(e) => handleChange(e)}
                value={post.description}
            />
        </Box>
    )
};

export default UpdateView;
