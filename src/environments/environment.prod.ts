// src/environments/environment.prod.ts (production)
export const environment = {
  production: true,
  apiUrl: 'https://api.yourdomain.com',
  emailjs: {
    serviceId: 'REPLACE_EMAILJS_SERVICE_ID_PROD',  // Prod placeholder (injected via secrets)
    templateId: 'REPLACE_EMAILJS_TEMPLATE_ID_PROD',
    userId: 'REPLACE_EMAILJS_USER_ID_PROD'
  }
  // production settings
};