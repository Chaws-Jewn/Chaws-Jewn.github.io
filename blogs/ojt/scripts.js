/* CALL INIT HERE*/
init();

function init() {
    const container = document.querySelector('#posts-container');

    entries.forEach(entry => {
        const post = document.createElement('div');
        post.classList.add('post');
        post.innerHTML = `
            <h2>${entry.title}</h2>
            <h3><em>${entry.date}</em></h3>
            <p>${entry.content}</p>
        `;
        post.classList.add("flex flex-col gap-3");
        container.appendChild(post);
    });
}
