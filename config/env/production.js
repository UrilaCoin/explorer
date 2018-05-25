// Invoke 'strict' JavaScript mode
'use strict';

// Set the 'development' environment configuration object
module.exports = /*
This file must be valid JSON. But comments are allowed

Please edit settings.json, not settings.json.template
*/
    {
        // name your instance!
        "title": "Geek Cash Explorer",

        "address": "explorer.geekcash.org",

        // coin name
        "coin": "GeekCash",

        // coin symbol
        "symbol": "GEEK",

        // logo
        "logo": "/images/logo.png",

        // favicon
        "favicon": "/favicon.ico",

        // Uses bootswatch themes (http://bootswatch.com/)
        // Valid options:
        //     Cerulean, Cosmo, Cyborg, Darkly, Flatly, Journal, Lumen, Paper,
        //     Readable, Sandstone, Simplex, Slate, Spacelab, Superhero, United, Yeti
        // theme (see /public/themes for available themes)
        "theme": "Geek",

        // port to listen for requests on.
        "port": 3001,

        db: "mongodb://adm:uwjq2eoZ7lBpzZf8BKbc@localhost/explorer",
        // database settings (MongoDB)
        "dbsettings": {
            "user": "adm",
            "password": "uwjq2eoZ7lBpzZf8BKbc",
            "database": "explorer",
            "address": "localhost",
            "port": 27017
        },

        //update script settings
        "update_timeout": 10,
        "check_timeout": 250,

        // wallet settings
        "wallet": {
            "host": "localhost",
            "port": 6888,
            "user": "root",
            "pass": "H39JDa2gHpRWBiOGGvczWUfFBiFW14q1"
        },

        // confirmations
        "confirmations": 101,

        // language settings
        "locale": "locale/en.json",

        // menu settings
        "display": {
            "api": true,
            "markets": false,
            "richlist": true,
            "twitter": false,
            "facebook": false,
            "googleplus": false,
            "search": true,
            "movement": true,
            "network": true
        },

        // index page (valid options for difficulty are POW, POS or Hybrid)
        "index": {
            "show_hashrate": true,
            "difficulty": "Hybrid",
            "last_txs": 100
        },

        // ensure links on API page are valid
        "api": {
            "blockindex": 101,
            "blockhash": "0000002db65bb27972f43ef44fd4f86c70e4a46d21aafabeffe4c84535c04c49",
            "txhash": "bfaeb55549b9d35cf2e626cc69d453eeec74318285c3e292e05ca6ddb744963a",
            "address": "GY4GS8gyQ94PCrFGFcA4jbqFC2NFtD9Ypn"
        },

        // market settings
        //supported markets: bittrex, poloniex, yobit, empoex, bleutrade, cryptopia, ccex
        //default market is loaded by default and determines last price in header
        "markets": {
            "coin": "JBS",
            "exchange": "BTC",
            "enabled": ["bittrex"],
            "cryptopia_id": "1658",
            "ccex_key": "Get-Your-Own-Key",
            "default": "bittrex"
        },

        // richlist/top100 settings
        "richlist": {
            "distribution": true,
            "received": true,
            "balance": true
        },
        // movement page settings
        // min amount: show transactions greater than this value
        // low flag: greater than this value flagged yellow
        // high flag: greater than this value flagged red
        "movement": {
            "min_amount": 100,
            "low_flag": 1000,
            "high_flag": 5000
        },

        // twitter, facebook, googleplus
        "twitter": "geekcash",
        "facebook": "geekcash.org",
        "googleplus": "yourgooglepluspage",

        //genesis
        "genesis_tx": "b2216fc5abe0eb06e2764671f7cf703c6a7c33f852d9758fbcb1e4c9b6227eff",
        "genesis_block": "000007de1b1fb05d656af7b75b398efff9e9562ab73047750394527f0f239e62",

        //heavy (enable/disable additional heavy features)
        "heavy": false,

        //amount of txs to index per address (stores latest n txs)
        "txcount": 100,

        //show total sent & received on address page (set false if PoS)
        "show_sent_received": true,

        // how to calculate current coin supply
        // COINBASE : total sent from coinbase (PoW)
        // GETINFO : retreive from getinfo api call (PoS)
        // HEAVY: retreive from heavys getsupply api call
        // BALANCES : total of all address balances
        // TXOUTSET : retreive from gettxoutsetinfo api call
        "supply": "COINBASE",

        // how to acquire network hashrate
        // getnetworkhashps: uses getnetworkhashps api call, returns in GH/s
        // netmhashps: uses getmininginfo.netmhashpsm returns in MH/s
        "nethash": "getnetworkhashps",

        // nethash unitd: sets nethash API return units
        // valid options: "P" (PH/s), "T" (TH/s), "G" (GH/s), "M" (MH/s), "K" (KH/s)
        "nethash_units": "M",

        // Address labels
        // example : "JhbrvAmM7kNpwA6wD5KoAsbtikLWWMNPcM": {"label": "This is a burn address", "type":"danger", "url":"http://example.com"}
        // label (required) = test to display
        // type (optional) = class of label, valid types: default, primary, warning, danger, success
        // url (optional) = url to link to for more information
        "labels": {
            //  "JSoEdU717hvz8KQVq2HfcqV9A79Wihzusu": {"label": "Developers address", "type":"primary", "url":"http://example.com"},
            //  "JSWVXHWeYNknPdG9uDrcBoZHztKMFCsndw": {"label": "Cryptsy"}
        }
    }

