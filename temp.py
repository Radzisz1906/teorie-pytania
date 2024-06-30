import json

# Przykładowa tablica stringów z pytaniami
questions = [
      "Wymień cechy “kina jako sztuki dla umysłu” w teorii Munsterberga.",
      "Na czym polega językowa natura kina wg. Epsteina?",
      "Opisz pojęcie fotogenii u Epsteina.",
      "Wskaż różnice między kinem a teatrem, na które zwraca uwagę Bela Balazs.",
      "Co jest źródłem języka sztuki filmowej wg. Balazsa? Wymień konkretne wyróżniki z jego teorii.",
      "Czym charakteryzowała się filmologia francuska?",
      "Widmo, a obraz myślowy – opisz terminy i wskaż ich autora.",
      "Na czym polega projekcja-identyfikacja, jakie są fazy projekcji i dlaczego kino działa doskonale jako machina do ich produkcji?",
      "Wymień i opisz różne podejścia w teoriach autorskich.",
      "Porównaj koncepcję znaku u de Saussure’a i Peirce’a.",
      "Czym jest strukturalizm, a czym jest semiotyka?",
      "Omów teorię znaczenia u Rolanda Barthesa.",
      "Wskaż elementy teorii znaczenia w filmie Christiana Metza.",
      "Na czym polega hermeneutyka – opisz, wskaż jej badacza i wymień elementy jego koncepcji.",
      "Opisz różnice w definiowaniu “psyche” od 1900 r. i od 1920 r.",
      "Czym są archetyp i jak działa marzenie senne u Junga?",
      "Co to jest melancholia?",
      "Jakie sfery i porządki wyróżnia Lacan? Czym wg. niego jest “nieświadome”?",
      "Na czym polega faza zwierciadła i czym jest “Realne”? Kto jest autorem tych definicji?",
      "Czym jest “regresja” i kto o niej pisał?",
      "W jaki sposób jaskinia Platona mogłaby być uznana za zapowiedź kina?",
      "Porównaj kino i sen oraz opisz różnicę między nimi (wg. Metza).",
      "Wskaż autorkę i opisz koncepcję zawartą w publikacji “Przyjemność wizualna i kino narracyjne.",
      "Na czym polega paradoks związany z obrazem kobiety w koncepcjach feministycznych?",
      "Wskaż i krótko scharakteryzuj cztery fale feminizmu.",
      "Gender studies, queer studies – po co i dlaczego?",
      "Na co zwraca uwagę J. Butler w swojej najważniejszej publikacji (podaj tytuł)?",
      "Postmodernizm – skąd się wziął i jakie są jego cechy?",
      "Brian McHale i Frederic Jameson – jak rozpatrywali postmodernizm (wskaż podobieństwa/opozycje).",
      "Czego dotyczy Deleuzowski nomadyzm?",
      "Opisz krótko koncepcję symulakrów.",
      "Film i Odbiór w teorii neoformatywno-kognitywnej Bordwella – co je charakteryzuje?",
      "Dzięki jakim schematom przetwarzamy informacje wg. Bordwella?",
      "Czym jest forma w teorii Bordwella?",
      "Z jakich faz składa się aktywność odbiorczo w teorii neoformatywno-kognitywnej?",
      "Jakie zasady rządzą formą filmową w teorii neoformatywno-kognitywnej?",
      "Opisz do czego dążą badania postokolonialistyczne, wskaż badaczy oraz ich koncepcje.",
      "Czym charakteryzuje się zmiana w pejzażu współczesnych badań filmoznawczych? Co aktualnie staje się przedmiotem tych badań?",
      "Z jakich etapów składa się dystrybucja filmowa?",
      "Jakie filmy interesują ekokrytyków?",
      "Wskaż film skutecznie obrazujący założenia ekokrytyki i opisz jego najważniejsze cechy z tym związane.",
      "Rozwiń pojęcie fenomenologia i wskaż najważniejsze terminy z nią związane.",
      "W jaki podgatunek wpisuje się kino N. W. Refna? Opisz go krótko.",
      "Od jakiego paradygmatu uciekają cielesne teorie kina? Opisz je i wskaż badaczki.",
      "Opisz pogląd Maurice’a Merleau-Ponty’ego na percepcję.",
      "Czym jest somaestetyka?",
      "Co interesuje neuroestetyków?",
      "Teoria ludzkiego przeżycia artystycznego – z jakich elementów/etapów się składa?",
      "Kto jest ojcem neurofilomologii i czym zajmuje się ta dziedzina?",
      "Opisz jaki wpływ na teorię filmumają neurony lustrzane?",
      "Kora oczodołowo-czołowa i hipokamp – jakie procesy istotne dla teorii neuroestetycznych i neurofilmologicznych zachodzą w tych ośrodkach mózgowych?"
  ]

# Konwersja tablicy stringów do listy obiektów JSON
questions_json = [{"question": q, "answer": ""} for q in questions]

# Zapis do pliku JSON
with open('questions.json', 'w', encoding='utf-8') as json_file:
    json.dump(questions_json, json_file, ensure_ascii=False, indent=4)

print("Plik JSON został utworzony jako 'questions.json'")