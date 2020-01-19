import React from 'react'
import CollectionItem from '../collection-item/collection-item.component'
import './preview.collection.styles.scss'

export default function CollectionPreview({title, items}) {
    console.log(items.filter((item, i) => i < 4))
    return (
        <div>
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
            {
                items.filter((item, i) => i < 4).map(({id, otherItemProps}) => (
                    <CollectionItem key={id} {...otherItemProps}/>
                ))
            }
            </div>
        </div>
    )
}