import React from "react";
import Preloader from '../../../assest/images/Preloader.gif'

const PreloaderImg = (props:any) => {
    return(
        <div style={ { backgroundColor: "white" } }>
            <img src={Preloader}/>
        </div>
    )
}
export default PreloaderImg