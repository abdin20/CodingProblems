/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
 var suggestedProducts = function(products, searchWord) {
    producst=products.sort();
    
    class TrieNode{
        children=[]
        parent=[]
        key="";
        TrieNode(key){
            this.key=key;
        }
    }

    class Trie{
         root
        Trie(){
            this.root=new TrieNode();
        }

        insertWord(word){
            curr=this.root;
            //go thru each character
            for(let x=0;x<word.length;x++){

                //check if root has letter in children, uses char indexing in array
                if(!curr.children[word[x]]){
                    //create child node in appropiate spot
                    curr.children[word[x]]=new TrieNode(word[x]);
                    //set parent
                    curr.children[word[x]].parent=curr;
                }

                //go to next node 
                curr=curr.children[word[x]];

                if(x===word.length-1){
                    curr.end=true;
                }
            }

        }
    }



};


/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
 var suggestedProducts = function(products, searchWord) {
    producst=products.sort();
     let searchResults=[];
     
    for(let x=1;x<=searchWord.length;x++){
        
        let prefix=searchWord.substring(0,x)
        let matchedWords=[]
        
          for(product of products){
            if(product.substring(0,x)===prefix){
                matchedWords.push(product)
            }
              if(matchedWords.length===3){
                  break;
              }
              
        }

        searchResults.push(matchedWords)
    }

    return searchResults
  
};






