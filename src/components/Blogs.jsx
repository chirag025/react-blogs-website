import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { Spinner } from "./Spinner";
import Card from "./Card";

const Blogs = () => {
  const { loading, posts } = useContext(AppContext);

  return (
    <div className="w-11/12 max-w-[670px] min-h-screen flex flex-col items-center mx-auto gap-y-9 dark:text-white">

      {loading ? (
        <Spinner />
      ) : posts.length === 0 ? (
        <div>
          <p>No Post Found</p>
        </div>
      ) : (
        posts.map((post) => (
          <Card key={post.id} post={post} />
        ))
      )}

    </div>
  );
};

export default Blogs;
