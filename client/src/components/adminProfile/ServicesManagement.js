import React, {useState, useContext} from 'react'
import styled from 'styled-components'
import {GlobalState} from '../../GlobalState'
import axios from 'axios'
import Header from '../header/Header'
import SideBarAdmin from './SideBarAdmin'

function Categories() {
    const state = useContext(GlobalState)
    const [categories] = state.categoriesAPI.categories
    const [category, setCategory] = useState('')
    const [token] = state.token
    const [callback, setCallback] = state.categoriesAPI.callback
    const [onEdit, setOnEdit] = useState(false)
    const [id, setID] = useState('')

    const createCategory = async e =>{
        e.preventDefault()
        try {
            if(onEdit){
                const res = await axios.put(`/api/category/${id}`, {name: category}, {
                    headers: {Authorization: token}
                })
                alert(res.data.msg)
            }else{
                const res = await axios.post('/api/category', {name: category}, {
                    headers: {Authorization: token}
                })
                alert(res.data.msg)
            }
            setOnEdit(false)
            setCategory('')
            setCallback(!callback)
            
        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    const editCategory = async (id, name) =>{
        setID(id)
        setCategory(name)
        setOnEdit(true)
    }

    const deleteCategory = async id =>{
        try {
            const res = await axios.delete(`/api/category/${id}`, {
                headers: {Authorization: token}
            })
            alert(res.data.msg)
            setCallback(!callback)
        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    return (
        <div>
            <Header/>
            <SideBarAdmin/>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Text4>Services Management</Text4>
            <br/>
            <br/>
            <div className="categories">
                <form onSubmit={createCategory}>
                    <label htmlFor="category">Add Services</label>
                    <input type="text" name="category" value={category} required
                    onChange={e => setCategory(e.target.value)} />

                    <button type="submit">{onEdit? "Update" : "Create"}</button>
                </form>
                <div className="col">
                    {
                        categories.map(category => (
                            <div className="row" key={category._id}>
                                <p>{category.name}</p>
                                <div>
                                    <button onClick={() => editCategory(category._id, category.name)}>Edit</button>
                                    <button onClick={() => deleteCategory(category._id)}>Delete</button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>       
    )
}

const Text4 = styled.div`
    margin-left: 265px;
    font-size: 25px;
    color: rgb(78, 6, 69);
    font-weight: 700;
    text-transform: uppercase;
`;

export default Categories
