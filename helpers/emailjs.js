import emailjs from 'emailjs-com'

emailjs.init('GigqcxGObXMVeDPpY')

export default {
  send: template => emailjs.send('service_b503lky', 'rebirthstudio_contact', template)
}
