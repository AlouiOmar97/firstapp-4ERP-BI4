import { Component } from '@angular/core';
import { Suggestion } from '../../models/suggestion';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SuggestionService } from '../../services/suggestion.service';
import { LogService } from '../../services/log.service';

@Component({
  selector: 'app-add-suggestion',
  templateUrl: './add-suggestion.component.html',
  styleUrl: './add-suggestion.component.css',
  providers: []
})
export class AddSuggestionComponent {
  suggestion: Suggestion = {
    id: 0,
    title: '',
    description: '',
    category: '',
    date: new Date().toISOString().split('T')[0],
    status: 'en_attente',
    nbLikes: 0
  }
  categories: string[] = [
  'Infrastructure et bâtiments',
  'Technologie et services numériques',
  'Restauration et cafétéria',
  'Hygiène et environnement',
  'Transport et mobilité',
  'Activités et événements',
  'Sécurité',
  'Communication interne',
  'Accessibilité',
  'Autre'
  ];
  suggestionForm!: FormGroup;

  constructor(private router: Router, private suggestionService: SuggestionService, private logService: LogService) { }

  ngOnInit(): void {
    //console.log(new Date().toISOString().split('T')[0]);
    this.suggestionForm = new FormGroup({
      title: new FormControl(this.suggestion.title, [Validators.required, Validators.minLength(5), Validators.pattern('^[A-Z][a-zA-Z]*$')]),
      description: new FormControl(this.suggestion.description, [Validators.required, Validators.minLength(10)]),
      category: new FormControl(this.suggestion.category, [Validators.required]),
      date: new FormControl(this.suggestion.date, [Validators.required]),
      status: new FormControl(this.suggestion.status, [Validators.required]),
      nbLikes: new FormControl(this.suggestion.nbLikes)
    });
  }

  get title() {
    return this.suggestionForm.get('title');
  }
  get description() {
    return this.suggestionForm.get('description');
  }
  get category() {
    return this.suggestionForm.get('category');
  }
  get date() {
    return this.suggestionForm.get('date');
  }
  get status() {
    return this.suggestionForm.get('status');
  }

  submitSuggestionForm() {
    this.logService.log(this.suggestionForm.value);
    this.logService.error(this.suggestionForm.value);
    this.logService.warn(this.suggestionForm.value);
    //this.router.navigate(['/suggestion/list']);
    this.suggestionService.addSuggestion(this.suggestionForm.value).subscribe({
      next: (data) => {
        this.logService.log("Suggestion added successfully: " + JSON.stringify(data));
        this.router.navigateByUrl('/suggestion/list');
      },
      error: (err) => {
        this.logService.error("Error adding suggestion: " + err);
      }
    });
  }
}
