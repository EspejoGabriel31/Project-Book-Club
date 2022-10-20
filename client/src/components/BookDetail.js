import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router"
import PostContainer from "./PostContainer";
import NewPost from "./NewPost";

function BookDetail() {

	const { book_id } = useParams()

	const history = useHistory()

	const [book, setBook] = useState(null)

	useEffect(() => {
		const getBook = async () => {
			const response = await fetch(`http://localhost:7000/books/${book_id}`)
			const resData = await response.json()
			setBook(resData)
		}
		getBook()
	}, [book_id])

	if (book === null) {
		return <h1>Loading</h1>
	}

	function editBook() {
		history.push(`/books/${book.book_id}/edit`)
	}

	async function deleteBook() {
		await fetch(`http://localhost:7000/books/${book.book_id}`, {
			method: 'DELETE'
		})
		history.push('/books')
	}

	async function deletePost(deletedPost) {
		await fetch(`http://localhost:7000/books/${book.book_id}/posts/${deletedPost.post_id}`, {
			method: 'DELETE'
		})

		setBook({
			...book,
			posts: book.posts
				.filter(post => post.post_id !== deletedPost.post_id)
		})
	}

	async function createPost(post) {
		const response = await fetch(`http://localhost:7000/books/${book.book_id}/posts`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(post)
		})

		const post = await response.json()

		setBook({
			...book,
			posts: [
				...book.posts,
				post
			]
		})

	}


	let posts = (
		<h3 className="inactive">
			No comments yet!
		</h3>
	)
	let rating = (
		<h3 className="inactive">
			Not yet rated
		</h3>
	)
	if (book.posts.length) {
		let sumReview = book.posts.reduce((tot, c) => {
			return tot + c.stars
		}, 0)
		let avgReview = Math.round(sumReview / book.posts.length)
		let stars = ''
		for (let i = 0; i < avgReview; i++) {
			stars += '⭐️'
		}
		rating = (
			<h3>
				{stars} stars
			</h3>
		)
		posts = book.posts.map(post => {
			return (
				<PostContainer key={post.post_id} post={post} onDelete={() => deletePost(post)} />
			)
		})
	}

	return (
		<main>
			<div className="row">
				<div className="col-sm-6">
					<img style={{ maxWidth: 200 }} src={book.picture} alt={book.name} />
				</div>
				<div className="col-sm-6">
					<h1>{book.book_name}</h1>
					<h2>
						Rating
					</h2>
					{rating}
					<br />
					<a className="btn btn-warning" onClick={editBook}>
						Edit
					</a>{` `}
					<button type="submit" className="btn btn-danger" onClick={deleteBook}>
						Delete
					</button>
				</div>
			</div>
			<hr />
			<h2>Discussion</h2>
			<div className="row">
				{posts}
			</div>
			<hr />
			<h2>Got Your Own Rant or Rave?</h2>
			<NewPost
				book={book}
				onSubmit={createPost}
			/>
		</main>
	)
}

export default BookDetail
