function PostContainer({ post, onDelete }) {
    return (
        <div className="border col-sm-4">
            <h4>{post.content}</h4>
            <h3>
                <strong>- {post.rater.first_name} {post.rater.last_name}</strong>
            </h3>
            <h4>Rating: {post.stars}</h4>
            <button className="btn btn-danger" onClick={onDelete} >
                Delete Post
            </button>
        </div>
    )
}

export default PostContainer;