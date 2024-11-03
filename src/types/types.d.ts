type Story = {
    id: string;
    imageUrl: string;
    username:string;
    isLive: boolean;
}

type Post = {
    id: string;
    username: string;
    location: string;
    imageUrl: string;
    imageDp: string;
    isVerified: boolean;
    likes: number;
    caption: string;
    likedBy: string;
  };