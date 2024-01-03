const express=require("express");
const app=express();
const bodyParser=require("body-parser");
const cors=require("cors");
const nodemailer=require("nodemailer");
const dotenv=require("dotenv");
const fs=require("fs");
// const bodyParser = require("json-server");

app.use(cors({origin:"*"}));
app.use(bodyParser.json());

dotenv.config({
  path:'./.env'
})

// console.log(process.env.PASSWORD);

// app.get('/',(req,res)=>{
//     res.sendFile('C:/Users/jeeva/OneDrive/Documents/Javascript-Practice/Mail API/form.html');
// });
app.post('/sendmail',(req,res)=>{
    let user=req.body;
    console.log(user);

    sendMail(user,(err,info)=>{
        if(err){
            console.log(err);
        }
        else{
        console.log("Email sent successfully");
        res.send(info);
        }
    });
});

async function sendMail(user,callback){
    var transporter=nodemailer.createTransport({
        host:process.env.HOSTNAME,
        port:process.env.PORT,
        secure:false,
        auth:{
          user:process.env.USERMAIL,
          pass:process.env.PASSWORD
        }
      });
      var mailoptions={
        from:process.env.USERMAIL,
        // to:process.env.USERMAIL,
        to: user.mail,
        subject:'EV Mart Registration',
        html:`<div style="padding:25px; background:#E5E4E2;display:flex;justify-content:center;align-items:center;">
        <div style="width:40rem;background:#E5E4E2;">
        <img src="https://live.staticflickr.com/65535/52850423950_290c5f4c27.jpg" width="200px" height="150px"><br>
        <h4>Hey <b>${user.name}</b>, <br><br> Welcome to the EV Mart. You just created your EV Mart account. We want to be absolutely sure that it’s you, so click the button below and verify your email ID. </h4><br>
        <a style=" text-decoration: none;
        color: white; border: none;  background: green;  padding: 10px;" href="http://localhost:4200/login" onclick="myFunction()">VERIFY EMAIL</a><br>
        <p>Thanks,<br>Team EV Mart</p>
        </div>
        </div>`
      };
    function myFunction(){
      alert("")
    }
      transporter.sendMail(mailoptions,function(err,info){
        if(err) throw err;
        console.log('email sent:'+info.response);
      });

}

app.post('/bookappoint',(req,res)=>{
  let user1=req.body;
    console.log(user1);

    sendMail1(user1,(err,info)=>{
        if(err){
            console.log(err);
        }
        else{
        console.log("Email sent successfully");
        res.send(info);
        }
    });
})
async function sendMail1(user1,callback){
  var transporter=nodemailer.createTransport({
      host:process.env.HOSTNAME,
      port:process.env.PORT,
      secure:false,
      auth:{
        user:process.env.USERMAIL,
        pass:process.env.PASSWORD 
      }
    });
    var mailoptions={
      from:process.env.USERMAIL,
      // to:process.env.USERMAIL,
      to: user1.mail,
      subject:'EV Mart Registration',
      html:`<div style="padding:25px; background:#E5E4E2;display:flex;justify-content:center;align-items:center;">
      <div style="width:40rem;background:#E5E4E2;">
      <img src="https://live.staticflickr.com/65535/52850423950_290c5f4c27.jpg" width="200px" height="150px"><br>
      <h4>Hey <b>${user1.name}</b>, <br><br> Your appointment has been booked Successfully. Find the below details about your booking</h4><br>
      <p><b>Date of visit:</b> ${user1.date}</p>
      <p><b>Time Slot:</b> ${user1.time}</p>
      <p><b>Address:</b> ${user1.location}</p><br>
      <p>Thanks,<br>Team EV Mart</p>
      </div>
      </div>`
    };
  
    transporter.sendMail(mailoptions,function(err,info){
      if(err) throw err;
      console.log('email sent:'+info.response);
    });
}

