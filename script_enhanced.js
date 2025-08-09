// 景點資料庫
const locationDatabase = {
    '關西機場': {
        type: 'airport',
        title: '關西國際機場',
        description: '日本關西地區的主要國際機場，位於大阪灣人工島上。',
        details: {
            '交通': 'HARUKA特急列車、南海電鐵、機場巴士',
            '設施': '免稅店、餐廳、行李寄存、貨幣兌換',
            '注意事項': '提前2小時辦理登機手續，注意行李重量限制'
        },
        alternatives: ['伊丹機場', '神戶機場'],
        tips: ['建議提前3小時到達機場', '記得退稅', '準備好護照和登機證']
    },
    '香料牛逼特色嘎李': {
        type: 'restaurant',
        title: '香料牛逼特色嘎李',
        description: '大阪梅田地區的特色餐廳，以獨特的香料料理聞名。',
        details: {
            '營業時間': '11:00-22:00',
            '價格範圍': '¥1,000-3,000/人',
            '推薦菜色': '特色香料料理、咖哩飯、飲品',
            '預約': '建議提前預約，現場排隊約需1-2小時'
        },
        alternatives: ['烏龍麵店', '大阪燒店', '拉麵店'],
        tips: ['建議避開用餐高峰', '可以外帶', '注意辣度選擇']
    },
    '大丸梅田店寶可夢任天堂': {
        type: 'shopping',
        title: '大丸梅田店寶可夢任天堂專賣店',
        description: '位於大丸百貨梅田店的寶可夢和任天堂官方專賣店。',
        details: {
            '營業時間': '10:00-20:00',
            '商品': '寶可夢周邊、任天堂遊戲、限定商品',
            '退稅': '可辦理退稅，記得帶護照',
            '位置': '大丸百貨梅田店內'
        },
        alternatives: ['寶可夢中心大阪', '任天堂直營店'],
        tips: ['建議先查看限定商品', '準備好退稅文件', '注意商品保固']
    },
    '貴桑桑燒肉': {
        type: 'restaurant',
        title: '貴桑桑燒肉',
        description: '大阪梅田地區的高級燒肉餐廳，以優質和牛聞名。',
        details: {
            '營業時間': '17:00-23:00',
            '價格範圍': '¥5,000-15,000/人',
            '預約': '必須提前預約，7月開始接受預訂',
            '特色': 'A5和牛、特製醬料、專業服務'
        },
        alternatives: ['敘敘苑', '松阪牛燒肉', '其他燒肉店'],
        tips: ['建議提前1-2個月預約', '準備好預算', '注意用餐禮儀']
    },
    '梅田天空大樓': {
        type: 'attraction',
        title: '梅田天空大樓',
        description: '大阪地標建築，擁有360度觀景台，可俯瞰整個大阪市區。',
        details: {
            '營業時間': '9:00-22:30',
            '門票': '¥1,500/成人',
            '最佳時間': '黃昏時分，可欣賞日落和夜景',
            '交通': '從大阪站中央北口步行約7分鐘'
        },
        alternatives: ['阿倍野Harukas', '通天閣', '大阪城天守閣'],
        tips: ['建議黃昏時前往', '準備相機', '注意天氣狀況']
    },
    '環球影城': {
        type: 'attraction',
        title: '大阪環球影城',
        description: '世界知名的主題樂園，擁有哈利波特、超級任天堂世界等熱門園區。',
        details: {
            '營業時間': '8:00-21:00（季節性調整）',
            '門票': '¥8,200-9,800/成人',
            '快速通關': '建議購買Express Pass',
            '熱門設施': '哈利波特禁忌之旅、瑪利歐賽車、飛天翼龍'
        },
        alternatives: ['大阪海遊館', '天保山摩天輪', '大阪城公園'],
        tips: ['建議開園前30分鐘到達', '下載官方APP', '記得退稅']
    },
    '烏龍麵棒大阪店': {
        type: 'restaurant',
        title: '烏龍麵棒大阪店',
        description: '大阪知名的烏龍麵連鎖店，以彈牙的麵條和濃郁的湯頭聞名。',
        details: {
            '營業時間': '11:00-22:00',
            '價格範圍': '¥500-1,500/人',
            '特色': '手工烏龍麵、天婦羅、溫泉蛋',
            '排隊': '用餐高峰需排隊，建議避開'
        },
        alternatives: ['大阪燒店', '拉麵店', '居酒屋'],
        tips: ['可以選擇麵條硬度', '建議加點天婦羅', '注意湯頭鹹度']
    },
    '心齋橋': {
        type: 'shopping',
        title: '心齋橋商店街',
        description: '大阪最著名的購物區，擁有眾多商店、餐廳和娛樂設施。',
        details: {
            '營業時間': '各店鋪不同，一般10:00-21:00',
            '特色': '藥妝店、服飾店、美食街、娛樂設施',
            '退稅': '多數商店可辦理退稅',
            '交通': '地鐵心齋橋站、難波站'
        },
        alternatives: ['難波地下街', '美國村', '道頓堀'],
        tips: ['建議分區購物', '準備好退稅文件', '注意營業時間']
    },
    '伏見稻荷大社': {
        type: 'attraction',
        title: '伏見稻荷大社',
        description: '京都最著名的神社之一，以千本鳥居聞名於世。',
        details: {
            '營業時間': '24小時開放',
            '門票': '免費',
            '最佳時間': '清晨或傍晚，人潮較少',
            '交通': 'JR稻荷站步行5分鐘'
        },
        alternatives: ['清水寺', '金閣寺', '銀閣寺'],
        tips: ['建議清晨前往', '準備好相機', '注意參拜禮儀']
    },
    '清水寺': {
        type: 'attraction',
        title: '清水寺',
        description: '京都最古老的寺院之一，以清水舞台和櫻花聞名。',
        details: {
            '營業時間': '6:00-18:00',
            '門票': '¥400/成人',
            '特色': '清水舞台、音羽瀑布、櫻花季',
            '交通': '從祇園四条站步行約20分鐘'
        },
        alternatives: ['金閣寺', '銀閣寺', '二条城'],
        tips: ['建議櫻花季前往', '準備好現金', '注意參拜禮儀']
    },
    '錦市場': {
        type: 'shopping',
        title: '錦市場',
        description: '京都的傳統市場，以新鮮食材和傳統小吃聞名。',
        details: {
            '營業時間': '9:00-17:00',
            '特色': '新鮮海鮮、傳統小吃、京都特產',
            '支付': '多數攤位只收現金',
            '交通': '從烏丸站步行5分鐘'
        },
        alternatives: ['黑門市場', '築地市場', '其他當地市場'],
        tips: ['準備好現金', '建議上午前往', '注意衛生']
    },
    '嵐山竹林小徑': {
        type: 'attraction',
        title: '嵐山竹林小徑',
        description: '京都嵐山地區的著名景點，以茂密的竹林小徑聞名。',
        details: {
            '營業時間': '24小時開放',
            '門票': '免費',
            '小火車': '需提前預約嵯峨野トロッコ列車',
            '最佳時間': '清晨或傍晚，光線最佳'
        },
        alternatives: ['天龍寺', '野宮神社', '渡月橋'],
        tips: ['建議清晨前往', '準備好相機', '注意小火車預約']
    },
    '嵐山よしむら': {
        type: 'restaurant',
        title: '嵐山 よしむら（蕎麥）',
        description: '嵐山人氣蕎麥名店，臨河景觀佳，午餐尖峰常需候位。',
        details: {
            '營業時間': '11:00-20:00（依季節調整）',
            '價格範圍': '¥1,500-2,500/人',
            '預約': '午餐尖峰建議預約或提早到場',
            '位置': '嵐山渡月橋周邊'
        },
        alternatives: ['天龍寺周邊餐廳', '中村藤吉（嵐山分店，如有）'],
        tips: ['高峰時段等候較久', '視野佳的座位較熱門', '備好現金以防部分支付限制']
    },
    '平等院鳳凰堂': {
        type: 'attraction',
        title: '平等院鳳凰堂',
        description: '世界文化遺產，以鳳凰堂建築和庭園聞名。',
        details: {
            '營業時間': '8:30-17:30',
            '門票': '¥600/成人',
            '特色': '鳳凰堂、鳳翔館、庭園',
            '最佳時間': '上午，光線最佳'
        },
        alternatives: ['宇治神社', '宇治上神社', '其他寺院'],
        tips: ['建議上午前往', '準備好現金', '注意參觀禮儀']
    },
    '黑門市場': {
        type: 'shopping',
        title: '黑門市場',
        description: '大阪著名的傳統市場，以新鮮海鮮和當地美食聞名。',
        details: {
            '營業時間': '9:00-17:00',
            '特色': '新鮮海鮮、和牛、當地小吃',
            '價格': '比一般超市稍貴，但品質優良',
            '交通': '地鐵日本橋站步行5分鐘'
        },
        alternatives: ['錦市場', '築地市場', '其他當地市場'],
        tips: ['建議上午前往', '準備好現金', '注意衛生']
    },
    '大阪城': {
        type: 'attraction',
        title: '大阪城公園／天守閣',
        description: '大阪代表性景點，周邊公園散步、乘坐園區小火車（ロードトレイン）。',
        details: {
            '天守閣門票': '約 ¥600/成人',
            '小火車': '約 ¥300/人，可坐一圈園區',
            '最佳時間': '上午或傍晚，避開正午炎熱',
            '交通': 'JR 大阪環狀線「大阪城公園站」步行可達'
        },
        alternatives: ['梅田天空大樓', '阿倍野Harukas', '通天閣'],
        tips: ['旺季排隊較久', '備水與防曬', '拍照建議廣角鏡頭']
    },
    '臨空城Outlet': {
        type: 'shopping',
        title: '臨空城Premium Outlets',
        description: '關西機場附近的知名Outlet，擁有眾多國際品牌。',
        details: {
            '營業時間': '10:00-20:00',
            '品牌': 'Nike、Adidas、Coach、Gucci等',
            '交通': 'JR關空快速或南海電鐵',
            '退稅': '部分商店可辦理退稅'
        },
        alternatives: ['三井Outlet', '其他Outlet'],
        tips: ['建議預留2-3小時', '準備好退稅文件', '注意機場時間']
    }
};

