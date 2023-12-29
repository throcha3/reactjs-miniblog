import styles from "./Dashboard.module.css";

import { Link } from "react-router-dom";

import { useAuthValue } from "../../context/AuthContext";
import { useFetchDocuments } from "../../hooks/useFetchDocuments";

function Dashboard() {
  const { user } = useAuthValue();
  const uid = user.uid;

  //user posts
  const { documents: posts, loading } = useFetchDocuments("posts", null, uid);

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Manage your posts</p>
      {posts && posts.length === 0 ? (
        <div>
          <p>Posts not found</p>
          <Link to="/posts/create" className="btn">
            Create your first post
          </Link>
        </div>
      ) : (
        <div>
          <p>There are posts</p>
        </div>
      )}

      {posts && posts.map((post) => <h3>{post.title}</h3>)}
    </div>
  );
}

export default Dashboard;
