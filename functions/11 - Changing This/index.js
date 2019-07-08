

const video = {
    title: 'Title',
    tags: ['a', 'b', 'c'],
    showTags() {
       // const self = this; // referencing the video object
        this.tags.forEach(tag => {
            console.log(this.title/*self.title*/, tag);
        });
    }
};

 video.showTags();

function playVideo(a, b) {
    console.log(this);
}

// playVideo.call({ name: 'Ransford' }, 1, 2);
// playVideo.apply({ name: 'Ransford' }, [1, 2]);
// playVideo.bind({ name: 'Ransford' }, [1, 2])(); // returns a new function and sets 'this' to point to the new object permanently
// playVideo();