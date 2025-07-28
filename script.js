// كود يحدد لغة المتصفح ويوجه المستخدم تلقائيًا للنسخة المناسبة
const userLang = navigator.language || navigator.userLanguage;

if (window.location.pathname.endsWith("index.html") || window.location.pathname === "/") {
  if (userLang.startsWith("ar")) {
    window.location.href = "index-ar.html";
  } else {
    window.location.href = "index-en.html";
  }
}
