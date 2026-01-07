// Swiper初期化
document.addEventListener('DOMContentLoaded', function() {
    // 画像データベース
    const imageDatabase = {
        park: [
            'images/KIMG_0627.jpg',
            'images/KIMG_0799.jpeg',
            'images/KIMG_0588.jpg',
            'images/KIMG_0729.jpg',
            'images/KIMG_0965.jpeg',
            'images/KIMG_0976.jpeg'
        ],
        shopping: [
            'images/RIMG_0787.jpeg',
            'images/i.jpg',
            'images/square.png'
        ],
        gourmet: [
            'images/u.jpg',
            'images/GIMG_2052.jpeg',
            'images/GIMG_2056.jpeg',
            'images/RIMG_0523.jpg',
            'images/GIMG_2021.jpeg',
            'images/GIMG_2018 3.jpeg'
        ],
        history: [
            'images/BIMG_0601.jpg',
            'images/IMG_0994.jpeg',
            'images/BIMG_0683.jpeg',
            'images/BIMG_0633.jpeg',
            'images/BIMG_0605.jpg',
            'images/BIMG_0812.jpeg'
        ],
        facility: [
            'images/RIMG_0499.jpg',
            'images/RIMG_0502.jpg',
            'images/RIMG_0506.jpg',
            'images/RIMG_0510.jpg'
        ]
    };

    // ランダム画像を選択する関数
    function getRandomImages(images, count = 4) {
        const shuffled = [...images].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    }

    // カテゴリーのマッピング
    const categoryMap = {
        'park.html': 'park',
        'shopping.html': 'shopping',
        'gourmet.html': 'gourmet',
        'history.html': 'history',
        'facility.html': 'facility'
    };

    // スポットスライダーのカードを処理
    const spotsCards = document.querySelectorAll('.spotsSwiper .card');
    spotsCards.forEach((card) => {
        const link = card.closest('a');
        if (link) {
            const href = link.getAttribute('href');
            const category = categoryMap[href];
            
            if (category && imageDatabase[category]) {
                // ランダムに3つの画像を選択
                const randomImages = getRandomImages(imageDatabase[category], 3);
                
                // スライダーのimgタグを更新
                const slides = card.querySelectorAll('.swiper-slide img');
                slides.forEach((img, index) => {
                    if (randomImages[index]) {
                        img.src = randomImages[index];
                    }
                });
            }
        }
    });

    // カード内のスライダーを初期化
    const cardSwipers = document.querySelectorAll('.cardSwiper');
    cardSwipers.forEach((element) => {
        new Swiper(element, {
            loop: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            pagination: {
                el: element.querySelector('.swiper-pagination'),
                clickable: true,
            },
            effect: 'fade',
            fadeEffect: {
                crossFade: true
            },
            // クリックで次へ
            on: {
                click: function() {
                    this.slideNext();
                }
            }
        });
    });

    // メインのスポットスライダーを初期化
    const swiper = new Swiper('.spotsSwiper', {
        // スライド設定
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        // ナビゲーションボタン
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        // レスポンシブ設定
        breakpoints: {
            600: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1025: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
        },
    });
});
