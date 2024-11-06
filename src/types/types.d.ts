// Story interface
type Story = {
    id: string;
    imageUrl: string;
    username: string;
    isLive: boolean;
};

// Post interface
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
    createdAt?: string; // Optional createdAt field
}
