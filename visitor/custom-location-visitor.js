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

            $(".visitor-counter-content-box-carecartbysalespop-2020").remove();

            $jq321("head").append($jq321("<link/>", {
                rel: "stylesheet",
                href: serverUrl.cssVisitor + "?v" + version
            }));

            if (Shopify.shop == "juliteste.myshopify.com") 
            {
                setTimeout(function () {visitorCounter(apiResponse.visitor)}, 3000);
            }
            else
            {
                visitorCounter(apiResponse.visitor);
            }
        }
    };

    if (Shopify.shop == "nefertum-scent.myshopify.com") 
    {
        var meta = {"product":{"id":__st.rid}};

        console.log((meta.product && meta.product.id)?meta.product.id:'');
    }
    
    if (Shopify.shop == "nomardic-de.myshopify.com") 
    {
        var meta = {"product":{"id":__st.rid}};

        console.log((meta.product && meta.product.id)?meta.product.id:'');
    }

    if (Shopify.shop == "nomardic-nl.myshopify.com") 
    {
        var meta = {"product":{"id":__st.rid}};

        console.log((meta.product && meta.product.id)?meta.product.id:'');
    }

    if (Shopify.shop == "nelsondesign.myshopify.com") 
    {
        var meta = {"product":{"id":__st.rid}};

        console.log((meta.product && meta.product.id)?meta.product.id:'');
    }

    if (Shopify.shop == "mullerdesign.myshopify.com") 
    {
        var meta = {"product":{"id":__st.rid}};

        console.log((meta.product && meta.product.id)?meta.product.id:'');
    }

    if (Shopify.shop == "stuf-products.myshopify.com") 
    {
        var meta = {"product":{"id":__st.rid}};

        console.log((meta.product && meta.product.id)?meta.product.id:'');
    }

    if (Shopify.shop == "juliteste.myshopify.com") 
    {
        var meta = {"product":{"id":__st.rid}};

        console.log((meta.product && meta.product.id)?meta.product.id:'');
    }

    if (Shopify.shop == "tsm-aquatics.myshopify.com") 
    {
        var meta = {"product":{"id":__st.rid}};

        console.log((meta.product && meta.product.id)?meta.product.id:'');
    }
    
    if (Shopify.shop == "mysweetsmileco.myshopify.com") 
    {
        var meta = {"product":{"id":__st.rid}};

        console.log((meta.product && meta.product.id)?meta.product.id:'');
    }

    if (Shopify.shop == "robinsonssingapore.myshopify.com") 
    {
        var meta = {"product":{"id":__st.rid}};

        console.log((meta.product && meta.product.id)?meta.product.id:'');
    }
    if (Shopify.shop == "de-fb.myshopify.com") 
    {
        var meta = {"product":{"id":__st.rid}};

        console.log((meta.product && meta.product.id)?meta.product.id:'');
    }
    if (Shopify.shop == "newnorway.myshopify.com") 
    {
        var meta = {"product":{"id":__st.rid}};

        console.log((meta.product && meta.product.id)?meta.product.id:'');
    }
    if (Shopify.shop == "roy-groote.myshopify.com") 
    {
        var meta = {"product":{"id":__st.rid}};

        console.log((meta.product && meta.product.id)?meta.product.id:'');
    }
    if (Shopify.shop == "swe-1.myshopify.com") 
    {
        var meta = {"product":{"id":__st.rid}};

        console.log((meta.product && meta.product.id)?meta.product.id:'');
    }
    if (Shopify.shop == "megawheels-com.myshopify.com") 
    {
        var meta = {"product":{"id":__st.rid}};

        console.log((meta.product && meta.product.id)?meta.product.id:'');
    }
    if (Shopify.shop == "colombiahit.myshopify.com") 
    {
        var meta = {"product":{"id":__st.rid}};

        console.log((meta.product && meta.product.id)?meta.product.id:'');
    }
    if (Shopify.shop == "ommerce-6653.myshopify.com") 
    {
        var meta = {"product":{"id":__st.rid}};

        console.log((meta.product && meta.product.id)?meta.product.id:'');
    }

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
   
    if(Shopify.shop == "tsm-aquatics.myshopify.com")
    {
        customSelctor = $jq321(".dichead");
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

    if (Shopify.shop == "nomardic-de.myshopify.com")
    {
    	customSelctor = $jq321(".ProductForm__Variants");
    	finalSelector = customSelctor[0];
    }

    if (Shopify.shop == "nomardic-nl.myshopify.com")
    {
    	customSelctor = $jq321(".ProductForm__Variants");
    	finalSelector = customSelctor[0];
    }

    if (Shopify.shop == "nelsondesign.myshopify.com")
    {
    	customSelctor = $jq321(".ProductForm__Variants");
    	finalSelector = customSelctor[0];
    }

    if (Shopify.shop == "mullerdesign.myshopify.com")
    {
    	customSelctor = $jq321(".ProductForm__Variants");
    	finalSelector = customSelctor[0];
    }

    if (Shopify.shop == "stuf-products.myshopify.com")
    {
    	customSelctor = $jq321("#button-cart");
    	finalSelector = customSelctor[0];
    }

    if (Shopify.shop == "juliteste.myshopify.com")
    {
    	customSelctor = $jq321("#ta-quoter-wrapper");
    	finalSelector = customSelctor[0];
    }
    if (Shopify.shop == "mysweetsmileco.myshopify.com")
    {
    	customSelctor = $jq321(".clearpay-paragraph");
    	finalSelector = customSelctor[1];
    }

    if (Shopify.shop == "robinsonssingapore.myshopify.com")
    {
    	customSelctor = $jq321(".custom_add_to_cart");
    	finalSelector = customSelctor[0];
    }
    if (Shopify.shop == "de-fb.myshopify.com")
    {
    	customSelctor = $jq321(".product-single__add-to-cart");
    	finalSelector = customSelctor[0];
    }
    if (Shopify.shop == "newnorway.myshopify.com")
    {
    	customSelctor = $jq321(".product-title-container");
    	finalSelector = customSelctor[0];

        $jq321("head").append(
            '<style type="text/css">' + 
            '.visitor-counter-content-box-carecartbysalespop-2020 {height: 49px !important;margin-top: -10px !important;}' +
            '</style>'
           );
    }
    if (Shopify.shop == "roy-groote.myshopify.com")
    {
    	customSelctor = $jq321(".pf-36_");
    	finalSelector = customSelctor[0];
    }
    if (Shopify.shop == "swe-1.myshopify.com")
    {
        $jq321("head").append(
            '<style type="text/css">' + 
            '.visitor-counter-content-box-carecartbysalespop-2020 {margin-top: -21px !important;}' +
            '</style>'
           );

    	customSelctor = $jq321(".centering");
    	finalSelector = customSelctor[0];
    }

    if (Shopify.shop == "nomardic-nl.myshopify.com")
    {
    	customSelctor = $jq321(".ProductForm__AddToCart");
    	finalSelector = customSelctor[0];
    }

    if (Shopify.shop == "nomardic-de.myshopify.com")
    {
    	customSelctor = $jq321(".ProductForm__AddToCart");
    	finalSelector = customSelctor[0];
    }

    if (Shopify.shop == "megawheels-com.myshopify.com")
    {
    	customSelctor = $jq321(".product__price");
    	finalSelector = customSelctor[0];
    }

    if (Shopify.shop == "colombiahit.myshopify.com")
    {
    	customSelctor = $jq321("#AddToCartForm-product-template");
    	finalSelector = customSelctor[0];

        $jq321("head").append(
            '<style type="text/css">' + 
            'div.content-div-visitor-detail-carecartbysalespop-2020.visitor-left{margin-top:auto !important;padding: 15px;}' +
            '</style>'
           );
        
        console.log('selector: ');
        console.log(finalSelector);
    }

    if (Shopify.shop == "ommerce-6653.myshopify.com")
    {
    	customSelctor = $jq321(".social-sharing");
    	finalSelector = customSelctor[0];
    }

    

    function visitorCounter(responseVisitor) {

        var selectorVisitor1 = $jq321("form[action='/cart/add']").find("button[type='submit'],input[type='submit']").parent();
        var selectorVisitor2 = $jq321("form[action='/cart/add']");
        var selectorVisitor3 = $jq321("form[action='/cart/add']:first").find("button[type='submit'],input[type='submit']");
        var selectorVisitor4 = $jq321("form[action='/cart/add']:first");
        
        if (responseVisitor.above_cart == 1)
        {
            if(customSelctor.length > 0){
            	$jq321(responseVisitor.view).insertBefore(finalSelector);
            }
            else if (selectorVisitor1.length == 1)
            {
                selectorVisitor1.prepend(responseVisitor.view);
            }
            else if (selectorVisitor2.length == 1)
            {
                selectorVisitor2.prepend(responseVisitor.view);
            }
            else if (selectorVisitor3.length == 1)
            {
                $jq321(responseVisitor.view).insertBefore(selectorVisitor3);
            }
            else if (selectorVisitor4.length == 1)
            {
                selectorVisitor4.prepend(responseVisitor.view);
            }
        }
        else
        {
            if(customSelctor.length > 0){
            	$jq321(responseVisitor.view).insertAfter(finalSelector);
            }
            else if (selectorVisitor1.length == 1)
            {
                selectorVisitor1.append(responseVisitor.view);
            }
            else if (selectorVisitor2.length == 1)
            {
                selectorVisitor2.append(responseVisitor.view);
            }
            else if (selectorVisitor3.length == 1)
            {
                $jq321(responseVisitor.view).insertAfter(selectorVisitor3);
            }
            else if (selectorVisitor4.length == 1)
            {
                selectorVisitor4.append(responseVisitor.view);
            }
        }
        if(Shopify.shop == "usesthetics.myshopify.com")
        {
            if($jq321('.visitor-counter-content-box-carecartbysalespop-2020').length > 0){
                $jq321('.visitor-counter-content-box-carecartbysalespop-2020').css("display", "none");
            }
            customSelctor = $jq321(".expo-section-wrapper");
            finalSelector = customSelctor[0];
            if(customSelctor.length > 0){
                $jq321(responseVisitor.view).insertAfter(finalSelector);
            }
            else{
                customSelctor = $jq321(".expo-section-wrapper");
                finalSelector = customSelctor[0];
                $jq321(responseVisitor.view).insertBefore(finalSelector);
            }
        }

        if (Shopify.shop == "mysweetsmileco.myshopify.com") {
            $jq321("body").append('<style style="text/css">.visitor-counter-content-box-carecartbysalespop-2020 {margin-top: -24px !important}</style>');
        }
    
        $jq321('n').html(function(i, v){
            return v.replace(/(\d)/g, '<span '+responseVisitor.count+'>$1</span>');
        });
    }

    // ---------------------------------- <VISITOR COUNTER MODULE> --------------------------------

  });
