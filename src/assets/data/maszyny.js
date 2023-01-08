import agregatPradotworczy from "../maszyny/agregatPradotworczy.png";
import frezarka from "../maszyny/frezarka.png";
import mieszadlo from "../maszyny/mieszadlo.png";
import mlot from "../maszyny/mlot.png";
import mlotWyburzeniowy from "../maszyny/mlotWyburzeniowy.png";
import motopompa from "../maszyny/motopompa.png";
import nagrzewnicaGazowa from "../maszyny/nagrzewnicaGazowa.png";
import nagrzewnicaElektryczna from "../maszyny/nagrzewnicaElektryczna.png";
import odkurzaczPioracy from "../maszyny/odkurzaczPioracy.png";
import osuszacz from "../maszyny/osuszacz.png";
import ozonator from "../maszyny/ozonator.png";
import paleciak from "../maszyny/paleciak.png";
import pilaBeton from "../maszyny/pilaBeton.png";
import pilaTarczowa from "../maszyny/pilaTarczowa.png";
import podnosnik from "../maszyny/podnosnik.png";
import poziomica from "../maszyny/poziomica.png";
import przedluzacz from "../maszyny/przedluzacz.png";
import rusztowanieDrabinowe from "../maszyny/rusztowanieDrabinowe.png";
import rusztowanieElewacyjne from "../maszyny/rusztowanieElewacyjne.png";
import rusztowanieWarszawskie from "../maszyny/rusztowanieWarszawskie.png";
import skoczek from "../maszyny/skoczek.png";
import swider from "../maszyny/swider.png";
import szlifierka from "../maszyny/szlifierka.png";
import szlifierkaAku from "../maszyny/szlifierkaAku.png";
import szlifierkaGladz from "../maszyny/szlifierkaGladz.png";
import wibrator from "../maszyny/wibrator.png";
import wyrzynarka from "../maszyny/wyrzynarka.png";
import zacieraczka from "../maszyny/zacieraczka.png";
import zageszczarkaCedrus from "../maszyny/zageszczarkaCedrus.png";
import zageszczarkaLumag from "../maszyny/zageszczarkaLumag.png";
import zamiatarka from "../maszyny/zamiatarka.png";
import zsyp from "../maszyny/zsyp.png";

const MASZYNY = [
  {
    id: 1,
    name: "Motopompa",
    producer: "Cedrus",
    description: "",
    img: motopompa,
    priceForSixHour: "80",
    priceForDay: "110",
    category: ["ogrod"],
    isPromoted: false,
  },
  {
    id: 2,
    name: "Frezarka do korzeni",
    producer: "Faworyt",
    description: "",
    img: frezarka,
    priceForSixHour: "180",
    priceForDay: "270",
    category: ["ogrod"],
    isPromoted: false,
  },
  {
    id: 3,
    name: "Świder glebowy",
    producer: "Cedrus",
    description: "",
    img: swider,
    priceForSixHour: "70",
    priceForDay: "110",
    category: ["ogrod"],
    isPromoted: false,
  },
  {
    id: 4,
    name: "Odśnieżarko zamiatarka",
    producer: "Lider",
    description: "",
    img: zamiatarka,
    priceForSixHour: "100",
    priceForDay: "150",
    category: ["ogrod"],
    isPromoted: false,
  },
  {
    id: 5,
    name: "Ozonator",
    producer: "",
    description: "",
    img: ozonator,
    priceForSixHour: null,
    priceForDay: "100",
    category: ["dom"],
    isPromoted: false,
  },
  {
    id: 6,
    name: "Odkurzacz piorący",
    producer: "Karcher",
    description: "",
    img: odkurzaczPioracy,
    priceForSixHour: null,
    priceForDay: "50",
    category: ["dom"],
    isPromoted: false,
  },
  {
    id: 7,
    name: "Zacieraczka do betonu",
    producer: "Cedrus",
    description: "",
    img: zacieraczka,
    priceForSixHour: "160",
    priceForDay: "220",
    category: ["budowa"],
    isPromoted: false,
  },
  {
    id: 8,
    name: "Zagęszczarka 260kg",
    producer: "Cedrus",
    description: "",
    img: zageszczarkaCedrus,
    priceForSixHour: "140",
    priceForDay: "200",
    category: ["budowa"],
    isPromoted: false,
  },
  {
    id: 9,
    name: "Zagęszczarka 130kg",
    producer: "Lumag",
    description: "",
    img: zageszczarkaLumag,
    priceForSixHour: "90",
    priceForDay: "120",
    category: ["budowa"],
    isPromoted: false,
  },
  {
    id: 10,
    name: "Skoczek 78kg",
    producer: "Cedrus",
    description: "",
    img: skoczek,
    priceForSixHour: "80",
    priceForDay: "110",
    category: ["budowa"],
    isPromoted: false,
  },
  {
    id: 11,
    name: "Piła do betonu",
    producer: "Echo",
    description: "",
    img: pilaBeton,
    priceForSixHour: "90",
    priceForDay: "110",
    category: ["budowa"],
    isPromoted: false,
  },
  {
    id: 12,
    name: "Agregat prądotwórczy 5.3kW",
    producer: "Master Cut",
    description: "",
    img: agregatPradotworczy,
    priceForSixHour: "80",
    priceForDay: "110",
    category: ["budowa"],
    isPromoted: false,
  },
  {
    id: 13,
    name: "Rusztowanie elewacyjne",
    producer: "Plettac",
    description: "",
    img: rusztowanieElewacyjne,
    priceForSixHour: "1",
    priceForDay: "1",
    category: ["budowa"],
    isPromoted: false,
  },
  {
    id: 14,
    name: "Rusztowanie drabinowe",
    producer: "",
    description: "",
    img: rusztowanieDrabinowe,
    priceForSixHour: "50",
    priceForDay: "70",
    category: ["budowa"],
    isPromoted: false,
  },
  {
    id: 15,
    name: "Osuszacz",
    producer: "Trotec",
    description: "",
    img: osuszacz,
    priceForSixHour: null,
    priceForDay: "35",
    category: ["budowa", "dom"],
    isPromoted: false,
  },
  {
    id: 16,
    name: "Rusztowanie warszawskie",
    producer: null,
    description: "",
    img: rusztowanieWarszawskie,
    priceForSixHour: "1",
    priceForDay: "1",
    category: ["budowa"],
    isPromoted: false,
  },
  {
    id: 17,
    name: "Paleciak",
    producer: null,
    description: "",
    img: paleciak,
    priceForSixHour: null,
    priceForDay: "25",
    category: ["budowa"],
    isPromoted: false,
  },
  {
    id: 18,
    name: "Zsyp do gruzu",
    producer: "",
    description: "",
    img: zsyp,
    priceForSixHour: null,
    priceForDay: "80",
    category: ["budowa"],
    isPromoted: false,
  },
  {
    id: 19,
    name: "Podnośnik do płyt gipsowo-kartonowych",
    producer: "",
    description: "",
    img: podnosnik,
    priceForSixHour: null,
    priceForDay: "30",
    category: ["budowa"],
    isPromoted: false,
  },
  {
    id: 20,
    name: "Nagrzewnica gazowa",
    producer: "MAR-POL",
    description: "",
    img: nagrzewnicaGazowa,
    priceForSixHour: null,
    priceForDay: "35",
    category: ["budowa"],
    isPromoted: false,
  },
];

export default MASZYNY;
