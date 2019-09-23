/*
 * Script que se encarga de crear la base de datos y colecciones necesarias.
 * Lanzamiento del script con: mongo nombreScript.js
*/

print("STARTING SCRIPT");
// Host donde está nuestra base de datos, no tiene que ser nuestro equipo local, puede ser cualquier mongoDb.
conn = new Mongo("localhost:27017");
// Nombre de la base de datos que vamos a utilizar
db = conn.getDB("tfm_twitter");

/* Limpiamos la base de datos por si existia algo antes */
db.dropDatabase();

/* coleciones de nuestro modelo de datos */
/* 
Tabla Master: almacena todos los tweets en inglés y español que llegan al sistema por Nifi.
Tabla Unmatched: almacena los tweets que llegan al sistema y en Nifi se ve que no son ni en inglés ni en español.
Tabla English: almacena los tweets en inglés que llegan al sistema para poder usarlos posteriormente con los modelos.
Tabla Spanish: almacena los tweets en español que llegan al sistema para poder usarlos posteriormente con los modelos.
Tabla Streaming english: almacena tweets en inglés que sean procesados por Spark Streaming y ya calculado su sentimiento.
Tabla Streaming spanish: almacena tweets en español que sean procesados por Spark Streaming y ya calculado su sentimiento.
*/
db.createCollection("tweets_master");
db.createCollection("tweets_unmatched");
db.createCollection("tweets_english");
db.createCollection("tweets_spanish");
db.createCollection("tweets_streaming_english");
db.createCollection("tweets_streaming_spanish");


/* Tweets Master */
print("***********creating master*********");

master1 = {
    "created_at":"Sun Nov 11 16:34:07 +0000 2018",
    "id":1061658338671378432,
    "id_str":"1061658338671378432",
    "text":"@EJFC26 Y Messi",
    "display_text_range":[8,15],
    "source":"\u003ca href=\"http:\/\/twitter.com\/download\/android\" rel=\"nofollow\"\u003eTwitter for Android\u003c\/a\u003e",
    "truncated":false,
    "in_reply_to_status_id":1061658279020056579,
    "in_reply_to_status_id_str":"1061658279020056579",
    "in_reply_to_user_id":1931169114,
    "in_reply_to_user_id_str":"1931169114",
    "in_reply_to_screen_name":"EJFC26",
    "user":
    {
        "id":207220995,
        "id_str":"207220995",
        "name":"Jorge",
        "screen_name":"jorginho_77",
        "location":"Desde Gandia hacia el noroeste",
        "url":"http:\/\/tipstertrucho.blogabet.com\/",
        "description":"Economista. Me encanta el f\u00fatbol. Cul\u00e9, mit\u00f3mano, observador, cabez\u00f3n e indeciso. Ayrton Senna: El segundo es el primero de los perdedores.",
        "translator_type":"none",
        "protected":false,
        "verified":false,
        "followers_count":750,
        "friends_count":397,
        "listed_count":26,
        "favourites_count":1488,
        "statuses_count":81097,
        "created_at":"Sun Oct 24 20:35:09 +0000 2010",
        "utc_offset":null,
        "time_zone":null,
        "geo_enabled":true,
        "lang":"es",
        "contributors_enabled":false,
        "is_translator":false,
        "profile_background_color":"C0DEED",
        "profile_background_image_url":"http:\/\/abs.twimg.com\/images\/themes\/theme1\/bg.png",
        "profile_background_image_url_https":"https:\/\/abs.twimg.com\/images\/themes\/theme1\/bg.png",
        "profile_background_tile":true,
        "profile_link_color":"0084B4",
        "profile_sidebar_border_color":"FFFFFF",
        "profile_sidebar_fill_color":"DDEEF6",
        "profile_text_color":"333333",
        "profile_use_background_image":true,
        "profile_image_url":"http:\/\/pbs.twimg.com\/profile_images\/1046099148544651266\/exsEG37z_normal.jpg",
        "profile_image_url_https":"https:\/\/pbs.twimg.com\/profile_images\/1046099148544651266\/exsEG37z_normal.jpg",
        "profile_banner_url":"https:\/\/pbs.twimg.com\/profile_banners\/207220995\/1455969286",
        "default_profile":false,
        "default_profile_image":false,
        "following":null,
        "follow_request_sent":null,
        "notifications":null
    },
    "geo":null,
    "coordinates":null,
    "place":null,
    "contributors":null,
    "is_quote_status":false,
    "quote_count":0,
    "reply_count":0,
    "retweet_count":0,
    "favorite_count":0,
    "entities":
    {
        "hashtags":[],
        "urls":[],
        "user_mentions":[
            {
                "screen_name":"EJFC26",
                "name":"Emilio Fern\u00e1ndez",
                "id":1931169114,
                "id_str":"1931169114",
                "indices":[0,7]
            }],
        "symbols":[]
    },
    "favorited":false,
    "retweeted":false,
    "filter_level":"low",
    "lang":"es",
    "timestamp_ms":"1541954047254"
};



