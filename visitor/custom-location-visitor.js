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
 
 console.log(doubleCheck);
 
 var ndoubleCheck = doubleCheck.length;
 
 console.log(ndoubleCheck);

 if (ndoubleCheck == 1) {
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
        if (apiResponse && apiResponse.visitor && apiResponse.visitor!==null)
        {
            if (Shopify.shop == "spakopen.myshopify.com") 
            {
                var block_url = window.location.pathname.split("/");

                if (block_url[1] == 'collections')
                {
                    console.log('Block visitor counter on collection pages');
                    return;
                }
            }

            //$jq321(".visitor-counter-content-box-carecartbysalespop-2020").remove();

            $jq321("head").append($jq321("<link/>", {
                rel: "stylesheet",
                href: serverUrl.cssVisitor + "?v" + version
            }));

            /* if (Shopify.shop == "www-minkymyles-com.myshopify.com") 
            {
                setTimeout(function () {visitorCounter(apiResponse.visitor)}, 10000);
            }
            else */ 
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
    if (Shopify.shop == "anycar-seatcovers.myshopify.com") 
    {
        var meta = {"product":{"id":__st.rid}};

        console.log((meta.product && meta.product.id)?meta.product.id:'');
    }
    if (Shopify.shop == "awatchstrap.myshopify.com") 
    {
        var meta = {"product":{"id":__st.rid}};

        console.log((meta.product && meta.product.id)?meta.product.id:'');
    }
    if (Shopify.shop == "bybaanoo.myshopify.com") 
    {
        var meta = {"product":{"id":__st.rid}};

        console.log((meta.product && meta.product.id)?meta.product.id:'');
    }
    if (Shopify.shop == "watchis01.myshopify.com") 
    {
        var meta = {"product":{"id":__st.rid}};

        console.log((meta.product && meta.product.id)?meta.product.id:'');
    }
    if (Shopify.shop == "shoesaaa.myshopify.com") 
    {
        var meta = {"product":{"id":__st.rid}};

        console.log((meta.product && meta.product.id)?meta.product.id:'');
    }
    if (Shopify.shop == "bruzix.myshopify.com") 
    {
        var meta = {"product":{"id":__st.rid}};

        console.log((meta.product && meta.product.id)?meta.product.id:'');
    }
    if (Shopify.shop == "street-strider.myshopify.com") 
    {
        var meta = {"product":{"id":__st.rid}};

        console.log((meta.product && meta.product.id)?meta.product.id:'');
    }
    if (Shopify.shop == "orianne-berlin.myshopify.com") 
    {
        var meta = {"product":{"id":__st.rid}};

        console.log((meta.product && meta.product.id)?meta.product.id:'');
    }
    if (Shopify.shop == "usesthetics.myshopify.com") 
    {
        var meta = {"product":{"id":__st.rid}};

        console.log((meta.product && meta.product.id)?meta.product.id:'');
    }
    if (Shopify.shop == "deluri.myshopify.com") 
    {
        var meta = {"product":{"id":__st.rid}};

        console.log((meta.product && meta.product.id)?meta.product.id:'');
    }
    if (Shopify.shop == "vintagetrainers.myshopify.com") 
    {
        var meta = {"product":{"id":__st.rid}};

        console.log((meta.product && meta.product.id)?meta.product.id:'');
    }
    if (Shopify.shop == "pimuraempire.myshopify.com") 
    {
        var meta = {"product":{"id":__st.rid}};

        console.log((meta.product && meta.product.id)?meta.product.id:'');
    }
    if (Shopify.shop == "vintageheavensgate1.myshopify.com") 
    {
        var meta = {"product":{"id":__st.rid}};

        console.log((meta.product && meta.product.id)?meta.product.id:'');
    }
    if (Shopify.shop == "medici-supply-co.myshopify.com") 
    {
        var meta = {"product":{"id":__st.rid}};

        console.log((meta.product && meta.product.id)?meta.product.id:'');
    }
    if (Shopify.shop == "wrywryshop.myshopify.com") 
    {
        var meta = {"product":{"id":__st.rid}};

        console.log((meta.product && meta.product.id)?meta.product.id:'');
    }
    if (Shopify.shop == "amamibijoux.myshopify.com") 
    {
        var meta = {"product":{"id":__st.rid}};

        console.log((meta.product && meta.product.id)?meta.product.id:'');
    }
    if (Shopify.shop == "metaphysicalonlineshop.myshopify.com") 
    {
        var meta = {"product":{"id":__st.rid}};

        console.log((meta.product && meta.product.id)?meta.product.id:'');
    }
    if (Shopify.shop == "combadepalo.myshopify.com") 
    {
        var meta = {"product":{"id":__st.rid}};

        console.log((meta.product && meta.product.id)?meta.product.id:'');
    }
    if (Shopify.shop == "la-porta-dei-sapori.myshopify.com") 
    {
        var meta = {"product":{"id":__st.rid}};

        console.log((meta.product && meta.product.id)?meta.product.id:'');
    }
    if (Shopify.shop == "nlmilamaya.myshopify.com") 
    {
        var meta = {"product":{"id":__st.rid}};

        console.log((meta.product && meta.product.id)?meta.product.id:'');
    }
    if (Shopify.shop == "ohmepretty.myshopify.com") 
    {
        var meta = {"product":{"id":__st.rid}};

        console.log((meta.product && meta.product.id)?meta.product.id:'');
    }
    if (Shopify.shop == "vitapur-stage-store.myshopify.com") 
    {
        var meta = {"product":{"id":__st.rid}};

        //console.log((meta.product && meta.product.id)?meta.product.id:'');
    }
    if (Shopify.shop == "vitapur-romania.myshopify.com") 
    {
        var meta = {"product":{"id":__st.rid}};

        //console.log((meta.product && meta.product.id)?meta.product.id:'');
    }
    if (Shopify.shop == "vitapur-sk.myshopify.com") 
    {
        var meta = {"product":{"id":__st.rid}};

        //console.log((meta.product && meta.product.id)?meta.product.id:'');
    }
    if (Shopify.shop == "spruce-plant-shop.myshopify.com") 
    {
        var meta = {"product":{"id":__st.rid}};

        //console.log((meta.product && meta.product.id)?meta.product.id:'');
    }
    if (Shopify.shop == "spakopen.myshopify.com") 
    {
        var meta = {"product":{"id":__st.rid}};

        //console.log((meta.product && meta.product.id)?meta.product.id:'');
    }
    if (Shopify.shop == "norwegian-biolabs.myshopify.com") 
    {
        var meta = {"product":{"id":__st.rid}};

        //console.log((meta.product && meta.product.id)?meta.product.id:'');
    }
    if (Shopify.shop == "zhouweiwei0502.myshopify.com") 
    {
        var meta = {"product":{"id":__st.rid}};

        //console.log((meta.product && meta.product.id)?meta.product.id:'');
    }
    if (Shopify.shop == "nomardic-com.myshopify.com") 
    {
        var meta = {"product":{"id":__st.rid}};

        //console.log((meta.product && meta.product.id)?meta.product.id:'');
    }
    if (Shopify.shop == "protectich.myshopify.com") 
    {
        var meta = {"product":{"id":__st.rid}};

        //console.log((meta.product && meta.product.id)?meta.product.id:'');
    }
    if (Shopify.shop == "mirable-life.myshopify.com") 
    {
        var meta = {"product":{"id":__st.rid}};

        //console.log((meta.product && meta.product.id)?meta.product.id:'');
    }
    if (Shopify.shop == "viryaws.myshopify.com") 
    {
        var meta = {"product":{"id":__st.rid}};

        //console.log((meta.product && meta.product.id)?meta.product.id:'');
    }
    if (Shopify.shop == "oostduits.myshopify.com") 
    {
        var meta = {"product":{"id":__st.rid}};

        //console.log((meta.product && meta.product.id)?meta.product.id:'');
    }
    if (Shopify.shop == "direct-flamingo.myshopify.com") 
    {
        var meta = {"product":{"id":__st.rid}};

        //console.log((meta.product && meta.product.id)?meta.product.id:'');
    }
    if (Shopify.shop == "hookedonglam.myshopify.com") 
    {
        var meta = {"product":{"id":__st.rid}};

        //console.log((meta.product && meta.product.id)?meta.product.id:'');
    }
    if (Shopify.shop == "carboneclothes2.myshopify.com") 
    {
        var meta = {"product":{"id":__st.rid}};

        //console.log((meta.product && meta.product.id)?meta.product.id:'');
    }
    if (Shopify.shop == "sancta-maria-epl.myshopify.com") 
    {
        var meta = {"product":{"id":__st.rid}};

        //console.log((meta.product && meta.product.id)?meta.product.id:'');
    }
    if (Shopify.shop == "escape-accessories-2021.myshopify.com") 
    {
        var meta = {"product":{"id":__st.rid}};

        //console.log((meta.product && meta.product.id)?meta.product.id:'');
    }
    if (Shopify.shop == "glamkart-india.myshopify.com") 
    {
        var meta = {"product":{"id":__st.rid}};

        //console.log((meta.product && meta.product.id)?meta.product.id:'');
    }
    if (Shopify.shop == "store-webook.myshopify.com") 
    {
        var meta = {"product":{"id":__st.rid}};

        //console.log((meta.product && meta.product.id)?meta.product.id:'');
    }
    if (Shopify.shop == "slinger-8108.myshopify.com") 
    {
        var meta = {"product":{"id":__st.rid}};

        //console.log((meta.product && meta.product.id)?meta.product.id:'');
    }
    if (Shopify.shop == "vitapur-home-cz.myshopify.com") 
    {
        var meta = {"product":{"id":__st.rid}};

        //console.log((meta.product && meta.product.id)?meta.product.id:'');
    }
    if (Shopify.shop == "buyur-ltd.myshopify.com") 
    {
        var meta = {"product":{"id":__st.rid}};

        //console.log((meta.product && meta.product.id)?meta.product.id:'');
    }
    if (Shopify.shop == "cengiz-akturk-shop.myshopify.com") 
    {
        var meta = {"product":{"id":__st.rid}};

        //console.log((meta.product && meta.product.id)?meta.product.id:'');
    }
    if (Shopify.shop == "kina-tam.myshopify.com") 
    {
        var meta = {"product":{"id":__st.rid}};

        //console.log((meta.product && meta.product.id)?meta.product.id:'');
    }
    if (Shopify.shop == "osim-germany.myshopify.com") 
    {
        var meta = {"product":{"id":__st.rid}};

        //console.log((meta.product && meta.product.id)?meta.product.id:'');
    }
    if (Shopify.shop == "www-minkymyles-com.myshopify.com") 
    {
        var meta = {"product":{"id":__st.rid}};

        //console.log((meta.product && meta.product.id)?meta.product.id:'');
    }
    if (Shopify.shop == "simplemerit-store.myshopify.com") 
    {
        var meta = {"product":{"id":__st.rid}};

        //console.log((meta.product && meta.product.id)?meta.product.id:'');
    }
    if (Shopify.shop == "monnarc.myshopify.com") 
    {
        var meta = {"product":{"id":__st.rid}};

        //console.log((meta.product && meta.product.id)?meta.product.id:'');
    }
    if (Shopify.shop == "geschenkplaza.myshopify.com") 
    {
        var meta = {"product":{"id":__st.rid}};

        //console.log((meta.product && meta.product.id)?meta.product.id:'');
    }
    if (Shopify.shop == "todoentregas.myshopify.com") 
    {
        var meta = {"product":{"id":__st.rid}};

        //console.log((meta.product && meta.product.id)?meta.product.id:'');
    }
    if (Shopify.shop == "pradic1212.myshopify.com") 
    {
        var meta = {"product":{"id":__st.rid}};

        //console.log((meta.product && meta.product.id)?meta.product.id:'');
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
        /*$jq321("head").append(
            '<style type="text/css">' + 
            '.visitor-counter-content-box-carecartbysalespop-2020 {margin-top: -21px !important;}' +
            '</style>'
           );*/

        //customSelctor = $jq321(".centering");

        customSelctor = $jq321(".product-form__buttons");
        finalSelector = customSelctor[0];
    }

    if (Shopify.shop == "nomardic-nl.myshopify.com")
    {
        customSelctor = $jq321(".ProductForm__AddToCart");
        finalSelector = customSelctor[0];

        console.log(finalSelector);
    }

    /* if (Shopify.shop == "nomardic-nl.myshopify.com")
    {
        customSelctor = $jq321(".ProductForm__Variants");
        finalSelector = customSelctor[0];
    } */

    if (Shopify.shop == "nomardic-de.myshopify.com")
    {
        customSelctor = $jq321(".ProductForm__AddToCart");
        finalSelector = customSelctor[0];

        console.log(finalSelector);
    }

    /* if (Shopify.shop == "nomardic-de.myshopify.com")
    {
        customSelctor = $jq321(".ProductForm__Variants");
        finalSelector = customSelctor[0];
    } */

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

    if (Shopify.shop == "anycar-seatcovers.myshopify.com")
    {
        customSelctor = $jq321("#button-cart").parent();
        finalSelector = customSelctor[0];
    }

    if (Shopify.shop == "awatchstrap.myshopify.com")
    {
        customSelctor = $jq321(".product-single__add-to-cart");
        finalSelector = customSelctor[0];
    }

    if (Shopify.shop == "bybaanoo.myshopify.com")
    {
        customSelctor = $jq321("#m-1616496444433");
        finalSelector = customSelctor[0];
        console.log(finalSelector);
    }

    if (Shopify.shop == "watchis01.myshopify.com")
    {
        customSelctor = $jq321(".main-product__block-price");
        finalSelector = customSelctor[0];
        console.log(finalSelector);
    }

    if (Shopify.shop == "shoesaaa.myshopify.com")
    {
        customSelctor = $jq321(".product-form__buttons");
        finalSelector = customSelctor[0];
        console.log(finalSelector);
    }

    if (Shopify.shop == "bruzix.myshopify.com")
    {
        customSelctor = $jq321(".main-product__block-tax");
        finalSelector = customSelctor[0];
        console.log(finalSelector);
    }

    if (Shopify.shop == "street-strider.myshopify.com")
    {
        customSelctor = $jq321(".tab-1-product__actions");
        finalSelector = customSelctor[0];
        console.log(finalSelector);
    }

    if (Shopify.shop == "orianne-berlin.myshopify.com")
    {
        $jq321("head").append(
            '<style type="text/css">' + 
            '.visitor-counter-content-box-carecartbysalespop-2020 {margin-top: -13px !important;}' +
            '</style>'
           );
    }

    if (Shopify.shop == "usesthetics.myshopify.com")
    {
        customSelctor = $jq321(".product-form__buttons");
        finalSelector = customSelctor[0];
        console.log(finalSelector);
    }

    if (Shopify.shop == "deluri.myshopify.com")
    {
        customSelctor = $jq321(".product-single__add-to-cart");
        finalSelector = customSelctor[0];
    }

    if (Shopify.shop == "vintagetrainers.myshopify.com")
    {
        $jq321("head").append(
            '<style type="text/css">' + 
            '.product-block{margin-bottom: 0px !important;}' +
            '.sales-points{margin-bottom:0px !important;}' +
            '.visitor-counter-content-box-carecartbysalespop-2020{height:auto !important;}'+
            '</style>'
           );

        customSelctor = $jq321(".sales-point");
        finalSelector = customSelctor[2];
    }

    if (Shopify.shop == "socratetraining.myshopify.com")
    {
        customSelctor = $jq321("#AddToCart");
        finalSelector = customSelctor[0];

        console.log(customSelctor);
    }

    if (Shopify.shop == "pimuraempire.myshopify.com")
    {
        customSelctor = $jq321(".pf-97_");
        finalSelector = customSelctor[0];

        console.log(customSelctor);
    }

    if (Shopify.shop == "vintageheavensgate1.myshopify.com")
    {
        customSelctor = $jq321("#AddToCart");
        finalSelector = customSelctor[0];

        console.log(customSelctor);
    }

    if (Shopify.shop == "medici-supply-co.myshopify.com")
    {
        customSelctor = $jq321(".add-to-cart");
        finalSelector = customSelctor[0];

        console.log(customSelctor);
    }

    if (Shopify.shop == "wrywryshop.myshopify.com")
    {
        customSelctor = $jq321(".ProductForm__Variants");
        finalSelector = customSelctor[0];

        console.log(customSelctor);
    }

    if (Shopify.shop == "amamibijoux.myshopify.com")
    {
        customSelctor = $jq321(".product__title");
        finalSelector = customSelctor[0];

        console.log(customSelctor);
    }

    if (Shopify.shop == "metaphysicalonlineshop.myshopify.com")
    {
        customSelctor = $jq321(".product-single__add-to-cart");
        finalSelector = customSelctor[0];

        console.log(customSelctor);
    }

    if (Shopify.shop == "combadepalo.myshopify.com")
    {
        customSelctor = $jq321(".product__title");
        finalSelector = customSelctor[0];

        console.log(customSelctor);
    }

    if (Shopify.shop == "la-porta-dei-sapori.myshopify.com")
    {
        customSelctor = $jq321("h1");
        finalSelector = customSelctor[0];

        console.log(customSelctor);
    }

    if (Shopify.shop == "nlmilamaya.myshopify.com")
    {
        customSelctor = $jq321(".add-to-cart");
        finalSelector = customSelctor[0];

        console.log(customSelctor);
    }

    if (Shopify.shop == "ohmepretty.myshopify.com")
    {
        customSelctor = $jq321("#AddToCart--template--15150626898052__main");
        finalSelector = customSelctor[0];

        console.log(customSelctor);
    }

    if (Shopify.shop == "vitapur-stage-store.myshopify.com")
    {
        $jq321("head").append(
            '<style type="text/css">' + 
            '.visitor-counter-content-box-carecartbysalespop-2020{ height: auto !important; margin-top: 0 !important; }' +
            '</style>'
           );

        customSelctor = $jq321(".product__title");
        finalSelector = customSelctor[0];

        //console.log(customSelctor);
    }

    if (Shopify.shop == "vitapur-romania.myshopify.com")
    {
        $jq321("head").append(
            '<style type="text/css">' + 
            '.visitor-counter-content-box-carecartbysalespop-2020{ height: auto !important; margin-top: 0 !important; }' +
            '</style>'
           );

        customSelctor = $jq321(".product__title");
        finalSelector = customSelctor[0];

        //console.log(customSelctor);
    }

    if (Shopify.shop == "vitapur-sk.myshopify.com")
    {
        $jq321("head").append(
            '<style type="text/css">' + 
            '.visitor-counter-content-box-carecartbysalespop-2020{ height: auto !important; margin-top: 0 !important; }' +
            '</style>'
           );

        customSelctor = $jq321(".product__title");
        finalSelector = customSelctor[0];

        //console.log(customSelctor);
    }

    if (Shopify.shop == "spruce-plant-shop.myshopify.com")
    {
        customSelctor = $jq321(".ProductForm__AddToCart");
        finalSelector = customSelctor[0];

        console.log(customSelctor);
    }

    if (Shopify.shop == "spakopen.myshopify.com")
    {
        customSelctor = $jq321(".product-form__controls-group");
        finalSelector = customSelctor[0];

        console.log(customSelctor);
    }

    if (Shopify.shop == "norwegian-biolabs.myshopify.com")
    {
        customSelctor = $jq321("#r-1661279304876");
        finalSelector = customSelctor[0];

        console.log(customSelctor);
    }

    if (Shopify.shop == "zhouweiwei0502.myshopify.com")
    {
        customSelctor = $jq321(".pf-35_");
        finalSelector = customSelctor[0];

        console.log(customSelctor);
    }

    if (Shopify.shop == "nomardic-com.myshopify.com")
    {
        customSelctor = $jq321(".ProductForm__AddToCart");
        finalSelector = customSelctor[0];

        console.log(customSelctor);
    }

    if (Shopify.shop == "protectich.myshopify.com")
    {
        customSelctor = $jq321(".product__tax");
        finalSelector = customSelctor[0];

        console.log(customSelctor);
    }

    if (Shopify.shop == "mirable-life.myshopify.com")
    {
        customSelctor = $jq321(".pf-360_");
        finalSelector = customSelctor[0];

        console.log(customSelctor);
    }

    if (Shopify.shop == "viryaws.myshopify.com")
    {
        customSelctor = $jq321(".quickview_plus_minus");
        finalSelector = customSelctor[0];

        console.log(customSelctor);
    }

    if (Shopify.shop == "oostduits.myshopify.com")
    {
        customSelctor = $jq321(".product-single__add-to-cart");
        finalSelector = customSelctor[0];

        console.log(customSelctor);
    }

    if (Shopify.shop == "direct-flamingo.myshopify.com")
    {
        customSelctor = $jq321("#shopify-section-announcement-bar");
        finalSelector = customSelctor[0];

        console.log(customSelctor);
    }

    if (Shopify.shop == "hookedonglam.myshopify.com")
    {
        customSelctor = $jq321(".product__atc");
        finalSelector = customSelctor[0];

        console.log(customSelctor);
    }

    if (Shopify.shop == "carboneclothes2.myshopify.com")
    {
        customSelctor = $jq321(".pf-c");
        finalSelector = customSelctor[3];

        console.log(customSelctor);
    }

    if (Shopify.shop == "sancta-maria-epl.myshopify.com")
    {
        $jq321("head").append(
            '<style type="text/css">' + 
            '.visitor-counter-content-box-carecartbysalespop-2020 {display: block !important;}' +
            '#effectiveAppsProductVisitorsCounterElement, .visitor-counter-content-box-carecartbysalespop-2020, .visitor-left {display: block!important; }' +
            '</style>'
           );

        customSelctor = $jq321(".prd-block_actions");
        finalSelector = customSelctor[0];

        console.log(customSelctor);
    }

    if (Shopify.shop == "escape-accessories-2021.myshopify.com")
    {
        customSelctor = $jq321(".product-form__buttons");
        finalSelector = customSelctor[0];

        console.log(customSelctor);
    }

    if (Shopify.shop == "glamkart-india.myshopify.com")
    {
        customSelctor = $jq321(".btns_group_1");
        finalSelector = customSelctor[0];

        console.log(customSelctor);
    }

    if (Shopify.shop == "store-webook.myshopify.com")
    {
        $jq321("head").append(
            '<style type="text/css">' + 
            '.sales-points{margin-bottom: 0px !important;}' +
            '.product-block--sales-point+.product-block--sales-point{margin-bottom: 0 !important;}' +
            '.visitor-counter-content-box-carecartbysalespop-2020{margin-top: 0 !important;}' +
            '</style>'
           );
    }

    if (Shopify.shop == "slinger-8108.myshopify.com")
    {
        customSelctor = $jq321(".stock-top");
        finalSelector = customSelctor[0];

        console.log(customSelctor);
    }

    if (Shopify.shop == "vitapur-home-cz.myshopify.com")
    {
        $jq321("head").append(
            '<style type="text/css">' + 
            '.visitor-counter-content-box-carecartbysalespop-2020{  height: auto !important; margin-top: 0 !important; }' +
            '</style>'
           );

        customSelctor = $jq321(".product__title");
        finalSelector = customSelctor[0];

        console.log(customSelctor);
    }

    if (Shopify.shop == "buyur-ltd.myshopify.com")
    {
        customSelctor = $jq321(".product-form__payment-container");
        finalSelector = customSelctor[0];

        console.log(customSelctor);
    }

    if (Shopify.shop == "cengiz-akturk-shop.myshopify.com")
    {
        customSelctor = $jq321(".product__submit__buttons");
        finalSelector = customSelctor[0];

        console.log(customSelctor);
    }

    if (Shopify.shop == "kina-tam.myshopify.com")
    {
        customSelctor = $jq321("div[data-block-type|='low-stock']");
        finalSelector = customSelctor[0];

        console.log(customSelctor);
    }

    if (Shopify.shop == "osim-germany.myshopify.com")
    {
        customSelctor = $jq321(".flex");
        finalSelector = customSelctor[0];

        console.log(customSelctor);
    }

    if (Shopify.shop == "www-minkymyles-com.myshopify.com")
    {
        customSelctor = $jq321(".product-form__buttons");
        finalSelector = customSelctor[0];

        console.log(customSelctor);
    }

    if (Shopify.shop == "simplemerit-store.myshopify.com")
    {
        customSelctor = $jq321(".product-single__add-to-cart");
        finalSelector = customSelctor[0];

        console.log(customSelctor);
    }

    if (Shopify.shop == "monnarc.myshopify.com")
    {
        customSelctor = $jq321(".payment-and-quantity");
        finalSelector = customSelctor[0];

        console.log(customSelctor);
    }

    if (Shopify.shop == "todoentregas.myshopify.com")
    {
        $jq321("head").append(
            '<style type="text/css">' + 
            '.visitor-counter-content-box-carecartbysalespop-2020{ height: 17px !important;}'+
            '.counter-text-carecartbysalespop-2020{min-height:10px !important;}' +
            '.product-single__add-to-cart{margin-bottom:0px !important}' +
            '</style>'
           );
    }

    if (Shopify.shop == "pradic1212.myshopify.com")
    {
        customSelctor = $jq321(".product-single__add-to-cart");
        finalSelector = customSelctor[0];

        console.log(customSelctor);
    }

    function visitorCounter(responseVisitor) 
    {
        var selectorVisitor1 = $jq321("form[action='/cart/add']").find("button[type='submit'],input[type='submit']").parent();
        var selectorVisitor2 = $jq321("form[action='/cart/add']");
        var selectorVisitor3 = $jq321("form[action='/cart/add']:first").find("button[type='submit'],input[type='submit']");
        var selectorVisitor4 = $jq321("form[action='/cart/add']:first");
        
        if (responseVisitor.above_cart == 1)
        {
            /* if (Shopify.shop == "www-minkymyles-com.myshopify.com")
            {
                $jq321(responseVisitor.view).insertBefore(".ak_review_product");
            }
            else */ 
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
            /* if (Shopify.shop == "www-minkymyles-com.myshopify.com")
            {
                $jq321(responseVisitor.view).insertAfter(".ak_review_product");
            }
            else */ 
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
        /*if(Shopify.shop == "usesthetics.myshopify.com")
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
        }*/

        if (Shopify.shop == "mysweetsmileco.myshopify.com") {
            $jq321("body").append('<style style="text/css">.visitor-counter-content-box-carecartbysalespop-2020 {margin-top: -24px !important}</style>');
        }
    
        $jq321('n').html(function(i, v){
            return v.replace(/(\d)/g, '<span '+responseVisitor.count+'>$1</span>');
        });
    }

    // ---------------------------------- <VISITOR COUNTER MODULE> --------------------------------

  });
