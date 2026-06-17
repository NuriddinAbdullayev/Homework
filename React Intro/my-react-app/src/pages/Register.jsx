import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { registerUser } from "../services/authService";

export default function Register() {
  const navigate = useNavigate();

  const [ism, setIsm] = useState("");
  const [familiya, setFamiliya] = useState("");
  const [yosh, setYosh] = useState("");
  const [email, setEmail] = useState("");
  const [parol, setParol] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await registerUser({
        ism,
        familiya,
        yosh: Number(yosh),
        email,
        parol,
      });
      navigate("/login");
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div className='min-h-screen bg-gray-100 flex justify-center items-center'>
      <form
        className='bg-white shadow-2xl rounded-2xl p-10 w-full sm:w-125 flex flex-col gap-5'
        onSubmit={handleSubmit}>
        <h1 className='text-4xl font-bold text-center text-black'>Register</h1>
        <input
          type='text'
          value={ism}
          placeholder='Ismni kirit'
          onChange={(e) => setIsm(e.target.value)}
          className='border p-3 rounded-xl outline-none text-black'
        />

        <input
          type='text'
          value={familiya}
          placeholder='Familiyani kirit'
          onChange={(e) => setFamiliya(e.target.value)}
          className='border p-3 rounded-xl outline-none text-black'
        />

        <input
          type='number'
          placeholder='Yosh'
          value={yosh}
          onChange={(e) => setYosh(e.target.value)}
          className='border p-3 rounded-xl outline-none text-black'
        />
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
          Register
        </button>
      </form>
    </div>
  );
}
