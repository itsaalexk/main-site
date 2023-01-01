import "./Loader.css"
import ClipLoader from "react-spinners/RotateLoader";


  export default function Loader({size, color}) {
  return (
    <div className="loader-div-1">

        <ClipLoader size={size} color={color} cssOverride={{left:"50%", top:400}}/>

    </div>
  )
}



