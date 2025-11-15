export const environment = {
  production: true,
  apiUrl: 'https://api.yourdomain.com',
  emailjs: {
    serviceId: process?.env['EMAILJS_SERVICE_ID'] || 'REPLACE_EMAILJS_SERVICE_ID_PROD',
    templateId: process?.env['EMAILJS_TEMPLATE_ID'] || 'REPLACE_EMAILJS_TEMPLATE_ID_PROD',
    userId: process?.env['EMAILJS_PUBLIC_KEY'] || 'REPLACE_EMAILJS_USER_ID_PROD'
  }
};