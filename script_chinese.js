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

    let leftBarButtonCallUs = document.getElementById("leftBarButtonCallUs");
    leftBarButtonCallUs.addEventListener("click", () => {
        window.open("https://line.me/ti/p/7YG8hBX78_");
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
        languageLable.innerHTML = "ENG";
        languageFlag.setAttribute("src", flags[0]); 
    });

    languageButton.addEventListener("mouseout", () => {
        languageLable.innerHTML = "中文";
        languageFlag.setAttribute("src", flags[1]);
    });

    languageButton.addEventListener("click", () => {
        window.open("index.html", "_self");
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
    const titles = ["持續一生的價值觀", "更好的方法帶來更好的結果", "學習英語的最佳環境", "只有留下難忘經歷的空間", "學習可以透過多種方式進行"];
    const descriptions = ["這個營地不僅是學習英語的好地方, 是一個透過娛樂活動鼓勵價值觀和強化品格的地方.", "較小的群體移動速度較快. 課程採美式教學風格，小班制學習.", "外籍英語母語的教師授課，每班皆有助教陪同協助.", "課程多元豐富，結合室內課程及戶外課程，幫助孩子學習更全面.", "室內課程含英文學習、營養烹飪、創意美術、環境教育。戶外課程含探索教育、攀樹體驗教育、森林環境探險、體能運動."];

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








