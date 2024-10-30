=== Chare === 
  
Contributors: cgartist4,izharadavpro 
  
Tags: Chare, Communication, Chat, Team Chat, Task,Poll 
  
Requires at least: 4.7 
  
Tested up to: 4.7 
  
Stable tag: 1.6.3  
License: GPLv2 or later 
  
License URI: https://www.gnu.org/licenses/gpl-2.0.html 
  
  
  
Now you can send all your notifications to your group member mobile devices and also list them on your WordPress blog. So avoid posting same message everywhere while we can do it for you. 
  
This plugin will help your WordPress site to be connected with your Chare channel. 
  
It will display all Text messages from your channel to your website. 
  
  
  
== Description == 
  
Now you can send all your notifications to your group member mobile devices and also list them on your WordPress blog. So avoid posting same message everywhere while we can do it for you. 
  
This plugin will help your WordPress site to be connected with your Chare channel. 
  
It will display all Text messages from your channel to your website. 
  
  
  
== More Info == 
  
See term of use at http://www.chare.one/terms-and-conditions 
  
  
  
== Screenshots == 
  
  
  
1. **Main View** - It will be the view of messages on your WordPress website. These are your Chare Channels messages from we.chare.one 
  
2. **Message View** - Message view is responsive and can be adjusted with browser size. 
  
3. **Pop up View** - When user click on any massage it will open it in popup. In detail view user will see complete description and other message details. 
  
4. **Pop up View 2** - Pop up will show message details and will adjust image coordinates respectively. 
  
5. **Admin View** - Admin Panel view of WordPress plugin will take channelId and channel secret to display messages. 
  
6. **Channel Info** - Get the channel Info after providing URL of your WordPress website from web.chare.one ->Channel-> Setting -> Char Connect. 
  

== Changelog ==

= 1.6.2 =
* Conflict with Woocommerce Plugin is resolved. Issue was that if you have chare plugin you can not see woocomerce settings page. 

= 1.6.3 =
* Added Short Code in Admin Panel. Now you can copy [charewidget] and paste it in your page where you want to display plugin.
* Also convert whole Plugin Structure to OOP based Architecture. 

  
  
== Installation == 
  
= From your WordPress dashboard = 
  
  
  
1. Visit \'Plugins > Add New\' 
  
2. Search for \'Chare\' 
  
3. Activate Chare from your Plugins page. 
  
4. Now go the page where you want to display Chare widget and add in text [charewidget] 
  
  
  
= From WordPress.org = 
  
  
  
1. Download Chare. 
  
2. Upload the \'Chare\' directory to your \'/wp-content/plugins/\' directory, using your favorite method (ftp, sftp, scp, etc...) 
  
3. Activate Chare from your Plugins page. 
  
4. Now go the page where you want to display chare widget and add in text [charewidget] 
  
  
  
= Configuration = 
  
  
  
1. Visit \'Chare Plugin Page and add channel Id and Channel Secret.  
  
2. You can get the channel Id and Channel Secret from web.chare.one-> Channel Info->Configurations->CHARE CONNECT 
  
3. Provide valid Url of your WordPress website and press Generate Secret Code. Copy the Channel Id and Channel Secret from this page to your Chare WordPress plugin. 
  
4. Data will be displayed for that channels. You can create new channels for staging or local testing.  
  
  
  
  
  
  
  
  
  
== Frequently Asked Questions == 
  
= Where to get Channel Id and Channel Secret? = 
  
  
  
Channel Id and Channel secret can be obtained from web.chare.one. After Login Create the channel or select the already created channel. 
  
On Channel Info select settings (left top three dots) and select CHARE CONNECT. 
  
In popup, provide the URL of your WordPress website.(Your requests will be verified against this URL.) 
  
  
  
= Can we use this on  staging website for testing = 
  
You can create a new channel for staging website and add its URL.. 
  
You can only use it at one site for which you provided the URL. You have to update the URL if you want to use this on any other website. But it will stop working for already provided URL. 