import project1_img from "./project1_img.png";
import project2_img from "./project2_img.png";
import project3_img from "./project3_img.png";
import project4_img from "./project4_img.png";
import project5_img from "./project5_img.png";
import project6_img from "./project6_img.png";

export const SKILLS = [
    {
        title: "Frontend",
        icon: "./images/frontend-icon.png",
        skills: [
            { skill: "HTML5", percentage: "80%" },
            { skill: "CSS3 (Sass/SCSS)", percentage: "90%" },
            { skill: "JavaScript", percentage: "75%" },
            { skill: "React.js", percentage: "80%" },
        ],
    },
    {
        title: "Backend",
        icon: "./images/backend-icon.png",
        skills: [
            { skill: "Java", percentage: "85%" },
            { skill: "MySQL", percentage: "80%" },
        ],   
    },
    {
        title: "Tools",
        icon: "./images/tools-icon.png",
        skills: [
            { skill: "Git & GitHub", percentage: "85%" },
            { skill: "Visual Studio Code", percentage: "75%" },
            { skill: "AWS", percentage: "60%" },
            { skill: "Responsive Design", percentage: "70%" },
        ],  
    },
    {
        title: "Soft Skills",
        icon: "./images/soft-skills-icon.png",
        skills: [
            { skill: "Problem-solving", percentage: "80%" },
            { skill: "Collaboration", percentage: "85%" },
            { skill: "Attention to Detail", percentage: "75%" },
        ], 
    },
];

export const mywork_data = [
    {
        w_no:"01",
        w_name:"Netflix Clone",
        w_img:project1_img
    },
    {
        w_no:"02",
        w_name:"Tic-Tac-Toe Game",
        w_img:project2_img
    },
    {
        w_no:"03",
        w_name:"Credily System",
        w_img:project3_img
    },
    {
        w_no:"04",
        w_name:"Amazon Clone",
        w_img:project4_img
    },
    {
        w_no:"05",
        w_name:"Todo List",
        w_img:project5_img
    },
    {
        w_no:"06",
        w_name:"Portfolio",
        w_img:project6_img
    },
];