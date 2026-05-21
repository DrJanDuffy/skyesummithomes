#!/usr/bin/env bash
# Creates a zone Single Redirect: skyesummithomes.com/* → https://www.skyesummithomes.com/$1
# Requires: CLOUDFLARE_API_TOKEN (Zone:Edit, Single Redirect:Edit or Account Rulesets Write)
set -euo pipefail

ACCOUNT_ID="${CLOUDFLARE_ACCOUNT_ID:-2cc579c1ec9e426ed585e933ebf4753b}"
ZONE_NAME="${CLOUDFLARE_ZONE_NAME:-skyesummithomes.com}"
TOKEN="${CLOUDFLARE_API_TOKEN:?Set CLOUDFLARE_API_TOKEN}"

ZONE_ID=$(curl -sf "https://api.cloudflare.com/client/v4/zones?name=${ZONE_NAME}" \
  -H "Authorization: Bearer ${TOKEN}" | jq -r '.result[0].id')

if [ -z "$ZONE_ID" ] || [ "$ZONE_ID" = "null" ]; then
  echo "Could not resolve zone ID for ${ZONE_NAME}" >&2
  exit 1
fi

echo "Zone ${ZONE_NAME} => ${ZONE_ID}"

# Dynamic redirect rule (Rulesets API - http_request_dynamic_redirect phase)
curl -sf "https://api.cloudflare.com/client/v4/zones/${ZONE_ID}/rulesets" \
  -H "Authorization: Bearer ${TOKEN}" \
  -H "Content-Type: application/json" \
  --data '{
    "name": "Skye Summit apex to www",
    "kind": "zone",
    "phase": "http_request_dynamic_redirect",
    "rules": [
      {
        "expression": "(http.host eq \"skyesummithomes.com\")",
        "description": "301 apex to www for GSC",
        "action": "redirect",
        "action_parameters": {
          "from_value": {
            "status_code": 301,
            "target_url": {
              "expression": "concat(\"https://www.skyesummithomes.com\", http.request.uri.path)"
            },
            "preserve_query_string": true
          }
        },
        "enabled": true
      }
    ]
  }' | jq .

echo "Done. Verify: curl -sI https://skyesummithomes.com/invest | grep -iE 'HTTP|location'"
