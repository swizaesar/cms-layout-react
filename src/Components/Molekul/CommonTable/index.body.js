import React from "react";
import tableType from "./index.type";
import { Fragment } from "react";
import Skeleton from "../../Loading/Skeleton";

const TableBody = ({
    isLoading = false,
    optionTable = [],
    dataTable = [],
    dummyData = [],
    edit = false,
}) => {
    return (
        <tbody>
            {!isLoading ? (
                edit ? (
                    dummyData.length > 0 ? (
                        dummyData.map((item, key) => {
                            let number = key;
                            return (
                                <tr key={key}>
                                    {optionTable.map((itemOptionTable, key) => {
                                        return (
                                            <td
                                                key={key}
                                                style={{
                                                    verticalAlign: "middle",
                                                }}
                                            >
                                                {itemOptionTable &&
                                                !itemOptionTable.renderItem
                                                    ? tableType({
                                                          number: number + 1,
                                                          value:
                                                              item[
                                                                  itemOptionTable
                                                                      ?.fieldName
                                                              ],
                                                          img:
                                                              item[
                                                                  itemOptionTable
                                                                      ?.img
                                                              ],
                                                          percent:
                                                              item[
                                                                  itemOptionTable
                                                                      ?.percent
                                                              ],
                                                          itemOptionTable,
                                                          item,
                                                      })[itemOptionTable?.type](
                                                          item
                                                      )
                                                    : itemOptionTable.renderItem(
                                                          item
                                                      )}
                                            </td>
                                        );
                                    })}
                                </tr>
                            );
                        })
                    ) : (
                        <tr>
                            <td>NO DATA</td>
                        </tr>
                    )
                ) : dataTable.length > 0 ? (
                    dataTable.map((item, key) => {
                        let number = key;
                        return (
                            <tr key={key}>
                                {optionTable.map((itemOptionTable, key) => {
                                    return (
                                        <td
                                            key={key}
                                            style={{ verticalAlign: "middle" }}
                                        >
                                            {itemOptionTable &&
                                            !itemOptionTable.renderItem
                                                ? tableType({
                                                      number: number + 1,
                                                      value:
                                                          item[
                                                              itemOptionTable
                                                                  ?.fieldName
                                                          ],
                                                      img:
                                                          item[
                                                              itemOptionTable
                                                                  ?.img
                                                          ],
                                                      percent:
                                                          item[
                                                              itemOptionTable
                                                                  ?.percent
                                                          ],
                                                      itemOptionTable,
                                                      item,
                                                  })[itemOptionTable?.type](
                                                      item
                                                  )
                                                : itemOptionTable.renderItem(
                                                      item
                                                  )}
                                        </td>
                                    );
                                })}
                            </tr>
                        );
                    })
                ) : (
                    <tr>
                        <td>NO DATA</td>
                    </tr>
                )
            ) : (
                <Fragment>
                    <tr>
                        {optionTable.map((itemOptionTable, key) => {
                            return (
                                <td key={key}>
                                    <Skeleton></Skeleton>
                                </td>
                            );
                        })}
                    </tr>
                    <tr>
                        {optionTable.map((itemOptionTable, key) => {
                            return (
                                <td key={key}>
                                    <Skeleton></Skeleton>
                                </td>
                            );
                        })}
                    </tr>
                    <tr>
                        {optionTable.map((itemOptionTable, key) => {
                            return (
                                <td key={key}>
                                    <Skeleton></Skeleton>
                                </td>
                            );
                        })}
                    </tr>
                </Fragment>
            )}
        </tbody>
    );
};

export default TableBody;
