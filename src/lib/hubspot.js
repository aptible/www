import { analytics, cookies } from './aptible.js';
import axios from 'axios';

const FREE_EMAIL_DOMAINS = ['gmail.com', 'yahoo.com', 'hotmail.com'];
const HUBSPOT_ACCOUNT_ID = '20235662';
const HUBSPOT_COOKIE = 'hubspotutk';

export const HUBSPOT_FORM_PRODUCT_SIGNUP = '9ff54b8a-a71e-464c-95e5-a7fff6511cac';
export const HUBSPOT_FORM_HIPAA_GUIDE = '87365f9e-d16c-4df4-92a1-8cae85d67bd7';
export const HUBSPOT_FORM_AWS_ACTIVATE = '04eddc8b-cadb-416a-869f-8d5d1f518b40';

const validateEmail = (email, allowPersonalEmails) => {
  if (!email) return { ok: false, message: 'email cannot be empty' };

  if (!allowPersonalEmails) {
    const emailTokens = email.split('@');
    if (emailTokens.length > 1 && FREE_EMAIL_DOMAINS.indexOf(emailTokens[1]) !== -1) {
      return { ok: false, message: 'Please use your work email address' };
    }
  }

  return { ok: true, message: '' };
};

const generateField = (field, value) => {
  return {
    objectTypeId: '0-1', // 0-1 is used for Contacts
    name: field,
    value: value,
  };
};

const addUtmsToFields = (fields) => {
  const utms = {};

  // First grab them from the cookies
  for (let param of analytics.utmVars) {
    if (cookies.get(param)) {
      utms[param] = cookies.get(param);
    }
  }

  // Then take them from the URL (and overwrite cookie values if necessary)
  const urlUtms = analytics.allUtmVars();
  for (let param of analytics.utmVars) {
    if (urlUtms[param]) {
      utms[param] = urlUtms[param];
    }
  }

  for (let param in utms) {
    fields.push(generateField(param, utms[param]));
  }
};

export const submitHubspotForm = (formId, email, allowPersonalEmails) => {
  const result = validateEmail(email, allowPersonalEmails);
  if (!result.ok) {
    return result;
  }

  const payload = {
    fields: [
      generateField('email', email)
    ],
    context: {
      pageUri: analytics.currentURL(),
      pageName: window.document.title,
    }
  };

  if (cookies.get(HUBSPOT_COOKIE)) {
    payload.context.hutk = cookies.get(HUBSPOT_COOKIE)
  }

  addUtmsToFields(payload.fields);

  analytics.identify(email);
  analytics.event('Email Collected', { formId: formId });
  analytics.trackOnLinkedIn();

  // Submit form through the Hubspot API
  const url = `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_ACCOUNT_ID}/${formId}`;
  axios.post(url, payload);
  
  return result;
}
