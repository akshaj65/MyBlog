import { Grid } from "@material-ui/core";
import { useEffect, useState } from "react";
import { Link ,useLocation} from "react-router-dom";
import Post from "./Post";

import { getAllPosts } from '../../service/api'

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const {search} =useLocation(); //it is a function that returns the location object that contans info about current url
    // console.log(search);
    useEffect(() => {
        const fetchData = async () => {
            let data = await getAllPosts(search);
            // console.log(data)
            setPosts(data);
        }
        fetchData();
    }, [search])
    return (
        posts.map(post => {
            return <Grid item lg={3} sm={4} xs={12}>
                <Link to={`/details/${post._id}`} style={{ color: 'initial' }}>
                    <Post post={post} />
                </Link>    {/* initial is for not inheritting anchor tag color */}
            </Grid>
        })
    )
};

export default Posts;
