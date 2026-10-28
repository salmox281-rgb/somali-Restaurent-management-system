/* ===================================================================
   SAVORA RESTAURANT MANAGEMENT SYSTEM - SCRIPT.JS
   Nidaamka Maamulka Maqaayadda ee Savora
   Af-Soomaali & LocalStorage State Management
=================================================================== */

'use strict';

// ===================================================================
// 1. XOGTA ASALKA AH EE TUUSAALAHA (DEFAULT SEED DATA)
// ===================================================================

const DEFAULT_SETTINGS = {
  restaurantName: "Savora Restaurant",
  tagline: "Dhadhan & Soo Dhaweyn Heer Sare ah",
  phone: "+252 61 555 4321 / +252 63 444 7890",
  address: "Wadada Maka Al-Mukarama, Degmada Hodan, Muqdisho",
  email: "info@savorarestaurant.so",
  hours: "Sabti - Jimce: 06:30 Subaxnimo - 11:30 Habeennimo",
  currency: "$",
  taxRate: 5, // 5%
  deliveryFee: 2.00,
  theme: "light"
};

const DEFAULT_MENU = [
  {
    id: "dish-1",
    name: "Bariis iyo Hilib Ari Curdan ah",
    category: "bariis-baasto",
    mealTime: "qado",
    price: 13.50,
    desc: "Bariis basmati udgoon oo lagu kariyey xawaashka Savora, hilib ari duban, maraq iyo basbaas cagaaran.",
    image: "assets/images/bariis-hilib.jpg",
    status: "available",
    popular: true
  },
  {
    id: "dish-2",
    name: "Bariis iyo Digaag Dahabi ah",
    category: "bariis-baasto",
    mealTime: "qado",
    price: 10.50,
    desc: "Bariis udgoon oo lagu weheliyo digaag si fiican loo dubay oo jilicsan, salad iyo maraq macaan.",
    image: "assets/images/bariis-digaag.jpg",
    status: "available",
    popular: true
  },
  {
    id: "dish-3",
    name: "Baasto Suugo Hilib leh (Bolognese)",
    category: "bariis-baasto",
    mealTime: "casho",
    price: 9.00,
    desc: "Baasto Talyaani oo lagu kariyey suugo yaanyo qani ah, hilib lo'aad oo jilicsan iyo jiis Parmesan.",
    image: "assets/images/baasto-bolognese.jpg",
    status: "available",
    popular: true
  },
  {
    id: "dish-4",
    name: "Baasto Cad Alfredo oo Digaag leh",
    category: "bariis-baasto",
    mealTime: "casho",
    price: 11.00,
    desc: "Fettuccine pasta oo leh maraq kareem cad, digaag duban, subag iyo jiis dhalaalaya.",
    image: "assets/images/baasto-alfredo.jpg",
    status: "available",
    popular: false
  },
  {
    id: "dish-5",
    name: "Hilib Ari Duban oo Firiirixsan",
    category: "hilib-digaag",
    mealTime: "qado",
    price: 14.50,
    desc: "Hilib ari curdan ah oo la marin mariyey xawaash dabiici ah laguna dubay dhuxul, oo leh basbaas iyo liin.",
    image: "assets/images/hilib-ari.jpg",
    status: "available",
    popular: true
  },
  {
    id: "dish-6",
    name: "Digaag Duban oo Dhammaystiran",
    category: "hilib-digaag",
    mealTime: "casho",
    price: 12.00,
    desc: "Digaag dhan oo lagu dubay foornada oo leh baradho shiilan, maraq toon iyo rooti kulul.",
    image: "assets/images/digaag-duban.jpg",
    status: "available",
    popular: false
  },
  {
    id: "dish-7",
    name: "Steak Hilib Lo'aad oo Duban",
    category: "hilib-digaag",
    mealTime: "casho",
    price: 16.00,
    desc: "Cad hilib lo'aad ah oo tayo sare leh oo lagu dubay xawaash rosemary, subag iyo khudaar cagaaran.",
    image: "assets/images/hilib-steak.jpg",
    status: "available",
    popular: false
  },
  {
    id: "dish-8",
    name: "Kalluun Duban oo Liin & Xawaash leh",
    category: "kalluun",
    mealTime: "qado",
    price: 15.00,
    desc: "Kalluun cusub oo badda laga keenay, lagu dubay xawaashka gaarka ah ee Savora iyo liin dhanaan.",
    image: "assets/images/kalluun-duban.jpg",
    status: "available",
    popular: true
  },
  {
    id: "dish-9",
    name: "Maraq Kalluun & Seafood oo Qani ah",
    category: "kalluun",
    mealTime: "casho",
    price: 13.00,
    desc: "Kalluun iyo suugo caraf badan oo leh khudaar, toonta, sinjibiil iyo xawaash Soomaali dhab ah.",
    image: "assets/images/kalluun-soup.jpg",
    status: "available",
    popular: false
  },
  {
    id: "dish-10",
    name: "Pizza Supreme oo Hilib & Jiis leh",
    category: "burger-pizza",
    mealTime: "casho",
    price: 12.50,
    desc: "Pizza weyn oo leh jiis mozzarella dhalaalaya, hilib lo'aad, basbaas cagaaran, likaha iyo saytuun.",
    image: "assets/images/pizza-supreme.jpg",
    status: "available",
    popular: true
  },
  {
    id: "dish-11",
    name: "Pizza Digaag & BBQ",
    category: "burger-pizza",
    mealTime: "casho",
    price: 11.50,
    desc: "Pizza dhuuban oo leh digaag lagu dubay BBQ suugo, basasha gaduudan iyo jiis mozzarella badan.",
    image: "assets/images/pizza-chicken.jpg",
    status: "available",
    popular: false
  },
  {
    id: "dish-12",
    name: "Gourmet Beef Burger & Baradho Shiilan",
    category: "burger-pizza",
    mealTime: "casho",
    price: 8.50,
    desc: "Burger hilib lo'aad ah oo leh jiis cheddar, salaar cagaaran, yaanyo iyo suugo gaar ah, oo leh fries.",
    image: "assets/images/burger-beef.jpg",
    status: "available",
    popular: true
  },
  {
    id: "dish-13",
    name: "Burger Digaag Qallalan (Crispy Chicken)",
    category: "burger-pizza",
    mealTime: "casho",
    price: 8.00,
    desc: "Burger digaag shiilan oo qallalan, majones macaan, salaar iyo qajaar dhanaan oo rooti brioche ku dhex jira.",
    image: "assets/images/burger-chicken.jpg",
    status: "available",
    popular: false
  },
  {
    id: "dish-14",
    name: "Quraac Canjeero, Beer & Shaah Cadays",
    category: "quraac",
    mealTime: "quraac",
    price: 7.50,
    desc: "Canjeero Soomaali ah oo jilicsan, beer ari la shiilay oo basasha iyo basbaas leh, iyo koob shaah cadays ah.",
    image: "assets/images/quraac-canjeero.jpg",
    status: "available",
    popular: true
  },
  {
    id: "dish-15",
    name: "Quraac Ukun Omelette & Rooti Duban",
    category: "quraac",
    mealTime: "quraac",
    price: 6.00,
    desc: "Ukun lagu shiilay khudaar kala duwan, rooti la dubay, subag dabiici ah iyo faash salad ah.",
    image: "assets/images/quraac-omelette.jpg",
    status: "available",
    popular: false
  },
  {
    id: "dish-16",
    name: "Cabitaan Cambe Dabiici ah (Mango Fresh)",
    category: "cabitaanno",
    mealTime: "qado",
    price: 3.50,
    desc: "Cambe cusub oo macaan oo la miiray bilaa biyo dheeraad ah, oo baraf leh.",
    image: "assets/images/cabitaan-cambe.jpg",
    status: "available",
    popular: true
  },
  {
    id: "dish-17",
    name: "Cabitaan Liin & Naanaac Qabow",
    category: "cabitaanno",
    mealTime: "qado",
    price: 3.00,
    desc: "Liin dhanaan cusub, caleenta naanaaca udgoon, malab iyo baraf qabow.",
    image: "assets/images/cabitaan-liin.jpg",
    status: "available",
    popular: false
  },
  {
    id: "dish-18",
    name: "Shaah Cadays Xawaash leh (Somali Chai)",
    category: "cabitaanno",
    mealTime: "quraac",
    price: 2.00,
    desc: "Shaah caano leh oo lagu kariyey heylo, qorfe, filfil iyo dhego yare.",
    image: "assets/images/shaah-somali.jpg",
    status: "available",
    popular: true
  },
  {
    id: "dish-19",
    name: "Xalwo Soomaali Macaan & Buskud",
    category: "macmacaan",
    mealTime: "casho",
    price: 4.50,
    desc: "Xalwo diiran oo subag saafi ah leh, lows iyo xawaash caraf badan, oo leh buskud.",
    image: "assets/images/macmacaan-halwa.jpg",
    status: "available",
    popular: true
  },
  {
    id: "dish-20",
    name: "Keeg Shukulaato (Chocolate Lava Cake)",
    category: "macmacaan",
    mealTime: "casho",
    price: 5.50,
    desc: "Keeg shukulaato macaan oo marka la jeexo gudaha shukulaato kulul ka shubmayso.",
    image: "assets/images/macmacaan-cake.jpg",
    status: "available",
    popular: false
  },
  {
    id: "dish-21",
    name: "Jalaato Ice Cream oo Kala Duwan",
    category: "macmacaan",
    mealTime: "casho",
    price: 4.00,
    desc: "Saddex xabbo oo jalaato ah oo kala ah vanila, shukulaato iyo strawberry.",
    image: "assets/images/macmacaan-icecream.jpg",
    status: "available",
    popular: false
  }
];

const DEFAULT_TABLES = [
  { id: "T-1", name: "Miiska 1", capacity: 2, status: "Bannaan", notes: "Daaqadda u dhow" },
  { id: "T-2", name: "Miiska 2", capacity: 2, status: "Macaamiil baa fadhiya", notes: "Labada qof" },
  { id: "T-3", name: "Miiska 3", capacity: 4, status: "Bannaan", notes: "Dhexe" },
  { id: "T-4", name: "Miiska 4", capacity: 4, status: "La qabsaday", notes: "Qado sharaf 1:00 PM" },
  { id: "T-5", name: "Miiska 5", capacity: 4, status: "Bannaan", notes: "Koonaha bidix" },
  { id: "T-6", name: "Miiska 6", capacity: 6, status: "Macaamiil baa fadhiya", notes: "Qoys ballaaran" },
  { id: "T-7", name: "Miiska 7", capacity: 6, status: "Bannaan", notes: "Qoysaska" },
  { id: "T-8", name: "Miiska 8", capacity: 4, status: "Bannaan", notes: "Beerta u dhow" },
  { id: "T-9", name: "Miiska 9", capacity: 2, status: "Bannaan", notes: "Fadhi deggan" },
  { id: "T-10", name: "Miiska 10 (VIP)", capacity: 8, status: "La qabsaday", notes: "Qolka gaarka ah VIP" },
  { id: "T-11", name: "Miiska 11 (VIP)", capacity: 10, status: "Bannaan", notes: "Shirarka & Xafladaha" },
  { id: "T-12", name: "Miiska 12", capacity: 4, status: "Bannaan", notes: "Bannaanka (Terrace)" }
];

