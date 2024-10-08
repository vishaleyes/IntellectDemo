import Link from "next/link";
import Resources from "./Resources";

const fetchHeaderData = async () => {
  const headerData = await fetch(
    "https://apistaging.intellect.com/wp-json/menu/v1/nav"
  );
  const jsonData = await headerData.json();
  return jsonData;
};

const getMenu = (menu) => {
  let result = [];
  for (let i = 0; i < menu.length; i++) {
    if (menu[i].menu_item_parent == 0) {
      const item = menu[i];
      item.submenu = menu.filter((el) => el.menu_item_parent == item.ID);
      for (let k = 0; k < item.submenu.length; k++) {
        item.submenu[k].submenu = menu.filter(
          (el) => el.menu_item_parent == item.submenu[k].ID
        );
        for (let p = 0; p < item.submenu[k].submenu.length; p++) {
          item.submenu[k].submenu[p].submenu = menu.filter(
            (el) => el.menu_item_parent == item.submenu[k].submenu[p].ID
          );
        }
      }
      result.push(item);
    }
  }
  return result;
};

const Header = async () => {
  const headerData = await fetchHeaderData();
  const menu = getMenu(headerData);
  return (
    <header>
      <nav className="bg-gray-800 border-gray-200 px-4 lg:px-6 py-7 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <a href="" className="flex items-center">
            <img
              src="/logo_header.svg"
              className="mr-3 h-6 sm:h-9"
              alt="intellect Logo"
            />
          </a>
          <div className="flex items-center lg:order-2 w-96">
            <form class="flex items-center w-full mx-auto">
              <label for="voice-search" class="sr-only">
                Search
              </label>
              <div className="relative w-full">
                <input
                  type="text"
                  id="voice-search"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pe-10 p-2.5 dark:bg-gray-700 bg-gray-700 dark:border-gray-600 border-gray-600 dark:placeholder-gray-400 placeholder-white dark:text-white text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search"
                  required
                />
                <button
                  type="button"
                  className="absolute inset-y-0 end-0 flex items-center pe-3"
                >
                  <svg
                    viewBox="0 0 256 256"
                    width="30px"
                    height="30px"
                    fillRule="nonzero"
                  >
                    <g
                      fill="#ffffff"
                      fillRule="nonzero"
                      stroke="none"
                      strokeWidth="1"
                      strokeLinecap="butt"
                      strokeLinejoin="miter"
                      strokeMiterlimit="10"
                      strokeDasharray=""
                      strokeDashoffset="0"
                      fontFamily="none"
                      fontWeight="none"
                      fontSize="none"
                      textAnchor="none"
                      style={{ mixBlendMode: "normal" }}
                    >
                      <g transform="scale(8.53333,8.53333)">
                        <path d="M13,3c-5.511,0 -10,4.489 -10,10c0,5.511 4.489,10 10,10c2.39651,0 4.59738,-0.85101 6.32227,-2.26367l5.9707,5.9707c0.25082,0.26124 0.62327,0.36648 0.97371,0.27512c0.35044,-0.09136 0.62411,-0.36503 0.71547,-0.71547c0.09136,-0.35044 -0.01388,-0.72289 -0.27512,-0.97371l-5.9707,-5.9707c1.41266,-1.72488 2.26367,-3.92576 2.26367,-6.32227c0,-5.511 -4.489,-10 -10,-10zM13,5c4.43012,0 8,3.56988 8,8c0,4.43012 -3.56988,8 -8,8c-4.43012,0 -8,-3.56988 -8,-8c0,-4.43012 3.56988,-8 8,-8z"></path>
                      </g>
                    </g>
                  </svg>
                </button>
              </div>
            </form>
            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <svg
                className="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div class="hidden w-full md:block md:w-auto" id="navbar-multi-level">
            {menu &&
              menu.length > 0 &&
              menu.map((item, index) => (
                <>
                  <Link
                    href={item.url}
                    key={index}
                    id="dropdownHoverButton"
                    data-dropdown-toggle={item.post_name}
                    data-dropdown-trigger="hover"
                    class="text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
                    type="button"
                  >
                    {item.title}
                    {item?.submenu.length > 0 && (
                      <svg
                        class="w-2.5 h-2.5 ms-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m1 1 4 4 4-4"
                        />
                      </svg>
                    )}
                  </Link>
                  {item?.submenu.length > 0 && (
                    <div
                      id={item.post_name}
                      class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 top-72"
                    >
                      <ul
                        class="py-2 text-sm text-gray-700 dark:text-gray-200"
                        aria-labelledby="dropdownHoverButton"
                      >
                        {item?.submenu.map((subMenuFirst, innerIndex) => (
                          <li key={innerIndex}>
                            <Link
                              href={subMenuFirst.url}
                              data-dropdown-toggle={subMenuFirst.post_name}
                              data-dropdown-placement="right-start"
                              data-dropdown-trigger="hover"
                              class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                              type="button"
                            >
                              {subMenuFirst.title}
                            </Link>
                            {subMenuFirst?.submenu.length > 0 && (
                              <div
                                id={subMenuFirst.post_name}
                                class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                              >
                                <ul
                                  class="py-2 text-sm text-gray-700 dark:text-gray-200"
                                  aria-labelledby="dropdownHoverButton"
                                >
                                  {subMenuFirst?.submenu.map(
                                    (subMenuSecond, inx) => (
                                      <li key={inx}>
                                        <Link
                                          href={subMenuSecond.url}
                                          data-dropdown-toggle={
                                            subMenuSecond.post_name
                                          }
                                          data-dropdown-placement="right-start"
                                          data-dropdown-trigger="hover"
                                          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                        >
                                          {subMenuSecond.title}
                                        </Link>
                                        {subMenuSecond?.submenu.length > 0 && (
                                          <div
                                            id={subMenuSecond.post_name}
                                            class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                                          >
                                            <ul
                                              class="py-2 text-sm text-gray-700 dark:text-gray-200"
                                              aria-labelledby="dropdownHoverButton"
                                            >
                                              {subMenuSecond?.submenu.map(
                                                (subMenuThird, ind) => (
                                                  <li key={ind}>
                                                    <Link
                                                      href={subMenuThird.url}
                                                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                                    >
                                                      {subMenuThird.title}
                                                    </Link>
                                                  </li>
                                                )
                                              )}
                                            </ul>
                                          </div>
                                        )}
                                      </li>
                                    )
                                  )}
                                </ul>
                              </div>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </>
              ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
