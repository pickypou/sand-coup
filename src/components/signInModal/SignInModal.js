import React, { useContext, useRef, useEffect, useState } from 'react'
import { UserContext } from '../../context/UserContext'
import { useNavigate } from 'react-router-dom'

export default function SignUpModal() {

    const { modalState, toggleModals, signIn } = useContext(UserContext)

    const navigate = useNavigate();


    const [validation, setValidation] = useState("")
    const inputs = useRef([])
    const addInputs = (el) => {
        if (el && !inputs.current.includes(el)) {
            inputs.current.push(el)
        }
    }

    const formRef = useRef()

    const handleForm = async (e) => {
        e.preventDefault()
        
        try {
            await signIn(
                inputs.current[0].value,
                inputs.current[1].value
            )
            formRef.current.reset();
            setValidation("")
            //console.log(cred);
            toggleModals("close")
            navigate("/private/private-home")

        } catch (error) {
          setValidation("OUPSS! l'email et le mot dee passe ne coresponde pas")
        }
    };

    const closeModal = () => {
        setValidation("")
        toggleModals("close")
    }

    return (
        <>
            {modalState.signInModal && (


                <div className='position-fixed top-0 vw-100 vh-100 '>
                    <div onClick={closeModal}
                        className='w-100 h-100 bg-dark bg-opacity-75'></div>
                    <div className='position-absolute top-50 start-50 translate-middle'>


                        <div className='modal-dialog tous'>
                            <div className='modal-content'>
                                <div className='modal-header'>
                                    <h5 className='modal-title ms-2'>Sign Up</h5>
                                    <button
                                        onClick={closeModal}
                                        className='btn-close'></button>
                                </div>
                                <div className='modal-body'>
                                    <form
                                        ref={formRef}
                                        onSubmit={handleForm}
                                        className='sign-up-form'>
                                        <div className='mb-3'>
                                            <label htmlFor='signInEmail' className='col-form-label ms-2'>Adresse email</label>
                                            <input
                                                ref={addInputs}
                                                type="email"
                                                name="email"
                                                required
                                                id="signInEmail"
                                                className="form-control"
                                            />
                                        </div>
                                        <div className='mb-3'>
                                            <label htmlFor='signInPwd' className='col-form-label ms-2'>Mot de passe</label>
                                            <input
                                                ref={addInputs}
                                                type="password"
                                                name="pwd"
                                                required
                                                id="signInPwd"
                                                className="form-control"
                                            />
                                        </div>
                                        
                                        <button className='btn btn-primary ms-2 mb-2'>envoyer</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            )}
        </>
    )
}

