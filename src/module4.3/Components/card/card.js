import "./index.css"


const Card =()=>{
    return(
        <div className="card-song">
            <div className="container-song">
                <div className="img">
                    <img src="https://as-images.apple.com/is/image/AppleInc/aos/published/images/o/g/og/default/og-default?wid=1200&hei=630&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1525370171638" alt="images" />
                </div>
                <div className="card-text">
                    <h4>Title</h4>
                    <p>artist</p>
                    <p>album</p>
                </div>
            </div>
        </div>
    )
}






export default Card;