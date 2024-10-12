document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#counter').innerHTML = 0
    updateCounter()
    document.getElementById('plus').addEventListener('click', () => {
        document.querySelector('#counter').innerHTML = Number(document.querySelector('#counter').innerHTML) + 1
    })
    document.getElementById('minus').addEventListener('click', () => {
        document.querySelector('#counter').innerHTML = Number(document.querySelector('#counter').innerHTML) - 1
    })
    let paused = false
    document.getElementById('pause').addEventListener('click', () => {
        if (!paused) {
            clearInterval(currentId); 
            Array.from(document.querySelectorAll('button')).forEach(btn => btn.disabled = true)
            document.getElementById('pause').disabled = false
            document.getElementById('pause').innerText = 'resume'; 
        } else {
            updateCounter();
            Array.from(document.querySelectorAll('button')).forEach(btn => btn.disabled = false)
            document.getElementById('pause').innerText = 'pause'; 
        }
        paused = !paused
    })

    let numbers = []
    document.getElementById('heart').addEventListener('click', () => {
        let number = document.querySelector('#counter').innerHTML
        numbers.push(number)
        let count = 0
        numbers.forEach((no) => no === number && count++)
        let like = document.createElement('li')
        like.innerHTML = `${document.querySelector('#counter').innerHTML} has been liked. Count: ${count}`
        document.querySelector('.likes').appendChild(like)
    })

    document.getElementById('comment-form').addEventListener('submit', () => {
        let p = document.createElement('p')
        p.textContent = document.getElementById('comment-input').value
        document.getElementById('list').appendChild(p)
    })
})

function updateCounter() {
    currentId = setInterval(() => {
        document.querySelector('#counter').innerHTML = Number(document.querySelector('#counter').innerHTML) + 1
    }, 1000)
}
