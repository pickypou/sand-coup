import React, {useContext} from 'react'
import { UserContext } from '../../context/UserContext'

export default function SignUpModal() {

    const {modalState, toggleModals} = useContext(UserContext)
  return (
    <>
    {modalState.SignUpModal && (

    
    <div className='position-fixed top-0 vw-100 vh-100'>
        <div className='w-100 h-100 bg-dark bg-opacity-75'>
            <div className='position-absolut top-50 start-50 translate-middle' 
            style={{minWidth: "400px"}}>
                <div className='modal-dialog'>
                    <div className='modal-content'>
                        <div className='modal-header'>
                            <h5 className='modal-title'>Sign Up</h5>
                            <button className='btn-clode'></button>
                        </div>
                        <div className='modal-body'>
                            <form className='sign-up-form'>
                                <div className='mb-3'>
                                    <label htmlFor='signUpEmail' className='form-label'>Adresse email</label>
                                    <input 
                                    type="email"
                                    name="email"
                                    required
                                    id="signUpEmail"
                                    className="form-controle" 
                                    />
                                </div>
                                <div className='mb-3'>
                                    <label htmlFor='signUpPwd' className='form-label'>Mot de passe</label>
                                    <input 
                                    type="password"
                                    name="pwd"
                                    required
                                    id="signUpPwd"
                                    className="form-controle" 
                                    />
                                    </div>
                                     <div className='mb-3'>
                                    <label htmlFor='repeatPwd' className='form-label'>confirmation du Mot de passe</label>
                                    <input 
                                    type="password"
                                    name="pwd"
                                    required
                                    id="repeadPwd"
                                    className="form-controle" 
                                    />
                                    <p className='text-danger mt-1'>Validation</p>
                                </div>
                                <button className='btn btn-primary'>envoyer</button>
                            </form>
                        </div>
                    </div>
                </div>  
            </div>
        </div>
    </div>
)}
    </>
  )
}
