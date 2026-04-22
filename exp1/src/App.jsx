import React, { useState } from "react";
import "./Form.css";

function StudentForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    age: ""
  });

  const [errors, setErrors] = useState({});

  // Handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Validation function
  const validate = () => {
    let newErrors = {};

    // Name: 9–50 characters
    if (form.name.length < 9 || form.name.length > 50) {
      newErrors.name = "Must contain 9-50 letters";
    }

    // Email validation
    if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Valid email required";
    }

    // Age: 16–30
    if (form.age < 16 || form.age > 30) {
      newErrors.age = "Age 16-30 only";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Form Submitted Successfully");
    }
  };

  return (
    <div className="container">
      <h1>Student Registration</h1>

      <form onSubmit={handleSubmit}>
        
        {/* Name */}
        <label>Full Name:</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          className={errors.name ? "error" : ""}
        />
        {errors.name && <p className="error-text">{errors.name}</p>}

        {/* Email */}
        <label>Email:</label>
        <input
          type="text"
          name="email"
          value={form.email}
          onChange={handleChange}
          className={errors.email ? "error" : ""}
        />
        {errors.email && <p className="error-text">{errors.email}</p>}

        {/* Age */}
        <label>Age:</label>
        <input
          type="number"
          name="age"
          value={form.age}
          onChange={handleChange}
          className={errors.age ? "error" : ""}
        />
        {errors.age && <p className="error-text">{errors.age}</p>}

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default StudentForm;