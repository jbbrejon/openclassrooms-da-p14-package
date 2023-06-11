import React from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Modal from './lib/Modal'

function App() {
  const [displayModal, setDisplayModal] = useState(false)

  function toggleModal() {
    setDisplayModal(!displayModal)
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={toggleModal}>
          Display modal
        </button>
      </div>

      {displayModal ? <Modal message="Employee Created!" toggle={toggleModal} /> : null}
    </>
  )
}

export default App
