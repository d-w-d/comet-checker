# Navigation Module Overview

This module enables nested menus to be specified within the navigation service.

It's basically a wrapper around standard material navigation components (menus and sidenavs) that enables mouse-hovering dropdown events and submenus of arbitrarily deeply nested links.

The nested menus are specified in an array of `INav` objects (in `navigation.service.ts`), that can each include an array of `INav` items (corrsponding to submenus). An INav object cannot _both_ have a link _and_ an array of children, as this would create ambiguity when it comes to opening nested menus (vs clicking on a link).

The array of INav items is used in the creation of two components: a header component and a side-listings component.

## Header Component

The header component launches each menu from a material button (corresponding to the first level objects in the INav[] array). The material button is associated with the menu that it triggers via the directive [`matMenuTriggerFor`](https://material.angular.io/components/menu/overview).

Getting menu dropdowns working on both mouse-hover events and touchscreen taps required some non-trivial fiddly-flag logic. This wasn't fun. Angular Material developers are adamant that mouse-hover dropdowns are not "best practice" according to Material Design principles, and it's tricky working around their components. Here is a quick outline of the strategy to make things work.

Angular material menus are launched in an overlay element (`<div class="cdk-overlay-container" ... >`) in a totally separate stacking context to the buttons in the menu (especially if you embed the menu in e.g. a material toolbar). In order to have mouse enter/leave events take effect when the mouse moves out of _either_ the material menu _or_ the launch button, this component extends implants a div element (with `class="invisible-button-overlay"`) out of the top of the material menu.

This 'overlay div' is sized and positioned so that once your mouse enters one of the menu-triggering buttons, a material menu will be launched with this div immediately covering the button that launched it. As a result, the mouse will issue a mouseleave event on the button, and a mouseenter event on the overlay div.

If the mouse moves out of the overlay div without entering the material menu, then that menu will be programmatically closed. If the mouse moves our of the overlay div into the menu, then the menu wont be closed. In order to enable the nested menus to remain open until such a time as the mouse leaves them altogether, the number of menus entered/left is tracked, and only when the number of menus left equals those entered do we programmatically shut the menu again.

The nested menus are controlled by a recursive calling of the menu-item component. All events are passed up these recursively called components till they reach the `header.component.ts` and are handled in the method `handleInteraction`; this is where the bulk of the component's business logic lies.
