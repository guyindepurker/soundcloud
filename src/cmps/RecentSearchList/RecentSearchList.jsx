
import React from 'react'

import './RecentSearchList.scss'
import RecentSearchPreview from '../RecentSearchPreview/RecentSearchPreview';

const RecentSearchList = ({ recentSearches, onSetSearch }) => {

    return (
        <ul className="recent-search-list clean-list">
            {recentSearches.map((recentSearch, key) => <RecentSearchPreview onSetSearch={onSetSearch} recentSearch={recentSearch} key={key} />)}
        </ul>
    )


}

export default RecentSearchList
