let createBlog = (title, body) => {
    if(!title){
        throw new Error("Title is required.")
    }
    if(!body){
        throw new Error("Post doesnt have a body.")
    }

    return alert(`${title} - ${body}`);
}

createBlog('Blog Title', 'Blog Body');