/* Tweets Unmatched */
print("***********creating unmatched*********");

unmatched1 = {
    "created_at":"Sun Nov 11 16:34:07 +0000 2018",
    "id":1061658338671378432,
    "id_str":"1061658338671378432",
    "text":"@EJFC26 Y Messi",
    "display_text_range":[8,15],
    "source":"\u003ca href=\"http:\/\/twitter.com\/download\/android\" rel=\"nofollow\"\u003eTwitter for Android\u003c\/a\u003e",
    "truncated":false,
    "in_reply_to_status_id":1061658279020056579,
    "in_reply_to_status_id_str":"1061658279020056579",
    "in_reply_to_user_id":1931169114,
    "in_reply_to_user_id_str":"1931169114",
    "in_reply_to_screen_name":"EJFC26",
    "user":
    {
        "id":207220995,
        "id_str":"207220995",
        "name":"Jorge",
        "screen_name":"jorginho_77",
        "location":"Desde Gandia hacia el noroeste",
        "url":"http:\/\/tipstertrucho.blogabet.com\/",
        "description":"Economista. Me encanta el f\u00fatbol. Cul\u00e9, mit\u00f3mano, observador, cabez\u00f3n e indeciso. Ayrton Senna: El segundo es el primero de los perdedores.",
        "translator_type":"none",
        "protected":false,
        "verified":false,
        "followers_count":750,
        "friends_count":397,
        "listed_count":26,
        "favourites_count":1488,
        "statuses_count":81097,
        "created_at":"Sun Oct 24 20:35:09 +0000 2010",
        "utc_offset":null,
        "time_zone":null,
        "geo_enabled":true,
        "lang":"es",
        "contributors_enabled":false,
        "is_translator":false,
        "profile_background_color":"C0DEED",
        "profile_background_image_url":"http:\/\/abs.twimg.com\/images\/themes\/theme1\/bg.png",
        "profile_background_image_url_https":"https:\/\/abs.twimg.com\/images\/themes\/theme1\/bg.png",
        "profile_background_tile":true,
        "profile_link_color":"0084B4",
        "profile_sidebar_border_color":"FFFFFF",
        "profile_sidebar_fill_color":"DDEEF6",
        "profile_text_color":"333333",
        "profile_use_background_image":true,
        "profile_image_url":"http:\/\/pbs.twimg.com\/profile_images\/1046099148544651266\/exsEG37z_normal.jpg",
        "profile_image_url_https":"https:\/\/pbs.twimg.com\/profile_images\/1046099148544651266\/exsEG37z_normal.jpg",
        "profile_banner_url":"https:\/\/pbs.twimg.com\/profile_banners\/207220995\/1455969286",
        "default_profile":false,
        "default_profile_image":false,
        "following":null,
        "follow_request_sent":null,
        "notifications":null
    },
    "geo":null,
    "coordinates":null,
    "place":null,
    "contributors":null,
    "is_quote_status":false,
    "quote_count":0,
    "reply_count":0,
    "retweet_count":0,
    "favorite_count":0,
    "entities":
    {
        "hashtags":[],
        "urls":[],
        "user_mentions":[
            {
                "screen_name":"EJFC26",
                "name":"Emilio Fern\u00e1ndez",
                "id":1931169114,
                "id_str":"1931169114",
                "indices":[0,7]
            }],
        "symbols":[]
    },
    "favorited":false,
    "retweeted":false,
    "filter_level":"low",
    "lang":"fr",
    "timestamp_ms":"1541954047254"
};



