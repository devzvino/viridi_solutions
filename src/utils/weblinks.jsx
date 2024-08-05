import { BsFacebook, BsLinkedin, BsInstagram, BsTwitterX } from "react-icons/bs";

const main_website = [
    {
        id: 1,
        name: "Home",
        link: "/",
    },
    {
        id: 2,
        name: "About Us",
        link: "/about_us",
    },
    {
        id: 3,
        name: "Products",
        link: "/products",
    },
    {
        id: 4,
        name: "Contact Us",
        link: "/contact_us",
    }
]
const footerMenu = [
    {
        id: 2,
        name: "Terms & Conditions",
        path: "/terms-and-conditions",
    },
    {
        id: 3,
        name: "Privacy Policy",
        path: "/privacy-policy",
    },
];

const socialLinks = [
    {
        id: 1,
        icon: <BsFacebook />,
        link: "https://www.facebook.com/profile.php?id=100063919458078",
    },
    {
        id: 4,
        icon: <BsLinkedin />,
        link: "https://www.linkedin.com/in/tafadzwanashe-viriri-38a71691/",
    },
    {
        id: 3,
        icon: <BsTwitterX />,
        link: "https://twitter.com/",
    },
    {
        id: 2,
        icon: <BsInstagram />,
        link: "https://www.instagram.com/",
    },
];


export { main_website, socialLinks, footerMenu }