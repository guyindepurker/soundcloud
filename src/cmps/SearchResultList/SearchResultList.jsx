
import React from 'react'
import { ProgressSpinner } from 'primereact/progressspinner';

import './SearchResultList.scss'
import SearchResultPreview from '../SearchResultPreview/SearchResultPreview';

const SearchResultList = ({ searchResults, searchView, isLoadingList, setSelectedTrack }) => {

    const { artwork_url: defaultImgUrl } = searchResults.find(searchResult => searchResult.artwork_url !== null)

    if (isLoadingList) return <div className="flex center-center"><ProgressSpinner /></div>
    return (
        <ul className={`search-result-list clean-list ${searchView === 'tile' ? 'grid' : ''}`}>
            {searchResults.map(searchResult => <SearchResultPreview setSelectedTrack={setSelectedTrack} defaultImgUrl={defaultImgUrl} searchView={searchView} key={searchResult.id} searchResult={searchResult} />)}
        </ul>
    )


}

export default SearchResultList
