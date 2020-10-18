let text = document.querySelector('.message');
let sendButton = document.querySelector('.send-button')
// первоначальная очистка и запрет отправки

text.textContent = '';
sendButton.disabled = true; 
sendButton.style.cursor = 'not-allowed';

// отслеживаем ввод
text.oninput = function ()
{
    if (text.value.length > 200 || text.value.length < 10) {
        text.classList.add('warning');
        sendButton.disabled = true; 
        sendButton.style.cursor = 'not-allowed';
        // console.log (text.value.length);
        } else {
            text.classList.remove('warning');
            sendButton.disabled = false; 
        // console.log (text.value.length);
        sendButton.style.cursor = 'pointer';
        }
}