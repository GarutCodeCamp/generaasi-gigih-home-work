import "../index.css"

const Navbar=({children,login})=>{
    return(
      <div className="navbar">
          <div>{children}</div>
          <div>{login}</div>
      </div>
    )
}

export default Navbar