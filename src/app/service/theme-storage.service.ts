import {Injectable, EventEmitter} from '@angular/core';
import {LocalStorageService} from 'ngx-webstorage';

export interface DocsSiteTheme {
  name: string;
  displayName?: string;
  accent: string;
  primary: string;
  isDark?: boolean;
  isDefault?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ThemeStorageService {

  constructor(private storage:LocalStorageService){}

  static storageKey = 'docs-theme-storage-current-name';

  onThemeUpdate: EventEmitter<DocsSiteTheme> = new EventEmitter<DocsSiteTheme>();

  storeTheme(theme: DocsSiteTheme) {
    try {
    	this.storage.store('docs-theme-storage-current-name',theme.name)
    } catch { }

    this.onThemeUpdate.emit(theme);
  }

  getStoredThemeName(): string | null {
    try {
      return this.storage.retrieve('docs-theme-storage-current-name');
    } catch {
      return null;
    }
  }

  clearStorage() {
    try {
    	this.storage.clear('docs-theme-storage-current-name');
    } catch { }
  }
}
