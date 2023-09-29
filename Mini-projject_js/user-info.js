// / <!--В index.html-->
// <!--1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users-->
// <!--2 Вивести id,name всіх user в index.html. Окремий блок для кожного user.-->
// <!--3 Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід  на сторінку user-details.html, котра має детальну інфорацію про об'єкт на який клікнули-->
fetch(`https://jsonplaceholder.typicode.com/users`)
.then (res => res.json())
.then(users => {
    for (const informElement of users) {
        const div = document.createElement('div')
        div.className = 'card';
        div.innerHTML = `<div class="block"><span>ID:</span>${informElement.id}</div>
        <div class="block"><span>Name:</span>${informElement.name}</div>
        <button onclick="goToDetails(${informElement.id})">Details</button>`
        const wrapper = document.getElementsByClassName('wrapper')[0]
        wrapper.appendChild(div)
    }
}
)
const goToDetails = (id) => {
    window.location.href = `user-details.html?id=${id}`
}
