/**
 * @package WhatsApp Chat
 * @author CareCart
 * @link https://apps.shopify.com/partners/care-cart
 * @link https://carecart.io/
 * @version 1.0.0
 * Any unauthorized use and distribution of this and related files, is strictly forbidden.
 * In case of any inquiries, please contact here: https://carecart.io/contact-us/
 */

function scriptInjection(src, callback) {
	let script = document.createElement('script');
	script.type = "text/javascript";

	script.src = src;
	if (typeof callback == 'function') {
		script.addEventListener('load', callback);
	}

	document.getElementsByTagName('head')[0].appendChild(script);
}

scriptInjection("https://code.jquery.com/jquery-3.2.1.min.js", function () {

	/** Global Variables **/

	let time = new Date();
	let version = time.getTime();
	let currentURL = window.location.href;
	const AppURL = "https://whatsy.carecart.io/";
	const chatBoxCSS = AppURL + "/lib/widget.css?v="+ version;
	const shareCSS = AppURL + "/lib/share.css?v="+ version;
	const whatsAppDesktop = "https://web.whatsapp.com/send";
	const whatsAppMobile = "https://api.whatsapp.com/send";
	window.carecartWhatsApp = jQuery.noConflict(true);

	let agentID;
	let dialogue;
	let greetingWidgetOption;

	//custom fix 

	if(Shopify.shop == "twisted-cards.myshopify.com") {
		carecartWhatsApp("head").append(
            '<style type="text/css"> .share-widget-custom-right {z-index: 20 !important;}</style>'
            );
	}
	if(Shopify.shop == "sarahmaier.myshopify.com") {
		carecartWhatsApp("head").append(
            '<style type="text/css"> .share-widget-custom-right {z-index: 999 !important;} .share-widget-static-right {z-index: 999 !important;}</style>'
            );
	}
	if(Shopify.shop == "angaja-silver.myshopify.com") {
		carecartWhatsApp("head").append(
            '<style type="text/css"> .share-widget-custom-left{z-index: 999;left: -14px !important;}</style>'
            );
	}
	/** ends **/


	window.whatsAppChat = function (response) {
		apiResponse = response;
		let settings = apiResponse.settings;
		greetingWidgetOption = settings[0].greeting_option;

		/* Chat widget */
		if (settings[0].status == 1 && response.chatAgents.length != 0) {
			carecartWhatsApp("body").append(response.chatWidget.icon);
			carecartWhatsApp("body").append(response.chatWidget.widget);
			carecartWhatsApp('#chat-box').hide();
			if (chatWidgetAllow(settings)) {
				carecartWhatsApp('#chat-box').hide();
		                 		carecartWhatsApp('#chat-box-icon').hide();
			}

			agentID = response.chatAgents[0].country_code + response.chatAgents[0].phone_number;
			if (getPageStats() && meta.product && meta.product.id != undefined && response.proActiveStatus == 1){
				carecartWhatsApp('#chat-box').show();
				console.log("page stats event");
				window.localStorage.setItem("whatsyPageStats", "0");
			}
		}
		carecartWhatsApp("head").append(carecartWhatsApp("<link/>", {
			rel: "stylesheet",
			href: chatBoxCSS
		}));

		if (response.shareWidgetSettings[0].status == 1){
			dialogue = response.shareWidgetSettings[0].dialogue;
			carecartWhatsApp("body").append(response.shareWidget);
			carecartWhatsApp("head").append(carecartWhatsApp("<link/>", {
				rel: "stylesheet",
				href: shareCSS
			}));
			if (chatWidgetAllow(response.shareWidgetSettings)) {
				carecartWhatsApp('#share-widget').hide();
			}
		}
	};

	carecartWhatsApp.ajax({
		type: "GET",
		url: AppURL + "FrontendHandler/getStoreInfo",
		dataType: "jsonp",
		jsonpCallback: "whatsAppChat",
		crossDomain: true,
		data: {
			"domain_url": Shopify.shop,
			"product_id": (meta.product && meta.product.id) ? meta.product.id : ''
		},
		beforeSend: function () {
		},
		success: function () {
		},
		error: function (jqXHR, textStatus, errorThrown) {
			console.log(jqXHR);
			console.log("status: " + textStatus);
			console.log("err: " + errorThrown);
		},
		complete: function () {
		}
	});

	carecartWhatsApp("body").on("click", "#chat-box-icon", function () {
		if (greetingWidgetOption == 1) { carecartWhatsApp("#chat-box").toggle();}
		else {let shareUrl = whatsAppDesktop + "?phone=" + agentID;
			if (mobileCheck()) shareUrl = whatsAppMobile + "?phone=" + agentID;
			window.open(shareUrl, "_blank");}
	});

	/** Widgets Click Events **/
	carecartWhatsApp("body").on("click", "#send-btn", function () {
		let text = carecartWhatsApp("#rawa-response-message").val();
		let shareUrl = whatsAppDesktop + "?text=" + text + '&phone=' + agentID;
		if (mobileCheck()) shareUrl = whatsAppMobile + "?text=" + text + '&phone=' + agentID;
		window.open(shareUrl, "_blank");
	});

	carecartWhatsApp("body").on("click", "#share-widget", function () {
		let shareUrl = whatsAppDesktop + "?text=" + dialogue + "%0A" + currentURL;
		if (mobileCheck()) shareUrl = whatsAppMobile + "?text=" + dialogue + "%0A" + currentURL;
		window.open(shareUrl, "_blank");
	});

	carecartWhatsApp("body").on("click", ".close", function () {
		carecartWhatsApp("#chat-box").hide();
	});

	/** Ends **/

	function getPageStats() {
		let pageStats = window.localStorage.getItem("whatsyPageStats");
		console.log("page stats are =>> " + pageStats);
		if (pageStats == null) {
			window.localStorage.setItem("whatsyPageStats", "1");
		} else {
			if (parseInt(pageStats) == 1) {
				window.localStorage.setItem("whatsyPageStats", "2");
			} else if (parseInt(pageStats) == 2){
				return true;
			}
		}
	}
	//checks functions
	function checkHomePage() {
		let status = (window.location.pathname == "/");
		return status;
	}
	function checkCollections() {
		let status = !(!window.location.pathname.match("(.*)/collections/(.*)") && !window.location.pathname.match("(.*)/collections") || window.location.pathname.match("(.*)/products/(.*)") || window.location.pathname.match("(.*)/products"));
		return status;
	}
	function checkProduct() {
		let status = !!window.location.pathname.match("(.*)/products/(.*)");
		return status;
	}
	function checkCart() {
		let status = !(!window.location.pathname.match("(.*)/cart/(.*)") && !window.location.pathname.match("(.*)/cart"));
		return status;
	}
	function checkBlogPage() {
		let status = !(!window.location.pathname.match("(.*)/blogs/(.*)") && !window.location.pathname.match("(.*)/blogs"));
		return status;
	}
	function checkThanksYou() {
		let status = !(!window.location.pathname.match("(.*)/orders/(.*)") && !window.location.pathname.match("(.*)/orders") || window.location.pathname.match("(.*)/checkouts/(.*)") || window.location.pathname.match("(.*)/thank_you"));
		return status;
	}
	function mobileCheck() {
		let e, t = !1;
		return e = navigator.userAgent || navigator.vendor || window.opera, (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0, 4))) && (t = !0), t
	}

	function chatWidgetAllow(settings) {
		if (settings[0].home_page == 0 && checkHomePage()) {
			return true;
		}
		if (settings[0].collection == 0 && checkCollections()) {
			return true;
		}
		if (settings[0].product == 0 && checkProduct()) {
			return true;
		}
		if (settings[0].cart == 0 && checkCart()) {
			return true;
		}
		if (settings[0].blog_post == 0 && checkBlogPage()) {
			return true;
		}
		if (settings[0].thank_you == 0 && checkThanksYou()) {
			return true;
		}
	}
	/**
	 * Custom fixes starts from here
	 */
	if (Shopify.shop == "iamfenrir.myshopify.com") {
		carecartWhatsApp("body").append("<style type='text/css'>.wa-custom-chat-btn div:empty{display:block !important;}</style>");
	}
});
