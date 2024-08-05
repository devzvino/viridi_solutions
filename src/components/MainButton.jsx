import React from 'react'

const MainButton = ({ title, onClick, icon, mainColor, textColor }) => {
    return (
        <div onClick={onClick} className={`flex justify-center cursor-pointer hover:shadow-lg shadow-black gap-3 items-center w-40 h-14 ${mainColor} ${textColor}`} >
            <div>
                <h1 className='font-semibold'>
                    {title}
                </h1>
            </div>
            <div>
                {icon}
            </div>
        </div>
    )
}

export default MainButton