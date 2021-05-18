import React,{Fragment, useEffect, useState} from 'react'
import { getBlog, deleteBlog } from './helper/blog'
import parse from 'html-react-parser';
import { isAuthenticated } from './helper/auth';
import CommentBody from './Shared/CommentBody';
import Loader from './Shared/Loader';
import { ToastContainer} from 'react-toastify';


const Blog = (props) => {

	const [values, setValues] = useState({
		id: "",
		title: "Tiktok Wrap Hack",
		content: "",
		error:"",
		alert: false,
		success: false
	})



const preload = () => {
	getBlog(props.match.params.blogId).then(
		data => {
			if(data.error)
			{
				setValues({...values,error: data.error});
			}
			else{
				setValues({...values,
					id: data._id, 
					title:data.title,
					content:data.content, success: true});
			}
		}
	)
}

	useEffect(() => {
		preload();
	}, [])

	const customAlert = () => {
		return (
			<div class="modal fade show" id="staticBackdropLive" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="staticBackdropLiveLabel" style={{display: "block"}} aria-modal="true" role="dialog">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-body">
        <h3>Are you sure?</h3>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-danger" onClick = {handleDelete} data-bs-dismiss="modal">Delete</button>
        <button type="button" className="btn btn-primary" onClick = {() => setValues({...values,alert:false})}>Close</button>
      </div>
    </div>
  </div>
</div>
      
		)
	}

	const handleDelete = () => {
		const blogData = {
			blogId: values.id,
			userId: isAuthenticated().user._id,
			token: isAuthenticated().token
		}
		deleteBlog(blogData).then(
			data =>
			{
				if(data.error)
				{
					console.log(data.error)
					setValues({...values, error:data.error})
				}
				else{
					console.log("Deleted Successfully")
					window.location.href = "/blogs";
				}
			} 
		)
	}



const adminAction = () => {
	return (
		<div className="admin-actions">
		 	<button className = "editbtn" onClick = {() => {window.location.href = `/blog/update/${values.id}`}} value = "Edit">Edit</button>
		 	<button className = "delbtn" onClick = {() => {setValues({...values, alert: true});}} value = "Delete">Delete</button>
		 </div>
	)
}


const blogBody = () => {
	return (
		<Fragment>
			<div className="page-title">
    
	<a href="/" className="logo"></a>
	<h1>{values.title} </h1>
	<div className="entry-categories" id="header-anchor">
	{/* <span className="topcat">
	<a href="https://iamafoodblog.com/category/recipes/cooking/easy/" rel="category tag">easy</a>
	</span><a href="https://iamafoodblog.com/category/recipes/food/beef-recipes/ground-beef-recipes/" rel="category tag">ground beef recipes</a>
	<a href="https://iamafoodblog.com/category/recipes/cuisines/mexican-food/" rel="category tag">mexican food</a> */}
	</div>
	 <div className="post-teaser">
	 Whether you customize it your way
	 or make this crunchwrap supreme 
	 version, the tiktok wrap hack is 
	 basically the smartest way to make
	 a wrap.
	 </div> 	
	 <div className="author">
	 Posted January 12, 2021 by Stephanie
	 </div>
	 <div className="content">
	 {parse(values.content)}
	 </div>
	 {isAuthenticated() && isAuthenticated().user.role == 1 && adminAction()}
</div>
	{values.alert ? customAlert(): ""}
{values.id != "" ? <CommentBody blogId = {values.id}/>:""}
		</Fragment>
	)
}


  return (
      <Fragment>
	  <ToastContainer/>
	  {/* <Loader/> */}
	  <div className ='container-fluid' style = {{minHeight:'100vh'}}>
		  {
			  values.success?blogBody():<Loader/>
		  }
	  </div>
	  </Fragment>
  )
}

export default Blog
