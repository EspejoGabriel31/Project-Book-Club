import { useState, useContext } from "react"
import {CurrentUser} from '../../contexts/CurrentUser'
import "./Post.css"
function NewPost({ onSubmit }) {

    const [post, setPost] = useState({
        content: '',
        // user_id: ''
    })

    function handleSubmit(e) {
        e.preventDefault()
        onSubmit(post)
        setPost({
            content: ''
        })
    }

    const { currentUser } = useContext(CurrentUser)

    if(!currentUser){
        return <p>You must be logged in to post!</p>
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="row">
                <div className="form-group col-sm-12">
                    <label htmlFor="content">Content</label>
                    <textarea
                        required
                        value={post.content}
                        onChange={e => setPost({ ...post, content: e.target.value })}
                        className="form-control"
                        id="content"
                        name="content"
                    />
                </div>
            </div>
            <div className="row">
                <div className="post-submit-button">
                    <input type="submit" value="Post" />
                </div>
            </div>
            
        </form>
    )
}

export default NewPost