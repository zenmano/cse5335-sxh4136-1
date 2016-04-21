var cool = require('cool-ascii-faces')
var express = require('express');
var app = express();

var data = {
  "data": [
    {
      "address": {
        "building": "1007",
        "coord": [
          -73.856077,
          40.848447
        ],
        "street": "Morris Park Ave",
        "zipcode": "10462"
      },
      "borough": "Bronx",
      "cuisine": "Bakery",
      "grades": [
        {
          "date": {
            "$date": 1393804800000
          },
          "grade": "A",
          "score": 2
        },
        {
          "date": {
            "$date": 1378857600000
          },
          "grade": "A",
          "score": 6
        },
        {
          "date": {
            "$date": 1358985600000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1322006400000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1299715200000
          },
          "grade": "B",
          "score": 14
        }
      ],
      "name": "Morris Park Bake Shop",
      "restaurant_id": "30075445"
    },{
      "address": {
        "building": "469",
        "coord": [
          -73.961704,
          40.662942
        ],
        "street": "Flatbush Avenue",
        "zipcode": "11225"
      },
      "borough": "Brooklyn",
      "cuisine": "Hamburgers",
      "grades": [
        {
          "date": {
            "$date": 1419897600000
          },
          "grade": "A",
          "score": 8
        },
        {
          "date": {
            "$date": 1404172800000
          },
          "grade": "B",
          "score": 23
        },
        {
          "date": {
            "$date": 1367280000000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1336435200000
          },
          "grade": "A",
          "score": 12
        }
      ],
      "name": "Wendy'S",
      "restaurant_id": "30112340"
    },{
      "address": {
        "building": "351",
        "coord": [
          -73.98513559999999,
          40.7676919
        ],
        "street": "West   57 Street",
        "zipcode": "10019"
      },
      "borough": "Manhattan",
      "cuisine": "Irish",
      "grades": [
        {
          "date": {
            "$date": 1409961600000
          },
          "grade": "A",
          "score": 2
        },
        {
          "date": {
            "$date": 1374451200000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1343692800000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1325116800000
          },
          "grade": "A",
          "score": 12
        }
      ],
      "name": "Dj Reynolds Pub And Restaurant",
      "restaurant_id": "30191841"
    },{
      "address": {
        "building": "2780",
        "coord": [
          -73.98241999999999,
          40.579505
        ],
        "street": "Stillwell Avenue",
        "zipcode": "11224"
      },
      "borough": "Brooklyn",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1402358400000
          },
          "grade": "A",
          "score": 5
        },
        {
          "date": {
            "$date": 1370390400000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1334275200000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1318377600000
          },
          "grade": "A",
          "score": 12
        }
      ],
      "name": "Riviera Caterer",
      "restaurant_id": "40356018"
    },{
      "address": {
        "building": "97-22",
        "coord": [
          -73.8601152,
          40.7311739
        ],
        "street": "63 Road",
        "zipcode": "11374"
      },
      "borough": "Queens",
      "cuisine": "Jewish/Kosher",
      "grades": [
        {
          "date": {
            "$date": 1416787200000
          },
          "grade": "Z",
          "score": 20
        },
        {
          "date": {
            "$date": 1358380800000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1343865600000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1323907200000
          },
          "grade": "B",
          "score": 25
        }
      ],
      "name": "Tov Kosher Kitchen",
      "restaurant_id": "40356068"
    },{
      "address": {
        "building": "8825",
        "coord": [
          -73.8803827,
          40.7643124
        ],
        "street": "Astoria Boulevard",
        "zipcode": "11369"
      },
      "borough": "Queens",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1416009600000
          },
          "grade": "Z",
          "score": 38
        },
        {
          "date": {
            "$date": 1398988800000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1362182400000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1328832000000
          },
          "grade": "A",
          "score": 13
        }
      ],
      "name": "Brunos On The Boulevard",
      "restaurant_id": "40356151"
    },{
      "address": {
        "building": "2206",
        "coord": [
          -74.1377286,
          40.6119572
        ],
        "street": "Victory Boulevard",
        "zipcode": "10314"
      },
      "borough": "Staten Island",
      "cuisine": "Jewish/Kosher",
      "grades": [
        {
          "date": {
            "$date": 1412553600000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1400544000000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1365033600000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1327363200000
          },
          "grade": "A",
          "score": 9
        }
      ],
      "name": "Kosher Island",
      "restaurant_id": "40356442"
    },{
      "address": {
        "building": "7114",
        "coord": [
          -73.9068506,
          40.6199034
        ],
        "street": "Avenue U",
        "zipcode": "11234"
      },
      "borough": "Brooklyn",
      "cuisine": "Delicatessen",
      "grades": [
        {
          "date": {
            "$date": 1401321600000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1389657600000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1375488000000
          },
          "grade": "A",
          "score": 8
        },
        {
          "date": {
            "$date": 1342569600000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1331251200000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1318550400000
          },
          "grade": "A",
          "score": 9
        }
      ],
      "name": "Wilken'S Fine Food",
      "restaurant_id": "40356483"
    },{
      "address": {
        "building": "6409",
        "coord": [
          -74.00528899999999,
          40.628886
        ],
        "street": "11 Avenue",
        "zipcode": "11219"
      },
      "borough": "Brooklyn",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1405641600000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1375142400000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1360713600000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1345075200000
          },
          "grade": "A",
          "score": 2
        },
        {
          "date": {
            "$date": 1313539200000
          },
          "grade": "A",
          "score": 11
        }
      ],
      "name": "Regina Caterers",
      "restaurant_id": "40356649"
    },{
      "address": {
        "building": "1839",
        "coord": [
          -73.9482609,
          40.6408271
        ],
        "street": "Nostrand Avenue",
        "zipcode": "11226"
      },
      "borough": "Brooklyn",
      "cuisine": "Ice Cream, Gelato, Yogurt, Ices",
      "grades": [
        {
          "date": {
            "$date": 1405296000000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1373414400000
          },
          "grade": "A",
          "score": 8
        },
        {
          "date": {
            "$date": 1341964800000
          },
          "grade": "A",
          "score": 5
        },
        {
          "date": {
            "$date": 1329955200000
          },
          "grade": "A",
          "score": 8
        }
      ],
      "name": "Taste The Tropics Ice Cream",
      "restaurant_id": "40356731"
    },{
      "address": {
        "building": "2300",
        "coord": [
          -73.8786113,
          40.8502883
        ],
        "street": "Southern Boulevard",
        "zipcode": "10460"
      },
      "borough": "Bronx",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1401235200000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1371600000000
          },
          "grade": "A",
          "score": 4
        },
        {
          "date": {
            "$date": 1339718400000
          },
          "grade": "A",
          "score": 3
        }
      ],
      "name": "Wild Asia",
      "restaurant_id": "40357217"
    },{
      "address": {
        "building": "7715",
        "coord": [
          -73.9973325,
          40.61174889999999
        ],
        "street": "18 Avenue",
        "zipcode": "11214"
      },
      "borough": "Brooklyn",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1397606400000
          },
          "grade": "A",
          "score": 5
        },
        {
          "date": {
            "$date": 1366675200000
          },
          "grade": "A",
          "score": 2
        },
        {
          "date": {
            "$date": 1335225600000
          },
          "grade": "A",
          "score": 5
        },
        {
          "date": {
            "$date": 1323993600000
          },
          "grade": "A",
          "score": 2
        }
      ],
      "name": "C & C Catering Service",
      "restaurant_id": "40357437"
    },{
      "address": {
        "building": "1269",
        "coord": [
          -73.871194,
          40.6730975
        ],
        "street": "Sutter Avenue",
        "zipcode": "11208"
      },
      "borough": "Brooklyn",
      "cuisine": "Chinese",
      "grades": [
        {
          "date": {
            "$date": 1410825600000
          },
          "grade": "B",
          "score": 21
        },
        {
          "date": {
            "$date": 1377648000000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1364860800000
          },
          "grade": "C",
          "score": 56
        },
        {
          "date": {
            "$date": 1344988800000
          },
          "grade": "B",
          "score": 27
        },
        {
          "date": {
            "$date": 1332892800000
          },
          "grade": "B",
          "score": 27
        }
      ],
      "name": "May May Kitchen",
      "restaurant_id": "40358429"
    },{
      "address": {
        "building": "1",
        "coord": [
          -73.96926909999999,
          40.7685235
        ],
        "street": "East   66 Street",
        "zipcode": "10065"
      },
      "borough": "Manhattan",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1399420800000
          },
          "grade": "A",
          "score": 3
        },
        {
          "date": {
            "$date": 1367539200000
          },
          "grade": "A",
          "score": 4
        },
        {
          "date": {
            "$date": 1335744000000
          },
          "grade": "A",
          "score": 6
        },
        {
          "date": {
            "$date": 1324944000000
          },
          "grade": "A",
          "score": 0
        }
      ],
      "name": "1 East 66Th Street Kitchen",
      "restaurant_id": "40359480"
    },{
      "address": {
        "building": "705",
        "coord": [
          -73.9653967,
          40.6064339
        ],
        "street": "Kings Highway",
        "zipcode": "11223"
      },
      "borough": "Brooklyn",
      "cuisine": "Jewish/Kosher",
      "grades": [
        {
          "date": {
            "$date": 1415577600000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1381363200000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1349308800000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1337558400000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1325203200000
          },
          "grade": "B",
          "score": 19
        }
      ],
      "name": "Seuda Foods",
      "restaurant_id": "40360045"
    },{
      "address": {
        "building": "203",
        "coord": [
          -73.97822040000001,
          40.6435254
        ],
        "street": "Church Avenue",
        "zipcode": "11218"
      },
      "borough": "Brooklyn",
      "cuisine": "Ice Cream, Gelato, Yogurt, Ices",
      "grades": [
        {
          "date": {
            "$date": 1391990400000
          },
          "grade": "A",
          "score": 2
        },
        {
          "date": {
            "$date": 1357084800000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1326067200000
          },
          "grade": "A",
          "score": 3
        },
        {
          "date": {
            "$date": 1320624000000
          },
          "grade": "P",
          "score": 12
        },
        {
          "date": {
            "$date": 1311206400000
          },
          "grade": "A",
          "score": 13
        }
      ],
      "name": "Carvel Ice Cream",
      "restaurant_id": "40360076"
    },{
      "address": {
        "building": "265-15",
        "coord": [
          -73.7032601,
          40.7386417
        ],
        "street": "Hillside Avenue",
        "zipcode": "11004"
      },
      "borough": "Queens",
      "cuisine": "Ice Cream, Gelato, Yogurt, Ices",
      "grades": [
        {
          "date": {
            "$date": 1414454400000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1379462400000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1348099200000
          },
          "grade": "A",
          "score": 13
        }
      ],
      "name": "Carvel Ice Cream",
      "restaurant_id": "40361322"
    },{
      "address": {
        "building": "6909",
        "coord": [
          -74.0259567,
          40.6353674
        ],
        "street": "3 Avenue",
        "zipcode": "11209"
      },
      "borough": "Brooklyn",
      "cuisine": "Delicatessen",
      "grades": [
        {
          "date": {
            "$date": 1408579200000
          },
          "grade": "A",
          "score": 4
        },
        {
          "date": {
            "$date": 1393977600000
          },
          "grade": "A",
          "score": 3
        },
        {
          "date": {
            "$date": 1357776000000
          },
          "grade": "A",
          "score": 10
        }
      ],
      "name": "Nordic Delicacies",
      "restaurant_id": "40361390"
    },{
      "address": {
        "building": "522",
        "coord": [
          -73.95171,
          40.767461
        ],
        "street": "East   74 Street",
        "zipcode": "10021"
      },
      "borough": "Manhattan",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1409616000000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1387411200000
          },
          "grade": "B",
          "score": 16
        },
        {
          "date": {
            "$date": 1369699200000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1354838400000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1332979200000
          },
          "grade": "A",
          "score": 11
        }
      ],
      "name": "Glorious Food",
      "restaurant_id": "40361521"
    },{
      "address": {
        "building": "284",
        "coord": [
          -73.9829239,
          40.6580753
        ],
        "street": "Prospect Park West",
        "zipcode": "11215"
      },
      "borough": "Brooklyn",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1416355200000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1384387200000
          },
          "grade": "A",
          "score": 2
        },
        {
          "date": {
            "$date": 1354665600000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1337212800000
          },
          "grade": "A",
          "score": 11
        }
      ],
      "name": "The Movable Feast",
      "restaurant_id": "40361606"
    },{
      "address": {
        "building": "129-08",
        "coord": [
          -73.839297,
          40.78147
        ],
        "street": "20 Avenue",
        "zipcode": "11356"
      },
      "borough": "Queens",
      "cuisine": "Delicatessen",
      "grades": [
        {
          "date": {
            "$date": 1408147200000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1377561600000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1348099200000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1317254400000
          },
          "grade": "A",
          "score": 10
        }
      ],
      "name": "Sal'S Deli",
      "restaurant_id": "40361618"
    },{
      "address": {
        "building": "759",
        "coord": [
          -73.9925306,
          40.7309346
        ],
        "street": "Broadway",
        "zipcode": "10003"
      },
      "borough": "Manhattan",
      "cuisine": "Delicatessen",
      "grades": [
        {
          "date": {
            "$date": 1390262400000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1357257600000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1339027200000
          },
          "grade": "A",
          "score": 6
        },
        {
          "date": {
            "$date": 1326758400000
          },
          "grade": "A",
          "score": 8
        }
      ],
      "name": "Bully'S Deli",
      "restaurant_id": "40361708"
    },{
      "address": {
        "building": "3406",
        "coord": [
          -73.94024739999999,
          40.7623288
        ],
        "street": "10 Street",
        "zipcode": "11106"
      },
      "borough": "Queens",
      "cuisine": "Delicatessen",
      "grades": [
        {
          "date": {
            "$date": 1395187200000
          },
          "grade": "A",
          "score": 3
        },
        {
          "date": {
            "$date": 1363132800000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1332806400000
          },
          "grade": "A",
          "score": 8
        },
        {
          "date": {
            "$date": 1301961600000
          },
          "grade": "A",
          "score": 7
        }
      ],
      "name": "Steve Chu'S Deli & Grocery",
      "restaurant_id": "40361998"
    },{
      "address": {
        "building": "502",
        "coord": [
          -73.976112,
          40.786714
        ],
        "street": "Amsterdam Avenue",
        "zipcode": "10024"
      },
      "borough": "Manhattan",
      "cuisine": "Chicken",
      "grades": [
        {
          "date": {
            "$date": 1410739200000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1393891200000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1374105600000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1357689600000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1334016000000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1321315200000
          },
          "grade": "A",
          "score": 7
        }
      ],
      "name": "Harriet'S Kitchen",
      "restaurant_id": "40362098"
    },{
      "address": {
        "building": "730",
        "coord": [
          -73.96805719999999,
          40.7925587
        ],
        "street": "Columbus Avenue",
        "zipcode": "10025"
      },
      "borough": "Manhattan",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1410480000000
          },
          "grade": "B",
          "score": 26
        },
        {
          "date": {
            "$date": 1377648000000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1364169600000
          },
          "grade": "B",
          "score": 20
        },
        {
          "date": {
            "$date": 1329177600000
          },
          "grade": "A",
          "score": 12
        }
      ],
      "name": "P & S Deli Grocery",
      "restaurant_id": "40362264"
    },{
      "address": {
        "building": "18",
        "coord": [
          -73.996984,
          40.72589
        ],
        "street": "West Houston Street",
        "zipcode": "10012"
      },
      "borough": "Manhattan",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1396483200000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1365120000000
          },
          "grade": "A",
          "score": 4
        },
        {
          "date": {
            "$date": 1332288000000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1303862400000
          },
          "grade": "A",
          "score": 5
        }
      ],
      "name": "Angelika Film Center",
      "restaurant_id": "40362274"
    },{
      "address": {
        "building": "531",
        "coord": [
          -73.9634876,
          40.6940001
        ],
        "street": "Myrtle Avenue",
        "zipcode": "11205"
      },
      "borough": "Brooklyn",
      "cuisine": "Hamburgers",
      "grades": [
        {
          "date": {
            "$date": 1395100800000
          },
          "grade": "A",
          "score": 8
        },
        {
          "date": {
            "$date": 1363564800000
          },
          "grade": "A",
          "score": 8
        },
        {
          "date": {
            "$date": 1349827200000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1316649600000
          },
          "grade": "A",
          "score": 2
        }
      ],
      "name": "White Castle",
      "restaurant_id": "40362344"
    },{
      "address": {
        "building": "103-05",
        "coord": [
          -73.8642349,
          40.75356
        ],
        "street": "37 Avenue",
        "zipcode": "11368"
      },
      "borough": "Queens",
      "cuisine": "Chinese",
      "grades": [
        {
          "date": {
            "$date": 1398038400000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1384214400000
          },
          "grade": "A",
          "score": 5
        },
        {
          "date": {
            "$date": 1370304000000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1352851200000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1349913600000
          },
          "grade": "P",
          "score": 0
        },
        {
          "date": {
            "$date": 1337817600000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1323302400000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1311120000000
          },
          "grade": "A",
          "score": 11
        }
      ],
      "name": "Ho Mei Restaurant",
      "restaurant_id": "40362432"
    },{
      "address": {
        "building": "60",
        "coord": [
          -74.0085357,
          40.70620539999999
        ],
        "street": "Wall Street",
        "zipcode": "10005"
      },
      "borough": "Manhattan",
      "cuisine": "Turkish",
      "grades": [
        {
          "date": {
            "$date": 1411689600000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1379462400000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1348185600000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1336521600000
          },
          "grade": "A",
          "score": 11
        }
      ],
      "name": "The Country Cafe",
      "restaurant_id": "40362715"
    },{
      "address": {
        "building": "195",
        "coord": [
          -73.9246028,
          40.6522396
        ],
        "street": "East   56 Street",
        "zipcode": "11203"
      },
      "borough": "Brooklyn",
      "cuisine": "Caribbean",
      "grades": [
        {
          "date": {
            "$date": 1399939200000
          },
          "grade": "A",
          "score": 2
        },
        {
          "date": {
            "$date": 1367971200000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1348272000000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1307318400000
          },
          "grade": "A",
          "score": 12
        }
      ],
      "name": "Shashemene Int'L Restaura",
      "restaurant_id": "40362869"
    },{
      "address": {
        "building": "107",
        "coord": [
          -74.00920839999999,
          40.7132925
        ],
        "street": "Church Street",
        "zipcode": "10007"
      },
      "borough": "Manhattan",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1405641600000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1393372800000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1377475200000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1359676800000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1326758400000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1318896000000
          },
          "grade": "A",
          "score": 11
        }
      ],
      "name": "Downtown Deli",
      "restaurant_id": "40363021"
    },{
      "address": {
        "building": "1006",
        "coord": [
          -73.84856870000002,
          40.8903781
        ],
        "street": "East 233 Street",
        "zipcode": "10466"
      },
      "borough": "Bronx",
      "cuisine": "Ice Cream, Gelato, Yogurt, Ices",
      "grades": [
        {
          "date": {
            "$date": 1398297600000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1378339200000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1361404800000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1341273600000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1310342400000
          },
          "grade": "A",
          "score": 5
        }
      ],
      "name": "Carvel Ice Cream",
      "restaurant_id": "40363093"
    },{
      "address": {
        "building": "56",
        "coord": [
          -73.991495,
          40.692273
        ],
        "street": "Court Street",
        "zipcode": "11201"
      },
      "borough": "Brooklyn",
      "cuisine": "Donuts",
      "grades": [
        {
          "date": {
            "$date": 1419897600000
          },
          "grade": "A",
          "score": 8
        },
        {
          "date": {
            "$date": 1389744000000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1357603200000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1326931200000
          },
          "grade": "A",
          "score": 10
        }
      ],
      "name": "Dunkin' Donuts",
      "restaurant_id": "40363098"
    },{
      "address": {
        "building": "7615",
        "coord": [
          -74.0228449,
          40.6281815
        ],
        "street": "5 Avenue",
        "zipcode": "11209"
      },
      "borough": "Brooklyn",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1417651200000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1382572800000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1366243200000
          },
          "grade": "A",
          "score": 5
        },
        {
          "date": {
            "$date": 1333584000000
          },
          "grade": "A",
          "score": 13
        }
      ],
      "name": "Mejlander & Mulgannon",
      "restaurant_id": "40363117"
    },{
      "address": {
        "building": "120",
        "coord": [
          -73.9998042,
          40.7251256
        ],
        "street": "Prince Street",
        "zipcode": "10012"
      },
      "borough": "Manhattan",
      "cuisine": "Bakery",
      "grades": [
        {
          "date": {
            "$date": 1413504000000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1379462400000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1367280000000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1334880000000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1324252800000
          },
          "grade": "A",
          "score": 3
        }
      ],
      "name": "Olive'S",
      "restaurant_id": "40363151"
    },{
      "address": {
        "building": "1236",
        "coord": [
          -73.8893654,
          40.81376179999999
        ],
        "street": "238 Spofford Ave",
        "zipcode": "10474"
      },
      "borough": "Bronx",
      "cuisine": "Chinese",
      "grades": [
        {
          "date": {
            "$date": 1388361600000
          },
          "grade": "A",
          "score": 8
        },
        {
          "date": {
            "$date": 1357603200000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1339459200000
          },
          "grade": "B",
          "score": 15
        }
      ],
      "name": "Happy Garden",
      "restaurant_id": "40363289"
    },{
      "address": {
        "building": "625",
        "coord": [
          -73.990494,
          40.7569545
        ],
        "street": "8 Avenue",
        "zipcode": "10018"
      },
      "borough": "Manhattan",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1402272000000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1389312000000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1354838400000
          },
          "grade": "A",
          "score": 4
        },
        {
          "date": {
            "$date": 1323734400000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1315526400000
          },
          "grade": "A",
          "score": 13
        }
      ],
      "name": "Cafe Metro",
      "restaurant_id": "40363298"
    },{
      "address": {
        "building": "1069",
        "coord": [
          -73.902463,
          40.694924
        ],
        "street": "Wyckoff Avenue",
        "zipcode": "11385"
      },
      "borough": "Queens",
      "cuisine": "Delicatessen",
      "grades": [
        {
          "date": {
            "$date": 1399507200000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1386806400000
          },
          "grade": "A",
          "score": 8
        },
        {
          "date": {
            "$date": 1371772800000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1356307200000
          },
          "grade": "B",
          "score": 25
        },
        {
          "date": {
            "$date": 1318982400000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1308096000000
          },
          "grade": "A",
          "score": 10
        }
      ],
      "name": "Tony'S Deli",
      "restaurant_id": "40363333"
    },{
      "address": {
        "building": "405",
        "coord": [
          -73.97534999999999,
          40.7516269
        ],
        "street": "Lexington Avenue",
        "zipcode": "10174"
      },
      "borough": "Manhattan",
      "cuisine": "Sandwiches/Salads/Mixed Buffet",
      "grades": [
        {
          "date": {
            "$date": 1392940800000
          },
          "grade": "A",
          "score": 3
        },
        {
          "date": {
            "$date": 1379030400000
          },
          "grade": "A",
          "score": 3
        },
        {
          "date": {
            "$date": 1346112000000
          },
          "grade": "A",
          "score": 0
        },
        {
          "date": {
            "$date": 1315872000000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1304380800000
          },
          "grade": "A",
          "score": 5
        }
      ],
      "name": "Lexler Deli",
      "restaurant_id": "40363426"
    },{
      "address": {
        "building": "2491",
        "coord": [
          -74.1459332,
          40.6103714
        ],
        "street": "Victory Boulevard",
        "zipcode": "10314"
      },
      "borough": "Staten Island",
      "cuisine": "Delicatessen",
      "grades": [
        {
          "date": {
            "$date": 1420761600000
          },
          "grade": "A",
          "score": 3
        },
        {
          "date": {
            "$date": 1386201600000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1371600000000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1357603200000
          },
          "grade": "A",
          "score": 11
        }
      ],
      "name": "Bagels N Buns",
      "restaurant_id": "40363427"
    },{
      "address": {
        "building": "7905",
        "coord": [
          -73.8740217,
          40.7135015
        ],
        "street": "Metropolitan Avenue",
        "zipcode": "11379"
      },
      "borough": "Queens",
      "cuisine": "Bagels/Pretzels",
      "grades": [
        {
          "date": {
            "$date": 1410912000000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1389830400000
          },
          "grade": "B",
          "score": 23
        },
        {
          "date": {
            "$date": 1375833600000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1361404800000
          },
          "grade": "B",
          "score": 27
        },
        {
          "date": {
            "$date": 1340150400000
          },
          "grade": "B",
          "score": 27
        },
        {
          "date": {
            "$date": 1327968000000
          },
          "grade": "B",
          "score": 18
        }
      ],
      "name": "Hot Bagels",
      "restaurant_id": "40363565"
    },{
      "address": {
        "building": "87-69",
        "coord": [
          -73.8309503,
          40.7001121
        ],
        "street": "Lefferts Boulevard",
        "zipcode": "11418"
      },
      "borough": "Queens",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1393286400000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1376438400000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1344297600000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1332720000000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1320364800000
          },
          "grade": "A",
          "score": 0
        },
        {
          "date": {
            "$date": 1309305600000
          },
          "grade": "A",
          "score": 4
        }
      ],
      "name": "Snack Time Grill",
      "restaurant_id": "40363590"
    },{
      "address": {
        "building": "1418",
        "coord": [
          -73.95685019999999,
          40.7753401
        ],
        "street": "Third Avenue",
        "zipcode": "10028"
      },
      "borough": "Manhattan",
      "cuisine": "Continental",
      "grades": [
        {
          "date": {
            "$date": 1401667200000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1388102400000
          },
          "grade": "A",
          "score": 8
        },
        {
          "date": {
            "$date": 1363564800000
          },
          "grade": "B",
          "score": 26
        },
        {
          "date": {
            "$date": 1328054400000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1309910400000
          },
          "grade": "B",
          "score": 25
        }
      ],
      "name": "Lorenzo & Maria'S",
      "restaurant_id": "40363630"
    },{
      "address": {
        "building": "464",
        "coord": [
          -73.9791458,
          40.744328
        ],
        "street": "3 Avenue",
        "zipcode": "10016"
      },
      "borough": "Manhattan",
      "cuisine": "Pizza",
      "grades": [
        {
          "date": {
            "$date": 1407196800000
          },
          "grade": "A",
          "score": 3
        },
        {
          "date": {
            "$date": 1394064000000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1373328000000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1359504000000
          },
          "grade": "A",
          "score": 4
        },
        {
          "date": {
            "$date": 1325721600000
          },
          "grade": "A",
          "score": 2
        },
        {
          "date": {
            "$date": 1316995200000
          },
          "grade": "A",
          "score": 0
        }
      ],
      "name": "Domino'S Pizza",
      "restaurant_id": "40363644"
    },{
      "address": {
        "building": "437",
        "coord": [
          -73.975393,
          40.757365
        ],
        "street": "Madison Avenue",
        "zipcode": "10022"
      },
      "borough": "Manhattan",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1401753600000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1370563200000
          },
          "grade": "A",
          "score": 5
        },
        {
          "date": {
            "$date": 1340928000000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1328486400000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1308787200000
          },
          "grade": "A",
          "score": 13
        }
      ],
      "name": "Berkely",
      "restaurant_id": "40363685"
    },{
      "address": {
        "building": "1031",
        "coord": [
          -73.9075537,
          40.6438684
        ],
        "street": "East   92 Street",
        "zipcode": "11236"
      },
      "borough": "Brooklyn",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1391558400000
          },
          "grade": "A",
          "score": 0
        },
        {
          "date": {
            "$date": 1359417600000
          },
          "grade": "A",
          "score": 3
        },
        {
          "date": {
            "$date": 1323302400000
          },
          "grade": "A",
          "score": 10
        }
      ],
      "name": "Sonny'S Heros",
      "restaurant_id": "40363744"
    },{
      "address": {
        "building": "1111",
        "coord": [
          -74.0796436,
          40.59878339999999
        ],
        "street": "Hylan Boulevard",
        "zipcode": "10305"
      },
      "borough": "Staten Island",
      "cuisine": "Ice Cream, Gelato, Yogurt, Ices",
      "grades": [
        {
          "date": {
            "$date": 1398297600000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1361836800000
          },
          "grade": "A",
          "score": 5
        },
        {
          "date": {
            "$date": 1328140800000
          },
          "grade": "A",
          "score": 2
        }
      ],
      "name": "Carvel Ice Cream",
      "restaurant_id": "40363834"
    },{
      "address": {
        "building": "976",
        "coord": [
          -73.92701509999999,
          40.6620192
        ],
        "street": "Rutland Road",
        "zipcode": "11212"
      },
      "borough": "Brooklyn",
      "cuisine": "Chinese",
      "grades": [
        {
          "date": {
            "$date": 1398211200000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1364256000000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1331596800000
          },
          "grade": "A",
          "score": 4
        },
        {
          "date": {
            "$date": 1321401600000
          },
          "grade": "A",
          "score": 13
        }
      ],
      "name": "Golden Pavillion",
      "restaurant_id": "40363920"
    },{
      "address": {
        "building": "148",
        "coord": [
          -73.9806854,
          40.7778589
        ],
        "street": "West   72 Street",
        "zipcode": "10023"
      },
      "borough": "Manhattan",
      "cuisine": "Pizza",
      "grades": [
        {
          "date": {
            "$date": 1417996800000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1399248000000
          },
          "grade": "B",
          "score": 18
        },
        {
          "date": {
            "$date": 1365120000000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1333065600000
          },
          "grade": "A",
          "score": 9
        }
      ],
      "name": "Domino'S Pizza",
      "restaurant_id": "40363945"
    },{
      "address": {
        "building": "364",
        "coord": [
          -73.96084119999999,
          40.8014307
        ],
        "street": "West  110 Street",
        "zipcode": "10025"
      },
      "borough": "Manhattan",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1409788800000
          },
          "grade": "B",
          "score": 20
        },
        {
          "date": {
            "$date": 1393372800000
          },
          "grade": "B",
          "score": 23
        },
        {
          "date": {
            "$date": 1364169600000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1329782400000
          },
          "grade": "A",
          "score": 8
        }
      ],
      "name": "Spoon Bread Catering",
      "restaurant_id": "40364179"
    },{
      "address": {
        "building": "1423",
        "coord": [
          -73.9615132,
          40.6253268
        ],
        "street": "Avenue J",
        "zipcode": "11230"
      },
      "borough": "Brooklyn",
      "cuisine": "Jewish/Kosher",
      "grades": [
        {
          "date": {
            "$date": 1418947200000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1386201600000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1354752000000
          },
          "grade": "A",
          "score": 9
        }
      ],
      "name": "Kosher Bagel Hole",
      "restaurant_id": "40364220"
    },{
      "address": {
        "building": "0",
        "coord": [
          -84.2040813,
          9.9986585
        ],
        "street": "Guardia Airport Parking",
        "zipcode": "11371"
      },
      "borough": "Queens",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1400198400000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1368144000000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1337040000000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1320192000000
          },
          "grade": "C",
          "score": 32
        }
      ],
      "name": "Terminal Cafe/Yankee Clipper",
      "restaurant_id": "40364262"
    },{
      "address": {
        "building": "73",
        "coord": [
          -74.1178949,
          40.5734906
        ],
        "street": "New Dorp Plaza",
        "zipcode": "10306"
      },
      "borough": "Staten Island",
      "cuisine": "Delicatessen",
      "grades": [
        {
          "date": {
            "$date": 1416268800000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1383782400000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1366761600000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1332201600000
          },
          "grade": "A",
          "score": 5
        }
      ],
      "name": "Plaza Bagels & Deli",
      "restaurant_id": "40364286"
    },{
      "address": {
        "building": "277",
        "coord": [
          -73.8941893,
          40.8634684
        ],
        "street": "East Kingsbridge Road",
        "zipcode": "10458"
      },
      "borough": "Bronx",
      "cuisine": "Chinese",
      "grades": [
        {
          "date": {
            "$date": 1393804800000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1380153600000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1363651200000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1346198400000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1313539200000
          },
          "grade": "A",
          "score": 13
        }
      ],
      "name": "Happy Garden",
      "restaurant_id": "40364296"
    },{
      "address": {
        "building": "203",
        "coord": [
          -74.15235919999999,
          40.5563756
        ],
        "street": "Giffords Lane",
        "zipcode": "10308"
      },
      "borough": "Staten Island",
      "cuisine": "Delicatessen",
      "grades": [
        {
          "date": {
            "$date": 1420416000000
          },
          "grade": "A",
          "score": 4
        },
        {
          "date": {
            "$date": 1410393600000
          },
          "grade": "C",
          "score": 39
        },
        {
          "date": {
            "$date": 1395273600000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1358985600000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1337731200000
          },
          "grade": "A",
          "score": 10
        }
      ],
      "name": "B & M Hot Bagel & Grocery",
      "restaurant_id": "40364299"
    },{
      "address": {
        "building": "94",
        "coord": [
          -74.0061936,
          40.7092038
        ],
        "street": "Fulton Street",
        "zipcode": "10038"
      },
      "borough": "Manhattan",
      "cuisine": "Chicken",
      "grades": [
        {
          "date": {
            "$date": 1420502400000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1405382400000
          },
          "grade": "C",
          "score": 48
        },
        {
          "date": {
            "$date": 1367452800000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1348444800000
          },
          "grade": "A",
          "score": 8
        },
        {
          "date": {
            "$date": 1334793600000
          },
          "grade": "A",
          "score": 7
        }
      ],
      "name": "Texas Rotisserie",
      "restaurant_id": "40364304"
    },{
      "address": {
        "building": "10004",
        "coord": [
          -74.03400479999999,
          40.6127077
        ],
        "street": "4 Avenue",
        "zipcode": "11209"
      },
      "borough": "Brooklyn",
      "cuisine": "Italian",
      "grades": [
        {
          "date": {
            "$date": 1393286400000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1372291200000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1354492800000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1320796800000
          },
          "grade": "A",
          "score": 12
        }
      ],
      "name": "Philadelhia Grille Express",
      "restaurant_id": "40364305"
    },{
      "address": {
        "building": "178",
        "coord": [
          -73.96252129999999,
          40.7098035
        ],
        "street": "Broadway",
        "zipcode": "11211"
      },
      "borough": "Brooklyn",
      "cuisine": "Steak",
      "grades": [
        {
          "date": {
            "$date": 1394236800000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1380326400000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1364256000000
          },
          "grade": "A",
          "score": 3
        },
        {
          "date": {
            "$date": 1347235200000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1313366400000
          },
          "grade": "A",
          "score": 13
        }
      ],
      "name": "Peter Luger Steakhouse",
      "restaurant_id": "40364335"
    },{
      "address": {
        "building": "1",
        "coord": [
          -73.97166039999999,
          40.764832
        ],
        "street": "East   60 Street",
        "zipcode": "10022"
      },
      "borough": "Manhattan",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1413417600000
          },
          "grade": "B",
          "score": 24
        },
        {
          "date": {
            "$date": 1398988800000
          },
          "grade": "A",
          "score": 4
        },
        {
          "date": {
            "$date": 1364860800000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1350604800000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1335484800000
          },
          "grade": "B",
          "score": 17
        },
        {
          "date": {
            "$date": 1322524800000
          },
          "grade": "A",
          "score": 11
        }
      ],
      "name": "Metropolitan Club",
      "restaurant_id": "40364347"
    },{
      "address": {
        "building": "837",
        "coord": [
          -73.9712,
          40.751703
        ],
        "street": "2 Avenue",
        "zipcode": "10017"
      },
      "borough": "Manhattan",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1405987200000
          },
          "grade": "B",
          "score": 19
        },
        {
          "date": {
            "$date": 1380153600000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1361836800000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1335744000000
          },
          "grade": "A",
          "score": 8
        },
        {
          "date": {
            "$date": 1317772800000
          },
          "grade": "A",
          "score": 12
        }
      ],
      "name": "Palm Restaurant",
      "restaurant_id": "40364355"
    },{
      "address": {
        "building": "21",
        "coord": [
          -73.9774394,
          40.7604522
        ],
        "street": "West   52 Street",
        "zipcode": "10019"
      },
      "borough": "Manhattan",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1400025600000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1376352000000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1333497600000
          },
          "grade": "A",
          "score": 12
        }
      ],
      "name": "21 Club",
      "restaurant_id": "40364362"
    },{
      "address": {
        "building": "658",
        "coord": [
          -73.81363999999999,
          40.82941100000001
        ],
        "street": "Clarence Ave",
        "zipcode": "10465"
      },
      "borough": "Bronx",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1403308800000
          },
          "grade": "A",
          "score": 5
        },
        {
          "date": {
            "$date": 1341964800000
          },
          "grade": "A",
          "score": 10
        }
      ],
      "name": "Manhem Club",
      "restaurant_id": "40364363"
    },{
      "address": {
        "building": "1028",
        "coord": [
          -73.966032,
          40.762832
        ],
        "street": "3 Avenue",
        "zipcode": "10065"
      },
      "borough": "Manhattan",
      "cuisine": "Italian",
      "grades": [
        {
          "date": {
            "$date": 1410825600000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1393200000000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1367539200000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1345420800000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1329091200000
          },
          "grade": "A",
          "score": 9
        }
      ],
      "name": "Isle Of Capri Resturant",
      "restaurant_id": "40364373"
    },{
      "address": {
        "building": "45",
        "coord": [
          -73.9891878,
          40.7375638
        ],
        "street": "East   18 Street",
        "zipcode": "10003"
      },
      "borough": "Manhattan",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1412726400000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1381363200000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1366761600000
          },
          "grade": "C",
          "score": 36
        },
        {
          "date": {
            "$date": 1326067200000
          },
          "grade": "A",
          "score": 9
        }
      ],
      "name": "Old Town Bar & Restaurant",
      "restaurant_id": "40364389"
    },{
      "address": {
        "building": "261",
        "coord": [
          -73.94839189999999,
          40.7224876
        ],
        "street": "Driggs Avenue",
        "zipcode": "11222"
      },
      "borough": "Brooklyn",
      "cuisine": "Polish",
      "grades": [
        {
          "date": {
            "$date": 1401494400000
          },
          "grade": "A",
          "score": 2
        },
        {
          "date": {
            "$date": 1368144000000
          },
          "grade": "A",
          "score": 3
        },
        {
          "date": {
            "$date": 1329436800000
          },
          "grade": "A",
          "score": 6
        },
        {
          "date": {
            "$date": 1318550400000
          },
          "grade": "C",
          "score": 54
        }
      ],
      "name": "Polish National Home",
      "restaurant_id": "40364404"
    },{
      "address": {
        "building": "62",
        "coord": [
          -74.00310999999999,
          40.7348888
        ],
        "street": "Charles Street",
        "zipcode": "10014"
      },
      "borough": "Manhattan",
      "cuisine": "Latin (Cuban, Dominican, Puerto Rican, South & Central American)",
      "grades": [
        {
          "date": {
            "$date": 1398988800000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1369008000000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1337817600000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1326844800000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1317600000000
          },
          "grade": "A",
          "score": 10
        }
      ],
      "name": "Seville Restaurant",
      "restaurant_id": "40364439"
    },{
      "address": {
        "building": "100",
        "coord": [
          -74.0010484,
          40.71599000000001
        ],
        "street": "Centre Street",
        "zipcode": "10013"
      },
      "borough": "Manhattan",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1393804800000
          },
          "grade": "A",
          "score": 8
        },
        {
          "date": {
            "$date": 1362700800000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1331251200000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1301529600000
          },
          "grade": "A",
          "score": 12
        }
      ],
      "name": "Criminal Court Bldg Cafeteria",
      "restaurant_id": "40364443"
    },{
      "address": {
        "building": "657",
        "coord": [
          -73.9056678,
          40.7066898
        ],
        "street": "Fairview Avenue",
        "zipcode": "11385"
      },
      "borough": "Queens",
      "cuisine": "German",
      "grades": [
        {
          "date": {
            "$date": 1394841600000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1363046400000
          },
          "grade": "A",
          "score": 2
        },
        {
          "date": {
            "$date": 1342828800000
          },
          "grade": "B",
          "score": 27
        },
        {
          "date": {
            "$date": 1322179200000
          },
          "grade": "B",
          "score": 24
        },
        {
          "date": {
            "$date": 1308700800000
          },
          "grade": "B",
          "score": 20
        }
      ],
      "name": "Gottscheer Hall",
      "restaurant_id": "40364449"
    },{
      "address": {
        "building": "180",
        "coord": [
          -73.9788694,
          40.7665961
        ],
        "street": "Central Park South",
        "zipcode": "10019"
      },
      "borough": "Manhattan",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1418601600000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1407369600000
          },
          "grade": "C",
          "score": 40
        },
        {
          "date": {
            "$date": 1375056000000
          },
          "grade": "A",
          "score": 2
        },
        {
          "date": {
            "$date": 1355356800000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1343606400000
          },
          "grade": "C",
          "score": 4
        },
        {
          "date": {
            "$date": 1329350400000
          },
          "grade": "A",
          "score": 2
        }
      ],
      "name": "Nyac Main Dining Room",
      "restaurant_id": "40364467"
    },{
      "address": {
        "building": "108",
        "coord": [
          -73.98146,
          40.7250067
        ],
        "street": "Avenue B",
        "zipcode": "10009"
      },
      "borough": "Manhattan",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1405296000000
          },
          "grade": "B",
          "score": 17
        },
        {
          "date": {
            "$date": 1388448000000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1350864000000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1336348800000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1318550400000
          },
          "grade": "A",
          "score": 12
        }
      ],
      "name": "7B Bar",
      "restaurant_id": "40364518"
    },{
      "address": {
        "building": "96-40",
        "coord": [
          -73.86137149999999,
          40.7293762
        ],
        "street": "Queens Boulevard",
        "zipcode": "11374"
      },
      "borough": "Queens",
      "cuisine": "Jewish/Kosher",
      "grades": [
        {
          "date": {
            "$date": 1394668800000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1380499200000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1366934400000
          },
          "grade": "A",
          "score": 8
        },
        {
          "date": {
            "$date": 1347321600000
          },
          "grade": "B",
          "score": 24
        },
        {
          "date": {
            "$date": 1316390400000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1300320000000
          },
          "grade": "A",
          "score": 12
        }
      ],
      "name": "Ben-Best Deli & Restaurant",
      "restaurant_id": "40364529"
    },{
      "address": {
        "building": "215",
        "coord": [
          -73.9805679,
          40.7659436
        ],
        "street": "West 57 Street",
        "zipcode": "10019"
      },
      "borough": "Manhattan",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1411603200000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1392336000000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1376006400000
          },
          "grade": "A",
          "score": 2
        },
        {
          "date": {
            "$date": 1361491200000
          },
          "grade": "B",
          "score": 20
        },
        {
          "date": {
            "$date": 1329350400000
          },
          "grade": "A",
          "score": 8
        }
      ],
      "name": "Cafe Atelier (Art Students League)",
      "restaurant_id": "40364531"
    },{
      "address": {
        "building": "845",
        "coord": [
          -73.965531,
          40.765431
        ],
        "street": "Lexington Avenue",
        "zipcode": "10065"
      },
      "borough": "Manhattan",
      "cuisine": "Steak",
      "grades": [
        {
          "date": {
            "$date": 1395792000000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1363824000000
          },
          "grade": "A",
          "score": 8
        },
        {
          "date": {
            "$date": 1350518400000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1336348800000
          },
          "grade": "A",
          "score": 3
        },
        {
          "date": {
            "$date": 1305590400000
          },
          "grade": "A",
          "score": 5
        }
      ],
      "name": "Donohue'S Steak House",
      "restaurant_id": "40364572"
    },{
      "address": {
        "building": "311",
        "coord": [
          -73.98621899999999,
          40.763406
        ],
        "street": "West   51 Street",
        "zipcode": "10019"
      },
      "borough": "Manhattan",
      "cuisine": "French",
      "grades": [
        {
          "date": {
            "$date": 1415577600000
          },
          "grade": "B",
          "score": 15
        },
        {
          "date": {
            "$date": 1396483200000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1374019200000
          },
          "grade": "C",
          "score": 36
        },
        {
          "date": {
            "$date": 1360108800000
          },
          "grade": "B",
          "score": 22
        },
        {
          "date": {
            "$date": 1342396800000
          },
          "grade": "C",
          "score": 36
        },
        {
          "date": {
            "$date": 1331164800000
          },
          "grade": "C",
          "score": 7
        }
      ],
      "name": "Tout Va Bien",
      "restaurant_id": "40364576"
    },{
      "address": {
        "building": "386",
        "coord": [
          -73.9818918,
          40.6901211
        ],
        "street": "Flatbush Avenue Extension",
        "zipcode": "11201"
      },
      "borough": "Brooklyn",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1415923200000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1394409600000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1357776000000
          },
          "grade": "A",
          "score": 3
        },
        {
          "date": {
            "$date": 1346716800000
          },
          "grade": "A",
          "score": 7
        }
      ],
      "name": "Junior'S",
      "restaurant_id": "40364581"
    },{
      "address": {
        "building": "37",
        "coord": [
          -74.138263,
          40.546681
        ],
        "street": "Mansion Ave",
        "zipcode": "10308"
      },
      "borough": "Staten Island",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1398124800000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1380067200000
          },
          "grade": "A",
          "score": 4
        },
        {
          "date": {
            "$date": 1339200000000
          },
          "grade": "A",
          "score": 8
        }
      ],
      "name": "Great Kills Yacht Club",
      "restaurant_id": "40364610"
    },{
      "address": {
        "building": "251",
        "coord": [
          -73.9775552,
          40.7432016
        ],
        "street": "East   31 Street",
        "zipcode": "10016"
      },
      "borough": "Manhattan",
      "cuisine": "Italian",
      "grades": [
        {
          "date": {
            "$date": 1398124800000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1371600000000
          },
          "grade": "C",
          "score": 32
        },
        {
          "date": {
            "$date": 1337644800000
          },
          "grade": "A",
          "score": 12
        }
      ],
      "name": "Marchis Restaurant",
      "restaurant_id": "40364668"
    },{
      "address": {
        "building": "2602",
        "coord": [
          -73.95443709999999,
          40.5877993
        ],
        "street": "East   15 Street",
        "zipcode": "11235"
      },
      "borough": "Brooklyn",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1400025600000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1367020800000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1353628800000
          },
          "grade": "B",
          "score": 27
        },
        {
          "date": {
            "$date": 1331683200000
          },
          "grade": "B",
          "score": 17
        },
        {
          "date": {
            "$date": 1310601600000
          },
          "grade": "B",
          "score": 21
        }
      ],
      "name": "Towne Cafe",
      "restaurant_id": "40364681"
    },{
      "address": {
        "building": ".1-A",
        "coord": [
          -48.9424,
          -16.3550032
        ],
        "street": "East 77 St",
        "zipcode": "10021"
      },
      "borough": "Manhattan",
      "cuisine": "Continental",
      "grades": [
        {
          "date": {
            "$date": 1416787200000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1381363200000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1364947200000
          },
          "grade": "B",
          "score": 18
        },
        {
          "date": {
            "$date": 1349136000000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1335312000000
          },
          "grade": "A",
          "score": 8
        }
      ],
      "name": "Dining Room",
      "restaurant_id": "40364691"
    },{
      "address": {
        "building": "56",
        "coord": [
          -74.004758,
          40.741207
        ],
        "street": "9 Avenue",
        "zipcode": "10011"
      },
      "borough": "Manhattan",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1402358400000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1370822400000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1348617600000
          },
          "grade": "B",
          "score": 24
        },
        {
          "date": {
            "$date": 1337817600000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1321228800000
          },
          "grade": "A",
          "score": 2
        }
      ],
      "name": "Old Homestead",
      "restaurant_id": "40364715"
    },{
      "address": {
        "building": "156-71",
        "coord": [
          -73.840437,
          40.6627235
        ],
        "street": "Crossbay Boulevard",
        "zipcode": "11414"
      },
      "borough": "Queens",
      "cuisine": "Pizza/Italian",
      "grades": [
        {
          "date": {
            "$date": 1414540800000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1383091200000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1370995200000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1332806400000
          },
          "grade": "A",
          "score": 9
        }
      ],
      "name": "New Park Pizzeria & Restaurant",
      "restaurant_id": "40364744"
    },{
      "address": {
        "building": "600",
        "coord": [
          -73.7522366,
          40.7766941
        ],
        "street": "West Drive",
        "zipcode": "11363"
      },
      "borough": "Queens",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1386115200000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1371081600000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1354752000000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1334188800000
          },
          "grade": "A",
          "score": 2
        },
        {
          "date": {
            "$date": 1311984000000
          },
          "grade": "B",
          "score": 23
        }
      ],
      "name": "Douglaston Club",
      "restaurant_id": "40364858"
    },{
      "address": {
        "building": "225",
        "coord": [
          -73.96485799999999,
          40.761899
        ],
        "street": "East   60 Street",
        "zipcode": "10022"
      },
      "borough": "Manhattan",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1407715200000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1394755200000
          },
          "grade": "A",
          "score": 3
        },
        {
          "date": {
            "$date": 1358294400000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1342051200000
          },
          "grade": "A",
          "score": 9
        }
      ],
      "name": "Serendipity 3",
      "restaurant_id": "40364863"
    },{
      "address": {
        "building": "461",
        "coord": [
          -74.002944,
          40.652779
        ],
        "street": "37 Street",
        "zipcode": "11232"
      },
      "borough": "Brooklyn",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1417132800000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1386115200000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1354752000000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1323129600000
          },
          "grade": "A",
          "score": 12
        }
      ],
      "name": "Melody Lanes",
      "restaurant_id": "40364889"
    },{
      "address": {
        "building": "30-13",
        "coord": [
          -73.9151096,
          40.763377
        ],
        "street": "Steinway Street",
        "zipcode": "11103"
      },
      "borough": "Queens",
      "cuisine": "Pizza",
      "grades": [
        {
          "date": {
            "$date": 1412553600000
          },
          "grade": "A",
          "score": 2
        },
        {
          "date": {
            "$date": 1381363200000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1351036800000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1339545600000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1326758400000
          },
          "grade": "A",
          "score": 10
        }
      ],
      "name": "Rizzo'S Fine Pizza",
      "restaurant_id": "40364920"
    },{
      "address": {
        "building": "2222",
        "coord": [
          -73.84971759999999,
          40.8304811
        ],
        "street": "Haviland Avenue",
        "zipcode": "10462"
      },
      "borough": "Bronx",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1418860800000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1398902400000
          },
          "grade": "B",
          "score": 17
        },
        {
          "date": {
            "$date": 1363219200000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1348099200000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1328659200000
          },
          "grade": "B",
          "score": 19
        }
      ],
      "name": "The New Starling Athletic Club Of The Bronx",
      "restaurant_id": "40364956"
    },{
      "address": {
        "building": "567",
        "coord": [
          -74.00619499999999,
          40.735663
        ],
        "street": "Hudson Street",
        "zipcode": "10014"
      },
      "borough": "Manhattan",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1406505600000
          },
          "grade": "A",
          "score": 2
        },
        {
          "date": {
            "$date": 1374710400000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1360022400000
          },
          "grade": "A",
          "score": 2
        },
        {
          "date": {
            "$date": 1338249600000
          },
          "grade": "A",
          "score": 6
        },
        {
          "date": {
            "$date": 1324598400000
          },
          "grade": "A",
          "score": 5
        }
      ],
      "name": "White Horse Tavern",
      "restaurant_id": "40364958"
    },{
      "address": {
        "building": "67",
        "coord": [
          -74.0707363,
          40.59321569999999
        ],
        "street": "Olympia Boulevard",
        "zipcode": "10305"
      },
      "borough": "Staten Island",
      "cuisine": "Italian",
      "grades": [
        {
          "date": {
            "$date": 1398297600000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1365033600000
          },
          "grade": "A",
          "score": 2
        },
        {
          "date": {
            "$date": 1328140800000
          },
          "grade": "A",
          "score": 5
        },
        {
          "date": {
            "$date": 1311379200000
          },
          "grade": "A",
          "score": 11
        }
      ],
      "name": "Crystal Room",
      "restaurant_id": "40365013"
    },{
      "address": {
        "building": "390",
        "coord": [
          -74.07444319999999,
          40.6096914
        ],
        "street": "Hylan Boulevard",
        "zipcode": "10305"
      },
      "borough": "Staten Island",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1403308800000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1371254400000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1346284800000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1317945600000
          },
          "grade": "B",
          "score": 20
        }
      ],
      "name": "Labetti'S Post # 2159",
      "restaurant_id": "40365022"
    },{
      "address": {
        "building": "1",
        "coord": [
          -73.9727638,
          40.588853
        ],
        "street": "Bouck Court",
        "zipcode": "11223"
      },
      "borough": "Brooklyn",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1418169600000
          },
          "grade": "A",
          "score": 2
        },
        {
          "date": {
            "$date": 1403654400000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1382486400000
          },
          "grade": "C",
          "score": 28
        },
        {
          "date": {
            "$date": 1363824000000
          },
          "grade": "C",
          "score": 29
        },
        {
          "date": {
            "$date": 1339718400000
          },
          "grade": "A",
          "score": 10
        }
      ],
      "name": "Shell Lanes",
      "restaurant_id": "40365043"
    },{
      "address": {
        "building": "15",
        "coord": [
          -73.9896713,
          40.7287978
        ],
        "street": "East    7 Street",
        "zipcode": "10003"
      },
      "borough": "Manhattan",
      "cuisine": "Irish",
      "grades": [
        {
          "date": {
            "$date": 1402099200000
          },
          "grade": "A",
          "score": 8
        },
        {
          "date": {
            "$date": 1389225600000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1370995200000
          },
          "grade": "A",
          "score": 8
        },
        {
          "date": {
            "$date": 1337558400000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1326240000000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1313020800000
          },
          "grade": "B",
          "score": 16
        }
      ],
      "name": "Mcsorley'S Old Ale House",
      "restaurant_id": "40365075"
    },{
      "address": {
        "building": "93",
        "coord": [
          -73.99950489999999,
          40.7169224
        ],
        "street": "Baxter Street",
        "zipcode": "10013"
      },
      "borough": "Manhattan",
      "cuisine": "Italian",
      "grades": [
        {
          "date": {
            "$date": 1418601600000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1386288000000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1350950400000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1338768000000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1326326400000
          },
          "grade": "A",
          "score": 13
        }
      ],
      "name": "Forlinis Restaurant",
      "restaurant_id": "40365098"
    },{
      "address": {
        "building": "6736",
        "coord": [
          -74.2274942,
          40.5071996
        ],
        "street": "Hylan Boulevard",
        "zipcode": "10309"
      },
      "borough": "Staten Island",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1407888000000
          },
          "grade": "A",
          "score": 3
        },
        {
          "date": {
            "$date": 1376956800000
          },
          "grade": "B",
          "score": 19
        },
        {
          "date": {
            "$date": 1339977600000
          },
          "grade": "A",
          "score": 6
        }
      ],
      "name": "South Shore Swimming Club",
      "restaurant_id": "40365120"
    },{
      "address": {
        "building": "331",
        "coord": [
          -74.0037823,
          40.7380122
        ],
        "street": "West    4 Street",
        "zipcode": "10014"
      },
      "borough": "Manhattan",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1416182400000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1403827200000
          },
          "grade": "A",
          "score": 5
        },
        {
          "date": {
            "$date": 1368576000000
          },
          "grade": "A",
          "score": 4
        },
        {
          "date": {
            "$date": 1336521600000
          },
          "grade": "A",
          "score": 12
        }
      ],
      "name": "Corner Bistro",
      "restaurant_id": "40365166"
    },{
      "address": {
        "building": "1449",
        "coord": [
          -73.94933739999999,
          40.6509823
        ],
        "street": "Nostrand Avenue",
        "zipcode": "11226"
      },
      "borough": "Brooklyn",
      "cuisine": "Donuts",
      "grades": [
        {
          "date": {
            "$date": 1413849600000
          },
          "grade": "B",
          "score": 16
        },
        {
          "date": {
            "$date": 1400630400000
          },
          "grade": "A",
          "score": 5
        },
        {
          "date": {
            "$date": 1367452800000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1354492800000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1336521600000
          },
          "grade": "B",
          "score": 16
        },
        {
          "date": {
            "$date": 1323820800000
          },
          "grade": "A",
          "score": 13
        }
      ],
      "name": "Nostrand Donut Shop",
      "restaurant_id": "40365226"
    },{
      "address": {
        "building": "1616",
        "coord": [
          -73.952449,
          40.776325
        ],
        "street": "2 Avenue",
        "zipcode": "10028"
      },
      "borough": "Manhattan",
      "cuisine": "Irish",
      "grades": [
        {
          "date": {
            "$date": 1393545600000
          },
          "grade": "A",
          "score": 2
        },
        {
          "date": {
            "$date": 1377820800000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1346025600000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1315958400000
          },
          "grade": "A",
          "score": 9
        }
      ],
      "name": "Dorrian'S Red Hand Restaurant",
      "restaurant_id": "40365239"
    },{
      "address": {
        "building": "3",
        "coord": [
          -73.97557069999999,
          40.7596796
        ],
        "street": "East   52 Street",
        "zipcode": "10022"
      },
      "borough": "Manhattan",
      "cuisine": "French",
      "grades": [
        {
          "date": {
            "$date": 1397001600000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1362441600000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1328140800000
          },
          "grade": "A",
          "score": 13
        }
      ],
      "name": "La Grenouille",
      "restaurant_id": "40365264"
    },{
      "address": {
        "building": "4035",
        "coord": [
          -73.9395182,
          40.8422945
        ],
        "street": "Broadway",
        "zipcode": "10032"
      },
      "borough": "Manhattan",
      "cuisine": "Pizza",
      "grades": [
        {
          "date": {
            "$date": 1391990400000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1359936000000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1325635200000
          },
          "grade": "A",
          "score": 6
        },
        {
          "date": {
            "$date": 1316044800000
          },
          "grade": "C",
          "score": 60
        }
      ],
      "name": "Como Pizza",
      "restaurant_id": "40365280"
    },{
      "address": {
        "building": "842",
        "coord": [
          -73.97063700000001,
          40.751495
        ],
        "street": "2 Avenue",
        "zipcode": "10017"
      },
      "borough": "Manhattan",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1405987200000
          },
          "grade": "A",
          "score": 6
        },
        {
          "date": {
            "$date": 1369699200000
          },
          "grade": "A",
          "score": 2
        },
        {
          "date": {
            "$date": 1338249600000
          },
          "grade": "A",
          "score": 8
        },
        {
          "date": {
            "$date": 1325721600000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1312934400000
          },
          "grade": "B",
          "score": 24
        }
      ],
      "name": "Keats Restaurant",
      "restaurant_id": "40365288"
    },{
      "address": {
        "building": "146",
        "coord": [
          -73.9973041,
          40.7188698
        ],
        "street": "Mulberry Street",
        "zipcode": "10013"
      },
      "borough": "Manhattan",
      "cuisine": "Italian",
      "grades": [
        {
          "date": {
            "$date": 1398988800000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1363219200000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1348617600000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1329264000000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1316044800000
          },
          "grade": "A",
          "score": 11
        }
      ],
      "name": "Angelo Of Mulberry St.",
      "restaurant_id": "40365293"
    },{
      "address": {
        "building": "103",
        "coord": [
          -74.001043,
          40.729795
        ],
        "street": "Macdougal Street",
        "zipcode": "10012"
      },
      "borough": "Manhattan",
      "cuisine": "Mexican",
      "grades": [
        {
          "date": {
            "$date": 1400716800000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1381363200000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1363737600000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1337212800000
          },
          "grade": "B",
          "score": 20
        }
      ],
      "name": "Panchito'S",
      "restaurant_id": "40365348"
    },{
      "address": {
        "building": "7201",
        "coord": [
          -74.0166091,
          40.6284767
        ],
        "street": "8 Avenue",
        "zipcode": "11228"
      },
      "borough": "Brooklyn",
      "cuisine": "Italian",
      "grades": [
        {
          "date": {
            "$date": 1417651200000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1392768000000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1373328000000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1338940800000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1324252800000
          },
          "grade": "A",
          "score": 12
        }
      ],
      "name": "New Corner",
      "restaurant_id": "40365355"
    },{
      "address": {
        "building": "15",
        "coord": [
          -73.98126069999999,
          40.7547107
        ],
        "street": "West   43 Street",
        "zipcode": "10036"
      },
      "borough": "Manhattan",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1421280000000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1404691200000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1389657600000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1374192000000
          },
          "grade": "C",
          "score": 29
        },
        {
          "date": {
            "$date": 1360022400000
          },
          "grade": "A",
          "score": 12
        }
      ],
      "name": "The Princeton Club",
      "restaurant_id": "40365361"
    },{
      "address": {
        "building": "106",
        "coord": [
          -74.0003315,
          40.7274874
        ],
        "street": "West Houston Street",
        "zipcode": "10012"
      },
      "borough": "Manhattan",
      "cuisine": "Italian",
      "grades": [
        {
          "date": {
            "$date": 1396224000000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1381190400000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1364515200000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1346803200000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1330905600000
          },
          "grade": "A",
          "score": 12
        }
      ],
      "name": "Arturo'S",
      "restaurant_id": "40365387"
    },{
      "address": {
        "building": "405",
        "coord": [
          -73.9646207,
          40.7550069
        ],
        "street": "East   52 Street",
        "zipcode": "10022"
      },
      "borough": "Manhattan",
      "cuisine": "French",
      "grades": [
        {
          "date": {
            "$date": 1405296000000
          },
          "grade": "B",
          "score": 14
        },
        {
          "date": {
            "$date": 1385942400000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1365379200000
          },
          "grade": "B",
          "score": 22
        },
        {
          "date": {
            "$date": 1347840000000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1333411200000
          },
          "grade": "A",
          "score": 12
        }
      ],
      "name": "Le Perigord",
      "restaurant_id": "40365414"
    },{
      "address": {
        "building": "4241",
        "coord": [
          -73.9365108,
          40.8497077
        ],
        "street": "Broadway",
        "zipcode": "10033"
      },
      "borough": "Manhattan",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1416009600000
          },
          "grade": "B",
          "score": 20
        },
        {
          "date": {
            "$date": 1398384000000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1395964800000
          },
          "grade": "P",
          "score": 15
        },
        {
          "date": {
            "$date": 1376870400000
          },
          "grade": "B",
          "score": 23
        },
        {
          "date": {
            "$date": 1361318400000
          },
          "grade": "A",
          "score": 3
        },
        {
          "date": {
            "$date": 1345593600000
          },
          "grade": "B",
          "score": 23
        },
        {
          "date": {
            "$date": 1327881600000
          },
          "grade": "C",
          "score": 48
        }
      ],
      "name": "Reynold'S Bar",
      "restaurant_id": "40365423"
    },{
      "address": {
        "building": "1758",
        "coord": [
          -74.1220973,
          40.6129407
        ],
        "street": "Victory Boulevard",
        "zipcode": "10314"
      },
      "borough": "Staten Island",
      "cuisine": "Pizza/Italian",
      "grades": [
        {
          "date": {
            "$date": 1416441600000
          },
          "grade": "A",
          "score": 5
        },
        {
          "date": {
            "$date": 1389571200000
          },
          "grade": "B",
          "score": 14
        },
        {
          "date": {
            "$date": 1366848000000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1349740800000
          },
          "grade": "A",
          "score": 4
        },
        {
          "date": {
            "$date": 1335916800000
          },
          "grade": "B",
          "score": 22
        }
      ],
      "name": "Joe & Pat'S Pizzeria",
      "restaurant_id": "40365454"
    },{
      "address": {
        "building": "113",
        "coord": [
          -73.9979214,
          40.7371344
        ],
        "street": "West   13 Street",
        "zipcode": "10011"
      },
      "borough": "Manhattan",
      "cuisine": "Spanish",
      "grades": [
        {
          "date": {
            "$date": 1406246400000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1395878400000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1358121600000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1325116800000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1312329600000
          },
          "grade": "A",
          "score": 13
        }
      ],
      "name": "Spain Restaurant & Bar",
      "restaurant_id": "40365472"
    },{
      "address": {
        "building": "206",
        "coord": [
          -73.9446421,
          40.7253944
        ],
        "street": "Nassau Avenue",
        "zipcode": "11222"
      },
      "borough": "Brooklyn",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1416355200000
          },
          "grade": "A",
          "score": 5
        },
        {
          "date": {
            "$date": 1399593600000
          },
          "grade": "B",
          "score": 19
        },
        {
          "date": {
            "$date": 1371081600000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1350432000000
          },
          "grade": "A",
          "score": 13
        }
      ],
      "name": "Palace Cafe",
      "restaurant_id": "40365473"
    },{
      "address": {
        "building": "72",
        "coord": [
          -73.92506,
          40.8275556
        ],
        "street": "East  161 Street",
        "zipcode": "10451"
      },
      "borough": "Bronx",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1397520000000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1384387200000
          },
          "grade": "A",
          "score": 4
        },
        {
          "date": {
            "$date": 1375056000000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1356912000000
          },
          "grade": "B",
          "score": 15
        },
        {
          "date": {
            "$date": 1338336000000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1326067200000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1313366400000
          },
          "grade": "C",
          "score": 37
        }
      ],
      "name": "Yankee Tavern",
      "restaurant_id": "40365499"
    },{
      "address": {
        "building": "203",
        "coord": [
          -73.99987229999999,
          40.7386361
        ],
        "street": "West   14 Street",
        "zipcode": "10011"
      },
      "borough": "Manhattan",
      "cuisine": "Donuts",
      "grades": [
        {
          "date": {
            "$date": 1392076800000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1360281600000
          },
          "grade": "A",
          "score": 2
        },
        {
          "date": {
            "$date": 1341446400000
          },
          "grade": "B",
          "score": 18
        },
        {
          "date": {
            "$date": 1329868800000
          },
          "grade": "B",
          "score": 16
        },
        {
          "date": {
            "$date": 1312761600000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1300233600000
          },
          "grade": "A",
          "score": 12
        }
      ],
      "name": "Donut Pub",
      "restaurant_id": "40365525"
    },{
      "address": {
        "building": "146",
        "coord": [
          -74.0056649,
          40.7452371
        ],
        "street": "10 Avenue",
        "zipcode": "10011"
      },
      "borough": "Manhattan",
      "cuisine": "Irish",
      "grades": [
        {
          "date": {
            "$date": 1412208000000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1378771200000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1360022400000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1322006400000
          },
          "grade": "A",
          "score": 11
        }
      ],
      "name": "Moran'S Chelsea",
      "restaurant_id": "40365526"
    },{
      "address": {
        "building": "229",
        "coord": [
          -73.9590059,
          40.7090147
        ],
        "street": "Havemeyer Street",
        "zipcode": "11211"
      },
      "borough": "Brooklyn",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1408320000000
          },
          "grade": "A",
          "score": 8
        },
        {
          "date": {
            "$date": 1389139200000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1369008000000
          },
          "grade": "B",
          "score": 21
        },
        {
          "date": {
            "$date": 1348099200000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1316649600000
          },
          "grade": "A",
          "score": 11
        }
      ],
      "name": "Reben Luncheonette",
      "restaurant_id": "40365546"
    },{
      "address": {
        "building": "1024",
        "coord": [
          -73.96392089999999,
          40.8033908
        ],
        "street": "Amsterdam Avenue",
        "zipcode": "10025"
      },
      "borough": "Manhattan",
      "cuisine": "Italian",
      "grades": [
        {
          "date": {
            "$date": 1402531200000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1389225600000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1372118400000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1338508800000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1323907200000
          },
          "grade": "A",
          "score": 10
        }
      ],
      "name": "V & T Restaurant",
      "restaurant_id": "40365577"
    },{
      "address": {
        "building": "181-08",
        "coord": [
          -73.7867565,
          40.7271312
        ],
        "street": "Union Turnpike",
        "zipcode": "11366"
      },
      "borough": "Queens",
      "cuisine": "Chinese",
      "grades": [
        {
          "date": {
            "$date": 1413936000000
          },
          "grade": "B",
          "score": 14
        },
        {
          "date": {
            "$date": 1397001600000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1373673600000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1357084800000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1355356800000
          },
          "grade": "P",
          "score": 2
        },
        {
          "date": {
            "$date": 1340064000000
          },
          "grade": "C",
          "score": 36
        }
      ],
      "name": "King Yum Restaurant",
      "restaurant_id": "40365592"
    },{
      "address": {
        "building": "8104",
        "coord": [
          -73.8850023,
          40.7494272
        ],
        "street": "37 Avenue",
        "zipcode": "11372"
      },
      "borough": "Queens",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1404691200000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1391644800000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1376438400000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1363737600000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1330387200000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1319500800000
          },
          "grade": "A",
          "score": 10
        }
      ],
      "name": "Jahn'S Restaurant",
      "restaurant_id": "40365627"
    },{
      "address": {
        "building": "6322",
        "coord": [
          -73.9896898,
          40.6199526
        ],
        "street": "18 Avenue",
        "zipcode": "11204"
      },
      "borough": "Brooklyn",
      "cuisine": "Pizza",
      "grades": [
        {
          "date": {
            "$date": 1419897600000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1400112000000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1383004800000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1349481600000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1332979200000
          },
          "grade": "A",
          "score": 13
        }
      ],
      "name": "J&V Famous Pizza",
      "restaurant_id": "40365632"
    },{
      "address": {
        "building": "910",
        "coord": [
          -73.9799932,
          40.7660886
        ],
        "street": "Seventh Avenue",
        "zipcode": "10019"
      },
      "borough": "Manhattan",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1420675200000
          },
          "grade": "Z",
          "score": 35
        },
        {
          "date": {
            "$date": 1401667200000
          },
          "grade": "B",
          "score": 19
        },
        {
          "date": {
            "$date": 1385337600000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1372032000000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1354579200000
          },
          "grade": "B",
          "score": 24
        },
        {
          "date": {
            "$date": 1339632000000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1330041600000
          },
          "grade": "B",
          "score": 21
        }
      ],
      "name": "La Parisienne Diner",
      "restaurant_id": "40365633"
    },{
      "address": {
        "building": "326",
        "coord": [
          -73.989131,
          40.760039
        ],
        "street": "West 46 Street",
        "zipcode": "10036"
      },
      "borough": "Manhattan",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1410307200000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1380067200000
          },
          "grade": "A",
          "score": 6
        },
        {
          "date": {
            "$date": 1347321600000
          },
          "grade": "A",
          "score": 5
        },
        {
          "date": {
            "$date": 1334793600000
          },
          "grade": "A",
          "score": 8
        },
        {
          "date": {
            "$date": 1319587200000
          },
          "grade": "A",
          "score": 13
        }
      ],
      "name": "Joe Allen Restaurant",
      "restaurant_id": "40365644"
    },{
      "address": {
        "building": "3823",
        "coord": [
          -74.16536339999999,
          40.5450793
        ],
        "street": "Richmond Avenue",
        "zipcode": "10312"
      },
      "borough": "Staten Island",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1405382400000
          },
          "grade": "B",
          "score": 20
        },
        {
          "date": {
            "$date": 1364774400000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1331510400000
          },
          "grade": "A",
          "score": 11
        }
      ],
      "name": "Joyce'S Tavern",
      "restaurant_id": "40365692"
    },{
      "address": {
        "building": "351",
        "coord": [
          -73.96117869999999,
          40.7619226
        ],
        "street": "East   62 Street",
        "zipcode": "10065"
      },
      "borough": "Manhattan",
      "cuisine": "Italian",
      "grades": [
        {
          "date": {
            "$date": 1415836800000
          },
          "grade": "B",
          "score": 24
        },
        {
          "date": {
            "$date": 1393545600000
          },
          "grade": "B",
          "score": 19
        },
        {
          "date": {
            "$date": 1370822400000
          },
          "grade": "B",
          "score": 27
        },
        {
          "date": {
            "$date": 1336521600000
          },
          "grade": "A",
          "score": 12
        }
      ],
      "name": "Il Vagabondo Restaurant",
      "restaurant_id": "40365709"
    },{
      "address": {
        "building": "319321",
        "coord": [
          -73.988948,
          40.760337
        ],
        "street": "323 W. 46Th St.",
        "zipcode": "10036"
      },
      "borough": "Manhattan",
      "cuisine": "Italian",
      "grades": [
        {
          "date": {
            "$date": 1399939200000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1384214400000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1367020800000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1323216000000
          },
          "grade": "A",
          "score": 7
        }
      ],
      "name": "Barbetta Restaurant",
      "restaurant_id": "40365726"
    },{
      "address": {
        "building": "2911",
        "coord": [
          -73.982241,
          40.576366
        ],
        "street": "West   15 Street",
        "zipcode": "11224"
      },
      "borough": "Brooklyn",
      "cuisine": "Italian",
      "grades": [
        {
          "date": {
            "$date": 1418860800000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1400112000000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1370995200000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1328486400000
          },
          "grade": "A",
          "score": 9
        }
      ],
      "name": "Gargiulo'S Restaurant",
      "restaurant_id": "40365784"
    },{
      "address": {
        "building": "236",
        "coord": [
          -73.9827418,
          40.7655827
        ],
        "street": "West   56 Street",
        "zipcode": "10019"
      },
      "borough": "Manhattan",
      "cuisine": "Italian",
      "grades": [
        {
          "date": {
            "$date": 1399248000000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1376265600000
          },
          "grade": "A",
          "score": 6
        },
        {
          "date": {
            "$date": 1344816000000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1330387200000
          },
          "grade": "A",
          "score": 13
        }
      ],
      "name": "Patsy'S Italian Restaurant",
      "restaurant_id": "40365789"
    },{
      "address": {
        "building": "10701",
        "coord": [
          -73.856132,
          40.743841
        ],
        "street": "Corona Avenue",
        "zipcode": "11368"
      },
      "borough": "Queens",
      "cuisine": "Italian",
      "grades": [
        {
          "date": {
            "$date": 1405555200000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1393286400000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1364342400000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1328572800000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1325030400000
          },
          "grade": "A",
          "score": 13
        }
      ],
      "name": "Parkside Restaurant",
      "restaurant_id": "40365841"
    },{
      "address": {
        "building": "45-15",
        "coord": [
          -73.91427200000001,
          40.7569379
        ],
        "street": "Broadway",
        "zipcode": "11103"
      },
      "borough": "Queens",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1386115200000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1367452800000
          },
          "grade": "A",
          "score": 8
        },
        {
          "date": {
            "$date": 1331769600000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1310428800000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1297814400000
          },
          "grade": "A",
          "score": 7
        }
      ],
      "name": "Lavelle'S Admiral'S Club",
      "restaurant_id": "40365844"
    },{
      "address": {
        "building": "358",
        "coord": [
          -73.963506,
          40.758273
        ],
        "street": "East 57 Street",
        "zipcode": "10022"
      },
      "borough": "Manhattan",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1407715200000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1374451200000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1363219200000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1341187200000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1328140800000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1314144000000
          },
          "grade": "A",
          "score": 11
        }
      ],
      "name": "Neary'S Pub",
      "restaurant_id": "40365871"
    },{
      "address": {
        "building": "413",
        "coord": [
          -73.99532099999999,
          40.750205
        ],
        "street": "8 Avenue",
        "zipcode": "10001"
      },
      "borough": "Manhattan",
      "cuisine": "Pizza",
      "grades": [
        {
          "date": {
            "$date": 1399852800000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1386115200000
          },
          "grade": "A",
          "score": 5
        },
        {
          "date": {
            "$date": 1352937600000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1340582400000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1327276800000
          },
          "grade": "A",
          "score": 8
        },
        {
          "date": {
            "$date": 1315353600000
          },
          "grade": "A",
          "score": 12
        }
      ],
      "name": "New York Pizza Suprema",
      "restaurant_id": "40365882"
    },{
      "address": {
        "building": "331",
        "coord": [
          -73.87786539999999,
          40.8724377
        ],
        "street": "East  204 Street",
        "zipcode": "10467"
      },
      "borough": "Bronx",
      "cuisine": "Irish",
      "grades": [
        {
          "date": {
            "$date": 1409011200000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1395792000000
          },
          "grade": "B",
          "score": 23
        },
        {
          "date": {
            "$date": 1378857600000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1355788800000
          },
          "grade": "B",
          "score": 27
        },
        {
          "date": {
            "$date": 1319068800000
          },
          "grade": "A",
          "score": 13
        }
      ],
      "name": "Mcdwyers Pub",
      "restaurant_id": "40365893"
    },{
      "address": {
        "building": "26",
        "coord": [
          -73.9983,
          40.715051
        ],
        "street": "Pell Street",
        "zipcode": "10013"
      },
      "borough": "Manhattan",
      "cuisine": "Caf\u00e9/Coffee/Tea",
      "grades": [
        {
          "date": {
            "$date": 1404950400000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1373587200000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1360540800000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1357776000000
          },
          "grade": "P",
          "score": 4
        },
        {
          "date": {
            "$date": 1343347200000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1330300800000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1313107200000
          },
          "grade": "B",
          "score": 24
        }
      ],
      "name": "Mee Sum Coffee Shop",
      "restaurant_id": "40365904"
    },{
      "address": {
        "building": "25541",
        "coord": [
          -73.70902579999999,
          40.7276012
        ],
        "street": "Jamaica Avenue",
        "zipcode": "11001"
      },
      "borough": "Queens",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1389830400000
          },
          "grade": "A",
          "score": 4
        },
        {
          "date": {
            "$date": 1371686400000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1349308800000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1326153600000
          },
          "grade": "B",
          "score": 20
        },
        {
          "date": {
            "$date": 1308787200000
          },
          "grade": "B",
          "score": 21
        }
      ],
      "name": "Nancy'S Fire Side",
      "restaurant_id": "40365938"
    },{
      "address": {
        "building": "21",
        "coord": [
          -73.9990337,
          40.7143954
        ],
        "street": "Mott Street",
        "zipcode": "10013"
      },
      "borough": "Manhattan",
      "cuisine": "Chinese",
      "grades": [
        {
          "date": {
            "$date": 1406505600000
          },
          "grade": "B",
          "score": 27
        },
        {
          "date": {
            "$date": 1384819200000
          },
          "grade": "B",
          "score": 20
        },
        {
          "date": {
            "$date": 1367280000000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1350345600000
          },
          "grade": "B",
          "score": 24
        },
        {
          "date": {
            "$date": 1336348800000
          },
          "grade": "A",
          "score": 12
        }
      ],
      "name": "Hop Kee Restaurant",
      "restaurant_id": "40365942"
    },{
      "address": {
        "building": "1",
        "coord": [
          -74.0049219,
          40.720699
        ],
        "street": "Lispenard Street",
        "zipcode": "10013"
      },
      "borough": "Manhattan",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1412640000000
          },
          "grade": "B",
          "score": 18
        },
        {
          "date": {
            "$date": 1398988800000
          },
          "grade": "A",
          "score": 8
        },
        {
          "date": {
            "$date": 1380758400000
          },
          "grade": "B",
          "score": 23
        },
        {
          "date": {
            "$date": 1347840000000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1336435200000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1323734400000
          },
          "grade": "A",
          "score": 13
        }
      ],
      "name": "Nancy Whiskey Pub",
      "restaurant_id": "40365968"
    },{
      "address": {
        "building": "146-09",
        "coord": [
          -73.808593,
          40.702028
        ],
        "street": "Jamaica Avenue",
        "zipcode": "11435"
      },
      "borough": "Queens",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1405296000000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1375660800000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1363564800000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1326240000000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1316476800000
          },
          "grade": "A",
          "score": 9
        }
      ],
      "name": "Blarney Bar",
      "restaurant_id": "40365972"
    },{
      "address": {
        "building": "16304",
        "coord": [
          -73.78999089999999,
          40.7118632
        ],
        "street": "Jamaica Avenue",
        "zipcode": "11432"
      },
      "borough": "Queens",
      "cuisine": "Pizza",
      "grades": [
        {
          "date": {
            "$date": 1406246400000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1391990400000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1357171200000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1326412800000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1317168000000
          },
          "grade": "A",
          "score": 12
        }
      ],
      "name": "Margherita Pizza",
      "restaurant_id": "40366002"
    },{
      "address": {
        "building": "10807",
        "coord": [
          -73.8299395,
          40.5812137
        ],
        "street": "Rockaway Beach Boulevard",
        "zipcode": "11694"
      },
      "borough": "Queens",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1390953600000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1372204800000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1340755200000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1327968000000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1297123200000
          },
          "grade": "A",
          "score": 8
        }
      ],
      "name": "Healy'S Pub",
      "restaurant_id": "40366054"
    },{
      "address": {
        "building": "416",
        "coord": [
          -73.98586209999999,
          40.67017250000001
        ],
        "street": "5 Avenue",
        "zipcode": "11215"
      },
      "borough": "Brooklyn",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1417651200000
          },
          "grade": "B",
          "score": 22
        },
        {
          "date": {
            "$date": 1397865600000
          },
          "grade": "A",
          "score": 3
        },
        {
          "date": {
            "$date": 1360800000000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1326326400000
          },
          "grade": "A",
          "score": 9
        }
      ],
      "name": "Fifth Avenue Bingo",
      "restaurant_id": "40366109"
    },{
      "address": {
        "building": "524",
        "coord": [
          -74.1402105,
          40.6301893
        ],
        "street": "Port Richmond Avenue",
        "zipcode": "10302"
      },
      "borough": "Staten Island",
      "cuisine": "Pizza/Italian",
      "grades": [
        {
          "date": {
            "$date": 1418860800000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1386028800000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1364428800000
          },
          "grade": "B",
          "score": 20
        },
        {
          "date": {
            "$date": 1329868800000
          },
          "grade": "A",
          "score": 8
        }
      ],
      "name": "Denino'S Pizzeria Tavern",
      "restaurant_id": "40366132"
    },{
      "address": {
        "building": "2929",
        "coord": [
          -73.942849,
          40.6076256
        ],
        "street": "Avenue R",
        "zipcode": "11229"
      },
      "borough": "Brooklyn",
      "cuisine": "Italian",
      "grades": [
        {
          "date": {
            "$date": 1394668800000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1380672000000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1358812800000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1339459200000
          },
          "grade": "A",
          "score": 8
        },
        {
          "date": {
            "$date": 1322697600000
          },
          "grade": "B",
          "score": 20
        },
        {
          "date": {
            "$date": 1306281600000
          },
          "grade": "A",
          "score": 9
        }
      ],
      "name": "Michael'S Restaurant",
      "restaurant_id": "40366154"
    },{
      "address": {
        "building": "146",
        "coord": [
          -73.9736776,
          40.7535755
        ],
        "street": "East   46 Street",
        "zipcode": "10017"
      },
      "borough": "Manhattan",
      "cuisine": "Italian",
      "grades": [
        {
          "date": {
            "$date": 1394496000000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1375228800000
          },
          "grade": "C",
          "score": 53
        },
        {
          "date": {
            "$date": 1355875200000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1338768000000
          },
          "grade": "C",
          "score": 45
        },
        {
          "date": {
            "$date": 1326844800000
          },
          "grade": "C",
          "score": 34
        },
        {
          "date": {
            "$date": 1317168000000
          },
          "grade": "B",
          "score": 18
        },
        {
          "date": {
            "$date": 1306195200000
          },
          "grade": "C",
          "score": 52
        }
      ],
      "name": "Nanni Restaurant",
      "restaurant_id": "40366157"
    },{
      "address": {
        "building": "119-09",
        "coord": [
          -73.82770529999999,
          40.6944628
        ],
        "street": "Atlantic Avenue",
        "zipcode": "11418"
      },
      "borough": "Queens",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1416441600000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1392422400000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1372636800000
          },
          "grade": "B",
          "score": 16
        },
        {
          "date": {
            "$date": 1354060800000
          },
          "grade": "B",
          "score": 20
        },
        {
          "date": {
            "$date": 1329350400000
          },
          "grade": "B",
          "score": 19
        }
      ],
      "name": "Lenihan'S Saloon",
      "restaurant_id": "40366162"
    },{
      "address": {
        "building": "4218",
        "coord": [
          -73.8682701,
          40.745683
        ],
        "street": "Junction Boulevard",
        "zipcode": "11368"
      },
      "borough": "Queens",
      "cuisine": "Latin (Cuban, Dominican, Puerto Rican, South & Central American)",
      "grades": [
        {
          "date": {
            "$date": 1416528000000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1378425600000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1365033600000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1343347200000
          },
          "grade": "C",
          "score": 30
        }
      ],
      "name": "Emilio Iii Bar",
      "restaurant_id": "40366214"
    },{
      "address": {
        "building": "80",
        "coord": [
          -74.0086833,
          40.7052024
        ],
        "street": "Beaver Street",
        "zipcode": "10005"
      },
      "borough": "Manhattan",
      "cuisine": "Irish",
      "grades": [
        {
          "date": {
            "$date": 1406592000000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1375660800000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1363219200000
          },
          "grade": "A",
          "score": 2
        },
        {
          "date": {
            "$date": 1343088000000
          },
          "grade": "A",
          "score": 12
        }
      ],
      "name": "Killarney Rose",
      "restaurant_id": "40366222"
    },{
      "address": {
        "building": "13558",
        "coord": [
          -73.8216767,
          40.6689548
        ],
        "street": "Lefferts Boulevard",
        "zipcode": "11420"
      },
      "borough": "Queens",
      "cuisine": "Italian",
      "grades": [
        {
          "date": {
            "$date": 1403222400000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1370563200000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1340841600000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1326412800000
          },
          "grade": "C",
          "score": 28
        }
      ],
      "name": "Don Peppe",
      "restaurant_id": "40366230"
    },{
      "address": {
        "building": "202-24",
        "coord": [
          -73.9250442,
          40.5595462
        ],
        "street": "Rockaway Point Boulevard",
        "zipcode": "11697"
      },
      "borough": "Queens",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1417478400000
          },
          "grade": "Z",
          "score": 18
        },
        {
          "date": {
            "$date": 1392163200000
          },
          "grade": "B",
          "score": 21
        },
        {
          "date": {
            "$date": 1365811200000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1340668800000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1324080000000
          },
          "grade": "A",
          "score": 8
        }
      ],
      "name": "Blarney Castle",
      "restaurant_id": "40366356"
    },{
      "address": {
        "building": "1611",
        "coord": [
          -73.955074,
          40.599217
        ],
        "street": "Avenue U",
        "zipcode": "11229"
      },
      "borough": "Brooklyn",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1404259200000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1373414400000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1360713600000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1345075200000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1332979200000
          },
          "grade": "B",
          "score": 24
        }
      ],
      "name": "Three Star Restaurant",
      "restaurant_id": "40366361"
    },{
      "address": {
        "building": "137",
        "coord": [
          -73.98926,
          40.7509054
        ],
        "street": "West   33 Street",
        "zipcode": "10001"
      },
      "borough": "Manhattan",
      "cuisine": "Irish",
      "grades": [
        {
          "date": {
            "$date": 1408060800000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1390262400000
          },
          "grade": "A",
          "score": 5
        },
        {
          "date": {
            "$date": 1374624000000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1338422400000
          },
          "grade": "A",
          "score": 8
        },
        {
          "date": {
            "$date": 1327536000000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1318291200000
          },
          "grade": "A",
          "score": 5
        }
      ],
      "name": "Blarney Rock",
      "restaurant_id": "40366379"
    },{
      "address": {
        "building": "1118",
        "coord": [
          -73.960573,
          40.760982
        ],
        "street": "1 Avenue",
        "zipcode": "10065"
      },
      "borough": "Manhattan",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1411516800000
          },
          "grade": "A",
          "score": 4
        },
        {
          "date": {
            "$date": 1378425600000
          },
          "grade": "A",
          "score": 6
        },
        {
          "date": {
            "$date": 1363737600000
          },
          "grade": "C",
          "score": 36
        },
        {
          "date": {
            "$date": 1334275200000
          },
          "grade": "A",
          "score": 11
        }
      ],
      "name": "Dangerfield'S Night Club",
      "restaurant_id": "40366381"
    },{
      "address": {
        "building": "433",
        "coord": [
          -73.98306099999999,
          40.7441419
        ],
        "street": "Park Avenue South",
        "zipcode": "10016"
      },
      "borough": "Manhattan",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1419811200000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1404345600000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1389571200000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1367452800000
          },
          "grade": "A",
          "score": 9
        }
      ],
      "name": "Desmond'S Tavern",
      "restaurant_id": "40366396"
    },{
      "address": {
        "building": "6828",
        "coord": [
          -73.8204154,
          40.7242443
        ],
        "street": "Main Street",
        "zipcode": "11367"
      },
      "borough": "Queens",
      "cuisine": "Jewish/Kosher",
      "grades": [
        {
          "date": {
            "$date": 1411516800000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1394409600000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1369958400000
          },
          "grade": "B",
          "score": 26
        },
        {
          "date": {
            "$date": 1336608000000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1320278400000
          },
          "grade": "A",
          "score": 11
        }
      ],
      "name": "Naomi Kosher Pizza",
      "restaurant_id": "40366425"
    },{
      "address": {
        "building": "2901",
        "coord": [
          -73.9396213,
          40.5841703
        ],
        "street": "Emmons Avenue",
        "zipcode": "11235"
      },
      "borough": "Brooklyn",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1416182400000
          },
          "grade": "A",
          "score": 5
        },
        {
          "date": {
            "$date": 1387584000000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1372118400000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1339977600000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1330560000000
          },
          "grade": "B",
          "score": 19
        }
      ],
      "name": "Roll-N-Roaster",
      "restaurant_id": "40366471"
    },{
      "address": {
        "building": "168",
        "coord": [
          -74.0016583,
          40.7319679
        ],
        "street": "West    4 Street",
        "zipcode": "10014"
      },
      "borough": "Manhattan",
      "cuisine": "Spanish",
      "grades": [
        {
          "date": {
            "$date": 1405382400000
          },
          "grade": "B",
          "score": 15
        },
        {
          "date": {
            "$date": 1372204800000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1340755200000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1327881600000
          },
          "grade": "A",
          "score": 9
        }
      ],
      "name": "Tio Pepe",
      "restaurant_id": "40366473"
    },{
      "address": {
        "building": "3432",
        "coord": [
          -73.9420751,
          40.6002442
        ],
        "street": "Nostrand Avenue",
        "zipcode": "11229"
      },
      "borough": "Brooklyn",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1414627200000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1381881600000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1370304000000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1338768000000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1324512000000
          },
          "grade": "A",
          "score": 5
        }
      ],
      "name": "Brennan & Carr",
      "restaurant_id": "40366487"
    },{
      "address": {
        "building": "5820",
        "coord": [
          -73.9002615,
          40.885186
        ],
        "street": "Broadway",
        "zipcode": "10463"
      },
      "borough": "Bronx",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1393372800000
          },
          "grade": "A",
          "score": 5
        },
        {
          "date": {
            "$date": 1381276800000
          },
          "grade": "B",
          "score": 19
        },
        {
          "date": {
            "$date": 1368576000000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1353369600000
          },
          "grade": "B",
          "score": 18
        },
        {
          "date": {
            "$date": 1318809600000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1308700800000
          },
          "grade": "C",
          "score": 35
        }
      ],
      "name": "The Punch Bowl",
      "restaurant_id": "40366497"
    },{
      "address": {
        "building": "37-37",
        "coord": [
          -73.8700163,
          40.7504734
        ],
        "street": "Junction Boulevard",
        "zipcode": "11368"
      },
      "borough": "Queens",
      "cuisine": "Chinese",
      "grades": [
        {
          "date": {
            "$date": 1411603200000
          },
          "grade": "B",
          "score": 25
        },
        {
          "date": {
            "$date": 1400025600000
          },
          "grade": "B",
          "score": 19
        },
        {
          "date": {
            "$date": 1384214400000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1370304000000
          },
          "grade": "B",
          "score": 20
        },
        {
          "date": {
            "$date": 1354665600000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1340755200000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1322438400000
          },
          "grade": "B",
          "score": 26
        }
      ],
      "name": "Jardin De China Rest",
      "restaurant_id": "40366543"
    },{
      "address": {
        "building": "108-07",
        "coord": [
          -73.8236419,
          40.7261682
        ],
        "street": "72 Avenue",
        "zipcode": "11375"
      },
      "borough": "Queens",
      "cuisine": "Irish",
      "grades": [
        {
          "date": {
            "$date": 1411430400000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1388188800000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1365552000000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1344470400000
          },
          "grade": "B",
          "score": 17
        },
        {
          "date": {
            "$date": 1330560000000
          },
          "grade": "B",
          "score": 27
        }
      ],
      "name": "Irish Cottage",
      "restaurant_id": "40366549"
    },{
      "address": {
        "building": "11",
        "coord": [
          -74.0137007,
          40.7062029
        ],
        "street": "Trinity Place",
        "zipcode": "10006"
      },
      "borough": "Manhattan",
      "cuisine": "Irish",
      "grades": [
        {
          "date": {
            "$date": 1410393600000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1395619200000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1380499200000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1367539200000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1349049600000
          },
          "grade": "C",
          "score": 43
        },
        {
          "date": {
            "$date": 1333324800000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1320883200000
          },
          "grade": "A",
          "score": 7
        }
      ],
      "name": "Blarney Stone",
      "restaurant_id": "40366574"
    },{
      "address": {
        "building": "71-24",
        "coord": [
          -73.8221418,
          40.7272376
        ],
        "street": "Main Street",
        "zipcode": "11367"
      },
      "borough": "Queens",
      "cuisine": "Jewish/Kosher",
      "grades": [
        {
          "date": {
            "$date": 1399420800000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1378252800000
          },
          "grade": "B",
          "score": 15
        },
        {
          "date": {
            "$date": 1363824000000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1337731200000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1320105600000
          },
          "grade": "A",
          "score": 11
        }
      ],
      "name": "Shimons Kosher Pizza",
      "restaurant_id": "40366586"
    },{
      "address": {
        "building": "225",
        "coord": [
          -74.0027865,
          40.7340505
        ],
        "street": "West    4 Street",
        "zipcode": "10014"
      },
      "borough": "Manhattan",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1418688000000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1386547200000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1371600000000
          },
          "grade": "A",
          "score": 5
        },
        {
          "date": {
            "$date": 1340928000000
          },
          "grade": "A",
          "score": 12
        }
      ],
      "name": "The Riviera Cafe",
      "restaurant_id": "40366643"
    },{
      "address": {
        "building": "80",
        "coord": [
          -73.9927131,
          40.6984887
        ],
        "street": "Henry Street",
        "zipcode": "11201"
      },
      "borough": "Brooklyn",
      "cuisine": "Pizza/Italian",
      "grades": [
        {
          "date": {
            "$date": 1417564800000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1387411200000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1372291200000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1342483200000
          },
          "grade": "A",
          "score": 8
        }
      ],
      "name": "Fascati'S Pizzeria",
      "restaurant_id": "40366652"
    },{
      "address": {
        "building": "627",
        "coord": [
          -73.97598099999999,
          40.745132
        ],
        "street": "2 Avenue",
        "zipcode": "10016"
      },
      "borough": "Manhattan",
      "cuisine": "Tex-Mex",
      "grades": [
        {
          "date": {
            "$date": 1407369600000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1375142400000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1362528000000
          },
          "grade": "A",
          "score": 7
        }
      ],
      "name": "Baby Bo'S Burritos",
      "restaurant_id": "40366661"
    },{
      "address": {
        "building": "697",
        "coord": [
          -74.11223799999999,
          40.629819
        ],
        "street": "Forest Avenue",
        "zipcode": "10310"
      },
      "borough": "Staten Island",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1405555200000
          },
          "grade": "B",
          "score": 25
        },
        {
          "date": {
            "$date": 1380758400000
          },
          "grade": "B",
          "score": 22
        },
        {
          "date": {
            "$date": 1360713600000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1339372800000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1325721600000
          },
          "grade": "A",
          "score": 13
        }
      ],
      "name": "Li Greci'S Staaten Restaurant",
      "restaurant_id": "40366711"
    },{
      "address": {
        "building": "155",
        "coord": [
          -73.9690789,
          40.7594184
        ],
        "street": "East   55 Street",
        "zipcode": "10022"
      },
      "borough": "Manhattan",
      "cuisine": "Chinese",
      "grades": [
        {
          "date": {
            "$date": 1399248000000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1366848000000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1332201600000
          },
          "grade": "A",
          "score": 8
        },
        {
          "date": {
            "$date": 1315872000000
          },
          "grade": "A",
          "score": 9
        }
      ],
      "name": "Shun Lee Palace Restaurant",
      "restaurant_id": "40366716"
    },{
      "address": {
        "building": "84",
        "coord": [
          -73.9300062,
          40.5943553
        ],
        "street": "Ebony Court",
        "zipcode": "11229"
      },
      "borough": "Brooklyn",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1400630400000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1369094400000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1338940800000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1328054400000
          },
          "grade": "A",
          "score": 9
        }
      ],
      "name": "Tamaqua",
      "restaurant_id": "40366742"
    },{
      "address": {
        "building": "21",
        "coord": [
          -73.9168424,
          40.8401362
        ],
        "street": "East  170 Street",
        "zipcode": "10452"
      },
      "borough": "Bronx",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1418688000000
          },
          "grade": "B",
          "score": 22
        },
        {
          "date": {
            "$date": 1407801600000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1393804800000
          },
          "grade": "B",
          "score": 22
        },
        {
          "date": {
            "$date": 1377734400000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1346198400000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1329091200000
          },
          "grade": "B",
          "score": 16
        }
      ],
      "name": "Munchtime",
      "restaurant_id": "40366748"
    },{
      "address": {
        "building": "220-20",
        "coord": [
          -73.74292179999999,
          40.7305714
        ],
        "street": "Hillside Avenue",
        "zipcode": "11427"
      },
      "borough": "Queens",
      "cuisine": "Italian",
      "grades": [
        {
          "date": {
            "$date": 1413936000000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1394150400000
          },
          "grade": "B",
          "score": 15
        },
        {
          "date": {
            "$date": 1357689600000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1342051200000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1327363200000
          },
          "grade": "A",
          "score": 11
        }
      ],
      "name": "Cara Mia",
      "restaurant_id": "40366812"
    },{
      "address": {
        "building": "4340",
        "coord": [
          -73.8194559,
          40.8899176
        ],
        "street": "Boston Road",
        "zipcode": "10475"
      },
      "borough": "Bronx",
      "cuisine": "Pancakes/Waffles",
      "grades": [
        {
          "date": {
            "$date": 1411344000000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1400198400000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1383091200000
          },
          "grade": "A",
          "score": 3
        },
        {
          "date": {
            "$date": 1370390400000
          },
          "grade": "B",
          "score": 24
        },
        {
          "date": {
            "$date": 1336953600000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1325635200000
          },
          "grade": "A",
          "score": 7
        }
      ],
      "name": "Ihop",
      "restaurant_id": "40366833"
    },{
      "address": {
        "building": "8769",
        "coord": [
          -73.809167,
          40.705421
        ],
        "street": "Sutphin Boulevard",
        "zipcode": "11435"
      },
      "borough": "Queens",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1414454400000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1384732800000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1367625600000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1333411200000
          },
          "grade": "A",
          "score": 9
        }
      ],
      "name": "Maloney'S Bar",
      "restaurant_id": "40366857"
    },{
      "address": {
        "building": "80-32",
        "coord": [
          -73.8845166,
          40.744772
        ],
        "street": "Baxter Avenue",
        "zipcode": "11373"
      },
      "borough": "Queens",
      "cuisine": "Spanish",
      "grades": [
        {
          "date": {
            "$date": 1421020800000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1409702400000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1405555200000
          },
          "grade": "P",
          "score": 2
        },
        {
          "date": {
            "$date": 1386806400000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1372723200000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1358899200000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1333497600000
          },
          "grade": "B",
          "score": 22
        }
      ],
      "name": "La Fusta Restaurant",
      "restaurant_id": "40366879"
    },{
      "address": {
        "building": "135",
        "coord": [
          -74.10465599999999,
          40.58834
        ],
        "street": "Flagg Place",
        "zipcode": "10304"
      },
      "borough": "Staten Island",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1404950400000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1369180800000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1354147200000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1334275200000
          },
          "grade": "B",
          "score": 23
        },
        {
          "date": {
            "$date": 1313193600000
          },
          "grade": "A",
          "score": 11
        }
      ],
      "name": "Richmond County Country Club",
      "restaurant_id": "40366928"
    },{
      "address": {
        "building": "12402",
        "coord": [
          -73.82629709999999,
          40.700598
        ],
        "street": "Jamaica Avenue",
        "zipcode": "11418"
      },
      "borough": "Queens",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1418774400000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1403827200000
          },
          "grade": "A",
          "score": 2
        },
        {
          "date": {
            "$date": 1371686400000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1358380800000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1356566400000
          },
          "grade": "P",
          "score": 6
        },
        {
          "date": {
            "$date": 1324512000000
          },
          "grade": "A",
          "score": 11
        }
      ],
      "name": "Little Brown Jug",
      "restaurant_id": "40366929"
    },{
      "address": {
        "building": "1191",
        "coord": [
          -73.8513114,
          40.8316981
        ],
        "street": "Castle Hill Avenue",
        "zipcode": "10462"
      },
      "borough": "Bronx",
      "cuisine": "Caf\u00e9/Coffee/Tea",
      "grades": [
        {
          "date": {
            "$date": 1404345600000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1373241600000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1360540800000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1344902400000
          },
          "grade": "B",
          "score": 14
        },
        {
          "date": {
            "$date": 1314057600000
          },
          "grade": "A",
          "score": 12
        }
      ],
      "name": "Lulu'S Coffee Shop",
      "restaurant_id": "40366938"
    },{
      "address": {
        "building": "617",
        "coord": [
          -73.9681178,
          40.678776
        ],
        "street": "Vanderbilt Avenue",
        "zipcode": "11238"
      },
      "borough": "Brooklyn",
      "cuisine": "Soul Food",
      "grades": [
        {
          "date": {
            "$date": 1409184000000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1395878400000
          },
          "grade": "C",
          "score": 2
        },
        {
          "date": {
            "$date": 1374019200000
          },
          "grade": "B",
          "score": 25
        },
        {
          "date": {
            "$date": 1337212800000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1324425600000
          },
          "grade": "A",
          "score": 8
        }
      ],
      "name": "Mitchell'S Restaurant",
      "restaurant_id": "40366961"
    },{
      "address": {
        "building": "4",
        "coord": [
          -74.00065800000002,
          40.735114
        ],
        "street": "Charles Street",
        "zipcode": "10014"
      },
      "borough": "Manhattan",
      "cuisine": "Spanish",
      "grades": [
        {
          "date": {
            "$date": 1397606400000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1382918400000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1342051200000
          },
          "grade": "A",
          "score": 2
        },
        {
          "date": {
            "$date": 1330387200000
          },
          "grade": "A",
          "score": 5
        },
        {
          "date": {
            "$date": 1317859200000
          },
          "grade": "A",
          "score": 2
        },
        {
          "date": {
            "$date": 1306972800000
          },
          "grade": "A",
          "score": 7
        }
      ],
      "name": "El Charro Espanol",
      "restaurant_id": "40366987"
    },{
      "address": {
        "building": "1361",
        "coord": [
          -73.9556394,
          40.768679
        ],
        "street": "First Avenue",
        "zipcode": "10021"
      },
      "borough": "Manhattan",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1410998400000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1393286400000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1355702400000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1323820800000
          },
          "grade": "A",
          "score": 7
        }
      ],
      "name": "Finnegan'S Wake",
      "restaurant_id": "40366993"
    },{
      "address": {
        "building": "6514",
        "coord": [
          -73.9907801,
          40.6188665
        ],
        "street": "18 Avenue",
        "zipcode": "11204"
      },
      "borough": "Brooklyn",
      "cuisine": "Pizza/Italian",
      "grades": [
        {
          "date": {
            "$date": 1419897600000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1386201600000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1372723200000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1358121600000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1326412800000
          },
          "grade": "A",
          "score": 12
        }
      ],
      "name": "Da Vinci Pizza",
      "restaurant_id": "40367005"
    },{
      "address": {
        "building": "459",
        "coord": [
          -73.979839,
          40.739796
        ],
        "street": "2 Avenue",
        "zipcode": "10010"
      },
      "borough": "Manhattan",
      "cuisine": "Mexican",
      "grades": [
        {
          "date": {
            "$date": 1414627200000
          },
          "grade": "A",
          "score": 5
        },
        {
          "date": {
            "$date": 1383782400000
          },
          "grade": "A",
          "score": 2
        },
        {
          "date": {
            "$date": 1350950400000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1336348800000
          },
          "grade": "A",
          "score": 10
        }
      ],
      "name": "Mexico Lindo Restaurant",
      "restaurant_id": "40367038"
    },{
      "address": {
        "building": "2894",
        "coord": [
          -73.815175,
          40.8137649
        ],
        "street": "Schurz Ave",
        "zipcode": "10465"
      },
      "borough": "Bronx",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1414713600000
          },
          "grade": "B",
          "score": 18
        },
        {
          "date": {
            "$date": 1392854400000
          },
          "grade": "A",
          "score": 4
        },
        {
          "date": {
            "$date": 1370563200000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1337212800000
          },
          "grade": "A",
          "score": 2
        }
      ],
      "name": "Marina Delray",
      "restaurant_id": "40367161"
    },{
      "address": {
        "building": "2301",
        "coord": [
          -73.9270926,
          40.6142428
        ],
        "street": "Flatbush Avenue",
        "zipcode": "11234"
      },
      "borough": "Brooklyn",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1392854400000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1372636800000
          },
          "grade": "B",
          "score": 15
        },
        {
          "date": {
            "$date": 1357776000000
          },
          "grade": "B",
          "score": 15
        },
        {
          "date": {
            "$date": 1343001600000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1325635200000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1316390400000
          },
          "grade": "C",
          "score": 34
        },
        {
          "date": {
            "$date": 1302480000000
          },
          "grade": "B",
          "score": 16
        }
      ],
      "name": "New Floridian Diner",
      "restaurant_id": "40367164"
    },{
      "address": {
        "building": "421",
        "coord": [
          -73.99682299999999,
          40.753182
        ],
        "street": "9 Avenue",
        "zipcode": "10001"
      },
      "borough": "Manhattan",
      "cuisine": "Irish",
      "grades": [
        {
          "date": {
            "$date": 1404172800000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1390867200000
          },
          "grade": "A",
          "score": 8
        },
        {
          "date": {
            "$date": 1355270400000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1325030400000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1314921600000
          },
          "grade": "A",
          "score": 12
        }
      ],
      "name": "Twins Pub",
      "restaurant_id": "40367179"
    },{
      "address": {
        "building": "10001",
        "coord": [
          -74.03345,
          40.612598
        ],
        "street": "4 Avenue",
        "zipcode": "11209"
      },
      "borough": "Brooklyn",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1406160000000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1391472000000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1359936000000
          },
          "grade": "A",
          "score": 4
        },
        {
          "date": {
            "$date": 1328832000000
          },
          "grade": "A",
          "score": 9
        }
      ],
      "name": "Narrows Coffee Shop",
      "restaurant_id": "40367183"
    },{
      "address": {
        "building": "363",
        "coord": [
          -74.0029643,
          40.7231081
        ],
        "street": "West Broadway",
        "zipcode": "10013"
      },
      "borough": "Manhattan",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1409788800000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1375660800000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1341878400000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1324512000000
          },
          "grade": "B",
          "score": 14
        }
      ],
      "name": "Broome Street Bar",
      "restaurant_id": "40367189"
    },{
      "address": {
        "building": "22-57",
        "coord": [
          -73.9121201,
          40.7749286
        ],
        "street": "31 Street",
        "zipcode": "11105"
      },
      "borough": "Queens",
      "cuisine": "Irish",
      "grades": [
        {
          "date": {
            "$date": 1420588800000
          },
          "grade": "A",
          "score": 8
        },
        {
          "date": {
            "$date": 1390867200000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1375660800000
          },
          "grade": "A",
          "score": 5
        },
        {
          "date": {
            "$date": 1361750400000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1327363200000
          },
          "grade": "A",
          "score": 12
        }
      ],
      "name": "O'Hanlon'S Pub",
      "restaurant_id": "40367232"
    },{
      "address": {
        "building": "4408",
        "coord": [
          -73.90364869999999,
          40.74133339999999
        ],
        "street": "60Th St. - Store",
        "zipcode": "11377"
      },
      "borough": "Queens",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1392854400000
          },
          "grade": "A",
          "score": 4
        },
        {
          "date": {
            "$date": 1360281600000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1329264000000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1299024000000
          },
          "grade": "A",
          "score": 2
        }
      ],
      "name": "Charlies Sports Bar",
      "restaurant_id": "40367240"
    },{
      "address": {
        "building": "1291",
        "coord": [
          -73.9593019,
          40.77105400000001
        ],
        "street": "3 Avenue",
        "zipcode": "10021"
      },
      "borough": "Manhattan",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1414713600000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1392681600000
          },
          "grade": "B",
          "score": 24
        },
        {
          "date": {
            "$date": 1353456000000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1340582400000
          },
          "grade": "A",
          "score": 10
        }
      ],
      "name": "Jg Melon Restaurant",
      "restaurant_id": "40367241"
    },{
      "address": {
        "building": "21249",
        "coord": [
          -73.7775242,
          40.778475
        ],
        "street": "26 Avenue",
        "zipcode": "11360"
      },
      "borough": "Queens",
      "cuisine": "Pizza/Italian",
      "grades": [
        {
          "date": {
            "$date": 1420502400000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1390262400000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1359417600000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1337126400000
          },
          "grade": "B",
          "score": 25
        }
      ],
      "name": "Jack'S Pizza & Pasta",
      "restaurant_id": "40367278"
    },{
      "address": {
        "building": "308",
        "coord": [
          -74.0084936,
          40.7258072
        ],
        "street": "Spring Street",
        "zipcode": "10013"
      },
      "borough": "Manhattan",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1393200000000
          },
          "grade": "A",
          "score": 5
        },
        {
          "date": {
            "$date": 1377475200000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1362355200000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1340582400000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1324598400000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1311638400000
          },
          "grade": "C",
          "score": 32
        }
      ],
      "name": "Emerald Pub",
      "restaurant_id": "40367329"
    },{
      "address": {
        "building": "180",
        "coord": [
          -73.9788694,
          40.7665961
        ],
        "street": "Central Park South",
        "zipcode": "10019"
      },
      "borough": "Manhattan",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1416355200000
          },
          "grade": "A",
          "score": 2
        },
        {
          "date": {
            "$date": 1386633600000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1354492800000
          },
          "grade": "A",
          "score": 8
        }
      ],
      "name": "Tap Room",
      "restaurant_id": "40367338"
    },{
      "address": {
        "building": "180",
        "coord": [
          -73.9788694,
          40.7665961
        ],
        "street": "Central Park South",
        "zipcode": "10019"
      },
      "borough": "Manhattan",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1397520000000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1382486400000
          },
          "grade": "A",
          "score": 3
        },
        {
          "date": {
            "$date": 1359676800000
          },
          "grade": "B",
          "score": 22
        },
        {
          "date": {
            "$date": 1322611200000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1311033600000
          },
          "grade": "B",
          "score": 17
        }
      ],
      "name": "Cocktail Room (Nyac)",
      "restaurant_id": "40367339"
    },{
      "address": {
        "building": "893",
        "coord": [
          -73.98557920000002,
          40.7686093
        ],
        "street": "9 Avenue",
        "zipcode": "10019"
      },
      "borough": "Manhattan",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1416182400000
          },
          "grade": "A",
          "score": 3
        },
        {
          "date": {
            "$date": 1384732800000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1372809600000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1357171200000
          },
          "grade": "A",
          "score": 8
        },
        {
          "date": {
            "$date": 1343692800000
          },
          "grade": "A",
          "score": 13
        }
      ],
      "name": "Flame Restaurant Coffee House",
      "restaurant_id": "40367365"
    },{
      "address": {
        "building": "232",
        "coord": [
          -73.9629729,
          40.7638694
        ],
        "street": "East   64 Street",
        "zipcode": "10065"
      },
      "borough": "Manhattan",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1411430400000
          },
          "grade": "A",
          "score": 2
        },
        {
          "date": {
            "$date": 1395792000000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1356566400000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1322006400000
          },
          "grade": "A",
          "score": 11
        }
      ],
      "name": "Jackson Hole",
      "restaurant_id": "40367373"
    },{
      "address": {
        "building": "6946",
        "coord": [
          -73.8811834,
          40.7017759
        ],
        "street": "Myrtle Avenue",
        "zipcode": "11385"
      },
      "borough": "Queens",
      "cuisine": "German",
      "grades": [
        {
          "date": {
            "$date": 1411516800000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1397692800000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1363046400000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1349136000000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1336521600000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1325030400000
          },
          "grade": "B",
          "score": 24
        }
      ],
      "name": "Zum Stammtisch",
      "restaurant_id": "40367377"
    },{
      "address": {
        "building": "302",
        "coord": [
          -73.985535,
          40.730605
        ],
        "street": "East 12 Street",
        "zipcode": "10003"
      },
      "borough": "Manhattan",
      "cuisine": "Italian",
      "grades": [
        {
          "date": {
            "$date": 1405987200000
          },
          "grade": "A",
          "score": 3
        },
        {
          "date": {
            "$date": 1374537600000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1358899200000
          },
          "grade": "A",
          "score": 6
        },
        {
          "date": {
            "$date": 1322697600000
          },
          "grade": "A",
          "score": 7
        }
      ],
      "name": "John'S Restaurant",
      "restaurant_id": "40367407"
    },{
      "address": {
        "building": "20",
        "coord": [
          -73.988991,
          40.728848
        ],
        "street": "St Marks Place",
        "zipcode": "10003"
      },
      "borough": "Manhattan",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1403136000000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1379289600000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1362960000000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1339459200000
          },
          "grade": "B",
          "score": 17
        },
        {
          "date": {
            "$date": 1319673600000
          },
          "grade": "A",
          "score": 13
        }
      ],
      "name": "Grassroot Tavern",
      "restaurant_id": "40367420"
    },{
      "address": {
        "building": "17",
        "coord": [
          -74.1350211,
          40.6369042
        ],
        "street": "Harrison Avenue",
        "zipcode": "10302"
      },
      "borough": "Staten Island",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1405987200000
          },
          "grade": "B",
          "score": 15
        },
        {
          "date": {
            "$date": 1382486400000
          },
          "grade": "B",
          "score": 16
        },
        {
          "date": {
            "$date": 1366070400000
          },
          "grade": "B",
          "score": 17
        },
        {
          "date": {
            "$date": 1333152000000
          },
          "grade": "A",
          "score": 13
        }
      ],
      "name": "Buddy'S Wonder Bar",
      "restaurant_id": "40367442"
    },{
      "address": {
        "building": "7302",
        "coord": [
          -73.876876,
          40.703885
        ],
        "street": "Cooper Avenue",
        "zipcode": "11385"
      },
      "borough": "Queens",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1392422400000
          },
          "grade": "A",
          "score": 4
        },
        {
          "date": {
            "$date": 1356480000000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1344470400000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1331596800000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1299110400000
          },
          "grade": "A",
          "score": 6
        }
      ],
      "name": "The Assembly Bar",
      "restaurant_id": "40367481"
    },{
      "address": {
        "building": "1372",
        "coord": [
          -73.9870818,
          40.7523004
        ],
        "street": "Broadway",
        "zipcode": "10018"
      },
      "borough": "Manhattan",
      "cuisine": "Jewish/Kosher",
      "grades": [
        {
          "date": {
            "$date": 1398902400000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1383523200000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1368489600000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1350259200000
          },
          "grade": "C",
          "score": 40
        },
        {
          "date": {
            "$date": 1318896000000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1306454400000
          },
          "grade": "A",
          "score": 5
        }
      ],
      "name": "Mr Broadway Kosher Restaurant",
      "restaurant_id": "40367534"
    },{
      "address": {
        "building": "42-01",
        "coord": [
          -73.911784,
          40.764766
        ],
        "street": "28 Avenue",
        "zipcode": "11103"
      },
      "borough": "Queens",
      "cuisine": "Italian",
      "grades": [
        {
          "date": {
            "$date": 1418860800000
          },
          "grade": "Z",
          "score": 26
        },
        {
          "date": {
            "$date": 1396483200000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1379289600000
          },
          "grade": "C",
          "score": 28
        },
        {
          "date": {
            "$date": 1360022400000
          },
          "grade": "A",
          "score": 8
        },
        {
          "date": {
            "$date": 1345593600000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1327881600000
          },
          "grade": "A",
          "score": 12
        }
      ],
      "name": "Piccola Venezia",
      "restaurant_id": "40367540"
    },{
      "address": {
        "building": "406",
        "coord": [
          -73.9550129,
          40.768019
        ],
        "street": "East 73 Street",
        "zipcode": "10021"
      },
      "borough": "Manhattan",
      "cuisine": "Spanish",
      "grades": [
        {
          "date": {
            "$date": 1406678400000
          },
          "grade": "A",
          "score": 6
        },
        {
          "date": {
            "$date": 1369267200000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1349308800000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1346716800000
          },
          "grade": "P",
          "score": 9
        },
        {
          "date": {
            "$date": 1329955200000
          },
          "grade": "B",
          "score": 22
        },
        {
          "date": {
            "$date": 1315785600000
          },
          "grade": "B",
          "score": 24
        }
      ],
      "name": "Malaga Restaurant",
      "restaurant_id": "40367544"
    },{
      "address": {
        "building": "710",
        "coord": [
          -74.1003379,
          40.5655379
        ],
        "street": "New Dorp Lane",
        "zipcode": "10306"
      },
      "borough": "Staten Island",
      "cuisine": "Italian",
      "grades": [
        {
          "date": {
            "$date": 1401840000000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1368576000000
          },
          "grade": "A",
          "score": 8
        },
        {
          "date": {
            "$date": 1337126400000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1325030400000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1312934400000
          },
          "grade": "A",
          "score": 4
        }
      ],
      "name": "Ni-Ni'S Cafe",
      "restaurant_id": "40367570"
    },{
      "address": {
        "building": "4933",
        "coord": [
          -73.9215284,
          40.8678204
        ],
        "street": "Broadway",
        "zipcode": "10034"
      },
      "borough": "Manhattan",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1406160000000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1373846400000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1361318400000
          },
          "grade": "A",
          "score": 6
        },
        {
          "date": {
            "$date": 1346371200000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1333324800000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1321401600000
          },
          "grade": "A",
          "score": 12
        }
      ],
      "name": "Capitol Restaurant",
      "restaurant_id": "40367677"
    },{
      "address": {
        "building": "48",
        "coord": [
          -73.977035,
          40.762307
        ],
        "street": "West   55 Street",
        "zipcode": "10019"
      },
      "borough": "Manhattan",
      "cuisine": "French",
      "grades": [
        {
          "date": {
            "$date": 1400112000000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1387152000000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1369094400000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1336348800000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1323648000000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1311552000000
          },
          "grade": "A",
          "score": 5
        }
      ],
      "name": "La Bonne Soupe Bistro",
      "restaurant_id": "40367715"
    },{
      "address": {
        "building": "984",
        "coord": [
          -73.9672945,
          40.7561212
        ],
        "street": "Second Avenue",
        "zipcode": "10022"
      },
      "borough": "Manhattan",
      "cuisine": "Italian",
      "grades": [
        {
          "date": {
            "$date": 1400544000000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1362700800000
          },
          "grade": "A",
          "score": 2
        },
        {
          "date": {
            "$date": 1329091200000
          },
          "grade": "A",
          "score": 12
        }
      ],
      "name": "Mimis Restaurant & Bar",
      "restaurant_id": "40367728"
    },{
      "address": {
        "building": "16103",
        "coord": [
          -73.83856999999999,
          40.655669
        ],
        "street": "Crossbay Boulevard",
        "zipcode": "11414"
      },
      "borough": "Queens",
      "cuisine": "Seafood",
      "grades": [
        {
          "date": {
            "$date": 1414540800000
          },
          "grade": "B",
          "score": 16
        },
        {
          "date": {
            "$date": 1395792000000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1377129600000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1335312000000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1320278400000
          },
          "grade": "A",
          "score": 12
        }
      ],
      "name": "Lenny'S Clam Bar",
      "restaurant_id": "40367749"
    },{
      "address": {
        "building": "521",
        "coord": [
          -73.9542568,
          40.7641379
        ],
        "street": "East   68 Street",
        "zipcode": "10065"
      },
      "borough": "Manhattan",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1402358400000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1371427200000
          },
          "grade": "A",
          "score": 2
        },
        {
          "date": {
            "$date": 1358985600000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1325635200000
          },
          "grade": "A",
          "score": 9
        }
      ],
      "name": "Griffis Faculty Club",
      "restaurant_id": "40367752"
    },{
      "address": {
        "building": "2080",
        "coord": [
          -73.98185529999999,
          40.7782266
        ],
        "street": "Broadway",
        "zipcode": "10023"
      },
      "borough": "Manhattan",
      "cuisine": "Hotdogs",
      "grades": [
        {
          "date": {
            "$date": 1392681600000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1377216000000
          },
          "grade": "A",
          "score": 8
        },
        {
          "date": {
            "$date": 1358294400000
          },
          "grade": "B",
          "score": 20
        },
        {
          "date": {
            "$date": 1325721600000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1315872000000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1303948800000
          },
          "grade": "A",
          "score": 7
        }
      ],
      "name": "Gray'S Papaya",
      "restaurant_id": "40367766"
    },{
      "address": {
        "building": "81-28",
        "coord": [
          -73.8305269,
          40.7089494
        ],
        "street": "Lefferts Boulevard",
        "zipcode": "11415"
      },
      "borough": "Queens",
      "cuisine": "Pizza",
      "grades": [
        {
          "date": {
            "$date": 1417564800000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1403654400000
          },
          "grade": "A",
          "score": 4
        },
        {
          "date": {
            "$date": 1382400000000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1347408000000
          },
          "grade": "A",
          "score": 8
        },
        {
          "date": {
            "$date": 1334793600000
          },
          "grade": "A",
          "score": 12
        }
      ],
      "name": "Dani Pizza And Restaurant",
      "restaurant_id": "40367789"
    },{
      "address": {
        "building": "943",
        "coord": [
          -73.95802549999999,
          40.6487475
        ],
        "street": "Flatbush Avenue",
        "zipcode": "11226"
      },
      "borough": "Brooklyn",
      "cuisine": "Hamburgers",
      "grades": [
        {
          "date": {
            "$date": 1416182400000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1384732800000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1367366400000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1333584000000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1322611200000
          },
          "grade": "A",
          "score": 7
        }
      ],
      "name": "Mcdonald'S",
      "restaurant_id": "40367790"
    },{
      "address": {
        "building": "1821",
        "coord": [
          -73.95006049999999,
          40.5838274
        ],
        "street": "Emmons Avenue",
        "zipcode": "11235"
      },
      "borough": "Brooklyn",
      "cuisine": "Greek",
      "grades": [
        {
          "date": {
            "$date": 1416441600000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1402876800000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1387324800000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1371427200000
          },
          "grade": "A",
          "score": 2
        },
        {
          "date": {
            "$date": 1356912000000
          },
          "grade": "A",
          "score": 7
        }
      ],
      "name": "El Greco Diner",
      "restaurant_id": "40367795"
    },{
      "address": {
        "building": "17",
        "coord": [
          -74.00259299999999,
          40.7324849
        ],
        "street": "Barrow Street",
        "zipcode": "10014"
      },
      "borough": "Manhattan",
      "cuisine": "Seafood",
      "grades": [
        {
          "date": {
            "$date": 1408406400000
          },
          "grade": "B",
          "score": 23
        },
        {
          "date": {
            "$date": 1389657600000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1364860800000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1339459200000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1320278400000
          },
          "grade": "A",
          "score": 0
        }
      ],
      "name": "One If By Land Two If By Sea",
      "restaurant_id": "40367797"
    },{
      "address": {
        "building": "75-50",
        "coord": [
          -73.8618426,
          40.6797488
        ],
        "street": "101 Avenue",
        "zipcode": "11416"
      },
      "borough": "Queens",
      "cuisine": "Hamburgers",
      "grades": [
        {
          "date": {
            "$date": 1412035200000
          },
          "grade": "A",
          "score": 2
        },
        {
          "date": {
            "$date": 1400112000000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1384905600000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1370908800000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1337817600000
          },
          "grade": "A",
          "score": 11
        }
      ],
      "name": "Mcdonald'S",
      "restaurant_id": "40367829"
    },{
      "address": {
        "building": "1900",
        "coord": [
          -73.9819129,
          40.77151449999999
        ],
        "street": "Broadway",
        "zipcode": "10023"
      },
      "borough": "Manhattan",
      "cuisine": "Italian",
      "grades": [
        {
          "date": {
            "$date": 1409788800000
          },
          "grade": "A",
          "score": 6
        },
        {
          "date": {
            "$date": 1396310400000
          },
          "grade": "A",
          "score": 2
        },
        {
          "date": {
            "$date": 1363219200000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1347840000000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1315353600000
          },
          "grade": "A",
          "score": 7
        }
      ],
      "name": "Fiorellos",
      "restaurant_id": "40367841"
    },{
      "address": {
        "building": "2725",
        "coord": [
          -73.9812843,
          40.5947365
        ],
        "street": "86 Street",
        "zipcode": "11223"
      },
      "borough": "Brooklyn",
      "cuisine": "Pizza/Italian",
      "grades": [
        {
          "date": {
            "$date": 1405468800000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1384992000000
          },
          "grade": "B",
          "score": 17
        },
        {
          "date": {
            "$date": 1368057600000
          },
          "grade": "B",
          "score": 27
        },
        {
          "date": {
            "$date": 1351123200000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1334620800000
          },
          "grade": "A",
          "score": 11
        }
      ],
      "name": "Lb Spumoni Gardens",
      "restaurant_id": "40367860"
    },{
      "address": {
        "building": "30-27",
        "coord": [
          -73.8344778,
          40.7692995
        ],
        "street": "Stratton Street",
        "zipcode": "11354"
      },
      "borough": "Queens",
      "cuisine": "Pizza/Italian",
      "grades": [
        {
          "date": {
            "$date": 1415577600000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1404345600000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1386633600000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1370995200000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1337040000000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1325721600000
          },
          "grade": "A",
          "score": 11
        }
      ],
      "name": "Amore Pizzeria & Restaurant",
      "restaurant_id": "40367870"
    },{
      "address": {
        "building": "4280",
        "coord": [
          -73.86697,
          40.89794699999999
        ],
        "street": "Katonah Ave",
        "zipcode": "10470"
      },
      "borough": "Bronx",
      "cuisine": "Not Listed/Not Applicable",
      "grades": [
        {
          "date": {
            "$date": 1401840000000
          },
          "grade": "A",
          "score": 5
        },
        {
          "date": {
            "$date": 1370563200000
          },
          "grade": "A",
          "score": 2
        },
        {
          "date": {
            "$date": 1340755200000
          },
          "grade": "A",
          "score": 2
        },
        {
          "date": {
            "$date": 1310515200000
          },
          "grade": "A",
          "score": 10
        }
      ],
      "name": "The Lark'S Nest",
      "restaurant_id": "40367946"
    },{
      "address": {
        "building": "2300",
        "coord": [
          -73.8786113,
          40.8502883
        ],
        "street": "Southern Boulevard",
        "zipcode": "10460"
      },
      "borough": "Bronx",
      "cuisine": "Caf\u00e9/Coffee/Tea",
      "grades": [
        {
          "date": {
            "$date": 1400630400000
          },
          "grade": "A",
          "score": 8
        },
        {
          "date": {
            "$date": 1369785600000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1339977600000
          },
          "grade": "A",
          "score": 8
        }
      ],
      "name": "Terrace Cafe",
      "restaurant_id": "40368018"
    },{
      "address": {
        "building": "2300",
        "coord": [
          -73.8786113,
          40.8502883
        ],
        "street": "Southern Boulevard",
        "zipcode": "10460"
      },
      "borough": "Bronx",
      "cuisine": "African",
      "grades": [
        {
          "date": {
            "$date": 1400630400000
          },
          "grade": "A",
          "score": 8
        },
        {
          "date": {
            "$date": 1370044800000
          },
          "grade": "A",
          "score": 6
        },
        {
          "date": {
            "$date": 1339459200000
          },
          "grade": "A",
          "score": 0
        },
        {
          "date": {
            "$date": 1307491200000
          },
          "grade": "A",
          "score": 0
        }
      ],
      "name": "African Terrace",
      "restaurant_id": "40368021"
    },{
      "address": {
        "building": "2300",
        "coord": [
          -73.8786113,
          40.8502883
        ],
        "street": "Southern Boulevard",
        "zipcode": "10460"
      },
      "borough": "Bronx",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1400630400000
          },
          "grade": "A",
          "score": 2
        },
        {
          "date": {
            "$date": 1369180800000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1337212800000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1307491200000
          },
          "grade": "A",
          "score": 5
        }
      ],
      "name": "Cool Zone",
      "restaurant_id": "40368022"
    },{
      "address": {
        "building": "2300",
        "coord": [
          -73.8786113,
          40.8502883
        ],
        "street": "Southern Boulevard",
        "zipcode": "10460"
      },
      "borough": "Bronx",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1400630400000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1369785600000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1339718400000
          },
          "grade": "A",
          "score": 2
        },
        {
          "date": {
            "$date": 1307491200000
          },
          "grade": "A",
          "score": 0
        }
      ],
      "name": "Beaver Pond",
      "restaurant_id": "40368025"
    },{
      "address": {
        "building": "2300",
        "coord": [
          -73.8786113,
          40.8502883
        ],
        "street": "Southern Boulevard",
        "zipcode": "10460"
      },
      "borough": "Bronx",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1400630400000
          },
          "grade": "A",
          "score": 5
        },
        {
          "date": {
            "$date": 1369699200000
          },
          "grade": "A",
          "score": 3
        },
        {
          "date": {
            "$date": 1339977600000
          },
          "grade": "A",
          "score": 4
        },
        {
          "date": {
            "$date": 1307404800000
          },
          "grade": "A",
          "score": 9
        }
      ],
      "name": "African Market (Baboon Cafe)",
      "restaurant_id": "40368026"
    },{
      "address": {
        "building": "1402",
        "coord": [
          -74.1005771,
          40.6134163
        ],
        "street": "Clove Road",
        "zipcode": "10301"
      },
      "borough": "Staten Island",
      "cuisine": "Italian",
      "grades": [
        {
          "date": {
            "$date": 1408492800000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1374019200000
          },
          "grade": "A",
          "score": 3
        },
        {
          "date": {
            "$date": 1354320000000
          },
          "grade": "A",
          "score": 6
        },
        {
          "date": {
            "$date": 1318896000000
          },
          "grade": "A",
          "score": 10
        }
      ],
      "name": "Roadhouse Restaurant",
      "restaurant_id": "40368034"
    },{
      "address": {
        "building": "320",
        "coord": [
          -73.971128,
          40.749869
        ],
        "street": "East 43 Street",
        "zipcode": "10017"
      },
      "borough": "Manhattan",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1396828800000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1365033600000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1347321600000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1334707200000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1302652800000
          },
          "grade": "A",
          "score": 13
        }
      ],
      "name": "Ford Foundation Cafeteria",
      "restaurant_id": "40368065"
    },{
      "address": {
        "building": "68",
        "coord": [
          -74.00066699999999,
          40.736224
        ],
        "street": "Greenwich Avenue",
        "zipcode": "10011"
      },
      "borough": "Manhattan",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1403222400000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1372982400000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1341532800000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1324252800000
          },
          "grade": "B",
          "score": 18
        },
        {
          "date": {
            "$date": 1313020800000
          },
          "grade": "A",
          "score": 9
        }
      ],
      "name": "Elephant & Castle",
      "restaurant_id": "40368157"
    },{
      "address": {
        "building": "5823",
        "coord": [
          -73.9181846,
          40.6157107
        ],
        "street": "Avenue T",
        "zipcode": "11234"
      },
      "borough": "Brooklyn",
      "cuisine": "Jewish/Kosher",
      "grades": [
        {
          "date": {
            "$date": 1399507200000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1378771200000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1346889600000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1314748800000
          },
          "grade": "A",
          "score": 0
        }
      ],
      "name": "Mill Basin Kosher Deli",
      "restaurant_id": "40368207"
    },{
      "address": {
        "building": "",
        "coord": [
          -73.97705599999999,
          40.752998
        ],
        "street": "Grand Central Terminal",
        "zipcode": "10017"
      },
      "borough": "Manhattan",
      "cuisine": "Seafood",
      "grades": [
        {
          "date": {
            "$date": 1396224000000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1375056000000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1361750400000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1340236800000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1323648000000
          },
          "grade": "C",
          "score": 31
        },
        {
          "date": {
            "$date": 1309132800000
          },
          "grade": "A",
          "score": 13
        }
      ],
      "name": "Oyster Bar",
      "restaurant_id": "40368223"
    },{
      "address": {
        "building": "441",
        "coord": [
          -73.98431219999999,
          40.7258174
        ],
        "street": "East    6 Street",
        "zipcode": "10009"
      },
      "borough": "Manhattan",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1413849600000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1396483200000
          },
          "grade": "B",
          "score": 15
        },
        {
          "date": {
            "$date": 1381881600000
          },
          "grade": "B",
          "score": 23
        },
        {
          "date": {
            "$date": 1363219200000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1338854400000
          },
          "grade": "B",
          "score": 22
        },
        {
          "date": {
            "$date": 1324339200000
          },
          "grade": "B",
          "score": 24
        }
      ],
      "name": "Cherry Tavern",
      "restaurant_id": "40368271"
    },{
      "address": {
        "building": "2001",
        "coord": [
          -74.099018,
          40.58116500000001
        ],
        "street": "Hylan Boulevard",
        "zipcode": "10306"
      },
      "borough": "Staten Island",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1412553600000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1395273600000
          },
          "grade": "A",
          "score": 8
        },
        {
          "date": {
            "$date": 1380153600000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1364774400000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1330905600000
          },
          "grade": "A",
          "score": 9
        }
      ],
      "name": "Colonnade Diner",
      "restaurant_id": "40368291"
    },{
      "address": {
        "building": "67",
        "coord": [
          -73.9827221,
          40.7561037
        ],
        "street": "West   44 Street",
        "zipcode": "10036"
      },
      "borough": "Manhattan",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1400198400000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1368403200000
          },
          "grade": "A",
          "score": 6
        },
        {
          "date": {
            "$date": 1337299200000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1306281600000
          },
          "grade": "A",
          "score": 13
        }
      ],
      "name": "Red Flame Diner",
      "restaurant_id": "40368313"
    },{
      "address": {
        "building": "21",
        "coord": [
          -73.977114,
          40.756295
        ],
        "street": "East   47 Street",
        "zipcode": "10017"
      },
      "borough": "Manhattan",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1418688000000
          },
          "grade": "A",
          "score": 8
        },
        {
          "date": {
            "$date": 1404691200000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1389744000000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1348617600000
          },
          "grade": "A",
          "score": 13
        }
      ],
      "name": "Maggies Place",
      "restaurant_id": "40368318"
    },{
      "address": {
        "building": "1583",
        "coord": [
          -73.9537859,
          40.775493
        ],
        "street": "2 Avenue",
        "zipcode": "10028"
      },
      "borough": "Manhattan",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1393545600000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1362096000000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1327881600000
          },
          "grade": "A",
          "score": 10
        }
      ],
      "name": "Brady'S Bar",
      "restaurant_id": "40368338"
    },{
      "address": {
        "building": "260",
        "coord": [
          -74.0062401,
          40.7397546
        ],
        "street": "6 Avenue",
        "zipcode": "10014"
      },
      "borough": "Manhattan",
      "cuisine": "Italian",
      "grades": [
        {
          "date": {
            "$date": 1408579200000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1395619200000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1358985600000
          },
          "grade": "A",
          "score": 5
        },
        {
          "date": {
            "$date": 1339632000000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1320278400000
          },
          "grade": "B",
          "score": 15
        }
      ],
      "name": "Da Silvano Restaurant",
      "restaurant_id": "40368346"
    },{
      "address": {
        "building": "603",
        "coord": [
          -73.9765607,
          40.7443236
        ],
        "street": "2 Avenue",
        "zipcode": "10016"
      },
      "borough": "Manhattan",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1417996800000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1402963200000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1381795200000
          },
          "grade": "A",
          "score": 8
        },
        {
          "date": {
            "$date": 1360195200000
          },
          "grade": "B",
          "score": 17
        },
        {
          "date": {
            "$date": 1343779200000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1329955200000
          },
          "grade": "B",
          "score": 16
        }
      ],
      "name": "Benjamin",
      "restaurant_id": "40368370"
    },{
      "address": {
        "building": "140",
        "coord": [
          -73.984838,
          40.756594
        ],
        "street": "West   44 Street",
        "zipcode": "10036"
      },
      "borough": "Manhattan",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1404518400000
          },
          "grade": "B",
          "score": 27
        },
        {
          "date": {
            "$date": 1370908800000
          },
          "grade": "A",
          "score": 5
        },
        {
          "date": {
            "$date": 1340150400000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1326067200000
          },
          "grade": "A",
          "score": 12
        }
      ],
      "name": "Jimmy'S Corner",
      "restaurant_id": "40368374"
    },{
      "address": {
        "building": "193",
        "coord": [
          -73.94347599999999,
          40.718386
        ],
        "street": "Frost Street",
        "zipcode": "11211"
      },
      "borough": "Brooklyn",
      "cuisine": "Italian",
      "grades": [
        {
          "date": {
            "$date": 1394668800000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1375228800000
          },
          "grade": "A",
          "score": 6
        },
        {
          "date": {
            "$date": 1360713600000
          },
          "grade": "B",
          "score": 18
        },
        {
          "date": {
            "$date": 1343174400000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1328572800000
          },
          "grade": "A",
          "score": 9
        }
      ],
      "name": "Frost Restaurant",
      "restaurant_id": "40368526"
    },{
      "address": {
        "building": "155157",
        "coord": [
          153.1628795,
          -28.0168595
        ],
        "street": "Christie St.",
        "zipcode": "10002"
      },
      "borough": "Manhattan",
      "cuisine": "Steak",
      "grades": [
        {
          "date": {
            "$date": 1415750400000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1379980800000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1365724800000
          },
          "grade": "B",
          "score": 26
        },
        {
          "date": {
            "$date": 1348185600000
          },
          "grade": "A",
          "score": 5
        },
        {
          "date": {
            "$date": 1334016000000
          },
          "grade": "A",
          "score": 2
        }
      ],
      "name": "Sammy'S Steakhouse",
      "restaurant_id": "40368552"
    },{
      "address": {
        "building": "123",
        "coord": [
          -73.998254,
          40.7179289
        ],
        "street": "Mulberry Street",
        "zipcode": "10013"
      },
      "borough": "Manhattan",
      "cuisine": "Italian",
      "grades": [
        {
          "date": {
            "$date": 1416182400000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1382313600000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1370476800000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1344816000000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1325635200000
          },
          "grade": "A",
          "score": 13
        }
      ],
      "name": "Il Cortile Restaurant",
      "restaurant_id": "40368555"
    },{
      "address": {
        "building": "106",
        "coord": [
          -73.9789394,
          40.6429349
        ],
        "street": "Beverly Road",
        "zipcode": "11218"
      },
      "borough": "Brooklyn",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1416355200000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1385078400000
          },
          "grade": "A",
          "score": 8
        },
        {
          "date": {
            "$date": 1353456000000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1338940800000
          },
          "grade": "A",
          "score": 12
        }
      ],
      "name": "Denny'S Pub",
      "restaurant_id": "40368577"
    },{
      "address": {
        "building": "59",
        "coord": [
          -74.00340299999999,
          40.733235
        ],
        "street": "Grove Street",
        "zipcode": "10014"
      },
      "borough": "Manhattan",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1413331200000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1398124800000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1375142400000
          },
          "grade": "B",
          "score": 23
        },
        {
          "date": {
            "$date": 1339632000000
          },
          "grade": "C",
          "score": 29
        },
        {
          "date": {
            "$date": 1323907200000
          },
          "grade": "A",
          "score": 12
        }
      ],
      "name": "Maries Crisis Cafe",
      "restaurant_id": "40368581"
    },{
      "address": {
        "building": "76",
        "coord": [
          -74.00341019999999,
          40.7335084
        ],
        "street": "Christopher Street",
        "zipcode": "10014"
      },
      "borough": "Manhattan",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1404777600000
          },
          "grade": "A",
          "score": 2
        },
        {
          "date": {
            "$date": 1391644800000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1381363200000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1343865600000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1328659200000
          },
          "grade": "A",
          "score": 9
        }
      ],
      "name": "Boots & Saddle Bar",
      "restaurant_id": "40368617"
    },{
      "address": {
        "building": "7504",
        "coord": [
          -74.0078144,
          40.6202393
        ],
        "street": "13 Avenue",
        "zipcode": "11228"
      },
      "borough": "Brooklyn",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1415577600000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1401926400000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1386028800000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1367280000000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1346889600000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1333584000000
          },
          "grade": "A",
          "score": 11
        }
      ],
      "name": "New Parkway Restaurant",
      "restaurant_id": "40368632"
    },{
      "address": {
        "building": "245",
        "coord": [
          -74.000399,
          40.740848
        ],
        "street": "West   16 Street",
        "zipcode": "10011"
      },
      "borough": "Manhattan",
      "cuisine": "Spanish",
      "grades": [
        {
          "date": {
            "$date": 1392854400000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1369958400000
          },
          "grade": "B",
          "score": 23
        },
        {
          "date": {
            "$date": 1349136000000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1317686400000
          },
          "grade": "A",
          "score": 5
        },
        {
          "date": {
            "$date": 1306281600000
          },
          "grade": "A",
          "score": 13
        }
      ],
      "name": "Cafe Riazor",
      "restaurant_id": "40368725"
    },{
      "address": {
        "building": "180",
        "coord": [
          -74.002139,
          40.7261357
        ],
        "street": "Prince Street",
        "zipcode": "10012"
      },
      "borough": "Manhattan",
      "cuisine": "French",
      "grades": [
        {
          "date": {
            "$date": 1393286400000
          },
          "grade": "A",
          "score": 6
        },
        {
          "date": {
            "$date": 1376352000000
          },
          "grade": "A",
          "score": 3
        },
        {
          "date": {
            "$date": 1361232000000
          },
          "grade": "B",
          "score": 18
        },
        {
          "date": {
            "$date": 1333584000000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1317168000000
          },
          "grade": "A",
          "score": 9
        }
      ],
      "name": "Raouls",
      "restaurant_id": "40368752"
    },{
      "address": {
        "building": "111",
        "coord": [
          -73.9714599,
          40.759647
        ],
        "street": "East   54 Street",
        "zipcode": "10022"
      },
      "borough": "Manhattan",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1412121600000
          },
          "grade": "A",
          "score": 2
        },
        {
          "date": {
            "$date": 1391731200000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1368662400000
          },
          "grade": "B",
          "score": 15
        },
        {
          "date": {
            "$date": 1336435200000
          },
          "grade": "A",
          "score": 5
        },
        {
          "date": {
            "$date": 1323993600000
          },
          "grade": "B",
          "score": 24
        }
      ],
      "name": "The Brook",
      "restaurant_id": "40368763"
    },{
      "address": {
        "building": "22033",
        "coord": [
          -73.76078199999999,
          40.761876
        ],
        "street": "Northern Boulevard",
        "zipcode": "11361"
      },
      "borough": "Queens",
      "cuisine": "Latin (Cuban, Dominican, Puerto Rican, South & Central American)",
      "grades": [
        {
          "date": {
            "$date": 1412726400000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1394582400000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1376524800000
          },
          "grade": "B",
          "score": 25
        },
        {
          "date": {
            "$date": 1358294400000
          },
          "grade": "B",
          "score": 17
        },
        {
          "date": {
            "$date": 1318291200000
          },
          "grade": "A",
          "score": 13
        }
      ],
      "name": "Marbella Restaurant",
      "restaurant_id": "40368801"
    },{
      "address": {
        "building": "18925",
        "coord": [
          -73.7796156,
          40.7298006
        ],
        "street": "Union Turnpike",
        "zipcode": "11366"
      },
      "borough": "Queens",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1411603200000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1374624000000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1344816000000
          },
          "grade": "A",
          "score": 4
        },
        {
          "date": {
            "$date": 1333324800000
          },
          "grade": "A",
          "score": 2
        },
        {
          "date": {
            "$date": 1319414400000
          },
          "grade": "A",
          "score": 12
        }
      ],
      "name": "P.J.' S",
      "restaurant_id": "40368809"
    },{
      "address": {
        "building": "17",
        "coord": [
          -73.97691499999999,
          40.757028
        ],
        "street": "East   48 Street",
        "zipcode": "10017"
      },
      "borough": "Manhattan",
      "cuisine": "Japanese",
      "grades": [
        {
          "date": {
            "$date": 1399939200000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1380499200000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1362614400000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1344988800000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1321574400000
          },
          "grade": "B",
          "score": 16
        }
      ],
      "name": "Hatsuhana Restaurant",
      "restaurant_id": "40368897"
    },{
      "address": {
        "building": "1008",
        "coord": [
          -73.9668354,
          40.7568328
        ],
        "street": "2 Avenue",
        "zipcode": "10022"
      },
      "borough": "Manhattan",
      "cuisine": "French",
      "grades": [
        {
          "date": {
            "$date": 1391472000000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1365552000000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1330300800000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1320192000000
          },
          "grade": "A",
          "score": 4
        },
        {
          "date": {
            "$date": 1310342400000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1299456000000
          },
          "grade": "C",
          "score": 39
        }
      ],
      "name": "La Mangeoire",
      "restaurant_id": "40368971"
    },{
      "address": {
        "building": "7147",
        "coord": [
          -73.814835,
          40.7288261
        ],
        "street": "Kissena Boulevard",
        "zipcode": "11367"
      },
      "borough": "Queens",
      "cuisine": "Pizza/Italian",
      "grades": [
        {
          "date": {
            "$date": 1411516800000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1399939200000
          },
          "grade": "B",
          "score": 19
        },
        {
          "date": {
            "$date": 1366070400000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1350518400000
          },
          "grade": "B",
          "score": 15
        },
        {
          "date": {
            "$date": 1337731200000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1320278400000
          },
          "grade": "A",
          "score": 6
        }
      ],
      "name": "Valentino'S Pizza",
      "restaurant_id": "40369012"
    },{
      "address": {
        "building": "673",
        "coord": [
          -73.970169,
          40.764834
        ],
        "street": "Madison Avenue",
        "zipcode": "10065"
      },
      "borough": "Manhattan",
      "cuisine": "Greek",
      "grades": [
        {
          "date": {
            "$date": 1410220800000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1397433600000
          },
          "grade": "B",
          "score": 24
        },
        {
          "date": {
            "$date": 1381795200000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1366156800000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1350518400000
          },
          "grade": "A",
          "score": 4
        },
        {
          "date": {
            "$date": 1337299200000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1319155200000
          },
          "grade": "B",
          "score": 18
        }
      ],
      "name": "Viand Coffee Shop",
      "restaurant_id": "40369016"
    },{
      "address": {
        "building": "840",
        "coord": [
          -73.970668,
          40.751453
        ],
        "street": "2 Avenue",
        "zipcode": "10017"
      },
      "borough": "Manhattan",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1396224000000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1364342400000
          },
          "grade": "A",
          "score": 5
        },
        {
          "date": {
            "$date": 1350259200000
          },
          "grade": "A",
          "score": 3
        },
        {
          "date": {
            "$date": 1337040000000
          },
          "grade": "A",
          "score": 12
        }
      ],
      "name": "Palm Too",
      "restaurant_id": "40369017"
    },{
      "address": {
        "building": "403416",
        "coord": [
          -91.5971285,
          41.6823902
        ],
        "street": "2Nd St",
        "zipcode": "11358"
      },
      "borough": "Queens",
      "cuisine": "Caf\u00e9/Coffee/Tea",
      "grades": [
        {
          "date": {
            "$date": 1397606400000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1366070400000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1334620800000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1305590400000
          },
          "grade": "A",
          "score": 12
        }
      ],
      "name": "Steve'S Coffee Shop",
      "restaurant_id": "40369051"
    },{
      "address": {
        "building": "3533",
        "coord": [
          -73.9100082,
          40.8863835
        ],
        "street": "Johnson Avenue",
        "zipcode": "10463"
      },
      "borough": "Bronx",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1392854400000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1378684800000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1364256000000
          },
          "grade": "A",
          "score": 5
        },
        {
          "date": {
            "$date": 1362700800000
          },
          "grade": "P",
          "score": 2
        },
        {
          "date": {
            "$date": 1348617600000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1334275200000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1311638400000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1298678400000
          },
          "grade": "A",
          "score": 13
        }
      ],
      "name": "Blue Bay Restaurant",
      "restaurant_id": "40369087"
    },{
      "address": {
        "building": "135",
        "coord": [
          -73.9717,
          40.756457
        ],
        "street": "East   50 Street",
        "zipcode": "10022"
      },
      "borough": "Manhattan",
      "cuisine": "Japanese",
      "grades": [
        {
          "date": {
            "$date": 1417564800000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1400803200000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1361923200000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1344384000000
          },
          "grade": "A",
          "score": 4
        },
        {
          "date": {
            "$date": 1329177600000
          },
          "grade": "A",
          "score": 9
        }
      ],
      "name": "Nada-Sushi",
      "restaurant_id": "40369097"
    },{
      "address": {
        "building": "1082",
        "coord": [
          -73.942599,
          40.67096
        ],
        "street": "St Johns Place",
        "zipcode": "11213"
      },
      "borough": "Brooklyn",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1403049600000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1389744000000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1387843200000
          },
          "grade": "P",
          "score": 10
        },
        {
          "date": {
            "$date": 1355961600000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1323907200000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1315353600000
          },
          "grade": "B",
          "score": 15
        }
      ],
      "name": "The Hytes Bar",
      "restaurant_id": "40369111"
    },{
      "address": {
        "building": "252",
        "coord": [
          -73.9873049,
          40.7592843
        ],
        "street": "West   46 Street",
        "zipcode": "10036"
      },
      "borough": "Manhattan",
      "cuisine": "French",
      "grades": [
        {
          "date": {
            "$date": 1393977600000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1361491200000
          },
          "grade": "A",
          "score": 2
        },
        {
          "date": {
            "$date": 1328054400000
          },
          "grade": "A",
          "score": 8
        }
      ],
      "name": "Pergola Des Artistes",
      "restaurant_id": "40369139"
    },{
      "address": {
        "building": "372",
        "coord": [
          -74.1018239,
          40.630788
        ],
        "street": "Forest Avenue",
        "zipcode": "10301"
      },
      "borough": "Staten Island",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1394236800000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1379376000000
          },
          "grade": "A",
          "score": 2
        },
        {
          "date": {
            "$date": 1360800000000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1342224000000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1323820800000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1310342400000
          },
          "grade": "A",
          "score": 9
        }
      ],
      "name": "Jody'S Club",
      "restaurant_id": "40369158"
    },{
      "address": {
        "building": "302",
        "coord": [
          -73.9486257,
          40.7813724
        ],
        "street": "East 92 Street",
        "zipcode": "10128"
      },
      "borough": "Manhattan",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1402790400000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1387238400000
          },
          "grade": "B",
          "score": 17
        },
        {
          "date": {
            "$date": 1369180800000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1334707200000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1315958400000
          },
          "grade": "B",
          "score": 14
        }
      ],
      "name": "Reif'S Tavern",
      "restaurant_id": "40369165"
    },{
      "address": {
        "building": "3005",
        "coord": [
          -73.8335566,
          40.7703224
        ],
        "street": "Whitestone Expressway",
        "zipcode": "11354"
      },
      "borough": "Queens",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1410998400000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1392681600000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1370649600000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1347667200000
          },
          "grade": "B",
          "score": 26
        },
        {
          "date": {
            "$date": 1323216000000
          },
          "grade": "B",
          "score": 16
        }
      ],
      "name": "Whitestone Lanes",
      "restaurant_id": "40369213"
    },{
      "address": {
        "building": "8502",
        "coord": [
          -73.8818014,
          40.7347681
        ],
        "street": "Grand Avenue",
        "zipcode": "11373"
      },
      "borough": "Queens",
      "cuisine": "Pizza",
      "grades": [
        {
          "date": {
            "$date": 1413331200000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1380931200000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1347408000000
          },
          "grade": "A",
          "score": 9
        }
      ],
      "name": "John'S Pizzeria",
      "restaurant_id": "40369262"
    },{
      "address": {
        "building": "591",
        "coord": [
          -73.790804,
          40.8541848
        ],
        "street": "City Island Ave",
        "zipcode": "10464"
      },
      "borough": "Bronx",
      "cuisine": "Seafood",
      "grades": [
        {
          "date": {
            "$date": 1418256000000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1402099200000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1383955200000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1366070400000
          },
          "grade": "B",
          "score": 22
        },
        {
          "date": {
            "$date": 1330473600000
          },
          "grade": "A",
          "score": 9
        }
      ],
      "name": "Seashore Restaurant",
      "restaurant_id": "40369299"
    },{
      "address": {
        "building": "25",
        "coord": [
          -74.012376,
          40.703721
        ],
        "street": "Bridge Street",
        "zipcode": "10004"
      },
      "borough": "Manhattan",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1408492800000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1395360000000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1379289600000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1363910400000
          },
          "grade": "B",
          "score": 15
        },
        {
          "date": {
            "$date": 1347494400000
          },
          "grade": "A",
          "score": 8
        },
        {
          "date": {
            "$date": 1325203200000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1315353600000
          },
          "grade": "A",
          "score": 12
        }
      ],
      "name": "White Horse Tavern",
      "restaurant_id": "40369400"
    },{
      "address": {
        "building": "119",
        "coord": [
          -74.00041689999999,
          40.7302678
        ],
        "street": "Mac Dougal Street",
        "zipcode": "10012"
      },
      "borough": "Manhattan",
      "cuisine": "Caf\u00e9/Coffee/Tea",
      "grades": [
        {
          "date": {
            "$date": 1420675200000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1405987200000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1376438400000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1364428800000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1346716800000
          },
          "grade": "A",
          "score": 9
        }
      ],
      "name": "Caffe Reggio",
      "restaurant_id": "40369418"
    },{
      "address": {
        "building": "123",
        "coord": [
          -73.984126,
          40.7567949
        ],
        "street": "West   44 Street",
        "zipcode": "10036"
      },
      "borough": "Manhattan",
      "cuisine": "French",
      "grades": [
        {
          "date": {
            "$date": 1421452800000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1389139200000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1375142400000
          },
          "grade": "C",
          "score": 48
        },
        {
          "date": {
            "$date": 1352937600000
          },
          "grade": "B",
          "score": 25
        },
        {
          "date": {
            "$date": 1339113600000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1337817600000
          },
          "grade": "P",
          "score": 14
        },
        {
          "date": {
            "$date": 1326844800000
          },
          "grade": "A",
          "score": 10
        }
      ],
      "name": "Cafe Un Deux Trois",
      "restaurant_id": "40369461"
    },{
      "address": {
        "building": "1366",
        "coord": [
          -73.88228649999999,
          40.6481972
        ],
        "street": "Pennsylvania Avenue",
        "zipcode": "11239"
      },
      "borough": "Brooklyn",
      "cuisine": "Pizza",
      "grades": [
        {
          "date": {
            "$date": 1410825600000
          },
          "grade": "A",
          "score": 2
        },
        {
          "date": {
            "$date": 1393632000000
          },
          "grade": "B",
          "score": 25
        },
        {
          "date": {
            "$date": 1369094400000
          },
          "grade": "B",
          "score": 18
        },
        {
          "date": {
            "$date": 1337904000000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1320105600000
          },
          "grade": "B",
          "score": 19
        }
      ],
      "name": "Armando'S Pizza",
      "restaurant_id": "40369482"
    },{
      "address": {
        "building": "2018",
        "coord": [
          -73.9818416,
          40.7760336
        ],
        "street": "Broadway",
        "zipcode": "10023"
      },
      "borough": "Manhattan",
      "cuisine": "Japanese",
      "grades": [
        {
          "date": {
            "$date": 1413244800000
          },
          "grade": "A",
          "score": 5
        },
        {
          "date": {
            "$date": 1396310400000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1375315200000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1353283200000
          },
          "grade": "B",
          "score": 27
        },
        {
          "date": {
            "$date": 1320105600000
          },
          "grade": "A",
          "score": 13
        }
      ],
      "name": "Dan Tempura",
      "restaurant_id": "40369495"
    },{
      "address": {
        "building": "33",
        "coord": [
          -73.994428,
          40.7320132
        ],
        "street": "University Place",
        "zipcode": "10003"
      },
      "borough": "Manhattan",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1420588800000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1403740800000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1389225600000
          },
          "grade": "A",
          "score": 6
        },
        {
          "date": {
            "$date": 1364860800000
          },
          "grade": "B",
          "score": 14
        },
        {
          "date": {
            "$date": 1336953600000
          },
          "grade": "B",
          "score": 19
        }
      ],
      "name": "Knickerbocker Bar & Grill",
      "restaurant_id": "40369521"
    },{
      "address": {
        "building": "395",
        "coord": [
          -73.9808063,
          40.6895078
        ],
        "street": "Flatbush Avenue Extension",
        "zipcode": "11201"
      },
      "borough": "Brooklyn",
      "cuisine": "Hamburgers",
      "grades": [
        {
          "date": {
            "$date": 1396828800000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1365033600000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1333670400000
          },
          "grade": "A",
          "score": 5
        },
        {
          "date": {
            "$date": 1302652800000
          },
          "grade": "A",
          "score": 10
        }
      ],
      "name": "Mcdonald'S",
      "restaurant_id": "40369535"
    },{
      "address": {
        "building": "718",
        "coord": [
          -73.9735762,
          40.74754
        ],
        "street": "2 Avenue",
        "zipcode": "10016"
      },
      "borough": "Manhattan",
      "cuisine": "Latin (Cuban, Dominican, Puerto Rican, South & Central American)",
      "grades": [
        {
          "date": {
            "$date": 1411084800000
          },
          "grade": "B",
          "score": 21
        },
        {
          "date": {
            "$date": 1378771200000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1360022400000
          },
          "grade": "B",
          "score": 21
        },
        {
          "date": {
            "$date": 1326067200000
          },
          "grade": "A",
          "score": 12
        }
      ],
      "name": "El Pote Espanol",
      "restaurant_id": "40369580"
    },{
      "address": {
        "building": "427",
        "coord": [
          -73.94523509999999,
          40.7177182
        ],
        "street": "Graham Avenue",
        "zipcode": "11211"
      },
      "borough": "Brooklyn",
      "cuisine": "Caf\u00e9/Coffee/Tea",
      "grades": [
        {
          "date": {
            "$date": 1406764800000
          },
          "grade": "A",
          "score": 3
        },
        {
          "date": {
            "$date": 1374796800000
          },
          "grade": "A",
          "score": 5
        },
        {
          "date": {
            "$date": 1363305600000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1329350400000
          },
          "grade": "A",
          "score": 13
        }
      ],
      "name": "Cafe Capri",
      "restaurant_id": "40369597"
    },{
      "address": {
        "building": "2375",
        "coord": [
          -73.85534559999999,
          40.8426433
        ],
        "street": "East Tremont Avenue",
        "zipcode": "10462"
      },
      "borough": "Bronx",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1413244800000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1396915200000
          },
          "grade": "A",
          "score": 8
        },
        {
          "date": {
            "$date": 1383523200000
          },
          "grade": "C",
          "score": 45
        },
        {
          "date": {
            "$date": 1369267200000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1350518400000
          },
          "grade": "B",
          "score": 15
        },
        {
          "date": {
            "$date": 1349395200000
          },
          "grade": "P",
          "score": 12
        },
        {
          "date": {
            "$date": 1336953600000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1324425600000
          },
          "grade": "A",
          "score": 11
        }
      ],
      "name": "Bronx Grill",
      "restaurant_id": "40369601"
    },{
      "address": {
        "building": "1",
        "coord": [
          -73.99472279999999,
          40.703195
        ],
        "street": "Water Street",
        "zipcode": "11201"
      },
      "borough": "Brooklyn",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1403654400000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1334620800000
          },
          "grade": "A",
          "score": 8
        }
      ],
      "name": "The River Cafe",
      "restaurant_id": "40369608"
    },{
      "address": {
        "building": "126",
        "coord": [
          -74.00893959999999,
          40.7151413
        ],
        "street": "Chambers Street",
        "zipcode": "10007"
      },
      "borough": "Manhattan",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1394496000000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1381449600000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1347926400000
          },
          "grade": "A",
          "score": 3
        },
        {
          "date": {
            "$date": 1317945600000
          },
          "grade": "A",
          "score": 12
        }
      ],
      "name": "Mudville Saloon",
      "restaurant_id": "40369619"
    },{
      "address": {
        "building": "2",
        "coord": [
          -73.7826735,
          40.8377713
        ],
        "street": "City Island Ave",
        "zipcode": "10464"
      },
      "borough": "Bronx",
      "cuisine": "Seafood",
      "grades": [
        {
          "date": {
            "$date": 1400284800000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1372032000000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1336608000000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1306108800000
          },
          "grade": "A",
          "score": 12
        }
      ],
      "name": "Johnny'S Reef Restaurant",
      "restaurant_id": "40369641"
    },{
      "address": {
        "building": "846",
        "coord": [
          -73.9321666,
          40.6632351
        ],
        "street": "Empire Boulevard",
        "zipcode": "11213"
      },
      "borough": "Brooklyn",
      "cuisine": "Hamburgers",
      "grades": [
        {
          "date": {
            "$date": 1394064000000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1362096000000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1330732800000
          },
          "grade": "A",
          "score": 6
        },
        {
          "date": {
            "$date": 1300320000000
          },
          "grade": "A",
          "score": 7
        }
      ],
      "name": "White Castle",
      "restaurant_id": "40369667"
    },{
      "address": {
        "building": "2701",
        "coord": [
          -72.7329266,
          41.3099228
        ],
        "street": "Boston Post Road",
        "zipcode": "10467"
      },
      "borough": "Bronx",
      "cuisine": "Hamburgers",
      "grades": [
        {
          "date": {
            "$date": 1401235200000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1389830400000
          },
          "grade": "A",
          "score": 5
        },
        {
          "date": {
            "$date": 1357084800000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1324944000000
          },
          "grade": "A",
          "score": 2
        }
      ],
      "name": "White Castle",
      "restaurant_id": "40369669"
    },{
      "address": {
        "building": "43-02",
        "coord": [
          -73.92126499999999,
          40.743009
        ],
        "street": "Queens Boulevard",
        "zipcode": "11104"
      },
      "borough": "Queens",
      "cuisine": "Hamburgers",
      "grades": [
        {
          "date": {
            "$date": 1395705600000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1363910400000
          },
          "grade": "A",
          "score": 5
        },
        {
          "date": {
            "$date": 1332201600000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1302739200000
          },
          "grade": "A",
          "score": 13
        }
      ],
      "name": "White Castle",
      "restaurant_id": "40369675"
    },{
      "address": {
        "building": "4202",
        "coord": [
          -73.993031,
          40.6417669
        ],
        "street": "Ft Hamilton Parkway",
        "zipcode": "11219"
      },
      "borough": "Brooklyn",
      "cuisine": "Hamburgers",
      "grades": [
        {
          "date": {
            "$date": 1418083200000
          },
          "grade": "A",
          "score": 8
        },
        {
          "date": {
            "$date": 1388448000000
          },
          "grade": "A",
          "score": 3
        },
        {
          "date": {
            "$date": 1356912000000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1325203200000
          },
          "grade": "A",
          "score": 10
        }
      ],
      "name": "White Castle",
      "restaurant_id": "40369676"
    },{
      "address": {
        "building": "151",
        "coord": [
          -74.00184349999999,
          40.684236
        ],
        "street": "Union Street",
        "zipcode": "11231"
      },
      "borough": "Brooklyn",
      "cuisine": "Italian",
      "grades": [
        {
          "date": {
            "$date": 1399075200000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1366675200000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1330300800000
          },
          "grade": "A",
          "score": 2
        }
      ],
      "name": "Ferdinando'S Restaurant",
      "restaurant_id": "40369716"
    },{
      "address": {
        "building": "106-15",
        "coord": [
          -73.8451846,
          40.7200906
        ],
        "street": "71 Avenue",
        "zipcode": "11375"
      },
      "borough": "Queens",
      "cuisine": "Hamburgers",
      "grades": [
        {
          "date": {
            "$date": 1389312000000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1375056000000
          },
          "grade": "C",
          "score": 28
        },
        {
          "date": {
            "$date": 1343952000000
          },
          "grade": "A",
          "score": 6
        }
      ],
      "name": "Mcdonald'S",
      "restaurant_id": "40369724"
    },{
      "address": {
        "building": "1011",
        "coord": [
          -73.9623333,
          40.7757194
        ],
        "street": "Madison Avenue",
        "zipcode": "10075"
      },
      "borough": "Manhattan",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1398988800000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1382313600000
          },
          "grade": "B",
          "score": 15
        },
        {
          "date": {
            "$date": 1366329600000
          },
          "grade": "B",
          "score": 0
        },
        {
          "date": {
            "$date": 1353456000000
          },
          "grade": "C",
          "score": 40
        },
        {
          "date": {
            "$date": 1333929600000
          },
          "grade": "B",
          "score": 17
        }
      ],
      "name": "Viand Cafe",
      "restaurant_id": "40369753"
    },{
      "address": {
        "building": "1022",
        "coord": [
          -73.9624221,
          40.77620840000001
        ],
        "street": "Madison Avenue",
        "zipcode": "10075"
      },
      "borough": "Manhattan",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1392854400000
          },
          "grade": "A",
          "score": 5
        },
        {
          "date": {
            "$date": 1376524800000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1362700800000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1340150400000
          },
          "grade": "B",
          "score": 16
        },
        {
          "date": {
            "$date": 1323302400000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1311811200000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1298505600000
          },
          "grade": "A",
          "score": 12
        }
      ],
      "name": "Nectar Coffee Shop",
      "restaurant_id": "40369759"
    },{
      "address": {
        "building": "359",
        "coord": [
          -74.0030657,
          40.7230087
        ],
        "street": "West Broadway",
        "zipcode": "10013"
      },
      "borough": "Manhattan",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1412812800000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1399420800000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1383868800000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1349308800000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1337126400000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1324944000000
          },
          "grade": "B",
          "score": 19
        }
      ],
      "name": "The Cupping Room",
      "restaurant_id": "40369775"
    },{
      "address": {
        "building": "701",
        "coord": [
          -73.9308722,
          40.656262
        ],
        "street": "Utica Avenue",
        "zipcode": "11203"
      },
      "borough": "Brooklyn",
      "cuisine": "Hamburgers",
      "grades": [
        {
          "date": {
            "$date": 1402272000000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1372636800000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1360108800000
          },
          "grade": "A",
          "score": 8
        },
        {
          "date": {
            "$date": 1345075200000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1330473600000
          },
          "grade": "A",
          "score": 4
        },
        {
          "date": {
            "$date": 1317859200000
          },
          "grade": "A",
          "score": 12
        }
      ],
      "name": "Mcdonald'S",
      "restaurant_id": "40369782"
    },{
      "address": {
        "building": "129",
        "coord": [
          -73.9866918,
          40.7364597
        ],
        "street": "East   18 Street",
        "zipcode": "10003"
      },
      "borough": "Manhattan",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1397520000000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1365724800000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1344988800000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1313539200000
          },
          "grade": "A",
          "score": 5
        },
        {
          "date": {
            "$date": 1304294400000
          },
          "grade": "A",
          "score": 9
        }
      ],
      "name": "Pete'S Tavern",
      "restaurant_id": "40369810"
    },{
      "address": {
        "building": "61-32",
        "coord": [
          -73.7566136,
          40.7483444
        ],
        "street": "Springfield Boulevard",
        "zipcode": "11364"
      },
      "borough": "Queens",
      "cuisine": "Pizza/Italian",
      "grades": [
        {
          "date": {
            "$date": 1411603200000
          },
          "grade": "A",
          "score": 8
        },
        {
          "date": {
            "$date": 1394668800000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1373846400000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1360713600000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1339632000000
          },
          "grade": "B",
          "score": 17
        },
        {
          "date": {
            "$date": 1320192000000
          },
          "grade": "B",
          "score": 21
        }
      ],
      "name": "Gino'S Pizzeria",
      "restaurant_id": "40369849"
    },{
      "address": {
        "building": "75",
        "coord": [
          -74.0075542,
          40.7077614
        ],
        "street": "Maiden Lane",
        "zipcode": "10038"
      },
      "borough": "Manhattan",
      "cuisine": "Irish",
      "grades": [
        {
          "date": {
            "$date": 1391040000000
          },
          "grade": "A",
          "score": 2
        },
        {
          "date": {
            "$date": 1376611200000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1344988800000
          },
          "grade": "A",
          "score": 8
        },
        {
          "date": {
            "$date": 1332288000000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1318982400000
          },
          "grade": "A",
          "score": 8
        }
      ],
      "name": "Jim Brady'S Restaurant",
      "restaurant_id": "40369869"
    },{
      "address": {
        "building": "69",
        "coord": [
          -74.00200099999999,
          40.7285929
        ],
        "street": "Macdougal Street",
        "zipcode": "10012"
      },
      "borough": "Manhattan",
      "cuisine": "Italian",
      "grades": [
        {
          "date": {
            "$date": 1411344000000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1396828800000
          },
          "grade": "A",
          "score": 8
        },
        {
          "date": {
            "$date": 1370476800000
          },
          "grade": "B",
          "score": 14
        },
        {
          "date": {
            "$date": 1337644800000
          },
          "grade": "A",
          "score": 9
        }
      ],
      "name": "Villa Mosconi Restaurant",
      "restaurant_id": "40369878"
    },{
      "address": {
        "building": "170",
        "coord": [
          -73.9035553,
          40.878342
        ],
        "street": "West  231 Street",
        "zipcode": "10463"
      },
      "borough": "Bronx",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1412121600000
          },
          "grade": "B",
          "score": 18
        },
        {
          "date": {
            "$date": 1398211200000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1382486400000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1369094400000
          },
          "grade": "B",
          "score": 19
        },
        {
          "date": {
            "$date": 1367452800000
          },
          "grade": "P",
          "score": 3
        },
        {
          "date": {
            "$date": 1353369600000
          },
          "grade": "B",
          "score": 24
        }
      ],
      "name": "P & K'S Grill",
      "restaurant_id": "40369895"
    },{
      "address": {
        "building": "576581",
        "coord": [
          -73.9030535,
          40.8812538
        ],
        "street": "Broadway",
        "zipcode": "10463"
      },
      "borough": "Bronx",
      "cuisine": "Hamburgers",
      "grades": [
        {
          "date": {
            "$date": 1397606400000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1383696000000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1371427200000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1356912000000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1341878400000
          },
          "grade": "A",
          "score": 4
        },
        {
          "date": {
            "$date": 1328572800000
          },
          "grade": "A",
          "score": 5
        }
      ],
      "name": "Mcdonald'S",
      "restaurant_id": "40369915"
    },{
      "address": {
        "building": "4021",
        "coord": [
          -73.9395471,
          40.8420198
        ],
        "street": "Broadway",
        "zipcode": "10032"
      },
      "borough": "Manhattan",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1415836800000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1400803200000
          },
          "grade": "A",
          "score": 3
        },
        {
          "date": {
            "$date": 1364774400000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1351036800000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1335484800000
          },
          "grade": "B",
          "score": 22
        },
        {
          "date": {
            "$date": 1323043200000
          },
          "grade": "A",
          "score": 11
        }
      ],
      "name": "Reme Restaurant",
      "restaurant_id": "40369928"
    },{
      "address": {
        "building": "1134",
        "coord": [
          -73.9598324,
          40.7798381
        ],
        "street": "Madison Avenue",
        "zipcode": "10028"
      },
      "borough": "Manhattan",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1408579200000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1393372800000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1378252800000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1342569600000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1329955200000
          },
          "grade": "A",
          "score": 7
        }
      ],
      "name": "The New Amity Restaurant",
      "restaurant_id": "40369940"
    },{
      "address": {
        "building": "147",
        "coord": [
          -74.00041259999999,
          40.7315763
        ],
        "street": "West Fourth Street",
        "zipcode": "10012"
      },
      "borough": "Manhattan",
      "cuisine": "Italian",
      "grades": [
        {
          "date": {
            "$date": 1392163200000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1369008000000
          },
          "grade": "B",
          "score": 22
        },
        {
          "date": {
            "$date": 1342569600000
          },
          "grade": "B",
          "score": 22
        },
        {
          "date": {
            "$date": 1328054400000
          },
          "grade": "B",
          "score": 21
        },
        {
          "date": {
            "$date": 1316476800000
          },
          "grade": "A",
          "score": 10
        }
      ],
      "name": "Volare Restaurant",
      "restaurant_id": "40369954"
    },{
      "address": {
        "building": "210",
        "coord": [
          -73.97212999999999,
          40.7528838
        ],
        "street": "East   46 Street",
        "zipcode": "10017"
      },
      "borough": "Manhattan",
      "cuisine": "Steak",
      "grades": [
        {
          "date": {
            "$date": 1395014400000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1380153600000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1364774400000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1325116800000
          },
          "grade": "A",
          "score": 10
        }
      ],
      "name": "Sparks Steak House",
      "restaurant_id": "40369958"
    },{
      "address": {
        "building": "83-18",
        "coord": [
          -73.807954,
          40.715159
        ],
        "street": "Parsons Boulevard",
        "zipcode": "11432"
      },
      "borough": "Queens",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1419984000000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1395100800000
          },
          "grade": "B",
          "score": 21
        },
        {
          "date": {
            "$date": 1380067200000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1365552000000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1346284800000
          },
          "grade": "A",
          "score": 13
        }
      ],
      "name": "The Dart Inn",
      "restaurant_id": "40369983"
    },{
      "address": {
        "building": "32",
        "coord": [
          -73.951199,
          40.7166026
        ],
        "street": "Withers Street",
        "zipcode": "11211"
      },
      "borough": "Brooklyn",
      "cuisine": "Italian",
      "grades": [
        {
          "date": {
            "$date": 1412553600000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1390003200000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1369785600000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1355702400000
          },
          "grade": "B",
          "score": 27
        },
        {
          "date": {
            "$date": 1318377600000
          },
          "grade": "A",
          "score": 13
        }
      ],
      "name": "Bamonte'S Restaurant",
      "restaurant_id": "40370015"
    },{
      "address": {
        "building": "1827",
        "coord": [
          -73.8456653,
          40.7823455
        ],
        "street": "College Point Boulevard",
        "zipcode": "11356"
      },
      "borough": "Queens",
      "cuisine": "Pizza",
      "grades": [
        {
          "date": {
            "$date": 1408579200000
          },
          "grade": "B",
          "score": 15
        },
        {
          "date": {
            "$date": 1395360000000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1376956800000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1361750400000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1341792000000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1328140800000
          },
          "grade": "A",
          "score": 13
        }
      ],
      "name": "Pizza Town",
      "restaurant_id": "40370091"
    },{
      "address": {
        "building": "427",
        "coord": [
          -73.9996841,
          40.7543101
        ],
        "street": "10 Avenue",
        "zipcode": "10001"
      },
      "borough": "Manhattan",
      "cuisine": "Hamburgers",
      "grades": [
        {
          "date": {
            "$date": 1413763200000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1383868800000
          },
          "grade": "A",
          "score": 5
        },
        {
          "date": {
            "$date": 1353024000000
          },
          "grade": "A",
          "score": 5
        },
        {
          "date": {
            "$date": 1321488000000
          },
          "grade": "A",
          "score": 6
        }
      ],
      "name": "Mcdonald'S",
      "restaurant_id": "40370146"
    },{
      "address": {
        "building": "4272",
        "coord": [
          -73.86720489999999,
          40.8977501
        ],
        "street": "Katonah Avenue",
        "zipcode": "10470"
      },
      "borough": "Bronx",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1400803200000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1383523200000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1367193600000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1348444800000
          },
          "grade": "B",
          "score": 15
        }
      ],
      "name": "John Mulligan'S Fireside Pub",
      "restaurant_id": "40370150"
    },{
      "address": {
        "building": "22210",
        "coord": [
          -73.759249,
          40.761574
        ],
        "street": "Northern Boulevard",
        "zipcode": "11361"
      },
      "borough": "Queens",
      "cuisine": "Hamburgers",
      "grades": [
        {
          "date": {
            "$date": 1418860800000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1386720000000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1374451200000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1362096000000
          },
          "grade": "C",
          "score": 10
        },
        {
          "date": {
            "$date": 1328486400000
          },
          "grade": "A",
          "score": 10
        }
      ],
      "name": "Burger King",
      "restaurant_id": "40370167"
    },{
      "address": {
        "building": "326",
        "coord": [
          -74.0094737,
          40.7258405
        ],
        "street": "Spring Street",
        "zipcode": "10013"
      },
      "borough": "Manhattan",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1418688000000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1406764800000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1391644800000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1371686400000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1339027200000
          },
          "grade": "A",
          "score": 12
        }
      ],
      "name": "Ear Inn",
      "restaurant_id": "40370168"
    },{
      "address": {
        "building": "6815",
        "coord": [
          -73.89707140000002,
          40.7543896
        ],
        "street": "Northern Boulevard",
        "zipcode": "11377"
      },
      "borough": "Queens",
      "cuisine": "Hamburgers",
      "grades": [
        {
          "date": {
            "$date": 1394582400000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1378771200000
          },
          "grade": "B",
          "score": 27
        },
        {
          "date": {
            "$date": 1345593600000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1315353600000
          },
          "grade": "A",
          "score": 4
        },
        {
          "date": {
            "$date": 1303516800000
          },
          "grade": "A",
          "score": 5
        }
      ],
      "name": "Burger King",
      "restaurant_id": "40370238"
    },{
      "address": {
        "building": "14474",
        "coord": [
          -73.8206678,
          40.7647441
        ],
        "street": "Northern Boulevard",
        "zipcode": "11354"
      },
      "borough": "Queens",
      "cuisine": "Hamburgers",
      "grades": [
        {
          "date": {
            "$date": 1392249600000
          },
          "grade": "A",
          "score": 2
        },
        {
          "date": {
            "$date": 1380672000000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1367452800000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1351123200000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1317686400000
          },
          "grade": "A",
          "score": 9
        }
      ],
      "name": "Burger King",
      "restaurant_id": "40370239"
    },{
      "address": {
        "building": "320",
        "coord": [
          -73.977597,
          40.779593
        ],
        "street": "Columbus Avenue",
        "zipcode": "10023"
      },
      "borough": "Manhattan",
      "cuisine": "Indian",
      "grades": [
        {
          "date": {
            "$date": 1414368000000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1375056000000
          },
          "grade": "A",
          "score": 5
        },
        {
          "date": {
            "$date": 1361232000000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1326326400000
          },
          "grade": "A",
          "score": 2
        }
      ],
      "name": "Mughlai Restaurant",
      "restaurant_id": "40370243"
    },{
      "address": {
        "building": "188",
        "coord": [
          -73.9581492,
          40.7177363
        ],
        "street": "Bedford Avenue",
        "zipcode": "11249"
      },
      "borough": "Brooklyn",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1395187200000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1363824000000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1331769600000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1318464000000
          },
          "grade": "B",
          "score": 14
        }
      ],
      "name": "Greenpoint Tavern",
      "restaurant_id": "40370342"
    },{
      "address": {
        "building": "3267",
        "coord": [
          -74.1680654,
          40.5595469
        ],
        "street": "Richmond Avenue",
        "zipcode": "10312"
      },
      "borough": "Staten Island",
      "cuisine": "Hamburgers",
      "grades": [
        {
          "date": {
            "$date": 1398124800000
          },
          "grade": "A",
          "score": 5
        },
        {
          "date": {
            "$date": 1363046400000
          },
          "grade": "A",
          "score": 6
        },
        {
          "date": {
            "$date": 1344384000000
          },
          "grade": "C",
          "score": 37
        },
        {
          "date": {
            "$date": 1332201600000
          },
          "grade": "A",
          "score": 7
        }
      ],
      "name": "Mcdonald'S",
      "restaurant_id": "40370356"
    },{
      "address": {
        "building": "336",
        "coord": [
          -73.922642,
          40.701015
        ],
        "street": "Knickerbocker Avenue",
        "zipcode": "11237"
      },
      "borough": "Brooklyn",
      "cuisine": "Pizza/Italian",
      "grades": [
        {
          "date": {
            "$date": 1405555200000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1392076800000
          },
          "grade": "B",
          "score": 20
        },
        {
          "date": {
            "$date": 1358208000000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1326240000000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1312761600000
          },
          "grade": "B",
          "score": 17
        }
      ],
      "name": "Tony'S Pizzeria",
      "restaurant_id": "40370425"
    },{
      "address": {
        "building": "108",
        "coord": [
          -73.9788758,
          40.7491708
        ],
        "street": "East   38 Street",
        "zipcode": "10016"
      },
      "borough": "Manhattan",
      "cuisine": "Italian",
      "grades": [
        {
          "date": {
            "$date": 1401321600000
          },
          "grade": "B",
          "score": 16
        },
        {
          "date": {
            "$date": 1382659200000
          },
          "grade": "C",
          "score": 12
        },
        {
          "date": {
            "$date": 1343779200000
          },
          "grade": "A",
          "score": 13
        }
      ],
      "name": "Rossini'S",
      "restaurant_id": "40370436"
    },{
      "address": {
        "building": "49-20",
        "coord": [
          -73.90725640000001,
          40.7601082
        ],
        "street": "30 Avenue",
        "zipcode": "11377"
      },
      "borough": "Queens",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1391472000000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1358294400000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1327449600000
          },
          "grade": "A",
          "score": 4
        },
        {
          "date": {
            "$date": 1318464000000
          },
          "grade": "A",
          "score": 8
        },
        {
          "date": {
            "$date": 1306108800000
          },
          "grade": "A",
          "score": 12
        }
      ],
      "name": "Pat'S Stationary",
      "restaurant_id": "40370449"
    },{
      "address": {
        "building": "960",
        "coord": [
          -73.96408199999999,
          40.7741339
        ],
        "street": "Madison Avenue",
        "zipcode": "10021"
      },
      "borough": "Manhattan",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1390780800000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1355356800000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1341792000000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1328140800000
          },
          "grade": "A",
          "score": 10
        }
      ],
      "name": "Three Guy'S Restaurant",
      "restaurant_id": "40370463"
    },{
      "address": {
        "building": "138140",
        "coord": [
          -73.9574128,
          40.7701235
        ],
        "street": "East   74 Street",
        "zipcode": "10021"
      },
      "borough": "Manhattan",
      "cuisine": "Italian",
      "grades": [
        {
          "date": {
            "$date": 1398988800000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1365724800000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1333411200000
          },
          "grade": "A",
          "score": 11
        }
      ],
      "name": "Cucina Vivolo",
      "restaurant_id": "40370497"
    },{
      "address": {
        "building": "16",
        "coord": [
          -73.986685,
          40.73756400000001
        ],
        "street": "Gramercy Park South",
        "zipcode": "10003"
      },
      "borough": "Manhattan",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1415836800000
          },
          "grade": "Z",
          "score": 25
        },
        {
          "date": {
            "$date": 1398729600000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1379376000000
          },
          "grade": "C",
          "score": 35
        },
        {
          "date": {
            "$date": 1361232000000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1339459200000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1324512000000
          },
          "grade": "A",
          "score": 13
        }
      ],
      "name": "The Players Club",
      "restaurant_id": "40370507"
    },{
      "address": {
        "building": "2901",
        "coord": [
          -73.792701,
          40.7702099
        ],
        "street": "Francis Lewis Boulevard",
        "zipcode": "11358"
      },
      "borough": "Queens",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1411516800000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1400630400000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1366761600000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1331510400000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1320796800000
          },
          "grade": "A",
          "score": 13
        }
      ],
      "name": "Divers Cove",
      "restaurant_id": "40370519"
    },{
      "address": {
        "building": "24904",
        "coord": [
          -73.7310899,
          40.7603325
        ],
        "street": "Horace Harding Boulevard",
        "zipcode": "11362"
      },
      "borough": "Queens",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1410998400000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1394668800000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1375920000000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1361318400000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1332288000000
          },
          "grade": "A",
          "score": 12
        }
      ],
      "name": "Tjk Cafe & Restaurant",
      "restaurant_id": "40370638"
    },{
      "address": {
        "building": "172",
        "coord": [
          -74.0007509,
          40.7287609
        ],
        "street": "Bleecker Street",
        "zipcode": "10012"
      },
      "borough": "Manhattan",
      "cuisine": "Spanish",
      "grades": [
        {
          "date": {
            "$date": 1407196800000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1389052800000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1369958400000
          },
          "grade": "B",
          "score": 25
        },
        {
          "date": {
            "$date": 1340668800000
          },
          "grade": "B",
          "score": 26
        },
        {
          "date": {
            "$date": 1326844800000
          },
          "grade": "C",
          "score": 54
        },
        {
          "date": {
            "$date": 1315267200000
          },
          "grade": "B",
          "score": 14
        }
      ],
      "name": "Cafe Espanol",
      "restaurant_id": "40370759"
    },{
      "address": {
        "building": "201",
        "coord": [
          -73.9704988,
          40.7552269
        ],
        "street": "East   49 Street",
        "zipcode": "10017"
      },
      "borough": "Manhattan",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1408924800000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1396396800000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1380153600000
          },
          "grade": "A",
          "score": 8
        },
        {
          "date": {
            "$date": 1346889600000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1318377600000
          },
          "grade": "A",
          "score": 3
        }
      ],
      "name": "Smith & Wollensky",
      "restaurant_id": "40370766"
    },{
      "address": {
        "building": "16011",
        "coord": [
          -73.802319,
          40.780748
        ],
        "street": "Willets Point Boulevard",
        "zipcode": "11357"
      },
      "borough": "Queens",
      "cuisine": "Hamburgers",
      "grades": [
        {
          "date": {
            "$date": 1414627200000
          },
          "grade": "C",
          "score": 37
        },
        {
          "date": {
            "$date": 1401408000000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1367280000000
          },
          "grade": "A",
          "score": 2
        },
        {
          "date": {
            "$date": 1353283200000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1339459200000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1327968000000
          },
          "grade": "A",
          "score": 5
        }
      ],
      "name": "Mcdonald'S",
      "restaurant_id": "40370781"
    },{
      "address": {
        "building": "117",
        "coord": [
          -74.00057799999999,
          40.730204
        ],
        "street": "Mac Dougal Street",
        "zipcode": "10012"
      },
      "borough": "Manhattan",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1392076800000
          },
          "grade": "A",
          "score": 3
        },
        {
          "date": {
            "$date": 1379894400000
          },
          "grade": "A",
          "score": 5
        },
        {
          "date": {
            "$date": 1344988800000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1313971200000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1299542400000
          },
          "grade": "A",
          "score": 7
        }
      ],
      "name": "Olive Tree Cafe & Comedy Cellar",
      "restaurant_id": "40370856"
    },{
      "address": {
        "building": "1745",
        "coord": [
          -74.146976,
          40.625178
        ],
        "street": "Forest Avenue",
        "zipcode": "10303"
      },
      "borough": "Staten Island",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1416009600000
          },
          "grade": "A",
          "score": 8
        },
        {
          "date": {
            "$date": 1403568000000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1389139200000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1354838400000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1340409600000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1327363200000
          },
          "grade": "A",
          "score": 9
        }
      ],
      "name": "Perkins Family Restaurant & Bakery",
      "restaurant_id": "40370910"
    },{
      "address": {
        "building": "25810",
        "coord": [
          -73.70073909999999,
          40.73895539999999
        ],
        "street": "Hillside Avenue",
        "zipcode": "11004"
      },
      "borough": "Queens",
      "cuisine": "Hamburgers",
      "grades": [
        {
          "date": {
            "$date": 1405468800000
          },
          "grade": "B",
          "score": 17
        },
        {
          "date": {
            "$date": 1392940800000
          },
          "grade": "C",
          "score": 32
        },
        {
          "date": {
            "$date": 1356739200000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1336089600000
          },
          "grade": "A",
          "score": 6
        },
        {
          "date": {
            "$date": 1323734400000
          },
          "grade": "A",
          "score": 13
        }
      ],
      "name": "Burger King",
      "restaurant_id": "40370916"
    },{
      "address": {
        "building": "9006",
        "coord": [
          -73.9195106,
          40.6527642
        ],
        "street": "Church Avenue",
        "zipcode": "11236"
      },
      "borough": "Brooklyn",
      "cuisine": "Hamburgers",
      "grades": [
        {
          "date": {
            "$date": 1417478400000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1403654400000
          },
          "grade": "A",
          "score": 5
        },
        {
          "date": {
            "$date": 1368489600000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1354233600000
          },
          "grade": "A",
          "score": 13
        }
      ],
      "name": "Burger King",
      "restaurant_id": "40370917"
    },{
      "address": {
        "building": "314",
        "coord": [
          -73.951172,
          40.7773139
        ],
        "street": "East   86 Street",
        "zipcode": "10028"
      },
      "borough": "Manhattan",
      "cuisine": "Japanese",
      "grades": [
        {
          "date": {
            "$date": 1410220800000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1376524800000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1360022400000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1334793600000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1317168000000
          },
          "grade": "A",
          "score": 5
        }
      ],
      "name": "Tokubei 86",
      "restaurant_id": "40370935"
    },{
      "address": {
        "building": "1327",
        "coord": [
          -73.9491317,
          40.7445755
        ],
        "street": "Jackson Avenue",
        "zipcode": "11101"
      },
      "borough": "Queens",
      "cuisine": "Italian",
      "grades": [
        {
          "date": {
            "$date": 1412294400000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1380240000000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1347580800000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1334707200000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1322179200000
          },
          "grade": "A",
          "score": 13
        }
      ],
      "name": "Manducatis",
      "restaurant_id": "40370939"
    },{
      "address": {
        "building": "10027",
        "coord": [
          -73.85223080000002,
          40.7109144
        ],
        "street": "Metropolitan Ave",
        "zipcode": "11375"
      },
      "borough": "Queens",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1420156800000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1398038400000
          },
          "grade": "B",
          "score": 26
        },
        {
          "date": {
            "$date": 1380585600000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1365465600000
          },
          "grade": "B",
          "score": 17
        },
        {
          "date": {
            "$date": 1353369600000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1337040000000
          },
          "grade": "A",
          "score": 12
        }
      ],
      "name": "Sizzler",
      "restaurant_id": "40370946"
    },{
      "address": {
        "building": "1701",
        "coord": [
          -73.96123879999999,
          40.635193
        ],
        "street": "Foster Avenue",
        "zipcode": "11230"
      },
      "borough": "Brooklyn",
      "cuisine": "Italian",
      "grades": [
        {
          "date": {
            "$date": 1399939200000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1368057600000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1350432000000
          },
          "grade": "B",
          "score": 27
        },
        {
          "date": {
            "$date": 1346112000000
          },
          "grade": "P",
          "score": 4
        },
        {
          "date": {
            "$date": 1331078400000
          },
          "grade": "A",
          "score": 12
        }
      ],
      "name": "Mama Lucia",
      "restaurant_id": "40370994"
    },{
      "address": {
        "building": "312",
        "coord": [
          -73.9832993,
          40.76754440000001
        ],
        "street": "West   58 Street",
        "zipcode": "10019"
      },
      "borough": "Manhattan",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1398902400000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1366156800000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1332288000000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1321315200000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1308096000000
          },
          "grade": "A",
          "score": 11
        }
      ],
      "name": "Coliseum Bar Restaurant",
      "restaurant_id": "40371281"
    },{
      "address": {
        "building": "180",
        "coord": [
          -73.98621539999999,
          40.7350907
        ],
        "street": "3 Avenue",
        "zipcode": "10003"
      },
      "borough": "Manhattan",
      "cuisine": "Pizza",
      "grades": [
        {
          "date": {
            "$date": 1408147200000
          },
          "grade": "A",
          "score": 5
        },
        {
          "date": {
            "$date": 1374451200000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1344816000000
          },
          "grade": "A",
          "score": 8
        },
        {
          "date": {
            "$date": 1328745600000
          },
          "grade": "A",
          "score": 5
        }
      ],
      "name": "Mariella Pizza",
      "restaurant_id": "40371313"
    },{
      "address": {
        "building": "19901",
        "coord": [
          -73.79014660000001,
          40.769692
        ],
        "street": "32 Avenue",
        "zipcode": "11358"
      },
      "borough": "Queens",
      "cuisine": "Pizza",
      "grades": [
        {
          "date": {
            "$date": 1392249600000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1356652800000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1323129600000
          },
          "grade": "A",
          "score": 12
        }
      ],
      "name": "Vinny'S Pizza",
      "restaurant_id": "40371323"
    },{
      "address": {
        "building": "1223",
        "coord": [
          -73.9633849,
          40.625169
        ],
        "street": "Avenue J",
        "zipcode": "11230"
      },
      "borough": "Brooklyn",
      "cuisine": "Jewish/Kosher",
      "grades": [
        {
          "date": {
            "$date": 1399507200000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1366761600000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1345075200000
          },
          "grade": "B",
          "score": 27
        },
        {
          "date": {
            "$date": 1329955200000
          },
          "grade": "C",
          "score": 44
        },
        {
          "date": {
            "$date": 1322006400000
          },
          "grade": "P",
          "score": 40
        },
        {
          "date": {
            "$date": 1306800000000
          },
          "grade": "A",
          "score": 10
        }
      ],
      "name": "Kosher Delight",
      "restaurant_id": "40371419"
    },{
      "address": {
        "building": "407",
        "coord": [
          -73.99283419999999,
          40.75885830000001
        ],
        "street": "West   42 Street",
        "zipcode": "10036"
      },
      "borough": "Manhattan",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1421280000000
          },
          "grade": "A",
          "score": 0
        },
        {
          "date": {
            "$date": 1403049600000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1366848000000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1352937600000
          },
          "grade": "A",
          "score": 12
        }
      ],
      "name": "West Bank Cafe",
      "restaurant_id": "40371454"
    },{
      "address": {
        "building": "99",
        "coord": [
          -73.972235,
          40.758066
        ],
        "street": "East   52 Street",
        "zipcode": "10022"
      },
      "borough": "Manhattan",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1419811200000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1402963200000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1376265600000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1356480000000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1331510400000
          },
          "grade": "A",
          "score": 11
        }
      ],
      "name": "The Four Seasons",
      "restaurant_id": "40371588"
    },{
      "address": {
        "building": "255-09",
        "coord": [
          -73.734425,
          40.7723579
        ],
        "street": "Northern Boulevard",
        "zipcode": "11362"
      },
      "borough": "Queens",
      "cuisine": "French",
      "grades": [
        {
          "date": {
            "$date": 1391731200000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1372377600000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1339200000000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1308182400000
          },
          "grade": "A",
          "score": 10
        }
      ],
      "name": "La Baraka Restaurant",
      "restaurant_id": "40371614"
    },{
      "address": {
        "building": "4801",
        "coord": [
          -73.984858,
          40.631394
        ],
        "street": "16 Avenue",
        "zipcode": "11204"
      },
      "borough": "Brooklyn",
      "cuisine": "Jewish/Kosher",
      "grades": [
        {
          "date": {
            "$date": 1410998400000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1381276800000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1369267200000
          },
          "grade": "A",
          "score": 5
        },
        {
          "date": {
            "$date": 1333584000000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1321488000000
          },
          "grade": "A",
          "score": 12
        }
      ],
      "name": "Dairy Luncheonette",
      "restaurant_id": "40371684"
    },{
      "address": {
        "building": "500",
        "coord": [
          -73.9828058,
          40.7150766
        ],
        "street": "Grand Street",
        "zipcode": "10002"
      },
      "borough": "Manhattan",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1395273600000
          },
          "grade": "A",
          "score": 2
        },
        {
          "date": {
            "$date": 1363132800000
          },
          "grade": "A",
          "score": 8
        },
        {
          "date": {
            "$date": 1350604800000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1337904000000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1307491200000
          },
          "grade": "A",
          "score": 8
        }
      ],
      "name": "Zafi'S Luncheonette",
      "restaurant_id": "40371718"
    },{
      "address": {
        "building": "159",
        "coord": [
          -73.9788552,
          40.6109657
        ],
        "street": "Avenue O",
        "zipcode": "11204"
      },
      "borough": "Brooklyn",
      "cuisine": "Italian",
      "grades": [
        {
          "date": {
            "$date": 1399420800000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1381968000000
          },
          "grade": "B",
          "score": 18
        },
        {
          "date": {
            "$date": 1360713600000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1338422400000
          },
          "grade": "A",
          "score": 12
        }
      ],
      "name": "La Palina Restaurant",
      "restaurant_id": "40371727"
    },{
      "address": {
        "building": "2055",
        "coord": [
          -74.1321,
          40.61266000000001
        ],
        "street": "Victory Boulevard",
        "zipcode": "10314"
      },
      "borough": "Staten Island",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1415232000000
          },
          "grade": "B",
          "score": 25
        },
        {
          "date": {
            "$date": 1399334400000
          },
          "grade": "B",
          "score": 20
        },
        {
          "date": {
            "$date": 1359158400000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1324080000000
          },
          "grade": "A",
          "score": 7
        }
      ],
      "name": "Schaffer'S Tavern",
      "restaurant_id": "40371771"
    },{
      "address": {
        "building": "114",
        "coord": [
          -74.00529,
          40.73302899999999
        ],
        "street": "Christopher Street",
        "zipcode": "10014"
      },
      "borough": "Manhattan",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1403222400000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1371686400000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1338336000000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1308787200000
          },
          "grade": "A",
          "score": 9
        }
      ],
      "name": "Ty'S",
      "restaurant_id": "40371805"
    },{
      "address": {
        "building": "4619",
        "coord": [
          -73.7363139,
          40.767005
        ],
        "street": "Marathon Parkway",
        "zipcode": "11362"
      },
      "borough": "Queens",
      "cuisine": "Italian",
      "grades": [
        {
          "date": {
            "$date": 1396915200000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1360195200000
          },
          "grade": "A",
          "score": 10
        }
      ],
      "name": "Aunt Bella'S Rest Of Little Neck",
      "restaurant_id": "40371807"
    },{
      "address": {
        "building": "3501",
        "coord": [
          -73.9321411,
          40.6094715
        ],
        "street": "Avenue S",
        "zipcode": "11234"
      },
      "borough": "Brooklyn",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1395273600000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1362700800000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1344470400000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1327968000000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1316649600000
          },
          "grade": "B",
          "score": 21
        },
        {
          "date": {
            "$date": 1302739200000
          },
          "grade": "B",
          "score": 22
        }
      ],
      "name": "Mariner Inn",
      "restaurant_id": "40371906"
    },{
      "address": {
        "building": "19652",
        "coord": [
          -73.78421000000002,
          40.7577566
        ],
        "street": "Northern Blvd",
        "zipcode": "11358"
      },
      "borough": "Queens",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1403568000000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1381968000000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1366761600000
          },
          "grade": "C",
          "score": 42
        },
        {
          "date": {
            "$date": 1350518400000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1337817600000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1325203200000
          },
          "grade": "A",
          "score": 12
        }
      ],
      "name": "North Shore Diner",
      "restaurant_id": "40371988"
    },{
      "address": {
        "building": "275",
        "coord": [
          -74.1235473,
          40.6215341
        ],
        "street": "Martling Ave",
        "zipcode": "10314"
      },
      "borough": "Staten Island",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1397001600000
          },
          "grade": "A",
          "score": 5
        },
        {
          "date": {
            "$date": 1358294400000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1325808000000
          },
          "grade": "A",
          "score": 11
        }
      ],
      "name": "Exclusive Catering",
      "restaurant_id": "40372016"
    },{
      "address": {
        "building": "7717",
        "coord": [
          -74.028273,
          40.62951959999999
        ],
        "street": "Third Avenue",
        "zipcode": "11209"
      },
      "borough": "Brooklyn",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1416355200000
          },
          "grade": "A",
          "score": 8
        },
        {
          "date": {
            "$date": 1383091200000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1367539200000
          },
          "grade": "B",
          "score": 14
        },
        {
          "date": {
            "$date": 1350345600000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1336003200000
          },
          "grade": "A",
          "score": 8
        }
      ],
      "name": "Green House Cafe",
      "restaurant_id": "40372112"
    },{
      "address": {
        "building": "3660",
        "coord": [
          -73.82339809999999,
          40.8276846
        ],
        "street": "East Tremont Avenue",
        "zipcode": "10465"
      },
      "borough": "Bronx",
      "cuisine": "Hamburgers",
      "grades": [
        {
          "date": {
            "$date": 1398643200000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1367280000000
          },
          "grade": "A",
          "score": 2
        },
        {
          "date": {
            "$date": 1335398400000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1318291200000
          },
          "grade": "B",
          "score": 20
        },
        {
          "date": {
            "$date": 1306368000000
          },
          "grade": "A",
          "score": 10
        }
      ],
      "name": "Mcdonald'S",
      "restaurant_id": "40372196"
    },{
      "address": {
        "building": "203",
        "coord": [
          -73.958372,
          40.7420277
        ],
        "street": "Borden Avenue",
        "zipcode": "11101"
      },
      "borough": "Queens",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1417478400000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1403049600000
          },
          "grade": "A",
          "score": 8
        },
        {
          "date": {
            "$date": 1368576000000
          },
          "grade": "A",
          "score": 8
        },
        {
          "date": {
            "$date": 1337040000000
          },
          "grade": "A",
          "score": 7
        }
      ],
      "name": "Water Front Crab House",
      "restaurant_id": "40372258"
    },{
      "address": {
        "building": "605",
        "coord": [
          -74.0060152,
          40.7372653
        ],
        "street": "Hudson Street",
        "zipcode": "10014"
      },
      "borough": "Manhattan",
      "cuisine": "French",
      "grades": [
        {
          "date": {
            "$date": 1404086400000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1369008000000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1355184000000
          },
          "grade": "A",
          "score": 9
        }
      ],
      "name": "La Ripaille Restaurant",
      "restaurant_id": "40372262"
    },{
      "address": {
        "building": "154",
        "coord": [
          -74.1408495,
          40.5441055
        ],
        "street": "Mansion Ave",
        "zipcode": "10308"
      },
      "borough": "Staten Island",
      "cuisine": "Italian",
      "grades": [
        {
          "date": {
            "$date": 1403222400000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1372291200000
          },
          "grade": "A",
          "score": 0
        },
        {
          "date": {
            "$date": 1330992000000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1314144000000
          },
          "grade": "C",
          "score": 39
        }
      ],
      "name": "Marina Cafe",
      "restaurant_id": "40372357"
    },{
      "address": {
        "building": "1133",
        "coord": [
          -73.958885,
          40.7745559
        ],
        "street": "Lexington Avenue",
        "zipcode": "10075"
      },
      "borough": "Manhattan",
      "cuisine": "Italian",
      "grades": [
        {
          "date": {
            "$date": 1407715200000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1386633600000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1370822400000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1339113600000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1327449600000
          },
          "grade": "A",
          "score": 8
        },
        {
          "date": {
            "$date": 1315872000000
          },
          "grade": "A",
          "score": 12
        }
      ],
      "name": "Don Filippo Restaurant",
      "restaurant_id": "40372417"
    },{
      "address": {
        "building": "92-83",
        "coord": [
          -73.8664386,
          40.7319364
        ],
        "street": "Queens Boulevard",
        "zipcode": "11374"
      },
      "borough": "Queens",
      "cuisine": "Hamburgers",
      "grades": [
        {
          "date": {
            "$date": 1390953600000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1376352000000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1362700800000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1329350400000
          },
          "grade": "A",
          "score": 6
        },
        {
          "date": {
            "$date": 1317945600000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1300838400000
          },
          "grade": "A",
          "score": 6
        }
      ],
      "name": "Burger King",
      "restaurant_id": "40372422"
    },{
      "address": {
        "building": "3941",
        "coord": [
          -73.9245566,
          40.7441786
        ],
        "street": "Queens Boulevard",
        "zipcode": "11104"
      },
      "borough": "Queens",
      "cuisine": "Italian",
      "grades": [
        {
          "date": {
            "$date": 1399334400000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1383004800000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1366243200000
          },
          "grade": "B",
          "score": 27
        },
        {
          "date": {
            "$date": 1330992000000
          },
          "grade": "A",
          "score": 13
        }
      ],
      "name": "Dazies Restaurant",
      "restaurant_id": "40372426"
    },{
      "address": {
        "building": "7316",
        "coord": [
          -73.89310739999999,
          40.7545576
        ],
        "street": "Northern Boulevard",
        "zipcode": "11372"
      },
      "borough": "Queens",
      "cuisine": "Italian",
      "grades": [
        {
          "date": {
            "$date": 1389830400000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1355356800000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1337558400000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1305676800000
          },
          "grade": "A",
          "score": 12
        }
      ],
      "name": "Triestes Restaurant",
      "restaurant_id": "40372433"
    },{
      "address": {
        "building": "3220",
        "coord": [
          -73.924072,
          40.76108900000001
        ],
        "street": "Broadway",
        "zipcode": "11106"
      },
      "borough": "Queens",
      "cuisine": "Greek",
      "grades": [
        {
          "date": {
            "$date": 1414540800000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1404950400000
          },
          "grade": "C",
          "score": 32
        },
        {
          "date": {
            "$date": 1390867200000
          },
          "grade": "A",
          "score": 5
        },
        {
          "date": {
            "$date": 1374624000000
          },
          "grade": "A",
          "score": 6
        },
        {
          "date": {
            "$date": 1358380800000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1325289600000
          },
          "grade": "A",
          "score": 7
        }
      ],
      "name": "Omonia Cafe",
      "restaurant_id": "40372445"
    },{
      "address": {
        "building": "65",
        "coord": [
          -73.9782725,
          40.7624022
        ],
        "street": "West   54 Street",
        "zipcode": "10019"
      },
      "borough": "Manhattan",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1408665600000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1395964800000
          },
          "grade": "C",
          "score": 131
        },
        {
          "date": {
            "$date": 1380067200000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1365379200000
          },
          "grade": "B",
          "score": 25
        },
        {
          "date": {
            "$date": 1350259200000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1318982400000
          },
          "grade": "A",
          "score": 13
        }
      ],
      "name": "Murals On 54/Randolphs'S",
      "restaurant_id": "40372466"
    },{
      "address": {
        "building": "2414",
        "coord": [
          -73.931262,
          40.598023
        ],
        "street": "Gerritsen Avenue",
        "zipcode": "11229"
      },
      "borough": "Brooklyn",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1394236800000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1354320000000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1318291200000
          },
          "grade": "A",
          "score": 2
        },
        {
          "date": {
            "$date": 1304899200000
          },
          "grade": "A",
          "score": 10
        }
      ],
      "name": "Veterans Of Foreign Wars Post #107 Canteen",
      "restaurant_id": "40372485"
    },{
      "address": {
        "building": "1",
        "coord": [
          -73.990556,
          40.749722
        ],
        "street": "Penn Plaza",
        "zipcode": "10001"
      },
      "borough": "Manhattan",
      "cuisine": "Pizza",
      "grades": [
        {
          "date": {
            "$date": 1412640000000
          },
          "grade": "A",
          "score": 4
        },
        {
          "date": {
            "$date": 1381363200000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1349049600000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1319155200000
          },
          "grade": "A",
          "score": 9
        }
      ],
      "name": "Caruso Pizza #2",
      "restaurant_id": "40372523"
    },{
      "address": {
        "building": "267",
        "coord": [
          -73.933605,
          40.669476
        ],
        "street": "Schenectady Avenue",
        "zipcode": "11213"
      },
      "borough": "Brooklyn",
      "cuisine": "Bakery",
      "grades": [
        {
          "date": {
            "$date": 1395100800000
          },
          "grade": "A",
          "score": 2
        },
        {
          "date": {
            "$date": 1380758400000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1348617600000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1318464000000
          },
          "grade": "A",
          "score": 7
        }
      ],
      "name": "Tropical House Baking Co.",
      "restaurant_id": "40372596"
    },{
      "address": {
        "building": "154-05",
        "coord": [
          -73.780574,
          40.6679415
        ],
        "street": "Rockaway Boulevard",
        "zipcode": "11434"
      },
      "borough": "Queens",
      "cuisine": "Hamburgers",
      "grades": [
        {
          "date": {
            "$date": 1410134400000
          },
          "grade": "A",
          "score": 3
        },
        {
          "date": {
            "$date": 1388620800000
          },
          "grade": "A",
          "score": 5
        },
        {
          "date": {
            "$date": 1367366400000
          },
          "grade": "B",
          "score": 19
        },
        {
          "date": {
            "$date": 1352764800000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1321315200000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1316649600000
          },
          "grade": "A",
          "score": 8
        }
      ],
      "name": "Burger King",
      "restaurant_id": "40372618"
    },{
      "address": {
        "building": "1599",
        "coord": [
          -73.87575,
          40.8294396
        ],
        "street": "Westchester Avenue",
        "zipcode": "10472"
      },
      "borough": "Bronx",
      "cuisine": "Pizza",
      "grades": [
        {
          "date": {
            "$date": 1421107200000
          },
          "grade": "Z",
          "score": 17
        },
        {
          "date": {
            "$date": 1407110400000
          },
          "grade": "A",
          "score": 2
        },
        {
          "date": {
            "$date": 1405900800000
          },
          "grade": "P",
          "score": 12
        },
        {
          "date": {
            "$date": 1392854400000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1376524800000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1363132800000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1326758400000
          },
          "grade": "A",
          "score": 10
        }
      ],
      "name": "Yankee Jz Pizza",
      "restaurant_id": "40372631"
    },{
      "address": {
        "building": "917",
        "coord": [
          -73.8128627,
          40.7931101
        ],
        "street": "Clintonville Street",
        "zipcode": "11357"
      },
      "borough": "Queens",
      "cuisine": "Italian",
      "grades": [
        {
          "date": {
            "$date": 1403654400000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1369094400000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1350432000000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1331337600000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1316822400000
          },
          "grade": "A",
          "score": 11
        }
      ],
      "name": "Clinton Restaurant",
      "restaurant_id": "40372694"
    },{
      "address": {
        "building": "314",
        "coord": [
          -73.958529,
          40.766908
        ],
        "street": "East   70 Street",
        "zipcode": "10021"
      },
      "borough": "Manhattan",
      "cuisine": "Japanese",
      "grades": [
        {
          "date": {
            "$date": 1411430400000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1394668800000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1372723200000
          },
          "grade": "B",
          "score": 19
        },
        {
          "date": {
            "$date": 1369267200000
          },
          "grade": "P",
          "score": 5
        },
        {
          "date": {
            "$date": 1333497600000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1321401600000
          },
          "grade": "A",
          "score": 9
        }
      ],
      "name": "Shabu-Shabu 70 Restaurant",
      "restaurant_id": "40372787"
    },{
      "address": {
        "building": "1434",
        "coord": [
          -74.0986428,
          40.5942955
        ],
        "street": "Richmond Road",
        "zipcode": "10304"
      },
      "borough": "Staten Island",
      "cuisine": "Chinese",
      "grades": [
        {
          "date": {
            "$date": 1418256000000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1386115200000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1350000000000
          },
          "grade": "A",
          "score": 11
        }
      ],
      "name": "Chen'S Chinese",
      "restaurant_id": "40372831"
    },{
      "address": {
        "building": "322",
        "coord": [
          -73.993539,
          40.7474898
        ],
        "street": "7 Avenue",
        "zipcode": "10001"
      },
      "borough": "Manhattan",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1421020800000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1391385600000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1379289600000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1365724800000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1350950400000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1336089600000
          },
          "grade": "B",
          "score": 26
        }
      ],
      "name": "The Greek Corner",
      "restaurant_id": "40372944"
    },{
      "address": {
        "building": "370",
        "coord": [
          -73.97328379999999,
          40.7588047
        ],
        "street": "Park Avenue",
        "zipcode": "10022"
      },
      "borough": "Manhattan",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1413244800000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1378857600000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1342051200000
          },
          "grade": "A",
          "score": 4
        }
      ],
      "name": "Racquet & Tennis Club",
      "restaurant_id": "40372971"
    },{
      "address": {
        "building": "114",
        "coord": [
          -74.031688,
          40.6374532
        ],
        "street": "Bayridge Avenue",
        "zipcode": "11220"
      },
      "borough": "Brooklyn",
      "cuisine": "Mexican",
      "grades": [
        {
          "date": {
            "$date": 1393459200000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1361404800000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1338940800000
          },
          "grade": "B",
          "score": 19
        },
        {
          "date": {
            "$date": 1306281600000
          },
          "grade": "A",
          "score": 11
        }
      ],
      "name": "Casa Pepe",
      "restaurant_id": "40372999"
    },{
      "address": {
        "building": "101",
        "coord": [
          -73.97831029999999,
          40.7632329
        ],
        "street": "West 55 Street",
        "zipcode": "10019"
      },
      "borough": "Manhattan",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1413849600000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1392336000000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1357257600000
          },
          "grade": "A",
          "score": 8
        },
        {
          "date": {
            "$date": 1326844800000
          },
          "grade": "A",
          "score": 7
        }
      ],
      "name": "Astro Restaurant",
      "restaurant_id": "40373113"
    },{
      "address": {
        "building": "3281",
        "coord": [
          -74.1690735,
          40.5589805
        ],
        "street": "Richmond Avenue",
        "zipcode": "10312"
      },
      "borough": "Staten Island",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1386028800000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1364947200000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1349222400000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1334620800000
          },
          "grade": "B",
          "score": 27
        }
      ],
      "name": "Golden Dove Diner",
      "restaurant_id": "40373118"
    },{
      "address": {
        "building": "79",
        "coord": [
          -74.0018619,
          40.7288849
        ],
        "street": "Mac Dougal Street",
        "zipcode": "10012"
      },
      "borough": "Manhattan",
      "cuisine": "Italian",
      "grades": [
        {
          "date": {
            "$date": 1418342400000
          },
          "grade": "Z",
          "score": 17
        },
        {
          "date": {
            "$date": 1404777600000
          },
          "grade": "C",
          "score": 38
        },
        {
          "date": {
            "$date": 1364169600000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1330473600000
          },
          "grade": "A",
          "score": 13
        }
      ],
      "name": "Caffe Dante",
      "restaurant_id": "40373149"
    },{
      "address": {
        "building": "226",
        "coord": [
          -73.9777137,
          40.6433389
        ],
        "street": "Church Avenue",
        "zipcode": "11218"
      },
      "borough": "Brooklyn",
      "cuisine": "Pizza/Italian",
      "grades": [
        {
          "date": {
            "$date": 1410393600000
          },
          "grade": "A",
          "score": 2
        },
        {
          "date": {
            "$date": 1393804800000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1354147200000
          },
          "grade": "A",
          "score": 6
        },
        {
          "date": {
            "$date": 1322524800000
          },
          "grade": "A",
          "score": 8
        }
      ],
      "name": "Korner Pizzeria",
      "restaurant_id": "40373160"
    },{
      "address": {
        "building": "44",
        "coord": [
          -73.992182,
          40.699702
        ],
        "street": "Henry Street",
        "zipcode": "11201"
      },
      "borough": "Brooklyn",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1407196800000
          },
          "grade": "A",
          "score": 8
        },
        {
          "date": {
            "$date": 1389830400000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1369353600000
          },
          "grade": "A",
          "score": 4
        },
        {
          "date": {
            "$date": 1347408000000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1324598400000
          },
          "grade": "A",
          "score": 12
        }
      ],
      "name": "Henry'S End",
      "restaurant_id": "40373272"
    },{
      "address": {
        "building": "210",
        "coord": [
          -74.0062401,
          40.7397546
        ],
        "street": "6 Avenue",
        "zipcode": "10014"
      },
      "borough": "Manhattan",
      "cuisine": "Japanese",
      "grades": [
        {
          "date": {
            "$date": 1409616000000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1376870400000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1362528000000
          },
          "grade": "C",
          "score": 45
        },
        {
          "date": {
            "$date": 1326067200000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1316390400000
          },
          "grade": "C",
          "score": 3
        }
      ],
      "name": "Souen Restaurant",
      "restaurant_id": "40373318"
    },{
      "address": {
        "building": "107",
        "coord": [
          -73.98053949999999,
          40.7469315
        ],
        "street": "East   34 Street",
        "zipcode": "10016"
      },
      "borough": "Manhattan",
      "cuisine": "Italian",
      "grades": [
        {
          "date": {
            "$date": 1409356800000
          },
          "grade": "A",
          "score": 2
        },
        {
          "date": {
            "$date": 1395014400000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1377648000000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1360195200000
          },
          "grade": "A",
          "score": 8
        },
        {
          "date": {
            "$date": 1320624000000
          },
          "grade": "A",
          "score": 7
        }
      ],
      "name": "Villa Berulia",
      "restaurant_id": "40373462"
    },{
      "address": {
        "building": "236",
        "coord": [
          -73.9840766,
          40.7628868
        ],
        "street": "West   52 Street",
        "zipcode": "10019"
      },
      "borough": "Manhattan",
      "cuisine": "Latin (Cuban, Dominican, Puerto Rican, South & Central American)",
      "grades": [
        {
          "date": {
            "$date": 1418688000000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1399852800000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1364774400000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1326844800000
          },
          "grade": "A",
          "score": 12
        }
      ],
      "name": "Victor'S Cafe",
      "restaurant_id": "40373500"
    },{
      "address": {
        "building": "7522",
        "coord": [
          -74.0282415,
          40.6309663
        ],
        "street": "3 Avenue",
        "zipcode": "11209"
      },
      "borough": "Brooklyn",
      "cuisine": "Pizza/Italian",
      "grades": [
        {
          "date": {
            "$date": 1418688000000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1399852800000
          },
          "grade": "B",
          "score": 17
        },
        {
          "date": {
            "$date": 1365984000000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1334534400000
          },
          "grade": "A",
          "score": 7
        }
      ],
      "name": "Petes Pizzeria & Restaurant",
      "restaurant_id": "40373597"
    },{
      "address": {
        "building": "72",
        "coord": [
          -73.98646339999999,
          40.7507174
        ],
        "street": "West   36 Street",
        "zipcode": "10018"
      },
      "borough": "Manhattan",
      "cuisine": "Steak",
      "grades": [
        {
          "date": {
            "$date": 1421280000000
          },
          "grade": "Z",
          "score": 19
        },
        {
          "date": {
            "$date": 1406764800000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1370822400000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1340236800000
          },
          "grade": "A",
          "score": 13
        }
      ],
      "name": "Keens Steakhouse",
      "restaurant_id": "40373656"
    },{
      "address": {
        "building": "515",
        "coord": [
          -73.97752600000001,
          40.745973
        ],
        "street": "3 Avenue",
        "zipcode": "10016"
      },
      "borough": "Manhattan",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1401235200000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1368403200000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1332201600000
          },
          "grade": "A",
          "score": 11
        }
      ],
      "name": "Bar 515",
      "restaurant_id": "40373669"
    },{
      "address": {
        "building": "3707",
        "coord": [
          -73.8924962,
          40.7485672
        ],
        "street": "73 Street",
        "zipcode": "11372"
      },
      "borough": "Queens",
      "cuisine": "Irish",
      "grades": [
        {
          "date": {
            "$date": 1407715200000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1377129600000
          },
          "grade": "A",
          "score": 8
        },
        {
          "date": {
            "$date": 1362528000000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1329177600000
          },
          "grade": "A",
          "score": 4
        }
      ],
      "name": "Ready Penny Inn",
      "restaurant_id": "40373794"
    },{
      "address": {
        "building": "86",
        "coord": [
          -73.99914799999999,
          40.729735
        ],
        "street": "West    3 Street",
        "zipcode": "10012"
      },
      "borough": "Manhattan",
      "cuisine": "Italian",
      "grades": [
        {
          "date": {
            "$date": 1404172800000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1381104000000
          },
          "grade": "B",
          "score": 14
        },
        {
          "date": {
            "$date": 1362009600000
          },
          "grade": "A",
          "score": 3
        },
        {
          "date": {
            "$date": 1342483200000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1330473600000
          },
          "grade": "A",
          "score": 11
        }
      ],
      "name": "Il Mulino",
      "restaurant_id": "40373888"
    },{
      "address": {
        "building": "243",
        "coord": [
          -73.9651212,
          40.7603438
        ],
        "street": "East   58 Street",
        "zipcode": "10022"
      },
      "borough": "Manhattan",
      "cuisine": "Italian",
      "grades": [
        {
          "date": {
            "$date": 1393286400000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1358380800000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1325548800000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1315785600000
          },
          "grade": "A",
          "score": 12
        }
      ],
      "name": "Felidia Restaurant",
      "restaurant_id": "40373889"
    },{
      "address": {
        "building": "5804",
        "coord": [
          -73.9216671,
          40.6447189
        ],
        "street": "Clarendon Road",
        "zipcode": "11203"
      },
      "borough": "Brooklyn",
      "cuisine": "Hamburgers",
      "grades": [
        {
          "date": {
            "$date": 1421193600000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1407801600000
          },
          "grade": "B",
          "score": 17
        },
        {
          "date": {
            "$date": 1376265600000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1364428800000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1331596800000
          },
          "grade": "A",
          "score": 10
        }
      ],
      "name": "Mcdonald'S",
      "restaurant_id": "40373909"
    },{
      "address": {
        "building": "206",
        "coord": [
          -73.9993545,
          40.7286288
        ],
        "street": "Thompson Street",
        "zipcode": "10012"
      },
      "borough": "Manhattan",
      "cuisine": "Armenian",
      "grades": [
        {
          "date": {
            "$date": 1418256000000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1398729600000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1380585600000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1347408000000
          },
          "grade": "A",
          "score": 6
        },
        {
          "date": {
            "$date": 1329350400000
          },
          "grade": "A",
          "score": 10
        }
      ],
      "name": "The Malt House",
      "restaurant_id": "40373912"
    },{
      "address": {
        "building": "37",
        "coord": [
          -73.9812519,
          40.7728753
        ],
        "street": "West 65 Street",
        "zipcode": "10023"
      },
      "borough": "Manhattan",
      "cuisine": "Chinese",
      "grades": [
        {
          "date": {
            "$date": 1411516800000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1380758400000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1365724800000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1349308800000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1335139200000
          },
          "grade": "A",
          "score": 13
        }
      ],
      "name": "Shun Lee",
      "restaurant_id": "40373937"
    },{
      "address": {
        "building": "5655",
        "coord": [
          -73.90401159999999,
          40.8803571
        ],
        "street": "Broadway",
        "zipcode": "10463"
      },
      "borough": "Bronx",
      "cuisine": "Pancakes/Waffles",
      "grades": [
        {
          "date": {
            "$date": 1407456000000
          },
          "grade": "A",
          "score": 3
        },
        {
          "date": {
            "$date": 1394496000000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1378252800000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1359331200000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1343692800000
          },
          "grade": "A",
          "score": 8
        },
        {
          "date": {
            "$date": 1331596800000
          },
          "grade": "B",
          "score": 21
        }
      ],
      "name": "Ihop",
      "restaurant_id": "40373938"
    },{
      "address": {
        "building": "9011",
        "coord": [
          -74.0318242,
          40.62062239999999
        ],
        "street": "Third Avenue",
        "zipcode": "11209"
      },
      "borough": "Brooklyn",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1406160000000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1389744000000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1374710400000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1343174400000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1332115200000
          },
          "grade": "A",
          "score": 8
        },
        {
          "date": {
            "$date": 1318291200000
          },
          "grade": "A",
          "score": 11
        }
      ],
      "name": "Bridgeview Diner",
      "restaurant_id": "40373948"
    },{
      "address": {
        "building": "69-47",
        "coord": [
          -73.894071,
          40.726984
        ],
        "street": "Grand Avenue",
        "zipcode": "11378"
      },
      "borough": "Queens",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1408492800000
          },
          "grade": "B",
          "score": 18
        },
        {
          "date": {
            "$date": 1389139200000
          },
          "grade": "B",
          "score": 17
        },
        {
          "date": {
            "$date": 1373673600000
          },
          "grade": "B",
          "score": 14
        },
        {
          "date": {
            "$date": 1357516800000
          },
          "grade": "A",
          "score": 2
        },
        {
          "date": {
            "$date": 1341446400000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1328659200000
          },
          "grade": "A",
          "score": 12
        }
      ],
      "name": "Burke'S Pub",
      "restaurant_id": "40373984"
    },{
      "address": {
        "building": "8303",
        "coord": [
          -73.884337,
          40.733269
        ],
        "street": "Grand Avenue",
        "zipcode": "11373"
      },
      "borough": "Queens",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1408579200000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1373328000000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1359936000000
          },
          "grade": "A",
          "score": 4
        },
        {
          "date": {
            "$date": 1327017600000
          },
          "grade": "A",
          "score": 11
        }
      ],
      "name": "Hill Tap Tavern",
      "restaurant_id": "40374015"
    },{
      "address": {
        "building": "244",
        "coord": [
          -73.9865289,
          40.7606981
        ],
        "street": "West   48 Street",
        "zipcode": "10036"
      },
      "borough": "Manhattan",
      "cuisine": "Thai",
      "grades": [
        {
          "date": {
            "$date": 1407888000000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1389657600000
          },
          "grade": "B",
          "score": 24
        },
        {
          "date": {
            "$date": 1374710400000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1357776000000
          },
          "grade": "C",
          "score": 4
        },
        {
          "date": {
            "$date": 1339977600000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1329436800000
          },
          "grade": "P",
          "score": 6
        }
      ],
      "name": "Pongsri Thai Restaurant",
      "restaurant_id": "40374088"
    },{
      "address": {
        "building": "1005",
        "coord": [
          -73.967288,
          40.757018
        ],
        "street": "2 Avenue",
        "zipcode": "10022"
      },
      "borough": "Manhattan",
      "cuisine": "Pizza/Italian",
      "grades": [
        {
          "date": {
            "$date": 1410307200000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1378857600000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1364169600000
          },
          "grade": "B",
          "score": 23
        },
        {
          "date": {
            "$date": 1345075200000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1331596800000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1317859200000
          },
          "grade": "A",
          "score": 13
        }
      ],
      "name": "Primavera Pizza & Pasta",
      "restaurant_id": "40374131"
    },{
      "address": {
        "building": "1",
        "coord": [
          -73.78309349999999,
          40.8374725
        ],
        "street": "City Island Ave",
        "zipcode": "10464"
      },
      "borough": "Bronx",
      "cuisine": "Seafood",
      "grades": [
        {
          "date": {
            "$date": 1403654400000
          },
          "grade": "B",
          "score": 15
        },
        {
          "date": {
            "$date": 1386720000000
          },
          "grade": "A",
          "score": 6
        },
        {
          "date": {
            "$date": 1350345600000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1318809600000
          },
          "grade": "A",
          "score": 13
        }
      ],
      "name": "Tony'S Pier Restaurant",
      "restaurant_id": "40374136"
    },{
      "address": {
        "building": "1621",
        "coord": [
          -73.95285799999999,
          40.77684199999999
        ],
        "street": "Second Avenue",
        "zipcode": "10028"
      },
      "borough": "Manhattan",
      "cuisine": "Italian",
      "grades": [
        {
          "date": {
            "$date": 1416614400000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1396396800000
          },
          "grade": "A",
          "score": 0
        },
        {
          "date": {
            "$date": 1372982400000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1358208000000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1334275200000
          },
          "grade": "A",
          "score": 10
        }
      ],
      "name": "Elio'S",
      "restaurant_id": "40374192"
    },{
      "address": {
        "building": "2942",
        "coord": [
          -73.832183,
          40.84710099999999
        ],
        "street": "Westchester Avenue",
        "zipcode": "10461"
      },
      "borough": "Bronx",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1391990400000
          },
          "grade": "A",
          "score": 8
        },
        {
          "date": {
            "$date": 1379462400000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1366156800000
          },
          "grade": "B",
          "score": 25
        },
        {
          "date": {
            "$date": 1350259200000
          },
          "grade": "B",
          "score": 25
        },
        {
          "date": {
            "$date": 1318809600000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1310601600000
          },
          "grade": "B",
          "score": 18
        }
      ],
      "name": "Quality Cafe & Restaurant",
      "restaurant_id": "40374259"
    },{
      "address": {
        "building": "372",
        "coord": [
          -73.995662,
          40.748717
        ],
        "street": "8 Avenue",
        "zipcode": "10001"
      },
      "borough": "Manhattan",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1405555200000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1389312000000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1369008000000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1329955200000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1313452800000
          },
          "grade": "B",
          "score": 23
        }
      ],
      "name": "Kasteli Ii",
      "restaurant_id": "40374266"
    },{
      "address": {
        "building": "2716",
        "coord": [
          -73.9254891,
          40.59284479999999
        ],
        "street": "Gerritsen Avenue",
        "zipcode": "11229"
      },
      "borough": "Brooklyn",
      "cuisine": "Pizza",
      "grades": [
        {
          "date": {
            "$date": 1416960000000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1397001600000
          },
          "grade": "B",
          "score": 24
        },
        {
          "date": {
            "$date": 1379548800000
          },
          "grade": "B",
          "score": 27
        },
        {
          "date": {
            "$date": 1356566400000
          },
          "grade": "B",
          "score": 23
        },
        {
          "date": {
            "$date": 1337558400000
          },
          "grade": "C",
          "score": 68
        }
      ],
      "name": "Victoria Pizza",
      "restaurant_id": "40374268"
    },{
      "address": {
        "building": "402",
        "coord": [
          -73.9949622,
          40.7496446
        ],
        "street": "8 Avenue",
        "zipcode": "10001"
      },
      "borough": "Manhattan",
      "cuisine": "Irish",
      "grades": [
        {
          "date": {
            "$date": 1419897600000
          },
          "grade": "Z",
          "score": 17
        },
        {
          "date": {
            "$date": 1405296000000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1390521600000
          },
          "grade": "A",
          "score": 3
        },
        {
          "date": {
            "$date": 1376956800000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1359936000000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1325721600000
          },
          "grade": "A",
          "score": 13
        }
      ],
      "name": "Molly Wee Pub",
      "restaurant_id": "40374277"
    },{
      "address": {
        "building": "947",
        "coord": [
          -73.96864699999999,
          40.755183
        ],
        "street": "2 Avenue",
        "zipcode": "10022"
      },
      "borough": "Manhattan",
      "cuisine": "French",
      "grades": [
        {
          "date": {
            "$date": 1415750400000
          },
          "grade": "B",
          "score": 19
        },
        {
          "date": {
            "$date": 1400716800000
          },
          "grade": "B",
          "score": 19
        },
        {
          "date": {
            "$date": 1384732800000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1365033600000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1328054400000
          },
          "grade": "A",
          "score": 9
        }
      ],
      "name": "La Mediterranee Restaurant",
      "restaurant_id": "40374325"
    },{
      "address": {
        "building": "5945",
        "coord": [
          -73.91535139999999,
          40.6087346
        ],
        "street": "Strickland Avenue",
        "zipcode": "11234"
      },
      "borough": "Brooklyn",
      "cuisine": "Italian",
      "grades": [
        {
          "date": {
            "$date": 1402444800000
          },
          "grade": "A",
          "score": 3
        },
        {
          "date": {
            "$date": 1370476800000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1338940800000
          },
          "grade": "A",
          "score": 13
        }
      ],
      "name": "El Caribe",
      "restaurant_id": "40374395"
    },{
      "address": {
        "building": "113",
        "coord": [
          -74.0019729,
          40.7260047
        ],
        "street": "Thompson Street",
        "zipcode": "10012"
      },
      "borough": "Manhattan",
      "cuisine": "Japanese",
      "grades": [
        {
          "date": {
            "$date": 1404172800000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1386720000000
          },
          "grade": "B",
          "score": 16
        },
        {
          "date": {
            "$date": 1366070400000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1344988800000
          },
          "grade": "B",
          "score": 22
        },
        {
          "date": {
            "$date": 1330387200000
          },
          "grade": "A",
          "score": 5
        }
      ],
      "name": "Omen Japanese Cuisine",
      "restaurant_id": "40374415"
    },{
      "address": {
        "building": "72-69",
        "coord": [
          -73.8122829,
          40.727543
        ],
        "street": "Kissena Boulevard",
        "zipcode": "11367"
      },
      "borough": "Queens",
      "cuisine": "Hamburgers",
      "grades": [
        {
          "date": {
            "$date": 1410307200000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1378425600000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1347408000000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1316736000000
          },
          "grade": "A",
          "score": 7
        }
      ],
      "name": "Mcdonald'S",
      "restaurant_id": "40374460"
    },{
      "address": {
        "building": "82",
        "coord": [
          -73.9917897,
          40.6913932
        ],
        "street": "Court Street",
        "zipcode": "11201"
      },
      "borough": "Brooklyn",
      "cuisine": "Hamburgers",
      "grades": [
        {
          "date": {
            "$date": 1420156800000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1407974400000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1393891200000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1380499200000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1367366400000
          },
          "grade": "A",
          "score": 4
        },
        {
          "date": {
            "$date": 1353974400000
          },
          "grade": "A",
          "score": 2
        }
      ],
      "name": "Mcdonald'S",
      "restaurant_id": "40374507"
    },{
      "address": {
        "building": "222",
        "coord": [
          -73.96607999999999,
          40.7602774
        ],
        "street": "East   58 Street",
        "zipcode": "10022"
      },
      "borough": "Manhattan",
      "cuisine": "Italian",
      "grades": [
        {
          "date": {
            "$date": 1400544000000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1386806400000
          },
          "grade": "A",
          "score": 2
        },
        {
          "date": {
            "$date": 1372291200000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1340582400000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1327622400000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1316649600000
          },
          "grade": "A",
          "score": 9
        }
      ],
      "name": "Bar Vetro",
      "restaurant_id": "40374559"
    },{
      "address": {
        "building": "800",
        "coord": [
          -73.982506,
          40.762621
        ],
        "street": "7 Avenue",
        "zipcode": "10019"
      },
      "borough": "Manhattan",
      "cuisine": "Irish",
      "grades": [
        {
          "date": {
            "$date": 1411689600000
          },
          "grade": "A",
          "score": 3
        },
        {
          "date": {
            "$date": 1379894400000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1349222400000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1319068800000
          },
          "grade": "A",
          "score": 7
        }
      ],
      "name": "Rosie O'Grady Restaurant",
      "restaurant_id": "40374711"
    },{
      "address": {
        "building": "9402",
        "coord": [
          -73.807086,
          40.6988
        ],
        "street": "Sutphin Boulevard",
        "zipcode": "11435"
      },
      "borough": "Queens",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1392249600000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1378425600000
          },
          "grade": "B",
          "score": 17
        },
        {
          "date": {
            "$date": 1360108800000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1324425600000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1310601600000
          },
          "grade": "A",
          "score": 12
        }
      ],
      "name": "Europa Go-Go Dancing",
      "restaurant_id": "40374814"
    },{
      "address": {
        "building": "127",
        "coord": [
          -73.9982079,
          40.7180815
        ],
        "street": "Mulberry Street",
        "zipcode": "10013"
      },
      "borough": "Manhattan",
      "cuisine": "Italian",
      "grades": [
        {
          "date": {
            "$date": 1413936000000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1398297600000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1380585600000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1362355200000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1337040000000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1324944000000
          },
          "grade": "A",
          "score": 12
        }
      ],
      "name": "Casa Bella",
      "restaurant_id": "40374834"
    },{
      "address": {
        "building": "59",
        "coord": [
          -74.0095812,
          40.71463749999999
        ],
        "street": "Warren Street",
        "zipcode": "10007"
      },
      "borough": "Manhattan",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1399852800000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1386288000000
          },
          "grade": "A",
          "score": 2
        },
        {
          "date": {
            "$date": 1354492800000
          },
          "grade": "A",
          "score": 8
        },
        {
          "date": {
            "$date": 1343001600000
          },
          "grade": "A",
          "score": 2
        },
        {
          "date": {
            "$date": 1330646400000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1312934400000
          },
          "grade": "B",
          "score": 20
        }
      ],
      "name": "Raccoon Lodge",
      "restaurant_id": "40374968"
    },{
      "address": {
        "building": "365",
        "coord": [
          -73.9883256,
          40.76344890000001
        ],
        "street": "West 50 Street",
        "zipcode": "10019"
      },
      "borough": "Manhattan",
      "cuisine": "French",
      "grades": [
        {
          "date": {
            "$date": 1399075200000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1357603200000
          },
          "grade": "A",
          "score": 5
        },
        {
          "date": {
            "$date": 1333929600000
          },
          "grade": "B",
          "score": 15
        },
        {
          "date": {
            "$date": 1318896000000
          },
          "grade": "B",
          "score": 21
        }
      ],
      "name": "Chez Napolean",
      "restaurant_id": "40374974"
    },{
      "address": {
        "building": "94",
        "coord": [
          -73.9550857,
          40.72063869999999
        ],
        "street": "Bedford Avenue",
        "zipcode": "11249"
      },
      "borough": "Brooklyn",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1392422400000
          },
          "grade": "A",
          "score": 4
        },
        {
          "date": {
            "$date": 1358380800000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1326758400000
          },
          "grade": "A",
          "score": 4
        },
        {
          "date": {
            "$date": 1303430400000
          },
          "grade": "B",
          "score": 19
        }
      ],
      "name": "Turkey'S Nest Tavern",
      "restaurant_id": "40375108"
    },{
      "address": {
        "building": "1200",
        "coord": [
          -73.8507489,
          40.832069
        ],
        "street": "Castle Hill Avenue",
        "zipcode": "10462"
      },
      "borough": "Bronx",
      "cuisine": "Chinese/Cuban",
      "grades": [
        {
          "date": {
            "$date": 1414540800000
          },
          "grade": "B",
          "score": 15
        },
        {
          "date": {
            "$date": 1396483200000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1329350400000
          },
          "grade": "A",
          "score": 5
        }
      ],
      "name": "Sabrosura Restaurant",
      "restaurant_id": "40375136"
    },{
      "address": {
        "building": "82-07",
        "coord": [
          -73.8520417,
          40.6666793
        ],
        "street": "153 Avenue",
        "zipcode": "11414"
      },
      "borough": "Queens",
      "cuisine": "Pizza",
      "grades": [
        {
          "date": {
            "$date": 1395878400000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1363824000000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1348099200000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1315267200000
          },
          "grade": "A",
          "score": 12
        }
      ],
      "name": "La Villa De Pizza & Restaurant",
      "restaurant_id": "40375286"
    },{
      "address": {
        "building": "96-15",
        "coord": [
          -73.8426307,
          40.6808917
        ],
        "street": "Liberty Avenue",
        "zipcode": "11417"
      },
      "borough": "Queens",
      "cuisine": "Pizza/Italian",
      "grades": [
        {
          "date": {
            "$date": 1406073600000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1373846400000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1343606400000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1329955200000
          },
          "grade": "A",
          "score": 9
        }
      ],
      "name": "Ozone Pizzeria",
      "restaurant_id": "40375369"
    },{
      "address": {
        "building": "46-11",
        "coord": [
          -73.913591,
          40.756706
        ],
        "street": "Broadway",
        "zipcode": "11103"
      },
      "borough": "Queens",
      "cuisine": "Italian",
      "grades": [
        {
          "date": {
            "$date": 1414540800000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1396915200000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1380153600000
          },
          "grade": "A",
          "score": 5
        },
        {
          "date": {
            "$date": 1365465600000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1350518400000
          },
          "grade": "A",
          "score": 2
        },
        {
          "date": {
            "$date": 1336521600000
          },
          "grade": "B",
          "score": 16
        }
      ],
      "name": "Ponticello Restaurant",
      "restaurant_id": "40375371"
    },{
      "address": {
        "building": "807",
        "coord": [
          -73.96643449999999,
          40.7641697
        ],
        "street": "Lexington Avenue",
        "zipcode": "10065"
      },
      "borough": "Manhattan",
      "cuisine": "Indian",
      "grades": [
        {
          "date": {
            "$date": 1414454400000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1404864000000
          },
          "grade": "B",
          "score": 24
        },
        {
          "date": {
            "$date": 1389916800000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1369699200000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1332806400000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1320192000000
          },
          "grade": "C",
          "score": 28
        }
      ],
      "name": "Agra Restaurant",
      "restaurant_id": "40375376"
    },{
      "address": {
        "building": "825",
        "coord": [
          -73.9813814,
          40.76306150000001
        ],
        "street": "7 Avenue",
        "zipcode": "10019"
      },
      "borough": "Manhattan",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1412380800000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1378166400000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1346112000000
          },
          "grade": "A",
          "score": 12
        }
      ],
      "name": "Lindy'S",
      "restaurant_id": "40375521"
    },{
      "address": {
        "building": "1617",
        "coord": [
          -73.947847,
          40.775478
        ],
        "street": "York Avenue",
        "zipcode": "10028"
      },
      "borough": "Manhattan",
      "cuisine": "Italian",
      "grades": [
        {
          "date": {
            "$date": 1396396800000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1363132800000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1347408000000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1329782400000
          },
          "grade": "B",
          "score": 21
        },
        {
          "date": {
            "$date": 1311120000000
          },
          "grade": "B",
          "score": 21
        }
      ],
      "name": "Arturo'S",
      "restaurant_id": "40375616"
    },{
      "address": {
        "building": "2021",
        "coord": [
          -73.9500845,
          40.8064061
        ],
        "street": "7 Avenue",
        "zipcode": "10027"
      },
      "borough": "Manhattan",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1420502400000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1401321600000
          },
          "grade": "B",
          "score": 22
        },
        {
          "date": {
            "$date": 1383782400000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1348099200000
          },
          "grade": "A",
          "score": 10
        }
      ],
      "name": "Paris Blues",
      "restaurant_id": "40375634"
    },{
      "address": {
        "building": "73",
        "coord": [
          -73.9977952,
          40.7353195
        ],
        "street": "West   11 Street",
        "zipcode": "10011"
      },
      "borough": "Manhattan",
      "cuisine": "Italian",
      "grades": [
        {
          "date": {
            "$date": 1399248000000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1367366400000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1348099200000
          },
          "grade": "B",
          "score": 26
        },
        {
          "date": {
            "$date": 1314144000000
          },
          "grade": "A",
          "score": 8
        }
      ],
      "name": "Gene'S Resturant",
      "restaurant_id": "40375699"
    },{
      "address": {
        "building": "3073",
        "coord": [
          -73.9367236,
          40.5842786
        ],
        "street": "Emmons Avenue",
        "zipcode": "11235"
      },
      "borough": "Brooklyn",
      "cuisine": "Italian",
      "grades": [
        {
          "date": {
            "$date": 1412208000000
          },
          "grade": "B",
          "score": 18
        },
        {
          "date": {
            "$date": 1394409600000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1392249600000
          },
          "grade": "P",
          "score": 2
        },
        {
          "date": {
            "$date": 1377734400000
          },
          "grade": "A",
          "score": 8
        },
        {
          "date": {
            "$date": 1361404800000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1340668800000
          },
          "grade": "B",
          "score": 16
        },
        {
          "date": {
            "$date": 1324339200000
          },
          "grade": "A",
          "score": 8
        }
      ],
      "name": "Maria Ristorante",
      "restaurant_id": "40375819"
    },{
      "address": {
        "building": "739",
        "coord": [
          -73.993406,
          40.730003
        ],
        "street": "Broadway",
        "zipcode": "10003"
      },
      "borough": "Manhattan",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1404777600000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1391385600000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1357776000000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1326931200000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1317859200000
          },
          "grade": "A",
          "score": 11
        }
      ],
      "name": "Cozy Soup & Burger",
      "restaurant_id": "40375839"
    },{
      "address": {
        "building": "21532",
        "coord": [
          -73.74878939999999,
          40.7271425
        ],
        "street": "Hillside Avenue",
        "zipcode": "11427"
      },
      "borough": "Queens",
      "cuisine": "Pizza",
      "grades": [
        {
          "date": {
            "$date": 1420848000000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1386806400000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1352764800000
          },
          "grade": "A",
          "score": 11
        }
      ],
      "name": "Neron'S Pizza",
      "restaurant_id": "40375899"
    },{
      "address": {
        "building": "7720",
        "coord": [
          -73.9977997,
          40.6118897
        ],
        "street": "18 Avenue",
        "zipcode": "11214"
      },
      "borough": "Brooklyn",
      "cuisine": "Italian",
      "grades": [
        {
          "date": {
            "$date": 1390953600000
          },
          "grade": "A",
          "score": 6
        },
        {
          "date": {
            "$date": 1355875200000
          },
          "grade": "A",
          "score": 5
        },
        {
          "date": {
            "$date": 1335312000000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1310342400000
          },
          "grade": "A",
          "score": 9
        }
      ],
      "name": "Villa Fiorita",
      "restaurant_id": "40375929"
    },{
      "address": {
        "building": "1619",
        "coord": [
          -74.0065917,
          40.609992
        ],
        "street": "86 Street",
        "zipcode": "11214"
      },
      "borough": "Brooklyn",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1418774400000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1403481600000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1386806400000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1371427200000
          },
          "grade": "A",
          "score": 5
        },
        {
          "date": {
            "$date": 1340668800000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1327536000000
          },
          "grade": "A",
          "score": 13
        }
      ],
      "name": "Vegas Diner",
      "restaurant_id": "40375972"
    },{
      "address": {
        "building": "10102",
        "coord": [
          -73.840374,
          40.683319
        ],
        "street": "103 Avenue",
        "zipcode": "11417"
      },
      "borough": "Queens",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1395878400000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1363910400000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1332720000000
          },
          "grade": "A",
          "score": 8
        },
        {
          "date": {
            "$date": 1301356800000
          },
          "grade": "A",
          "score": 11
        }
      ],
      "name": "Moms Luncheonette",
      "restaurant_id": "40376029"
    },{
      "address": {
        "building": "309",
        "coord": [
          -73.9801846,
          40.7801316
        ],
        "street": "Amsterdam Avenue",
        "zipcode": "10023"
      },
      "borough": "Manhattan",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1415836800000
          },
          "grade": "A",
          "score": 5
        },
        {
          "date": {
            "$date": 1403740800000
          },
          "grade": "C",
          "score": 33
        },
        {
          "date": {
            "$date": 1380585600000
          },
          "grade": "A",
          "score": 5
        },
        {
          "date": {
            "$date": 1364860800000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1346889600000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1333065600000
          },
          "grade": "A",
          "score": 12
        }
      ],
      "name": "Candle Bar",
      "restaurant_id": "40376031"
    },{
      "address": {
        "building": "155",
        "coord": [
          -73.9558969,
          40.778154
        ],
        "street": "East   84 Street",
        "zipcode": "10028"
      },
      "borough": "Manhattan",
      "cuisine": "Jewish/Kosher",
      "grades": [
        {
          "date": {
            "$date": 1414540800000
          },
          "grade": "A",
          "score": 6
        },
        {
          "date": {
            "$date": 1398211200000
          },
          "grade": "B",
          "score": 20
        },
        {
          "date": {
            "$date": 1369180800000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1335916800000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1321920000000
          },
          "grade": "A",
          "score": 13
        }
      ],
      "name": "Tevere 84",
      "restaurant_id": "40376039"
    },{
      "address": {
        "building": "1",
        "coord": [
          -73.990556,
          40.749722
        ],
        "street": "Penn Plaza",
        "zipcode": "10001"
      },
      "borough": "Manhattan",
      "cuisine": "Ice Cream, Gelato, Yogurt, Ices",
      "grades": [
        {
          "date": {
            "$date": 1392940800000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1357516800000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1326758400000
          },
          "grade": "A",
          "score": 9
        }
      ],
      "name": "Haagen-Dazs",
      "restaurant_id": "40376067"
    },{
      "address": {
        "building": "20002",
        "coord": [
          -73.782866,
          40.757529
        ],
        "street": "Northern Boulevard",
        "zipcode": "11361"
      },
      "borough": "Queens",
      "cuisine": "Greek",
      "grades": [
        {
          "date": {
            "$date": 1415577600000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1400544000000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1366588800000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1345593600000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1333152000000
          },
          "grade": "B",
          "score": 15
        }
      ],
      "name": "Fontana Famous Pizza & Gyro",
      "restaurant_id": "40376077"
    },{
      "address": {
        "building": "464",
        "coord": [
          -92.73084399999999,
          41.7461462
        ],
        "street": "6 Avenue",
        "zipcode": "10011"
      },
      "borough": "Manhattan",
      "cuisine": "Chinese",
      "grades": [
        {
          "date": {
            "$date": 1387152000000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1366156800000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1350345600000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1334016000000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1321401600000
          },
          "grade": "A",
          "score": 10
        }
      ],
      "name": "Charlie'S Mom Chinese Restaurant",
      "restaurant_id": "40376121"
    },{
      "address": {
        "building": "1494",
        "coord": [
          -73.955387,
          40.772368
        ],
        "street": "Second Avenue",
        "zipcode": "10075"
      },
      "borough": "Manhattan",
      "cuisine": "Italian",
      "grades": [
        {
          "date": {
            "$date": 1390435200000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1373500800000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1358812800000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1336435200000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1320192000000
          },
          "grade": "A",
          "score": 11
        }
      ],
      "name": "Lusardi'S Restaurant",
      "restaurant_id": "40376142"
    },{
      "address": {
        "building": "10932",
        "coord": [
          -73.8397963,
          40.7191179
        ],
        "street": "Ascan Avenue",
        "zipcode": "11375"
      },
      "borough": "Queens",
      "cuisine": "Italian",
      "grades": [
        {
          "date": {
            "$date": 1394582400000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1375228800000
          },
          "grade": "B",
          "score": 14
        },
        {
          "date": {
            "$date": 1359936000000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1341792000000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1323302400000
          },
          "grade": "B",
          "score": 22
        },
        {
          "date": {
            "$date": 1309132800000
          },
          "grade": "B",
          "score": 21
        }
      ],
      "name": "Portofino",
      "restaurant_id": "40376204"
    },{
      "address": {
        "building": "500",
        "coord": [
          -74.1069208,
          40.6302784
        ],
        "street": "Forest Avenue",
        "zipcode": "10310"
      },
      "borough": "Staten Island",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1402963200000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1372982400000
          },
          "grade": "A",
          "score": 5
        },
        {
          "date": {
            "$date": 1357603200000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1319587200000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1309564800000
          },
          "grade": "A",
          "score": 13
        }
      ],
      "name": "King'S Arms Restaurant",
      "restaurant_id": "40376290"
    },{
      "address": {
        "building": "131",
        "coord": [
          -74.00064259999999,
          40.7309096
        ],
        "street": "West 3 Street",
        "zipcode": "10012"
      },
      "borough": "Manhattan",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1399420800000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1382054400000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1347321600000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1316476800000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1305158400000
          },
          "grade": "C",
          "score": 28
        }
      ],
      "name": "Blue Note Jazz",
      "restaurant_id": "40376352"
    },{
      "address": {
        "building": "500",
        "coord": [
          -73.9724015,
          40.7403386
        ],
        "street": "East   30 Street",
        "zipcode": "10016"
      },
      "borough": "Manhattan",
      "cuisine": "Seafood",
      "grades": [
        {
          "date": {
            "$date": 1421107200000
          },
          "grade": "Z",
          "score": 25
        },
        {
          "date": {
            "$date": 1398297600000
          },
          "grade": "A",
          "score": 5
        },
        {
          "date": {
            "$date": 1377561600000
          },
          "grade": "A",
          "score": 11
        }
      ],
      "name": "The Water Club",
      "restaurant_id": "40376493"
    },{
      "address": {
        "building": "345",
        "coord": [
          -73.9957111,
          40.6821943
        ],
        "street": "Court Street",
        "zipcode": "11231"
      },
      "borough": "Brooklyn",
      "cuisine": "Italian",
      "grades": [
        {
          "date": {
            "$date": 1412035200000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1396224000000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1356739200000
          },
          "grade": "A",
          "score": 8
        },
        {
          "date": {
            "$date": 1332979200000
          },
          "grade": "B",
          "score": 21
        }
      ],
      "name": "Marco Polo Ristorante",
      "restaurant_id": "40376495"
    },{
      "address": {
        "building": "80",
        "coord": [
          -74.0023353,
          40.7333573
        ],
        "street": "Grove Street",
        "zipcode": "10014"
      },
      "borough": "Manhattan",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1418774400000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1404864000000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1386720000000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1367798400000
          },
          "grade": "A",
          "score": 5
        },
        {
          "date": {
            "$date": 1347926400000
          },
          "grade": "A",
          "score": 13
        }
      ],
      "name": "Manhattan Monster",
      "restaurant_id": "40376496"
    },{
      "address": {
        "building": "",
        "coord": [
          -73.97911239999999,
          40.7834791
        ],
        "street": "W 79 Street",
        "zipcode": "10024"
      },
      "borough": "Manhattan",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1399507200000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1378944000000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1360627200000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1319500800000
          },
          "grade": "A",
          "score": 3
        },
        {
          "date": {
            "$date": 1306368000000
          },
          "grade": "A",
          "score": 13
        }
      ],
      "name": "American Museum Of Natural History Food Court",
      "restaurant_id": "40376515"
    },{
      "address": {
        "building": "0",
        "coord": [
          -84.1899005,
          39.7642657
        ],
        "street": "Memorial Ice Skating",
        "zipcode": "10314"
      },
      "borough": "Staten Island",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1392336000000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1329523200000
          },
          "grade": "A",
          "score": 8
        }
      ],
      "name": "War Memorial Ice Skating Rink",
      "restaurant_id": "40376583"
    },{
      "address": {
        "building": "156",
        "coord": [
          -73.9946329,
          40.690043
        ],
        "street": "Atlantic Avenue",
        "zipcode": "11201"
      },
      "borough": "Brooklyn",
      "cuisine": "Mediterranean",
      "grades": [
        {
          "date": {
            "$date": 1420675200000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1406764800000
          },
          "grade": "A",
          "score": 8
        },
        {
          "date": {
            "$date": 1377129600000
          },
          "grade": "B",
          "score": 15
        },
        {
          "date": {
            "$date": 1349049600000
          },
          "grade": "A",
          "score": 8
        },
        {
          "date": {
            "$date": 1329091200000
          },
          "grade": "B",
          "score": 27
        }
      ],
      "name": "Tripoli Restaurant",
      "restaurant_id": "40376635"
    },{
      "address": {
        "building": "72",
        "coord": [
          -74.001763,
          40.7282465
        ],
        "street": "Mac Dougal Street",
        "zipcode": "10012"
      },
      "borough": "Manhattan",
      "cuisine": "French",
      "grades": [
        {
          "date": {
            "$date": 1399420800000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1378252800000
          },
          "grade": "B",
          "score": 20
        },
        {
          "date": {
            "$date": 1363046400000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1340150400000
          },
          "grade": "B",
          "score": 26
        },
        {
          "date": {
            "$date": 1325548800000
          },
          "grade": "A",
          "score": 2
        }
      ],
      "name": "Chez Jaqueline",
      "restaurant_id": "40376687"
    },{
      "address": {
        "building": "1215",
        "coord": [
          -73.9612178,
          40.7684788
        ],
        "street": "Third Avenue",
        "zipcode": "10021"
      },
      "borough": "Manhattan",
      "cuisine": "Delicatessen",
      "grades": [
        {
          "date": {
            "$date": 1414627200000
          },
          "grade": "Z",
          "score": 19
        },
        {
          "date": {
            "$date": 1381795200000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1350345600000
          },
          "grade": "A",
          "score": 12
        }
      ],
      "name": "Pj Bernstein Deli & Restaurant",
      "restaurant_id": "40376718"
    },{
      "address": {
        "building": "906",
        "coord": [
          -73.980002,
          40.7659216
        ],
        "street": "7 Avenue",
        "zipcode": "10019"
      },
      "borough": "Manhattan",
      "cuisine": "Irish",
      "grades": [
        {
          "date": {
            "$date": 1410912000000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1395273600000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1375747200000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1343001600000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1323820800000
          },
          "grade": "A",
          "score": 7
        }
      ],
      "name": "Pj Carney'S",
      "restaurant_id": "40376735"
    },{
      "address": {
        "building": "401",
        "coord": [
          -74.3731727,
          40.4404759
        ],
        "street": "44 Drive Foot E.River",
        "zipcode": "11101"
      },
      "borough": "Queens",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1417478400000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1403049600000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1384992000000
          },
          "grade": "C",
          "score": 32
        },
        {
          "date": {
            "$date": 1367452800000
          },
          "grade": "B",
          "score": 27
        },
        {
          "date": {
            "$date": 1345680000000
          },
          "grade": "B",
          "score": 26
        },
        {
          "date": {
            "$date": 1326326400000
          },
          "grade": "B",
          "score": 22
        }
      ],
      "name": "Water'S Edge Club",
      "restaurant_id": "40376933"
    },{
      "address": {
        "building": "172",
        "coord": [
          -74.0001023,
          40.7276736
        ],
        "street": "Thompson Street",
        "zipcode": "10012"
      },
      "borough": "Manhattan",
      "cuisine": "Japanese",
      "grades": [
        {
          "date": {
            "$date": 1413331200000
          },
          "grade": "B",
          "score": 24
        },
        {
          "date": {
            "$date": 1393286400000
          },
          "grade": "B",
          "score": 27
        },
        {
          "date": {
            "$date": 1373587200000
          },
          "grade": "C",
          "score": 10
        },
        {
          "date": {
            "$date": 1351036800000
          },
          "grade": "B",
          "score": 26
        },
        {
          "date": {
            "$date": 1333497600000
          },
          "grade": "B",
          "score": 23
        }
      ],
      "name": "Tomoe Sushi",
      "restaurant_id": "40376944"
    },{
      "address": {
        "building": "1207",
        "coord": [
          -73.9592644,
          40.8088612
        ],
        "street": "Amsterdam Avenue",
        "zipcode": "10027"
      },
      "borough": "Manhattan",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1409702400000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1397779200000
          },
          "grade": "C",
          "score": 0
        },
        {
          "date": {
            "$date": 1379980800000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1362960000000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1324339200000
          },
          "grade": "A",
          "score": 12
        }
      ],
      "name": "Amsterdam Restaurant & Tapas Lounge",
      "restaurant_id": "40377111"
    },{
      "address": {
        "building": "703",
        "coord": [
          -73.79064389999999,
          40.8575687
        ],
        "street": "Minnieford Ave",
        "zipcode": "10464"
      },
      "borough": "Bronx",
      "cuisine": "Seafood",
      "grades": [
        {
          "date": {
            "$date": 1410220800000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1396310400000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1377475200000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1362355200000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1339632000000
          },
          "grade": "A",
          "score": 10
        }
      ],
      "name": "Jp'S Waterside Restaurant",
      "restaurant_id": "40377124"
    },{
      "address": {
        "building": "203",
        "coord": [
          -73.83732549999999,
          40.57984829999999
        ],
        "street": "Beach  116 Street",
        "zipcode": "11694"
      },
      "borough": "Queens",
      "cuisine": "Irish",
      "grades": [
        {
          "date": {
            "$date": 1394841600000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1363219200000
          },
          "grade": "A",
          "score": 5
        },
        {
          "date": {
            "$date": 1324252800000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1315958400000
          },
          "grade": "A",
          "score": 10
        }
      ],
      "name": "Rogers Irish Tavern",
      "restaurant_id": "40377164"
    },{
      "address": {
        "building": "749",
        "coord": [
          -73.8657838,
          40.8544744
        ],
        "street": "Lydig Avenue",
        "zipcode": "10462"
      },
      "borough": "Bronx",
      "cuisine": "Pizza/Italian",
      "grades": [
        {
          "date": {
            "$date": 1420761600000
          },
          "grade": "Z",
          "score": 17
        },
        {
          "date": {
            "$date": 1403654400000
          },
          "grade": "B",
          "score": 20
        },
        {
          "date": {
            "$date": 1386547200000
          },
          "grade": "B",
          "score": 22
        },
        {
          "date": {
            "$date": 1371254400000
          },
          "grade": "B",
          "score": 24
        },
        {
          "date": {
            "$date": 1338336000000
          },
          "grade": "A",
          "score": 7
        }
      ],
      "name": "John & Joe Pizzeria & Restaurant",
      "restaurant_id": "40377243"
    },{
      "address": {
        "building": "645",
        "coord": [
          -74.2078085,
          40.5427718
        ],
        "street": "Rossville Avenue",
        "zipcode": "10309"
      },
      "borough": "Staten Island",
      "cuisine": "Pizza/Italian",
      "grades": [
        {
          "date": {
            "$date": 1419811200000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1403568000000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1363219200000
          },
          "grade": "A",
          "score": 2
        },
        {
          "date": {
            "$date": 1336953600000
          },
          "grade": "A",
          "score": 7
        }
      ],
      "name": "Sunset Pizzeria",
      "restaurant_id": "40377262"
    },{
      "address": {
        "building": "7002",
        "coord": [
          -73.8803351,
          40.7017284
        ],
        "street": "Copper Avenue",
        "zipcode": "11385"
      },
      "borough": "Queens",
      "cuisine": "Hamburgers",
      "grades": [
        {
          "date": {
            "$date": 1418774400000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1404864000000
          },
          "grade": "A",
          "score": 2
        },
        {
          "date": {
            "$date": 1390867200000
          },
          "grade": "A",
          "score": 3
        },
        {
          "date": {
            "$date": 1375833600000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1360713600000
          },
          "grade": "A",
          "score": 4
        },
        {
          "date": {
            "$date": 1343001600000
          },
          "grade": "A",
          "score": 5
        },
        {
          "date": {
            "$date": 1328659200000
          },
          "grade": "A",
          "score": 8
        }
      ],
      "name": "Mcdonald'S",
      "restaurant_id": "40377294"
    },{
      "address": {
        "building": "267",
        "coord": [
          -73.9811382,
          40.7788729
        ],
        "street": "Amsterdam Avenue",
        "zipcode": "10023"
      },
      "borough": "Manhattan",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1409788800000
          },
          "grade": "A",
          "score": 3
        },
        {
          "date": {
            "$date": 1396310400000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1363219200000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1348444800000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1335398400000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1322784000000
          },
          "grade": "B",
          "score": 16
        }
      ],
      "name": "Utopia Restaurant",
      "restaurant_id": "40377299"
    },{
      "address": {
        "building": "521",
        "coord": [
          -73.9774801,
          40.7461444
        ],
        "street": "Third Avenue",
        "zipcode": "10016"
      },
      "borough": "Manhattan",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1419897600000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1387756800000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1354752000000
          },
          "grade": "A",
          "score": 5
        }
      ],
      "name": "Jackson Hole",
      "restaurant_id": "40377325"
    },{
      "address": {
        "building": "16402",
        "coord": [
          -73.8047246,
          40.7328495
        ],
        "street": "69 Avenue",
        "zipcode": "11365"
      },
      "borough": "Queens",
      "cuisine": "Italian",
      "grades": [
        {
          "date": {
            "$date": 1408579200000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1391558400000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1371081600000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1334707200000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1323216000000
          },
          "grade": "A",
          "score": 5
        }
      ],
      "name": "Napoli Pizza",
      "restaurant_id": "40377385"
    },{
      "address": {
        "building": "7303",
        "coord": [
          -74.027017,
          40.632575
        ],
        "street": "3 Avenue",
        "zipcode": "11209"
      },
      "borough": "Brooklyn",
      "cuisine": "Pizza/Italian",
      "grades": [
        {
          "date": {
            "$date": 1389052800000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1358553600000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1338854400000
          },
          "grade": "C",
          "score": 30
        }
      ],
      "name": "Vesuvio Restaurant & Pizza",
      "restaurant_id": "40377506"
    },{
      "address": {
        "building": "228-13",
        "coord": [
          -73.7416329,
          40.6767449
        ],
        "street": "Merrick Boulevard",
        "zipcode": "11413"
      },
      "borough": "Queens",
      "cuisine": "Caribbean",
      "grades": [
        {
          "date": {
            "$date": 1385337600000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1354665600000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1342656000000
          },
          "grade": "A",
          "score": 5
        },
        {
          "date": {
            "$date": 1327968000000
          },
          "grade": "B",
          "score": 26
        },
        {
          "date": {
            "$date": 1313107200000
          },
          "grade": "B",
          "score": 16
        },
        {
          "date": {
            "$date": 1300233600000
          },
          "grade": "B",
          "score": 24
        }
      ],
      "name": "Western Bakery",
      "restaurant_id": "40377560"
    },{
      "address": {
        "building": "823",
        "coord": [
          -73.971606,
          40.751148
        ],
        "street": "Second Avenue",
        "zipcode": "10017"
      },
      "borough": "Manhattan",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1417651200000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1403827200000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1390262400000
          },
          "grade": "C",
          "score": 2
        },
        {
          "date": {
            "$date": 1370476800000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1356652800000
          },
          "grade": "B",
          "score": 17
        },
        {
          "date": {
            "$date": 1342569600000
          },
          "grade": "B",
          "score": 25
        },
        {
          "date": {
            "$date": 1328745600000
          },
          "grade": "A",
          "score": 13
        }
      ],
      "name": "Johns Cafe & Resturant",
      "restaurant_id": "40377630"
    },{
      "address": {
        "building": "162",
        "coord": [
          -74.0014102,
          40.7318195
        ],
        "street": "West    4 Street",
        "zipcode": "10014"
      },
      "borough": "Manhattan",
      "cuisine": "Greek",
      "grades": [
        {
          "date": {
            "$date": 1418860800000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1406592000000
          },
          "grade": "A",
          "score": 5
        },
        {
          "date": {
            "$date": 1389916800000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1373500800000
          },
          "grade": "A",
          "score": 5
        },
        {
          "date": {
            "$date": 1358467200000
          },
          "grade": "A",
          "score": 2
        }
      ],
      "name": "Karavas Place",
      "restaurant_id": "40377698"
    },{
      "address": {
        "building": "200",
        "coord": [
          -73.983169,
          40.7774031
        ],
        "street": "West   70 Street",
        "zipcode": "10023"
      },
      "borough": "Manhattan",
      "cuisine": "French",
      "grades": [
        {
          "date": {
            "$date": 1398384000000
          },
          "grade": "A",
          "score": 5
        },
        {
          "date": {
            "$date": 1363651200000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1349308800000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1321228800000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1310601600000
          },
          "grade": "A",
          "score": 2
        }
      ],
      "name": "Cafe Luxembourg",
      "restaurant_id": "40377789"
    },{
      "address": {
        "building": "552",
        "coord": [
          -73.9070012,
          40.7090773
        ],
        "street": "Grandview Avenue",
        "zipcode": "11385"
      },
      "borough": "Queens",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1410220800000
          },
          "grade": "B",
          "score": 14
        },
        {
          "date": {
            "$date": 1389052800000
          },
          "grade": "B",
          "score": 18
        },
        {
          "date": {
            "$date": 1354147200000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1323820800000
          },
          "grade": "A",
          "score": 10
        }
      ],
      "name": "Windjammers Bar",
      "restaurant_id": "40377908"
    },{
      "address": {
        "building": "153-67",
        "coord": [
          -73.8153553,
          40.7394901
        ],
        "street": "Horace Harding Expressway",
        "zipcode": "11367"
      },
      "borough": "Queens",
      "cuisine": "Donuts",
      "grades": [
        {
          "date": {
            "$date": 1393200000000
          },
          "grade": "A",
          "score": 8
        },
        {
          "date": {
            "$date": 1359676800000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1346025600000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1314835200000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1300924800000
          },
          "grade": "C",
          "score": 36
        }
      ],
      "name": "Dunkin' Donuts/Baskin' Robbins",
      "restaurant_id": "40378035"
    },{
      "address": {
        "building": "2664",
        "coord": [
          -73.9689746,
          40.7979687
        ],
        "street": "Broadway",
        "zipcode": "10025"
      },
      "borough": "Manhattan",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1401321600000
          },
          "grade": "B",
          "score": 20
        },
        {
          "date": {
            "$date": 1385510400000
          },
          "grade": "C",
          "score": 32
        },
        {
          "date": {
            "$date": 1374710400000
          },
          "grade": "C",
          "score": 5
        },
        {
          "date": {
            "$date": 1361750400000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1329436800000
          },
          "grade": "A",
          "score": 13
        }
      ],
      "name": "Broadway Restaurant",
      "restaurant_id": "40378136"
    },{
      "address": {
        "building": "107-08",
        "coord": [
          -73.8454959,
          40.7207511
        ],
        "street": "70 Road",
        "zipcode": "11375"
      },
      "borough": "Queens",
      "cuisine": "Japanese",
      "grades": [
        {
          "date": {
            "$date": 1403654400000
          },
          "grade": "A",
          "score": 6
        },
        {
          "date": {
            "$date": 1389225600000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1367452800000
          },
          "grade": "A",
          "score": 2
        },
        {
          "date": {
            "$date": 1347321600000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1329091200000
          },
          "grade": "A",
          "score": 4
        },
        {
          "date": {
            "$date": 1316044800000
          },
          "grade": "B",
          "score": 27
        }
      ],
      "name": "Narita Japanese Restaurant",
      "restaurant_id": "40378190"
    },{
      "address": {
        "building": "168",
        "coord": [
          -73.94100100000001,
          40.798046
        ],
        "street": "East  116 Street",
        "zipcode": "10029"
      },
      "borough": "Manhattan",
      "cuisine": "Mexican",
      "grades": [
        {
          "date": {
            "$date": 1409616000000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1396310400000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1378339200000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1363910400000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1323993600000
          },
          "grade": "A",
          "score": 12
        }
      ],
      "name": "Cuchifrito",
      "restaurant_id": "40378212"
    },{
      "address": {
        "building": "116",
        "coord": [
          -74.00141959999999,
          40.7408836
        ],
        "street": "8 Avenue",
        "zipcode": "10011"
      },
      "borough": "Manhattan",
      "cuisine": "Mexican",
      "grades": [
        {
          "date": {
            "$date": 1415577600000
          },
          "grade": "B",
          "score": 24
        },
        {
          "date": {
            "$date": 1394496000000
          },
          "grade": "B",
          "score": 16
        },
        {
          "date": {
            "$date": 1379289600000
          },
          "grade": "C",
          "score": 9
        },
        {
          "date": {
            "$date": 1349222400000
          },
          "grade": "B",
          "score": 27
        },
        {
          "date": {
            "$date": 1335312000000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1324252800000
          },
          "grade": "B",
          "score": 25
        }
      ],
      "name": "Mary Ann'S",
      "restaurant_id": "40378272"
    },{
      "address": {
        "building": "315",
        "coord": [
          -73.9940325,
          40.681185
        ],
        "street": "Smith Street",
        "zipcode": "11231"
      },
      "borough": "Brooklyn",
      "cuisine": "Italian",
      "grades": [
        {
          "date": {
            "$date": 1420156800000
          },
          "grade": "Z",
          "score": 24
        },
        {
          "date": {
            "$date": 1374105600000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1361318400000
          },
          "grade": "A",
          "score": 4
        },
        {
          "date": {
            "$date": 1336003200000
          },
          "grade": "A",
          "score": 11
        }
      ],
      "name": "Red Rose",
      "restaurant_id": "40378328"
    },{
      "address": {
        "building": "1014",
        "coord": [
          -73.89687649999999,
          40.8166811
        ],
        "street": "Longwood Avenue",
        "zipcode": "10459"
      },
      "borough": "Bronx",
      "cuisine": "Pizza",
      "grades": [
        {
          "date": {
            "$date": 1411603200000
          },
          "grade": "Z",
          "score": 24
        },
        {
          "date": {
            "$date": 1395187200000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1390262400000
          },
          "grade": "P",
          "score": 10
        },
        {
          "date": {
            "$date": 1371168000000
          },
          "grade": "C",
          "score": 40
        },
        {
          "date": {
            "$date": 1354147200000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1340323200000
          },
          "grade": "B",
          "score": 22
        },
        {
          "date": {
            "$date": 1326931200000
          },
          "grade": "B",
          "score": 22
        }
      ],
      "name": "Tony'S Pizza",
      "restaurant_id": "40378347"
    },{
      "address": {
        "building": "313",
        "coord": [
          -73.97256639999999,
          40.59727549999999
        ],
        "street": "Avenue U",
        "zipcode": "11223"
      },
      "borough": "Brooklyn",
      "cuisine": "Italian",
      "grades": [
        {
          "date": {
            "$date": 1409097600000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1382572800000
          },
          "grade": "B",
          "score": 24
        },
        {
          "date": {
            "$date": 1367452800000
          },
          "grade": "B",
          "score": 19
        },
        {
          "date": {
            "$date": 1349740800000
          },
          "grade": "C",
          "score": 5
        },
        {
          "date": {
            "$date": 1334188800000
          },
          "grade": "B",
          "score": 22
        },
        {
          "date": {
            "$date": 1317772800000
          },
          "grade": "A",
          "score": 13
        }
      ],
      "name": "Fiorentino Ristorante",
      "restaurant_id": "40378383"
    },{
      "address": {
        "building": "9310",
        "coord": [
          -73.84938439999999,
          40.688197
        ],
        "street": "Woodhaven Boulevard",
        "zipcode": "11421"
      },
      "borough": "Queens",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1388102400000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1370563200000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1334188800000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1318550400000
          },
          "grade": "A",
          "score": 9
        }
      ],
      "name": "Port O' Calls",
      "restaurant_id": "40378534"
    },{
      "address": {
        "building": "32",
        "coord": [
          -73.9932049,
          40.7321769
        ],
        "street": "East   10 Street",
        "zipcode": "10003"
      },
      "borough": "Manhattan",
      "cuisine": "Italian",
      "grades": [
        {
          "date": {
            "$date": 1398729600000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1378339200000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1358812800000
          },
          "grade": "A",
          "score": 4
        },
        {
          "date": {
            "$date": 1339372800000
          },
          "grade": "A",
          "score": 2
        }
      ],
      "name": "Il Cantinori Restauraunt",
      "restaurant_id": "40378571"
    },{
      "address": {
        "building": "463",
        "coord": [
          -73.9896961,
          40.7516989
        ],
        "street": "7 Avenue",
        "zipcode": "10018"
      },
      "borough": "Manhattan",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1393545600000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1382313600000
          },
          "grade": "C",
          "score": 9
        },
        {
          "date": {
            "$date": 1350518400000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1338854400000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1321315200000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1306454400000
          },
          "grade": "A",
          "score": 10
        }
      ],
      "name": "Andrews Coffee Shop",
      "restaurant_id": "40378579"
    },{
      "address": {
        "building": "7919",
        "coord": [
          -73.8514393,
          40.693942
        ],
        "street": "Jamaica Avenue",
        "zipcode": "11421"
      },
      "borough": "Queens",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1410393600000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1395619200000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1359590400000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1340582400000
          },
          "grade": "B",
          "score": 15
        }
      ],
      "name": "Mike'S Pub",
      "restaurant_id": "40378585"
    },{
      "address": {
        "building": "6121",
        "coord": [
          -73.90092960000001,
          40.7137698
        ],
        "street": "Fresh Pond Road",
        "zipcode": "11379"
      },
      "borough": "Queens",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1416873600000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1383955200000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1349395200000
          },
          "grade": "A",
          "score": 11
        }
      ],
      "name": "The Clubhouse",
      "restaurant_id": "40378719"
    },{
      "address": {
        "building": "1250",
        "coord": [
          -73.9879627,
          40.7478473
        ],
        "street": "Broadway",
        "zipcode": "10001"
      },
      "borough": "Manhattan",
      "cuisine": "Korean",
      "grades": [
        {
          "date": {
            "$date": 1415836800000
          },
          "grade": "Z",
          "score": 17
        },
        {
          "date": {
            "$date": 1404086400000
          },
          "grade": "C",
          "score": 30
        },
        {
          "date": {
            "$date": 1382313600000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1366329600000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1344816000000
          },
          "grade": "B",
          "score": 20
        },
        {
          "date": {
            "$date": 1330905600000
          },
          "grade": "A",
          "score": 13
        }
      ],
      "name": "Kang Suh Korean Restaurant",
      "restaurant_id": "40378729"
    },{
      "address": {
        "building": "6967",
        "coord": [
          -73.8935099,
          40.7272902
        ],
        "street": "Grand Avenue",
        "zipcode": "11378"
      },
      "borough": "Queens",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1391040000000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1370476800000
          },
          "grade": "B",
          "score": 15
        },
        {
          "date": {
            "$date": 1337212800000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1325635200000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1315267200000
          },
          "grade": "B",
          "score": 21
        },
        {
          "date": {
            "$date": 1302566400000
          },
          "grade": "A",
          "score": 13
        }
      ],
      "name": "Fame Diner",
      "restaurant_id": "40378774"
    },{
      "address": {
        "building": "3000",
        "coord": [
          -73.93825489999999,
          40.5834295
        ],
        "street": "Emmons Avenue",
        "zipcode": "11235"
      },
      "borough": "Brooklyn",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1397088000000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1362009600000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1328572800000
          },
          "grade": "A",
          "score": 11
        }
      ],
      "name": "Knights Of Baron Dekalb",
      "restaurant_id": "40378796"
    },{
      "address": {
        "building": "502",
        "coord": [
          -74.1092654,
          40.6379272
        ],
        "street": "Henderson Avenue",
        "zipcode": "10310"
      },
      "borough": "Staten Island",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1405555200000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1386115200000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1358812800000
          },
          "grade": "B",
          "score": 20
        },
        {
          "date": {
            "$date": 1336521600000
          },
          "grade": "A",
          "score": 13
        }
      ],
      "name": "Union Hall",
      "restaurant_id": "40378822"
    },{
      "address": {
        "building": "709",
        "coord": [
          -73.965305,
          40.6064189
        ],
        "street": "Kings Highway",
        "zipcode": "11223"
      },
      "borough": "Brooklyn",
      "cuisine": "Jewish/Kosher",
      "grades": [
        {
          "date": {
            "$date": 1408060800000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1395014400000
          },
          "grade": "A",
          "score": 5
        },
        {
          "date": {
            "$date": 1359590400000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1344297600000
          },
          "grade": "C",
          "score": 56
        },
        {
          "date": {
            "$date": 1325030400000
          },
          "grade": "A",
          "score": 10
        }
      ],
      "name": "Kosher Hut Of Brooklyn",
      "restaurant_id": "40378827"
    },{
      "address": {
        "building": "149",
        "coord": [
          -73.9992986,
          40.7283881
        ],
        "street": "Bleeker Street",
        "zipcode": "10012"
      },
      "borough": "Manhattan",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1400112000000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1380758400000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1364515200000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1322697600000
          },
          "grade": "A",
          "score": 4
        }
      ],
      "name": "Terra Blues",
      "restaurant_id": "40378874"
    },{
      "address": {
        "building": "493",
        "coord": [
          -73.97579000000002,
          40.786074
        ],
        "street": "Amsterdam Avenue",
        "zipcode": "10024"
      },
      "borough": "Manhattan",
      "cuisine": "Pizza",
      "grades": [
        {
          "date": {
            "$date": 1395187200000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1362960000000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1330300800000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1319414400000
          },
          "grade": "A",
          "score": 8
        }
      ],
      "name": "Caesar'S Palace",
      "restaurant_id": "40378970"
    },{
      "address": {
        "building": "85-12",
        "coord": [
          -73.8806546,
          40.7479695
        ],
        "street": "Roosevelt Avenue",
        "zipcode": "11372"
      },
      "borough": "Queens",
      "cuisine": "Latin (Cuban, Dominican, Puerto Rican, South & Central American)",
      "grades": [
        {
          "date": {
            "$date": 1394582400000
          },
          "grade": "A",
          "score": 5
        },
        {
          "date": {
            "$date": 1362700800000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1340841600000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1327449600000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1310601600000
          },
          "grade": "B",
          "score": 25
        }
      ],
      "name": "Flamingo",
      "restaurant_id": "40379026"
    },{
      "address": {
        "building": "97",
        "coord": [
          -74.001094,
          40.729583
        ],
        "street": "Macdougal Street",
        "zipcode": "10012"
      },
      "borough": "Manhattan",
      "cuisine": "Italian",
      "grades": [
        {
          "date": {
            "$date": 1415145600000
          },
          "grade": "Z",
          "score": 33
        },
        {
          "date": {
            "$date": 1390953600000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1368662400000
          },
          "grade": "C",
          "score": 42
        },
        {
          "date": {
            "$date": 1323648000000
          },
          "grade": "A",
          "score": 11
        }
      ],
      "name": "Monte'S",
      "restaurant_id": "40379149"
    },{
      "address": {
        "building": "12",
        "coord": [
          -73.9938232,
          40.7340887
        ],
        "street": "East   12 Street",
        "zipcode": "10003"
      },
      "borough": "Manhattan",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1402272000000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1372636800000
          },
          "grade": "A",
          "score": 8
        },
        {
          "date": {
            "$date": 1360108800000
          },
          "grade": "A",
          "score": 5
        },
        {
          "date": {
            "$date": 1325203200000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1316390400000
          },
          "grade": "A",
          "score": 13
        }
      ],
      "name": "Gotham Bar & Grill",
      "restaurant_id": "40379304"
    },{
      "address": {
        "building": "425",
        "coord": [
          -73.977372,
          40.783934
        ],
        "street": "Amsterdam Avenue",
        "zipcode": "10024"
      },
      "borough": "Manhattan",
      "cuisine": "Irish",
      "grades": [
        {
          "date": {
            "$date": 1411948800000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1394150400000
          },
          "grade": "B",
          "score": 19
        },
        {
          "date": {
            "$date": 1373414400000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1356480000000
          },
          "grade": "B",
          "score": 27
        },
        {
          "date": {
            "$date": 1340236800000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1327276800000
          },
          "grade": "B",
          "score": 18
        }
      ],
      "name": "Mcaleer'S Pub",
      "restaurant_id": "40379355"
    },{
      "address": {
        "building": "6388",
        "coord": [
          -73.8676483,
          40.72214200000001
        ],
        "street": "Woodhaven Boulevard",
        "zipcode": "11374"
      },
      "borough": "Queens",
      "cuisine": "Seafood",
      "grades": [
        {
          "date": {
            "$date": 1397692800000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1364169600000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1328572800000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1317168000000
          },
          "grade": "A",
          "score": 5
        },
        {
          "date": {
            "$date": 1304467200000
          },
          "grade": "A",
          "score": 2
        }
      ],
      "name": "London Lennies",
      "restaurant_id": "40379566"
    },{
      "address": {
        "building": "4090",
        "coord": [
          -83.8842292,
          30.6928463
        ],
        "street": "Boston Post Road",
        "zipcode": "10475"
      },
      "borough": "Bronx",
      "cuisine": "Donuts",
      "grades": [
        {
          "date": {
            "$date": 1404864000000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1373932800000
          },
          "grade": "A",
          "score": 8
        },
        {
          "date": {
            "$date": 1343779200000
          },
          "grade": "A",
          "score": 12
        }
      ],
      "name": "Dunkin' Donuts",
      "restaurant_id": "40379573"
    },{
      "address": {
        "building": "339",
        "coord": [
          -73.980274,
          40.73489379999999
        ],
        "street": "1 Avenue",
        "zipcode": "10003"
      },
      "borough": "Manhattan",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1414454400000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1403222400000
          },
          "grade": "A",
          "score": 2
        },
        {
          "date": {
            "$date": 1371513600000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1338768000000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1327881600000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1326067200000
          },
          "grade": "P",
          "score": 14
        }
      ],
      "name": "Cooper Town Diner",
      "restaurant_id": "40379580"
    },{
      "address": {
        "building": "207",
        "coord": [
          -73.9901605,
          40.7526176
        ],
        "street": "West   36 Street",
        "zipcode": "10018"
      },
      "borough": "Manhattan",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1399939200000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1386201600000
          },
          "grade": "A",
          "score": 5
        },
        {
          "date": {
            "$date": 1370217600000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1333929600000
          },
          "grade": "A",
          "score": 8
        },
        {
          "date": {
            "$date": 1315785600000
          },
          "grade": "A",
          "score": 10
        }
      ],
      "name": "Delmonico'S Kitchen",
      "restaurant_id": "40379620"
    },{
      "address": {
        "building": "210",
        "coord": [
          -73.9888412,
          40.7296752
        ],
        "street": "East 9 Th Street",
        "zipcode": "10003"
      },
      "borough": "Manhattan",
      "cuisine": "Japanese",
      "grades": [
        {
          "date": {
            "$date": 1395705600000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1378857600000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1363219200000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1343088000000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1328140800000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1315353600000
          },
          "grade": "A",
          "score": 5
        },
        {
          "date": {
            "$date": 1303776000000
          },
          "grade": "C",
          "score": 35
        }
      ],
      "name": "Hasaki Restaurant",
      "restaurant_id": "40379628"
    },{
      "address": {
        "building": "108",
        "coord": [
          -74.0082408,
          40.7148452
        ],
        "street": "Chambers Street",
        "zipcode": "10007"
      },
      "borough": "Manhattan",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1392336000000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1360281600000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1329868800000
          },
          "grade": "A",
          "score": 11
        }
      ],
      "name": "Imperial Coffee House",
      "restaurant_id": "40379647"
    },{
      "address": {
        "building": "1295",
        "coord": [
          -73.9592566,
          40.7711518
        ],
        "street": "Third Avenue",
        "zipcode": "10021"
      },
      "borough": "Manhattan",
      "cuisine": "Italian",
      "grades": [
        {
          "date": {
            "$date": 1390780800000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1374710400000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1357084800000
          },
          "grade": "B",
          "score": 19
        }
      ],
      "name": "Mezzaluna",
      "restaurant_id": "40379662"
    },{
      "address": {
        "building": "155",
        "coord": [
          -73.9703093,
          40.7575104
        ],
        "street": "East   52 Street",
        "zipcode": "10022"
      },
      "borough": "Manhattan",
      "cuisine": "Japanese",
      "grades": [
        {
          "date": {
            "$date": 1386547200000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1369785600000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1336694400000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1318464000000
          },
          "grade": "A",
          "score": 11
        }
      ],
      "name": "Restuarant Nippon",
      "restaurant_id": "40379746"
    },{
      "address": {
        "building": "120",
        "coord": [
          -74.01268830000001,
          40.7095273
        ],
        "street": "Cedar Street",
        "zipcode": "10006"
      },
      "borough": "Manhattan",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1415404800000
          },
          "grade": "Z",
          "score": 27
        },
        {
          "date": {
            "$date": 1375833600000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1362441600000
          },
          "grade": "B",
          "score": 18
        },
        {
          "date": {
            "$date": 1328659200000
          },
          "grade": "A",
          "score": 12
        }
      ],
      "name": "O'Hara'S",
      "restaurant_id": "40379890"
    },{
      "address": {
        "building": "4277",
        "coord": [
          -73.8675389,
          40.8977829
        ],
        "street": "Katonah Ave",
        "zipcode": "10470"
      },
      "borough": "Bronx",
      "cuisine": "Irish",
      "grades": [
        {
          "date": {
            "$date": 1412553600000
          },
          "grade": "A",
          "score": 2
        },
        {
          "date": {
            "$date": 1381881600000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1367280000000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1335744000000
          },
          "grade": "A",
          "score": 8
        },
        {
          "date": {
            "$date": 1320105600000
          },
          "grade": "A",
          "score": 11
        }
      ],
      "name": "Aqueduct North",
      "restaurant_id": "40379894"
    },{
      "address": {
        "building": "1560",
        "coord": [
          -73.98527039999999,
          40.7589099
        ],
        "street": "Broadway",
        "zipcode": "10036"
      },
      "borough": "Manhattan",
      "cuisine": "Hamburgers",
      "grades": [
        {
          "date": {
            "$date": 1421107200000
          },
          "grade": "A",
          "score": 5
        },
        {
          "date": {
            "$date": 1409270400000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1393372800000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1378857600000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1361923200000
          },
          "grade": "A",
          "score": 5
        },
        {
          "date": {
            "$date": 1326844800000
          },
          "grade": "A",
          "score": 8
        }
      ],
      "name": "Mcdonald'S",
      "restaurant_id": "40379897"
    },{
      "address": {
        "building": "1064",
        "coord": [
          -73.9616659,
          40.777365
        ],
        "street": "Madison Avenue",
        "zipcode": "10028"
      },
      "borough": "Manhattan",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1413331200000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1396828800000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1363046400000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1355875200000
          },
          "grade": "B",
          "score": 22
        },
        {
          "date": {
            "$date": 1354752000000
          },
          "grade": "P",
          "score": 5
        },
        {
          "date": {
            "$date": 1350345600000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1318809600000
          },
          "grade": "A",
          "score": 11
        }
      ],
      "name": "E.A.T. Cafe",
      "restaurant_id": "40379920"
    },{
      "address": {
        "building": "0",
        "coord": [
          -73.8865891,
          40.7723001
        ],
        "street": "Laguardia Airport Bldg",
        "zipcode": "11371"
      },
      "borough": "Queens",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1413504000000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1393372800000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1377820800000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1363910400000
          },
          "grade": "B",
          "score": 25
        },
        {
          "date": {
            "$date": 1344556800000
          },
          "grade": "B",
          "score": 22
        }
      ],
      "name": "Yankee Clipper",
      "restaurant_id": "40379994"
    },{
      "address": {
        "building": "1100",
        "coord": [
          -74.00290509999999,
          40.6312541
        ],
        "street": "60 Street",
        "zipcode": "11219"
      },
      "borough": "Brooklyn",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1410998400000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1390003200000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1372204800000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1348704000000
          },
          "grade": "B",
          "score": 27
        },
        {
          "date": {
            "$date": 1330560000000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1316736000000
          },
          "grade": "A",
          "score": 10
        }
      ],
      "name": "Rex Manor",
      "restaurant_id": "40380044"
    },{
      "address": {
        "building": "158",
        "coord": [
          -73.8982405,
          40.8616283
        ],
        "street": "E. 188 Th St",
        "zipcode": "10468"
      },
      "borough": "Bronx",
      "cuisine": "Spanish",
      "grades": [
        {
          "date": {
            "$date": 1418256000000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1406160000000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1391990400000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1376265600000
          },
          "grade": "B",
          "score": 21
        },
        {
          "date": {
            "$date": 1357603200000
          },
          "grade": "A",
          "score": 8
        },
        {
          "date": {
            "$date": 1323907200000
          },
          "grade": "A",
          "score": 9
        }
      ],
      "name": "Cuchifritos",
      "restaurant_id": "40380164"
    },{
      "address": {
        "building": "101",
        "coord": [
          -73.97775159999999,
          40.7510553
        ],
        "street": "Park Avenue",
        "zipcode": "10017"
      },
      "borough": "Manhattan",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1395360000000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1363046400000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1350259200000
          },
          "grade": "B",
          "score": 20
        },
        {
          "date": {
            "$date": 1315958400000
          },
          "grade": "A",
          "score": 7
        }
      ],
      "name": "Club 101",
      "restaurant_id": "40380182"
    },{
      "address": {
        "building": "3657",
        "coord": [
          -73.901496,
          40.885102
        ],
        "street": "Kingsbridge Avenue",
        "zipcode": "10463"
      },
      "borough": "Bronx",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1411603200000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1398816000000
          },
          "grade": "B",
          "score": 20
        },
        {
          "date": {
            "$date": 1376870400000
          },
          "grade": "A",
          "score": 2
        },
        {
          "date": {
            "$date": 1362528000000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1327536000000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1318982400000
          },
          "grade": "B",
          "score": 18
        }
      ],
      "name": "Riverdale Diner",
      "restaurant_id": "40380253"
    },{
      "address": {
        "building": "7402",
        "coord": [
          -73.87812749999999,
          40.7126376
        ],
        "street": "Metropolitan Avenue",
        "zipcode": "11379"
      },
      "borough": "Queens",
      "cuisine": "Pizza",
      "grades": [
        {
          "date": {
            "$date": 1419292800000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1386115200000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1371168000000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1351123200000
          },
          "grade": "A",
          "score": 11
        }
      ],
      "name": "Carlos Pizza",
      "restaurant_id": "40380422"
    },{
      "address": {
        "building": "147",
        "coord": [
          -73.9991763,
          40.728369
        ],
        "street": "Bleecker Street",
        "zipcode": "10012"
      },
      "borough": "Manhattan",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1416873600000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1393545600000
          },
          "grade": "B",
          "score": 17
        },
        {
          "date": {
            "$date": 1358985600000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1340755200000
          },
          "grade": "A",
          "score": 6
        },
        {
          "date": {
            "$date": 1326931200000
          },
          "grade": "A",
          "score": 9
        }
      ],
      "name": "The Bitter End",
      "restaurant_id": "40380432"
    },{
      "address": {
        "building": "762",
        "coord": [
          -73.98819809999999,
          40.7641429
        ],
        "street": "9 Avenue",
        "zipcode": "10019"
      },
      "borough": "Manhattan",
      "cuisine": "Mexican",
      "grades": [
        {
          "date": {
            "$date": 1419811200000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1385942400000
          },
          "grade": "A",
          "score": 8
        },
        {
          "date": {
            "$date": 1353888000000
          },
          "grade": "A",
          "score": 5
        }
      ],
      "name": "Arriba Arriba",
      "restaurant_id": "40380457"
    },{
      "address": {
        "building": "331",
        "coord": [
          -73.9726244,
          40.6779037
        ],
        "street": "Flatbush Avenue",
        "zipcode": "11217"
      },
      "borough": "Brooklyn",
      "cuisine": "Japanese",
      "grades": [
        {
          "date": {
            "$date": 1417564800000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1399507200000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1375315200000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1355356800000
          },
          "grade": "A",
          "score": 7
        }
      ],
      "name": "Geido Restaurant",
      "restaurant_id": "40380464"
    },{
      "address": {
        "building": "541",
        "coord": [
          -73.974367,
          40.788002
        ],
        "street": "Amsterdam Avenue",
        "zipcode": "10024"
      },
      "borough": "Manhattan",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1409097600000
          },
          "grade": "A",
          "score": 8
        },
        {
          "date": {
            "$date": 1378771200000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1360627200000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1345075200000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1331856000000
          },
          "grade": "A",
          "score": 12
        }
      ],
      "name": "Barney Greengrass",
      "restaurant_id": "40380517"
    },{
      "address": {
        "building": "182",
        "coord": [
          -73.97919759999999,
          40.76604930000001
        ],
        "street": "West 58 Th Street",
        "zipcode": "10019"
      },
      "borough": "Manhattan",
      "cuisine": "French",
      "grades": [
        {
          "date": {
            "$date": 1407369600000
          },
          "grade": "B",
          "score": 27
        },
        {
          "date": {
            "$date": 1384905600000
          },
          "grade": "A",
          "score": 8
        },
        {
          "date": {
            "$date": 1366243200000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1331769600000
          },
          "grade": "A",
          "score": 5
        },
        {
          "date": {
            "$date": 1319500800000
          },
          "grade": "A",
          "score": 10
        }
      ],
      "name": "Petrossian Restauraunt",
      "restaurant_id": "40380518"
    },{
      "address": {
        "building": "8443",
        "coord": [
          -73.80112059999999,
          40.7128278
        ],
        "street": "164 Street",
        "zipcode": "11432"
      },
      "borough": "Queens",
      "cuisine": "Indian",
      "grades": [
        {
          "date": {
            "$date": 1417132800000
          },
          "grade": "A",
          "score": 4
        },
        {
          "date": {
            "$date": 1402876800000
          },
          "grade": "A",
          "score": 8
        },
        {
          "date": {
            "$date": 1368576000000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1338249600000
          },
          "grade": "A",
          "score": 13
        }
      ],
      "name": "Annam Braham Restaurant",
      "restaurant_id": "40380520"
    },{
      "address": {
        "building": "226",
        "coord": [
          -73.9837907,
          40.7626833
        ],
        "street": "West 52 Nd Street",
        "zipcode": "10019"
      },
      "borough": "Manhattan",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1415232000000
          },
          "grade": "Z",
          "score": 15
        },
        {
          "date": {
            "$date": 1398038400000
          },
          "grade": "A",
          "score": 2
        },
        {
          "date": {
            "$date": 1379980800000
          },
          "grade": "B",
          "score": 22
        },
        {
          "date": {
            "$date": 1347408000000
          },
          "grade": "A",
          "score": 5
        }
      ],
      "name": "Supernova-Novotel Hotel",
      "restaurant_id": "40380559"
    },{
      "address": {
        "building": "73",
        "coord": [
          -73.9979536,
          40.6914024
        ],
        "street": "Atlantic Avenue",
        "zipcode": "11201"
      },
      "borough": "Brooklyn",
      "cuisine": "Bottled beverages, including water, sodas, juices, etc.",
      "grades": [
        {
          "date": {
            "$date": 1410912000000
          },
          "grade": "A",
          "score": 8
        },
        {
          "date": {
            "$date": 1394668800000
          },
          "grade": "A",
          "score": 4
        },
        {
          "date": {
            "$date": 1358294400000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1340668800000
          },
          "grade": "A",
          "score": 8
        },
        {
          "date": {
            "$date": 1324252800000
          },
          "grade": "B",
          "score": 20
        }
      ],
      "name": "Montero Bar & Grill",
      "restaurant_id": "40380592"
    },{
      "address": {
        "building": "65-68",
        "coord": [
          -73.88814889999999,
          40.7011542
        ],
        "street": "Myrtle Avenue",
        "zipcode": "11385"
      },
      "borough": "Queens",
      "cuisine": "Pizza/Italian",
      "grades": [
        {
          "date": {
            "$date": 1402358400000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1389052800000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1372291200000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1341273600000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1311206400000
          },
          "grade": "A",
          "score": 12
        }
      ],
      "name": "Pisa Pizzeria",
      "restaurant_id": "40380628"
    },{
      "address": {
        "building": "208",
        "coord": [
          -73.9991998,
          40.7286624
        ],
        "street": "Thompson Street",
        "zipcode": "10012"
      },
      "borough": "Manhattan",
      "cuisine": "Italian",
      "grades": [
        {
          "date": {
            "$date": 1404864000000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1372723200000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1359936000000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1333929600000
          },
          "grade": "B",
          "score": 20
        },
        {
          "date": {
            "$date": 1315872000000
          },
          "grade": "A",
          "score": 3
        }
      ],
      "name": "Porto Bello Restaurant",
      "restaurant_id": "40380648"
    },{
      "address": {
        "building": "1320",
        "coord": [
          -73.9820285,
          40.5753606
        ],
        "street": "Surf Avenue",
        "zipcode": "11224"
      },
      "borough": "Brooklyn",
      "cuisine": "Seafood",
      "grades": [
        {
          "date": {
            "$date": 1403222400000
          },
          "grade": "B",
          "score": 23
        },
        {
          "date": {
            "$date": 1370995200000
          },
          "grade": "B",
          "score": 24
        },
        {
          "date": {
            "$date": 1339372800000
          },
          "grade": "A",
          "score": 6
        }
      ],
      "name": "Pete'S Clam Stop",
      "restaurant_id": "40380657"
    },{
      "address": {
        "building": "166",
        "coord": [
          -74.0015608,
          40.7319387
        ],
        "street": "West    4 Street",
        "zipcode": "10014"
      },
      "borough": "Manhattan",
      "cuisine": "Tex-Mex",
      "grades": [
        {
          "date": {
            "$date": 1393891200000
          },
          "grade": "A",
          "score": 4
        },
        {
          "date": {
            "$date": 1379894400000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1360627200000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1343692800000
          },
          "grade": "A",
          "score": 4
        },
        {
          "date": {
            "$date": 1329091200000
          },
          "grade": "A",
          "score": 7
        }
      ],
      "name": "Burrito Loco",
      "restaurant_id": "40380660"
    },{
      "address": {
        "building": "227",
        "coord": [
          -73.9939366,
          40.7468282
        ],
        "street": "West   27 Street",
        "zipcode": "10001"
      },
      "borough": "Manhattan",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1392336000000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1359936000000
          },
          "grade": "A",
          "score": 8
        },
        {
          "date": {
            "$date": 1338854400000
          },
          "grade": "A",
          "score": 13
        }
      ],
      "name": "Fit Cafeteria (Building A)",
      "restaurant_id": "40380826"
    },{
      "address": {
        "building": "323",
        "coord": [
          -73.9812553,
          40.6670051
        ],
        "street": "7 Avenue",
        "zipcode": "11215"
      },
      "borough": "Brooklyn",
      "cuisine": "Pizza",
      "grades": [
        {
          "date": {
            "$date": 1416873600000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1401321600000
          },
          "grade": "A",
          "score": 2
        },
        {
          "date": {
            "$date": 1380067200000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1366761600000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1331769600000
          },
          "grade": "A",
          "score": 11
        }
      ],
      "name": "Smiling Pizza",
      "restaurant_id": "40380996"
    },{
      "address": {
        "building": "45-08",
        "coord": [
          -73.9524969,
          40.748421
        ],
        "street": "Vernon Boulevard",
        "zipcode": "11101"
      },
      "borough": "Queens",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1402099200000
          },
          "grade": "A",
          "score": 8
        },
        {
          "date": {
            "$date": 1383782400000
          },
          "grade": "B",
          "score": 14
        },
        {
          "date": {
            "$date": 1366934400000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1343174400000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1319068800000
          },
          "grade": "B",
          "score": 16
        }
      ],
      "name": "Riverhead Gentlemen'S Club",
      "restaurant_id": "40381083"
    },{
      "address": {
        "building": "544",
        "coord": [
          -73.964326,
          40.805416
        ],
        "street": "West  113 Street",
        "zipcode": "10025"
      },
      "borough": "Manhattan",
      "cuisine": "Greek",
      "grades": [
        {
          "date": {
            "$date": 1415232000000
          },
          "grade": "Z",
          "score": 27
        },
        {
          "date": {
            "$date": 1395792000000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1354320000000
          },
          "grade": "A",
          "score": 13
        }
      ],
      "name": "Symposium Greek Restaurant",
      "restaurant_id": "40381210"
    },{
      "address": {
        "building": "345",
        "coord": [
          -73.9864626,
          40.7266739
        ],
        "street": "East 6 Street",
        "zipcode": "10003"
      },
      "borough": "Manhattan",
      "cuisine": "Indian",
      "grades": [
        {
          "date": {
            "$date": 1410739200000
          },
          "grade": "A",
          "score": 5
        },
        {
          "date": {
            "$date": 1389657600000
          },
          "grade": "A",
          "score": 8
        },
        {
          "date": {
            "$date": 1369872000000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1366761600000
          },
          "grade": "P",
          "score": 2
        },
        {
          "date": {
            "$date": 1349049600000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1333670400000
          },
          "grade": "C",
          "score": 92
        },
        {
          "date": {
            "$date": 1320278400000
          },
          "grade": "C",
          "score": 41
        }
      ],
      "name": "Gandhi",
      "restaurant_id": "40381295"
    },{
      "address": {
        "building": "635",
        "coord": [
          -73.94130600000001,
          40.722332
        ],
        "street": "Meeker Avenue",
        "zipcode": "11222"
      },
      "borough": "Brooklyn",
      "cuisine": "Pizza/Italian",
      "grades": [
        {
          "date": {
            "$date": 1414022400000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1400112000000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1384300800000
          },
          "grade": "B",
          "score": 21
        },
        {
          "date": {
            "$date": 1366243200000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1331769600000
          },
          "grade": "A",
          "score": 12
        }
      ],
      "name": "Nina'S Restaurant Pizzeria",
      "restaurant_id": "40381344"
    },{
      "address": {
        "building": "6",
        "coord": [
          -73.98927979999999,
          40.72983199999999
        ],
        "street": "Stuyvesant Street",
        "zipcode": "10003"
      },
      "borough": "Manhattan",
      "cuisine": "Japanese",
      "grades": [
        {
          "date": {
            "$date": 1414108800000
          },
          "grade": "B",
          "score": 17
        },
        {
          "date": {
            "$date": 1397260800000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1375228800000
          },
          "grade": "C",
          "score": 62
        },
        {
          "date": {
            "$date": 1354665600000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1334620800000
          },
          "grade": "A",
          "score": 7
        }
      ],
      "name": "Village Yokocho",
      "restaurant_id": "40381420"
    },{
      "address": {
        "building": "80",
        "coord": [
          -73.9932232,
          40.6974104
        ],
        "street": "Clark Street",
        "zipcode": "11201"
      },
      "borough": "Brooklyn",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1404345600000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1390780800000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1376870400000
          },
          "grade": "A",
          "score": 5
        },
        {
          "date": {
            "$date": 1363564800000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1342656000000
          },
          "grade": "B",
          "score": 20
        },
        {
          "date": {
            "$date": 1323820800000
          },
          "grade": "A",
          "score": 8
        }
      ],
      "name": "Clark'S Restaurant",
      "restaurant_id": "40381551"
    },{
      "address": {
        "building": "232",
        "coord": [
          -73.9723721,
          40.7506241
        ],
        "street": "East   43 Street",
        "zipcode": "10017"
      },
      "borough": "Manhattan",
      "cuisine": "Italian",
      "grades": [
        {
          "date": {
            "$date": 1407715200000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1392681600000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1372118400000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1337731200000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1324944000000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1314662400000
          },
          "grade": "A",
          "score": 9
        }
      ],
      "name": "Pietros",
      "restaurant_id": "40381595"
    },{
      "address": {
        "building": "109",
        "coord": [
          -73.9837551,
          40.726019
        ],
        "street": "Avenue A",
        "zipcode": "10009"
      },
      "borough": "Manhattan",
      "cuisine": "Caribbean",
      "grades": [
        {
          "date": {
            "$date": 1406851200000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1382918400000
          },
          "grade": "B",
          "score": 24
        },
        {
          "date": {
            "$date": 1350864000000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1337904000000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1321401600000
          },
          "grade": "B",
          "score": 18
        }
      ],
      "name": "Miss Lily'S 7A",
      "restaurant_id": "40381720"
    },{
      "address": {
        "building": "330",
        "coord": [
          -73.9950747,
          40.7257659
        ],
        "street": "Lafayette Street",
        "zipcode": "10012"
      },
      "borough": "Manhattan",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1396569600000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1380585600000
          },
          "grade": "A",
          "score": 4
        },
        {
          "date": {
            "$date": 1367020800000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1322179200000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1304640000000
          },
          "grade": "A",
          "score": 12
        }
      ],
      "name": "Noho Star Restaurant",
      "restaurant_id": "40381752"
    },{
      "address": {
        "building": "1063",
        "coord": [
          -73.9627039,
          40.75896580000001
        ],
        "street": "First Avenue",
        "zipcode": "10022"
      },
      "borough": "Manhattan",
      "cuisine": "Mexican",
      "grades": [
        {
          "date": {
            "$date": 1389830400000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1370908800000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1350518400000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1334016000000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1310601600000
          },
          "grade": "A",
          "score": 11
        }
      ],
      "name": "Rosa Mexicano",
      "restaurant_id": "40381797"
    },{
      "address": {
        "building": "650",
        "coord": [
          -74.1107786,
          40.6295647
        ],
        "street": "Forest Avenue",
        "zipcode": "10310"
      },
      "borough": "Staten Island",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1401926400000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1370044800000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1338768000000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1327449600000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1308873600000
          },
          "grade": "B",
          "score": 18
        }
      ],
      "name": "Duffy'S",
      "restaurant_id": "40381811"
    },{
      "address": {
        "building": "107-16",
        "coord": [
          -73.8453754,
          40.7208791
        ],
        "street": "70 Road",
        "zipcode": "11375"
      },
      "borough": "Queens",
      "cuisine": "Italian",
      "grades": [
        {
          "date": {
            "$date": 1415232000000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1392076800000
          },
          "grade": "A",
          "score": 8
        },
        {
          "date": {
            "$date": 1369008000000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1349740800000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1334102400000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1321574400000
          },
          "grade": "C",
          "score": 32
        }
      ],
      "name": "Uno Chicago Grill",
      "restaurant_id": "40381896"
    },{
      "address": {
        "building": "1001",
        "coord": [
          -74.1468129,
          40.5760984
        ],
        "street": "Richmond Hill Road",
        "zipcode": "10306"
      },
      "borough": "Staten Island",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1404172800000
          },
          "grade": "B",
          "score": 22
        },
        {
          "date": {
            "$date": 1372291200000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1337212800000
          },
          "grade": "A",
          "score": 5
        }
      ],
      "name": "Latourette Golf Course",
      "restaurant_id": "40382052"
    },{
      "address": {
        "building": "1020",
        "coord": [
          -74.0177228,
          40.615199
        ],
        "street": "86Th Street",
        "zipcode": "11228"
      },
      "borough": "Brooklyn",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1416873600000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1385510400000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1372982400000
          },
          "grade": "B",
          "score": 24
        },
        {
          "date": {
            "$date": 1345593600000
          },
          "grade": "B",
          "score": 26
        },
        {
          "date": {
            "$date": 1333411200000
          },
          "grade": "A",
          "score": 7
        }
      ],
      "name": "Dyker Beach Golf (Grill Room)",
      "restaurant_id": "40382057"
    },{
      "address": {
        "building": "854",
        "coord": [
          -73.94994129999999,
          40.67140699999999
        ],
        "street": "St Johns Place",
        "zipcode": "11216"
      },
      "borough": "Brooklyn",
      "cuisine": "Caribbean",
      "grades": [
        {
          "date": {
            "$date": 1412985600000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1393977600000
          },
          "grade": "B",
          "score": 14
        },
        {
          "date": {
            "$date": 1375142400000
          },
          "grade": "B",
          "score": 16
        },
        {
          "date": {
            "$date": 1339459200000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1327622400000
          },
          "grade": "A",
          "score": 12
        }
      ],
      "name": "Glenda'S Restaurant",
      "restaurant_id": "40382147"
    },{
      "address": {
        "building": "1861",
        "coord": [
          -74.0054509,
          40.6018789
        ],
        "street": "Cropsey Avenue",
        "zipcode": "11214"
      },
      "borough": "Brooklyn",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1413417600000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1379894400000
          },
          "grade": "A",
          "score": 2
        },
        {
          "date": {
            "$date": 1346803200000
          },
          "grade": "A",
          "score": 8
        },
        {
          "date": {
            "$date": 1334102400000
          },
          "grade": "B",
          "score": 18
        },
        {
          "date": {
            "$date": 1321401600000
          },
          "grade": "A",
          "score": 5
        }
      ],
      "name": "My Father'S Place",
      "restaurant_id": "40382246"
    },{
      "address": {
        "building": "62",
        "coord": [
          -73.974896,
          40.675678
        ],
        "street": "7 Avenue",
        "zipcode": "11217"
      },
      "borough": "Brooklyn",
      "cuisine": "Tex-Mex",
      "grades": [
        {
          "date": {
            "$date": 1411689600000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1394668800000
          },
          "grade": "A",
          "score": 8
        },
        {
          "date": {
            "$date": 1370995200000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1354492800000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1329091200000
          },
          "grade": "B",
          "score": 21
        }
      ],
      "name": "Santa Fe Grill & Bar",
      "restaurant_id": "40382302"
    },{
      "address": {
        "building": "94",
        "coord": [
          -73.983622,
          40.72548
        ],
        "street": "Avenue A",
        "zipcode": "10009"
      },
      "borough": "Manhattan",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1421107200000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1403222400000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1362528000000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1346716800000
          },
          "grade": "A",
          "score": 5
        },
        {
          "date": {
            "$date": 1332201600000
          },
          "grade": "A",
          "score": 10
        }
      ],
      "name": "Sidewalk Bar & Restaurant",
      "restaurant_id": "40382367"
    },{
      "address": {
        "building": "4015",
        "coord": [
          -73.939728,
          40.841687
        ],
        "street": "Broadway",
        "zipcode": "10032"
      },
      "borough": "Manhattan",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1408406400000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1376870400000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1344816000000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1314835200000
          },
          "grade": "A",
          "score": 6
        }
      ],
      "name": "Coogan'S",
      "restaurant_id": "40382395"
    },{
      "address": {
        "building": "968",
        "coord": [
          -74.0054378,
          40.653762
        ],
        "street": "4 Avenue",
        "zipcode": "11232"
      },
      "borough": "Brooklyn",
      "cuisine": "Hamburgers",
      "grades": [
        {
          "date": {
            "$date": 1392681600000
          },
          "grade": "A",
          "score": 2
        },
        {
          "date": {
            "$date": 1359590400000
          },
          "grade": "A",
          "score": 3
        },
        {
          "date": {
            "$date": 1345507200000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1312416000000
          },
          "grade": "A",
          "score": 5
        },
        {
          "date": {
            "$date": 1301356800000
          },
          "grade": "A",
          "score": 4
        }
      ],
      "name": "Mcdonald'S",
      "restaurant_id": "40382421"
    },{
      "address": {
        "building": "32",
        "coord": [
          -74.00298049999999,
          40.7317316
        ],
        "street": "Jones Street",
        "zipcode": "10014"
      },
      "borough": "Manhattan",
      "cuisine": "Caf\u00e9/Coffee/Tea",
      "grades": [
        {
          "date": {
            "$date": 1415232000000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1386028800000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1362960000000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1345075200000
          },
          "grade": "A",
          "score": 10
        }
      ],
      "name": "Caffe Vivaldi",
      "restaurant_id": "40382455"
    },{
      "address": {
        "building": "1506",
        "coord": [
          -73.8537226,
          40.8427071
        ],
        "street": "Bronxdale Avenue",
        "zipcode": "10462"
      },
      "borough": "Bronx",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1401840000000
          },
          "grade": "A",
          "score": 5
        },
        {
          "date": {
            "$date": 1369180800000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1355356800000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1336953600000
          },
          "grade": "B",
          "score": 16
        },
        {
          "date": {
            "$date": 1325030400000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1312934400000
          },
          "grade": "A",
          "score": 11
        }
      ],
      "name": "Castlehill Diner",
      "restaurant_id": "40382517"
    },{
      "address": {
        "building": "4033",
        "coord": [
          -73.8172416,
          40.8195906
        ],
        "street": "East Tremont Avenue",
        "zipcode": "10465"
      },
      "borough": "Bronx",
      "cuisine": "Pizza",
      "grades": [
        {
          "date": {
            "$date": 1397088000000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1365465600000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1349308800000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1314835200000
          },
          "grade": "A",
          "score": 3
        }
      ],
      "name": "Tommy'S Pizza",
      "restaurant_id": "40382652"
    },{
      "address": {
        "building": "540",
        "coord": [
          -73.9692185,
          40.7645497
        ],
        "street": "Park Avenue",
        "zipcode": "10065"
      },
      "borough": "Manhattan",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1392163200000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1317859200000
          },
          "grade": "A",
          "score": 13
        }
      ],
      "name": "Regency Hotel",
      "restaurant_id": "40382679"
    },{
      "address": {
        "building": "350",
        "coord": [
          -73.96522089999999,
          40.7558205
        ],
        "street": "East   53 Street",
        "zipcode": "10022"
      },
      "borough": "Manhattan",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1420416000000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1387411200000
          },
          "grade": "A",
          "score": 0
        },
        {
          "date": {
            "$date": 1370908800000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1336435200000
          },
          "grade": "A",
          "score": 9
        }
      ],
      "name": "Parnell'S Pub",
      "restaurant_id": "40382802"
    },{
      "address": {
        "building": "941",
        "coord": [
          -74.0042129,
          40.654029
        ],
        "street": "4 Avenue",
        "zipcode": "11232"
      },
      "borough": "Brooklyn",
      "cuisine": "Latin (Cuban, Dominican, Puerto Rican, South & Central American)",
      "grades": [
        {
          "date": {
            "$date": 1404864000000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1391558400000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1358121600000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1326326400000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1312416000000
          },
          "grade": "B",
          "score": 27
        }
      ],
      "name": "La Fe Restaurant",
      "restaurant_id": "40382876"
    },{
      "address": {
        "building": "877",
        "coord": [
          -73.98866199999999,
          40.769442
        ],
        "street": "10 Avenue",
        "zipcode": "10019"
      },
      "borough": "Manhattan",
      "cuisine": "Chinese",
      "grades": [
        {
          "date": {
            "$date": 1414022400000
          },
          "grade": "B",
          "score": 23
        },
        {
          "date": {
            "$date": 1398124800000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1378684800000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1358208000000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1320105600000
          },
          "grade": "A",
          "score": 13
        }
      ],
      "name": "Ocean Dragon Restaurant",
      "restaurant_id": "40382877"
    },{
      "address": {
        "building": "253",
        "coord": [
          -73.91471,
          40.8335421
        ],
        "street": "East  167 Street",
        "zipcode": "10456"
      },
      "borough": "Bronx",
      "cuisine": "Chicken",
      "grades": [
        {
          "date": {
            "$date": 1411948800000
          },
          "grade": "A",
          "score": 5
        },
        {
          "date": {
            "$date": 1399248000000
          },
          "grade": "C",
          "score": 36
        },
        {
          "date": {
            "$date": 1397174400000
          },
          "grade": "P",
          "score": 9
        },
        {
          "date": {
            "$date": 1384819200000
          },
          "grade": "A",
          "score": 8
        },
        {
          "date": {
            "$date": 1367452800000
          },
          "grade": "C",
          "score": 41
        },
        {
          "date": {
            "$date": 1350345600000
          },
          "grade": "A",
          "score": 6
        },
        {
          "date": {
            "$date": 1318809600000
          },
          "grade": "A",
          "score": 2
        }
      ],
      "name": "Mom'S Fried Chicken",
      "restaurant_id": "40382900"
    },{
      "address": {
        "building": "117-18",
        "coord": [
          -73.832745,
          40.7149694
        ],
        "street": "Queens Boulevard",
        "zipcode": "11375"
      },
      "borough": "Queens",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1394668800000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1381190400000
          },
          "grade": "A",
          "score": 5
        },
        {
          "date": {
            "$date": 1346889600000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1329350400000
          },
          "grade": "A",
          "score": 13
        }
      ],
      "name": "Cobblestone Pub",
      "restaurant_id": "40383003"
    },{
      "address": {
        "building": "113",
        "coord": [
          -73.99849569999999,
          40.7176369
        ],
        "street": "Mulberry Street",
        "zipcode": "10013"
      },
      "borough": "Manhattan",
      "cuisine": "Italian",
      "grades": [
        {
          "date": {
            "$date": 1391558400000
          },
          "grade": "A",
          "score": 2
        },
        {
          "date": {
            "$date": 1378425600000
          },
          "grade": "B",
          "score": 27
        },
        {
          "date": {
            "$date": 1362700800000
          },
          "grade": "C",
          "score": 30
        },
        {
          "date": {
            "$date": 1347408000000
          },
          "grade": "B",
          "score": 27
        },
        {
          "date": {
            "$date": 1334707200000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1320796800000
          },
          "grade": "B",
          "score": 21
        },
        {
          "date": {
            "$date": 1309132800000
          },
          "grade": "C",
          "score": 35
        }
      ],
      "name": "Cha Cha'S Backyard Garden Bar & Cafe",
      "restaurant_id": "40383009"
    },{
      "address": {
        "building": "8902",
        "coord": [
          -74.0321699,
          40.6213165
        ],
        "street": "3 Avenue",
        "zipcode": "11209"
      },
      "borough": "Brooklyn",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1399507200000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1367366400000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1331078400000
          },
          "grade": "A",
          "score": 10
        }
      ],
      "name": "O'Sullivan'S Pub",
      "restaurant_id": "40383033"
    },{
      "address": {
        "building": "62",
        "coord": [
          -73.997387,
          40.722304
        ],
        "street": "Spring Street",
        "zipcode": "10012"
      },
      "borough": "Manhattan",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1410220800000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1397606400000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1377475200000
          },
          "grade": "B",
          "score": 14
        },
        {
          "date": {
            "$date": 1361404800000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1344902400000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1333324800000
          },
          "grade": "A",
          "score": 10
        }
      ],
      "name": "Spring St. Natural Restaurant",
      "restaurant_id": "40383040"
    },{
      "address": {
        "building": "8606",
        "coord": [
          -74.0263399,
          40.6213638
        ],
        "street": "5 Avenue",
        "zipcode": "11209"
      },
      "borough": "Brooklyn",
      "cuisine": "Pizza",
      "grades": [
        {
          "date": {
            "$date": 1407542400000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1393977600000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1379376000000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1347840000000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1317945600000
          },
          "grade": "A",
          "score": 5
        }
      ],
      "name": "Pizza Wagon",
      "restaurant_id": "40383044"
    },{
      "address": {
        "building": "268",
        "coord": [
          -73.98357949999999,
          40.7281865
        ],
        "street": "East   10 Street",
        "zipcode": "10009"
      },
      "borough": "Manhattan",
      "cuisine": "Russian",
      "grades": [
        {
          "date": {
            "$date": 1418860800000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1396396800000
          },
          "grade": "B",
          "score": 18
        },
        {
          "date": {
            "$date": 1376352000000
          },
          "grade": "B",
          "score": 26
        },
        {
          "date": {
            "$date": 1354752000000
          },
          "grade": "B",
          "score": 24
        }
      ],
      "name": "Russian Turkish Baths",
      "restaurant_id": "40383067"
    },{
      "address": {
        "building": "767",
        "coord": [
          -74.0079669,
          40.737446
        ],
        "street": "Washington Street",
        "zipcode": "10014"
      },
      "borough": "Manhattan",
      "cuisine": "Tex-Mex",
      "grades": [
        {
          "date": {
            "$date": 1421020800000
          },
          "grade": "A",
          "score": 6
        },
        {
          "date": {
            "$date": 1390435200000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1358985600000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1326931200000
          },
          "grade": "A",
          "score": 12
        }
      ],
      "name": "Tortilla Flats",
      "restaurant_id": "40383090"
    },{
      "address": {
        "building": "42-05",
        "coord": [
          -73.74848910000001,
          40.7683973
        ],
        "street": "235 Street",
        "zipcode": "11363"
      },
      "borough": "Queens",
      "cuisine": "Italian",
      "grades": [
        {
          "date": {
            "$date": 1403308800000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1386806400000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1365033600000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1318896000000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1310515200000
          },
          "grade": "B",
          "score": 18
        }
      ],
      "name": "Il Toscano Ristorante",
      "restaurant_id": "40383147"
    },{
      "address": {
        "building": "21516",
        "coord": [
          -73.7668394,
          40.760345
        ],
        "street": "Northern Boulevard",
        "zipcode": "11361"
      },
      "borough": "Queens",
      "cuisine": "Seafood",
      "grades": [
        {
          "date": {
            "$date": 1414627200000
          },
          "grade": "A",
          "score": 8
        },
        {
          "date": {
            "$date": 1396915200000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1379376000000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1362441600000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1337990400000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1325635200000
          },
          "grade": "A",
          "score": 13
        }
      ],
      "name": "Pier 25A Restaurant",
      "restaurant_id": "40383151"
    },{
      "address": {
        "building": "1555",
        "coord": [
          -73.9544887,
          40.7745702
        ],
        "street": "2 Avenue",
        "zipcode": "10028"
      },
      "borough": "Manhattan",
      "cuisine": "Italian",
      "grades": [
        {
          "date": {
            "$date": 1394582400000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1380067200000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1364947200000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1325635200000
          },
          "grade": "A",
          "score": 9
        }
      ],
      "name": "Sistina Restaurant",
      "restaurant_id": "40383262"
    },{
      "address": {
        "building": "20423",
        "coord": [
          -73.7608857,
          40.7204516
        ],
        "street": "Hillside Avenue",
        "zipcode": "11423"
      },
      "borough": "Queens",
      "cuisine": "Pizza",
      "grades": [
        {
          "date": {
            "$date": 1411430400000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1397260800000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1382400000000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1365724800000
          },
          "grade": "A",
          "score": 5
        },
        {
          "date": {
            "$date": 1330560000000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1319587200000
          },
          "grade": "A",
          "score": 4
        }
      ],
      "name": "Gaby'S Pizza",
      "restaurant_id": "40383281"
    },{
      "address": {
        "building": "149-58",
        "coord": [
          -73.81401,
          40.786803
        ],
        "street": "Cross Island Parkway",
        "zipcode": "11357"
      },
      "borough": "Queens",
      "cuisine": "Italian",
      "grades": [
        {
          "date": {
            "$date": 1417478400000
          },
          "grade": "A",
          "score": 4
        },
        {
          "date": {
            "$date": 1397692800000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1381795200000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1363132800000
          },
          "grade": "A",
          "score": 9
        }
      ],
      "name": "Verdi Restaurant",
      "restaurant_id": "40383284"
    },{
      "address": {
        "building": "29",
        "coord": [
          -74.0024972,
          40.7314926
        ],
        "street": "Cornelia Street",
        "zipcode": "10014"
      },
      "borough": "Manhattan",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1396396800000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1382400000000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1367798400000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1335139200000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1305244800000
          },
          "grade": "A",
          "score": 10
        }
      ],
      "name": "Cornelia Street Cafe",
      "restaurant_id": "40383354"
    },{
      "address": {
        "building": "155",
        "coord": [
          -73.9817017,
          40.7614715
        ],
        "street": "West   51 Street",
        "zipcode": "10019"
      },
      "borough": "Manhattan",
      "cuisine": "French",
      "grades": [
        {
          "date": {
            "$date": 1397088000000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1381276800000
          },
          "grade": "A",
          "score": 2
        },
        {
          "date": {
            "$date": 1363651200000
          },
          "grade": "A",
          "score": 3
        },
        {
          "date": {
            "$date": 1343692800000
          },
          "grade": "B",
          "score": 27
        },
        {
          "date": {
            "$date": 1330300800000
          },
          "grade": "A",
          "score": 13
        }
      ],
      "name": "Le Bernardin",
      "restaurant_id": "40383464"
    },{
      "address": {
        "building": "69",
        "coord": [
          -74.0122263,
          40.7058609
        ],
        "street": "New Street",
        "zipcode": "10004"
      },
      "borough": "Manhattan",
      "cuisine": "Pizza",
      "grades": [
        {
          "date": {
            "$date": 1418947200000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1403740800000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1369785600000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1337644800000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1326240000000
          },
          "grade": "A",
          "score": 11
        }
      ],
      "name": "The Grotto",
      "restaurant_id": "40383496"
    },{
      "address": {
        "building": "1412",
        "coord": [
          -73.9314602,
          40.6704278
        ],
        "street": "St Johns Place",
        "zipcode": "11213"
      },
      "borough": "Brooklyn",
      "cuisine": "Pizza/Italian",
      "grades": [
        {
          "date": {
            "$date": 1411430400000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1379548800000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1349827200000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1320105600000
          },
          "grade": "A",
          "score": 7
        }
      ],
      "name": "Tony'S Pizzeria",
      "restaurant_id": "40383506"
    },{
      "address": {
        "building": "235",
        "coord": [
          -73.953448,
          40.777126
        ],
        "street": "East   84 Street",
        "zipcode": "10028"
      },
      "borough": "Manhattan",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1407888000000
          },
          "grade": "A",
          "score": 4
        },
        {
          "date": {
            "$date": 1377129600000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1358208000000
          },
          "grade": "B",
          "score": 25
        },
        {
          "date": {
            "$date": 1339545600000
          },
          "grade": "A",
          "score": 13
        }
      ],
      "name": "Brandy'S Piano Bar",
      "restaurant_id": "40383511"
    },{
      "address": {
        "building": "2073",
        "coord": [
          -74.158427,
          40.626607
        ],
        "street": "Forest Avenue",
        "zipcode": "10303"
      },
      "borough": "Staten Island",
      "cuisine": "Spanish",
      "grades": [
        {
          "date": {
            "$date": 1413244800000
          },
          "grade": "B",
          "score": 19
        },
        {
          "date": {
            "$date": 1389139200000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1366761600000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1344902400000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1328745600000
          },
          "grade": "A",
          "score": 13
        }
      ],
      "name": "Real Madrid Restaurant",
      "restaurant_id": "40383609"
    },{
      "address": {
        "building": "1825",
        "coord": [
          -74.1268188,
          40.5651822
        ],
        "street": "North Railroad Avenue",
        "zipcode": "10306"
      },
      "borough": "Staten Island",
      "cuisine": "Italian",
      "grades": [
        {
          "date": {
            "$date": 1403568000000
          },
          "grade": "A",
          "score": 8
        },
        {
          "date": {
            "$date": 1364947200000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1333152000000
          },
          "grade": "A",
          "score": 13
        }
      ],
      "name": "Canlon'S Restaurant",
      "restaurant_id": "40383737"
    },{
      "address": {
        "building": "70",
        "coord": [
          -73.975144,
          40.675441
        ],
        "street": "7 Avenue",
        "zipcode": "11217"
      },
      "borough": "Brooklyn",
      "cuisine": "Bakery",
      "grades": [
        {
          "date": {
            "$date": 1416960000000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1386720000000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1354838400000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1324339200000
          },
          "grade": "A",
          "score": 12
        }
      ],
      "name": "Cousin John'S Cafe And Bakery",
      "restaurant_id": "40383763"
    },{
      "address": {
        "building": "517",
        "coord": [
          -73.97257479999999,
          40.7855756
        ],
        "street": "Columbus Avenue",
        "zipcode": "10024"
      },
      "borough": "Manhattan",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1414022400000
          },
          "grade": "B",
          "score": 14
        },
        {
          "date": {
            "$date": 1379635200000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1349049600000
          },
          "grade": "A",
          "score": 8
        },
        {
          "date": {
            "$date": 1337299200000
          },
          "grade": "A",
          "score": 5
        },
        {
          "date": {
            "$date": 1324425600000
          },
          "grade": "A",
          "score": 6
        }
      ],
      "name": "Jackson Hole",
      "restaurant_id": "40383799"
    },{
      "address": {
        "building": "5977",
        "coord": [
          -73.8982704,
          40.8896923
        ],
        "street": "Broadway",
        "zipcode": "10463"
      },
      "borough": "Bronx",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1401408000000
          },
          "grade": "A",
          "score": 6
        },
        {
          "date": {
            "$date": 1366848000000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1353369600000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1338336000000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1324252800000
          },
          "grade": "B",
          "score": 18
        }
      ],
      "name": "Short Stop Restaurant",
      "restaurant_id": "40383819"
    },{
      "address": {
        "building": "256",
        "coord": [
          -73.984752,
          40.763105
        ],
        "street": "West   52 Street",
        "zipcode": "10019"
      },
      "borough": "Manhattan",
      "cuisine": "Russian",
      "grades": [
        {
          "date": {
            "$date": 1419897600000
          },
          "grade": "Z",
          "score": 40
        },
        {
          "date": {
            "$date": 1401321600000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1379980800000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1360627200000
          },
          "grade": "B",
          "score": 18
        },
        {
          "date": {
            "$date": 1336694400000
          },
          "grade": "A",
          "score": 6
        }
      ],
      "name": "Russian Samovar",
      "restaurant_id": "40383825"
    },{
      "address": {
        "building": "4027",
        "coord": [
          -73.829714,
          40.7587648
        ],
        "street": "Main Street",
        "zipcode": "11354"
      },
      "borough": "Queens",
      "cuisine": "Pizza",
      "grades": [
        {
          "date": {
            "$date": 1415836800000
          },
          "grade": "B",
          "score": 16
        },
        {
          "date": {
            "$date": 1397606400000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1381363200000
          },
          "grade": "A",
          "score": 5
        },
        {
          "date": {
            "$date": 1362700800000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1345593600000
          },
          "grade": "C",
          "score": 44
        }
      ],
      "name": "Barone Pizza",
      "restaurant_id": "40383836"
    },{
      "address": {
        "building": "1674",
        "coord": [
          -73.982872,
          40.76280939999999
        ],
        "street": "Broadway",
        "zipcode": "10019"
      },
      "borough": "Manhattan",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1392854400000
          },
          "grade": "A",
          "score": 8
        },
        {
          "date": {
            "$date": 1359072000000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1324944000000
          },
          "grade": "A",
          "score": 10
        }
      ],
      "name": "Flash Dancers",
      "restaurant_id": "40383931"
    },{
      "address": {
        "building": "3115",
        "coord": [
          -74.16303719999999,
          40.60731
        ],
        "street": "Victory Boulevard",
        "zipcode": "10314"
      },
      "borough": "Staten Island",
      "cuisine": "Pizza",
      "grades": [
        {
          "date": {
            "$date": 1407369600000
          },
          "grade": "B",
          "score": 21
        },
        {
          "date": {
            "$date": 1389052800000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1349740800000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1318896000000
          },
          "grade": "A",
          "score": 4
        }
      ],
      "name": "Pizza D'Oro",
      "restaurant_id": "40383945"
    },{
      "address": {
        "building": "819",
        "coord": [
          -73.88966429999999,
          40.6578505
        ],
        "street": "Pennsylvania Avenue",
        "zipcode": "11207"
      },
      "borough": "Brooklyn",
      "cuisine": "Hamburgers",
      "grades": [
        {
          "date": {
            "$date": 1398297600000
          },
          "grade": "A",
          "score": 3
        },
        {
          "date": {
            "$date": 1381363200000
          },
          "grade": "A",
          "score": 4
        },
        {
          "date": {
            "$date": 1367971200000
          },
          "grade": "A",
          "score": 2
        },
        {
          "date": {
            "$date": 1353628800000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1330905600000
          },
          "grade": "B",
          "score": 19
        },
        {
          "date": {
            "$date": 1316649600000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1313452800000
          },
          "grade": "P",
          "score": 3
        }
      ],
      "name": "Mcdonald'S",
      "restaurant_id": "40384036"
    },{
      "address": {
        "building": "300",
        "coord": [
          -73.9809789,
          40.7802374
        ],
        "street": "Amsterdam Avenue",
        "zipcode": "10023"
      },
      "borough": "Manhattan",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1392854400000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1374451200000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1340582400000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1321401600000
          },
          "grade": "B",
          "score": 22
        },
        {
          "date": {
            "$date": 1303776000000
          },
          "grade": "A",
          "score": 12
        }
      ],
      "name": "Josie'S Restaurant",
      "restaurant_id": "40384100"
    },{
      "address": {
        "building": "57-29",
        "coord": [
          -73.82567900000001,
          40.7455975
        ],
        "street": "Main Street",
        "zipcode": "11355"
      },
      "borough": "Queens",
      "cuisine": "Pizza/Italian",
      "grades": [
        {
          "date": {
            "$date": 1408579200000
          },
          "grade": "A",
          "score": 6
        },
        {
          "date": {
            "$date": 1391385600000
          },
          "grade": "B",
          "score": 19
        },
        {
          "date": {
            "$date": 1365811200000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1350432000000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1319241600000
          },
          "grade": "A",
          "score": 10
        }
      ],
      "name": "Phil & Sons Restaurant & Pizzeria",
      "restaurant_id": "40384115"
    },{
      "address": {
        "building": "167",
        "coord": [
          -73.99735199999999,
          40.719931
        ],
        "street": "Mulberry Street",
        "zipcode": "10013"
      },
      "borough": "Manhattan",
      "cuisine": "Italian",
      "grades": [
        {
          "date": {
            "$date": 1414022400000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1394841600000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1375920000000
          },
          "grade": "A",
          "score": 6
        },
        {
          "date": {
            "$date": 1342051200000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1325635200000
          },
          "grade": "A",
          "score": 12
        }
      ],
      "name": "La Mela Restaurant",
      "restaurant_id": "40384188"
    },{
      "address": {
        "building": "3",
        "coord": [
          -73.97746699999999,
          40.757261
        ],
        "street": "East   48 Street",
        "zipcode": "10017"
      },
      "borough": "Manhattan",
      "cuisine": "Irish",
      "grades": [
        {
          "date": {
            "$date": 1399939200000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1382572800000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1362700800000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1340150400000
          },
          "grade": "B",
          "score": 20
        },
        {
          "date": {
            "$date": 1320278400000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1306368000000
          },
          "grade": "A",
          "score": 13
        }
      ],
      "name": "Pj Morans",
      "restaurant_id": "40384222"
    },{
      "address": {
        "building": "200-07",
        "coord": [
          -73.7890858,
          40.7699617
        ],
        "street": "32 Avenue",
        "zipcode": "11361"
      },
      "borough": "Queens",
      "cuisine": "Caf\u00e9/Coffee/Tea",
      "grades": [
        {
          "date": {
            "$date": 1405036800000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1374019200000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1343952000000
          },
          "grade": "A",
          "score": 5
        },
        {
          "date": {
            "$date": 1331164800000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1318464000000
          },
          "grade": "A",
          "score": 11
        }
      ],
      "name": "Omega Coffee Shop",
      "restaurant_id": "40384323"
    },{
      "address": {
        "building": "77",
        "coord": [
          -73.9868393,
          40.73691240000001
        ],
        "street": "Irving Place",
        "zipcode": "10003"
      },
      "borough": "Manhattan",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1410912000000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1398902400000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1363824000000
          },
          "grade": "A",
          "score": 6
        },
        {
          "date": {
            "$date": 1332288000000
          },
          "grade": "A",
          "score": 5
        },
        {
          "date": {
            "$date": 1321401600000
          },
          "grade": "A",
          "score": 9
        }
      ],
      "name": "Friend Of A Farmer",
      "restaurant_id": "40384340"
    },{
      "address": {
        "building": "269",
        "coord": [
          -73.9880305,
          40.7591348
        ],
        "street": "West 45 Street",
        "zipcode": "10036"
      },
      "borough": "Manhattan",
      "cuisine": "Steak",
      "grades": [
        {
          "date": {
            "$date": 1403913600000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1389398400000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1370649600000
          },
          "grade": "A",
          "score": 8
        },
        {
          "date": {
            "$date": 1333411200000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1317254400000
          },
          "grade": "A",
          "score": 12
        }
      ],
      "name": "Frankie & Johnnies Steakhouse",
      "restaurant_id": "40384421"
    },{
      "address": {
        "building": "7410",
        "coord": [
          -74.02778909999999,
          40.6318755
        ],
        "street": "3 Avenue",
        "zipcode": "11209"
      },
      "borough": "Brooklyn",
      "cuisine": "Spanish",
      "grades": [
        {
          "date": {
            "$date": 1398211200000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1361232000000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1329955200000
          },
          "grade": "A",
          "score": 10
        }
      ],
      "name": "Sancho'S Restaurant",
      "restaurant_id": "40384441"
    },{
      "address": {
        "building": "3767",
        "coord": [
          -73.8696562,
          40.7501494
        ],
        "street": "Junction Boulevard",
        "zipcode": "11368"
      },
      "borough": "Queens",
      "cuisine": "Pizza",
      "grades": [
        {
          "date": {
            "$date": 1393459200000
          },
          "grade": "A",
          "score": 2
        },
        {
          "date": {
            "$date": 1377648000000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1360540800000
          },
          "grade": "A",
          "score": 8
        },
        {
          "date": {
            "$date": 1344988800000
          },
          "grade": "C",
          "score": 31
        },
        {
          "date": {
            "$date": 1331164800000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1319500800000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1304985600000
          },
          "grade": "A",
          "score": 8
        }
      ],
      "name": "Dream Pizza",
      "restaurant_id": "40384458"
    },{
      "address": {
        "building": "7407",
        "coord": [
          -74.0272951,
          40.6318285
        ],
        "street": "3 Avenue",
        "zipcode": "11209"
      },
      "borough": "Brooklyn",
      "cuisine": "Indian",
      "grades": [
        {
          "date": {
            "$date": 1418774400000
          },
          "grade": "Z",
          "score": 15
        },
        {
          "date": {
            "$date": 1403136000000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1380672000000
          },
          "grade": "B",
          "score": 16
        },
        {
          "date": {
            "$date": 1365984000000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1343001600000
          },
          "grade": "A",
          "score": 6
        },
        {
          "date": {
            "$date": 1324339200000
          },
          "grade": "A",
          "score": 12
        }
      ],
      "name": "India Passage Restaurant",
      "restaurant_id": "40384479"
    },{
      "address": {
        "building": "3092",
        "coord": [
          -73.867181,
          40.8705092
        ],
        "street": "White Plains Road",
        "zipcode": "10467"
      },
      "borough": "Bronx",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1399420800000
          },
          "grade": "A",
          "score": 8
        },
        {
          "date": {
            "$date": 1367452800000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1354147200000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1334707200000
          },
          "grade": "B",
          "score": 16
        },
        {
          "date": {
            "$date": 1316649600000
          },
          "grade": "B",
          "score": 19
        }
      ],
      "name": "Burger Barn Restaurant",
      "restaurant_id": "40384486"
    },{
      "address": {
        "building": "623",
        "coord": [
          -73.95097100000001,
          40.723595
        ],
        "street": "Manhattan Avenue",
        "zipcode": "11222"
      },
      "borough": "Brooklyn",
      "cuisine": "Polish",
      "grades": [
        {
          "date": {
            "$date": 1418774400000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1396396800000
          },
          "grade": "B",
          "score": 24
        },
        {
          "date": {
            "$date": 1360022400000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1329264000000
          },
          "grade": "A",
          "score": 5
        }
      ],
      "name": "Irene'S Place",
      "restaurant_id": "40384507"
    },{
      "address": {
        "building": "4415",
        "coord": [
          -73.8324138,
          40.75341179999999
        ],
        "street": "College Point Boulevard",
        "zipcode": "11355"
      },
      "borough": "Queens",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1399507200000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1365552000000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1346716800000
          },
          "grade": "B",
          "score": 17
        },
        {
          "date": {
            "$date": 1334016000000
          },
          "grade": "C",
          "score": 38
        },
        {
          "date": {
            "$date": 1321833600000
          },
          "grade": "B",
          "score": 15
        },
        {
          "date": {
            "$date": 1309996800000
          },
          "grade": "B",
          "score": 23
        }
      ],
      "name": "Kanes Deli Diner",
      "restaurant_id": "40384525"
    },{
      "address": {
        "building": "144",
        "coord": [
          -73.9871139,
          40.7290155
        ],
        "street": "Second Avenue",
        "zipcode": "10003"
      },
      "borough": "Manhattan",
      "cuisine": "Eastern European",
      "grades": [
        {
          "date": {
            "$date": 1421366400000
          },
          "grade": "A",
          "score": 5
        },
        {
          "date": {
            "$date": 1404086400000
          },
          "grade": "B",
          "score": 21
        },
        {
          "date": {
            "$date": 1389571200000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1372636800000
          },
          "grade": "B",
          "score": 17
        },
        {
          "date": {
            "$date": 1358208000000
          },
          "grade": "B",
          "score": 25
        },
        {
          "date": {
            "$date": 1337558400000
          },
          "grade": "B",
          "score": 15
        }
      ],
      "name": "Veselka Restaurant",
      "restaurant_id": "40384528"
    },{
      "address": {
        "building": "900",
        "coord": [
          -73.88898209999999,
          40.65584459999999
        ],
        "street": "Pennsylvania Avenue",
        "zipcode": "11207"
      },
      "borough": "Brooklyn",
      "cuisine": "Hamburgers",
      "grades": [
        {
          "date": {
            "$date": 1402272000000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1371772800000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1359417600000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1326326400000
          },
          "grade": "A",
          "score": 10
        }
      ],
      "name": "White Castle",
      "restaurant_id": "40384575"
    },{
      "address": {
        "building": "1916",
        "coord": [
          -73.9541457,
          40.6102692
        ],
        "street": "Kings Highway",
        "zipcode": "11229"
      },
      "borough": "Brooklyn",
      "cuisine": "Pizza",
      "grades": [
        {
          "date": {
            "$date": 1410912000000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1394409600000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1375920000000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1360540800000
          },
          "grade": "C",
          "score": 41
        },
        {
          "date": {
            "$date": 1334188800000
          },
          "grade": "A",
          "score": 11
        }
      ],
      "name": "J & R Pizza",
      "restaurant_id": "40384662"
    },{
      "address": {
        "building": "414",
        "coord": [
          -73.9935579,
          40.7585089
        ],
        "street": "West   42 Street",
        "zipcode": "10036"
      },
      "borough": "Manhattan",
      "cuisine": "French",
      "grades": [
        {
          "date": {
            "$date": 1418774400000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1403913600000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1383696000000
          },
          "grade": "C",
          "score": 29
        },
        {
          "date": {
            "$date": 1364947200000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1325116800000
          },
          "grade": "A",
          "score": 10
        }
      ],
      "name": "Chez Josephine",
      "restaurant_id": "40384671"
    },{
      "address": {
        "building": "164",
        "coord": [
          -73.9816053,
          40.7441474
        ],
        "street": "Lexington Avenue",
        "zipcode": "10016"
      },
      "borough": "Manhattan",
      "cuisine": "Japanese",
      "grades": [
        {
          "date": {
            "$date": 1417478400000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1401840000000
          },
          "grade": "B",
          "score": 19
        },
        {
          "date": {
            "$date": 1382918400000
          },
          "grade": "B",
          "score": 21
        },
        {
          "date": {
            "$date": 1365033600000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1330992000000
          },
          "grade": "A",
          "score": 11
        }
      ],
      "name": "Mishima Restaurant",
      "restaurant_id": "40384757"
    },{
      "address": {
        "building": "254-20",
        "coord": [
          -73.7128239,
          40.7363575
        ],
        "street": "Hillside Avenue",
        "zipcode": "11004"
      },
      "borough": "Queens",
      "cuisine": "Donuts",
      "grades": [
        {
          "date": {
            "$date": 1412985600000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1392249600000
          },
          "grade": "B",
          "score": 14
        },
        {
          "date": {
            "$date": 1376265600000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1344988800000
          },
          "grade": "A",
          "score": 13
        }
      ],
      "name": "Dunkin' Donuts/Baskin Robbins",
      "restaurant_id": "40384820"
    },{
      "address": {
        "building": "2169",
        "coord": [
          -73.90539919999999,
          40.7730596
        ],
        "street": "Steinway Street",
        "zipcode": "11105"
      },
      "borough": "Queens",
      "cuisine": "Bakery",
      "grades": [
        {
          "date": {
            "$date": 1414022400000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1380758400000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1368835200000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1354665600000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1339632000000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1322524800000
          },
          "grade": "A",
          "score": 8
        }
      ],
      "name": "Victory Sweet Shop",
      "restaurant_id": "40384920"
    },{
      "address": {
        "building": "6408",
        "coord": [
          -74.009029,
          40.631093
        ],
        "street": "Ft Hamilton Parkway",
        "zipcode": "11219"
      },
      "borough": "Brooklyn",
      "cuisine": "Italian",
      "grades": [
        {
          "date": {
            "$date": 1400112000000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1367884800000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1337040000000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1326153600000
          },
          "grade": "A",
          "score": 6
        },
        {
          "date": {
            "$date": 1316736000000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1309219200000
          },
          "grade": "B",
          "score": 15
        }
      ],
      "name": "Rocco'S Calamari",
      "restaurant_id": "40384961"
    },{
      "address": {
        "building": "228",
        "coord": [
          -73.98635039999999,
          40.7596825
        ],
        "street": "West   47 Street",
        "zipcode": "10036"
      },
      "borough": "Manhattan",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1410393600000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1397433600000
          },
          "grade": "B",
          "score": 15
        },
        {
          "date": {
            "$date": 1363910400000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1344816000000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1330992000000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1316736000000
          },
          "grade": "B",
          "score": 19
        }
      ],
      "name": "Cafe Edison",
      "restaurant_id": "40385000"
    },{
      "address": {
        "building": "141",
        "coord": [
          -73.993645,
          40.694843
        ],
        "street": "Montague Street",
        "zipcode": "11201"
      },
      "borough": "Brooklyn",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1418688000000
          },
          "grade": "Z",
          "score": 23
        },
        {
          "date": {
            "$date": 1403481600000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1384214400000
          },
          "grade": "B",
          "score": 18
        },
        {
          "date": {
            "$date": 1370995200000
          },
          "grade": "B",
          "score": 19
        },
        {
          "date": {
            "$date": 1356912000000
          },
          "grade": "B",
          "score": 19
        },
        {
          "date": {
            "$date": 1343606400000
          },
          "grade": "A",
          "score": 13
        }
      ],
      "name": "Grand Canyon",
      "restaurant_id": "40385051"
    },{
      "address": {
        "building": "7721",
        "coord": [
          -74.0283135,
          40.6294318
        ],
        "street": "3 Avenue",
        "zipcode": "11209"
      },
      "borough": "Brooklyn",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1397088000000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1382486400000
          },
          "grade": "A",
          "score": 2
        },
        {
          "date": {
            "$date": 1369008000000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1348531200000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1316649600000
          },
          "grade": "A",
          "score": 9
        }
      ],
      "name": "Cappuccino Cafe",
      "restaurant_id": "40385057"
    },{
      "address": {
        "building": "1571",
        "coord": [
          -74.1013145,
          40.5912425
        ],
        "street": "Richmond Road",
        "zipcode": "10304"
      },
      "borough": "Staten Island",
      "cuisine": "Italian",
      "grades": [
        {
          "date": {
            "$date": 1407974400000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1392768000000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1361318400000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1319155200000
          },
          "grade": "A",
          "score": 10
        }
      ],
      "name": "Carol'S Cafe",
      "restaurant_id": "40385065"
    },{
      "address": {
        "building": "178",
        "coord": [
          -73.985889,
          40.730473
        ],
        "street": "2 Avenue",
        "zipcode": "10003"
      },
      "borough": "Manhattan",
      "cuisine": "Mediterranean",
      "grades": [
        {
          "date": {
            "$date": 1412121600000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1377043200000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1363219200000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1339977600000
          },
          "grade": "A",
          "score": 11
        }
      ],
      "name": "Pangea Restaurant",
      "restaurant_id": "40385157"
    },{
      "address": {
        "building": "733",
        "coord": [
          -74.00834669999999,
          40.7362217
        ],
        "street": "Washington Street",
        "zipcode": "10014"
      },
      "borough": "Manhattan",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1414022400000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1389657600000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1364947200000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1348790400000
          },
          "grade": "C",
          "score": 0
        },
        {
          "date": {
            "$date": 1329264000000
          },
          "grade": "B",
          "score": 14
        }
      ],
      "name": "Automatic Slims",
      "restaurant_id": "40385161"
    },{
      "address": {
        "building": "176",
        "coord": [
          -73.98384999999999,
          40.7290629
        ],
        "street": "1 Avenue",
        "zipcode": "10009"
      },
      "borough": "Manhattan",
      "cuisine": "Bakery",
      "grades": [
        {
          "date": {
            "$date": 1406764800000
          },
          "grade": "A",
          "score": 5
        },
        {
          "date": {
            "$date": 1392768000000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1357516800000
          },
          "grade": "A",
          "score": 2
        },
        {
          "date": {
            "$date": 1339632000000
          },
          "grade": "A",
          "score": 2
        },
        {
          "date": {
            "$date": 1326240000000
          },
          "grade": "C",
          "score": 52
        }
      ],
      "name": "De Robertis Pastry Shop",
      "restaurant_id": "40385231"
    },{
      "address": {
        "building": "238",
        "coord": [
          -73.98789909999999,
          40.7292983
        ],
        "street": "East    9 Street",
        "zipcode": "10003"
      },
      "borough": "Manhattan",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1417996800000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1404259200000
          },
          "grade": "A",
          "score": 3
        },
        {
          "date": {
            "$date": 1388620800000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1364947200000
          },
          "grade": "B",
          "score": 15
        },
        {
          "date": {
            "$date": 1344902400000
          },
          "grade": "C",
          "score": 31
        },
        {
          "date": {
            "$date": 1332288000000
          },
          "grade": "B",
          "score": 14
        }
      ],
      "name": "Cloister Cafe",
      "restaurant_id": "40385461"
    },{
      "address": {
        "building": "991",
        "coord": [
          -73.964379,
          40.7567359
        ],
        "street": "First Avenue",
        "zipcode": "10022"
      },
      "borough": "Manhattan",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1394150400000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1379894400000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1358985600000
          },
          "grade": "B",
          "score": 16
        },
        {
          "date": {
            "$date": 1338854400000
          },
          "grade": "B",
          "score": 26
        },
        {
          "date": {
            "$date": 1326326400000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1314230400000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1302652800000
          },
          "grade": "B",
          "score": 23
        }
      ],
      "name": "Jimbo'S Hamburger Place",
      "restaurant_id": "40385515"
    },{
      "address": {
        "building": "2210",
        "coord": [
          -74.1369752,
          40.6118922
        ],
        "street": "Victory Boulevard",
        "zipcode": "10314"
      },
      "borough": "Staten Island",
      "cuisine": "Pizza",
      "grades": [
        {
          "date": {
            "$date": 1420588800000
          },
          "grade": "A",
          "score": 8
        },
        {
          "date": {
            "$date": 1386201600000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1366848000000
          },
          "grade": "B",
          "score": 17
        }
      ],
      "name": "Dairy Palace",
      "restaurant_id": "40385543"
    },{
      "address": {
        "building": "200",
        "coord": [
          -73.9804898,
          40.6768216
        ],
        "street": "5 Avenue",
        "zipcode": "11217"
      },
      "borough": "Brooklyn",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1404345600000
          },
          "grade": "B",
          "score": 26
        },
        {
          "date": {
            "$date": 1383091200000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1363824000000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1344297600000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1331251200000
          },
          "grade": "C",
          "score": 42
        },
        {
          "date": {
            "$date": 1318464000000
          },
          "grade": "A",
          "score": 13
        }
      ],
      "name": "200 Fifth Avenue Restaurant & Sports Bar",
      "restaurant_id": "40385555"
    },{
      "address": {
        "building": "1589",
        "coord": [
          -73.953676,
          40.775695
        ],
        "street": "Second Avenue",
        "zipcode": "10028"
      },
      "borough": "Manhattan",
      "cuisine": "Jewish/Kosher",
      "grades": [
        {
          "date": {
            "$date": 1419379200000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1383782400000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1366156800000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1330300800000
          },
          "grade": "A",
          "score": 5
        }
      ],
      "name": "Va Bene",
      "restaurant_id": "40385575"
    },{
      "address": {
        "building": "361",
        "coord": [
          -73.98997,
          40.760897
        ],
        "street": "West   46 Street",
        "zipcode": "10036"
      },
      "borough": "Manhattan",
      "cuisine": "Italian",
      "grades": [
        {
          "date": {
            "$date": 1405900800000
          },
          "grade": "A",
          "score": 2
        },
        {
          "date": {
            "$date": 1383177600000
          },
          "grade": "A",
          "score": 0
        },
        {
          "date": {
            "$date": 1348444800000
          },
          "grade": "A",
          "score": 8
        },
        {
          "date": {
            "$date": 1318291200000
          },
          "grade": "A",
          "score": 0
        }
      ],
      "name": "Lattanzi",
      "restaurant_id": "40385580"
    },{
      "address": {
        "building": "171-01",
        "coord": [
          -73.7956093,
          40.75835319999999
        ],
        "street": "Northern Boulevard",
        "zipcode": "11358"
      },
      "borough": "Queens",
      "cuisine": "Pizza",
      "grades": [
        {
          "date": {
            "$date": 1413331200000
          },
          "grade": "Z",
          "score": 23
        },
        {
          "date": {
            "$date": 1380585600000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1365379200000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1338854400000
          },
          "grade": "B",
          "score": 15
        }
      ],
      "name": "Pizza Garden",
      "restaurant_id": "40385584"
    },{
      "address": {
        "building": "1305",
        "coord": [
          -73.9555364,
          40.7849229
        ],
        "street": "Madison Avenue",
        "zipcode": "10128"
      },
      "borough": "Manhattan",
      "cuisine": "Seafood",
      "grades": [
        {
          "date": {
            "$date": 1410739200000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1379721600000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1345680000000
          },
          "grade": "A",
          "score": 8
        },
        {
          "date": {
            "$date": 1327968000000
          },
          "grade": "A",
          "score": 5
        },
        {
          "date": {
            "$date": 1318464000000
          },
          "grade": "A",
          "score": 9
        }
      ],
      "name": "Island",
      "restaurant_id": "40385587"
    },{
      "address": {
        "building": "19",
        "coord": [
          -73.9763347,
          40.7575454
        ],
        "street": "East   49 Street",
        "zipcode": "10017"
      },
      "borough": "Manhattan",
      "cuisine": "Japanese",
      "grades": [
        {
          "date": {
            "$date": 1408060800000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1387411200000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1370304000000
          },
          "grade": "C",
          "score": 40
        },
        {
          "date": {
            "$date": 1347321600000
          },
          "grade": "B",
          "score": 27
        },
        {
          "date": {
            "$date": 1334707200000
          },
          "grade": "B",
          "score": 21
        },
        {
          "date": {
            "$date": 1320019200000
          },
          "grade": "A",
          "score": 12
        }
      ],
      "name": "Sushiden",
      "restaurant_id": "40385606"
    },{
      "address": {
        "building": "2285",
        "coord": [
          -73.91255009999999,
          40.7743581
        ],
        "street": "31 Street",
        "zipcode": "11105"
      },
      "borough": "Queens",
      "cuisine": "Bakery",
      "grades": [
        {
          "date": {
            "$date": 1401148800000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1370304000000
          },
          "grade": "A",
          "score": 5
        },
        {
          "date": {
            "$date": 1356912000000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1343001600000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1330473600000
          },
          "grade": "A",
          "score": 7
        }
      ],
      "name": "Lefkos Pygos Cafe",
      "restaurant_id": "40385657"
    },{
      "address": {
        "building": "3371",
        "coord": [
          -73.8462304,
          40.8761099
        ],
        "street": "Eastchester Road",
        "zipcode": "10469"
      },
      "borough": "Bronx",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1413331200000
          },
          "grade": "B",
          "score": 20
        },
        {
          "date": {
            "$date": 1398729600000
          },
          "grade": "A",
          "score": 5
        },
        {
          "date": {
            "$date": 1383091200000
          },
          "grade": "B",
          "score": 16
        },
        {
          "date": {
            "$date": 1349308800000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1334880000000
          },
          "grade": "A",
          "score": 13
        }
      ],
      "name": "Eastwood Manor",
      "restaurant_id": "40385680"
    },{
      "address": {
        "building": "378",
        "coord": [
          -73.99556,
          40.748852
        ],
        "street": "8 Avenue",
        "zipcode": "10001"
      },
      "borough": "Manhattan",
      "cuisine": "Italian",
      "grades": [
        {
          "date": {
            "$date": 1401926400000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1370563200000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1355788800000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1338508800000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1323043200000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1308700800000
          },
          "grade": "A",
          "score": 13
        }
      ],
      "name": "Salumeria Beillese/ Biricchino Rest",
      "restaurant_id": "40385693"
    },{
      "address": {
        "building": "69",
        "coord": [
          -73.97574639999999,
          40.687295
        ],
        "street": "Lafayette Avenue",
        "zipcode": "11217"
      },
      "borough": "Brooklyn",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1398211200000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1364947200000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1346716800000
          },
          "grade": "B",
          "score": 16
        },
        {
          "date": {
            "$date": 1328572800000
          },
          "grade": "B",
          "score": 17
        },
        {
          "date": {
            "$date": 1319068800000
          },
          "grade": "C",
          "score": 30
        }
      ],
      "name": "Academy Restauraunt",
      "restaurant_id": "40385767"
    },{
      "address": {
        "building": "220",
        "coord": [
          -73.9917184,
          40.6979881
        ],
        "street": "Cadman Plaza West",
        "zipcode": "11201"
      },
      "borough": "Brooklyn",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1396915200000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1383782400000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1382486400000
          },
          "grade": "P",
          "score": 5
        },
        {
          "date": {
            "$date": 1367884800000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1352937600000
          },
          "grade": "B",
          "score": 16
        },
        {
          "date": {
            "$date": 1334620800000
          },
          "grade": "B",
          "score": 18
        },
        {
          "date": {
            "$date": 1322006400000
          },
          "grade": "C",
          "score": 36
        },
        {
          "date": {
            "$date": 1308787200000
          },
          "grade": "A",
          "score": 13
        }
      ],
      "name": "Park Plaza Restaurant",
      "restaurant_id": "40385774"
    },{
      "address": {
        "building": "233",
        "coord": [
          -73.9765199,
          40.7452545
        ],
        "street": "East   34 Street",
        "zipcode": "10016"
      },
      "borough": "Manhattan",
      "cuisine": "Italian",
      "grades": [
        {
          "date": {
            "$date": 1421452800000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1404172800000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1371600000000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1357603200000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1334620800000
          },
          "grade": "A",
          "score": 10
        }
      ],
      "name": "Trattoria Alba",
      "restaurant_id": "40385816"
    },{
      "address": {
        "building": "132",
        "coord": [
          -73.9772263,
          40.7493346
        ],
        "street": "East 39 Street",
        "zipcode": "10016"
      },
      "borough": "Manhattan",
      "cuisine": "Italian",
      "grades": [
        {
          "date": {
            "$date": 1415232000000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1398297600000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1370908800000
          },
          "grade": "B",
          "score": 24
        },
        {
          "date": {
            "$date": 1346889600000
          },
          "grade": "B",
          "score": 19
        },
        {
          "date": {
            "$date": 1332892800000
          },
          "grade": "A",
          "score": 13
        }
      ],
      "name": "Sam'S Place",
      "restaurant_id": "40385852"
    },{
      "address": {
        "building": "829",
        "coord": [
          -73.98164460000001,
          40.7632783
        ],
        "street": "7 Avenue",
        "zipcode": "10019"
      },
      "borough": "Manhattan",
      "cuisine": "Pizza",
      "grades": [
        {
          "date": {
            "$date": 1410480000000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1397001600000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1380499200000
          },
          "grade": "A",
          "score": 5
        },
        {
          "date": {
            "$date": 1347580800000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1317168000000
          },
          "grade": "A",
          "score": 11
        }
      ],
      "name": "Ray'S Pizza",
      "restaurant_id": "40385873"
    },{
      "address": {
        "building": "9404",
        "coord": [
          -74.031194,
          40.616655
        ],
        "street": "Fourth Avenue",
        "zipcode": "11209"
      },
      "borough": "Brooklyn",
      "cuisine": "Steak",
      "grades": [
        {
          "date": {
            "$date": 1415232000000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1397606400000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1377129600000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1360627200000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1340928000000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1326153600000
          },
          "grade": "A",
          "score": 10
        }
      ],
      "name": "Hunter'S Steak & Ale House",
      "restaurant_id": "40385885"
    },{
      "address": {
        "building": "15",
        "coord": [
          -73.8429171,
          40.8411578
        ],
        "street": "Westchester Square",
        "zipcode": "10461"
      },
      "borough": "Bronx",
      "cuisine": "Pizza/Italian",
      "grades": [
        {
          "date": {
            "$date": 1410566400000
          },
          "grade": "A",
          "score": 3
        },
        {
          "date": {
            "$date": 1398902400000
          },
          "grade": "A",
          "score": 2
        },
        {
          "date": {
            "$date": 1382572800000
          },
          "grade": "A",
          "score": 0
        },
        {
          "date": {
            "$date": 1348444800000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1336608000000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1323734400000
          },
          "grade": "A",
          "score": 7
        }
      ],
      "name": "Ljubo'S Pizzeria",
      "restaurant_id": "40385955"
    },{
      "address": {
        "building": "921",
        "coord": [
          -74.1485484,
          40.6248044
        ],
        "street": "Richmond Avenue",
        "zipcode": "10314"
      },
      "borough": "Staten Island",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1421280000000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1400544000000
          },
          "grade": "B",
          "score": 20
        },
        {
          "date": {
            "$date": 1379462400000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1365033600000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1340841600000
          },
          "grade": "A",
          "score": 12
        }
      ],
      "name": "Dakota Diner",
      "restaurant_id": "40385974"
    },{
      "address": {
        "building": "1226",
        "coord": [
          -73.96160050000002,
          40.7639308
        ],
        "street": "Second Avenue",
        "zipcode": "10065"
      },
      "borough": "Manhattan",
      "cuisine": "Italian",
      "grades": [
        {
          "date": {
            "$date": 1417564800000
          },
          "grade": "Z",
          "score": 19
        },
        {
          "date": {
            "$date": 1395273600000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1372636800000
          },
          "grade": "B",
          "score": 23
        },
        {
          "date": {
            "$date": 1348531200000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1332720000000
          },
          "grade": "A",
          "score": 13
        }
      ],
      "name": "Primola Restaurant",
      "restaurant_id": "40386001"
    },{
      "address": {
        "building": "23",
        "coord": [
          -74.1504413,
          40.5493122
        ],
        "street": "Nelson Avenue",
        "zipcode": "10308"
      },
      "borough": "Staten Island",
      "cuisine": "Japanese",
      "grades": [
        {
          "date": {
            "$date": 1416960000000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1400198400000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1378339200000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1362441600000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1334188800000
          },
          "grade": "A",
          "score": 12
        }
      ],
      "name": "Arirang Hibachi Steak House",
      "restaurant_id": "40386058"
    },{
      "address": {
        "building": "3636",
        "coord": [
          -73.8421735,
          40.8794229
        ],
        "street": "Boston Road",
        "zipcode": "10469"
      },
      "borough": "Bronx",
      "cuisine": "Hamburgers",
      "grades": [
        {
          "date": {
            "$date": 1416182400000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1403654400000
          },
          "grade": "A",
          "score": 3
        },
        {
          "date": {
            "$date": 1371168000000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1338940800000
          },
          "grade": "A",
          "score": 6
        },
        {
          "date": {
            "$date": 1327622400000
          },
          "grade": "A",
          "score": 7
        }
      ],
      "name": "Wendy'S",
      "restaurant_id": "40386062"
    },{
      "address": {
        "building": "4357",
        "coord": [
          -74.1603346,
          40.5454655
        ],
        "street": "Amboy Road",
        "zipcode": "10312"
      },
      "borough": "Staten Island",
      "cuisine": "Donuts",
      "grades": [
        {
          "date": {
            "$date": 1405987200000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1392076800000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1355702400000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1343174400000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1330387200000
          },
          "grade": "A",
          "score": 11
        }
      ],
      "name": "Country Donuts",
      "restaurant_id": "40386067"
    },{
      "address": {
        "building": "3116",
        "coord": [
          -73.9248952,
          40.7615312
        ],
        "street": "Broadway",
        "zipcode": "11106"
      },
      "borough": "Queens",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1418169600000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1388448000000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1371600000000
          },
          "grade": "A",
          "score": 6
        },
        {
          "date": {
            "$date": 1353024000000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1338768000000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1326844800000
          },
          "grade": "A",
          "score": 13
        }
      ],
      "name": "Doral Donuts",
      "restaurant_id": "40386069"
    },{
      "address": {
        "building": "7809",
        "coord": [
          -74.02853089999999,
          40.6289779
        ],
        "street": "Third Avenue",
        "zipcode": "11209"
      },
      "borough": "Brooklyn",
      "cuisine": "Middle Eastern",
      "grades": [
        {
          "date": {
            "$date": 1403136000000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1365206400000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1334102400000
          },
          "grade": "A",
          "score": 12
        }
      ],
      "name": "Sally & George'S Place",
      "restaurant_id": "40386102"
    },{
      "address": {
        "building": "39-46",
        "coord": [
          -73.9237691,
          40.7470048
        ],
        "street": "Skillman Avenue",
        "zipcode": "11104"
      },
      "borough": "Queens",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1410393600000
          },
          "grade": "Z",
          "score": 24
        },
        {
          "date": {
            "$date": 1391558400000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1369872000000
          },
          "grade": "A",
          "score": 13
        }
      ],
      "name": "Jacks Ale House",
      "restaurant_id": "40386147"
    },{
      "address": {
        "building": "1539",
        "coord": [
          -73.8574277,
          40.8366717
        ],
        "street": "Unionport Road",
        "zipcode": "10462"
      },
      "borough": "Bronx",
      "cuisine": "Pizza",
      "grades": [
        {
          "date": {
            "$date": 1418860800000
          },
          "grade": "A",
          "score": 8
        },
        {
          "date": {
            "$date": 1387324800000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1374624000000
          },
          "grade": "A",
          "score": 3
        },
        {
          "date": {
            "$date": 1343779200000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1330473600000
          },
          "grade": "A",
          "score": 10
        }
      ],
      "name": "Venice Pizza",
      "restaurant_id": "40386278"
    },{
      "address": {
        "building": "104",
        "coord": [
          -73.99976319999999,
          40.7162194
        ],
        "street": "Bayard Street",
        "zipcode": "10013"
      },
      "borough": "Manhattan",
      "cuisine": "Chinese",
      "grades": [
        {
          "date": {
            "$date": 1402963200000
          },
          "grade": "B",
          "score": 16
        },
        {
          "date": {
            "$date": 1381881600000
          },
          "grade": "B",
          "score": 21
        },
        {
          "date": {
            "$date": 1365465600000
          },
          "grade": "B",
          "score": 17
        },
        {
          "date": {
            "$date": 1342137600000
          },
          "grade": "B",
          "score": 23
        }
      ],
      "name": "Winnie'S Bar",
      "restaurant_id": "40386287"
    },{
      "address": {
        "building": "359",
        "coord": [
          -73.9821078,
          40.6658524
        ],
        "street": "Seventh Avenue",
        "zipcode": "11215"
      },
      "borough": "Brooklyn",
      "cuisine": "Pizza",
      "grades": [
        {
          "date": {
            "$date": 1405987200000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1373414400000
          },
          "grade": "A",
          "score": 5
        },
        {
          "date": {
            "$date": 1342051200000
          },
          "grade": "A",
          "score": 8
        }
      ],
      "name": "Pizza Plus",
      "restaurant_id": "40386303"
    },{
      "address": {
        "building": "371",
        "coord": [
          -73.9916396,
          40.7487243
        ],
        "street": "7 Avenue",
        "zipcode": "10001"
      },
      "borough": "Manhattan",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1412294400000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1380585600000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1350864000000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1339718400000
          },
          "grade": "A",
          "score": 2
        },
        {
          "date": {
            "$date": 1327968000000
          },
          "grade": "A",
          "score": 11
        }
      ],
      "name": "Niles Restaurant",
      "restaurant_id": "40386340"
    },{
      "address": {
        "building": "58-02",
        "coord": [
          -73.901412,
          40.7003073
        ],
        "street": "Myrtle Avenue",
        "zipcode": "11385"
      },
      "borough": "Queens",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1413849600000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1381881600000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1370476800000
          },
          "grade": "B",
          "score": 16
        },
        {
          "date": {
            "$date": 1337212800000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1328659200000
          },
          "grade": "B",
          "score": 21
        },
        {
          "date": {
            "$date": 1323993600000
          },
          "grade": "P",
          "score": 6
        }
      ],
      "name": "Tasty'S",
      "restaurant_id": "40386425"
    },{
      "address": {
        "building": "222-05",
        "coord": [
          -73.75767259999999,
          40.7538214
        ],
        "street": "56 Avenue",
        "zipcode": "11364"
      },
      "borough": "Queens",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1412035200000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1396828800000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1362614400000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1331683200000
          },
          "grade": "A",
          "score": 12
        }
      ],
      "name": "Oakland Cafeteria/Queensborough Community College",
      "restaurant_id": "40386428"
    },{
      "address": {
        "building": "222-05",
        "coord": [
          -73.75767259999999,
          40.7538214
        ],
        "street": "56 Avenue",
        "zipcode": "11364"
      },
      "borough": "Queens",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1415318400000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1378252800000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1362528000000
          },
          "grade": "C",
          "score": 31
        },
        {
          "date": {
            "$date": 1347408000000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1331683200000
          },
          "grade": "A",
          "score": 9
        }
      ],
      "name": "Q.B.Comm.College-Main Kitchen/Tiger Bites Pizza Section",
      "restaurant_id": "40386429"
    },{
      "address": {
        "building": "51",
        "coord": [
          -73.9787406,
          40.7611474
        ],
        "street": "West 52 Street",
        "zipcode": "10019"
      },
      "borough": "Manhattan",
      "cuisine": "Asian",
      "grades": [
        {
          "date": {
            "$date": 1407801600000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1377561600000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1364947200000
          },
          "grade": "B",
          "score": 18
        },
        {
          "date": {
            "$date": 1348099200000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1313539200000
          },
          "grade": "A",
          "score": 2
        }
      ],
      "name": "China Grill",
      "restaurant_id": "40386481"
    },{
      "address": {
        "building": "110",
        "coord": [
          -73.9999854,
          40.7300989
        ],
        "street": "West Third Street",
        "zipcode": "10012"
      },
      "borough": "Manhattan",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1418342400000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1403568000000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1384819200000
          },
          "grade": "B",
          "score": 15
        },
        {
          "date": {
            "$date": 1369094400000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1337126400000
          },
          "grade": "A",
          "score": 2
        },
        {
          "date": {
            "$date": 1326067200000
          },
          "grade": "A",
          "score": 10
        }
      ],
      "name": "New York University - Law School",
      "restaurant_id": "40386508"
    },{
      "address": {
        "building": "108",
        "coord": [
          -74.00318299999999,
          40.733443
        ],
        "street": "7 Avenue South",
        "zipcode": "10014"
      },
      "borough": "Manhattan",
      "cuisine": "Pizza",
      "grades": [
        {
          "date": {
            "$date": 1393891200000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1379462400000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1361318400000
          },
          "grade": "C",
          "score": 40
        },
        {
          "date": {
            "$date": 1346198400000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1332460800000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1315353600000
          },
          "grade": "B",
          "score": 21
        },
        {
          "date": {
            "$date": 1301443200000
          },
          "grade": "B",
          "score": 16
        }
      ],
      "name": "Karavas Pizza N Pita",
      "restaurant_id": "40386515"
    },{
      "address": {
        "building": "15403",
        "coord": [
          -73.80845529999999,
          40.7869333
        ],
        "street": "Cross Island Parkway",
        "zipcode": "11357"
      },
      "borough": "Queens",
      "cuisine": "Italian",
      "grades": [
        {
          "date": {
            "$date": 1410998400000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1393027200000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1370908800000
          },
          "grade": "A",
          "score": 8
        },
        {
          "date": {
            "$date": 1355702400000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1338854400000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1325548800000
          },
          "grade": "A",
          "score": 8
        }
      ],
      "name": "Erin'S Isle",
      "restaurant_id": "40386528"
    },{
      "address": {
        "building": "1002",
        "coord": [
          -73.9310977,
          40.70359879999999
        ],
        "street": "Flushing Avenue",
        "zipcode": "11206"
      },
      "borough": "Brooklyn",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1417132800000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1405382400000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1390953600000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1355788800000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1338422400000
          },
          "grade": "B",
          "score": 20
        }
      ],
      "name": "Tina'S Restaurant",
      "restaurant_id": "40386554"
    },{
      "address": {
        "building": "2020",
        "coord": [
          -73.981751,
          40.7763588
        ],
        "street": "Broadway",
        "zipcode": "10023"
      },
      "borough": "Manhattan",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1418688000000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1385683200000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1354752000000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1340755200000
          },
          "grade": "A",
          "score": 3
        },
        {
          "date": {
            "$date": 1326758400000
          },
          "grade": "A",
          "score": 12
        }
      ],
      "name": "Westside Restaurant",
      "restaurant_id": "40386556"
    },{
      "address": {
        "building": "2671",
        "coord": [
          -73.969439,
          40.7983829
        ],
        "street": "Broadway",
        "zipcode": "10025"
      },
      "borough": "Manhattan",
      "cuisine": "Pizza",
      "grades": [
        {
          "date": {
            "$date": 1409097600000
          },
          "grade": "B",
          "score": 15
        },
        {
          "date": {
            "$date": 1392681600000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1358985600000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1327363200000
          },
          "grade": "A",
          "score": 5
        },
        {
          "date": {
            "$date": 1321574400000
          },
          "grade": "C",
          "score": 9
        }
      ],
      "name": "Sal And Carmine Pizza",
      "restaurant_id": "40386569"
    },{
      "address": {
        "building": "213-17",
        "coord": [
          -73.76981409999999,
          40.7605092
        ],
        "street": "Northern Boulevard",
        "zipcode": "11361"
      },
      "borough": "Queens",
      "cuisine": "Hamburgers",
      "grades": [
        {
          "date": {
            "$date": 1393977600000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1361923200000
          },
          "grade": "A",
          "score": 4
        },
        {
          "date": {
            "$date": 1329955200000
          },
          "grade": "A",
          "score": 4
        },
        {
          "date": {
            "$date": 1300320000000
          },
          "grade": "A",
          "score": 5
        }
      ],
      "name": "White Castle",
      "restaurant_id": "40386612"
    },{
      "address": {
        "building": "7818",
        "coord": [
          -74.0239115,
          40.6269162
        ],
        "street": "5 Avenue",
        "zipcode": "11209"
      },
      "borough": "Brooklyn",
      "cuisine": "Pizza/Italian",
      "grades": [
        {
          "date": {
            "$date": 1417651200000
          },
          "grade": "B",
          "score": 15
        },
        {
          "date": {
            "$date": 1397606400000
          },
          "grade": "B",
          "score": 18
        },
        {
          "date": {
            "$date": 1363219200000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1329264000000
          },
          "grade": "A",
          "score": 12
        }
      ],
      "name": "Rocco'S Pizzeria",
      "restaurant_id": "40386616"
    },{
      "address": {
        "building": "35",
        "coord": [
          -73.992869,
          40.740758
        ],
        "street": "West   20 Street",
        "zipcode": "10011"
      },
      "borough": "Manhattan",
      "cuisine": "Greek",
      "grades": [
        {
          "date": {
            "$date": 1396483200000
          },
          "grade": "A",
          "score": 5
        },
        {
          "date": {
            "$date": 1362182400000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1344988800000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1328486400000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1313020800000
          },
          "grade": "A",
          "score": 8
        }
      ],
      "name": "Periyali",
      "restaurant_id": "40386619"
    },{
      "address": {
        "building": "146",
        "coord": [
          -73.9792691,
          40.7649292
        ],
        "street": "West   57 Street",
        "zipcode": "10019"
      },
      "borough": "Manhattan",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1393804800000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1360195200000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1328227200000
          },
          "grade": "A",
          "score": 9
        }
      ],
      "name": "Club Metropolitan",
      "restaurant_id": "40386646"
    },{
      "address": {
        "building": "3580",
        "coord": [
          -73.85914,
          40.877498
        ],
        "street": "Bronxwood Avenue",
        "zipcode": "10469"
      },
      "borough": "Bronx",
      "cuisine": "Caribbean",
      "grades": [
        {
          "date": {
            "$date": 1410220800000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1376524800000
          },
          "grade": "A",
          "score": 5
        },
        {
          "date": {
            "$date": 1346284800000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1334188800000
          },
          "grade": "A",
          "score": 9
        }
      ],
      "name": "Frank'S Soup Bowl",
      "restaurant_id": "40386672"
    },{
      "address": {
        "building": "5024",
        "coord": [
          -73.9135648,
          40.7458604
        ],
        "street": "Skillman Avenue",
        "zipcode": "11377"
      },
      "borough": "Queens",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1408406400000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1389398400000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1369440000000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1318464000000
          },
          "grade": "A",
          "score": 12
        }
      ],
      "name": "Copper Kettle",
      "restaurant_id": "40386675"
    },{
      "address": {
        "building": "56-01",
        "coord": [
          -73.9063134,
          40.700273
        ],
        "street": "Myrtle Avenue",
        "zipcode": "11385"
      },
      "borough": "Queens",
      "cuisine": "Pizza",
      "grades": [
        {
          "date": {
            "$date": 1417651200000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1403654400000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1386201600000
          },
          "grade": "C",
          "score": 31
        },
        {
          "date": {
            "$date": 1370304000000
          },
          "grade": "A",
          "score": 4
        },
        {
          "date": {
            "$date": 1343001600000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1328140800000
          },
          "grade": "A",
          "score": 11
        }
      ],
      "name": "Sanremo Pizza",
      "restaurant_id": "40386722"
    },{
      "address": {
        "building": "141",
        "coord": [
          -73.9879785,
          40.75331250000001
        ],
        "street": "West   38 Street",
        "zipcode": "10018"
      },
      "borough": "Manhattan",
      "cuisine": "Italian",
      "grades": [
        {
          "date": {
            "$date": 1415577600000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1383523200000
          },
          "grade": "A",
          "score": 8
        },
        {
          "date": {
            "$date": 1368057600000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1350518400000
          },
          "grade": "A",
          "score": 13
        }
      ],
      "name": "Arno Ristorante",
      "restaurant_id": "40386747"
    },{
      "address": {
        "building": "222-05",
        "coord": [
          -73.75767259999999,
          40.7538214
        ],
        "street": "56 Avenue",
        "zipcode": "11364"
      },
      "borough": "Queens",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1407196800000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1391558400000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1373932800000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1354665600000
          },
          "grade": "A",
          "score": 5
        },
        {
          "date": {
            "$date": 1340064000000
          },
          "grade": "A",
          "score": 13
        }
      ],
      "name": "Science Cafe (Queensborough  Community College)",
      "restaurant_id": "40386793"
    },{
      "address": {
        "building": "3101",
        "coord": [
          -73.8812773,
          40.679218
        ],
        "street": "Atlantic Avenue",
        "zipcode": "11208"
      },
      "borough": "Brooklyn",
      "cuisine": "Hamburgers",
      "grades": [
        {
          "date": {
            "$date": 1415923200000
          },
          "grade": "A",
          "score": 2
        },
        {
          "date": {
            "$date": 1382313600000
          },
          "grade": "A",
          "score": 3
        },
        {
          "date": {
            "$date": 1352851200000
          },
          "grade": "A",
          "score": 0
        }
      ],
      "name": "White Castle",
      "restaurant_id": "40386837"
    },{
      "address": {
        "building": "783",
        "coord": [
          -73.988231,
          40.76503200000001
        ],
        "street": "9 Avenue",
        "zipcode": "10019"
      },
      "borough": "Manhattan",
      "cuisine": "Latin (Cuban, Dominican, Puerto Rican, South & Central American)",
      "grades": [
        {
          "date": {
            "$date": 1420588800000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1401321600000
          },
          "grade": "B",
          "score": 17
        },
        {
          "date": {
            "$date": 1384819200000
          },
          "grade": "B",
          "score": 16
        },
        {
          "date": {
            "$date": 1369699200000
          },
          "grade": "C",
          "score": 53
        },
        {
          "date": {
            "$date": 1352937600000
          },
          "grade": "B",
          "score": 14
        },
        {
          "date": {
            "$date": 1337040000000
          },
          "grade": "A",
          "score": 13
        }
      ],
      "name": "El Azteca Mexican Restaurant",
      "restaurant_id": "40386927"
    },{
      "address": {
        "building": "244",
        "coord": [
          -73.967893,
          40.75682
        ],
        "street": "East   53 Street",
        "zipcode": "10022"
      },
      "borough": "Manhattan",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1399507200000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1369872000000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1338940800000
          },
          "grade": "A",
          "score": 4
        },
        {
          "date": {
            "$date": 1323820800000
          },
          "grade": "A",
          "score": 5
        },
        {
          "date": {
            "$date": 1306108800000
          },
          "grade": "B",
          "score": 19
        }
      ],
      "name": "T & G Whitney'S",
      "restaurant_id": "40386970"
    },{
      "address": {
        "building": "110",
        "coord": [
          -74.0045136,
          40.7236625
        ],
        "street": "Avenue Of The Americas",
        "zipcode": "10013"
      },
      "borough": "Manhattan",
      "cuisine": "Mexican",
      "grades": [
        {
          "date": {
            "$date": 1397433600000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1364342400000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1350345600000
          },
          "grade": "A",
          "score": 3
        },
        {
          "date": {
            "$date": 1332892800000
          },
          "grade": "B",
          "score": 22
        },
        {
          "date": {
            "$date": 1315785600000
          },
          "grade": "A",
          "score": 2
        }
      ],
      "name": "Lupe'S East L.A. Kitchen",
      "restaurant_id": "40386976"
    },{
      "address": {
        "building": "1396",
        "coord": [
          -73.9573454,
          40.7747147
        ],
        "street": "Third Avenue",
        "zipcode": "10075"
      },
      "borough": "Manhattan",
      "cuisine": "Italian",
      "grades": [
        {
          "date": {
            "$date": 1392854400000
          },
          "grade": "A",
          "score": 5
        },
        {
          "date": {
            "$date": 1358985600000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1324944000000
          },
          "grade": "A",
          "score": 9
        }
      ],
      "name": "Due",
      "restaurant_id": "40386999"
    },{
      "address": {
        "building": "8707",
        "coord": [
          -73.8789718,
          40.7483467
        ],
        "street": "Roosevelt Avenue",
        "zipcode": "11372"
      },
      "borough": "Queens",
      "cuisine": "Chicken",
      "grades": [
        {
          "date": {
            "$date": 1418256000000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1386115200000
          },
          "grade": "A",
          "score": 2
        },
        {
          "date": {
            "$date": 1371254400000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1337558400000
          },
          "grade": "A",
          "score": 7
        }
      ],
      "name": "La Casa Del Pollo Restaurant",
      "restaurant_id": "40387027"
    },{
      "address": {
        "building": "138",
        "coord": [
          -73.99741519999999,
          40.7186078
        ],
        "street": "Mulberry Street",
        "zipcode": "10013"
      },
      "borough": "Manhattan",
      "cuisine": "Italian",
      "grades": [
        {
          "date": {
            "$date": 1395273600000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1380499200000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1365638400000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1330905600000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1311552000000
          },
          "grade": "A",
          "score": 9
        }
      ],
      "name": "Pellegrino'S",
      "restaurant_id": "40387086"
    },{
      "address": {
        "building": "1677",
        "coord": [
          -73.87113099999999,
          40.825183
        ],
        "street": "Bruckner Boulevard",
        "zipcode": "10472"
      },
      "borough": "Bronx",
      "cuisine": "Hamburgers",
      "grades": [
        {
          "date": {
            "$date": 1386892800000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1354752000000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1324512000000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1294790400000
          },
          "grade": "A",
          "score": 2
        }
      ],
      "name": "White Castle",
      "restaurant_id": "40387143"
    },{
      "address": {
        "building": "107",
        "coord": [
          -73.99582699999999,
          40.739672
        ],
        "street": "West   17 Street",
        "zipcode": "10011"
      },
      "borough": "Manhattan",
      "cuisine": "Italian",
      "grades": [
        {
          "date": {
            "$date": 1415577600000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1393977600000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1367366400000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1350950400000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1349222400000
          },
          "grade": "P",
          "score": 5
        }
      ],
      "name": "Da Umberto Restaurant",
      "restaurant_id": "40387162"
    },{
      "address": {
        "building": "550",
        "coord": [
          -73.8864787,
          40.8588703
        ],
        "street": "East Fordham Road",
        "zipcode": "10458"
      },
      "borough": "Bronx",
      "cuisine": "Hamburgers",
      "grades": [
        {
          "date": {
            "$date": 1395878400000
          },
          "grade": "A",
          "score": 5
        },
        {
          "date": {
            "$date": 1363651200000
          },
          "grade": "A",
          "score": 2
        },
        {
          "date": {
            "$date": 1350950400000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1320278400000
          },
          "grade": "A",
          "score": 10
        }
      ],
      "name": "White Castle",
      "restaurant_id": "40387178"
    },{
      "address": {
        "building": "96",
        "coord": [
          -73.9585056,
          40.7193481
        ],
        "street": "Berry Street",
        "zipcode": "11249"
      },
      "borough": "Brooklyn",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1417996800000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1382572800000
          },
          "grade": "A",
          "score": 4
        },
        {
          "date": {
            "$date": 1369180800000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1355097600000
          },
          "grade": "B",
          "score": 15
        }
      ],
      "name": "Teddy'S Bar And Grill",
      "restaurant_id": "40387201"
    },{
      "address": {
        "building": "14",
        "coord": [
          -73.9883909,
          40.740735
        ],
        "street": "East   23 Street",
        "zipcode": "10010"
      },
      "borough": "Manhattan",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1414454400000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1397088000000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1375920000000
          },
          "grade": "C",
          "score": 58
        },
        {
          "date": {
            "$date": 1360800000000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1339718400000
          },
          "grade": "C",
          "score": 71
        }
      ],
      "name": "Live Bait Bar & Restaurant",
      "restaurant_id": "40387237"
    },{
      "address": {
        "building": "280",
        "coord": [
          -74.1386716,
          40.6160213
        ],
        "street": "Watchogue Road",
        "zipcode": "10314"
      },
      "borough": "Staten Island",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1405382400000
          },
          "grade": "B",
          "score": 19
        },
        {
          "date": {
            "$date": 1386028800000
          },
          "grade": "B",
          "score": 25
        },
        {
          "date": {
            "$date": 1367884800000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1340064000000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1322697600000
          },
          "grade": "B",
          "score": 15
        },
        {
          "date": {
            "$date": 1311638400000
          },
          "grade": "C",
          "score": 36
        }
      ],
      "name": "Jimmy Max Restaurant",
      "restaurant_id": "40387243"
    },{
      "address": {
        "building": "145",
        "coord": [
          -73.99905799999999,
          40.72837800000001
        ],
        "street": "Bleecker Street",
        "zipcode": "10012"
      },
      "borough": "Manhattan",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1396310400000
          },
          "grade": "B",
          "score": 16
        },
        {
          "date": {
            "$date": 1375747200000
          },
          "grade": "B",
          "score": 18
        },
        {
          "date": {
            "$date": 1363046400000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1339459200000
          },
          "grade": "B",
          "score": 14
        }
      ],
      "name": "Peculiar Pub",
      "restaurant_id": "40387277"
    },{
      "address": {
        "building": "484",
        "coord": [
          -73.9932633,
          40.752437
        ],
        "street": "8 Avenue",
        "zipcode": "10001"
      },
      "borough": "Manhattan",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1412640000000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1379376000000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1368576000000
          },
          "grade": "A",
          "score": 3
        },
        {
          "date": {
            "$date": 1329782400000
          },
          "grade": "A",
          "score": 10
        }
      ],
      "name": "T.G.I. Friday'S",
      "restaurant_id": "40387324"
    },{
      "address": {
        "building": "432",
        "coord": [
          -73.97495669999999,
          40.7833
        ],
        "street": "Columbus Avenue",
        "zipcode": "10024"
      },
      "borough": "Manhattan",
      "cuisine": "Pizza/Italian",
      "grades": [
        {
          "date": {
            "$date": 1407110400000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1394409600000
          },
          "grade": "A",
          "score": 2
        },
        {
          "date": {
            "$date": 1373414400000
          },
          "grade": "B",
          "score": 20
        },
        {
          "date": {
            "$date": 1339545600000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1321401600000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1312848000000
          },
          "grade": "C",
          "score": 8
        }
      ],
      "name": "Uno Chicago Grill",
      "restaurant_id": "40387339"
    },{
      "address": {
        "building": "201",
        "coord": [
          -73.97672659999999,
          40.78598119999999
        ],
        "street": "West   83 Street",
        "zipcode": "10024"
      },
      "borough": "Manhattan",
      "cuisine": "Caf\u00e9/Coffee/Tea",
      "grades": [
        {
          "date": {
            "$date": 1411516800000
          },
          "grade": "Z",
          "score": 50
        },
        {
          "date": {
            "$date": 1380240000000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1367971200000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1328745600000
          },
          "grade": "A",
          "score": 3
        },
        {
          "date": {
            "$date": 1317772800000
          },
          "grade": "A",
          "score": 6
        }
      ],
      "name": "Cafe Lalo",
      "restaurant_id": "40387357"
    },{
      "address": {
        "building": "5189A",
        "coord": [
          -73.91039789999999,
          40.8745536
        ],
        "street": "Broadway",
        "zipcode": "10463"
      },
      "borough": "Bronx",
      "cuisine": "Pizza",
      "grades": [
        {
          "date": {
            "$date": 1420761600000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1403481600000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1381881600000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1368576000000
          },
          "grade": "C",
          "score": 13
        },
        {
          "date": {
            "$date": 1348099200000
          },
          "grade": "A",
          "score": 4
        },
        {
          "date": {
            "$date": 1335139200000
          },
          "grade": "A",
          "score": 12
        }
      ],
      "name": "Arturo'S Pizza",
      "restaurant_id": "40387399"
    },{
      "address": {
        "building": "975979",
        "coord": [
          -73.9641006,
          40.7566992
        ],
        "street": "First Avenue",
        "zipcode": "10022"
      },
      "borough": "Manhattan",
      "cuisine": "Delicatessen",
      "grades": [
        {
          "date": {
            "$date": 1409270400000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1394496000000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1373846400000
          },
          "grade": "B",
          "score": 14
        },
        {
          "date": {
            "$date": 1360886400000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1340150400000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1326240000000
          },
          "grade": "A",
          "score": 12
        }
      ],
      "name": "Tal Bagels Deli",
      "restaurant_id": "40387418"
    },{
      "address": {
        "building": "1357",
        "coord": [
          -73.9497152,
          40.653664
        ],
        "street": "Nostrand Avenue",
        "zipcode": "11226"
      },
      "borough": "Brooklyn",
      "cuisine": "Caribbean",
      "grades": [
        {
          "date": {
            "$date": 1384905600000
          },
          "grade": "A",
          "score": 5
        },
        {
          "date": {
            "$date": 1347408000000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1330387200000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1318377600000
          },
          "grade": "A",
          "score": 11
        }
      ],
      "name": "Nostrand Island Eatery",
      "restaurant_id": "40387428"
    },{
      "address": {
        "building": "772",
        "coord": [
          -73.90745059999999,
          40.81268559999999
        ],
        "street": "East  149 Street",
        "zipcode": "10455"
      },
      "borough": "Bronx",
      "cuisine": "Italian",
      "grades": [
        {
          "date": {
            "$date": 1392854400000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1359936000000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1328486400000
          },
          "grade": "A",
          "score": 5
        },
        {
          "date": {
            "$date": 1317081600000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1304899200000
          },
          "grade": "A",
          "score": 7
        }
      ],
      "name": "Venice Restaurant",
      "restaurant_id": "40387477"
    },{
      "address": {
        "building": "881",
        "coord": [
          -73.9105009,
          40.8005198
        ],
        "street": "East  134 Street",
        "zipcode": "10454"
      },
      "borough": "Bronx",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1393977600000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1361836800000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1330473600000
          },
          "grade": "A",
          "score": 2
        },
        {
          "date": {
            "$date": 1318291200000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1306800000000
          },
          "grade": "A",
          "score": 12
        }
      ],
      "name": "Walnut Bus Stop",
      "restaurant_id": "40387528"
    },{
      "address": {
        "building": "136-11",
        "coord": [
          -73.8290925,
          40.7587999
        ],
        "street": "41 Avenue",
        "zipcode": "11355"
      },
      "borough": "Queens",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1408579200000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1394582400000
          },
          "grade": "A",
          "score": 5
        },
        {
          "date": {
            "$date": 1360713600000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1328745600000
          },
          "grade": "A",
          "score": 10
        }
      ],
      "name": "Kelly'S Pub",
      "restaurant_id": "40387549"
    },{
      "address": {
        "building": "1258",
        "coord": [
          -74.065258,
          40.612447
        ],
        "street": "Bay Street",
        "zipcode": "10305"
      },
      "borough": "Staten Island",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1418774400000
          },
          "grade": "A",
          "score": 8
        },
        {
          "date": {
            "$date": 1400630400000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1386806400000
          },
          "grade": "C",
          "score": 2
        },
        {
          "date": {
            "$date": 1365033600000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1347321600000
          },
          "grade": "B",
          "score": 26
        },
        {
          "date": {
            "$date": 1329523200000
          },
          "grade": "A",
          "score": 9
        }
      ],
      "name": "Rosebank Tavern",
      "restaurant_id": "40387746"
    },{
      "address": {
        "building": "900",
        "coord": [
          -73.9805746,
          40.7652002
        ],
        "street": "7 Avenue",
        "zipcode": "10019"
      },
      "borough": "Manhattan",
      "cuisine": "Italian",
      "grades": [
        {
          "date": {
            "$date": 1414368000000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1378684800000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1365033600000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1344988800000
          },
          "grade": "A",
          "score": 2
        }
      ],
      "name": "Trattoria Della Arte",
      "restaurant_id": "40387754"
    },{
      "address": {
        "building": "842484",
        "coord": [
          -73.98010790000001,
          40.6862191
        ],
        "street": "20 -3Rd Avenue",
        "zipcode": "11209"
      },
      "borough": "Brooklyn",
      "cuisine": "Italian",
      "grades": [
        {
          "date": {
            "$date": 1421193600000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1397001600000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1380153600000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1341964800000
          },
          "grade": "A",
          "score": 13
        }
      ],
      "name": "Areo Restaurant",
      "restaurant_id": "40387787"
    },{
      "address": {
        "building": "4307",
        "coord": [
          -73.976152,
          40.63089799999999
        ],
        "street": "18 Avenue",
        "zipcode": "11218"
      },
      "borough": "Brooklyn",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1420243200000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1404172800000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1390867200000
          },
          "grade": "B",
          "score": 18
        },
        {
          "date": {
            "$date": 1374105600000
          },
          "grade": "B",
          "score": 15
        },
        {
          "date": {
            "$date": 1360195200000
          },
          "grade": "B",
          "score": 24
        },
        {
          "date": {
            "$date": 1357862400000
          },
          "grade": "P",
          "score": 3
        },
        {
          "date": {
            "$date": 1343865600000
          },
          "grade": "B",
          "score": 17
        },
        {
          "date": {
            "$date": 1332979200000
          },
          "grade": "B",
          "score": 21
        }
      ],
      "name": "Green Pavilion Restaurant & Sports Lounge",
      "restaurant_id": "40387825"
    },{
      "address": {
        "building": "614",
        "coord": [
          -73.9916209,
          40.7593916
        ],
        "street": "9 Avenue",
        "zipcode": "10036"
      },
      "borough": "Manhattan",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1398297600000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1377043200000
          },
          "grade": "B",
          "score": 27
        },
        {
          "date": {
            "$date": 1360108800000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1340582400000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1324339200000
          },
          "grade": "B",
          "score": 17
        },
        {
          "date": {
            "$date": 1306886400000
          },
          "grade": "A",
          "score": 11
        }
      ],
      "name": "Westway Diner",
      "restaurant_id": "40387861"
    },{
      "address": {
        "building": "182",
        "coord": [
          -73.9998818,
          40.74289419999999
        ],
        "street": "8 Avenue",
        "zipcode": "10011"
      },
      "borough": "Manhattan",
      "cuisine": "Mexican",
      "grades": [
        {
          "date": {
            "$date": 1410134400000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1394496000000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1374019200000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1341792000000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1330905600000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1319500800000
          },
          "grade": "A",
          "score": 12
        }
      ],
      "name": "Rocking Horse Cafe",
      "restaurant_id": "40387876"
    },{
      "address": {
        "building": "548",
        "coord": [
          -73.9983829,
          40.7290603
        ],
        "street": "La Guardia Place",
        "zipcode": "10012"
      },
      "borough": "Manhattan",
      "cuisine": "Italian",
      "grades": [
        {
          "date": {
            "$date": 1417651200000
          },
          "grade": "Z",
          "score": 17
        },
        {
          "date": {
            "$date": 1404086400000
          },
          "grade": "A",
          "score": 8
        },
        {
          "date": {
            "$date": 1368403200000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1352851200000
          },
          "grade": "B",
          "score": 19
        },
        {
          "date": {
            "$date": 1336694400000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1324425600000
          },
          "grade": "C",
          "score": 28
        }
      ],
      "name": "Tre Giovani Pizza & Pasta",
      "restaurant_id": "40387890"
    },{
      "address": {
        "building": "4083",
        "coord": [
          -73.9391802,
          40.844211
        ],
        "street": "Broadway",
        "zipcode": "10032"
      },
      "borough": "Manhattan",
      "cuisine": "Latin (Cuban, Dominican, Puerto Rican, South & Central American)",
      "grades": [
        {
          "date": {
            "$date": 1404172800000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1385942400000
          },
          "grade": "B",
          "score": 15
        },
        {
          "date": {
            "$date": 1369094400000
          },
          "grade": "B",
          "score": 26
        },
        {
          "date": {
            "$date": 1367884800000
          },
          "grade": "P",
          "score": 12
        },
        {
          "date": {
            "$date": 1335139200000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1323648000000
          },
          "grade": "B",
          "score": 20
        },
        {
          "date": {
            "$date": 1313107200000
          },
          "grade": "A",
          "score": 12
        }
      ],
      "name": "Galicia Restaurant",
      "restaurant_id": "40387907"
    },{
      "address": {
        "building": "1105",
        "coord": [
          -73.95950400000001,
          40.773716
        ],
        "street": "Lexington Avenue",
        "zipcode": "10075"
      },
      "borough": "Manhattan",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1407456000000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1392940800000
          },
          "grade": "A",
          "score": 2
        },
        {
          "date": {
            "$date": 1377129600000
          },
          "grade": "B",
          "score": 15
        },
        {
          "date": {
            "$date": 1361318400000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1345161600000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1330560000000
          },
          "grade": "A",
          "score": 8
        }
      ],
      "name": "Lenox Hill Grill/Pizza",
      "restaurant_id": "40387986"
    },{
      "address": {
        "building": "47",
        "coord": [
          -78.877224,
          42.89546199999999
        ],
        "street": "Broadway @ Trinity Pl",
        "zipcode": "10006"
      },
      "borough": "Manhattan",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1418342400000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1406851200000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1391385600000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1374624000000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1342483200000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1325721600000
          },
          "grade": "A",
          "score": 11
        }
      ],
      "name": "T.G.I. Friday'S",
      "restaurant_id": "40387990"
    },{
      "address": {
        "building": "2140",
        "coord": [
          -73.8529552,
          40.83376459999999
        ],
        "street": "Westchester Avenue",
        "zipcode": "10462"
      },
      "borough": "Bronx",
      "cuisine": "Hamburgers",
      "grades": [
        {
          "date": {
            "$date": 1405382400000
          },
          "grade": "A",
          "score": 5
        },
        {
          "date": {
            "$date": 1388620800000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1369785600000
          },
          "grade": "A",
          "score": 3
        },
        {
          "date": {
            "$date": 1349827200000
          },
          "grade": "B",
          "score": 21
        },
        {
          "date": {
            "$date": 1337731200000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1325116800000
          },
          "grade": "A",
          "score": 9
        }
      ],
      "name": "Wendy'S",
      "restaurant_id": "40388016"
    },{
      "address": {
        "building": "1239",
        "coord": [
          -73.9585846,
          40.8097806
        ],
        "street": "Amsterdam Avenue",
        "zipcode": "10027"
      },
      "borough": "Manhattan",
      "cuisine": "Ethiopian",
      "grades": [
        {
          "date": {
            "$date": 1393804800000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1359763200000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1324944000000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1316736000000
          },
          "grade": "A",
          "score": 12
        }
      ],
      "name": "Masawa",
      "restaurant_id": "40388091"
    },{
      "address": {
        "building": "19",
        "coord": [
          -73.94838039999999,
          40.6325077
        ],
        "street": "Hillel Place",
        "zipcode": "11210"
      },
      "borough": "Brooklyn",
      "cuisine": "Pizza",
      "grades": [
        {
          "date": {
            "$date": 1404777600000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1373932800000
          },
          "grade": "A",
          "score": 5
        },
        {
          "date": {
            "$date": 1343260800000
          },
          "grade": "A",
          "score": 3
        },
        {
          "date": {
            "$date": 1313366400000
          },
          "grade": "A",
          "score": 10
        }
      ],
      "name": "Luigi'S Pizza",
      "restaurant_id": "40388134"
    },{
      "address": {
        "building": "200",
        "coord": [
          -74.0051398,
          40.7281648
        ],
        "street": "Varick Street",
        "zipcode": "10014"
      },
      "borough": "Manhattan",
      "cuisine": "Latin (Cuban, Dominican, Puerto Rican, South & Central American)",
      "grades": [
        {
          "date": {
            "$date": 1404259200000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1383868800000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1365465600000
          },
          "grade": "B",
          "score": 15
        },
        {
          "date": {
            "$date": 1328832000000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1316563200000
          },
          "grade": "A",
          "score": 10
        }
      ],
      "name": "Sob'S",
      "restaurant_id": "40388194"
    },{
      "address": {
        "building": "1290",
        "coord": [
          -73.9788903,
          40.7605367
        ],
        "street": "Avenue Of Americas",
        "zipcode": "10119"
      },
      "borough": "Manhattan",
      "cuisine": "Chinese",
      "grades": [
        {
          "date": {
            "$date": 1411430400000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1386720000000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1365465600000
          },
          "grade": "B",
          "score": 26
        },
        {
          "date": {
            "$date": 1349308800000
          },
          "grade": "B",
          "score": 23
        },
        {
          "date": {
            "$date": 1336348800000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1324339200000
          },
          "grade": "B",
          "score": 22
        }
      ],
      "name": "Yip'S",
      "restaurant_id": "40388209"
    },{
      "address": {
        "building": "50",
        "coord": [
          -73.976075,
          40.780319
        ],
        "street": "West   77 Street",
        "zipcode": "10024"
      },
      "borough": "Manhattan",
      "cuisine": "Italian",
      "grades": [
        {
          "date": {
            "$date": 1400025600000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1378425600000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1356652800000
          },
          "grade": "A",
          "score": 6
        },
        {
          "date": {
            "$date": 1333065600000
          },
          "grade": "A",
          "score": 10
        }
      ],
      "name": "Scaletta Ristorante",
      "restaurant_id": "40388214"
    },{
      "address": {
        "building": "16",
        "coord": [
          -74.007032,
          40.7196857
        ],
        "street": "No Moore Street",
        "zipcode": "10013"
      },
      "borough": "Manhattan",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1408924800000
          },
          "grade": "A",
          "score": 8
        },
        {
          "date": {
            "$date": 1375660800000
          },
          "grade": "A",
          "score": 5
        },
        {
          "date": {
            "$date": 1343865600000
          },
          "grade": "A",
          "score": 13
        }
      ],
      "name": "Walker'S Restaurant",
      "restaurant_id": "40388218"
    },{
      "address": {
        "building": "532",
        "coord": [
          -73.993494,
          40.756672
        ],
        "street": "9 Avenue",
        "zipcode": "10018"
      },
      "borough": "Manhattan",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1414713600000
          },
          "grade": "Z",
          "score": 47
        },
        {
          "date": {
            "$date": 1383523200000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1371513600000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1340928000000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1325203200000
          },
          "grade": "B",
          "score": 19
        }
      ],
      "name": "Holland Bar",
      "restaurant_id": "40388225"
    },{
      "address": {
        "building": "2714",
        "coord": [
          -73.9402484,
          40.7509792
        ],
        "street": "Bridge Plaza South",
        "zipcode": "11101"
      },
      "borough": "Queens",
      "cuisine": "Pizza",
      "grades": [
        {
          "date": {
            "$date": 1416355200000
          },
          "grade": "A",
          "score": 6
        },
        {
          "date": {
            "$date": 1403308800000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1387411200000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1354579200000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1342051200000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1328486400000
          },
          "grade": "A",
          "score": 8
        }
      ],
      "name": "Lucky Pizza",
      "restaurant_id": "40388235"
    },{
      "address": {
        "building": "1665",
        "coord": [
          -73.8555094,
          40.8406624
        ],
        "street": "Metropolitan Avenue",
        "zipcode": "10462"
      },
      "borough": "Bronx",
      "cuisine": "Pizza",
      "grades": [
        {
          "date": {
            "$date": 1395878400000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1363219200000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1347494400000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1331769600000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1301356800000
          },
          "grade": "A",
          "score": 13
        }
      ],
      "name": "The Pizza Place",
      "restaurant_id": "40388253"
    },{
      "address": {
        "building": "4814",
        "coord": [
          -73.992091,
          40.6354339
        ],
        "street": "13 Avenue",
        "zipcode": "11219"
      },
      "borough": "Brooklyn",
      "cuisine": "Jewish/Kosher",
      "grades": [
        {
          "date": {
            "$date": 1419897600000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1400112000000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1384819200000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1368489600000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1353369600000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1343001600000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1327536000000
          },
          "grade": "C",
          "score": 42
        }
      ],
      "name": "Amnon Kosher Pizza",
      "restaurant_id": "40388260"
    },{
      "address": {
        "building": "3663",
        "coord": [
          -73.8419254,
          40.8803012
        ],
        "street": "Boston Road",
        "zipcode": "10466"
      },
      "borough": "Bronx",
      "cuisine": "Hamburgers",
      "grades": [
        {
          "date": {
            "$date": 1417564800000
          },
          "grade": "A",
          "score": 2
        },
        {
          "date": {
            "$date": 1387843200000
          },
          "grade": "A",
          "score": 3
        },
        {
          "date": {
            "$date": 1355875200000
          },
          "grade": "A",
          "score": 5
        },
        {
          "date": {
            "$date": 1323820800000
          },
          "grade": "A",
          "score": 2
        }
      ],
      "name": "White Castle",
      "restaurant_id": "40388269"
    },{
      "address": {
        "building": "604",
        "coord": [
          -73.97817599999999,
          40.757775
        ],
        "street": "5 Avenue",
        "zipcode": "10020"
      },
      "borough": "Manhattan",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1386547200000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1372723200000
          },
          "grade": "A",
          "score": 5
        },
        {
          "date": {
            "$date": 1335225600000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1317168000000
          },
          "grade": "B",
          "score": 18
        },
        {
          "date": {
            "$date": 1303344000000
          },
          "grade": "A",
          "score": 5
        }
      ],
      "name": "T.G.I. Friday'S",
      "restaurant_id": "40388270"
    },{
      "address": {
        "building": "300",
        "coord": [
          -73.985568,
          40.7307496
        ],
        "street": "East 12 Street",
        "zipcode": "10003"
      },
      "borough": "Manhattan",
      "cuisine": "Vegetarian",
      "grades": [
        {
          "date": {
            "$date": 1391558400000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1366761600000
          },
          "grade": "B",
          "score": 19
        },
        {
          "date": {
            "$date": 1326758400000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1311552000000
          },
          "grade": "A",
          "score": 10
        }
      ],
      "name": "Angelica Kitchen",
      "restaurant_id": "40388281"
    },{
      "address": {
        "building": "519",
        "coord": [
          -74.00660599999999,
          40.733932
        ],
        "street": "Hudson Street",
        "zipcode": "10014"
      },
      "borough": "Manhattan",
      "cuisine": "Tex-Mex",
      "grades": [
        {
          "date": {
            "$date": 1407456000000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1394582400000
          },
          "grade": "A",
          "score": 6
        },
        {
          "date": {
            "$date": 1376870400000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1359417600000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1338768000000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1326931200000
          },
          "grade": "A",
          "score": 12
        }
      ],
      "name": "Cowgirl Hall Of Fame",
      "restaurant_id": "40388321"
    },{
      "address": {
        "building": "4946",
        "coord": [
          -73.9206715,
          40.8677164
        ],
        "street": "Broadway",
        "zipcode": "10034"
      },
      "borough": "Manhattan",
      "cuisine": "Irish",
      "grades": [
        {
          "date": {
            "$date": 1416182400000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1383696000000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1370217600000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1334707200000
          },
          "grade": "A",
          "score": 3
        },
        {
          "date": {
            "$date": 1323216000000
          },
          "grade": "A",
          "score": 9
        }
      ],
      "name": "Pipers Kilt",
      "restaurant_id": "40388348"
    },{
      "address": {
        "building": "152",
        "coord": [
          -73.986446,
          40.6915505
        ],
        "street": "Lawrence Street",
        "zipcode": "11201"
      },
      "borough": "Brooklyn",
      "cuisine": "Chinese",
      "grades": [
        {
          "date": {
            "$date": 1414368000000
          },
          "grade": "A",
          "score": 5
        },
        {
          "date": {
            "$date": 1398124800000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1377129600000
          },
          "grade": "C",
          "score": 52
        },
        {
          "date": {
            "$date": 1356566400000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1324598400000
          },
          "grade": "A",
          "score": 9
        }
      ],
      "name": "Lee'S Villa Chinese Restaurant",
      "restaurant_id": "40388386"
    },{
      "address": {
        "building": "510",
        "coord": [
          -73.9181633,
          40.8151851
        ],
        "street": "Willis Avenue",
        "zipcode": "10455"
      },
      "borough": "Bronx",
      "cuisine": "Latin (Cuban, Dominican, Puerto Rican, South & Central American)",
      "grades": [
        {
          "date": {
            "$date": 1392336000000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1379462400000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1360713600000
          },
          "grade": "B",
          "score": 23
        },
        {
          "date": {
            "$date": 1344470400000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1331769600000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1318291200000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1306281600000
          },
          "grade": "A",
          "score": 4
        }
      ],
      "name": "Isla Restauraunt",
      "restaurant_id": "40388392"
    },{
      "address": {
        "building": "2859",
        "coord": [
          -73.9669846,
          40.8049697
        ],
        "street": "Broadway",
        "zipcode": "10025"
      },
      "borough": "Manhattan",
      "cuisine": "Pizza",
      "grades": [
        {
          "date": {
            "$date": 1408492800000
          },
          "grade": "B",
          "score": 25
        },
        {
          "date": {
            "$date": 1376092800000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1341878400000
          },
          "grade": "A",
          "score": 5
        },
        {
          "date": {
            "$date": 1321401600000
          },
          "grade": "B",
          "score": 20
        }
      ],
      "name": "Famous Famiglia Pizza",
      "restaurant_id": "40388419"
    },{
      "address": {
        "building": "71",
        "coord": [
          -74.01229450000001,
          40.7074764
        ],
        "street": "Broadway",
        "zipcode": "10006"
      },
      "borough": "Manhattan",
      "cuisine": "Delicatessen",
      "grades": [
        {
          "date": {
            "$date": 1401321600000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1371081600000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1360886400000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1327881600000
          },
          "grade": "A",
          "score": 5
        }
      ],
      "name": "Champ'S Deli",
      "restaurant_id": "40388457"
    },{
      "address": {
        "building": "4005",
        "coord": [
          -73.8177658,
          40.8204314
        ],
        "street": "East Tremont Avenue",
        "zipcode": "10465"
      },
      "borough": "Bronx",
      "cuisine": "Italian",
      "grades": [
        {
          "date": {
            "$date": 1416873600000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1400457600000
          },
          "grade": "B",
          "score": 20
        },
        {
          "date": {
            "$date": 1385078400000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1367280000000
          },
          "grade": "A",
          "score": 4
        },
        {
          "date": {
            "$date": 1338336000000
          },
          "grade": "B",
          "score": 14
        },
        {
          "date": {
            "$date": 1325203200000
          },
          "grade": "B",
          "score": 24
        }
      ],
      "name": "Spoto'S Restaurant",
      "restaurant_id": "40388462"
    },{
      "address": {
        "building": "714",
        "coord": [
          -74.1064605,
          40.634613
        ],
        "street": "Castelton Avenue",
        "zipcode": "10310"
      },
      "borough": "Staten Island",
      "cuisine": "Bagels/Pretzels",
      "grades": [
        {
          "date": {
            "$date": 1410739200000
          },
          "grade": "A",
          "score": 4
        },
        {
          "date": {
            "$date": 1378166400000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1365120000000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1330992000000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1319673600000
          },
          "grade": "A",
          "score": 11
        }
      ],
      "name": "Puttin On A Bagel",
      "restaurant_id": "40388571"
    },{
      "address": {
        "building": "732",
        "coord": [
          -73.97081399999999,
          40.793965
        ],
        "street": "Amsterdam Avenue",
        "zipcode": "10025"
      },
      "borough": "Manhattan",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1418256000000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1386720000000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1369267200000
          },
          "grade": "B",
          "score": 21
        },
        {
          "date": {
            "$date": 1335916800000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1324425600000
          },
          "grade": "A",
          "score": 12
        }
      ],
      "name": "Dive Bar",
      "restaurant_id": "40388578"
    },{
      "address": {
        "building": "111113",
        "coord": [
          -74.00148399999999,
          40.7371583
        ],
        "street": "Greenwich Avenue",
        "zipcode": "10014"
      },
      "borough": "Manhattan",
      "cuisine": "Tex-Mex",
      "grades": [
        {
          "date": {
            "$date": 1401926400000
          },
          "grade": "A",
          "score": 4
        },
        {
          "date": {
            "$date": 1369440000000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1331856000000
          },
          "grade": "A",
          "score": 2
        }
      ],
      "name": "Bennys Burritos",
      "restaurant_id": "40388619"
    },{
      "address": {
        "building": "1000",
        "coord": [
          -73.9619036,
          40.6675708
        ],
        "street": "Washington Avenue",
        "zipcode": "11225"
      },
      "borough": "Brooklyn",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1410825600000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1378339200000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1348012800000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1317772800000
          },
          "grade": "A",
          "score": 5
        }
      ],
      "name": "Brooklyn Botanic Catering Hall",
      "restaurant_id": "40388637"
    },{
      "address": {
        "building": "6827",
        "coord": [
          -73.8836996,
          40.7019366
        ],
        "street": "Myrtle Avenue",
        "zipcode": "11385"
      },
      "borough": "Queens",
      "cuisine": "Pizza",
      "grades": [
        {
          "date": {
            "$date": 1410912000000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1374624000000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1343174400000
          },
          "grade": "A",
          "score": 8
        }
      ],
      "name": "Glendale Pizza",
      "restaurant_id": "40388639"
    },{
      "address": {
        "building": "6",
        "coord": [
          -73.97937,
          40.754292
        ],
        "street": "East   44 Street",
        "zipcode": "10017"
      },
      "borough": "Manhattan",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1407715200000
          },
          "grade": "A",
          "score": 3
        },
        {
          "date": {
            "$date": 1376611200000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1345420800000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1333497600000
          },
          "grade": "A",
          "score": 2
        },
        {
          "date": {
            "$date": 1321315200000
          },
          "grade": "A",
          "score": 12
        }
      ],
      "name": "The Cornell Center Of New York",
      "restaurant_id": "40388640"
    },{
      "address": {
        "building": "3023",
        "coord": [
          -73.94875979999999,
          40.6509995
        ],
        "street": "Church Avenue",
        "zipcode": "11226"
      },
      "borough": "Brooklyn",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1399507200000
          },
          "grade": "A",
          "score": 4
        },
        {
          "date": {
            "$date": 1366848000000
          },
          "grade": "A",
          "score": 0
        },
        {
          "date": {
            "$date": 1345248000000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1332892800000
          },
          "grade": "A",
          "score": 13
        }
      ],
      "name": "Queen Bee'S Tavern",
      "restaurant_id": "40388668"
    },{
      "address": {
        "building": "1090",
        "coord": [
          -73.96098789999999,
          40.778213
        ],
        "street": "Madison Avenue",
        "zipcode": "10028"
      },
      "borough": "Manhattan",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1409875200000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1392854400000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1358208000000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1343692800000
          },
          "grade": "C",
          "score": 44
        },
        {
          "date": {
            "$date": 1331596800000
          },
          "grade": "A",
          "score": 13
        }
      ],
      "name": "Nectar Of 82Nd Street",
      "restaurant_id": "40388672"
    },{
      "address": {
        "building": "781",
        "coord": [
          -73.9431862,
          40.7146566
        ],
        "street": "Metropolitan Avenue",
        "zipcode": "11211"
      },
      "borough": "Brooklyn",
      "cuisine": "Hamburgers",
      "grades": [
        {
          "date": {
            "$date": 1408924800000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1378684800000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1364256000000
          },
          "grade": "A",
          "score": 2
        },
        {
          "date": {
            "$date": 1362441600000
          },
          "grade": "P",
          "score": 2
        },
        {
          "date": {
            "$date": 1330992000000
          },
          "grade": "A",
          "score": 2
        }
      ],
      "name": "White Castle",
      "restaurant_id": "40388703"
    },{
      "address": {
        "building": "584",
        "coord": [
          -73.97128959999999,
          40.7881015
        ],
        "street": "Columbus Avenue",
        "zipcode": "10024"
      },
      "borough": "Manhattan",
      "cuisine": "Italian",
      "grades": [
        {
          "date": {
            "$date": 1420588800000
          },
          "grade": "Z",
          "score": 25
        },
        {
          "date": {
            "$date": 1405123200000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1385337600000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1367971200000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1335744000000
          },
          "grade": "A",
          "score": 9
        }
      ],
      "name": "Bella Luna",
      "restaurant_id": "40388730"
    },{
      "address": {
        "building": "47",
        "coord": [
          -73.9786446,
          40.7527136
        ],
        "street": "East 42 Street",
        "zipcode": "10017"
      },
      "borough": "Manhattan",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1398902400000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1364169600000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1350518400000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1319155200000
          },
          "grade": "A",
          "score": 5
        },
        {
          "date": {
            "$date": 1306281600000
          },
          "grade": "A",
          "score": 7
        }
      ],
      "name": "T.G.I. Friday'S",
      "restaurant_id": "40388747"
    },{
      "address": {
        "building": "30-08",
        "coord": [
          -73.9153499,
          40.7637436
        ],
        "street": "Steinway Street",
        "zipcode": "11103"
      },
      "borough": "Queens",
      "cuisine": "Ice Cream, Gelato, Yogurt, Ices",
      "grades": [
        {
          "date": {
            "$date": 1391558400000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1372723200000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1371772800000
          },
          "grade": "P",
          "score": 2
        },
        {
          "date": {
            "$date": 1357862400000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1323388800000
          },
          "grade": "A",
          "score": 10
        }
      ],
      "name": "Baskin Robbins",
      "restaurant_id": "40388775"
    },{
      "address": {
        "building": "25",
        "coord": [
          -73.9860427,
          40.7229989
        ],
        "street": "Avenue A",
        "zipcode": "10009"
      },
      "borough": "Manhattan",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1383004800000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1351296000000
          },
          "grade": "A",
          "score": 5
        },
        {
          "date": {
            "$date": 1318896000000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1308787200000
          },
          "grade": "A",
          "score": 7
        }
      ],
      "name": "2A",
      "restaurant_id": "40388784"
    },{
      "address": {
        "building": "969",
        "coord": [
          -73.962756,
          40.769241
        ],
        "street": "Lexington Avenue",
        "zipcode": "10021"
      },
      "borough": "Manhattan",
      "cuisine": "Italian",
      "grades": [
        {
          "date": {
            "$date": 1399507200000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1384905600000
          },
          "grade": "A",
          "score": 2
        },
        {
          "date": {
            "$date": 1364774400000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1328745600000
          },
          "grade": "A",
          "score": 7
        }
      ],
      "name": "Sette Mezzo",
      "restaurant_id": "40388787"
    },{
      "address": {
        "building": "80",
        "coord": [
          -73.99624560000001,
          40.6951645
        ],
        "street": "Montague Street",
        "zipcode": "11201"
      },
      "borough": "Brooklyn",
      "cuisine": "Eastern European",
      "grades": [
        {
          "date": {
            "$date": 1405382400000
          },
          "grade": "A",
          "score": 5
        },
        {
          "date": {
            "$date": 1373241600000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1360281600000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1345766400000
          },
          "grade": "B",
          "score": 22
        },
        {
          "date": {
            "$date": 1332979200000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1320796800000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1311033600000
          },
          "grade": "A",
          "score": 7
        }
      ],
      "name": "Teresa'S Resturant",
      "restaurant_id": "40388808"
    },{
      "address": {
        "building": "122",
        "coord": [
          -73.9876443,
          40.7358217
        ],
        "street": "East   17 Street",
        "zipcode": "10003"
      },
      "borough": "Manhattan",
      "cuisine": "Japanese",
      "grades": [
        {
          "date": {
            "$date": 1403740800000
          },
          "grade": "B",
          "score": 19
        },
        {
          "date": {
            "$date": 1384732800000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1364342400000
          },
          "grade": "C",
          "score": 36
        },
        {
          "date": {
            "$date": 1345507200000
          },
          "grade": "A",
          "score": 13
        }
      ],
      "name": "Yama Japanese Restaurant'",
      "restaurant_id": "40388818"
    },{
      "address": {
        "building": "8822",
        "coord": [
          -74.03208579999999,
          40.6215814
        ],
        "street": "3 Avenue",
        "zipcode": "11209"
      },
      "borough": "Brooklyn",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1407456000000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1393977600000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1368144000000
          },
          "grade": "A",
          "score": 6
        },
        {
          "date": {
            "$date": 1348617600000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1331510400000
          },
          "grade": "A",
          "score": 11
        }
      ],
      "name": "Chadwick'S",
      "restaurant_id": "40388823"
    },{
      "address": {
        "building": "132",
        "coord": [
          -73.9874091,
          40.72863479999999
        ],
        "street": "Second Avenue",
        "zipcode": "10003"
      },
      "borough": "Manhattan",
      "cuisine": "Barbecue",
      "grades": [
        {
          "date": {
            "$date": 1404777600000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1391385600000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1369872000000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1351123200000
          },
          "grade": "A",
          "score": 5
        },
        {
          "date": {
            "$date": 1318464000000
          },
          "grade": "A",
          "score": 11
        }
      ],
      "name": "Dallas Bbq",
      "restaurant_id": "40388828"
    },{
      "address": {
        "building": "313",
        "coord": [
          -73.988568,
          40.760303
        ],
        "street": "West 46 Street",
        "zipcode": "10036"
      },
      "borough": "Manhattan",
      "cuisine": "Italian",
      "grades": [
        {
          "date": {
            "$date": 1417996800000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1404172800000
          },
          "grade": "B",
          "score": 21
        },
        {
          "date": {
            "$date": 1369094400000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1337126400000
          },
          "grade": "A",
          "score": 13
        }
      ],
      "name": "La Rivista Restaurant",
      "restaurant_id": "40388863"
    },{
      "address": {
        "building": "113",
        "coord": [
          -73.987875,
          40.719752
        ],
        "street": "Rivington Street",
        "zipcode": "10002"
      },
      "borough": "Manhattan",
      "cuisine": "Latin (Cuban, Dominican, Puerto Rican, South & Central American)",
      "grades": [
        {
          "date": {
            "$date": 1409011200000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1395446400000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1379462400000
          },
          "grade": "A",
          "score": 2
        },
        {
          "date": {
            "$date": 1346198400000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1316476800000
          },
          "grade": "A",
          "score": 11
        }
      ],
      "name": "El Castillo De Jagua Rest",
      "restaurant_id": "40388901"
    },{
      "address": {
        "building": "80",
        "coord": [
          -73.9848522,
          40.7533144
        ],
        "street": "West   40 Street",
        "zipcode": "10018"
      },
      "borough": "Manhattan",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1398038400000
          },
          "grade": "A",
          "score": 6
        },
        {
          "date": {
            "$date": 1365638400000
          },
          "grade": "A",
          "score": 5
        },
        {
          "date": {
            "$date": 1334620800000
          },
          "grade": "A",
          "score": 12
        }
      ],
      "name": "Pax Wholesome Foods",
      "restaurant_id": "40388917"
    },{
      "address": {
        "building": "240",
        "coord": [
          -73.98779019999999,
          40.7292837
        ],
        "street": "East    9 Street",
        "zipcode": "10003"
      },
      "borough": "Manhattan",
      "cuisine": "Japanese",
      "grades": [
        {
          "date": {
            "$date": 1417651200000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1399420800000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1374537600000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1353974400000
          },
          "grade": "A",
          "score": 12
        }
      ],
      "name": "Sakebar Decibel",
      "restaurant_id": "40388935"
    },{
      "address": {
        "building": "1",
        "coord": [
          -0.7119979,
          51.6514664
        ],
        "street": "Pennplaza E, Penn Sta",
        "zipcode": "10001"
      },
      "borough": "Manhattan",
      "cuisine": "American ",
      "grades": [
        {
          "date": {
            "$date": 1404172800000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1390867200000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1358121600000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1325808000000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1315353600000
          },
          "grade": "A",
          "score": 5
        }
      ],
      "name": "T.G.I. Fridays",
      "restaurant_id": "40388936"
    },{
      "address": {
        "building": "2214",
        "coord": [
          -73.82328319999999,
          40.8689401
        ],
        "street": "Bartow Ave",
        "zipcode": "10475"
      },
      "borough": "Bronx",
      "cuisine": "Delicatessen",
      "grades": [
        {
          "date": {
            "$date": 1413590400000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1398988800000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1383091200000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1369872000000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1360627200000
          },
          "grade": "B",
          "score": 18
        },
        {
          "date": {
            "$date": 1326844800000
          },
          "grade": "A",
          "score": 7
        }
      ],
      "name": "Bagel Cafe",
      "restaurant_id": "40389011"
    },{
      "address": {
        "building": "93",
        "coord": [
          -73.9842265,
          40.7253886
        ],
        "street": "Avenue A",
        "zipcode": "10009"
      },
      "borough": "Manhattan",
      "cuisine": "Tex-Mex",
      "grades": [
        {
          "date": {
            "$date": 1410912000000
          },
          "grade": "B",
          "score": 20
        },
        {
          "date": {
            "$date": 1387238400000
          },
          "grade": "A",
          "score": 8
        },
        {
          "date": {
            "$date": 1371427200000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1355097600000
          },
          "grade": "B",
          "score": 21
        },
        {
          "date": {
            "$date": 1320796800000
          },
          "grade": "A",
          "score": 12
        }
      ],
      "name": "Benny'S Burritos",
      "restaurant_id": "40389019"
    },{
      "address": {
        "building": "67",
        "coord": [
          -73.987292,
          40.725414
        ],
        "street": "First Avenue",
        "zipcode": "10003"
      },
      "borough": "Manhattan",
      "cuisine": "Latin (Cuban, Dominican, Puerto Rican, South & Central American)",
      "grades": [
        {
          "date": {
            "$date": 1394064000000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1379548800000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1354665600000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1319155200000
          },
          "grade": "A",
          "score": 0
        }
      ],
      "name": "Guayoyo",
      "restaurant_id": "40389038"
    },{
      "address": {
        "building": "819",
        "coord": [
          -73.98724899999999,
          40.766272
        ],
        "street": "9 Avenue",
        "zipcode": "10019"
      },
      "borough": "Manhattan",
      "cuisine": "Pizza",
      "grades": [
        {
          "date": {
            "$date": 1403049600000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1389657600000
          },
          "grade": "A",
          "score": 2
        },
        {
          "date": {
            "$date": 1355097600000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1323043200000
          },
          "grade": "A",
          "score": 8
        }
      ],
      "name": "Sacco Pizza",
      "restaurant_id": "40389114"
    },{
      "address": {
        "building": "25-41",
        "coord": [
          -73.9270272,
          40.7629397
        ],
        "street": "Broadway",
        "zipcode": "11106"
      },
      "borough": "Queens",
      "cuisine": "Italian",
      "grades": [
        {
          "date": {
            "$date": 1393459200000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1377561600000
          },
          "grade": "A",
          "score": 5
        },
        {
          "date": {
            "$date": 1344211200000
          },
          "grade": "A",
          "score": 8
        },
        {
          "date": {
            "$date": 1333152000000
          },
          "grade": "B",
          "score": 16
        },
        {
          "date": {
            "$date": 1318809600000
          },
          "grade": "A",
          "score": 12
        },
        {
          "date": {
            "$date": 1308700800000
          },
          "grade": "A",
          "score": 10
        }
      ],
      "name": "Sac'S Pizza Place",
      "restaurant_id": "40389115"
    },{
      "address": {
        "building": "176",
        "coord": [
          -74.0017238,
          40.7359904
        ],
        "street": "7 Avenue South",
        "zipcode": "10014"
      },
      "borough": "Manhattan",
      "cuisine": "Pizza",
      "grades": [
        {
          "date": {
            "$date": 1391644800000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1373414400000
          },
          "grade": "A",
          "score": 7
        },
        {
          "date": {
            "$date": 1359417600000
          },
          "grade": "B",
          "score": 22
        },
        {
          "date": {
            "$date": 1338854400000
          },
          "grade": "A",
          "score": 11
        },
        {
          "date": {
            "$date": 1326931200000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1311724800000
          },
          "grade": "A",
          "score": 9
        }
      ],
      "name": "Rivoli Pizza Restaurant",
      "restaurant_id": "40389138"
    },{
      "address": {
        "building": "945",
        "coord": [
          -73.8881363,
          40.655407
        ],
        "street": "Pennsylvania Avenue",
        "zipcode": "11207"
      },
      "borough": "Brooklyn",
      "cuisine": "Pizza",
      "grades": [
        {
          "date": {
            "$date": 1414540800000
          },
          "grade": "A",
          "score": 0
        },
        {
          "date": {
            "$date": 1384473600000
          },
          "grade": "A",
          "score": 2
        },
        {
          "date": {
            "$date": 1354579200000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1340755200000
          },
          "grade": "A",
          "score": 0
        },
        {
          "date": {
            "$date": 1328054400000
          },
          "grade": "A",
          "score": 12
        }
      ],
      "name": "Royal Pizza",
      "restaurant_id": "40389175"
    },{
      "address": {
        "building": "903",
        "coord": [
          -73.98482229999999,
          40.7645702
        ],
        "street": "Eighth Avenue",
        "zipcode": "10019"
      },
      "borough": "Manhattan",
      "cuisine": "Italian",
      "grades": [
        {
          "date": {
            "$date": 1420848000000
          },
          "grade": "Z",
          "score": 27
        },
        {
          "date": {
            "$date": 1401667200000
          },
          "grade": "A",
          "score": 5
        },
        {
          "date": {
            "$date": 1367366400000
          },
          "grade": "A",
          "score": 5
        },
        {
          "date": {
            "$date": 1353283200000
          },
          "grade": "A",
          "score": 13
        },
        {
          "date": {
            "$date": 1329868800000
          },
          "grade": "B",
          "score": 21
        }
      ],
      "name": "Da Tommasso",
      "restaurant_id": "40389243"
    }
  ]
};

    
app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  //response.render('pages/index');
  //response.sendFile(__dirname + '/index.html');
  response.setHeader('Content-Type', 'application/json');
  response.send(JSON.stringify(data));
});

app.get('/cool', function(request, response) {
  response.setHeader('Content-Type', 'application/json');
  response.send(JSON.stringify(data));
});
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


