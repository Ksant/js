
// Только пример. Не работает задесь. Из проекта обучения fooddish.
// Перенес сюда просто чтобы не стирать ибо там способ отправки данных был заменен на новый.
// function postDataOld(form) {
//     form.addEventListener('submit', function(e) {
//         e.preventDefault();

//         const statusMessage = document.createElement('img');
//         statusMessage.src = message.loading;
//         statusMessage.style.cssText = `
//         display:block;
//         margin:0 auto;
//         `;
//         form.insertAdjacentElement('afterend', statusMessage);

//         const r = new XMLHttpRequest();
//         r.open('POST', 'server.php');
//         // При отправке данных в формате формы, следующую строку писать нельзя, т.к. это значение по умолчанию.
//         //r.setRequestHeader('Content-type', 'multipart/form-data');

//         r.setRequestHeader('Content-type', 'application/json');

//         // При помощи специального объекта "FormData" получаем все данные формы.
//         // Без него придется их всех перебирвать и получать вручную.
//         // ВАЖНО!!! для правильной работы объекта, необходимо, чтобы у каждого элемента
//         // инпута формы был атрибут name.
//         const formData = new  FormData(form);

//         // Для преобразования FormData в json применяется следующая манипуляция.
//         const object = {};
//         formData.forEach(function (value,key) {
//             object[key] = value;
//         });
//         const json = JSON.stringify(object);
//         r.send(json);

//        // r.send(formData);
//         r.addEventListener('load', () => {
//             if (r.status === 200) {
//                 console.log(r.response);
//                 showThanksModal(message.success);
//                 form.reset();
//                 statusMessage.remove();
//             } else {
//                 showThanksModal(message.failure);
//             }
//         });
//     });
// }