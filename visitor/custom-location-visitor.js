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
            if (script.src && script.src.indexOf('lib/visitorcounter') !== -1) {
                thisLibUrl = script.src;
            }
        });

        // return with production URLs
        if (thisLibUrl === "") {
            return {
                "backend": "https://app-visitor-counter.carecart.io/FrontController/",
		        "cssVisitor": "https://app-visitor-counter.carecart.io/lib/visitor-box.css"
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
            "cssVisitor": "https://" + tempAnchorTag.hostname + "/lib/visitor-box.css?v" + version
        };
    }

    var serverUrl = getServerUrls();

    // @todo cleanup unused extra properties
    var salespoplib_vars_obj = {
        backend_url: serverUrl.backend
    };

    window.checkmodule_visitor = function (response) {

        apiResponse = response;

        // VISITOR COUNTER CALL
        if(apiResponse && apiResponse.visitor && apiResponse.visitor!==null){

            $jq321("head").append($jq321("<link/>", {
                rel: "stylesheet",
                href: serverUrl.cssVisitor + "?v" + version
            }));

            
            visitorCounter(apiResponse.visitor)
           
            
            
        }
    };
	
    $jq321.ajax({
        type: "GET",
        url: salespoplib_vars_obj.backend_url + 'checkStore/',
        dataType: "jsonp",
        jsonpCallback: "checkmodule_visitor",
        crossDomain: true,
        data: {
			"domain_url": Shopify.shop,
            "product_id": (meta.product && meta.product.id)?meta.product.id:''
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

    // ---------------------------------- <VISITOR COUNTER MODULE> --------------------------------
    /* Custom script goes from here */
    let customSelctor = "";
    let finalSelector = "";
    if(Shopify.shop == "walea-shop.myshopify.com")
    {
    	customSelctor = $jq321(".one-whole");
    	finalSelector = customSelctor[1];
    }
    if(Shopify.shop == "gadgy-market.myshopify.com")
    {
    	customSelctor = $jq321(".product-form__payment-container");
    	finalSelector = customSelctor[0];
    }
    if(Shopify.shop == "cura-health-limited.myshopify.com")
    {
    	customSelctor = $jq321(".product-cart_button");
    	finalSelector = customSelctor[0];
    }  
    if(Shopify.shop == "hey-ofertas.myshopify.com")
    {
    	customSelctor = $jq321(".product-form__payment-container");
    	finalSelector = customSelctor[0];
    }
    if(Shopify.shop == "nulifebeauty.myshopify.com")
    {
    	customSelctor = $jq321(".modal_price");
    	finalSelector = customSelctor[0];
    }
   
    if(Shopify.shop == "awareness-avenue.myshopify.com")
    {
    	customSelctor = $jq321(".ProductForm__AddToCart");
    	finalSelector = customSelctor[0];
        var windowWidth = window.screen.width < window.outerWidth ? window.screen.width : window.outerWidth;
        if (windowWidth < 575) {
            $jq321("head").append(
                '<style type="text/css"> .content-div-visitor-detail-carecartbysalespop-2020{display:flex !important; justify-content:center}</style>');
        }
    }

   
    
   
    console.log(customSelctor);
    console.log(finalSelector);


    function visitorCounter(response) {

        var selectorVisitor1 = $jq321("form[action='/cart/add']").find("button[type='submit'],input[type='submit']").parent();
        var selectorVisitor2 = $jq321("form[action='/cart/add']");
        var selectorVisitor3 = $jq321("form[action='/cart/add']:first").find("button[type='submit'],input[type='submit']");
        var selectorVisitor4 = $jq321("form[action='/cart/add']:first");
        
        
        if (response.above_cart == 1)
        {
            if(customSelctor.length > 0){
            	$jq321(response.view).insertAfter(finalSelector);
            }
            else if (selectorVisitor1.length == 1)
            {
                selectorVisitor1.prepend(response.view);
            }
            else if (selectorVisitor2.length == 1)
            {
                selectorVisitor2.prepend(response.view);
            }
            else if (selectorVisitor3.length == 1)
            {
                $jq321(response.view).insertBefore(selectorVisitor3);
            }
            else if (selectorVisitor4.length == 1)
            {
                selectorVisitor4.prepend(response.view);
            }
        }
        else
        {
            if(customSelctor.length > 0){
            	$jq321(response.view).insertAfter(finalSelector);
            }
            else if (selectorVisitor1.length == 1)
            {
                selectorVisitor1.append(response.view);
            }
            else if (selectorVisitor2.length == 1)
            {
                selectorVisitor2.append(response.view);
            }
            else if (selectorVisitor3.length == 1)
            {
                $jq321(response.view).insertAfter(selectorVisitor3);
            }
            else if (selectorVisitor4.length == 1)
            {
                selectorVisitor4.append(response.view);
            }
        }
        if(Shopify.shop == "usesthetics.myshopify.com")
        {
            // customSelctor = $jq321(".expo-section-wrapper");
            // finalSelector = customSelctor[0];
            if($jq321('.visitor-counter-content-box-carecartbysalespop-2020').length > 0){
                $jq321('.visitor-counter-content-box-carecartbysalespop-2020').css("display", "none");
            }
            customSelctor = $jq321(".expo-section-wrapper");
            finalSelector = customSelctor[0];
            if(customSelctor.length > 0){
                $jq321(response.view).insertAfter(finalSelector);
            }
            else{
                customSelctor = $jq321(".expo-section-wrapper");
                finalSelector = customSelctor[0];
                $jq321(response.view).insertBefore(finalSelector);
            }
        }
    
        $jq321('n').html(function(i, v){
            return v.replace(/(\d)/g, '<span '+response.count+'>$1</span>');
        });
    }

    // ---------------------------------- <VISITOR COUNTER MODULE> --------------------------------

  });
