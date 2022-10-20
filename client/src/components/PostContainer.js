function PostContainer({ post
    , onDelete 
}) {
    // console.log("post: ", post.user)
    return (
        <div>
            <h3>
                <strong>{post.user.first_name} {post.user.last_name}</strong>
            </h3>
            <p>{post.content}</p>
            {/* <h4>Rating: {post.stars}</h4> */}
            <button className="btn btn-danger" onClick={onDelete} >
                Delete Post
            </button>
        </div>
    )
}

export default PostContainer;