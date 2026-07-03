import React, { useState } from 'react'

function FormData() {
    const [formData, setFormData] = useState({
        UserName: '',
        Password: '',
        email: '',
    })

    const handleChange = (event) => {

        const { name, value } = event.target
              

              setFormData((prevData) => ({
             ...prevData,
             [name]: value
        }));



    };

    const handleSubmit = (event) => {
        event.preventDefault();//to privent the reloading of the page 
          console.log(formData);
          

    }
    return (
        <div>
            <form onSubmit={(handleSubmit)}>
                <h1>React Form</h1>
                <input
                    type='text'
                    value={formData.UserName}
                    name='UserName'
                    onChange={handleChange}
                    placeholder='Please enter your userName'
                    required
                />
                <br></br>
                <br></br>
                <input
                    type='password'
                    value={formData.Password}
                    name='Password'
                    onChange={handleChange}
                    placeholder='Please enter your password'
                    required
                />
                <br></br>
                <br></br>
                <input
                    type='email'
                    value={formData.email}
                    name='email'
                    onChange={handleChange}
                    placeholder='Please enter your password'
                    
                />
                <br></br>
                <br></br>
                <button type='submit'>Submit</button>

            </form>
        </div>
    )
}

export default FormData






