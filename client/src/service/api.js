import axios from 'axios';

const url = 'http://localhost:4000/api/v1'

export const createPost = async (post) => {
    try {
        return axios.post(`${url}/post/new`, post)
    } catch (error) {
        console.log("Error while calling createpost api", error);
    }
}

export const getAllPosts = async (param) =>{
    try{
        let response= await axios.get(`${url}/posts/${param}`);
        return response.data.posts;
    }catch(error){
        console.log("Error while calling getallpost api", error);
    }
}

export const getPost =async (id)=>{
    try{
        let  response = await axios.get(`${url}/post/${id}`);
        return response.data.blogPost;
    }catch(error){
        console.log("Error  while calling getpost api", error);
    }
}

export const updatePost =async (id,post)=>{
    try{
        return  await axios.post(`${url}/update/${id}`,post);
    }catch(error){
        console.log("Error  while calling updatepost api", error);
    }
}

export const deletePost =async (id,post)=>{
    try{
        return  await axios.delete(`${url}/post/${id}`,post);
    }catch(error){
        console.log("Error  while calling deletepost api", error);
    }
}

export const uploadFile = async (data) => {
    try{
       return await axios.post(`${url}/file/upload`,data);
    }catch(error){
        console.log("Error while uploading the image", error);
    }
}