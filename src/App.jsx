// import { useState } from 'react'
import Note from './components/Note'
/* eslint-disable react/prop-types */
// Define a React component with the name App

const App = ({ notes }) => {
  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map(note => 
          <Note key={note.id} note={note} />
        )}
      </ul>
    </div>
  )
}

export default App
