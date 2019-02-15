import { TestBed } from '@angular/core/testing';

import { TodoListRestService } from './todo-list-rest.service';

describe('TodoListRestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TodoListRestService = TestBed.get(TodoListRestService);
    expect(service).toBeTruthy();
  });
});
