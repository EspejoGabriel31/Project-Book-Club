import { useState, useEffect } from "react"


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
            setPost({ ...post, post_id: users[0]?.user_id})
            setCommentors(users)
        }
        fetchData()
    }, [])

    let commentorOptions = commentors.map(commentor => {
        return <option key={commentor.user_id} value={commentor.user_id}>{commentor.first_name} {commentor.last_name}</option>
    })

    function handleSubmit(e) {
        e.preventDefault()
        onSubmit(post)
        setPost({
            content: '',
            user_id: commentors[0]?.user_id
        })
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
                <div className="form-group col-sm-4">
                    <label htmlFor="state">Author</label>
                    <select 
                        className="form-control" 
                        value={post.user_id} 
                        onChange={e => setPost({ ...post, user_id: e.target.value })}
                    >
                        {commentorOptions}
                    </select>
                </div>
                <div className="form-group col-sm-4">
                    <input className="btn btn-primary" type="submit" value="Add Post" />
                </div>
            </div>
            
        </form>
    )
}

export default NewPost