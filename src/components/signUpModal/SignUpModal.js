import React, { useContext, useRef, useState } from 'react'
import { UserContext } from '../../context/UserContext'
import './signUpModal.css'
import {useNavigate} from 'react-router-dom'

export default function SignUpModal() {

    const { modalState, toggleModals, signUp } = useContext(UserContext)

    const navigate = useNavigate();
    

    const [validation, setValidation] = useState("")
    const inputs= useRef([])
    const addInputs = (el)=>{
        if(el && !inputs.current.includes(el)){
            inputs.current.push(el)
        }
    } 

    const formRef = useRef()

    const handleForm = async (e) => {
        e.preventDefault()
        if((inputs.current[1].value.length || inputs.current[2].value.length) <6){
            setValidation("6 caracters min")
            return;
        }
        else if( inputs.current[1].value !== inputs.current[2].value){
            setValidation("les mots de passe ce sont pas identique ")
            return;
        }
        try {
             await signUp(
                inputs.current[0].value,
                inputs.current[1].value
            )
            formRef.current.reset();
            setValidation("")
            toggleModals("close")
            navigate("/private/private-home")

        } catch (error) {
           if (error.code === "auth/invalid-email"){
            setValidation("Email format invalid")
           }
           if(error.code === "auth/email-already-in-use"){
            setValidation("Email already used")
           } 
        }
    } 

    const closeModal = ()=> {
        setValidation("")
        toggleModals("close")
    }

    return (
        <>
            {modalState.signUpModal && (


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
                                        ref= {formRef}
                                        onSubmit={handleForm}
                                        className='sign-up-form'>
                                            <div className='mb-3'>
                                                <label htmlFor='signUpEmail' className='col-form-label ms-2'>Adresse email</label>
                                                <input
                                                ref={addInputs}
                                                    type="email"
                                                    name="email"
                                                    required
                                                    id="signUpEmail"
                                                    className="form-control"
                                                />
                                            </div>
                                            <div className='mb-3'>
                                                <label htmlFor='signUpPwd' className='col-form-label ms-2'>Mot de passe</label>
                                                <input
                                                ref={addInputs}
                                                    type="password"
                                                    name="pwd"
                                                    required
                                                    id="signUpPwd"
                                                    className="form-control"
                                                />
                                            </div>
                                            <div className='mb-3'>
                                                <label htmlFor='repeatPwd' className='col-form-label ms-2'>confirmation du Mot de passe</label>
                                                <input
                                                ref={addInputs}
                                                    type="password"
                                                    name="pwd"
                                                    required
                                                    id="repeadPwd"
                                                    className="form-control"
                                                />
                                                <p className='text-danger mt-1 text-center'>{validation}</p>
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