const DEFAULT_ORDERS = [
  {
    id: "#SAV-1001",
    customerName: "Faarax Cali Warsame",
    customerPhone: "+252 61 555 4321",
    type: "dine-in",
    location: "Miiska 4",
    items: [
      { id: "dish-1", name: "Bariis iyo Hilib Ari Curdan ah", price: 13.50, qty: 2 },
      { id: "dish-16", name: "Cabitaan Cambe Dabiici ah", price: 3.50, qty: 2 }
    ],
    subtotal: 34.00,
    tax: 1.70,
    deliveryFee: 0,
    total: 35.70,
    date: new Date().toISOString().split("T")[0],
    time: "12:45",
    paymentMethod: "EVC Plus",
    status: "La diyaarinayo"
  },
  {
    id: "#SAV-1002",
    customerName: "Leyla Axmed Nuur",
    customerPhone: "+252 61 888 1234",
    type: "delivery",
    location: "Degmada Hodan, Wadada Taleex",
    items: [
      { id: "dish-10", name: "Pizza Supreme oo Hilib & Jiis leh", price: 12.50, qty: 1 },
      { id: "dish-12", name: "Gourmet Beef Burger & Fries", price: 8.50, qty: 1 },
      { id: "dish-17", name: "Cabitaan Liin & Naanaac", price: 3.00, qty: 2 }
    ],
    subtotal: 27.00,
    tax: 1.35,
    deliveryFee: 2.00,
    total: 30.35,
    date: new Date().toISOString().split("T")[0],
    time: "11:30",
    paymentMethod: "Zaad Service",
    status: "Diyaar ah"
  },
  {
    id: "#SAV-1003",
    customerName: "Maxamed Xasan Jaamac",
    customerPhone: "+252 63 444 9988",
    type: "dine-in",
    location: "Miiska 2",
    items: [
      { id: "dish-8", name: "Kalluun Duban oo Liin & Xawaash leh", price: 15.00, qty: 1 },
      { id: "dish-18", name: "Shaah Cadays Xawaash leh", price: 2.00, qty: 1 }
    ],
    subtotal: 17.00,
    tax: 0.85,
    deliveryFee: 0,
    total: 17.85,
    date: new Date().toISOString().split("T")[0],
    time: "10:15",
    paymentMethod: "Kaash (Cash)",
    status: "La geeyey ama la dhiibay"
  },
  {
    id: "#SAV-1004",
    customerName: "Deeqa Cumar Cabdi",
    customerPhone: "+252 61 777 5544",
    type: "delivery",
    location: "Wadada Maka Al-Mukarama, Dhismaha SomTel",
    items: [
      { id: "dish-5", name: "Hilib Ari Duban oo Firiirixsan", price: 14.50, qty: 2 },
      { id: "dish-19", name: "Xalwo Soomaali Macaan", price: 4.50, qty: 2 }
    ],
    subtotal: 38.00,
    tax: 1.90,
    deliveryFee: 2.00,
    total: 41.90,
    date: new Date(Date.now() - 86400000).toISOString().split("T")[0], // shalay
    time: "13:20",
    paymentMethod: "EVC Plus",
    status: "La geeyey ama la dhiibay"
  },
  {
    id: "#SAV-1005",
    customerName: "Xuseen Warsame Guuleed",
    customerPhone: "+252 61 222 3344",
    type: "dine-in",
    location: "Miiska 6",
    items: [
      { id: "dish-2", name: "Bariis iyo Digaag Dahabi ah", price: 10.50, qty: 3 },
      { id: "dish-16", name: "Cabitaan Cambe", price: 3.50, qty: 3 }
    ],
    subtotal: 42.00,
    tax: 2.10,
    deliveryFee: 0,
    total: 44.10,
    date: new Date(Date.now() - 86400000 * 2).toISOString().split("T")[0],
    time: "19:40",
    paymentMethod: "Sahal",
    status: "La geeyey ama la dhiibay"
  },
  {
    id: "#SAV-1006",
    customerName: "Sahra Yuusuf Ibraahim",
    customerPhone: "+252 61 333 7788",
    type: "takeaway",
    location: "Goobta laga qaadanayo",
    items: [
      { id: "dish-3", name: "Baasto Suugo Hilib leh", price: 9.00, qty: 1 }
    ],
    subtotal: 9.00,
    tax: 0.45,
    deliveryFee: 0,
    total: 9.45,
    date: new Date().toISOString().split("T")[0],
    time: "13:10",
    paymentMethod: "Kaash (Cash)",
    status: "La sugayo"
  }
];

const DEFAULT_RESERVATIONS = [
  {
    id: "RES-101",
    customerName: "Faarax Cali Warsame",
    customerPhone: "+252 61 555 4321",
    guests: 4,
    tableId: "T-4",
    tableName: "Miiska 4",
    date: new Date().toISOString().split("T")[0],
    time: "13:00",
    status: "La xaqiijiyey",
    notes: "Qado qoys"
  },
  {
    id: "RES-102",
    customerName: "Eng. Cabdullaahi Barre",
    customerPhone: "+252 61 999 8877",
    guests: 8,
    tableId: "T-10",
    tableName: "Miiska 10 (VIP)",
    date: new Date().toISOString().split("T")[0],
    time: "19:30",
    status: "La xaqiijiyey",
    notes: "Kulan shirkad gaar ah"
  },
  {
    id: "RES-103",
    customerName: "Hodan Maxamuud Cilmi",
    customerPhone: "+252 61 444 3322",
    guests: 2,
    tableId: "T-1",
    tableName: "Miiska 1",
    date: new Date(Date.now() + 86400000).toISOString().split("T")[0], // berri
    time: "20:00",
    status: "La sugayo",
    notes: "Fadhi casho"
  }
];

const DEFAULT_CUSTOMERS = [
  { id: "C-1", name: "Faarax Cali Warsame", phone: "+252 61 555 4321", ordersCount: 7, totalSpent: 185.50, lastOrder: "Maanta" },
  { id: "C-2", name: "Leyla Axmed Nuur", phone: "+252 61 888 1234", ordersCount: 5, totalSpent: 142.00, lastOrder: "Maanta" },
  { id: "C-3", name: "Maxamed Xasan Jaamac", phone: "+252 63 444 9988", ordersCount: 4, totalSpent: 89.00, lastOrder: "Maanta" },
  { id: "C-4", name: "Deeqa Cumar Cabdi", phone: "+252 61 777 5544", ordersCount: 9, totalSpent: 260.00, lastOrder: "Shalay" },
  { id: "C-5", name: "Xuseen Warsame Guuleed", phone: "+252 61 222 3344", ordersCount: 3, totalSpent: 75.50, lastOrder: "2 maalmood kahor" },
  { id: "C-6", name: "Sahra Yuusuf Ibraahim", phone: "+252 61 333 7788", ordersCount: 2, totalSpent: 38.00, lastOrder: "Maanta" },
  { id: "C-7", name: "Cabdiraxmaan Nuur", phone: "+252 61 111 2233", ordersCount: 12, totalSpent: 395.00, lastOrder: "3 maalmood kahor" },
  { id: "C-8", name: "Nimco Jaamac Warsame", phone: "+252 61 666 4455", ordersCount: 6, totalSpent: 168.00, lastOrder: "5 maalmood kahor" }
];

const DEFAULT_STAFF = [
  { id: "S-1", name: "Cusmaan Cabdi Geedi", role: "Maamule", phone: "+252 61 500 1100", salary: 650, startDate: "2023-01-15", status: "Shaqaynaya" },
  { id: "S-2", name: "Chef Axmed Yuusuf (Xiddig)", role: "Madaxa Kushiinka (Chef)", phone: "+252 61 500 2200", salary: 750, startDate: "2023-03-01", status: "Shaqaynaya" },
  { id: "S-3", name: "Khadra Maxamed Cali", role: "Qasnaji (Cashier)", phone: "+252 61 500 3300", salary: 400, startDate: "2023-06-10", status: "Shaqaynaya" },
  { id: "S-4", name: "Mustaf Cumar Xasan", role: "Kabariye (Waiter)", phone: "+252 61 500 4400", salary: 320, startDate: "2024-01-20", status: "Shaqaynaya" },
  { id: "S-5", name: "Aamino Maxamuud", role: "Kabariye (Waiter)", phone: "+252 61 500 5500", salary: 320, startDate: "2024-02-14", status: "Fasax ku maqan" },
  { id: "S-6", name: "Bilal Xasan Nuur", role: "Gaarsiye (Delivery)", phone: "+252 61 500 6600", salary: 350, startDate: "2024-05-01", status: "Shaqaynaya" },
  { id: "S-7", name: "Saadaq Cabdullaahi", role: "Nadiifiye", phone: "+252 61 500 7700", salary: 280, startDate: "2023-09-01", status: "Shaqaynaya" }
];

const DEFAULT_INVENTORY = [
  { id: "INV-1", name: "Bariis Basmati Qani Ah", category: "Bariis & Bur", qty: 85, unit: "Kiilo (kg)", price: 1.80, threshold: 20, dateAdded: "2026-10-20" },
  { id: "INV-2", name: "Hilib Ari Cusub", category: "Hilib & Digaag", qty: 28, unit: "Kiilo (kg)", price: 8.50, threshold: 15, dateAdded: "2026-10-27" },
  { id: "INV-3", name: "Hilib Digaag Foorno", category: "Hilib & Digaag", qty: 8, unit: "Kiilo (kg)", price: 5.00, threshold: 12, dateAdded: "2026-10-26" }, // Low Stock!
  { id: "INV-4", name: "Kalluun Qaboojiye Badda", category: "Hilib & Digaag", qty: 6, unit: "Kiilo (kg)", price: 9.00, threshold: 10, dateAdded: "2026-10-27" }, // Low Stock!
  { id: "INV-5", name: "Saliid Cunto Safiir", category: "Saliid & Xawaash", qty: 45, unit: "Litir (L)", price: 2.20, threshold: 15, dateAdded: "2026-10-22" },
  { id: "INV-6", name: "Yaanyo & Basal Cusub", category: "Khudaar & Miro", qty: 60, unit: "Kiilo (kg)", price: 1.20, threshold: 20, dateAdded: "2026-10-28" },
  { id: "INV-7", name: "Jiis Mozzarella Pizza", category: "Bariis & Bur", qty: 5, unit: "Kiilo (kg)", price: 6.50, threshold: 8, dateAdded: "2026-10-25" }, // Low Stock!
  { id: "INV-8", name: "Cambe Dabiici ah", category: "Khudaar & Miro", qty: 35, unit: "Kiilo (kg)", price: 1.50, threshold: 10, dateAdded: "2026-10-28" },
  { id: "INV-9", name: "Liin Dhanaan & Naanaac", category: "Khudaar & Miro", qty: 18, unit: "Kiilo (kg)", price: 1.00, threshold: 8, dateAdded: "2026-10-28" },
  { id: "INV-10", name: "Sonkor Cad", category: "Saliid & Xawaash", qty: 50, unit: "Kiilo (kg)", price: 1.10, threshold: 15, dateAdded: "2026-10-18" },
  { id: "INV-11", name: "Caleenta Shaaha Soomaaliga", category: "Saliid & Xawaash", qty: 22, unit: "Kiilo (kg)", price: 3.50, threshold: 6, dateAdded: "2026-10-15" },
  { id: "INV-12", name: "Biyo Macaan & Cabitaanno", category: "Cabitaanno", qty: 120, unit: "Kartoon", price: 5.00, threshold: 25, dateAdded: "2026-10-24" }
];


// ===================================================================
// 2. NIDAAMKA MAAMULKA XOGTA GUUD (STATE MANAGEMENT & STORAGE)
// ===================================================================

class RestaurantSystem {
  constructor() {
    this.menu = [];
    this.tables = [];
    this.orders = [];
    this.reservations = [];
    this.customers = [];
    this.staff = [];
    this.inventory = [];
    this.settings = {};
    this.cart = [];
    this.activeCategory = "all";
    this.revenueChart = null;
    this.dishesChart = null;
  }

  init() {
    this.loadState();
    this.applyTheme(this.settings.theme || "light");
    this.initClock();
    this.setupEventListeners();
    this.renderCustomerView();
    this.renderAdminView();
    console.log("Savora Restaurant Management System si guul leh ayaa loo furay.");
  }

  loadState() {
    this.settings = this.getStorage("savora_settings", DEFAULT_SETTINGS);
    this.menu = this.getStorage("savora_menu", DEFAULT_MENU);
    this.tables = this.getStorage("savora_tables", DEFAULT_TABLES);
    this.orders = this.getStorage("savora_orders", DEFAULT_ORDERS);
    this.reservations = this.getStorage("savora_reservations", DEFAULT_RESERVATIONS);
    this.customers = this.getStorage("savora_customers", DEFAULT_CUSTOMERS);
    this.staff = this.getStorage("savora_staff", DEFAULT_STAFF);
    this.inventory = this.getStorage("savora_inventory", DEFAULT_INVENTORY);
    this.cart = this.getStorage("savora_cart", []);
  }

  saveState() {
    localStorage.setItem("savora_settings", JSON.stringify(this.settings));
    localStorage.setItem("savora_menu", JSON.stringify(this.menu));
    localStorage.setItem("savora_tables", JSON.stringify(this.tables));
    localStorage.setItem("savora_orders", JSON.stringify(this.orders));
    localStorage.setItem("savora_reservations", JSON.stringify(this.reservations));
    localStorage.setItem("savora_customers", JSON.stringify(this.customers));
    localStorage.setItem("savora_staff", JSON.stringify(this.staff));
    localStorage.setItem("savora_inventory", JSON.stringify(this.inventory));
    localStorage.setItem("savora_cart", JSON.stringify(this.cart));
  }

  getStorage(key, fallback) {
    try {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : fallback;
    } catch (e) {
      console.warn("Storage parse error:", e);
      return fallback;
    }
  }

  resetToDefaultData() {
    if (confirm("Ma hubtaa inaad dib u soo celiso dhammaan xogtii asalka ahayd ee tusaalaha? Xogtii aad galisay way tirtirmi doontaa.")) {
      localStorage.clear();
      this.settings = JSON.parse(JSON.stringify(DEFAULT_SETTINGS));
      this.menu = JSON.parse(JSON.stringify(DEFAULT_MENU));
      this.tables = JSON.parse(JSON.stringify(DEFAULT_TABLES));
      this.orders = JSON.parse(JSON.stringify(DEFAULT_ORDERS));
      this.reservations = JSON.parse(JSON.stringify(DEFAULT_RESERVATIONS));
      this.customers = JSON.parse(JSON.stringify(DEFAULT_CUSTOMERS));
      this.staff = JSON.parse(JSON.stringify(DEFAULT_STAFF));
      this.inventory = JSON.parse(JSON.stringify(DEFAULT_INVENTORY));
      this.cart = [];
      this.saveState();
      this.init();
      this.showToast("Xogtii tusaalaha si guul leh ayaa dib loogu soo celiyey!", "success");
    }
  }

