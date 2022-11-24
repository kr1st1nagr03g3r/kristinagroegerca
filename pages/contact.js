import { Container } from '@mui/system'

import React from 'react'
import PushDown from '../components/PushDown'

export default function contact() {
  async function handleOnSubmit(e) {
    // don't submit to the browser
    e.preventDefault()
    const formData = {}
    Array.from(e.currentTarget.elements).forEach((field) => {
      if (!field.name) return
      formData[field.name] = field.value
    })
    fetch('../pages/api/mail'),
      {
        method: 'post',
        body: JSON.stringify(formData),
      }
    console.log(formData)
  }
  return (
    <>
      <style jsx>{`
        label {
          margin: 0 1em 1em 0;
          display: flex;
        }
        form {
          border: 3px solid black;
          padding: 15px;
          color: black;
          background-color: white;
          border-radius: 50px !important;
          text-transform: none;
          box-shadow: 3px 3px black !important;
          padding: 15px;
          display: flex;
          flex-direction: column;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        textarea {
          height: 200px;
          width: 500px;
          border-radius: 5px;
          border: 2px solid black;
        }
        input {
          width: 500px;
          height: 60px;
          border-radius: 5px;
        }
        input,
        textarea {
          font-family: 'Space Mono';
          padding: 15px;
          opacity: 50%;
        }
      `}</style>
      <PushDown />
      <Container>
        <div className="background">
          <form method="post" onSubmit={handleOnSubmit}>
            <h3>Contact Form:</h3>
            <p>
              <label htmlFor="name">Name:</label>
              <input
                className="input"
                type="text"
                name="name"
                placeholder="🎶 Who are you? WhoOo whOo whoO whOoo? 🎶"
              />
            </p>
            <p>
              <label htmlFor="email">Email:</label>
              <input type="email" name="email" placeholder="CTO@job-offer.ca" />
            </p>
            <p>
              <label htmlFor="message">Message:</label>
              <textarea
                name="message"
                placeholder="What would you like to talk about?"
              />
            </p>
            <button className="buttons">Submit</button>
          </form>
        </div>
      </Container>
    </>
  )
}
