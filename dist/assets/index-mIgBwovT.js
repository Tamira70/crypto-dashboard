(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=document.querySelector(`#app`);if(!e)throw Error(`App root #app nicht gefunden.`);var t=[],n=``,r=e=>e>=0xe8d4a51000?`${(e/0xe8d4a51000).toFixed(2)} Bio.`:e>=1e9?`${(e/1e9).toFixed(2)} Mrd.`:e>=1e6?`${(e/1e6).toFixed(2)} Mio.`:e.toLocaleString(`de-DE`),i=()=>{let e=n.trim().toLowerCase();return t.filter(t=>t.name.toLowerCase().includes(e)||t.symbol.toLowerCase().includes(e))},a=(o=!1,s=``)=>{let c=i(),l=t.filter(e=>(e.price_change_percentage_24h??0)>0).length,u=t.reduce((e,t)=>e+t.market_cap,0);e.innerHTML=`
    <div class="page">
      <div class="container">
        <header class="header">
          <p class="eyebrow">Portfolio Project</p>
          <h1 class="title">📊 Market Pulse Dashboard</h1>
          <p class="subtitle">
          Modernes Krypto-Dashboard mit Live-Daten, Suchfunktion und klarer Portfolio-Präsentation.
        </p>
        </header>

        <section class="stats-grid">
          <div class="stat-card">
            <div class="stat-title">Coins geladen</div>
            <div class="stat-value">${t.length}</div>
          </div>

          <div class="stat-card">
            <div class="stat-title">Positive 24h Entwicklung</div>
            <div class="stat-value">${l}</div>
          </div>

          <div class="stat-card">
            <div class="stat-title">Gesamte Marktkapitalisierung</div>
            <div class="stat-value">€${r(u)}</div>
          </div>
        </section>

        <section class="section">
          <h2 class="section-title">Suche</h2>
          <input
            id="search-input"
            class="input"
            type="text"
            placeholder="Suche nach Coin oder Symbol"
            value="${n}"
          />
        </section>

        ${o?`<p class="info-text">Lade Coins...</p>`:s?`<p class="error-box">${s}</p>`:c.length===0?`<p class="info-text">Keine Coins gefunden.</p>`:`
              <section class="coins-grid">
                ${c.map(e=>{let t=e.price_change_percentage_24h??0,n=t>=0;return`
                      <article class="coin-card">
                        <div class="coin-head">
                          <img
                            src="${e.image}"
                            alt="${e.name}"
                            class="coin-image"
                          />
                          <div>
                            <h3 class="coin-name">${e.name}</h3>
                            <p class="coin-symbol">${e.symbol.toUpperCase()}</p>
                          </div>
                        </div>

                        <div class="coin-body">
                          <div>Preis: €${e.current_price.toLocaleString(`de-DE`)}</div>
                          <div>Market Cap: €${r(e.market_cap)}</div>
                          <div class="${n?`positive`:`negative`}">
                            24h: ${t.toFixed(2)}%
                          </div>
                        </div>
                      </article>
                    `}).join(``)}
              </section>
            `}
      </div>
    </div>
  `;let d=document.querySelector(`#search-input`);d&&d.addEventListener(`input`,e=>{n=e.target.value,a(!1,s)})};(async()=>{try{a(!0);let e=await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=12&page=1&sparkline=false`);if(!e.ok)throw Error(`API konnte nicht geladen werden.`);t=await e.json(),a(!1)}catch(e){a(!1,e instanceof Error?e.message:`Unbekannter Fehler.`)}})();