// 搜尋功能
function searchLocations() {
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');
    const query = searchInput.value.toLowerCase().trim();
    
    if (query === '') {
        searchResults.innerHTML = '<p style="text-align: center; color: #666;">請輸入搜尋關鍵字</p>';
        return;
    }
    
    const results = Object.entries(locationDatabase).filter(([name, data]) => 
        name.toLowerCase().includes(query) || 
        data.title.toLowerCase().includes(query) ||
        data.description.toLowerCase().includes(query)
    );
    
    if (results.length === 0) {
        searchResults.innerHTML = '<p style="text-align: center; color: #666;">沒有找到相關結果</p>';
        return;
    }
    
    searchResults.innerHTML = results.map(([name, data]) => `
        <div class="search-result-item" onclick="showLocationDetail('${name}', '${data.type}')">
            <h3>${data.title}</h3>
            <p>${data.description}</p>
            <small style="color: #667eea;">點擊查看詳情</small>
        </div>
    `).join('');
}

// 顯示景點詳情
function showLocationDetail(locationName, type) {
    const location = locationDatabase[locationName];
    if (!location) {
        alert('找不到該景點資訊\n\n可能原因：\n- 名稱與資料庫不一致（例如有分店/別名）\n- 目前未收錄此地點\n\n已為你使用 Google 地圖開啟搜尋');
        openGoogleMaps(locationName);
        return;
    }
    
    const modal = document.getElementById('locationModal');
    const title = document.getElementById('locationTitle');
    const content = document.getElementById('locationContent');
    
    title.textContent = location.title;
    
    const detailsHtml = Object.entries(location.details).map(([key, value]) => 
        `<li><strong>${key}:</strong> ${value}</li>`
    ).join('');
    
    const alternativesHtml = location.alternatives.map(alt => 
        `<li>${alt}</li>`
    ).join('');
    
    const tipsHtml = location.tips.map(tip => 
        `<li>${tip}</li>`
    ).join('');
    
    content.innerHTML = `
        <div class="location-detail">
            <div class="location-info">
                <h3>景點介紹</h3>
                <p>${location.description}</p>
                
                <div class="location-meta">
                    <h4>詳細資訊</h4>
                    <ul>${detailsHtml}</ul>
                </div>
                
                <div class="location-actions">
                    <button class="action-btn primary" onclick="openGoogleMaps('${locationName}')">
                        <i class="fas fa-map-marker-alt"></i>
                        地圖導航
                    </button>
                    <button class="action-btn secondary" onclick="addToFavorites('${locationName}')">
                        <i class="fas fa-heart"></i>
                        加入收藏
                    </button>
                </div>
            </div>
            
            <div class="location-sidebar">
                <div class="location-meta">
                    <h4>備選方案</h4>
                    <ul>${alternativesHtml}</ul>
                </div>
                
                <div class="location-meta">
                    <h4>實用提醒</h4>
                    <ul>${tipsHtml}</ul>
                </div>
            </div>
        </div>
    `;
    
    modal.style.display = 'block';
}

