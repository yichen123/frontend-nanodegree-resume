/*
this is the javascript file
*/

//Three helper functions
function replace(content, target) {
    /*
    helper function to replace %data$ with content
    */
    var fomatted = target.replace("%data%", content);
    return fomatted;
}

function displayAppend(content, target, place) {
    /*
    helper function to replace and display the content with append()
    */
    var fomatted = replace(content, target);
    $(place).append(fomatted);
}

function displayPrepend(content, target, place) {
    /*
    helper function to replace and display the content with prepend()
    */
    var fomatted = replace(content, target);
    $(place).prepend(fomatted);
}

var bio = {
    /*
    bio object
    */
    "name": "Chen Yi",
    "role": "fresher web developer",
    "contacts": {
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
    ],
    display: function() {
        displayPrepend(bio.role, HTMLheaderRole, "#header");
        displayPrepend(bio.name, HTMLheaderName, "#header");
        displayAppend(bio.contacts.mobile, HTMLmobile, "#topContacts");
        displayAppend(bio.contacts.email, HTMLemail, "#topContacts");
        displayAppend(bio.contacts.github, HTMLgithub, "#topContacts");
        displayAppend(bio.contacts.twitter, HTMLtwitter, "#topContacts");
        displayAppend(bio.contacts.location, HTMLlocation, "#topContacts");
        displayAppend(bio.pic, HTMLbioPic, "#header");
        displayAppend(bio.message, HTMLwelcomeMsg, "#header");
        if (bio.skills.length > 0) {
            $("#header").append(HTMLskillsStart);
            for (var idx = 0; idx < bio.skills.length; idx++) {
                displayAppend(bio.skills[idx], HTMLskills, "#skills");
            }
        }
    }
}


var work = {
    /*
    work object
    */
    jobs: [{
        "position": "Board Assistant",
        "employer": "BeijingKJG",
        "years": "Dec 2013 - May 2015",
        "location": "Beijing, China",
        "descript": "blablabla"
    }, {
        "position": "freelancer",
        "employer": "myself",
        "years": "June 2015 - furture",
        "location": "Beijing, China",
        "descript": "bla bla bla"
    }],
    display: function(){
        if (work.jobs.length > 0) {
            for (job in work.jobs) {
                $("#workExperience").append(HTMLworkStart);
                var formattedWorkPosition = replace(work.jobs[job].position, HTMLworkTitle);
                var formattedWorkEmployer = replace(work.jobs[job].employer, HTMLworkEmployer);
                var formattedWorkDates = replace(work.jobs[job].years, HTMLworkDates);
                var formattedWorkLocation = replace(work.jobs[job].location, HTMLworkLocation);
                $(".work-entry:last").append(formattedWorkEmployer + formattedWorkPosition);
                $(".work-entry:last").append(formattedWorkDates + formattedWorkLocation);
                displayAppend(work.jobs[job].descript, HTMLworkDescription, ".work-entry:last");
            }
        }
    }
}

var projects = {
    /*
    projects object
    */
    projects: [{
        "title": "HomePage",
        "date": "May, 2015",
        "description": "I built a homepage to display my projects of the Nanodegree course in this project. I learnt how to use html5 and css to build a basic website framework.",
        "pic": "images/project1.png"
    }, {
        "title": "Resume",
        "date": "June, 2015",
        "description": "This project is to build this resume that you are looking at. With this project, I learnt the basic of using javascript and jQurry.",
        "pic": "images/project2.png"
    }],
    display: function(){
        for (project in projects.projects) {
            $("#projects").append(HTMLprojectStart);
            displayAppend(projects.projects[project].title, HTMLprojectTitle, ".project-entry:last");
            displayAppend(projects.projects[project].date, HTMLprojectDates, ".project-entry:last");
            displayAppend(projects.projects[project].description, HTMLprojectDescription, ".project-entry:last");
            if (projects.projects[project].pic.length > 0) {
                displayAppend(projects.projects[project].pic, HTMLprojectImage, ".project-entry:last");
            }
        }
    }
}

var education = {
    /*
    education object
    */
    "schools": [{
        "school": "UON",
        "location": "Nottingham, UK",
        "major": "International Business",
        "graduate": "2013",
        "degree": "Masters"
    }, {
        "school": "UON",
        "location": "Nottingham, UK",
        "major": "Maths",
        "graduate": "2012",
        "degree": "Masters"
    }],
    "onlineCourses": [{
            "school": "Rice University, Coursera",
            "course": "python",
            "date": "2014"
        }, {
            "school": "Udalocation",
            "course": "front end web developer",
            "date": "2015"
        }
    ],
    display: function(){
        if (education.schools.length > 0) {
            for(school in education.schools) {
                $("#education").append(HTMLschoolStart);
                displayAppend(education.schools[school].school, HTMLschoolName, ".education-entry:last");
                displayAppend(education.schools[school].degree, HTMLschoolDegree, ".education-entry:last");
                displayAppend(education.schools[school].graduate, HTMLschoolDates, ".education-entry:last");
                displayAppend(education.schools[school].location, HTMLschoolLocation, ".education-entry:last");
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
    }
}

bio.display();
work.display();
projects.display();
education.display();
$('#mapDiv').append(googleMap);



function inName() {
    var names = name.trim().split(" ");
    var firstName = names[0].slice(0, 1).toUpperCase() + names[0].slice(1).toLowerCase();
    var lastName = names[1].toUpperCase();
    return firstName + " " + lastName;
}
var name = $("#name").text();
$("#main").append(internationalizeButton);
