const nodemailer = require('nodemailer')
const sendGridTransport = require('nodemailer-sendgrid-transport')

//transport
const transporter = nodemailer.createTransport(
    sendGridTransport({
        auth:{
            api_key: process.env.API_SENDGRID,
        },
    })
)

const sendEmailController = (req,res) =>{
    try {
        const {name,email,msg} = req.body

        //validation
        if(!name || !email || !msg){
            return res.status(500).send({
                success: true,
                message: 'Please Provide All Field'
            })
        }
        //email matter
        transporter.sendMail({
            to: 'patelanshu5272@gmail.com',
            from: 'patelanshu5272@gmail.com',
            subject: 'Regarding Full Stack Development',
            html: `
               <h5>Detail Information</h5>
               <ul>
                 <li><p>Name : ${name}</p></li>
                 <li><p>Email : ${email}</p></li>
                 <li><p>Message : ${msg}</p></li>
               </ul>
            `
        })
        return res.status(200).send({
            success: true,
            message: 'Your Message send Successfully'
        })
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            success:false,
            message:'send email api error',
            error
        })
    }
}

module.exports = {sendEmailController};