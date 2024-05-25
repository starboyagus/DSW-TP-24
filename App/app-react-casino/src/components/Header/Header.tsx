import { NavLink as Link } from 'react-router-dom'
import { LogIn } from '../../components/LogIn/LogIn';
import { DailyFree } from '../Modal-DF/DailyFree';
import { useState } from 'react';
import './Header.css'

export function Header() {

    const [modalOpen, setModalOpen] = useState(false);
    const [dfOpen, setOfOpen] = useState(false);

    const handleButtonClick = () => {
        setModalOpen(false)
    }

    const ButtonClick = () => {
        setOfOpen(false)
    }

    return(
        <header className='fixed top-0 z-10 w-full z-20'>
            {modalOpen && (
                <LogIn onClose={handleButtonClick}/>
            )}
            {dfOpen && (
                <DailyFree onClose={ButtonClick}/>
            )}
            <nav className='bg-[#fabc01]/10 p-3 flex items-center justify-between'>
            <Link to="/"><img className='max-h-20' src="./src/assets/images/ruleta_v1.png" /></Link>
                <div className='space-x-10'>
                    <Link to="/chau">About Us</Link>
                    <button onClick={() => setOfOpen(true)}>Daily Free</button>
                    <button className='gold-button' onClick={() => setModalOpen(true)}>LogIn</button>
                </div>
            </nav>
        </header>
    )
}