// 顯示搜尋模態框
function showSearchModal() {
    const modal = document.getElementById('searchModal');
    modal.style.display = 'block';
    document.getElementById('searchInput').focus();
}

// 關閉搜尋模態框
function closeSearchModal() {
    const modal = document.getElementById('searchModal');
    modal.style.display = 'none';
    document.getElementById('searchInput').value = '';
    document.getElementById('searchResults').innerHTML = '';
}

// 關閉景點詳情模態框
function closeLocationModal() {
    const modal = document.getElementById('locationModal');
    modal.style.display = 'none';
}

// 篩選功能
function filterSchedule(category) {
    const timelineItems = document.querySelectorAll('.timeline-item');
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    // 更新按鈕狀態
    filterBtns.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    timelineItems.forEach(item => {
        const itemCategories = item.dataset.category.split(' ');
        if (category === 'all' || itemCategories.includes(category)) {
            item.classList.remove('hidden');
        } else {
            item.classList.add('hidden');
        }
    });
}

// 地圖導航
function openGoogleMaps(locationName) {
    const searchQuery = encodeURIComponent(locationName + ' 日本');
    window.open(`https://www.google.com/maps/search/${searchQuery}`, '_blank');
}

// 加入收藏
function addToFavorites(locationName) {
    let favorites = JSON.parse(localStorage.getItem('tripFavorites') || '[]');
    if (!favorites.includes(locationName)) {
        favorites.push(locationName);
        localStorage.setItem('tripFavorites', JSON.stringify(favorites));
        alert('已加入收藏！');
    } else {
        alert('已在收藏清單中！');
    }
}

