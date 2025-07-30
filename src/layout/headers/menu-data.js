 import HomeIcon from "@/src/svg/home-icon";

const menu_data = [
  {
    id: 1,
    mega_menu: false,
    has_dropdown: false,
    home_icon: <HomeIcon />,
    title: "Home",
    link: "/",
    active: "",
  },
  {
    id: 2,
    mega_menu: false,
    has_dropdown: false,
    title: "About",
    link: "/about",
    active: "",
  },   
  {
    id: 3,
    mega_menu: false,
    has_dropdown: true,
    title: "Services",
    link: "/service",
    active: "",
    sub_menus: [
      { link: "/service", title: "Our Solutions" },
      { link: "/service-details", title: "Detailed Offerings" }, 
    ],
  },
  {
    id: 4,
    mega_menu: false,
    has_dropdown: false,
    title: "Portfolio",
    link: "/portfolio",
    active: "",
  },

  {
    id: 5,
    mega_menu: false,
    has_dropdown: false,
    title: "Blog",
    link: "/blog",
    active: "",
    sub_menus: [
      { link: "/blog", title: "Blog" }, 
      { link: "/blog-details", title: "Blog Details" }, 
    ],
  },
  {
    id: 6,
    mega_menu: false,
    has_dropdown: false,
    title: "Contact",
    link: "/contact",
    active: "",
  },
  

];
export default menu_data;
