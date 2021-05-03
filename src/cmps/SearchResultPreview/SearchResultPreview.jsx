
import React from 'react'

import './SearchResultPreview.scss'

const SearchResultPreview = ({ searchResult, defaultImgUrl, setSelectedTrack }) => {
    const { artwork_url: imgUrl, title } = searchResult
    return (
        <li onClick={() => setSelectedTrack(searchResult)} className="search-result-preview flex  align-center">
            <img className="search-result-preview-img" src={imgUrl || defaultImgUrl} alt="img cover" />
            <h2 className="search-result-preview-title">{title}</h2>
        </li>
    )


}

export default SearchResultPreview
