import { analytics, cookies } from './aptible';

export const COMPLY_SIGNUP_FORM = 1067;
export const COMPLY_AFTER_SCHEDULED_FORM = 1052;
export const COMPLY_UNQUALIFIED_FORM = 1095;
export const COMPLY_PRICING_FORM = 1043;
export const DEPLOY_SIGNUP_FORM = 1072;
export const GENERIC_SIGNUP_FORM = 1075;
export const NEWSLETTER_FORM = 1073;
export const SECURITY_MANAGEMENT_GUIDE_FORM = 1074;

const FORM_SUBMIT_TIMEOUT_MS = 7000;

export function submitMarketoForm(formId, payload, callback) {
  if (typeof(window) === 'undefined' || !window.MktoForms2) {
    callback();
    return;
  }

  // Add cookied UTM params into the Marketo payload
  for (let param of analytics.utmVars) {
    if (cookies.get(param)) {
      if (param === 'gclid') {
        param = 'GCLID';
      }

      payload[`${param}__c`] = cookies.get(param);
    }
  }

  // Add current, ref, and session ref URLs to all forms
  payload['Conversion_URL__c'] = window.location.href;

  if (document.referrer && document.referrer.length > 0) {
    payload['Signup_Referral_URL__c'] = document.referrer;
  }

  if (cookies.get('_aptible_session_ref')) {
    payload['Session_Referral_URL__c'] = cookies.get('_aptible_session_ref');
  }

  // If email is set, send it to Segment as well
  if ('Email' in payload) {
    analytics.identify(payload.Email);
    analytics.event(analytics.events.EMAIL_COLLECTED);
  }

  // If marketo is ad-blocked or does not respond in a reasonable amount of
  // time, proceed with the signup flow.
  const submitTimeout = setTimeout(() => {
    callback();
  }, FORM_SUBMIT_TIMEOUT_MS);

  window.MktoForms2.loadForm('//app-ab35.marketo.com', '620-GAP-535', formId);
  window.MktoForms2.whenReady((marketoForm) => {
    marketoForm.addHiddenFields(payload);

    marketoForm.onSuccess(() => {
      clearTimeout(submitTimeout);
      callback();
      return false;
    });

    marketoForm.submit();
  });
}
