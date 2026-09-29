(function () {
  'use strict';

  // Keep the existing DOM nodes so Markdown formatting and math survive.
  function takeTitle(paragraph) {
    var range = document.createRange();
    range.selectNodeContents(paragraph);
    var walker = document.createTreeWalker(
      paragraph, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT
    );
    var node;
    var separator;

    while ((node = walker.nextNode())) {
      if (node.nodeType === Node.ELEMENT_NODE && node.tagName === 'BR') {
        range.setEndBefore(node);
        separator = node;
        break;
      }
      if (node.nodeType === Node.TEXT_NODE && node.data.indexOf('\n') !== -1) {
        range.setEnd(node, node.data.indexOf('\n'));
        separator = node;
        break;
      }
    }

    var title = range.extractContents();
    if (separator) {
      if (separator.nodeType === Node.TEXT_NODE) {
        separator.deleteData(0, 1);
      } else {
        separator.remove();
      }
    }
    return title;
  }

  function renderCallouts() {
    document.querySelectorAll('.page-content blockquote').forEach(function (quote) {
      var paragraph = quote.firstElementChild;
      if (!paragraph || paragraph.tagName !== 'P') return;

      var first = paragraph.firstChild;
      if (!first || first.nodeType !== Node.TEXT_NODE) return;
      var marker = first.data.match(/^\s*\[!\s*([a-z][a-z0-9_-]*)\s*\][ \t]*/i);
      if (!marker) return;

      var type = marker[1].toLowerCase();
      first.deleteData(0, marker[0].length);

      var title = document.createElement('div');
      title.className = 'callout-title';
      title.appendChild(takeTitle(paragraph));
      if (!title.textContent.trim()) {
        var label = type.replace(/[-_]/g, ' ');
        title.textContent = label.charAt(0).toUpperCase() + label.slice(1);
      }
      if (!paragraph.textContent.trim() && !paragraph.querySelector('img, svg, script')) {
        paragraph.remove();
      }

      var callout = document.createElement('aside');
      callout.className = 'callout';
      callout.dataset.callout = type;
      callout.appendChild(title);
      while (quote.firstChild) callout.appendChild(quote.firstChild);
      quote.replaceWith(callout);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderCallouts);
  } else {
    renderCallouts();
  }
}());
