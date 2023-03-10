import Link from "next/link";
import {
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";
import { HiCollection, HiHome, HiMenu, HiMoon, HiSun } from "react-icons/hi";
import { links } from "../../../assets/constants";
import { useRouter } from "next/router";

type Props = {
  sidebarIsOpen: boolean;
  setSidebarIsOpen: Dispatch<SetStateAction<boolean>>;
  isDarkTheme: boolean;
  setIsDarkTheme: ()=>void;
};

const Sidebar = ({ sidebarIsOpen, setSidebarIsOpen, isDarkTheme, setIsDarkTheme }: Props) => {
  const width = sidebarIsOpen ? "w-[16rem]" : "w-16";

  return (
    <div
      className={`border-r bg-slate-100 border-r-gray-300 dark:border-r-gray-900 dark:bg-slate-800 ${width}  flex h-full flex-col items-center transition-all`}
    >
      <button
        aria-label="expand sidebar"
        onClick={() => setSidebarIsOpen((prev) => !prev)}
        className="self-end px-5 py-2 text-2xl text-gray-500 transition-colors hover:text-orange-600 hover:dark:text-orange-400"
      >
        <HiMenu />
      </button>
      <div className=" flex h-[calc(100vh-8rem)] w-full flex-col justify-between">
        <div className={`my-4 flex w-full flex-col self-start overflow-hidden`}>
          <SidebarLink
            sidebarIsOpen={sidebarIsOpen}
            link={links.home}
            icon={<HiHome />}
            to="Home"
          />
          <SidebarLink
            sidebarIsOpen={sidebarIsOpen}
            link={links.projects}
            icon={<HiCollection />}
            to="Projects"
          />
        </div>
        <div className="">
          <button
            aria-label="Theme toggle"
            onClick={() => {
              setIsDarkTheme();
            }}
            className="flex w-full flex-nowrap items-center border-l-4 border-l-transparent p-4 text-2xl text-gray-600 dark:text-gray-400"
          >
            <span>
              {isDarkTheme ? (
                <HiSun />
              ) : (
                <HiMoon />
              )}{" "}
            </span>
            <span
              className={`${
                sidebarIsOpen ? "opacity-100" : "opacity-0"
              } ml-6 whitespace-nowrap text-base transition-opacity duration-300`}
            >
              {isDarkTheme ? "Set Light Theme" : "Set Dark Theme"}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

type SidebarLinkProps = {
  link: string;
  activeLink?: string;
  icon: ReactNode;
  to: string;
  sidebarIsOpen: boolean;
  onClick?: () => void;
};

const SidebarLink = ({
  link,
  icon,
  to,
  sidebarIsOpen,
  onClick,
}: SidebarLinkProps) => {
  const _activeLink =
    "dark:bg-gray-900 bg-gray-300 dark:border-l-orange-400 border-l-orange-600 dark:text-orange-400 text-orange-600";
  const router = useRouter();
  return (
    <Link
      className={`flex w-full flex-nowrap items-center whitespace-nowrap border-l-4 p-4 text-2xl text-gray-500 hover:bg-gray-300 hover:dark:bg-gray-900 ${
        router.pathname === link ? _activeLink : "border-l-transparent"
      }`}
      aria-label={to}
      href={link}
      onClick={onClick}
    >
      <span>{icon} </span>
      <span
        className={`${
          sidebarIsOpen ? "opacity-100" : "opacity-0"
        } ml-6 text-base transition-opacity duration-300`}
      >
        {to}
      </span>
    </Link>
  );
};