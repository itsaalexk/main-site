import "./Loader.css"
import { HashLoader } from "react-spinners";


  export default function Loader({size, color}) {
  return (
    <div className="loader-div-1">

      
        <HashLoader size={size} color={color} cssOverride={{left:"50%", top:400}} />
    </div>
  )
}



