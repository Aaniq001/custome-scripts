<?php

use PHPShopify\Exception\ApiException;

defined('BASEPATH') or exit('No direct script access allowed');

require APPPATH . 'third_party/shopify/vendor/autoload.php';
// require_once(APPPATH . 'libraries/smtp_validateEmail.class.php');
//require_once(APPPATH . 'libraries/VerifyEmailService.php');
require FCPATH . 'vendor/autoload.php';

class DashboardTwo extends CI_Controller
{
    public function __construct()
    {

        parent::__construct();
        //$this->load->model('DashboardModel');
        //$this->load->model('store_model');
        //		$config = array(
        //
        //			'ShopUrl' => 'freeshippingbar2.myshopify.com',
        //
        //			'ApiKey' => 'fcd0630c34b8e20883ff2eeb8c2364f1',
        //
        //			'SharedSecret' => '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',
        //
        //		);
        //
        //
        //		PHPShopify\ShopifySDK::config($config);
    }

    public function index()
    {
        $shop = 'j-antoinette-1927.myshopify.com';
        $token = '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';

        $config = array(
            'ShopUrl' => $shop,
            'AccessToken' => $token,
        );
        $shopify = new PHPShopify\ShopifySDK($config);

        $string = "(GMT-05:00) America/New_York";//$storeInfo['timezone'];
        $until = substr($string, 0, strrpos($string . ",", ")"));
        $timezone = substr(strstr($until, '(GMT'), strlen('(GMT'));

        $datetime = date('Y-m-d H:i:s', strtotime('today - 30 days'));
        $datetime = str_replace(" ", "T", $datetime);

        $params = array(
            'status' => 'any',
            'created_at_min' => $datetime . $timezone,
            // 'fields' => 'line_items'
        );
        $orderData = $shopify->Order->get($params);
        echo '<pre>';
        print_r($orderData);die;

        $quantity = 0;
        $product_id = 6999324164268;
        foreach ($orderData as $srow) {
            $itemsData = $srow['line_items'];
            foreach ($itemsData as $refData) {
                if (($refData['product_id'] == $product_id)) {
                    $quantity = $quantity + $refData['quantity'];
                }
            }
        }
        echo $quantity;die;

        $shop = 'j-antoinette-1927.myshopify.com';
        $token = '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';

        $config = array(
            'ShopUrl' => $shop,
            'AccessToken' => $token,
        );

        $shopify = new PHPShopify\ShopifySDK($config);
        $params = array(
            'status' => 'any',
            'created_at_min' => "2022-03-12T00:00:00-04:00", 
            // 'created_at_max' => "2022-03-07T23:59:59-04:00",
            'limit' => 100,
        );
        // echo '<pre>';print_r($params);die;

        $orders = $shopify->Order->get($params);
        echo '<pre>';print_r($orders);die;

        //		foreach ($orders as $row) {
        //			echo $row['id'].' '.$row['total_price'].'<br>';
        //		}
    }

    public function test()
    {
        echo 'welcome';
    }

    public function auth()
    {
        //$redirect_url = $this->config->item('redirect_url'); //redirect url
        $scopes = 'read_products,read_script_tags,write_script_tags,read_orders';
        //This is also valid
        $redirectUrl = 'http://mrf.com/dashboard/connected';
        \PHPShopify\AuthHelper::createAuthRequest($scopes, $redirectUrl);
    }

    public function connected()
    {
        $accessToken = \PHPShopify\AuthHelper::getAccessToken();
        exit($accessToken);
    }

    public function checkWebHooks()
    {
        $shop = 'mateen-store1122.myshopify.com';
        $token = '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';

        $config = array(
            'ShopUrl' => $shop,
            'AccessToken' => $token,
        );

        $shopify = new PHPShopify\ShopifySDK($config);
        // $shopify->Webhook(1129650585819)->delete();
        // exit();

        $shopify->Webhook->post(array(
            'topic' => 'orders/create',
            'address' => 'https://uat-salespop.carecart.io/shopifyWebhooks/createOrder/',
            'format' => 'json'
        ));
        $allWebhooks = $shopify->Webhook->get();
        echo '<pre>';
        print_r($allWebhooks);
    }

    public function getProducts()
    {
        ini_set('max_execution_time', '0');
        ini_set('memory_limit', '-1');

        $config = array(
            'ShopUrl' => 'hsworldus.myshopify.com',
            'AccessToken' => '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',
        );

        $shopify = new PHPShopify\ShopifySDK($config);

        $data = array();
        $lastId = 1;
        do {
            $productOption = array(
                'limit' => 250,
                'since_id' => $lastId
            );

            $allProducts = $shopify->Product->get($productOption);
            //$data = array_merge($data, $allProducts);

            $lastId = end($allProducts)['id'];
        } while (sizeof($allProducts) > 0);

        echo '<pre>';
        print_r($data);
        exit();
        $allTimerProducts = array();
        foreach ($data as $row) {
            $allTimerProducts[] = array('store_id' => 14555622, 'product_id' => $row['id']);
        }
        //		echo '<pre>';
        //		print_r($allTimerProducts);exit();
        $result = $this->DashboardModel->insertStockProducts($productOption);
        echo $result . ' Rows inserted';
        exit();
    }

    public function compareAbandonedCarts()
    {
        //		$shop = 'western-safety-sign.myshopify.com';
        //		$shopDetails = $this->DashboardModel->getStore($shop);
        //
        //
        //		if (empty($shopDetails)) {
        //			exit('Record not found from DB against this shop');
        //		}

        $config = array(
            'ShopUrl' => 'ollois.myshopify.com',
            'AccessToken' => '5078af36b8e24586a727231f70110c67',
        );

        $params = array(
            'status' => 'any',
            'created_at_min' => '2021-08-20T00:00:00-04:00', //'2018-11-07T00:00:00-04:00',
            'limit' => '250',
        );

        $shopify = new PHPShopify\ShopifySDK($config);
        $abandonedCarts = $shopify->AbandonedCheckout->get($params);

        echo '<pre>';
        print_r($abandonedCarts);
        exit();

        if (empty($abandonedCarts)) {
            exit('From Shopify No Abandoned carts found against this store');
        }

        $isMatch = false;
        foreach ($abandonedCarts as $carts) {

            if (empty($carts['email'])) {
                continue;
            }

            $checkWhere = array('store_id' => $shopDetails['id'], 'email' => $carts['email']);
            $results = $this->DashboardModel->checkCartExist($checkWhere);

            if (empty($results)) {
                echo 'Carts ID => ' . $carts['id'] . '<br>';
                echo 'Customer Email => ' . $carts['email'] . '<br>';
                echo 'Created_at => ' . $carts['created_at'] . '<br>';
                echo 'Updated_at => ' . $carts['updated_at'] . '<br>';
                echo '=======================================<br>';
                $isMatch = true;
            }
            continue;
        }

        if (!$isMatch) {
            echo 'All cart compared but not single one missing, Thanks';
        }
        exit();
    }

    public function getScript()
    {
        //https://cdn.jsdelivr.net/gh/carecartapp/app-wheelify@2.0.26/spinner.min.js
        //https://app-spinner.carecart.io/library/carecartSpinnerApp.js
        //$shopify->ScriptTag(209301307629)->delete();
        //https://app.carecart.io/api/abandoned-cart/js-script
        //https://app.carecart.io/api/abandoned-cart/global-js
        //https://app-spinner.carecart.io/library/carecartSpinnerApp.js
        //https://dev-sales-pop.carecart.io/lib/salesnotifier.js
        //https://sales-pop.carecart.io/lib/salesnotifier.js

        $shop = 'healthybud-us.myshopify.com';
        $token = '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';

        $config = array(
            'ShopUrl' => $shop,
            'AccessToken' => $token,
        );
        $shopify = new PHPShopify\ShopifySDK($config);
        
        //$srData = array('event' => 'onload', 'src' => 'https://sales-pop.carecart.io/lib/salesnotifier.js');
        //$srData = array('event' => 'onload', 'src' => 'https://cdn.jsdelivr.net/gh/carecartapp/custome-scripts@1.8.31/sales-pop/customization-salesnotifier.js');
        
        $srData = array('event' => 'onload', 'src' => 'https://spicy-eel-65.telebit.io/scripts/spinner/new-ui-careCartAppSpinner.js');

        //$srData = array('event' => 'onload', 'src' => 'https://cdn.jsdelivr.net/gh/carecartapp/custome-scripts@1.5.59/visitor/custom-location-visitor.js');
        //$srData = array('event' => 'onload', 'src' => 'https://young-chicken-33.telebit.io/scripts/visitor/custom-location-visitor.js');
        //$srData = array('event' => 'onload', 'src' => 'https://app-visitor-counter.carecart.io/lib/visitorcounter.js');

        //$srData = array('event' => 'onload', 'src' => 'https://app-spinner.carecart.io/library/carecartSpinnerApp.js');
        //$srData = array('event' => 'onload', 'src' => 'https://young-chicken-33.telebit.io/scripts/spinner/new-ui-careCartAppSpinner.js');
        //$srData = array('event' => 'onload', 'src' => 'https://cdn.jsdelivr.net/gh/carecartapp/custome-scripts@1.5.66/spinner/new-ui-careCartAppSpinner.js');
        
        //$srData = array('event' => 'onload', 'src' => 'https://app-countdown-pro.carecart.io/lib/stockcountdown.js');
        //$srData = array('event' => 'onload', 'src' => 'https://young-chicken-33.telebit.io/scripts/stock/multi-language-stockc.js');
        //$srData = array('event' => 'onload', 'src' => 'https://cdn.jsdelivr.net/gh/carecartapp/custome-scripts@1.5.67/stock/multi-language-stockc.js');

        //$allScript = $shopify->ScriptTag(224833044781)->delete();
        
        $allScript = $shopify->ScriptTag->post($srData);

        //$allScript = $shopify->ScriptTag->get();
        
        echo "<pre>";
        print_r($allScript);
        exit;
    }

