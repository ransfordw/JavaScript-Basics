
// Use a constructor function to create a post object
let post = new Post('Ransford\'s Note','Here is my new note.','Ransford');

// Constructor function
// Note PascalCaseing for the function name since it 
// is a constructor function
function Post(title, body, author /*views default as zero*/)
{
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0;
    this.comments = [];
    this.isLive = false;
}

console.log(post);

function viewPost(post){
    console.log(post);
    post.views += 1;
}

function commentOnPost(comment, post){
    post.comments.push(comment);
    console.log("Added your comment succesfully!");
}