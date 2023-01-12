import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import '../../assets/Navbar.css'
import CustomSelect from '../CustomSelect/CustomSelect'

export default function Navbar({ searchTerm, setSearchTerm, subreddit, setSubreddit, subreddits }) {
    const navigate = useNavigate();

    const backBtn = <FontAwesomeIcon className='back-btn' icon={faArrowLeft} onClick={() => navigate(-1)} />
    return (
        <nav className='navbar'>
            <div className="navbar-content">
                <Routes>
                    <Route path='/comments/*' element={backBtn} />
                    <Route path='/' element={
                        <>
                            <CustomSelect
                                value={subreddit}
                                options={subreddits}
                                onchange={(e) => setSubreddit(e.target.value)}
                            />

                            <input className='filter-posts' type="text" placeholder='Filter posts' value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
                        </>
                    } />
                </Routes>
            </div>
        </nav>
    )
}
