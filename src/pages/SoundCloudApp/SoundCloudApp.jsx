import React, { useState } from 'react';
import SearchContainer from 'cmps/SearchContainer/SearchContainer';
import PlayerContainer from 'cmps/PlayerContainer/PlayerContainer';
import RecentSearches from 'cmps/RecentSearches/RecentSearches';
import { soundCloudService } from 'services/SoundCloudService';
const SoundCloudApp = () => {
    const [recentSearches, setRecentSearches] = useState(soundCloudService.getRecentSearch())
    const [recentSearchQuery, setRecentSearchQuery] = useState(null)
    const [selectedTrack, setSelectedTrack] = useState(null)

    const onSetRecentSearch = (query) => {
        const recentSearches = soundCloudService.saveRecentSearch(query)
        setRecentSearches(recentSearches)
    }
    
    return (
        <>
            <SearchContainer setSelectedTrack={setSelectedTrack} recentSearchQuery={recentSearchQuery} setRecentSearch={onSetRecentSearch} />
            <PlayerContainer selectedTrack={selectedTrack} />
            <RecentSearches onSetSearch={setRecentSearchQuery} recentSearches={recentSearches} />
        </>
    )
}
export default SoundCloudApp