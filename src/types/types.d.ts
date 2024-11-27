export interface Story {
    id: string;
    imageUrl: string;
    username: string;
    isLive: boolean;
    viewed?: boolean;
  }
  
  export interface Post {
    id: string;
    imageDp: string;
    username: string;
    isVerified: boolean;
    location: string;
    mediaUrl: string;
    mediaType: 'image' | 'video';
    likedBy: string;
    likes: number;
    caption: string;
    createdAt: string;
    onLikePress?: () => void;
    onMorePress?: () => void;
    comments?: Comment[];
  }
  

// PostState type
export type PostState = {
    stories: Story[];
    posts: Post[];
    loading: boolean;
    error: string | null;
    user: User | null;
    fetchPosts: () => Promise<void>;
  }
  export interface Comment {
    id: string;
    username: string;
    comment: string;
    createdAt: string;
  }
  
  export interface CommentBoxProps {
    username: string;
    isVerified: boolean;
    imageDp: string;
    location: string;
    likes: number;
    onLikePress: () => void;
  }
  
  export interface User {
    id: string;
    username: string;
    fullName: string;
    profilePicture: string;
    bio: string;
    website: string;
    followers: number;
    following: number;
    postsCount: number;
    isVerified: boolean;
  }
  
  export interface InstagramData {
    user: User;
    stories: Story[];
    posts: Post[];
  }
  
  declare module '@env' {
    export const EXPO_PUBLIC_API_BASE_URL: string;
  }