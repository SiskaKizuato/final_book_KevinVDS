import { useState } from 'react';

function SigninForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('/api/signin', {
      method: 'POST',
      body: JSON.stringify(formData),
    })
      .then((response) => {
        // Traiter la réponse du serveur
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleChange = (event) => {
    setFormData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </label>
      <br />
      <button type="submit">Sign In</button>
    </form>
  );
}

export default SigninForm;
