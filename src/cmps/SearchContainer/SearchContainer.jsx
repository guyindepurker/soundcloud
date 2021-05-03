
import React, { useState, useEffect } from 'react'

import './SearchContainer.scss'
import SearchInput from '../SearchInput/SearchInput';
import SearchButtons from '../SearchButtons/SearchButtons';
import { soundCloudService } from '../../services/SoundCloudService';
import SearchResultList from '../SearchResultList/SearchResultList';

const SearchContainer = ({ setRecentSearch, recentSearchQuery, setSelectedTrack }) => {
    const [searchResults, setSearchResults] = useState([])
    const [nextPageUrl, setNextPageUrl] = useState(null)
    const [searchView, setSearchView] = useState(soundCloudService.getSearchView())
    const [isLoading, setIsLoading] = useState(false)
    const [isLoadingList, setIsLoadingList] = useState(false)

    const fetchData = async (query) => {
        try {
            setIsLoadingList(true)
            const searchResults = await soundCloudService.getSearchResults(query)
            updateSearchResults(searchResults)
            setIsLoadingList(false)
        } catch (err) {
            console.error('ERROR!', err)
        }

    }
    useEffect(() => {
        if (recentSearchQuery) {
            fetchData(recentSearchQuery)
        }

    }, [recentSearchQuery])
    const toggleSearchView = (searchViewType) => {
        setSearchView(searchViewType)
        soundCloudService.saveSearchView(searchViewType)
    }

    const updateSearchResults = (searchResults) => {
        setSearchResults(searchResults?.collection)
        setNextPageUrl(searchResults?.next_href)
    }

    const searchTracks = async (query) => {
        setIsLoading(true)
        setRecentSearch(query)
        await fetchData(query)
        setIsLoading(false)
    }
    const nextPageResults = async () => {
        if (!nextPageUrl) return;
        try {
            setIsLoadingList(true)
            const nextSearchResults = await soundCloudService.getNextPageResults(nextPageUrl)
            setIsLoadingList(false)
            updateSearchResults(nextSearchResults)
        } catch (err) {
            console.error('ERROR!', err)
        }

    }
    return (
        <section className="search-container">
            <SearchInput isLoading={isLoading} searchTracks={searchTracks} />
           {searchResults.length>0 && <SearchResultList setSelectedTrack={setSelectedTrack} searchView={searchView} isLoadingList={isLoadingList} searchResults={searchResults} />} 
            <SearchButtons toggleSearchView={toggleSearchView} nextPageResults={nextPageResults} />
        </section>
    )


}

export default SearchContainer
