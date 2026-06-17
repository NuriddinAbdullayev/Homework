import { useEffect, useState } from "react";

import { getProfile } from "../services/authService";

export default function Profile() {
  const [user, setUser] = useState(null);

  async function fetchProfile() {
    try {
      const token = localStorage.getItem("token");

      const response = await getProfile(token);

      setUser(response.data.user);
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    fetchProfile();
  }, []);

  if (!user) {
    return <h1>Loading...</h1>;
  }

  console.log(user);

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100 p-5'>
      <div className='bg-white shadow-2xl rounded-2xl p-10 w-full sm:w-125'>
        <h1 className='text-4xl font-bold mb-5 text-black'>Profile</h1>

        <p className='mb-3 text-black'>ID: {user.id}</p>

        <p className='text-black'>Role: {user.role}</p>
      </div>
    </div>
  );
}
