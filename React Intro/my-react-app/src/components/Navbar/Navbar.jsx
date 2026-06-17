import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { X, Menu } from "lucide-react";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const { t } = useTranslation();

  function changeLanguage(lang) {
    i18n.changeLanguage(lang);
    localStorage.setItem("language", lang);
  }

  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem("token");
    navigate("/login");
  }

  return (
    <nav className='bg-linear-to-r from-black via-gray-900 to-gray-900 sticky top-0 z-9999 '>
      <div className='flex mx-auto px-5 py-5 justify-between items-center max-w-360'>
        <Link to={"/"}>{t("library")}</Link>

        <div className='hidden md:flex gap-5'>
          <div className='flex gap-1'>
            <button
              className='border-2 px-3 rounded-2xl hover:bg-amber-50 hover:text-black'
              onClick={() => changeLanguage("en")}>
              EN
            </button>
            <button
              className='border-2 px-3 rounded-2xl hover:bg-amber-50 hover:text-black'
              onClick={() => changeLanguage("uz")}>
              UZ
            </button>
            <button
              className='border-2 px-3 rounded-2xl hover:bg-amber-50 hover:text-black'
              onClick={() => changeLanguage("ru")}>
              RU
            </button>
          </div>
          <Link className='hover:text-blue-400 duration-600' to={"/"}>
            {t("home")}
          </Link>
          <Link className='hover:text-blue-400 duration-600' to={"/books"}>
            {t("books")}
          </Link>
          <button
            onClick={logout}
            className='bg-cyan-800 px-6 rounded-2xl hover:bg-white hover:text-cyan-800 duration-300'>
            {t("logout")}
          </button>
        </div>

        <button className='md:hidden' onClick={() => setOpen(!open)}>
          {open ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {open && (
        <div className='md:hidden gap-5 flex flex-col items-center'>
          <Link className='hover:text-blue-400 duration-600' to={"/"}>
            Home
          </Link>
          <Link className='hover:text-blue-400 duration-600' to={"/books"}>
            Books
          </Link>
          <button className='bg-cyan-800 px-6 rounded-2xl hover:bg-white hover:text-cyan-800 duration-300'>
            Login
          </button>
        </div>
      )}
    </nav>
  );
}
