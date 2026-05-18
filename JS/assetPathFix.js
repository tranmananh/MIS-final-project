document.addEventListener('DOMContentLoaded', function () {
  const localAssetPattern = /^(?!https?:|\/\/|\.\.|\/).+\.(?:jpg|jpeg|png|gif|mp4|webm|svg|ico)$/i;
  const updateUrl = function (value) {
    if (!value) return value;
    const trimmed = value.trim();
    if (!localAssetPattern.test(trimmed)) return value;
    return '../Image/' + trimmed;
  };

  document.querySelectorAll('img, source, video').forEach(function (element) {
    if (element.hasAttribute('src')) {
      const current = element.getAttribute('src');
      const fixed = updateUrl(current);
      if (fixed !== current) {
        element.setAttribute('src', fixed);
      }
    }
  });

  document.querySelectorAll('[style]').forEach(function (element) {
    const styleValue = element.getAttribute('style');
    if (!styleValue || !styleValue.includes('url(')) return;
    const updated = styleValue.replace(/url\((['"]?)(?!https?:|\/\/|\.\.|\/)([^'"\)]+)(['"]?)\)/gi, function (match, quote, url) {
      return 'url(' + quote + '../Image/' + url + quote + ')';
    });
    if (updated !== styleValue) {
      element.setAttribute('style', updated);
    }
  });
});