    function fetchOrders_old()
    {
        date_default_timezone_set('UTC');
        $date = date("Y-m-d H:i:s", strtotime("2021-08-31T21:39:07-04:00"));

        $shop = 'email-campaigns.myshopify.com';
        $token = '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';
        $storeID = 58307051672;

        $config = array(
            'ShopUrl' => $shop,
            'AccessToken' => $token,
        );

        $shopify = new PHPShopify\ShopifySDK($config);

        $params = array(
            'status' => 'any',
            'created_at_min' => date('Y-m-d', strtotime('today -60 days')) . 'T00:00:00-04:00',
            // 'created_at_min' => "2021-11-19 T00:00:00-04:00", //date('Y-m-d', strtotime('2021-10-04 00:00:00')).'T00:00:00-04:00',
            // 'created_at_max' => "2021-11-21 T23:59:59-04:00", //date('Y-m-d', strtotime('2021-10-04 23:59:59')).'T00:00:00-04:00',
            'limit' => 250
        );

        $allOrders = $shopify->Order->get($params);
        echo '<pre>';
        print_r($allOrders);
        die();

        $allSQL = array();
        foreach ($allOrders as $order) {
            $flag  = true;
            $sql = 'INSERT INTO tbl_salespop(store_id,product_id,product_title,product_image,product_handle,customer_name,location,order_generated_time) VALUES ';
            foreach ($order["line_items"] as $key => $items) {
                if (empty($items['product_id'])) {
                    $flag = false;
                    continue;
                }
                $date = date("Y-m-d H:i:s", strtotime($order["created_at"]));
                $sql .= ' (' . $storeID . ',' . $items['product_id'] . ',' . "'" . $items['title'] . "'" . ',"","","' . $order["customer"]["default_address"]["first_name"] . $order["customer"]["default_address"]["last_name"] . '","' . $order["customer"]["default_address"]["city"] . $order["customer"]["default_address"]["country"] . '","' . $date . '"),';
            }
            if ($flag) {
                $sql = rtrim($sql, ',');
                $allSQL[] = $sql;
            }
            $sql = '';
        }

        echo '<pre>';
        print_r($allSQL);
        die();
        if (empty($allOrders)) {
            return;
        } else {
            $dataArray = array();

            foreach ($allOrders as $row) {
                $saveData = array(
                    'store_id' => $storeID,
                    'order_id' => (isset($row['id']) ? $row['id'] : ''),
                    'order_token' => (isset($row['token']) ? $row['token'] : ''),
                    'cart_token' => (isset($row['cart_token']) ? $row['cart_token'] : ''),
                    'total_price' => (isset($row['total_price']) ? $row['total_price'] : ''),
                    'subtotal_price' => (isset($row['subtotal_price']) ? $row['subtotal_price'] : ''),
                    'gateway' => (isset($row['gateway']) ? $row['gateway'] : ''),
                    'financial_status' => (isset($row['financial_status']) ? $row['financial_status'] : ''),
                    'customer_name' => (isset($row['customer']['first_name']) ? $row['customer']['first_name'] : '') . ' ' . (isset($row['customer']['last_name']) ? $row['customer']['last_name'] : ''),
                    'customer_email' => (isset($row['customer']['email']) ? $row['customer']['email'] : ''),
                    'customer_phone' => (isset($row['customer']['phone']) ? $row['customer']['phone'] : ''),
                    'customer_city' => (isset($row['customer']['default_address']) ? $row['customer']['default_address']['city'] : $row['customer']['city']),
                    'customer_country' => (isset($row['customer']['default_address']) ? $row['customer']['default_address']['country'] : $row['customer']['country']),
                    'created_at' => date("Y-m-d H:i:s", strtotime($row['created_at'])),
                    'updated_at' => date("Y-m-d H:i:s", strtotime($row['updated_at'])),
                    'line_items' => $row['line_items']
                );

                $dataArray[] = $saveData;
                //$this->saveOrder($saveData, $storeID);
            }
        }
    }

    function fetchOrders()
    {
        $shop = $this->input->post("url");
        if (!isset($shop) && empty($shop)) {
            return;
        }
        $response = $this->store_model->getShop(array("url" => $shop));
        if (empty($response)) {
            return;
        }

        $config = array(
            'ShopUrl' => $shop,
            'AccessToken' => $response["access_token"],
        );
        $storeID = $response["store_id"];

        $shopify = new PHPShopify\ShopifySDK($config);
        $params = array(
            'status' => 'any',
            'created_at_min' => date('Y-m-d', strtotime('today - 60 days')) . 'T00:00:00-04:00',
            'limit' => 100
        );
        $allOrders = $shopify->Order->get($params);

        if (empty($allOrders)) {
            return;
        } else {
            $dataArray = array();
            foreach ($allOrders as $row) {
                $saveData = array(
                    'store_id' => $storeID,
                    'order_id' => (isset($row['id']) ? $row['id'] : ''),
                    'customer_name' => (isset($row['customer']['first_name']) ? $row['customer']['first_name'] : '') . ' ' . (isset($row['customer']['last_name']) ? $row['customer']['last_name'] : ''),
                    'customer_city' => (isset($row['customer']['default_address']) ? $row['customer']['default_address']['city'] : $row['customer']['city']),
                    'customer_country' => (isset($row['customer']['default_address']) ? $row['customer']['default_address']['country'] : $row['customer']['country']),
                    'created_at' => date("Y-m-d H:i:s", strtotime($row['created_at'])),
                    'line_items' => $row['line_items']
                );
                $dataArray[] = $saveData;
            }
        }

        $getAllOrdersIds = $this->store_model->getOnlyOrderIds(array("store_id" => $storeID));
        $onlyOrderIds = array();
        foreach ($getAllOrdersIds as $ID) {
            $onlyOrderIds[] = $ID["order_id"];
        }

        $sqlArray = array();
        foreach ($dataArray as $data) {
            $firstQuery = '';
            $secondQuery = '';
            $thirdQuery = '';

            if (in_array($data["order_id"], $onlyOrderIds)) {
                continue;
            }

            if (empty($responseOfOrder)) {
                $thirdQuery = "INSERT INTO tbl_reference (product_id,notification_id,store_id,notification_type,location,status) VALUES ";
                $flag = false;
                $orderProducts = $data["line_items"];

                foreach ($orderProducts as $products) {
                    if (!empty($products['product_id'])) {
                        $flag = true;
                        $thirdQuery .= "(" . $products['product_id'] . ",@last_id," . $storeID . ",'Sync','" . (isset($data['customer_city']) ? $data['customer_city'] : '') . ' ' . (isset($data['customer_country']) ? $data['customer_country'] : '') . "',1),";
                    }
                }

                if ($flag) {
                    $firstQuery = "INSERT INTO tbl_notifications (store_id,order_id,customer_name,notification_type,order_generated_time,product_type,location_type) VALUES(" . $storeID . "," . $data['order_id'] . ",'" . $data['customer_name'] . "','Sync','" . $data["created_at"] . "','all','manual');";
                    $secondQuery = "SET @last_id := (SELECT LAST_INSERT_ID());";
                    $thirdQuery = rtrim($thirdQuery, ',');
                    $sqlArray[] = $firstQuery;
                    $sqlArray[] = $secondQuery;
                    $sqlArray[] = $thirdQuery;
                }
            }
        }

        if (!empty($sqlArray)) {
            $this->store_model->insertAllOrders($sqlArray);
        }
    }

    public function saveOrder($saveData, $storeID)
    {
        $saveNotification = array(
            'store_id' => $storeID,
            'order_id' => $saveData['order_id'],
            'customer_name' => $saveData['customer_name'],
            'notification_type' => 'Sync',
            'product_type' => 'all',
            'location_type' => 'manual'
        );
        $notiData = $this->store_model->getSpecificRecords('tbl_notifications', $saveNotification);

        $saveNotification['order_generated_time'] = $saveData['created_at'];

        if (empty($notiData)) {
            $notification_id = $this->store_model->saveRecords('tbl_notifications', $saveNotification);
        } else {
            $notification_id = $this->store_model->updateRecords('tbl_notifications', array('id' => $notiData[0]['id']), $saveNotification);
            $data["text"] = $notiData[0]['id'];
        }


        $itemsData = $saveData['line_items'];
        foreach ($itemsData as $refData) {
            $refWhere = array('store_id' => $storeID, 'product_id' => $refData['product_id'], 'notification_type' => 'Sync', 'notification_id' => $notification_id);
            $notiRef = $this->store_model->getSpecificRecords('tbl_reference', $refWhere);
            $saveDataRef = array(
                'product_id' => $refData['product_id'],
                'notification_id' => $notification_id,
                'store_id' => $storeID,
                'notification_type' => 'Sync',
                'location' => $saveData['customer_city'] . ', ' . $saveData['customer_country'],
                'status' => 1
            );
            if (!empty($refData['product_id'])) {
                if (empty($notiRef)) {
                    $this->store_model->saveRecords('tbl_reference', $saveDataRef);
                } else {
                    $this->store_model->updateRecords('tbl_reference', $refWhere, $saveDataRef);
                }
            }
        }

        $whereStore = array('store_id' => $storeID);
        $notificationData = $this->store_model->getSpecificRecords('tbl_notifications', $whereStore);
        foreach ($notificationData as $dataRow) {
            $whereArray = array('notification_id' => $dataRow['id']);
            $dataRef = $this->store_model->getSpecificRecords('tbl_reference', $whereArray);
            if (empty($dataRef)) {
                $this->store_model->deleteRecords('tbl_notifications', array('id' => $dataRow['id']));
            }
        }
    }

    public function ipInfoCareCart()
    {
        ini_set('max_execution_time', '0');
        ini_set('memory_limit', '-1');

        $allIps = $this->DashboardModel->getAllStores();

        $gloabalArray = array();
        $singleArray = array();
        foreach ($allIps as $row) {
            $purpose = "country";
            $ip = $row['ip'];
            $countryName = @json_decode(file_get_contents("http://www.geoplugin.net/json.gp?ip=" . $ip));
            echo $countryName;
            exit();

            $output = NULL;

            $countryName = '';
            $support = array("country", "countrycode", "state", "region", "city", "location", "address");
            if (filter_var($ip, FILTER_VALIDATE_IP) && in_array($purpose, $support)) {
                $ipdat = @json_decode(file_get_contents("http://www.geoplugin.net/json.gp?ip=" . $ip));
                $countryName = @$ipdat->geoplugin_countryName;
                echo $countryName;
                exit();
            }

            if ($countryName == 'Pakistan') {
                echo 'URL => ' . $row['Shop'];
                $singleArray[] = $row;
            }
            //Pakistan store ID
            //Number of time IP
        }

        echo '<pre>';
        print_r($singleArray);
    }

