/**
 * @package Sales Pop up â€‘ Social Proof
 * @author CareCart
 * @link https://apps.shopify.com/partners/care-cart
 * @link https://carecart.io/
 * @version 1.1.8
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
        if (apiResponse && apiResponse.visitor && apiResponse.visitor !== null) {

            $jq321("head").append($jq321("<link/>", {
                rel: "stylesheet",
                href: serverUrl.cssVisitor + "?v" + version
            }));

            visitorCounter(apiResponse.visitor);
        }
    };

    /* Hard coded product id's for homa page */
    
    let productID = 0;
    
    if (Shopify.shop == "behappyfr.myshopify.com") 
    {
        productID = 6887512703140;
    } 

    $jq321.ajax({
        type: "GET",
        url: salespoplib_vars_obj.backend_url + 'checkStore/',
        dataType: "jsonp",
        jsonpCallback: "checkmodule_visitor",
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

    // ---------------------------------- <VISITOR COUNTER MODULE> --------------------------------
    let allForms = $jq321("form[action]");

    $jq321.each(allForms, function (key, value) {
        var formUrls = value.action;
        if (formUrls.indexOf('/cart/add') > -1) { masterSelector = $jq321(value).find("button[type='submit'],input[type='submit']").parent(); }
    });

    function visitorCounter(response) {

        var selectorVisitor1 = $jq321("form[action='/cart/add']").find("button[type='submit'],input[type='submit']").parent();
        var selectorVisitor2 = $jq321("form[action='/cart/add']");
        var selectorVisitor3 = $jq321("form[action='/cart/add']:first").find("button[type='submit'],input[type='submit']");
        var selectorVisitor4 = $jq321("form[action='/cart/add']:first");

        if (response.above_cart == 1) {
            if (Shopify.shop == "officialsmootsy.myshopify.com")
            {
                $jq321(response.view).insertBefore('.product-form__buttons');
            }
            else if (masterSelector.length > 0) {
                $jq321(response.view).insertBefore(masterSelector);
            }
            else if (selectorVisitor1.length == 1) {
                selectorVisitor1.prepend(response.view);
            }
            else if (selectorVisitor2.length == 1) {
                selectorVisitor2.prepend(response.view);
            }
            else if (selectorVisitor3.length == 1) {
                $jq321(response.view).insertBefore(selectorVisitor3);
            }
            else if (selectorVisitor4.length == 1) {
                selectorVisitor4.prepend(response.view);
            }
        }
        else {
            if (Shopify.shop == "officialsmootsy.myshopify.com")
            {
                $jq321(response.view).insertAfter('.product-form__buttons');
            }
            else if (masterSelector.length > 0) {
                $jq321(response.view).insertAfter(masterSelector);
            }
            else if (selectorVisitor1.length == 1) {
                selectorVisitor1.append(response.view);
            }
            else if (selectorVisitor2.length == 1) {
                selectorVisitor2.append(response.view);
            }
            else if (selectorVisitor3.length == 1) {
                $jq321(response.view).insertAfter(selectorVisitor3);
            }
            else if (selectorVisitor4.length == 1) {
                selectorVisitor4.append(response.view);
            }
        }

        $jq321('n').html(function (i, v) {
            return v.replace(/(\d)/g, '<span ' + response.count + '>$1</span>');
        });
    }

    // ---------------------------------- <VISITOR COUNTER MODULE> --------------------------------

});
