import { addfn } from "./app/app.js";


import "./style/index.css";
import "./style/index.less";

import image from "./assets/1.gif";
import image2 from "./assets/logo_small.png";
const img = document.createElement("img");
const img2 = document.createElement("img");
img.src = image;
img2.src = image2;
document.body.appendChild(img);
document.body.appendChild(img2);
import './assets/fonts/iconfont.css'


console.log(addfn(1));