    public function getCollection()
    {
        $config = array(
            'ShopUrl' => 'onaie.myshopify.com',
            'AccessToken' => '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',
        );

        $shopify = new PHPShopify\ShopifySDK($config);


        $smartCollections = $shopify->SmartCollection->get(array("limit" => 250));
        $customCollections = $shopify->CustomCollection->get(array("limit" => 250));
        $allCollections = array_merge($smartCollections, $customCollections);


        echo '<pre>';print_r($allCollections);exit;


        $smartCollections = $shopify->SmartCollection->get(array("limit" => 250));
        $customCollections = $shopify->CustomCollection->get(array("limit" => 250));
        $allCollections = array_merge($smartCollections, $customCollections);

        //$allCollections = $shopify->Collection(277849374876)->Product->get(array("limit" => 250));

        $productString = '';
        foreach ($allCollections as $products) {
            $productString .= $products["id"] . ',';
        }
        echo '<pre>';
        print_r($allCollections);
        exit();
        $storeID = 48902766757;
        $saveData = array(
            'store_id' => $storeID,
            'collection_id' => $allCollections['id'],
            'handle' => $allCollections['handle'],
            'title' => $allCollections['title'],
            'updated_at' => $allCollections['updated_at'],
            'published_at' => $allCollections['published_at'],
        );

        $checkWhere = array('collection_id' => $allCollections['id']);
        $updateWhere = array('store_id' => $storeID, 'collection_id' => $allCollections['id']);
        $checkCollectionExist = $this->store_model->checkRecords('tbl_collections', $checkWhere);

        if (empty($checkCollectionExist)) {
            $lastID = $this->store_model->saveRecords('tbl_collections', $saveData);
            //echo $lastID;
        } else {
            $this->store_model->updateRecords('tbl_collections', $updateWhere, $saveData);
        }


        $data = array();
        $lastId = 1;
        do {
            $parameter = array(
                'limit' => 250,
                'since_id' => $lastId
            );

            $allCollections = $shopify->Collection(171278401635)->Product->get($parameter);
            $data = array_merge($data, $allCollections);

            $lastId = end($allCollections)['id'];
        } while (sizeof($allCollections) > 0);

        $productIDs = array();
        foreach ($data as $row) {
            $productIDs[] = $row['id'];
        }

        $this->store_model->updateProductsWithCollection('tbl_products', $storeID, $productIDs);
    }

    public function importAbandonedCheckouts()
    {
        ini_set('memory_limit', '-1');
        ini_set('max_execution_time', '0');

        $config = array(
            'ShopUrl' => 'pretty-parade-boutique.myshopify.com',
            'AccessToken' => 'bfd5cead85d314d194017c7fc5e2f823',
        );

        $params = array(
            'status' => 'any',
            'created_at_min' => '2020-11-11T00:00:00-04:00', //'2018-11-07T00:00:00-04:00',
            'limit' => '250',
            'created_at_max' => '2020-11-12T00:00:00-04:00',
        );

        $shopify = new PHPShopify\ShopifySDK($config);
        $abandonedCarts = $shopify->AbandonedCheckout->get($params);
        echo '<pre>';
        print_r($abandonedCarts);
        exit();

        foreach ($abandonedCarts as $key => $row) {
            if ($row['email'] != NULL && !empty($row['cart_token'])) {
                $cartItem_names = '';
                foreach ($row['line_items'] as $item) {
                    $cartItem_names .= $item['title'] . ',';
                }
                $item_names = rtrim($cartItem_names, ',');

                $saveData = array(
                    'store_id' => 45130,
                    'customer' => gzcompress(base64_encode(serialize($row['customer']))),
                    'email' => $row['email'],
                    'token' => $row['cart_token'],
                    'note' => $row['note'],
                    'attributes' => base64_encode(serialize($row['note_attributes'])),
                    'original_total_price' => $row['total_price'] * 100,
                    'total_price' => $row['total_price'] * 100,
                    'total_weight' => $row['total_weight'],
                    'total_discount' => $row['total_discounts'],
                    'item_count' => count($row['line_items']),
                    'items' => gzcompress(base64_encode(serialize($row['line_items']))),
                    'requires_shipping' => TRUE,
                    'abandoned_checkout_url' => $row['abandoned_checkout_url'],
                    'created_at' => date('Y-m-d h:s:i', strtotime($row['created_at'])),
                    'updated_at' => date('Y-m-d h:s:i', strtotime($row['updated_at'])),
                    'abandoned_date_time' => date('Y-m-d h:s:i', strtotime($row['updated_at'])),
                    'cart_last_activity' => date('Y-m-d h:s:i', strtotime($row['updated_at'])),
                    'currency' => $row['currency'],
                    'item_names' => $item_names,
                    'is_set_campaign' => 1,
                    'emails_sent_count' => 0,
                    //'country'=>$row['shipping_address']['country'],
                    //'line_items' => gzcompress(base64_encode(serialize($row['line_items']))),
                );

                $WHERE = "store_id=45130 AND (token='{$row['cart_token']}' OR token='{$row['token']}')";
                $cartData = $this->store_model->getSpecificRecords('carts', $WHERE);
                if (!empty($cartData)) {
                    $update = $this->store_model->updateRecords('carts', array('token' => $row['cart_token'], 'store_id' => 45130), $saveData);
                    echo "updated";
                } else {

                    $this->store_model->saveRecords('carts', $saveData);
                    echo "inserted";
                }
                //exit;16660

            }
        }
    }

    public function fetchAllSpProducts()
    {
        $shop = 'impactstore123.myshopify.com';
        $token = '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';
        $storeID = 36249567276;

        $config = array(
            'ShopUrl' => $shop,
            'AccessToken' => $token,
        );

        $shopify = new PHPShopify\ShopifySDK($config);

        $productOption = array(
            'limit' => 250,
            'fields' => 'id, title'
        );

        $productData = $shopify->Product->get($productOption);

        echo '<pre>';print_r($productData);exit;


        try {
            /*Here Will be the code*/
            $product = $shopify->Product(7539774750961)->get();

            echo "<pre>";
            print_r($product);
            die;
            $count = 4;
            if ($count > 0) {
                $lastId = 1;
                do {
                    $productOption = array(
                        'limit' => 250,
                        'since_id' => $lastId
                    );

                    $productData = $shopify->Product->count($productOption);

                    $lastId = end($productData)['id'];

                    if (empty($productData)) {
                        return false;
                    } else {
                        foreach ($productData as $data) {
                            $saveProductData = [
                                'product_id' => $data['id'],
                                'collection_id' => 0,
                                'store_id' => $storeID,
                                'title' => $data['title'],
                                'handle' => $data['handle'],
                                'price' => (!empty($data['variants'][0]['price']) ? $data['variants'][0]['price'] : ''),
                                'image' => (!empty($data['image']['src']) ? $data['image']['src'] : ''),
                                'created_at' => date("Y-m-d H:i:s", strtotime($data['created_at'])),
                                'updated_at' => date("Y-m-d H:i:s", strtotime($data['updated_at'])),
                                'published_at' => date("Y-m-d H:i:s", strtotime($data['published_at'])),
                                'vendor' => $data['vendor']
                            ];

                            $columns = 'id';
                            $where = array('store_id' => $storeID, 'product_id' => $data['id']);
                            //$checkData = $this->store_model->checkRecords('tbl_products', $where);
                            $checkData = $this->store_model->checkRecords('tbl_products', $where, $columns);
                            if (empty($checkData)) {
                                $this->store_model->saveRecords('tbl_products', $saveProductData);
                            } else {
                                $this->store_model->updateRecords('tbl_products', $where, $saveProductData);
                            }
                        }
                    }
                } while (sizeof($productData) > 0);
            }
            return true;
        } catch (Exception $exception) {
            //print_r($exception);
            return false;
        }
    }

    public function getAllCollectionsSp()
    {
        $shop = 'seasons-world.myshopify.com';
        $token = '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';
        $storeID = 47681994904;

        $config = array(
            'ShopUrl' => $shop,
            'AccessToken' => $token,
        );

        $params = array(
            'limit' => 250
        );

        $shopify = new PHPShopify\ShopifySDK($config);

        $customCollections = $shopify->CustomCollection->get($params);
        $smartCollections = $shopify->SmartCollection->get();
        $allCollections = array_merge($customCollections, $smartCollections);

        foreach ($allCollections as $collections) {
            $collectionID = $collections['id'];
            $checkWhere = array("store_id" => $storeID, "collection_id" => $collectionID);
            $checkCollection = $this->store_model->checkRecords('tbl_collections', $checkWhere);


            $data = array(
                'store_id' => $storeID,
                'collection_id' => $collections['id'],
                'handle' => $collections['handle'],
                'title' => $collections['title'],
                'updated_at' => $collections['updated_at'],
                'published_at' => $collections['published_at']
            );

            if (empty($checkCollection)) {
                $productsAgainstCollection = $smartCollections = $shopify->Collection($collectionID)->Product->get(array("limit" => 250));
                $productIDs = array();
                foreach ($productsAgainstCollection as $products) {
                    $productIDs[] = $products['id'];
                }
                $dbCollectionID = $this->store_model->saveRecords('tbl_collections', $data);
                $this->store_model->updateProductsWithCollection($dbCollectionID, $collectionID, $storeID, $productIDs);
            } else {
            }
        }
    }

    public function fetchSingleProduct()
    {
        $shop = 'drfarma.myshopify.com';
        $token = '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';

        $config = array(
            'ShopUrl' => $shop,
            'AccessToken' => $token,
        );

        $shopify = new PHPShopify\ShopifySDK($config);

        $product = $shopify->Product(4688475521273)->get();
        echo '<pre>';
        print_r($product);
        exit();
    }

    public function fetchProductsAgainstCollection()
    {
        $shop = 'startsat60.myshopify.com';
        $token = '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';
        $storeID = 27432189996;

        $config = array(
            'ShopUrl' => $shop,
            'AccessToken' => $token,
        );

        $shopify = new PHPShopify\ShopifySDK($config);


        $allProductsAgainstCollection = $shopify->Collection(193467514924)->Product->get();
        $productIDs = array();
        foreach ($allProductsAgainstCollection as $products) {
            $productIDs[] = $products['id'];
        }
        $this->store_model->updateProductsWithCollection(623304, 193467514924, $storeID, $productIDs);
        echo 'updated !!!! Thanks';
    }

    public function checkPackageDetailsCC()
    {
        echo '<pre>';
        $chargeData = $shopify->RecurringApplicationCharge->get();
    }

