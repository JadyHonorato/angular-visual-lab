import { bootstrapApplication } from '@angular/platform-browser';
import { Component, computed, signal } from '@angular/core';

type Theme = 'violet' | 'ocean' | 'sunset';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <main class="page" [class]="'page theme-' + theme()">
      <nav class="nav">
        <div class="brand"><span class="brand-dot"></span>Angular Visual Lab</div>
        <div class="theme-switcher" aria-label="Escolher tema">
          <button (click)="theme.set('violet')" [class.active]="theme() === 'violet'">Violeta</button>
          <button (click)="theme.set('ocean')" [class.active]="theme() === 'ocean'">Oceano</button>
          <button (click)="theme.set('sunset')" [class.active]="theme() === 'sunset'">Sunset</button>
        </div>
      </nav>

      <section class="hero">
        <p class="eyebrow">DEMONSTRAÇÃO ANGULAR</p>
        <h1>Interfaces que <span>respondem</span> ao usuário.</h1>
        <p class="lead">
          Um exemplo simples de componentes visuais, estado reativo, eventos e feedback imediato.
        </p>
        <div class="summary">
          <strong>{{ selectedCount() }}</strong>
          <span>recurso(s) selecionado(s)</span>
        </div>
      </section>

      <section class="cards">
        @for (item of items; track item.id) {
          <button class="feature-card"
                  [class.selected]="selected().includes(item.id)"
                  (click)="toggle(item.id)">
            <span class="icon">{{ item.icon }}</span>
            <span class="card-title">{{ item.title }}</span>
            <span class="card-text">{{ item.text }}</span>
            <span class="status">
              {{ selected().includes(item.id) ? 'Selecionado ✓' : 'Clique para selecionar' }}
            </span>
          </button>
        }
      </section>

      <section class="explain">
        <div>
          <p class="eyebrow">O QUE ESTÁ ACONTECENDO?</p>
          <h2>O estado muda. A interface acompanha.</h2>
        </div>
        <p>
          Os botões disparam eventos <code>(click)</code>. O Angular altera
          <code>signals</code> no TypeScript e o template atualiza classes,
          textos e contador automaticamente.
        </p>
      </section>
    </main>
  `
})
export class App {
  theme = signal<Theme>('violet');
  selected = signal<number[]>([]);

  items = [
    { id: 1, icon: '◈', title: 'Componentes', text: 'Blocos visuais reutilizáveis e organizados.' },
    { id: 2, icon: '↯', title: 'Interação', text: 'Eventos conectam ações do usuário ao código.' },
    { id: 3, icon: '✦', title: 'Reatividade', text: 'Mudanças de estado aparecem imediatamente na tela.' }
  ];

  selectedCount = computed(() => this.selected().length);

  toggle(id: number) {
    this.selected.update(current =>
      current.includes(id) ? current.filter(item => item !== id) : [...current, id]
    );
  }
}

bootstrapApplication(App).catch(err => console.error(err));
