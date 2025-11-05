// import img here 
import service_img_1 from "@assets/img/services/Content_Writing_Icon.png";
import service_img_2 from "@assets/img/services/Branding_icon.png";
import service_img_3 from "@assets/img/services/UI_UX_Icon.png";
import service_img_4 from "@assets/img/services/App_Icon.png";
import service_img_5 from "@assets/img/services/Graphic_Icon.png";
import service_img_6 from "@assets/img/services/Animation_Icon.png";
import service_img_7 from "@assets/img/services/Data_Backup_Icon.png";
import service_img_8 from "@assets/img/services/Web_Design_Icon.png";
// import { Link } from "lucide-react"; // remove this – lucide-react exports icons, not next/link

const service_data = [
  {
    id: 1,
    alphabet: "C",
    title: <>Creative & <br /> Content Writing</>,
    img: service_img_1,
    description: <>We craft content to engage your audience and boost your digital presence.</>,
    Link: "/service-details#creative-content-writing",
  },
  {
    id: 2,
    alphabet: "B",
    title: <>Branding & <br /> Merchandising</>,
    img: service_img_2,
    description: <>Our branding defines your identity, from logo design to packaging that fits your vision.</>,
    Link: "/service-details#branding-merchandising",
  },
  {
    id: 3,
    alphabet: "U",
    title: <>UI/UX Design & <br /> Web Development</>,
    img: service_img_3,
    description: <>We design intuitive interfaces and develop user-friendly, high-performance sites.</>,
    Link: "/service-details#uiux-web-development",
  },
  {
    id: 4,
    alphabet: "A",
    title: <>App Design & <br /> Development</>,
    img: service_img_4,
    description: <>We build high-performance mobile apps, ensuring great design and experience.</>,
    Link: "/service-details#app-design-development",
  },
  {
    id: 5,
    alphabet: "G",
    title: <>Graphics & <br /> Illustration Design</>,
    img: service_img_5,
    description: <>We deliver graphic design and illustrations that communicate your message.</>,
    Link: "/service-details#graphic-illustration",
  },
  {
    id: 6,
    alphabet: "A",
    title: <>Animation & <br /> Video Editing</>,
    img: service_img_6,
    description: <>Our animation and video editing bring ideas to life and engage your audience.</>,
    Link: "/service-details#animation-video",
  },
  {
    id: 7,
    alphabet: "D",
    title: <>Data Backup & <br /> Cloud Solutions</>,
    img: service_img_7,
    description: <>We offer reliable cloud and backup to protect your business information.</>,
    Link: "/service-details#data-cloud",
  },
  {
    id: 8,
    alphabet: "W",
    title: <>Web Design & <br /> E-commerce Solutions</>,
    img: service_img_8,
    description: <>Responsive web and e-commerce solutions designed for seamless experiences.</>,
    Link: "/service-details#web-ecommerce",
  },
];

export default service_data;
