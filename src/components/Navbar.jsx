import { useState } from "react";
import logo from "../images/logo.svg";
import iconOpen from "../images/icon-menu.svg";
import iconClose from "../images/icon-close-menu.svg";
import arrowUp from "../images/icon-arrow-up.svg";
import arrowDown from "../images/icon-arrow-down.svg";
import iconTodo from "../images/icon-todo.svg";
import iconCalendar from "../images/icon-calendar.svg";
import iconReminder from "../images/icon-reminders.svg";
import iconPlanning from "../images/icon-planning.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownState, setDropdownState] = useState({
    features: false,
    company: false,
  });

  const toggleDropdown = (key) => {
    
    setDropdownState((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };
  return (
    <header className="py-6 px-4 lg:px-10 epilogue-normal bg-Almost-White">
      <nav className="hidden lg:flex justify-between items-center">
        <div className="flex gap-12">
          <img src={logo} alt="logo of the website named snap" />
          <ul className="list-none flex gap-8">
            <li
              className="flex items-center gap-2 relative cursor-pointer"
              onClick={() => toggleDropdown("features")}
            >
              <a href="#" className="hover:text-Almost-Black text-Medium-Gray">
                Features
              </a>
              <img
                src={`${dropdownState.features ? arrowUp : arrowDown}`}
                alt="This icon when clicked will show the info as a dropdown"
              />
              {dropdownState.features && (
                <div className="transition duration-500 ease-in-out py-4 pl-6 pr-2 w-40 rounded-xl absolute -bottom-40 -left-16 flex flex-col gap-2 bg-white shadow-[rgba(0,0,0,0.1)_0px_4px_6px_4px,rgba(0,0,0,0.06)_0px_2px_4px_-1px]">
                  <div className="flex gap-4 items-center justify-start">
                    <img
                      src={iconTodo}
                      alt="This is a todo list icon"
                      width={15}
                      height={15}
                    />
                    <p className="text-Medium-Gray">Todo List</p>
                  </div>
                  <div className="flex gap-4 items-center justify-start">
                    <img
                      src={iconCalendar}
                      alt="This is a calendar icon"
                      width={15}
                      height={15}
                    />
                    <p className="text-Medium-Gray">Calendar</p>
                  </div>
                  <div className="flex gap-4 items-center justify-start">
                    <img
                      src={iconReminder}
                      alt="This is a reminder icon"
                      width={15}
                      height={15}
                    />
                    <p className="text-Medium-Gray">Reminder</p>
                  </div>
                  <div className="flex gap-4 items-center justify-start">
                    <img
                      src={iconPlanning}
                      alt="This is a planning icon"
                      width={15}
                      height={15}
                    />
                    <p className="text-Medium-Gray">Planning</p>
                  </div>
                </div>
              )}{" "}
            </li>

            <li
              className="flex items-center gap-2 relative cursor-pointer"
              onClick={() => toggleDropdown("company")}
            >
              <a href="#" className="hover:text-Almost-Black text-Medium-Gray">
                Company
              </a>
              <img
                src={`${dropdownState.company ? arrowUp : arrowDown}`}
                alt="This icon when clicked will show the info as a dropdown"
                className="cursor-pointer"
              />
              {dropdownState.company && (
                <div className="py-6 pl-6 pr-2 w-32 rounded-xl absolute -bottom-36 flex flex-col gap-2 bg-white shadow-[rgba(0,0,0,0.1)_0px_4px_6px_4px,rgba(0,0,0,0.06)_0px_2px_4px_-1px]">
                  <p className="text-Medium-Gray">History</p>

                  <p className="text-Medium-Gray">Our Team</p>

                  <p className="text-Medium-Gray">Blog</p>
                </div>
              )}
            </li>
            <li className="flex items-center gap-2">
              <a href="#" className="hover:text-Almost-Black text-Medium-Gray">
                Careers
              </a>
            </li>
            <li className="flex items-center gap-2">
              <a href="#" className="hover:text-Almost-Black text-Medium-Gray">
                About
              </a>
            </li>
          </ul>
        </div>
        <div className="flex gap-10 items-center">
          <a href="" className="text-Medium-Gray hover:text-Almost-Black">
            Login
          </a>
          <a
            href=""
            className="text-Medium-Gray px-4 py-2 border-[2px] border-Medium-Gray rounded-xl hover:border-Almost-Black hover:text-Almost-Black"
          >
            Register
          </a>
        </div>
      </nav>





      {/* mobile view */}
      <nav className="lg:hidden flex items-center justify-between">
        <div>
          <img
            src={logo}
            alt="logo of the website named snap"
            width={80}
            height={80}
          />
        </div>
        <div>
          <img
          className="cursor-pointer"
            src={iconOpen}
            alt="This is the icon that opens the mobile navigation"
            width={30}
            height={30}
            onClick={() => setIsOpen(true)}
          />
        </div>

        {isOpen && (
          <div
            className="fixed h-full w-screen lg:hidden backdrop-blur-sm bg-black/50 top-0 left-0"
            onClick={() => setIsOpen(false)}
          >
            <div  onClick={(e) => e.stopPropagation()} className="bg-white text-black absolute right-0 top-0 h-screen w-64 px-6 py-8 gap-8 z-50 flex flex-col items-start slide-in-right">
              <img
                src={iconClose}
                width={20}
                height={20}
                alt="This icon is used to close the mobile navigation"
                className="cursor-pointer self-end mb-10"
                onClick={() => setIsOpen(false)}
              />
              <div className="gap-12">
                <ul className="list-none text-Medium-Gray flex flex-col gap-8 ">
                  <li
                    onClick={() => toggleDropdown("features")}
                    className="flex items-center gap-2 flex-col"
                  >
                    <div className="flex items-center gap-6">
                        <a href="#">Features</a>
                        <img
                          src={`${dropdownState.features ? arrowUp : arrowDown}`}
                          className=""
                          alt="This icon when clicked will show the info as a dropdown"
                        />
                    </div>
                    {dropdownState.features && (
                      <div className="flex flex-col gap-2">
                        <div className="flex gap-4 items-center justify-start">
                          <img
                            src={iconTodo}
                            alt="This is a todo list icon"
                            width={15}
                            height={15}
                          />
                          <p className="text-Medium-Gray">Todo List</p>
                        </div>
                        <div className="flex gap-4 items-center justify-start">
                          <img
                            src={iconCalendar}
                            alt="This is a calendar icon"
                            width={15}
                            height={15}
                          />
                          <p className="text-Medium-Gray">Calendar</p>
                        </div>
                        <div className="flex gap-4 items-center justify-start">
                          <img
                            src={iconReminder}
                            alt="This is a reminder icon"
                            width={15}
                            height={15}
                          />
                          <p className="text-Medium-Gray">Reminder</p>
                        </div>
                        <div className="flex gap-4 items-center justify-start">
                          <img
                            src={iconPlanning}
                            alt="This is a planning icon"
                            width={15}
                            height={15}
                          />
                          <p className="text-Medium-Gray">Planning</p>
                        </div>
                      </div>
                    )}{" "}
                  </li>
                  <li className="flex items-center gap-2 flex-col" onClick={() => toggleDropdown("company")}>
                  <div className="flex items-center gap-6">
                        <a href="#">Company</a>
                        <img
                          src={`${dropdownState.company ? arrowUp : arrowDown}`}
                          className=""
                          alt="This icon when clicked will show the info as a dropdown"
                        />
                    </div>
                    {dropdownState.company && (
                <div className="py-6 pl-6 pr-2 rounded-xl flex flex-col gap-2">
                  <p className="text-Medium-Gray">History</p>

                  <p className="text-Medium-Gray">Our Team</p>

                  <p className="text-Medium-Gray">Blog</p>
                </div>
              )}
                  </li>
                  <li className="">
                    <a href="#">Careers</a>
                  </li>
                  <li>
                    <a href="#">About</a>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-6 items-center self-center w-full">
                <a href="" className="text-Medium-Gray">
                  Login
                </a>
                <a
                  href=""
                  className="flex justify-center items-center text-Medium-Gray px-4 py-2 border-[2px] border-Medium-Gray rounded-xl w-full"
                >
                  Register
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
