var hideStoryBtnHTMLElement = document.getElementById('hide-story-btn');
var storyBoxHTMLElement = document.getElementById('story-box');
var screenSeparatorHTMLElement = document.getElementById('screen-separator');

var decisionsBoxHTMLElement = document.getElementById('decisions-box');
var directionsBoxHTMLElement = document.getElementById('directions-box');

var isStoryBoxVisible = true;
var isDirectionsBoxVisible = true;

function switchStoryBoxVisibility() {
    console.log('here')
    if (isStoryBoxVisible == true) {
        isStoryBoxVisible = false;
        hideStoryBtnHTMLElement.innerHTML = 'Show Story';

        screenSeparatorHTMLElement.style.top = '90%';

        storyBoxHTMLElement.style.height = '10%';
        storyBoxHTMLElement.style.top = '90%';
        storyBoxHTMLElement.style.overflowY = 'hidden';
    } else {
        isStoryBoxVisible = true;
        hideStoryBtnHTMLElement.innerHTML = 'Hide Story';

        screenSeparatorHTMLElement.style.top = '50%';

        storyBoxHTMLElement.style.height = '50%';
        storyBoxHTMLElement.style.top = '50%';
        storyBoxHTMLElement.style.overflowY = 'scroll';
    }
}

function swapDecisionBoxOptions() {
    if (isDirectionsBoxVisible == true) {
        isDirectionsBoxVisible = false;

        decisionsBoxHTMLElement.style.display = 'block';
        directionsBoxHTMLElement.style.display = 'none';
    } else {
        isDirectionsBoxVisible = true;

        decisionsBoxHTMLElement.style.display = 'none';
        directionsBoxHTMLElement.style.display = 'block';
    }
}