    public function deleteTimerProductWithVendor()
    {
        ini_set('memory_limit', '-1');
        ini_set('max_execution_time', '0');
        $vendorName = "OTOTO";
        $allProducts = $this->DashboardModel->getProductsWithVendor(array("vendor" => $vendorName));

        $productsToDelete = array();
        foreach ($allProducts as $products) {
            //$productsToDelete[] = array("store_id" => 14555622, "product_id" => $products['product_id']);
            $this->DashboardModel->deleteProduct(array("store_id" => 14555622, "product_id" => $products['product_id']));
        }
        //		echo '<pre>';print_r($productsToDelete);
    }

    public function testTimeZone()
    {
        date_default_timezone_set("Etc/GMT+12");
        $currentDateTime = date("Y-m-d H:i:s", time());
        //		echo $currentDateTime;exit();

        $firstTime = date("H:i", strtotime("14:12"));
        $secondTime = date("H:i", strtotime("235"));
        echo $secondTime;
        //		if ($firstTime > $secondTime) {
        //			echo "first time is greater";
        //		} else {
        //			echo "Second time is greater";
        //		}
    }

    public function getRedisKey()
    {
        $redisClient = new Redis();
        $redisClient->connect('127.0.0.1', '6379');
        $redisClient->select(3);

        //$key = 'salespop_'.md5('farmsinkshop.myshopify.com');
        $key = 'salespop_' . md5('bilal619.myshopify.com');

        //$allKeys = $redisClient->keys('*'.$key.'*');

        $logData = json_decode($redisClient->get($key));

        echo '<pre>';
        print_r($logData);
        exit;
    }

    public function testing()
    {
        $mysqli = new mysqli("147.135.45.52", "app-spinner", "as34@45!23AzJ", "app-spinner");

        if ($mysqli->connect_errno) {
            echo "Failed to connect to MySQL: " . $mysqli->connect_error;
            exit();
        } else {
            echo 'connected';
        }
        //        $mysqli = new mysqli("147.135.45.52", "app-spinner", "as34@45!23AzJ", "app-spinner",8888);
        //
        //        if ($mysqli -> connect_errno) {
        //            echo "Failed to connect to MySQL: " . $mysqli -> connect_error;
        //            exit();
        //        } else {
        //            echo 'connected successfully';
        //        }
    }

    function compareOrders()
    {
        $shop = 'oneodio-germeny-official.myshopify.com';
        $token = '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';
        $storeID = 51702431923;

        ini_set('memory_limit', '-1');
        ini_set('max_execution_time', '0');

        $config = array(
            'ShopUrl' => $shop,
            'AccessToken' => $token,
        );

        $shopify = new PHPShopify\ShopifySDK($config);

        $params = array(
            'status' => 'any',
            'created_at_min' => date('Y-m-d', strtotime('today - 15 days')) . 'T00:00:00-04:00',
            //			'created_at_min' => '2020-12-08T00:00:00-04:00',
            'limit' => 250
        );

        $allOrders = $shopify->Order->get($params);
        foreach ($allOrders as $orders) {
            if (empty($orders['email'])) {
                continue;
            }
            $response = $this->store_model->getSpecificRecords("carts", array('email' => $orders['email']));
            if (empty($response)) {
                echo 'Record not found against this cart<br><pre>';
                print_r($orders);
            }
            echo "carts id is => " . $orders['id'] . '<br><pre>';
            print_r($response);
            echo '============================================<br>';
        }
    }

    public function compareAllOrders()
    {
        $date = $this->input->post("date");
        $shop = $this->input->post("shop");
        $accessToken = $this->input->post("access-token");

        if (empty($date) || empty($shop) || empty($accessToken)) {
            die("Please input all fields");
        }

        $config = array(
            'ShopUrl' => $shop, //'frenchicpaint.myshopify.com',
            'AccessToken' => $accessToken, //'c42c31e96aa85f4b245085a5ba5df912',
        );

        $shopify = new PHPShopify\ShopifySDK($config);

        $data = array();
        $lastId = 1;
        do {

            $productOption = array(
                'status' => 'any',
                'created_at_min' => $date . 'T00:00:00-04:00', //"2021-02-13T00:00:00-04:00",//date('Y-m-d', strtotime('today - 60 days')).'T00:00:00-04:00',
                'created_at_max' => $date . 'T23:59:59-04:00', //'2021-02-13T23:59:59-04:00',
                'limit' => 250,
                'since_id' => $lastId
            );

            $allProducts = $shopify->Order->get($productOption);
            $data = array_merge($data, $allProducts);
            $lastId = end($allProducts)['id'];
        } while (sizeof($allProducts) > 0);

        if (empty($data)) {
            die("No order found from SHOPIFY end");
        }

        $sql = "SELECT id,email,`status` FROM carts WHERE store_id = 33794 AND (email,token) IN (";
        foreach ($data as $orders) {
            $sql .= "(" . "'" . $orders["email"] . "'" . "," . "'" . (empty($orders["cart_token"]) ? $orders["checkout_token"] : $orders["cart_token"]) . "'" . "),";
        }

        $sql = rtrim($sql, ",");

        $sql .= ') AND `status`!="ORDERED"';


        $response = $this->store_model->getCCCarts($sql);

        if (empty($response)) {
            die("No MisMatch Cart Found. Thanks !");
        }

        echo sizeof($response) . " MisMatch Carts found that are mentioned below<br>=============================<br><pre>";
        print_r($response);
        exit();
        //UPDATE carts SET `status`="ORDERED"
        //SELECT id,email,`status` FROM carts
    }

    function checkMisMatchedCarts()
    {
        $this->load->view("carecart-mismatched-carts");
    }

    function updateOrdersStatus()
    {
        $date = "2021-03-11"; //date("Y-m-d", time());
        $shop = "frenchicpaint.myshopify.com";
        $accessToken = "c42c31e96aa85f4b245085a5ba5df912";


        $config = array(
            'ShopUrl' => $shop, //'frenchicpaint.myshopify.com',
            'AccessToken' => $accessToken, //'c42c31e96aa85f4b245085a5ba5df912',
        );

        $shopify = new PHPShopify\ShopifySDK($config);

        $data = array();
        $lastId = 1;
        do {

            $productOption = array(
                'status' => 'any',
                'created_at_min' => $date . 'T00:00:00-04:00', //"2021-02-13T00:00:00-04:00",//date('Y-m-d', strtotime('today - 60 days')).'T00:00:00-04:00',
                'created_at_max' => $date . 'T23:59:59-04:00', //'2021-02-13T23:59:59-04:00',
                'limit' => 250,
                'since_id' => $lastId
            );

            $allProducts = $shopify->Order->get($productOption);
            $data = array_merge($data, $allProducts);
            $lastId = end($allProducts)['id'];
        } while (sizeof($allProducts) > 0);

        if (empty($data)) {
            die("No order found from SHOPIFY end");
        }

        $sql = "SELECT id,email,`status` FROM carts WHERE store_id = 33794 AND (email,token) IN (";
        foreach ($data as $orders) {
            $sql .= "(" . "'" . $orders["email"] . "'" . "," . "'" . (empty($orders["cart_token"]) ? $orders["checkout_token"] : $orders["cart_token"]) . "'" . "),";
        }

        $sql = rtrim($sql, ",");
        $sql .= ') AND `status`!="ORDERED"';

        $response = $this->db->query($sql)->result_array();
        echo '<pre>';
        print_r($response);

        exit;
    }

    public function getShop()
    {
        $shop = 'momavo.myshopify.com';
        $token = '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';

        $config = array(
            'ShopUrl' => $shop,
            'AccessToken' => $token,
        );

        $shopify = new PHPShopify\ShopifySDK($config);

        $shop = $shopify->Shop->get();
        echo '<pre>';
        print_r($shop);
        exit();
    }

    function charges()
    {
        $shop = 'local-apps-test.myshopify.com';
        $token = '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';
        $config = array(
            'ShopUrl' => $shop,
            'AccessToken' => $token,
        );

        $shopify = new PHPShopify\ShopifySDK($config);

        /**
         * Get all charges
         */
        // $shop = $shopify->RecurringApplicationCharge->get();
        /**
         * Get specific charges
         */
        $shop = $shopify->RecurringApplicationCharge(26355499249)->get();
        echo '<pre>';
        print_r($shop);
        exit();
    }

    function storeInfo()
    {
        $shop = $this->input->post("url");
        if (!isset($shop) || empty($shop)) {
            echo json_encode(array("status" => "error", "message" => "Invalid URL", "records" => null));
            return;
        } else {
            $response = $this->store_model->getStoreInfo(array("url" => $shop));
            if (empty($response)) {
                echo json_encode(array("status" => "error", "message" => "Invalid URL", "records" => null));
                return;
            } else {
                echo json_encode(array("status" => "success", "message" => "Access token accessed successfully.", "records" => $response));
                return;
            }
        }
    }

    function getDiscountCodes()
    {
        //$shopifyTime = "2021-08-31T14:04:49+09:30";
        $date = date('Y-m-d') . 'T' . date('H:i:s', strtotime('+5 hours')) . '-04:00';
        //echo $date;die();

        $shop = 'teslyar.myshopify.com';
        $token = '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';

        $config = array(
            'ShopUrl' => $shop,
            'AccessToken' => $token,
        );

        $shopify = new PHPShopify\ShopifySDK($config);

        $params = [
            'limit' => 250,
        ];

        $discountCodes = [];
        $allDiscountCodes = $shopify->PriceRule->get($params);
        echo "<pre>";
        print_r($allDiscountCodes);
        die;



        $collectionDataNew = [];
        foreach ($collectionData as $value) {
            if ((!$value['ends_at'] || $value['ends_at'] > $date) && $value['starts_at'] < $date) {
                $collectionDataNew[] = $value;
            }
        }


        $collectionData = $collectionDataNew;

        //		echo '<pre>';
        //		print_r($collectionDataNew); die();


        $priceRules = [];
        $discountCodes = [];
        $x = -1;
        $y = -1;
        try {
            if ((empty($collectionData))) {
                return false;
            } else {
                // COMPLILE COLLECTION TO FETCH DISCOUNT CODES
                if (!empty($collectionData)) {
                    foreach ($collectionData as $row) {
                        $x++;
                        $priceRules[$x] = $row['id'];
                    }

                    if ($priceRules && count($priceRules) > 0) {
                        foreach ($priceRules as $priceRule) {

                            try {
                                $collectionDiscountCodes = $shopify->PriceRule($priceRule)->DiscountCode->get();

                                if (!empty($collectionDiscountCodes)) {
                                    foreach ($collectionDiscountCodes as $dis) {
                                        $y++;
                                        $discountCodes[] = $dis['code'];
                                    }
                                }
                            } catch (Exception $exception) {
                                return false;
                            }
                        }
                        echo '<pre>';
                        print_r($discountCodes);
                        /*if($discountCodes && count($discountCodes) > 0)
                        {
                            return $discountCodes;
                        }
                        else
                        {
                            return false;
                        }*/
                    } else {
                        return false;
                    }
                }
                return true;
            }
        } catch (Exception $exception) {
            return false;
        }
        exit();
    }

