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
var myDiv = document.createElement("ji");

//Set its class.
myDiv.className = 'doubleCheck';

//Finally, append the element to the HTML body
document.body.appendChild(myDiv);

var doubleCheck = document.getElementsByClassName("doubleCheck");
var ndoubleCheck = doubleCheck.length;
if (ndoubleCheck == 2) {
    //window.stop();
    throw new Error("DOUBLE APP JS");
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
                "cssTimer": "https://app-countdown-pro.carecart.io/lib/timer-box.css"
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
            "cssTimer": "https://" + tempAnchorTag.hostname + "/lib/timer-box.css?v" + version
        };
    }

    var serverUrl = getServerUrls();
    var app_url ="https://app-countdown-pro.carecart.io/"

    // @todo cleanup unused extra properties
    var salespoplib_vars_obj = {
        backend_url: serverUrl.backend
    };

    window.checkmodule_countdown = function (response) {

        apiResponse = response;

       // STOCK COUNTDOWN CALL
        if(apiResponse && apiResponse.stock && apiResponse.stock!==null)
        {
            $jq321("head").append($jq321("<link/>", {
                rel: "stylesheet",
                href: serverUrl.cssStock + "?v" + version
            }));
            stockCountdown(apiResponse.stock);
        }

        // Time COUNTDOWN CALL
        if(apiResponse && apiResponse.timer && apiResponse.timer!==null)
        {
            $jq321("head").append($jq321("<link/>", {
                rel: "stylesheet",
                href: serverUrl.cssTimer + "?v" + version
            }));
            timeCountdown(apiResponse.timer);
        }
    };

