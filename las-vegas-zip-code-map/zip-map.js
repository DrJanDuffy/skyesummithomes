/* Las Vegas zip map — data + UI + Google Maps loader */
(function () {
  'use strict';

  var zipData = [
    { zip: '89101', area: 'Downtown Las Vegas', region: 'las-vegas', badge: 'badge-lv', neighborhoods: 'Fremont Street, Arts District, Symphony Park, Historic Westside' },
    { zip: '89102', area: 'West Las Vegas', region: 'las-vegas', badge: 'badge-lv', neighborhoods: 'Rancho Circle, Scotch 80s, McNeil Estates, Alta Drive Corridor' },
    { zip: '89103', area: 'Spring Valley', region: 'las-vegas', badge: 'badge-lv', neighborhoods: 'Spring Valley, The Signature, Aruba, Flamingo corridor' },
    { zip: '89104', area: 'East Central Las Vegas', region: 'las-vegas', badge: 'badge-lv', neighborhoods: 'Huntridge, Beverly Green, John S. Park, UNLV-adjacent' },
    { zip: '89106', area: 'West Las Vegas / Rancho', region: 'las-vegas', badge: 'badge-lv', neighborhoods: 'Historic Westside, Rancho area, Washington corridor' },
    { zip: '89107', area: 'Central West Las Vegas', region: 'las-vegas', badge: 'badge-lv', neighborhoods: 'Angel Park, Charleston Heights, Desert Shores-adjacent' },
    { zip: '89108', area: 'Northwest Las Vegas', region: 'las-vegas', badge: 'badge-lv', neighborhoods: 'Lone Mountain, Centennial Hills-adjacent, Elkhorn area' },
    { zip: '89109', area: 'The Strip / Convention Center', region: 'las-vegas', badge: 'badge-lv', neighborhoods: 'Las Vegas Boulevard, Convention Center, Turnberry Towers' },
    { zip: '89110', area: 'East Las Vegas', region: 'las-vegas', badge: 'badge-lv', neighborhoods: 'Sunrise Manor, Boulder Highway corridor, Sam\'s Town area' },
    { zip: '89113', area: 'South Las Vegas', region: 'southwest', badge: 'badge-sw', neighborhoods: 'Southern Highlands entry, Fort Apache corridor' },
    { zip: '89115', area: 'Northeast Las Vegas', region: 'las-vegas', badge: 'badge-lv', neighborhoods: 'Nellis corridor, Sunrise Manor north' },
    { zip: '89117', area: 'West Las Vegas / The Lakes', region: 'las-vegas', badge: 'badge-lv', neighborhoods: 'The Lakes, Desert Shores, Canyon Gate Country Club' },
    { zip: '89118', area: 'South Central Las Vegas', region: 'las-vegas', badge: 'badge-lv', neighborhoods: 'Dean Martin corridor, industrial/commercial, Decatur Meadows' },
    { zip: '89119', area: 'Southeast Las Vegas / Airport', region: 'las-vegas', badge: 'badge-lv', neighborhoods: 'Hughes Center, Paradise, McCarran-adjacent, UNLV' },
    { zip: '89120', area: 'Southeast Las Vegas', region: 'las-vegas', badge: 'badge-lv', neighborhoods: 'Tropicana corridor east, Patrick area, Winchester' },
    { zip: '89121', area: 'East Las Vegas', region: 'las-vegas', badge: 'badge-lv', neighborhoods: 'Flamingo East, Boulder corridor, Desert Inn area' },
    { zip: '89122', area: 'East Las Vegas / Sunrise Manor', region: 'las-vegas', badge: 'badge-lv', neighborhoods: 'Sunrise Manor, Russell Road corridor, Sahara East' },
    { zip: '89123', area: 'South Las Vegas / Silverado Ranch', region: 'las-vegas', badge: 'badge-lv', neighborhoods: 'Silverado Ranch, Bermuda corridor, South Point area' },
    { zip: '89124', area: 'Blue Diamond / Rural SW', region: 'las-vegas', badge: 'badge-lv', neighborhoods: 'Blue Diamond, Mountain Springs, rural southwest Clark County' },
    { zip: '89128', area: 'Summerlin North', region: 'summerlin', badge: 'badge-summerlin', neighborhoods: 'The Trails, Pueblo, Sun City Summerlin' },
    { zip: '89129', area: 'Summerlin Northwest', region: 'summerlin', badge: 'badge-summerlin', neighborhoods: 'The Paseos, The Willows, Tournament Hills' },
    { zip: '89134', area: 'Summerlin Central', region: 'summerlin', badge: 'badge-summerlin', neighborhoods: 'The Hills, The Hills South, Red Rock Country Club' },
    { zip: '89135', area: 'Summerlin West', region: 'summerlin', badge: 'badge-summerlin', neighborhoods: 'The Ridges, Reverence, Sterling Ridge, Bear\'s Best' },
    { zip: '89138', area: 'Summerlin West / Stonebridge', region: 'summerlin', badge: 'badge-summerlin', neighborhoods: 'Stonebridge, Summerlin Centre, Downtown Summerlin' },
    { zip: '89144', area: 'Summerlin South', region: 'summerlin', badge: 'badge-summerlin', neighborhoods: 'The Canyons, TPC Summerlin, Garden Glen' },
    { zip: '89139', area: 'South Las Vegas', region: 'southwest', badge: 'badge-sw', neighborhoods: 'Cactus corridor, Bermuda south' },
    { zip: '89141', area: 'Southern Highlands', region: 'southwest', badge: 'badge-sw', neighborhoods: 'Southern Highlands, Rhodes Ranch, Mountain\'s Edge-adjacent' },
    { zip: '89145', area: 'West Las Vegas / Peccole Ranch', region: 'las-vegas', badge: 'badge-lv', neighborhoods: 'Peccole Ranch, Painted Desert, Queensridge' },
    { zip: '89146', area: 'Spring Valley West', region: 'las-vegas', badge: 'badge-lv', neighborhoods: 'Spring Valley, The Willows, Rainbow corridor' },
    { zip: '89147', area: 'Southwest Las Vegas', region: 'southwest', badge: 'badge-sw', neighborhoods: 'Mountain\'s Edge, Enterprise, Fort Apache corridor' },
    { zip: '89148', area: 'Southwest Las Vegas / Enterprise', region: 'southwest', badge: 'badge-sw', neighborhoods: 'Enterprise, Coronado Ranch, Inspirada-adjacent' },
    { zip: '89178', area: 'Mountain\'s Edge / Southwest', region: 'southwest', badge: 'badge-sw', neighborhoods: 'Mountain\'s Edge, Cactus Valley, Southern Highlands south' },
    { zip: '89179', area: 'South Las Vegas / Rural SW', region: 'southwest', badge: 'badge-sw', neighborhoods: 'Rural southwest, Sloan area, Jean corridor' },
    { zip: '89130', area: 'Northwest Las Vegas', region: 'las-vegas', badge: 'badge-lv', neighborhoods: 'Lone Mountain, El Capitan, Kyle Canyon corridor' },
    { zip: '89131', area: 'Centennial Hills', region: 'las-vegas', badge: 'badge-lv', neighborhoods: 'Centennial Hills, Providence, Iron Mountain Ranch' },
    { zip: '89143', area: 'Northwest Las Vegas', region: 'las-vegas', badge: 'badge-lv', neighborhoods: 'Tule Springs, Centennial Hills west' },
    { zip: '89149', area: 'Northwest Las Vegas / Skye Canyon', region: 'las-vegas', badge: 'badge-lv', neighborhoods: 'Skye Canyon, Park Highlands, Floyd Lamb Park area' },
    { zip: '89166', area: 'Skye Canyon / Far Northwest', region: 'las-vegas', badge: 'badge-lv', neighborhoods: 'Skye Canyon, Upper Northwest, new construction corridor' },
    { zip: '89030', area: 'Downtown North Las Vegas', region: 'north-las-vegas', badge: 'badge-nlv', neighborhoods: 'Historic Downtown NLV, Carey Avenue corridor' },
    { zip: '89031', area: 'North Las Vegas / Aliante', region: 'north-las-vegas', badge: 'badge-nlv', neighborhoods: 'Aliante, El Dorado, Deer Springs' },
    { zip: '89032', area: 'North Las Vegas Central', region: 'north-las-vegas', badge: 'badge-nlv', neighborhoods: 'Craig Road corridor, Cheyenne North, Losee area' },
    { zip: '89033', area: 'North Las Vegas East', region: 'north-las-vegas', badge: 'badge-nlv', neighborhoods: 'North 5th corridor, NLV east residential' },
    { zip: '89081', area: 'North Las Vegas / Tropical', region: 'north-las-vegas', badge: 'badge-nlv', neighborhoods: 'Tropical corridor, NLV industrial, La Madre Foothills' },
    { zip: '89084', area: 'North Las Vegas / Tule Springs', region: 'north-las-vegas', badge: 'badge-nlv', neighborhoods: 'Tule Springs, Avery Park, NLV new construction' },
    { zip: '89085', area: 'North Las Vegas / Valley Vista', region: 'north-las-vegas', badge: 'badge-nlv', neighborhoods: 'Valley Vista, North NLV, Ann Road corridor' },
    { zip: '89086', area: 'North Las Vegas / Far North', region: 'north-las-vegas', badge: 'badge-nlv', neighborhoods: 'Far north NLV, Apex Industrial' },
    { zip: '89002', area: 'Henderson / Anthem', region: 'henderson', badge: 'badge-henderson', neighborhoods: 'Anthem, Black Mountain, Mission Hills, Madeira Canyon' },
    { zip: '89005', area: 'Boulder City', region: 'boulder-city', badge: 'badge-boulder', neighborhoods: 'Boulder City, Lake Mead area, Hoover Dam corridor' },
    { zip: '89011', area: 'Henderson / Lake Las Vegas', region: 'henderson', badge: 'badge-henderson', neighborhoods: 'Lake Las Vegas, Cadence, Calico Ridge, Tuscany' },
    { zip: '89012', area: 'Henderson / MacDonald Ranch', region: 'henderson', badge: 'badge-henderson', neighborhoods: 'MacDonald Ranch, Green Valley South, Seven Hills, Roma Hills' },
    { zip: '89014', area: 'Henderson / Green Valley', region: 'henderson', badge: 'badge-henderson', neighborhoods: 'Green Valley, Whitney Ranch, Gibson Springs' },
    { zip: '89015', area: 'Downtown Henderson', region: 'henderson', badge: 'badge-henderson', neighborhoods: 'Downtown Henderson, Water Street District, Pittman' },
    { zip: '89044', area: 'Henderson / Inspirada', region: 'henderson', badge: 'badge-henderson', neighborhoods: 'Inspirada, Henderson South, Coyote Springs corridor' },
    { zip: '89052', area: 'Henderson / Green Valley Ranch', region: 'henderson', badge: 'badge-henderson', neighborhoods: 'Green Valley Ranch, Paseo Verde, Stephanie Street corridor' },
    { zip: '89074', area: 'Henderson / Green Valley South', region: 'henderson', badge: 'badge-henderson', neighborhoods: 'Green Valley South, Pecos corridor, Valle Verde' },
    { zip: '89142', area: 'East Las Vegas / Sunrise', region: 'las-vegas', badge: 'badge-lv', neighborhoods: 'Sunrise Manor east, Desert Inn east, Nellis AFB area' },
    { zip: '89156', area: 'East Las Vegas', region: 'las-vegas', badge: 'badge-lv', neighborhoods: 'East Las Vegas, Frenchman Mountain area' },
    { zip: '89158', area: 'South Strip', region: 'las-vegas', badge: 'badge-lv', neighborhoods: 'South Strip corridor, Mandalay Bay area' },
    { zip: '89161', area: 'Las Vegas Southwest', region: 'southwest', badge: 'badge-sw', neighborhoods: 'Southwest outskirts, Blue Diamond Road corridor' },
    { zip: '89169', area: 'Las Vegas Strip / East', region: 'las-vegas', badge: 'badge-lv', neighborhoods: 'Convention Center area, Strip corridor' },
    { zip: '89183', area: 'South Henderson', region: 'henderson', badge: 'badge-henderson', neighborhoods: 'Henderson south, St. Rose corridor' },
  ];

  var zipCoords = {
    '89101': { lat: 36.1716, lng: -115.1391 },
    '89102': { lat: 36.1619, lng: -115.1908 },
    '89103': { lat: 36.126, lng: -115.2087 },
    '89104': { lat: 36.1775, lng: -115.1195 },
    '89106': { lat: 36.19, lng: -115.17 },
    '89107': { lat: 36.1875, lng: -115.2175 },
    '89108': { lat: 36.2125, lng: -115.2275 },
    '89109': { lat: 36.1285, lng: -115.1523 },
    '89110': { lat: 36.185, lng: -115.0675 },
    '89113': { lat: 36.0605, lng: -115.261 },
    '89115': { lat: 36.215, lng: -115.0675 },
    '89117': { lat: 36.1425, lng: -115.28 },
    '89118': { lat: 36.085, lng: -115.205 },
    '89119': { lat: 36.0975, lng: -115.1475 },
    '89120': { lat: 36.105, lng: -115.105 },
    '89121': { lat: 36.1325, lng: -115.075 },
    '89122': { lat: 36.155, lng: -115.035 },
    '89123': { lat: 36.05, lng: -115.1375 },
    '89124': { lat: 36.02, lng: -115.41 },
    '89128': { lat: 36.2125, lng: -115.2825 },
    '89129': { lat: 36.2375, lng: -115.2925 },
    '89130': { lat: 36.25, lng: -115.2375 },
    '89131': { lat: 36.275, lng: -115.2375 },
    '89134': { lat: 36.1925, lng: -115.3125 },
    '89135': { lat: 36.1675, lng: -115.3475 },
    '89138': { lat: 36.2025, lng: -115.3375 },
    '89139': { lat: 36.0425, lng: -115.17 },
    '89141': { lat: 36.0225, lng: -115.225 },
    '89142': { lat: 36.1575, lng: -115.06 },
    '89143': { lat: 36.26, lng: -115.2825 },
    '89144': { lat: 36.17, lng: -115.3125 },
    '89145': { lat: 36.1675, lng: -115.26 },
    '89146': { lat: 36.145, lng: -115.235 },
    '89147': { lat: 36.0975, lng: -115.28 },
    '89148': { lat: 36.0625, lng: -115.29 },
    '89149': { lat: 36.27, lng: -115.2975 },
    '89156': { lat: 36.1925, lng: -115.025 },
    '89158': { lat: 36.0825, lng: -115.1725 },
    '89161': { lat: 36.03, lng: -115.32 },
    '89166': { lat: 36.31, lng: -115.305 },
    '89169': { lat: 36.13, lng: -115.135 },
    '89178': { lat: 36.01, lng: -115.265 },
    '89179': { lat: 35.96, lng: -115.26 },
    '89183': { lat: 36.0175, lng: -115.1175 },
    '89030': { lat: 36.2175, lng: -115.1175 },
    '89031': { lat: 36.2475, lng: -115.1625 },
    '89032': { lat: 36.2275, lng: -115.1475 },
    '89033': { lat: 36.23, lng: -115.11 },
    '89081': { lat: 36.2575, lng: -115.1225 },
    '89084': { lat: 36.27, lng: -115.1625 },
    '89085': { lat: 36.285, lng: -115.18 },
    '89086': { lat: 36.305, lng: -115.1475 },
    '89002': { lat: 36.005, lng: -115.005 },
    '89005': { lat: 35.9789, lng: -114.8327 },
    '89011': { lat: 36.06, lng: -114.98 },
    '89012': { lat: 36.0175, lng: -115.065 },
    '89014': { lat: 36.0575, lng: -115.0775 },
    '89015': { lat: 36.03, lng: -115.01 },
    '89044': { lat: 35.97, lng: -115.1 },
    '89052': { lat: 36.0375, lng: -115.1 },
    '89074': { lat: 36.04, lng: -115.05 },
  };

  var regionColors = {
    'las-vegas': '#3A8DDE',
    henderson: '#059669',
    'north-las-vegas': '#D97706',
    summerlin: '#7C3AED',
    southwest: '#EC4899',
    'boulder-city': '#DC2626',
  };

  var grid = document.getElementById('zipGrid');
  var searchInput = document.getElementById('zipSearch');
  var resultCount = document.getElementById('resultCount');
  var noResults = document.getElementById('noResults');
  var activeRegion = 'all';

  function renderCards(data) {
    grid.innerHTML = '';
    if (data.length === 0) {
      noResults.classList.remove('hidden');
      resultCount.textContent = 'No results';
      return;
    }
    noResults.classList.add('hidden');
    resultCount.textContent = 'Showing ' + data.length + ' zip code' + (data.length !== 1 ? 's' : '');

    data.forEach(function (z) {
      var card = document.createElement('div');
      card.className = 'zip-card';
      card.setAttribute('data-region', z.region);
      var regionLabel = z.region.replace(/-/g, ' ').replace(/\b\w/g, function (l) {
        return l.toUpperCase();
      });
      card.innerHTML =
        '<div class="zip-card-top">' +
        '<div class="zip-code">' +
        z.zip +
        '</div>' +
        '<span class="zip-region-badge ' +
        z.badge +
        '">' +
        regionLabel +
        '</span>' +
        '</div>' +
        '<div class="zip-area">' +
        z.area +
        '</div>' +
        '<div class="zip-neighborhoods">' +
        z.neighborhoods +
        '</div>' +
        '<div class="zip-card-footer">' +
        '<a href="/search/?zip=' +
        z.zip +
        '" class="zip-link">Search this zip' +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>' +
        '<a href="/contact?zip=' +
        z.zip +
        '" class="zip-link zip-link-secondary">Contact</a>' +
        '</div>';
      card.addEventListener('click', function (e) {
        if (e.target.closest('a')) return;
        if (
          window.map &&
          window.zipMarkers &&
          window.zipMarkers[z.zip] &&
          window.google &&
          window.google.maps
        ) {
          window.map.panTo(window.zipMarkers[z.zip].getPosition());
          window.map.setZoom(13);
          window.google.maps.event.trigger(window.zipMarkers[z.zip], 'click');
        }
      });
      grid.appendChild(card);
    });
  }

  function filterCards() {
    var q = searchInput.value.toLowerCase().trim();
    var filtered = zipData;
    if (activeRegion !== 'all') {
      filtered = filtered.filter(function (z) {
        return z.region === activeRegion;
      });
    }
    if (q) {
      filtered = filtered.filter(function (z) {
        return (
          z.zip.indexOf(q) !== -1 ||
          z.area.toLowerCase().indexOf(q) !== -1 ||
          z.neighborhoods.toLowerCase().indexOf(q) !== -1 ||
          z.region.replace(/-/g, ' ').indexOf(q) !== -1
        );
      });
    }
    renderCards(filtered);
  }

  searchInput.addEventListener('input', filterCards);

  window.resetFilters = function () {
    searchInput.value = '';
    activeRegion = 'all';
    document.querySelectorAll('.zip-map-region-tab').forEach(function (t) {
      t.classList.remove('active');
    });
    var allTab = document.querySelector('[data-region="all"]');
    if (allTab) allTab.classList.add('active');
    renderCards(zipData);
  };

  document.querySelectorAll('.zip-map-region-tab').forEach(function (tab) {
    tab.addEventListener('click', function () {
      document.querySelectorAll('.zip-map-region-tab').forEach(function (t) {
        t.classList.remove('active');
      });
      tab.classList.add('active');
      activeRegion = tab.dataset.region;
      filterCards();
    });
  });

  renderCards(zipData);

  window.zipMarkers = {};

  window.initMap = function () {
    var vegas = { lat: 36.115, lng: -115.1728 };
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 10.5,
      center: vegas,
      mapTypeControl: true,
      mapTypeControlOptions: {
        style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
        position: google.maps.ControlPosition.TOP_RIGHT,
      },
      streetViewControl: false,
      fullscreenControl: true,
      styles: [
        { featureType: 'poi', stylers: [{ visibility: 'off' }] },
        { featureType: 'transit', stylers: [{ visibility: 'off' }] },
        { featureType: 'road.highway', elementType: 'labels', stylers: [{ visibility: 'on' }] },
        { featureType: 'administrative.neighborhood', stylers: [{ visibility: 'on' }] },
        { featureType: 'water', elementType: 'geometry.fill', stylers: [{ color: '#d4eaf7' }] },
      ],
    });
    window.map = map;
    var infoWindow = new google.maps.InfoWindow();

    zipData.forEach(function (z) {
      var coords = zipCoords[z.zip];
      if (!coords) return;
      var color = regionColors[z.region] || '#3A8DDE';
      var circle = new google.maps.Circle({
        strokeColor: color,
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: color,
        fillOpacity: 0.15,
        map: map,
        center: coords,
        radius: 2200,
      });
      var marker = new google.maps.Marker({
        position: coords,
        map: map,
        label: {
          text: z.zip,
          color: '#0A2540',
          fontSize: '11px',
          fontWeight: '700',
        },
        icon: {
          path: google.maps.SymbolPath.CIRCLE,
          scale: 0,
        },
      });
      window.zipMarkers[z.zip] = marker;
      var content =
        '<div style="padding:8px;min-width:200px;font-family:-apple-system,sans-serif;">' +
        '<div style="font-size:20px;font-weight:800;color:#0A2540;margin-bottom:4px;">' +
        z.zip +
        '</div>' +
        '<div style="font-size:14px;font-weight:600;color:#4a4a4a;margin-bottom:6px;">' +
        z.area +
        '</div>' +
        '<div style="font-size:12px;color:#6b7280;margin-bottom:10px;">' +
        z.neighborhoods +
        '</div>' +
        '<p style="margin:0 0 8px 0;"><a href="/search/?zip=' +
        z.zip +
        '" style="display:inline-block;background:#3A8DDE;color:white;padding:6px 14px;border-radius:6px;text-decoration:none;font-size:13px;font-weight:600;">Search this zip &rarr;</a></p>' +
        '<p style="margin:0;"><a href="/contact?zip=' +
        z.zip +
        '" style="font-size:13px;font-weight:600;color:#3A8DDE;">Contact about ' +
        z.zip +
        '</a></p>' +
        '</div>';
      function openInfo() {
        infoWindow.setContent(content);
        infoWindow.setPosition(coords);
        infoWindow.open(map);
      }
      marker.addListener('click', openInfo);
      circle.addListener('click', openInfo);
    });
  };

  function showMapPlaceholder() {
    var el = document.getElementById('map');
    if (!el) return;
    el.innerHTML =
      '<div class="map-placeholder">' +
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">' +
      '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>' +
      '<circle cx="12" cy="10" r="3"/>' +
      '</svg>' +
      '<p><strong>Interactive map</strong></p>' +
      '<p class="api-note">Add your Google Maps JavaScript API key in this page\'s <code>&lt;meta name=&quot;google-maps-api-key&quot; content=&quot;…&quot;&gt;</code> (Maps JavaScript API enabled; restrict by HTTP referrer to this site).</p>' +
      '</div>';
  }

  (function loadMaps() {
    var meta = document.querySelector('meta[name="google-maps-api-key"]');
    var key = meta && meta.getAttribute('content');
    if (!key || !String(key).trim() || key === 'YOUR_API_KEY') {
      showMapPlaceholder();
      return;
    }
    var script = document.createElement('script');
    script.src =
      'https://maps.googleapis.com/maps/api/js?key=' +
      encodeURIComponent(key.trim()) +
      '&callback=initMap';
    script.async = true;
    script.defer = true;
    script.onerror = showMapPlaceholder;
    document.head.appendChild(script);
  })();
})();
