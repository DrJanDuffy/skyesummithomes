#!/usr/bin/env node
/**
 * Injects hyperlocal GBP block (NAP, hours, map, concierge services) on marketing pages.
 * Run after generate-clean-urls so /{slug}/index.html copies include the section.
 */
'use strict';

const fs = require('fs');
const path = require('path');
const C = require('../lib/gbp-constants');

const root = path.join(__dirname, '..');
const MARKER = 'HYPERLOCAL_GBP_BEGIN';

const SKIP_FILES = new Set(['404.html']);

const LEGAL_COMPACT = new Set([
  'privacy.html',
  'terms.html',
  'mls-disclaimer.html',
]);

const SKIP_DIRS = new Set([
  'node_modules',
  '.git',
  'ai-gateway-parallel-search',
  'ai-gateway-text',
  'ai-gateway-video',
  'cloudflare',
  'attached_assets',
  'lib',
]);

function listHtmlFiles(dir, out = []) {
  for (const name of fs.readdirSync(dir, { withFileTypes: true })) {
    if (name.name.startsWith('.')) continue;
    const full = path.join(dir, name.name);
    if (name.isDirectory()) {
      if (SKIP_DIRS.has(name.name)) continue;
      listHtmlFiles(full, out);
      continue;
    }
    if (name.isFile() && name.name.endsWith('.html')) {
      out.push(full);
    }
  }
  return out;
}

function compactBlock() {
  return `
        <!-- ${MARKER} -->
        <section id="hyperlocal-gbp" class="hyperlocal-gbp-section hyperlocal-gbp-section--compact" aria-labelledby="hyperlocal-gbp-title">
            <div class="container">
                <p class="hyperlocal-kicker"><i class="fas fa-map-marker-alt" aria-hidden="true"></i> Skye Summit · Northwest Las Vegas</p>
                <h2 id="hyperlocal-gbp-title">${C.AGENT_NAME}, ${C.AGENT_TITLE} — Skye Summit concierge</h2>
                <p class="hyperlocal-lead">Buyer and seller representation in Skye Summit communities. License ${C.LICENSE} · ${C.BROKERAGE}</p>
                <div class="gbp-action-buttons" role="group" aria-label="Contact and Google Business Profile">
                    <a href="tel:${C.PHONE_TEL}" class="btn btn-primary"><i class="fas fa-phone" aria-hidden="true"></i> Call ${C.PHONE_DISPLAY}</a>
                    <a href="${C.MAPS_DIRECTIONS}" class="btn btn-secondary" target="_blank" rel="noopener"><i class="fas fa-directions" aria-hidden="true"></i> Directions</a>
                    <a href="${C.GBP_URL}" class="btn btn-secondary" target="_blank" rel="noopener"><i class="fab fa-google" aria-hidden="true"></i> Google reviews</a>
                </div>
                <p class="hyperlocal-areas"><strong>Service area:</strong> ${C.SERVICE_AREAS.join(' · ')}</p>
            </div>
        </section>`;
}

function fullBlock() {
  const hoursHtml = C.HOURS.map(
    (h) => `<li><strong>${h.days}:</strong> ${h.time}</li>`
  ).join('\n                        ');

  return `
        <!-- ${MARKER} -->
        <section id="hyperlocal-gbp" class="hyperlocal-gbp-section" aria-labelledby="hyperlocal-gbp-title">
            <div class="container">
                <p class="hyperlocal-kicker"><i class="fas fa-map-marker-alt" aria-hidden="true"></i> Hyperlocal Skye Summit real estate</p>
                <h2 id="hyperlocal-gbp-title">${C.AGENT_NAME}, ${C.AGENT_TITLE} — Your Skye Summit concierge</h2>
                <p class="hyperlocal-lead">Concierge guidance for <strong>homebuyers</strong> and <strong>homesellers</strong> in Skye Summit and northwest Las Vegas—pricing, tours, builder contracts, and closing.</p>
                <div class="hyperlocal-grid">
                    <div class="hyperlocal-card">
                        <h3><i class="fas fa-key" aria-hidden="true"></i> Buyer concierge</h3>
                        <ul>
                            <li>Custom Skye Summit search &amp; showings</li>
                            <li>New construction &amp; resale offer strategy</li>
                            <li><a href="/buy">Buying in Skye Summit</a> · <a href="/homes-for-sale-skye-summit">Listings</a></li>
                        </ul>
                    </div>
                    <div class="hyperlocal-card">
                        <h3><i class="fas fa-tag" aria-hidden="true"></i> Seller concierge</h3>
                        <ul>
                            <li>Skye Summit-specific valuation &amp; pricing</li>
                            <li>Marketing to qualified local buyers</li>
                            <li><a href="/sell">Sell your home</a> · <a href="/valuation">Free valuation</a></li>
                        </ul>
                    </div>
                    <div class="hyperlocal-card hyperlocal-nap">
                        <h3><i class="fas fa-building" aria-hidden="true"></i> NAP (matches Google Business Profile)</h3>
                        <p class="hyperlocal-name"><strong>${C.AGENT_NAME}, ${C.AGENT_TITLE}</strong><br>${C.BROKERAGE}</p>
                        <p><a href="tel:${C.PHONE_TEL}">${C.PHONE_DISPLAY}</a><br><a href="mailto:${C.EMAIL}">${C.EMAIL}</a></p>
                        <p><a href="${C.MAPS_DIRECTIONS}" target="_blank" rel="noopener">${C.STREET}<br>${C.CITY}, ${C.REGION} ${C.POSTAL}</a></p>
                        <p class="hyperlocal-license">Nevada license ${C.LICENSE}</p>
                    </div>
                </div>
                <div class="gbp-action-buttons" role="group" aria-label="Contact and Google Business Profile">
                    <a href="tel:${C.PHONE_TEL}" class="btn btn-primary btn-large"><i class="fas fa-phone" aria-hidden="true"></i> Call</a>
                    <a href="${C.MAPS_DIRECTIONS}" class="btn btn-secondary btn-large" target="_blank" rel="noopener"><i class="fas fa-directions" aria-hidden="true"></i> Directions</a>
                    <a href="${C.GBP_URL}" class="btn btn-secondary btn-large" target="_blank" rel="noopener"><i class="fab fa-google" aria-hidden="true"></i> View on Google</a>
                    <a href="${C.GBP_REVIEW_URL}" class="btn btn-secondary btn-large" target="_blank" rel="noopener"><i class="fas fa-star" aria-hidden="true"></i> Write a review</a>
                </div>
                <div class="hyperlocal-bottom">
                    <div class="hyperlocal-hours">
                        <h3>Business hours</h3>
                        <ul>${hoursHtml}</ul>
                        <p class="hyperlocal-rating"><i class="fas fa-star" aria-hidden="true"></i> <strong>${C.RATING}/5</strong> (${C.REVIEW_COUNT} Google reviews)</p>
                    </div>
                    <div class="gbp-map-embed">
                        <iframe title="Dr. Jan Duffy office — ${C.STREET}, ${C.CITY}" loading="lazy" referrerpolicy="no-referrer-when-downgrade" width="600" height="280" src="${C.MAP_EMBED}"></iframe>
                    </div>
                </div>
                <p class="hyperlocal-areas"><strong>Primary service area:</strong> ${C.SERVICE_AREAS.join(' · ')} · <a href="/skye-summit-realtor">Skye Summit REALTOR® profile</a> · <a href="/skye-summit-faq">FAQ</a></p>
            </div>
        </section>`;
}

