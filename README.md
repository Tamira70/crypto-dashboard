# 📊 Crypto Dashboard

Ein modernes Web-Dashboard zur Anzeige von Kryptowährungsdaten in Echtzeit.
Entwickelt mit TypeScript und Vite sowie Deployment auf einem eigenen Linux-Server.

---

## 🧩 Projektübersicht

Das Crypto Dashboard ist eine performante Webanwendung zur Visualisierung von Kryptowährungsdaten.
Die Daten werden live über die CoinGecko API geladen und übersichtlich dargestellt.

Das Projekt dient als Portfolio-Anwendung zur Demonstration von:

* API-Integration
* Frontend-Architektur mit TypeScript
* Datenverarbeitung & Darstellung
* Deployment auf eigener Infrastruktur

---

## 🚀 Features

* 📡 Live API Integration (CoinGecko)
* 🔍 Suche nach Coin & Symbol
* 📊 Marktübersicht (Top Coins)
* 📈 24h Preisveränderung (positiv / negativ)
* 💰 Marktkapitalisierung
* ⚡ Schnelle UI durch Vite
* 🌐 Deployment auf eigenem Linux-Server

---

## 🌍 Live Demo

👉 https://bewerbungsprofil.tamira12.duckdns.org/portfolio-dashboard/

---

## 💻 GitHub Repository

👉 https://github.com/Tamira70/crypto-dashboard

---

## 🛠️ Technologien

* TypeScript
* Vite
* HTML / CSS
* REST API (CoinGecko)

---

## 🏗️ Architektur

```text
[ Browser ]
     ↓
[ TypeScript App (Vite) ]
     ↓
[ CoinGecko API ]
```

---

## 📸 Screenshots

*(Optional – kannst du später hinzufügen)*

---

## 💻 Installation (lokal)

### 1. Repository klonen

```bash
git clone https://github.com/Tamira70/crypto-dashboard.git
cd crypto-dashboard
```

---

### 2. Abhängigkeiten installieren

```bash
npm install
```

---

### 3. Development Server starten

```bash
npm run dev
```

👉 App läuft unter:
http://localhost:5173/

---

### 4. Build erstellen (Production)

```bash
npm run build
```

👉 Output liegt in:

```bash
dist/
```

---

## 🚀 Deployment

Die Anwendung wird statisch gebaut und über Apache ausgeliefert.

**Server Pfad:**

```bash
/var/www/html/portfolio-dashboard/
```

**Deployment Schritte:**

```bash
npm run build
scp -r dist/* user@server:/var/www/html/portfolio-dashboard/
```

---

## 🎯 Projektziel

Dieses Projekt demonstriert:

* API-Anbindung an externe Services
* Datenfilterung & UI-Logik
* TypeScript im Frontend
* Performance-Optimierung mit Vite
* Deployment auf eigener Infrastruktur

---

## 🧠 Erweiterungsmöglichkeiten

* 📊 Charts (z. B. Chart.js)
* ⭐ Favoritenliste
* 🔄 Auto-Refresh
* 📱 Mobile Optimierung
* 🌍 Mehrere Währungen (USD / EUR)

---

## 👩‍💻 Autorin

**Tamira Morgner**
SAP Key User | Logistik | IT | Webentwicklung

---

## 📜 Lizenz

Dieses Projekt dient als Portfolio-Projekt.
