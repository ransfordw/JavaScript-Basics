
// Create a blog post object with the following properties

// title
// body
// author
// views (times views)
// comments (author and body)
// isLive

class Comment{
    constructor(author, body){
        this.author = author;
        this.body = body;
    }
}

class BlogPost{
    constructor(title,body,author, views, comment,isLive){
        this.title = title;
        this.author = author;
        this.body = body;
        this.views = views;
        this.isLive = isLive;
        this.comment = comment;
    }
}

let post = new BlogPost('Willow Ptarmigan Sitings', '<List of all Willow Ptarmigan sitings in the last month',
'eBird',12,new Comment('Ransford','I hope I see one!'),true);

console.log(post);

// Alternatively

let newPost = {
    title: 'a',
    body: 'b',
    author: 'c',
    views: 10,
    comments: [
        {author: 'a', body:'b' },
        {author: 'c', body:'d'},
    ],
    isLive: true,
};

console.log(newPost);