export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Certifications", link: "#certifications" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Visit Our Startup Stellar Webtech",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/stellar.png",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building CGPA Calculator For VCET",
    description: "CGPA Calculator",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Leave Management System VCET",
    des: "The Leave Appication system developed with the MERN Stack, simplifies applying and approval of leaves with mobile optimization and MongoDB for efficient data handling.",
    img: "/LeaveManagement.png",
    iconLists: ["/re.svg", "/tail.svg","/mongodb.svg","/javascript.svg"],
    link: "https://leavemanagementsystemvcetmadurai.onrender.com/",
  },
  {
    id: 2,
    title: "CGPA Calculator VCET",
    des: "The CGPA calculator developed with the MERN Stack, simplifies academic tracking with mobile optimization and MongoDB for efficient data handling.",
    img: "/cgpa.png",
    iconLists: ["/re.svg", "/tail.svg","/mongodb.svg","/javascript.svg"],
    link: "https://cgpa-calculator-l1l7.onrender.com/",
  },
  {
    id: 3,
    title: "Event Horizon",
    des: "A Comprehensive event booking, creation, and publishing. Developed with Next.js 14, the app ensures robust server-side rendering while incorporating essential client-side components.",
    img: "/eventhorizon.png",
    iconLists: ["/next.svg","/stripe.svg", "/tail.svg","/mongodb.svg"],
    link: "https://evently-beige-eight.vercel.app/",
  },
  {
    id: 4,
    title: "Urban Uplift",
    des: "A Blog Website Designed Usign MERN Stack Check out the website and describe your experience of using it.",
    img: "/urbanuplift.png",
    iconLists: ["/re.svg", "/tail.svg","/mongodb.svg"],
    link: "https://urban-uplift.onrender.com/",
  },
  {
    id: 5,
    title: "NIKE Design Site",
    des: "A Visually appealing UI/UX Design made using Tailwind CSS",
    img: "/nike.png",
    iconLists: ["/re.svg", "/tail.svg"],
    link: "https://lnkd.in/g2WypRD2",
  },
  {
    id: 6,
    title: "Weather Forecasting Website",
    des: "Weather Forcasting for a full week which also includes the climatic change graph with the hep of openweather API",
    img: "/weather.png",
    iconLists: ["/openweather.svg","/css.svg","/bootstrap.svg"],
    link: "https://navin2k4.github.io/Weather-Website/",
  },
  {
    id: 7,
    title: "ChatVibe",
    des: "An online chatting application made using Django",
    img: "/chatvibe.png",
    iconLists: ["/css.svg","/python.svg","/mysql.svg","/django.svg"],
    link: "https://github.com/Navin2k4/ChatVibe",
  },
  {
    id: 8,
    title: "APJ Abdun Kalam JEE/NEET",
    des: "Designed and developed a Online education portal landing page with pure html and css",
    img: "/apj.png",
    iconLists: ["/css.svg","/bootstrap.svg"],
    link: "https://navin2k4.github.io/APJ-NEET-JEE/#SERVICE",
  },
];

export const testimonials = [
  {
    quote:
      "As a Web Development Intern at TEACHNOOK, I honed my skills in HTML5, CSS, JavaScript, Bootstrap, API integration, and Node.js. Notably, I developed a weather forecasting website that displays 7-day weather details using the OpenWeather API.",
    img:'./teachnook_logo.jpeg',
    name: "TeachNook Banglore",
    title: "Web Development Intern (Online)",
  },
  {
    quote:
      "Android Developer Internship at NSIC Technical Services Centre in Chennai, where I passionately honed my skills in mobile application development. As a Computer Science Engineering student at VCET, I delved deep into the world of Android technologies, exploring Kotlin and Java while also venturing into Flutter to craft robust, user-friendly mobile applications.",
    img:'./nsic_logo.jpeg',
    name: "NSIC TamlNadu",
    title: "Android Application Development Intern",
  },
  {
    quote:
      "I remotely worked on diverse projects Utilizing technologies like Django, WebRTC, and ZegoCloud, I enhanced my skills in Python programming, web infrastructure, and explored Node.js. The mentorship from the team at Exposys Data Labs was invaluable, helping me apply theoretical knowledge to real-world scenarios.",
    img:'./exposys_logo.jpeg',
    name: "Exposys Data Labs Banglore",
    title: "FullStack Development Intern (Online)",
  },
];

