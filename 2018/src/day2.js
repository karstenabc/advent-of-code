// Input data
const input = ['bvhfawknyoqsudzrpgslecmtkj', 'bpufawcnyoqxldzrpgsleimtkj', 'bvhfawcnyoqxqdzrplsleimtkf', 'bvhoagcnyoqxudzrpgsleixtkj', 'bxvfgwcnyoqxudzrpgsleimtkj', 'bvqfawcngoqxudzrpgsleiktkj', 'bvhfawcnmoqxuyzrpgsleimtkp', 'bvheawcnyomxsdzrpgsleimtkj', 'bcdfawcnyoqxudzrpgsyeimtkj', 'bvhpawcnyoqxudzrpgsteimtkz', 'bxhfawcnyozxudzrpgsleimtoj', 'bvhfdwcnyozxudzrposleimtkj', 'bvpfawcnyotxudzrpgsleimtkq', 'bvhfpwccyoqxudzrpgslkimtkj', 'bvhfawcnyoqxudirpgsreimtsj', 'bvhfawcnyoqxudzppgbleemtkj', 'bvhzawcnyoqxudqrpgslvimtkj', 'bvhfawclyoqxudirpgsleimtka', 'bvhgawfnyoqxudzrpguleimtkj', 'bvhfazcnytqxudzrpgslvimtkj', 'bvhfawcnygxxudzrpgjleimtkj', 'bxhfawcnyoqxudzipgsleimtxj', 'bvhptwcnyoqxudzrpgsleimtmj', 'bzhfawcgyooxudzrpgsleimtkj', 'bvhjlwcnyokxudzrpgsleimtkj', 'bvhfawcnyoqxudbrmgslesmtkj', 'bvhfawcnysixudzwpgsleimtkj', 'bvhflwcnymqxxdzrpgsleimtkj', 'bvifawcnyoyxudzrpgsleimtvj', 'bvhfawcnyofxudlrpgsheimtkj', 'bvhbawcmyoqxudzrpggleimtkj', 'bhhxgwcnyoqxudzrpgsleimtkj', 'bvhfawgnyoqxbdzrpgsleimfkj', 'bvhfawcnyoqxudcrngsleimykj', 'bvhfawcnyofxudzrpgslebgtkj', 'bvhfaocnybqxudzapgsleimtkj', 'bvhxawcnyodxudzrpfsleimtkj', 'bchfawcnyoqxudrrtgsleimtkj', 'bvhfawcqyoqxudzdpgsltimtkj', 'bvhfawknyoqxudzrpnsleimtbj', 'cihfawcnyoqxudirpgsleimtkj', 'bvlfawpnyoqxudzrpgslgimtkj', 'bulfawcnyoqbudzrpgsleimtkj', 'bvhfajcnyoqkudzrpgsoeimtkj', 'bvhrakcnyoqxudzrpgsleimjkj', 'bvbftwcnyoqxuvzrpgsleimtkj', 'bvhfhwcnyoqxudzrpgslelmtbj', 'bvhyawcntoqxudzrpgsleimtuj', 'xvhuawcnyoqxuqzrpgsleimtkj', 'pvhfawcnyoqxudzdpglleimtkj', 'bvhfawsnyoqxudzrpgvlefmtkj', 'bvhfawcnyoqxudzrpgepeiwtkj', 'bvhfawcnyoqxudzrphsleittkr', 'dvhfawcnyoqxudzrpkslzimtkj', 'bvhfawpnyoqxudzrpgmlcimtkj', 'bvhsawcnyzqxudzrpgsaeimtkj', 'bdhfawcnyoqxudzrpasleiwtkj', 'bvhfawbnyoqxpdbrpgsleimtkj', 'mvhfawwnyoqxujzrpgsleimtkj', 'bvafawcnyoyxudzrpgsleidtkj', 'bvhyawcnyoqxudztpgzleimtkj', 'besfawcnyoqxudzrpgsleimdkj', 'bvhfawcnyoqxudrrpgsjeimjkj', 'xvhfkwcnyoqxudzcpgsleimtkj', 'bvhfawcnyeqdudzrpgzleimtkj', 'bvhfuwcnybqxudzrpgsleimttj', 'lvhfawcnyoqhudzdpgsleimtkj', 'bvhfawcnyoqxudzrpgslevwtnj', 'bvhfadcnzoqxxdzrpgsleimtkj', 'bvsfawcnyoqxpdzrpgileimtkj', 'bzhfaycnyoqxudzrpgsxeimtkj', 'bwhfdwcnyoqxudzrpgsleimtkz', 'bvhfawcnyoqxudzrpgsjlimtkm', 'bvhfawcnyoqxudsrwgsleimtlj', 'bbhfalynyoqxudzrpgsleimtkj', 'bvhfawcnyeqxudzrpglleimtkr', 'bvhfawnnboqxurzrpgsleimtkj', 'yvhfawcnyoqxudzrpgslzimtpj', 'bvhfjwcnyoqxqdxrpgsleimtkj', 'bthfawcnyoqfudzrpgslhimtkj', 'bvhfawchuoqxudzqpgsleimtkj', 'bvhfawcndoqxudzrugsleimrkj', 'bvhfawcnnoqxjdzrpgsleidtkj', 'bvhpawcnyoqkudzrpgsleimtzj', 'bvhfaiinyoqxudzopgsleimtkj', 'bvhfawcnyxqxuizrigsleimtkj', 'bvnfawcnyoqxudzqpgsleimbkj', 'bvnfawcnyoeyudzrpgsleimtkj', 'bvhfawcnyoqxudarpgsieimtoj', 'bthcawcnyoqxudlrpgsleimtkj', 'bvhfnwcnyozxudzrpgsleomtkj', 'bpwfawcnyoqxudzrpgskeimtkj', 'bvhfapcnyoqxudnrpgsxeimtkj', 'bvhfdwcnyoqxubzrxgsleimtkj', 'fvhfawcnyoqxjdzrpgsleirtkj', 'bvhfawcneoqxudzrvzsleimtkj', 'bvhaawcnyoqxudzrpgsleimtex', 'bvhfawcnyojxudvrpgsleimckj', 'bvlfawcnyoqxddzrpgsleimtko', 'bvhfawclfoqxudzrpgsleiktkj', 'bvhfawciyobxudzrpgkleimtkj', 'bvhfpwcnyoqxudzrpgsqeimtkd', 'bvhyawcnyyqxudzrkgsleimtkj', 'bvhfawcncoqxudzrphsaeimtkj', 'bvhfawmnyoqxudzrpgifeimtkj', 'bvhfawcjyoqxudzjpgszeimtkj', 'bohfawcnwoqxudzrpgsleimwkj', 'bvhfaucnyoqxudzrpgfluimtkj', 'bvhfawlnyoqgudzrpgwleimtkj', 'bmhfawcnyoqxndzrpgsleymtkj', 'bvhfawcngoqxudzrpzxleimtkj', 'bihfawcnyoqxudrrpgsleimokj', 'lvhfawcnylqxudzrpgsleintkj', 'bvhfawcnyoqvugzrqgsleimtkj', 'bvhfawcnyoqxudzgpgslqimtij', 'bvhfawcnyoqludzrpgslnimtcj', 'hvhfawcnyolxudzrpgsmeimtkj', 'nvhfawcdkoqxudzrpgsleimtkj', 'bvhfawcnyoqxkdzrggsneimtkj', 'bvhfawnnyoqxudzrpgqleibtkj', 'bvhfawyuyoqxudzrhgsleimtkj', 'wvhfbwcnyoqxtdzrpgsleimtkj', 'bvhfawcnyoqxedzzpgoleimtkj', 'bvhfawcnioqxunzrpgsleimtnj', 'bvhfawctyoqxudzrpgsldkmtkj', 'bvhfawcnyonxudzrpgsleitpkj', 'bvefawcnyoqaudzhpgsleimtkj', 'bvhfawcnyxqxudzrpgslelmbkj', 'bvhfamrnyoqxudzrpgsleimgkj', 'bvhfaqcnyoqxudzrpgsaeimekj', 'bvhfawcnyoqcidzrpgsleimvkj', 'bvhfawcnnorxudzrpgsmeimtkj', 'bvroawcnyoqxudzrpgsleiwtkj', 'bvhfwwcnyoqxudzrpaslewmtkj', 'bvsfawcnyoqxudzcpgszeimtkj', 'bkhfmwcnyoqjudzrpgsleimtkj', 'bvtfawcnyoqxudzrcgslecmtkj', 'bvhfawcnypzxudzrpgsleimtkv', 'bvhfawcnyoqzudzrfgtleimtkj', 'bvhpawcnyoqxudhrpgsleimtko', 'tvhfawcnyoqxudzxpfsleimtkj', 'bvhfawccyofxudzrpqsleimtkj', 'bvnfawtnyoqxuzzrpgsleimtkj', 'bvhfamcnuwqxudzrpgsleimtkj', 'bvhfawcfyoqxudjrpgsleimrkj', 'bvhpalcnyoqxudzrpgslexmtkj', 'bvhfawcnjsqxudzlpgsleimtkj', 'bvhfafcnioqxydzrpgsleimtkj', 'bvzfawcnyxqxudzgpgsleimtkj', 'bvhzawcnyoqxudzrpgslewctkj', 'bvhiawcnhoqrudzrpgsleimtkj', 'bvhfawcnyoqxuszrggslenmtkj', 'bvhfowcnyoqxudzrptseeimtkj', 'behfawfnyoqxudzrpgsleimlkj', 'lvhfawcnyoqxudsrpgvleimtkj', 'bvhfawnnyaqxudzrpgsqeimtkj', 'lvhfawcnfoqxvdzrpgsleimtkj', 'svhxawcnyoqxudzrpqsleimtkj', 'bvhfawqnfoqxudzrpgsleimkkj', 'bvhfafcnyoqcudzrpgsleimtcj', 'bvhfyfcntoqxudzrpgsleimtkj', 'bvhfpwcnyoqxudzrpgsleimumj', 'bvhfawccyoqxudzrqgrleimtkj', 'bvhfawqnyoqxudzbpgsleimkkj', 'bvhflwcnyoqxudzrpxsleemtkj', 'bvhfawcnyoqxuezrpgslehrtkj', 'bvhfawceyoqxudzrpgsleimswj', 'bvhfawcncohgudzrpgsleimtkj', 'bahfawcnyoqxgdzrpgsleamtkj', 'yvhfawcnyoqxudzrppslrimtkj', 'fvhfawcmyoqxudzrpgskeimtkj', 'bvylawsnyoqxudzrpgsleimtkj', 'bvhfswcnyyqxedzrpgsleimtkj', 'fvrfawcnyoqxudzrpgzleimtkj', 'bvhfawcnyoqxuvzrpgslermtks', 'bvhkawccyoqxudzcpgsleimtkj', 'bvhfaobnyoqxudzrprsleimtkj', 'bvbfawcnyoqxudirpgsleimhkj', 'bvhfawcnyoqxudzvpgsueimtgj', 'bvhxawcnyoqxudzrpgsleimtgi', 'svhfawcjyoqxuszrpgsleimtkj', 'bvnfawcnyoeyudzrpgsldimtkj', 'bvhfawcnyoqxuhzrpgsleimcki', 'bvhfvwcnyoqxudzizgsleimtkj', 'bvhfapznyohxudzrpgsleimtkj', 'bvhfaelnyosxudzrpgsleimtkj', 'xvhfawcnmoqxuhzrpgsleimtkj', 'bjhfawcnyaqxutzrpgsleimtkj', 'bvhfawcnyohxudzrpgslgnmtkj', 'bvhfawcnyoqxudzrppsreimtkx', 'fvhfapcnyoqyudzrpgsleimtkj', 'qvhfafcnyoqxudorpgsleimtkj', 'bvhfawcnyoqxedzrwgsleimtvj', 'bvhfawgnyoqxudzupgqleimtkj', 'bvhfowctyoqxudzrpgbleimtkj', 'bvhwawcnyoqxudzapgslvimtkj', 'bvhfadcnyoqxudzrugsleimtuj', 'bvhfawcnyosxudzlpgsleamtkj', 'bvhfawcnywqxuqzrpgsloimtkj', 'bvhfawcnyoqxumzrpgvlfimtkj', 'bvhfawcgyoqxbdzrpgsleomtkj', 'bvhfahcnyoqwudzrfgsleimtkj', 'gvbfawcnyrqxudzrpgsleimtkj', 'svhfawcnyoqxudlrpgsleimtkx', 'avhfafcnyoqxuhzrpgsleimtkj', 'bvhfawcsyoqxuazrpgsleimtej', 'bvofawcnyoqxudzrpgsteimtkf', 'bvhfajcnyoqxudzqpgszeimtkj', 'bvhfawcsyoqxudzrmgsleiktkj', 'mvhfawcnyoqxudzrpgkluimtkj', 'bvhfawcnhoqxudzrpgslwhmtkj', 'bmhaawsnyoqxudzrpgsleimtkj', 'bvhfawcnyoqxudzhpgsleimhyj', 'bvhfxwcnyoqxsdzypgsleimtkj', 'bvhpawcyyoqxuczrpgsleimtkj', 'bvomawcnyovxudzrpgsleimtkj', 'bvhfawcnjvqxudzrpgsleimtkt', 'nvhfawcnyqqxudzrpgsleittkj', 'bvhiawcnyzqxudzrpysleimtkj', 'bvhdawcnyoqxukzrpgsleimtuj', 'bvhfawcnyyxxudzrpgslzimtkj', 'hvhfawcnyoqxudzupgslemmtkj', 'byhfawknyoqxudzrpgsleimtkb', 'bvhfawcnyoqxudzrpasleihakj', 'bvafahcnyaqxudzrpgsleimtkj', 'bkhfawcnyoqxudzrpgllepmtkj', 'bghfawcnycqxuzzrpgsleimtkj', 'bvhfawcnyoqxudzrbgeleimtkl', 'bvhfascnyoqgudzrpgsveimtkj', 'bvhfawnnyoqxudzrpgsleimtdl', 'bvhqawcnyoqxudzrpgsleimgrj', 'bvhsawdwyoqxudzrpgsleimtkj', 'bvhfawcnyoqxudzrpgaleipttj', 'bvhfawcnrlqxudzrbgsleimtkj', 'bvhfdwcnyoqxudzqpcsleimtkj', 'bvhfawcnyoqxudzopgslexmokj', 'bvhfawcoyoqxudzrpghlewmtkj', 'bvhfozcnykqxudzrpgsleimtkj', 'bvhfawcnyoqxuvzrpgslrimtkr', 'bvhfrncnyoqrudzrpgsleimtkj', 'bvhfawcnyocxuizrpgslefmtkj', 'bvhfawywyoqxudzrpgsleimxkj', 'bvhfawcnyoqxugzrpgslrimtij', 'bvtfawcnyoqxudzcpgsleimtfj', 'bvhfawcnyoqxuzzspgsleimtkz', 'bvhfawcnzoqxvdzrpgslsimtkj', 'bvhfzwcnyoqxudzrpgslenmhkj', 'bvhfkccnyoqxudzrpgzleimtkj', 'bvhfawcnyoqzudzrpgslhimwkj', 'bzhfawvnyooxudzrpgsleimtkj'];


// PART ONE
let double = 0;
let triple = 0;
for (let i = 0; i < input.length; i++) {
  // Get count for each letter in box id
  let id = input[i].split('');
  let chars = [id[0]];
  let count = [1];
  for (let j = 1; j < id.length; j++) {
    if (chars.includes(id[j])) {
      count[chars.indexOf(id[j])] += 1;
    } else {
      chars.push(id[j]);
      count.push(1);
    }
  }
  if (count.includes(2)) {
    double += 1;
  }
  if (count.includes(3)) {
    triple += 1;
  }
}

// Compute checksum
const part1 = double * triple;


// PART TWO
function compare(a, b) {
  let same = 0;
  let chars = [];
  for (let i = 0; i < a.length; i++) {
    if (a[i] === b[i]) {
      same += 1;
      chars.push(a[i]);
    }
  }
  return { count: same, chars: chars };
}

let part2 = 'NA';
for (let i = 0; i < input.length; i++) {
  let first = input[i].split('');
  for (let j = 1; j < input.length; j++) {
    let second = input[j].split('');
    if (compare(first, second).count === first.length - 1) {
      part2 = compare(first, second).chars.join('');

    }
  }
}


export default { part1, part2 };