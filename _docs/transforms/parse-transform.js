const jsdom = require('@tbranyen/jsdom');
const { JSDOM } = jsdom;
const minify = require('../utils/minify.js');
const slugify = require('slugify');

module.exports = function (value, outputPath) {
  if (outputPath.endsWith('.html')) {
    const DOM = new JSDOM(value, {
      resources: 'usable',
    });

    const document = DOM.window.document;
    const content = document.querySelector('.c-main');

    const contentHeadings = content
      ? [...content.querySelectorAll('h2, h3, h4, h5, h6')]
      : [];

    if (contentHeadings.length) {
      // Loop each heading and add a little anchor and an ID to each one
      contentHeadings.forEach((heading) => {
        const headingSlug = slugify(
          heading.textContent.toLowerCase().replace('$', ''),
        );
        heading.setAttribute('id', `${headingSlug}`);

        // const anchor = document.createElement('a');

        // heading.classList.add('c-heading');
        // anchor.setAttribute('href', `#${headingSlug}`);
        // anchor.classList.add('c-heading__permalink');
        // anchor.innerHTML = minify(`<svg fill="currentColor" aria-hidden="true" focusable="false" width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        //   <path d="M9.199 13.599a5.99 5.99 0 0 0 3.949 2.345 5.987 5.987 0 0 0 5.105-1.702l2.995-2.994a5.992 5.992 0 0 0 1.695-4.285 5.976 5.976 0 0 0-1.831-4.211 5.99 5.99 0 0 0-6.431-1.242 6.003 6.003 0 0 0-1.905 1.24l-1.731 1.721a.999.999 0 1 0 1.41 1.418l1.709-1.699a3.985 3.985 0 0 1 2.761-1.123 3.975 3.975 0 0 1 2.799 1.122 3.997 3.997 0 0 1 .111 5.644l-3.005 3.006a3.982 3.982 0 0 1-3.395 1.126 3.987 3.987 0 0 1-2.632-1.563A1 1 0 0 0 9.201 13.6zm5.602-3.198a5.99 5.99 0 0 0-3.949-2.345 5.987 5.987 0 0 0-5.105 1.702l-2.995 2.994a5.992 5.992 0 0 0-1.695 4.285 5.976 5.976 0 0 0 1.831 4.211 5.99 5.99 0 0 0 6.431 1.242 6.003 6.003 0 0 0 1.905-1.24l1.723-1.723a.999.999 0 1 0-1.414-1.414L9.836 19.81a3.985 3.985 0 0 1-2.761 1.123 3.975 3.975 0 0 1-2.799-1.122 3.997 3.997 0 0 1-.111-5.644l3.005-3.006a3.982 3.982 0 0 1 3.395-1.126 3.987 3.987 0 0 1 2.632 1.563 1 1 0 0 0 1.602-1.198z"/>
        // </svg>`);

        // heading.appendChild(anchor);
      });
    }

    return '<!DOCTYPE html>\r\n' + document.documentElement.outerHTML;
  }
  return value;
};
