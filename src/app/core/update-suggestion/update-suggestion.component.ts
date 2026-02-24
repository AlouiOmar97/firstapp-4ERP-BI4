import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SuggestionService } from '../../services/suggestion.service';
import { LogService } from '../../services/log.service';
import { Suggestion } from '../../models/suggestion';

@Component({
  selector: 'app-update-suggestion',
  templateUrl: './update-suggestion.component.html',
  styleUrl: './update-suggestion.component.css'
})
export class UpdateSuggestionComponent {
suggestion!: Suggestion;
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
  id!: string;
  constructor(private activatedRoute: ActivatedRoute, private router: Router, private suggestionService: SuggestionService, private logService: LogService) { }

  ngOnInit(): void {
    //console.log(new Date().toISOString().split('T')[0]);
    this.id = this.activatedRoute.snapshot.params['id']
    this.suggestionService.getSuggestionById(+this.id).subscribe((data)=>{
      this.suggestion = data.suggestion;
      this.suggestionForm = new FormGroup({
      title: new FormControl(this.suggestion.title, [Validators.required, Validators.minLength(5), Validators.pattern('^[A-Z][a-zA-Z]*$')]),
      description: new FormControl(this.suggestion.description, [Validators.required, Validators.minLength(10)]),
      category: new FormControl(this.suggestion.category, [Validators.required]),
      date: new FormControl(this.suggestion.date.toString().split('T')[0], [Validators.required]),
      status: new FormControl(this.suggestion.status, [Validators.required]),
      nbLikes: new FormControl(this.suggestion.nbLikes)
    });
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
    this.suggestionService.updateSuggestion(this.id,this.suggestionForm.value).subscribe({
      next: () => {
        this.router.navigateByUrl('/suggestion/list');
      }
    });
  }

}
