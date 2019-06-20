export default (props, data) => {
    return(/*html*/`
    <div class="container">
        <div class="row">
            ${(data.loading === true) ? [1,2,3].map(() => /*html*/`
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
            `) : /*html*/`
            <div class="col">
                <div class="card">
                    <img class="post-thumbnail" src="https://www.elegantthemes.com/blog/wp-content/uploads/2019/06/biteable-review-featured-image.jpg">
                    <article>
                        <h4 class="post-title">Lorem Ipsum - Hello World</h4>
                        <p class="post-meta">23 December</p>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                        <a class="btn" href="#">Read Post</a>
                    </article>
                </div>
            </div>
            <div class="col">
                <div class="card">
                    <img class="post-thumbnail" src="https://www.elegantthemes.com/blog/wp-content/uploads/2019/06/biteable-review-featured-image.jpg">
                    <article>
                        <h4 class="post-title">Lorem Ipsum - Hello World</h4>
                        <p class="post-meta">23 December</p>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                        <a class="btn" href="#">Read Post</a>
                    </article>
                </div>
            </div>
            <div class="col">
                <div class="card">
                    <img class="post-thumbnail" src="https://www.elegantthemes.com/blog/wp-content/uploads/2019/06/biteable-review-featured-image.jpg">
                    <article>
                        <h4 class="post-title">Lorem Ipsum - Hello World</h4>
                        <p class="post-meta">23 December</p>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                        <a class="btn" href="#">Read Post</a>
                    </article>
                </div>
            </div>
            `}
            
        </div>
    </div>
`)}