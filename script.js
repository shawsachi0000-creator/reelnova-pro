/*=========================================
  REELHUB PRO
  SCRIPT.JS - PART 11
  MENU + LOADER + SCROLL
=========================================*/

// ==========================
// Loader
// ==========================

window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    if(loader){

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        },600);

    }

});

// ==========================
// Mobile Menu
// ==========================

const menuBtn = document.querySelector(".menu-btn");

const nav = document.querySelector("nav");

if(menuBtn){

    menuBtn.addEventListener("click",()=>{

        nav.classList.toggle("active");

    });

}

// ==========================
// Sticky Header
// ==========================

const header = document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 60){

        header.style.background = "rgba(0,0,0,.95)";

        header.style.boxShadow =
        "0 10px 30px rgba(0,0,0,.35)";

    }

    else{

        header.style.background =
        "rgba(17,17,17,.85)";

        header.style.boxShadow = "none";

    }

});

// ==========================
// Smooth Scroll
// ==========================

document.querySelectorAll("a[href^='#']").forEach(link=>{

    link.addEventListener("click",function(e){

        e.preventDefault();

        const target =
        document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

// ==========================
// Console
// ==========================

console.log("ReelHub Pro Loaded Successfully");
/*=========================================
  REELHUB PRO
  SCRIPT.JS - PART 12
  DARK MODE + BACK TO TOP
=========================================*/

// ==========================
// Dark Mode
// ==========================

const darkBtn = document.querySelector(".dark-mode");

if (darkBtn) {

    darkBtn.addEventListener("click", () => {

        document.body.classList.toggle("light-mode");

        if (document.body.classList.contains("light-mode")) {

            localStorage.setItem("theme", "light");

        } else {

            localStorage.setItem("theme", "dark");

        }

    });

}

window.addEventListener("load", () => {

    if (localStorage.getItem("theme") === "light") {

        document.body.classList.add("light-mode");

    }

});

// ==========================
// Back To Top Button
// ==========================

const topBtn = document.querySelector(".floating-btn");

window.addEventListener("scroll", () => {

    if (!topBtn) return;

    if (window.scrollY > 400) {

        topBtn.style.opacity = "1";
        topBtn.style.visibility = "visible";

    } else {

        topBtn.style.opacity = "0";
        topBtn.style.visibility = "hidden";

    }

});

if (topBtn) {

    topBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}

// ==========================
// Scroll Animation
// ==========================

const revealElements = document.querySelectorAll(".card");

function revealCards() {

    revealElements.forEach((item) => {

        const top = item.getBoundingClientRect().top;

        const
        /*=========================================
  REELHUB PRO
  SCRIPT.JS - PART 13
  URL VALIDATION + COPY + TOAST
=========================================*/

// ==========================
// Elements
// ==========================

const videoInput = document.querySelector(".search-box input");
const downloadBtn = document.querySelector(".search-box button");

// ==========================
// URL Validation
// ==========================

function isValidURL(url){

    const pattern = /^(https?:\/\/)[^\s/$.?#].[^\s]*$/i;

    return pattern.test(url);

}

// ==========================
// Download Button
// ==========================

if(downloadBtn){

downloadBtn.addEventListener("click",()=>{

const link = videoInput.value.trim();

if(link===""){

showToast("Please paste a video URL.");

return;

}

if(!isValidURL(link)){

showToast("Invalid URL.");

return;

}

downloadBtn.innerHTML=
'<i class="fa-solid fa-spinner fa-spin"></i> Checking...';

setTimeout(()=>{

downloadBtn.innerHTML=
'<i class="fa-solid fa-download"></i> Download';

showToast("URL verified successfully.");

},2000);

});

}

// ==========================
// Copy Link
// ==========================

function copyVideoLink(){

if(!videoInput) return;

navigator.clipboard.writeText(videoInput.value);

showToast("Link copied.");

}

// ==========================
// Toast Message
// ==========================

function showToast(message
/*=========================================
  REELHUB PRO
  SCRIPT.JS - PART 14
  DOWNLOAD HISTORY + FAVORITES + SETTINGS
=========================================*/

// ==========================
// Download History
// ==========================

let downloadHistory = JSON.parse(
    localStorage.getItem("downloadHistory")
) || [];

function saveDownload(url){

    if(!url) return;

    downloadHistory.unshift({
        url:url,
        time:new Date().toLocaleString()
    });

    if(downloadHistory.length > 20){

        downloadHistory.pop();

    }

    localStorage.setItem(
        "downloadHistory",
        JSON.stringify(downloadHistory)
    );

}

// ==========================
// Show History
// ==========================

function showHistory(){

    console.log("Download History");

    downloadHistory.forEach((item,index)=>{

        console.log(
            (index+1)+".",
            item.url,
            item.time
        );

    });

}

// ==========================
// Save After Validation
// ==========================

if(downloadBtn){

downloadBtn.addEventListener("click",()=>{

const url = videoInput.value.trim();

if(isValidURL(url)){

saveDownload(url);

}

});

}

// ==========================
// Favorite Tools
// ==========================

let favoriteTools = JSON.parse(
    localStorage.getItem("favoriteTools")
) || [];

function addFavorite(tool){

    if(!favoriteTools.includes(tool)){

        favoriteTools.push(tool);

        localStorage.setItem(
            "favoriteTools",
            JSON.stringify(favoriteTools)
        );

        showToast(tool + " added to favorites");

    }

}

// ==========================
// Remove Favorite
// ==========================

function removeFavorite(tool){

favoriteTools =
favoriteTools.filter(item=>item!==tool);

localStorage.setItem(
"favoriteTools",
JSON.stringify(favoriteTools)
);

}

// ==========================
// User Settings
// ==========================

const settings = {

theme:
localStorage.getItem("theme") || "dark",

language:
localStorage.getItem("language") || "English"

};

function saveSettings(){

localStorage.setItem(
"theme",
settings.theme
);

localStorage.setItem(
"language",
settings.language
);

}

// ==========================
// Clear History
// ==========================

function clearHistory(){

downloadHistory=[];

localStorage.removeItem(
"downloadHistory"
);

showToast("History Cleared");

}

// ==========================
// Console
// ==========================

console.log("Part 14 Loaded");
/*=========================================
  REELHUB PRO
  SCRIPT.JS - PART 15
  LIVE SEARCH + CATEGORIES + THEME
=========================================*/

// ==========================
// Live Search
// ==========================

const searchInput = document.querySelector(".search-box input");
const cards = document.querySelectorAll(".card");

if (searchInput) {

    searchInput.addEventListener("keyup", () => {

        const value = searchInput.value.toLowerCase();

        cards.forEach((card) => {

            const text = card.innerText.toLowerCase();

            if (text.includes(value)) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });

}

// ==========================
// Categories
// ==========================

const categories = [

"Instagram",
"Facebook",
"YouTube",
"X",
"Pinterest",
"Reddit"

];

console.log("Categories:", categories);

// ==========================
// Recently Used Tools
// ==========================

let recentTools = JSON.parse(

localStorage.getItem("recentTools")

) || [];

function addRecentTool(tool){

recentTools = recentTools.filter(item => item !== tool);

recentTools.unshift(tool);

if(recentTools.length > 10){

recentTools.pop();

}

localStorage.setItem(

"recentTools",

JSON.stringify(recentTools)

);

}

// ==========================
// Theme Color
// ==========================

function setTheme(color){

document.documentElement.style.setProperty(

"--gold",

color

);

localStorage.setItem(

"themeColor",

color

);

}
/*=========================================
  REELHUB PRO
  SCRIPT.JS - PART 16
  DASHBOARD + NOTIFICATIONS + AUTO SAVE
=========================================*/

// ==========================
// Notification System
// ==========================

function notify(title, message){

    if("Notification" in window){

        if(Notification.permission === "granted"){

            new Notification(title,{
                body: message,
                icon: "images/logo.png"
            });

        }else if(Notification.permission !== "denied"){

            Notification.requestPermission().then(permission=>{

                if(permission==="granted"){

                    new Notification(title,{
                        body: message,
                        icon: "images/logo.png"
                    });

                }

            });

        }

    }

}

// ==========================
// Dashboard Counter
// ==========================

let dashboard = {

    downloads:0,
    favorites:0,
    visits:0

};

dashboard.visits++;

function updateDashboard(){

    console.log("Downloads :", dashboard.downloads);
    console.log("Favorites :", dashboard.favorites);
    console.log("Visits :", dashboard.visits);

}

// ==========================
// Download Counter
// ==========================

function increaseDownload(){

    dashboard.downloads++;

    updateDashboard();

}

// ==========================
// Favorite Counter
// ==========================

function increaseFavorite(){

    dashboard.favorites++;

    updateDashboard();

}

// ==========================
// Auto Save Input
// ==========================

const urlInput = document.querySelector(".search-box input");

if(urlInput){

    const savedValue = localStorage.getItem("lastVideoURL");

    if(savedValue){

        urlInput.value = savedValue;

    }

    urlInput.addEventListener("input",()=>{

        localStorage.setItem(

            "lastVideoURL",

            urlInput.value

        );

    });

}

// ==========================
//
/*=========================================
  REELHUB PRO
  SCRIPT.JS - PART 17
  SEARCH SUGGESTIONS + TRENDING + LANGUAGE
=========================================*/

// ==========================
// Search Suggestions
// ==========================

const suggestions = [

"Instagram Reel",
"Facebook Video",
"YouTube Video",
"X Video",
"Pinterest Video",
"Reddit Video"

];

const inputBox = document.querySelector(".search-box input");

if(inputBox){

inputBox.addEventListener("input",()=>{

const value = inputBox.value.toLowerCase();

const result = suggestions.filter(item=>

item.toLowerCase().includes(value)

);

console.clear();

console.log("Suggestions");

result.forEach(item=>console.log(item));

});

}

// ==========================
// Trending Platforms
// ==========================

const trendingPlatforms = [

{
name:"Instagram",
trend:"Hot"
},

{
name:"Facebook",
trend:"Popular"
},

{
name:"YouTube",
trend:"Trending"
},

{
name:"Pinterest",
trend:"Growing"
}

];

function showTrending(){

console.log("Trending Platforms");

trendingPlatforms.forEach(platform=>{

console.log(

platform.name+" - "+platform.trend

);

});

}

showTrending();

// ==========================
// Language
// ==========================

const languagePack={

English:{
download:"Download",
welcome:"Welcome"
},

Hindi:{
download:"डाउनलोड",
welcome:"स्वागत है"
}

};

let currentLanguage=

localStorage.getItem("language")||

"English";

function changeLanguage(lang){

if(languagePack[lang]){

currentLanguage=lang;

localStorage.setItem(

"language",

lang

);

showToast(

languagePack[lang].welcome

);

}

}

// ==========================
// Theme Switch
// ==========================

function switchTheme(){

document.body.classList.toggle("light-mode");

}

// ==========================
// Auto Greeting
// ==========================

window.addEventListener("load",()=>{

const hour=new Date().getHours();

if(hour<12){

console.log("Good Morning");

}

else if(hour<18){

console.log("Good Afternoon");

}

else{

console.log("Good Evening");

}

});

// ==========================
// App Status
// ==========================

const appStatus={

name:"ReelHub Pro",

version:"1.0.0",

status:"Running"

};

console.table(appStatus);

console.log("Part 17 Loaded Successfully");
/*=========================================
  REELHUB PRO
  SCRIPT.JS - PART 18
  USER PROFILE + ANALYTICS + BACKUP
=========================================*/

// ==========================
// User Profile
// ==========================

let userProfile = JSON.parse(
    localStorage.getItem("userProfile")
) || {
    name: "Guest",
    downloads: 0,
    favorites: 0
};

function saveProfile() {

    localStorage.setItem(
        "userProfile",
        JSON.stringify(userProfile)
    );

}

function setUserName(name) {

    userProfile.name = name;

    saveProfile();

    showToast("Welcome " + name);

}

// ==========================
// Analytics
// ==========================

const analytics = {

    totalVisits: Number(localStorage.getItem("visits")) || 0,

    totalDownloads: Number(localStorage.getItem("downloads")) || 0

};

analytics.totalVisits++;

localStorage.setItem(

    "visits",

    analytics.totalVisits

);

function addDownloadAnalytics() {

    analytics.totalDownloads++;

    localStorage.setItem(

        "downloads",

        analytics.totalDownloads

    );

}

function showAnalytics() {

    console.table({

        User: userProfile.name,

        Visits: analytics.totalVisits,

        Downloads: analytics.totalDownloads,

        Favorites: userProfile.favorites

    });

}

// ==========================
// Backup
// ==========================

function backupData() {

    const backup = {

        profile: userProfile,

        history: downloadHistory,

        favorites: favoriteTools,

        recent
     /*=========================================
  REELHUB PRO
  SCRIPT.JS - PART 19
  LIVE STATS + AI PANEL + PERFORMANCE
=========================================*/

// ==========================
// Live Statistics
// ==========================

const liveStats = {

    onlineUsers: Math.floor(Math.random() * 500) + 100,

    totalTools: 12,

    appVersion: "1.0.0"

};

function showLiveStats(){

    console.table(liveStats);

}

showLiveStats();

// ==========================
// AI Tool Suggestions
// ==========================

const aiSuggestions = [

"Trim Video",

"Crop Video",

"Compress Video",

"Convert MP4",

"Create Thumbnail",

"Extract Audio",

"Resize Video",

"Merge Videos"

];

function randomSuggestion(){

    const random = Math.floor(

        Math.random() * aiSuggestions.length

    );

    return aiSuggestions[random];

}

console.log(

"AI Suggestion:",

randomSuggestion()

);

// ==========================
// Performance Timer
// ==========================

const startTime = performance.now();

window.addEventListener("load",()=>{

    const endTime = performance.now();

    console.log(

        "Page Loaded In:",

        Math.round(endTime-startTime),

        "ms"

    );

});

// ==========================
// Card Hover Sound
// ==========================

document.querySelectorAll(".card").forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        console.log("Card Hover");

    });

});

// ==========================
// Keyboard Shortcuts
// ==========================

document.addEventListener("keydown",(e)=>{

   /*=========================================
  REELHUB PRO
  SCRIPT.JS - PART 20
  FINAL INITIALIZATION
=========================================*/

// ==========================
// App Information
// ==========================

const APP = {

    name: "ReelHub Pro",

    version: "1.0.0",

    developer: "Open Source",

    status: "Production"

};

// ==========================
// Initialize App
// ==========================

function initializeApp() {

    console.log("================================");
    console.log(APP.name);
    console.log("Version :", APP.version);
    console.log("Status :", APP.status);
    console.log("================================");

    if (typeof showToast === "function") {

        showToast("Welcome to ReelHub Pro");

    }

}

window.addEventListener("load", initializeApp);

// ==========================
// Safe Error Handler
// ==========================

window.addEventListener("error", function (event) {

    console.error("Application Error:");

    console.error(event.message);

});

// ==========================
// Offline / Online Status
// ==========================

window.addEventListener("offline", () => {

    if (typeof showToast === "function") {

        showToast("No Internet Connection");

    }

});
