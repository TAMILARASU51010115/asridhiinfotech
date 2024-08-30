"use client";
import { signOut, useSession } from "next-auth/react";
import { useTheme } from "next-themes";
import logo from "./1000110203.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import menuData from "./menuData";

const Header = () => {
  const { data: session } = useSession();
  const pathUrl = usePathname();

  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });

  // Submenu handler
  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index: any) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  const { theme, setTheme } = useTheme();

  return (
    <>
      <header
        className="ud-header left-0 top-0 z-40 flex w-full items-center shadow-nav fixed z-[999] border-b border-stroke bg-white dark:border-dark-3/20 dark:bg-dark/10"
      >
        <div className="container">
          <div className="relative -mx-4 flex items-center justify-between">
            <div className="w-60 max-w-full px-4 flex items-center">
              {/* Text and logo container */}
              <Link href="/">
                <Image
                  src={logo} // Use the imported logo image
                  alt="Logo"
                  width={75} // Set the width of the logo
                  height={25} // Set the height of the logo
                  priority
                />
              </Link>
            </div>

            <div className="flex w-full items-center justify-between px-4">
              <div>
                <button
                  onClick={navbarToggleHandler}
                  id="navbarToggler"
                  aria-label="Mobile Menu"
                  className="absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
                >
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] transition-all duration-300 ${
                      navbarOpen ? " top-[7px] rotate-45" : " "
                    } ${pathUrl !== "/" && "!bg-dark dark:!bg-white"} ${
                      pathUrl === "/" && sticky
                        ? "bg-dark dark:bg-white"
                        : "bg-dark"
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] transition-all duration-300 ${
                      navbarOpen ? "opacity-0 " : " "
                    } ${pathUrl !== "/" && "!bg-dark dark:!bg-white"} ${
                      pathUrl === "/" && sticky
                        ? "bg-dark dark:bg-white"
                        : "bg-dark"
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] transition-all duration-300 ${
                      navbarOpen ? " top-[-8px] -rotate-45" : " "
                    } ${pathUrl !== "/" && "!bg-dark dark:!bg-white"} ${
                      pathUrl === "/" && sticky
                        ? "bg-dark dark:bg-white"
                        : "bg-dark"
                    }`}
                  />
                </button>
                <nav
                  id="navbarCollapse"
                  className={`navbar absolute right-0 z-30 w-[250px] rounded border-[.5px] border-body-color/50 bg-white px-6 py-4 duration-300 dark:border-body-color/20 dark:bg-dark-2 lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 lg:dark:bg-transparent ${
                    navbarOpen
                      ? "visibility top-full opacity-100"
                      : "invisible top-[120%] opacity-0"
                  }`}
                >
                  <ul className="block lg:ml-8 lg:flex lg:gap-x-8 xl:ml-14 xl:gap-x-12">
                    {menuData.map((menuItem, index) =>
                      menuItem.path ? (
                        <li key={index} className="group relative">
                          <Link
                            onClick={navbarToggleHandler}
                            scroll={false}
                            href={menuItem.path}
                            className={`ud-menu-scroll flex py-2 text-base text-dark group-hover:text-primary dark:text-white dark:group-hover:text-primary lg:inline-flex lg:px-0 lg:py-6 ${
                              pathUrl === menuItem?.path && "text-primary"
                            }`}
                          >
                            {menuItem.title}
                          </Link>
                        </li>
                      ) : (
                        <li className="submenu-item group relative" key={index}>
                          <button
                            onClick={() => handleSubmenu(index)}
                            className={`ud-menu-scroll flex items-center justify-between py-2 text-base text-dark group-hover:text-primary dark:text-white dark:group-hover:text-primary lg:inline-flex lg:px-0 lg:py-6`}
                          >
                            {menuItem.title}
                            <span className="pl-1">
                              <svg
                                className="duration-300 lg:group-hover:rotate-180"
                                width="16"
                                height="17"
                                viewBox="0 0 16 17"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M8.00039 11.9C7.85039 11.9 7.72539 11.85 7.60039 11.75L1.85039 6.10005C1.62539 5.87505 1.62539 5.52505 1.85039 5.30005C2.07539 5.07505 2.42539 5.07505 2.65039 5.30005L8.00039 10.525L13.3504 5.25005C13.5754 5.02505 13.9254 5.02505 14.1504 5.25005C14.3754 5.47505 14.3754 5.82505 14.1504 6.05005L8.40039 11.7C8.27539 11.825 8.15039 11.9 8.00039 11.9Z"
                                  fill="currentColor"
                                />
                              </svg>
                            </span>
                          </button>
                          <div
                            className={`submenu relative left-0 top-full w-[250px] rounded-sm bg-white p-4 transition-[top] duration-300 group-hover:opacity-100 dark:bg-dark-2 lg:invisible lg:absolute lg:top-[110%] lg:block lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full ${
                              openIndex === index ? "!-left-[25px]" : "hidden"
                            }`}
                          >
                            {menuItem?.submenu?.map((submenuItem: any, i) => (
                              <Link
                                href={submenuItem.path}
                                key={i}
                                className={`block rounded px-4 py-[10px] text-sm ${
                                  pathUrl === submenuItem.path
                                    ? "text-primary"
                                    : "text-body-color hover:text-primary dark:text-dark-6 dark:hover:text-primary"
                                }`}
                              >
                                {submenuItem.title}
                              </Link>
                            ))}
                          </div>
                        </li>
                      ),
                    )}
                  </ul>
                </nav>
              </div>
              <div className="hidden items-center justify-end pr-16 sm:flex lg:pr-0">
                {session?.user ? (
                  <>
                    <p className="loginBtn px-7 py-3 text-base font-medium text-dark">
                      {session?.user?.name}
                    </p>
                    <button
                      onClick={() => signOut()}
                      className="signUpBtn rounded-lg bg-primary bg-opacity-100 px-6 py-3 text-base font-medium text-white duration-300 ease-in-out hover:bg-opacity-20 hover:text-dark"
                    >
                      Sign Out
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      href="/signin"
                      className="px-7 py-3 text-base font-medium text-dark hover:opacity-70 dark:text-white"
                    >
                      Sign In
                    </Link>
                    <Link
                      href="/signup"
                      className="rounded-lg bg-primary bg-opacity-100 px-6 py-3 text-base font-medium text-white duration-300 ease-in-out hover:bg-opacity-90 hover:text-dark"
                    >
                      Sign Up
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
