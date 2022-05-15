import React, {useContext} from 'react'
import {GlobalState} from '../../GlobalState'

function Filters() {
    const state = useContext(GlobalState)
    const [sort, setSort] = state.weddingPlansAPI.sort
    const [search, setSearch] = state.weddingPlansAPI.search

    const handleCategory = e => {
        setSearch('')
    }

    return (
        <div className="filter_menu">

            <input type="text" value={search} placeholder="Search Your Wedding Plans!"
            onChange={e => setSearch(e.target.value.toLowerCase())} />

            <div className="row sort">
                <span>Sort By: </span>
                <select value={sort} onChange={e => setSort(e.target.value)} >
                    <option value=''>Newest</option>
                    <option value='sort=oldest'>Oldest</option>
                    <option value='sort=-sold'>Best Vendors</option>
                    <option value='sort=-price'>Price: Hight-Low</option>
                    <option value='sort=price'>Price: Low-Hight</option>
                </select>
            </div>
        </div>
    )
}

export default Filters
