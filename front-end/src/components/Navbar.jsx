import React, { useState, useRef, useEffect } from 'react';
import { assets } from '../assets/assets';
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const [showMenu, setShowMenu] = useState(false);
    const [token, setToken] = useState(true); // Simulated token, adjust as per your authentication flow
    const menuRef = useRef(null);

    // Close the dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setShowMenu(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400'>
            <img onClick={() => navigate('/')} className='w-44 cursor-pointer' src={assets.logo} alt='Logo' />
            
            {/* Navigation Links */}
            <ul className='hidden md:flex items-start gap-5 font-medium'>
                <NavLink 
                    to='/' 
                    className={({ isActive }) => 
                        `py-1 ${isActive ? 'text-white bg-primary rounded-lg px-4' : 'text-black'}`
                    }
                >
                    <li>HOME</li>
                </NavLink>
                <NavLink 
                    to='/doctors' 
                    className={({ isActive }) => 
                        `py-1 ${isActive ? 'text-white bg-primary rounded-lg px-4' : 'text-black'}`
                    }
                >
                    <li>All Doctors</li>
                </NavLink>
                <NavLink 
                    to='/about' 
                    className={({ isActive }) => 
                        `py-1 ${isActive ? 'text-white bg-primary rounded-lg px-4' : 'text-black'}`
                    }
                >
                    <li>About</li>
                </NavLink>
                <NavLink 
                    to='/contact' 
                    className={({ isActive }) => 
                        `py-1 ${isActive ? 'text-white bg-primary rounded-lg px-4' : 'text-black'}`
                    }
                >
                    <li>Contact</li>
                </NavLink>
            </ul>

            {/* Profile Dropdown */}
            <div className='flex items-center gap-4'>
                {token ? (
                    <div ref={menuRef} className='relative cursor-pointer'>
                        <div className='flex items-center gap-2' onClick={() => setShowMenu(!showMenu)}>
                            <img className='w-8 rounded-full' src={assets.profile_pic} alt="Profile" />
                            <img className='w-2.5' src={assets.dropdown_icon} alt="Dropdown Icon" />
                        </div>

                        {showMenu && (
                            <div className='absolute right-0 mt-2 bg-white shadow-lg rounded-lg p-4 z-20'>
                                <p onClick={() => { navigate('/myprofile'); setShowMenu(false); }} className='hover:text-black cursor-pointer mb-2'>My Profile</p>
                                <p onClick={() => { navigate('/my-appointments'); setShowMenu(false); }} className='hover:text-black cursor-pointer mb-2'>Appointments</p>
                                <p onClick={() => { setToken(false); setShowMenu(false); }} className='hover:text-black cursor-pointer'>Logout</p>
                            </div>
                        )}
                    </div>
                ) : (
                    <button onClick={() => navigate('/login')} className='bg-primary text-white px-8 py-2 rounded-full hidden md:block'>
                        Create account
                    </button>
                )}
            </div>
        </div>
    );
}

export default Navbar;