app.post('/forgot',(req,res)=>{
  let user2=req.body;
    console.log(user2);

    sendMail2(user2,(err,info)=>{
        if(err){
            console.log(err);
        }
        else{
        console.log("Email sent successfully");
        res.send(info);
        }
    });
})
async function sendMail2(user2,callback){
  var transporter=nodemailer.createTransport({
      host:process.env.HOSTNAME,
      port:process.env.PORT,
      secure:false,
      auth:{
        user:process.env.USERMAIL,
        pass:process.env.PASSWORD
      }
    });
    var mailoptions={
      from:process.env.USERMAIL,
      // to:process.env.USERMAIL,
      to: user2.mail,
      subject:'EV Mart Change password',
      html:`<div style="padding:25px; background:#E5E4E2;display:flex;justify-content:center;align-items:center;">
      <div style="width:40rem;background:#E5E4E2;">
      <img src="https://live.staticflickr.com/65535/52850423950_290c5f4c27.jpg" width="200px" height="150px"><br>
      <h4>Hey <b>${user2.user}</b> <br><br>
      <h3>Your password has been changed Successfully. Now you can use your changed password to login EV Mart.</h3>
      <p>Thanks,<br>Team EV Mart</p>
      </div>
      </div>`
    };
  
    transporter.sendMail(mailoptions,function(err,info){
      if(err) throw err;
      console.log('email sent:'+info.response);
    });
}

app.post('/Service',(req,res)=>{
  let user3=req.body;
    console.log(user3);

    sendMail2(user3,(err,info)=>{
        if(err){
            console.log(err);
        }
        else{
        console.log("Email sent successfully");
        res.send(info);
        }
    });
})
async function sendMail2(user3,callback){
  var transporter=nodemailer.createTransport({
      host:process.env.HOSTNAME,
      port:process.env.PORT,
      secure:false,
      auth:{
        user:process.env.USERMAIL,
        pass:process.env.PASSWORD
      }
    });
    var mailoptions={
      from:process.env.USERMAIL,
      // to:process.env.USERMAIL,
      to: user3.mail,
      subject:'EV Mart Service',
      html:`<div style="padding:25px; background:#E5E4E2;display:flex;justify-content:center;align-items:center;">
      <div style="width:40rem;background:#E5E4E2;">
      <img src="https://live.staticflickr.com/65535/52850423950_290c5f4c27.jpg" width="200px" height="150px"><br>
      <h4>${user3.reply}<br><br>
      <h3>Your Vehicle number- <b>${user3.vehicleno}</b>, of Model <b>${user3.varient}</b> has been accepted by EV Mart Service center.</h3>
      <p><b>Date of visit:</b> ${user3.date}</p>
      <p><b>Time Slot:</b> ${user3.time}</p>
      <p>Visit Your nearby EV Mart Center.</p>
      <p><b>Thanks,</b><br><b>Team EV Mart</b></p>
      </div>
      </div>`
    };
  
    transporter.sendMail(mailoptions,function(err,info){
      if(err) throw err;
      console.log('email sent:'+info.response);
    });
}

app.post('/neworders',(req,res)=>{
  let user=req.body;
  console.log(user);

  sendMailnew(user,(err,info)=>{
      if(err){
          console.log(err);
      }
      else{
      console.log("Email sent successfully");
      res.send(info);
      }
  });
});

async function sendMailnew(user,callback){
  var transporter=nodemailer.createTransport({
      host:process.env.HOSTNAME,
      port:process.env.PORT,
      secure:false,
      auth:{
        user:process.env.USERMAIL,
        pass:process.env.PASSWORD
      }
    });
    var mailoptions={
      from:process.env.USERMAIL,
      // to:process.env.USERMAIL,
      to: user.mail,
      subject:'EV Mart order confirmation',
      html:`<div style="padding:25px; background:#E5E4E2;display:flex;justify-content:center;align-items:center;">
      <div style="width:40rem;background:#E5E4E2;">
      <img src="https://live.staticflickr.com/65535/52850423950_290c5f4c27.jpg" width="200px" height="150px"><br>
      <h4>Hey <b>${user.firstname}</b>, <br><br> Welcome to the EV Mart. Thanks for booking electric vehicle in our EV Mart. Your order id is <b>#${user.orderid}</b>. You booked <b>${user.varientname}</b> at the price of <b>Rs. ${user.price}</b>. <b></b> </h4><br>
      <h4>Payment Mode - <b>${user.paymentmode}<h4></b>
      <h4>Online paid amount - <b>Rs. ${user.onlinepaidamount}</h4></b>
      <h4>Booking date - <b>${user.day},${user.bookingdate}</b></h4>
      <h4></h4>
      <br>
      <p>Thanks,<br>Team EV Mart</p>
      </div>
      </div>`
    };
  function myFunction(){
    alert("")
  }
    transporter.sendMail(mailoptions,function(err,info){
      if(err) throw err;
      console.log('email sent:'+info.response);
    });

}

app.post('/cancelorder',(req,res)=>{
  let user=req.body;
  console.log(user);

  sendMailcancel(user,(err,info)=>{
      if(err){
          console.log(err);
      }
      else{
      console.log("Email sent successfully");
      res.send(info);
      }
  });
});

