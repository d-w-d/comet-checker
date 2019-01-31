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
      // children: [
      //   //
      //   { label: 'Home 1', link: 'xxx', isExpanded: false },
      //   {
      //     label: 'Home 2',
      //     // link: '.',
      //     isExpanded: false,
      //     children: [
      //       //
      //       { label: 'Home 2a', link: '.', isExpanded: false },
      //       {
      //         label: 'Home 2b',
      //         // link: '.',
      //         isExpanded: false,
      //         children: [
      //           {
      //             label: 'About',

      //             icon: 'info',
      //             isExpanded: false,
      //             children: [
      //               //
      //               { label: 'Home 1', link: 'xxx', isExpanded: false },
      //               {
      //                 label: 'Home 2',

      //                 isExpanded: false,
      //                 children: [
      //                   //
      //                   { label: 'Home 2a', link: '.', isExpanded: false },
      //                   { label: 'Home 2b', link: '.', isExpanded: false }
      //                 ]
      //               }
      //             ]
      //           },
      //           {
      //             label: 'About',
      //             icon: 'info',
      //             isExpanded: false,
      //             children: [
      //               //
      //               { label: 'Home 1', link: 'xxx', isExpanded: false },
      //               {
      //                 label: 'Home 2',
      //                 isExpanded: false,
      //                 children: [
      //                   //
      //                   { label: 'Home 2a', link: '.', isExpanded: false },
      //                   { label: 'Home 2b', link: '.', isExpanded: false }
      //                 ]
      //               }
      //             ]
      //           }
      //         ]
      //       }
      //     ]
      //   }
      // ]
    },
    {
      label: 'Room Service',
      // link: 'roomservice',
      icon: 'restaurant',
      isExpanded: false,
      children: [
        //
        {
          label: 'Food',
          // link: 'roomservice/food',
          icon: 'fastfood',
          isExpanded: false,
          children: [
            //
            { label: 'Snake', link: 'roomservice/food/snake', icon: 'gesture', isExpanded: false },
            { label: 'Bugs', link: 'roomservice/food/bugs', icon: 'bug_report', isExpanded: false }
          ]
        },
        {
          label: 'Drinks',
          // link: 'roomservice/food',
          icon: 'local_cafe',
          isExpanded: false,
          children: [
            //
            { label: 'Cocktails', link: 'roomservice/drinks/cocktails', icon: 'local_bar', isExpanded: false },
            { label: 'Water', link: 'roomservice/drinks/water', icon: 'local_drink', isExpanded: false }
          ]
        },
        {
          label: 'Drinks',

          icon: 'local_cafe',
          isExpanded: false,
          children: [
            //
            { label: 'Cocktails', link: 'roomservice/drinks/cocktails', icon: 'local_bar', isExpanded: false },
            { label: 'Water', link: 'roomservice/drinks/water', icon: 'local_drink', isExpanded: false }
          ]
        }
      ]
    },
    { label: 'Contact', link: 'contact', icon: 'contact_mail', isExpanded: false }
  ];

  constructor() {}

  getNavLinks() {
    return [...this.navLinks];
  }
}
