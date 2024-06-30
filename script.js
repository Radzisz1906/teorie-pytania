document.addEventListener('DOMContentLoaded', (event) => {
    const questions = [
        {
            "question": "Wymień cechy „kina jako sztuki dla umysłu\" według teorii Musenberga",
            "answer": "Kino jest sztuką umysłu, ponieważ głównym narzędziem odbioru kina jest umysł (w przeciwieństwie do muzyki - ucho, czy malarstwa - oko). Musenberg tak twierdzi, ponieważ to dzięki pracy mózgu, widz jest w stanie odtworzyć iluzję ruchu. Film to 24 stałe klatki obrazu na sekundę, których szybkie zmiany (za pomocą pracy umysłu) tworzą iluzje stałego ruchu. To umysł widza łączy poszczególne sekwencje filmu w całość. Film dzięki temu reprodukuje selektywną uwagę, która selekcjonuje i porządkuje rzeczywistość. Robi to za pomocą kadrowania, planów, zbliżeń (głębii ostrości). Podobnie za pomocą umysłu widz jest w stanie zestawić wydarzenia dziejące się w różnym czasie i różnych przestrzeniach."
        },
        {
            "question": "Na czym polega językowa natura kina wg. Epsteina?",
            "answer": "Kino jest „uniwersalnym językiem\". Jest czymś na wzór innego sposobu komunikacji. Przekracza on werbalne zdolności tradycyjnego języka i rządzi się swoimi prawami."
        },
        {
            "question": "Opisz pojęcie fotogenii u Epsteina",
            "answer": "Fotogenia to wydobycie pewnych ukrytych cech przedmiotu poprzez fotografię czy film. Dla Epsteina w procesie tym kluczowy jest ruch. Istota piękna, która wynika z fotogeniczności według Epsteina nierozłączna jest ze zmiennością, ruchem. Istotna jest dla niego potencjalnośc a nie spełnienie, moment nieuchwytny, niezauważalny bez kamery (usta układające się w uśmiech, a nie sam uśmiech)"
        },
        {
            "question": "Wskaż różnice między kinem a teatrem, na które zwraca uwagę Bela Balazs.",
            "answer": "Kino może operować zmiennością perspektyw (ustawienie widza względem sceny oraz plany), kino jest zmienne przestrzennie dzięki montażowi."
        },
        {
            "question": "Co jest źródłem języka sztuki filmowej wg. Balazsa? Wymień konkretne wyróżniki z jego teorii.",
            "answer": "Według Balazsa źródłami sztuki filmowej są wszystkie zabiegi formalne, które odróżniają film od innych sztuk. Między innymi montaż, ruchy kamery, zbliżenia, timelapsy. To dzięki nim widz jest w stanie lepiej „zanurzyć' się w film, doznać głębszego procesu identyfikacji."
        },
        {
            "question": "Czym charakteryzowała się filmologia francuska?",
            "answer": "Filmologia francuska jako pierwsza podjęła próbę nadania tej nauce instytucjonalnego charakteru. Ambicją filmologii francuskiej było dążenie do naukowości i obiektywności. Podejmowała się interdyscyplinarnych badań nad filmem (psychologia, estetyka, socjologia, antropologia itd). Podejmowała również praktyczne badania np sprawdzając reakcje widzów."
        },
        {
            "question": "Widmo, a obraz myślowy – opisz terminy i wskaż ich autora.",
            "answer": "Edgar Morin - francuski filmolog jest autorem tych pojęć. Obraz myślowy to pewien subiektywny obraz, który istnieje w naszym umyśle. Widmo, to pewne abstrakcyjne uczucie, które pojawia się podczas napływu silnych emocji i doprowadza do zsubiektywizowania obrazu myślowego (np poprzez halucynacje). W zasadzie polega to na tym, że kiedy myslimy o czymś bardzo intensywnie i jesteśmy w stanie silnych emocji (np strachu) to wyobrażenia w naszej głowie mogą wydawać się realne (np kiedy w środku nocy cień gałęzi rzucany z okna przypomina kształtem strasznego klauna którego przestraszyliśmy się w dzieciństwie i wydaje nam się że mamy potwora w pokoju)"
        },
        {
            "question": "Na czym polega projekcja-identyfikacja, jakie są fazy projekcji i dlaczego kino działa doskonale jako machina do ich produkcji?",
            "answer": "Projekcja identyfikacja to podobne zjawiska, ale z zasadniczą różnicą. Projekcja polega na rzutowaniu naszych cech/emocji na kogoś innego, a identyfikacja polega na wchłanianiu cech/emocji kogoś innego przez nas. Fazy projekcji to automorfizm (przypisujemy innej osobie nasze własne cechy i intencje), antropomorfizm (przypisujemy właściwości i intencje ludzkie przedmiotom oraz istotom żywym) oraz rozdwojenie (rzutujemy własny byt w obszar halucynacyjny, objawiając się sobie w postaci zjawy). Kino jest szczególnie silne w tym procesie, ponieważ widz jest w stanie bezsilności (sala kinowa), bierności (kino wykonuje prace za odbiorcę) a to wszystko dzieje się w ciemności."
        },
        {
            "question": "Wymień i opisz różne podejścia w teoria autorskich",
            "answer": "Alexandre Astruc - kino jest środkiem wyrazu artysty. Autor może wyrazić własne mysli, obsesje. To trochę jak pisanie, ale reżyser pisze kamerą. Kamera - pióro\nTruffaut - To on spopularyzował politykę autorską za pośrednictwem pisma „Cahiers du cinema\". Według niego film powinien wyrażać tego, kto go reżyserował i jest on moralnie odpowiedzialny za film. \nAndrew Sarris - również optował za podejściem, że film jest osobistą wypowiedzią reżysera, ale także dowodził, że masowe produkcje też takie są\nPeter Wollen - zaprzeczał, że masowość może sprzyjać autorskości. Autor jest nieświadomym katalizatorem, a nie świadomym sprawcą. W filmie widzimy strukturę, która leży u jego podstaw. Kwestionował geniusz autora\nGeoffrey Nowell-Smith - też większy nacisk na strukturę, kwestionował podejście, natarczywego poszukiwania obecności autora w tekście. Twierdził, że to nie jest celem a sposobem dotarcia do znaczeń\nBarthes - *śmierć autora* - dzieło jest oddzielone od autora, który je tworzy. Odbiorca jest nowym autorem\nFocault - trochę pomiędzy Barthesem a innymi. Pozycja autora jest jedną z wielu możliwych interpretacji"
        },
        {
            "question": "Porównaj koncepcję znaku u de Saussure’a i Peirce’a.",
            "answer": "de Saussere\n- Signifant - element znaczący - wizualna reprezentacja czegoś (np narysowany pies\n-  Signife - element znaczony - coś do czego odnosi się reprezentacja (prawdziwy pies)\n\nPeirce\n- symbol - to co u de Saussere'a jest elementem znaczącym\n- znaczenie - coś do czego nasz umysł odsyła po zobaczeniu symbolu (np jak zobaczymy rysunek psa to wyobrażamy sobie czteronożnego zwierzaczka)\n- desygnat - prawdziwa rzecz, do której odsyła symbol"
        },
        {
            "question": "Czym jest strukturalizm, a czym jest semiotyka?",
            "answer": "Strukturalizm skupia się na analizie struktur i wzorców w różnych systemach.\nSemiotyka skupia się na analizie znaków, symboli i ich znaczeń w komunikacji."
        },
        {
            "question": "Omów teorię znaczenia u Rolanda Barthesa.",
            "answer": "Roland Barhes dokonał następującego podziału: autor->znaki->publiczność. Znaczenia podzielił na dwie strefy: ośrodkową (znaczenie ustabilizowane przez tradcję) oraz peryferyjną (znaczące i znaczone nie są związane na stałe). W filmie signifant to wszystko co może być nośnikiem znaczenia: kostiumy, dekoracje, zachowanie postaci, natomiast signife, to wszystko co jest poza filmem i funkcjonuje w umyśle widza."
        },
        {
        "question": "Wskaż elementy teorii znaczenia w filmie Christiana Metza",
        "answer": "Według Metza najmniejszą jednostką znaczeniową w filmie jest ujęcie, a najważniejszą wypowiedzią jest sekwencja. Według niego kino jest wielokodowe. Wyróżnia on podział na denotacje i konotacje, z czego denotacja oznacza bezpośrednie znaczenia słów, a konotacja to zbiór emocji i wartości przypisywanych słowu."
        },
        {
        "question": "Na czym polega hermeneutyka – opisz, wskaż jej badacza i wymień elementy jego koncepcji.",
        "answer": "Hermeneutyka jest nauką zajmującą się objaśnianiem znaków. Jest to filozoficzna sztuka interpretacji, która nie zakłada żadnej określonej reguły i wchodzi w relacje z różnymi metodami. Jednym z najważniejszych badaczy jest Martin Heidegger, który mówi, że rozumienie jest podstawowym aspektem bycia w świecie i dlatego hermeneutyka dotyczy absolutnie wszystkiego. Jego proces interpretacji jest procesem kolitym. Analiza nie zakłada analizy przedmiotu a funkcji przedmiotu a rozumienie powinno być praktyczne. Zanim podejmiemy się interpretacji musimy mieć jakieś wyobrażanie (dlatego proces jest kolisty)"
        },
        {
        "question": "Opisz różnice w definiowaniu \"psyche\" od 1900 r. i od 1920 r",
        "answer": "W latach 1900 psyche definiowana jest jako sfera nieświadomości (sfera popędowa, treści wyparte, znakowe reprezentacje konieczne do interpretacji), świadomości (racjonalna, powiązana z percepcją) i przedświadomości (pamięć). W 1920 zostały te parametry roższerzone na „nad-ja/superego\" (interioryzacja zakazów, nakazów rodzicielskich, społecznych itd), Ja/Ego (mediator między superego i id) oraz Id (popędowy, bezosobowy biegun osobowości, zbiornik energii seksualnej, chaos)"
        },
        {
        "question": "Czym są archetyp i jak działa marzenie senne u Junga?",
        "answer": "Archetyp to pewien wykreowany społecznie i w naszej nieświadomości wzór, który rządzi psyche. Według niego sen jest nieświadomym spełnieniem życzenia erotycznego, spychanymi impuslami i pragnieniami. Jest konieczny do interpretacji."
        },
        {
        "question": "Co to jest melancholia?",
        "answer": "Nieprzepracowana żałoba przez wcześniejszą silną identyfikację z utraconym obiektem."
        },
        {
        "question": "Jakie sfery i porządki wyróżnia Lacan? Czym wg. niego jest \"nieświadome\"?",
        "answer": "Nieświadome wiąże się z wydziedziczeniem w języku. Język podporządkowuje podmiot, odbiera mu autonomię. Lacan wyróżnia 3 sfery: symboliczne = nieświadome = język = prawo = kultura; wyobrażone; realne - niezalezne, ale mające wpływ."
        },
        {
        "question": "Na czym polega faza zwierciadła i czym jest \"Realne\"? Kto jest autorem tych definicji?",
        "answer": "Faza zwierciadła to moment uświadomienia o sobie jako o własnym Ja, czymś odrębnym od świata i rodziców. Człowiek identyfikuje się z własnym odbiciem (obrazem, czymś widealizowanym). Realne natomiast to jest to, co nie poddaje się w ludzkim doświadczeniu symbolizacji czy przekładowi na język. To są wszystkie rzczeczy niewyjaśnialne, niemożliwe do oswojenia. Coś nieopisanego. Efektem może być na przykład trauma."
        },
        {
        "question": "Czym jest regresja i kto o niej pisał?",
        "answer": "O regresji pisał Christian Metz. Jest to proces, w którym kino powoduje stopniową utratę poczucia granic własnej osobowości. Najpierw kino rozbudza a potem zaspokaja potrzeby widzów."
        },
        {
        "question": "W jaki sposób jaskinia Platona mogłaby być uznana za zapowiedź kina?",
        "answer": "Człowiek w jaskini Platona widział jedynie odbicia prawdziwego świata w postaci cieni. Uwięziony w jaskini tak jak w sali kinowej mógł oglądać świetlną projekcje czegoś co miało odzwierciedlać realny swiat. Jest to podobne do sytuacji kinowej, w której widz również uwięziony w sali kinowej ogląda świetlne odbicie rzeczywistości. W obu przypadkach również sprawcy pozostają niewidoczni."
        },
        {
        "question": "Porównaj kino i sen oraz opisz różnicę między nimi (wg. Metza).",
        "answer": "Porównanie kina do snu jest bardzo powszechną koncepcją. Wychodzi ona od wielu teoretyków, między innymi od myśli psychoanaliycznej. Sen jest rodzajem projekcji, która przypomina projekcję filmową. Sen jest przede wszystkim wizualny. Tak jak sen przedstawia historię bez aktu opowiadania. Wg Metza kino jest bardziej snem na jawie/świadomym fantasjowaniem. Według niego podstawowe różnice to samoświadomość podmiotu (nie jesteśmy świadomi, że śnimy, ale jesteśmy świadomi, że jesteśmy w kinie), tego że film to realny materiał do percypowania, a sen nie oraz logika najczęściej jest inna. Sen jest zawyczaj nielogiczny, ale akceptowalny do przebudzenia się, a kino jest zazwyczaj logiczne."
        },
        {
        "question": "Wskaż autorkę i opisz koncepcję zawartą w publikacji \"Przyjemność wizualna i kino narracyjne.",
        "answer": "Laura Mulvey jest autorką tej publikacji. Według niej widz znajduje na ekranie swojego sobowtóra. Widz jest podglądaczem, spełnia to perwersyjne potrzeby wojerystyczne. Sprawia to perspektywę przedmiotowego patrzenia na osoby. Prowadzi to do zjawiska znanego jako „male gaze\", poniewaz zazwyczaj tą osobą przez której pryzmat patrzymy w kinie (w patriarchalnym społeczeństwie) jest mężczyzna. W tym sensie aktywna jest strona męska, a kobieca pasywna."
        },
        {
        "question": "Na czym polega paradoks związany z obrazem kobiety w koncepcjach feministycznych?",
        "answer": "W patriarchalnej perspektywie, obraz kobiety wiąże się jednocześnie z przyjemnością i lękiem. Lękiem przed pierwotnym strachem przed kastracją."
        },
        {
        "question": "Wskaż i krótko scharakteryzuj cztery fale feminizmu.",
        "answer": "I fala - XIX/XXw. - lata 60. - równość; równe prawa obywatelskie, jednakowe uczestnictwo w sferze publicznej i gospodarczej\nII fala - lata 70. i 80. - różnica; poszukiwanie specyfiki różnic płciowych kobiet i mężczyzn; poszukiwanie specyfiki kobiecej twórczości\nIII fala - lata 90. - różnorodność; przełamanie monopolizmu białych kobiet, wielość grup kobiecych i zróżnicowane ich problemy\nIV fala - II dekada XXI w. równość szans; nietykalność cielesna, przezyciężanie norm płciowych, większa reprezentacja w polityce"
        },
        {
        "question": "Gender studies, queer studies – po co i dlaczego?",
        "answer": "Misją tych podejść jest zmiana perpektyw patrzenia. Mają za zadanie uświadomić o zasadach, które działają na płeć, np to że płeć jest przede wszystkim kontruktem narzuconym przez społeczeństwo. Obie te perspektywy mają za zadanie oddać głos tzw „Innym\", czyli osobom dotychczas wykluczanym, czy to ze względu na płeć, czy orientację seksualną, bądź w jakikolwiek inny sposób odchodzących od utartych społecznych norm."
    },
    {
        "question": "Na co zwraca uwagę J. Butler w swojej najważniejszej publikacji (podaj tytuł)?",
        "answer": "J. Butler w swojej publikacji *Gender trouble* zwraca uwagę na to, że to płeć kulturowa konstytuuje płeć biologiczną a nie odwrotnie, że to społeczeństwo ukształtowuje upłciowienie. Według założeń autorki zarówno płeć biologiczna jak i społeczna zostają nam narzucone. W akcie narodzin (a nawet przed narodzinami) płeć jest niezwykle istotna i społeczeństwo nakłada presję na przystawanie do wyobrażenia na temat tej płci."
    },
    {
        "question": "Postmodernizm – skąd się wziął i jakie są jego cechy?",
        "answer": "Pierwsze iskierki postmodernizmu pojawiły się już po II WŚ. Jego cechami jest zerwanie z wielkimi narracjami. Według postmodernistów nie ma czegoś takiego jak norma. Dlatego też oddawany jest głos Innym. Postmodernizm posługuje się eklektyzmem, kiczem, kampem czy pastiszem. Nie jest on stylem. Załamuje on pojęcie gatunkowości i znaczeń. Według teoretyków nie ma jednej dominanty. Ma on charakter ontologiczny, czyli pyta czemu coś to jest coś. Zakłada on brak znaczeń więc brak odniesień do rzeczywistości."
    },
    {
        "question": "Brian McHale i Frederic Jameson – jak rozpatrywali postmodernizm (wskaż podobieństwa/opozycje).",
        "answer": "Według Briana McHale'a postmodernizm nie odnosił się do żadnej epoki historycznej. Dzieła postmodernistyczne nie posiadają żadnej dominanty i ma ona charakter ontologiczny. Według Frederica Jamesona postmodernizm zaczął się w latach 60. i 60. i był reakcją na zastany modernizm. Polegał na umasowieniu i utowarowieniu sztuki. Rozgraniczenia między kulturą wysoką a niską znikają."
    },
    {
        "question": "Czego dotyczy Deleuzowski nomadyzm?",
        "answer": "Nomadyzm według Deleuze’a to sposób myślenia i bycia, który jest elastyczny, mobilny i zorientowany na zmienność i różnorodność. Nomada nie ma stałego centrum i jest zawsze w ruchu, łącząc różne miejsca i idee. Kultura zachodnia, ze swoim dążeniem do zacierania różnic, jest przykładem systemu nomadycznego. Myślenie nomadyczne unika sztywnych struktur i hierarchii, szukając zamiast tego połączeń i relacji między różnymi elementami."
    },
    {
        "question": "Opisz krótko koncepcję symulakrów.",
        "answer": "Symulakra to masowy przedmiot, mający sprawiać wrażenie autentyczności, a w rzeczywistości nie ma odbicia w realości tylko odnosi się sam do siebie. Symulakry są ponad realnym znaczeniem wizerunków. Symulakry brane są jako fakty i realność np ikony. Ludzie czczą ikony a nie to co za nimi stoi, w tym sensie symulakra wyparła rzeczywistość i stała się realniejsza niż to co pierwotnie miała reprezentować."
    },
    {
        "question": "Film i Odbiór w teorii neoformatywno-kognitywnej Bordwella – co je charakteryzuje?",
        "answer": "Zmiana perspektywy z tego co film robi z widzem na to, co widz robi z filmem. Badanie skupia się na aktywności poznawczej widza, to jak on funkcjonuje w ramach filmu. Według teorii Bordwela to widz nadaje znaczenia w procesie odbioru, który to jest procesem świdomym."
    },
    {
        "question": "Czym jest forma w teorii Bordwella?",
        "answer": "Forma jest to całosciowy system, na który składają się wszystkie elementy filmu. Zrywa on z powszechnym podziałem na formę-treść. Według tej teorii to co może być uważane za treść jest jedną ze składowych formy. Składają się na nią elementy narracyjne (składające się na fabułę filmu i elementy stylistyczne)."
    },
    {
        "question": "Dzięki jakim schematom przetwarzamy informacje wg. Bordwella?",
        "answer": "Schematy prototypowe - rozpoznanie postaci, celów działań itd\nSchematy szablonowe - zrekonstruowanie brakujących informacji, związki przyczynowe i chronologia\nSchematy proceduralne - dynamiczna kontrola nad przyjmowaną informacją i organizacja jej"
    },
    {
        "question": "Z jakich faz składa się aktywność odbiorczo w teorii neoformatywno-kognitywnej?",
        "answer": "Faza zrozumienia (znaczenia referencyjne i ekslicytne)\nFaza intepretacji (znaczenia implicytne i symptomatyczne)"
    },
    {
        "question": "Jakie zasady rządzą formą filmową w teorii neoformatywno-kognitywnej?",
        "answer": "Funkcja - co ten element tu robi?\nMotywacja - każdy komponent ma swoje uzasadnienie\nPodobieństwo i powtórzenie - podstawa naszego rozumienia filmów\nRóżnica i zmienność\nRozwój i progresja\nSpójność - zazębianie się komponentów filmowych"
    },
    {
        "question": "Opisz do czego dążą badania postkolonialne, wskaż badaczy oraz ich koncepcje.",
        "answer": "Badania postkolonialne dążą do ukazania perspektywy w jaki sposób narracje mogą dominować nad mniejszościami, jak kolonizatorzy zawłaszczają kulturowo kolonizowane kultury. K. Loska pisał o hegemonii i przywoływał Foucaulta (związek wiedzy i władzy) czy Derridę (binarne opozycje). Edward Said pisał o instycjonalizowaniu „orientu\" a Hom K. Bhabha o budowaniu stereotypowych obrazów Innego, które podkreślają róznice, pojęcie przebiegłej układności (Przebiegła układność to strategia przetrwania, w której jednostki manipulują oczekiwaniami i normami dominującej kultury, aby osiągnąć swoje cele) i hybrydowości (Hybrydowość to mieszanka różnych kultur, tradycji i tożsamości, która powstaje w wyniku kontaktu i wymiany między różnymi grupami). Mimikra (proces, w którym jednostki lub grupy naśladują zachowania, styl życia lub wartości dominującej kultury.)"
    },
    {
        "question": "Czym charakteryzuje się zmiana w pejzażu współczesnych badań filmoznawczych? Co aktualnie staje się przedmiotem tych badań?",
        "answer": "Umocnienie empiryczne i nacisk na intersubiektywne rozpoznania. Następuje zwrot ku badaniom procesu wytwarzania, rozpowrzechniania i doświadczania kultury filmowej. Kluczowy aspekt to kategoria „poza ekranem\". Cały proces wytwarzania jest złożonym zjawiskiem społecznym."
    },
    {
        "question": "Z jakich etapów składa się dystrybucja filmowa?",
        "answer": "Zakup licencji\nDecyzja o liczbie kopii\nDecyzja o liczbie ekranów premierowych\nPrzygotowanie materiałów promocyjnych"
    },
    {
        "question": "Jakie filmy interesują ekokrytyków?",
        "answer": "Filmy, które wprost podejmują temat ekosystemu i zagrożeń lub takie, w których istotny jest brak obecności natury."
    },
    {
    "question": "Wskaż film skutecznie obrazujący założenia ekokrytyki i opisz jego najważniejsze cechy z tym związane.",
    "answer": "Totoro"
    },
    {
    "question": "Rozwiń pojęcie fenomenologia i wskaż najważniejsze terminy z nią związane.",
    "answer": "Fenomenologia to podejście badawcze skupiające się na tzw fenomenach. Szkoła fenomenologiczna skupia się na tym jak przedmiot ukazuje się w świadomości poznającego podmiotu. Świadomość jest stosunkiem do świata. W ramach fenomenologii istotne jest opisywanie sposobu, w jaki poznaję przedmiot i w jaki sposób przedmiot jest przedmiotem „dla mnie\"."
    },
    {
    "question": "Opisz pogląd Maurice’a Merleau-Ponty’ego na percepcję.",
    "answer": "Według Ponty’ego percepcja nie jest sumą pojedynczych wrażeń, ale jest całościowym doświadczeniem. Ciała nie da się oddzielić od umysłu, bo jest cały czas w akcie poznania. Poznanie jest również aktem subiektywnym."
    },
    {
    "question": "Od jakiego paradygmatu uciekają cielesne teorie kina? Opisz je i wskaż badaczki.",
    "answer": "Cielesne teorie kina uciekają od paradygmatu okulocentrycznego. Vivian Sobchak pisała o cielesnej percepcji w doświadczeniu kinowym. Widz percypuje ekspresję, a film wykorzystuje ekspresję percepcji. Julia Kristeva opisała kategorię „abiektu\" czyli czegos co jest wstrętne, ale nas fascynuje. Laura U. Marks pisała z kolei o haptyczności kina, wrażeniu dotyku z ekranu."
    },
    {
    "question": "Czym jest somaestetyka?",
    "answer": "Cielesna świadomość."
    },
    {
    "question": "W jaki podgatunek wpisuje się kino N. W. Refna? Opisz go krótko.",
    "answer": "Kino ambientowe. Nie ma ono klasycznej narracji. Głównymi cechami jest atmosfera i rytm. Portret psychologiczny zastąpiony zostaje sensorycznym sensorium. Celem jest zanurzenie w filmie, pływanie w nim, zagubienie się w jego głębinie."
    },
    {
    "question": "Co interesuje neuroestetyków?",
    "answer": "Neuroestetyków interesuje biologiczne badanie mózgu i tego co się w nim dzieje podczas doświadczenia sztuki. Bada się subiektywne odczucia."
    },
    {
    "question": "Teoria ludzkiego przeżycia artystycznego – z jakich elementów/etapów się składa?",
    "answer": "Zasada przesunięcia szczytowego - wyolbrzymienie bodźców\nGrupowanie - uporządkowywujemy, znajdujemy coś w tle\nIzolowanie - nasz mózg lubi wyizolowanie przedmioty\nWydobywanie kontrastu - eliminowanie nieporządku, skupienie uwagi\nSymetria - większość obiektów istotnych w przyrodzie jest symetryczne\nPercepcyjne rozwiązanie problemu - wysiłek wynikający z percepcji i zauważenia czegos sprawia większą przyjemność\ntypowy punkt widzenia - wielość punktów widzenia"
    },
    {
    "question": "Kto jest ojcem neurofilomologii i czym zajmuje się ta dziedzina?",
    "answer": "Ruggero Eugeni jest ojcem neurofilmologii.\n• intersubiektywna relacja pomiędzy widzem a ekranem opiera się w dużej mierze na ruchach kamery\n• ruch kamery wciąga nas do świata przedstawionego, ale też uzupełnia informacje o nim\n• udowodniono, że steadicam jest ruchem kamery (vs ujęcia statyczne, zoom i jazda) najbardziej angażującym widza i jego ośrodek motoryczny"
    },
    {
    "question": "Opisz jaki wpływ na teorię filmu mają neurony lustrzane?",
    "answer": "20% neuronów reaguje na ruch, który obserwujemy w ten sam sposób, jakbyśmy sami go wykonywali – zatarcie granicy między pasywnością i aktywnością.\nZrozumienie całostek zdarzeń w filmie rozgrywa się w hipokampie – przenosi dane z pamięci krótkotrwałej do długotrwałej co daje orientacje przestrzenną. Wtedy mózg wykonuje mentalną procedurę montażową."
    },
    {
    "question": "Kora oczodołowo-czołowa jest ośrodkiem przyjemności estetycznej, hipokamp daje orientację przestrzenną.",
    "answer": ""
    }
  ];

function displayRandomQuestion() {
    const randomIndex = Math.floor(Math.random() * questions.length);
    const randomQuestion = questions[randomIndex];
    document.getElementById('question').textContent = randomQuestion.question;
    document.getElementById('answer').textContent = randomQuestion.answer;
    document.getElementById('answer').style.display = 'none';
    document.getElementById('show-answer-btn').style.display = 'inline';
}

function showAnswer() {
    document.getElementById('answer').style.display = 'block';
    document.getElementById('show-answer-btn').style.display = 'none';
}

document.getElementById('new-question-btn').addEventListener('click', displayRandomQuestion);
document.getElementById('show-answer-btn').addEventListener('click', showAnswer);

// Display a question when the page loads
displayRandomQuestion();
});