function schemaBlock() {
  const graph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'RealEstateAgent',
        '@id': `${C.SITE}/#agent`,
        name: C.AGENT_NAME,
        jobTitle: C.AGENT_TITLE,
        telephone: C.PHONE_TEL,
        email: C.EMAIL,
        url: C.SITE,
        image: `${C.SITE}/images/agents/dr-jan-duffy.jpg`,
        identifier: C.LICENSE,
        worksFor: {
          '@type': 'Organization',
          name: C.BROKERAGE,
        },
        areaServed: C.SERVICE_AREAS.map((name) => ({
          '@type': 'Place',
          name: `${name}, Las Vegas NV`,
        })),
        knowsAbout: [
          'Skye Summit homes for sale',
          'Skye Summit home selling',
          'New construction Skye Summit',
          'Centennial Hills real estate',
        ],
        sameAs: [C.GBP_URL],
      },
      {
        '@type': 'LocalBusiness',
        '@id': `${C.SITE}/#localbusiness`,
        name: `${C.AGENT_NAME} — Skye Summit Real Estate`,
        description:
          'Concierge REALTOR for homebuyers and homesellers in Skye Summit, Las Vegas.',
        telephone: C.PHONE_TEL,
        email: C.EMAIL,
        url: C.SITE,
        image: `${C.SITE}/images/agents/dr-jan-duffy.jpg`,
        address: {
          '@type': 'PostalAddress',
          streetAddress: C.STREET,
          addressLocality: C.CITY,
          addressRegion: C.REGION,
          postalCode: C.POSTAL,
          addressCountry: 'US',
        },
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '09:00',
            closes: '17:00',
          },
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: 'Saturday',
            opens: '10:00',
            closes: '16:00',
          },
        ],
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: C.RATING,
          reviewCount: C.REVIEW_COUNT,
          bestRating: '5',
        },
        sameAs: [C.GBP_URL],
      },
    ],
  };
  return `<script type="application/ld+json" data-hyperlocal-gbp-schema>\n${JSON.stringify(graph, null, 2)}\n    </script>`;
}

function usesCompact(html) {
  return (
    /reviews-map-section|hours-section|hyperlocal-gbp-section--compact/i.test(
      html
    ) && /id="hyperlocal-gbp"/i.test(html) === false
  );
}

function shouldUseCompact(html) {
  if (/reviews-map-section|class="hours-section"/i.test(html)) return true;
  return false;
}

function injectSection(html, baseName) {
  const block =
    LEGAL_COMPACT.has(baseName) || shouldUseCompact(html)
      ? compactBlock()
      : fullBlock();
  if (/<\/main>/i.test(html)) {
    return html.replace(/<\/main>/i, `${block}\n    </main>`);
  }
  if (/<footer/i.test(html)) {
    return html.replace(/<footer/i, `${block}\n\n    <footer`);
  }
  return html;
}

function injectSchema(html) {
  if (/data-hyperlocal-gbp-schema/i.test(html)) return html;
  if (/<\/head>/i.test(html)) {
    return html.replace(/<\/head>/i, `    ${schemaBlock()}\n</head>`);
  }
  return html;
}

let updated = 0;
const files = listHtmlFiles(root);

for (const filePath of files) {
  const base = path.basename(filePath);
  if (SKIP_FILES.has(base)) continue;

  let html = fs.readFileSync(filePath, 'utf8');
  if (html.includes(MARKER)) {
    html = injectSchema(html);
    if (html !== fs.readFileSync(filePath, 'utf8')) {
      fs.writeFileSync(filePath, html);
      updated += 1;
    }
    continue;
  }

  const next = injectSchema(injectSection(html, base));
  if (next !== html) {
    fs.writeFileSync(filePath, next);
    updated += 1;
  }
}

console.log(
  `inject-hyperlocal-gbp: processed ${files.length} HTML file(s), updated ${updated}`
);
