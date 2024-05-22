//declare the vars for having access to the template window
let fullScreenWindow = document.querySelector("#fullScreenWindow");
let fullScreenWindowPhoto = document.querySelector("#fullScreenWindowPhoto");
let closeButton = document.querySelector("#windowCloseButton");

/*-----give functionality to left bar-----*/
    //open the leftBar options when you put the mouse over
    //DOM elements
    let leftBarElements = document.querySelectorAll(".leftBarBox");

    leftBarElements.forEach((elem) => {
        elem.addEventListener("mouseover", () => {
            elem.style.maxWidth = "none";
            elem.style.width = "20rem";

            //access to the div style
            let flashingText = elem.firstChild.style;
            flashingText.display = "flex";
        });
    });

    //Put back the original values of the element when the mouse is out of the element
    leftBarElements.forEach((elem) => {
        elem.addEventListener("mouseout", () => {
            elem.style.width = "50px";

            //access to the div style
            let flashingText = elem.firstChild.style;
            flashingText.display = "none";
        });
    });

    //left bar buttons function
    let leftBarButtonDates = document.getElementById("leftBarButtonDates");
    leftBarButtonDates.addEventListener("click", () => {
        document.getElementById("pricesSection").scrollIntoView({behavior: 'smooth'});
    });

    let leftBarButtonContactUs = document.getElementById("leftBarButtonContactUs");
    leftBarButtonContactUs.addEventListener("click", () => {
        document.getElementById("contactUsSection").scrollIntoView({behavior: 'smooth'});
    });

/*-----give functionality to top bar-----*/
    //modify topBar when scrolling
    //DOM elements
    let logos = ["https://www.sdatac.org.tw/wp-content/uploads/logo-big.png", "https://www.sdatac.org.tw/wp-content/uploads/favicon.png"]; 
    let topBar = document.querySelector("#topBar");
    let topBarElements = document.querySelectorAll(".topBarElements");

    let lastScrollPos = 0;
    window.addEventListener("scroll", (event) => {
        if (window.scrollY != 0) {
            //modifies topBar
            topBar.style.transition = "transform 0.3s ease 0s, background-color 0.3s ease 0s, opacity 0.3s ease 0s, box-shadow 0.3s ease 0s, border-color 0.3s ease 0s, margin 0.25s ease-out 0s, backdrop-filter 0.25s ease 0s";
            topBar.style.height = "4rem";
            topBar.style.backgroundColor = "white";
            topBar.style.color = "var(--main-title)";
            topBar.style.boxShadow = "0 1px 2vh black";
            topBarElements.forEach((elem) => {
                elem.style.borderColor = "var(--main-title)";
            });

        } else if (window.scrollY < 10) {
            //modifies topBar
            topBar.style.backgroundColor = "transparent";
            topBar.style.color = "white";
            topBar.style.boxShadow = "none";
            topBarElements.forEach((elem) => {
                elem.style.borderColor = "white";
            });
            topBar.style.height = "5rem";
            topBar.style.transition = "transform 0.3s ease 0s, background-color 0.3s ease 0s, opacity 0.3s ease 0s, box-shadow 0.3s ease 0s, border-color 0.3s ease 0s, margin 0.25s ease-out 0s, backdrop-filter 0.25s ease 0s";
        }
        //change the value
        lastScrollPos = window.scrollY;
        
    });

    //top bar buttons function
    let topBarButtonHome = document.getElementById("topBarButtonHome");
    topBarButtonHome.addEventListener("click", () => {
        document.getElementById("homeSection").scrollIntoView({behavior: 'smooth'});
    });

    let topBarButtonAboutUs = document.getElementById("topBarButtonAboutUs");
    topBarButtonAboutUs.addEventListener("click", () => {
        document.getElementById("introductionSection").scrollIntoView({behavior: 'smooth'});
    });

    let topBarButtonWhyThisCamp = document.getElementById("topBarButtonWhyThisCamp");
    topBarButtonWhyThisCamp.addEventListener("click", () => {
        document.getElementById("whyThisCampSection").scrollIntoView({behavior: 'smooth'});
    });

    let topBarButtonDates = document.getElementById("topBarButtonDates");
    topBarButtonDates.addEventListener("click", () => {
        document.getElementById("pricesSection").scrollIntoView({behavior: 'smooth'});
    });

    let topBarButtonContact = document.getElementById("topBarButtonContact");
    topBarButtonContact.addEventListener("click", () => {
        document.getElementById("contactUsSection").scrollIntoView({behavior: 'smooth'});
    });

    /*
    topBarButtonLanguage
    */

    //change the language of the button language when the mouse is over the element
    let flags = [".\\src\\icons\\british_flag.png", ".\\src\\icons\\taiwan_flag.png"];
    let languageButton = document.querySelector("#topBarButtonLanguage");
    let languageLable = document.querySelector("#languageLableBarTop");
    let languageFlag = document.querySelector("#languageFlagBarTop");

    languageButton.addEventListener("mouseover", () => {
        languageLable.innerHTML = "中文";
        languageFlag.setAttribute("src", flags[1]); 
    });

    languageButton.addEventListener("mouseout", () => {
        languageLable.innerHTML = "ENG";
        languageFlag.setAttribute("src", flags[0]);
    });

    languageButton.addEventListener("click", () => {
        window.open("index_chinese.html", "_self");
    });

