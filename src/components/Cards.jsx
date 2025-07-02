import React from 'react'

function Cards() {
    return (
        <div className='w-full h-screen bg-zinc-100 flex items-center px-20 gap-5'>
            <div className='cardcontainer h-[50vh] w-1/2'>
                <div className='card relative rounded-xl w-full h-full bg-[#004D43] flex items-center justify-center'>
                    <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" />
                    <button className='absolute px-5 py-1 rounded-full border left-10 bottom-10'>&copy;2025</button>
                </div>
            </div>
            <div className='cardcontainer flex gap-5 h-[50vh] w-1/2'>
                <div className='card relative flex items-center justify-center rounded-xl w-full h-full bg-[#192826]'>
                    <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" />
                    <button className='absolute px-5 py-1 rounded-full border left-10 bottom-10'>&copy;2025</button>
                </div>
                <div className='card relative flex items-center justify-center rounded-xl w-full h-full bg-[#192826]'>
                    <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" />
                    <button className='absolute px-5 py-1 rounded-full border left-10 bottom-10'>&copy;2025</button>
                </div>
            </div>
        </div >
    )
}

export default Cards
