import { Link } from "react-router-dom";

const Card = ({ post }) => {


  return (
    <div className="p-1 md:p-4 bg-white shadow-md rounded-md dark:bg-gray-800">
      <Link to={`/blog/${post.id}`}>
        <p className="font-bold text-base hover:underline">
          {post.title}
        </p>
      </Link>
      <p className="text-[0.8rem] py-1 dark:text-gray-300">
        By <span className="italic">{post.author}</span> on{" "}
        <Link to={`/categories/${post.category.replaceAll(" ", "-")}`}>
          <span className="font-semibold underline">{post.category}</span>
        </Link>
      </p>
      <p className="text-[0.8rem] dark:text-gray-400">Posted On {post.date}</p>
      <p className="mt-4 pb-1 text-[0.9rem] dark:text-gray-200">
        {post.content}
      </p>

      <div className="flex flex-wrap gap-x-1 md:gap-x-3">
        {post.tags.map((tag, index) => (
          <Link key={index} to={`/tags/${tag.replaceAll(" ", "-")}`}>
              <span                
                className="text-blue-700 dark:text-blue-400 font-semibold underline text-[10px] cursor-pointer">{`#${tag}`}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Card;