    public function imagesUpdate($date = '')
    {
        $storeID = 23145;
        $config = array(
            'ShopUrl' => "ollois.myshopify.com",
            'AccessToken' => "5078af36b8e24586a727231f70110c67",
        );

        $shopify = new PHPShopify\ShopifySDK($config);
        $allCarts = $this->db->query("SELECT id,items,email FROM carts WHERE store_id=" . $storeID . " AND email=" . '"jrkardos1209@gmail.com"')->result_array();

        foreach ($allCarts as $carts) {
            $dataItems = unserialize(base64_decode((gzuncompress($carts['items']))));
            //echo '<pre>';print_r($dataItems);die();
            foreach ($dataItems as $key => $items) {
                if (empty($items["product_id"])) {
                    continue;
                }
                $productInfo = $shopify->Product($items["product_id"])->get();
                $items['image'] = $productInfo["image"]["src"];
                //echo '<pre>';print_r($items);die();
                $items = gzcompress(base64_encode(serialize($items)));
                $response = $this->store_model->updateRecords("carts", array("id" => $carts["id"]), $items);
                echo 'Effected rows are =>> ' . $response;
                //$sql = "UPDATE carts SET items='".$items."' WHERE id=".$carts["id"];
                //echo $sql;die();
            }
        }
        die();
        //4666
        $this->load->model("custom_model");
        $storesIDArray = ['125'];
        foreach ($storesIDArray as $storeID) {
            $query = $this->db->query("SELECT id, shop, access_token FROM stores WHERE id={$storeID} AND app_uninstalled_date_time IS NULL");
            $storeDATA = $query->result();
            if (!empty($storeDATA)) {

                $storeDATA = $storeDATA[0];
                $config = array(
                    'ShopUrl' => $storeDATA->shop,
                    'AccessToken' => $storeDATA->access_token,
                );
                $shopify = new PHPShopify\ShopifySDK($config);
                $cartData = $this->db->query("SELECT carts.id, carts.items, carts.email FROM carts WHERE store_id={$storeID} AND status!='ORDERED' AND carts.created_at >= DATE_SUB(NOW(), INTERVAL 10 DAY)")->result_array();
                foreach ($cartData as $dataOne) {
                    echo "<br>";
                    echo $dataOne['email'];
                    echo "-----";
                    $dataItems = unserialize(base64_decode((gzuncompress($dataOne['items']))));
                    echo "<pre>";
                    var_dump($dataItems);
                    /*foreach($dataItems as $row){

                    }*/
                    foreach ($dataItems as $key => $subArr) {
                        unset($subArr['properties']);
                        unset($subArr['variant_id']);
                        unset($subArr['key']);
                        unset($subArr['price']);
                        unset($subArr['original_price']);
                        unset($subArr['discounted_price']);
                        unset($subArr['line_price']);
                        unset($subArr['original_line_price']);
                        unset($subArr['total_discount']);
                        unset($subArr['sku']);
                        unset($subArr['grams']);
                        unset($subArr['vendor']);
                        unset($subArr['taxable']);
                        unset($subArr['gift_card']);
                        unset($subArr['final_price']);
                        unset($subArr['final_line_price']);
                        unset($subArr['product_description']);
                        unset($subArr['variant_title']);
                        unset($subArr['variant_options']);
                        $dataItems[$key] = $subArr;
                    }
                    var_dump($dataItems);
                    /* $i=0;
                     foreach($dataItems as $row){
                        // echo $row['id']." - ";
                         echo $row['title']." - ";
                         echo $row['product_id']." - ";
                         //echo $row['image']." - ";
                         if(empty($row['image'])){
                             unset($dataItems[$i]);
                            //echo $row['title']." - ";
                           // $productData = $shopify->Product($row['product_id'])->get();
                           // $row['image'] = !empty($productData['images'][0]['src'])?$productData['images'][0]['src']:null;

                         }
                         $dataItems[$i] = $row;
                         echo "<br>";
                         $i++;
                     }*/
                    // var_dump($dataItems);
                    $dataOne['items'] = gzcompress(base64_encode(serialize($dataItems)));
                    //$this->custom_model->updateRecords('carts',array('id'=>$dataOne['id'], 'store_id'=>$storeID) , $dataOne);
                }
                exit;



                $date = date('Y-m-d', strtotime("-3 days"));
                $params = array(
                    'status' => 'any',
                    'created_at_min' => $date . 'T00:00:00-04:00', //'2018-11-07T00:00:00-04:00',
                );
                $count = $shopify->Order->count($params);
                if ($count > 0) {
                    $pages = ceil($count / 250);
                    for ($i = 0; $i < $pages; $i++) {
                        $params = array(
                            'status' => 'any',
                            'created_at_min' => $date . 'T00:00:00-04:00', //'2018-11-07T00:00:00-04:00',
                            'limit' => 250,
                            'page' => ($i + 1)
                        );
                        $dataCheckout = $shopify->Order->get($params);

                        if (!empty($dataCheckout)) {
                            foreach ($dataCheckout as $row) {
                                echo $row['checkout_token'] . " <br>";
                                $queryCarts = $this->db->query("SELECT carts.id, carts.store_id, carts.token, carts_token.checkout_token FROM carts left join carts_token ON carts.id=carts_token.cart_id WHERE carts.store_id={$storeID} AND (carts.token='{$row['cart_token']}' OR carts.token='{$row['checkout_token']}' OR carts_token.cart_token='{$row['cart_token']}' OR carts_token.checkout_token='{$row['checkout_token']}')");

                                $cartData = $queryCarts->result();
                                if (!empty($cartData)) {
                                    $cartData = $cartData[0];
                                    $saveData = array(
                                        'status' => 'ORDERED',
                                        'updated_at' => date('Y-m-d H:i:s'),
                                        'cart_last_activity' => date('Y-m-d H:i:s'),
                                        'ordered_date_time' => date('Y-m-d H:i:s')
                                    );
                                    $queryEmailSent = $this->db->query("SELECT id, store_id, cart_id, email_clicked, email_opened FROM sent_emails WHERE store_id={$storeID} AND cart_id='{$cartData->id}' AND email_clicked IS NOT NULL ORDER BY email_clicked DESC ");
                                    $emailSentData = $queryEmailSent->result();
                                    if (!empty($emailSentData)) {
                                        $emailSentData = $emailSentData[0];
                                        $this->custom_model->updateRecords('sent_emails', array('cart_id' => $cartData->id, 'store_id' => $storeID, 'id' => $emailSentData->id), array('recovered_order' => date('Y-m-d H:i:s')));
                                        $saveData['opened_date_time'] = $emailSentData->email_opened;
                                        $saveData['clicked_date_time'] = $emailSentData->email_clicked;
                                    }
                                    $this->custom_model->updateRecords('carts', array('store_id' => $storeID, 'id' => $cartData->id), $saveData);
                                }
                            }
                        }
                    }
                }
            }
        }
        exit;
    }

    function convertDate()
    {
        date_default_timezone_set('UTC');
        $date = date("Y-m-d H:i:s", strtotime("2021-08-31T21:39:07-04:00"));
        echo $date;
    }

    function sendEmail()
    {
        $this->load->library('email');
        $config = array();
        $config['starttls'] = TRUE;
        $config['protocol'] = 'smtp';
        $config['smtp_host'] = 'smtp.googlemail.com';
        $config['smtp_port'] = 587;
        $config['smtp_user'] = 'muhammad.farooq@vaivaltech.com';
        $config['smtp_pass'] = 'localhost//gmail';
        $config['smtp_timeout'] = 60;
        $this->email->initialize($config);




        $this->email->from('muhammad.farooq@vaivaltech.com');
        $this->email->to('mansoor.khalid@vaivaltech.com');
        $this->email->set_header('X-Priority', '3');
        $this->email->subject("Weekly campaign testing");
        $this->email->message("Here is some meessage written for testing purpose");


        if ($this->email->send()) {
            echo "Email was sent! Check your inbox";
            die;
        } else {
            print_r($this->email->print_debugger());
            die;
        }
        exit;
        /* Dummy email template */
        $string = "<h1>Your impressions {{impressions}} </h1> <h1>Your total discount are {{discount_used}}</h1> && <h1>your total sales are {{sales}}</h1> <h1>your total revenue are {{revenue}}</h1><h1>your total subscribers are {{subscribers}}</h1>{{unsub_link}}";
        $emailTemplate = str_replace('{{impressions}}', (empty($stats["impression"]) ? 0 : $stats["impression"]), $string);
        $emailTemplate = str_replace('{{discount_used}}', (empty($stats["discount_used"]) ? 0 : $stats["discount_used"]), $emailTemplate);
        $emailTemplate = str_replace('{{sales}}', (empty($stats["sales"]) ? 0 : $stats["sales"]), $emailTemplate);
        $emailTemplate = str_replace('{{revenue}}', (empty($stats["revenue"]) ? 0 : $stats["revenue"]), $emailTemplate);
        $emailTemplate = str_replace('{{subscribers}}', (empty($stats["subscriber"]) ? 0 : $stats["subscriber"]), $emailTemplate);
        $emailTemplate = str_replace('{{unsub_link}}', "https://dev-spinner.carecart.io", $emailTemplate);
        $emailConfig = array(
            'protocol' => 'smtp',
            'smtp_host' => 'smtp.googlemail.com',
            'smtp_port' => '465',
            'smtp_user' => 'muhammad.farooq@vaivaltech.com',
            'smtp_pass' => 'localhost//gmail',
            'mailtype' => 'html',
            'startssl'  => true,
            //'charset' => 'iso-8859-1',
        );


        $this->load->library('email');
        $this->email->initialize($emailConfig);

        $this->email->from('muhammad.farooq@vaivaltech.com');
        $this->email->to('mansoor.khalid@vaivaltech.com');
        //$this->CI->email->to($store['email']);
        $this->email->set_header('X-Priority', '3');
        $this->email->subject("Weekly campaign testing");
        $this->email->message("Here is some meessage written for testing purpose");


        if ($this->email->send()) {
            echo "Email was sent! Check your inbox";
            die;
        } else {
            print_r($this->email->print_debugger());
            die;
        }
    }

