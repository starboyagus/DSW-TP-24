import { useEffect } from "react"
import { NavLink as Link } from 'react-router-dom'
import './ErrorPage.css';


export function ErrorPage(){
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])


    return(
        <>
        <div className="error-container">
            <Link to="/"> <h1 className="error-title"> UTimbaN </h1></Link>
            <p className="error-text"> The current page may have been removed, changed or is temporarily unavailable </p>
            <Link to="/"> <p className="error-back"> Return to homepage </p></Link>
        </div>
        </>
    )
}