import './navbar.css'


const Navbar = () => {
  const user = localStorage.getItem("userName");
  const userName= JSON.parse(user)

  return (
    <div className="navbar">
        <div className="navContainer">
            <span className="logo">GREETINGS </span>
            <div className="navItems">
                <span className='user-name' >{userName}</span>
                <button onClick={()=>{localStorage.clear();
                window.location.replace('/')}} className="navButton">Logout</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar