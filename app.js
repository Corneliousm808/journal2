var jsonDataBody = [
  {
    "header":"h1","h4"
  },
  {
    "div"; {
      "class": "aside",
      ["h5", "nav"]
    }
  },
];

  var jsonDataBodyEntryOne = [
  {
    "div": {
      "id":"first",
      "class":"content",
      ["h2","h6","h3"]
    }
  }
]

var simplifiedJson = [
  {
    "journalEntry": "1",
    "date": "August 15, 2016",
    "title":"Why I Took This Class",
    "content": "I am interested in learning how to do the basics of coding. Also because my engineering teacher said that in the near future there will be a high demand of engineers needeing to know how to code. So when there was that meeting in the library about a new coding class, I saw an opportunity and I took it.",
    "article": [
    "To know the basics of coding. That way if i apply for an engineering job, I can put that I know how to code and maybe I can get a better job. Also that when coding is a requirement for coollege engineering, I wont have to take that class because i already took it in high school. So with that I can have a free period, or fill it in whit something that can benefit me."
    ]
  },
  {
    "journalEntry": "2",
    "date": "August 24, 2016",
    "title":"Difference Between UX And UI"
    "content":"UX stands for user exprience. User experience is how the user uses the design of the product. Ussually the user will be lookiing at the content an Show the design is layed out. UI stands for user interface. User interface is how the user will interact with the computer."
  },
  {
    "journalEntry":"3",
    "date": "September 2, 2016",
    "title": "HTML&CSS",
    "content": "HTML is. CSS is like positioning your material. So its like CSS creates the layout of your content. It can make yur content on the side bar with another content on the bottom of it. So you woukd just have to enter commands on where you want the content to your desire. Also with CSS you can change the way it looks. Meaning you can change the font color and the backround of your content. For example with all I've said, you cabn make your content characters purle with the backround black and position it to left of the page with another content right under it."
  },
  {
    "journalEntry": "4",
    "date": "Semptember 28, 2016",
    "title": "Responsive Design",
    "content": "Responsive Design is when how the design will respond to how you change the window size. So the design can change its font size, change the width and height of tyhe content. Also this can hide some of the side divs and you would have to access this nav someway else. Mobile design is how the design of a web application will be displayed on the mobile device. So some of the features may be missing but that would be because of the smaller screen size. However, the content will be simple to use, the font size could be bigger that way you can select them easier since you are using your finger rather than a cursor."
  },
  {
    "journalEntry": "5",
    "date": "October 7, 2016",
    "title": "Response on Digimon Go",
    "content": "Digimon Go was a project where we had to create what looked like a info page on Digimon Go. It consisted of how to download the app, what it was about and what were some new stuff on the app. So with the html part it was pretty simple. Mostly because the html mostly consisted of lists. However the CSS part of the project was more difficult towards me. I had trouble on the postioning off the content. Also I had trouble on trying to fix the padding and the margins. So I had to get help from my friend to get a better understading on those things."
  },
  {
    "journalEntry": "6",
    "date": "October 7, 2016",
    "title": "Response on Media Queries",
    "content": "Media Queries allows you to change the appearance of the design according to certai variables. Such as the screen size. You can have the media querie be able to change the color of the text, background color, even the text size when the size of the screen changes. This would then be a responsive design, where the design would respond to the size of the screen and respond with changes to the design."
  },
  {
    "journalEntry": "7",
    "date": "Novmber 2, 2016",
    
  }
]

/*
Create function nabmed showAll
pass one parameter (data)

  Inside te function
  Iterate thorugh data
    for each object create elements
    create parent div
      with the id '#entry-' +object.id
    create a h1
      append/add text inner.HTML object.title to h1 
    repeat for every value.
    append all elements + values to the parent div
*\