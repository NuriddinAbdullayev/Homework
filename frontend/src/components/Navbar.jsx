const Navbar = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  const logout = () => {
    localStorage.clear();
    window.location.href = "/login";
  };

  return (
    <div className="flex justify-between items-center bg-black text-white p-4 rounded-xl mb-6">
      <h1 className="text-xl font-bold">
        {user?.fullName}
      </h1>

      <button
        onClick={logout}
        className="bg-red-500 px-4 py-2 rounded-lg"
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;