import { Inject,Injectable } from '@angular/core';
import {DOCUMENT} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class StyleManagerService {

  constructor(@Inject(DOCUMENT) private document: Document) { 
}

  getLinkElementForKey(key: string) {
  return this.getExistingLinkElementByKey(key) || this.createLinkElementWithKey(key);
}

  getExistingLinkElementByKey(key: string) {
  return this.document.head.querySelector(`link[rel="stylesheet"].${this.getClassNameForKey(key)}`);
}

   getClassNameForKey(key: string) {
  return `style-manager-${key}`;
}
   createLinkElementWithKey(key: string) {
  const linkEl = this.document.createElement('link');
  linkEl.setAttribute('rel', 'stylesheet');
  linkEl.classList.add(this.getClassNameForKey(key));
  this.document.head.appendChild(linkEl);
  return linkEl;
}

  setStyle(key: string, href: string) {
    this.getLinkElementForKey(key).setAttribute('href', href);
  }

    removeStyle(key: string) {
    const existingLinkElement = this.getExistingLinkElementByKey(key);
    if (existingLinkElement) {
      this.document.head.removeChild(existingLinkElement);
    }
  }
}
