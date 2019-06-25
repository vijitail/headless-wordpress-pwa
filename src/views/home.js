export default (props, posts) => {
    console.log(posts);
    const renderDate = dateString => {
        const date = new Date(dateString);
        return date.toDateString();
    }

    return(/*html*/`
    <div class="container" data-loading=${posts.loading}>
        <div class="row">
            ${(posts.loading === true) ? [1,2,3].map(() => /*html*/`
            <div class="col">
                <div class="card">
                    <img class="post-thumbnail" src="https://via.placeholder.com/100x45.png?text=Loading">
                    <article>
                        <h4 class="post-title"></h4>
                        <p class="post-meta"></p>
                        <p></p>
                    </article>
                </div>
            </div>
            `) : posts.map(post =>/*html*/`
            <div class="col">
                <div class="card">
                    <div class="thumbnail-container">
                        <img class="post-thumbnail" src=${post.featured_image} />
                    </div>
                    <article>
                        <h4 class="post-title">${post.title}</h4>
                        <p class="post-meta">${renderDate(post.date)}</p>
                        <p>${post.excerpt}</p>
                        <div class="author-meta">
                            <img src=${post.author.avatar} height=35 width=35> <span>${post.author.name}</span>
                        </div>
                        <a class="btn" href=${`#/${post.id}`}>Read Post</a>
                    </article>
                </div>
            </div>
            `)}
            
        </div>
    </div>
`)}