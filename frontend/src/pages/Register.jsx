import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../api/axios";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/auth/register", formData);

      localStorage.setItem(
        "accessToken",
        res.data.tokens.accessToken
      );

      localStorage.setItem(
        "refreshToken",
        res.data.tokens.refreshToken
      );

      localStorage.setItem(
        "user",
        JSON.stringify(res.data.data)
      );

      navigate("/dashboard");
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white shadow p-6 rounded-xl"
      >
        <h1 className="text-3xl font-bold mb-5 text-center">
          Register
        </h1>

        <input
          type="text"
          placeholder="Full Name"
          className="w-full border p-2 rounded mb-3"
          onChange={(e) =>
            setFormData({
              ...formData,
              fullName: e.target.value,
            })
          }
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-2 rounded mb-3"
          onChange={(e) =>
            setFormData({
              ...formData,
              email: e.target.value,
            })
          }
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2 rounded mb-3"
          onChange={(e) =>
            setFormData({
              ...formData,
              password: e.target.value,
            })
          }
        />

        <button className="w-full bg-black text-white p-2 rounded">
          Register
        </button>

        <p className="mt-4 text-center">
          Akkauntingiz bormi?
          <Link to="/login" className="text-blue-500 ml-2">
            Kirish
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;