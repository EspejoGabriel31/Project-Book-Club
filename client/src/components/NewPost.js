import { useState, useEffect } from "react"


function NewPost({ book, onSubmit }) {

    const [raters, setRaters] = useState([])

    const [post, setPost] = useState({
        content: '',
        stars: 3,
        raterId: ''
    })

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`http://localhost:7000/users`)
            const users = await response.json()
            setPost({ ...post, raterId: users[0]?.userId})
            setRaters(users)
        }
        fetchData()
    }, [])

    let raterOptions = raters.map(rater => {
        return <option key={rater.userId} value={rater.user_id}>{rater.first_name} {rater.last_name}</option>
    })

    function handleSubmit(e) {
        e.preventDefault()
        onSubmit(post)
        setPost({
            content: '',
            stars: 3,
            raterId: raters[0]?.user_id
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
                    <select className="form-control" value={comment.authorId} onChange={e => setComment({ ...comment, authorId: e.target.value })}>
                        {raterOptions}
                    </select>
                </div>
                <div className="form-group col-sm-4">
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
                </div>
            </div>
            <input className="btn btn-primary" type="submit" value="Add Post" />
        </form>
    )
}

export default NewPost