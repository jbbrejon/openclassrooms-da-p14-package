# oc-da-p14-component
OpenClassrooms - DA JS/React - Projet 14 : Faites passer une librairie jQuery (component)

## Component type
React Modal

## Installation

Run :```npm install @jbbrejon/react-modal```

## How to use this component
```
import React from 'react'
import { useState } from 'react'
import { Modal } from "@jbbrejon/react-modal";

function App() {

    // Local state
    const [displayModal, setDisplayModal] = useState(false)

    // Set message that will be displayed in the modal
    const message = "Type your message"

    // This function will toggle the display of the modal by updating the local state of this component
    function toggleModal() {
        setDisplayModal(!displayModal)
    }

    return (
        <div>
            <button onClick={toggleModal}>Display Modal</button>
            {displayModal ? <Modal message="Employee Created!" toggle={toggleModal} /> : null}
        </div>
  );
};

export default App;
```