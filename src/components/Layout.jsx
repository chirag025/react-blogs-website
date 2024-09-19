import Header from "./Header";
import Blogs from "./Blogs";
import Pagination from "./Pagination";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Layout = ({ children }) => {

  const {posts} = useContext(AppContext);
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center dark:bg-gray-700">
      <Header />

      <div className="w-11/12 max-w-[670px] py-24 flex flex-col gap-y-5">
        {children}
        <Blogs />
      </div>

      
      {
        posts.length !== 0 && <Pagination />
      }

    </div>
  );
};

export default Layout;
