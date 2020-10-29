class RecentPosts {
    constructor(params) {
        this.recentPostsSection = params.recentPostsSection;
        this.blogData = params.blogData;
        this.sortedRecent = params.categoriesList;

        this.generateHTML()

    }

    // Generuoja recent posts item HTML'ą
    generateRecentPosts() {
        let recentPostItemHTML = '';
        for (let i = 0; i < 3; i++) {
            recentPostItemHTML += `<div class="recent-post-item">
                                        <img src="${this.blogData.imagePath + this.blogData.blogItems[this.sortedRecent[i]].media.img}" alt="Blog post image">
                                        <div class='recent-post-item-texts'>
                                            <h4>${this.blogData.blogItems[this.sortedRecent[i]].title}</h4>
                                            <p>${this.blogData.blogItems[this.sortedRecent[i]].date.month.substring(0,3)} ${this.blogData.blogItems[this.sortedRecent[i]].date.day}, ${this.blogData.blogItems[this.sortedRecent[i]].date.year}</p>
                                        </div>
                                    </div>`
        }
        return recentPostItemHTML;
    }

    /**
     * Generuoja recent posts elemento HTML.
     */
    generateHTML() {
        return `<div class='aside-container aside-recent-posts'>
        <h4>${this.recentPostsSection.title}</h4>
        <div class="recent-posts">
             ${this.generateRecentPosts()}
        </div>
        </div>`;
    }

}

export { RecentPosts }