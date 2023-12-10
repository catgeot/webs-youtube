import { CiBaseball } from "react-icons/ci";
import { CiCoins1 } from "react-icons/ci";
import { CiBoxes } from "react-icons/ci";
import { CiBullhorn } from "react-icons/ci";
import { CiCoffeeCup } from "react-icons/ci";
import { CiDumbbell } from "react-icons/ci";
import { CiFries } from "react-icons/ci";
import { CiMoneyBill } from "react-icons/ci";

import { AiFillGithub } from "react-icons/ai";
import { AiOutlineCodepen } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

export const headerMenus = [
    {
        title: "CATGEOT",
        icon: <CiBaseball />,
        src: "/catgeot"
    },
    {
        title: "추천 영상",
        icon: <CiMoneyBill />,
        src: "/today"
    },
    {
        title: "추천 개발자",
        icon: <CiCoins1 />,
        src: "/developer"
    },
    {
        title: "웹디자인기능사",
        icon: <CiBoxes />,
        src: "/webd"
    },
    {
        title: "웹표준 사이트",
        icon: <CiBullhorn />,
        src: "/website"
    },
    {
        title: "GSAP Parallax",
        icon: <CiCoffeeCup />,
        src: "/gsap"
    },
    {
        title: "포트폴리오 사이트",
        icon: <CiDumbbell />,
        src: "/port"
    },
    {
        title: "유튜브 클론 사이트",
        icon: <CiFries />,
        src: "/youtube"
    },
];

export const searchKeyword = [
    {
        title: "catgeot",
        src: "/search/catgeot"
    },
    {
        title: "웹디자인",
        src: "/search/웹디자인"
    },
    {
        title: "타이포그래픽",
        src: "/search/타이포그래픽"
    },
    {
        title: "포토샵",
        src: "/search/포토샵"
    },
    {
        title: "시각디자인",
        src: "/search/시각디자인"
    },
    {
        title: "일러스트",
        src: "/search/일러스트"
    },
    {
        title: "에프터이팩트",
        src: "/search/에프터이팩트"
    },
    {
        title: "파이썬",
        src: "/search/파이썬"
    },
    {
        title: "music",
        src: "/search/music"
    },
    {
        title: "암호화폐",
        src: "/search/React 암호화폐"
    },
    {
        title: "컴퓨터그래픽",
        src: "/search/컴퓨터그래픽"
    }
];

export const snsLink = [
    {
        title: "github",
        url: "https://github.com/catgeot",
        icon: <AiFillGithub />
    },
    {
        title: "instagram",
        url: "https://www.instagram.com/catgeot",
        icon: <AiOutlineInstagram />
    },
    {
        title: "youtube",
        url: "https://www.youtube.com/webstoryboy",
        icon: <AiFillYoutube />
    },
    {
        title: "codepen",
        url: "https://codepen.io/webstoryboy",
        icon: <AiOutlineCodepen />
    },
]