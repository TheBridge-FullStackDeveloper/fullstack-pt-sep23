import { useSelector } from 'react-redux'
const Profile = () => {
  const { user } = useSelector((state) => state.auth)

  return (
    <>
      <h1>Profile</h1>
      <p>{user.firstName}</p>
      <p>{user.email}</p>

      <img src={`http://localhost:3000/${user.user_img}`} alt='' />
    </>
  )
}

export default Profile
