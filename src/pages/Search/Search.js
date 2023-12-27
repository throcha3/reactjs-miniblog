import { Link } from "react-router-dom";

import styles from "./Search.module.css";

import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import { useQuery } from "../../hooks/useQuery";
import PostDetail from "../../components/PostDetail";

function Search() {
  const query = useQuery();
  const search = query.get("q");

  const { documents: posts } = useFetchDocuments("posts", search);

  return (
    <div className={styles.search_container}>
      <h2>Search: {search}</h2>
      <div>
        {posts && posts.length === 0 && (
          <>
            <p>No posts found</p>
            <Link to="/" className="btn btn-dark">
              Go Back
            </Link>
          </>
        )}
        {posts && posts.map((post) => <PostDetail key={post.id} post={post} />)}
      </div>
    </div>
  );
}

export default Search;
