import React from 'react';
import {IPhoto} from "../../../hooks/useApi";

import "./List.scss";
import PhotoCard from "../PhotoCard/PhotoCard";
import {makeArray} from "../../../utils/funcs";

interface IList {
    data: IPhoto[] | undefined;
    loadingItemsCount?: number
}

const List = (props: IList) => {
    const {data, loadingItemsCount = 10} = props;

    return (
        <div className="List">
            {!data && makeArray(loadingItemsCount).map((item: number) => (
                <h1>Loading</h1>
            ))}

            {data?.map((item: IPhoto) => (
                    <PhotoCard
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
