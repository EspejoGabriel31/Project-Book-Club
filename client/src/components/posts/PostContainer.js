import "./Post.css"
import { useContext } from "react"
import {CurrentUser} from "../../contexts/CurrentUser"


function PostContainer({ post, onDelete }) {
    const {currentUser} =useContext(CurrentUser)

    let deleteButton = null
    if (currentUser?.user_id === post.user_id){
        deleteButton = (
        <div className="post-button" onClick={onDelete}>
            <input type="submit" value="Delete"/>
        </div>
        )
    }

    return (
        <div className="post-container">
            <h3>
                {post.user.first_name} {post.user.last_name}
            </h3>
            <p1>{post.content}</p1>
            {deleteButton}
        </div>
    )
}

export default PostContainer;