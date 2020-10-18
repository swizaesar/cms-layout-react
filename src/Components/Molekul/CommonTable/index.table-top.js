import React, { useRef, useEffect } from "react";
import debounce from "../../../Utils/Debounce";

import {
    FormGroup,
    Row,
    Col,
    InputGroupText,
    InputGroup,
    Input,
    InputGroupAddon,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from "reactstrap";

const FilterDropdown = (props) => {
    const [dropdownOpen, setDropdownOpen] = React.useState(false);
    const [filterChoose, setFilterChoose] = React.useState(false);
    const toggle = () => setDropdownOpen((prevState) => !prevState);

    const eventOnClick = (e, item) => {
        e.preventDefault();
        setFilterChoose(item);
        props.onGetValue(item);
    };

    return (
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle>
                <i className={props.icon}></i>
                <span>{filterChoose?.label || props.label}</span>
            </DropdownToggle>
            <DropdownMenu right>
                {props.value.map((item, key) => {
                    return (
                        <DropdownItem
                            onClick={(e) => eventOnClick(e, item)}
                            key={key}
                        >
                            {item.label}
                        </DropdownItem>
                    );
                })}
            </DropdownMenu>
        </Dropdown>
    );
};

const TableTop = (
    {
        searchInput,
        onSearch = () => {},
        searchValue,
        dummyData = [],
        service,
        setDataTable = () => {},
        dataNav,
    },
    props
) => {
    const inputEl = useRef(null);

    const eventOnChangeSearchInput = debounce((value) => {
        if (service) {
            onSearch(value);
        }
    }, 750);
    const eventOnChangeSearchInputDummy = (value) => {
        if (service) {
            onSearch(value);
        } else {
            let getData = dummyData;
            if (value.length > 0) {
                let data = dummyData;
                data = data.filter((person) => {
                    return person.name.toLowerCase().search(value) !== -1;
                    // return lowerCase;
                });
                setDataTable(data);
            }
            if (value.length < 1) {
                setDataTable(getData);
            }
        }
    };
    useEffect(() => {
        if (searchInput) {
            inputEl.current.value = searchValue;
        }
    }, [searchValue, searchInput]);

    return (
        <Row className="justify-content-end">
            {searchInput && (
                <Col md={6} lg={6} sm={12} xs={12}>
                    <FormGroup className="search-box">
                        <InputGroup className="mb-4">
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                    <i className="fa fa-search" />
                                </InputGroupText>
                            </InputGroupAddon>
                            <Input
                                ref={inputEl}
                                onChange={
                                    service
                                        ? ({ target: { value } }) =>
                                              eventOnChangeSearchInput(value)
                                        : (e) =>
                                              eventOnChangeSearchInputDummy(
                                                  e.target.value
                                              )
                                }
                                defaultValue={searchValue}
                                placeholder="Search"
                                type="text"
                            />
                        </InputGroup>
                    </FormGroup>
                </Col>
            )}
            <Col md={6} lg={6} sm={12} xs={12}>
                <div className="table-top-filter">
                    {dataNav.filter &&
                        dataNav.filter.length > 0 &&
                        dataNav.filter.map((item, key) => {
                            return (
                                <FilterDropdown
                                    onGetValue={props.onGetValueFilter}
                                    key={key}
                                    {...item}
                                ></FilterDropdown>
                            );
                        })}
                </div>
            </Col>
        </Row>
    );
};

export default TableTop;
