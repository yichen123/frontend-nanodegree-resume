// $("#main").append("Chen YI");
var bio = {
    "name": "Chen YI",
    "role": "fresher web developer",
    "contactInfo": {
        "mobile": "000-0000-0000",
        "email": "cheny330@hotmail.com",
        "github": "yichen123",
        "twitter": "yichen123",
        "location": "Beijing, China"
    },
    "pic": "images/fry.jpg",
    "message": "Welcome to my site!",
    "skills": [
        "Maths",
        "Python",
        "Web Develope"
    ]
}

function replace(content, target) {
    /*
    helper function to replace %data$ with content
    */
    var fomatted = target.replace("%data%", content);
    return fomatted;
}

function displayAppend(content, target, place) {
    /*
    helper function to replace and display the content with append
    */
    var fomatted = replace(content, target);
    $(place).append(fomatted);
}

function displayPrepend(content, target, place) {
    /*
    helper function to replace and display the content with prepend
    */
    var fomatted = replace(content, target);
    $(place).prepend(fomatted);
}

displayPrepend(bio.role, HTMLheaderRole, "#header");
displayPrepend(bio.name, HTMLheaderName, "#header");
displayAppend(bio.contactInfo.mobile, HTMLmobile, "#topContacts");
displayAppend(bio.contactInfo.email, HTMLemail, "#topContacts");
displayAppend(bio.contactInfo.github, HTMLgithub, "#topContacts");
displayAppend(bio.contactInfo.twitter, HTMLtwitter, "#topContacts");
displayAppend(bio.contactInfo.location, HTMLlocation, "#topContacts");
displayAppend(bio.pic, HTMLbioPic, "#header");
displayAppend(bio.message, HTMLwelcomeMsg, "#header");


if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    for (var idx = 0; idx < bio.skills.length; idx++) {
        displayAppend(bio.skills[idx], HTMLskills, "#skills");

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
        var formattedWorkPosition = replace(works[work].position, HTMLworkTitle);
        var formattedWorkEmployer = replace(works[work].employer, HTMLworkEmployer);
        var formattedWorkDates = replace(works[work].years, HTMLworkDates);
        var formattedWorkLocation = replace(works[work].city, HTMLworkLocation);
        $(".work-entry:last").append(formattedWorkEmployer + formattedWorkPosition);
        $(".work-entry:last").append(formattedWorkDates + formattedWorkLocation);
        displayAppend(works[work].descript, HTMLworkDescription, ".work-entry:last");
    }
}


var education = {
    "schools": [{
        "school": "UON",
        "city": "Nottingham",
        "major": "International Business",
        "graduate": "2013",
        "degree": "Masters"
    }, {
        "school": "UON",
        "city": "Nottingham",
        "major": "Maths",
        "graduate": "2012",
        "degree": "Masters"
    }],
    "onlineCourses": [{
            "school": "Rice University, Coursera",
            "course": "python",
            "date": "2014"
        }, {
            "school": "Udacity",
            "course": "front end web developer",
            "date": "2015"
        }

    ]
}
if (education.schools.length > 0) {
    for(school in education.schools) {
        $("#education").append(HTMLschoolStart);
        displayAppend(education.schools[school].school, HTMLschoolName, ".education-entry:last");
        displayAppend(education.schools[school].degree, HTMLschoolDegree, ".education-entry:last");
        displayAppend(education.schools[school].graduate, HTMLschoolDates, ".education-entry:last");
        displayAppend(education.schools[school].city, HTMLschoolLocation, ".education-entry:last");
        displayAppend(education.schools[school].major, HTMLschoolMajor, ".education-entry:last");
    }
}

if (education.onlineCourses.length > 0) {
    $("#education").append(HTMLonlineClasses);
    for (course in education.onlineCourses) {
        $("#education").append(HTMLschoolStart);
        displayAppend(education.onlineCourses[course].course, HTMLonlineTitle, ".education-entry:last");
        displayAppend(education.onlineCourses[course].school, HTMLonlineSchool, ".education-entry:last");
        displayAppend(education.onlineCourses[course].date, HTMLonlineDates, ".education-entry:last");
    }
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
