String.prototype.multiReplace = function(arrSyntax)  // helper
{
  console.assert(Array.isArray(arrSyntax), "String.multiReplace: Invalid 'arrSyntax'!");
  var sRtn = this;
  $.each(arrSyntax, function(i, syntax){ sRtn = sRtn.replace(syntax[0], syntax[1]) });
  return sRtn;
};



jQuery(function($)
{
    m_mapMaxim =
    {
      arrDefault : [
        "一個人的價值, 在於他貢獻了什麽, 而不在於他獲得了什麽!	@愛因斯坦",
        "你若喜愛你自己的價值, 你就得給世界創造價值!	@歌德",
        "我從來不把安逸和享樂當作生活目的; 	對這種倫理基礎, 我稱之爲[豬欄的理想]	@愛因斯坦	/2012/04/weekly-share-0.html",
        "未經反思自省的人生不值得去過	The unexamined life is not worth living.	@蘇格拉底 (哲學之父)",
        "大多數人在20到30歲就已經過完自己的一生; 	一過了這個年齡段, 他們就變成自己的影子, 以後的生命只是在不斷重複自己...	@<約翰.克裏斯朵夫>羅曼.羅蘭 (作家 諾貝爾獎得主)	/2019/12/Time-and-Life.html",
        "活著, 如同生命最後一天般活著; 	學習, 如同永遠活著般學習!	@聖雄甘地 (印度國父)	/2019/12/Time-and-Life.html",
        "人所面對的絕境, 在很多情況下都不是生存的絕境, 而是[精神]的絕境!",
        "世上只有一種英雄主義 -- 就是在認清生活的真相之後依然熱愛生活	@羅曼.羅蘭 (作家 諾貝爾獎得主)",
        "人的一切痛苦都是源於對自己無能的憤怒	@王小波 (作家)",
        "Stay hungry. Stay foolish.	@喬布斯引自<全球概覽>	/2012/04/weekly-share-0.html",
        "人生中最大的兩個財富是: 你的[才華]和你的[時間]&#12290;	才華越來越多而時間越來越少&#12290;我們的一生就是用時間來換取才華&#12290;	/2019/12/Time-and-Life.html",
        "擁有追隨自己內心與直覺的勇氣 -- 你的內心與直覺多少已經知道你真正想要成爲什麽樣的人	Have the courage to follow your heart and intuition. They somehow already know what you truly want to become.	@喬布斯	/2012/04/weekly-share-0.html",
        "善良比聰明重要 -- 聰明是一種天賦, 而善良是一種選擇	Cleverness is a gift, kindness is a choice.	@貝佐斯 (亞馬遜公司創始人)",
        "我每天都自問: '如果今天是我生命的最後一天, 我還會做今天要做的事情嗎?'	如果連續很多天得到[否定]的回答, 那我就需要作出一些改變了&#12290;	@喬布斯	/2012/04/weekly-share-0.html",
        "預測未來最好的方法就是去創造未來	@林肯 (美國前總統)",
        "沒有人可以回到過去, 重新開始; 	但誰都可以從現在開始, 書寫一個全然不同的結局!",
        "人生最大的痛苦不是失敗	而是沒有經歷自己想要經歷的一切",
        "許多人所謂的成熟, 不過是被習俗磨去了棱角, 變得世故而實際了; 那不是成熟, 而是精神的早衰和個性的夭亡!	真正的成熟, 應當是獨特個性的形成, 真實自我的發現, 精神上的結果和豐收&#12290;	@<在世紀的轉折點上>尼采 (哲學家 思想家)",
        "這輩子沒法做太多的事情, 所以每一件都要做到精彩絕倫!	@喬布斯",
        "你的時間有限, 所以不要浪費時間去重複別人的生活!	Your time is limited, so don`t waste it living someone else`s life.	@喬布斯	/2019/12/Time-and-Life.html",
        "每個人出生的時候都是原創	可悲的是很多人漸漸都成了盜版",
        "時間會刺破青春的華麗精緻 	會把平行綫刻上美人的額角 	會吃掉稀世之珍和天生麗質 	什麽都逃不過它橫掃的鐮刀	@莎士比亞",
        "死亡是生命中最好的發明 -- 它把舊的清除以便給新的讓路	@喬布斯",
        "一年之計 莫如樹穀	十年之計 莫如樹木	終身之計 莫如樹人	@<管子>	/2019/12/Time-and-Life.html",
        "非淡泊無以明志	非寧靜無以致遠	@<淮南子>劉安",
        "你若不想做, 總能找到藉口	你若想做, 總會找到方法	@阿拉伯諺語",
        "想得到你從未擁有過的東西	就必須做你從未做過的事情",
        "你若失去了財産, 你只失去了一點兒; 	你若失去了榮譽, 你就失去了許多; 	你若失去了勇氣, 你就把一切都失去了!	@歌德",
        "那不能殺死我的, 使我更強!	What does not kill me, makes me stronger.	@尼采 (哲學家 思想家)	/2018/12/Book-Review-Antifragile-Things-That-Gain-from-Disorder.html",
        "對愛情的渴望, 對知識的追求, 對人類苦難不可遏制的同情心, 這三種純潔而無比強烈的激情支配著我的一生&#12290;	Three passions, simple but overwhelmingly strong, have governed my life: the longing for love, the search for knowledge, and unbearable pity for the suffering of mankind.	@<我爲什麽而活著>羅素 (哲學家 數學家 思想家)",
        "圍在城裏的人想逃出來, 城外的人想沖進去; 	對婚姻也罷, 職業也罷, 人生的願望大都如此!	@<圍城>錢鐘書",
        "授人以魚不如授人以漁!	授人以魚只救一時之急, 授人以漁則可解一生之需!	(注: 這也是俺博客的宗旨)"
      ],
  
      arrThink : [
        "興趣是最好的老師	@愛因斯坦	/2015/12/Hobbies-and-Interests.html",
        "知識上的投資總能得到最好的回報	@富蘭克林 (美國開國元勛 物理學家 作家)	/2013/09/knowledge-structure.html",
        "學習不是填滿水桶, 而是點燃火焰!	Education is not the filling of a pail but the lighting of a fire.	@葉芝 (愛爾蘭詩人)",
        "我唯一能確定的就是自己的[無知]	I know nothing except the fact of my ignorance.	@蘇格拉底 (哲學之父)",
        "真正的無知[不是]知識的貧乏	而是拒絕獲取知識	@波普爾 (哲學家 思想家)",
        "讀書是在別人思想的幫助下建立自己的思想	@尼古拉.魯巴金 (作家)	/2013/04/how-to-read-book.html",
        "不要盲目地崇拜任何權威 -- 因爲你總能找到相反的權威	@羅素 (哲學家 數學家 思想家)	/2014/05/fans-and-idolatry.html",
        "不必爲自己的獨特看法而害怕	因爲我們現在所接受的常識都曾是獨特看法	@<自由思想的十誡>羅素 (哲學家 數學家 思想家)",
        "僅僅憑藉信仰跟從就等於[盲從]	To follow by faith alone is to follow blindly.	@富蘭克林 (美國開國元勛 物理學家 作家)",
        "想像力比知識更重要!	因爲知識是有限的, 而想像力概括著世界的一切, 推動著進步, 幷且是知識進化的源泉	@愛因斯坦",
        "要打破人的偏見比崩解一個原子還難!	@愛因斯坦",
        "大多數人寧願相信[美麗的謊言]	而不願意直面[醜陋的真相]",
        "你要按你所想的去生活	否則你遲早會按你所生活的去想",
        "知人者智 自知者明	勝人者有力 自勝者強	@<道德經>",
        "大多數人寧願死去也不願思考	事實上他們也確實到死都沒有思考	@羅素 (哲學家 數學家 思想家)",
        "對知識分子而言, 成爲思維的精英比成爲道德的精英更重要!	@王小波 (作家)",
        "只有兩樣東西可能是無限的 -- 宇宙的大小和人類的愚蠢	不過, 對於前者我不太確定 :-)	@愛因斯坦"
      ],
  
      arrProgram : [
        "沒有銀彈(萬能藥)	NO silver bullet	@<人月神話>Fred Brooks (圖靈獎得主)	/2009/03/book-review-mythical-man-month.html",
        "編程的藝術就是處理複雜性的藝術	@Edsger Dijkstra (圖靈獎得主)",
  
        "簡單即是美	Simple is beautiful",
        "簡單是可靠的先決條件	Simplicity is prerequisite for reliability.	@Edsger Dijkstra (圖靈獎得主)",
        "優秀軟件的作用是讓複雜的東西看起來簡單	@Grady Booch (UML 創始人之一)",
        "設計軟件有兩種方法: 一種是簡單到極致而明顯沒有缺陷; 另一種是複雜到極致以至於沒有明顯的缺陷&#12290;前者要難得多!	There are two ways of constructing a software design: One way is to make it so simple that there are obviously no deficiencies, and the other way is to make it so complicated that there are no obvious deficiencies. The first method is far more difficult.	@C.A.R.Hoare (圖靈獎得主 算法大牛)",
  
        "優秀的設計在不斷地演化	糟糕的設計在不斷地打補丁",
        "最純粹&#12289;最抽象的設計難題就是設計橋梁 -- 你面對的問題是: 如何用最少的材料, 跨越給定的距離&#12290;	@保羅.格雷漢姆 (頂級黑客 矽穀創業教父)",
        "從不同的層次審視你的設計",
        "在軟件[可重用]之前先得[可用]	@Ralph Johnson (設計模式四人幫之一)",
        "軟件設計就像做愛, 一次犯錯, 你要用餘下的一生來維護 :-)	@Michael Sinz",
        "更好的工具未必能做出更好的設計",
  
        "好的程序員是那種過單行道馬路都要往兩邊看的人	@Doug Linder",
        "好的程序代碼本身就是最好的文檔	@<代碼大全>Steve McConnell",
        "程序必須首先讓人類可以理解 然後順便讓機器能執行	@<SICP>",
        "假如程序代碼和注釋不一致, 那麽很可能兩者都是錯的!	When code and comments disagree, both are probably wrong.	@Norm Schryer (貝爾實驗室科學家)",
        "你寫下的任何代碼, 六個月後再去看, 都像是別人寫的 :-)	@Tom Cargill (貝爾實驗室科學家)",
        "程序員花90%的時間完成90%的代碼量, 	但是剩下的10%代碼要再花費90%的開發時間 (90-90法則)	@Tom Cargill (貝爾實驗室科學家)",
  
        "不能影響你編程觀點的語言, 不值得你去學!	@Alan Perlis (第一個圖靈獎得主)",
        "世界上只有兩種編程語言 -- 要麽充滿了抱怨; 要麽沒人使用 :-)	@Bjarne Stroustrup (C++ 之父)",
        "沒有哪種編程語言能阻止程序員寫出糟糕的代碼, 不管這種語言的結構有多麽好!	@Larry Flon",
        "C 語言詭異離奇, 缺陷重重, 但卻獲得了巨大的成功 :-)	@Dennis Ritchie (C 語言之父 Unix 之父)",
        "(相對 C 而言)在 C++ 裏, 想搬起石頭砸自己的腳更爲困難了; 	不過一旦你真這麽做了, 整條腿都得報銷 :-)	@Bjarne Stroustrup (C++之父)",
        "Java 與 JavaScript 的關係, 如同雷鋒與雷峰塔的關係 :-)",
  
        "在理論上, 理論和實踐是沒有差異的; 但在實踐中, 是有差異的!	In theory, there is no difference between theory and practice. But in practice, there is.	@Snepscheut",
        "在進度落後的項目中增加人手只會導致進度更加落後	@<人月神話>Fred Brooks (圖靈獎得主)	/2009/03/book-review-mythical-man-month.html",
        "用代碼行數測算軟件開發進度 如同 按重量測算飛機的製造進度	@比爾.蓋茨",
        "在水上行走和按需求文檔開發軟件都很容易 -- 前提是它們都處於凍結狀態	@Edward V Berard",
        "樂觀主義是軟件開發的職業病	用戶反饋則是其治療方法	@Kent Beck (Extreme Programming 之父)",
        "軟件開發是一場程序員和上帝的競賽: 	程序員要開發出更強更好&#12289;連傻瓜都會用的軟件; 而上帝在努力創造更傻的傻瓜&#12290;	到目前爲止, 一直是上帝贏 :-)	@Rick Cook",
  
        "如果建築工人像程序員寫軟件那樣蓋房子, 那第一隻飛來的啄木鳥就能毀掉人類文明 :-)	@Gerald Weinberg (軟件工程大牛)",
        "如果說調試(debug)是去除 bug 的過程, 那麽編程就是製造 bug 的過程&#12290;	@Edsger Dijkstra (圖靈獎得主)",
        "要在自己的代碼裏找 bug 是很難的; 	而當你認爲你的代碼沒有錯誤時, 找 bug 就更難了!	@<代碼大全>Steve McConnel",
        "調試代碼比寫代碼更困難; 	因此, 如果你盡自己所能寫出了最複雜的代碼, 你將沒有更大的智慧去調試它 :-)",
  
        "過早的優化是萬惡之源	Premature optimization is the root of all evil.	@Donald Knuth (圖靈獎得主 算法大牛)",
        "Tape is Dead, Disk is Tape, Flash is Disk, RAM Locality is King!	@Jim Gray (圖靈獎得主 數據庫大牛)",
  
        "軟件就像[性] -- 免費的時候更好 :-)	Software is like sex, it`s better when it`s free.	@Linus Torvalds (Linux 之父)"
      ],
  
      arrPolity : [
        "在民主國家, 最高原則是全民的利益而不是統治者的利益&#12290;	服從民主國家的統治權幷不會使人變爲奴隸, 而是使人變爲公民&#12290;	@斯賓諾莎 (哲學家 思想家)",
        "國家爲人而立, 而非人爲國家而活&#12290;	國家的最高使命是保護個人, 使其有機會發展成爲有創造才能的人&#12290;	@愛因斯坦",
        "如果政府不能解決問題, 那它本身就成爲問題!	@裏根 (美國前總統)",
        "民衆不應該害怕他們的政府, 政府才應該害怕它的民衆!	People should not be afraid of their governments. Governments should be afraid of their people.	@電影<V怪客&#65295;V字仇殺隊>	/2011/11/film-v-for-vendetta.html",
        "製造恐懼是專制政府的終極武器	@電影<V怪客&#65295;V字仇殺隊>	/2011/11/film-v-for-vendetta.html",
        "憲法的基本原則是: 個人可以做任何事情, 除非法律禁止; 政府不能做任何事情, 除非法律許可&#12290;	@約翰.洛克 (哲學家 思想家)",
        "財産不應公有, 權力不應私有 -- 否則將會墜入地獄!	@約翰.洛克 (哲學家 思想家)",
        "沒有財産權就沒有正義	@哈耶克 (諾貝爾經濟學獎得主 政治思想家)",
        "愛國者的責任就是保護國家不受政府侵犯	@托馬斯.潘恩 (政治思想家)",
        "[反抗政府]的精神, 在某些場合是如此珍貴, 我希望它永遠保持活躍!	@托馬斯.傑斐遜 (美國前總統 <獨立宣言>起草人)",
        "沒有投票權的徵稅就是暴政	@詹姆斯.奧蒂斯 (美國獨立時期評論家)",
        "當法律失去公正 則反抗成爲義務	When injustice becomes law, resistance becomes duty.",
  
        "自由不是想做什麽就做什麽; 自由是教會你不想做什麽就可以不做什麽!	Freedom is not letting you do whatever you wanna but teaching you not to do the things you don`t wanna do.	@<實踐理性批判>康德 (哲學家 思想家)",
        "犧牲[基本自由]來換取暫時的安全, 最後既得不到安全也得不到自由!	@富蘭克林 (美國開國元勛 物理學家 作家)",
        "民主制度在[自由]中尋求平等	社會主義制度在[奴役]中尋求平等	@哈耶克 (諾貝爾經濟學獎得主 政治思想家)",
        "現在有人對你們說: '犧牲你們個人的自由, 去求國家的自由!'	我要對你們說: '爭取個人的自由, 就是爭取國家的自由; 爭取個人的人格, 就是爭取國家的國格&#12290;自由平等的國家不是一群奴才建造得起來的!'	@胡適 (思想家)	/2013/11/weekly-share-57.html",
        "美國人來了, 有麵包有自由; 	蘇俄來了, 有麵包無自由; 	中共來了, 無麵包無自由!	@胡適 (思想家)	/2014/07/artists-and-ccp.html",
        "告訴你我的孩子, 在你一生中有許多事值得爭取, 但[自由]無疑是最重要的!	永遠不要帶著腳鐐, 過奴隸的生活!	@電影<勇敢的心>",
        "法律本身幷不能保證言論自由; 要做到這一點, 必須所有人都有包容精神&#12290;	Laws alone can not secure freedom of expression;	in order that every man present his views without penalty there must be spirit of tolerance in the entire population.	@愛因斯坦",
        "親愛的同胞們, 不要問你們的國家能爲你們做些什麽, 而要問你們能爲國家做些什麽?	全世界的公民們, 不要問美國願意爲你們做些什麽, 而應該問我們在一起能爲人類的自由做些什麽?	(注: 這句名言經常被有意省略了第2段)	@肯尼迪 (美國前總統)",
        "自由人不會去問: '他的國家能爲他做些什麽?'	也不會去問: '他能爲他的國家做些什麽?'	他們問的是: '我和我的同胞們能通過政府做些什麽?'	@米爾頓.弗裏德曼 (諾貝爾經濟學獎得主)",
        "解放一個習慣於被奴役的民族	比	奴役一個習慣于自由的民族	更難	@孟德斯鳩 (啓蒙思想家)	/2012/06/stockholm-syndrome.html",
        "將愚人從他們所敬拜的鎖鏈下解放出來是非常困難的	@伏爾泰 (啓蒙思想家)	/2012/06/stockholm-syndrome.html",
  
        "專政與民主是對立的統一, 人民民主是基礎, 只有充分民主才能有專政; 	脫離了民主就成了[法西斯專政]!	@胡耀邦 談'人民民主專政'",
        "如果人民不歡迎我們, 我們就該下臺了!	@胡耀邦",
        "民主是自下而上爭取的	不是自上而下賜予的	@方勵之 (科學家 政治異議人士)",
        "民主幷非只是選舉投票; 	它是生活方式, 是思維方式, 是你每天呼吸的空氣, 舉手投足的修養, 個人回轉的空間...	@龍應台 (臺灣作家)",
  
        "共産主義是一種僞科學, 演變成一種僞宗教, 最終表現爲僵化的集權式的邪惡政治集團!	@<共産主義實錄>理查德.派普斯	/2018/09/Book-Review-The-Errors-of-Marxism-Leninism.html",
        "作爲一名預言家, 馬克思失敗的原因, 完全在於歷史主義的貧乏!	@<歷史決定論的貧困>波普爾 (哲學家 思想家)	/2018/09/Book-Review-The-Errors-of-Marxism-Leninism.html",
        "嘗試創建人間天堂, 最終只會創造出地獄!	The attempt to make heaven on earth invariably produces hell.	@波普爾 (哲學家 思想家)	/2018/09/Book-Review-The-Errors-of-Marxism-Leninism.html",
        "總是使一個國家變成人間地獄的東西, 恰恰是人們試圖將其變成天堂!	What has always made the state a hell on earth has been precisely that man has tried to make it heaven.	@荷爾德林 (哈耶克<通往奴役之路>第2章把此句作爲引言)	/2018/09/Book-Review-The-Errors-of-Marxism-Leninism.html",
        "如何判斷什麽樣的人是共産主義者捏? 共産主義者就是那些[閱讀]了馬克思和列寧著作的人; 	那麽, 什麽樣的人是反共産主義者捏? 反共産主義者是那些[理解]了馬克思和列寧著作的人&#12290;	@裏根 (美國前總統)	/2018/09/Book-Review-The-Errors-of-Marxism-Leninism.html",
        "年青的時候不相信社會主義, 那是缺乏良心; 	年老的時候還相信社會主義, 那是缺乏頭腦!	A young man who isn`t a socialist hasn`t got a heart. An old man who is a socialist hasn`t got a head.	@克列蒙梭 (法國政治家)",
        "共産主義最大的優越性體現在 -- 可以克服別的主義下根本不存在的困難 :-)",
        "我們生下來時, 共産黨就貪髒枉法/獨裁專政/踐踏人權/出賣國土 -- 這是我們一代人的無奈; 	等到我們的孩子長大了, 共産黨依然故我甚至變本加厲 -- 那就是我們這代人的無能!",
  
        "高等教育的價值在於培訓思維, 而不在於傳授事實!	The value of a college education is not the learning of many facts but the training of the mind to think.	@愛因斯坦",
        "成功的教學所需要的不是強制	而是激發學生的欲望	@托爾斯泰 (作家)",
        "花在孩子身上的錢和孩子的修養之間[沒有]任何關係, 甚至成反比!	在子女教育方面, 父母應該投入的是[時間], 而不是金錢!	@大前研一 (日本經濟評論家)",
        "父母們最根本的缺點, 在於想要自己的孩子爲自己爭光&#12290;	The fundamental defect of fathers is that they want their children to be a credit to them.	@羅素 (哲學家 數學家 思想家)",
        "父母在教育孩子時, 通常只是讓他們適應當前的世界 -- 哪怕當前是個墮落的世界&#12290;	@康德 (哲學家 思想家)",
        "小時候一個勁地教你做好人, 長大了一個勁地教你做壞人 -- 這就是[中國式教育]",
  
        "任何專制國家的教育, 其目的都是在極力降低國民的心智&#12290;	@孟德斯鳩 (啓蒙思想家)",
        "古代愚民政策是不許民衆受教育	現代愚民政策是只許民衆受洗腦教育",
        "全中國只有一所學校, 就是黨校 -- 其它的學校都是分校!	@陳丹青 (藝術家)",
        "洗腦教育要塑造的, 不是鐵屋中沉睡的人, 而是[裝睡]的人; 	因爲沉睡的人你總有辦法喚醒, 但是你永遠無法喚醒裝睡的人!",
        "當你試圖瞭解你的祖國, 你已經走上了犯罪道路!	@艾未未 (藝術家 持不同政見者)",
        "以前學英語是爲了更好地瞭解外國	現在學英語是爲了更好地瞭解中國",
  
        "我不同意你的觀點	但是我誓死捍衛你說話的權利	@伏爾泰 (啓蒙思想家)	/2014/02/freedom-of-speech.html",
        "若批評不自由	則贊美無意義	@法國<費加羅報>的宗旨",
        "如果你來到一個陌生的國家, 看到報紙上全是好消息; 	我敢打賭, 這個國家的好人都在監獄裏!	@帕特.莫尼漢(美國參議員 社會學家)",
        "你可以暫時地矇騙所有人, 也可以永久地矇騙部分人; 	但你不可能永久地矇騙所有人!	You can fool all the people some of the time, some of the people all the time, but you can NOT fool all the people all the time.	@林肯 (美國前總統)",
        "寧鳴而死	不默而生	@范仲淹",
        "在大欺騙的時代, 說出真相就是革命行爲!	@喬治.奧威爾 (<1984>作者)",
        "即使有一天, 黨宣佈'2+2=5', 你也不得不相信它 :-(	@<1984>喬治.奧威爾	/2009/06/book-review-1984.html",
        "藝術家用謊言揭露真相	政治家用謊言掩蓋真相	Artists use lies to tell the truth, while politicians use them to cover the truth up.	@電影<V怪客&#65295;V字仇殺隊>	/2011/11/film-v-for-vendetta.html",
        "世上最難的兩件事: 把自己的思想裝進別人的腦袋, 把別人的鈔票裝進自己的口袋 -- 共産黨都做到了",
        "在我們蘇聯, 謊言已不僅僅是道德問題, 而是國家的支柱!	@索爾仁尼琴 (諾貝爾獎得主 政治異議人士)",
        "謊言重複千遍就是真理!	@戈培爾 (納粹德國宣傳部長)",
        "報紙的任務就是把統治者的意志傳遞給被統治者, 使他們視地獄爲天堂!	@戈培爾 (納粹德國宣傳部長)",
        "人民大多數比我們想像的要蒙昧得多, 所以宣傳的本質就是堅持簡單和重複!	@戈培爾 (納粹德國宣傳部長)",
        "要撒謊就撒彌天大謊 -- 因爲彌天大謊往往具有某種可信的力量	民衆在大謊和小謊之間更容易成爲前者的俘虜	@戈培爾 (納粹德國宣傳部長)",
        "即使不封殺媒體, 也要讓媒體感到自己隨時可能被封殺, 從而讓媒體展開[自我審查]	@戈培爾 (納粹德國宣傳部長)	/2012/12/censorship-in-china.html",
  
        "中共是這樣的政黨 -- 既千方百計阻止你知道真相, 又千方百計指責你不明真相",
        "如果把中宣部的官員和衛生部的官員對調, 那麽中國既有了言論自由, 也有了食品安全 :-)",
        "中國共産黨是一心一意爲人民服務的政黨 -- 你想拒絕它的服務都不行 :-(",
        "如果我說'張三的媳婦要忠於李四', 你一定認爲我思維混亂; 	可如果我說'人民的軍隊要忠於黨', 你是不是立刻感覺到滿滿的正能量?",
        "索馬裏海盜說: 買麵包只能吃一天, 買把槍能吃一輩子!	中國共産黨說: 槍杆子裏出政權!",
        "中國沒有多少'人民內部矛盾', 主要是'黨和人民的矛盾'; 	黨反復提'人民內部矛盾', 其實是挑撥離間!",
  
        "歐美的精英們已經不再爲生存而擔憂, 不用因恐懼而說話; 	而中國的精英們還在爲民主自由而耗盡精力甚至生命!",
        "如果魯迅活在這個年代	他的博客首先會被和諧, 然後被有關部門請去喝茶, 最後以'煽動顛覆國家罪'被捕入獄...",
        "一個國家的監獄裏有一個良心犯, 這個國家就不會有良心; 	有兩個, 這個國家就讓人噁心; 	有三個, 這就不是國家; 	有四個, 亡國就是解放!	@昂山素季 (緬甸民運領袖)",
        "天朝知識分子分三類: 1 沉默的大多數 2 公共知識分子 3 '公公'知識分子",
        "一百年了都沒長進 -- 上面還是慈禧, 下面還是義和團!	@資中筠 (中國社科院學者)",
        "要以世界的眼光看中國	不要以中國的眼光看世界	@周有光 (語言學家 經濟學家)",
        "'中國模式'的核心競爭力就是[壓榨勞動力]	@謝國忠 (經濟學家)",
        "中國比小說更離奇	@鐘祖康 (作家)",
        "道德在書本裏, 榜樣在電視裏, 國土在肺裏, 愛情在房産證裏, 幸福感在夢裏...	這就是中國特色",
        "拜金不可怕, 可怕的是: 在一個不吃不喝也要幾百年才能買房的社會卻不許拜金; 	低俗不可怕, 可怕的是: 在一個幾千萬男生找不到女友, 同齡少女都被老男人包養的國度卻不准低俗!",
        "某微信群, 一幫'愛國者'在討論哪個國家最反華? 於是開始列舉: 	限制華人自由出入, 限制華人買房買車, 限制華人子女就學, 對華人收更高的稅, 強制華人買更貴的汽油, 給華人吃地溝油毒奶粉, 限制華人生孩子...	最後所有人都不說話了",
        "先帝爺留下一個爛攤子; 	第二代治理者的辦法是頭疼醫頭, 腳疼醫腳, 雖然去不了病根兒, 但起碼減輕症狀, 讓你以爲治好了; 	第三代是頭疼醫臉, 腳疼也醫臉 -- 對他們來說, 能否治好無所謂, 面子最重要; 	這一代更邪乎了, 頭疼堵嘴, 腳疼也堵嘴 -- 只要喊不出疼, 就算沒病!",
        "在天朝, 可怕的不是逼良爲娼; 	而是逼良爲娼之後, 再來掃黃!",
        "郭敬明和唐駿的共同點是 -- 他們這類人越成功, 就說明我們這個社會越失敗!",
        "不是具有中國特色的社會主義	而是具有中國特色的社會達爾文主義",
  
        "權力導致腐敗, 絕對的權力導致絕對的腐敗!	@阿克頓勛爵 (政治思想家)",
        "一切擁有權力的人都有濫用權力爲自己謀求私利的傾向	@孟德斯鳩 (啓蒙思想家)	/2014/07/corruption-and-form-of-government.html",
        "一群[億萬富豪]在人民大會堂裏開兩會 -- 他們管自己叫[無産階級先鋒隊]	/2012/03/national-people-congress.html",
        "中國人民是偉大的 -- 用全球7%的耕地養活了全球50%的公務員, 幷承受全球70%的官員腐敗 :-(",
        "取之愚民 用之移民 -- 天朝官員的財富之道",
        "所謂'摸著石頭過河'就是 -- 群衆們都過河了, 官員們還在那裏假裝摸石頭",
  
        "羅馬之所以是這樣的羅馬	因爲市民就是這樣的市民	This City is what it is because our citizens are what they are.	@柏拉圖",
        "一個肮髒的國家, 如果人人講規則而不是空談道德, 最終會變成一個有人味兒的正常國家, 道德自然會逐漸回歸; 	反之, 一個乾淨的國家, 如果人人都不講規則卻大談道德&#12289;談高尚, 天天沒事兒就講道德規範, 人人大公無私, 最終這個國家會墮落成爲一個僞君子遍佈的肮髒國家!	@胡適 (思想家)	/2013/11/weekly-share-57.html",
        "你要看一個國家的文明, 只需考察三件事: 	第一, 看他們怎樣待小孩子	第二, 看他們怎樣待女人	第三, 看他們怎樣利用閑暇的時間	@胡適 (思想家)	/2011/02/book-review-chinese-characteristics.html",
        "做奴隸雖然不幸, 但幷不可怕, 因爲知道掙紮, 畢竟還有掙脫的希望; 	若是從奴隸生活中尋出美來, 贊嘆, 陶醉, 就是萬劫不復的奴才了!	@魯迅	/2012/06/stockholm-syndrome.html",
        "自有歷史以來, 中國人是一向被[同族]屠戮&#12289;奴隸&#12289;敲掠&#12289;刑辱&#12289;壓迫下來的, 	非人類所能忍受的楚痛, 也都身受過&#12290;	每一考查, 真教人覺得不像活在人間&#12290;	@魯迅	/2011/02/book-review-chinese-characteristics.html",
        "信仰不能當飯吃, 所以不重要; 民主不能當飯吃, 所以不重要; 自由不能當飯吃, 所以不重要...	對中國人來說, 不能當飯吃的, 都不重要!	我們信奉了豬的生活原則, 也就得到了豬的命運 -- 遲早給別人當飯吃",
        "如果民衆以豬的方式思考	那麽統治者就會以屠夫的方式行事",
  
        "與惡魔戰鬥的勇士, 要小心自己也變成惡魔!	當你長久地凝視深淵, 深淵也在凝視著你!	@尼采 (哲學家 思想家)",
        "真的猛士敢於在一個不正常的國家做一個正常的人",
        "一旦你習慣了戴面具的生活	你的臉將變得跟面具一樣	@電影<V怪客&#65295;V字仇殺隊>	/2010/11/institutionalize.html",
        "每當有事情發生, 懦夫會問: '這麽做安全嗎?'	患得患失者會問: '這麽做明智嗎?'	虛榮者會問: '這麽做受歡迎嗎?'	但是良知只會問: '這麽做正確嗎?'	@馬丁.路德.金 (美國人權領袖)",
        "人道主義的含義是 -- 從不以[人]作爲犧牲來達到某一目的	@施韋策 (諾貝爾和平獎得主)",
        "無限的寬容必將導致寬容的消失	Unlimited tolerance must lead to the disappearance of tolerance.	@波普爾 (哲學家 思想家)",
        "雪崩時, 沒有一片雪花覺得自己有責任	@伏爾泰 (啓蒙思想家)"
      ],
  
      arrHistory : [
        "誰控制過去, 誰就控制未來; 	誰控制現在, 誰就控制過去!	Who controls the past controls the future. Who controls the present controls the past.	@<1984>喬治.奧威爾	/2009/06/book-review-1984.html",
        "以銅爲鏡 可以正衣冠	以史爲鏡 可以知興替	以人爲鏡 可以明得失	@李世民 (唐太宗)",
        "人類從歷史中學到的唯一教訓就是 -- 人類沒有從歷史中學到任何教訓!	@湯因比 (歷史學家)",
        "每個強國的命運都受兩個因素支配 -- 內在的和外來的衝突, 也就是所謂[革命]與[戰爭]!	一個國家如果不是因爲衰弱, 就絕不會主動謀求和平; 	而使它們衰弱得最快的, 正是所謂的[安全感]!	@<西方軍事史>約翰.富勒",
        "人們總以爲自己生活的時代糟糕透頂, 總是嚮往過去的黃金時代; 	但在我們如今認爲是身處黃金年代的那些人看來, 他們當時所處的世界同樣是蒼白無力的!	@伍迪.艾倫 (作家 編劇 導演)",
        "中國人最悲哀的就是 -- 剛被歷史的車輪碾過, 還沒來得及爬起來, 發現歷史在倒車 :-("
      ],
  
      arrMilitary : [
        "戰爭是流血的政治	政治是不流血的戰爭	@<戰爭論>克勞塞維茨",
        "百戰百勝, 非善之善者也; 不戰而屈人之兵, 善之善者也&#12290;	故上兵伐謀, 其次伐交, 其次伐兵, 其下攻城&#12290;	@<孫子兵法>孫武",
        "知己知彼 百戰不殆	不知彼而知己 一勝一負	不知彼不知己 每戰必殆	@<孫子兵法>孫武",
        "投之亡地然後存	陷之死地然後生	@<孫子兵法>孫武",
        "兵無常勢, 水無常形; 	能因敵變化而取勝者, 謂之神!	@<孫子兵法>孫武",
        "武器的改進大多由於一兩個人的功勞, 而戰術的更新卻必須克服整個保守階層的惰性!	@<海權論>阿爾弗雷德.馬漢"
      ],
  
      arrManagement : [
        "管理是一種實踐	其本質不在於[知]而在於[行]	其驗證不在於[邏輯]而在於[成果]	@彼得.德魯克 (管理學之父)",
        "企業無法持續成長壯大, 反而每況愈下瀕臨破産的最主要原因是 -- 當企業老闆不應該做決策的時候, 卻仍然緊握著決策權不放; 	企業應該盡可能將決策權放到最低層級, 越接近行動的現場越好!	@彼得.德魯克 (管理學之父)",
        "管理是一項工作, 但它本身幷[不是]全職工作&#12290;	在設計一項管理職務時, 要把[管理]與[工作](即一個人的'特殊職能'與'本身職務')結合起來&#12290;	一般而言, 管理人員應該既是一個管理人員, 又是一位專業人員&#12290;	@彼得.德魯克 (管理學之父)",
        "用人不在於如何減少人的短處	而在於如何發揮人的長處	@彼得.德魯克 (管理學之父)",
        "企業最大的資産是人	@松下幸之助 (號稱日本經營之神)",
        "你想雇用的人必須具備3種品質: 正直誠實, 聰明能幹, 精力充沛; 	如果缺少第一種, 後兩種品質會要你命!	@巴菲特	/2009/04/defect-of-hire.html",
        "以用戶爲中心 其它一切紛至遝來	@Google 信條",
        "只有偏執狂才能生存	@Andy Grove (英特爾公司創始人之一, 前任 CEO)	/2016/04/Andy-Grove-Quotes-on-Leadership.html",
        "我們沒有不懂技術的管理人員	因爲尋求技術和管理的平衡毫不費力	@比爾.蓋茨",
        "偉大的車工值得給他幾倍于普通車工的薪水; 	但一個偉大的程序員, 其價值相當于普通程序員的一萬倍!	@比爾.蓋茨",
        "我的管理風格既不是美國的個人主義, 也不是日本的共識主義, 而是獨特的達爾文主義(適者生存)!	@比爾.蓋茨",
        "當你用一個手指指著某人時, 請注意其它三個手指在指哪兒?	@Gerald Weinberg (軟件工程大牛)	/2009/07/book-review-are-your-lights-on.html",
        "己所不欲	勿施於人	@<論語>",
        "水至清則無魚	人至察則無徒	@<漢書 東方朔傳>",
        "獲得信任的技巧就是 -- 避免使用任何技巧	@Gerald Weinberg (軟件工程大牛)",
        "不怕神一樣的對手	就怕豬一樣的隊友"
      ],
  
      arrEconomy : [
        "花自己的錢 辦自己的事 -- 既講節約 又講效果	花自己的錢 辦別人的事 -- 只講節約 不講效果	花別人的錢 辦自己的事 -- 不講節約 只講效果	花別人的錢 辦別人的事 -- 不講節約 不講效果	@米爾頓.弗裏德曼 (諾貝爾經濟學獎得主)",
        "如果在撒哈拉沙漠實行[計劃經濟], 連沙子都會短缺!	@路德維希.馮.米塞斯 (經濟學家 哲學思想家)",
        "我也會有恐懼和貪婪, 只不過是 -- 在大衆貪婪時恐懼, 在大衆恐懼時貪婪!	@巴菲特",
        "控制風險的最好辦法是深入思考, 而不是投資組合!	@巴菲特",
        "價值投資不能保證一定盈利	但價值投資提供了通向成功的[唯一]機會	@巴菲特",
        "我從事投資時會觀察一家公司的[全貌]	而大多數投資人只盯著它的[股價]	@巴菲特",
        "投資成功與否幷非取決於你瞭解的東西, 而在於你能否老老實實地承認你所不知道的東西!	投資人幷不需要做對很多事情, 重要的是不要犯重大的錯誤!	@巴菲特",
        "退潮時便可知道誰在裸泳	@巴菲特",
        "短期而言, 股票市場是個投票機	長期而言, 股票市場是個稱重器	@本傑明.格雷厄姆",
        "中國股市比賭場還[不如] -- 因爲在中國股市, 某些人可以看別人的底牌	@吳敬璉 (經濟學家)",
        "最多人走的路肯定最安全	但別指望會在這樣的路上碰到很多獵物	@紀德 (作家 諾貝爾獎得主)",
        "投資是預測資産收益的活動	投機是預測市場心理的活動	@凱恩斯 (經濟學家)"
      ],
  
      arrGFW : [
        "自由有許多困難, 民主亦非完美; 	然而, 我們從未建造一堵墻, 把我們的人民關在裏面, 不准他們離開	@<在柏林墻下的演說>肯尼迪 (美國前總統)	/2009/07/break-through-berlin-wall.html",
        "這些(監獄的)圍墻很有趣 -- 起初你痛恨它; 然後你逐漸習慣它; 足夠長時間後, 你開始依賴它...	這就是體制化!	@電影<肖申克的救贖>	/2010/11/institutionalize.html",
        "Google 重新發明了搜索	Facebook 重新發明了社交	Apple 重新發明了手機	Amazon 重新發明了書籍	...	天朝重新發明了局域網",
        "翻墻和 OOXX 的相似之處: 	一旦會做就老想做; 做第一次之後覺得天地豁然開朗; 每次做都有快感; 覺得不會做的都是傻逼!",
        "GFW 把中國人擋在無數優秀網站之外, 仿佛在這些網站入口處設置了一道鐵門, 上書八個大字: '華人與狗 不得入內'",
        "幾十年來, 朝鮮的領導人只有一個, 叫'金胖子'; 	幾十年來, 天朝的領導人也只有一個, 叫'敏感詞'",
        "大航海時代禁海	大貿易時代禁商	大數據時代禁網",
        "寧要社會主義的局域網	不要資本主義的互聯網"
      ],
  
      arrOthers : [
        "生於憂患	死于安樂	@<孟子 告子下>",
        "合抱之木生於毫末	九層之台起於累土	千里之行始於足下	@<道德經>",
        "海納百川 有容乃大	壁立千仞 無欲則剛	@林則徐",
        "大膽假設 小心求證	認真做事 嚴肅做人	@胡適",
        "勿以惡小而爲之	勿以善小而不爲	@<三國志>陳壽",
        "判斷一個人的人品, 不是看他好起來做什麽好事, 而是看他壞起來[不做]什麽壞事&#12290;",
        "君子之交淡若水	小人之交甘若醴	@<莊子>",
        "不要去欺騙別人 -- 因爲你能騙到的, 都是相信你的人",
        "唯一不變的是變化本身!"
      ]
    };
    // m_mapMaxim end

  function init()
  {
    var sLabels = "";
    $("span.post-labels").children("a").each(function(){ sLabels += $(this).html()+"\n" });

    var arrTagInfo =
    [
      [/思考|心理/, m_mapMaxim.arrThink],
      [/政治/, m_mapMaxim.arrPolity],
      [/历史/, m_mapMaxim.arrHistory],
      [/军事/, m_mapMaxim.arrMilitary],
      [/编程/, m_mapMaxim.arrProgram],
      [/管理/, m_mapMaxim.arrManagement],
      [/经济/, m_mapMaxim.arrEconomy],
      [/翻墙/, m_mapMaxim.arrGFW]
    ];

    var arrMaxim = m_mapMaxim.arrDefault.slice(), nCount = 0;
    $.each(arrTagInfo,
           function(i, info){ sLabels.match(info[0]) && (arrMaxim = arrMaxim.concat(info[1])) && nCount++ });
    (nCount <= 3) && (arrMaxim = arrMaxim.concat(m_mapMaxim.arrOthers));

    var sMaxim = arrMaxim[Math.floor(Math.random() * arrMaxim.length)];

    var arrPunctMap =  // map HALF width punct to FULL width
    [
      [/\:\-\)/g, "&#9786;"],  [/\:\-\(/g, "&#9785;"],
      [/\</g, "&#12298;"],     [/\>/g, "&#12299;"],
      [/\(/g, "&#65288;"],     [/\)/g, "&#65289;"],
      [/\[/g, "&#12304;"],     [/\]/g, "&#12305;"],
      [/\t/g, "<br/>"],  [/@/g, "&#8212;&#8212;"],       [/ -- /g, "&#8212;&#8212;"],
      [/, /g, "&#65292;"],     [/; /g, "&#65307;"],      [/: /g, "&#65306;"],
      [/\! ?/g, "&#65281;"],   [/\? ?/g, "&#65311;"],    [/\'/g, "&#65282;"]
    ];
    sMaxim = sMaxim.multiReplace(arrPunctMap);

    if(sMaxim.endsWith(".html"))
    {
      sMaxim = sMaxim.replace("<br/>/", "<br/><a href='https://"+"program-think.blogspot.com"+"/")
        .replace(".html", ".html' target='_blank' style='color:#337ab7' >與該格言相關的博文</a>");
    }

    $("div.descriptionwrapper").children("p.description").html(sMaxim);
  }

  $(document).ready(
    function()
    {
        init();
    //   try
    //   {
        
    //   }
    //   catch(err)
    //   {
    //     console.log("init: Catch exception:\n" + err);
    //   }
    }
  );
});
