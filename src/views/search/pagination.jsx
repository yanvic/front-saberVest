import React from 'react';

const Pagination = ({ pageNow, totalPages, onPageChange }) => {
    const pageNumbers = [];
    const maxPageNumbers = 5;


    const addPageNow = (start, end) => {
        if (pageNow < totalPages) {
            pageNow++
        }
        onPageChange(pageNow)
    };
    const removePageNow = (start, end) => {
        if (pageNow > 1) {
            pageNow--
        }
        onPageChange(pageNow)
    };

    const addPageNumbers = (start, end) => {
        for (let i = start; i <= end; i++) {
            pageNumbers.push(i);
        }
    };

    if (totalPages <= maxPageNumbers) {
        addPageNumbers(1, totalPages);
    } else {
        if (pageNow <= 3) {
            addPageNumbers(1, 3);
            pageNumbers.push('...');
            pageNumbers.push(totalPages);
        }
        else if (pageNow >= totalPages - 2) {
            pageNumbers.push(1);
            pageNumbers.push('...');
            addPageNumbers(totalPages - 2, totalPages);
        }
        else {
            pageNumbers.push(1);
            pageNumbers.push('...');
            pageNumbers.push(pageNow);
            pageNumbers.push('...');
            pageNumbers.push(totalPages);
        }
    }

    return (
        <div className="pagination">
            <span className="ri-arrow-left-s-line" onClick={removePageNow}></span>
            {pageNumbers.map((number, index) => (
                number === '...' ? (
                    <span key={index} className="dots">...</span>
                ) : (
                    <button
                        key={index}
                        className={`page-number ${number === pageNow ? 'active' : ''}`}
                        onClick={() => onPageChange(number)}
                    >
                        {number}
                    </button>
                )
            ))}
            <span className="ri-arrow-right-s-line" onClick={addPageNow}></span>
        </div>
    );
};

export default Pagination;
