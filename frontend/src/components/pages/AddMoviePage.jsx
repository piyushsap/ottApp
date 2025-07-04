import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../atoms/Button';
import Input from '../atoms/Input';
import axios from 'axios';

const AddMoviePage = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: '',
    thumbnail: '',
    genre: '',
    description: '',
    videoUrl: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    console.log(e.target.name,111, e.target.value)
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/movies', form) // JWT will auto attach
      console.log(res)
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to add movie');
    }
  };

  return (
    <div className="p-4 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">Add New Movie</h1>
      {error && <p className="text-red-500 mb-2">{error}</p>}
      <form onSubmit={handleSubmit}>
        {Object.keys(form).map((key) => (
          <>
            <label>{key}</label>
            <Input
              key={key}
              name={key}
              placeholder={key}
              value={form[key]}
              onChange={handleChange}
              className="mb-2 w-full"
            />
          </>
        ))}
        <Button type="submit" className="w-full">Add Movie</Button>
      </form>
    </div>
  );
};

export default AddMoviePage;
