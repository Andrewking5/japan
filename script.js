// 導航欄功能
document.addEventListener('DOMContentLoaded', function() {
    // 漢堡選單切換
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // 平滑滾動導航
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 70; // 考慮固定導航欄高度
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 導航欄滾動效果
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        }
    });

    // 預定按鈕功能
    const bookButtons = document.querySelectorAll('.btn-book');
    bookButtons.forEach(button => {
        button.addEventListener('click', function() {
            const bookingItem = this.closest('.booking-item');
            const bookingName = bookingItem.querySelector('h4').textContent;
            
            // 顯示預定確認對話框
            showBookingModal(bookingName);
        });
    });

    // 地圖按鈕功能
    const mapButtons = document.querySelectorAll('.btn-map');
    mapButtons.forEach(button => {
        button.addEventListener('click', function() {
            const mapCard = this.closest('.map-card');
            const location = mapCard.querySelector('p').textContent;
            
            // 開啟Google地圖
            openGoogleMaps(location);
        });
    });

    // 進度條動畫
    animateProgressBars();

    // 滾動動畫
    initScrollAnimations();
});

// 顯示預定確認對話框
function showBookingModal(bookingName) {
    const modal = document.createElement('div');
    modal.className = 'booking-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h3>預定確認</h3>
                <button class="close-modal">&times;</button>
            </div>
            <div class="modal-body">
                <p>您即將預定：<strong>${bookingName}</strong></p>
                <p>請選擇預定方式：</p>
                <div class="booking-options">
                    <button class="booking-option" data-platform="official">官方網站</button>
                    <button class="booking-option" data-platform="klook">Klook</button>
                    <button class="booking-option" data-platform="kkday">KKday</button>
                </div>
            </div>
        </div>
    `;

    // 添加樣式
    const style = document.createElement('style');
    style.textContent = `
        .booking-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 10000;
            animation: fadeIn 0.3s ease;
        }
        
        .modal-content {
            background: white;
            border-radius: 20px;
            padding: 30px;
            max-width: 500px;
            width: 90%;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
            animation: slideIn 0.3s ease;
        }
        
        .modal-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;
        }
        
        .modal-header h3 {
            color: #333;
            margin: 0;
        }
        
        .close-modal {
            background: none;
            border: none;
            font-size: 2rem;
            cursor: pointer;
            color: #666;
            padding: 0;
            width: 30px;
            height: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .modal-body p {
            margin-bottom: 15px;
            color: #666;
        }
        
        .booking-options {
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
        }
        
        .booking-option {
            background: linear-gradient(135deg, #667eea, #764ba2);
            color: white;
            border: none;
            padding: 12px 20px;
            border-radius: 25px;
            cursor: pointer;
            font-weight: 500;
            transition: transform 0.3s ease;
        }
        
        .booking-option:hover {
            transform: translateY(-2px);
        }
        
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        
        @keyframes slideIn {
            from { transform: translateY(-50px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }
    `;

    document.head.appendChild(style);
    document.body.appendChild(modal);

    // 關閉對話框
    const closeBtn = modal.querySelector('.close-modal');
    closeBtn.addEventListener('click', () => {
        document.body.removeChild(modal);
    });

    // 點擊背景關閉
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            document.body.removeChild(modal);
        }
    });

    // 預定選項點擊
    const bookingOptions = modal.querySelectorAll('.booking-option');
    bookingOptions.forEach(option => {
        option.addEventListener('click', function() {
            const platform = this.getAttribute('data-platform');
            handleBooking(bookingName, platform);
            document.body.removeChild(modal);
        });
    });
}

// 處理預定
function handleBooking(bookingName, platform) {
    const bookingUrls = {
        'official': {
            'OASIS NANIWA': 'https://www.booking.com',
            'JR關西地區鐵路周遊券': 'https://www.westjr.co.jp/global/tc/ticket/pass/kansai/',
            '大阪環球影城': 'https://www.usj.co.jp/web/zh-tw/tickets',
            '嵯峨野觀光小火車': 'https://www.sagano-kanko.co.jp/en/',
            '貴桑桑燒肉': 'https://www.google.com/search?q=貴桑桑燒肉+預定',
            '中村藤吉': 'https://www.tokichi.jp/'
        },
        'klook': {
            'OASIS NANIWA': 'https://www.klook.com/zh-TW/search/?query=OASIS%20NANIWA',
            'JR關西地區鐵路周遊券': 'https://www.klook.com/zh-TW/search/?query=JR%20%E9%97%9C%E8%A5%BF%20%E5%91%A8%E9%81%8A%E5%88%B8',
            '大阪環球影城': 'https://www.klook.com/zh-TW/search/?query=%E6%97%A5%E6%9C%AC%E7%92%B0%E7%90%83%E5%BD%B1%E5%9F%8E%20%E9%96%80%E7%A5%A8',
            '嵯峨野觀光小火車': 'https://www.klook.com/zh-TW/search/?query=%E5%B5%90%E5%B1%B1%20%E5%B0%8F%E7%81%AB%E8%BB%8A',
            '貴桑桑燒肉': 'https://www.klook.com/zh-TW/search/?query=%E5%A4%A7%E9%98%AA%20%E7%87%92%E8%82%89%20%E8%A8%82%E4%BD%8D',
            '中村藤吉': 'https://www.klook.com/zh-TW/search/?query=%E4%B8%AD%E6%9D%91%E8%97%A4%E5%90%89%20%E5%AE%87%E6%B2%BB'
        },
        'kkday': {
            'OASIS NANIWA': 'https://www.kkday.com/zh-tw/product/search?keyword=OASIS%20NANIWA',
            'JR關西地區鐵路周遊券': 'https://www.kkday.com/zh-tw/product/search?keyword=JR%20%E9%97%9C%E8%A5%BF%20%E5%91%A8%E9%81%8A%E5%88%B8',
            '大阪環球影城': 'https://www.kkday.com/zh-tw/product/search?keyword=%E6%97%A5%E6%9C%AC%E7%92%B0%E7%90%83%E5%BD%B1%E5%9F%8E%20%E9%96%80%E7%A5%A8',
            '嵯峨野觀光小火車': 'https://www.kkday.com/zh-tw/product/search?keyword=%E5%B5%90%E5%B1%B1%20%E5%B0%8F%E7%81%AB%E8%BB%8A',
            '貴桑桑燒肉': 'https://www.kkday.com/zh-tw/product/search?keyword=%E5%A4%A7%E9%98%AA%20%E7%87%92%E8%82%89%20%E8%A8%82%E4%BD%8D',
            '中村藤吉': 'https://www.kkday.com/zh-tw/product/search?keyword=%E4%B8%AD%E6%9D%91%E8%97%A4%E5%90%89%20%E5%AE%87%E6%B2%BB'
        }
    };

    const url = bookingUrls[platform]?.[bookingName] || 'https://www.google.com';
    window.open(url, '_blank');
}

// 開啟Google地圖
function openGoogleMaps(location) {
    const encodedLocation = encodeURIComponent(location);
    const mapUrl = `https://www.google.com/maps/search/${encodedLocation}`;
    window.open(mapUrl, '_blank');
}

// 進度條動畫
function animateProgressBars() {
    const progressBars = document.querySelectorAll('.progress');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target;
                const targetWidth = progressBar.style.width;
                progressBar.style.width = '0%';
                
                setTimeout(() => {
                    progressBar.style.width = targetWidth;
                }, 300);
                
                observer.unobserve(progressBar);
            }
        });
    });

    progressBars.forEach(bar => {
        observer.observe(bar);
    });
}

