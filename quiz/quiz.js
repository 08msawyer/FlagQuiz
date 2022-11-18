const countries = [
    {
        country: "Afghanistan",
        code: "004"
    },
    {
        country: "Albania",
        code: "008"
    },
    {
        country: "Algeria",
        code: "012"
    },
    {
        country: "American Samoa",
        code: "016"
    },
    {
        country: "Andorra",
        code: "020"
    },
    {
        country: "Angola",
        code: "024"
    },
    {
        country: "Anguilla",
        code: "660"
    },
    {
        country: "Antarctica",
        code: "010"
    },
    {
        country: "Antigua and Barbuda",
        code: "028"
    },
    {
        country: "Argentina",
        code: "032"
    },
    {
        country: "Armenia",
        code: "051"
    },
    {
        country: "Aruba",
        code: "533"
    },
    {
        country: "Australia",
        code: "036"
    },
    {
        country: "Austria",
        code: "040"
    },
    {
        country: "Azerbaijan",
        code: "031"
    },
    {
        country: "Bahamas (the)",
        code: "044"
    },
    {
        country: "Bahrain",
        code: "048"
    },
    {
        country: "Bangladesh",
        code: "050"
    },
    {
        country: "Barbados",
        code: "052"
    },
    {
        country: "Belarus",
        code: "112"
    },
    {
        country: "Belgium",
        code: "056"
    },
    {
        country: "Belize",
        code: "084"
    },
    {
        country: "Benin",
        code: "204"
    },
    {
        country: "Bermuda",
        code: "060"
    },
    {
        country: "Bhutan",
        code: "064"
    },
    {
        country: "Bolivia (Plurinational State of)",
        code: "068"
    },
    {
        country: "Bonaire, Sint Eustatius and Saba",
        code: "535"
    },
    {
        country: "Bosnia and Herzegovina",
        code: "070"
    },
    {
        country: "Botswana",
        code: "072"
    },
    {
        country: "Bouvet Island",
        code: "074"
    },
    {
        country: "Brazil",
        code: "076"
    },
    {
        country: "British Indian Ocean Territory (the)",
        code: "086"
    },
    {
        country: "Brunei Darussalam",
        code: "096"
    },
    {
        country: "Bulgaria",
        code: "100"
    },
    {
        country: "Burkina Faso",
        code: "854"
    },
    {
        country: "Burundi",
        code: "108"
    },
    {
        country: "Cabo Verde",
        code: "132"
    },
    {
        country: "Cambodia",
        code: "116"
    },
    {
        country: "Cameroon",
        code: "120"
    },
    {
        country: "Canada",
        code: "124"
    },
    {
        country: "Cayman Islands (the)",
        code: "136"
    },
    {
        country: "Central African Republic (the)",
        code: "140"
    },
    {
        country: "Chad",
        code: "148"
    },
    {
        country: "Chile",
        code: "152"
    },
    {
        country: "China",
        code: "156"
    },
    {
        country: "Christmas Island",
        code: "162"
    },
    {
        country: "Cocos (Keeling) Islands (the)",
        code: "166"
    },
    {
        country: "Colombia",
        code: "170"
    },
    {
        country: "Comoros (the)",
        code: "174"
    },
    {
        country: "Congo (the Democratic Republic of the)",
        code: "180"
    },
    {
        country: "Congo (the)",
        code: "178"
    },
    {
        country: "Cook Islands (the)",
        code: "184"
    },
    {
        country: "Costa Rica",
        code: "188"
    },
    {
        country: "Croatia",
        code: "191"
    },
    {
        country: "Cuba",
        code: "192"
    },
    {
        country: "Curaçao",
        code: "531"
    },
    {
        country: "Cyprus",
        code: "196"
    },
    {
        country: "Czechia",
        code: "203"
    },
    {
        country: "Côte d'Ivoire",
        code: "384"
    },
    {
        country: "Denmark",
        code: "208"
    },
    {
        country: "Djibouti",
        code: "262"
    },
    {
        country: "Dominica",
        code: "212"
    },
    {
        country: "Dominican Republic (the)",
        code: "214"
    },
    {
        country: "Ecuador",
        code: "218"
    },
    {
        country: "Egypt",
        code: "818"
    },
    {
        country: "El Salvador",
        code: "222"
    },
    {
        country: "Equatorial Guinea",
        code: "226"
    },
    {
        country: "Eritrea",
        code: "232"
    },
    {
        country: "Estonia",
        code: "233"
    },
    {
        country: "Eswatini",
        code: "748"
    },
    {
        country: "Ethiopia",
        code: "231"
    },
    {
        country: "Falkland Islands (the)",
        code: "238"
    },
    {
        country: "Faroe Islands (the)",
        code: "234"
    },
    {
        country: "Fiji",
        code: "242"
    },
    {
        country: "Finland",
        code: "246"
    },
    {
        country: "France",
        code: "250"
    },
    {
        country: "French Guiana",
        code: "254"
    },
    {
        country: "French Polynesia",
        code: "258"
    },
    {
        country: "French Southern Territories (the)",
        code: "260"
    },
    {
        country: "Gabon",
        code: "266"
    },
    {
        country: "Gambia (the)",
        code: "270"
    },
    {
        country: "Georgia",
        code: "268"
    },
    {
        country: "Bermany",
        code: "276"
    },
    {
        country: "Ghana",
        code: "288"
    },
    {
        country: "Gibraltar",
        code: "292"
    },
    {
        country: "Greece",
        code: "300"
    },
    {
        country: "Greenland",
        code: "304"
    },
    {
        country: "Grenada",
        code: "308"
    },
    {
        country: "Guadeloupe",
        code: "312"
    },
    {
        country: "Guam",
        code: "316"
    },
    {
        country: "Guatemala",
        code: "320"
    },
    {
        country: "Guernsey",
        code: "831"
    },
    {
        country: "Guinea",
        code: "324"
    },
    {
        country: "Guinea-Bissau",
        code: "624"
    },
    {
        country: "Guyana",
        code: "328"
    },
    {
        country: "Haiti",
        code: "332"
    },
    {
        country: "Heard Island and McDonald Islands",
        code: "334"
    },
    {
        country: "Holy See (the)",
        code: "336"
    },
    {
        country: "Honduras",
        code: "340"
    },
    {
        country: "Hong Kong",
        code: "344"
    },
    {
        country: "Hungary",
        code: "348"
    },
    {
        country: "Iceland",
        code: "352"
    },
    {
        country: "India",
        code: "356"
    },
    {
        country: "Indonesia",
        code: "360"
    },
    {
        country: "Iran (Islamic Republic of)",
        code: "364"
    },
    {
        country: "Iraq",
        code: "368"
    },
    {
        country: "Ireland",
        code: "372"
    },
    {
        country: "Isle of Man",
        code: "833"
    },
    {
        country: "Israel",
        code: "376"
    },
    {
        country: "Italy",
        code: "380"
    },
    {
        country: "Jamaica",
        code: "388"
    },
    {
        country: "Japan",
        code: "392"
    },
    {
        country: "Jersey",
        code: "832"
    },
    {
        country: "Jordan",
        code: "400"
    },
    {
        country: "Kazakhstan",
        code: "398"
    },
    {
        country: "Kenya",
        code: "404"
    },
    {
        country: "Kiribati",
        code: "296"
    },
    {
        country: "Korea (the Democratic People's Republic of)",
        code: "408"
    },
    {
        country: "Korea (the Republic of)",
        code: "410"
    },
    {
        country: "Kuwait",
        code: "414"
    },
    {
        country: "Kyrgyzstan",
        code: "417"
    },
    {
        country: "Lao People's Democratic Republic (the)",
        code: "418"
    },
    {
        country: "Latvia",
        code: "428"
    },
    {
        country: "Lebanon",
        code: "422"
    },
    {
        country: "Lesotho",
        code: "426"
    },
    {
        country: "Liberia",
        code: "430"
    },
    {
        country: "Libya",
        code: "434"
    },
    {
        country: "Liechtenstein",
        code: "438"
    },
    {
        country: "Lithuania",
        code: "440"
    },
    {
        country: "Luxembourg",
        code: "442"
    },
    {
        country: "Macao",
        code: "446"
    },
    {
        country: "Madagascar",
        code: "450"
    },
    {
        country: "Malawi",
        code: "454"
    },
    {
        country: "Malaysia",
        code: "458"
    },
    {
        country: "Maldives",
        code: "462"
    },
    {
        country: "Mali",
        code: "466"
    },
    {
        country: "Malta",
        code: "470"
    },
    {
        country: "Marshall Islands (the)",
        code: "584"
    },
    {
        country: "Martinique",
        code: "474"
    },
    {
        country: "Mauritania",
        code: "478"
    },
    {
        country: "Mauritius",
        code: "480"
    },
    {
        country: "Mayotte",
        code: "175"
    },
    {
        country: "Mexico",
        code: "484"
    },
    {
        country: "Micronesia (Federated States of)",
        code: "583"
    },
    {
        country: "Moldova (the Republic of)",
        code: "498"
    },
    {
        country: "Monaco",
        code: "492"
    },
    {
        country: "Mongolia",
        code: "496"
    },
    {
        country: "Montenegro",
        code: "499"
    },
    {
        country: "Montserrat",
        code: "500"
    },
    {
        country: "Morocco",
        code: "504"
    },
    {
        country: "Mozambique",
        code: "508"
    },
    {
        country: "Myanmar",
        code: "104"
    },
    {
        country: "Namibia",
        code: "516"
    },
    {
        country: "Nauru",
        code: "520"
    },
    {
        country: "Nepal",
        code: "524"
    },
    {
        country: "Netherlands (the)",
        code: "528"
    },
    {
        country: "New Caledonia",
        code: "540"
    },
    {
        country: "New Zealand",
        code: "554"
    },
    {
        country: "Nicaragua",
        code: "558"
    },
    {
        country: "Niger (the)",
        code: "562"
    },
    {
        country: "Nigeria",
        code: "566"
    },
    {
        country: "Niue",
        code: "570"
    },
    {
        country: "Norfolk Island",
        code: "574"
    },
    {
        country: "Northern Mariana Islands (the)",
        code: "580"
    },
    {
        country: "Norway",
        code: "578"
    },
    {
        country: "Oman",
        code: "512"
    },
    {
        country: "Pakistan",
        code: "586"
    },
    {
        country: "Palau",
        code: "585"
    },
    {
        country: "Palestine (State of)",
        code: "275"
    },
    {
        country: "Panama",
        code: "591"
    },
    {
        country: "Papua New Guinea",
        code: "598"
    },
    {
        country: "Paraguay",
        code: "600"
    },
    {
        country: "Peru",
        code: "604"
    },
    {
        country: "Philippines (the)",
        code: "608"
    },
    {
        country: "Pitcairn",
        code: "612"
    },
    {
        country: "Poland",
        code: "616"
    },
    {
        country: "Portugal",
        code: "620"
    },
    {
        country: "Puerto Rico",
        code: "630"
    },
    {
        country: "Qatar",
        code: "634"
    },
    {
        country: "Republic of North Macedonia",
        code: "807"
    },
    {
        country: "Romania",
        code: "642"
    },
    {
        country: "Russian Federation (the)",
        code: "643"
    },
    {
        country: "Rwanda",
        code: "646"
    },
    {
        country: "Réunion",
        code: "638"
    },
    {
        country: "Saint Barthélemy",
        code: "652"
    },
    {
        country: "Saint Helena, Ascension and Tristan da Cunha",
        code: "654"
    },
    {
        country: "Saint Kitts and Nevis",
        code: "659"
    },
    {
        country: "Saint Lucia",
        code: "662"
    },
    {
        country: "Saint Martin (French part)",
        code: "663"
    },
    {
        country: "Saint Pierre and Miquelon",
        code: "666"
    },
    {
        country: "Saint Vincent and the Grenadines",
        code: "670"
    },
    {
        country: "Samoa",
        code: "882"
    },
    {
        country: "San Marino",
        code: "674"
    },
    {
        country: "Sao Tome and Principe",
        code: "678"
    },
    {
        country: "Saudi Arabia",
        code: "682"
    },
    {
        country: "Senegal",
        code: "686"
    },
    {
        country: "Serbia",
        code: "688"
    },
    {
        country: "Seychelles",
        code: "690"
    },
    {
        country: "Sierra Leone",
        code: "694"
    },
    {
        country: "Singapore",
        code: "702"
    },
    {
        country: "Sint Maarten (Dutch part)",
        code: "534"
    },
    {
        country: "Slovakia",
        code: "703"
    },
    {
        country: "Slovenia",
        code: "705"
    },
    {
        country: "Solomon Islands",
        code: "090"
    },
    {
        country: "Somalia",
        code: "706"
    },
    {
        country: "South Africa",
        code: "710"
    },
    {
        country: "South Georgia and the South Sandwich Islands",
        code: "239"
    },
    {
        country: "South Sudan",
        code: "728"
    },
    {
        country: "Spain",
        code: "724"
    },
    {
        country: "Sri Lanka",
        code: "144"
    },
    {
        country: "Sudan (the)",
        code: "729"
    },
    {
        country: "Suriname",
        code: "740"
    },
    {
        country: "Svalbard and Jan Mayen",
        code: "744"
    },
    {
        country: "Sweden",
        code: "752"
    },
    {
        country: "Switzerland",
        code: "756"
    },
    {
        country: "Syrian Arab Republic",
        code: "760"
    },
    {
        country: "Taiwan (Province of China)",
        code: "158"
    },
    {
        country: "Tajikistan",
        code: "762"
    },
    {
        country: "Tanzania (United Republic of)",
        code: "834"
    },
    {
        country: "Thailand",
        code: "764"
    },
    {
        country: "Timor-Leste",
        code: "626"
    },
    {
        country: "Togo",
        code: "768"
    },
    {
        country: "Tokelau",
        code: "772"
    },
    {
        country: "Tonga",
        code: "776"
    },
    {
        country: "Trinidad and Tobago",
        code: "780"
    },
    {
        country: "Tunisia",
        code: "788"
    },
    {
        country: "Turkey",
        code: "792"
    },
    {
        country: "Turkmenistan",
        code: "795"
    },
    {
        country: "Turks and Caicos Islands (the)",
        code: "796"
    },
    {
        country: "Tuvalu",
        code: "798"
    },
    {
        country: "Uganda",
        code: "800"
    },
    {
        country: "Ukraine",
        code: "804"
    },
    {
        country: "United Arab Emirates (the)",
        code: "784"
    },
    {
        country: "United Kingdom of Great Britain and Northern Ireland (the)",
        code: "826"
    },
    {
        country: "United States Minor Outlying Islands (the)",
        code: "581"
    },
    {
        country: "United States of America (the)",
        code: "840"
    },
    {
        country: "Uruguay",
        code: "858"
    },
    {
        country: "Uzbekistan",
        code: "860"
    },
    {
        country: "Vanuatu",
        code: "548"
    },
    {
        country: "Venezuela (Bolivarian Republic of)",
        code: "862"
    },
    {
        country: "Viet Nam",
        code: "704"
    },
    {
        country: "Virgin Islands (British)",
        code: "092"
    },
    {
        country: "Virgin Islands (U.S.)",
        code: "850"
    },
    {
        country: "Wallis and Futuna",
        code: "876"
    },
    {
        country: "Western Sahara",
        code: "732"
    },
    {
        country: "Yemen",
        code: "887"
    },
    {
        country: "Zambia",
        code: "894"
    },
    {
        country: "Zimbabwe",
        code: "716"
    },
    {
        country: "Åland Islands",
        code: "248"
    }
]

