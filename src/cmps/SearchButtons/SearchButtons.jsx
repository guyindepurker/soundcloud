
import React from 'react'
import { BsList, BsGridFill } from 'react-icons/bs';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import './SearchButtons.scss'

const SearchButtons = ({ toggleSearchView, nextPageResults }) => {

    return (
        <section className="search-buttons flex space-between">
            <FaArrowAltCircleRight data-pr-position="top" className="next-page" onClick={nextPageResults} />
            <div className="display-btns">
                <BsGridFill className="grid-view" onClick={() => toggleSearchView('tile')} />
                <BsList onClick={() => toggleSearchView('list')} />
            </div>
        </section>
    )


}

export default SearchButtons
