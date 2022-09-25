import React from 'react';

const OneWork = ({image,width,height}) => {
    return (
        <div className="flex flex-col items-center justify-center gap-3">
            <div>
                <img className={`${width} ${height}`} src={image} alt={`${image}`}/>
            </div>
        </div>
    );
};

export default OneWork;