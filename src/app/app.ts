import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NoteService } from './note.service';
import { Note } from './note';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="container mt-5">
      <div class="row justify-content-center">
        <div class="col-md-8 col-lg-6">
          <div class="card shadow-lg border-0">
            <div class="card-header bg-primary text-white p-4 text-center">
              <h2 class="mb-0"><i class="fa-solid fa-note-sticky me-2"></i> Mis Notas</h2>
              <small class="text-white-50">Spring Boot + Angular App</small>
            </div>

            <div class="card-body p-4">
              <div class="input-group mb-4">
                <input type="text" 
                       class="form-control form-control-lg" 
                       placeholder="¿Qué tienes en mente?" 
                       [(ngModel)]="newNoteText"
                       (keyup.enter)="addNote()">
                <button class="btn btn-success px-4" type="button" (click)="addNote()">
                  <i class="fa-solid fa-plus"></i> Añadir
                </button>
              </div>

              <h5 class="text-muted mb-3">Lista de tareas</h5>
              
              <ul class="list-group list-group-flush">
                <li *ngFor="let note of notes" 
                    class="list-group-item d-flex justify-content-between align-items-center py-3 animate-fade">
                  
                  <span class="fs-5 text-dark">
                    {{ note.text }}
                  </span>
                  
                  <span class="badge bg-light text-secondary border rounded-pill">
                    ID: {{ note.id }}
                  </span>
                </li>
              </ul>

              <div *ngIf="notes.length === 0" class="text-center py-5 text-muted">
                <i class="fa-regular fa-clipboard fa-3x mb-3 opacity-50"></i>
                <p>No tienes notas guardadas.</p>
                <p>¡Escribe algo arriba para empezar!</p>
              </div>

            </div>
            
            <div class="card-footer text-center text-muted py-3 bg-light">
              <small>Total notas: {{ notes.length }}</small>
            </div>

          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .animate-fade {
      animation: fadeIn 0.5s ease-in-out;
    }
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `]
})
export class AppComponent implements OnInit {

  notes: Note[] = [];
  newNoteText: string = '';

  constructor(private noteService: NoteService) { }

  ngOnInit() {
    this.loadNotes();
  }

  loadNotes() {
    this.noteService.getNotes().subscribe({
      next: (data) => this.notes = data,
      error: (e) => console.error('Error:', e)
    });
  }

  addNote() {
    if (!this.newNoteText.trim()) return;

    const newNote: Note = { text: this.newNoteText };

    this.noteService.createNote(newNote).subscribe({
      next: (savedNote) => {
        this.notes.push(savedNote);
        this.newNoteText = '';
      },
      error: (e) => console.error('Error:', e)
    });
  }
}