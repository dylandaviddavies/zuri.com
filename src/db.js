var facebook = {
    id: "1",
    title: "Facebook"
};
var google = {
    id: "2",
    img: "https://www.stickpng.com/assets/images/5847f9cbcef1014c0b5e48c8.png",
    title: "Google"
};
var employers = [
    facebook,
    google
];

var jobs = [
    {
        id: "1",
        title: "React Developer",
    },
    {
        id: "2",
        title: "Java Developer"
    },
    {
        id: "3",
        title: "QA Engineer",
        employer: facebook
    },
    {
        id: "4",
        title: "Business Analyst",
        employer: google
    },
    {
        id: "5",
        title: "Angular Developer",
        employer: google
    }
];

export default {
    jobs,
    employers
}