// 滾動動畫
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.overview-card, .timeline-item, .booking-category, .budget-card, .map-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
}

// 預算追蹤功能
function updateBudget(amount) {
    const budgetAmount = document.querySelector('.budget-amount');
    const progressBar = document.querySelector('.budget-progress .progress');
    const spentText = document.querySelector('.budget-progress span');
    
    const currentSpent = parseInt(spentText.textContent.match(/\d+/)[0]);
    const newSpent = currentSpent + amount;
    const totalBudget = 398900;
    const percentage = (newSpent / totalBudget) * 100;
    
    spentText.textContent = `已支出: ¥${newSpent.toLocaleString()}`;
    progressBar.style.width = `${Math.min(percentage, 100)}%`;
    
    if (percentage > 100) {
        progressBar.style.background = '#dc3545';
    }
}

// 倒數計時功能
function initCountdown() {
    const targetDate = new Date('2025-09-30T00:00:00');
    
    function updateCountdown() {
        const now = new Date();
        const difference = targetDate - now;
        
        if (difference > 0) {
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            
            // 可以在頁面上顯示倒數計時
            console.log(`距離出發還有: ${days}天 ${hours}小時 ${minutes}分鐘`);
        }
    }
    
    updateCountdown();
    setInterval(updateCountdown, 60000); // 每分鐘更新一次
}

