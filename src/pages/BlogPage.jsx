import React, { useContext, useEffect, useState } from "react";
import Card from "../components/Card";
import Header from "../components/Header";
import { Spinner } from "../components/Spinner";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { baseUrl } from "../baseUrl";

const BlogPage = () => {
  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const { blogId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const { loading, setLoading } = useContext(AppContext);

  async function fetchRelatedBlogs() {
    setLoading(true);
    let url = `${baseUrl}/get-blog?blogId=${blogId}`;

    try {
      const res = await fetch(url);
      const data = await res.json();

      console.log(data);
      setBlog(data.blog);
      setRelatedBlogs(data.relatedBlogs);
    } catch (error) {
      console.log("Error fetching Related Blogs", error);
      setBlog(null);
      setRelatedBlogs([]);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (blogId) {
      fetchRelatedBlogs();
    }
  }, [location.pathname]);

  return (
    //
    <div className="w-full min-h-screen flex flex-col items-center dark:bg-gray-700">
      <Header />

      <div className="w-11/12 max-w-[670px] h-full py-24 flex flex-col items-center gap-x-2 gap-y-5">
        <button
          className="py-2 px-4 self-start bg-blue-600 text-white text-sm font-semibold rounded-md hover:bg-blue-700 transition duration-300 dark:bg-blue-500 dark:hover:bg-blue-600"
          onClick={() => navigate(-1)}>
          Back
        </button>

        <div className="w-full flex flex-col items-center gap-y-9 dark:text-white">
          {loading ? (
            <Spinner />
          ) : blog ? (
            <div className="flex flex-col gap-y-7 dark:text-white">
              <Card post={blog} />

              <h2 className="text-2xl font-bold pt-6 pb-2 md:pt-10 md:pb-3">Related Blogs</h2>

              {relatedBlogs.map((post) => (
                <div key={post.id}>
                  <Card post={post} />
                </div>
              ))}
            </div>
          ) : (
            <div>
              <p>No Blog Found</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
