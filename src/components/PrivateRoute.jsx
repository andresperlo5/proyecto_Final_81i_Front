

const PrivateRoute = ({children, role}) => {
  const token = JSON.parse(sessionStorage.getItem('token'))
  const roleUser = JSON.parse(sessionStorage.getItem('role'))

  if(token){
    if(role === roleUser){
      return children
    }else{
      if(roleUser === 'admin'){
        location.href = '/admin'
      }else{
        location.href = '/user'
      }
    }
  }else{
    location.href = '/'
  }
}

export default PrivateRoute