import React, {useState, useContext, useEffect} from 'react'
import axios from 'axios'
import {GlobalState} from '../../../GlobalState'
import Loading from '../utils/loading/Loading'
import {useHistory, useParams} from 'react-router-dom'



////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
///////////////////
///////////////    Pls go to VendorManagement page all the code doing in there       ///////
//////////////////
////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////

const initialState = {
    product_id: '',
    title: '',
    price: 0,
    max_price: 0,
    description: 'How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.',
    content: 'Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.',
    content_2: '',
    content_3: 'Add more Info of Services',
    content_4: 'Add more Info of Services',
    content_5: 'Add more Info of Services',
    address_line_1: '',
    address_line_2: '',
    address_line_3: '',
    other_services: '',
    contact_number_1: 0,
    contact_number_2: 0,
    category: '',
    _id: ''
}

function CreateProduct() {
    const state = useContext(GlobalState)
    const [product, setProduct] = useState(initialState)
    const [categories] = state.categoriesAPI.categories
    const [images, setImages] = useState(false)
    const [loading, setLoading] = useState(false)


    const [isAdmin] = state.userAPI.isAdmin
    const [token] = state.token

    const history = useHistory()
    const param = useParams()

    const [products] = state.productsAPI.products
    const [onEdit, setOnEdit] = useState(false)
    const [callback, setCallback] = state.productsAPI.callback

    useEffect(() => {
        if(param.id){
            setOnEdit(true)
            products.forEach(product => {
                if(product._id === param.id) {
                    setProduct(product)
                    setImages(product.images)
                }
            })
        }else{
            setOnEdit(false)
            setProduct(initialState)
            setImages(false)
        }
    }, [param.id, products])

    const handleUpload = async e =>{
        e.preventDefault()
        try {
            if(!isAdmin) return alert("You're not an admin")
            const file = e.target.files[0]
            
            if(!file) return alert("File not exist.")

            if(file.size > 1024 * 1024) // 1mb
                return alert("Size too large!")

            if(file.type !== 'image/jpeg' && file.type !== 'image/png') // 1mb
                return alert("File format is incorrect.")

            let formData = new FormData()
            formData.append('file', file)

            setLoading(true)
            const res = await axios.post('/api/upload', formData, {
                headers: {'content-type': 'multipart/form-data', Authorization: token}
            })
            setLoading(false)
            setImages(res.data)

        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    const handleDestroy = async () => {
        try {
            if(!isAdmin) return alert("You're not an admin")
            setLoading(true)
            await axios.post('/api/destroy', {public_id: images.public_id}, {
                headers: {Authorization: token}
            })
            setLoading(false)
            setImages(false)
        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    const handleChangeInput = e =>{
        const {name, value} = e.target
        setProduct({...product, [name]:value})
    }

    const handleSubmit = async e =>{
        e.preventDefault()
        try {
            if(!isAdmin) return alert("You're not an admin")
            if(!images) return alert("No Image Upload")

            if(onEdit){
                await axios.put(`/api/products/${product._id}`, {...product, images}, {
                    headers: {Authorization: token}
                })
            }else{
                await axios.post('/api/products', {...product, images}, {
                    headers: {Authorization: token}
                })
            }
            setCallback(!callback)
            history.push("/")
        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    const styleUpload = {
        display: images ? "block" : "none"
    }
    return (
        <div className="create_product">
            <div className="upload">
                <input type="file" name="file" id="file_up" onChange={handleUpload}/>
                {
                    loading ? <div id="file_img"><Loading /></div>

                    :<div id="file_img" style={styleUpload}>
                        <img src={images ? images.url : ''} alt=""/>
                        <span onClick={handleDestroy}>X</span>
                    </div>
                }
                
            </div>

            <form onSubmit={handleSubmit}>
                <div className="row">
                    <label htmlFor="product_id">Product ID</label>
                    <input type="text" name="product_id" id="product_id" required
                    value={product.product_id} onChange={handleChangeInput} disabled={onEdit} />
                </div>

                <div className="row">
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" id="title" required
                    value={product.title} onChange={handleChangeInput} />
                </div>

                <div className="row">
                    <label htmlFor="price">Price</label>
                    <input type="number" name="price" id="price" required
                    value={product.price} onChange={handleChangeInput} />
                </div>
                <div className="row">
                    <label htmlFor="price">Maximum Price</label>
                    <input type="number" name="price" id="price" 
                    value={product.max_price} onChange={handleChangeInput} />
                </div>

                <div className="row">
                    <label htmlFor="description">Description_1</label>
                    <textarea type="text" name="description" id="description" required
                    value={product.description} rows="5" onChange={handleChangeInput} />
                </div>

                <div className="row">
                    <label htmlFor="content">Description_2</label>
                    <textarea type="text" name="content" id="content" required
                    value={product.content} rows="7" onChange={handleChangeInput} />
                </div>
                <div className="row">
                    <label htmlFor="content">Description_3</label>
                    <textarea type="text" name="content_2" id="content_2" required
                    value={product.content_2} rows="7" onChange={handleChangeInput} />
                </div>
                <div className="row">
                    <label htmlFor="content">Packages_1</label>
                    <textarea type="text" name="content_3" id="content_3" required
                    value={product.content_3} rows="7" onChange={handleChangeInput} />
                </div>
                <div className="row">
                    <label htmlFor="content_4">Packages_2</label>
                    <textarea type="text" name="content_4" id="content_4" required
                    value={product.content_4} rows="7" onChange={handleChangeInput} />
                </div>
                <div className="row">
                    <label htmlFor="content_5">Add Links</label>
                    <textarea type="text" name="content_5" id="content_5" required
                    value={product.content_5} rows="7" onChange={handleChangeInput} />
                </div>

                <div className="row">
                    <label htmlFor="title">Address Line 1</label>
                    <input type="text" name="title" id="title" required
                    value={product.address_line_1} onChange={handleChangeInput} />
                </div>
                <div className="row">
                    <label htmlFor="title">Address Line 2</label>
                    <input type="text" name="title" id="title" required
                    value={product.address_line_2} onChange={handleChangeInput} />
                </div>
                <div className="row">
                    <label htmlFor="title">Address Line 3</label>
                    <input type="text" name="title" id="title" required
                    value={product.address_line_3} onChange={handleChangeInput} />
                </div>
                <div className="row">
                    <label htmlFor="description">Other Services</label>
                    <textarea type="text" name="description" id="description" required
                    value={product.other_services} rows="5" onChange={handleChangeInput} />
                </div>
                <div className="row">
                    <label htmlFor="price">Contact Number 1</label>
                    <input type="number" name="price" id="price" 
                    value={product.contact_number_1} onChange={handleChangeInput} />
                </div>
                <div className="row">
                    <label htmlFor="price">Contact Number 2</label>
                    <input type="number" name="price" id="price" 
                    value={product.contact_number_2} onChange={handleChangeInput} />
                </div>


                <div className="row">
                    <label htmlFor="categories">Categories: </label>
                    <select name="category" value={product.category} onChange={handleChangeInput} >
                        <option value="">Please select a category</option>
                        {
                            categories.map(category => (
                                <option value={category._id} key={category._id}>
                                    {category.name}
                                </option>
                            ))
                        }
                    </select>
                </div>

                <button type="submit">{onEdit? "Update" : "Create"}</button>
            </form>
        </div>
    )
}

export default CreateProduct
