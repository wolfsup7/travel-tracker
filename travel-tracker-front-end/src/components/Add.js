import {useState} from 'react'

const Add = (props) => {
    const [location, setLocation] = useState({name: '', image: '', touristRating: 0, info: ''})

    const handleChange = (event) => {
        setLocation({...location, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.handleCreate(location)
    }

    return(
        <>
        <form onSubmit={handleSubmit}>
            <div class="form-group">
                <label htmlFor='name'>Name:</label>
                <input type='text' name='name' onChange={handleChange}/>
            </div>
            <div class="form-group">
                <label htmlFor='image'>Picture:</label>
                <input type='text' name='image' onChange={handleChange}/>
            </div>
            <div class="form-group">
                <label htmlFor='touristRating'>Rating: {location.touristRating}</label>
                <input type='range' class="custom-range" min="0" max="5" name='touristRating' onChange={handleChange}/>
            </div>
            <div class="form-group">
                <label htmlFor='info'>Info:</label>
                <textarea class="form-control" rows="3" type='text' name='info' onChange={handleChange}></textarea>
            </div>
            <input type='submit' class="btn btn-primary"/>
        </form>
        </>
    )
}

export default Add