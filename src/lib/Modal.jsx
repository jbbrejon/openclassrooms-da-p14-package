// Import dependencies
import React from 'react'
import PropTypes from 'prop-types';

// Import CSS module
import styles from './modal.module.css'

function Modal({ message, toggle }) {
    return (
        <>
            <div id="myModal" className={styles.modal}>
                <div className={styles.modalContent}>
                    <p>{message}</p>
                    <span className={styles.close} onClick={toggle}>&times;</span>
                </div>
            </div>
        </>
    )
}

Modal.propTypes = {
    message: PropTypes.string,
    toggle: PropTypes.func,
};

export default Modal