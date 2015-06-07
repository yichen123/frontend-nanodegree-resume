// $("#main").append("Chen YI");
var bio = {
  "name": "Chen Yi",
  "role": "fresher web developer",
  "contactInfo": {
    "mobile": "000-0000-0000",
    "email": "cheny330@hotmail.com",
    "github": "yichen123",
		"twitter": "yichen123"
    "location": "Beijing, China"
  },
  "pic": "images/fry.jpg",
  "message": "Welcome to my site!",
  "skills": [
    "Maths",
    "Python",
    "Web Develop"
  ]
}

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
//var formattedcontact = HTMLcontactGeneric.replace("%data%", "Contact Info");
var formattedMobile = HTMLmobile.replace("%data%", bio.contactInfo.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contactInfo.email);
var formattedGithub = HTMLgithub.replace("%data%", bio.contactInfo.github);
var formattedLocation = HTMLlocation.replace("%data%", bio.contactInfo.location);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.pic);
var formattedMsg = HTMLwelcomeMsg.replace("%data%", bio.message);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedGithub);
$("#topContacts").append(formattedLocation);
$("#header").append(formattedBioPic);
$("#header").append(formattedMsg);

if (bio.skills.length > 0) {
  $("#header").append(HTMLskillsStart);
  for (var idx = 0; idx < bio.skills.length; idx++) {
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[idx]);
    $("#skills").append(formattedSkill);
  }
}

var works = [{
  "position": "Board Assistant",
  "employer": "BeijingKJG",
  "years": "Dec 2013 - May 2015",
  "city": "Beijing",
  "descript": "blablabla"
}, {
  "position": "freelancer",
  "employer": "myself",
  "years": "June 2015 - furture",
  "city": "Beijing",
  "descript": "bla bla bla"
}]

if (works.length > 0) {
  for (work in works) {
    $("#workExperience").append(HTMLworkStart);
    var formattedWorkPosition = HTMLworkTitle.replace("%data%", works[work].position);
    var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", works[work].employer);
    var formattedWorkDates = HTMLworkDates.replace("%data%", works[work].years);
    var formattedWorkLocation = HTMLworkLocation.replace("%data%", works[work].city);
    var formattedWorkDescription = HTMLworkDescription.replace("%data%", works[work].descript);
    $(".work-entry:last").append(formattedWorkEmployer + formattedWorkPosition);
    $(".work-entry:last").append(formattedWorkDates + formattedWorkLocation);
    $(".work-entry:last").append(formattedWorkDescription);
  }
}
var education = {
  "schools": [{
    "school": "UON",
    "city": "Nottingham",
    "major": "International Business",
    "graduate": "DEC 2013",
    "degree": "Masters"
  }, {
    "school": "UON",
    "city": "Nottingham",
    "major": "Maths",
    "graduate": "2012",
    "degree": "Masters"
  }],
  "onlineCourses": [{
      "web": "coursera",
      "course": "python"
    }, {
      "web": "udacity",
      "course": "front end web developer"
    }

  ]
}

var projects = [{
  "title": "HomePage",
  "date": "May 2015",
	"description": "I built a homepage to display my projects of the Nanodegree course in this project. I learnt how to use html5 and css to build a basic website framework."
}, {
  "title": "Resume",
  "date": "unknown",
	"description": "This is the project to build this resume that you are looking. With this project, I learnt the basic of using javascript and jQurry."
}]


$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;
  logClicks(x, y);
});


function inName(name) {
  console.log(name);
  var names = name.trim().split(" ");
  console.log(names);
  var firstName = names[0].slice(0, 1).toUpperCase() + names[0].slice(1).toLowerCase();
  var lastName = names[1].toUpperCase();
  return firstName + " " + lastName;
}

$("#main").append(internationalizeButton);