/* Hard coded product id's for home page */
    let productID = 0;
    if(Shopify.shop == "next-level-paramount-deals.myshopify.com"){
        productID = 7067725594823;
    }
    if(Shopify.shop == "blissin-skin.myshopify.com"){
        productID = 6939770716332;
    }
    if(Shopify.shop == "shapely-former.myshopify.com"){
        productID = 7430447038714;
    }
    if(Shopify.shop == "cian-o-regan-photography.myshopify.com"){
        productID = 6640241737859;
    }
    if(Shopify.shop == "fancybeauty-com.myshopify.com"){
        productID = 7197491462300;
    }
    if(Shopify.shop == "samraatthreads.myshopify.com"){
        productID = 7377156440233;
    }
    if(Shopify.shop == "nomorewetwet.myshopify.com"){
        productID = 5649273028760;
    }
    if (Shopify.shop == "fancybeauty-com.myshopify.com")
    {
        productID = 7204279386268;
    }
    if (Shopify.shop == "vandomi-collective.myshopify.com")
    {
        productID = 7251270860970;
    }
    if (Shopify.shop == "lavergnehugo74-3615.myshopify.com")
    {
        productID = 7198671470764;
    }
    if (Shopify.shop == "lodiamo.myshopify.com")
    {
        productID = 7360159088834;        
    }
    if (Shopify.shop == "windaroma.myshopify.com")
    {
        //productID = 7350529163425;
        productID = 7364534304929;       
    }
    if(Shopify.shop == "harvest-blending.myshopify.com")
    {
        productID = 6988879265826;
    }
    if(Shopify.shop == "skintagremover11.myshopify.com")
    {
        productID = 7544466800852;
    }
    if(Shopify.shop == "teethy12.myshopify.com")
    {
        productID = 7035477131309;
    }
    if(Shopify.shop == "swoomstore.myshopify.com")
    {
        productID = 7432323268757;
    }
    if(Shopify.shop == "cauddle.myshopify.com")
    {
        productID = 7691278418174;
    }
    if(Shopify.shop == "tuocanefelice.myshopify.com")
    {
        productID = 7702439756031;
    }
    if(Shopify.shop == "nxgenblend.myshopify.com")
    {
        productID = 7803071299807;
    }
    if(Shopify.shop == "gyrogrip.myshopify.com")
    {
        productID = 7915240292584;
    }
    if(Shopify.shop == "dualips.myshopify.com")
    {
        productID = 7402620190884;
    }
    if(Shopify.shop == "b-relax-ita.myshopify.com")
    {
        productID = 7053959725243;
    }
    if(Shopify.shop == "impactstore123.myshopify.com")
    {
        productID = 7861698527453;
    }
    if (Shopify.shop == "lindispensable-et-moi.myshopify.com")
    {
        productID = 7478875685019;
    }
    if (Shopify.shop == "collection-play.myshopify.com")
    {
        productID = 7973031117075;
    }

    $jq321.ajax({
        type: "GET",
        url: salespoplib_vars_obj.backend_url + 'checkStore/',
        dataType: "jsonp",
        jsonpCallback: "checkmodule_countdown",
        crossDomain: true,
        data: {
            "domain_url": Shopify.shop,
            "product_id": (meta.product && meta.product.id)?meta.product.id:productID
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
    if(Shopify.shop == "cian-o-regan-photography.myshopify.com"){
        customSelector = $jq321(".grid-view-item__title");
        finalSelector = customSelector[0];
    }
    if(Shopify.shop == "skintagremover11.myshopify.com")
    {
        customSelector = $jq321("#new-form-atc");
        finalSelector = customSelector[0];
    }
    if(Shopify.shop == "windaroma.myshopify.com")
    {
        customSelector = $jq321("#new-form-atc");
        finalSelector = customSelector[0];
    }
    if(Shopify.shop == "teethy12.myshopify.com")
    {
        customSelector = $jq321("#new-form-atc");
        finalSelector = customSelector[0];
    }
    if(Shopify.shop == "tuocanefelice.myshopify.com")
    {
        customSelector = $jq321(".product-form__buttons");
        finalSelector = customSelector[0];
    }
    if(Shopify.shop == "gyrogrip.myshopify.com")
    {
        customSelector = $jq321(".product-form__buttons");
        finalSelector = customSelector[0];

        console.log(finalSelector);
    }
    if(Shopify.shop == "dualips.myshopify.com")
    {
        customSelector = $jq321("h2");
        finalSelector = customSelector[0];

        console.log(finalSelector);
    }
    if(Shopify.shop == "b-relax-ita.myshopify.com")
    {
        $jq321("head").append('<style type="text/css">.product-block--price{margin-bottom:11px !important;}</style>');

        customSelector = $jq321(".product-block--price");
        finalSelector = customSelector[0];

        console.log(finalSelector);
    }
    if (Shopify.shop == "lindispensable-et-moi.myshopify.com")
    {
        customSelector = $jq321(".product-form");
        finalSelector = customSelector[0];

        console.log(finalSelector);
    }
    
     function stockCountdown(response) {
         
        var selectorStock1 = $jq321("form[action='/cart/add']").find("button[type='submit'],input[type='submit']").parent();
        var selectorStock2 = $jq321("form[action='/cart/add']"); 
        var selectorStock3 = $jq321("form[action='/cart/add']:first").find("button[type='submit'],input[type='submit']").parent();
        var selectorStock4 = $jq321("form[action='/cart/add']:first");
        var selectorStock5 = $jq321("#shopify-section-product-template").find("form[action='/cart/add']").find("button[type='submit'],input[type='submit']").parent();
        var selectorStock6 = $jq321("#shopify-section-product-template").find("form[action='/cart/add']");

        if (response.above_cart == 1)
        {
            if(customSelector.length > 0){
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
            if (customSelector.length > 0)
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
    function timeCountdown(t) {

        if (Shopify.shop == "impactstore123.myshopify.com")
        {
            if (window.location.href == 'https://impactstore123.myshopify.com/')
            {
                customSelector = $jq321(".card__inner");
                finalSelector = customSelector[0];

                console.log(customSelector);
            }
            else
            {
                customSelector = $jq321(".global-media-settings");
                finalSelector = customSelector[0];

                console.log(finalSelector);
            }
        }

        var selectorTimer1 = $jq321("form[action='/cart/add']").find("button[type='submit'],input[type='submit']").parent();
        var selectorTimer2 = $jq321("form[action='/cart/add']");
        var selectorTimer3 = $jq321("form[action='/cart/add']:first").find("button[type='submit'],input[type='submit']").parent();
        var selectorTimer4 = $jq321("form[action='/cart/add']:first");
        var selectorTimer5 = $jq321("#shopify-section-product-template").find("form[action='/cart/add']").find("button[type='submit'],input[type='submit']").parent();
        var selectorTimer6 = $jq321("#shopify-section-product-template").find("form[action='/cart/add']");

        if (t.above_cart == 1)
        {
            if(customSelector.length > 0){
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
            if(customSelector.length > 0){
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

  });
