import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { api } from "../service/api";

type PostState = {
  stories: Story[];
  posts: Post[];
  loading: boolean;
  error: string | null;
  fetchPosts: () => void;
};

const AppContext = createContext<PostState | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [stories, setStories] = useState<Story[]>([]);
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await api.get("/posts");
      const data = response.data.posts || response.data;
      console.log("data", data);
      setPosts(data);
    } catch (err) {
      console.error("Error fetching", err);
      setError("Failed to fetch posts");
    } finally {
      setLoading(false);
    }
  };

  const contextValue: PostState = {
    stories,
    posts,
    loading,
    error,
    fetchPosts,
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};

// Custom hook for easy access
export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
};
