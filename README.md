# Savora Restaurant Management System
## Nidaamka Casriga ah ee Maamulka Maqaayadda Savora

Website dhammaystiran, casri ah oo xirfad leh oo lagu maamulo maqaayad, kaas oo gebi ahaanba ku qoran **Af-Soomaali**.

---

### 🌟 Tilmaamaha Guud ee Nidaamka

1. **Naqshad Casri ah & Midabbo Qurux Badan**:
   - **Cagaar Madow (Dark Emerald Green)** oo muujinaya maqaayad qaali ah oo heer sare ah.
   - **Dahab (Lustrous Gold)** oo lagu sharraxay badhamada, qiimaha iyo meelaha muhiimka ah.
   - **Caddaan & Kareem (Cream & White)** oo si fudud loo akhrin karo.
   - **Habka Mugdiga iyo Iftiinka (Dark & Light Mode)** oo hal taabasho lagu beddeli karo.

2. **Sawirro Tayo Sare leh oo Cunto & Maqaayad ah**:
   - Sawirro dhab ah oo ku jira galka `assets/images/` (Bariis, Baasto, Pizza, Burger, Kalluun, Digaag, Hilib duban, Cabitaanno dabiici ah, Macmacaan, Miisaska iyo Gudaha maqaayadda).
   - Nidaam ka hortagaya in sawirku go'o (Auto fallback).

3. **Bogga Hore (Customer Experience & Online Ordering)**:
   - Banner weyn oo soo jiidasho leh oo leh cuntooyinka maanta iyo badhamada degdegga ah.
   - **Cuntooyinka Ugu Caansan** oo leh qiimo iyo badhanka "Ku dar Dalabka".
   - **Liiska Cuntada oo Dhammaystiran (Menu)** oo leh 9 qaybood:
     - Quraac
     - Qado
     - Casho
     - Bariis iyo baasto
     - Hilib iyo digaag
     - Kalluun
     - Burger iyo pizza
     - Cabitaanno
     - Macmacaan
   - Raadinta degdegga ah (Live Search) iyo kala shaandhaynta cuntooyinka.
   - **Gaadhiga Dalabka (Shopping Cart & Checkout)**:
     - Xisaabinta qiimaha, cashuurta (tax) iyo kharashka gaarsiinta.
     - Hababka lacag bixinta: **Kaash, EVC Plus, Zaad Service, Sahal, iyo Kaar Bangi**.
     - Soo saarista rasiid daabacan oo rasmi ah (#SAV-...).
   - **Qabsashada Miiska (Table Reservation)**:
     - Foom toos ah oo loogu talagalay macaamiisha.
     - Ka hortagga in hal miis laba jeer isla waqtigaas la qabsado (**Double-booking prevention**).

4. **Bogga Maamulka (Admin Dashboard - 10-ka Qaybood)**:
   - **1. Guudmarka**: 5 kaar oo xisaabeed (Dalabaadka maanta, dakhliga, macaamiisha, miisaska bannaan, dalabaadka sugaya) + 2 jaantus oo firfircoon (Sales Bar Chart & Top Dishes Doughnut Chart).
   - **2. Maamulka Cuntada**: Ku dar cunto cusub, wax ka beddel, tirtir, beddel xaaladda (La heli karo / Waa dhammaatay).
   - **3. Dalabaadka**: Maamulka dalabaadka, beddelka xaaladda (La sugayo, La diyaarinayo, Diyaar ah, La geeyey, La baajiyey), rasiidhada oo la daabacan karo.
   - **4. Qabsashada Miisaska**: Liiska boosaska la qabsaday, xaqiijinta, baajinta iyo xakamaynta waqtiyada.
   - **5. Miisaska Maqaayadda**: Khariidadda kuraasta iyo miisaska (Miiska 1 ilaa 12), midabbada xaaladda (Bannaan - Cagaar, La qabsaday - Dahab, Macaamiil baa fadhiya - Casaan).
   - **6. Macaamiisha**: Magaca, telefoonka, tirada dalabaadka, wadarta lacagta uu bixiyey iyo dalabkii ugu dambeeyey.
   - **7. Shaqaalaha**: Maamulka shaqaalaha, shaqadooda (Maamule, Chef, Waiter, Cashier, Delivery, Cleaner), mushaharka iyo xaaladda shaqada.
   - **8. Kaydka Alaabta (Inventory)**: Alaabta kushiinka, xaddiga kaydka, halbeegyada (kg, litir, xabbo), iyo **Digniin toos ah marka kaydku yaraado** oo leh badhamo degdeg ah (+5 / -1).
   - **9. Warbixinnada Iibka**: Iibka maanta, toddobaadkan, bishan iyo guud ahaan dakhliga, cuntooyinka ugu iibka badan, iyo badhanka "Daabac Warbixinta".
   - **10. Dejinta**: Magaca maqaayadda, telefoonka, cinwaanka, saacadaha shaqada, cashuurta, kaydinta iyo soo dejinta xogta (JSON Export & Reset).

5. **Kaydinta Xogta (LocalStorage)**:
   - Dhammaan xogta (cuntooyinka, dalabaadka, miisaska, shaqaalaha, kaydka) waxay ku kaydsan yihiin browser-ka `localStorage`.
   - Waxaa ku jira xog tusaale ah oo aad markiiba tijaabin karto.

---

### 🚀 Sida Loo Furo Website-ka Kombiyuutarkaaga

1. **Habka Tooska ah**:
   - Tag galka: `c:\Users\Hp\Desktop\isro`
   - Labo jeer guji (Double Click) faylka **`index.html`**.
   - Wuxuu si toos ah uga furmi doonaa browser-kaaga (Chrome, Edge, Firefox iwm).

2. **Habka Local Server (Node.js)**:
   Haddii aad rabto inaad u furto sida server maxalli ah:
   ```powershell
   cd c:\Users\Hp\Desktop\isro
   npx serve .
   ```
   Ka dibna ka fur browser-kaaga: `http://localhost:3000`

---

### 🌐 Sida Loogu Daabaco Internetka (Free Hosting)

Website-kani waa Static Web App (HTML, CSS, JS), waxaana si bilaash ah loogu daabaci karaa daqiiqado gudahood:

1. **Netlify**:
   - Tag barta [Netlify.com](https://www.netlify.com).
   - Soo qaad (Drag & Drop) galka `isro` oo ku rid qaybta "Deploy".
   - Isla markiiba waxaad helaysaa link internet ah oo toos u shaqaynaya.

2. **Vercel**:
   - Tag [Vercel.com](https://vercel.com) oo ku xir akoonkaaga GitHub, ama soo geli galka.

3. **GitHub Pages**:
   - Ku shub mashruuca GitHub Repository.
   - Tag **Settings** > **Pages** > Ka dooro `main branch` oo guji **Save**.

---

### 📁 Qaab-dhismeedka Faylasha

```text
isro/
├── index.html          # Bogga ugu weyn (Customer site & Admin layout & Modals)
├── style.css           # Naqshadda, midabbada (Cagaar & Dahab), Dark mode, Print styles
├── script.js           # Xogta, Shaqada JavaScript, LocalStorage, Xisaabinta, Charts
├── README.md           # Tilmaamaha nidaamka
└── assets/
    ├── chart.min.js    # Maktabadda jaantusyada (Local Chart.js)
    └── images/         # 27 sawir oo tayo sare leh oo cuntooyin iyo maqaayad ah
```
