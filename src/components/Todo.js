import { useState } from 'react';
import Modal from './Modal';
import Backdrop from './Backdrop';

function Todo(props) {

    /**
     * React hook
     * 
     * Calling useState creates a state that React is aware of
     * 
     * Returns an array of two elements, 
     * - first element is the default value we pass in useState
     * - second element is a function that allows you to change the first value
     * 
     * Pass initial value to useState - in this case 'false'
     */
    const [modalIsOpen, setModalIsOpen] = useState(false);

    /**
     * Nested javascript function, becomes this is all
     * just javascript - :)
     */
    function deleteHandler() {
       setModalIsOpen(true);
    }

    function closeModalHandler() {
        setModalIsOpen(false);
    }

    return (
        <div className="card">
            <h2>{ props.text }</h2>
            <div className='actions'>
                {/* Just point to the function, don't execute it - leave off '()' */}
                <button className='btn' onClick={ deleteHandler }>Delete</button>
            </div>

            {/* Render content conditionally 
               can also be written like: { modalIsOpen && <Modal /> }
            */}
            { modalIsOpen ? <Modal onCancel={ closeModalHandler } onConfirm={ closeModalHandler } /> : null }
            { modalIsOpen && <Backdrop onClick={ closeModalHandler } /> }
        </div>
    )
}

export default Todo;