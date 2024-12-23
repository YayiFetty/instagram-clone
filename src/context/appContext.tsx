import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { api } from "../service/api";
import { Post, PostState, Story, User } from "../types/types";


const AppContext = createContext<PostState | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [stories, setStories] = useState<Story[]>([]);
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [user, setUser] = useState<User | null>(null); // User data state
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


  const fetchUserData = async () => {
    try {
      // Here you would fetch the actual user data, for example:
      const userResponse = await api.get("/user"); // Replace with actual API endpoint
      setUser(userResponse.data);
    } catch (err) {
      console.error("Error fetching user data", err);
    }
  };

  const fetchStories = async() => {
    try{
      const response = await api.get("/stories");
      const data = response.data.stories || response.data
      setStories(data);
      console.log("dataaa",data);
    }
    catch(err){
      console.error("Error fetching stories:", err)
    }
  }

  // Fetch user data when the app loads
  useEffect(() => {
    fetchPosts();
    fetchUserData();
    fetchStories();
  }, []);

  const contextValue: PostState = {
    stories,
    posts,
    loading,
    user,
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
