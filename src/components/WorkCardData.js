import pro1 from "../assets/intro-bg.jpg"
import data from "../assets/data.jpg"
import news from "../assets/news.jpg"
import portfolio from "../assets/portfolio.jpg"
import health from "../assets/health.jpg"



const ProjectCardData = [
    {
        imgsrc: news,
        title: "Daily News App",
        text: "Daily News App shows news to the client which updates regularly and it is also categorized into different categories such as Science, Sports, Technology, etc. Daily News App is a single page web application which is developed using React.js and News API.",
        view: "url.com",
        source: "https://github.com/NishchayR/Daily_News"
    },
    {
        imgsrc: data,
        title: "Ecommerce Store",
        text: "Created interactive dashboard to track and analyse ecommerce store sales data. Created connections, join new tables, calculations to manipulate data and enable user driven parameters for visualization using Microsoft Power BI.",
        view: "url.com",
        source: "https://github.com/NishchayR/Sales_Report_DataAnalytics"
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
        text: "Project 1 description",
        view: "url.com"
    },
    {
        imgsrc: pro1,
        title: "Stopwatch",
        text: "Project 2 description",
        view: "https://stopwatch910.netlify.app/",
        source: "https://github.com/NishchayR/PRODIGY_WD_02"
    },
    {
        imgsrc: pro1,
        title: "Project - 3",
        text: "Project 3 description",
        view: "url.com"
    }
];

export default ProjectCardData;