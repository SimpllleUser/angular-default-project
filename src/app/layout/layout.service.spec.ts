import { TestBed, inject } from '@angular/core/testing';

import { AuthenticationGuard, AuthenticationService } from '@app/auth';
import { MockAuthenticationService } from '@app/auth/authentication.service.mock';
import { LayoutComponent } from './layout.component';
import { Layout } from './layout.service';

describe('Layout', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LayoutComponent],
      providers: [AuthenticationGuard, { provide: AuthenticationService, useClass: MockAuthenticationService }],
    });
  });

  describe('childRoutes', () => {
    it('should create routes as children of layout', () => {
      // Prepare
      const testRoutes = [{ path: 'test' }];

      // Act
      const result = Layout.childRoutes(testRoutes);

      // Assert
      expect(result.path).toBe('');
      expect(result.children).toBe(testRoutes);
      expect(result.component).toBe(LayoutComponent);
    });
  });
});
