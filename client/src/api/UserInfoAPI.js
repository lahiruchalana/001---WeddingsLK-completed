import {useState, useEffect} from 'react'
import axios from 'axios'

function UserInfoAPI() {
    const [users, setUsers] = useState([])
    const [callback, setCallback] = useState(false)
    const [category, setCategory] = useState('')

    const [sort, setSort] = useState('')
    const [search, setSearch] = useState('')
    const [page, setPage] = useState(1)
    const [result, setResult] = useState(0)

    const [emp_name, setEmpName] = useState([])
    const [emp_contact, setEmpContact] = useState([])
    const [progress, setProgress] = useState(0)
    const [progress2, setProgress2] = useState(1)
    const [progress3, setProgress3] = useState(2)

    useEffect(() =>{
        const getUsers = async () => {
            const res = await axios.get(`/user/users?limit=${page*9}&name[regex]=${search}`)
            setUsers(res.data.users)
            setResult(res.data.result)
        }
        getUsers()
    },[callback, category, sort, search, page])
    
    return {
        users: [users, setUsers],
        callback: [callback, setCallback],
        category: [category, setCategory],
        sort: [sort, setSort],
        search: [search, setSearch],
        page: [page, setPage],
        result: [result, setResult],
        emp_name: [emp_name, setEmpName],
        emp_contact: [emp_contact, setEmpContact],
        progress: [progress, setProgress],
        progress2: [progress2, setProgress2],
        progress3: [progress3, setProgress3]

    }
}

export default UserInfoAPI
