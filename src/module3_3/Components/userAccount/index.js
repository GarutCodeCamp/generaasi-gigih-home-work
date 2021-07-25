import "../index.css"


const UserAccount = ({user,img})=>{
    
    return (
        <div className="user">
            <div className="img">
                <img src={img} alt="image" />
            </div>
            <div className="user-name">
                <p>{user}</p>
            </div>
        </div>
    )
}


export default UserAccount