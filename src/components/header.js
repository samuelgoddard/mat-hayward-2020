import { Link } from "gatsby"
import React from "react"

const Header = () => (
  <header>
    <div className="md:absolute top-0 left-0 z-10 p-4 py-6 md:p-12">
      <div className="flex flex-wrap md:block">
        <Link className="uppercase font-sans font-bold tracking-widest mb-6 block text-base md:fixed top-0 left-0 md:m-12" to="/">
            Mat Hayward
          </Link>

        <nav className="ml-auto md:ml-0 text-right md:text-left md:mt-10">
          <ul>
            <li>
              <Link
                activeClassName="is--active"
                className="nav-item font-sans uppercase inline-block mb-1 text-sm"
                to="/">
                  Biography
              </Link>
            </li>
            <li>
              <Link
                activeClassName="is--active"
                className="nav-item font-sans uppercase inline-block mb-1 text-sm"
                partiallyActive={true}
                to="/photography">
                  Photography
              </Link>
            </li>
            <li>
              <Link
                activeClassName="is--active"
                className="nav-item font-sans uppercase inline-block mb-1 text-sm"
                partiallyActive={true}
                to="/journal">
                  Journal
              </Link>
            </li>
            <li>
              <a
                className="nav-item font-sans uppercase inline-block mb-1 text-sm"
                target="_blank"
                rel="noopener noreferrer"
                href="https://instagram.com/mathaywarduk">
                  Instagram
              </a>
            </li>
            {/* <li>
              <Link
                activeClassName="is--active"
                className="nav-item font-sans uppercase inline-block mb-1 text-sm"
                to="/journal">
                  Journal
              </Link>
            </li> */}
          </ul>
        </nav>
      </div>
    </div>

    <div className="hidden md:block fixed top-0 right-0 z-10 p-6 md:p-12">
      <span className="text-sm uppercase font-sans meta-date leading-none">
      —2016
        <span className="block text-right">2021</span>
      </span>
    </div>
  </header>
)

export default Header