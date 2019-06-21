export default (props, posts) => {
    const renderDate = dateString => {
        const date = new Date(dateString);
        return date.toDateString();
    }

    return(/*html*/`
    <div class="container">
        <div class="row">
            ${(posts.loading === true) ? [1,2,3].map(() => /*html*/`
            <div class="col">
                <div class="card" data-loading="true">
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
                        <img class="post-thumbnail" src=${post.jetpack_featured_media_url} />
                    </div>
                    <article>
                        <h4 class="post-title">${post.title.rendered}</h4>
                        <p class="post-meta">${renderDate(post.date)}</p>
                        ${post.excerpt.rendered}
                        <a class="btn" href="#">Read Post</a>
                    </article>
                </div>
            </div>
            `)}
            
        </div>
    </div>
`)}