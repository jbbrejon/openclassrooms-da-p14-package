// Import dependencies
import React from 'react'
import PropTypes from 'prop-types';

// Import CSS module
import styles from './modal.module.css'

/**
 * Modal component.
 *
 * @param {string} message - Message to display 
 * @param {func} change - Function to update state of parent component (setDisplayModal)
 * @returns {JSX.Element} - Rendered component.
 */
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

// PropTypes
Modal.propTypes = {
    message: PropTypes.string,
    toggle: PropTypes.func,
};

export default Modal