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
let id = new URL(window.location.href).searchParams.get('id')
console.log(id)
let post = new URL(window.location.href).searchParams.get('post')
console.log(post)
if (post){
    fetch(`https://jsonplaceholder.typicode.com/posts/${post}`)
        .then(res =>res.json())
        .then(users => {
            let div = document.createElement('div')
            div.innerText = rec(users,'',true)
            document.body.append(div)
            fetch(`https://jsonplaceholder.typicode.com/posts/${post}/comments`)
    .then(res => res.json())
    .then(comments => {
            for (const comment of comments) {
                let block = document.createElement('div');
                let id = document.createElement('p');
                let name =  document.createElement('p');
                let email= document.createElement('p');
                let body= document.createElement('p');

                block.className = 'comment-block';

                id.innerText = `ID: ${comment.id}`;
                name.innerText = `Name: ${comment.name}`;
                email.innerText = `Email: ${comment.email}`;
                body.innerText = `Body: ${comment.body}`;

                block.appendChild(id);
                block.appendChild(name);
                block.appendChild(email);
                block.appendChild(body);
                document.body.appendChild(block);
                console.log();
            }
        }
    )
        })
}
else if (id){
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(res =>res.json())
        .then(users => {
            let div = document.createElement('div')
            div.innerText = rec(users)
            const mainDivBody = document.getElementsByTagName('main')[0];
            mainDivBody.append(div)
            let button = document.createElement('button');
            button.innerText = "Post of current user"
            div.append(button)
            let post = new URL(window.location.href).searchParams.get('post')
            const main = document.getElementsByTagName('span')[0];
            button.onclick = () => {
                if (!main.innerHTML) {
                    fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
                        .then(res => res.json())
                        .then(users => {
                            for (const informElement of users) {
                                let user = document.createElement('div');
                                user.innerText = `${informElement.id} - ${informElement.title}`
                                let button = document.createElement('button')
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

