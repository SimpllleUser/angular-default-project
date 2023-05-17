import { Routes, Route } from '@angular/router';

import { AuthenticationGuard } from '@app/auth';
import { LayoutComponent } from './layout.component';

/**
 * Provides helper methods to create routes.
 */
export class Layout {
  /**
   * Creates routes using the layout component and authentication.
   * @param routes The routes to add.
   * @return The new route using layout as the base.
   */
  static childRoutes(routes: Routes): Route {
    return {
      path: '',
      component: LayoutComponent,
      children: routes,
      canActivate: [AuthenticationGuard],
    };
  }
}
