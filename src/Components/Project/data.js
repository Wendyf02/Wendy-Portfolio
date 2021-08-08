import burgerpicture from "../../image/burgercard.png"
import codequizpicture from "../../image/Codequizcard.png"
import workdaypicture from "../../image/workdaycard.png"
import projectgivebackpicture from "../../image/projectgivebackcard.png"
import budgettrackerpicture from "../../image/budgettrackercard.png"
import unifyingourvotepicture from "../../image/unifyingourvotecard.png"

export default

{
    // name: 'Wendy Figueroa',
    // headerTagline:  [

    //        'I am Wendy Figueroa',


    // ],
    // contactEmail: 'camomila444@gmail.com',
    // resume: './image/resume.pdf',
    
    // aboutImage: './selfimage.png',
    // ShowAboutImage:true,
    

    project: [
        {
            id: 1,
            title: 'Code Quiz',
            service: 'A game against time',
            imageSRC: codequizpicture,
            url: 'https://wendyf02.github.io/Code-Quiz/'
        },

        {
            id: 2,
            title: 'Work Day Schedule',
            service: 'A simple App that allows user to save events in a day',
            imageSRC: workdaypicture,
            url: 'https://wendyf02.github.io/Work-Day-Schedule/'
        },
        
        {
            id: 3,
            title: 'Project-Give-Back',
            service: 'An App that provide user information on the impact fast fashion and effect on environment',
            imageSRC: projectgivebackpicture,
            url: 'https://tasoko.github.io/project-give-back/'
        },
        
        {
            id: 4,
            title: 'Der-Gut-Good Burger',
            service: 'This App let user add burger to eat-devour',
            imageSRC: burgerpicture,
            url: 'https://quiet-scrubland-98672.herokuapp.com/'
        },
        
        {
            id: 5,
            title: 'Budget Tracker',
            service: 'This app is used to write & save and delete notes',
            imageSRC: budgettrackerpicture ,
            url: 'https://github.com/Wendyf02/Team-Profile-Generator'
        },
        
        {
            id: 6,
            title: 'Unifying Our Vote',
            service: 'This app is used to track your budget',
            imageSRC: unifyingourvotepicture ,
            url: 'https://polar-chamber-52452.herokuapp.com/'
        }



    ],



    social: [

   {
     name:'Github',
     url: 'https://github.com/Wendyf02'

   },

   {
     name: 'Linkedin',
     url: 'https://linkedin.com/in/wendy-figueroa-35597928'

   },
    
   {
    name: 'Email',
    url: 'camomila444@gmail.com'

  }


]
    
}