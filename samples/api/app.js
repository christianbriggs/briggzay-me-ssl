var express = require('express');
var cors = require('cors');
var skills = '[\n' +
    '  {\n' +
    '    "title" :"UX Skills",\n' +
    '    "text"  :"",\n' +
    '    "skills":[\n' +
    '      {\n' +
    '        "title":"qualitative research",\n' +
    '        "desc" :"interview, survey, rapid ethnography",\n' +
    '        "level":10\n' +
    '      },{\n' +
    '        "title":"design",\n' +
    '        "desc" :"desktop, mobile, system, high and low-fidelity",\n' +
    '        "level":9\n' +
    '      },{\n' +
    '        "title":"rapid prototyping",\n' +
    '        "desc" :"flat, paper, interactive, html",\n' +
    '        "level":9\n' +
    '      },{\n' +
    '        "title":"quantitative research",\n' +
    '        "desc" :"network analysis, analytics",\n' +
    '        "level":7\n' +
    '      },{\n' +
    '        "title":"development",\n' +
    '        "desc" :"design system automation, data-driven prototyping",\n' +
    '        "level":6\n' +
    '      }\n' +
    '    ]\n' +
    '  },{\n' +
    '  "title" :"code",\n' +
    '  "text"  :"",\n' +
    '  "skills":[\n' +
    '    {\n' +
    '      "title":"front-end",\n' +
    '      "desc" :"HTML/JS/CSS",\n' +
    '      "level":7\n' +
    '    },{\n' +
    '      "title":"front-end frameworks",\n' +
    '      "desc" :"VueJS, Angular, SCSS, Stylus JQuery, Knockout",\n' +
    '      "level":6\n' +
    '    },{\n' +
    '      "title":"back-end",\n' +
    '      "desc" :"Python, PHP, Linux/Unix Shell",\n' +
    '      "level":7\n' +
    '    },{\n' +
    '      "title":"database",\n' +
    '      "desc" :"MySQL, SQLite, Neo4J, PostGreSQL",\n' +
    '      "level":7\n' +
    '    },{\n' +
    '      "title":"devops",\n' +
    '      "desc" :"Docker, Vagrant, Ansible, Fabric",\n' +
    '      "level":6\n' +
    '    }\n' +
    '  ]\n' +
    '},{\n' +
    '  "title" :"soft skills",\n' +
    '  "text"  :"",\n' +
    '  "skills":[\n' +
    '    {\n' +
    '      "title":"teaching",\n' +
    '      "desc" :"lab, classroom, workshops",\n' +
    '      "level":9\n' +
    '    },{\n' +
    '      "title":"emotional IQ",\n' +
    '      "desc" :"empathy, insight, humor",\n' +
    '      "level":9\n' +
    '    },{\n' +
    '      "title":"public speaking",\n' +
    '      "desc" :"lectures, discussions",\n' +
    '      "level":9\n' +
    '    },{\n' +
    '      "title":"sketching",\n' +
    '      "desc" :"group ideation, illustration",\n' +
    '      "level":7\n' +
    '    }\n' +
    '  ]\n' +
    '},{\n' +
    '  "title" :"digital communication",\n' +
    '  "text"  :"",\n' +
    '  "skills":[\n' +
    '    {\n' +
    '      "title":"technical",\n' +
    '      "desc" :"user manuals, tutorials, curriculae",\n' +
    '      "level":9\n' +
    '    },{\n' +
    '      "title":"persuasive",\n' +
    '      "desc" :"non-fiction, trend reports, blogs",\n' +
    '      "level":9\n' +
    '    },{\n' +
    '      "title":"research",\n' +
    '      "desc" :"academic, scientific",\n' +
    '      "level":9\n' +
    '    },{\n' +
    '      "title":"relational",\n' +
    '      "desc" :"email, Slack, Github, JIRA, video",\n' +
    '      "level":9\n' +
    '    }\n' +
    '  ]\n' +
    '},{\n' +
    '  "title" :"media creation",\n' +
    '  "text"  :"",\n' +
    '  "skills":[\n' +
    '    {\n' +
    '      "title":"video production",\n' +
    '      "desc" :"field video/audio interviews",\n' +
    '      "level":9\n' +
    '    },{\n' +
    '      "title":"video post production",\n' +
    '      "desc" :"Adobe AE/PrePro, Handbrake, process automation",\n' +
    '      "level":8\n' +
    '    },{\n' +
    '      "title":"animation",\n' +
    '      "desc" :"Adobe Flash, After Effects",\n' +
    '      "level":7\n' +
    '    }\n' +
    '  ]\n' +
    '}\n' +
    ']\n'


var app = express();
app.use(cors());

app.get('/hello', function (req, res) {
  res.send('Hello World!');
});

app.get('/api', function (req, res) {
  res.send(JSON.parse(skills));
});

app.listen(3000, function () {
  console.log('Listening on port 3000.');
});
