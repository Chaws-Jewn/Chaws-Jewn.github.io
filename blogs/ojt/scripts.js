/* CALL INIT HERE*/
init();

function init() {
    const container = document.querySelector('#posts-container');

    entries.forEach(entry => {
        const post = document.createElement('div');
        console.log("hi");
        post.classList.add('post');
        post.innerHTML = `
            <h2>${entry.title}</h2>
            <p>${entry.content}</p>
            <p><strong>Author:</strong> ${entry.author}</p>
            <p><strong>Date:</strong> ${entry.date}</p>
        `;
        container.appendChild(post);
    });
}
