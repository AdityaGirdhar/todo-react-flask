import React, { useState, useEffect } from 'react'

export default function About() {
	const [data, setData] = useState([{}])

	useEffect(() => {
		fetch('/test-data').then(
			res => res.json()
		).then(data => {
			setData(data)
			console.log(data.tasks)
		})
	}, [])

	return (
		<div>
			{(typeof data.tasks === 'undefined') ? (
				<p>Loading...</p>
			) : (
				// <p>hello</p>
				data.tasks.map((task, i) => (
					<p key={i}> {task} </p>
				))
			)}
		</div>
	)
}
