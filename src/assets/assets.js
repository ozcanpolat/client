import logo from './logo.png';
import video_banner from './home-page-banner.mp4';
import people from './people.png';
import people_org from './people-org.png';

export const assets = {
    logo,
    video_banner,
    people,
    people_org
}

export const steps = [
    {
        step: "Step 1",
        title: "Select an image",
        description: `First, choose the image you want to remove background from by clicking on "Start from a photo".
            Your image format can be PNG or JPG. We support all image dimension.`
            
     },
     {
        step: "Step 2",
        title: "Let magic remove the background",
        description: `Our tool automatically removes the background from your image. Next, you can choose a background color.
            Our most popular options are white and transparent backgrounds, but you can pick any color you like.`
     },
     {
        step: "Step 3",
        title: "Download your image",
        description: `After selecting a new background color, download your photo and you're done.
            You can also save your picture in the Photoroom App by creating an account.`
    },
];

export const categories = ["People", "Products", "Animals", "Cars", "Graphics"];