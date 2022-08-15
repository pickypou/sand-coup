import React, {useContext} from 'react'
import { PrivateContext } from '../../../../context/PirvateContext'

export default function SansSel() {

  const {selectRecette} = useContext(PrivateContext)
  return (
  <>
  {selectRecette.SansSel &&(
    <h2>recette sans sel</h2>
  )}
  </>
  )
}
