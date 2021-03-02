

var introMsg = '(G)I-dle (Korean: (여자)아이들; RR: Yeoja Aideul), stylized as (G)I-DLE, is a South Korean multi-national girl group formed by Cube Entertainment in 2018. The group consists of six members: Miyeon, Minnie, Soojin, Soyeon, Yuqi, and Shuhua.'
var introMsgTwo = 'On May 2, 2018, the group debuted with their first extended play, titled I Am and its lead single "Latata". On July 31, 2019, the group debuted in Japan under U-Cube with Latata.'
var introMsgThree='In 2018, (G)I-dle was dubbed the "monster rookies" of the year and has been considered one of the most successful South Korean girl groups to not hail from the "big three" record labels.'
var introMsgFour = 'Since their debut, the group has released six extended plays and eight singles, which include: "Latata", "Hann (Alone)", "Senorita", "Uh-Oh", "Lion", "Oh My God", "Dumdi Dumdi" and "Hwaa".'
var introMsgFive = '(G)I-dle has also stood out for their direct involvement in their music, with their leader, Soyeon, and members Minnie and Yuqi writing and co-producing their material. In conjunction with the release of their third EP I Trust in 2020,'
var introMsgSix = 'the group signed with Republic Records, an American record label, to pursue expansion into the U.S. marketplace. Upon its release, the group set the highest record for a South Korean girl group to top the iTunes Top Albums chart and the fourth girl group'
var introMsgSeven = 'to sell 100,000 copies in the first week of sales.Their 2020 single album, Dumdi Dumdi broke the single album sales record, making it the second best selling girl group single album of all time. (G)I-dle also became the first K-pop group to get interviewed by Forbes China.'
var cited = ' - cited from WikiPedia'
function Introducing() {
    let textBox = document.createElement("scrollBox")
    textBox.textContent = introMsg + introMsgTwo + introMsgThree + introMsgFour + introMsgFive + introMsgSix + introMsgSeven + cited
    document.getElementById("introducingBox").appendChild(textBox)
}
Introducing();
