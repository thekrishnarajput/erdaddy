var url = 'https://wati-integration-service.clare.ai/ShopifyWidget/shopifyWidget.js?51476';
var s = document.createElement('script');
s.type = 'text/javascript';
s.async = true;
s.src = url;
var options = {
    "enabled": true,
    "chatButtonSetting": {
        "backgroundColor": "#4dc247",
        "ctaText": "",
        "borderRadius": "25",
        "marginLeft": "0",
        "marginBottom": "90",
        "marginRight": "32",
        "position": "right"
    },
    "brandSetting": {
        "brandName": "Engineer Daddy!",
        "brandSubTitle": "One stop for all your technical needs!",
        "brandImg": "https://thekrishnarajput.github.io/erdaddy.com/assets/img/logo.png",
        "welcomeText": "Hi there!\nI am Erdy! How can I help you?",
        "messageText": "Hello, I have a question about Engineer Daddy's services.",
        "backgroundColor": "#6bae9a",
        "ctaText": "Start Chat",
        "borderRadius": "25",
        "autoShow": false,
        "phoneNumber": "918818898868"
    }
};
s.onload = function () {
    CreateWhatsappChatWidget(options);
};
var x = document.getElementsByTagName('script')[0];
x.parentNode.insertBefore(s, x);