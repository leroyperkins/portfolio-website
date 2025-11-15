export const environment = {
  production: false,
  apiUrl: 'https://api-develop.yourdomain.com',
  emailjs: {
    serviceId: process?.env['EMAILJS_SERVICE_ID'] || 'REPLACE_EMAILJS_SERVICE_ID_DEVELOP',
    templateId: process?.env['EMAILJS_TEMPLATE_ID'] || 'REPLACE_EMAILJS_TEMPLATE_ID_DEVELOP',
    userId: process?.env['EMAILJS_PUBLIC_KEY'] || 'REPLACE_EMAILJS_USER_ID_DEVELOP'
  }
};