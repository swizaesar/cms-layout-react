import React, { useState } from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import { useEffect } from "react";

const TablePagination = props => {
    const {
        currentPage,
        totalPage,
        limitPagination,
        onClickNumber = () => {}
    } = props;
    const [paginationListNumber, setPaginationListNUmber] = useState(false);

    useEffect(() => {
        if (totalPage > 1 && currentPage) {
            const listOfNumber = Array.from(
                Array(Number(totalPage + 1)).keys()
            );
            let startPagination = 1;

            if (totalPage > limitPagination) {
                startPagination = currentPage;
                if (
                    currentPage <= totalPage &&
                    currentPage >= totalPage - limitPagination
                ) {
                    startPagination = totalPage - limitPagination + 1;
                }
            }

            setPaginationListNUmber(
                listOfNumber.slice(
                    startPagination,
                    limitPagination + currentPage
                )
            );
        }
    }, [totalPage, currentPage, limitPagination]);

    const eventOnClickNumber = (e, number) => {
        e.preventDefault();
        onClickNumber(number);
    };

    const eventOnClickNextPagination = e => {
        e.preventDefault();
        onClickNumber(currentPage + 1);
    };

    const eventOnClickPrevPagination = e => {
        e.preventDefault();
        onClickNumber(currentPage - 1);
    };
    const eventOnClickFirstPagination = e => {
        e.preventDefault();
        onClickNumber(1);
    };
    const eventOnClickLastPagination = e => {
        e.preventDefault();
        onClickNumber(totalPage);
    };

    return (
        <div className="pagination-table">
            {paginationListNumber.length > 0 && (
                <Pagination
                    className="pagination justify-content-end"
                    listClassName="justify-content-end"
                >
                    <PaginationItem disabled={currentPage === 1}>
                        <PaginationLink
                            aria-label="First"
                            href="#pablo"
                            className="arrow"
                            onClick={eventOnClickFirstPagination}
                        >
                            <i className="fa fa-angle-left" />
                            <i className="fa fa-angle-left" />
                            <span className="sr-only">First</span>
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem disabled={currentPage === 1}>
                        <PaginationLink
                            aria-label="Previous"
                            href="#pablo"
                            className="arrow"
                            onClick={eventOnClickPrevPagination}
                        >
                            <i className="fa fa-angle-left" />
                            <span className="sr-only">Previous</span>
                        </PaginationLink>
                    </PaginationItem>
                    {paginationListNumber &&
                        paginationListNumber.map(item => {
                            return (
                                <PaginationItem
                                    className={
                                        currentPage === item ? "active" : ""
                                    }
                                    disabled={currentPage === item}
                                    key={item}
                                >
                                    <PaginationLink
                                        href="#pablo"
                                        className="number"
                                        onClick={e =>
                                            eventOnClickNumber(e, item)
                                        }
                                    >
                                        {item}
                                    </PaginationLink>
                                </PaginationItem>
                            );
                        })}

                    <PaginationItem disabled={currentPage === totalPage}>
                        <PaginationLink
                            aria-label="Next"
                            href="#pablo"
                            className="arrow"
                            onClick={eventOnClickNextPagination}
                        >
                            <i className="fa fa-angle-right" />
                            <span className="sr-only">Next</span>
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem disabled={currentPage === totalPage}>
                        <PaginationLink
                            aria-label="Last"
                            href="#pablo"
                            className="arrow"
                            onClick={eventOnClickLastPagination}
                        >
                            <i className="fa fa-angle-right" />
                            <i className="fa fa-angle-right" />
                            <span className="sr-only">Last</span>
                        </PaginationLink>
                    </PaginationItem>
                </Pagination>
            )}
        </div>
    );
};

export default TablePagination;
