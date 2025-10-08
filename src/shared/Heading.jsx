import React from 'react';

const Heading = ({title}) => {
    return (
        <div className='flex justify-center'>
            <h2 className='text-[36px] md:text-[42px] lg:text-5xl font-semibold md:mb-5 mb-2 inline-block bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-fuchsia-500 to-red-600 capitalize'>{title}</h2>
        </div>
    );
};

export default Heading;