    function sendEmailSecond()
    {
        $from = "carecartapps@gmail.com";
        $subject = "Switch ON Conversion Booster";

        $config = array(
            'protocol' => 'smtp', // 'mail', 'sendmail', or 'smtp'
            'smtp_host' => 'smtp.googlemail.com',
            'smtp_port' => 587,
            'smtp_user' => 'carecartapps@gmail.com',
            'smtp_pass' => 'localhost//gmail',
            'smtp_crypto' => 'ssl', //can be 'ssl' or 'tls' for example
            'mailtype' => 'html', //plaintext 'text' mails or 'html'
            'smtp_timeout' => '60', //in seconds
            'charset' => 'iso-8859-1',
            'wordwrap' => TRUE
        );

        $this->load->library('email', $config);
        $this->email->set_newline("\r\n");
        $this->email->to("muhammad.farooq@vaivaltech.com");
        $this->email->from($from);
        $this->email->subject("Testing");
        $this->email->message("Hi, this is just for testing purpose");

        if ($this->email->send()) {
            echo 'Email sent successfully';
            return true;
        } else {
            print_r($this->email->print_debugger());
            return false;
        }
    }

    function sendEmailSendGrid()
    {
        $email = new \SendGrid\Mail\Mail();
        $email->setFrom("carecartapps@gmail.com", "CareCart");
        $email->setSubject("Sending with Twilio SendGrid is Fun");
        $email->addTo("muhammad.farooq@vaivaltech.com");
        $email->addContent("text/plain", "and easy to do anywhere, even with PHP");
        $email->addContent("text/html", "<strong>and easy to do anywhere, even with PHP</strong>");
        $sendgrid = new \SendGrid("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");

        try {
            $response = $sendgrid->send($email);
            echo '<pre>';
            print $response->statusCode() . "\n";
            print_r($response->headers());
            print $response->body() . "\n";
        } catch (Exception $e) {
            echo 'Caught exception: ' . $e->getMessage() . "\n";
        }
        die;
        $from = "carecartapps@gmail.com";
        $subject = "Switch ON Conversion Booster";

        $config = array(
            'protocol' => 'smtp', // 'mail', 'sendmail', or 'smtp'
            'smtp_host' => 'smtp.googlemail.com',
            'smtp_port' => 587,
            'smtp_user' => 'carecartapps@gmail.com',
            'smtp_pass' => 'localhost//gmail',
            'smtp_crypto' => 'ssl', //can be 'ssl' or 'tls' for example
            'mailtype' => 'html', //plaintext 'text' mails or 'html'
            'smtp_timeout' => '60', //in seconds
            'charset' => 'iso-8859-1',
            'wordwrap' => TRUE
        );

        $this->load->library('email', $config);
        $this->email->set_newline("\r\n");
        $this->email->to("muhammad.farooq@vaivaltech.com");
        $this->email->from($from);
        $this->email->subject("Testing");
        $this->email->message("Hi, this is just for testing purpose");

        if ($this->email->send()) {
            echo 'Email sent successfully';
            return true;
        } else {
            print_r($this->email->print_debugger());
            return false;
        }
    }

    function billingStores()
    {
        $this->load->model("Store_model");
        date_default_timezone_set('UTC');
        $date = date('Y-m-d', strtotime('today +1 days'));
        $response = $this->store_model->nextBillingStores($date);
        echo '<pre>';
        print_r($response);
    }

    function insertExchangeRate()
    {
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, "https://v6.exchangerate-api.com/v6/0bed043a64a8421afc88fe49/latest/USD");
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        $output = curl_exec($ch);
        curl_close($ch);
        $output = json_decode($output, true);

        $exchangeRates = array();
        foreach ($output["conversion_rates"] as $key => $rate) {
            $exchangeRates[] = array("code" => $key, "rate" => $rate);
        }

