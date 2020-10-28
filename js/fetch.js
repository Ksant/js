"use strict";

const resDiv = document.querySelector('.fetch_get');
const postDiv = document.querySelector('.fetch_post');

fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => {
        console.log(json);
        resDiv.innerHTML = `
        <div>userid = ${json.userId}</div>
        <div>title = ${json.title}</div>
        `;
    });


    fetch('https://jsonplaceholder.typicode.com/posts', {
        method:'POST',
        body: JSON.stringify({name: 'MyPost'}),
        headers: {
            'Content-type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(json => {
          console.log(json);
          postDiv.innerHTML = `
          <div>name = ${json.name}</div>
          <div>id = ${json.id}</div>
          `;
      });
