export const COMPLY_SIGNUP_FORM = 1067;
export const COMPLY_AFTER_SCHEDULED_FORM = 1052;
export const COMPLY_PRICING_FORM = 1043;
export const DEPLOY_SIGNUP_FORM = 1072;
export const GENERIC_SIGNUP_FORM = 1075;
export const NEWSLETTER_FORM = 1073;

export function submitMarketoForm(formId, payload, callback) {
  if (typeof(window) === 'undefined' || !window.MktoForms2) {
    callback();
    return;
  }

  window.MktoForms2.loadForm('//app-ab35.marketo.com', '620-GAP-535', formId);
  window.MktoForms2.whenReady((marketoForm) => {
    marketoForm.addHiddenFields(payload);

    marketoForm.onSuccess(() => {
      callback();
      return false;
    });

    marketoForm.submit();
  });
}
