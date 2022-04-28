import emailjs from 'emailjs-com'

// eslint-disable-next-line import/no-named-as-default-member
emailjs.init('GigqcxGObXMVeDPpY')

export default {
  // eslint-disable-next-line import/no-named-as-default-member
  send: template => emailjs.send('service_b503lky', 'rebirthstudio_contact', template)
}
