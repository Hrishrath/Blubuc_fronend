import e from 'cors';
import React, {useState, useEffect} from 'react'
import { ToastContainer } from 'react-toastify';
import { ErrToast } from '../../utility';
import { isAuthenticated } from '../helper/auth';
import { updateBlog, getBlog, updateLikeComment, getComments } from '../helper/blog'


const CommentBody = (props) => {

	const profile = isAuthenticated().user
	
    const [values, setValues] = useState({
		username: "",
		email: "",
		text: "",
		error: "",
		liked: false,
		success: false
	})
	
	const [commentValues, setCommentsValues] = useState({comments:"", limit:4, likesCount:""});


	const preload = () => {
		console.log(props.blogId)
		getBlog(props.blogId).then(
			data => {
				if(data.error)
				{
					console.log(data.error)
				}
				else {
					console.log(data);
					setCommentsValues({...commentValues,
										comments:data.comments.reverse(),
										likesCount:data.likedBy.length
									});
					if(data.likedBy.includes(profile?profile._id:""))
					{
						console.log(data)
						setValues({...values, liked: true, success : false})
					}
					else {
						setValues({...values, liked: false,success : false})
					}
				}
			}
		)
	}

	useEffect(() => {
		preload();
	}, [values.success])


    const comment = (comData) => {
		return (
			<div key = {comData.key} className="be-comment">
			
			<div className="be-comment-content">
				<span className="be-comment-name">
					<h5>{comData.name}</h5>
				</span>
				<span className="be-comment-time">
					<i className="fa fa-clock-o"> </i>
					{comData.time}
				</span>
				<p className="be-comment-text">
					{comData.text}
				</p>
			</div>
		</div>
		)
	} 


	const formatDate = (date) => {
		let t = date.match(/\d\d:\d\d/);
		let d = date.split("T")[0].split("-").reverse().join("-");
		let result = d +" "+ t;
		return result;
	}

    const handleChange = name => (e) =>
    {
        e.preventDefault();
        setValues({...values, [name]: e.target.value})
    }

    const handleLikeComment = (act) => {
		
   
		if(!profile)
		{
			return ErrToast("You are not allowed to perform this action", 2000)
		}
		// else
		// {
		// 	return console.log(profile)
		// } 

		setValues({...values, success: false})

		let data = {
			act: act,
			blogId: props.blogId,
			writer:profile._id
		}; 
		
		if(act == "comment")
		{
			data.commentBody = values.text;
		}

		updateLikeComment(data, isAuthenticated().token).then(
			data =>{
				if(data.error)
				{
					setValues({...values, error:data.error})
				}
				else {
					console.log("Submitted")
					if(act=="comment")
					setValues({username:"", email:"", text: "", error:"", success: true})
					else if(act=="like")
					setValues({...values,  success: true})
				}
			} 
		)
	}

  return (
    <div className="container">
	 <ToastContainer/>
	<div className="be-comment-block">
		<h1 className="comments-title">Comments ({commentValues.comments.length})</h1>
		<div className = "likediv">
  <i className = {`likebtn ${values.liked?"press" :""}`} onClick = {() => {handleLikeComment("like")}}></i>
  <i className = {`likeCount ${values.liked?"press" :""}`} >{commentValues.likesCount}</i>
</div>
		{commentValues.comments? commentValues.comments.map((obj, i) => {
				if(i<commentValues.limit)
				{
			return comment({
			name:obj.user.name +" "+ obj.user.lastname ,
			time:formatDate(obj.updatedAt),
			text:obj.commentBody,
			key: i
			})	
		}
		}): ""
		}
		<div className = "comAction">
		{commentValues.comments.length > commentValues.limit ? <button className = "combtn loadCom" onClick = {() => setCommentsValues({...commentValues, limit:commentValues.limit+4})}>Load more</button>: ""}
		{commentValues.limit > 4 ? <button className = "combtn ComCollapse" onClick = {() => setCommentsValues({...commentValues, limit:4})}>collapse</button>: ""}
		</div>
		<form className="form-block">
			<div className="row">
				<div className="col-xs-12 col-sm-6 com-in">
					<div className="form-group fl_icon">
						<input className="form-input" onChange = {handleChange("username")} type="text" value = {values.username} placeholder="Your name"/>
					</div>
				</div>
				<div className="col-xs-12 col-sm-6 fl_icon com-in">
					<div className="form-group fl_icon">
						<input className="form-input" onChange = {handleChange("email")} type="email" value = {values.email} placeholder="Your email"/>
					</div>
				</div>
				<div className="col-xs-12 com-in">									
					<div className="form-group">
						<textarea className="form-input" onChange = {handleChange("text")} required="" value = {values.text} placeholder="Your text"></textarea>
					</div>
				</div>
				<a className="btn btn-primary pull-right" onClick = {() => handleLikeComment("comment")}>submit</a>
			</div>
		</form>
	</div>
	</div>
  )
}

export default CommentBody
