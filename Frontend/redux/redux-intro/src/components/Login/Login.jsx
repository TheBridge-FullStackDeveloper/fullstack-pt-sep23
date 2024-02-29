import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { login, reset } from '../../redux/auth/authSlice'
import { useDispatch, useSelector } from 'react-redux'
import { notification } from 'antd'

const Login = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { isError, isSuccess, message } = useSelector((state) => state.auth)

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  useEffect(() => {
    if (isError) {
      notification.error({ message: 'Error', description: message })
    }
    if (isSuccess) {
      notification.success({ message: 'Success', description: message })
      setTimeout(() => {
        navigate('/profile')
      }, 2000)
    }
    dispatch(reset())
  }, [isError, isSuccess, message])

  const { email, password } = formData
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    dispatch(login(formData))
    console.log('formData', formData)
  }
  return (
    <form onSubmit={onSubmit}>
      <input
        type='email'
        name='email'
        value={email}
        onChange={onChange}
        placeholder='tu email'
      />
      <input
        type='password'
        name='password'
        value={password}
        onChange={onChange}
        placeholder='tu password'
      />
      <button type='submit'>Login</button>
    </form>
  )
}
export default Login
