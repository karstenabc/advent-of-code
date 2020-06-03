// Input data
const input = ['#1 @ 335,861: 14x10', '#2 @ 97,613: 24x14', '#3 @ 118,29: 25x13', '#4 @ 55,721: 10x22', '#5 @ 102,127: 23x12', '#6 @ 304,347: 24x17', '#7 @ 172,726: 28x24', '#8 @ 102,115: 25x25', '#9 @ 270,568: 14x25', '#10 @ 599,384: 10x16', '#11 @ 783,389: 21x27', '#12 @ 588,379: 25x20', '#13 @ 481,887: 28x12', '#14 @ 881,924: 11x21', '#15 @ 498,949: 23x24', '#16 @ 508,272: 28x11', '#17 @ 47,222: 27x15', '#18 @ 724,368: 3x20', '#19 @ 843,197: 20x20', '#20 @ 687,524: 24x20', '#21 @ 756,313: 16x22', '#22 @ 869,982: 15x14', '#23 @ 67,16: 13x22', '#24 @ 637,555: 13x12', '#25 @ 549,84: 24x24', '#26 @ 838,899: 27x22', '#27 @ 187,156: 20x13', '#28 @ 512,124: 10x24', '#29 @ 462,488: 10x11', '#30 @ 341,261: 14x11', '#31 @ 796,222: 12x21', '#32 @ 728,588: 13x28', '#33 @ 786,8: 12x23', '#34 @ 329,829: 16x10', '#35 @ 923,270: 12x22', '#36 @ 454,888: 13x15', '#37 @ 429,811: 27x13', '#38 @ 249,801: 26x13', '#39 @ 269,20: 20x25', '#40 @ 382,506: 13x24', '#41 @ 69,297: 16x26', '#42 @ 733,497: 23x16', '#43 @ 405,24: 17x19', '#44 @ 84,623: 25x20', '#45 @ 259,564: 22x21', '#46 @ 137,351: 11x19', '#47 @ 524,871: 21x18', '#48 @ 748,613: 17x15', '#49 @ 775,40: 13x12', '#50 @ 266,144: 26x27', '#51 @ 609,648: 28x20', '#52 @ 940,9: 26x24', '#53 @ 900,249: 17x25', '#54 @ 706,463: 25x20', '#55 @ 518,143: 4x13', '#56 @ 195,403: 13x13', '#57 @ 882,647: 21x29', '#58 @ 56,71: 18x24', '#59 @ 501,572: 10x19', '#60 @ 133,355: 15x27', '#61 @ 236,904: 22x13', '#62 @ 371,828: 13x21', '#63 @ 964,398: 17x12', '#64 @ 689,651: 27x20', '#65 @ 875,659: 16x11', '#66 @ 436,84: 15x10', '#67 @ 613,812: 22x12', '#68 @ 826,430: 20x11', '#69 @ 79,302: 29x16', '#70 @ 262,613: 15x26', '#71 @ 886,316: 19x23', '#72 @ 787,384: 10x13', '#73 @ 706,616: 29x27', '#74 @ 278,974: 18x23', '#75 @ 675,984: 15x14', '#76 @ 572,61: 24x19', '#77 @ 360,666: 14x12', '#78 @ 817,128: 13x14', '#79 @ 860,315: 11x12', '#80 @ 764,394: 11x20', '#81 @ 207,375: 12x17', '#82 @ 882,889: 29x21', '#83 @ 669,777: 17x27', '#84 @ 874,323: 17x25', '#85 @ 776,175: 29x11', '#86 @ 34,62: 25x27', '#87 @ 628,590: 25x15', '#88 @ 115,697: 14x22', '#89 @ 266,60: 29x16', '#90 @ 865,564: 18x10', '#91 @ 329,656: 10x28', '#92 @ 777,534: 21x19', '#93 @ 93,415: 13x27', '#94 @ 51,786: 11x11', '#95 @ 851,677: 22x15', '#96 @ 314,788: 20x13', '#97 @ 92,434: 11x10', '#98 @ 203,433: 19x13', '#99 @ 369,948: 15x24', '#100 @ 888,417: 13x20', '#101 @ 479,920: 23x19', '#102 @ 931,557: 13x10', '#103 @ 416,630: 25x15', '#104 @ 588,540: 26x29', '#105 @ 1,266: 27x19', '#106 @ 39,906: 19x27', '#107 @ 117,371: 19x15', '#108 @ 217,808: 20x21', '#109 @ 619,88: 10x10', '#110 @ 254,905: 16x15', '#111 @ 449,472: 24x21', '#112 @ 698,535: 22x16', '#113 @ 580,302: 24x18', '#114 @ 421,562: 24x25', '#115 @ 570,95: 23x11', '#116 @ 179,37: 27x27', '#117 @ 7,654: 10x16', '#118 @ 290,61: 14x16', '#119 @ 68,251: 18x24', '#120 @ 223,366: 22x21', '#121 @ 85,883: 28x12', '#122 @ 622,660: 27x19', '#123 @ 488,636: 20x25', '#124 @ 197,107: 15x22', '#125 @ 292,965: 10x27', '#126 @ 115,708: 28x22', '#127 @ 610,776: 19x17', '#128 @ 766,170: 27x14', '#129 @ 434,392: 27x13', '#130 @ 863,649: 20x18', '#131 @ 59,114: 10x28', '#132 @ 528,918: 24x10', '#133 @ 134,176: 28x16', '#134 @ 501,376: 21x13', '#135 @ 799,77: 17x11', '#136 @ 910,640: 23x16', '#137 @ 95,715: 26x14', '#138 @ 461,505: 19x25', '#139 @ 507,49: 15x17', '#140 @ 716,69: 11x23', '#141 @ 729,174: 24x16', '#142 @ 15,297: 12x15', '#143 @ 317,162: 7x3', '#144 @ 948,570: 12x18', '#145 @ 519,332: 14x27', '#146 @ 691,41: 28x21', '#147 @ 384,744: 16x13', '#148 @ 498,258: 16x15', '#149 @ 59,876: 12x26', '#150 @ 907,643: 20x23', '#151 @ 533,453: 23x10', '#152 @ 711,776: 23x22', '#153 @ 27,832: 12x27', '#154 @ 2,700: 27x12', '#155 @ 516,405: 25x19', '#156 @ 75,850: 12x12', '#157 @ 789,10: 5x18', '#158 @ 863,291: 19x28', '#159 @ 209,105: 15x19', '#160 @ 19,296: 21x19', '#161 @ 186,959: 11x29', '#162 @ 786,366: 29x28', '#163 @ 652,620: 15x14', '#164 @ 236,134: 28x19', '#165 @ 78,617: 13x19', '#166 @ 94,437: 23x22', '#167 @ 508,140: 19x21', '#168 @ 447,442: 23x23', '#169 @ 351,527: 21x25', '#170 @ 32,475: 29x25', '#171 @ 942,320: 20x22', '#172 @ 44,143: 16x20', '#173 @ 809,29: 20x19', '#174 @ 434,967: 10x17', '#175 @ 437,798: 11x15', '#176 @ 2,541: 25x17', '#177 @ 696,423: 27x15', '#178 @ 439,572: 18x26', '#179 @ 551,755: 22x16', '#180 @ 100,735: 23x29', '#181 @ 458,508: 22x24', '#182 @ 356,887: 23x24', '#183 @ 620,439: 24x11', '#184 @ 33,79: 27x27', '#185 @ 234,273: 18x29', '#186 @ 737,246: 3x3', '#187 @ 365,323: 15x13', '#188 @ 438,580: 16x18', '#189 @ 236,264: 16x10', '#190 @ 371,444: 13x29', '#191 @ 887,559: 20x12', '#192 @ 949,152: 29x24', '#193 @ 537,881: 11x24', '#194 @ 864,448: 15x24', '#195 @ 324,929: 21x17', '#196 @ 566,612: 18x16', '#197 @ 386,793: 18x18', '#198 @ 631,153: 27x16', '#199 @ 723,592: 24x29', '#200 @ 860,524: 21x23', '#201 @ 706,539: 28x22', '#202 @ 9,961: 28x24', '#203 @ 606,203: 28x12', '#204 @ 548,868: 15x25', '#205 @ 168,786: 29x17', '#206 @ 372,774: 18x22', '#207 @ 843,100: 18x27', '#208 @ 46,109: 28x26', '#209 @ 359,201: 13x13', '#210 @ 799,378: 17x15', '#211 @ 85,17: 22x13', '#212 @ 638,602: 21x26', '#213 @ 746,386: 13x11', '#214 @ 307,767: 3x13', '#215 @ 322,926: 26x24', '#216 @ 122,263: 10x29', '#217 @ 406,105: 17x11', '#218 @ 185,795: 10x13', '#219 @ 833,397: 16x14', '#220 @ 543,894: 20x29', '#221 @ 682,939: 26x25', '#222 @ 639,358: 29x18', '#223 @ 625,685: 17x17', '#224 @ 615,79: 29x28', '#225 @ 863,908: 19x26', '#226 @ 704,955: 26x18', '#227 @ 8,650: 13x28', '#228 @ 881,397: 28x14', '#229 @ 890,528: 21x11', '#230 @ 86,848: 23x23', '#231 @ 30,254: 12x26', '#232 @ 50,982: 27x14', '#233 @ 8,548: 29x21', '#234 @ 534,457: 29x21', '#235 @ 859,441: 25x16', '#236 @ 121,416: 26x22', '#237 @ 94,514: 21x10', '#238 @ 498,183: 12x26', '#239 @ 378,165: 29x22', '#240 @ 444,491: 10x16', '#241 @ 66,891: 20x11', '#242 @ 620,873: 23x23', '#243 @ 387,274: 27x13', '#244 @ 379,515: 21x11', '#245 @ 364,85: 24x16', '#246 @ 448,757: 10x18', '#247 @ 148,956: 12x22', '#248 @ 472,489: 13x19', '#249 @ 707,50: 11x21', '#250 @ 228,424: 16x27', '#251 @ 835,157: 11x18', '#252 @ 678,407: 29x20', '#253 @ 952,768: 17x10', '#254 @ 928,901: 3x20', '#255 @ 242,142: 24x22', '#256 @ 770,310: 25x26', '#257 @ 906,554: 28x13', '#258 @ 98,391: 19x13', '#259 @ 45,75: 14x25', '#260 @ 732,328: 22x14', '#261 @ 17,54: 23x18', '#262 @ 872,274: 22x27', '#263 @ 366,212: 27x13', '#264 @ 154,865: 17x27', '#265 @ 758,230: 18x16', '#266 @ 442,837: 29x15', '#267 @ 929,43: 9x4', '#268 @ 975,43: 13x24', '#269 @ 446,780: 11x28', '#270 @ 528,427: 18x25', '#271 @ 964,287: 26x28', '#272 @ 426,206: 19x14', '#273 @ 503,352: 17x11', '#274 @ 873,801: 14x26', '#275 @ 821,887: 29x25', '#276 @ 764,515: 10x10', '#277 @ 199,124: 26x10', '#278 @ 559,103: 15x10', '#279 @ 77,869: 20x24', '#280 @ 576,283: 23x24', '#281 @ 364,327: 24x28', '#282 @ 832,153: 12x22', '#283 @ 71,45: 27x15', '#284 @ 25,573: 25x14', '#285 @ 736,508: 22x24', '#286 @ 115,143: 22x14', '#287 @ 358,546: 12x20', '#288 @ 246,637: 28x11', '#289 @ 835,20: 26x18', '#290 @ 277,713: 13x25', '#291 @ 379,925: 17x27', '#292 @ 720,896: 14x11', '#293 @ 563,835: 11x18', '#294 @ 975,359: 19x29', '#295 @ 60,322: 26x10', '#296 @ 386,739: 17x12', '#297 @ 747,813: 20x21', '#298 @ 767,512: 21x27', '#299 @ 488,586: 21x14', '#300 @ 186,570: 17x20', '#301 @ 516,860: 12x13', '#302 @ 80,630: 20x23', '#303 @ 685,49: 14x27', '#304 @ 975,269: 13x22', '#305 @ 381,344: 28x20', '#306 @ 200,752: 23x22', '#307 @ 881,358: 19x24', '#308 @ 333,173: 25x18', '#309 @ 530,406: 23x18', '#310 @ 381,326: 17x20', '#311 @ 712,614: 10x24', '#312 @ 716,164: 28x29', '#313 @ 244,946: 12x4', '#314 @ 950,768: 12x15', '#315 @ 61,396: 15x10', '#316 @ 606,865: 28x12', '#317 @ 764,40: 24x11', '#318 @ 831,174: 28x15', '#319 @ 73,652: 10x22', '#320 @ 112,761: 27x21', '#321 @ 932,237: 27x28', '#322 @ 822,540: 10x10', '#323 @ 379,237: 10x5', '#324 @ 478,68: 12x29', '#325 @ 680,790: 11x16', '#326 @ 921,92: 19x17', '#327 @ 814,624: 16x27', '#328 @ 364,333: 21x13', '#329 @ 272,522: 22x29', '#330 @ 885,885: 19x19', '#331 @ 187,19: 11x29', '#332 @ 874,452: 18x21', '#333 @ 806,967: 24x29', '#334 @ 387,659: 17x23', '#335 @ 762,163: 14x15', '#336 @ 93,348: 14x24', '#337 @ 122,684: 10x29', '#338 @ 463,895: 11x10', '#339 @ 116,437: 13x18', '#340 @ 227,794: 28x29', '#341 @ 535,81: 18x17', '#342 @ 123,275: 29x21', '#343 @ 856,943: 24x14', '#344 @ 683,885: 21x25', '#345 @ 747,455: 21x26', '#346 @ 872,495: 24x23', '#347 @ 167,746: 27x26', '#348 @ 969,881: 13x22', '#349 @ 347,218: 10x28', '#350 @ 629,547: 12x24', '#351 @ 65,420: 21x10', '#352 @ 173,559: 28x24', '#353 @ 96,771: 20x24', '#354 @ 971,860: 13x22', '#355 @ 181,385: 24x24', '#356 @ 93,494: 12x26', '#357 @ 336,569: 13x23', '#358 @ 230,502: 16x19', '#359 @ 432,1: 15x13', '#360 @ 574,274: 25x22', '#361 @ 200,917: 18x21', '#362 @ 203,530: 18x26', '#363 @ 746,326: 19x27', '#364 @ 341,543: 20x27', '#365 @ 268,486: 18x22', '#366 @ 295,101: 19x15', '#367 @ 68,21: 20x29', '#368 @ 885,547: 27x21', '#369 @ 191,85: 12x14', '#370 @ 150,291: 15x14', '#371 @ 239,682: 19x20', '#372 @ 10,343: 13x28', '#373 @ 233,874: 14x29', '#374 @ 856,20: 18x21', '#375 @ 227,397: 14x19', '#376 @ 781,26: 26x26', '#377 @ 220,33: 25x10', '#378 @ 535,934: 24x19', '#379 @ 879,569: 12x26', '#380 @ 403,653: 25x10', '#381 @ 651,639: 23x25', '#382 @ 955,986: 20x14', '#383 @ 196,406: 11x16', '#384 @ 602,811: 20x27', '#385 @ 434,480: 26x28', '#386 @ 428,756: 13x22', '#387 @ 63,443: 22x26', '#388 @ 84,133: 13x21', '#389 @ 52,66: 17x19', '#390 @ 611,273: 14x25', '#391 @ 932,19: 19x16', '#392 @ 770,530: 20x21', '#393 @ 306,588: 21x15', '#394 @ 943,881: 25x23', '#395 @ 34,710: 25x20', '#396 @ 726,53: 10x18', '#397 @ 510,724: 20x19', '#398 @ 553,24: 26x22', '#399 @ 656,209: 26x19', '#400 @ 697,152: 14x16', '#401 @ 667,688: 28x17', '#402 @ 30,318: 28x26', '#403 @ 239,343: 15x28', '#404 @ 675,86: 24x21', '#405 @ 126,246: 13x21', '#406 @ 902,669: 16x27', '#407 @ 772,332: 23x13', '#408 @ 863,368: 21x17', '#409 @ 842,404: 21x16', '#410 @ 488,734: 26x27', '#411 @ 668,699: 17x29', '#412 @ 0,963: 16x23', '#413 @ 474,693: 27x15', '#414 @ 864,943: 22x12', '#415 @ 803,413: 27x10', '#416 @ 966,955: 21x16', '#417 @ 607,248: 26x18', '#418 @ 191,934: 12x11', '#419 @ 59,648: 23x22', '#420 @ 160,559: 20x15', '#421 @ 121,310: 24x25', '#422 @ 373,280: 27x18', '#423 @ 371,234: 23x13', '#424 @ 476,640: 16x28', '#425 @ 819,390: 10x26', '#426 @ 601,81: 29x13', '#427 @ 344,190: 29x27', '#428 @ 823,158: 26x29', '#429 @ 723,492: 10x26', '#430 @ 849,665: 18x25', '#431 @ 504,929: 26x24', '#432 @ 447,178: 27x22', '#433 @ 955,254: 25x24', '#434 @ 301,612: 24x29', '#435 @ 17,845: 12x25', '#436 @ 837,900: 14x29', '#437 @ 786,169: 26x18', '#438 @ 140,289: 14x14', '#439 @ 694,757: 29x25', '#440 @ 240,222: 19x17', '#441 @ 321,71: 16x13', '#442 @ 482,592: 17x22', '#443 @ 304,663: 26x28', '#444 @ 713,68: 15x19', '#445 @ 461,510: 16x12', '#446 @ 111,874: 15x29', '#447 @ 927,953: 19x14', '#448 @ 729,236: 24x29', '#449 @ 616,75: 13x23', '#450 @ 435,867: 22x25', '#451 @ 119,364: 11x14', '#452 @ 135,122: 27x16', '#453 @ 644,6: 13x27', '#454 @ 332,24: 28x26', '#455 @ 626,372: 10x26', '#456 @ 360,816: 28x17', '#457 @ 530,19: 26x22', '#458 @ 59,87: 29x22', '#459 @ 303,750: 26x26', '#460 @ 119,913: 14x14', '#461 @ 215,117: 29x17', '#462 @ 177,143: 20x27', '#463 @ 35,205: 13x21', '#464 @ 563,834: 18x18', '#465 @ 976,954: 10x16', '#466 @ 524,499: 16x17', '#467 @ 235,214: 24x11', '#468 @ 683,900: 26x21', '#469 @ 916,926: 11x12', '#470 @ 925,373: 17x17', '#471 @ 155,469: 21x25', '#472 @ 436,905: 21x23', '#473 @ 185,225: 22x25', '#474 @ 600,131: 12x28', '#475 @ 351,475: 26x11', '#476 @ 442,807: 22x14', '#477 @ 282,567: 10x15', '#478 @ 457,52: 16x16', '#479 @ 149,58: 20x22', '#480 @ 73,614: 18x11', '#481 @ 310,905: 19x14', '#482 @ 679,220: 26x12', '#483 @ 755,33: 12x29', '#484 @ 696,887: 16x19', '#485 @ 162,552: 28x16', '#486 @ 876,617: 21x16', '#487 @ 228,439: 20x24', '#488 @ 193,387: 8x19', '#489 @ 493,570: 26x19', '#490 @ 325,815: 18x26', '#491 @ 265,313: 21x14', '#492 @ 81,306: 18x28', '#493 @ 841,82: 19x23', '#494 @ 301,765: 16x18', '#495 @ 832,184: 21x11', '#496 @ 321,556: 23x11', '#497 @ 617,688: 17x13', '#498 @ 920,247: 10x24', '#499 @ 747,720: 26x23', '#500 @ 804,539: 15x27', '#501 @ 605,681: 22x19', '#502 @ 717,515: 13x28', '#503 @ 873,509: 23x29', '#504 @ 854,652: 16x11', '#505 @ 208,442: 17x19', '#506 @ 714,370: 19x16', '#507 @ 554,485: 23x12', '#508 @ 230,496: 25x28', '#509 @ 757,717: 25x25', '#510 @ 64,274: 17x17', '#511 @ 667,339: 22x10', '#512 @ 517,427: 19x27', '#513 @ 72,482: 16x14', '#514 @ 945,129: 21x29', '#515 @ 135,121: 13x11', '#516 @ 43,144: 29x11', '#517 @ 242,421: 28x22', '#518 @ 25,473: 21x13', '#519 @ 826,620: 16x11', '#520 @ 143,109: 25x16', '#521 @ 931,231: 22x15', '#522 @ 73,11: 28x28', '#523 @ 359,311: 21x15', '#524 @ 562,79: 16x29', '#525 @ 280,784: 25x22', '#526 @ 5,865: 22x22', '#527 @ 319,803: 20x16', '#528 @ 499,179: 28x13', '#529 @ 486,105: 22x23', '#530 @ 410,57: 12x24', '#531 @ 948,847: 22x19', '#532 @ 630,795: 25x19', '#533 @ 890,718: 23x16', '#534 @ 397,179: 17x22', '#535 @ 951,324: 10x20', '#536 @ 599,544: 12x29', '#537 @ 715,515: 20x25', '#538 @ 215,597: 27x26', '#539 @ 220,485: 22x25', '#540 @ 959,110: 24x25', '#541 @ 421,950: 23x19', '#542 @ 912,375: 14x25', '#543 @ 699,780: 13x18', '#544 @ 503,598: 28x10', '#545 @ 183,118: 28x13', '#546 @ 552,611: 29x25', '#547 @ 753,153: 13x13', '#548 @ 436,1: 12x25', '#549 @ 695,623: 24x17', '#550 @ 907,817: 24x27', '#551 @ 243,144: 24x20', '#552 @ 481,875: 11x16', '#553 @ 927,549: 13x19', '#554 @ 922,916: 14x24', '#555 @ 91,606: 21x17', '#556 @ 792,853: 12x29', '#557 @ 484,970: 22x23', '#558 @ 594,389: 11x21', '#559 @ 264,648: 10x10', '#560 @ 524,118: 23x15', '#561 @ 31,485: 19x15', '#562 @ 795,675: 29x28', '#563 @ 467,734: 28x23', '#564 @ 709,536: 9x5', '#565 @ 5,503: 15x19', '#566 @ 499,705: 21x25', '#567 @ 140,892: 27x15', '#568 @ 203,511: 11x18', '#569 @ 107,791: 26x15', '#570 @ 966,822: 28x17', '#571 @ 108,763: 10x18', '#572 @ 884,526: 10x14', '#573 @ 618,383: 26x10', '#574 @ 223,102: 11x24', '#575 @ 726,652: 17x24', '#576 @ 62,6: 29x23', '#577 @ 316,775: 17x26', '#578 @ 62,82: 22x22', '#579 @ 687,894: 17x18', '#580 @ 817,162: 22x24', '#581 @ 920,352: 19x25', '#582 @ 867,848: 11x27', '#583 @ 440,322: 21x28', '#584 @ 59,125: 14x20', '#585 @ 752,352: 17x17', '#586 @ 972,516: 26x23', '#587 @ 857,711: 5x8', '#588 @ 117,131: 10x20', '#589 @ 928,926: 10x20', '#590 @ 5,843: 11x19', '#591 @ 413,610: 29x19', '#592 @ 199,658: 27x18', '#593 @ 493,579: 27x29', '#594 @ 688,320: 15x21', '#595 @ 308,64: 19x17', '#596 @ 0,498: 23x21', '#597 @ 406,613: 23x21', '#598 @ 883,596: 15x21', '#599 @ 498,648: 18x13', '#600 @ 297,599: 19x22', '#601 @ 74,88: 11x23', '#602 @ 798,140: 26x28', '#603 @ 31,490: 10x25', '#604 @ 372,423: 25x16', '#605 @ 957,865: 21x21', '#606 @ 65,720: 19x11', '#607 @ 613,552: 24x15', '#608 @ 485,877: 25x25', '#609 @ 498,337: 18x29', '#610 @ 967,815: 10x12', '#611 @ 302,674: 27x19', '#612 @ 506,897: 12x15', '#613 @ 56,107: 12x16', '#614 @ 213,127: 15x25', '#615 @ 390,311: 21x22', '#616 @ 520,181: 14x27', '#617 @ 810,280: 13x12', '#618 @ 717,528: 24x10', '#619 @ 437,810: 19x28', '#620 @ 60,426: 15x13', '#621 @ 63,398: 10x4', '#622 @ 691,42: 10x15', '#623 @ 803,284: 3x24', '#624 @ 455,174: 23x13', '#625 @ 581,491: 15x18', '#626 @ 970,822: 18x17', '#627 @ 106,585: 24x29', '#628 @ 183,92: 15x27', '#629 @ 838,895: 18x10', '#630 @ 29,456: 23x16', '#631 @ 155,562: 10x26', '#632 @ 168,616: 13x10', '#633 @ 904,288: 12x21', '#634 @ 731,774: 28x29', '#635 @ 436,448: 29x17', '#636 @ 611,51: 16x24', '#637 @ 278,139: 16x28', '#638 @ 108,506: 14x10', '#639 @ 330,851: 16x15', '#640 @ 457,947: 16x23', '#641 @ 43,705: 23x28', '#642 @ 329,165: 18x15', '#643 @ 221,779: 13x16', '#644 @ 689,508: 18x29', '#645 @ 545,143: 24x28', '#646 @ 309,939: 21x23', '#647 @ 139,32: 14x28', '#648 @ 759,448: 24x29', '#649 @ 945,88: 23x17', '#650 @ 329,536: 27x24', '#651 @ 572,768: 24x11', '#652 @ 16,248: 19x16', '#653 @ 699,355: 25x19', '#654 @ 724,608: 23x28', '#655 @ 753,325: 10x15', '#656 @ 750,724: 19x16', '#657 @ 464,164: 20x19', '#658 @ 675,453: 14x10', '#659 @ 509,553: 24x29', '#660 @ 834,432: 7x6', '#661 @ 705,532: 29x13', '#662 @ 634,289: 25x19', '#663 @ 507,557: 20x23', '#664 @ 641,783: 20x28', '#665 @ 28,896: 14x13', '#666 @ 86,119: 14x21', '#667 @ 957,154: 20x24', '#668 @ 676,161: 23x19', '#669 @ 538,461: 8x3', '#670 @ 257,180: 24x15', '#671 @ 432,370: 10x20', '#672 @ 838,283: 16x16', '#673 @ 417,857: 16x15', '#674 @ 21,248: 14x29', '#675 @ 228,778: 15x26', '#676 @ 253,480: 21x14', '#677 @ 314,149: 17x20', '#678 @ 240,848: 14x22', '#679 @ 357,651: 24x19', '#680 @ 475,609: 20x23', '#681 @ 883,611: 11x23', '#682 @ 48,775: 20x23', '#683 @ 240,602: 27x28', '#684 @ 935,235: 24x22', '#685 @ 719,452: 23x11', '#686 @ 494,896: 18x18', '#687 @ 784,296: 16x20', '#688 @ 142,628: 12x20', '#689 @ 976,834: 23x15', '#690 @ 554,673: 17x10', '#691 @ 981,512: 17x23', '#692 @ 680,792: 29x21', '#693 @ 804,518: 15x23', '#694 @ 375,795: 24x29', '#695 @ 25,430: 21x12', '#696 @ 907,533: 17x14', '#697 @ 719,793: 14x10', '#698 @ 94,35: 20x13', '#699 @ 754,41: 24x12', '#700 @ 57,951: 21x20', '#701 @ 581,522: 24x13', '#702 @ 405,317: 24x24', '#703 @ 225,843: 20x13', '#704 @ 959,390: 11x29', '#705 @ 505,58: 13x12', '#706 @ 949,690: 23x24', '#707 @ 269,9: 18x22', '#708 @ 62,456: 21x21', '#709 @ 851,532: 23x28', '#710 @ 971,880: 18x29', '#711 @ 55,151: 20x21', '#712 @ 461,39: 12x20', '#713 @ 40,97: 13x11', '#714 @ 920,354: 10x21', '#715 @ 216,904: 25x28', '#716 @ 191,221: 25x24', '#717 @ 438,473: 27x27', '#718 @ 433,146: 11x10', '#719 @ 944,573: 17x19', '#720 @ 834,375: 29x12', '#721 @ 351,309: 21x23', '#722 @ 491,65: 11x23', '#723 @ 930,598: 29x17', '#724 @ 74,99: 11x27', '#725 @ 662,352: 25x10', '#726 @ 621,969: 11x16', '#727 @ 615,873: 12x13', '#728 @ 385,299: 20x28', '#729 @ 314,784: 14x16', '#730 @ 897,674: 11x15', '#731 @ 74,485: 26x10', '#732 @ 41,698: 22x27', '#733 @ 134,24: 29x27', '#734 @ 31,249: 10x14', '#735 @ 898,842: 18x17', '#736 @ 927,41: 14x11', '#737 @ 187,784: 27x12', '#738 @ 212,396: 21x21', '#739 @ 825,163: 22x22', '#740 @ 772,623: 21x26', '#741 @ 125,584: 19x19', '#742 @ 56,723: 27x23', '#743 @ 377,345: 22x12', '#744 @ 128,324: 10x29', '#745 @ 7,839: 23x13', '#746 @ 238,220: 26x22', '#747 @ 864,515: 15x17', '#748 @ 137,598: 16x11', '#749 @ 687,954: 28x24', '#750 @ 163,598: 11x26', '#751 @ 758,130: 29x27', '#752 @ 952,227: 29x21', '#753 @ 800,34: 18x20', '#754 @ 575,5: 22x19', '#755 @ 446,91: 29x24', '#756 @ 114,904: 22x19', '#757 @ 403,154: 24x26', '#758 @ 947,863: 10x28', '#759 @ 744,821: 14x19', '#760 @ 493,941: 19x28', '#761 @ 529,174: 20x12', '#762 @ 136,46: 11x22', '#763 @ 354,255: 15x12', '#764 @ 455,470: 15x18', '#765 @ 225,221: 13x23', '#766 @ 675,430: 15x29', '#767 @ 71,26: 26x10', '#768 @ 101,898: 16x11', '#769 @ 340,131: 16x12', '#770 @ 480,659: 24x14', '#771 @ 527,458: 24x10', '#772 @ 361,881: 29x15', '#773 @ 851,381: 23x27', '#774 @ 334,866: 14x28', '#775 @ 465,486: 3x5', '#776 @ 324,923: 14x27', '#777 @ 506,51: 16x19', '#778 @ 935,91: 14x12', '#779 @ 485,563: 11x27', '#780 @ 20,532: 25x29', '#781 @ 734,155: 16x12', '#782 @ 675,931: 13x10', '#783 @ 817,638: 11x12', '#784 @ 183,155: 28x11', '#785 @ 393,968: 10x10', '#786 @ 565,222: 28x23', '#787 @ 884,492: 25x20', '#788 @ 924,357: 17x13', '#789 @ 399,971: 13x28', '#790 @ 515,353: 24x18', '#791 @ 448,491: 16x27', '#792 @ 789,222: 27x18', '#793 @ 964,791: 27x26', '#794 @ 858,738: 14x26', '#795 @ 783,304: 15x14', '#796 @ 40,229: 23x24', '#797 @ 66,954: 10x15', '#798 @ 441,818: 29x20', '#799 @ 24,190: 28x17', '#800 @ 550,909: 23x29', '#801 @ 216,38: 22x21', '#802 @ 64,430: 16x22', '#803 @ 982,244: 12x24', '#804 @ 11,254: 22x26', '#805 @ 245,202: 29x24', '#806 @ 619,256: 29x12', '#807 @ 624,301: 13x17', '#808 @ 450,765: 3x6', '#809 @ 922,807: 25x12', '#810 @ 785,19: 15x27', '#811 @ 568,406: 28x20', '#812 @ 908,348: 18x10', '#813 @ 907,886: 12x11', '#814 @ 527,429: 10x26', '#815 @ 274,697: 16x26', '#816 @ 298,417: 26x26', '#817 @ 728,798: 15x26', '#818 @ 745,512: 15x16', '#819 @ 308,503: 18x21', '#820 @ 856,38: 19x26', '#821 @ 221,223: 17x16', '#822 @ 922,553: 12x15', '#823 @ 95,470: 13x20', '#824 @ 819,972: 23x24', '#825 @ 881,451: 19x20', '#826 @ 454,657: 24x23', '#827 @ 671,989: 18x10', '#828 @ 381,566: 21x10', '#829 @ 925,898: 10x27', '#830 @ 192,517: 14x28', '#831 @ 35,315: 13x11', '#832 @ 44,891: 13x28', '#833 @ 217,103: 21x28', '#834 @ 588,666: 16x19', '#835 @ 849,188: 25x28', '#836 @ 941,227: 20x20', '#837 @ 836,17: 18x24', '#838 @ 0,689: 11x16', '#839 @ 194,689: 11x25', '#840 @ 369,456: 19x19', '#841 @ 585,44: 16x20', '#842 @ 528,64: 10x14', '#843 @ 208,147: 29x27', '#844 @ 981,881: 15x11', '#845 @ 521,104: 11x24', '#846 @ 888,304: 12x25', '#847 @ 856,452: 13x16', '#848 @ 899,306: 24x16', '#849 @ 122,123: 22x13', '#850 @ 478,201: 26x25', '#851 @ 736,449: 22x29', '#852 @ 237,488: 26x28', '#853 @ 873,280: 27x19', '#854 @ 326,1: 28x20', '#855 @ 644,161: 24x13', '#856 @ 410,97: 27x16', '#857 @ 570,1: 27x19', '#858 @ 100,611: 15x29', '#859 @ 918,85: 17x20', '#860 @ 292,57: 15x18', '#861 @ 421,935: 15x27', '#862 @ 819,537: 23x17', '#863 @ 487,922: 9x14', '#864 @ 565,135: 10x20', '#865 @ 801,593: 25x27', '#866 @ 227,348: 16x11', '#867 @ 893,675: 19x18', '#868 @ 715,577: 22x19', '#869 @ 456,363: 25x10', '#870 @ 712,623: 13x13', '#871 @ 88,474: 20x18', '#872 @ 433,372: 28x10', '#873 @ 274,549: 17x24', '#874 @ 751,381: 17x17', '#875 @ 287,542: 15x26', '#876 @ 520,511: 26x18', '#877 @ 607,196: 19x27', '#878 @ 797,265: 23x29', '#879 @ 866,867: 25x12', '#880 @ 615,910: 13x23', '#881 @ 316,337: 11x23', '#882 @ 941,312: 29x21', '#883 @ 942,569: 14x18', '#884 @ 390,598: 24x27', '#885 @ 29,181: 19x25', '#886 @ 73,475: 12x14', '#887 @ 139,859: 26x13', '#888 @ 730,224: 29x12', '#889 @ 541,487: 29x26', '#890 @ 778,617: 28x26', '#891 @ 34,967: 27x27', '#892 @ 327,232: 21x19', '#893 @ 103,702: 14x14', '#894 @ 119,663: 11x28', '#895 @ 437,711: 23x10', '#896 @ 699,611: 29x11', '#897 @ 967,678: 25x29', '#898 @ 760,495: 13x15', '#899 @ 876,507: 11x28', '#900 @ 682,783: 27x19', '#901 @ 208,609: 20x17', '#902 @ 25,262: 12x29', '#903 @ 711,544: 21x17', '#904 @ 433,635: 25x21', '#905 @ 661,67: 16x15', '#906 @ 240,944: 24x23', '#907 @ 962,364: 26x26', '#908 @ 281,747: 27x12', '#909 @ 793,168: 19x20', '#910 @ 908,60: 6x3', '#911 @ 194,135: 24x16', '#912 @ 641,821: 11x14', '#913 @ 383,596: 27x19', '#914 @ 189,436: 13x14', '#915 @ 95,512: 12x28', '#916 @ 788,522: 17x15', '#917 @ 879,440: 11x22', '#918 @ 59,271: 29x28', '#919 @ 64,489: 25x10', '#920 @ 698,596: 25x13', '#921 @ 769,980: 4x9', '#922 @ 570,287: 28x20', '#923 @ 84,622: 22x15', '#924 @ 771,516: 26x19', '#925 @ 296,647: 14x26', '#926 @ 916,392: 15x26', '#927 @ 441,905: 26x27', '#928 @ 885,409: 17x19', '#929 @ 768,860: 28x15', '#930 @ 804,412: 29x17', '#931 @ 565,294: 11x19', '#932 @ 317,12: 20x22', '#933 @ 371,80: 23x13', '#934 @ 370,555: 18x14', '#935 @ 424,752: 10x13', '#936 @ 209,83: 10x27', '#937 @ 789,52: 29x28', '#938 @ 215,89: 26x28', '#939 @ 444,464: 15x25', '#940 @ 425,848: 14x13', '#941 @ 469,195: 25x27', '#942 @ 715,738: 18x21', '#943 @ 910,716: 14x13', '#944 @ 816,29: 11x26', '#945 @ 70,659: 12x17', '#946 @ 193,438: 5x9', '#947 @ 491,882: 25x11', '#948 @ 879,49: 12x10', '#949 @ 719,164: 25x16', '#950 @ 164,887: 22x12', '#951 @ 349,180: 25x28', '#952 @ 694,165: 12x26', '#953 @ 391,609: 12x13', '#954 @ 159,724: 18x24', '#955 @ 871,150: 17x27', '#956 @ 110,139: 21x21', '#957 @ 84,25: 12x14', '#958 @ 479,645: 17x16', '#959 @ 57,726: 13x23', '#960 @ 437,586: 23x25', '#961 @ 491,57: 18x14', '#962 @ 44,104: 26x12', '#963 @ 522,911: 27x17', '#964 @ 28,471: 15x19', '#965 @ 593,525: 16x25', '#966 @ 133,393: 25x26', '#967 @ 970,957: 25x11', '#968 @ 853,265: 27x20', '#969 @ 421,613: 22x14', '#970 @ 801,282: 13x29', '#971 @ 439,947: 29x13', '#972 @ 203,31: 15x15', '#973 @ 960,259: 23x25', '#974 @ 648,355: 18x25', '#975 @ 94,123: 26x25', '#976 @ 830,619: 12x12', '#977 @ 388,80: 29x25', '#978 @ 162,910: 14x18', '#979 @ 483,369: 28x27', '#980 @ 232,492: 28x10', '#981 @ 108,626: 24x14', '#982 @ 438,812: 10x13', '#983 @ 373,916: 27x17', '#984 @ 2,823: 12x22', '#985 @ 891,822: 10x26', '#986 @ 928,804: 20x24', '#987 @ 356,193: 4x13', '#988 @ 65,639: 25x22', '#989 @ 374,177: 28x12', '#990 @ 906,924: 25x17', '#991 @ 960,986: 24x10', '#992 @ 338,79: 12x12', '#993 @ 777,696: 23x29', '#994 @ 326,161: 21x14', '#995 @ 902,85: 26x16', '#996 @ 537,42: 29x27', '#997 @ 24,903: 6x12', '#998 @ 588,913: 13x15', '#999 @ 639,624: 19x16', '#1000 @ 731,900: 18x12', '#1001 @ 118,290: 16x10', '#1002 @ 311,832: 23x29', '#1003 @ 809,292: 18x28', '#1004 @ 878,558: 26x15', '#1005 @ 170,565: 26x23', '#1006 @ 399,336: 20x16', '#1007 @ 245,693: 9x3', '#1008 @ 10,270: 10x10', '#1009 @ 767,728: 29x28', '#1010 @ 774,134: 16x29', '#1011 @ 791,604: 29x23', '#1012 @ 185,442: 11x23', '#1013 @ 519,353: 29x25', '#1014 @ 64,730: 27x17', '#1015 @ 873,871: 14x24', '#1016 @ 456,455: 29x10', '#1017 @ 688,73: 12x17', '#1018 @ 159,974: 16x11', '#1019 @ 468,357: 21x11', '#1020 @ 462,471: 12x28', '#1021 @ 26,580: 12x19', '#1022 @ 47,886: 13x19', '#1023 @ 801,142: 27x17', '#1024 @ 311,91: 20x13', '#1025 @ 857,861: 22x29', '#1026 @ 765,122: 10x22', '#1027 @ 12,842: 7x6', '#1028 @ 486,119: 19x10', '#1029 @ 560,895: 29x27', '#1030 @ 657,56: 14x14', '#1031 @ 130,799: 29x17', '#1032 @ 767,973: 12x23', '#1033 @ 623,566: 11x13', '#1034 @ 185,876: 16x14', '#1035 @ 312,619: 12x27', '#1036 @ 300,424: 20x5', '#1037 @ 762,483: 21x23', '#1038 @ 832,878: 11x28', '#1039 @ 749,298: 26x28', '#1040 @ 948,103: 19x15', '#1041 @ 802,275: 14x29', '#1042 @ 676,362: 17x28', '#1043 @ 870,880: 23x27', '#1044 @ 728,667: 21x15', '#1045 @ 22,367: 16x10', '#1046 @ 892,674: 17x18', '#1047 @ 578,668: 17x26', '#1048 @ 190,647: 19x23', '#1049 @ 259,544: 17x28', '#1050 @ 273,292: 14x25', '#1051 @ 647,819: 10x22', '#1052 @ 321,903: 26x13', '#1053 @ 100,619: 28x17', '#1054 @ 220,134: 12x16', '#1055 @ 96,340: 14x13', '#1056 @ 925,554: 29x12', '#1057 @ 849,777: 13x18', '#1058 @ 586,695: 22x29', '#1059 @ 885,149: 19x12', '#1060 @ 691,151: 13x13', '#1061 @ 417,40: 21x19', '#1062 @ 235,873: 14x17', '#1063 @ 480,183: 16x22', '#1064 @ 870,410: 27x22', '#1065 @ 308,822: 26x23', '#1066 @ 691,618: 11x18', '#1067 @ 291,545: 21x26', '#1068 @ 477,573: 27x22', '#1069 @ 426,950: 19x20', '#1070 @ 191,793: 18x28', '#1071 @ 171,477: 25x13', '#1072 @ 692,53: 10x17', '#1073 @ 420,708: 23x26', '#1074 @ 596,759: 17x18', '#1075 @ 660,341: 23x28', '#1076 @ 652,366: 22x20', '#1077 @ 562,671: 29x18', '#1078 @ 309,159: 28x10', '#1079 @ 890,419: 6x15', '#1080 @ 926,362: 10x22', '#1081 @ 983,964: 17x25', '#1082 @ 252,635: 13x17', '#1083 @ 521,63: 18x12', '#1084 @ 660,327: 25x19', '#1085 @ 139,604: 11x29', '#1086 @ 219,770: 27x19', '#1087 @ 717,479: 10x15', '#1088 @ 452,190: 27x19', '#1089 @ 751,463: 25x10', '#1090 @ 500,607: 13x17', '#1091 @ 23,200: 29x16', '#1092 @ 313,585: 12x16', '#1093 @ 887,246: 29x10', '#1094 @ 944,251: 10x3', '#1095 @ 148,183: 19x10', '#1096 @ 26,65: 29x21', '#1097 @ 309,622: 25x24', '#1098 @ 159,800: 15x10', '#1099 @ 565,24: 19x17', '#1100 @ 134,33: 10x20', '#1101 @ 893,832: 15x14', '#1102 @ 480,77: 14x16', '#1103 @ 314,823: 26x27', '#1104 @ 902,544: 28x16', '#1105 @ 904,394: 12x17', '#1106 @ 716,366: 16x26', '#1107 @ 194,978: 12x19', '#1108 @ 532,470: 27x16', '#1109 @ 642,886: 11x20', '#1110 @ 220,22: 27x17', '#1111 @ 304,849: 14x23', '#1112 @ 61,40: 13x15', '#1113 @ 198,517: 14x19', '#1114 @ 46,186: 15x20', '#1115 @ 787,175: 24x22', '#1116 @ 793,701: 24x11', '#1117 @ 40,190: 10x18', '#1118 @ 900,396: 17x26', '#1119 @ 205,600: 11x17', '#1120 @ 617,432: 29x16', '#1121 @ 325,755: 11x19', '#1122 @ 649,21: 13x10', '#1123 @ 859,632: 19x15', '#1124 @ 508,858: 19x14', '#1125 @ 570,389: 22x28', '#1126 @ 517,18: 21x15', '#1127 @ 373,641: 15x29', '#1128 @ 863,794: 21x13', '#1129 @ 62,89: 18x12', '#1130 @ 951,813: 19x12', '#1131 @ 806,126: 12x14', '#1132 @ 111,267: 19x24', '#1133 @ 848,910: 18x29', '#1134 @ 816,311: 11x20', '#1135 @ 963,38: 15x22', '#1136 @ 131,293: 23x27', '#1137 @ 704,670: 15x27', '#1138 @ 414,379: 29x20', '#1139 @ 941,142: 11x19', '#1140 @ 589,263: 12x15', '#1141 @ 372,397: 28x29', '#1142 @ 464,558: 23x22', '#1143 @ 113,387: 10x20', '#1144 @ 355,323: 22x28', '#1145 @ 349,179: 16x28', '#1146 @ 287,786: 10x17', '#1147 @ 875,509: 24x24', '#1148 @ 171,885: 24x28', '#1149 @ 528,734: 11x25', '#1150 @ 849,759: 12x21', '#1151 @ 935,225: 13x16', '#1152 @ 120,634: 10x12', '#1153 @ 907,409: 24x29', '#1154 @ 443,477: 16x15', '#1155 @ 240,172: 24x29', '#1156 @ 577,209: 22x17', '#1157 @ 184,683: 20x15', '#1158 @ 540,101: 22x13', '#1159 @ 273,160: 16x25', '#1160 @ 842,702: 25x22', '#1161 @ 170,135: 13x25', '#1162 @ 549,876: 10x14', '#1163 @ 864,759: 10x25', '#1164 @ 605,363: 18x25', '#1165 @ 428,460: 20x19', '#1166 @ 632,585: 28x12', '#1167 @ 20,529: 25x20', '#1168 @ 596,158: 17x12', '#1169 @ 221,416: 19x16', '#1170 @ 597,911: 25x23', '#1171 @ 233,492: 19x16', '#1172 @ 514,331: 29x23', '#1173 @ 49,287: 16x15', '#1174 @ 753,599: 16x27', '#1175 @ 622,960: 14x20', '#1176 @ 787,400: 19x17', '#1177 @ 953,955: 11x13', '#1178 @ 537,888: 13x18', '#1179 @ 152,228: 23x29', '#1180 @ 323,790: 13x25', '#1181 @ 199,742: 20x13', '#1182 @ 881,436: 24x11', '#1183 @ 27,417: 10x22', '#1184 @ 958,603: 26x15', '#1185 @ 473,180: 18x18', '#1186 @ 530,335: 21x23', '#1187 @ 683,665: 25x21', '#1188 @ 796,269: 11x14', '#1189 @ 738,796: 21x18', '#1190 @ 684,321: 24x14', '#1191 @ 609,82: 27x20', '#1192 @ 732,601: 22x24', '#1193 @ 882,430: 17x24', '#1194 @ 819,163: 10x27', '#1195 @ 192,739: 11x18', '#1196 @ 186,440: 29x11', '#1197 @ 715,608: 27x20', '#1198 @ 441,133: 28x14', '#1199 @ 65,422: 19x20', '#1200 @ 933,962: 21x29', '#1201 @ 905,58: 13x10', '#1202 @ 307,523: 24x10', '#1203 @ 546,132: 10x20', '#1204 @ 367,465: 19x21', '#1205 @ 33,157: 13x27', '#1206 @ 10,849: 21x13', '#1207 @ 874,857: 14x17', '#1208 @ 442,489: 16x22', '#1209 @ 340,47: 14x21', '#1210 @ 809,692: 10x27', '#1211 @ 364,659: 24x28', '#1212 @ 492,357: 10x23', '#1213 @ 606,86: 23x12', '#1214 @ 131,879: 15x26', '#1215 @ 381,323: 18x29', '#1216 @ 266,72: 29x26', '#1217 @ 214,389: 24x28', '#1218 @ 911,291: 16x23', '#1219 @ 279,691: 26x15', '#1220 @ 799,73: 20x10', '#1221 @ 946,336: 18x19', '#1222 @ 219,801: 18x17', '#1223 @ 755,456: 16x27', '#1224 @ 360,791: 27x14', '#1225 @ 869,858: 22x17', '#1226 @ 209,813: 14x19', '#1227 @ 375,965: 24x15', '#1228 @ 151,792: 21x21', '#1229 @ 441,869: 8x20', '#1230 @ 224,380: 16x15', '#1231 @ 133,214: 25x25', '#1232 @ 317,744: 16x13', '#1233 @ 617,267: 21x20', '#1234 @ 866,982: 16x17', '#1235 @ 349,131: 13x11', '#1236 @ 14,897: 22x22', '#1237 @ 952,544: 10x29', '#1238 @ 453,349: 25x13', '#1239 @ 409,219: 28x17', '#1240 @ 769,400: 23x17', '#1241 @ 235,110: 17x27', '#1242 @ 295,669: 10x27', '#1243 @ 231,931: 22x28', '#1244 @ 981,312: 14x27', '#1245 @ 924,75: 27x18', '#1246 @ 695,683: 25x14', '#1247 @ 889,39: 16x27', '#1248 @ 917,944: 15x20', '#1249 @ 929,221: 18x18', '#1250 @ 595,40: 21x24', '#1251 @ 482,572: 15x14', '#1252 @ 334,56: 17x29', '#1253 @ 683,604: 22x23'];


