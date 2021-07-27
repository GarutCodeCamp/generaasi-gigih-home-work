import { Button1 } from "../Button"

export const CardSong =({image,name,album,songs})=>{
    return(
        <div className="card-song">
                        <div className="image">
                            <img src={image} alt=""/>
                        </div>
                        <div className="text-song">
                            <h4>{name}</h4>
                            <div className="artist">
                                <p>{album}</p>
                                <p>{songs}</p>
                            </div>
                        </div>
                        <Button1 />
                    </div>
    )
}