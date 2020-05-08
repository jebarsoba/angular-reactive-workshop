import { Component, OnInit } from '@angular/core';
// import { Customer, CustomersService, NotificationsService, Project, ProjectsService } from '@workshop/core-data';
import { Customer, CustomersService, NotificationsService, Project, ProjectsService } from '@workshop/core-data';
import { Observable } from 'rxjs';

const emptyProject: Project = {
  id: null,
  title: '',
  details: '',
  percentComplete: 0,
  approved: false,
  customerId: null
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects$: Observable<Project[]>;
  customers$: Observable<Customer[]>;
  currentProject: Project;

  constructor(
    private projectsService: ProjectsService,
    private customerService: CustomersService,
    // TODO: For being able to use the store here, I'd first need to fix the error when trying to import the StateModule into CoreDataModule...
    // private store: Store<ProjectState>,
    private ns: NotificationsService) {
    // this.projects$ = this.store.pipe(
    //   select('projects')
    // );
  }

  ngOnInit() {
    this.getProjects();
    this.getCustomers();
    this.resetCurrentProject();
  }

  resetCurrentProject() {
    this.currentProject = emptyProject;
  }

  selectProject(project) {
    this.currentProject = project;
  }

  cancel(project) {
    this.resetCurrentProject();
  }

  getCustomers() {
    this.customers$ = this.customerService.all();
  }

  getProjects() {
    this.projects$ = this.projectsService.all();
  }

  saveProject(project) {
    if (!project.id) {
      this.createProject(project);
    } else {
      this.updateProject(project);
    }
  }

  createProject(project) {
    this.projectsService.create(project)
      .subscribe(response => {
        this.ns.emit('Project created!');
        this.getProjects();
        this.resetCurrentProject();
      });
  }

  updateProject(project) {
    this.projectsService.update(project)
      .subscribe(response => {
        this.ns.emit('Project saved!');
        this.getProjects();
        this.resetCurrentProject();
      });
  }

  deleteProject(project) {
    this.projectsService.delete(project)
      .subscribe(response => {
        this.ns.emit('Project deleted!');
        this.getProjects();
        this.resetCurrentProject();
      });
  }
}

