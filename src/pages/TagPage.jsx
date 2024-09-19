import Layout from "../components/Layout";
import { useNavigate, useParams } from "react-router-dom";

const TagPage = () => {
  const navigate = useNavigate();
  // const location = useLocation();
  // const category = location.pathname.split("/").at(-1);
  // OR
  const { tag } = useParams();

  return (
    <Layout>
      <div className="flex items-center gap-x-2">

        <button
          className="py-2 px-4 bg-blue-600 text-white text-sm font-semibold rounded-md hover:bg-blue-700 transition duration-300 dark:bg-blue-500 dark:hover:bg-blue-600"
          onClick={() => navigate(-1)}>
          Back
        </button>

        <h2 className="text-xl font-bold dark:text-white">
          Blogs Tagged <span className="underline text-blue-700 dark:text-blue-400">#{tag.replaceAll("-", " ")}</span>
        </h2>
      </div>
    </Layout>
  );
};

export default TagPage;