print("***********creating spanish*********");

/* Tweets spanish */

spanish1 = {
    "created_at":"Tue Aug 27 15:42:25 +0000 2019",
    "id":1166375422818508801,
    "id_str":"1166375422818508801",
    "text":"@MileeAlvarez17 Eso se pagará en algún momento jaja",
    "display_text_range":[{"$numberInt":"16"},{"$numberInt":"51"}],
    "source":"<a href=\"http://twitter.com/download/android\" rel=\"nofollow\">Twitter for Android</a>",
    "truncated":false,
    "in_reply_to_status_id":1166375147529560064,
    "in_reply_to_status_id_str":"1166375147529560064",
    "in_reply_to_user_id":896612786436005889,
    "in_reply_to_user_id_str":"896612786436005889",
    "in_reply_to_screen_name":"MileeAlvarez17",
    "user":
    {
        "id":1030460247226368000,
        "id_str":"1030460247226368000",
        "name":"Mela",
        "screen_name":"Meli03360979",
        "location":null,
        "url":null,
        "description":"jugadora de voley🏐🎽❤",
        "translator_type":"none",
        "protected":false,
        "verified":false,
        "followers_count":37,
        "friends_count":126,
        "listed_count":0,
        "favourites_count":163,
        "statuses_count":158,
        "created_at":"Fri Aug 17 14:24:02 +0000 2018",
        "utc_offset":null,
        "time_zone":null,
        "geo_enabled":false,
        "lang":null,
        "contributors_enabled":false,
        "is_translator":false,
        "profile_background_color":"F5F8FA",
        "profile_background_image_url":"",
        "profile_background_image_url_https":"",
        "profile_background_tile":false,
        "profile_link_color":"1DA1F2",
        "profile_sidebar_border_color":"C0DEED",
        "profile_sidebar_fill_color":"DDEEF6",
        "profile_text_color":"333333",
        "profile_use_background_image":true,
        "profile_image_url":"http://pbs.twimg.com/profile_images/1130413490815033346/vnGUig9m_normal.jpg",
        "profile_image_url_https":"https://pbs.twimg.com/profile_images/1130413490815033346/vnGUig9m_normal.jpg",
        "profile_banner_url":"https://pbs.twimg.com/profile_banners/1030460247226368000/1548345066",
        "default_profile":true,
        "default_profile_image":false,
        "following":null,
        "follow_request_sent":null,
        "notifications":null
    },
    "geo":null,
    "coordinates":null,
    "place":null,
    "contributors":null,
    "is_quote_status":false,
    "quote_count":0,
    "reply_count":0,
    "retweet_count":0,
    "favorite_count":0,
    "entities":
    {
        "hashtags":[],
        "urls":[],
        "user_mentions":[{"screen_name":"MileeAlvarez17","name":"Milee","id":{"$numberLong":"896612786436005889"},"id_str":"896612786436005889","indices":[{"$numberInt":"0"},{"$numberInt":"15"}]}],
        "symbols":[]
    },
    "favorited":false,
    "retweeted":false,
    "filter_level":"low",
    "lang":"es",
    "timestamp_ms":"1566920545664"
};



print("***********creating english*********");

/* Tweets english */

