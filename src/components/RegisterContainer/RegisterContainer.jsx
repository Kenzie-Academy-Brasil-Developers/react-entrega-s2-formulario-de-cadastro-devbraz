import './styles.css';
import Buttons from '../Buttons/Buttons';
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { useHistory } from 'react-router-dom';


const RegisterContainer = () => {

  const formSchema = yup.object().shape({
    name: yup
      .string()
      .required('Nome é obrigatório')
      .matches(/^[A-Za-z ]*$/, 'Necessário apenas letras no nome'),
    email: yup
      .string()
      .required('E-mail é obrigatório')
      .email('E-mail inválido'),
    password: yup
      .string()
      .required('Senha é obrigatória')
      .min(8, 'Sua senha é muito pequena, é preciso ter ao menos 8 digitos')
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, 
        'Necessário ter letras, números e ao menos um símbolo'),
    passwordConfirm: yup
      .string()
      .required('Confirmar senha é obrigatório')
      .oneOf([yup.ref('password')], 'Confirmação de senha deve ser igual ao campo "Senha"'),
  })
  const {
    register, 
    handleSubmit, 
    formState: {errors}
  } = useForm({
    resolver: yupResolver(formSchema)
  })

  const history = useHistory()

  const onSubmitFunction = (data) => {
    history.push(`/sucess/${data.name}`)
  }

  return (

   <div className='register-container'>
    <form className='form' onSubmit={handleSubmit(onSubmitFunction)}>
      <input type='text' placeholder='Nome' {...register('name')}/>
      {errors.name?.message}
      <input type='text' placeholder='E-mail' {...register('email')}/>
      {errors.email?.message}
      <input type='password' placeholder='Senha' {...register('password')}/>
      {errors.password?.message}
      <input type='password' placeholder='Confirmar Senha' {...register('passwordConfirm')}/>
      {errors.passwordConfirm?.message}
      <Buttons type="submit" >CADASTRAR</Buttons>
    </form>
    
   </div>

  )

}

export default RegisterContainer