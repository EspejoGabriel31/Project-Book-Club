import { useState, useEffect } from "react"


function NewPost({ book, onSubmit }) {

    const [commentors, setCommentors] = useState([])

    const [post, setPost] = useState({
        content: '',
        stars: 3,
        post_id: ''
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

    let commentorOptions = commentors.map(rater => {
        return <option key={rater.user_id} value={rater.user_id}>{rater.first_name} {rater.last_name}</option>
    })

    function handleSubmit(e) {
        e.preventDefault()
        onSubmit(post)
        setPost({
            content: '',
            post_id: commentors[0]?.user_id
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
                    <select className="form-control" value={post.post_id} onChange={e => setPost({ ...post, post_id: e.target.value })}>
                        {commentorOptions}
                    </select>
                </div>
                {/* <div className="form-group col-sm-4">
                    <label htmlFor="stars">Star Rating</label>
                    <input
                        value={post.stars}
                        onChange={e => setPost({ ...post, stars: e.target.value })}
                        type="range"
                        step="0.5"
                        min="1"
                        max="5"
                        id="stars"
                        name="stars"
                        className="form-control"
                    />
                </div> */}
                <div className="form-group col-sm-4">
                    <input className="btn btn-primary" type="submit" value="Add Post" />
                </div>
            </div>
            
        </form>
    )
}

export default NewPost