import React, {Fragment, ReactNode} from 'react';
import {IPhoto} from "../../../hooks/useApi";

import {makeArray} from "../../../utils/funcs";
import Skeleton from "react-loading-skeleton";

import 'react-loading-skeleton/dist/skeleton.css'

import "./List.scss";

interface IListProps {
    data: IPhoto[] | undefined;
    limit?: number
    renderItem: (item: { id: number, image: string, title: string }) => any;
    loadingComponent?: ReactNode;
}

const List = (props: IListProps) => {
    const {data, limit = 20, loadingComponent = <Skeleton />, renderItem} = props;

    const RenderItem = renderItem;

    if (data?.length === 0) {
        return <h2>No results</h2>
    }

    return (
        <div className="List">
            {!data && makeArray(limit).map((item: number) => (
                <Fragment key={item}>
                    {loadingComponent}
                </Fragment>
            ))}

            {data?.map((item: IPhoto) => (
                    <RenderItem
                        id={item.id}
                        key={item.id}
                        image={item.thumbnailUrl}
                        title={item.title}
                    />
                )
            )}
        </div>
    );
};

export default List;
