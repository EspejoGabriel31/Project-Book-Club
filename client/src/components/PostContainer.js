function PostContainer({ post, onDelete }) {
    return (
        <div>
            <h3>
                <strong>{post.user.first_name} {post.user.last_name}</strong>
            </h3>
            <p>{post.content}</p>
            <button className="btn btn-danger" onClick={onDelete} >
                Delete Post
            </button>
        </div>
    )
}

export default PostContainer;