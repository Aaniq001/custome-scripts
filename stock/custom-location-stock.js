/**
 * @package Sales Pop up â€‘ Social Proof
 * @author CareCart
 * @link https://apps.shopify.com/partners/care-cart
 * @link https://carecart.io/
 * @version 1.1.7
 *
 * Any unauthorized use and distribution of this and related files, is strictly forbidden.
 * In case of any inquiries, please contact here: https://carecart.io/contact-us/
 */

//Create the element using the createElement method.
var myDiv = document.createElement("jis");

//Set its class.
myDiv.className = 'doubleCheckS';

//Finally, append the element to the HTML body
document.body.appendChild(myDiv);

var doubleCheck = document.getElementsByClassName("doubleCheckS");
var ndoubleCheck = doubleCheck.length;

console.log(ndoubleCheck);

if(ndoubleCheck == 2)
{
    //window.stop();
    throw new Error("DOUBLE APP JS COUNTDOWN PRO");
}

 function scriptInjection(src, callback) {
    var script = document.createElement('script');
    script.type = "text/javascript";

    script.src = src;
    if (typeof callback == 'function') {
        script.addEventListener('load', callback);
    }

    document.getElementsByTagName('head')[0].appendChild(script);
}

scriptInjection("https://code.jquery.com/jquery-3.2.1.min.js", function () {
    window.$jq321 = jQuery.noConflict(true);

    var version = "1.1.8";

    var salespoplib_active_url = window.location.hostname;
    salespoplib_active_url += (window.location.pathname.substr(-1) !== "/") ? window.location.pathname : window.location.pathname.substr(0, window.location.pathname.length - 1);

    function getServerUrls() {

        // Finding the URL of this library among all the script tags
        var allScripts = document.getElementsByTagName('script');
        allScripts = Array.prototype.slice.call(allScripts);

        var thisLibUrl = "";
        allScripts.forEach(function (script) {
            if (script.src && script.src.indexOf('lib/custom-location-stock.js') !== -1) {
                thisLibUrl = "";console.log("hella");
            }
        });

        // return with production URLs
        if (thisLibUrl === "") {
            return {
                "backend": "https://app-countdown-pro.carecart.io/FrontController/",
                "cssStock": "https://app-countdown-pro.carecart.io/lib/stock-box.css",
                "cssTimer": "https://app-countdown-pro.carecart.io/lib/timer-box.css",
                "cssCartTimer": "https://app-countdown-pro.carecart.io/lib/cart-countdown.css"
            };
        }

        var tempAnchorTag = document.createElement('a');
        tempAnchorTag.href = thisLibUrl;

        var backend = "https://" + tempAnchorTag.hostname + "/FrontController/";
        if ("sales-pop.carecart.io" === tempAnchorTag.hostname) {
            backend = "https://tracking-" + tempAnchorTag.hostname + "/FrontController/";
        }

        return {
            "backend": backend,
            "cssStock": "https://" + tempAnchorTag.hostname + "/lib/stock-box.css?v" + version,
            "cssTimer": "https://" + tempAnchorTag.hostname + "/lib/timer-box.css?v" + version,
            "cssCartTimer": "https://" + tempAnchorTag.hostname + "/lib/cart-countdown.css?v" + version
        };
    }

    var serverUrl = getServerUrls();
    var app_url ="https://app-countdown-pro.carecart.io/"

    // @todo cleanup unused extra properties
    var salespoplib_vars_obj = {
        checkDevice: '',
        backend_url: serverUrl.backend
    };

        // Check For desktop/Mobile
    (function (a) {
        ($jq321.browser = $jq321.browser || {}).mobile = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))
    })(navigator.userAgent || navigator.vendor || window.opera);

     /* Check if Mobile */
    if ($jq321.browser.mobile) {
        salespoplib_vars_obj.checkDevice = 'mobile';
    } else {
        salespoplib_vars_obj.checkDevice = 'desktop';
    }

    window.checkmodule_countdown = function (response) {
        console.log("Response received");

        if (Shopify.shop == "mysns.myshopify.com")
        {
            if (window.location.href != 'https://strongnation.in/collections/best-sellers/products/tiger-fury-pre-workout')
            {
                console.log('countdown pro block on other pages');
                return false;
            }
        }

        apiResponse = response;

       // STOCK COUNTDOWN CALL
        if (apiResponse && apiResponse.stock && apiResponse.stock!==null)
        {
            $jq321("head").append($jq321("<link/>", {rel: "stylesheet", href: serverUrl.cssStock + "?v" + version}));

            if (Shopify.shop == "sensible-success.myshopify.com")
            {
                setTimeout(function(){ stockCountdown(apiResponse.stock); }, 4000);
            }
            else
            {
                stockCountdown(apiResponse.stock);   
            }
        }

        // Time COUNTDOWN CALL
        if (apiResponse && apiResponse.timer && apiResponse.timer!==null)
        {

            setTimeout(function(){ 

                $jq321("head").append($jq321("<link/>", {
                    rel: "stylesheet",
                    href: serverUrl.cssTimer + "?v" + version
                }));

            }, 2000);


            setTimeout(function(){

                timeCountdown(apiResponse.timer);

            }, 4000);
        }

        // Cart Countdown timer
        if (apiResponse && apiResponse.cartTimer && apiResponse.cartTimer !== null)
        {
            $jq321("head").append($jq321("<link/>", { rel: "stylesheet", href: serverUrl.cssCartTimer + "?v" + version }));
            cartCountdownTimer(apiResponse.cartTimer);
        }
    };

    if (Shopify.shop == "nefertum-scent.myshopify.com") 
    {
        var meta = {"product":{"id":__st.rid}};
    }
    else if (Shopify.shop == "fabricatextiles.myshopify.com") 
    {
        var meta = {"product":{"id":__st.rid}};
    } 
    else if (Shopify.shop == "rossocoffee.myshopify.com") 
    {
        var meta = {"product":{"id":__st.rid}};
    }
    else if (Shopify.shop == "happy-nocnoc.myshopify.com") 
    {
        var meta = {"product":{"id":__st.rid}};
    }
    else if (Shopify.shop == "smartcooks-de.myshopify.com") 
    {
        var meta = {"product":{"id":__st.rid}};
    }
    else if (Shopify.shop == "jembaly.myshopify.com") {
        var meta = {"product":{"id":__st.rid}};
    }
    else if (Shopify.shop == "asia-tea-company-store.myshopify.com") {
        var meta = {"product":{"id":__st.rid}};
    }
    else if (Shopify.shop == "confozen-fr.myshopify.com") {
        var meta = {"product":{"id":__st.rid}};
    }
    else if (Shopify.shop == "lloyds-liquid-sunshines.myshopify.com") {
        var meta = {"product":{"id":__st.rid}};
    }
    else if (Shopify.shop == "waterlily-products.myshopify.com") {
        var meta = {"product":{"id":__st.rid}};
    }
    else if (Shopify.shop == "cengiz-akturk-shop.myshopify.com") {
        var meta = {"product":{"id":__st.rid}};
    }
    else if (Shopify.shop == "idealzoneofficiel.myshopify.com") {
        var meta = {"product":{"id":__st.rid}};
    }
    else if (Shopify.shop == "yipth.myshopify.com") {
        var meta = {"product":{"id":__st.rid}};
    }
    else if (Shopify.shop == "athenawear-f7b8.myshopify.com") {
        var meta = {"product":{"id":__st.rid}};
    }
    else if (Shopify.shop == "aspiresportsfiji.myshopify.com") {
        var meta = {"product":{"id":__st.rid}};
    }
    else if (Shopify.shop == "the-beardstory.myshopify.com") {
        var meta = {"product":{"id":__st.rid}};
    }
    else if (Shopify.shop == "medici-supply-co.myshopify.com") {
        var meta = {"product":{"id":__st.rid}};
    }
    else if (Shopify.shop == "smartbusiness-pe.myshopify.com") {
        var meta = {"product":{"id":__st.rid}};
    }
    else if (Shopify.shop == "thuyn.myshopify.com") {
        var meta = {"product":{"id":__st.rid}};
    }
    else if (Shopify.shop == "fligflag.myshopify.com") {
        var meta = {"product":{"id":__st.rid}};
    }
    else if (Shopify.shop == "eminenter.myshopify.com") {
        var meta = {"product":{"id":__st.rid}};
    }
    else if (Shopify.shop == "trap-shoppp.myshopify.com") {
        var meta = {"product":{"id":__st.rid}};
    }
    else if (Shopify.shop == "redpointgadgets-com.myshopify.com") {
        var meta = {"product":{"id":__st.rid}};
    }
    else if (Shopify.shop == "itrendy-2.myshopify.com") {
        var meta = {"product":{"id":__st.rid}};
    }
    else if (Shopify.shop == "eneamaze.myshopify.com") {
        var meta = {"product":{"id":__st.rid}};
    }
    else if (Shopify.shop == "sensible-success.myshopify.com") {
        var meta = {"product":{"id":__st.rid}};
    }
    else if (Shopify.shop == "2c690a.myshopify.com") {
        var meta = {"product":{"id":__st.rid}};
    }
    else if (Shopify.shop == "nac89.myshopify.com") {
        var meta = {"product":{"id":__st.rid}};
    }
    else if (Shopify.shop == "canvasart-dev.myshopify.com") {
        var meta = {"product":{"id":__st.rid}};
    }
    else if (Shopify.shop == "polyrt.myshopify.com") {
        var meta = {"product":{"id":__st.rid}};
    }
    else if (Shopify.shop == "jaxoli.myshopify.com") {
        var meta = {"product":{"id":__st.rid}};
    }
    else if (Shopify.shop == "mysns.myshopify.com") {
        var meta = {"product":{"id":__st.rid}};
    }
    else if (Shopify.shop == "trademark-art.myshopify.com") {
        var meta = {"product":{"id":__st.rid}};
    }
    else if (Shopify.shop == "fusskleidung.myshopify.com") {
        var meta = {"product":{"id":__st.rid}};
    }
    else if (Shopify.shop == "imani-jewelery.myshopify.com") {
        var meta = {"product":{"id":__st.rid}};
    }
    else if (Shopify.shop == "ace-kouture.myshopify.com") {
        var meta = {"product":{"id":__st.rid}};
    }
    else if (Shopify.shop == "tirtirus.myshopify.com") {
        var meta = {"product":{"id":__st.rid}};
    }
    else if (Shopify.shop == "www-kavipoetryart-in.myshopify.com") {
        var meta = {"product":{"id":__st.rid}};
    }
    else if (Shopify.shop == "bearsmuscle.myshopify.com") {
        var meta = {"product":{"id":__st.rid}};
    }
    else if (Shopify.shop == "colcham-uk.myshopify.com") {
        var meta = {"product":{"id":__st.rid}};
    }
    else if (Shopify.shop == "yourpetsclosetco.myshopify.com") {
        var meta = {"product":{"id":__st.rid}};
    }
    else if (Shopify.shop == "doit4brazil.myshopify.com") {
        var meta = {"product":{"id":__st.rid}};
    }
    else if (Shopify.shop == "e40253.myshopify.com") {
        var meta = {"product":{"id":__st.rid}};
    }
    else if (Shopify.shop == "jprindia.myshopify.com") {
        var meta = {"product":{"id":__st.rid}};
    }
    else if (Shopify.shop == "workoutlabs.myshopify.com") {
        var meta = {"product":{"id":__st.rid}};
    }
    else if (Shopify.shop == "meatmore.myshopify.com") {
        var meta = {"product":{"id":__st.rid}};
    }
    else if (Shopify.shop == "egyp-shops.myshopify.com") {
        var meta = {"product":{"id":__st.rid}};
    }
    else if (Shopify.shop == "fratemateclub.myshopify.com") {
        var meta = {"product":{"id":__st.rid}};
    }
    else if (Shopify.shop == "motiivart.myshopify.com") {
        var meta = {"product":{"id":__st.rid}};
    }
    else if (Shopify.shop == "safe-cam-shop.myshopify.com") {
        var meta = {"product":{"id":__st.rid}};
    }
    else if (Shopify.shop == "scholl-shoes-markets.myshopify.com") {
        var meta = {"product":{"id":__st.rid}};
    }
    else if (Shopify.shop == "anatomylifeshop.myshopify.com") {
        var meta = {"product":{"id":__st.rid}};
    }
    else if (Shopify.shop == "duasdesignloja.myshopify.com") {
        var meta = {"product":{"id":__st.rid}};
    }
    else if (Shopify.shop == "tula-baba-pty-ltd.myshopify.com") {
        var meta = {"product":{"id":__st.rid}};
    }
    else if (Shopify.shop == "kate-hewko.myshopify.com") {
        var meta = {"product":{"id":__st.rid}};
    }
    else if (Shopify.shop == "aesthelry.myshopify.com") {
        var meta = {"product":{"id":__st.rid}};
    }
    else if (Shopify.shop == "techstacy-7045.myshopify.com") {
        var meta = {"product":{"id":__st.rid}};
    }
    else if (Shopify.shop == "geschenkplaza.myshopify.com") {
        var meta = {"product":{"id":__st.rid}};
    }
    else if (Shopify.shop == "pawpals-1.myshopify.com") {
        var meta = {"product":{"id":__st.rid}};
    }
    else if (Shopify.shop == "next-level-paramount-deals.myshopify.com") {
        var meta = {"product":{"id":__st.rid}};
    }
    else if (Shopify.shop == "green4life-8417.myshopify.com") {
        var meta = {"product":{"id":__st.rid}};
    }
    else if (Shopify.shop == "ideal-zone.myshopify.com") {
        var meta = {"product":{"id":__st.rid}};
    }
    else if (Shopify.shop == "sometimes-co.myshopify.com") {
        var meta = {"product":{"id":__st.rid}};
    }
    else if (Shopify.shop == "purebaebe.myshopify.com") {
        var meta = {"product":{"id":__st.rid}};
    }
    else if (Shopify.shop == "61057c.myshopify.com") {
        var meta = {"product":{"id":__st.rid}};
    }
    else if (Shopify.shop == "sembootss.myshopify.com") {
        var meta = {"product":{"id":__st.rid}};
    }
    else if (Shopify.shop == "ainasana.myshopify.com") {
        var meta = {"product":{"id":__st.rid}};
    }

    /**
     * check the status of cart page
     */
    let currentPage = !(!window.location.pathname.match("(.*)/cart/(.*)") && !window.location.pathname.match("(.*)/cart"));
    

    /**
      * Check if browser or desktop
    */
    (function (a) {
         ($jq321.browser = $jq321.browser || {}).mobile = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))
    })(navigator.userAgent || navigator.vendor || window.opera);
    let deviceName = ($jq321.browser.mobile) ? "mobile" : "desktop";


    $jq321.ajax({
        type: "GET",
        url: salespoplib_vars_obj.backend_url + 'checkStore/',
        dataType: "jsonp",
        jsonpCallback: "checkmodule_countdown",
        crossDomain: true,
        data: {
            "domain_url": Shopify.shop,
            "product_id": (meta.product && meta.product.id) ? meta.product.id:'',
             "pageStatus": currentPage,
            "device": ($jq321.browser.mobile) ? "mobile" : "desktop"
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
    
    let customSelector = '';
    let finalSelector = '';
    let masterSelector = '';
    if(Shopify.shop == "grandcruvinhos-teste.myshopify.com"){
        customSelector = $jq321(".new-buy");
        finalSelector = customSelector[6];
    }
    if(Shopify.shop == "updateshop24.myshopify.com"){
        $jq321(".add-to-cart-loader").remove();
    }
    if(Shopify.shop == "opar-off-road.myshopify.com"){
        $jq321("head").append('<style type="text/css">.stock-message{font-size:14px !important}</style>');
    }
    if(Shopify.shop == "sweatbuffy.myshopify.com"){
        customSelector = $jq321(".addCart");
        finalSelector = customSelector[0];
    }
    if(Shopify.shop == "wynd-technologies-inc.myshopify.com"){
        customSelector = $jq321(".form__column");
        finalSelector = customSelector[1];
    }
    if(Shopify.shop == "sheopal-s.myshopify.com"){
        customSelector = $jq321(".paymentButtonsWrapper");
        finalSelector = customSelector[0];
    }
    if(Shopify.shop == "rowse-beauty.myshopify.com"){
        customSelector = $jq321(".btn-mar-top");
        finalSelector = customSelector[0];

        $jq321("head").append('<style type="text/css">.timer-store-front{margin-top: 14px; !important}</style>');
    }
    if (Shopify.shop == "facciobusiness222.myshopify.com") {
        customSelector = $jq321(".purchase-details");
        finalSelector = customSelector[0];
    }    
    if (Shopify.shop == "the-bella-cottage-inc.myshopify.com") 
    {
        var t = 0;
        $jq321("form[action='/cart/add']").find('.quantity-submit-row__submit').each(function () {
            $(this).attr("data-id-"+t, "1");
            t++;
        });

        customSelector = $jq321("[data-id-1=1]");
        finalSelector = customSelector[0];

        $jq321("head").append('<style type="text/css">div.stock-top { display: block !important; }</style>');
    }    
    if (Shopify.shop == "internet-retail-connection.myshopify.com") {
        customSelector = $jq321(".add-to-cart-wrapper");
        finalSelector = customSelector[0];
    }    
    if (Shopify.shop == "mamano-chocolate.myshopify.com") {
        customSelector = $jq321(".js-qty");
        finalSelector = customSelector[0];
    }
    if (Shopify.shop == "fabricatextiles.myshopify.com") {
        customSelector = $jq321(".add-to-cart");
        finalSelector = customSelector[0];
    }
    if (Shopify.shop == "rossocoffee.myshopify.com") {
        customSelector = $jq321(".product__cart-actions-holder");
        finalSelector = customSelector[0];
    }
    if (Shopify.shop == "happy-nocnoc.myshopify.com") {
        customSelector = $jq321(".product-block--price");
        finalSelector = customSelector[0];
    }
    if (Shopify.shop == "smartcooks-de.myshopify.com") {
        customSelector = $jq321(".sc-ehIJor.bCFyQS.pf-19_");
        finalSelector = customSelector[0];
        if(customSelector.length <= 0){
            customSelector = $jq321(".sc-ehIJor.bCFyQS.pf-18_");
            finalSelector = customSelector[0];
        }
        if(customSelector.length <= 0) {
            customSelector = $jq321(".price__sale");
            finalSelector = customSelector[0];
        }
    } 
    if (Shopify.shop == "asia-tea-company-store.myshopify.com") {
        customSelector = $jq321(".ProductForm__BuyButtons");
        finalSelector = customSelector[0];
    }
    if(Shopify.shop == "confozen-fr.myshopify.com"){
        $jq321("head").append('<style type="text/css">.stock-top{margin-top: 18px; !important}</style>');
    }
    if (Shopify.shop == "lloyds-liquid-sunshines.myshopify.com") {
        customSelector = $jq321(".paymentButtonsWrapper");
        finalSelector = customSelector[0];
    }
    if (Shopify.shop == "waterlily-products.myshopify.com") {
        customSelector = $jq321(".product-single__add-to-cart");
        finalSelector = customSelector[0];
    }
    if (Shopify.shop == "confozen-fr.myshopify.com") {
        customSelector = $jq321(".groups-btn");
        finalSelector = customSelector[0];
    }
    if (Shopify.shop == "cengiz-akturk-shop.myshopify.com")
    {
        masterSelector = $jq321(".sharing");
        finalSelector = masterSelector[0];
    }
    if (Shopify.shop == "idealzoneofficiel.myshopify.com")
    {
        masterSelector = $jq321(".product-single__add-to-cart");
        finalSelector = masterSelector[0];
    }
    if (Shopify.shop == "yipth.myshopify.com")
    {
        masterSelector = $jq321("h6");
        finalSelector = masterSelector[0];

        $jq321("head").append('<style type="text/css">'+
                              '.stock-top{margin-top: 18px; !important}'+
                              '@media screen and (max-width: 575px) { .product-form-inline-atc > .product-form-inline-atc-button + .shopify-payment-button {margin-bottom: 25px;}}'+
                              '</style>');
    }
    if (Shopify.shop == "athenawear-f7b8.myshopify.com")
    {
        masterSelector = $jq321(".pf-47_");
        finalSelector = masterSelector[0];
    }
    if (Shopify.shop == "aspiresportsfiji.myshopify.com")
    {
        console.log('Device');
        console.log(salespoplib_vars_obj.checkDevice);


        if (salespoplib_vars_obj.checkDevice == 'desktop')
        {
           $jq321("head").append('<style type="text/css">'+
                              '#time-custom-center{display: flex; flex-direction:column; width:28%;}'+
                              '.product-info-main .form-group{display:flex !important;}'+
                              '#button-cart{height:49px;}'+
                              '</style>');

            $jq321(".wishlist-btn").remove();

            var customdiv = '<div id="time-custom-center">'+
                            '<button class="btn-wishlist button wishlist-btn" data-product-handle="tonga-vest" type="button" data-toggle="tooltip" title="" data-original-title="Add to Wish List">'+
                            '<span>Add to Wish List</span>'+
                            '</button>'+
                            '</div>';

            $jq321(customdiv).insertAfter("#button-cart");  
        }
        else if (salespoplib_vars_obj.checkDevice == 'mobile')
        {
            masterSelector = $jq321(".form-group");
            finalSelector = masterSelector[1];

            console.log(masterSelector);
        }
    }
    if (Shopify.shop == "the-beardstory.myshopify.com")
    {
        masterSelector = $jq321(".offerssection");
        finalSelector = masterSelector[0];
    }
    if (Shopify.shop == "medici-supply-co.myshopify.com")
    {
        masterSelector = $jq321(".add-to-cart");
        finalSelector = masterSelector[0];
    }
    if (Shopify.shop == "smartbusiness-pe.myshopify.com")
    {
        masterSelector = $jq321(".qty-add-cart");
        finalSelector = masterSelector[0];
    }
    if (Shopify.shop == "thuyn.myshopify.com")
    {
        masterSelector = $jq321(".proReviews");
        finalSelector = masterSelector[0];

        console.log(finalSelector);
    }
    if (Shopify.shop == "fligflag.myshopify.com")
    {
        masterSelector = $jq321(".ProductForm__AddToCart");
        finalSelector = masterSelector[0];

        console.log(finalSelector);
    }
    if (Shopify.shop == "trap-shoppp.myshopify.com")
    {
        $jq321("head").append('<style type="text/css">'+
                              '.cart-countdown-desktop-top-center {display: flex !important;}'+
                              '</style>');
    }
    if (Shopify.shop == "redpointgadgets-com.myshopify.com")
    {
        masterSelector = $jq321(".sales-points");
        finalSelector = masterSelector[1];

        console.log(finalSelector);
    }
    if (Shopify.shop == "itrendy-2.myshopify.com")
    {
        $jq321("head").append('<style type="text/css">'+
                              '.cart-countdown-desktop-top-center {text-align: center !important;}'+
                              '</style>');
    }
    if (Shopify.shop == "eneamaze.myshopify.com")
    {
        masterSelector = $jq321(".product-form__buttons");
        finalSelector = masterSelector[0];

        console.log(finalSelector);
    }
    if (Shopify.shop == "sensible-success.myshopify.com")
    {
        setTimeout(function()
        {  
            masterSelector = $jq321(".visitor-counter-content-box-carecartbysalespop-2020");
            finalSelector = masterSelector[0];

            console.log(finalSelector);
        }, 3000);
    }
    if (Shopify.shop == "nac89.myshopify.com")
    {
        $jq321("head").append('<style type="text/css">'+
                              '.stock-message-font-weight-inherit {font-weight: lighter !important;}'+
                              '</style>');
    }
    if (Shopify.shop == "canvasart-dev.myshopify.com")
    {
        $jq321("head").append('<style type="text/css">'+
                              '.stock-top {margin-top: 14px !important;}'+
                              '</style>');

        masterSelector = $jq321("strong");
        finalSelector = masterSelector[0];

        console.log(finalSelector);
    }
    if (Shopify.shop == "polyrt.myshopify.com")
    {
        $jq321("head").append('<style type="text/css">'+
                              '.cart-countdown-desktop-top-center {width: 100%;}'+
                              '</style>');

        masterSelector = $jq321(".product__policies");
        finalSelector = masterSelector[0];

        console.log(masterSelector);
    }
    if (Shopify.shop == "jaxoli.myshopify.com")
    {
        masterSelector = $jq321(".product__tax");
        finalSelector = masterSelector[0];

        console.log(finalSelector);
    }
    if (Shopify.shop == "mysns.myshopify.com")
    {
        masterSelector = $jq321(".product-single__vendor");
        finalSelector = masterSelector[0];

        console.log(finalSelector);
    }
    if (Shopify.shop == "tirtirus.myshopify.com")
    {
        masterSelector = $jq321("#add-to-cart-form");
        finalSelector = masterSelector[0];

        console.log(finalSelector);
    }
    if (Shopify.shop == "bearsmuscle.myshopify.com")
    {
        masterSelector = $jq321(".gt_button--add-cart");
        finalSelector = masterSelector[0];

        console.log(finalSelector);
    }
    if (Shopify.shop == "colcham-uk.myshopify.com")
    {
        $jq321("head").append('<style type="text/css">'+
                              '.cart-countdown-desktop-top-center { display: flex !important; }'+
                              '</style>');
    }
    if (Shopify.shop == "doit4brazil.myshopify.com")
    {
        masterSelector = $jq321(".product-form__buttons");
        finalSelector = masterSelector[0];

        console.log(finalSelector);
    }
    if (Shopify.shop == "e40253.myshopify.com")
    {
        $jq321("head").append('<style type="text/css">'+
                              '.product-details-des .price-box {display: flex; align-items: center;}'+
                              '</style>');
        masterSelector = $jq321("del");
        finalSelector = masterSelector[0];

        console.log(finalSelector);
    }
    if (Shopify.shop == "jprindia.myshopify.com")
    {
        $jq321("head").append('<style type="text/css">'+
                              '.btn--status[data-button-status=select][data-button-select-disable]{margin-bottom:10px;}'+
                              '</style>');
    }
    if (Shopify.shop == "workoutlabs.myshopify.com")
    {
        masterSelector = $jq321("#AddToCart");
        finalSelector = masterSelector[0];

        console.log(finalSelector);
    }
    if (Shopify.shop == "meatmore.myshopify.com")
    {
        masterSelector = $jq321(".variations_button");
        finalSelector = masterSelector[0];

        console.log(masterSelector);
    }
    if (Shopify.shop == "egyp-shops.myshopify.com")
    {
        $jq321("head").append('<style type="text/css">'+
                              '.cart-countdown-desktop-top-center { display: flex !important;}'+
                              '</style>');
    }
    if (Shopify.shop == "fratemateclub.myshopify.com")
    {
        masterSelector = $jq321("#new-form-atc");
        finalSelector = masterSelector[0];

        console.log(masterSelector);
    }
    if (Shopify.shop == "motiivart.myshopify.com")
    {
        masterSelector = $jq321(".variations_button");
        finalSelector = masterSelector[0];

        console.log(masterSelector);
    }
    if (Shopify.shop == "safe-cam-shop.myshopify.com")
    {
        masterSelector = $jq321("#new-form-atc");
        finalSelector = masterSelector[0];

        console.log(masterSelector);
    }
    if (Shopify.shop == "anatomylifeshop.myshopify.com")
    {
        masterSelector = $jq321("#m-1666945863630");
        finalSelector = masterSelector[0];

        console.log(masterSelector);
    }
    if (Shopify.shop == "duasdesignloja.myshopify.com")
    {
        $jq321("head").append('<style type="text/css">'+
                              '.cart-countdown-desktop-top-center { display: flex !important;}'+
                              '</style>');
    }
    if (Shopify.shop == "tula-baba-pty-ltd.myshopify.com")
    {
        masterSelector = $jq321(".gift-reggie-buttons");
        finalSelector = masterSelector[0];

        console.log(masterSelector);
    }
    if (Shopify.shop == "aesthelry.myshopify.com")
    {
        masterSelector = $jq321(".product-form__buttons");
        finalSelector = masterSelector[0];

        console.log(masterSelector);
    }
    if (Shopify.shop == "techstacy-7045.myshopify.com")
    {
        $jq321("head").append('<style type="text/css">'+
                              '.stock-top{margin-top:14px;}'+
                              '</style>');
        
        masterSelector = $jq321(".product-info");
        finalSelector = masterSelector[6];

        console.log(masterSelector);
    }
    if (Shopify.shop == "ideal-zone.myshopify.com")
    {
        masterSelector = $jq321(".under_cta_atc");
        finalSelector = masterSelector[0];

        console.log(masterSelector);
    }
    if (Shopify.shop == "61057c.myshopify.com")
    {
        $jq321("head").append('<style type="text/css">'+
                              '.cart-countdown-desktop-top-center { display: flex !important;}'+
                              '</style>');
    }

    function stockCountdown(response) {

        if (Shopify.shop == "pawpals-1.myshopify.com")
        {
            $jq321("head").append('<style type="text/css">'+
                                  '[data-product-blocks]{position: relative;}[data-product-blocks] .stock-top{position: absolute;right: 0;top: 0;width: auto;font-size:16px;}'+
                                  '@media screen and (max-width: 1238px){[data-product-blocks] .stock-top{position:static;}}'+
                                 
                                  '</style>');

            masterSelectorStock = $jq321(".product-block--price");
            finalSelectorStock = masterSelectorStock[0];

            console.log(masterSelectorStock);
        }
        
        var selectorStock0 = $jq321("form[action='/cart/add']").find(".product__submit__buttons").parent();
        var selectorStock1 = $jq321("form[action='/cart/add']").find("button[type='submit'],input[type='submit']").parent();
        var selectorStock2 = $jq321("form[action='/cart/add']"); 
        var selectorStock3 = $jq321("form[action='/cart/add']:first").find("button[type='submit'],input[type='submit']").parent();
        var selectorStock4 = $jq321("form[action='/cart/add']:first");
        var selectorStock5 = $jq321("#shopify-section-product-template").find("form[action='/cart/add']").find("button[type='submit'],input[type='submit']").parent();
        var selectorStock6 = $jq321("#shopify-section-product-template").find("form[action='/cart/add']");

        if (response.above_cart == 1)
        {
            if (masterSelectorStock.length > 0) 
            {
                $jq321(response.view).insertBefore(finalSelectorStock);
            }
            else if (masterSelector.length > 0) 
            {
                $jq321(response.view).insertBefore(finalSelector);
            } 
            else if (selectorStock0.length == 1)
            {
                selectorStock0.prepend(response.view);
            }
            else if(customSelector.length > 0)
            {
                $jq321(response.view).insertBefore(finalSelector);
            }
            else if (selectorStock1.length == 1)
            {
                selectorStock1.prepend(response.view);
            }
            else if (selectorStock2.length == 1)
            {
                selectorStock2.prepend(response.view);
            }
            else if (selectorStock3.length == 1)
            {
                $jq321(response.view).insertBefore(selectorStock3);
            }
            else if (selectorStock4.length == 1)
            {
                selectorStock4.prepend(response.view);
            }
            else if (selectorStock5.length == 1)
            {
                $jq321(response.view).insertBefore(selectorStock5);
            }
            else if (selectorStock6.length == 1)
            {
                selectorStock6.prepend(response.view);
            }
        }
        else
        {
            if (masterSelectorStock.length > 0) 
            {
                $jq321(response.view).insertAfter(finalSelectorStock);       
            }
            else if (masterSelector.length > 0) 
            {
                $jq321(response.view).insertAfter(finalSelector);       
            } 
            else if (selectorStock0.length == 1)
            {
                selectorStock0.append(response.view);
            }
            else if(customSelector.length > 0)
            {
                $jq321(response.view).insertAfter(finalSelector);
            }
            else if (selectorStock1.length == 1)
            {
                selectorStock1.append(response.view);
            }
            else if (selectorStock2.length == 1)
            {
                selectorStock2.append(response.view);
            }
            else if (selectorStock3.length == 1)
            {
                $jq321(response.view).insertAfter(selectorStock3);
            }
            else if (selectorStock4.length == 1)
            {
                selectorStock4.append(response.view);
            }
            else if (selectorStock5.length == 1)
            {
                $jq321(response.view).insertAfter(selectorStock5);
            }
            else if (selectorStock6.length == 1)
            {
                selectorStock6.append(response.view);
            }
        } 
     }



    // ---------------------------------- <TIME MODULE> -----------------------------------------

    // CREATE LIVE TIME COUNTDOWN
    function timeCountdown(t) 
    {
        var selectorTimer1 = $jq321("form[action='/cart/add']").find("button[type='submit'],input[type='submit']").parent();
        var selectorTimer2 = $jq321("form[action='/cart/add']");
        var selectorTimer3 = $jq321("form[action='/cart/add']:first").find("button[type='submit'],input[type='submit']").parent();
        var selectorTimer4 = $jq321("form[action='/cart/add']:first");
        var selectorTimer5 = $jq321("#shopify-section-product-template").find("form[action='/cart/add']").find("button[type='submit'],input[type='submit']").parent();
        var selectorTimer6 = $jq321("#shopify-section-product-template").find("form[action='/cart/add']");

        if (Shopify.shop == "jembaly.myshopify.com") 
        {
            customSelector = $jq321(".ProductMeta__Text");
            finalSelector = customSelector[0];
            console.log(customSelector);
        }

        if (Shopify.shop == "aspiresportsfiji.myshopify.com") 
        {
            $jq321("#time-custom-center").append(t.view);
        }

        if (t.above_cart == 1)
        {
            if (masterSelector.length > 0) 
            {
                $jq321(t.view).insertBefore(finalSelector);
            }
            else if(customSelector.length > 0){
                $jq321(t.view).insertBefore(finalSelector);
            }
            else if (selectorTimer1.length == 1)
            {
                selectorTimer1.prepend(t.view);
            }
            else if (selectorTimer2.length == 1)
            {
                selectorTimer2.prepend(t.view);
            }
            else if (selectorTimer3.length == 1)
            {
                $jq321(t.view).insertBefore(selectorTimer3);
            }
            else if (selectorTimer4.length == 1)
            {
                selectorTimer4.prepend(t.view);
            }
            else if (selectorTimer5.length == 1)
            {
                $jq321(t.view).insertBefore(selectorTimer5);
            }
            else if (selectorTimer6.length == 1)
            {
                selectorTimer6.prepend(t.view);
            }
        }
        else
        {
            if (masterSelector.length > 0) 
            {
                $jq321(t.view).insertAfter(finalSelector);       
            }
            else if(customSelector.length > 0){
                $jq321(t.view).insertAfter(finalSelector);
            }
            else if (selectorTimer1.length == 1)
            {
                selectorTimer1.append(t.view);
            }
            else if (selectorTimer2.length == 1)
            {
                selectorTimer2.append(t.view);
            }
            else if (selectorTimer3.length == 1)
            {
                $jq321(t.view).insertAfter(selectorTimer3);
            }
            else if (selectorTimer4.length == 1)
            {
                selectorTimer4.append(t.view);
            }
            else if (selectorTimer5.length == 1)
            {
                $jq321(t.view).insertAfter(selectorTimer5);
            }
            else if (selectorTimer6.length == 1)
            {
                selectorTimer6.append(t.view);
            }
        }

        var deadline = t.time;
        initializeClock('clockdivpreview', deadline);
    }

    // timer function
    function getTimeRemaining(endtime) {
        var now = new Date;
        var utc_timestamp = new Date(now.getUTCFullYear(),now.getUTCMonth(), now.getUTCDate() ,
            now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds(), now.getUTCMilliseconds());


        /* New Hack for Safari */
        var s = endtime;
        var a = s.split(/[^0-9]/);
        var endtime =new Date (a[0],a[1]-1,a[2],a[3],a[4],a[5] );

        /* END  New Hack for Safari */

        var t = endtime - utc_timestamp;

        var seconds = Math.floor((t / 1000) % 60);
        var minutes = Math.floor((t / 1000 / 60) % 60);
        var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
        var days = Math.floor(t / (1000 * 60 * 60 * 24));

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function initializeClock(id, endtime) {
        //console.log("Value Check in Start "+ id + " === "+ endtime);
        var clock = document.getElementById(id);
        var daysSpan = clock.querySelector('.days');
        var hoursSpan = clock.querySelector('.hours');
        var minutesSpan = clock.querySelector('.minutes');
        var secondsSpan = clock.querySelector('.seconds');

        //console.log("All Var check " + JSON.parse(clock + " === "+ JSON.parse(daysSpan) + " "+ JSON.parse(hoursSpan));
        function updateClock() {
            var t = getTimeRemaining(endtime);

            daysSpan.innerHTML = t.days;
            hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
            minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
            secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

            if (t.days == 0 && t.hours == 0 && t.minutes == 0 && t.seconds == 0) {
                clearInterval(timeinterval);
            }
        }

        updateClock();
        var timeinterval = setInterval(updateClock, 1000);
    }
    // ---------------------------------- </TIME MODULE> -----------------------------------------

    /**
     * Cart Countdown timer
     */
     function cartCountdownTimer(response)
     {
         setInterval(function () 
         {
             var cartContents = fetch('/cart.json', {method: 'GET'})
             .then(response => response.json())
             .then(data => {
                 let cartValue = data.items;

                 if (cartValue.length == 0) 
                 {
                     console.log("Cart is empty");
                     $jq321("#cc-sc-cart-timer-countdown-bar").remove();
                     window.localStorage.removeItem("carecart-scp-cart-timer-end-time");
                     window.localStorage.removeItem("carecart-scp-cart-timer-repeat");
                     window.localStorage.setItem("carecart-scp-cart-status", "empty");
                 } 
                 else 
                 {
                     console.log("there is something in the cart");
                     window.localStorage.removeItem("carecart-scp-cart-status");
                     appendCartTimerBar(response);
                 }
             });
         }, 3000);
     }
    
     function getTimeRemainingCartCountdown(endtime) 
     {
        let currentTime = Date.parse(new Date());
        let t = endtime - currentTime;
        let minutes = Math.floor((t / 1000 / 60) % 60);
        let seconds = Math.floor((t / 1000) % 60);

        window.localStorage.setItem("craecart-scp-cart-timer-minutes", minutes);
        window.localStorage.setItem("craecart-scp-cart-timer-seconds", seconds);

        return {
            'total': t,
            'minutes': minutes,
            'seconds': seconds
        };
     }
    
     function initializeClockCartCountdown(endtime = 15, settings) 
     {
        let ccCartCountdownTimerDiv = document.getElementById("cc-stock-cart-timer-section");
  
        function updateClock() 
        {
            let cartCountdownTimeRemaining = getTimeRemainingCartCountdown(endtime);
            let timerHTML = '<span>' + ('0' + cartCountdownTimeRemaining.minutes).slice(-2) + ' : ' + ('0' + cartCountdownTimeRemaining.seconds).slice(-2) + '</span>';

            $jq321(ccCartCountdownTimerDiv).html(timerHTML);

            if (cartCountdownTimeRemaining.total <= 0) 
            {
                if (settings.barAction == "empty") 
                {
                    fetch('/cart/clear.json', {method: 'GET'}).then(response => response.json()).then(data => {window.location.reload();});
                    clearInterval(timeintervalCartTimer);
                } 
                else if (settings.barAction == "nothing") 
                {
                    $jq321("#cc-sc-cart-timer-countdown-bar").remove();   
                    window.localStorage.setItem("craecart-scp-cart-timer-bar-status", "nothing");
                    clearInterval(timeintervalCartTimer);
                }
                else if (settings.barAction == "repeat") 
                { 
                    $jq321("#cc-sc-cart-timer-countdown-bar").remove();  
                    window.localStorage.setItem("craecart-scp-cart-timer-minutes", parseInt(settings.totalMinutes));
                    window.localStorage.setItem("craecart-scp-cart-timer-seconds", parseInt(settings.totalSeconds));
                    window.localStorage.setItem("carecart-scp-cart-timer-repeat", "yes");
                    clearInterval(timeintervalCartTimer);
                    appendCartTimerBar(settings, true);
                }
            }
        }

        updateClock();
        
        var timeintervalCartTimer = setInterval(updateClock, 1000);
     }
    
     function calculateCartCountDownTime(totalMinutes, totalSeconds)
     {   
         let totalTimeToBeAdd = parseInt(totalMinutes) * 60 * 1000 + parseInt(totalSeconds) * 1000;
         return endtime = new Date(Date.parse(new Date()) + totalTimeToBeAdd).getTime();
     }
    
     function appendCartTimerBar(response, status = false)
     {
         let cartCountdownTimeStampRepeat = window.localStorage.getItem("carecart-scp-cart-timer-repeat");
         
         if (cartCountdownTimeStampRepeat === "yes" && status) 
         {
             cartCountdownTimeStampRepeat = calculateCartCountDownTime(response.totalMinutes, response.totalSeconds);
             window.localStorage.setItem("carecart-scp-cart-timer-end-time", cartCountdownTimeStampRepeat);
         }
 
         let cartCountdownEndTimeStamp = window.localStorage.getItem("carecart-scp-cart-timer-end-time");
         
         if (cartCountdownEndTimeStamp === null) 
         {
             cartCountdownEndTimeStamp = calculateCartCountDownTime(response.totalMinutes, response.totalSeconds);   
             window.localStorage.setItem("carecart-scp-cart-timer-end-time", cartCountdownEndTimeStamp);
         }
         
         /**
          * Check first if bar already there
          */
         let cartStatus = window.localStorage.getItem("carecart-scp-cart-status");
         let barID = $jq321("#cc-sc-cart-timer-countdown-bar");
         
         if (barID.length == 0)
         {
             let barStatus = window.localStorage.getItem("craecart-scp-cart-timer-bar-status");
 
             if (barStatus !== "nothing") 
             {
                 /**
                 * Let make selector
                 */
                 let firstSelector = $jq321("form[action='/cart']").parent();
                 //let firstSelector = $jq321(".cart-summary__close");
                
                 console.log('selector');
                 console.log(firstSelector);
                 
                 if (response.barPosition == "top" && cartStatus === null) 
                 {  
                     if (firstSelector.length > 0) 
                     {
                        $jq321(firstSelector[0]).prepend(response.view);
                        //$jq321(firstSelector[1]).prepend(response.view); 
                        //$jq321(".title-wrapper-with-link").prepend(response.view);
                     }
                 } 
                 else 
                 { 
                     if (firstSelector.length > 0 && cartStatus === null) 
                     {   
                        $jq321(response.view).insertAfter(firstSelector[0]);
                        //$jq321(firstSelector[0]).append(response.view);
                        //$jq321(firstSelector[1]).append(response.view);
                        //$jq321(".title-wrapper-with-link").append(response.view);
                         
                     }
                 }

                 initializeClockCartCountdown(cartCountdownEndTimeStamp, response);
             }
         }
     }
    /**
    * Cart countdown timer ends here
    */

  });
