# Portfolio Web — Lorenzo Macaione (Industrial Designer)

Sito web portfolio per Industrial Designer con layout editoriale a griglia svizzera (8 colonne × 8 righe), proporzioni e margini calibrati su specifiche Figma, font **DM Sans SemiBold**, effetto **difference**, scorrimento infinito da trackpad e interazione hover di dezoom sui progetti.

---

## 📐 Specifiche di Design e Griglia (8 Colonne × 8 Righe)

### 1. Tipografia (DM Sans — SemiBold 600, MAIUSCOLO)
- **35pt**:
  - Scritta **`WORKS`** nella NavBar
  - Testo manifesto Bio in basso (*“INDUSTRIAL DESIGNER BASED IN MILAN...”*)
  - Nomi dei progetti sulle copertine (*`LUCIO`*, *`DEA`*, *`UTOPIA`*, *`CLIMBEX`*)
- **17pt**:
  - **`LORENZO MACAIONE`**
  - **`ABOUT`**
  - **`CONTACTS`**

### 2. Margini & Spaziature da Figma
- **Margini laterali**: **50px** (a sinistra di *Lorenzo Macaione* e a destra di *Contacts*).
- **Margini superiore e inferiore**: **25px** (NavBar allineata in alto a 25px, Bio allineata in basso a 25px).
- **Spazio tra "ABOUT" e i progetti**: **25px** tra la fine della parola *About* e il bordo sinistro della colonna progetti.

### 3. Griglia (8 × 8)
- **Larghezza (8 Colonne)**:
  - **5/8 (62.5% a sinistra)**: Sezione statica con la hero image `hero_cover_compr.jpg` e il testo bio.
  - **3/8 (37.5% a destra)**: Colonna a scorrimento continuo dei progetti.
- **Altezza (8 Righe)**:
  - **7 righe su 8 (87.5% vh)**: Immagine Hero centrata rispetto a *WORKS*, con respiro/spazio superiore.
  - **1 riga su 8 (12.5% vh)**: Box testo manifesto formattato su 2 righe.

### 4. Effetto Cromatico "Difference"
Tutti i testi hanno `mix-blend-mode: difference` e colore `#FFFFFF`:
- Su sfondo bianco $\rightarrow$ appare nero profondo.
- Su sfondo nero o scuro $\rightarrow$ appare bianco puro.
- Su elementi colorati $\rightarrow$ inverte dinamicamente i toni cromatici.

### 5. Interazione Hover sui Progetti
Al passaggio del mouse sulle immagini della colonna destra:
- **Effetto Dezoom**: l'immagine si rimpicciolisce delicatamente (`scale(0.95)`).
- **Oscuramento leggero**: la luminosità scende per far risaltare il titolo con effetto difference.

---

## 🚀 Come visualizzare il sito

Fai doppio clic sul file `index.html` all'indirizzo `C:\Users\loren\Desktop\Portfolio Web\index.html` per aprirlo nel browser.
