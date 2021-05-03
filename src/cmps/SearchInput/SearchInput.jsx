
import React, { useState} from 'react'
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import './SearchInput.scss'

const SearchInput = ({ searchTracks, isLoading }) => {
    const [searchTrack, setSearchTrack] = useState('')
    const onSearchTracks = (ev) => {
        ev.preventDefault()
        if (searchTrack === '') return;
        searchTracks(searchTrack)
    }

    return (
        <form className="search-input flex center-center" onSubmit={onSearchTracks}>
            <span className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText  value={searchTrack} onChange={({ target }) => setSearchTrack(target.value)} placeholder="Search Tracks" />
            </span>
            <Button label="Submit" loading={isLoading} onClick={onSearchTracks} />
        </form>
    )


}

export default SearchInput