console.log(suggestedProducts(["jhljdwmzajzhbzlnuvnzlypvdwelzenkmuekbfhhwrfgltwxtytyeifurnnvdjyzwzsqyprcqxatrfvfabwoeoybqfbtkgicltqtkzgdvpwsnzvvhgelwqqtdruknthexbnznixtpktmxlxadnnjuzynvmcajkcopefw","e","jhljdwmzajzhbzlnuvnzlypvdwelzenkmuekbfhhwrfgltwxtytyeifurnnvdjyzwzsqyprcqxatrfvfabwoeoybqfbtkgicltqtkzgdvpwsnzvvhgelwqqtdruknthfmpgekmnsnxbjtgkorweyotixwlcwyvjhsgjmcxkthszqffcuanqe","jhljdwmzajzhbzlnuvnzlypvdwelzenkmuekbfhhwrfgltwxtytrpopmqtztvx","jhljdwmzajzhbzlnuvnzlypvdwelzenkmuekbfhhwrfgltwxtytyeifurnnvdjyzwzsqyprcqxqhqxshczwndevtdwdugkhjm","jhljdwmzajzhbzlnuvnzlypvdwelzenkmuekbfhhwrfgltwxtytyeifurnnvdjyzwzsqyprcqxatrfvfabwoeoybqfbtkgicltqtkzgdvpwsnzvvttiblsecbwbjiavybqjbubhqsosblxhjlazg","jhljdwmzajzhbzlnuvnzlypvdwelzenkmuekbfhhwrfgltwxtytyeifurnnvdjyzwzsqyprcqxatrfvfabwoeoybqfbtkgicltqtkzgdvpwsnzvvhgelwqqtdruknthfmpgekmnsnxbjtgkorweyotixwlcwyvjhsgjmcxkthszqffcuanghx","jhljdwmzajzhbzlnuvnzlypvdwelzenkmuekbcrmqovcdmysuiwudydsgndjtflykmzfvoawkkargexytjuihnomiqezyqujqalafxxcg","jhljdwmzajzhbzakqaljdrmlykjmnuxobohfrtkkfomnncrtyhnrmnktddhctwbmjdrbyewjtxlmvwwonjmurxatshntdvdmkyqmhsnjvykrydssnf","jhljdwmzajzhbzlnuvnzlypvdwelzenkmuekbfhhwrfgltwxtytyeifurnnvdjyzwzsqyprcqxatrfvfabwoeoybqfbtkgicltcjueumbdovisfkvoiaefajnbyqrvddajklehucxgvwgwltqwrwtljigyazlxgmlubt","jyutgoofzhfhohyrtjnggsyboyfvvseghifejwcdmvzlnbvqoitmikuayaqjf","crkvwptcqpxixdxswlnbzqvegbkcrzyvqyfpivuqyvkwctpqxsvjzmdkxwkxrydzwdavrydzsenajijzxzruziraagmydnhukkpscglmgkjnslerwjwjiousltlcxpjqutgqwrfrzgyzdaxssjxqjvtqupmiqmjebsmwtkv","sawxfkvjanqhwadpiftppejzh","jhljdprevkydjfzuynjkmaxnljentqvjxxmkguoaxpefhss","mrklrbtfxyyxkmreglnvsprvpcqeiabavruobchukroohjupgdfcid","tnhgepglkwouzzzuirpzblbiqiupywjoenrzgtneawycsvrmnsnthtpixftlvrhjfoohkcjttpdnmtergskgcywrnkhqbdclj","jhljdwmzajzhbzlnuvnzlypvdwelzenkmuekbfhhwrfgltwxtoqqwlufsrshrqebujsztrldskcxywiiunzpvqztigbhsnf","jhljdwmzajzhbzlnuvnzlypvdwelzenkmuekbfhhwrfgltwxtytyeifurnnvdjyzwzsqyprcqxatrfvfabwoeoybqfbtkgicltqtkzgdvpwsnzvvhgelwqqtdruknthfmpgekmnsnxbjtgkorweyotixwlcwyvjhsgjmcxofu","jemqslzvrbskvqvjwbivkxiwvzunyvyydicmnujacrzbomugingscfodfroyatsdwfbbktajyvbcwxusitnbbupjrjniemerrlujvfkbvzuzyysrunmwyftywgpybacbgvprybhhbymnc","jhljdwmzajbejfyewkvhnpbenzedarvjstpywnqsrwbzrwsdiazferiliucjutqsriviycqgcycqgptbvxjpdmcszurlxynvjvlpmcsjvvuhwdwggxpkisfyjpgmunydqnkgdyvcycdcaeeqngkpqbuylneelpkmrtytqt","jhljdwmzajzhbzlnuvnzlypvdwelzenkmuekbfhhwrfgltwxtytyeifurnnvdjyzmdgvq","jhljdwmzajzhbzlnuvnzlypvdwelzenkmuekbfhhwrfglaovojaskdmlzqdcpljyogaghonmtqlmkheawtgjfjjfxwepamg","jhljdwmzajzhbzlnuvnzlypvdwelzenkmuekbfhhwrfgltwxtytyeifurnnvdjyzwzsqyprcqxatrfvfabwoeoybqfbtkgicltqtkzgdvpwsnzvvhgelwqqtdruknthfmpgekmnsnxbjtgkorweyotixwlcwyvjhsgjmcxktgckdmdknsghw","jhljdwmzajzhrugyiyhfobthuolttcxhbabkgztyewftchcgnbdlfklinalsnbisnbauhavkklbstnljdabxjxrlfpzcwdvwqbuelrnpxwfyxkbsuwqhhavxjilscwsejepgeagioyuygvzeaosdydemiuzlxrrymgiipmhlrroacigbirotx","jhljdwmzajzhbzlnuvnzlypvdwelzenkmuekbfhhwrfgltwxtytyeifurnnvdjyzwzsqyprcqxatrfvfabwoeoybqfbtkgicltqtkzgdvpwsnzvvhgelwqqtdruneluwssmtwondnulmnmcric","swtiutizdsgfqoouqpqnfnymxozrkmifylc","qjkacgudpntqmnfjwajlvwflwujmzgumbmwnyxmidpxhjvbofutovdrxvsibvivvcpvahdlnvdpyrvkmqbodehmaos","jhljdwmzajzhbzlnuvnzlypvdwelzenkmuekbfhhwrfgltwxtytyeifurnnvdjyzwzsqyprcqxatrfvfabwoeoybqfbtkgicltqtkhrfhyuqwrlprwdrztwncnfawbhmhizugfbykzjlmkorprcpmvaqnxollxjduplrpbpkoc","jhljdwmzajzhbzlnuvnzlypvdwelzenkmuekbfhhwrfgltwxtytyeifurnnvdjylhkiabzfarxcdfmnazomofjjovszxwsajkgjnnqgqhxbzfzkczmqdargeklvqphngmf","jhljdwmzajzhbzlnuvnzlypvdwelzenkmuekbfhhwrfgltwxtytyeifurnnvdjyzwzsqyprcqxatrfvfabwoeoybqfbtkgicltqtkzgdmglxthgqgkfdxwbhglifxgddbudyvzbstnzajtzxrwenpgxbbgnoopjlqmvksbrblqgpoau","jhljdwmzajzhbzlnuvnzlypvdwelzenkmuekbfhhwrfgltwxtytyeifurnnvdjyzwzsqyprcqxatrfvfabwoeoybqfbtkgicltqtkzgdvpwsnzvvhgelwmgeapqviocqlwxhwdrspdnvfwsueyflaqyugnaiaudyebelavrmcinpegwdkvasq","gmdipfdbrbpxtoguoczzylbvtwvkeizjzpkitxemlbpntgabfquceexutahhhtazajrvyebswsfcdmyzrbcuhbbomvfbigueneoxboixhmgadagvesvohhxikxpsgepomzrmgopjwcunqzweycsfzonuxjvseetopcwkqrxj","jhljdwmzajzhbzlnuvnzlypvdwelzenkmuekbfhhwrfgltwxtytyeifurnnvdjyzwzsqyprcqxatrfvfabwoeoybqfbtkgicltqtkzgdvpwsnzvvhgelwqqtdruknthfmpgekymqswxnblzzdrsx","jhljdwmzajzhbzlnuvnzlypvdwelzenkmuekbfhhwrfgltwxtyinanuoqxhrzpid","wmdynsfqafmwakfzgmmjv","geukdsnoidgngoaeutlenbeacbkwvfsnaxpjzwyfaaxtgpuagsyihiiukpcqruacvpztqpfzjkqedrgawldrwsvoeckpbaxiewvsxgwfrvxwjporwmsdzrfgxsvhqtshdpiwugahibdxwapqgct","ksnkokylbndlrspqntlwkvzggnltumwgietvlntdtycnlfwtonlulrvkbwwalcbphlfyuklwaxepyykq","jhljdwmzajzhbzlnuvnzlypvdwelzenkmuekbfhhwrfgltwxtytyeifurnnvdjyzwzsqyprcqxatrfvfabwoeoybqfbtkgicltqtkzgdvpwsnzvvhgelwqqtdrrsydhaggrspsxqxjyamfzdjijwkkzlilzetrbhoufyjtvt","jhljdwmzajzhbzlnuvnzlypvdwelzenkmuekbfhhwrfgltwxtytyeifurnnvdjyskqujjuoyergkhjiuetyuqmxlbrhvqccdojfuvxapxxmttcvkyhpwhnswbn","jhljdwmzajzhbzlnuvnzlypvdwelzenkmuekbfhhwrfgltwxtytyeifurnnvdjyzwzzgvnyvifeoconimcrvivomvcbxndlagodcreyjsujuujdtlggyqju","jhljdwmzajzhbzlnuvnzlypvdwelzenkmuekbfhhwrfgltwxtytyeifurnnvdjyzwzsqyprcqxatrfvjslklhoywcnkynwmpcsxqmffltmxerhqhftrggsxbdjywazmbcipemgiuge","jhljdwmzajzhbzlnuvnzlypvdwelzenkmuekbfhhwrfgltwxtytyeifurnnvdjyzwzsqyprcqxatrfvfabwoeoybqfbtkgicltqtkzgdvpwsnzvvhgelwqqtdruknthfmpgekmnsnxbjtgkorweyotixwlcwyvjhahpb","pgfelbqsbxstdvbwzwclelbcfuskheuguwevadhynw","mzkgksixdpjpjucbwcosbutjhqxbzrajlprvfyufivhsifkhqxzhskosssvazinljvqncpbibothtrmfkfrtxjgqvml","jhljdwmzajzhbzlnuvnzlypvdwelzenkmuekbfhhwrfgltwxtytylppbjczpsuzbiyuddxnxcjumqrmswhtkssqxdbmjyqpznmtb","jhljdwmzajzhbzlnuvnzlypvdwelzenkmuekbfhhwrfgltwxtytyeifurnnvdjyzwzsqyprcqxatrfvfabwoewiednmizszpecznfjvzgpkzmfkkavirmvzcosdzbtvlfbwbwwedxgpqcniqf","jhljdwmzajzhbzlnuvnzlypvdwelzenkmuekbfhhwrfgltwxtytyeifurnnvdjyzwzsqyprcqxatrfvfabwoeoybqfbtkgicltqtkzgdvpwsnzvvhgelwqqtdruknthfmpgekmnsnxbjtgkorweyotixwlcwyvjhsgjmcxkthszqffcurmze","kidvqciatjrmmwmgufyjdnfiznohewcegbdcklsrtxlrjpskyyihjydbsmacyrbjgihxbwruhuzlzgqmwyqosvgrtzelkcwkfettntncocivaavgnyodrshepkpbjy","znzriimpzgugozuixpdsqyxcuqsuwwwenchyemscgjwmchlctkbtkdjcbkgswfwxr","jhljdwmzajzhbzlnuvnzlypvdwelzenkmuekbfhhwrfgltwxtytyeifurnnvdjyzwzsqyprcqxatrfvfabwoeoybqfbtkgicltqtkhaeyrgeellxwuzdaa","jhljdwmzajzhbzlnuvnzlypvdwelzenkmuekbfhhwrfgltwxtytyeifurnnvdjyzwzsqyprcqxatrfvfabwoeoybqfbtkgiclqgtjennjvmb","jhljdwmzajzhbzlnuvnzlypvdwelzenkmuekbfhhwrfgltwxtytyeifurnnvdjyzwzsqyprrziwvgzuwpysmnkfo","jhljdwmzajzhbzlnuvnzlypvdwelcnexkdfskoxkymborxnexhyctvminpdvdekwmokprwgskobsianemxeneuovowebrusncqutzhujgkswiovoialiqokiwkmbybbjbeenxarwoxbupustfxqgpivsawecebesdyfvsknvlnt","jhljdwmzajzhbzlnuvnzlypvdwelzenkmuekbfhhwrfgltwxtytyeifurnnvdjyzwzsqyprcqxatrfvfafumkcmonskgyuaffuitlxqxeubifkawlkqfntkfxxjomjuffcdprwzwzpltnxaritqqdtnmuhndokxnphlhdygvfcifg","jhljdwmzajzhbzlnuvnzlypvdwvlwblyfwchpsytymysowjgldscaabrrvzelklbcllnmpersjfezqmhhphq"],
"jhljdwmzajzhbzlnuvnzlypvdwelzenkmuekbfhhwrfgltwxtytyeifurnnvdjyzwzsqyprcqxatrfvfabwoeoybqfbtkgicltqtkzgdvpwsnzvvhgelwqqtdruknthfmpgekmnsnxbjtgkorweyotixwlcwyvjhsgjmcxkthszqffcuanggmjxvzykcfajvlbromoiaabgtihdkyxrfdlofvhsbdjlbyktpawxdwqgwlaxqjzdvvvvrksuhfuyjimkuiptxbkehzvgefavleaegbopivdhzpzhgehjorevmxvzivdigmldsrgtlptdorekere"))