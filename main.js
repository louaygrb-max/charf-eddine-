// يفتح روابط التواصل (فيسبوك، إنستغرام، واتساب) في تبويب جديد
document.querySelectorAll('.soc a').forEach(function (a) {
  a.target = '_blank';
  a.rel = 'noopener noreferrer';
});
