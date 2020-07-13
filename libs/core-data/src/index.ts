export { AuthGuardService } from './lib/auth/auth-guard.service';
export { AuthService } from './lib/auth/auth.service';
export { CoreDataModule } from './lib/core-data.module';
export { Customer } from './lib/customers/customer.model';
export { CustomersService } from './lib/customers/customers.service';
export { NotificationsService } from './lib/notifications/notifications.service';
export { Project } from './lib/projects/project.model';
export { ProjectsService } from './lib/projects/projects.service';
export { CustomersFacade } from './lib/state/customers/customers.facade';
export { AddProject, DeleteProject, LoadProjects, SelectProject, UpdateProject } from './lib/state/projects/projects.actions';
// Expose projects state
export { ProjectsState, initialProjects } from './lib/state/projects/projects.reducer';

