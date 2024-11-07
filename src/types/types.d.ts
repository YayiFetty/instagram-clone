// Story interface
type Story = {
    id: string;
    imageUrl: string;
    username: string;
    isLive: boolean;
};

// Post interface with media type differentiation
interface Post {
    id: number;
    imageDp: string;
    username: string;
    isVerified: boolean;
    location: string;
    mediaUrl: string; // URL for image or video
    mediaType: 'image' | 'video'; // Media type: 'image' or 'video'
    likedBy: string;
    likes: number;
    caption: string;
    createdAt?: string; // Optional createdAt field
}