// 滾動到指定區段
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// 頁面載入完成後初始化
document.addEventListener('DOMContentLoaded', function() {
    // 篩選按鈕事件
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const category = this.dataset.filter;
            filterSchedule(category);
        });
    });
    
    // 搜尋輸入框事件
    document.getElementById('searchInput').addEventListener('keyup', function(event) {
        if (event.key === 'Enter') {
            searchLocations();
        }
    });
    
    // 模態框點擊外部關閉
    window.addEventListener('click', function(event) {
        const searchModal = document.getElementById('searchModal');
        const locationModal = document.getElementById('locationModal');
        
        if (event.target === searchModal) {
            closeSearchModal();
        }
        if (event.target === locationModal) {
            closeLocationModal();
        }
    });
    
    // 平滑滾動
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
    
    // 漢堡選單
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }
    
    // 導航欄滾動效果
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        }
    });
    
    // 動畫效果
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.timeline-item, .overview-card, .tip-card').forEach(el => {
        observer.observe(el);
    });

    // 初始化預約比價
    initializeBookingComparison();

    // 初始化左右滑動控制
    const bookingListEl = document.getElementById('bookingList');
    const btnPrev = document.getElementById('bookingPrev');
    const btnNext = document.getElementById('bookingNext');
    const scrollStep = () => {
        const width = bookingListEl.clientWidth;
        const isDesktop = window.matchMedia('(min-width: 1024px)').matches;
        const isTablet = window.matchMedia('(min-width: 768px)').matches;
        // 桌面滑兩張、平板 1.5 張、手機 1 張
        const factor = isDesktop ? 0.9 : (isTablet ? 0.75 : 0.85);
        return Math.max(width * factor, 320);
    };
    btnPrev?.addEventListener('click', () => smoothScrollBy(-scrollStep()));
    btnNext?.addEventListener('click', () => smoothScrollBy(scrollStep()));

    function smoothScrollBy(left) {
        bookingListEl.scrollBy({ left, behavior: 'smooth' });
        setTimeout(updateDots, 260);
    }

    // 分頁指示點
    const dotsEl = document.getElementById('bookingDots');
    function buildDots() {
        if (!dotsEl) return;
        const cardCount = bookingListEl.querySelectorAll('.booking-card').length;
        const width = bookingListEl.clientWidth;
        const cardWidth = getCardWidth();
        const perView = Math.max(1, Math.round(width / cardWidth));
        const pageCount = Math.max(1, Math.ceil(cardCount / perView));
        dotsEl.innerHTML = '';
        for (let i = 0; i < pageCount; i++) {
            const dot = document.createElement('span');
            dot.className = 'booking-dot' + (i === getCurrentPage() ? ' active' : '');
            dot.addEventListener('click', () => {
                const targetLeft = i * width;
                bookingListEl.scrollTo({ left: targetLeft, behavior: 'smooth' });
                setTimeout(updateDots, 260);
            });
            dotsEl.appendChild(dot);
        }
    }

    function getCardWidth() {
        const first = bookingListEl.querySelector('.booking-card');
        if (!first) return 360;
        const style = getComputedStyle(first);
        return first.getBoundingClientRect().width + parseFloat(style.marginRight || '16');
    }

    function getCurrentPage() {
        const width = bookingListEl.clientWidth;
        return Math.round(bookingListEl.scrollLeft / width);
    }

    function updateDots() {
        const children = dotsEl?.children || [];
        const page = getCurrentPage();
        for (let i = 0; i < children.length; i++) {
            children[i].classList.toggle('active', i === page);
        }
    }

    buildDots();
    window.addEventListener('resize', () => { buildDots(); updateDots(); });
    bookingListEl.addEventListener('scroll', () => { clearTimeout(window._dotTimer); window._dotTimer = setTimeout(updateDots, 120); });

    // -------- 地圖導航初始化 --------
    setupMapsUI();

    // 滑鼠拖拽（desktop）/ 觸控滑動已原生支援
    let isDown = false; let startX = 0; let scrollLeft = 0;
    bookingListEl.addEventListener('mousedown', (e) => { isDown = true; startX = e.pageX - bookingListEl.offsetLeft; scrollLeft = bookingListEl.scrollLeft; });
    bookingListEl.addEventListener('mouseleave', () => { isDown = false; });
    bookingListEl.addEventListener('mouseup', () => { isDown = false; });
    bookingListEl.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - bookingListEl.offsetLeft;
        const walk = (x - startX) * 1.2;
        bookingListEl.scrollLeft = scrollLeft - walk;
    });

    // Back to top visibility
    const backToTop = document.getElementById('backToTop');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) backToTop.classList.add('show'); else backToTop.classList.remove('show');
    });
});