// 初始化倒數計時
initCountdown();

// 鍵盤快捷鍵
document.addEventListener('keydown', function(e) {
    // Ctrl/Cmd + K 快速搜尋
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        showQuickSearch();
    }
    
    // ESC 關閉對話框
    if (e.key === 'Escape') {
        const modal = document.querySelector('.booking-modal');
        if (modal) {
            document.body.removeChild(modal);
        }
    }
});

// 快速搜尋功能
function showQuickSearch() {
    const searchModal = document.createElement('div');
    searchModal.className = 'search-modal';
    searchModal.innerHTML = `
        <div class="search-content">
            <input type="text" placeholder="搜尋行程項目..." class="search-input">
            <div class="search-results"></div>
        </div>
    `;

    const style = document.createElement('style');
    style.textContent = `
        .search-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.8);
            display: flex;
            justify-content: center;
            align-items: flex-start;
            padding-top: 100px;
            z-index: 10000;
        }
        
        .search-content {
            background: white;
            border-radius: 15px;
            padding: 20px;
            width: 90%;
            max-width: 600px;
        }
        
        .search-input {
            width: 100%;
            padding: 15px;
            border: 2px solid #667eea;
            border-radius: 10px;
            font-size: 1.1rem;
            outline: none;
        }
        
        .search-results {
            margin-top: 20px;
        }
    `;

    document.head.appendChild(style);
    document.body.appendChild(searchModal);

    const searchInput = searchModal.querySelector('.search-input');
    searchInput.focus();

    searchInput.addEventListener('input', function() {
        const query = this.value.toLowerCase();
        const results = searchContent(query);
        displaySearchResults(results, searchModal.querySelector('.search-results'));
    });

    searchModal.addEventListener('click', (e) => {
        if (e.target === searchModal) {
            document.body.removeChild(searchModal);
        }
    });
}

// 搜尋內容
function searchContent(query) {
    const results = [];
    const elements = document.querySelectorAll('h3, h4, .activity, .booking-info h4');
    
    elements.forEach(element => {
        const text = element.textContent.toLowerCase();
        if (text.includes(query)) {
            results.push({
                text: element.textContent,
                element: element
            });
        }
    });
    
    return results;
}

// 顯示搜尋結果
function displaySearchResults(results, container) {
    container.innerHTML = '';
    
    if (results.length === 0) {
        container.innerHTML = '<p>沒有找到相關結果</p>';
        return;
    }
    
    results.forEach(result => {
        const resultItem = document.createElement('div');
        resultItem.className = 'search-result-item';
        resultItem.textContent = result.text;
        resultItem.style.padding = '10px';
        resultItem.style.borderBottom = '1px solid #eee';
        resultItem.style.cursor = 'pointer';
        
        resultItem.addEventListener('click', () => {
            result.element.scrollIntoView({ behavior: 'smooth' });
            document.body.removeChild(document.querySelector('.search-modal'));
        });
        
        container.appendChild(resultItem);
    });
}

