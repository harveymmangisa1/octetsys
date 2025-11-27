'use client';

import Quill from 'quill';
import 'react-quill/dist/quill.snow.css';

const Inline = Quill.import('blots/inline');

class Link extends Inline {
  static create(value) {
    const node = super.create(value);
    value = this.sanitize(value);
    node.setAttribute('href', value);
    node.setAttribute('target', '_blank');
    return node;
  }

  static formats(domNode) {
    return domNode.getAttribute('href');
  }

  static sanitize(url) {
    return sanitize(url, ['http', 'https', 'mailto', 'tel']) ? url : '//' + url;
  }

  format(name, value) {
    if (name === 'link' && value) {
      this.domNode.setAttribute('href', value);
    } else {
      super.format(name, value);
    }
  }
}
Link.blotName = 'link';
Link.tagName = 'A';

function sanitize(url, protocols) {
  const anchor = document.createElement('a');
  anchor.href = url;
  const protocol = anchor.href.slice(0, anchor.href.indexOf(':'));
  return protocols.indexOf(protocol) > -1;
}

Quill.register(Link, true);

export { Link };
