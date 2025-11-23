# Follow Up Boss CRM Setup Guide

## Quick Setup (5 Minutes)

### Step 1: Get Your API Key

1. Log in to [Follow Up Boss](https://app.followupboss.com)
2. Click your profile → **Settings**
3. Navigate to **API** section
4. Copy your **API Key** (keep it secure)

### Step 2: Add to Vercel

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your **skyesummithomes** project
3. Click **Settings** → **Environment Variables**
4. Click **Add New**
5. Enter:
   - **Key**: `FUB_API_KEY`
   - **Value**: [Paste your API key]
   - **Environment**: Select all (Production, Preview, Development)
6. Click **Save**

### Step 3: Deploy

The site will auto-deploy, or manually trigger:

```bash
vercel --prod
```

### Step 4: Test

1. Go to https://skyesummithomes.com/valuation
2. Fill out the form with test data
3. Submit
4. Check Follow Up Boss dashboard → **Leads** section
5. Verify the lead appears with all data

---

## Verification Checklist

- [ ] API key added to Vercel environment variables
- [ ] Site redeployed after adding API key
- [ ] Valuation form tested and creates lead in Follow Up Boss
- [ ] Consultation form tested and creates lead in Follow Up Boss
- [ ] Lead data appears correctly in Follow Up Boss
- [ ] Tags are applied correctly
- [ ] Error handling works (test with invalid data)

---

## Troubleshooting

### "Server configuration error"
**Problem**: API key not set  
**Solution**: Add `FUB_API_KEY` to Vercel environment variables

### "Failed to submit lead"
**Problem**: API key invalid or no permissions  
**Solution**: 
- Verify API key is correct
- Check Follow Up Boss API permissions
- Review Vercel function logs

### Form submits but no lead appears
**Problem**: API call succeeded but lead not visible  
**Solution**:
- Check Follow Up Boss dashboard (may take a few seconds)
- Verify API key has create lead permissions
- Check Vercel function logs for API response

### How to Check Logs

1. Go to Vercel Dashboard
2. Select your project
3. Click **Deployments** → Latest deployment
4. Click **Functions** tab
5. Click `/api/followupboss`
6. View **Logs** tab for errors

---

## What Gets Sent to Follow Up Boss

### Valuation Form
- Name (first/last)
- Email
- Phone
- Property Address
- Bedrooms, Bathrooms, Square Feet
- Special Features (corner lot, golf view, pool, etc.)
- Timeline
- Additional Notes

**Tags**: `Website Lead`, `Valuation Request`

### Consultation Form
- Name (first/last)
- Email
- Phone
- Service Interest (selling, buying, etc.)
- Timeline
- Message

**Tags**: `Website Lead`, `[Service Interest]`

---

## Next Steps After Setup

1. **Set up Auto-Responder**: Configure email templates in Follow Up Boss
2. **Create Workflows**: Set up automated follow-up sequences
3. **Test Both Forms**: Verify both forms create leads correctly
4. **Monitor Leads**: Check Follow Up Boss dashboard regularly
5. **Review Tags**: Ensure tags help organize leads

---

## Support

**Follow Up Boss Support**:  
https://help.followupboss.com/

**Vercel Support**:  
https://vercel.com/support

**API Documentation**:  
https://followupboss.com/api/

---

*Setup Guide - January 2025*

