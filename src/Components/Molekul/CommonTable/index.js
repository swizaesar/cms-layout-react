import React, { useState, useEffect, useCallback } from "react";
import { Row, Table } from "reactstrap";
import TableHead from "./index.head";
import TableHeader from "./index.header";
import TableBody from "./index.body";
import TablePagination from "./index.pagination";
import TableTop from "./index.table-top";
import StyleCommon from "./index.style";

// begin reducer
import { useStore } from "../../../Reducers";
// end reducer

// constant variable
const DEFAULT_LIMIT_DATA = 10;
const DEFAULT_LIMIT_PAGINATION = 5;

const CommonTable = ({
    edit = false,
    dummyData,
    setDataDummy = () => {},
    configuration = {
        searchInput: true,
        nav: {
            hasSearch: true,
        },
        optionTable: [],
        service: {
            group: false,
            key: false,
            api: () => {},
        },
        header: {},
    },
    title = false,
}) => {
    const { optionTable, service, nav, searchInput } = configuration;
    const { dispatch, state } = useStore();
    const [isLoading, setLoading] = useState(false);
    const [configTable, setConfigurationTable] = useState(false);
    const [dataTable, setDataTable] = useState([]);
    const [params, setParams] = useState({
        page: 1,
        limit: DEFAULT_LIMIT_DATA,
    });

    const getData = (params) => {
        setLoading(true);
        if (service) {
            service.api({
                dispatch,
                params,
            });
            setParams(params);
        }
        if (!service) {
            // setParams(params);
            // setDataDummy(dummyData);
            // console.log('params', params);
        }
    };

    const getDataCallBack = useCallback(getData, []);

    const responseGetData = (state) => {
        if (service) {
            if (state[service.group] && state[service.group][service.key]) {
                const { data, isSuccess, headers } = state[service.group][
                    service.key
                ];
                if (isSuccess) {
                    const {
                        current_page,
                        next_page,
                        total_page,
                        total_data,
                    } = headers;

                    const isPagination = Number(total_data) > 1;
                    const responseHeaderData = {
                        currentPage: Number(current_page),
                        nextPage: next_page,
                        totalPage: Number(total_page),
                        total: total_data,
                        isPagination: isPagination,
                        paginationListNumber: total_page,
                    };
                    setDataTable(data);
                    setConfigurationTable(responseHeaderData);
                }
                setLoading(false);
            }
        } else {
            // const { data, isSuccess, headers } = dummyData[dummyData.length];
            // const { data, isSuccess, headers } = state;
            setDataTable(dummyData);
            setDataDummy(dummyData);
            setLoading(false);
            return dataTable;
        }
    };

    const responseGetDataCallBack = useCallback(responseGetData, []);

    useEffect(() => {
        getDataCallBack(params);
    }, [params, getDataCallBack]);

    useEffect(() => {
        responseGetDataCallBack(state);
    }, [state, responseGetDataCallBack]);

    const onClickNumber = (number) => {
        getData({
            page: number,
            limit: DEFAULT_LIMIT_DATA,
        });
    };
    const onSearchDataDummy = (value) => {};
    const onSearchData = (value) => {
        getData({
            page: 1,
            limit: 10,
            search: value,
        });
    };
    const onGetValueFilter = ({ value, key }) => {
        params[key] = value;
        params.page = 1;
        params.limit = 10;
        getData(params);
    };
    return (
        <StyleCommon>
            <Row>
                <div className="col">
                    <div>
                        {searchInput && (
                            <div className="bg-white">
                                <TableHeader
                                    {...configuration.header}
                                ></TableHeader>
                            </div>
                        )}
                        <div>
                            <TableTop
                                searchInput={searchInput}
                                onSearchDataDummy={onSearchDataDummy}
                                setDataTable={setDataTable}
                                service={service}
                                setDataDummy={setDataDummy}
                                dummyData={dummyData}
                                dataTable={dataTable}
                                onSearch={onSearchData}
                                onGetValueFilter={onGetValueFilter}
                                dataNav={nav}
                            ></TableTop>
                            <Table className="align-items-center" responsive>
                                <TableHead dataHead={optionTable}></TableHead>
                                <TableBody
                                    edit={edit}
                                    dummyData={dummyData}
                                    isLoading={isLoading}
                                    optionTable={optionTable}
                                    dataTable={dataTable}
                                ></TableBody>
                            </Table>

                            {configTable && !isLoading && (
                                <TablePagination
                                    limitPagination={DEFAULT_LIMIT_PAGINATION}
                                    onClickNumber={onClickNumber}
                                    {...configTable}
                                ></TablePagination>
                            )}
                        </div>
                    </div>
                </div>
            </Row>
        </StyleCommon>
    );
};

export default CommonTable;