export const certificates = [
  {
    title:"NPTEL - Social NetWorks",
    desc:"Completed the Social Network course by IIT Ropar with an Elite distinction, securing 62%. Worked on Various topic during the certification on networking.",
    img:"/social_networks_certificate.png",
    link:'https://www.linkedin.com/posts/navin-kumaran-949568215_social-network-completion-certificate-activity-7134567067092992001-NQK0?utm_source=share&utm_medium=member_desktop'
  },
  {
    title:"NSIC - Application Development",
    desc:"Successfully completed a two-week 'Industrial Based Android Application Development with IoT' internship Acquired skills in Android Studio and Java.",
    img:"/nsic_certificate.png",
    link:"https://www.linkedin.com/posts/navin-kumaran-949568215_internship-completion-certificate-activity-7149283794502438912-DFjS?utm_source=share&utm_medium=member_desktop",
  },
  {
    title:"SQL - A Practical Introduction for Querying Databases",
    desc:"I've completed 'SQL - A Practical Introduction for Querying Databases' by IBM on Coursera with a 98% grade and honors.",
    img:"/sql_ibm.png",
    link:"https://coursera.org/share/a529d5bfd64dbf199a81e709870a2435",
  },
  {
    title:"DataBase Management with MySql",
    desc:"Completed my MySQL Certification course on Coursera by Meta, achieving a grade of 97.5%.",
    img:"/mysql_meta.png",
    link:"https://coursera.org/share/beb7f50dbfca7a514d94c67447016be5",
  },
  {
    title:"Crash Course On Python",
    desc:"Completed the course 'Crash Course On Python' in Coursera provided by Google.",
    img:"/crash_course_python.png",
    link:"https://coursera.org/share/2a16a7c67e92f875089e4a4975068e49",
  },
  {
    title:"Back-end Development",
    desc:"Completed the course 'Introduction to Back-end Development' in Coursera provided by Meta.",
    img:"/webdevbackend_coursera.png",
    link:"https://coursera.org/share/ffcfe764460ca430da852df6e72f4cd5",
  },
  {
    title:"Programming fundemental",
    desc:"Completed my Programming fundemental course by Duke University an online course by Coursera.",
    img:"/programming_fundementals_certificate.png",
    link:"https://coursera.org/share/90ba45feaaa463978147ed10ded30593",
  },
  {
    title:"Web Development",
    desc:"Completed Web development course from Teachnook Ed tech Company and Wissenaire",
    img:"/teachnook_webdev_certificate.png",
    link:"https://www.linkedin.com/posts/navin-kumaran-949568215_web-development-certificate-activity-7044339346841227264-JSjf?utm_source=share&utm_medium=member_desktop",
  },
]

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Inhouse Intern At Velammal College of Engineering and Technology",
    desc: "Worked on building Leave Management System Web Application.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
  {
    id: 2,
    title: "Web Development Intern @ Teachnook",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 3,
    title: "Web Development Intern @ Exposys Data Labs",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", 
    thumbnail: "/exp2.svg",
  },
  {
    id: 4,
    title: "Android Application Developer @ NSIC Chennai",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", 
    thumbnail: "/exp3.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    alt:'Git',
    img: "/git.svg",
    link:"https://github.com/Navin2k4"
  },
  {
    id: 2,
    alt:'Hackkerrank',
    img: "/hackerrank.svg",
    link:"https://www.hackerrank.com/profile/22cseb48_Navin"

  },
  {
    id: 3,
    alt:'Linkedin',
    img: "/link.svg",
    link:"https://www.linkedin.com/in/navinkumaran2004/"
  },
  {
    id: 4,
    alt:'Instagram',
    img: "/instagram.svg",
    link:"https://www.instagram.com/navin_2k4/"
  },
];