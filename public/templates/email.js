export const signup = (data) => {
  return `
      <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
    <html
      data-editor-version="2"
      class="sg-campaigns"
      xmlns="http://www.w3.org/1999/xhtml"
    >
      <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1"
        />
        <meta http-equiv="X-UA-Compatible" content="IE=Edge" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400&display=swap"
          rel="stylesheet"
        />
        <style>
          body {
            font-family: "Poppins", sans-serif;
            background-color: #f7f7f7;
            padding: 0px;
            margin: 0px;
          }
          table tr td {
            font-size: 14px;
          }
        </style>
      </head>
      <body>
        <table
          style="
            margin: 0px auto;
            width: 100%;
            max-width: 600px;
            padding-bottom: 50px;
            padding: 20px 25px;
            color: #333;
            background-color: #fff;
            border-radius: 5px;
            line-height: 1.8;
          "
        >
          <tr>
            <td
              style="
                text-align: center;
                border-bottom: 1px dashed #5d616d;
                padding-bottom: 10px;
              "
            >
              <h1
                style="color: #64d71f; cursor: pointer; font-weight: 600; margin: 0"
              >
                ZOHO &nbsp;<span style="color: #333">Integration</span>
              </h1>
            </td>
          </tr>
    
          <tr>
            <td style="padding-top: 50px">Hey <b> ${data?.name} </b></td>
          </tr>
          <tr>
            <td style="padding-top: 10px; text-align: justify">
              In order to verify your account you have to verify its you, use below
              button to verify the account.
            </td>
          </tr>
    
          <tr>
            <td style="text-align: center; padding-top: 20px">
              <a
                style="
                  margin-top: 10px;
                  cursor: pointer;
                  border: 1px solid #64d71f;
                  padding: 6px 24px;
                  background: #64d71f;
                  border-radius: 5px;
                  color: #fff;
                  font-size: 18px;
                  max-width: 166px;
                  text-align: center;
                  width: 100%;
                  text-decoration: none;
                "
                href=${data?.url}
                >Verify Account</a
              >
            </td>
          </tr>
          <tr>
            <td style="padding-top: 20px"> <b> Cedcommerce dev team </b></td>
          </tr>
           <tr>
            <td style="padding-top: 10px; text-align: justify">
              copyright &copy;  ${new Date().getFullYear()}-${
    new Date().getFullYear() + 1
  }, All rights reserved
            </td>
          </tr>
        </table>
      </body>
    </html>
      `;
};
export const forget = (data) => {
  return `
      <!doctype html>
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
   <head>
      <title>Confirmation Mail </title>
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <!--<![endif]-->
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <style type="text/css">
         #outlook a {
         padding: 0;
         }
         body {
         margin: 0;
         padding: 0;
         -webkit-text-size-adjust: 100%;
         -ms-text-size-adjust: 100%;
         }
         table,
         td {
         border-collapse: collapse;
         mso-table-lspace: 0pt;
         mso-table-rspace: 0pt;
         }
         img {
         border: 0;
         height: auto;
         line-height: 100%;
         outline: none;
         text-decoration: none;
         -ms-interpolation-mode: bicubic;
         }
         p {
         display: block;
         margin: 13px 0;
         }
         a {
         text-decoration: none;
         color: #076482;
         }
      </style>
      <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,500,700" rel="stylesheet" type="text/css">
      <style type="text/css">
         @import url(https://fonts.googleapis.com/css?family=Open+Sans:300,400,500,700);
      </style>
      <!--<![endif]-->
      <style type="text/css">
         @media only screen and (min-width:480px) {
         .mj-column-per-100 {
         width: 100% !important;
         max-width: 100%;
         }
         .mj-column-per-33-33333333333333 {
         width: 33.33333333333333% !important;
         max-width: 33.33333333333333%;
         }
         }
      </style>
      <style type="text/css">
         @media only screen and (max-width:480px) {
         table.mj-full-width-mobile {
         width: 100% !important;
         }
         td.mj-full-width-mobile {
         width: auto !important;
         }
         }
      </style>
   </head>
   <body style="background-color:#E7E7E7;">
      <div style="background-color:#E7E7E7;" class="">
         <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="/* background:#040B4F; *//* background-color: #0b0d37; *//* width:100%; */">
            <tbody>
               <tr>
                  <td class="">
                     <div style="margin:0px auto;max-width:600px;">
                        <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
                           <tbody>
                              <tr>
                                 <td style="">
                                    <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                                       <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                                          <tbody>
                                             <tr>
                                                <td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                                                   <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;">
                                                      <tbody>
                                                         <tr>
                                                            <td style="width:150px;">
                                                            </td>
                                                         </tr>
                                                      </tbody>
                                                   </table>
                                                </td>
                                             </tr>
                                             <tr>
                                                <td align="center" style="font-size:0px;padding:0;word-break:break-word;">
                                                   <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;">
                                                      <tbody>
                                                         <tr>
                                                            <td style="width:600px;">
                                                               <a href="https://cedcommerce.com/" target="_blank">
                                                               <img alt="" height="auto" src="https://i.imgur.com/nCgVOdk.png" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;background-color: #071042;" width="600" class="">
                                                               </a>
                                                            </td>
                                                         </tr>
                                                      </tbody>
                                                   </table>
                                                </td>
                                             </tr>
                                          </tbody>
                                       </table>
                                       <div style="background-image: url('https://i.imgur.com/qXlX2qJ.png');margin:0px auto;max-width:600px;background-size: cover;background-repeat: no-repeat;">
                                          <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
                                             <tbody>
                                                <tr>
                                                   <td>
                                                      <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                                                         <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                                                            <tbody>
                                                            </tbody>
                                                         </table>
                                                      </div>
                                                   </td>
                                                </tr>
                                             </tbody>
                                          </table>
                                       </div>
                                    </div>
                                 </td>
                              </tr>
                           </tbody>
                        </table>
                     </div>
                  </td>
               </tr>
            </tbody>
         </table>
         <div class="body-section" style="-webkit-box-shadow: 1px 4px 11px 0px rgba(0, 0, 0, 0.15); -moz-box-shadow: 1px 4px 11px 0px rgba(0, 0, 0, 0.15); box-shadow: 1px 4px 11px 0px rgba(0, 0, 0, 0.15); margin: 0px auto; max-width: 600px;">
            <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
               <tbody>
                  <tr>
                     <td style="direction:ltr;font-size:0px;padding:20px 0;padding-bottom:0;padding-top:0;text-align:center;">
                        <div style="background:f6f6f6;background-color:f6f6f6;margin:0px auto;max-width:600px;">
                           <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:f6f6f6;background-color:f6f6f6;width:100%;">
                              <tbody>
                                 <tr>
                                    <td style="direction:ltr;font-size:0px;padding:20px 0;padding-bottom:20px;padding-top:20px;text-align:center;background: #f6f6f6;" class="">
                                       <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:middle;width:100%;">
                                          <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="background-color:#f6f6f6;vertical-align:middle;" width="100%">
                                             <tbody>
                                                <tr>
                                                   <td align="left" style="font-size:0px;padding:10px 25px;padding-right:25px;padding-left:25px;word-break:break-word;" class="">
                                                      <div style="font-family:open Sans Helvetica, Arial, sans-serif;font-size: 17px;font-weight: 600;line-height:26px;text-align:left;color: #1e2281;" class="">Hello ${data?.username},</div>
                                                   </td>
                                                </tr>
                                                <tr>
                                                   <td align="left" style="font-size:0px;padding:10px 25px;padding-right:25px;padding-left:25px;word-break:break-word;" class="">
                                                      <div style="font-family:open Sans Helvetica, Arial, sans-serif;font-size: 22px;font-weight: 400;line-height: 37px;text-align:left;color: #1e2281;" class="">
                                                         Greetings from <strong>CedCommerce!!</strong><br>
                                                      </div>
                                                   </td>
                                                </tr>
                                                <tr>
                                                   <td style="" width="100%" valign="top" height="100%">
                                                      <img src="https://i.imgur.com/u0Sl2Dz.png" alt="" style="width: 100%;" class="">
                                                   </td>
                                                </tr>
                                                <tr>
                                                   <td align="left" style="font-size:0px;padding:10px 25px;padding-right:25px;padding-left:25px;word-break:break-word;" class="">
                                                      <div style="font-family: serif;font-weight: 400;line-height:26px;text-align:left;color: #000000;font-size: 16px;" class="">We’d like to confirm that your account was created successfully. <i><strong> Click the button below to proceed.</strong></i></div>
                                                   </td>
                                                </tr>
                                                <tr>
                                                   <td align="center" style="font-size:0px;/* padding: 0px 25px; */padding-right:25px;padding-left: 25px;word-break:break-word;">
                                                      <div class=""><a href="http://localhost:4000/auth/resetPassword?token=ZXlKMGVYQWlPaUpLVjFRaUxDSmhiR2NpT2lKSVV6STFOaUo5LmV5SjFjMlZ5WDJsa0lqcDdJaVJ2YVdRaU9pSTJNek0xTmpsaVpXWTFOemN4WWpka01UQXdPVEEyTmpFaWZTd2laVzFoYVd3aU9pSm9ZWE51WVdsdU1URkFlVzl3YldGcGJDNWpiMjBpTENKbGVIQWlPakUyTmpVME1ESXdOREVzSW1semN5STZJbWgwZEhCek9sd3ZYQzloY0hCekxtTmxaR052YlcxbGNtTmxMbU52YlNJc0luUnZhMlZ1WDJsa0lqb3hOalkxTXprNE5EUXhmUS5JeHg3bE92NXN0QmJvRGdKVS1NRDdsaDBnZWFkaVFxdTdEY18xbnZqeENF"></a><button onclick="hello()" style="
                                                         padding: 9px 46px;
                                                         background: #223494;
                                                         border: unset;
                                                         border-radius: 6px;
                                                         color: #FFF;
                                                         font-weight: 600;
                                                         cursor: pointer;
                                                         font-family: serif;
                                                         "><a href=${data?.url} style="color: #fff !important;">Click Here</a></button>
                                                      </div>
                                                   </td>
                                                </tr>
                                                <tr>
                                                   <td align="left" style="font-size:0px;/* padding: 0px 25px; */padding-right:25px;padding-left:25px;word-break:break-word;" class="">
                                                      <div style="font-family: serif;font-size: 15px;font-weight: 400;line-height: 24px;text-align:left;color: #322c32;margin-top: 11px;" class="">If you did not request a password reset, please ignore this email or reply to let us know. <b>This email is only valid for the next 4 Hours.</b>
                                                         <br>
                                                      </div>
                                                   </td>
                                                </tr>
                                                <tr>
                                                </tr>
                                                <tr>
                                                   <td align="left" style="font-size:0px;padding:10px 25px;padding-right:25px;padding-bottom:0;padding-left:25px;word-break:break-word;">
                                                      <div style="font-family:open Sans Helvetica, Arial, sans-serif;font-size: 15px;font-weight: 600;line-height:26px;text-align:left;color:#2c2c2c;">Best Regards,</div>
                                                   </td>
                                                </tr>
                                                <tr>
                                                   <td align="left" style="font-size:0px;padding:10px 25px;padding-top:0;padding-right:25px;padding-left:25px;word-break:break-word;">
                                                      <div style="font-family:open Sans Helvetica, Arial, sans-serif;font-size: 15px;font-weight: 600;line-height:26px;text-align:left;color:#2c2c2c;">Team CedCommerce</div>
                                                   </td>
                                                </tr>
                                             </tbody>
                                          </table>
                                       </div>
                                    </td>
                                 </tr>
                              </tbody>
                           </table>
                        </div>
                        <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="/* background:#d9e6f3; */background-color: #d9e6f3;width:100%;">
                           <tbody>
                              <tr>
                                 <td>
                                    <div style="margin:0px auto;max-width:600px;">
                                       <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
                                          <tbody>
                                             <tr>
                                                <td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;">
                                                   &gt;
                                                   <div class="mj-column-per-33-33333333333333 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                                                      <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                                                         <tbody>
                                                            <tr>
                                                               <td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                                                                  <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;">
                                                                     <tbody>
                                                                        <tr>
                                                                           <td style="width:50px;">
                                                                              <img alt="" height="auto" src="https://i.imgur.com/Ss43PIC.png" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" width="50">
                                                                           </td>
                                                                        </tr>
                                                                     </tbody>
                                                                  </table>
                                                               </td>
                                                            </tr>
                                                            <tr>
                                                               <td align="center" style="font-size:0px;padding:10px 25px;padding-bottom:30px;word-break:break-word;">
                                                                  <div style="font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;font-size: 14px;font-weight:400;text-align:center;color:#9da3a3;"><span style="font-size: 17px;color: #000000;">Ticket</span><br><br><a style="color:9da3a3;text-decoration:none;font-size:14px;display:inline-block;line-height:20px;color: #076482;" href="https://support.cedcommerce.com/open.php" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://support.cedcommerce.com/open.php&amp;source=gmail&amp;ust=1655808605294000&amp;usg=AOvVaw1dH5nkP6GTgF09i_V5VjYE">Raise your ticket get Technical Support</a></div>
                                                               </td>
                                                            </tr>
                                                         </tbody>
                                                      </table>
                                                   </div>
                                                   <div class="mj-column-per-33-33333333333333 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                                                      <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                                                         <tbody>
                                                            <tr>
                                                               <td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                                                                  <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;">
                                                                     <tbody>
                                                                        <tr>
                                                                           <td style="width:50px;">
                                                                              <img alt="" height="auto" src="https://i.imgur.com/5CpoFUl.png" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" width="50">
                                                                           </td>
                                                                        </tr>
                                                                     </tbody>
                                                                  </table>
                                                               </td>
                                                            </tr>
                                                            <tr>
                                                               <td align="center" style="font-size:0px;padding:10px 25px;padding-bottom:30px;word-break:break-word;">
                                                                  <div style="font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;font-size: 14px;font-weight:400;text-align:center;color:#9da3a3;"><span style="font-size: 17px;color: #000000;">Email Support</span><br><br><a style="color:9da3a3;text-decoration:none;font-size:14px;display:inline-block;color: #076482;" href="mailto:apps@cedcommerce.com" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://chat.whatsapp.com/KNEkdy6QE2nFKXKJOUjFRY&amp;source=gmail&amp;ust=1655808605294000&amp;usg=AOvVaw0UuI0mtO3atZDuv25o_WuK">Connect to us on Email Support</a></div>
                                                               </td>
                                                            </tr>
                                                         </tbody>
                                                      </table>
                                                   </div>
                                                </td>
                                             </tr>
                                          </tbody>
                                       </table>
                                    </div>
                                 </td>
                              </tr>
                           </tbody>
                        </table>
                     </td>
                  </tr>
               </tbody>
            </table>
         </div>
         <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
         <tbody>
            <tr>
               <td>
                  <div style="margin:0px auto;max-width:600px;">
                     <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
                        <tbody>
                           <tr>
                              <td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;">
                                 <div style="margin:0px auto;max-width:600px;">
                                    <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
                                       <tbody>
                                          <tr>
                                             <td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;">
                                                <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                                                   <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                                                      <tbody>
                                                         <tr>
                                                            <td style="vertical-align:top;padding:0;">
                                                               <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="" width="100%">
                                                                  <tbody>
                                                                     <tr>
                                                                        <td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                                                                           <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="float:none;display:inline-table;">
                                                                              <tbody>
                                                                                 <tr >
                                                                                    <td style="padding-top: 50px; text-align: center">
                                                                                       <a href="https://www.flaticon.com/free-icons/social-media" style="text-decoration: none;">
                                                                                       <img src="https://i.imgur.com/viDdyvj.png" style="max-width:30px; max-height:30px; padding-left:10px" />
                                                                                       </a>
                                                                                       <a href="https://www.flaticon.com/free-icons/social-media" style="text-decoration: none;">
                                                                                       <img src="https://i.imgur.com/2v3xayL.png" style="max-width:30px; max-height:30px; padding-left:10px"  />
                                                                                       </a>
                                                                                       <a href="https://www.flaticon.com/free-icons/social-media" style="text-decoration: none;">
                                                                                       <img src="https://i.imgur.com/QPurKQZ.png" style="max-width:30px; max-height:30px; padding-left:10px"  />
                                                                                       </a>
                                                                                       <a href="https://www.flaticon.com/free-icons/social-media" style="text-decoration: none;">
                                                                                       <img src="https://i.imgur.com/Fz3w55g.png" style="max-width:30px; max-height:30px; padding-left:10px"  />
                                                                                       </a>             
                                                                                       <a href="https://www.flaticon.com/free-icons/social-media" style="text-decoration: none;">
                                                                                       <img src="https://i.imgur.com/2iVVFNz.png" style="max-width:30px; max-height:30px; padding-left:10px"  />
                                                                                       </a> 
                                                                                       <img src="https://i.imgur.com/3B0npDM.png" style="max-width:30px; max-height:30px; padding-left:10px"  />
                                                                                       </a> 
                                                                                       <a href="https://www.flaticon.com/free-icons/social-media">
                                                                                       <img src="https://i.imgur.com/NvNncQW.png" style="max-width:30px; max-height:30px; padding-left:10px"  />
                                                                                       </a> 
                                                                                    </td>
                                                                                 </tr>
                                                                                 <tr>
                                                                                    <td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                                                                                       <div style="font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:11px;font-weight:bold;line-height:24px;text-align:center;color:#445566;">View this email in your browser</div>
                                                                                    </td>
                                                                                 </tr>
                                                                                 <tr>
                                                                                    <td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                                                                                       <div style="font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:11px;font-weight:400;line-height:16px;text-align:center;color:#445566;">You are receiving this email because you have installed an app by CedCommerce and agreed to receive emails from us regarding new features,
                                                                                          events and special offers.<br> Company Address: CedCommerce Inc 1812 N Columbia Blvd Suite C15-653026 Portland, Oregon, 97217, USA
                                                                                       </div>
                                                                                    </td>
                                                                                 </tr>
                                                                              </tbody>
                                                                           </table>
                                                                        </td>
                                                                     </tr>
                                                                  </tbody>
                                                               </table>
                                                </div>
                                                </td>
                                                </tr>
                                                </tbody>
                                                </table>
                                 </div>
                                 </td>
                                 </tr>
                                 </tbody>
                                 </table>
                  </div>
                  </td>
                  </tr>
                  </tbody>
                  </table>
      </div>
   </body>
</html>
   `;
};

