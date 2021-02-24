import React, {useState} from "react";
import Modal from "react-modal";
import LoginModalForm from "./LoginModalForm"
import SignupModalForm from "./SignupModalForm"
import "./LoginModal.css"
import "./SignupModal.css"
// let's see if this helps us

const customStyles = {
    content : {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      padding: "3em"
    }
};

const AuthModal = ({setAuthenticated}) => {
    const [showModal, setShowModal] = useState(false);
    const [showLoginForm, setShowLoginForm] = useState(true);

    const showSignUpModal = () => {
        setShowLoginForm(false)
        setShowModal(true)
    }

    const showLoginModal = () => {
        setShowLoginForm(true)
        setShowModal(true)
    }



    return (
        <>
            <button className="login-btn" onClick={() => showLoginModal()}>Login</button>
            <button className="signup-btn" onClick={() => showSignUpModal()}>Sign Up</button>
            <Modal style={customStyles} isOpen={showModal}>
            {
                showLoginForm ?
                <>
                    <div className="login-modal-top-row">
                        <h1>Login</h1>
                        <button onClick={() => setShowModal(false)}>
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                    <LoginModalForm showLoginForm={showLoginForm} setShowLoginForm={setShowLoginForm}  setAuthenticated={setAuthenticated} />
                </>
                :
                <>
                    <div className="signup-modal-top-row">
                        <h1>Sign Up</h1>
                        <button onClick={() => setShowModal(false)}>
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                    <SignupModalForm setShowLoginForm={setShowLoginForm} setAuthenticated={setAuthenticated} />
                </>
            }
            </Modal>
        </>
    )
}

export default AuthModal;