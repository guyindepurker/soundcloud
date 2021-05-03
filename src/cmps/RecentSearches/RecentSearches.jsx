
import React from 'react'

import './RecentSearches.scss'
import RecentSearchList from '../RecentSearchList/RecentSearchList';

const RecentSearches = ({ recentSearches, onSetSearch }) => {
    return (
        <section className="recent-searches flex center-center column">
            <h2 className="recent-search-title">Your recent search</h2>
            {!recentSearches.length ? <span>No searches yet...</span> :<RecentSearchList onSetSearch={onSetSearch} recentSearches={recentSearches} />}
        </section>
    )


}

export default RecentSearches
