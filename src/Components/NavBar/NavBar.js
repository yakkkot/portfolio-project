import React from 'react';

const NavBar = () => {
    return (
        <div>
            <div>
                <div className="logo h-[400px] w-[400px]">
                    <img className='h-[400px] w-[400px]' src="../../Assets/Images/mongo.png" alt=""/>
                </div>
                
                <div>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Experience</li>
                        <li>Work</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export {NavBar}