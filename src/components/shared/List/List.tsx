import React, {Fragment, ReactNode} from 'react';
import {IPhoto} from "../../../hooks/useApi";

import {makeArray} from "../../../utils/funcs";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

import "./List.scss";

interface IList {
    data: IPhoto[] | undefined;
    limit?: number
    renderItem: (item: { image: string, title: string }) => any;
    loadingComponent?: ReactNode;
}

const List = (props: IList) => {
    const {data, limit = 20, loadingComponent = <Skeleton />, renderItem} = props;

    const RenderItem = renderItem;

    if (data?.length === 0) {
        return <div>No results</div>
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
