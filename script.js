// DOM要素の取得
document.addEventListener('DOMContentLoaded', function() {
    // ペットボタンの設定
    const petButtons = {
        'jiji-btn': {
            name: 'jiji',
            platform: 'YouTube',
            url: 'https://youtube.com/@rijuofficial411?si=qCLspfY-gXNUDXcb'
        },
        'kiki-btn': {
            name: 'kiki',
            platform: 'X (Twitter)',
            url: 'https://x.com/riju__official?s=11&t=yLh_ZnGHjfm52-7EENFqIA'
        },
        'luna-btn': {
            name: 'luna',
            platform: 'Instagram',
            url: 'https://www.instagram.com/dal.dal.official?igsh=MzFtM2xlYW93MGlw&utm_source=qr'
        },
        'bran-btn': {
            name: 'bran',
            platform: 'TikTok',
            url: 'https://www.tiktok.com/@dal.dal.official?_t=ZS-8x1iXuoAJmM&_r=1'
        },
        'dal-btn': {
            name: 'dal',
            platform: 'Tickets On Sale',
            url: 'https://docs.google.com/forms/d/e/1FAIpQLSdUQNHDkktx9ux4t1a-atjpZBD_bZWUnOF0SbDmOKupy9O-zg/viewform?usp=dialog'
        }
    };

    // 各ボタンにクリックイベントを追加
    Object.keys(petButtons).forEach(buttonId => {
        const button = document.getElementById(buttonId);
        const buttonData = petButtons[buttonId];
        
        if (button) {
            button.addEventListener('click', function() {
                // クリック効果のアニメーション
                button.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    button.style.transform = '';
                }, 150);

                // 少し遅延してからページを開く（アニメーション効果のため）
                setTimeout(() => {
                    window.open(buttonData.url, '_blank');
                }, 200);

                // コンソールにログ出力（デバッグ用）
                console.log(`${buttonData.name}ボタンがクリックされました - ${buttonData.platform}へ移動`);
            });

            // ホバー効果の追加
            button.addEventListener('mouseenter', function() {
                const img = button.querySelector('img');
                if (img) {
                    img.style.filter = 'brightness(1.2) contrast(1.1)';
                }
            });

            button.addEventListener('mouseleave', function() {
                const img = button.querySelector('img');
                if (img) {
                    img.style.filter = '';
                }
            });
        }
    });
});

// スムーズスクロール機能
function smoothScroll(target) {
    const element = document.querySelector(target);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// ページロード時のフェードインアニメーション
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease-in-out';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// レスポンシブ対応：画面サイズ変更時の処理
window.addEventListener('resize', function() {
    // 必要に応じてレイアウトの調整を行う
    console.log('画面サイズが変更されました');
});

