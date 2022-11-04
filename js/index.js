const form = document.querySelector("#github-form")

form.addEventListener("submit", (e) => {
    e.preventDefault()

    fetch(`https://api.github.com/search/users?q=${e.target[0].value}`)
    .then(res => res.json())
    .then(res => {
        res.items.map(item => {
            const h2 = document.createElement("h2")
            h2.textContent = item.login

            h2.addEventListener("click", (e) => repoLink(item.login, e))

            const img = document.createElement("img")
            img.src = item.avatar_url
        
            const list = document.getElementById("user-list")
            list.append(h2, img)
        })
    })
})

function repoLink(username, e) {
     e.preventDefault()
    fetch(`https://api.github.com/users/${username}/repos`)
    .then(res => res.json())
    .then(res => res.map(repo => {
        const h1 = document.createElement("h1")
        h1.textContent = repo.name
        const repoList = document.getElementById("repos-list")
        repoList.append(h1)
     }))
}
