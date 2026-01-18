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
    <div style="padding: 20px; font-family: sans-serif;">
      <h1>Gestor de Notas</h1>

      <div>
        <input [(ngModel)]="newNoteText" placeholder="Escribe una nota..." style="padding: 5px;">
        <button (click)="addNote()" style="padding: 5px; margin-left: 5px;">Guardar</button>
      </div>

      <hr>

      <h3>Mis Notas:</h3>
      <ul>
        <li *ngFor="let note of notes">
          {{ note.text }} <small style="color: grey;">(ID: {{ note.id }})</small>
        </li>
      </ul>
      
      <p *ngIf="notes.length === 0">No hay notas guardadas.</p>
    </div>
  `,
  styles: []
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
      next: (data) => {
        this.notes = data;
        console.log('Notas cargadas:', data);
      },
      error: (e) => console.error('Error cargando notas:', e)
    });
  }

  addNote() {
    if (!this.newNoteText.trim()) return;

    const newNote: Note = { text: this.newNoteText };

    this.noteService.createNote(newNote).subscribe({
      next: (savedNote) => {
        console.log('Nota guardada:', savedNote);
        this.notes.push(savedNote);
        this.newNoteText = '';
      },
      error: (e) => console.error('Error guardando:', e)
    });
  }
}