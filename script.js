const response = await fetch("https://ghibliapi.vercel.app/films")
const films = await response.json()

const listElement = document.getElementById("film-list")

for (const film of films) {
    console.log(film)

    const newElement = document.createElement("li")
    newElement.textContent = film.title

    //listElements.appendChild(newElement)

    listElement.appendChild(newElement)
}

function ExamplePromise() {
    const promise = new Promise((resolve, reject) => {
            setTimeout(
                () => {resolve() },
                1000
            )
    })

    return promise
}

console.log("Awaiting Promise")
await ExamplePromise()
console.log("Promise Resolved")