/*-----give functionality to home-----*/
    //open a new tab to show a form to enrol
    let linkToEnrolForm = "https://docs.google.com/forms/d/e/1FAIpQLScUlInNlDzNWmYRKN7m6ERPBiWqA_2ND8JAkiSRqbJmqHZAYA/viewform";
    let enrolNowButton = document.querySelectorAll(".enrolNowButton");

    enrolNowButton.forEach((elem) => {
        elem.addEventListener("click", () => {
            window.open(linkToEnrolForm);
        });
    });

    //open a new tab to show the brochure
    let linkToBrochure = "https://drive.google.com/drive/folders/1mcyICx_T0iYw8jvD6cJO_g5izpOo9dRf?usp=sharing";
    let brochureLink = document.querySelector("#brochureLink");

    brochureLink.addEventListener("click", () => {
        window.open(linkToBrochure);
    });

    //open a new tab to show our campus
    let linkToCampus = "https://www.sdatac.org.tw/en/dormitory/";
    let ourCampusLink = document.querySelector("#ourCampusLink");

    ourCampusLink.addEventListener("click", () => {
        window.open(linkToCampus);
    });




/*-----give functionality to Dates and Prices-----*/
    //open a window to show the prices
    let pricesLink = document.querySelector("#pricesLink");

    pricesLink.addEventListener("click", () => {
        fullScreenWindow.style.display = "flex";
        fullScreenWindowPhoto.setAttribute("src", ".\\src\\data\\prices.png");
    });

    //closes the window
    closeButton.addEventListener("click", () => {
        fullScreenWindow.style.display = "none";
    });

/*-----give functionality to Carrousel-----*/
    //save links and names
    const pictures = [".\\src\\img\\0.jpg", ".\\src\\img\\1.jpg", ".\\src\\img\\2.jpg", ".\\src\\img\\3.jpg", ".\\src\\img\\4.jpg"];
    const titles = ["Values that last a life", "Better methods give better results", "The best environment to learn English", "There is only room for unforgettable experiences", "Learning can be done in so many ways"];
    const descriptions = ["This camp, apart from being an excellent place to learn English, is a place where values are encouraged and character is strengthened through entertaining activities.", "An smaller group moves faster. The couses are based on American-teaching style with small-class learning system.", "Classes are taught by foreign native-speaking teachers, each class accompanied by academic staff and teacher assistant to help students during the learning process.", "Multi-layered and diverse courses, combining indoor and outdoor learning activities to assist children to gain a holistic learning experience.", "Indoor courses include studying in English language, nutritious cooking, creative arts, and environmental education; Outdoor courses include exploratory education, tree-climbing experiences, forest exploration, and other physical activities."];

    //DOM elements
    const carrouselScreen = document.querySelector("#carrouselScreen");
    const carrouselHeading = document.querySelector("#carrouselHeading");
    const carrouselDescription = document.querySelector("#carrouselDescription");
    const carrouselBackArrow = document.querySelector("#carrouselBackArrow");
    const carrouselNextArrow = document.querySelector("#carrouselNextArrow");

    let totalElements = pictures.length;
    let currentElementID = 0;

    //Set initial value of the screen
    function setCarrouselValues(id) {
        carrouselScreen.setAttribute("src", pictures[id]);
        carrouselHeading.innerHTML = titles[id];
        carrouselDescription.innerHTML = descriptions[id];
    }

    setCarrouselValues(currentElementID);

    //when the page is opened the carrousel should auto switch its slides
    let autoSwitch = true;
    function carrouselNextValue() {
        if (currentElementID == (totalElements - 1)) {
            currentElementID = 0;
            setCarrouselValues(currentElementID);

        } else {
            ++currentElementID;
            setCarrouselValues(currentElementID);
        }

        if (autoSwitch) {
            setTimeout(carrouselNextValue, 3000);
        }
    }

    carrouselNextArrow.addEventListener("click", () => {
        autoSwitch = false;
        carrouselNextValue();
    });

    carrouselBackArrow.addEventListener("click", () => {
        if (currentElementID == 0) {
            currentElementID = (totalElements - 1);
            setCarrouselValues(currentElementID);

        } else {
            --currentElementID;
            setCarrouselValues(currentElementID);
        }
        autoSwitch = false;
    });
    //calls the carrousel
    carrouselNextValue();