async function sendMailcancel(user,callback){
  var transporter=nodemailer.createTransport({
      host:process.env.HOSTNAME,
      port:process.env.PORT,
      secure:false,
      auth:{
        user:process.env.USERMAIL,
        pass:process.env.PASSWORD
      }
    });
    var mailoptions={
      from:process.env.USERMAIL,
      // to:process.env.USERMAIL,
      to: user.mail,
      subject:'EV Mart order cancellation',
      html:`<div style="padding:25px; background:#E5E4E2;display:flex;justify-content:center;align-items:center;">
      <div style="width:40rem;background:#E5E4E2;">
      <img src="https://live.staticflickr.com/65535/52850423950_290c5f4c27.jpg" width="200px" height="150px"><br>
      <h4>Hey <b>${user.firstname}</b>, <br><br> Welcome to the EV Mart. We canceled your order. Your order id is <b>#${user.orderid}</b>. You booked <b>${user.varientname}</b> at the price of <b>Rs. ${user.price}</b>. <b></b> </h4><br>
      <h4>Online paid amount - <b>Rs. ${user.onlinepaidamount}</h4></b>
      <h4>Booking date - <b>${user.bookingdate}</b></h4>
      <h4>We will refund your online paid amount within two business days.</h4>
      <br>
      <p>Thanks,<br>Team EV Mart</p>
      </div>
      </div>`
    };
  function myFunction(){
    alert("")
  }
    transporter.sendMail(mailoptions,function(err,info){
      if(err) throw err;
      console.log('email sent:'+info.response);
    });
  }

  app.post('/deliveryorder',(req,res)=>{
    let user=req.body;
    console.log(user);
  
    sendMaildelivery(user,(err,info)=>{
        if(err){
            console.log(err);
        }
        else{
        console.log("Email sent successfully");
        res.send(info);
        }
    });
  });
  
  async function sendMaildelivery(user,callback){
    var transporter=nodemailer.createTransport({
        host:process.env.HOSTNAME,
        port:process.env.PORT,
        secure:false,
        auth:{
          user:process.env.USERMAIL,
          pass:process.env.PASSWORD
        }
      });
      var mailoptions={
        from:process.env.USERMAIL,
        // to:process.env.USERMAIL,
        to: user.mail,
        subject:'EV Mart order delivery',
        html:`<div style="padding:25px; background:#E5E4E2;display:flex;justify-content:center;align-items:center;">
        <div style="width:40rem;background:#E5E4E2;">
        <img src="https://live.staticflickr.com/65535/52850423950_290c5f4c27.jpg" width="200px" height="150px"><br>
        <h4>Hey <b>${user.firstname}</b>, <br><br> Welcome to the EV Mart. We hope you received your order. Your order id is <b>#${user.orderid}</b>. You booked <b>${user.varientname}</b> at the price of <b>Rs. ${user.price}</b>. <b></b> </h4><br>
        <h4>Online paid amount - <b>Rs. ${user.onlinepaidamount}</h4></b>
        <h4>Booking date - <b>${user.day},${user.bookingdate}</b></h4>
        <h4>Delivery date - <b>${user.deliveryDate}</b></h4>
        <br>
        <h4>Share your experience in the given below link</h4>
        <a href="http://localhost:4200/userorderfeedback?email=${user.mail}&order-id=${user.orderid}" style="text-tranform:none;color:Green">Feeback link</a>
        <h4>Continue booking with us.</h4>
        <br>
        <p>Thanks,<br>Team EV Mart</p>
        </div>
        </div>`
      };
    function myFunction(){
      alert("")
    }
      transporter.sendMail(mailoptions,function(err,info){
        if(err) throw err;
        console.log('email sent:'+info.response);
      });
    }

  app.post('/api/logs',(req,res)=>{
    const logContent=req.body.messageinfo;
    const level=req.body.level;
    const logStatus=req.body.logStatus;
    fs.appendFile('EVMARTlogs.log',new Date()+'--'+level+ '--'+logStatus+'--'+logContent +'\n',(err)=>{
      if(err){
      console.error('Error writing log:', err);
      return res.status(500).json({ error: 'Error writing log' });
      }
      console.log('Log written successfully:', logContent);
      res.status(200).json({ message: 'Log written successfully' });
    })
  })



app.listen(4000,(req,res)=>{
    console.log("The port running @4000");
});
