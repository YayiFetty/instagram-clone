import { upload } from 'cloudinary-react-native';
import { Cloudinary } from "@cloudinary/url-gen";

const cloudName = process.env.EXPO_PUBLIC_CLOUDINARY_CLOUD_NAME
    
export default function cld() {
    const cld = new Cloudinary({
        cloud: {
            cloudName: cloudName,
        }
    });
}
    console.log("passed correctly", cloudName)
   
    export const uploadImage = async(file:string) => {
        
const options = {
    upload_preset: 'sample_preset',
    tag: 'sample',
    unsigned: true
}

await upload(cld, {file: 'imageFile.jpg' , options: options, callback: (error: any, response: any) => {
    //.. handle response
}})
    }