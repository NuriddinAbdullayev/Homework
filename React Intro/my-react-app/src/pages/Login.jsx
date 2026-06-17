import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/authService";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [parol, setParol] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await loginUser({
        email,
        parol,
      });

      localStorage.setItem("token", response.data.token);

      navigate("/profile");
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div className='min-h-screen bg-gray-100 flex justify-center items-center'>
      <form
        className='bg-white shadow-2xl rounded-2xl p-10 w-full sm:w-125 flex flex-col gap-5'
        onSubmit={handleSubmit}>
        <h1 className='text-4xl font-bold text-center text-black'>Login</h1>

        <input
          type='email'
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className='border p-3 rounded-xl outline-none text-black'
        />
        <input
          type='password'
          placeholder='Parol'
          value={parol}
          onChange={(e) => setParol(e.target.value)}
          className='border p-3 rounded-xl outline-none text-black'
        />

        <button className='bg-cyan-800 text-white py-3 rounded-xl hover:bg-cyan-700 duration-300'>
          Login
        </button>
      </form>
    </div>
  );
}
