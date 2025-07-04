import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth'; // import your custom hook

const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useAuth(); // get login function from context
  const [form, setForm] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.email.trim() === '' || form.password.trim() === '') {
      setError('Please enter email and password');
      return;
    }
    login('mock-jwt-token');
  };

  return (
    <div className='login-wrapper'>
      <h1>Login</h1>
      <p className='note'>Note*: To login type dummy email and password </p>
      {error && <p>{error}</p>}

      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label><br />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter email"
          />
        </div>
        <div>
          <label>Password</label><br />
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Enter password"
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
