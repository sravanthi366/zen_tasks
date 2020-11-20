/* let container = document.createElement('div')
container.classList.add('container')
document.body.append(container)

let inp1 = document.createElement('input')
inp1.classList.add('input-group mb-3')
inp1.setAttribute('type', 'text')
inp1.setAttribute('placeholder', 'URL')
container.append(inp1) */

async function send() {

    let song_name = document.getElementsByName('song name').value
    let song_url = document.getElementsByName('url').value

    let song = await fetch('https://5f3f637744212d0016feca23.mockapi.io/songs', {

        method: "post",
        body: JSON.stringify({
            url: song_url,
            name: song_name
        }),
        headers: {
            "content-type": "application/json; charset-UTF-8"
        }

    })


}