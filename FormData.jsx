import React, { useState } from "react";

export default function FormData() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    Password: "",
    email: "",
    Day: "",
    Month: "",
    Year: "",
    Gender: "",
  });


  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    
    <div>
      <form onSubmit={handleSubmit}>
        <h1>React Form</h1>

        <h2>Name</h2>
        <input
  type="text"
  value={formData.firstName}
  name="firstName"
  onChange={handleChange}
  placeholder="First Name"
  required
  style={{ marginRight: "20px" }}
/>

<input
  type="text"
  value={formData.lastName}
  name="lastName"
  onChange={handleChange}
  placeholder="Last Name"
  required
/>

        
        <br />
        <br />

        <div className="dob">
  <select name="Day" value={formData.Day} onChange={handleChange} style={{ marginRight: "20px" }}>
    <option value="">Day</option>
    {[...Array(31)].map((_, i) => (
      <option key={i + 1} value={i + 1}>
        {i + 1}
      </option>
      
    ))}
  </select>

  <select name="Month" value={formData.Month} onChange={handleChange} style={{ marginRight: "20px" }}>
    <option value="">Month</option>
    {[
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ].map((Month, index) => (
      <option key={Month} value={Month}>
        {Month}
      </option>
    ))}
  </select>

  <select name="Year" value={formData.Year} onChange={handleChange}>
    <option value="">Year</option>
    {Array.from({ length: 100 }, (_, i) => (
      <option key={2026 - i} value={2026 - i}>
        {2026 - i}
      </option>
    ))}
  </select>
</div>
<br />
<br/>
<div className="gender">
        <select name="Gender" value={formData.Gender} onChange={handleChange}>
          <option value="">Gender</option>
          {["Male", "Female", "Other"

          ].map((Gender, index) => (
            <option key={Gender} value={Gender}>
            {Gender}
            </option>
          ))}
        </select>
        </div>
  <br />
        <br />


        <input
          type="email"
          value={formData.email}
          name="email"
          onChange={handleChange}
          placeholder="Please enter your email"
        />
<br />
<br />
        <input
          type="password"
          value={formData.Password}
          name="Password"
          onChange={handleChange}
          placeholder="Please enter your password"
          required
        />
        <br />
        <br />

      
        
        

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