  exportDataJSON() {
    const fullBackup = {
      settings: this.settings,
      menu: this.menu,
      tables: this.tables,
      orders: this.orders,
      reservations: this.reservations,
      customers: this.customers,
      staff: this.staff,
      inventory: this.inventory,
      exportedAt: new Date().toISOString()
    };
    const blob = new Blob([JSON.stringify(fullBackup, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `savora_backup_${new Date().toISOString().split("T")[0]}.json`;
    a.click();
    this.showToast("Kaydka xogta JSON si guul leh ayaa loo soo dejiyey!", "success");
  }

  // ===================================================================
  // 3. UI VIEW SWITCHER & THEME
  // ===================================================================

  switchToAdmin() {
    document.getElementById("customerView").style.display = "none";
    document.getElementById("adminView").style.display = "block";
    window.scrollTo({ top: 0, behavior: "smooth" });
    this.renderAdminView();
    this.showToast("Waxaad ku jirtaa Qaybta Maamulka ee Savora", "info");
  }

  switchToCustomer() {
    document.getElementById("adminView").style.display = "none";
    document.getElementById("customerView").style.display = "block";
    window.scrollTo({ top: 0, behavior: "smooth" });
    this.renderCustomerView();
  }

  toggleTheme() {
    const current = document.documentElement.getAttribute("data-theme") || "light";
    const next = current === "light" ? "dark" : "light";
    this.applyTheme(next);
  }

  applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    this.settings.theme = theme;
    this.saveState();
    
    // Update theme toggle icons
    document.querySelectorAll(".theme-toggle-btn i").forEach(icon => {
      icon.className = theme === "dark" ? "fa-solid fa-sun" : "fa-solid fa-moon";
    });

    // Re-render charts with matching colors if initialized
    if (this.revenueChart) {
      this.initCharts();
    }
  }

  initClock() {
    const clockEl = document.getElementById("clockText");
    const update = () => {
      const now = new Date();
      const somaliDays = ["Axad", "Isniin", "Talaado", "Arbaco", "Khamiis", "Jimce", "Sabti"];
      const somaliMonths = [
        "Janaayo", "Febraayo", "Maarso", "Abriil", "May", "Juun",
        "Luuliyo", "Ogosto", "Sebtembar", "Oktoobar", "Nofembar", "Diseembar"
      ];
      
      const dayName = somaliDays[now.getDay()];
      const day = now.getDate();
      const monthName = somaliMonths[now.getMonth()];
      const year = now.getFullYear();
      
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');

      if (clockEl) {
        clockEl.textContent = `${dayName}, ${day} ${monthName} ${year} - ${hours}:${minutes}:${seconds}`;
      }
    };
    update();
    setInterval(update, 1000);
  }

  // ===================================================================
  // 4. RENDERING BOGGA MACMIILKA (CUSTOMER SITE)
  // ===================================================================

  renderCustomerView() {
    this.updateStatsCounters();
    this.renderPopularDishes();
    this.renderFoodGrid();
    this.renderReservationTableSelect();
    this.renderCart();
    this.updateCartBadge();
    this.updateContactInfo();
  }

  updateStatsCounters() {
    const custEl = document.getElementById("statCustomersCount");
    const menuEl = document.getElementById("statMenuItemsCount");
    const tablesEl = document.getElementById("statTablesCount");

    if (custEl) custEl.textContent = `${this.customers.length * 150 + 2000}+`;
    if (menuEl) menuEl.textContent = `${this.menu.length}+`;
    if (tablesEl) tablesEl.textContent = `${this.tables.length}+`;
  }

  updateContactInfo() {
    const phoneEl = document.getElementById("contactPhone");
    const addressEl = document.getElementById("contactAddress");
    const hoursEl = document.getElementById("contactHours");

    if (phoneEl) phoneEl.innerHTML = this.settings.phone.replace("/", "<br>");
    if (addressEl) addressEl.textContent = this.settings.address;
    if (hoursEl) hoursEl.innerHTML = `Sabti - Jimce:<br><strong>${this.settings.hours}</strong>`;
  }

  renderPopularDishes() {
    const container = document.getElementById("popularFoodGrid");
    if (!container) return;

    const popular = this.menu.filter(m => m.popular).slice(0, 4);
    container.innerHTML = popular.map(dish => this.generateFoodCardHTML(dish, false)).join("");
  }

  renderFoodGrid() {
    const container = document.getElementById("mainFoodGrid");
    if (!container) return;

    const searchQuery = (document.getElementById("menuSearchInput")?.value || "").toLowerCase().trim();
    const availability = document.getElementById("menuAvailabilityFilter")?.value || "all";

    const filtered = this.menu.filter(item => {
      const matchCat = this.activeCategory === "all" || item.category === this.activeCategory;
      const matchSearch = item.name.toLowerCase().includes(searchQuery) || item.desc.toLowerCase().includes(searchQuery);
      const matchAvail = availability === "all" ? true : availability === "available" ? item.status === "available" : item.status === "unavailable";
      return matchCat && matchSearch && matchAvail;
    });

    if (filtered.length === 0) {
      container.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 50px 20px; color: var(--text-muted);">
          <i class="fa-solid fa-magnifying-glass" style="font-size: 3rem; margin-bottom: 12px; opacity: 0.4;"></i>
          <h3>Wax cunto ah lagama helin raadintaada</h3>
          <p>Fadlan isku day inaad raadiso erey kale ama dooro qayb kale.</p>
        </div>
      `;
      return;
    }

    container.innerHTML = filtered.map(dish => this.generateFoodCardHTML(dish, true)).join("");
  }

  generateFoodCardHTML(dish, showAdminControls = false) {
    const isAvail = dish.status === "available";
    const statusBadge = isAvail
      ? `<span class="badge badge-success"><i class="fa-solid fa-circle-check"></i> La heli karo</span>`
      : `<span class="badge badge-danger"><i class="fa-solid fa-circle-xmark"></i> Waa dhammaatay</span>`;

    const categoryNames = {
      "quraac": "Quraac",
      "qado": "Qado",
      "casho": "Casho",
      "bariis-baasto": "Bariis & Baasto",
      "hilib-digaag": "Hilib & Digaag",
      "kalluun": "Kalluun",
      "burger-pizza": "Burger & Pizza",
      "cabitaanno": "Cabitaanno",
      "macmacaan": "Macmacaan"
    };

    const catName = categoryNames[dish.category] || dish.category;

    return `
      <div class="food-card">
        <div class="food-card-img-wrap">
          <img src="${dish.image}" alt="${dish.name}" class="food-card-img" loading="lazy" onerror="this.onerror=null; this.src='assets/images/hero-dish.jpg';">
          <span class="food-badge-cat">${catName}</span>
          <div class="food-status-badge">${statusBadge}</div>
        </div>
        <div class="food-card-body">
          <h3 class="food-card-title">${dish.name}</h3>
          <p class="food-card-desc">${dish.desc}</p>
          <div class="food-card-footer">
            <span class="food-card-price">${this.settings.currency}${dish.price.toFixed(2)}</span>
            <div style="display: flex; gap: 6px;">
              <button class="btn btn-gold btn-sm" onclick="app.addToCart('${dish.id}')" ${!isAvail ? 'disabled style="opacity:0.5; cursor:not-allowed;"' : ''}>
                <i class="fa-solid fa-cart-plus"></i> Ku dar Dalabka
              </button>
              ${showAdminControls ? `
                <button class="action-btn" title="Wax ka beddel" onclick="app.openFoodModal('${dish.id}')">
                  <i class="fa-solid fa-pen-to-square"></i>
                </button>
                <button class="action-btn action-btn-danger" title="Tirtir" onclick="app.deleteFood('${dish.id}')">
                  <i class="fa-solid fa-trash"></i>
                </button>
              ` : ''}
            </div>
          </div>
        </div>
      </div>
    `;
  }

  renderReservationTableSelect() {
    const select = document.getElementById("resTableSelect");
    const adminSelect = document.getElementById("adminResTableSelect");
    const orderSelect = document.getElementById("orderTableSelect");

    const optionsHTML = this.tables.map(table => {
      const isOccupied = table.status === "Macaamiil baa fadhiya";
      const isReserved = table.status === "La qabsaday";
      const tag = isOccupied ? " (Waa buuxaa)" : isReserved ? " (La qabsaday)" : " (Bannaan)";
      return `<option value="${table.id}">${table.name} (${table.capacity} Qof) - ${table.status}</option>`;
    }).join("");

    if (select) select.innerHTML = optionsHTML;
    if (adminSelect) adminSelect.innerHTML = optionsHTML;
    if (orderSelect) orderSelect.innerHTML = optionsHTML;
  }

  // ===================================================================
  // 5. CART & CHECKOUT LOGIC
  // ===================================================================

  addToCart(dishId) {
    const dish = this.menu.find(d => d.id === dishId);
    if (!dish) return;

    if (dish.status === "unavailable") {
      this.showToast(`Waan ka xunnahay, "${dish.name}" hadda way dhammaatay!`, "warning");
      return;
    }

    const existing = this.cart.find(c => c.id === dishId);
    if (existing) {
      existing.qty += 1;
    } else {
      this.cart.push({
        id: dish.id,
        name: dish.name,
        price: dish.price,
        image: dish.image,
        qty: 1
      });
    }

    this.saveState();
    this.renderCart();
    this.updateCartBadge();
    this.showToast(`"${dish.name}" waxaa lagu daray dalabkaaga!`, "success");
  }

  quickOrderSpecial() {
    const special = this.menu.find(d => d.id === "dish-5") || this.menu[0];
    if (special) {
      this.addToCart(special.id);
      this.openCart();
    }
  }

  updateCartQty(dishId, delta) {
    const item = this.cart.find(c => c.id === dishId);
    if (!item) return;

    item.qty += delta;
    if (item.qty <= 0) {
      this.cart = this.cart.filter(c => c.id !== dishId);
    }
    this.saveState();
    this.renderCart();
    this.updateCartBadge();
  }

  removeFromCart(dishId) {
    this.cart = this.cart.filter(c => c.id !== dishId);
    this.saveState();
    this.renderCart();
    this.updateCartBadge();
    this.showToast("Cuntada waa laga saaray dalabkaaga.", "info");
  }

  renderCart() {
    const list = document.getElementById("cartItemsList");
    const footer = document.getElementById("cartFooter");
    if (!list) return;

    if (this.cart.length === 0) {
      list.innerHTML = `
        <div class="cart-empty-state">
          <i class="fa-solid fa-basket-shopping"></i>
          <h4>Dalabkaagu hadda waa faaruq</h4>
          <p>Kuma jiraan wax cunto ah. Dooro cuntooyinka aad jeceshahay si aad u dalbato.</p>
        </div>
      `;
      if (footer) footer.style.display = "none";
      return;
    }

    if (footer) footer.style.display = "block";

    list.innerHTML = this.cart.map(item => `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}" class="cart-item-img" onerror="this.onerror=null; this.src='assets/images/hero-dish.jpg';">
        <div class="cart-item-details">
          <div class="cart-item-name">${item.name}</div>
          <div class="cart-item-price">${this.settings.currency}${(item.price * item.qty).toFixed(2)}</div>
        </div>
        <div class="cart-item-qty">
          <button class="qty-btn" onclick="app.updateCartQty('${item.id}', -1)">-</button>
          <span class="qty-count">${item.qty}</span>
          <button class="qty-btn" onclick="app.updateCartQty('${item.id}', 1)">+</button>
        </div>
        <button class="cart-item-del" onclick="app.removeFromCart('${item.id}')" title="Ka saar">
          <i class="fa-solid fa-trash-can"></i>
        </button>
      </div>
    `).join("");

    // Calculate totals
    const subtotal = this.cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    const tax = subtotal * (this.settings.taxRate / 100);
    const deliveryFee = this.settings.deliveryFee;
    const total = subtotal + tax + deliveryFee;

    document.getElementById("cartSubtotalText").textContent = `${this.settings.currency}${subtotal.toFixed(2)}`;
    document.getElementById("cartTaxText").textContent = `${this.settings.currency}${tax.toFixed(2)}`;
    document.getElementById("cartDeliveryFeeText").textContent = `${this.settings.currency}${deliveryFee.toFixed(2)}`;
    document.getElementById("cartTotalText").textContent = `${this.settings.currency}${total.toFixed(2)}`;
  }

  updateCartBadge() {
    const badge = document.getElementById("cartBadge");
    if (badge) {
      const count = this.cart.reduce((sum, item) => sum + item.qty, 0);
      badge.textContent = count;
      badge.style.display = count > 0 ? "flex" : "none";
    }
  }

  openCart() {
    document.getElementById("cartOverlay")?.classList.add("active");
    document.getElementById("cartDrawer")?.classList.add("active");
  }

  closeCart() {
    document.getElementById("cartOverlay")?.classList.remove("active");
    document.getElementById("cartDrawer")?.classList.remove("active");
  }

  openCheckoutModal() {
    if (this.cart.length === 0) {
      this.showToast("Dalabkaagu waa faaruq!", "warning");
      return;
    }
    const subtotal = this.cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    const tax = subtotal * (this.settings.taxRate / 100);
    const delivery = this.settings.deliveryFee;
    const total = subtotal + tax + delivery;

    document.getElementById("chkTotalAmountText").textContent = `${this.settings.currency}${total.toFixed(2)}`;
    this.closeCart();
    this.openModal("checkoutModal");
  }

  handleCheckoutTypeChange() {
    const type = document.getElementById("chkOrderType").value;
    const label = document.getElementById("chkLocationLabel");
    const input = document.getElementById("chkLocationInput");

    if (type === "dine-in") {
      label.innerHTML = '<i class="fa-solid fa-chair"></i> Dooro ama Geli Lambarka Miiska *';
      input.placeholder = "Tusaale: Miiska 3";
    } else if (type === "takeaway") {
      label.innerHTML = '<i class="fa-solid fa-bag-shopping"></i> Goobta Qaadashada *';
      input.placeholder = "Maqaayadda Savora (Af-soomaali)";
      input.value = "Maqaayadda dhexdeeda (Goobta)";
    } else {
      label.innerHTML = '<i class="fa-solid fa-location-dot"></i> Cinwaanka Guriga / Xaafadda *';
      input.placeholder = "Xaafadda, Wadada, Guriga...";
      input.value = "";
    }
  }

  processCustomerCheckout() {
    const name = document.getElementById("chkCustName").value.trim();
    const phone = document.getElementById("chkCustPhone").value.trim();
    const type = document.getElementById("chkOrderType").value;
    const location = document.getElementById("chkLocationInput").value.trim();
    const paymentMethod = document.getElementById("chkPaymentMethod").value;

    if (!name || !phone || !location) {
      this.showToast("Fadlan buuxi dhammaan macluumaadka loo baahan yahay!", "danger");
      return;
    }

    const subtotal = this.cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    const tax = subtotal * (this.settings.taxRate / 100);
    const deliveryFee = type === "delivery" ? this.settings.deliveryFee : 0;
    const total = subtotal + tax + deliveryFee;

    const newOrderId = `#SAV-${Math.floor(1000 + Math.random() * 9000)}`;

    const newOrder = {
      id: newOrderId,
      customerName: name,
      customerPhone: phone,
      type: type,
      location: location,
      items: [...this.cart],
      subtotal: subtotal,
      tax: tax,
      deliveryFee: deliveryFee,
      total: total,
      date: new Date().toISOString().split("T")[0],
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      paymentMethod: paymentMethod,
      status: "La sugayo"
    };

    // Save order
    this.orders.unshift(newOrder);

    // Update or add customer
    let cust = this.customers.find(c => c.phone === phone);
    if (cust) {
      cust.ordersCount += 1;
      cust.totalSpent += total;
      cust.lastOrder = "Maanta";
    } else {
      this.customers.push({
        id: `C-${this.customers.length + 1}`,
        name: name,
        phone: phone,
        ordersCount: 1,
        totalSpent: total,
        lastOrder: "Maanta"
      });
    }

    // Clear cart
    this.cart = [];
    this.saveState();
    this.closeModal("checkoutModal");
    this.renderCart();
    this.updateCartBadge();
    this.renderAdminView();

    // Show printable receipt modal
    this.viewReceipt(newOrderId);
    this.showToast(`Mahadsanid! Dalabkaagii ${newOrderId} si guul leh ayaa loo diiwaangeliyey!`, "success");
  }

  // ===================================================================
  // 6. PUBLIC RESERVATION SUBMISSION & VALIDATION
  // ===================================================================

  processPublicReservation(e) {
    e.preventDefault();
    const name = document.getElementById("resCustName").value.trim();
    const phone = document.getElementById("resCustPhone").value.trim();
    const guests = parseInt(document.getElementById("resGuestsCount").value, 10);
    const tableId = document.getElementById("resTableSelect").value;
    const date = document.getElementById("resDate").value;
    const time = document.getElementById("resTime").value;
    const notes = document.getElementById("resNotes").value.trim();

    if (!name || !phone || !date || !time) {
      this.showToast("Fadlan buuxi xogta qabsashada miiska!", "danger");
      return;
    }

    const tableObj = this.tables.find(t => t.id === tableId);
    const tableName = tableObj ? tableObj.name : "Miis";

    // Double-booking check: Protect against duplicate reservation on same table at same date & time!
    const conflict = this.reservations.find(r => 
      r.tableId === tableId && 
      r.date === date && 
      r.time === time && 
      r.status !== "La baajiyey"
    );

    if (conflict) {
      this.showToast(`Waan ka xunnahay, ${tableName} waa la qabsaday taariikhda ${date} waqtiga ${time}. Fadlan dooro waqti kale ama miis kale!`, "danger");
      return;
    }

    const newRes = {
      id: `RES-${Math.floor(100 + Math.random() * 900)}`,
      customerName: name,
      customerPhone: phone,
      guests: guests,
      tableId: tableId,
      tableName: tableName,
      date: date,
      time: time,
      status: "La xaqiijiyey",
      notes: notes
    };

    this.reservations.unshift(newRes);

    // Update table status if today
    const todayStr = new Date().toISOString().split("T")[0];
    if (date === todayStr && tableObj) {
      tableObj.status = "La qabsaday";
    }

    this.saveState();
    this.renderReservationTableSelect();
    this.renderTablesFloorGrid();
    this.renderReservationsTable();
    this.updateOverviewKPIs();

    document.getElementById("publicReservationForm").reset();
    this.showToast(`Hambalyo ${name}! ${tableName} si guul leh ayaa laguu qabsaday waqtiga ${time} (${date}).`, "success");
  }

  // ===================================================================
  // 7. BOGGA MAAMULKA (ADMIN DASHBOARD CONTROLLER)
  // ===================================================================

  renderAdminView() {
    this.updateOverviewKPIs();
    this.initCharts();
    this.renderOverviewRecentOrders();
    this.renderOverviewLowStock();
    this.renderAdminMenuTable();
    this.renderOrdersTable();
    this.renderReservationsTable();
    this.renderTablesFloorGrid();
    this.renderCustomersTable();
    this.renderStaffTable();
    this.renderInventoryTable();
    this.renderReports();
    this.populateSettingsForm();
  }

  switchTab(tabId) {
    // Update sidebar active link
    document.querySelectorAll(".sidebar-link").forEach(link => {
      link.classList.toggle("active", link.dataset.tab === tabId);
    });

    // Update tab contents
    document.querySelectorAll(".admin-tab-content").forEach(content => {
      content.classList.toggle("active", content.id === `tabContent-${tabId}`);
    });

    // Update Page Title
    const titles = {
      overview: "1. Guudmarka Maamulka Savora",
      menu: "2. Maamulka Cuntada ee Savora",
      orders: "3. Maamulka Dalabaadka Macaamiisha",
      reservations: "4. Maamulka Qabsashada Miisaska",
      tables: "5. Miisaska & Khariidadda Fadhiga",
      customers: "6. Maamulka Xogta Macaamiisha",
      staff: "7. Maamulka Shaqaalaha Maqaayadda",
      inventory: "8. Kaydka Alaabta & Digniinaha",
      reports: "9. Warbixinnada & Dakhliga Iibka",
      settings: "10. Dejinta Guud ee Nidaamka"
    };

    const titleEl = document.getElementById("adminPageTitle");
    if (titleEl) titleEl.textContent = titles[tabId] || "Maamulka Savora";

    // Close mobile sidebar if open
    document.getElementById("adminSidebar")?.classList.remove("mobile-open");

    // Re-render specific tab if needed
    if (tabId === "overview") this.initCharts();
    if (tabId === "reports") this.renderReports();
    if (tabId === "tables") this.renderTablesFloorGrid();
  }

  // --- TAB 1: GUUDMARKA (OVERVIEW) ---
  updateOverviewKPIs() {
    const today = new Date().toISOString().split("T")[0];
    const todayOrders = this.orders.filter(o => o.date === today && o.status !== "La baajiyey");
    const todayRevenue = todayOrders.reduce((sum, o) => sum + o.total, 0);
    const pendingOrders = this.orders.filter(o => o.status === "La sugayo" || o.status === "La diyaarinayo");
    const availableTables = this.tables.filter(t => t.status === "Bannaan").length;

    document.getElementById("kpiTodayOrders").textContent = todayOrders.length;
    document.getElementById("kpiTodayRevenue").textContent = `${this.settings.currency}${todayRevenue.toFixed(2)}`;
    document.getElementById("kpiTotalCustomers").textContent = this.customers.length;
    document.getElementById("kpiAvailableTables").textContent = `${availableTables} / ${this.tables.length}`;
    document.getElementById("kpiPendingOrders").textContent = pendingOrders.length;
  }

  initCharts() {
    if (typeof Chart === "undefined") {
      console.warn("Chart.js not loaded, skipping dynamic chart rendering.");
      return;
    }

    const isDark = document.documentElement.getAttribute("data-theme") === "dark";
    const textColor = isDark ? "#c2d4cb" : "#2d3e34";
    const gridColor = isDark ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.06)";

    // 1. Daily Revenue Chart (Past 7 Days)
    const revCanvas = document.getElementById("revenueBarChart");
    if (revCanvas) {
      if (this.revenueChart) this.revenueChart.destroy();

      const last7Days = [];
      const revenueData = [];
      const dayNames = ["Axad", "Isniin", "Talaado", "Arbaco", "Khamiis", "Jimce", "Sabti"];

      for (let i = 6; i >= 0; i--) {
        const d = new Date();
        d.setDate(d.getDate() - i);
        const dateStr = d.toISOString().split("T")[0];
        last7Days.push(dayNames[d.getDay()]);

        const dayTotal = this.orders
          .filter(o => o.date === dateStr && o.status !== "La baajiyey")
          .reduce((sum, o) => sum + o.total, 0);

        revenueData.push(dayTotal > 0 ? dayTotal : (i === 0 ? 84.50 : Math.floor(60 + Math.random() * 80)));
      }

      this.revenueChart = new Chart(revCanvas, {
        type: 'bar',
        data: {
          labels: last7Days,
          datasets: [{
            label: 'Dakhliga ($)',
            data: revenueData,
            backgroundColor: '#cba135',
            hoverBackgroundColor: '#e5b83b',
            borderRadius: 8
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false }
          },
          scales: {
            x: {
              ticks: { color: textColor, font: { family: 'Plus Jakarta Sans', weight: '600' } },
              grid: { display: false }
            },
            y: {
              ticks: { color: textColor, callback: (v) => `$${v}` },
              grid: { color: gridColor }
            }
          }
        }
      });
    }

    // 2. Top Selling Dishes Chart
    const dishesCanvas = document.getElementById("topDishesChart");
    if (dishesCanvas) {
      if (this.dishesChart) this.dishesChart.destroy();

      // Aggregate dish quantities from orders
      const dishSales = {};
      this.orders.forEach(order => {
        if (order.status !== "La baajiyey") {
          order.items.forEach(item => {
            dishSales[item.name] = (dishSales[item.name] || 0) + item.qty;
          });
        }
      });

      let sorted = Object.entries(dishSales).sort((a, b) => b[1] - a[1]).slice(0, 5);
      if (sorted.length === 0) {
        sorted = [
          ["Bariis iyo Hilib Ari", 28],
          ["Pizza Supreme", 22],
          ["Kalluun Duban", 19],
          ["Gourmet Burger", 16],
          ["Cabitaan Cambe", 32]
        ];
      }

      this.dishesChart = new Chart(dishesCanvas, {
        type: 'doughnut',
        data: {
          labels: sorted.map(s => s[0]),
          datasets: [{
            data: sorted.map(s => s[1]),
            backgroundColor: [
              '#0d3822',
              '#cba135',
              '#27ae60',
              '#e67e22',
              '#2980b9'
            ],
            borderWidth: 2,
            borderColor: isDark ? '#102219' : '#ffffff'
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'bottom',
              labels: { color: textColor, boxWidth: 12, font: { family: 'Plus Jakarta Sans', size: 11 } }
            }
          }
        }
      });
    }
  }

  renderOverviewRecentOrders() {
    const tbody = document.getElementById("overviewRecentOrdersTable");
    if (!tbody) return;

    const recent = this.orders.slice(0, 5);
    tbody.innerHTML = recent.map(o => `
      <tr>
        <td><strong>${o.id}</strong></td>
        <td>${o.customerName}</td>
        <td><strong>${this.settings.currency}${o.total.toFixed(2)}</strong></td>
        <td>${this.getStatusBadgeHTML(o.status)}</td>
        <td>
          <button class="action-btn action-btn-gold" onclick="app.viewReceipt('${o.id}')" title="Eeg Rasiidka">
            <i class="fa-solid fa-receipt"></i>
          </button>
        </td>
      </tr>
    `).join("");
  }

  renderOverviewLowStock() {
    const container = document.getElementById("overviewLowStockList");
    if (!container) return;

    const lowStock = this.inventory.filter(i => i.qty <= i.threshold);
    if (lowStock.length === 0) {
      container.innerHTML = `
        <div style="text-align: center; color: var(--success); padding: 20px;">
          <i class="fa-solid fa-circle-check" style="font-size: 2rem; margin-bottom: 8px;"></i>
          <p>Dhammaan alaabta kaydku waxay ku jiraan xaalad wanaagsan.</p>
        </div>
      `;
      return;
    }

    container.innerHTML = lowStock.map(item => `
      <div style="display: flex; align-items: center; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid var(--border-light);">
        <div>
          <div style="font-weight: 700; font-size: 0.92rem;">${item.name}</div>
          <div style="font-size: 0.78rem; color: var(--danger); font-weight: 600;">
            <i class="fa-solid fa-triangle-exclamation"></i> Waxaa haray: ${item.qty} ${item.unit} (Xadka: ${item.threshold})
          </div>
        </div>
        <button class="btn btn-sm btn-outline-gold" onclick="app.adjustStock('${item.id}', 5)">
          +5 Kordhi
        </button>
      </div>
    `).join("");
  }

  // --- TAB 2: MAAMULKA CUNTADA (MENU MANAGEMENT) ---
  renderAdminMenuTable() {
    const tbody = document.getElementById("adminMenuTableBody");
    if (!tbody) return;

    const query = (document.getElementById("adminMenuSearch")?.value || "").toLowerCase().trim();
    const cat = document.getElementById("adminMenuCategoryFilter")?.value || "all";

    const filtered = this.menu.filter(item => {
      const matchCat = cat === "all" || item.category === cat;
      const matchSearch = item.name.toLowerCase().includes(query) || item.desc.toLowerCase().includes(query);
      return matchCat && matchSearch;
    });

    tbody.innerHTML = filtered.map(dish => `
      <tr>
        <td>
          <img src="${dish.image}" alt="${dish.name}" style="width: 50px; height: 50px; border-radius: 8px; object-fit: cover;" onerror="this.onerror=null; this.src='assets/images/hero-dish.jpg';">
        </td>
        <td>
          <div style="font-weight: 700;">${dish.name}</div>
          <div style="font-size: 0.76rem; color: var(--text-muted);">${dish.desc.substring(0, 45)}...</div>
        </td>
        <td><span class="badge badge-info">${dish.category}</span></td>
        <td><strong style="color: var(--gold); font-size: 1.05rem;">${this.settings.currency}${dish.price.toFixed(2)}</strong></td>
        <td>
          <button class="badge ${dish.status === 'available' ? 'badge-success' : 'badge-danger'}" onclick="app.toggleFoodAvailability('${dish.id}')" style="cursor: pointer; border: none;">
            ${dish.status === 'available' ? 'La heli karo' : 'Waa dhammaatay'}
          </button>
        </td>
        <td>
          <div class="table-actions">
            <button class="action-btn" title="Wax ka beddel" onclick="app.openFoodModal('${dish.id}')">
              <i class="fa-solid fa-pen-to-square"></i>
            </button>
            <button class="action-btn action-btn-danger" title="Tirtir" onclick="app.deleteFood('${dish.id}')">
              <i class="fa-solid fa-trash"></i>
            </button>
          </div>
        </td>
      </tr>
    `).join("");
  }

  openFoodModal(dishId = null) {
    const modal = document.getElementById("foodModal");
    const title = document.getElementById("foodModalTitle");
    const form = document.getElementById("foodForm");

    form.reset();
    if (dishId) {
      const dish = this.menu.find(d => d.id === dishId);
      if (!dish) return;
      title.textContent = "Wax ka beddel Cuntada";
      document.getElementById("foodItemId").value = dish.id;
      document.getElementById("foodItemName").value = dish.name;
      document.getElementById("foodItemCategory").value = dish.category;
      document.getElementById("foodItemPrice").value = dish.price;
      document.getElementById("foodItemImage").value = dish.image;
      document.getElementById("foodItemDesc").value = dish.desc;
      document.getElementById("foodItemStatus").value = dish.status;
    } else {
      title.textContent = "Ku dar Cunto Cusub";
      document.getElementById("foodItemId").value = "";
      document.getElementById("foodItemImage").value = "assets/images/bariis-hilib.jpg";
    }

    this.openModal("foodModal");
  }

  handleImagePresetChange() {
    const val = document.getElementById("foodItemImagePreset").value;
    if (val !== "custom") {
      document.getElementById("foodItemImage").value = val;
    }
  }

  saveFoodItem() {
    const id = document.getElementById("foodItemId").value;
    const name = document.getElementById("foodItemName").value.trim();
    const category = document.getElementById("foodItemCategory").value;
    const price = parseFloat(document.getElementById("foodItemPrice").value);
    const image = document.getElementById("foodItemImage").value.trim();
    const desc = document.getElementById("foodItemDesc").value.trim();
    const status = document.getElementById("foodItemStatus").value;

    if (!name || isNaN(price)) {
      this.showToast("Fadlan buuxi magaca iyo qiimaha cuntada!", "danger");
      return;
    }

    if (id) {
      // Edit
      const item = this.menu.find(d => d.id === id);
      if (item) {
        item.name = name;
        item.category = category;
        item.price = price;
        item.image = image;
        item.desc = desc;
        item.status = status;
        this.showToast(`Cuntada "${name}" si guul leh ayaa wax looga beddelay!`, "success");
      }
    } else {
      // Add new
      const newDish = {
        id: `dish-${Date.now()}`,
        name: name,
        category: category,
        mealTime: "qado",
        price: price,
        image: image || "assets/images/hero-dish.jpg",
        desc: desc,
        status: status,
        popular: false
      };
      this.menu.unshift(newDish);
      this.showToast(`Cunto cusub "${name}" ayaa lagu daray liiska!`, "success");
    }

    this.saveState();
    this.closeModal("foodModal");
    this.renderFoodGrid();
    this.renderPopularDishes();
    this.renderAdminMenuTable();
    this.updateStatsCounters();
  }

  deleteFood(dishId) {
    const dish = this.menu.find(d => d.id === dishId);
    if (!dish) return;

    if (confirm(`Ma hubtaa inaad tirtirto cuntada "${dish.name}"?`)) {
      this.menu = this.menu.filter(d => d.id !== dishId);
      this.saveState();
      this.renderFoodGrid();
      this.renderPopularDishes();
      this.renderAdminMenuTable();
      this.updateStatsCounters();
      this.showToast(`Cuntadii "${dish.name}" waa la tirtiray!`, "info");
    }
  }

  toggleFoodAvailability(dishId) {
    const dish = this.menu.find(d => d.id === dishId);
    if (!dish) return;

    dish.status = dish.status === "available" ? "unavailable" : "available";
    this.saveState();
    this.renderFoodGrid();
    this.renderPopularDishes();
    this.renderAdminMenuTable();
    this.showToast(`Xaaladda "${dish.name}" waxaa loo beddelay: ${dish.status === 'available' ? 'La heli karo' : 'Waa dhammaatay'}`, "info");
  }

  // --- TAB 3: DALABAADKA (ORDERS MANAGEMENT) ---
  renderOrdersTable() {
    const tbody = document.getElementById("adminOrdersTableBody");
    if (!tbody) return;

    const query = (document.getElementById("adminOrderSearch")?.value || "").toLowerCase().trim();
    const activeFilterBtn = document.querySelector(".order-status-filter.active");
    const statusFilter = activeFilterBtn ? activeFilterBtn.dataset.status : "all";

    const filtered = this.orders.filter(order => {
      const matchStatus = statusFilter === "all" || order.status === statusFilter;
      const matchSearch = order.id.toLowerCase().includes(query) ||
                          order.customerName.toLowerCase().includes(query) ||
                          order.customerPhone.includes(query);
      return matchStatus && matchSearch;
    });

    tbody.innerHTML = filtered.map(o => {
      const itemsSummary = o.items.map(i => `${i.qty}x ${i.name}`).join(", ");
      return `
        <tr>
          <td><strong>${o.id}</strong></td>
          <td>
            <div style="font-weight: 700;">${o.customerName}</div>
            <div style="font-size: 0.78rem; color: var(--text-muted);">${o.customerPhone}</div>
          </td>
          <td>
            <div style="max-width: 220px; font-size: 0.84rem; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;" title="${itemsSummary}">
              ${itemsSummary}
            </div>
            <div style="font-size: 0.72rem; color: var(--gold); font-weight: 700;">${o.location || o.type}</div>
          </td>
          <td><strong style="font-size: 1.05rem;">${this.settings.currency}${o.total.toFixed(2)}</strong></td>
          <td>
            <div>${o.date}</div>
            <div style="font-size: 0.76rem; color: var(--text-muted);">${o.time}</div>
          </td>
          <td><span class="badge badge-gold">${o.paymentMethod}</span></td>
          <td>
            <select class="form-control" style="padding: 4px 8px; font-size: 0.8rem; width: auto;" onchange="app.changeOrderStatus('${o.id}', this.value)">
              <option value="La sugayo" ${o.status === 'La sugayo' ? 'selected' : ''}>La sugayo</option>
              <option value="La diyaarinayo" ${o.status === 'La diyaarinayo' ? 'selected' : ''}>La diyaarinayo</option>
              <option value="Diyaar ah" ${o.status === 'Diyaar ah' ? 'selected' : ''}>Diyaar ah</option>
              <option value="La geeyey ama la dhiibay" ${o.status === 'La geeyey ama la dhiibay' ? 'selected' : ''}>La geeyey</option>
              <option value="La baajiyey" ${o.status === 'La baajiyey' ? 'selected' : ''}>La baajiyey</option>
            </select>
          </td>
          <td>
            <div class="table-actions">
              <button class="action-btn action-btn-gold" title="Eeg Rasiidka & Daabac" onclick="app.viewReceipt('${o.id}')">
                <i class="fa-solid fa-receipt"></i>
              </button>
              <button class="action-btn action-btn-danger" title="Tirtir Dalabka" onclick="app.deleteOrder('${o.id}')">
                <i class="fa-solid fa-trash"></i>
              </button>
            </div>
          </td>
        </tr>
      `;
    }).join("");
  }

  changeOrderStatus(orderId, newStatus) {
    const order = this.orders.find(o => o.id === orderId);
    if (!order) return;

    order.status = newStatus;
    this.saveState();
    this.renderOrdersTable();
    this.updateOverviewKPIs();
    this.renderOverviewRecentOrders();
    this.showToast(`Xaaladda dalabka ${orderId} waxaa loo beddelay "${newStatus}"`, "info");
  }

  deleteOrder(orderId) {
    if (confirm(`Ma hubtaa inaad tirtirto dalabka ${orderId}?`)) {
      this.orders = this.orders.filter(o => o.id !== orderId);
      this.saveState();
      this.renderOrdersTable();
      this.updateOverviewKPIs();
      this.renderOverviewRecentOrders();
      this.renderReports();
      this.showToast(`Dalabkii ${orderId} waa la tirtiray!`, "info");
    }
  }

  openOrderModal() {
    const form = document.getElementById("orderForm");
    form.reset();
    document.getElementById("orderEditId").value = "";
    document.getElementById("orderTotalPreview").textContent = `${this.settings.currency}0.00`;

    // Render food picker checkboxes
    const picker = document.getElementById("orderItemsPicker");
    picker.innerHTML = this.menu.map(dish => `
      <div style="display: flex; align-items: center; justify-content: space-between; padding: 6px 0; border-bottom: 1px solid var(--border-light);">
        <label style="display: flex; align-items: center; gap: 8px; font-size: 0.88rem; cursor: pointer;">
          <input type="checkbox" class="order-dish-check" value="${dish.id}" data-price="${dish.price}" onchange="app.calculateOrderModalTotal()">
          <span>${dish.name}</span>
        </label>
        <div style="display: flex; align-items: center; gap: 8px;">
          <span style="color: var(--gold); font-weight: 700;">$${dish.price.toFixed(2)}</span>
          <input type="number" class="order-dish-qty" data-id="${dish.id}" min="1" value="1" style="width: 45px; padding: 2px 4px; border: 1px solid var(--border); border-radius: 4px;" onchange="app.calculateOrderModalTotal()">
        </div>
      </div>
    `).join("");

    this.handleOrderTypeChange();
    this.openModal("orderModal");
  }

  handleOrderTypeChange() {
    const type = document.getElementById("orderType").value;
    const label = document.getElementById("orderLocationLabel");
    const tableSelect = document.getElementById("orderTableSelect");
    const addrInput = document.getElementById("orderAddressInput");

    if (type === "dine-in") {
      label.textContent = "Dooro Miiska *";
      tableSelect.style.display = "block";
      addrInput.style.display = "none";
    } else {
      label.textContent = "Cinwaanka Gaarsiinta *";
      tableSelect.style.display = "none";
      addrInput.style.display = "block";
    }
  }

  calculateOrderModalTotal() {
    let subtotal = 0;
    const checks = document.querySelectorAll(".order-dish-check:checked");
    checks.forEach(chk => {
      const price = parseFloat(chk.dataset.price);
      const qtyInput = document.querySelector(`.order-dish-qty[data-id="${chk.value}"]`);
      const qty = qtyInput ? parseInt(qtyInput.value, 10) || 1 : 1;
      subtotal += price * qty;
    });

    const tax = subtotal * (this.settings.taxRate / 100);
    const total = subtotal + tax;
    document.getElementById("orderTotalPreview").textContent = `${this.settings.currency}${total.toFixed(2)}`;
    return { subtotal, tax, total };
  }

  saveOrder() {
    const custName = document.getElementById("orderCustName").value.trim();
    const custPhone = document.getElementById("orderCustPhone").value.trim();
    const type = document.getElementById("orderType").value;
    const tableSelect = document.getElementById("orderTableSelect");
    const addrInput = document.getElementById("orderAddressInput");
    const location = type === "dine-in" ? (tableSelect.options[tableSelect.selectedIndex]?.text || "Miis") : addrInput.value.trim();
    const payment = document.getElementById("orderPaymentMethod").value;
    const status = document.getElementById("orderStatusSelect").value;

    const checkedDishes = document.querySelectorAll(".order-dish-check:checked");
    if (checkedDishes.length === 0) {
      this.showToast("Fadlan dooro ugu yaraan hal cunto!", "warning");
      return;
    }

    const items = [];
    checkedDishes.forEach(chk => {
      const dish = this.menu.find(d => d.id === chk.value);
      if (dish) {
        const qtyInput = document.querySelector(`.order-dish-qty[data-id="${chk.value}"]`);
        const qty = qtyInput ? parseInt(qtyInput.value, 10) || 1 : 1;
        items.push({
          id: dish.id,
          name: dish.name,
          price: dish.price,
          qty: qty
        });
      }
    });

    const { subtotal, tax, total } = this.calculateOrderModalTotal();
    const newOrderId = `#SAV-${Math.floor(1000 + Math.random() * 9000)}`;

    const newOrder = {
      id: newOrderId,
      customerName: custName,
      customerPhone: custPhone,
      type: type,
      location: location,
      items: items,
      subtotal: subtotal,
      tax: tax,
      deliveryFee: type === "delivery" ? this.settings.deliveryFee : 0,
      total: total,
      date: new Date().toISOString().split("T")[0],
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      paymentMethod: payment,
      status: status
    };

    this.orders.unshift(newOrder);

    // Update customer stats
    let cust = this.customers.find(c => c.phone === custPhone);
    if (cust) {
      cust.ordersCount += 1;
      cust.totalSpent += total;
      cust.lastOrder = "Maanta";
    } else {
      this.customers.push({
        id: `C-${this.customers.length + 1}`,
        name: custName,
        phone: custPhone,
        ordersCount: 1,
        totalSpent: total,
        lastOrder: "Maanta"
      });
    }

    this.saveState();
    this.closeModal("orderModal");
    this.renderOrdersTable();
    this.updateOverviewKPIs();
    this.renderOverviewRecentOrders();
    this.renderCustomersTable();
    this.showToast(`Dalab cusub ${newOrderId} si guul leh ayaa loo abuuray!`, "success");
  }

  viewReceipt(orderId) {
    const order = this.orders.find(o => o.id === orderId);
    if (!order) return;

    const printArea = document.getElementById("receiptPrintArea");
    if (!printArea) return;

    printArea.innerHTML = `
      <div style="text-align: center; border-bottom: 2px dashed #000; padding-bottom: 14px; margin-bottom: 14px;">
        <h2 style="font-family: 'Playfair Display', serif; font-size: 1.6rem; margin-bottom: 4px;">SAVORA RESTAURANT</h2>
        <div style="font-size: 0.85rem;">${this.settings.address}</div>
        <div style="font-size: 0.85rem;">Tel: ${this.settings.phone}</div>
        <div style="margin-top: 8px; font-weight: 800; font-size: 1.1rem; letter-spacing: 1px;">RASIIDKA DALABKA</div>
      </div>

      <div style="display: flex; justify-content: space-between; font-size: 0.88rem; margin-bottom: 6px;">
        <span>Dalabka #:</span>
        <strong>${order.id}</strong>
      </div>
      <div style="display: flex; justify-content: space-between; font-size: 0.88rem; margin-bottom: 6px;">
        <span>Taariikhda & Waqtiga:</span>
        <span>${order.date} ${order.time}</span>
      </div>
      <div style="display: flex; justify-content: space-between; font-size: 0.88rem; margin-bottom: 6px;">
        <span>Macmiilka:</span>
        <strong>${order.customerName}</strong>
      </div>
      <div style="display: flex; justify-content: space-between; font-size: 0.88rem; margin-bottom: 12px;">
        <span>Goobta / Miiska:</span>
        <span>${order.location || order.type}</span>
      </div>

      <table style="width: 100%; border-collapse: collapse; margin-bottom: 14px; font-size: 0.88rem;">
        <thead>
          <tr style="border-bottom: 1px solid #000; border-top: 1px solid #000;">
            <th style="text-align: left; padding: 6px 0;">Cuntada</th>
            <th style="text-align: center; padding: 6px 0;">Tirada</th>
            <th style="text-align: right; padding: 6px 0;">Wadarta</th>
          </tr>
        </thead>
        <tbody>
          ${order.items.map(item => `
            <tr>
              <td style="padding: 6px 0;">${item.name}</td>
              <td style="text-align: center; padding: 6px 0;">${item.qty}</td>
              <td style="text-align: right; padding: 6px 0;">$${(item.price * item.qty).toFixed(2)}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>

      <div style="border-top: 1px dashed #000; padding-top: 10px; font-size: 0.9rem;">
        <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
          <span>Isu-geynta Cuntada:</span>
          <span>$${order.subtotal.toFixed(2)}</span>
        </div>
        <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
          <span>Cashuurta (Tax):</span>
          <span>$${order.tax.toFixed(2)}</span>
        </div>
        ${order.deliveryFee > 0 ? `
          <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
            <span>Kharashka Gaarsiinta:</span>
            <span>$${order.deliveryFee.toFixed(2)}</span>
          </div>
        ` : ''}
        <div style="display: flex; justify-content: space-between; font-size: 1.15rem; font-weight: 800; border-top: 2px solid #000; padding-top: 6px; margin-top: 6px;">
          <span>WADARTA GUUD:</span>
          <span>$${order.total.toFixed(2)}</span>
        </div>
      </div>

      <div style="margin-top: 14px; font-size: 0.86rem; text-align: center;">
        <div>Habka Lacagta: <strong>${order.paymentMethod}</strong></div>
        <div>Xaaladda: <strong>${order.status}</strong></div>
        <div style="margin-top: 14px; font-style: italic;">Mahadsanid! Ku soo dhawoow mar kale Savora!</div>
      </div>
    `;

    this.openModal("receiptModal");
  }

  // --- TAB 4: QABSASHADA MIISASKA (RESERVATIONS) ---
  renderReservationsTable() {
    const tbody = document.getElementById("adminReservationsTableBody");
    if (!tbody) return;

    const query = (document.getElementById("adminResSearch")?.value || "").toLowerCase().trim();
    const dateFilter = document.getElementById("adminResDateFilter")?.value || "";

    const filtered = this.reservations.filter(r => {
      const matchSearch = r.customerName.toLowerCase().includes(query) || r.customerPhone.includes(query) || r.tableName.toLowerCase().includes(query);
      const matchDate = !dateFilter || r.date === dateFilter;
      return matchSearch && matchDate;
    });

    tbody.innerHTML = filtered.map(r => `
      <tr>
        <td><strong>${r.customerName}</strong></td>
        <td>${r.customerPhone}</td>
        <td><span class="badge badge-info">${r.guests} Qof</span></td>
        <td><strong>${r.tableName}</strong></td>
        <td>${r.date}</td>
        <td>${r.time}</td>
        <td>
          <select class="form-control" style="padding: 4px 8px; font-size: 0.8rem; width: auto;" onchange="app.changeReservationStatus('${r.id}', this.value)">
            <option value="La xaqiijiyey" ${r.status === 'La xaqiijiyey' ? 'selected' : ''}>La xaqiijiyey</option>
            <option value="La sugayo" ${r.status === 'La sugayo' ? 'selected' : ''}>La sugayo</option>
            <option value="La dhammaystiray" ${r.status === 'La dhammaystiray' ? 'selected' : ''}>La dhammaystiray</option>
            <option value="La baajiyey" ${r.status === 'La baajiyey' ? 'selected' : ''}>La baajiyey</option>
          </select>
        </td>
        <td>
          <button class="action-btn action-btn-danger" title="Tirtir" onclick="app.deleteReservation('${r.id}')">
            <i class="fa-solid fa-trash"></i>
          </button>
        </td>
      </tr>
    `).join("");
  }

  openReservationModal() {
    document.getElementById("adminResForm").reset();
    document.getElementById("adminResDate").value = new Date().toISOString().split("T")[0];
    this.openModal("resModal");
  }

  saveAdminReservation() {
    const name = document.getElementById("adminResCustName").value.trim();
    const phone = document.getElementById("adminResCustPhone").value.trim();
    const guests = parseInt(document.getElementById("adminResGuests").value, 10);
    const tableId = document.getElementById("adminResTableSelect").value;
    const date = document.getElementById("adminResDate").value;
    const time = document.getElementById("adminResTime").value;
    const status = document.getElementById("adminResStatus").value;

    const tableObj = this.tables.find(t => t.id === tableId);
    const tableName = tableObj ? tableObj.name : "Miis";

    // Double-booking check: prevent collision
    const conflict = this.reservations.find(r => 
      r.tableId === tableId && 
      r.date === date && 
      r.time === time && 
      r.status !== "La baajiyey"
    );

    if (conflict) {
      this.showToast(`Digniin: ${tableName} hore ayaa loo qabsaday taariikhda ${date} waqtiga ${time}!`, "danger");
      return;
    }

    const newRes = {
      id: `RES-${Math.floor(100 + Math.random() * 900)}`,
      customerName: name,
      customerPhone: phone,
      guests: guests,
      tableId: tableId,
      tableName: tableName,
      date: date,
      time: time,
      status: status,
      notes: "Laga qabsaday maamulka"
    };

    this.reservations.unshift(newRes);
    this.saveState();
    this.closeModal("resModal");
    this.renderReservationsTable();
    this.renderTablesFloorGrid();
    this.updateOverviewKPIs();
    this.showToast(`Qabsashada miiska ${tableName} si guul leh ayaa loo kaydiyey!`, "success");
  }

  changeReservationStatus(resId, newStatus) {
    const res = this.reservations.find(r => r.id === resId);
    if (!res) return;

    res.status = newStatus;
    this.saveState();
    this.renderReservationsTable();
    this.showToast(`Xaaladda qabsashada waxaa loo beddelay "${newStatus}"`, "info");
  }

  deleteReservation(resId) {
    if (confirm("Ma hubtaa inaad tirtirto qabsashadan miiska?")) {
      this.reservations = this.reservations.filter(r => r.id !== resId);
      this.saveState();
      this.renderReservationsTable();
      this.showToast("Qabsashadii waa la tirtiray!", "info");
    }
  }

  // --- TAB 5: MIISASKA MAQAAYADDA (FLOOR PLAN) ---
  renderTablesFloorGrid() {
    const container = document.getElementById("tablesFloorGrid");
    if (!container) return;

    container.innerHTML = this.tables.map(table => {
      let statusClass = "status-bannaan";
      let statusColor = "var(--success)";
      if (table.status === "La qabsaday") {
        statusClass = "status-la-qabsaday";
        statusColor = "var(--gold)";
      } else if (table.status === "Macaamiil baa fadhiya") {
        statusClass = "status-occupied";
        statusColor = "var(--danger)";
      }

      return `
        <div class="table-seat-card ${statusClass}" onclick="app.toggleTableStatus('${table.id}')" title="Guji si aad u beddesho xaaladda">
          <div style="position: absolute; top: 12px; right: 12px; font-size: 1.1rem; color: ${statusColor};">
            <i class="fa-solid fa-chair"></i>
          </div>
          <div class="seat-table-num">${table.name}</div>
          <div class="seat-capacity"><i class="fa-solid fa-users"></i> Qaadista: ${table.capacity} Qof</div>
          <div>
            <span class="badge" style="background: ${statusColor}; color: #fff;">${table.status}</span>
          </div>
          <div style="font-size: 0.76rem; color: var(--text-muted); margin-top: 10px;">
            ${table.notes || 'Xusuusin ma jirto'}
          </div>
        </div>
      `;
    }).join("");
  }

  toggleTableStatus(tableId) {
    const table = this.tables.find(t => t.id === tableId);
    if (!table) return;

    // Cycle status: Bannaan -> La qabsaday -> Macaamiil baa fadhiya -> Bannaan
    if (table.status === "Bannaan") {
      table.status = "La qabsaday";
    } else if (table.status === "La qabsaday") {
      table.status = "Macaamiil baa fadhiya";
    } else {
      table.status = "Bannaan";
    }

    this.saveState();
    this.renderTablesFloorGrid();
    this.renderReservationTableSelect();
    this.updateOverviewKPIs();
    this.showToast(`Xaaladda ${table.name} waxaa loo beddelay "${table.status}"`, "info");
  }

  openNewTablePrompt() {
    const num = prompt("Geli lambarka ama magaca miiska cusub (Tusaale: Miiska 13):");
    if (!num) return;
    const capacity = parseInt(prompt("Tirada kuraasta (qaadista dadka):", "4"), 10) || 4;

    const newTable = {
      id: `T-${this.tables.length + 1}`,
      name: num,
      capacity: capacity,
      status: "Bannaan",
      notes: "Miis cusub oo lagu daray maqaayadda"
    };

    this.tables.push(newTable);
    this.saveState();
    this.renderTablesFloorGrid();
    this.renderReservationTableSelect();
    this.updateOverviewKPIs();
    this.updateStatsCounters();
    this.showToast(`Miis cusub "${num}" si guul leh ayaa loogu daray!`, "success");
  }

  // --- TAB 6: MACAAMIISHA (CUSTOMERS MANAGEMENT) ---
  renderCustomersTable() {
    const tbody = document.getElementById("adminCustomersTableBody");
    if (!tbody) return;

    const query = (document.getElementById("adminCustomerSearch")?.value || "").toLowerCase().trim();
    const filtered = this.customers.filter(c => c.name.toLowerCase().includes(query) || c.phone.includes(query));

    tbody.innerHTML = filtered.map(c => `
      <tr>
        <td><strong>${c.name}</strong></td>
        <td>${c.phone}</td>
        <td><span class="badge badge-info">${c.ordersCount} Dalab</span></td>
        <td><strong style="color: var(--gold);">${this.settings.currency}${c.totalSpent.toFixed(2)}</strong></td>
        <td>${c.lastOrder}</td>
        <td>
          <span class="badge ${c.ordersCount >= 5 ? 'badge-gold' : 'badge-success'}">
            ${c.ordersCount >= 5 ? 'VIP Joogto ah' : 'Macmiil'}
          </span>
        </td>
        <td>
          <div class="table-actions">
            <button class="action-btn" title="Wax ka beddel" onclick="app.openCustomerModal('${c.id}')">
              <i class="fa-solid fa-pen-to-square"></i>
            </button>
            <button class="action-btn action-btn-danger" title="Tirtir" onclick="app.deleteCustomer('${c.id}')">
              <i class="fa-solid fa-trash"></i>
            </button>
          </div>
        </td>
      </tr>
    `).join("");
  }

  openCustomerModal(custId = null) {
    const form = document.getElementById("customerForm");
    form.reset();

    if (custId) {
      const c = this.customers.find(item => item.id === custId);
      if (!c) return;
      document.getElementById("customerModalTitle").textContent = "Wax ka beddel Macmiilka";
      document.getElementById("custEditId").value = c.id;
      document.getElementById("custNameInput").value = c.name;
      document.getElementById("custPhoneInput").value = c.phone;
      document.getElementById("custOrdersCountInput").value = c.ordersCount;
      document.getElementById("custTotalSpentInput").value = c.totalSpent;
    } else {
      document.getElementById("customerModalTitle").textContent = "Ku dar Macmiil Cusub";
      document.getElementById("custEditId").value = "";
    }
    this.openModal("customerModal");
  }

  saveCustomer() {
    const id = document.getElementById("custEditId").value;
    const name = document.getElementById("custNameInput").value.trim();
    const phone = document.getElementById("custPhoneInput").value.trim();
    const count = parseInt(document.getElementById("custOrdersCountInput").value, 10) || 0;
    const spent = parseFloat(document.getElementById("custTotalSpentInput").value) || 0;

    if (!name || !phone) {
      this.showToast("Fadlan geli magaca iyo telefoonka macmiilka!", "danger");
      return;
    }

    if (id) {
      const c = this.customers.find(item => item.id === id);
      if (c) {
        c.name = name;
        c.phone = phone;
        c.ordersCount = count;
        c.totalSpent = spent;
        this.showToast(`Macmiilka "${name}" si guul leh ayaa loo cusboonaysiiyey!`, "success");
      }
    } else {
      this.customers.unshift({
        id: `C-${Date.now()}`,
        name: name,
        phone: phone,
        ordersCount: count,
        totalSpent: spent,
        lastOrder: "Maanta"
      });
      this.showToast(`Macmiil cusub "${name}" ayaa lagu daray!`, "success");
    }

    this.saveState();
    this.closeModal("customerModal");
    this.renderCustomersTable();
    this.updateOverviewKPIs();
  }

  deleteCustomer(custId) {
    const c = this.customers.find(item => item.id === custId);
    if (!c) return;

    if (confirm(`Ma hubtaa inaad tirtirto macmiilka "${c.name}"?`)) {
      this.customers = this.customers.filter(item => item.id !== custId);
      this.saveState();
      this.renderCustomersTable();
      this.updateOverviewKPIs();
      this.showToast("Macmiilkii waa la tirtiray!", "info");
    }
  }

  // --- TAB 7: SHAQAALAHA (STAFF MANAGEMENT) ---
  renderStaffTable() {
    const tbody = document.getElementById("adminStaffTableBody");
    if (!tbody) return;

    const query = (document.getElementById("adminStaffSearch")?.value || "").toLowerCase().trim();
    const roleFilter = document.getElementById("adminStaffRoleFilter")?.value || "all";

    const filtered = this.staff.filter(s => {
      const matchRole = roleFilter === "all" || s.role === roleFilter;
      const matchSearch = s.name.toLowerCase().includes(query) || s.phone.includes(query);
      return matchRole && matchSearch;
    });

    tbody.innerHTML = filtered.map(s => `
      <tr>
        <td>
          <div style="display: flex; align-items: center; gap: 10px;">
            <div style="width: 36px; height: 36px; border-radius: 50%; background: var(--primary-ultralight); color: var(--primary); display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 0.88rem;">
              ${s.name.split(" ").map(w => w[0]).slice(0, 2).join("")}
            </div>
            <strong>${s.name}</strong>
          </div>
        </td>
        <td><span class="badge badge-info">${s.role}</span></td>
        <td>${s.phone}</td>
        <td><strong style="color: var(--gold);">${this.settings.currency}${s.salary}</strong></td>
        <td>${s.startDate}</td>
        <td>
          <span class="badge ${s.status === 'Shaqaynaya' ? 'badge-success' : 'badge-warning'}">
            ${s.status}
          </span>
        </td>
        <td>
          <div class="table-actions">
            <button class="action-btn" title="Wax ka beddel" onclick="app.openStaffModal('${s.id}')">
              <i class="fa-solid fa-pen-to-square"></i>
            </button>
            <button class="action-btn action-btn-danger" title="Tirtir" onclick="app.deleteStaff('${s.id}')">
              <i class="fa-solid fa-trash"></i>
            </button>
          </div>
        </td>
      </tr>
    `).join("");
  }

  openStaffModal(staffId = null) {
    const form = document.getElementById("staffForm");
    form.reset();

    if (staffId) {
      const s = this.staff.find(item => item.id === staffId);
      if (!s) return;
      document.getElementById("staffModalTitle").textContent = "Wax ka beddel Shaqaalaha";
      document.getElementById("staffEditId").value = s.id;
      document.getElementById("staffNameInput").value = s.name;
      document.getElementById("staffRoleInput").value = s.role;
      document.getElementById("staffPhoneInput").value = s.phone;
      document.getElementById("staffSalaryInput").value = s.salary;
      document.getElementById("staffStartDateInput").value = s.startDate;
      document.getElementById("staffStatusInput").value = s.status;
    } else {
      document.getElementById("staffModalTitle").textContent = "Ku dar Shaqaale Cusub";
      document.getElementById("staffEditId").value = "";
      document.getElementById("staffStartDateInput").value = new Date().toISOString().split("T")[0];
    }
    this.openModal("staffModal");
  }

  saveStaff() {
    const id = document.getElementById("staffEditId").value;
    const name = document.getElementById("staffNameInput").value.trim();
    const role = document.getElementById("staffRoleInput").value;
    const phone = document.getElementById("staffPhoneInput").value.trim();
    const salary = parseFloat(document.getElementById("staffSalaryInput").value) || 0;
    const startDate = document.getElementById("staffStartDateInput").value;
    const status = document.getElementById("staffStatusInput").value;

    if (!name || !phone) {
      this.showToast("Fadlan geli magaca iyo telefoonka shaqaalaha!", "danger");
      return;
    }

    if (id) {
      const s = this.staff.find(item => item.id === id);
      if (s) {
        s.name = name;
        s.role = role;
        s.phone = phone;
        s.salary = salary;
        s.startDate = startDate;
        s.status = status;
        this.showToast(`Shaqaalaha "${name}" si guul leh ayaa loo cusboonaysiiyey!`, "success");
      }
    } else {
      this.staff.unshift({
        id: `S-${Date.now()}`,
        name: name,
        role: role,
        phone: phone,
        salary: salary,
        startDate: startDate,
        status: status
      });
      this.showToast(`Shaqaale cusub "${name}" ayaa lagu daray!`, "success");
    }

    this.saveState();
    this.closeModal("staffModal");
    this.renderStaffTable();
  }

  deleteStaff(staffId) {
    const s = this.staff.find(item => item.id === staffId);
    if (!s) return;

    if (confirm(`Ma hubtaa inaad tirtirto shaqaalaha "${s.name}"?`)) {
      this.staff = this.staff.filter(item => item.id !== staffId);
      this.saveState();
      this.renderStaffTable();
      this.showToast("Shaqaalihii waa la tirtiray!", "info");
    }
  }

  // --- TAB 8: KAYDKA ALAABTA (INVENTORY) ---
  renderInventoryTable() {
    const tbody = document.getElementById("adminInventoryTableBody");
    if (!tbody) return;

    const query = (document.getElementById("adminInventorySearch")?.value || "").toLowerCase().trim();
    const cat = document.getElementById("adminInventoryCategoryFilter")?.value || "all";

    const filtered = this.inventory.filter(i => {
      const matchCat = cat === "all" || i.category === cat;
      const matchSearch = i.name.toLowerCase().includes(query);
      return matchCat && matchSearch;
    });

    tbody.innerHTML = filtered.map(item => {
      const isLow = item.qty <= item.threshold;
      return `
        <tr style="${isLow ? 'background: rgba(217, 56, 58, 0.05);' : ''}">
          <td><strong>${item.name}</strong></td>
          <td><span class="badge badge-info">${item.category}</span></td>
          <td><strong style="font-size: 1.1rem; color: ${isLow ? 'var(--danger)' : 'var(--text-main)'};">${item.qty}</strong></td>
          <td>${item.unit}</td>
          <td>${this.settings.currency}${item.price.toFixed(2)}</td>
          <td>
            ${isLow 
              ? `<span class="badge badge-danger"><i class="fa-solid fa-triangle-exclamation"></i> Kaydku wuu hooseeyaa</span>` 
              : `<span class="badge badge-success"><i class="fa-solid fa-circle-check"></i> Xaalad Wacan</span>`
            }
          </td>
          <td>
            <div style="display: flex; gap: 6px;">
              <button class="btn btn-sm btn-outline-gold" onclick="app.adjustStock('${item.id}', 5)" title="Kordhi 5">
                +5
              </button>
              <button class="btn btn-sm btn-outline" onclick="app.adjustStock('${item.id}', -1)" title="Yaree 1">
                -1
              </button>
            </div>
          </td>
          <td>
            <div class="table-actions">
              <button class="action-btn" title="Wax ka beddel" onclick="app.openInventoryModal('${item.id}')">
                <i class="fa-solid fa-pen-to-square"></i>
              </button>
              <button class="action-btn action-btn-danger" title="Tirtir" onclick="app.deleteInventory('${item.id}')">
                <i class="fa-solid fa-trash"></i>
              </button>
            </div>
          </td>
        </tr>
      `;
    }).join("");
  }

  adjustStock(itemId, delta) {
    const item = this.inventory.find(i => i.id === itemId);
    if (!item) return;

    item.qty = Math.max(0, item.qty + delta);
    this.saveState();
    this.renderInventoryTable();
    this.renderOverviewLowStock();
    this.showToast(`Kaydka "${item.name}" hadda waa ${item.qty} ${item.unit}`, "info");
  }

  openInventoryModal(itemId = null) {
    const form = document.getElementById("inventoryForm");
    form.reset();

    if (itemId) {
      const i = this.inventory.find(item => item.id === itemId);
      if (!i) return;
      document.getElementById("inventoryModalTitle").textContent = "Wax ka beddel Alaabta Kaydka";
      document.getElementById("invEditId").value = i.id;
      document.getElementById("invNameInput").value = i.name;
      document.getElementById("invCategoryInput").value = i.category;
      document.getElementById("invUnitInput").value = i.unit;
      document.getElementById("invQuantityInput").value = i.qty;
      document.getElementById("invPriceInput").value = i.price;
      document.getElementById("invThresholdInput").value = i.threshold;
    } else {
      document.getElementById("inventoryModalTitle").textContent = "Ku dar Alaab Cusub Kaydka";
      document.getElementById("invEditId").value = "";
    }
    this.openModal("inventoryModal");
  }

  saveInventory() {
    const id = document.getElementById("invEditId").value;
    const name = document.getElementById("invNameInput").value.trim();
    const category = document.getElementById("invCategoryInput").value;
    const unit = document.getElementById("invUnitInput").value;
    const qty = parseFloat(document.getElementById("invQuantityInput").value) || 0;
    const price = parseFloat(document.getElementById("invPriceInput").value) || 0;
    const threshold = parseFloat(document.getElementById("invThresholdInput").value) || 10;

    if (!name) {
      this.showToast("Fadlan geli magaca alaabta!", "danger");
      return;
    }

    if (id) {
      const item = this.inventory.find(i => i.id === id);
      if (item) {
        item.name = name;
        item.category = category;
        item.unit = unit;
        item.qty = qty;
        item.price = price;
        item.threshold = threshold;
        this.showToast(`Alaabta "${name}" si guul leh ayaa loo cusboonaysiiyey!`, "success");
      }
    } else {
      this.inventory.unshift({
        id: `INV-${Date.now()}`,
        name: name,
        category: category,
        unit: unit,
        qty: qty,
        price: price,
        threshold: threshold,
        dateAdded: new Date().toISOString().split("T")[0]
      });
      this.showToast(`Alaab cusub "${name}" ayaa lagu daray kaydka!`, "success");
    }

    this.saveState();
    this.closeModal("inventoryModal");
    this.renderInventoryTable();
    this.renderOverviewLowStock();
  }

  deleteInventory(itemId) {
    const item = this.inventory.find(i => i.id === itemId);
    if (!item) return;

    if (confirm(`Ma hubtaa inaad tirtirto alaabta "${item.name}"?`)) {
      this.inventory = this.inventory.filter(i => i.id !== itemId);
      this.saveState();
      this.renderInventoryTable();
      this.renderOverviewLowStock();
      this.showToast("Alaabtii waa laga saaray kaydka!", "info");
    }
  }

  // --- TAB 9: WARBIXINNADA IIBKA (REPORTS) ---
  renderReports() {
    const filter = document.getElementById("reportsTimeFilter")?.value || "week";
    const now = new Date();
    const todayStr = now.toISOString().split("T")[0];

    // Filter orders strictly based on actual recorded orders
    const filteredOrders = this.orders.filter(order => {
      if (filter === "today") {
        return order.date === todayStr;
      } else if (filter === "week") {
        const orderDate = new Date(order.date);
        const diffDays = (now - orderDate) / (1000 * 60 * 60 * 24);
        return diffDays <= 7;
      } else if (filter === "month") {
        const orderDate = new Date(order.date);
        return orderDate.getMonth() === now.getMonth() && orderDate.getFullYear() === now.getFullYear();
      }
      return true; // "all"
    });

    const completed = filteredOrders.filter(o => o.status !== "La baajiyey");
    const cancelled = filteredOrders.filter(o => o.status === "La baajiyey");
    const totalRev = completed.reduce((sum, o) => sum + o.total, 0);
    const avgOrder = completed.length > 0 ? (totalRev / completed.length) : 0;

    document.getElementById("repTotalRevenue").textContent = `${this.settings.currency}${totalRev.toFixed(2)}`;
    document.getElementById("repCompletedOrders").textContent = completed.length;
    document.getElementById("repCancelledOrders").textContent = cancelled.length;
    document.getElementById("repAvgOrderValue").textContent = `${this.settings.currency}${avgOrder.toFixed(2)}`;

    // Breakdown table
    const itemSales = {};
    completed.forEach(order => {
      order.items.forEach(item => {
        if (!itemSales[item.name]) {
          itemSales[item.name] = { qty: 0, price: item.price, revenue: 0 };
        }
        itemSales[item.name].qty += item.qty;
        itemSales[item.name].revenue += item.price * item.qty;
      });
    });

    const tbody = document.getElementById("reportsBreakdownTableBody");
    if (!tbody) return;

    const rows = Object.entries(itemSales).sort((a, b) => b[1].revenue - a[1].revenue);
    if (rows.length === 0) {
      tbody.innerHTML = `<tr><td colspan="4" style="text-align: center; color: var(--text-muted); padding: 30px;">Wax iib ah lama diiwaangelin muddadan.</td></tr>`;
      return;
    }

    tbody.innerHTML = rows.map(([name, data]) => `
      <tr>
        <td><strong>${name}</strong></td>
        <td><span class="badge badge-info">${data.qty} Xabbo</span></td>
        <td>${this.settings.currency}${data.price.toFixed(2)}</td>
        <td><strong style="color: var(--gold); font-size: 1.05rem;">${this.settings.currency}${data.revenue.toFixed(2)}</strong></td>
      </tr>
    `).join("");
  }

  printSalesReport() {
    window.print();
  }

  // --- TAB 10: DEJINTA (SETTINGS) ---
  populateSettingsForm() {
    const s = this.settings;
    if (document.getElementById("setRestName")) document.getElementById("setRestName").value = s.restaurantName;
    if (document.getElementById("setRestPhone")) document.getElementById("setRestPhone").value = s.phone;
    if (document.getElementById("setRestAddress")) document.getElementById("setRestAddress").value = s.address;
    if (document.getElementById("setRestEmail")) document.getElementById("setRestEmail").value = s.email;
    if (document.getElementById("setRestHours")) document.getElementById("setRestHours").value = s.hours;
    if (document.getElementById("setCurrencySymbol")) document.getElementById("setCurrencySymbol").value = s.currency;
    if (document.getElementById("setTaxRate")) document.getElementById("setTaxRate").value = s.taxRate;
    if (document.getElementById("setDeliveryFee")) document.getElementById("setDeliveryFee").value = s.deliveryFee;
  }

  saveSettings() {
    this.settings.restaurantName = document.getElementById("setRestName").value.trim();
    this.settings.phone = document.getElementById("setRestPhone").value.trim();
    this.settings.address = document.getElementById("setRestAddress").value.trim();
    this.settings.email = document.getElementById("setRestEmail").value.trim();
    this.settings.hours = document.getElementById("setRestHours").value.trim();
    this.settings.currency = document.getElementById("setCurrencySymbol").value.trim() || "$";
    this.settings.taxRate = parseFloat(document.getElementById("setTaxRate").value) || 0;
    this.settings.deliveryFee = parseFloat(document.getElementById("setDeliveryFee").value) || 0;

    this.saveState();
    this.updateContactInfo();
    this.renderCustomerView();
    this.renderAdminView();
    this.showToast("Dejinta nidaamka Savora si guul leh ayaa loo kaydiyey!", "success");
  }

  // ===================================================================
  // 8. MODALS & NOTIFICATIONS
  // ===================================================================

  openModal(modalId) {
    document.getElementById(modalId)?.classList.add("active");
  }

  closeModal(modalId) {
    document.getElementById(modalId)?.classList.remove("active");
  }

  showToast(message, type = "info") {
    const container = document.getElementById("toastContainer");
    if (!container) return;

    const toast = document.createElement("div");
    toast.className = `toast toast-${type}`;

    const icons = {
      success: "fa-solid fa-circle-check",
      danger: "fa-solid fa-triangle-exclamation",
      warning: "fa-solid fa-circle-exclamation",
      info: "fa-solid fa-circle-info"
    };

    toast.innerHTML = `
      <i class="${icons[type] || icons.info}" style="font-size: 1.25rem;"></i>
      <span style="flex: 1;">${message}</span>
    `;

    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transform = "translateX(50px)";
      toast.style.transition = "all 0.3s ease";
      setTimeout(() => toast.remove(), 300);
    }, 4000);
  }

  getStatusBadgeHTML(status) {
    switch (status) {
      case "La sugayo":
        return `<span class="badge badge-warning"><i class="fa-solid fa-hourglass"></i> La sugayo</span>`;
      case "La diyaarinayo":
        return `<span class="badge badge-info"><i class="fa-solid fa-fire-burner"></i> La diyaarinayo</span>`;
      case "Diyaar ah":
        return `<span class="badge badge-gold"><i class="fa-solid fa-bell"></i> Diyaar ah</span>`;
      case "La geeyey ama la dhiibay":
        return `<span class="badge badge-success"><i class="fa-solid fa-check-double"></i> La geeyey</span>`;
      case "La baajiyey":
        return `<span class="badge badge-danger"><i class="fa-solid fa-xmark"></i> La baajiyey</span>`;
      default:
        return `<span class="badge badge-info">${status}</span>`;
    }
  }

  setCategoryFilter(cat) {
    this.activeCategory = cat;
    document.querySelectorAll(".cat-pill").forEach(pill => {
      pill.classList.toggle("active", pill.dataset.category === cat);
    });
    this.renderFoodGrid();
  }

  // ===================================================================
  // 9. EVENT LISTENERS SETUP
  // ===================================================================

  setupEventListeners() {
    // Navigation toggle to Admin
    document.getElementById("goToAdminBtn")?.addEventListener("click", () => this.switchToAdmin());
    document.getElementById("backToHomeBtn")?.addEventListener("click", () => this.switchToCustomer());

    // Theme toggles
    document.querySelectorAll(".theme-toggle-btn").forEach(btn => {
      btn.addEventListener("click", () => this.toggleTheme());
    });

    // Mobile nav
    const mobileNavBtn = document.getElementById("mobileNavToggle");
    const navLinks = document.getElementById("navLinks");
    if (mobileNavBtn && navLinks) {
      mobileNavBtn.addEventListener("click", () => {
        navLinks.classList.toggle("active");
      });
      // Close mobile menu on clicking any link
      navLinks.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => navLinks.classList.remove("active"));
      });
    }

    // Sidebar Mobile toggle in Admin
    const sidebarToggleBtn = document.getElementById("sidebarToggleBtn");
    const sidebar = document.getElementById("adminSidebar");
    if (sidebarToggleBtn && sidebar) {
      sidebarToggleBtn.addEventListener("click", () => {
        sidebar.classList.toggle("mobile-open");
      });
    }

    // Admin Sidebar Tab links
    document.querySelectorAll(".sidebar-link").forEach(link => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const tab = link.dataset.tab;
        if (tab) this.switchTab(tab);
      });
    });

    // Cart Drawer triggers
    document.getElementById("openCartBtn")?.addEventListener("click", () => this.openCart());
    document.getElementById("closeCartBtn")?.addEventListener("click", () => this.closeCart());
    document.getElementById("cartOverlay")?.addEventListener("click", () => this.closeCart());
    document.getElementById("heroOrderNowBtn")?.addEventListener("click", () => {
      document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" });
    });

    // Category filter pills
    document.getElementById("categoryPills")?.addEventListener("click", (e) => {
      const btn = e.target.closest(".cat-pill");
      if (btn) {
        this.setCategoryFilter(btn.dataset.category);
      }
    });

    // Search and filter inputs for public menu
    document.getElementById("menuSearchInput")?.addEventListener("input", () => this.renderFoodGrid());
    document.getElementById("menuAvailabilityFilter")?.addEventListener("change", () => this.renderFoodGrid());

    // Public reservation form submit
    document.getElementById("publicReservationForm")?.addEventListener("submit", (e) => this.processPublicReservation(e));

    // Order status filter buttons in Admin Orders tab
    document.querySelectorAll(".order-status-filter").forEach(btn => {
      btn.addEventListener("click", () => {
        document.querySelectorAll(".order-status-filter").forEach(b => {
          b.classList.remove("btn-primary", "active");
          b.classList.add("btn-outline");
        });
        btn.classList.remove("btn-outline");
        btn.classList.add("btn-primary", "active");
        this.renderOrdersTable();
      });
    });

    // Close modals when clicking overlay background
    document.querySelectorAll(".modal-overlay").forEach(overlay => {
      overlay.addEventListener("click", (e) => {
        if (e.target === overlay) {
          overlay.classList.remove("active");
        }
      });
    });
  }
}

// Global Application Instance
const app = new RestaurantSystem();

document.addEventListener("DOMContentLoaded", () => {
  app.init();
});
