import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { register, reset } from '../../redux/auth/authSlice'
import { notification } from 'antd'

const Register = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    firstName: '',
    username: '', // ana
    email: '', //ana@ana.com
    password: '',
    password2: '', //'123456'
    age: 0,
  })
  const { firstName, username, email, age, password, password2 } = formData

  const { isSuccess, message, isError } = useSelector((state) => state.auth)

  useEffect(() => {
    if (isSuccess) {
      notification.success({
        message: 'Success',
        description: message,
      })
      navigate('/login')
    }
    if (isError) {
      notification.error({ message: 'Error', description: message })
    }
    dispatch(reset())
  }, [isSuccess, isError, message])

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value, //password: '12345'
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()

    if (password !== password2) {
      return notification.error({
        message: 'Error',
        description: 'Passwords do not match',
      })
    } else {
      return dispatch(register(formData))
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        type='text'
        name='firstName'
        value={firstName}
        onChange={onChange}
        placeholder='tu nombre'
      />
      <input
        type='text'
        name='username'
        value={username}
        onChange={onChange}
        placeholder='Tu nombre de usuario'
      />
      <input
        type='email'
        name='email'
        value={email}
        onChange={onChange}
        placeholder='Tu email'
      />
      <input
        type='number'
        name='age'
        value={age}
        onChange={onChange}
        placeholder='Tu edad'
      />
      <input
        type='password'
        name='password'
        value={password}
        onChange={onChange}
        placeholder='Tu password'
      />
      <input
        type='password'
        name='password2'
        value={password2}
        onChange={onChange}
        placeholder='Repite tu password'
      />
      <button type='submit'>Register</button>
    </form>
  )
}
export default Register
