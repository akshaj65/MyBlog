import { Box, Button, FormControl, InputBase, makeStyles, TextareaAutosize } from "@material-ui/core";
import { AddCircle } from '@material-ui/icons';
import { useEffect, useState } from "react";
import { useHistory } from "react-router";

import { createPost, uploadFile } from "../../service/api";

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
    title: '',
    description: '',
    picture: '',
    username: 'akshaj',
    category: 'App Development',
    createdDate: new Date(),
}
const CreateView = () => {
    const classes = useStyles();
    const url = 'https://images.unsplash.com/photo-1540535099023-85e352781693?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y3JlYXRlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60';
    const history = useHistory();

    const [Post, setPost] = useState(initialValues);
    const [file, setFile] = useState('');


    useEffect(()=>{
        const getImage =async  () =>{
            if(file){
                const data = new FormData();
                data.append('name',file.name);
                data.append("file",file);

                await uploadFile(data);
            }
            getImage();
        }
    },[file])

    const handleChange = (e) => {
        setPost({ ...Post, [e.target.name]: e.target.value })
    }

    const savePost = async () => {
        if (Post.title.length > 2 && Post.description.length > 2) {
            await createPost(Post);
            history.push('/')
        }
    }

    return (
        <Box className={classes.container}>
            <img src={url} alt="banner" className={classes.image} />
            <FormControl className={classes.form}>
                <label htmlFor="fileInput">
                    <AddCircle fontSize="large" color="secondary" />
                </label>
                <input
                    type="file"
                    id="fileInput"
                    style={{display:'none'}}
                    onChange={(e)=>setFile(e.target.files[0])}
                />
                <InputBase
                    onChange={(e) => handleChange(e)}
                    placeholder="Title"
                    className={classes.textField}
                    name='title' />
                <Button onClick={() => savePost()} variant="contained" color="secondary">Publish</Button>
            </FormControl>
            <TextareaAutosize
                minRows={5}
                placeholder='Share your knowledge.... '
                className={classes.textArea}
                onChange={(e) => handleChange(e)}
                name='description'
            />
        </Box>
    )
};

export default CreateView;
