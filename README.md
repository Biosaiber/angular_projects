# 💬 Message Sender – Angular Data Binding Practice

## 🧩 Cieľ projektu
Tento mini projekt slúži na precvičenie **komunikácie medzi komponentmi v Angulari** pomocou rôznych typov data bindingu.  
Ukazuje **obojstranný tok dát** medzi **Parent** a **Child** komponentom.

### 💡 Cvičené koncepty
- **Property binding** → `[value]="inputValue"`
- **Event binding** → `(click)="handleClick()"`
- **@Input() decorator** → prenášanie dát z parenta do childa
- **@Output() + EventEmitter** → posielanie udalostí z childa naspäť do parenta

---

## 🧠 Popis funkčnosti

### 👨‍💻 Parent Component (napr. `AppComponent`)
- Obsahuje:
  - `<input>` – používateľ sem napíše text správy  
  - `<button>` – tlačidlo „Send Message“
- Po kliknutí na tlačidlo:
  - uloží správu do premennej `messageToChild`
  - pošle túto hodnotu do **Child Componentu** cez `@Input()`

---

### 👶 Child Component (napr. `MessageDisplayComponent`)
- Prijíma text správy cez `@Input()`
- Zobrazuje správu v `<p>`
- Má tlačidlo „Clear Message“
- Po kliknutí na tlačidlo:
  - zavolá metódu s `EventEmitter` → `emit()`
  - odošle signál parentovi, aby správu vymazal

---

## 🔁 Tok dát
Parent → (Input) → Child  
Parent ← (Output emit) ← Child

---

## 👀 Výsledok v prehliadači

Parent Component  
[ Hello child! ] [ Send Message ]  
Child Component  
Message: Hello child!  
[ Clear Message ]

- Po kliknutí na **Send Message** sa text objaví v Child komponente  
- Po kliknutí na **Clear Message** sa správa vymaže aj v Parent komponente  

---

## ✅ Cieľ učenia
Tento projekt ti pomôže pochopiť:
1. Ako funguje **jednosmerný data binding (Parent → Child)**  
2. Ako funguje **spätný tok udalostí (Child → Parent)**  
3. Ako spolupracujú **@Input(), @Output(), EventEmitter, property a event binding**

---

## 🛠️ Budúca rozšíriteľnosť
- Pridať viac správ (zoznam)
- Pridať potvrdenie vymazania
- Použiť formControl a reactive forms
- Prepojiť s API alebo LocalStorage

---

👩‍💻 **Autor:** Samuel Líška  
📁 **Branch:** `feature/01-property-binding`  
📅 **Verzia:** 1.0