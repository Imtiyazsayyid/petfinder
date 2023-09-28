"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { LuDog } from "react-icons/lu";

const Clientavbar = () => {
  const isLoggedIn = false;
  const router = useRouter();

  return (
    <div className="navbar bg-neutral border-b-2">
      <div className="navbar-start">
        <div className="dropdown dropdown-start">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-5 h-5 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-md dropdown-content mt-4 z-[1] p-2 shadow bg-neutral rounded-box w-72"
          >
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/client-about-us"}>About Us</Link>
            </li>
            <li>
              <Link href={"/client-login"}>Contact Us</Link>
            </li>
            {!isLoggedIn && (
              <>
                <li>
                  <Link href={"/client-login"}>Login</Link>
                </li>
                <li>
                  <Link href={"/client-register"}>Register</Link>
                </li>
              </>
            )}
          </ul>
        </div>
        <button
          className="btn btn-ghost btn-circle"
          onClick={() => router.push("/search-user")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
      <div className="navbar-center">
        <a className="btn btn-ghost normal-case text-xl">PetFinder</a>
      </div>
      <div className="navbar-end">
        {isLoggedIn && (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle mr-3">
              <div className="indicator">
                <LuDog className="text-2xl" />
                <span className="badge badge-sm indicator-item">8</span>
              </div>
            </label>
            <div
              tabIndex={0}
              className="mt-3 z-[1] card card-compact dropdown-content w-72 bg-neutral shadow"
            >
              <div className="card-body">
                <span className="font-bold text-lg">8 Pets</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">
                    View cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="dropdown dropdown-end md:mr-2">
          {isLoggedIn && (
            <>
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src="https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?auto=compress&cs=tinysrgb&w=800" />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-md dropdown-content mt-3 z-[1] p-2 shadow bg-neutral rounded-box w-72"
              >
                <li>
                  <a>Profile</a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Clientavbar;
