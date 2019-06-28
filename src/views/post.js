export default (props, post) => {
    return /*html*/`
        <div class="container post-container" data-loading=${post.loading}>
            ${post.loading ? /*html*/`
                <h1 class="post-title"></h1>
                <div class="image-placeholder"></div>
                <p></p>
                <p></p>
                <p></p>
            ` : /*html*/`
                <h1 class="post-title">${post.post_title}</h1>
                ${post.post_content}
            `}
        </div>
    `;
}