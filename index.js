const btn = document.getElementById("btn")
const text = document.getElementById("joke")
const apikey="gv7MsYSACILyp3LF9chUUQ==kvnWgWZNBHZDX6hF"

const options = {
    method: "GET",
    headers: {
        'X-Api-Key': apikey
    }
}

async function jokes() {
    text.innerText = "updating...."
    btn.innerText="Loading..."
    const response = await fetch("https://api.api-ninjas.com/v1/dadjokes?limit=1", options)
    const result = await response.json()
    text.innerText = result[0].joke
     btn.innerText="Tell me a joke"
}
btn.addEventListener('click',jokes)