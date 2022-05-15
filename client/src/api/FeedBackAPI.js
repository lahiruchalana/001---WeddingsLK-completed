import {useState, useEffect} from 'react'
import axios from 'axios'

function FeedBackAPI() {
    const [feedBacks, setFeedBacks] = useState([])
    const [callback, setCallback] = useState(false)

    useEffect(() =>{
        const getFeedBacks = async () =>{
            const res = await axios.get('/api/feedback')
            setFeedBacks(res.data)
        }

        getFeedBacks()
    },[callback])
    return {
        feedBacks: [feedBacks, setFeedBacks],
        callback: [callback, setCallback]
    }
}

export default FeedBackAPI