// PART ONE
function getProperties(claim) {
  let id = parseInt(claim.substring(claim.indexOf('#') + 1, claim.indexOf(' @')));
  let top = parseInt(claim.substring(claim.indexOf(',') + 1, claim.indexOf(':')));
  let left = parseInt(claim.substring(claim.indexOf('@ ') + 1, claim.indexOf(',')));
  let width = parseInt(claim.substring(claim.indexOf(': ') + 1, claim.indexOf('x')));
  let height = parseInt(claim.substring(claim.indexOf('x') + 1));
  let bottom = top + height;
  let right = left + width;

  return { id: id, top: top, bottom: bottom, left: left, right: right, width: width, height: height }
}

// Get used sheet size
let top = getProperties(input[0]).top;
let bottom = getProperties(input[0]).bottom;
let left = getProperties(input[0]).left;
let right = getProperties(input[0]).right;

for (let i = 1; i < input.length; i++) {
  let claim = getProperties(input[i]);
  top = (claim.top < top ? claim.top : top);
  bottom = (claim.bottom > bottom ? claim.bottom : bottom);
  left = (claim.left < left ? claim.left : left);
  right = (claim.right > right ? claim.right : right);
}

// Create material map
let material = [];
for (let x = left; x < right; x++) {
  let row = [];
  for (let y = top; y < bottom; y++) {
    row.push(0);
  }
  material.push(row);
}

// Mark uses of square inch
for (let i = 0; i < input.length; i++) {
  let claim = getProperties(input[i]);
  for (let x = claim.left; x < claim.right; x++) {
    for (let y = claim.top; y < claim.bottom; y++) {
      material[x][y] += 1;
    }
  }
}

// Count inches used more than once
let overlapCount = 0;
for (let x = left; x < right; x++) {
  for (let y = top; y < bottom; y++) {
    if (material[x][y] > 1) {
      overlapCount += 1;
    }
  }
}

const part1 = overlapCount;


// PART TWO
function overlaps(claim) {
  for (let x = claim.left; x < claim.right; x++) {
    for (let y = claim.top; y < claim.bottom; y++) {
      if (material[x][y] > 1) {
        return true
      }
    }
  }
  return false
}

function findUnique() {
  for (let i = 0; i < input.length; i++) {
    let claim = getProperties(input[i]);
    if (!overlaps(claim)) {
      return claim.id;
    }
  }
  return 'NA';
}

const part2 = findUnique();

export default { part1, part2 };