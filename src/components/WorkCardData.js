import data from "../assets/data.jpg"
import news from "../assets/news.jpg"
import health from "../assets/health.jpg"
import portfolio from "../assets/portfolio.jpg"
import stop from "../assets/stop.jpg"
import tic from "../assets/tic.jpg"
import text from "../assets/text.jpg"
import hr from "../assets/hr.jpeg"
import sale from "../assets/sales.jpeg"



const ProjectCardData = [
    {
        imgsrc: news,
        title: "Daily News App",
        text: "Daily News App shows news to the client which updates regularly and it is also categorized into different categories such as Science, Sports, Technology, etc. Daily News App is a single page web application which is developed using React.js and News API.",
        view: "url.com",
        source: "https://github.com/NishchayR/News_App"
    },
    {
        imgsrc: health,
        title: "InsureME - Your Personal Healthcare Companion",
        text: "This is a Machine Learning web application which predicts the medical insurance cost of a person. The techstack used for this project were HTML, CSS, Flask, Python and was hosted on pythonanywhere.com. The dataset was trained using the Bagging Regressor, giving an accuracy of 82%.",
        view: "url.com"
    },
    {
        imgsrc: portfolio,
        title: "Portfolio",
        text: "The 'Portfolio' React project is a personalized and dynamic online showcase of a developer's or designer's work, skills, and achievements. Developed using React, this project offers an elegant and responsive user interface where visitors can explore the creator's projects, read about their background, and get in touch.",
        view: "https://nishchayrajpal.netlify.app/",
        source: "https://github.com/NishchayR/PRODIGY_WD_04"
    },
    {
        imgsrc: stop,
        title: "Stopwatch",
        text: "The 'Stopwatch' React project is a simple and intuitive web application that allows users to track elapsed time with precision. Through a user-friendly interface, it offers functionalities to start, pause, and reset the timer. Built using React, this project showcases fundamental concepts of state management, event handling, and UI updates, making it an ideal learning resource for beginners in web development.",
        view: "https://stopwatch910.netlify.app/",
        source: "https://github.com/NishchayR/PRODIGY_WD_02"
    },
    {
        imgsrc: tic,
        title: "Tic-Tac-Toe",
        text: "The 'Tic Tac Toe Game' React project is a classic recreation of the timeless two-player game. Developed using React, this interactive web application provides a platform for users to engage in strategic battles by taking turns to place Xs and Os on a 3x3 grid",
        view: "https://tic-tac-toe910.netlify.app/",
        source: "https://github.com/NishchayR/PRODIGY_WD_03"
    },
    {
        imgsrc: text,
        title: "Text Utils",
        text: "The React-based Text Utils project is a versatile web application designed for efficient text manipulation. It features word and character counting, real-time estimation of reading time in minutes, and seamless conversion between uppercase and lowercase. The inclusion of a dark mode and light mode toggle enhances user experience and customization.",
        view: "https://textutils910.netlify.app/",
        source: "https://github.com/NishchayR/TextUtils"
    },
    {
        imgsrc: hr,
        title: "HR Data Analysis",
        text:"Power BI | Excel - I created a Power BI dashboard for HR to track employee data, optimizing processes for working hours, attendance, performance, and leaves. The streamlined interface enhances efficiency, providing quick insights and informed decision-making.",
        view: "https://app.powerbi.com/view?r=eyJrIjoiYWYzZmExMGItZmY3NC00OWZhLThkNWItNGQyMzVhZTM4MTczIiwidCI6ImZhNGZiYjMzLTczZjYtNDRiMS04NWE1LTA3OWIzMzFiYWQzNCJ9",
        source: "https://github.com/NishchayR/HR-Data-Analysis"
    },
    {
        imgsrc: data,
        title: "Ecommerce Store Sales",
        text: "Power BI | Excel - Created interactive dashboard to track and analyse ecommerce store sales data. Created connections, join new tables, calculations to manipulate data and enable user driven parameters for visualization using Microsoft Power BI.",
        view: "https://app.powerbi.com/view?r=eyJrIjoiMzYwODNlZTAtODZjMi00MTY1LWIzYTUtZDFiM2EwNTFiMDcxIiwidCI6ImZhNGZiYjMzLTczZjYtNDRiMS04NWE1LTA3OWIzMzFiYWQzNCJ9",
        source: "https://github.com/NishchayR/Ecommerce-Store-Sales/upload"
    },
    {
        imgsrc: sale,
        title: "Dynamic Sales Dashboard",
        text: "Power BI | Excel - The Dynamic Sales Analysis Power BI project provides a user-friendly interface for quick insights into sales trends, top customers, and best-selling products. With dynamic filters for specific years and months, users can tailor analyses for targeted views. It offers comprehensive metrics, interactive drill-down features, and export options for efficient and customizable sales analysis.",
        view: "https://app.powerbi.com/view?r=eyJrIjoiYmVkYWVjOGEtYTdkNi00NGI4LThiNDYtZTc0Nzc4YTJkYzdhIiwidCI6ImZhNGZiYjMzLTczZjYtNDRiMS04NWE1LTA3OWIzMzFiYWQzNCJ9",
        source: "https://github.com/NishchayR/Dynamic-Sales-Dashboard"
    },
];

export default ProjectCardData;