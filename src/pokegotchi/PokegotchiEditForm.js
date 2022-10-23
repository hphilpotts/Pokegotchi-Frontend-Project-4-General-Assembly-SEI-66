import React, { useState } from 'react'

export default function AuthorCreateForm(props) {

    const [newAuthor, setNewAuthor] = useState({})

    const handleChnage = (event) => {
        const attributeToChnage = event.target.name
        const newValue = event.target.value

        // Creating a copy of newAuthor state
        const author = {...newAuthor}
        author[attributeToChnage] = newValue
        console.log(author)
        setNewAuthor(author)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.addAuthor(newAuthor);
        event.target.reset();
    }

  return (
    <div>
        <h1>Create Author</h1>

        <form onSubmit={handleSubmit}>
            <div>
                <label>Name</label>
                <input name="name" type="text" onChange={handleChnage}></input>
            </div>

            <div>
                <label>Email Address</label>
                <input name="emailAddress" type="text" onChange={handleChnage}></input>
            </div>

            <div>
                <label>Phone Number</label>
                <input name="phoneNumber" type="text" onChange={handleChnage}></input>
            </div>

            <div>
                <input type="submit" value="Add Author"></input>
            </div>
        </form>
    </div>
  )
}
