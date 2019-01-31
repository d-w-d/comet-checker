import { Injectable } from '@angular/core';
import { INav } from './navigation.models';

/**
 * Service defining nested navigation menus that are injected into the sidenav and toolbar
 * where they are displayed in a dropdown-nested manner
 */
@Injectable({
  providedIn: 'root'
})
export class NavService {
  readonly navLinks: INav[] = [
    {
      label: 'Home',
      link: 'home',
      icon: 'home'
    },

    {
      label: 'About',
      link: 'about',
      icon: 'info',
      isExpanded: false
    },
    {
      label: 'Data',
      link: 'data',
      icon: 'data',
      isExpanded: false
    },
    { label: 'Contact', link: 'contact', icon: 'contact_mail', isExpanded: false }
  ];

  constructor() {}

  getNavLinks() {
    return [...this.navLinks];
  }
}