        $this->load->model("store_model");
        $response = $this->store_model->insertExchangeRate($exchangeRates);
        if ($response > 0) {
            echo "Records inserted successfully";
        }
    }

    public function getBillingDetails($date = '')
    {
        $store_Array = array();
        $config = array(
            'ShopUrl' => 'mateen-store1122.myshopify.com',
            'AccessToken' => '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',

        );
        $shopify = new PHPShopify\ShopifySDK($config);
        // $charges = $shopify->RecurringApplicationCharge(23293460672)->UsageCharge->get();
        //$allScript = $shopify->RecurringApplicationCharge(23185948881)->UsageCharge->get();
        $allScript = $shopify->RecurringApplicationCharge(26007437566)->get();
        echo "<pre>";
        print_r($allScript);
        exit;
    }

    function emailTesting()
    {
        $dummyEmail = "ram.mugu@example.org";

        $message = "";
        if (filter_var($dummyEmail, FILTER_VALIDATE_EMAIL)) {
            $message = "{$dummyEmail}: From validation, email is a valid email" . "<br>";
        } else {
            $message = "{$dummyEmail}: From validation, email is not a valid email" . "<br>";
        }

        echo $message;
    }

    function emailVerification()
    {
        $this->load->library("VerifyEmail");

        // Initialize library class
        $mail = new VerifyEmail();

        // Set the timeout value on stream
        $mail->setStreamTimeoutWait(6000);

        // Set debug output mode
        $mail->Debug = TRUE;
        $mail->Debugoutput = 'html';

        // Set email address for SMTP request
        $mail->setEmailFrom('farooqarshad519@gmail.com');

        // Email to check
        $email = 'muhammad.farooq@vaivaltech.com';

        // Check if email is valid and exist
        if ($mail->check($email)) {
            echo 'Email &lt;' . $email . '&gt; is exist!';
        } elseif (verifyEmail::validate($email)) {
            echo 'Email &lt;' . $email . '&gt; is valid, but not exist!';
        } else {
            echo 'Email &lt;' . $email . '&gt; is not valid and not exist!';
        }
    }

    function validationViaSmptp()
    {
        $email = "muhammad.farooq@vaivaltech.com";
        $sender = "farooqarshad519@gmail.com";

        $SMTP_Validator = new SMTP_validateEmail();
        $SMTP_Validator->debug = true;
        $SMTP_Validator->validate(array($email), $sender);
    }

    function checkEmail()
    {
        $email = "muhammad.farooq@vaivaltech12.com";
        $mail = new VerifyEmailService();
        $response = ($mail->checkDomain($email) === true ? 1 : 0);

        echo "The status of email is =>> " . $response;
    }

    /**
     * SMTP RFC standard line ending.
     */
    const CRLF = "\r\n";
    function finalEmail()
    {
        $email = "muhammad.farooq@vaivaltech.com";

        $stream = @stream_socket_client("ssl://smtp.googlemail.com:" . 465, $errno, $errstr, 30);

        if ($stream) {

            stream_set_timeout($stream, 5);
            stream_set_blocking($stream, 1);
            $reply = stream_get_line($stream, 1);
            $status = stream_get_meta_data($stream);

            stream_socket_sendto($stream, $query . self::CRLF);

            echo "<pre>";
            print_r($reply);
        } else {
            echo "There is some issue";
        }
        //https://stackoverflow.com/questions/565504/how-to-check-if-an-email-address-exists-without-sending-an-email
        // $fp = fsockopen("smtp.googlemail.com", 465, $errno, $errstr, 20);
        // if (!$fp) {
        //     echo "$errstr ($errno)<br>";
        // } else {
        //     $out = "HELO " . $email;
        //     $out .= "MAIL FROM: farooqarshad519@gmail.com";
        //     // $out .= "Connection: Close\r\n\r\n";
        //     fwrite($fp, $out);
        //     while (!feof($fp)) {
        //         echo "Hella";
        //         echo fgets($fp, 128);
        //     }
        //     fclose($fp);
        // }
    }

    public static function parse_email($email, $only_domain = TRUE)
    {
        sscanf($email, "%[^@]@%s", $user, $domain);
        return ($only_domain) ? $domain : array($user, $domain);
    }

    function wheelifyStats()
    {
        /**
         * Set time to standard UTC, As apps using this standard
         * Also set date from where data will be fetched
         * we'll go with 60 days
         */
        date_default_timezone_set('UTC');
        $last30Days = date('Y-m-d', strtotime('today -30 days'));
        $last60days = date('Y-m-d', strtotime('today -60 days'));
        /**
         * Now setup query to fetch the stats
         */

        $offset = $this->input->get("offset");

        if (empty($offset)) {
            echo "Offset not defined";
            return;
        }

        // $query = 'SELECT store_id, 
        // SUM(sales) AS "total_sales",
        // SUM(revenue) AS "boosted_revenue", 
        // (SELECT shop FROM stores WHERE spin_a_sale_analytics_summary.store_id=stores.id) AS "shop",
        // (SELECT access_token FROM stores WHERE spin_a_sale_analytics_summary.store_id=stores.id) AS "token",
        // (SELECT app_uninstalled_date_time FROM stores WHERE spin_a_sale_analytics_summary.store_id=stores.id) AS "status"
        // FROM spin_a_sale_analytics_summary 
        // WHERE DATE(created_at) > "' . $date . '" GROUP BY store_id LIMIT 50 OFFSET '.$offset;

        $query = 'SELECT id,shop,access_token,currency,app_uninstalled_date_time,
        (SELECT SUM(sales) FROM spin_a_sale_analytics_summary WHERE stores.id=spin_a_sale_analytics_summary.store_id AND DATE(created_at) > "' . $last30Days . '") AS "last30dayssales",
        (SELECT SUM(sales) FROM spin_a_sale_analytics_summary WHERE stores.id=spin_a_sale_analytics_summary.store_id AND DATE(created_at) > "' . $last60days . '") AS "last60dayssales",
        (SELECT SUM(revenue) FROM spin_a_sale_analytics_summary WHERE stores.id=spin_a_sale_analytics_summary.store_id AND DATE(created_at) > "' . $last30Days . '") AS "last30daysrevenue",
        (SELECT SUM(revenue) FROM spin_a_sale_analytics_summary WHERE stores.id=spin_a_sale_analytics_summary.store_id AND DATE(created_at) > "' . $last60days . '") AS "last60daysrevenue",
        (SELECT rate FROM exchange_rate WHERE stores.currency=exchange_rate.`code`) AS "exchnage_rate"
        FROM stores WHERE app_uninstalled_date_time IS NULL LIMIT 5 OFFSET 4000';

        /**
         * Now query into DB to fetch the stats
         */
        $response = $this->store_model->statsForWheelify($query);

        /**
         * Check if response is empty
         */
        if (empty($response)) {
            echo "records are empty, unable to proceed further. Thanks";
            return;
        }

        $allStoresWithStats = array();
        foreach ($response as $stats) {
            /**
             * Check if uninstallation date is empty then proceed further
             * Otherwise skip that store
             */
            try {
                $config = array(
                    'ShopUrl' => $stats["shop"],
                    'AccessToken' => $stats["access_token"],
                );
                $shopify = new PHPShopify\ShopifySDK($config);

                $paramsFor30days = array(
                    'status' => 'any',
                    'created_at_min' => date('Y-m-d', strtotime('today -30 days')) . 'T00:00:00-04:00',
                );

                $paramsFor60days = array(
                    'status' => 'any',
                    'created_at_min' => date('Y-m-d', strtotime('today -60 days')) . 'T00:00:00-04:00',
                );

                $thirtyDaysOrder = $shopify->Order->count($paramsFor30days);
                $sixtyDaysOrder = $shopify->Order->count($paramsFor60days);

                $allStoresWithStats[] = array("store_id" => $stats["id"], "url" => $stats["shop"], "access_token" => $stats["access_token"], "last_30_days_orders_at_shopify" => $thirtyDaysOrder, "last_30_days_revenue_at_shopify" => 0, "last_60_days_orders_at_shopify" => $sixtyDaysOrder, "last_60_days_revenue_at_shopify" => 0, "last_30_days_boosted_orders_by_app" => $stats["last30dayssales"], "last_30_days_boosted_revenue_by_app" => $stats["last30daysrevenue"], "last_60_days_boosted_orders_by_app" => $stats["last60dayssales"], "last_60_days_boosted_revenue_by_app" => $stats["last60daysrevenue"], "status" => 1);
            } catch (\PHPShopify\Exception\ApiException $exception) {
                $allStoresWithStats[] = array("store_id" => $stats["id"], "url" => $stats["shop"], "access_token" => $stats["access_token"], "last_30_days_orders_at_shopify" => $thirtyDaysOrder, "last_30_days_revenue_at_shopify" => 0, "last_60_days_orders_at_shopify" => $sixtyDaysOrder, "last_60_days_revenue_at_shopify" => 0, "last_30_days_boosted_orders_by_app" => $stats["last30dayssales"], "last_30_days_boosted_revenue_by_app" => $stats["last30daysrevenue"], "last_60_days_boosted_orders_by_app" => $stats["last60dayssales"], "last_60_days_boosted_revenue_by_app" => $stats["last60daysrevenue"], "status" => 0);
            }
        }

        echo '<pre>';
        print_r($allStoresWithStats);
        die;

        /**
         * Now, finally insert the stats in DB as batch
         */
        $response = $this->store_model->insertBatch("wheelify_stats", $allStoresWithStats);
        if ($response > 0) {
            echo "Stats inserted into DB successfully ! ";
            return;
        }
        echo "There is some error";
        return;
    }

    function salesPopStats()
    {
        /**
         * Set time to standard UTC, As apps using this standard
         * Also set date from where data will be fetched
         * we'll go with 60 days
         */
        date_default_timezone_set('UTC');
        $date = date('Y-m-d', strtotime('today -60 days'));

        /**
         * Now setup query to fetch the stats
         */
        $query = 'SELECT store_id, 
        SUM(revenue_generated) AS "boosted_revnue",
        COUNT(*) AS "total_sales",
        (SELECT url FROM tbl_stores WHERE tbl_click_history.store_id=tbl_stores.store_id) AS "url",
        (SELECT access_token FROM tbl_stores WHERE tbl_click_history.store_id=tbl_stores.store_id) AS "token",
		(SELECT app_uninstall_date FROM tbl_stores WHERE tbl_click_history.store_id=tbl_stores.store_id) AS "status",
		(SELECT currency FROM tbl_stores WHERE tbl_click_history.store_id=tbl_stores.store_id) AS "currency_code"
        FROM tbl_click_history WHERE revenue_generated != 0 AND DATE(created_date) >= "' . $date . '" 
        GROUP BY store_id LIMIT 2';

        /**
         * Now query into DB to fetch the stats
         */
        $response = $this->store_model->statsForWheelify($query);

        /**
         * Check if response is empty
         */
        if (empty($response)) {
            echo "records are empty, unable to proceed further. Thanks";
            return;
        }

        $allStoresWithStats = array();
        foreach ($response as $stats) {
            /**
             * Check if uninstallation date is empty then proceed further
             * Otherwise skip that store
             */
            try {
                $config = array(
                    'ShopUrl' => $stats["url"],
                    'AccessToken' => $stats["token"],
                );
                $shopify = new PHPShopify\ShopifySDK($config);
                $params = array(
                    'status' => 'any',
                    'created_at_min' => date('Y-m-d', strtotime('today -60 days')) . 'T00:00:00-04:00',
                );
                $totalOrdersCount = $shopify->Order->count($params);

                $allStoresWithStats[] = array("store_id" => $stats["store_id"], "url" => $stats["url"], "access_token" => $stats["token"], "orders_at_shopify" => $totalOrdersCount, "boosted_orders_by_app" => $stats["total_sales"], "total_revenue" => $stats["boosted_revnue"], "status" => 1);
            } catch (\PHPShopify\Exception\ApiException $exception) {
                $allStoresWithStats[] = array("store_id" => $stats["store_id"], "url" => $stats["url"], "access_token" => $stats["token"], "orders_at_shopify" => 0, "boosted_orders_by_app" => $stats["total_sales"], "total_revenue" => $stats["boosted_revnue"], "status" => 0);
            }
        }

        /**
         * Now, finally insert the stats in DB as batch
         */
        $response = $this->store_model->insertBatch("salespop_stats", $allStoresWithStats);
        if ($response > 0) {
            echo "Stats inserted into DB successfully ! ";
            return;
        }
        echo "There is some error";
        return;
    }

    function wheelify()
    {
        date_default_timezone_set('UTC');
        $last30Days = date('Y-m-d', strtotime('today -3 days'));
        die($last30Days);

        $last60days = date('Y-m-d', strtotime('today -60 days'));


        $query = 'SELECT id,shop,access_token,currency,(SELECT rate FROM exchange_rate WHERE stores.currency=exchange_rate.code) AS "exchnage_rate"
        FROM stores WHERE app_uninstalled_date_time IS NULL';
        $response = $this->store_model->getStores($query);

        $alreadyAddedStores = $this->store_model->alreadyAddedStores();


        $allStats = array();
        foreach ($response as $stats) {

            $flag = false;
            foreach ($alreadyAddedStores as $stores) {
                if (in_array($stats["id"], $stores)) {
                    $flag = true;
                }
            }

            if ($flag) {
                continue;
            }

            try {

                $config = array(
                    'ShopUrl' => $stats["shop"],
                    'AccessToken' => $stats["access_token"],
                );

                $shopify = new PHPShopify\ShopifySDK($config);
                $ordersArray = array();
                $count = $shopify->Order->count(array('created_at_min' => date('Y-m-d', strtotime('today -60 days')) . 'T00:00:00-04:00'));
                if ($count > 0) {
                    $lastId = 1;
                    do {
                        $ordersOption = array(
                            'status' => 'any',
                            'limit' => 250,
                            'since_id' => $lastId,
                            'created_at_min' => date('Y-m-d', strtotime('today -60 days')) . 'T00:00:00-04:00',
                        );

                        $ordersData = $shopify->Order->get($ordersOption);
                        $lastId = end($ordersData)['id'];
                        foreach ($ordersData as $orders) {
                            $ordersArray[] = $orders;
                        }
                    } while (sizeof($ordersData) > 0);

                    $revenueIn30days = 0;
                    $ordersIn30daysCount = 0;
                    $revenueIn60days = 0;

                    foreach ($ordersArray as $orders) {
                        $revenueIn60days = $revenueIn60days + $orders["current_total_price"];
                        $orderGeneratedTime = date("Y-m-d", strtotime($orders["created_at"]));
                        if ($orderGeneratedTime >= $last30Days) {
                            $ordersIn30daysCount++;
                            $revenueIn30days = $revenueIn30days + $orders["current_total_price"];
                        }
                    }
                    $revenueIn30days = $this->countRevenueIndollars($revenueIn30days, $stats["exchnage_rate"]);
                    $revenueIn60days = $this->countRevenueIndollars($revenueIn60days, $stats["exchnage_rate"]);
                    $allStats[] = array("store_id" => $stats["id"], "shop" => $stats["shop"], "token" => $stats["access_token"], "totalOrdersIn30days" => $ordersIn30daysCount, "totalOrdersIn60days" => count($ordersArray), "totalRevenueIn30days" => $revenueIn30days, "totalRevenueIn60days" => $revenueIn60days);
                } else {
                    $allStats[] = array("store_id" => $stats["id"], "shop" => $stats["shop"], "token" => $stats["access_token"], "totalOrdersIn30days" => 0, "totalOrdersIn60days" => 0, "totalRevenueIn30days" => 0, "totalRevenueIn60days" => 0);
                }
            } catch (\PHPShopify\Exception\ApiException $exception) {
                $allStats[] = array("store_id" => $stats["id"], "shop" => $stats["shop"], "token" => $stats["access_token"], "totalOrdersIn30days" => 0, "totalOrdersIn60days" => 0, "totalRevenueIn30days" => 0, "totalRevenueIn60days" => 0);
            }
        }

        if (!empty($allStats)) {
            $response = $this->store_model->insertBatch("wheelify_stats", $allStats);
        }
    }

    function countRevenueIndollars($value, $rate)
    {
        if ($value == 0) {
            return 0;
        }

        $value = $value / $rate;
        return round($value);
    }

    function salesPop()
    {
        //echo "exit";
        //die;
        ob_start();
        ini_set('memory_limit', '1024M');
        date_default_timezone_set('UTC');
        $last30Days = date('Y-m-d', strtotime('today -30 days'));
        $last60days = date('Y-m-d', strtotime('today -60 days'));

        $query = 'SELECT store_id AS "id",url AS "shop",access_token,
        (SELECT rate FROM exchange_rate WHERE tbl_stores.currency=exchange_rate.code) AS "exchnage_rate"
        FROM tbl_stores WHERE app_uninstall_date IS NULL AND shopify_plan_name NOT IN ("dormant","affiliate","staff","partner_test") AND currency IS NOT NULL LIMIT 2'; // OFFSET 50
        $response = $this->store_model->getStores($query);

        if (empty($response)) {
            echo "ALL DONE";
            exit;
        }

        //$alreadyAddedStores = $this->store_model->alreadyAddedStores();

        $allStats = array();
        foreach ($response as $stats) {
            $allStats = array();
            $alreadyAddedStores = $this->store_model->alreadyAddedStoresSp($stats['id']);
            /*$flag = false;
            foreach($alreadyAddedStores as $stores){
                if(in_array($stats["id"], $stores)){
                    $flag = true;
                }
            }*/

            if (!empty($alreadyAddedStores)) {
                echo str_repeat('=', 60) . "\n";
                echo "This Store IS Already Exists :: {$stats["shop"]} \n";
                echo str_repeat('=', 60) . "\n";
                continue;
            }
            try {
                echo str_repeat('=', 60) . "\n";
                echo "This Store is in Loop :: {$stats["shop"]} \n";
                echo str_repeat('=', 60) . "\n";
                $config = array(
                    'ShopUrl' => $stats["shop"],
                    'AccessToken' => $stats["access_token"],
                );

                $shopify = new PHPShopify\ShopifySDK($config);
                $ordersArray = array();
                $count = $shopify->Order->count(array('created_at_min' => date('Y-m-d', strtotime('today -60 days')) . 'T00:00:00-04:00'));
                if ($count > 0) {
                    $lastId = 1;
                    do {
                        $ordersOption = array(
                            'status' => 'any',
                            'limit' => 250,
                            'since_id' => $lastId,
                            'created_at_min' => date('Y-m-d', strtotime('today -60 days')) . 'T00:00:00-04:00',
                        );

                        $ordersData = $shopify->Order->get($ordersOption);
                        if (!empty($ordersData)) {
                            $lastId = end($ordersData)['id'];
                            foreach ($ordersData as $orders) {
                                $ordersArray[] = $orders;
                            }
                        }
                    } while (sizeof($ordersData) > 0);

                    $revenueIn30days = 0;
                    $ordersIn30daysCount = 0;
                    $revenueIn60days = 0;

                    foreach ($ordersArray as $orders) {
                        $revenueIn60days = $revenueIn60days + $orders["current_total_price"];
                        $orderGeneratedTime = date("Y-m-d", strtotime($orders["created_at"]));
                        if ($orderGeneratedTime >= $last30Days) {
                            $ordersIn30daysCount++;
                            $revenueIn30days = $revenueIn30days + $orders["current_total_price"];
                        }
                    }

                    $revenueIn30days = $this->countRevenueIndollars($revenueIn30days, $stats["exchnage_rate"]);
                    $revenueIn60days = $this->countRevenueIndollars($revenueIn60days, $stats["exchnage_rate"]);
                    $allStats[] = array("store_id" => $stats["id"], "shop" => $stats["shop"], "token" => $stats["access_token"], "totalOrdersIn30days" => $ordersIn30daysCount, "totalOrdersIn60days" => count($ordersArray), "totalRevenueIn30days" => $revenueIn30days, "totalRevenueIn60days" => $revenueIn60days, 'status' => 'SUCCESS');
                } else {
                    $allStats[] = array("store_id" => $stats["id"], "shop" => $stats["shop"], "token" => $stats["access_token"], "totalOrdersIn30days" => 0, "totalOrdersIn60days" => 0, "totalRevenueIn30days" => 0, "totalRevenueIn60days" => 0, 'status' => 'NODATA');
                }
            } catch (\PHPShopify\Exception\ApiException $exception) {
                $allStats[] = array("store_id" => $stats["id"], "shop" => $stats["shop"], "token" => $stats["access_token"], "totalOrdersIn30days" => 0, "totalOrdersIn60days" => 0, "totalRevenueIn30days" => 0, "totalRevenueIn60days" => 0, 'status' => 'ERROR');
            }
            $response = $this->store_model->insertBatch("sp_stats", $allStats);
            echo str_repeat('=', 60) . "\n";
            echo "This Store DONE :: {$stats["shop"]} \n";
            echo str_repeat('=', 60) . "\n";
            ob_flush();
        }

        if (!empty($allStats)) {
            //$response = $this->store_model->insertBatch("wheelify_stats", $allStats);
        }
        echo str_repeat('=', 60) . "\n";
        echo "ALL DONE ::  \n";
        echo str_repeat('=', 60) . "\n";
        ob_end_flush();
    }

    function csvWheelify()
    {
        $filePath = APPPATH . 'libraries/thirtyDays.csv';

        $allStores = array();
        if (($handle = fopen($filePath, "r")) !== FALSE) {
            while (($data = fgetcsv($handle, 0, ",")) !== FALSE) {
                $allStores[] = array("url" => $data[0], "last30dayssales" => $data[1], "last30daysrevenue" => $data[2]);
            }
            fclose($handle);
        }

        if (!empty($allStores)) {
            $response = $this->store_model->insertBatch("wheelify_db_stats", $allStores);

            echo $response . " Rows effected";
        }
    }

    function insert60days()
    {
        $filePath = APPPATH . 'libraries/sixtydays.csv';

        $allStores = array();
        if (($handle = fopen($filePath, "r")) !== FALSE) {
            while (($data = fgetcsv($handle, 1000, ",")) !== FALSE) {
                $allStores[] = array("url" => $data[0], "last60dayssales" => $data[1], "last60daysrevenue" => $data[2]);
            }
            fclose($handle);
        }

        echo '<pre>';
        print_r($allStores);
        die;

        if (!empty($allStores)) {
            $response = $this->store_model->checkAndInsert($allStores);

            // echo $response." Rows effected";
        }
    }

    function novemberStats()
    {
        $filePath = APPPATH . 'libraries/november.csv';

        $allStores = array();
        if (($handle = fopen($filePath, "r")) !== FALSE) {
            while (($data = fgetcsv($handle, 1000, ",")) !== FALSE) {
                $allStores[] = array("url" => $data[0], "novembersales" => $data[1], "novemberrevenue" => $data[2]);
            }
            fclose($handle);
        }

        // echo '<pre>';print_r($allStores);die;

        if (!empty($allStores)) {
            $response = $this->store_model->checkAndInsert($allStores);

            // echo $response." Rows effected";
        }
    }

    function octoberStats()
    {
        $filePath = APPPATH . 'libraries/october.csv';

        $allStores = array();
        if (($handle = fopen($filePath, "r")) !== FALSE) {
            while (($data = fgetcsv($handle, 1000, ",")) !== FALSE) {
                $allStores[] = array("url" => $data[0], "octsales" => $data[1], "octrevenue" => $data[2]);
            }
            fclose($handle);
        }

        // echo '<pre>';print_r($allStores);die;

        if (!empty($allStores)) {
            $response = $this->store_model->checkAndInsert($allStores);

            // echo $response." Rows effected";
        }
    }

    function revenueTest()
    {
        $revenue = 19000 / 1.23520000000000000000;
        echo $revenue;
    }

    function getTemplate()
    {
        $response = $this->store_model->getWeeklyTemplate();
        echo gzuncompress($response["template_html"]);
        // print_r($response);{{revenue}}
    }

    function checkNumberFormat()
    {
        $number = 12890034;
        echo number_format($number);
    }

    public function investigateChatAgentOrdersFunctionality()
    {
        $shop = 'drfarma.myshopify.com';
        $token = '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';

        $config = array(
            'ShopUrl' => $shop,
            'AccessToken' => $token,
        );

        $shopify = new PHPShopify\ShopifySDK($config);
        $params = array(
            'status' => 'any',
            'created_at_min' => date('Y-m-d', strtotime('today - 30 days')) . 'T00:00:00-04:00',
            'limit' => '100',
        );

        $orders = $shopify->Order->get($params);
        echo '<pre>';print_r($orders);die;

        $sqlArray = array();
            $sqlArray[] = "Delete FROM tbl_salespop WHERE store_id=" . 1223434;
            foreach ($orders as $order) {
                $sql = '';
                $sql = 'INSERT INTO tbl_salespop (store_id, product_id,product_title, product_image, product_handle, customer_name, order_generated_time, location) VALUES ';
                foreach ($order["line_items"] as $items) {
                    $flag = false;
                    if (empty($items["product_id"])) {
                        echo "<br> There is some issue in the order product ID".$order["id"]; 
                        $flag = true;
                        continue;
                    }
                    try {
                        $productData = $shopify->Product($items["product_id"])->get();
                    } catch (\PHPShopify\Exception\ApiException $exception) {
                        echo "<br> There is some issue in the order Product".$order["id"]; 
                        continue;
                    }
                    if (empty($productData)) {
                        $flag = true;
                        continue;
                    }
                    $location = (isset($order["customer"]["default_address"])  ? ($order["customer"]["default_address"]["city"] . ', ' . $order["customer"]["default_address"]["country"]) : '');
                    $customerName = (isset($order["customer"]) ? ($order["customer"]["first_name"] . ' ' . $order["customer"]["last_name"]) : '');
                    $sql .= '(' . 12345 . ', ' . $items["product_id"] . ',"' . $this->db->escape_str($productData["title"]) . '","' . $productData["image"]["src"] . '","' . $this->db->escape_str($productData["handle"]) . '","' . $this->db->escape_str($customerName) . '","' . date("Y-m-d H:i:s", strtotime($order["created_at"])) . '","' . $this->db->escape_str($location) . '"),';
                }

                if (!$flag) {
                    $sql = rtrim($sql, ",");
                    $sqlArray[] = $sql;
                }
            }

        echo '<pre>';
        print_r($sqlArray);

        //		foreach ($orders as $row) {
        //			echo $row['id'].' '.$row['total_price'].'<br>';
        //		}
    }
}
