document.getElementById('text-area').addEventListener('paste', e => e.preventDefault())
var vid = document.getElementById("playAudio");
vid.volume = 0.3;
function checkpass() {
    let password = document.getElementById('text').value
    if (password === '8+6+3+2') {
        removeAfterSuccess()
        var list = document.createElement('div');
        list.innerHTML = `
        <p class="success">🥳Câu trả lời hoàn toàn chính xác🥳</p>
        <p class="wish">Đối với nam giới, bản thân người phụ nữ khi sinh ra đã là một bông hoa xinh đẹp. Vì thế, nhân ngày 20/10 hôm nay, anh
            em ITMO xin thay mặt cho cánh đàn ông để gửi đến các chị em lời chúc, chúc các chị em mãi luôn xinh đẹp, trẻ trung hồn
            nhiên, thành công trong cuộc sống. </p>
        <p class="gift-text">❤️❤️❤️Đây là món quà mà anh em ITMO đã rất tâm huyết để chuẩn bị cho chị em ITMO. Nhanh tay click vào để nhận được món quà đặc biệt này nhé ❤️❤️❤️</p>
        <a href="https://www.youtube.com/watch?v=M4XGTqBuook"><img src="./Red-gift-box.png" class="gift"></a>
        `;
        document.getElementById("result").appendChild(list)
    } else {
        addNotice()
        setTimeout(removeNotice, 2000)
    }
}
function addNotice() {
    var list = document.createElement('div');
    list.innerHTML = '<div id="notice">Oops, có vẻ như đáp án không chính xác rồi :( hãy thử lại nhé</div>';
    document.getElementById("result").appendChild(list)
}
function removeNotice() {
    const notice = document.getElementById('notice');
    notice.remove()
}

function removeAfterSuccess() {
    const success = document.getElementById('befor-success')
    success.remove()
}
