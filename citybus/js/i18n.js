// 多语言数据
const i18nData = {
  'zh-Hant': {
    // 顶部导航
    logo: '城巴',
    logoEn: 'Citybus',
    
    // 主标题
    subtitle: '全新城巴應用程式',
    titleMain: '陪你成長 領航未來',
    
    // 描述
    description: '全新應用程式設有詳盡的景點介紹和交通指南，助您輕鬆計劃行程。您亦可透過應用程式購買電子車票、收聽導覽廣播和享受無數的購物禮遇。立即下載，盡情探索香港！',
    
    // 下载按钮
    downloadIOS: 'Download on the App Store',
    downloadAndroid: 'GET IT ON Google Play',
    downloadHuawei: 'EXPLORE IT ON AppGallery',
    
    // 页脚
    copyright: '版權所有© 2025 城巴有限公司',
    
    // 语言选择
    langTraditional: '繁',
    langSimplified: '简',
    langEnglish: 'EN'
  },
  'zh-Hans': {
    logo: '城巴',
    logoEn: 'Citybus',
    subtitle: '全新城巴应用程序',
    titleMain: '陪你成长 领航未来',
    description: '全新应用程序设有详尽的景点介绍和交通指南，助您轻松计划行程。您亦可通过应用程序购买电子车票、收听导览广播和享受无数的购物礼遇。立即下载，尽情探索香港！',
    downloadIOS: 'Download on the App Store',
    downloadAndroid: 'GET IT ON Google Play',
    downloadHuawei: 'EXPLORE IT ON AppGallery',
    copyright: '版权所有© 2025 城巴有限公司',
    langTraditional: '繁',
    langSimplified: '简',
    langEnglish: 'EN'
  },
  'en': {
    logo: 'Citybus',
    logoEn: 'Citybus',
    subtitle: 'New Citybus App',
    titleMain: 'Grow with you, Navigate the future',
    description: 'The new app provides detailed attraction introductions and traffic guides to help you easily plan your itinerary. You can also purchase electronic tickets, listen to guided broadcasts, and enjoy countless shopping offers through the app. Download now and explore Hong Kong!',
    downloadIOS: 'Download on the App Store',
    downloadAndroid: 'GET IT ON Google Play',
    downloadHuawei: 'EXPLORE IT ON AppGallery',
    copyright: 'Copyright © 2025 Citybus Limited',
    langTraditional: '繁',
    langSimplified: '简',
    langEnglish: 'EN'
  }
};

// 当前语言，默认繁体
let currentLang = 'zh-Hant';

// 初始化语言
function initLanguage() {
  // 从localStorage获取保存的语言，如果没有则使用默认
  const savedLang = localStorage.getItem('citybus_lang');
  if (savedLang && i18nData[savedLang]) {
    currentLang = savedLang;
  }
  
  // 更新语言选择器的值（包括桌面版和移动版）
  $('.lang-dropdown, .desktop-lang-dropdown').val(currentLang);
  
  // 应用语言
  applyLanguage(currentLang);
}

// 应用语言
function applyLanguage(lang) {
  if (!i18nData[lang]) return;
  
  const data = i18nData[lang];
  
  // 更新所有带有data-i18n属性的元素
  $('[data-i18n]').each(function() {
    const key = $(this).attr('data-i18n');
    if (data[key] !== undefined) {
      $(this).text(data[key]);
    }
  });
  
  // 更新logo
  $('.logo-cn').text(data.logo);
  $('.logo-en').text(data.logoEn);
  
  // 更新语言选择器的选项文本
  $('.lang-dropdown option[value="zh-Hant"]').text(data.langTraditional);
  $('.lang-dropdown option[value="zh-Hans"]').text(data.langSimplified);
  $('.lang-dropdown option[value="en"]').text(data.langEnglish);
  
  // 保存当前语言
  localStorage.setItem('citybus_lang', lang);
  currentLang = lang;
}

// 切换语言
function changeLanguage(lang) {
  if (i18nData[lang]) {
    applyLanguage(lang);
  }
}

// 页面加载完成后初始化
$(document).ready(function() {
  initLanguage();
  
  // 监听语言选择器变化（包括桌面版和移动版）
  $('.lang-dropdown, .desktop-lang-dropdown').on('change', function() {
    const selectedLang = $(this).val();
    // 同步所有语言选择器的值
    $('.lang-dropdown, .desktop-lang-dropdown').val(selectedLang);
    changeLanguage(selectedLang);
  });
});

