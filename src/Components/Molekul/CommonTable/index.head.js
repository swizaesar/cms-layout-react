import React from "react";

const TableHead = ({ dataHead = [] }) => {
    return (
        <thead className="thead-light">
            <tr>
                {dataHead.map((item, key) => {
                    return (
                        <th scope="col" key={key}>
                            {item.headName}
                        </th>
                    );
                })}
            </tr>
        </thead>
    );
};

export default TableHead;
