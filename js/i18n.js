// 多语言数据
const i18nData = {
  'zh-Hant': {
    // 顶部导航
    logo: '城巴',
    logoEn: 'Citybus',
    
    // 主标题
    subtitle: '城巴App嶄新升級',
    titleMain: '智慧同行  貼心每程',
    
    // 描述
    description: '城巴應用程式迎來全面升級，呈現嶄新面貌，功能更智慧、更貼心，讓每位乘客的出行更輕鬆、更開心。全新程式以「智慧同行，貼心每程」為承諾，結合智能科技與人性化設計，成為香港市民每日出行的可靠夥伴程。重新下載城巴App，開啟您的智慧出行旅程！',
    
    // 下载按钮
    downloadIOS: 'Download on the App Store',
    downloadAndroid: 'GET IT ON Google Play',
    downloadHuawei: 'EXPLORE IT ON AppGallery',
    
    // 页脚
    copyright: '版權所有© 2026 城巴有限公司',
    
    // 语言选择
    langTraditional: '繁',
    langSimplified: '简',
    langEnglish: 'EN'
  },
  'zh-Hans': {
    logo: '城巴',
    logoEn: 'Citybus',
    subtitle: '城巴App崭新升级',
    titleMain: '智慧通行 贴心每程',
    description: '城巴应用程式迎来全面升级，呈现崭新面貌，功能更智慧、更贴心，让每位乘客的出行更轻松、更开心。全新程式以「智慧同行，贴心每程」为承诺，结合智能科技与人性化设计，成为香港市民每日出行的可靠伙伴程。重新下载城巴App，开启您的智慧出行旅程！',
    downloadIOS: 'Download on the App Store',
    downloadAndroid: 'GET IT ON Google Play',
    downloadHuawei: 'EXPLORE IT ON AppGallery',
    copyright: '版权所有© 2026 城巴有限公司',
    langTraditional: '繁',
    langSimplified: '简',
    langEnglish: 'EN'
  },
  'en': {
    logo: 'Citybus',
    logoEn: 'Citybus',
    subtitle: 'Citybus App Upgraded',
    titleMain: 'Smart Together, Heartfelt Every Ride',
    description: 'Experience a fresh upgrade to the new Citybus App, designed for smarter and more convenient travel. With our commitment to "Smart Together, Heartfelt Every Ride," the new application enhances your commuting experience, making every ride easier and more enjoyable. Download the new Citybus app today and elevate your travel experience!',
    downloadIOS: 'Download on the App Store',
    downloadAndroid: 'GET IT ON Google Play',
    downloadHuawei: 'EXPLORE IT ON AppGallery',
    copyright: 'Copyright © 2026 Citybus Limited. All Rights Reserved.',
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

