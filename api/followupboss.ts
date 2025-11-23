// Follow Up Boss CRM Integration API Route
// Vercel Serverless Function

import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(
  request: VercelRequest,
  response: VercelResponse
) {
  // Only allow POST requests
  if (request.method !== 'POST') {
    return response.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const apiKey = process.env.FUB_API_KEY;
    
    if (!apiKey) {
      console.error('FUB_API_KEY environment variable is not set');
      return response.status(500).json({ 
        error: 'Server configuration error. Please contact support.' 
      });
    }

    const {
      firstName,
      lastName,
      email,
      phone,
      message,
      propertyAddress,
      serviceInterest,
      timeline,
      beds,
      baths,
      squareFeet,
      features,
      notes
    } = request.body;

    // Validate required fields
    if (!email || !phone) {
      return response.status(400).json({ 
        error: 'Email and phone are required' 
      });
    }

    // Prepare lead data for Follow Up Boss
    const leadData: any = {
      firstName: firstName || '',
      lastName: lastName || '',
      emails: [{ value: email }],
      phones: [{ value: phone }],
      source: 'Skye Summit Website',
      tags: ['Website Lead']
    };

    // Add message if provided
    if (message) {
      leadData.message = message;
    }

    // Add property address if provided (for valuation requests)
    if (propertyAddress) {
      leadData.property = propertyAddress;
      leadData.tags.push('Valuation Request');
    }

    // Add service interest
    if (serviceInterest) {
      leadData.tags.push(serviceInterest);
      leadData.source = `Skye Summit Website - ${serviceInterest}`;
    }

    // Add custom fields for property details (if valuation form)
    if (beds || baths || squareFeet || features) {
      leadData.customFields = {};
      if (beds) leadData.customFields.bedrooms = beds;
      if (baths) leadData.customFields.bathrooms = baths;
      if (squareFeet) leadData.customFields.squareFeet = squareFeet;
      if (features) leadData.customFields.features = Array.isArray(features) ? features.join(', ') : features;
      if (notes) leadData.customFields.additionalNotes = notes;
      if (timeline) leadData.customFields.timeline = timeline;
    }

    // Call Follow Up Boss API
    const fubResponse = await fetch('https://api.followupboss.com/v1/leads', {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${Buffer.from(apiKey + ':').toString('base64')}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(leadData)
    });

    if (!fubResponse.ok) {
      const errorText = await fubResponse.text();
      console.error('Follow Up Boss API error:', errorText);
      return response.status(fubResponse.status).json({ 
        error: 'Failed to submit lead. Please try again or call (702) 930-8222.' 
      });
    }

    const result = await fubResponse.json();

    // Return success response
    return response.status(200).json({ 
      success: true,
      message: 'Thank you! Dr. Jan will contact you within 2 hours.',
      leadId: result.id || null
    });

  } catch (error: any) {
    console.error('Error creating lead:', error);
    return response.status(500).json({ 
      error: 'An error occurred. Please call (702) 930-8222 directly.' 
    });
  }
}