// ---------------- 預約比價功能 ----------------

const bookingCatalog = [
    {
        id: 'usj-ticket',
        title: '大阪環球影城 一日券',
        note: '建議同時比較快速通關',
        providers: [
            { id: 'official', name: '官方', currency: 'JPY', url: 'https://www.usj.co.jp/web/zh-tw/tickets' },
            { id: 'klook', name: 'Klook', currency: 'TWD', url: 'https://www.klook.com/zh-TW/search/?query=%E6%97%A5%E6%9C%AC%E7%92%B0%E7%90%83%E5%BD%B1%E5%9F%8E%20%E9%96%80%E7%A5%A8' },
            { id: 'kkday', name: 'KKday', currency: 'TWD', url: 'https://www.kkday.com/zh-tw/product/search?keyword=%E6%97%A5%E6%9C%AC%E7%92%B0%E7%90%83%E5%BD%B1%E5%9F%8E%20%E9%96%80%E7%A5%A8' }
        ]
    },
    {
        id: 'usj-express',
        title: 'USJ 快速通關（Express Pass）',
        note: '熱門時段建議必買，選擇適合的等級與園區',
        providers: [
            { id: 'official', name: '官方 Express', currency: 'JPY', url: 'https://www.usj.co.jp/web/zh-tw/tickets/express-pass' },
            { id: 'klook', name: 'Klook', currency: 'TWD', url: 'https://www.klook.com/zh-TW/search/?query=USJ%20%E5%BF%AB%E9%80%9F%E9%80%9A%E9%97%9C' },
            { id: 'kkday', name: 'KKday', currency: 'TWD', url: 'https://www.kkday.com/zh-tw/product/search?keyword=USJ%20%E5%BF%AB%E9%80%9F%E9%80%9A%E9%97%9C' }
        ]
    },
    {
        id: 'sagano-torokko',
        title: '嵯峨野小火車（嵐山トロッコ）',
        note: '熱門班次需提早搶票',
        providers: [
            { id: 'sagano', name: '嵯峨野觀光鐵道 官方', currency: 'JPY', url: 'https://www.sagano-kanko.co.jp/en/' },
            { id: 'klook', name: 'Klook', currency: 'TWD', url: 'https://www.klook.com/zh-TW/search/?query=%E5%B5%90%E5%B1%B1%20%E5%B0%8F%E7%81%AB%E8%BB%8A' },
            { id: 'kkday', name: 'KKday', currency: 'TWD', url: 'https://www.kkday.com/zh-tw/product/search?keyword=%E5%B5%90%E5%B1%B1%20%E5%B0%8F%E7%81%AB%E8%BB%8A' }
        ]
    },
    {
        id: 'jr-west-pass-6d',
        title: 'JR 關西地區鐵路周遊券（6日）',
        note: '含 HARUKA 特急；出發前 1–2 個月購買較佳',
        providers: [
            { id: 'official', name: 'JR 西日本 官方', currency: 'JPY', url: 'https://www.westjr.co.jp/global/tc/ticket/pass/kansai/' },
            { id: 'klook', name: 'Klook', currency: 'TWD', url: 'https://www.klook.com/zh-TW/search/?query=JR%20%E9%97%9C%E8%A5%BF%20%E5%91%A8%E9%81%8A%E5%88%B8' },
            { id: 'kkday', name: 'KKday', currency: 'TWD', url: 'https://www.kkday.com/zh-tw/product/search?keyword=JR%20%E9%97%9C%E8%A5%BF%20%E5%91%A8%E9%81%8A%E5%88%B8' }
        ]
    },
    {
        id: 'icoca-card',
        title: 'ICOCA 交通卡',
        note: '建議每人一張；可站購或線上先買',
        providers: [
            { id: 'official', name: 'JR 官方 ICOCA', currency: 'JPY', url: 'https://www.westjr.co.jp/global/tc/ticket/icoca/' },
            { id: 'klook', name: 'Klook', currency: 'TWD', url: 'https://www.klook.com/zh-TW/search/?query=ICOCA' },
            { id: 'kkday', name: 'KKday', currency: 'TWD', url: 'https://www.kkday.com/zh-tw/product/search?keyword=ICOCA' }
        ]
    },
    {
        id: 'airport-osaka-transfer',
        title: '機場 → 大阪市區 交通方案比價',
        note: 'HARUKA / 南海 Rapi:t / 機場巴士，多方案比較',
        providers: [
            { id: 'haruka', name: 'JR HARUKA 官方', currency: 'JPY', url: 'https://www.westjr.co.jp/global/tc/ticket/overview/' },
            { id: 'nankai', name: '南海電鐵 Rapi:t', currency: 'JPY', url: 'https://www.howto-osaka.com/zh-hant/rapit/' },
            { id: 'bus', name: '關西機場巴士', currency: 'JPY', url: 'https://www.kate.co.jp/tc/' }
        ]
    },
    {
        id: 'yakiniku-dinner',
        title: '貴桑桑燒肉（晚餐）',
        note: '可比較官方訂位與平台代訂含套餐',
        providers: [
            { id: 'tabelog', name: '食べログ（大阪燒肉搜尋）', currency: 'JPY', url: 'https://tabelog.com/osaka/rstLst/yakiniku/?SrtT=rt' },
            { id: 'klook', name: 'Klook', currency: 'TWD', url: 'https://www.klook.com/zh-TW/search/?query=%E5%A4%A7%E9%98%AA%20%E7%87%92%E8%82%89%20%E8%A8%82%E4%BD%8D' },
            { id: 'kkday', name: 'KKday', currency: 'TWD', url: 'https://www.kkday.com/zh-tw/product/search?keyword=%E5%A4%A7%E9%98%AA%20%E7%87%92%E8%82%89%20%E8%A8%82%E4%BD%8D' }
        ]
    },
    {
        id: 'kyoto-teppanyaki',
        title: '京都鐵板燒／Tsurukame Hon Ten（晚餐）',
        note: '河原町周邊熱門餐廳，建議 2–3 週前預約',
        providers: [
            { id: 'tabelog', name: '食べログ（京都 鐵板燒搜尋）', currency: 'JPY', url: 'https://tabelog.com/kyoto/rstLst/steak/' },
            { id: 'klook', name: 'Klook', currency: 'TWD', url: 'https://www.klook.com/zh-TW/search/?query=%E4%BA%AC%E9%83%BD%20%E9%90%B5%E6%9D%BF%E7%87%92%20%E8%A8%82%E4%BD%8D' },
            { id: 'kkday', name: 'KKday', currency: 'TWD', url: 'https://www.kkday.com/zh-tw/product/search?keyword=%E4%BA%AC%E9%83%BD%20%E9%90%B5%E6%9D%BF%E7%87%92%20%E8%A8%82%E4%BD%8D' }
        ]
    },
    {
        id: 'arashiyama-yoshimura',
        title: '嵐山 よしむら（午餐）',
        note: '午餐尖峰請提早預約或現場候位',
        providers: [
            { id: 'tabelog', name: '食べログ（嵐山 よしむら）', currency: 'JPY', url: 'https://tabelog.com/kyoto/A2604/A260403/26001102/' },
            { id: 'klook', name: 'Klook', currency: 'TWD', url: 'https://www.klook.com/zh-TW/search/?query=%E5%B5%90%E5%B1%B1%20%E3%82%88%E3%81%97%E3%82%80%E3%82%89' },
            { id: 'kkday', name: 'KKday', currency: 'TWD', url: 'https://www.kkday.com/zh-tw/product/search?keyword=%E5%B5%90%E5%B1%B1%20%E3%82%88%E3%81%97%E3%82%80%E3%82%89' }
        ]
    },
    {
        id: 'nakamura-tokichi',
        title: '中村藤吉（宇治 午餐/甜點）',
        note: '宇治本店／平等院店擇一；人潮較多',
        providers: [
            { id: 'official', name: '官方網站', currency: 'JPY', url: 'https://www.tokichi.jp/' },
            { id: 'klook', name: 'Klook', currency: 'TWD', url: 'https://www.klook.com/zh-TW/search/?query=%E4%B8%AD%E6%9D%91%E8%97%A4%E5%90%89' },
            { id: 'kkday', name: 'KKday', currency: 'TWD', url: 'https://www.kkday.com/zh-tw/product/search?keyword=%E4%B8%AD%E6%9D%91%E8%97%A4%E5%90%89' }
        ]
    },
    {
        id: 'osaka-castle-ticket',
        title: '大阪城天守閣 門票',
        note: '可現場購買；旺季可先行網購',
        providers: [
            { id: 'official', name: '官方資訊', currency: 'JPY', url: 'https://www.osakacastle.net/' },
            { id: 'klook', name: 'Klook', currency: 'TWD', url: 'https://www.klook.com/zh-TW/search/?query=%E5%A4%A7%E9%98%AA%E5%9F%8E%20%E9%96%80%E7%A5%A8' },
            { id: 'kkday', name: 'KKday', currency: 'TWD', url: 'https://www.kkday.com/zh-tw/product/search?keyword=%E5%A4%A7%E9%98%AA%E5%9F%8E%20%E9%96%80%E7%A5%A8' }
        ]
    }
];