export const logEmailTemp = (data) => {
  return `
      <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
    <html
      data-editor-version="2"
      class="sg-campaigns"
      xmlns="http://www.w3.org/1999/xhtml"
    >
      <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1"
        />
        <meta http-equiv="X-UA-Compatible" content="IE=Edge" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400&display=swap"
          rel="stylesheet"
        />
        <style>
          body {
            font-family: "Poppins", sans-serif;
            background-color: #f7f7f7;
            padding: 0px;
            margin: 0px;
          }
          table tr td {
            font-size: 14px;
          }
        </style>
      </head>
      <body>
        <table
          style="
            margin: 0px auto;
            width: 100%;
            max-width: 600px;
            padding-bottom: 50px;
            padding: 20px 25px;
            color: #333;
            background-color: #fff;
            border-radius: 5px;
            line-height: 1.8;
          "
        >
          <tr>
            <td
              style="
                text-align: center;
                border-bottom: 1px dashed #5d616d;
                padding-bottom: 10px;
              "
            >
              <h1
                style="color: #64d71f; cursor: pointer; font-weight: 600; margin: 0"
              >
                ZOHO &nbsp;Integration
              </h1>
            </td>
          </tr>
    
          <tr>
            <td style="padding-top: 50px">Hey <b> ${data?.name} </b></td>
          </tr>
          <tr>
            <td style="padding-top: 10px; text-align: justify">
              In order to verify your account you have to verify its you, use below
              button to verify the account.
            </td>
          </tr>
    
          <tr>
           <td style="text-align: center; padding-top: 20px">
                <span
                  style="
                  margin-top: 10px;
                  cursor: pointer;
                  border: 1px solid #64d71f;
                  padding: 6px 24px;
                  background: #64d71f;
                  border-radius: 5px;
                  color: #fff;
                  font-size: 18px;
                  max-width: 166px;
                  text-align: center;
                  width: 100%;
                  text-decoration: none;
                "
                >
                 ${data}
                </span>
              </td>
          </tr>
          <tr>
            <td style="padding-top: 20px"> <b> Cedcommerce dev team </b></td>
          </tr>
           <tr>
            <td style="padding-top: 10px; text-align: justify">
              copyright &copy;  ${new Date().getFullYear()}-${
    new Date().getFullYear() + 1
  }, All rights reserved
            </td>
          </tr>
        </table>
      </body>
    </html>
      `;
};
export const adsMailTemplate = (data) => {
  return `
      <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
    <html
      data-editor-version="2"
      class="sg-campaigns"
      xmlns="http://www.w3.org/1999/xhtml"
    >
      <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1"
        />
        <meta http-equiv="X-UA-Compatible" content="IE=Edge" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400&display=swap"
          rel="stylesheet"
        />
        <style>
          body {
            font-family: "Poppins", sans-serif;
            background-color: #f7f7f7;
            padding: 0px;
            margin: 0px;
          }
          table tr td {
            font-size: 14px;
          }
        </style>
      </head>
      <body>
        <table
          style="
            margin: 0px auto;
            width: 100%;
            max-width: 600px;
            padding-bottom: 50px;
            padding: 20px 25px;
            color: #333;
            background-color: #fff;
            border-radius: 5px;
            line-height: 1.8;
          "
        >
          <tr>
            <td
              style="
                text-align: center;
                border-bottom: 1px dashed #5d616d;
                padding-bottom: 10px;
              "
            >
              <h1
                style="color: #64d71f; cursor: pointer; font-weight: 600; margin: 0"
              >
                ZOHO &nbsp;<span style="color: #333">Integration</span>
              </h1>
            </td>
          </tr>
    
          <tr>
            <td style="padding-top: 50px">Hey <b> ${data?.name} </b></td>
          </tr>
          <tr>
            <td style="padding-top: 10px; text-align: justify">
              In order to verify your account you have to verify its you, use below
              button to verify the account.
            </td>
          </tr>
    
          <tr>
            <td style="text-align: center; padding-top: 20px">
              <a
                style="
                  margin-top: 10px;
                  cursor: pointer;
                  border: 1px solid #64d71f;
                  padding: 6px 24px;
                  background: #64d71f;
                  border-radius: 5px;
                  color: #fff;
                  font-size: 18px;
                  max-width: 166px;
                  text-align: center;
                  width: 100%;
                  text-decoration: none;
                "
                href=${data?.url}
                >Verify Account</a
              >
            </td>
          </tr>
          <tr>
            <td style="padding-top: 20px"> <b> Cedcommerce dev team </b></td>
          </tr>
           <tr>
            <td style="padding-top: 10px; text-align: justify">
              copyright &copy;  ${new Date().getFullYear()}-${
    new Date().getFullYear() + 1
  }, All rights reserved
            </td>
          </tr>
        </table>
      </body>
    </html>
      `;
};
