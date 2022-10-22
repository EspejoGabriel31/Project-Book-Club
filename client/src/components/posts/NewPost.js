import { useState, useEffect, useContext } from "react"
import {CurrentUser} from '../../contexts/CurrentUser'
import "./Post.css"
function NewPost({ book, onSubmit }) {

    const [commentors, setCommentors] = useState([])

    const [post, setPost] = useState({
        content: '',
        user_id: ''
    })

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`http://localhost:7000/users`)
            const users = await response.json()
            setPost({ ...post, user_id: users[0]?.user_id})
            setCommentors(users)
        }
        fetchData()
    }, [])

    function handleSubmit(e) {
        e.preventDefault()
        onSubmit(post)
        setPost({
            content: '',
            user_id: commentors[0]?.user_id
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