function initializeBookingComparison() {
    const listEl = document.getElementById('bookingList');
    if (!listEl) return;

    const fxInput = document.getElementById('fxRateInput');
    const storedFx = localStorage.getItem('bookingFxRate');
    if (storedFx) fxInput.value = storedFx;
    fxInput.addEventListener('change', () => {
        localStorage.setItem('bookingFxRate', fxInput.value);
        renderBookingCards();
    });

    const resetBtn = document.getElementById('resetBookingPricesBtn');
    resetBtn?.addEventListener('click', () => {
        localStorage.removeItem('bookingPrices');
        renderBookingCards();
    });

    renderBookingCards();
}

function renderBookingCards() {
    const listEl = document.getElementById('bookingList');
    const fxRate = parseFloat(document.getElementById('fxRateInput')?.value || '0.22') || 0.22;
    const savedPrices = JSON.parse(localStorage.getItem('bookingPrices') || '{}');

    const cardsHtml = bookingCatalog.map(item => {
        const providerRows = item.providers.map(p => {
            const saved = savedPrices[item.id]?.[p.id] ?? '';
            const priceInput = `<input type="number" min="0" step="1" placeholder="輸入價格" value="${saved}" data-item="${item.id}" data-provider="${p.id}" class="price-field">`;
            const twd = convertToTwd(saved, p.currency, fxRate);
            const twdHint = saved ? `<span class="twd-hint">≈ NT$${formatMoney(twd)}</span>` : '<span style="color:#999">—</span>';
            return `
                <div class="provider-row" data-item="${item.id}" data-provider="${p.id}">
                    <div class="provider-name">${p.name}</div>
                    <div class="price-input">${priceInput}${twdHint}</div>
                    <button class="open-link" onclick="window.open('${p.url}', '_blank')"><i class="fas fa-arrow-up-right-from-square"></i></button>
                </div>
            `;
        }).join('');

        // 計算最便宜（換算成TWD比較）
        const cheapest = getCheapestProvider(item, savedPrices, fxRate);

        return `
            <div class="booking-card" id="card-${item.id}">
                <h3>${item.title} ${cheapest ? `<span class=\"best-badge\">最便宜：${cheapest.providerName}</span>` : ''}</h3>
                <div class="booking-meta">
                    <small style="color:#666">${item.note || ''}</small>
                </div>
                <div class="booking-providers">${providerRows}</div>
                <div class="provider-footer">
                    <button class="btn-secondary" onclick="openAllLinks('${item.id}')"><i class="fas fa-link"></i> 同時開啟三家</button>
                </div>
            </div>
        `;
    }).join('');

    listEl.innerHTML = cardsHtml;

    // 綁定輸入事件 + 即時儲存 & 重算
    listEl.querySelectorAll('.price-field').forEach(input => {
        input.addEventListener('input', onPriceInputChange);
        input.addEventListener('change', onPriceInputChange);
    });
}

function onPriceInputChange(e) {
    const input = e.target;
    const itemId = input.getAttribute('data-item');
    const providerId = input.getAttribute('data-provider');
    const value = input.value === '' ? '' : Number(input.value);

    const saved = JSON.parse(localStorage.getItem('bookingPrices') || '{}');
    if (!saved[itemId]) saved[itemId] = {};
    saved[itemId][providerId] = value;
    localStorage.setItem('bookingPrices', JSON.stringify(saved));

    // 重新渲染，更新TWD與最便宜徽章
    renderBookingCards();
}

function convertToTwd(amount, currency, fxRate) {
    if (amount === '' || isNaN(amount)) return 0;
    const n = Number(amount);
    if (currency === 'JPY') return n * fxRate;
    if (currency === 'TWD') return n;
    return n; // 其他幣別暫以TWD視之
}

function getCheapestProvider(item, savedPrices, fxRate) {
    const prices = item.providers.map(p => {
        const raw = savedPrices[item.id]?.[p.id];
        if (raw === undefined || raw === '') return null;
        return { id: p.id, providerName: p.name, twd: convertToTwd(raw, p.currency, fxRate) };
    }).filter(Boolean);
    if (prices.length === 0) return null;
    prices.sort((a, b) => a.twd - b.twd);
    return prices[0];
}

function openAllLinks(itemId) {
    const item = bookingCatalog.find(i => i.id === itemId);
    if (!item) return;
    item.providers.forEach(p => window.open(p.url, '_blank'));
    showToast('已開啟所有比價連結');
}

function formatMoney(value) {
    const n = Number(value);
    if (!isFinite(n)) return '0';
    return Math.round(n).toLocaleString('zh-TW');
}

// ------ UX helpers ------
function showToast(message) {
    const container = document.getElementById('toastContainer');
    if (!container) return;
    const el = document.createElement('div');
    el.className = 'toast';
    el.textContent = message;
    container.appendChild(el);
    setTimeout(() => { el.style.opacity = '0'; el.style.transform = 'translateY(10px)'; }, 2200);
    setTimeout(() => { container.removeChild(el); }, 2600);
}

function toggleDarkMode() {
    document.documentElement.classList.toggle('dark-mode');
    const isDark = document.documentElement.classList.contains('dark-mode');
    localStorage.setItem('prefersDark', isDark ? '1' : '0');
}

// Apply persisted theme
(() => {
    const prefers = localStorage.getItem('prefersDark');
    if (prefers === '1') document.documentElement.classList.add('dark-mode');
})();

// ---------------- 地圖導航邏輯 ----------------
function setupMapsUI() {
    const fromInput = document.getElementById('mapsFrom');
    const toInput = document.getElementById('mapsTo');
    if (!toInput) return; // 若頁面無地圖區塊則略過
    const modeButtons = document.querySelectorAll('.mode-toggle button');
    const useMyLocationBtn = document.getElementById('useMyLocation');
    const swapBtn = document.getElementById('swapLocations');
    const openDirectionsBtn = document.getElementById('openDirections');
    const openMapSearchBtn = document.getElementById('openMapSearch');
    const nearbyChips = document.querySelectorAll('.nearby-chip');

    let currentMode = 'driving';
    modeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            modeButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentMode = btn.getAttribute('data-mode');
        });
    });

    useMyLocationBtn?.addEventListener('click', () => {
        if (!navigator.geolocation) { showToast('此瀏覽器不支援定位'); return; }
        navigator.geolocation.getCurrentPosition(pos => {
            const { latitude, longitude } = pos.coords;
            fromInput.value = `${latitude},${longitude}`;
            showToast('已使用目前位置');
        }, () => showToast('定位失敗，請確認權限'));
    });

    swapBtn?.addEventListener('click', () => {
        const tmp = fromInput.value; fromInput.value = toInput.value; toInput.value = tmp;
    });

    openDirectionsBtn?.addEventListener('click', () => {
        const from = fromInput.value.trim();
        const to = toInput.value.trim();
        if (!to) { showToast('請先輸入目的地'); return; }
        const modeMap = { driving: 'driving', transit: 'transit', walking: 'walking' };
        const mode = modeMap[currentMode] || 'driving';
        const fromParam = from ? `&origin=${encodeURIComponent(from)}` : '';
        const url = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(to)}${fromParam}&travelmode=${mode}`;
        window.open(url, '_blank');
    });

    openMapSearchBtn?.addEventListener('click', () => {
        const to = toInput.value.trim();
        const q = to || '大阪 日本';
        const url = `https://www.google.com/maps/search/${encodeURIComponent(q)}`;
        window.open(url, '_blank');
    });

    nearbyChips.forEach(chip => {
        chip.addEventListener('click', () => {
            const q = chip.getAttribute('data-query');
            const base = toInput.value.trim() || '大阪 日本';
            const url = `https://www.google.com/maps/search/${encodeURIComponent(q + ' near ' + base)}`;
            window.open(url, '_blank');
        });
    });
}

function fillTo(text) {
    const toInput = document.getElementById('mapsTo');
    if (!toInput) return;
    toInput.value = text;
    showToast(`已設為目的地：${text}`);
}

async function pasteToDestination() {
    try {
        const text = await navigator.clipboard.readText();
        fillTo(text);
    } catch (e) {
        showToast('無法讀取剪貼簿，請手動貼上');
    }
}