english1 = {
    "created_at":"Tue Aug 27 15:42:20 +0000 2019",
    "id":1166375401838563329,
    "id_str":"1166375401838563329",
    "text":"RT @CanadianPM: As the #G7 concludes, Canada announces support for initiatives to:\n✔️ strengthen the partnership with Africa\n✔️ tackle the…",
    "source":"<a href=\"http://twitter.com/download/android\" rel=\"nofollow\">Twitter for Android</a>",
    "truncated":false,
    "in_reply_to_status_id":null,
    "in_reply_to_status_id_str":null,
    "in_reply_to_user_id":null,
    "in_reply_to_user_id_str":null,
    "in_reply_to_screen_name":null,
    "user":
    {
        "id":894497095167746048,
        "id_str":"894497095167746048",
        "name":"Paul Efambe jr",
        "screen_name":"PaulEfambejr",
        "location":"Somewhere...Mother Earth...",
        "url":null,
        "description":"Curieux de nature.. Yet not so indiscrete... Per niente...!!! other than that , Energy , Mining , International Cooperation , bla-bla-bla...",
        "translator_type":"none",
        "protected":false,
        "verified":false,
        "followers_count":225,
        "friends_count":594,
        "listed_count":1,
        "favourites_count":14510,
        "statuses_count":21509,
        "created_at":"Mon Aug 07 09:55:01 +0000 2017",
        "utc_offset":null,
        "time_zone":null,
        "geo_enabled":true,
        "lang":null,
        "contributors_enabled":false,
        "is_translator":false,
        "profile_background_color":"F5F8FA",
        "profile_background_image_url":"",
        "profile_background_image_url_https":"",
        "profile_background_tile":false,
        "profile_link_color":"1DA1F2",
        "profile_sidebar_border_color":"C0DEED",
        "profile_sidebar_fill_color":"DDEEF6",
        "profile_text_color":"333333",
        "profile_use_background_image":true,
        "profile_image_url":"http://pbs.twimg.com/profile_images/1143611223826718720/Ph3C-XIo_normal.jpg",
        "profile_image_url_https":"https://pbs.twimg.com/profile_images/1143611223826718720/Ph3C-XIo_normal.jpg",
        "default_profile":true,
        "default_profile_image":false,
        "following":null,
        "follow_request_sent":null,
        "notifications":null
    },
    "geo":null,
    "coordinates":null,
    "place":null,
    "contributors":null,
    "retweeted_status":
    {
        "created_at":"Mon Aug 26 22:08:18 +0000 2019",
        "id":1166110144171847686,
        "id_str":"1166110144171847686",
        "text":"As the #G7 concludes, Canada announces support for initiatives to:\n✔️ strengthen the partnership with Africa\n✔️ tac… https://t.co/DASN8hfR0w","source":"<a href=\"https://mobile.twitter.com\" rel=\"nofollow\">Twitter Web App</a>",
        "truncated":true,
        "in_reply_to_status_id":null,
        "in_reply_to_status_id_str":null,
        "in_reply_to_user_id":null,
        "in_reply_to_user_id_str":null,
        "in_reply_to_screen_name":null,
        "user":
        {
            "id":14713787,
            "id_str":"14713787",
            "name":"CanadianPM",
            "screen_name":"CanadianPM",
            "location":"Ottawa, Ontario, Canada",
            "url":"http://www.pm.gc.ca",
            "description":"Official Twitter account of Justin Trudeau, Prime Minister of Canada – Terms: http://ow.ly/KKus300hWpn – Français: @PMcanadien",
            "translator_type":"none",
            "protected":false,
            "verified":true,
            "followers_count":242781,
            "friends_count":1093,
            "listed_count":1660,
            "favourites_count":33,
            "statuses_count":5324,
            "created_at":"Fri May 09 14:25:26 +0000 2008",
            "utc_offset":null,
            "time_zone":null,
            "geo_enabled":true,
            "lang":null,
            "contributors_enabled":false,
            "is_translator":false,
            "profile_background_color":"00124B",
            "profile_background_image_url":"http://abs.twimg.com/images/themes/theme1/bg.png",
            "profile_background_image_url_https":"https://abs.twimg.com/images/themes/theme1/bg.png",
            "profile_background_tile":false,
            "profile_link_color":"0000FF",
            "profile_sidebar_border_color":"000000",
            "profile_sidebar_fill_color":"91D4FF",
            "profile_text_color":"000000",
            "profile_use_background_image":true,
            "profile_image_url":"http://pbs.twimg.com/profile_images/877227485724909568/U3Pxb5h1_normal.jpg",
            "profile_image_url_https":"https://pbs.twimg.com/profile_images/877227485724909568/U3Pxb5h1_normal.jpg",
            "profile_banner_url":"https://pbs.twimg.com/profile_banners/14713787/1537481835",
            "default_profile":false,
            "default_profile_image":false,
            "following":null,
            "follow_request_sent":null,
            "notifications":null
        },
        "geo":null,
        "coordinates":null,
        "place":null,
        "contributors":null,
        "is_quote_status":false,
        "extended_tweet":
        {
            "full_text":"As the #G7 concludes, Canada announces support for initiatives to:\n✔️ strengthen the partnership with Africa\n✔️ tackle the climate crisis and protect our environment\n✔️ fight inequalities through education\nMore: https://t.co/uXHLLoW42A",
            "display_text_range":[{"$numberInt":"0"},{"$numberInt":"235"}],
            "entities":
            {
                "hashtags":[{"text":"G7","indices":[{"$numberInt":"7"},{"$numberInt":"10"}]}],
                "urls":[{"url":"https://t.co/uXHLLoW42A","expanded_url":"http://ow.ly/lYah50vKqMx","display_url":"ow.ly/lYah50vKqMx","indices":[{"$numberInt":"212"},{"$numberInt":"235"}]}],
                "user_mentions":[],
                "symbols":[]
            }
        },
        "quote_count":10,
        "reply_count":18,
        "retweet_count":83,
        "favorite_count":195,
        "entities":
        {
            "hashtags":[{"text":"G7","indices":[{"$numberInt":"7"},{"$numberInt":"10"}]}],
            "urls":[{"url":"https://t.co/DASN8hfR0w","expanded_url":"https://twitter.com/i/web/status/1166110144171847686","display_url":"twitter.com/i/web/status/1…","indices":[{"$numberInt":"117"},{"$numberInt":"140"}]}],
            "user_mentions":[],
            "symbols":[]
        },
        "favorited":false,
        "retweeted":false,
        "possibly_sensitive":false,
        "filter_level":"low","lang":"en"
    },
    "is_quote_status":false,
    "quote_count":0,
    "reply_count":0,
    "retweet_count":0,
    "favorite_count":0,
    "entities":
    {
        "hashtags":[{"text":"G7","indices":[{"$numberInt":"23"},{"$numberInt":"26"}]}],
        "urls":[],
        "user_mentions":[{"screen_name":"CanadianPM","name":"CanadianPM","id":{"$numberInt":"14713787"},"id_str":"14713787","indices":[{"$numberInt":"3"},{"$numberInt":"14"}]}],
        "symbols":[]
    },
    "favorited":false,
    "retweeted":false,
    "filter_level":"low",
    "lang":"en",
    "timestamp_ms":"1566920540662"
};



print("***********creating streaming*********");

/* Tweets streaming english */

streaming1 = {
    "id":1166404250265673728,
    "texto":"@aalgar The last I got was a TFA Black Series Phasma, which I still quite like. Kinda want a Kylo too.",
    "interacciones":0,
    "probabilidad":0.7027729153633118,
    "prediction":0,
    "timestamp":"2019-08-27 20:03:56"
};


/* Tweets streaming spanish */

streaming2 = {
    "id":1166404250269880320,
    "texto":"Es desesperante no saber hasta donde va a llegar todo esto😩.",
    "interacciones":0,
    "probabilidad":0.36170652508735657,
    "prediction":2,
    "timestamp":"2019-08-27 20:03:57"
};


// Guardamos en cada colección el primer documento con los ejemplos anteriores
print("***********saving master*********");
db.tweets_master.save(master1);

print("***********saving unmatched*********");
db.tweets_unmatched.save(unmatched1);

print("***********saving spanish*********");
db.tweets_spanish.save(spanish1);

print("***********saving english*********");
db.tweets_english.save(english1);

print("***********saving streaming*********");
db.tweets_streaming_english.save(streaming1);
db.tweets_streaming_spanish.save(streaming2);



print("SCRIPT FINISHED");
