(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{938:function(e,i,l){"use strict";l.r(i);var n=l(35),t=Object(n.a)({},(function(){var e=this,i=e.$createElement,l=e._self._c||i;return l("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[l("h1",{attrs:{id:"day-6-containerization"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#day-6-containerization"}},[e._v("#")]),e._v(" Day 6 Containerization")]),e._v(" "),l("h2",{attrs:{id:"goal"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#goal"}},[e._v("#")]),e._v(" Goal")]),e._v(" "),l("p",[e._v("The main goal of the Day 6 is basically building Linux Container and Docker knowledge. Day will start with fundamentals and skill building part will continue step by step. By the end of the day, all developers will be able to build Docker images and have all the information related to running them on production systems.")]),e._v(" "),l("hr"),e._v(" "),l("h2",{attrs:{id:"agenda-and-syllabus"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#agenda-and-syllabus"}},[e._v("#")]),e._v(" Agenda and Syllabus")]),e._v(" "),l("p",[l("strong",[l("RouterLink",{attrs:{to:"/day6/challenges/challenge0.html"}},[e._v("Challenge 0: Prerequisites")])],1)]),e._v(" "),l("ul",[l("li",[e._v("Docker hub id and repo creation")]),e._v(" "),l("li",[e._v("Docker Desktop for Mac")]),e._v(" "),l("li",[e._v("Docker Desktop for Windows or Vm")]),e._v(" "),l("li",[e._v("Azure Installation\n"),l("ul",[l("li",[e._v("Vscode and Extensions installation")]),e._v(" "),l("li",[e._v("GitHub Repo clone")])])])]),e._v(" "),l("p",[l("strong",[e._v("Info Slot 1: Docker 101")])]),e._v(" "),l("ul",[l("li",[e._v("What is Docker?\n"),l("ul",[l("li",[e._v("Linux Container Concept (LXC, Kernel, Namespaces, Cgroups)")]),e._v(" "),l("li",[e._v("Docker history")]),e._v(" "),l("li",[e._v("Container and Image")]),e._v(" "),l("li",[e._v("Container vs VM")])])]),e._v(" "),l("li",[e._v("Docker CLI and Basics\n"),l("ul",[l("li",[e._v("How to use CLI? (Help, version, cli not equals to daemon, management sub command)")]),e._v(" "),l("li",[e._v("Version, info")]),e._v(" "),l("li",[e._v("Basics (Name, ID)")]),e._v(" "),l("li",[e._v("How to run Docker Containers (docker run, start, stop, delete, ls)")]),e._v(" "),l("li",[e._v("Most used options (rm, -it etc.)")]),e._v(" "),l("li",[e._v("Detach, Active, Task Containers")]),e._v(" "),l("li",[e._v("Exec (Executing commands inside Containers)")])])])]),e._v(" "),l("p",[l("strong",[l("RouterLink",{attrs:{to:"/day6/challenges/challenge1.html"}},[e._v("Challenge 1: Docker 101")])],1)]),e._v(" "),l("ul",[l("li",[e._v("First let's check the current status of the Docker.")]),e._v(" "),l("li",[e._v("It's time to get more information about our Docker installation.")]),e._v(" "),l("li",[e._v('Let\'s see "How to become a Docker Cli master?"')]),e._v(" "),l("li",[e._v("It's time to run our first container")]),e._v(" "),l("li",[e._v("Detach container")]),e._v(" "),l("li",[e._v("Running another application inside the container")]),e._v(" "),l("li",[e._v("Connect to a Docker container")]),e._v(" "),l("li",[e._v("Inspecting a container's details")])]),e._v(" "),l("p",[l("strong",[e._v("Info Slot 2: Container 101")])]),e._v(" "),l("ul",[l("li",[e._v("Docker Container Basics\n"),l("ul",[l("li",[e._v("Theory (one app one container)")]),e._v(" "),l("li",[e._v("Union File System")]),e._v(" "),l("li",[e._v("Copy on Write")]),e._v(" "),l("li",[e._v("Container Life cycle (cattle vs pet)")]),e._v(" "),l("li",[e._v("Stdin, Stdout, Stderr")]),e._v(" "),l("li",[e._v("PIDs (Stats and Top)")]),e._v(" "),l("li",[e._v("Consumption Limits")]),e._v(" "),l("li",[e._v("Environment Variables")])])])]),e._v(" "),l("p",[l("strong",[l("RouterLink",{attrs:{to:"/day6/challenges/challenge2.html"}},[e._v("Challenge 2: Container 101")])],1)]),e._v(" "),l("ul",[l("li",[e._v("First let's create couple of containers")]),e._v(" "),l("li",[e._v("Docker logs")]),e._v(" "),l("li",[e._v("Docker top and stats")]),e._v(" "),l("li",[e._v("CPU and Memory consumption limits")]),e._v(" "),l("li",[e._v("Environment Variables")])]),e._v(" "),l("p",[l("strong",[e._v("Info Slot 3: Docker Objects")])]),e._v(" "),l("ul",[l("li",[e._v("Batteries included but removable")]),e._v(" "),l("li",[e._v("Docker Volume (Volume drivers, Bind Mounts)")]),e._v(" "),l("li",[e._v("Docker Network (basics, drivers, port publish)")])]),e._v(" "),l("p",[l("strong",[l("RouterLink",{attrs:{to:"/day6/challenges/challenge3.html"}},[e._v("Challenge 3: Docker Objects")])],1)]),e._v(" "),l("ul",[l("li",[e._v("Creating the first volume")]),e._v(" "),l("li",[e._v("Other volume options")]),e._v(" "),l("li",[e._v("Default networks - Bridge")]),e._v(" "),l("li",[e._v("Default networks - Host")]),e._v(" "),l("li",[e._v("Default networks - None")]),e._v(" "),l("li",[e._v("User-defined bridge network")]),e._v(" "),l("li",[e._v("Port publishing")])]),e._v(" "),l("p",[l("strong",[e._v("Info Slot 4: Image and Registry")])]),e._v(" "),l("ul",[l("li",[e._v("Image Basics\n"),l("ul",[l("li",[e._v("Image naming scheme and tags")]),e._v(" "),l("li",[e._v("Layers")]),e._v(" "),l("li",[e._v("Image pull, push")])])]),e._v(" "),l("li",[e._v("Registry\n"),l("ul",[l("li",[e._v("What is an image registry?")]),e._v(" "),l("li",[e._v("Docker hub (Official Images, non-official images)")]),e._v(" "),l("li",[e._v("Repository")]),e._v(" "),l("li",[e._v("Azure Container Registry")])])]),e._v(" "),l("li",[e._v("Image Creation\n"),l("ul",[l("li",[e._v("Dockerfile (Instruction, format)")]),e._v(" "),l("li",[e._v("ADD vs. COPY - ENTRYPOINT vs. CMD")]),e._v(" "),l("li",[e._v("Exec vs. Shell form")]),e._v(" "),l("li",[e._v("Multi-stage builds and build cache")]),e._v(" "),l("li",[e._v("Build ARG")]),e._v(" "),l("li",[e._v("Docker Commit - Docker save/load")])])])]),e._v(" "),l("p",[l("strong",[l("RouterLink",{attrs:{to:"/day6/challenges/challenge4.html"}},[e._v("Challenge 4: Image and Registry")])],1)]),e._v(" "),l("ul",[l("li",[e._v("Tagging")]),e._v(" "),l("li",[e._v("Building the first image")]),e._v(" "),l("li",[e._v("Building a nodejs image")]),e._v(" "),l("li",[e._v("Multi-stage build")]),e._v(" "),l("li",[e._v("Php contacts app")]),e._v(" "),l("li",[e._v("Docker commit")])]),e._v(" "),l("p",[l("strong",[e._v("Info Slot 5: Azure Container Services")])]),e._v(" "),l("ul",[l("li",[e._v("Container Services on Azure\n"),l("ul",[l("li",[e._v("Container Instances")]),e._v(" "),l("li",[e._v("App Service")]),e._v(" "),l("li",[e._v("Batch")]),e._v(" "),l("li",[e._v("Azure Service Fabric")]),e._v(" "),l("li",[e._v("Azure Red Hat OpenShift")]),e._v(" "),l("li",[e._v("Azure Container Registry (ACR)")]),e._v(" "),l("li",[e._v("Azure Kubernetes Service (AKS)")])])])]),e._v(" "),l("p",[l("strong",[l("RouterLink",{attrs:{to:"/day6/challenges/challenge5.html"}},[e._v("Challenge 5: Azure Container Services")])],1)]),e._v(" "),l("ul",[l("li",[e._v("Azure Container Registry")]),e._v(" "),l("li",[e._v("Azure Kubernetes Service")]),e._v(" "),l("li",[e._v("Deploy php app to AKS")]),e._v(" "),l("li",[e._v("Clean-up")])]),e._v(" "),l("p",[l("strong",[l("RouterLink",{attrs:{to:"/day6/challenges/challenge6.html"}},[e._v("Challenge 6: Self-learning")])],1)]),e._v(" "),l("ul",[l("li",[e._v("Reading list (Home-work)")])]),e._v(" "),l("hr"),e._v(" "),l("p",[e._v("[Challenge 0]")]),e._v(" "),l("p",[e._v("09:00 - 09:45 [Info Slot 1] 45 min")]),e._v(" "),l("p",[e._v("09:45 - 10:15 [Challenge Slot 1] 30 min")]),e._v(" "),l("p",[e._v("10:15 - 10:30 [Break] 15 min")]),e._v(" "),l("p",[e._v("10:30 - 11:30 [Info Slot 2] 60 min")]),e._v(" "),l("p",[e._v("11:30 - 12:00 [Challenge Slot 2] 30 min")]),e._v(" "),l("p",[e._v("12:00 - 13:00 [Lunch Break] 60 min")]),e._v(" "),l("p",[e._v("13:00 - 13:45 [Info Slot 3] 45 min")]),e._v(" "),l("p",[e._v("13:45 - 14:15 [Challenge Slot 3] 30 min")]),e._v(" "),l("p",[e._v("14:15 - 14:30 [Break] 15 Min")]),e._v(" "),l("p",[e._v("14:30 - 15:30 [Info Slot 4] 60 min")]),e._v(" "),l("p",[e._v("15:30 - 16:00 [Challenge Slot 4] 30 min")]),e._v(" "),l("p",[e._v("16:00 - 16:30 [Info Slot 5] 30 min")]),e._v(" "),l("p",[e._v("16:30 - 17:00 [Challenge Slot 5] 30 min")]),e._v(" "),l("p",[e._v("[Challenge 6]")])])}),[],!1,null,null,null);i.default=t.exports}}]);