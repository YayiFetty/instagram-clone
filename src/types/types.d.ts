type Story = {
    id: string;
    imageUrl: string;
    username:string;
    isLive: boolean;
}
interface Post {
    id: number;
    imageDp: string;
    username: string;
    isVerified: boolean;
    location: string;
    imageUrl: string;
    likedBy: string;
    likes: number;
    caption: string;
  }