import React, { Component } from 'react';
import './header.css';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import LeftBar from "../leftbar/leftbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Content from "../content/content";

class Header extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            key: 'users',
            users: [
                {
                    id: 1,
                    name: "Quinn Dunn",
                    email: "egestas@quamafelis.com"
                },
                {
                    id: 2,
                    name: "Pascale B. Acosta",
                    email: "quam@molestieorci.com"
                },
                {
                    id: 3,
                    name: "Nita Lyons",
                    email: "Praesent.eu@Sedmolestie.org"
                },
                {
                    id: 4,
                    name: "Xandra F. Fleming",
                    email: "eget.mollis.lectus@Nunc.net"
                },
                {
                    id: 5,
                    name: "Leroy H. Mathews",
                    email: "ultricies.adipiscing@lobortistellus.com"
                },
                {
                    id: 6,
                    name: "Honorato Barber",
                    email: "ac.mattis.semper@Namporttitor.org"
                },
                {
                    id: 7,
                    name: "Pearl K. Jackson",
                    email: "in.dolor@Utsagittislobortis.co.uk"
                },
                {
                    id: 8,
                    name: "Unity Y. Strong",
                    email: "sapien.Aenean.massa@ipsumporta.com"
                },
                {
                    id: 9,
                    name: "Cassidy Rivera",
                    email: "nisl.Maecenas@scelerisque.com"
                },
                {
                    id: 10,
                    name: "Omar Ferguson",
                    email: "ipsum.primis@nequenon.net"
                },
                {
                    id: 11,
                    name: "Georgia W. Fuller",
                    email: "adipiscing@litoratorquentper.co.uk"
                },
                {
                    id: 12,
                    name: "Remedios Q. Kelly",
                    email: "vitae.semper.egestas@velquam.edu"
                },
                {
                    id: 13,
                    name: "Maggy T. Monroe",
                    email: "ac.eleifend@lorem.com"
                },
                {
                    id: 14,
                    name: "Chaim N. Pollard",
                    email: "Quisque@augueeutellus.ca"
                },
                {
                    id: 15,
                    name: "Nayda Spence",
                    email: "nec.euismod.in@sitamet.edu"
                },
                {
                    id: 16,
                    name: "Wayne Waters",
                    email: "a.mi.fringilla@etmagnisdis.ca"
                },
                {
                    id: 17,
                    name: "Rinah Mcdaniel",
                    email: "libero@justoProin.org"
                },
                {
                    id: 18,
                    name: "Lareina U. Campbell",
                    email: "orci@ami.org"
                },
                {
                    id: 19,
                    name: "Reagan Salazar",
                    email: "Fusce.aliquet.magna@ante.ca"
                },
                {
                    id: 20,
                    name: "Leroy Ingram",
                    email: "ullamcorper.velit@non.edu"
                },
                {
                    id: 21,
                    name: "Destiny O. Ware",
                    email: "enim.Nunc.ut@penatibus.edu"
                },
                {
                    id: 22,
                    name: "Thaddeus Cash",
                    email: "nascetur@ligulaconsectetuer.ca"
                },
                {
                    id: 23,
                    name: "Urielle N. Henry",
                    email: "aliquam@odio.com"
                },
                {
                    id: 24,
                    name: "Linda England",
                    email: "elementum.dui.quis@placeratorci.ca"
                },
                {
                    id: 25,
                    name: "Samantha Payne",
                    email: "sapien@morbitristiquesenectus.net"
                },
                {
                    id: 26,
                    name: "Hollee Cooley",
                    email: "Lorem@feugiat.ca"
                },
                {
                    id: 27,
                    name: "Ariana M. Lyons",
                    email: "velit.justo@semperauctorMauris.com"
                },
                {
                    id: 28,
                    name: "Teagan Rollins",
                    email: "libero.dui@diam.ca"
                },
                {
                    id: 29,
                    name: "Samantha Brady",
                    email: "pretium.et@egetmollislectus.com"
                },
                {
                    id: 30,
                    name: "Aretha X. Ferguson",
                    email: "et.malesuada.fames@semutdolor.net"
                },
                {
                    id: 31,
                    name: "Isabella U. Farley",
                    email: "nec@ridiculusmusProin.org"
                },
                {
                    id: 32,
                    name: "Sean Macdonald",
                    email: "iaculis@liberoet.net"
                },
                {
                    id: 33,
                    name: "Jescie P. Beasley",
                    email: "ipsum.Donec.sollicitudin@facilisis.net"
                },
                {
                    id: 34,
                    name: "Cyrus G. Guerrero",
                    email: "venenatis.a.magna@eleifendnecmalesuada.net"
                },
                {
                    id: 35,
                    name: "Mufutau Brewer",
                    email: "molestie.sodales@ipsum.org"
                },
                {
                    id: 36,
                    name: "Owen T. Williamson",
                    email: "ornare.facilisis.eget@Sedeunibh.ca"
                },
                {
                    id: 37,
                    name: "Sarah Petty",
                    email: "nibh@sem.co.uk"
                },
                {
                    id: 38,
                    name: "Theodore P. Luna",
                    email: "porttitor.tellus@feugiat.co.uk"
                },
                {
                    id: 39,
                    name: "Leilani Meadows",
                    email: "lectus.ante@nulla.co.uk"
                },
                {
                    id: 40,
                    name: "Bethany Z. Mann",
                    email: "quis@mollisnoncursus.net"
                },
                {
                    id: 41,
                    name: "Ferdinand Bray",
                    email: "eu.enim.Etiam@eu.com"
                },
                {
                    id: 42,
                    name: "Perry Z. Miles",
                    email: "justo.sit.amet@erategetipsum.net"
                },
                {
                    id: 43,
                    name: "Aidan Whitfield",
                    email: "ullamcorper@non.ca"
                },
                {
                    id: 44,
                    name: "Desirae Copeland",
                    email: "et.magna.Praesent@bibendumullamcorper.co.uk"
                },
                {
                    id: 45,
                    name: "Amos Browning",
                    email: "Sed.pharetra@elementumsem.co.uk"
                },
                {
                    id: 46,
                    name: "Wade R. Calderon",
                    email: "commodo.at.libero@auctornon.co.uk"
                },
                {
                    id: 47,
                    name: "Jordan E. Chandler",
                    email: "Integer@arcu.org"
                },
                {
                    id: 48,
                    name: "Clio D. Joseph",
                    email: "tempus.non@quisaccumsan.org"
                },
                {
                    id: 49,
                    name: "Graiden Foley",
                    email: "luctus@pharetra.co.uk"
                },
                {
                    id: 50,
                    name: "Regan Colon",
                    email: "velit@et.co.uk"
                },
                {
                    id: 51,
                    name: "Matthew W. Powell",
                    email: "vel@diamPellentesquehabitant.org"
                },
                {
                    id: 52,
                    name: "Marah Horne",
                    email: "risus@Maurisnulla.net"
                },
                {
                    id: 53,
                    name: "Brian F. Merrill",
                    email: "ut@Donectempuslorem.ca"
                },
                {
                    id: 54,
                    name: "Noble Harrison",
                    email: "lorem@sitamet.net"
                },
                {
                    id: 55,
                    name: "Latifah K. Benton",
                    email: "ac.libero.nec@Duis.edu"
                },
                {
                    id: 56,
                    name: "Mallory Z. Rutledge",
                    email: "mauris.rhoncus.id@massaQuisque.org"
                },
                {
                    id: 57,
                    name: "Ignacia Gay",
                    email: "non.egestas.a@nulla.edu"
                },
                {
                    id: 58,
                    name: "Mercedes B. Franks",
                    email: "Maecenas.malesuada@neceuismod.edu"
                },
                {
                    id: 59,
                    name: "Dexter Gilbert",
                    email: "tortor@amet.org"
                },
                {
                    id: 60,
                    name: "Demetria Paul",
                    email: "Cum.sociis@senectusetnetus.net"
                },
                {
                    id: 61,
                    name: "Oren Hartman",
                    email: "libero.mauris@temporbibendumDonec.edu"
                },
                {
                    id: 62,
                    name: "Perry M. Sanders",
                    email: "vehicula.risus.Nulla@non.net"
                },
                {
                    id: 63,
                    name: "Ulric King",
                    email: "pede.malesuada@at.net"
                },
                {
                    id: 64,
                    name: "Candace Horne",
                    email: "gravida@Aliquamvulputateullamcorper.edu"
                },
                {
                    id: 65,
                    name: "Kimberly Little",
                    email: "nulla.Cras.eu@justoProin.ca"
                },
                {
                    id: 66,
                    name: "Kibo K. Jones",
                    email: "tempus.lorem@fringillaeuismod.com"
                },
                {
                    id: 67,
                    name: "Charissa Hancock",
                    email: "diam.eu@rutrummagnaCras.org"
                },
                {
                    id: 68,
                    name: "Steven Gordon",
                    email: "orci.adipiscing@imperdiet.edu"
                },
                {
                    id: 69,
                    name: "Quinlan Slater",
                    email: "Nam.tempor.diam@Cras.com"
                },
                {
                    id: 70,
                    name: "Hakeem V. Weber",
                    email: "ullamcorper.Duis@mauris.net"
                },
                {
                    id: 71,
                    name: "Grant P. Bridges",
                    email: "Nunc@enimEtiam.net"
                },
                {
                    id: 72,
                    name: "Mason N. Patel",
                    email: "ac.mattis@purus.org"
                },
                {
                    id: 73,
                    name: "Athena G. Alston",
                    email: "metus@ultrices.ca"
                },
                {
                    id: 74,
                    name: "Martin Gomez",
                    email: "In.nec.orci@rutrum.org"
                },
                {
                    id: 75,
                    name: "Cora R. Ellison",
                    email: "purus.gravida.sagittis@liberoProinmi.edu"
                },
                {
                    id: 76,
                    name: "MacKensie I. Ferrell",
                    email: "felis.purus.ac@actellus.net"
                },
                {
                    id: 77,
                    name: "Kay X. Eaton",
                    email: "Mauris.nulla@aliquetdiam.org"
                },
                {
                    id: 78,
                    name: "Rinah Gregory",
                    email: "Mauris.quis.turpis@dictum.co.uk"
                },
                {
                    id: 79,
                    name: "Magee X. Curry",
                    email: "consectetuer@variusNam.org"
                },
                {
                    id: 80,
                    name: "Hall Cohen",
                    email: "blandit.at.nisi@non.com"
                },
                {
                    id: 81,
                    name: "Guy Watson",
                    email: "eu@CrasinterdumNunc.com"
                },
                {
                    id: 82,
                    name: "Murphy S. Sears",
                    email: "dolor@nequesedsem.org"
                },
                {
                    id: 83,
                    name: "Lee Guerra",
                    email: "egestas.Duis.ac@arcu.co.uk"
                },
                {
                    id: 84,
                    name: "Cheyenne P. Herman",
                    email: "neque.sed.dictum@quamdignissimpharetra.net"
                },
                {
                    id: 85,
                    name: "Ross H. Winters",
                    email: "Donec@erat.edu"
                },
                {
                    id: 86,
                    name: "Keely M. Cummings",
                    email: "in@euaccumsan.edu"
                },
                {
                    id: 87,
                    name: "Wade Love",
                    email: "gravida@nec.org"
                },
                {
                    id: 88,
                    name: "Brett Y. Glass",
                    email: "Vivamus.nisi.Mauris@interdumSed.com"
                },
                {
                    id: 89,
                    name: "Olga Pierce",
                    email: "augue.malesuada@velitjusto.ca"
                },
                {
                    id: 90,
                    name: "Cameron C. Mitchell",
                    email: "Nunc.lectus@morbitristiquesenectus.net"
                },
                {
                    id: 91,
                    name: "Xerxes Kaufman",
                    email: "in@blanditviverraDonec.edu"
                },
                {
                    id: 92,
                    name: "Dane Powers",
                    email: "iaculis@loremeu.org"
                },
                {
                    id: 93,
                    name: "Ira Q. Contreras",
                    email: "ante@sapien.com"
                },
                {
                    id: 94,
                    name: "Donovan K. Morrow",
                    email: "Donec@consectetueradipiscing.net"
                },
                {
                    id: 95,
                    name: "Jack Vasquez",
                    email: "vitae.risus.Duis@urna.co.uk"
                },
                {
                    id: 96,
                    name: "Sylvia E. Freeman",
                    email: "Suspendisse.commodo.tincidunt@erategetipsum.com"
                },
                {
                    id: 97,
                    name: "Fitzgerald Rutledge",
                    email: "augue.scelerisque.mollis@vehiculaaliquet.com"
                },
                {
                    id: 98,
                    name: "Yoko Savage",
                    email: "pede.sagittis.augue@libero.co.uk"
                },
                {
                    id: 99,
                    name: "Hector Daugherty",
                    email: "a.dui.Cras@Suspendisse.net"
                },
                {
                    id: 100,
                    name: "Lois Osborne",
                    email: "risus.odio.auctor@consequatnec.ca"
                }
            ],
            pointers:[
                {
                    street: "821-3122 Consequat Ave",
                    city: "D�gelis",
                    zip: "26654",
                    region: "Quebec",
                    country: "Northern Mariana Islands",
                    geo: "-38.35679, -156.51844",
                    date: "1344063697",
                    id: 1,
                    userid: 1
                },
                {
                    street: "P.O. Box 648, 4740 Nunc St.",
                    city: "Port Harcourt",
                    zip: "58484",
                    region: "Rivers",
                    country: "Turkey",
                    geo: "-77.18825, -35.29423",
                    date: "1430252806",
                    id: 2,
                    userid: 2
                },
                {
                    street: "3443 Sit St.",
                    city: "Naarden",
                    zip: "66784",
                    region: "N.",
                    country: "Tuvalu",
                    geo: "12.38797, -84.18245",
                    date: "1237126561",
                    id: 3,
                    userid: 3
                },
                {
                    street: "148-7050 Sagittis St.",
                    city: "Gap",
                    zip: "09628",
                    region: "Provence-Alpes-Côte d'Azur",
                    country: "Cuba",
                    geo: "-4.69995, 20.02314",
                    date: "999877236",
                    id: 4,
                    userid: 4
                },
                {
                    street: "5439 Aliquet Avenue",
                    city: "Istanbul",
                    zip: "M31 8AY",
                    region: "Istanbul",
                    country: "Afghanistan",
                    geo: "15.7086, 112.90554",
                    date: "1374651185",
                    id: 5,
                    userid: 5
                },
                {
                    street: "802-3303 Risus St.",
                    city: "C�te-Saint-Luc",
                    zip: "16895",
                    region: "Quebec",
                    country: "Sweden",
                    geo: "70.18569, 11.3998",
                    date: "1423633425",
                    id: 6,
                    userid: 6
                },
                {
                    street: "8079 Cubilia Rd.",
                    city: "Bauchi",
                    zip: "95794",
                    region: "Bauchi",
                    country: "Slovakia",
                    geo: "-70.75849, 167.39175",
                    date: "1189030757",
                    id: 7,
                    userid: 7
                },
                {
                    street: "P.O. Box 174, 624 Mauris Rd.",
                    city: "Roubaix",
                    zip: "17491-604",
                    region: "Nord-Pas-de-Calais",
                    country: "Tonga",
                    geo: "88.79608, 130.49658",
                    date: "1416656060",
                    id: 8,
                    userid: 8
                },
                {
                    street: "837-4123 Augue Rd.",
                    city: "Klagenfurt",
                    zip: "37936-556",
                    region: "Ktn",
                    country: "Iraq",
                    geo: "-68.44219, 154.00951",
                    date: "1364739845",
                    id: 9,
                    userid: 9
                },
                {
                    street: "Ap #166-1041 Orci. Rd.",
                    city: "Oldenzaal",
                    zip: "5507",
                    region: "Overijssel",
                    country: "Senegal",
                    geo: "15.91029, -93.7422",
                    date: "983759012",
                    id: 10,
                    userid: 10
                },
                {
                    street: "Ap #270-3929 Ac Avenue",
                    city: "Rangiora",
                    zip: "41516",
                    region: "South Island",
                    country: "Bahrain",
                    geo: "-9.52754, -52.44006",
                    date: "1529032625",
                    id: 11,
                    userid: 11
                },
                {
                    street: "328-3644 Venenatis Road",
                    city: "San Vicente",
                    zip: "408300",
                    region: "SJ",
                    country: "Maldives",
                    geo: "-65.5212, -71.55773",
                    date: "1219512994",
                    id: 12,
                    userid: 12
                },
                {
                    street: "170-8394 Ac, Avenue",
                    city: "Galway",
                    zip: "109288",
                    region: "C",
                    country: "Eritrea",
                    geo: "-69.64002, 169.95582",
                    date: "960357453",
                    id: 13,
                    userid: 13
                },
                {
                    street: "P.O. Box 773, 7235 Phasellus Av.",
                    city: "Kaduna",
                    zip: "1144",
                    region: "Kaduna",
                    country: "Cuba",
                    geo: "10.73776, 142.85416",
                    date: "1322350473",
                    id: 14,
                    userid: 14
                },
                {
                    street: "562-5844 Justo St.",
                    city: "Minitonas",
                    zip: "4834",
                    region: "Manitoba",
                    country: "Burundi",
                    geo: "67.3342, 6.5587",
                    date: "1153158061",
                    id: 15,
                    userid: 15
                },
                {
                    street: "9659 Mi Road",
                    city: "Nevers",
                    zip: "OR65 8LX",
                    region: "Bourgogne",
                    country: "Switzerland",
                    geo: "-15.72421, -24.53659",
                    date: "1227140443",
                    id: 16,
                    userid: 16
                },
                {
                    street: "P.O. Box 450, 8286 Eu Rd.",
                    city: "Ourense",
                    zip: "90-611",
                    region: "GA",
                    country: "Uzbekistan",
                    geo: "-84.05087, 161.88434",
                    date: "1377421398",
                    id: 17,
                    userid: 17
                },
                {
                    street: "Ap #842-9540 Ac Rd.",
                    city: "Cabano",
                    zip: "10804",
                    region: "QC",
                    country: "Myanmar",
                    geo: "-45.63185, 139.82326",
                    date: "1007044507",
                    id: 18,
                    userid: 18
                },
                {
                    street: "214-6929 Fusce Rd.",
                    city: "Forgaria nel Friuli",
                    zip: "15693",
                    region: "Friuli-Venezia Giulia",
                    country: "Hong Kong",
                    geo: "-62.54376, 50.9168",
                    date: "1399365266",
                    id: 19,
                    userid: 19
                },
                {
                    street: "Ap #169-3856 Nunc St.",
                    city: "Moricone",
                    zip: "3560",
                    region: "LAZ",
                    country: "Yemen",
                    geo: "-66.0439, -120.35492",
                    date: "1284390772",
                    id: 20,
                    userid: 20
                },
                {
                    street: "Ap #372-3410 Nisi Road",
                    city: "Bremen",
                    zip: "A9W 0S1",
                    region: "HB",
                    country: "Burundi",
                    geo: "-10.48927, -63.42482",
                    date: "1330444317",
                    id: 21,
                    userid: 21
                },
                {
                    street: "639-7194 Commodo Avenue",
                    city: "Ladispoli",
                    zip: "568223",
                    region: "LAZ",
                    country: "Kenya",
                    geo: "-78.3702, -4.4041",
                    date: "1146891299",
                    id: 22,
                    userid: 22
                },
                {
                    street: "546-206 Magna. St.",
                    city: "Paraíso",
                    zip: "36368",
                    region: "C",
                    country: "San Marino",
                    geo: "-79.3623, -169.47951",
                    date: "1012090290",
                    id: 23,
                    userid: 23
                },
                {
                    street: "Ap #712-843 Etiam Street",
                    city: "Wanganui",
                    zip: "70639",
                    region: "NI",
                    country: "Swaziland",
                    geo: "-0.25933, 168.02606",
                    date: "1429898350",
                    id: 24,
                    userid: 24
                },
                {
                    street: "346-477 Ante, St.",
                    city: "Maizeret",
                    zip: "9097 OC",
                    region: "NA",
                    country: "Macedonia",
                    geo: "31.83947, -128.29846",
                    date: "1388386534",
                    id: 25,
                    userid: 25
                },
                {
                    street: "7596 Pede, Ave",
                    city: "Fort Worth",
                    zip: "53789",
                    region: "TX",
                    country: "Niue",
                    geo: "-71.61872, -115.97251",
                    date: "1104731213",
                    id: 26,
                    userid: 26
                },
                {
                    street: "P.O. Box 658, 4331 Mus. St.",
                    city: "Teno",
                    zip: "4057 DE",
                    region: "VII",
                    country: "South Georgia and The South Sandwich Islands",
                    geo: "-79.00502, 179.74374",
                    date: "1316421616",
                    id: 27,
                    userid: 27
                },
                {
                    street: "138-320 Cursus Avenue",
                    city: "Cuccaro Vetere",
                    zip: "73366",
                    region: "Campania",
                    country: "Central African Republic",
                    geo: "14.88761, -178.80219",
                    date: "1401296627",
                    id: 28,
                    userid: 28
                },
                {
                    street: "Ap #819-8029 Pulvinar Rd.",
                    city: "Galway",
                    zip: "81064",
                    region: "Connacht",
                    country: "Greenland",
                    geo: "23.07385, -72.0128",
                    date: "1507656467",
                    id: 29,
                    userid: 29
                },
                {
                    street: "5705 Pede, St.",
                    city: "Hamburg",
                    zip: "88152",
                    region: "Hamburg",
                    country: "Guyana",
                    geo: "-6.05377, 97.52088",
                    date: "1516374790",
                    id: 30,
                    userid: 30
                },
                {
                    street: "9935 Vel Road",
                    city: "Tarbes",
                    zip: "9360",
                    region: "MI",
                    country: "Bonaire, Sint Eustatius and Saba",
                    geo: "83.88074, 72.10099",
                    date: "1185225753",
                    id: 31,
                    userid: 31
                },
                {
                    street: "6183 Neque Av.",
                    city: "Traralgon",
                    zip: "15576",
                    region: "Victoria",
                    country: "Panama",
                    geo: "30.15233, -62.65065",
                    date: "1264364076",
                    id: 32,
                    userid: 32
                },
                {
                    street: "1371 Parturient Rd.",
                    city: "Galway",
                    zip: "3189",
                    region: "Connacht",
                    country: "New Zealand",
                    geo: "-19.92819, -129.85448",
                    date: "947852430",
                    id: 33,
                    userid: 33
                },
                {
                    street: "6307 Enim Road",
                    city: "Concepción",
                    zip: "106261",
                    region: "SJ",
                    country: "Central African Republic",
                    geo: "88.29216, 132.78759",
                    date: "1081914880",
                    id: 34,
                    userid: 34
                },
                {
                    street: "P.O. Box 566, 9444 Dictum Ave",
                    city: "Berlin",
                    zip: "259666",
                    region: "BE",
                    country: "Guinea",
                    geo: "63.32939, 126.38471",
                    date: "1536970733",
                    id: 35,
                    userid: 35
                },
                {
                    street: "9143 Ipsum Street",
                    city: "Otukpo",
                    zip: "40228",
                    region: "Benue",
                    country: "Slovenia",
                    geo: "-22.32935, 152.92331",
                    date: "1529155027",
                    id: 36,
                    userid: 36
                },
                {
                    street: "903-2377 Integer St.",
                    city: "Porirua",
                    zip: "299287",
                    region: "NI",
                    country: "Anguilla",
                    geo: "8.01282, -62.90662",
                    date: "1159226146",
                    id: 37,
                    userid: 37
                },
                {
                    street: "P.O. Box 517, 5360 Suscipit, Ave",
                    city: "Norrköping",
                    zip: "B2P 0J3",
                    region: "E",
                    country: "American Samoa",
                    geo: "-44.0926, -171.77626",
                    date: "1047382284",
                    id: 38,
                    userid: 38
                },
                {
                    street: "179-4333 Natoque Road",
                    city: "Melbourne",
                    zip: "7730",
                    region: "VIC",
                    country: "Guatemala",
                    geo: "31.05376, 154.68659",
                    date: "1142911347",
                    id: 39,
                    userid: 39
                },
                {
                    street: "939-7842 Eu Rd.",
                    city: "Toernich",
                    zip: "79138",
                    region: "Luxemburg",
                    country: "Montserrat",
                    geo: "2.481, -26.61493",
                    date: "1551492447",
                    id: 40,
                    userid: 40
                },
                {
                    street: "838-9515 A, Rd.",
                    city: "Camaçari",
                    zip: "89563",
                    region: "BA",
                    country: "Saudi Arabia",
                    geo: "74.0233, -72.55475",
                    date: "1529907335",
                    id: 41,
                    userid: 41
                },
                {
                    street: "795-5885 Consequat St.",
                    city: "Istanbul",
                    zip: "3809",
                    region: "Istanbul",
                    country: "Jordan",
                    geo: "-6.14642, -60.80589",
                    date: "982033764",
                    id: 42,
                    userid: 42
                },
                {
                    street: "835-8938 Eros. Av.",
                    city: "Rockford",
                    zip: "84901",
                    region: "IL",
                    country: "Guyana",
                    geo: "-70.71813, 57.26101",
                    date: "948580776",
                    id: 43,
                    userid: 43
                },
                {
                    street: "Ap #314-8883 Urna. Ave",
                    city: "Zaria",
                    zip: "13605",
                    region: "Kaduna",
                    country: "Aruba",
                    geo: "-34.98164, 23.73277",
                    date: "1552742723",
                    id: 44,
                    userid: 44
                },
                {
                    street: "P.O. Box 849, 3190 Aliquam St.",
                    city: "Melton Mowbray",
                    zip: "P6V 6L1",
                    region: "Leicestershire",
                    country: "Pitcairn Islands",
                    geo: "23.9638, 139.82473",
                    date: "1204803699",
                    id: 45,
                    userid: 45
                },
                {
                    street: "Ap #928-4506 Ac Road",
                    city: "Coevorden",
                    zip: "95-241",
                    region: "Drenthe",
                    country: "Bangladesh",
                    geo: "-42.6101, -33.13621",
                    date: "1328039902",
                    id: 46,
                    userid: 46
                },
                {
                    street: "3541 Eget Street",
                    city: "Berlin",
                    zip: "659121",
                    region: "BE",
                    country: "Bermuda",
                    geo: "-34.17409, 62.57124",
                    date: "1258416068",
                    id: 47,
                    userid: 47
                },
                {
                    street: "745-8244 Lacinia St.",
                    city: "Palma de Mallorca",
                    zip: "51395",
                    region: "Illes Balears",
                    country: "France",
                    geo: "36.04556, 114.72961",
                    date: "987343136",
                    id: 48,
                    userid: 48
                },
                {
                    street: "405-3887 Dui Road",
                    city: "Kapuskasing",
                    zip: "460096",
                    region: "Ontario",
                    country: "Burkina Faso",
                    geo: "-1.10934, -43.64427",
                    date: "1364167557",
                    id: 49,
                    userid: 49
                },
                {
                    street: "2350 Cras Av.",
                    city: "Kansas City",
                    zip: "956757",
                    region: "MO",
                    country: "Saint Pierre and Miquelon",
                    geo: "-78.34526, -78.15976",
                    date: "1160153885",
                    id: 50,
                    userid: 50
                },
                {
                    street: "200-4073 Ornare St.",
                    city: "Ełk",
                    zip: "28595",
                    region: "Warmińsko-mazurskie",
                    country: "Tonga",
                    geo: "76.54708, -75.11885",
                    date: "952369985",
                    id: 51,
                    userid: 51
                },
                {
                    street: "903-6512 Enim, Ave",
                    city: "Campbelltown",
                    zip: "84-387",
                    region: "New South Wales",
                    country: "Uganda",
                    geo: "3.91912, -173.8612",
                    date: "957193377",
                    id: 52,
                    userid: 52
                },
                {
                    street: "Ap #314-7949 Integer Rd.",
                    city: "La Baie",
                    zip: "59554",
                    region: "Quebec",
                    country: "Macao",
                    geo: "52.43004, 137.01769",
                    date: "1494872630",
                    id: 53,
                    userid: 53
                },
                {
                    street: "1035 Elementum, Rd.",
                    city: "Alajuela",
                    zip: "20913",
                    region: "Alajuela",
                    country: "Myanmar",
                    geo: "13.81259, 102.60233",
                    date: "1548841967",
                    id: 54,
                    userid: 54
                },
                {
                    street: "833-2682 Nam Street",
                    city: "Maizeret",
                    zip: "89626",
                    region: "Namen",
                    country: "Turkey",
                    geo: "26.73041, 53.87004",
                    date: "1471647392",
                    id: 55,
                    userid: 55
                },
                {
                    street: "Ap #510-148 Cras Ave",
                    city: "Konin",
                    zip: "9947",
                    region: "WP",
                    country: "Central African Republic",
                    geo: "34.38982, 89.56132",
                    date: "1167172512",
                    id: 56,
                    userid: 56
                },
                {
                    street: "P.O. Box 542, 8020 Adipiscing Street",
                    city: "Vezzi Portio",
                    zip: "1968",
                    region: "LIG",
                    country: "Switzerland",
                    geo: "-81.47083, -115.39723",
                    date: "981568139",
                    id: 57,
                    userid: 57
                },
                {
                    street: "Ap #940-5518 Feugiat Ave",
                    city: "Hamburg",
                    zip: "87626",
                    region: "Hamburg",
                    country: "Iran",
                    geo: "-36.01978, 85.52379",
                    date: "1464809649",
                    id: 58,
                    userid: 58
                },
                {
                    street: "Ap #407-5407 Eget St.",
                    city: "Puente Alto",
                    zip: "E7B 6MZ",
                    region: "RM",
                    country: "Taiwan",
                    geo: "9.15401, 175.7646",
                    date: "1106057286",
                    id: 59,
                    userid: 59
                },
                {
                    street: "568-151 Turpis Road",
                    city: "Málaga",
                    zip: "3049",
                    region: "AN",
                    country: "Turkmenistan",
                    geo: "-13.4135, -101.13429",
                    date: "1565284141",
                    id: 60,
                    userid: 60
                },
                {
                    street: "954-3370 Fermentum Rd.",
                    city: "Ełk",
                    zip: "0816",
                    region: "WM",
                    country: "Gabon",
                    geo: "17.60091, -11.32618",
                    date: "1185590614",
                    id: 61,
                    userid: 61
                },
                {
                    street: "6784 Ut St.",
                    city: "Courbevoie",
                    zip: "31323",
                    region: "IL",
                    country: "Holy See (Vatican City State)",
                    geo: "-25.37783, 159.81541",
                    date: "1445902234",
                    id: 62,
                    userid: 62
                },
                {
                    street: "8456 At Rd.",
                    city: "Belfast",
                    zip: "H8C 1L5",
                    region: "Ulster",
                    country: "Italy",
                    geo: "-71.79128, 128.659",
                    date: "981404234",
                    id: 63,
                    userid: 63
                },
                {
                    street: "313-642 Vulputate, Street",
                    city: "Dresden",
                    zip: "09205",
                    region: "Saxony",
                    country: "Slovakia",
                    geo: "-75.16809, -52.42796",
                    date: "1543354607",
                    id: 64,
                    userid: 64
                },
                {
                    street: "P.O. Box 758, 8141 Est. Road",
                    city: "Bowling Green",
                    zip: "5649 NQ",
                    region: "KY",
                    country: "Ethiopia",
                    geo: "16.28289, -106.60831",
                    date: "1378471785",
                    id: 65,
                    userid: 65
                },
                {
                    street: "P.O. Box 988, 5847 Malesuada Road",
                    city: "Águas Lindas de Goiás",
                    zip: "4911",
                    region: "GO",
                    country: "Guinea-Bissau",
                    geo: "20.09113, -105.15225",
                    date: "1230734845",
                    id: 66,
                    userid: 66
                },
                {
                    street: "P.O. Box 949, 885 Molestie Avenue",
                    city: "Poitiers",
                    zip: "97247-215",
                    region: "PO",
                    country: "Barbados",
                    geo: "2.48551, 83.18859",
                    date: "1141420945",
                    id: 67,
                    userid: 67
                },
                {
                    street: "P.O. Box 766, 4075 Fames St.",
                    city: "Belfast",
                    zip: "745241",
                    region: "Ulster",
                    country: "El Salvador",
                    geo: "-44.40871, 169.13461",
                    date: "1076046990",
                    id: 68,
                    userid: 68
                },
                {
                    street: "8970 Vulputate Rd.",
                    city: "Panquehue",
                    zip: "4491",
                    region: "V",
                    country: "Denmark",
                    geo: "65.57691, -93.21503",
                    date: "1305193904",
                    id: 69,
                    userid: 69
                },
                {
                    street: "Ap #351-6493 Lacinia Street",
                    city: "Beausejour",
                    zip: "05796",
                    region: "Manitoba",
                    country: "Sri Lanka",
                    geo: "29.38695, 51.02475",
                    date: "1202002205",
                    id: 70,
                    userid: 70
                },
                {
                    street: "372-7656 Bibendum Road",
                    city: "Starachowice",
                    zip: "67523",
                    region: "SK",
                    country: "Panama",
                    geo: "-45.70284, 62.70755",
                    date: "964917255",
                    id: 71,
                    userid: 71
                },
                {
                    street: "5357 Ullamcorper St.",
                    city: "Kungälv",
                    zip: "66095",
                    region: "O",
                    country: "Iraq",
                    geo: "-75.08515, 38.13645",
                    date: "1043840703",
                    id: 72,
                    userid: 72
                },
                {
                    street: "896-2713 Arcu Rd.",
                    city: "Los Angeles",
                    zip: "5382",
                    region: "California",
                    country: "Gibraltar",
                    geo: "-0.94275, 108.87117",
                    date: "1170709584",
                    id: 73,
                    userid: 73
                },
                {
                    street: "Ap #677-666 Scelerisque, Ave",
                    city: "Itterbeek",
                    zip: "68948",
                    region: "Vlaams-Brabant",
                    country: "Cambodia",
                    geo: "-36.94351, 7.55435",
                    date: "1369512629",
                    id: 74,
                    userid: 74
                },
                {
                    street: "6887 Arcu Rd.",
                    city: "Marbella",
                    zip: "36461-369",
                    region: "AN",
                    country: "Reunion",
                    geo: "3.49741, 156.78661",
                    date: "1539326372",
                    id: 75,
                    userid: 75
                },
                {
                    street: "2068 Ac Av.",
                    city: "Lauro de Freitas",
                    zip: "06344",
                    region: "BA",
                    country: "Germany",
                    geo: "-69.38357, 42.90353",
                    date: "1268836633",
                    id: 76,
                    userid: 76
                },
                {
                    street: "Ap #242-9312 Magna Ave",
                    city: "Dublin",
                    zip: "15280-026",
                    region: "L",
                    country: "Togo",
                    geo: "-73.80821, -17.72179",
                    date: "1559243151",
                    id: 77,
                    userid: 77
                },
                {
                    street: "555-2390 Leo Street",
                    city: "San Juan (San Juan de Tibás)",
                    zip: "11117",
                    region: "SJ",
                    country: "Tonga",
                    geo: "35.94634, -144.10477",
                    date: "1096125615",
                    id: 78,
                    userid: 78
                },
                {
                    street: "727-6372 Lorem. Rd.",
                    city: "Market Drayton",
                    zip: "74923",
                    region: "Shropshire",
                    country: "Isle of Man",
                    geo: "-28.13421, -176.74314",
                    date: "1312214197",
                    id: 79,
                    userid: 79
                },
                {
                    street: "P.O. Box 218, 4473 Ac St.",
                    city: "Tire",
                    zip: "1815",
                    region: "İzm",
                    country: "Chad",
                    geo: "25.60148, -109.59174",
                    date: "1340470323",
                    id: 80,
                    userid: 80
                },
                {
                    street: "6230 Gravida Avenue",
                    city: "Cartago",
                    zip: "20523",
                    region: "C",
                    country: "Sri Lanka",
                    geo: "-70.17638, 164.82189",
                    date: "1183345726",
                    id: 81,
                    userid: 81
                },
                {
                    street: "P.O. Box 926, 4133 Turpis St.",
                    city: "Dublin",
                    zip: "1819",
                    region: "L",
                    country: "Algeria",
                    geo: "-5.39539, -141.57365",
                    date: "1379066051",
                    id: 82,
                    userid: 82
                },
                {
                    street: "840-7934 Est. St.",
                    city: "San Pablo",
                    zip: "00222-025",
                    region: "Heredia",
                    country: "Ecuador",
                    geo: "6.34713, -105.71846",
                    date: "1576977772",
                    id: 83,
                    userid: 83
                },
                {
                    street: "1548 Vel Rd.",
                    city: "Ödemiş",
                    zip: "42017",
                    region: "İzm",
                    country: "Dominica",
                    geo: "28.47488, -154.1765",
                    date: "1069197111",
                    id: 84,
                    userid: 84
                },
                {
                    street: "4401 Et Avenue",
                    city: "Port Lincoln",
                    zip: "46249",
                    region: "South Australia",
                    country: "Singapore",
                    geo: "-64.13006, -54.36281",
                    date: "1221177162",
                    id: 85,
                    userid: 85
                },
                {
                    street: "P.O. Box 195, 9724 Massa. Ave",
                    city: "Makurdi",
                    zip: "VV9E 6TG",
                    region: "Benue",
                    country: "Spain",
                    geo: "-57.43405, 161.6588",
                    date: "1301853566",
                    id: 86,
                    userid: 86
                },
                {
                    street: "Ap #701-771 Magna Street",
                    city: "Lidingo",
                    zip: "360610",
                    region: "Stockholms län",
                    country: "Australia",
                    geo: "-29.65547, -8.69957",
                    date: "1011736820",
                    id: 87,
                    userid: 87
                },
                {
                    street: "362-9009 Diam St.",
                    city: "Berlin",
                    zip: "V1K 2P4",
                    region: "Berlin",
                    country: "Niue",
                    geo: "51.21507, 154.90512",
                    date: "1532581673",
                    id: 88,
                    userid: 88
                },
                {
                    street: "Ap #566-6296 Commodo Street",
                    city: "Krefeld",
                    zip: "H22 3ER",
                    region: "North Rhine-Westphalia",
                    country: "Senegal",
                    geo: "-62.63691, 26.18539",
                    date: "997288193",
                    id: 89,
                    userid: 89
                },
                {
                    street: "P.O. Box 383, 1713 Vehicula. Road",
                    city: "Vienna",
                    zip: "D9H 3PS",
                    region: "Vienna",
                    country: "Algeria",
                    geo: "-69.93974, -41.86925",
                    date: "1280441408",
                    id: 90,
                    userid: 90
                },
                {
                    street: "Ap #277-9501 Donec Rd.",
                    city: "Santa Cesarea Terme",
                    zip: "2341",
                    region: "PUG",
                    country: "Zambia",
                    geo: "-43.52892, 131.32328",
                    date: "1463636190",
                    id: 91,
                    userid: 91
                },
                {
                    street: "6058 Interdum Av.",
                    city: "Lansing",
                    zip: "32579",
                    region: "Michigan",
                    country: "Sint Maarten",
                    geo: "84.8465, 86.6201",
                    date: "1192973323",
                    id: 92,
                    userid: 92
                },
                {
                    street: "P.O. Box 171, 7609 Vulputate, Street",
                    city: "Płock",
                    zip: "48639",
                    region: "MA",
                    country: "Cuba",
                    geo: "-40.27277, -74.69267",
                    date: "1297929262",
                    id: 93,
                    userid: 93
                },
                {
                    street: "7329 Phasellus Rd.",
                    city: "Russell",
                    zip: "796139",
                    region: "ON",
                    country: "Australia",
                    geo: "15.97172, -150.91817",
                    date: "1180786854",
                    id: 94,
                    userid: 94
                },
                {
                    street: "255-163 Convallis Rd.",
                    city: "Kano",
                    zip: "48698",
                    region: "Kano",
                    country: "Trinidad and Tobago",
                    geo: "81.18533, 2.81067",
                    date: "1204842906",
                    id: 95,
                    userid: 95
                },
                {
                    street: "6596 At St.",
                    city: "Townsville",
                    zip: "974860",
                    region: "QLD",
                    country: "Trinidad and Tobago",
                    geo: "-88.69712, 85.98008",
                    date: "1097512323",
                    id: 96,
                    userid: 96
                },
                {
                    street: "Ap #535-2026 Sed St.",
                    city: "Porto Alegre",
                    zip: "20116",
                    region: "Rio Grande do Sul",
                    country: "Costa Rica",
                    geo: "70.99014, 97.56248",
                    date: "1427266211",
                    id: 97,
                    userid: 97
                },
                {
                    street: "Ap #876-4727 Maecenas Rd.",
                    city: "Dutse",
                    zip: "33236",
                    region: "JI",
                    country: "Tokelau",
                    geo: "-51.78328, 145.44765",
                    date: "1146034637",
                    id: 98,
                    userid: 98
                },
                {
                    street: "957-6817 Phasellus Rd.",
                    city: "Regina",
                    zip: "30414",
                    region: "Saskatchewan",
                    country: "Nepal",
                    geo: "-42.58976, 77.93689",
                    date: "1326978730",
                    id: 99,
                    userid: 99
                },
                {
                    street: "P.O. Box 697, 7028 Semper Road",
                    city: "Berlin",
                    zip: "202454",
                    region: "BE",
                    country: "Zambia",
                    geo: "6.04378, -8.83012",
                    date: "1355360603",
                    id: 100,
                    userid: 100
                }
            ],
            userButtonValue:'Add',
            pointerButtonValue:'Add',
            userFields:{
                id:'',
                name:'',
                email:''
            },
            pointerFields:{
                street: '',
                city: '',
                zip: '',
                region: '',
                country: '',
                geo: '',
                date: '',
                id: '',
                userid: ''
            }
        };
    }

    addUser = (user)=>{
        this.state.users.unshift(user)
        this.setState({users:this.state.users})
    }

    addPointer = (pointer)=>{
        this.state.pointers.unshift(pointer)
        this.setState({pointers:this.state.pointers})
    }
    changeUserFields = (user)=>{
            this.setState({
                userFields:user,
                userButtonValue:"Update"
            })
    }
    changePointerFields = (pointer)=>{
            this.setState({
                pointerFields:pointer,
                pointerButtonValue:"Update"
            })
    }

    updateUser = (user)=>{
        this.state.users.forEach((elem)=>{
            if (elem.id===user.id){
                let index = this.state.users.indexOf(elem)
                let users = this.state.users
                users[index] = user
                this.setState({
                    users:users,
                    userFields:{
                        id:'',
                        name:'',
                        email:''
                    },
                    userButtonValue:"Add"
                })
            }
        })
    }

    updatePointer = (pointer)=>{
        console.log(pointer);
        this.state.pointers.forEach((elem)=>{
            if (elem.id===pointer.id){
                let index = this.state.pointers.indexOf(elem)
                let pointers = this.state.pointers
                pointers[index] = pointer
                this.setState({
                    pointers:pointers,
                    pointerFields:{
                        street: '',
                        city: '',
                        zip: '',
                        region: '',
                        country: '',
                        geo: '',
                        date: '',
                        id: '',
                        userid: ''
                    },
                    pointerButtonValue:"Add"
                })
            }
        })
    }

    render() {
        return (
            <Tabs
                id="controlled-tab-example"
                activeKey={this.state.key}
                onSelect={key => this.setState({ key })}
            >
                <Tab eventKey="users" title="Users">
                    <Row className='m-0'>
                        <Col md='4' className='leftbar'>
                            <LeftBar
                                users={ this.state.users}
                                type='users'
                                changeUserFields={this.changeUserFields}
                            />
                        </Col>
                        <Col md='8' className='content'>
                            <Content users={ this.state.users}
                                     type='users'
                                     addUser={this.addUser}
                                     updateUser = {this.updateUser}
                                     userButtonValue={this.state.userButtonValue}
                                     userFields={this.state.userFields}
                            />
                        </Col>
                    </Row>
                </Tab>
                <Tab eventKey="pointers" title="Pointers">
                    <Row className='m-0'>
                        <Col md='4' className='leftbar'>
                            <LeftBar
                                pointers={this.state.pointers}
                                users={this.state.users}
                                type='pointers'
                                changePointerFields={this.changePointerFields}
                            />
                        </Col>
                        <Col md='8' className='content'>
                            <Content pointers={ this.state.pointers}
                                     users={ this.state.users}
                                     type='pointers'
                                     addPointer={this.addPointer}
                                     updatePointer = {this.updatePointer}
                                     pointerButtonValue={this.state.pointerButtonValue}
                                     pointerFields={this.state.pointerFields}
                            />
                        </Col>
                    </Row>
                </Tab>
            </Tabs>
        );
    }
}

export default Header;