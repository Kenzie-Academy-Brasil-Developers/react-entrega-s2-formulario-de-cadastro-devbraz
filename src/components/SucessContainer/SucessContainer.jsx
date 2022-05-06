import { useHistory } from 'react-router-dom';
import { useParams } from "react-router-dom"
import Buttons from '../Buttons/Buttons';
import './styles.css';



const SucessContainer = () => {

  const history = useHistory()
  const params = useParams()

  const handleClick = () => {
    history.push("/")
  }

  return (

   <div className='sucess-container'>
     <h1>Bem Vindo(a) {params.user}!</h1>
     <Buttons onClick={handleClick}>Retornar</Buttons>
    
   </div>

  )

}

export default SucessContainer