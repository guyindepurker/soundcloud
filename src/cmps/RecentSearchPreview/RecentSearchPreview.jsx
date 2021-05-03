
import React from 'react'

import './RecentSearchPreview.scss'

const RecentSearchPreview = ({ recentSearch, onSetSearch }) => {

    return (
        <li onClick={() => onSetSearch(recentSearch)} className="recent-search-preview">
            {recentSearch}
        </li>
    )


}

export default RecentSearchPreview
