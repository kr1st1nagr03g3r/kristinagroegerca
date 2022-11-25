// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const mail = require('@sendgrid/mail')

mail.setApiKey(sendgrid.env.SENDGRID_API_KEY)

export default function handler(req, res) {
  const body = JSON.parse(req.body)
  console.log(body)

  const message = `
  Name:  ${body.name}\r\n
  Email:  ${body.email}\r\n
  Message:  ${body.message}\r\n
  `

  const data = {
    to: 'me@kristinagroeger.ca',
    from: 'me@kristinagroeger.ca',
    subject: 'new web form message',
    text: message,
    html: message.replace(/\r\n/g, '<br>'),
  }

  mail.send(data)

  res.status(200).json({ name: 'Ok' })
}