let currentCountry = null
let score = 0
let asked = 0

const isGuessCorrect = (rawAnswer, rawGuess) => {
    let answer = rawAnswer.toLowerCase()
    let guess = rawGuess.toLowerCase()
    if (guess === answer) {
        return true
    }
    if (answer.endsWith(")")) {
        let primary = answer.substring(0, answer.indexOf(" ("))
        let bracketed = answer.substring(answer.lastIndexOf(" ("))
        let suffix = bracketed.substr(2, bracketed.length - 3)
        return guess === primary || guess === `${suffix} ${primary}`
    }

    return false
}

const loadFlag = () => {
    const country = countries[Math.floor(Math.random() * countries.length)]
    currentCountry = country
    const name = country.country
    const code = country.code

    document.getElementById("flag-container").innerHTML = `
    <img src="https://countryflagsapi.com/svg/${code}" alt="Flag of ${name}" id="flag"/>
    `
    document.getElementById("score-container").innerHTML = `${score}/${asked}`
    document.querySelector("[name=guess]").value = ""
}

const guessed = event => {
    let guess = new FormData(event.currentTarget).get("guess")
    if (isGuessCorrect(currentCountry.country, guess)) {
        alert("Correct!")
        score++
    } else {
        alert(`Incorrect! It was ${currentCountry.country}`)
    }
    asked++
    loadFlag()
}

window.onload = () => {
    loadFlag()
}
