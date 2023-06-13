# oc-da-p14-component
OpenClassrooms - DA JS/React - Projet 14 : Faites passer une librairie jQuery (component)

## Author

- [@jbbrejon](https://github.com/jbbrejon)

## Requirements

- NodeJS (version >=16.14)
- Npm
- Editor : Visual Studio code recommended


## Descripton
React component : Modal

## Installation

Run :```npm install @jbbrejon/react-modal```

## How to use this component
```
import React from 'react'
import { useState } from 'react'
import Modal from "@jbbrejon/react-modal";
import '@jbbrejon/react-modal/dist/style.css'

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
            {displayModal ? <Modal message={message} toggle={toggleModal} /> : null}
        </div>
  );
};

export default App;
```