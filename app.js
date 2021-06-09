let budget = prompt('所持金を入力してください');
budget = parseFloat(budget);

let isHungry = confirm('君、お腹すいてるん？');

if (budget >= 1500 && isHungry) {
    alert('ピザを届けてやるよ。');
} else if (budget >= 500) {
    alert('金が無いならポテトを食いな。');
} else {
    alert('貴様に与える食いもんは無ぇ');
}