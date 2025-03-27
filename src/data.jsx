import {
  CircuitBoard,
  Clock,
  Copy,
  PenTool,
  Phone,
  Truck,
  Users,
} from "lucide-react";
import {
  FaBrain,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTelegram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa6";

export const social_media_links = [
  {
    id: 1,
    url: "https://www.linkedin.com",
    icon: <FaLinkedin />,
    link_text: "linkedin",
  },
  {
    id: 2,
    url: "https://www.twitter.com",
    icon: <FaTwitter />,
    link_text: "twitter",
  },
  {
    id: 3,
    url: "https://www.instagram.com",
    icon: <FaInstagram />,
    link_text: "instagram",
  },
  {
    id: 4,
    url: "https://www.facebook.com",
    icon: <FaFacebook />,
    link_text: "facebook",
  },
];

export const about_me_info = [
  {
    id: 1,
    label: "greeting",
    heading: "Hi, I'm Some",
    paragraph:
      "With 7 years of experience. I have honed my skills in frontend and backend development, with a focus on animated 3D websites.",
    image: "/images/about_me/kb.jpg",
    original_grid_span: {
      //span 1 columns
      col: 1,
      //span 3 rows
      row: 3,
    },
  },
  {
    id: 2,
    label: "Tech Stack",
    heading: "Tech Stack",
    paragraph:
      "I specialize in javascript/Typescript with a focus on React's ecosystem",
    image: "/images/about_me/techstack_placeholder.png",
    original_grid_span: {
      //span 1 columns
      col: 1,
      //span 3 rows
      row: 3,
    },
  },
  {
    id: 3,
    label: "Working remotely",
    heading: "I work remotely across most timezones",
    paragraph: "I'm based in Cairo",
    image: "/images/about_me/fake_world_placeholder.jpg",
    original_grid_span: {
      //span 1 columns
      col: 1,
      //span 4 rows
      row: 4,
    },
    button: {
      button_text: "Contact me",
    },
  },

  {
    id: 4,
    label: "coding passion",
    heading: "My passion for Coding",
    paragraph:
      "I love solving problems and building things through code. Coding isn't just my profession. It is my passion",
    image: "/images/about_me/coding_passion_placeholder.jpg",
    original_grid_span: {
      //span 2 columns
      col: 2,
      //span 3 rows
      row: 3,
    },
  },
  {
    id: 5,
    label: "contact",
    heading: "contact me",
    icon: <Copy />,
    email_address: "bukkiofuzi@gmail.com",

    image: "/images/about/",
    background_svg: <Phone />,
    original_grid_span: {
      //span 2 columns
      col: 1,
      //span 2 rows
      row: 2,
    },
  },
];

const services_offered = [
  {
    id: 1,
    label: "deliverables",
    image: "/images/services/support_team.jpg",
    paragraph:
      "I transform your ideas into tangible results. Our deliverables are meticulously crafted to exceed expectations ensuring every project milestone is met with precision and excellence from concept to completion",
  },
  {
    id: 2,
    label: "brand & event design",
    image: "/images/services/people_meeting.jpg",
    paragraph:
      "Our brand and event design services create compelling visual identities that leave lasting impressions. We craft cohesive brand experiences and design engaging event spaces that tell your story, connect with your audience and elevate your brand",
  },
  {
    id: 3,
    label: "Video & Photography",
    image: "/images/services/gabrielle.jpg",
    paragraph:
      "Through expert videography and photography, we capture the essence of your brand. Our visual storytelling combines technical excellence with creative vision, delivering powerful imagery that resonates with your target audience",
  },
  {
    id: 4,
    label: "Web development",
    image: "/images/services/prince_akachi.jpg",
    paragraph:
      "Our web development solutions leverage cutting-edge technologies to build robust, scalable digital platforms. We create responsive, performance-optimized websites and applications that provides seamless user experiences across all devices",
  },
];

export { services_offered };

export const selected_projects = [
  {
    id: 1,
    name: "FurniflexFurniture",
    client: "some company",
    description: "A site to sell furniture ",
    url: "https://www.furniflexfurniture.co.ke",
    tech_stack: ["react", "styledcomponents", "gsap"],
    project_image: "/images/projects/comforta.png",
    year: 2024,
  },
  {
    id: 2,
    name: "Architecture",
    client: "some company",
    description: "The online presence for hig end architecture firms ",
    url: "https://www.vercel.com",
    tech_stack: ["react", "styledcomponents", "gsap"],
    project_image: "/images/projects/architecture.png",
    year: 2024,
  },
  {
    id: 3,
    name: "School site",
    client: "some company",
    description: "A school in Eldoret",
    url: "https://www.vercel.com",
    tech_stack: ["react", "styledcomponents", "gsap"],
    project_image: "/images/projects/school.png",
    year: 2024,
  },
  {
    id: 4,
    name: "COFFEE",
    client: "some company",
    description: "The home page of a coffee restaurant ",
    url: "https://www.vercel.com",
    tech_stack: ["react", "styledcomponents", "gsap"],
    project_image: "/images/projects/coffee.png",
    year: 2024,
  },
];
export const testimonials = [
  {
    id: 1,
    testimony:
      "Working with this team was an absolute pleasure. They delivered beyond our expectations and on time.",
    name: "John Smith",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    occupation: "CEO, Tech Solutions",
    rating: 5,
    date: "2023-05-15",
  },
  {
    id: 2,
    testimony:
      "The attention to detail was impressive. Our project was handled with care and professionalism.",
    name: "Sarah Johnson",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    occupation: "Marketing Director",
    rating: 5,
    date: "2023-06-20",
  },
  {
    id: 3,
    testimony:
      "Exceptional service from start to finish. I highly recommend their services to anyone looking for quality work.",
    name: "Michael Brown",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    occupation: "Project Manager",
    rating: 4,
    date: "2023-07-10",
  },
  {
    id: 4,
    testimony:
      "They transformed our vision into reality. The results exceeded our expectations in every way.",
    name: "Emily Davis",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
    occupation: "Creative Director",
    rating: 5,
    date: "2023-08-05",
  },
  {
    id: 5,
    testimony:
      "Professional, responsive, and incredibly talented. It was a joy to collaborate with this team.",
    name: "David Wilson",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
    occupation: "Startup Founder",
    rating: 5,
    date: "2023-09-12",
  },
  {
    id: 6,
    testimony:
      "Their expertise and guidance throughout the project were invaluable. We couldn't be happier with the outcome.",
    name: "Jennifer Taylor",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    occupation: "Product Owner",
    rating: 4,
    date: "2023-10-18",
  },
  {
    id: 7,
    testimony:
      "A truly collaborative experience. They listened to our needs and delivered a solution that perfectly matched our requirements.",
    name: "Robert Martinez",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
    occupation: "IT Director",
    rating: 5,
    date: "2023-11-22",
  },
  {
    id: 8,
    testimony:
      "Outstanding work! The team's creativity and technical skills are top-notch.",
    name: "Lisa Anderson",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
    occupation: "UX Designer",
    rating: 5,
    date: "2023-12-15",
  },
  {
    id: 9,
    testimony:
      "From concept to completion, the process was smooth and the results were exceptional.",
    name: "Thomas Clark",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
    occupation: "Business Analyst",
    rating: 4,
    date: "2024-01-08",
  },
  {
    id: 10,
    testimony:
      "Their innovative approach to problem-solving made all the difference in our project.",
    name: "Amanda White",
    image: "https://randomuser.me/api/portraits/women/10.jpg",
    occupation: "Operations Manager",
    rating: 5,
    date: "2024-02-14",
  },
  {
    id: 11,
    testimony:
      "Reliable, efficient, and incredibly skilled. I wouldn't hesitate to work with them again.",
    name: "Kevin Lee",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
    occupation: "Software Engineer",
    rating: 5,
    date: "2024-03-20",
  },
  {
    id: 12,
    testimony:
      "The level of communication and transparency throughout our project was refreshing and appreciated.",
    name: "Olivia Harris",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    occupation: "Content Strategist",
    rating: 4,
    date: "2024-04-25",
  },
  {
    id: 13,
    testimony:
      "A fantastic experience. The team's dedication to quality is evident in their work.",
    name: "Brandon Cooper",
    image: "https://randomuser.me/api/portraits/men/13.jpg",
    occupation: "Technical Lead",
    rating: 5,
    date: "2024-05-10",
  },
  {
    id: 14,
    testimony:
      "Highly professional and easy to work with. They exceeded our expectations.",
    name: "Sophia Morgan",
    image: "https://randomuser.me/api/portraits/women/14.jpg",
    occupation: "Business Consultant",
    rating: 5,
    date: "2024-06-15",
  },
  {
    id: 15,
    testimony:
      "The final product was outstanding. Their expertise is unmatched.",
    name: "Nathan Carter",
    image: "https://randomuser.me/api/portraits/men/15.jpg",
    occupation: "Senior Developer",
    rating: 4,
    date: "2024-07-20",
  },
  {
    id: 16,
    testimony:
      "Creative, efficient, and dedicated. An excellent team to work with.",
    name: "Emma Scott",
    image: "https://randomuser.me/api/portraits/women/16.jpg",
    occupation: "Art Director",
    rating: 5,
    date: "2024-08-08",
  },
  {
    id: 17,
    testimony:
      "They went above and beyond to meet our needs. Highly recommended.",
    name: "Daniel Evans",
    image: "https://randomuser.me/api/portraits/men/17.jpg",
    occupation: "CTO, FinTech",
    rating: 5,
    date: "2024-09-12",
  },
  {
    id: 18,
    testimony:
      "Their commitment to excellence is truly commendable. Great experience!",
    name: "Ava Richardson",
    image: "https://randomuser.me/api/portraits/women/18.jpg",
    occupation: "Product Designer",
    rating: 4,
    date: "2024-10-22",
  },
  {
    id: 19,
    testimony:
      "An amazing journey with a professional and highly skilled team.",
    name: "Matthew Thomas",
    image: "https://randomuser.me/api/portraits/men/19.jpg",
    occupation: "Marketing Consultant",
    rating: 5,
    date: "2024-11-18",
  },
  {
    id: 20,
    testimony: "They made the entire process seamless and enjoyable.",
    name: "Isabella Lewis",
    image: "https://randomuser.me/api/portraits/women/20.jpg",
    occupation: "Brand Strategist",
    rating: 5,
    date: "2024-12-05",
  },
  {
    id: 21,
    testimony: "Fantastic work! The results speak for themselves.",
    name: "Ethan Walker",
    image: "https://randomuser.me/api/portraits/men/21.jpg",
    occupation: "Finance Advisor",
    rating: 4,
    date: "2025-01-10",
  },
  {
    id: 22,
    testimony:
      "Their professionalism and expertise made a huge difference in our project.",
    name: "Charlotte Bennett",
    image: "https://randomuser.me/api/portraits/women/22.jpg",
    occupation: "HR Manager",
    rating: 5,
    date: "2025-02-15",
  },
  {
    id: 23,
    testimony: "A smooth and efficient experience from start to finish.",
    name: "Liam Adams",
    image: "https://randomuser.me/api/portraits/men/23.jpg",
    occupation: "Operations Director",
    rating: 4,
    date: "2025-03-10",
  },
  {
    id: 24,
    testimony:
      "Their expertise and attention to detail made all the difference.",
    name: "Mia Campbell",
    image: "https://randomuser.me/api/portraits/women/24.jpg",
    occupation: "Chief Editor",
    rating: 5,
    date: "2025-04-05",
  },
];

// export const testimonials = [
//   {
//     id: 1,
//     date: "2024-15-09",
//     testimony:
//       "Augment program transformed my business approach by equipping me with hands-on skills and practical strategies. It was like crafting a masterpiece alongside business maestros, as they shared their valuable insights and real-world frameworks. It's not just learning; it's building, and with Augment, you are building with the best in the business.",
//     name: "Inderpaul Birdi",
//     image: "/images/testimonials/dave.jpg",
//     occupation: "CEO some company",
//     rating: 4.8,
//   },
//   {
//     id: 2,
//     date: "2023-12-04",
//     testimony:
//       "I loved the experience so much and the team was always there for me.Would recommend it to anyone.",
//     name: "Ali",
//     image: "/images/testimonials/dave.jpg",
//     occupation: "some student",
//     rating: 5.0,
//   },
//   {
//     id: 3,
//     date: "2024-09-09",
//     testimony:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis iure ipsum enim magni voluptatem! Sed molestiae velit vel neque in eveniet. Quaerat, quidem accusantium.",
//     name: "Charlie Conrad",
//     image: "/images/testimonials/dave.jpg",
//     occupation: "CEO some company",
//     rating: 4.8,
//   },
//   {
//     id: 4,
//     date: "2024-15-09",
//     testimony:
//       "Augment program transformed my business approach by equipping me with hands-on skills and practical strategies. It was like crafting a masterpiece alongside business maestros, as they shared their valuable insights and real-world frameworks. It's not just learning; it's building, and with Augment, you are building with the best in the business.",
//     name: "Inderpaul Birdi",
//     image: "/images/testimonials/dave.jpg",
//     occupation: "CEO some company",
//     rating: 4.8,
//   },
//   {
//     id: 5,
//     date: "2024-15-09",
//     testimony:
//       "Augment program transformed my business approach by equipping me with hands-on skills and practical strategies. It was like crafting a masterpiece alongside business maestros, as they shared their valuable insights and real-world frameworks. It's not just learning; it's building, and with Augment, you are building with the best in the business.",
//     name: "Inderpaul Birdi",
//     image: "/images/testimonials/dave.jpg",
//     occupation: "CEO some company",
//     rating: 4.8,
//   },
//   {
//     id: 6,
//     date: "2024-15-09",
//     testimony:
//       "Augment program transformed my business approach by equipping me with hands-on skills and practical strategies. It was like crafting a masterpiece alongside business maestros, as they shared their valuable insights and real-world frameworks. It's not just learning; it's building, and with Augment, you are building with the best in the business.",
//     name: "Inderpaul Birdi",
//     image: "/images/testimonials/dave.jpg",
//     occupation: "CEO some company",
//     rating: 4.8,
//   },
//   {
//     id: 7,
//     date: "2024-15-09",
//     testimony:
//       "Augment program transformed my business approach by equipping me with hands-on skills and practical strategies. It was like crafting a masterpiece alongside business maestros, as they shared their valuable insights and real-world frameworks. It's not just learning; it's building, and with Augment, you are building with the best in the business.",
//     name: "Inderpaul Birdi",
//     image: "/images/testimonials/dave.jpg",
//     occupation: "CEO some company",
//     rating: 4.8,
//   },
//   {
//     id: 8,
//     date: "2024-15-09",
//     testimony:
//       "Augment program transformed my business approach by equipping me with hands-on skills and practical strategies. It was like crafting a masterpiece alongside business maestros, as they shared their valuable insights and real-world frameworks. It's not just learning; it's building, and with Augment, you are building with the best in the business.",
//     name: "Inderpaul Birdi",
//     image: "/images/testimonials/dave.jpg",
//     occupation: "CEO some company",
//     rating: 4.8,
//   },
//   {
//     id: 9,
//     date: "2024-15-09",
//     testimony:
//       "Augment program transformed my business approach by equipping me with hands-on skills and practical strategies. It was like crafting a masterpiece alongside business maestros, as they shared their valuable insights and real-world frameworks. It's not just learning; it's building, and with Augment, you are building with the best in the business.",
//     name: "Inderpaul Birdi",
//     image: "/images/testimonials/dave.jpg",
//     occupation: "CEO some company",
//     rating: 4.8,
//   },
//   {
//     id: 10,
//     date: "2024-15-09",
//     testimony:
//       "Augment program transformed my business approach by equipping me with hands-on skills and practical strategies. It was like crafting a masterpiece alongside business maestros, as they shared their valuable insights and real-world frameworks. It's not just learning; it's building, and with Augment, you are building with the best in the business.",
//     name: "Inderpaul Birdi",
//     image: "/images/testimonials/dave.jpg",
//     occupation: "CEO some company",
//     rating: 4.8,
//   },
//   {
//     id: 11,
//     date: "2024-15-09",
//     testimony:
//       "Augment program transformed my business approach by equipping me with hands-on skills and practical strategies. It was like crafting a masterpiece alongside business maestros, as they shared their valuable insights and real-world frameworks. It's not just learning; it's building, and with Augment, you are building with the best in the business.",
//     name: "Inderpaul Birdi",
//     image: "/images/testimonials/dave.jpg",
//     occupation: "CEO some company",
//     rating: 4.8,
//   },
//   {
//     id: 12,
//     date: "2024-15-09",
//     testimony:
//       "Augment program transformed my business approach by equipping me with hands-on skills and practical strategies. It was like crafting a masterpiece alongside business maestros, as they shared their valuable insights and real-world frameworks. It's not just learning; it's building, and with Augment, you are building with the best in the business.",
//     name: "Inderpaul Birdi",
//     image: "/images/testimonials/dave.jpg",
//     occupation: "CEO some company",
//     rating: 4.8,
//   },
// ];

export const steps_info = [
  {
    id: 1,
    step: "Discussion With Me",
    paragraph:
      "I begin by gaining insights into your goals, target audience and distinctive brand identity. After thorough discussions, I create a tailored approach to meet your objectives",
    icon: <Users />,
  },

  {
    id: 2,
    step: "Ideation and brainstorm",
    paragraph:
      "Gathering ideas and create creating the first concept for the future product",
    icon: <FaBrain />,
  },
  {
    id: 3,
    step: "Creating a timeline",
    paragraph:
      "After a thorough understanding and briefing of everything, an estimated timeline for the project is given",
    icon: <Clock />,
  },
  {
    id: 4,
    step: "Start Building and designing",
    paragraph:
      "I start to bring the design to life from our idea and brainstorming",
    icon: <PenTool />,
  },
  {
    id: 5,
    step: "Feedback loop",
    paragraph: "You give insight while i'm working on it. Collaboration is key",
    icon: <CircuitBoard />,
  },
  {
    id: 6,
    step: "Job finish",
    paragraph: "The final project is delivered to the client ",
    icon: <Truck />,
  },
];

const cool_menu_data = [
  {
    id: 1,
    text: ["puma pov", "breathing video", "creative design"],
  },
  {
    id: 2,
    text: ["jaarvis ", "jaarvis noir show", "event"],
  },
  {
    id: 3,
    text: ["puma", "dpsc X puma", "creative concept"],
  },
  {
    id: 4,
    text: ["grid", "grid 7 years", "art direction"],
  },
  {
    id: 5,
    text: ["puma", "puma dance battle", "direction"],
  },
];

const cool_menu_preview_imgs = [
  {
    id: 1,
    image: "/images/services/gabrielle.jpg",
  },
  {
    id: 2,
    image: "/images/services/people_meeting.jpg",
  },
  {
    id: 3,
    image: "/images/services/prince_akachi.jpg",
  },
  {
    id: 4,
    image: "/images/services/support_team.jpg",
  },
  {
    id: 5,
    image: "/images/hero/developer.png",
  },
];

export { cool_menu_data, cool_menu_preview_imgs };

export const footer_messengers = [
  {
    id: 1,
    icon: <FaWhatsapp />,
    text: "WhatsApp",
    url: "htttps://www.whatsapp_link.com",
  },
  {
    id: 2,
    icon: <FaTelegram />,
    text: "Telegram",
    url: "htpps://www.telegram_link.com",
  },
  {
    id: 3,
    icon: <FaTwitter />,
    text: "Twitter",
    url: "https://www.twitter.com",
  },
];

export const statistics = [
  {
    id: 1,
    stat_text: "number of projects completed",
    num: "697+",
  },
  {
    id: 2,
    stat_text: "years of experience",
    num: "5",
  },
  {
    id: 3,
    stat_text: "average rating",
    num: "4.3",
  },
];
