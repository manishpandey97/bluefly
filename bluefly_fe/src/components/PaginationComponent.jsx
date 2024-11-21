import React from 'react';

const PaginationComponent = ({ totalPages, currentPage, onPageChange }) => {
    const buttons = [];
    for (let i = 1; i <= totalPages; i++) {
        // console.log(i)
        buttons.push(
            <button
                key={i}
                onClick={() => onPageChange(i)}
                style={{
                    margin: '5px',
                    backgroundColor: i === currentPage ? 'rgb(58, 69, 80)' : 'lightgrey',
                     color: 'white',
                }}
            >
                {i}
            </button>
        );
    }

    return <>{buttons}</>;
};


export default PaginationComponent;
