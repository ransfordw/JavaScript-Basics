
// if a function is part of an object, it is a method 'this' refs the object
// if function is not part of an object is is a global method 'this' refs the global object(window)

// First rule
const video = {
    title: 'Title',
    tags: ['1', '2', '3'],
    play() {
        console.log(this);
    },
    showTags() {
        this.tags.forEach(tag => {
            console.log(this.title, tag);
        }, this);
    }
};

video.showTags();
video.stop = function () {
    console.log(this);
}

//video.play();
//video.stop();

// -----------
// Second Rule
// -----------

function Video(title) {
    this.title = title;
    console.log(this);
}

//const v = new Video('some title');