import {useState, useEffect} from 'react'
import axios from 'axios'


function ProductsAPI() {
    const [products, setProducts] = useState([])
    const [callback, setCallback] = useState(false)
    const [category, setCategory] = useState('')
    const [sort, setSort] = useState('')
    const [search, setSearch] = useState('')
    const [searchAddress, setSearchAddress] = useState('')
    const [page, setPage] = useState(1)
    const [result, setResult] = useState(0)
    const [rating, setRating] = useState(1)


    useEffect(() =>{
        const getProducts = async () => {
            const res = await axios.get(`/api/products?limit=${page*9}&${category}&${sort}&title[regex]=${search}&address_line_1[regex]=${searchAddress}`)
            setProducts(res.data.products)
            setResult(res.data.result)
        }
        getProducts()
    },[callback, category, sort, search, page, searchAddress])
    
    return {
        products: [products, setProducts],
        callback: [callback, setCallback],
        category: [category, setCategory],
        sort: [sort, setSort],
        search: [search, setSearch],
        page: [page, setPage],
        searchAddress: [searchAddress, setSearchAddress],
        result: [result, setResult],
        rating: [rating, setRating]
    }
}

export default ProductsAPI
