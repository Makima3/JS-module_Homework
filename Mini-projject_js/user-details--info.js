// <!--На странице user-details.html:-->
// <!--4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули-->
// <!--5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера-->
// <!--(для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)-->
// <!--6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html, котра має детальну інфу про поточний пост.-->
// На странице post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
const rec =(arg,res='', sep=false) =>{
    for (const argKey in arg) {
        if (typeof arg[argKey] !== 'object'){
            res+= `${argKey}-${arg[argKey]}\n`
        }
        else {
            sep?res += `----\n`:res+=`${argKey}:\n`
            res=rec(arg[argKey],res)
        }
    }
    return res
}
const id = new URL(window.location.href).searchParams.get('id')
console.log(id)
const post = new URL(window.location.href).searchParams.get('post')
console.log(post)
if (post){
    fetch(`https://jsonplaceholder.typicode.com/posts/${post}`)
        .then(res =>res.json())
        .then(users => {
            const div = document.createElement('div')
            const mainUser = document.getElementsByTagName('span')[0];
            div.innerText = rec(users,'',true)
            div.innerHTML = `<div class="objPost">
            <h3>Posts information</h3>
            <p><b>User ID:</b> ${users.userId}</p>
            <p><b>ID:</b> ${users.id}</p>
            <p><b>Title:</b> ${users.title}</p>
            <p><b>Body:</b> ${users.body}</p>
            </div>`
            mainUser.append(div)
            fetch(`https://jsonplaceholder.typicode.com/posts/${post}/comments`)
                .then(res => res.json())
                .then(comments => {
                        for (const comment of comments) {
                            const postComments = document.createElement('div')
                            const mainBody = document.getElementsByTagName('main')[0];
                            postComments.innerHTML = `
                            <div class="commentsPost">
                            <p class="com"><b>ID:</b> ${comment.id}</p>
                            <p class="com"><b>Post Id:</b> ${comment.postId}</p>
                            <p class="com"><b>Name:</b> ${comment.name}</p>
                            <p class="com"><b>Email:</b> ${comment.email}</p>
                            <p class="com"><b>Body:</b> ${comment.body}</p>
                            </div>`
                            mainBody.appendChild(postComments);
                        }
                    }
                )
        })
}
else if (id){
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(res =>res.json())
        .then(users => {
            const div = document.createElement('div')
            div.innerText = rec(users)
            const mainDivBody = document.getElementsByTagName('main')[0];
            div.innerHTML = `
                    <div class="infо"> 
                    <h3>Users basic information:</h3>
                    <p><b>ID:</b> ${users.id}</p>
                    <p><b>Name:</b> ${users.name}</p>
                    <p><b>Email:</b> ${users.email}</p>
                    <p><b>Phone:</b> ${users.phone}</p>
                    <p><b>Website:</b> ${users.website}</p>
                    </div>
                    <div class="adress">
                    <h3>Address:</h3>
                    <p><b>City:</b> ${users.address.city}</p>
                    <p><b>Street:</b> ${users.address.street}</p>
                    <p><b>Suite:</b> ${users.address.suite}</p>
                    <p><b>ZipCode:</b> ${users.address.zipcode}</p>
                    </div>
                    <div class="geo">
                    <h3>GEO:</h3>
                     <p><b>Lat:</b> ${users.address.geo.lat}</p>
                     <p><b>Lng:</b> ${users.address.geo.lng}</p>
                     </div>
                     <div class="company">
                     <h3>Company:</h3>
                     <p><b>Company:</b> ${users.company.name}</p>
                     <p><b>Catch Phrase:</b> ${users.company.catchPhrase}</p>
                     <p><b>Bs:</b> ${users.company.bs}</p>
                     </div>`

            mainDivBody.append(div)

            const button = document.createElement('button');
            button.className ='post'
            button.innerText = "Post of current user"
            div.append(button)
            const post = new URL(window.location.href).searchParams.get('post')
            const main = document.getElementsByTagName('span')[0];
            button.onclick = () => {
                if (!main.innerHTML) {
                    fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
                        .then(res => res.json())
                        .then(users => {
                            for (const informElement of users) {
                                const user = document.createElement('div')
                                user.innerHTML = `
                                <div class="tab">
                                    <div class="postsTitle">
                                        <p class="id"><b>${informElement.id}: </b></p> 
                                       <div class="title"><p>${informElement.title}</p></div> 
                                    </div>
                                </div>`
                                const button = document.createElement('button')
                                button.className ='detail'
                                button.innerText = 'Details'
                                main.appendChild(user)
                                user.appendChild(button)
                                button.onclick = () =>
                                    window.location.href = `postdet.html?post=${informElement.id}`
                            }
                        })

                } else {
                    main.innerHTML = ''
                }
            }

        })
}

