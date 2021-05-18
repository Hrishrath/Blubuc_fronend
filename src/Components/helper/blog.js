import {Base_Url} from '../../backend'

export const createBlog = (blogData, token) => {
    return fetch(`${Base_Url}/blog/create/${blogData.writer}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(blogData)
      })
        .then( res => {
            console.log("RES: ",res);
             return res.json();
        })
        .catch( err => console.log("Error",err));
}

export const getBlog = (blogId) => {
    return fetch(`${Base_Url}/blog/${blogId}`,
        {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            }
        }).then( res => {
            return res.json();
        }).catch(err => console.log("Error: ", err))
}

export const getAllBlogs = () => {
    return fetch(`${Base_Url}/blog`,
    {
        method: "GET",
        headers: {
            Accept: "application/json",
                "Content-Type": "application/json"
        }
    }).then( res => {
        return res.json();
    }).catch(err => console.log("Error: ", err))
}



export const updateBlog = (blogData, blogId, token) => {
   return fetch(`${Base_Url}/blog/${blogId}/${blogData.writer}`,
    {
        method: "PUT",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body:JSON.stringify(blogData)
    }).then(res => {
        return res.json()
    }).catch(err => console.log("ERROR: ",err));
}


export const updateLikeComment = (blogData, token) => {
   return fetch(`${Base_Url}/blog/${blogData.blogId}/comlike/${blogData.writer}`,
    {
        method: "PUT",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body:JSON.stringify(blogData)
    }).then(res => {
        return res.json()
    }).catch(err => console.log("ERROR: ",err));
}


export const deleteBlog = (blogData) => {
   return fetch(`${Base_Url}/blog/${blogData.blogId}/${blogData.userId}`,
    {
        method: "DELETE",
        headers: {
            Authorization: `Bearer ${blogData.token}`
        },
    }).then( res =>{
        return res.json();
    }).catch(err => console.log("ERROR: ", err));
}


export const getComments = (blogId) => {
    return fetch(`${Base_Url}/comments/${blogId}`)
    .then(res => {
        return res.json();
    })
    .catch(err => console.log("Error: ", err))
}

