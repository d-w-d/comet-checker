import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavListingsComponent } from './sidenav-listings/sidenav-listings.component';
import { SharedModule } from '@app/shared';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MenuItemComponent } from './header/menu-item/menu-item.component';
import { ListingsComponent } from './sidenav-listings/listings/listings.component';

@NgModule({
  declarations: [SidenavListingsComponent, HeaderComponent, MenuItemComponent, ListingsComponent],
  imports: [CommonModule, SharedModule, RouterModule],
  exports: [SidenavListingsComponent, HeaderComponent]
})
export class NavigationModule {}
