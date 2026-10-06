// quiz-data.js
const chapter1Quiz = [
    {
        q: "1. Prithvi par gyat jeevon ki jaati aur varnit spishij ki sankhya kitni hai? / What is the number of known and described species of organisms on Earth?",
        options: ["0.5 - 1.0 million", "1.7 - 1.8 million", "3.0 - 4.0 million", "5.0 million"],
        correct: 1
    },
    {
        q: "2. Paudhon ke vaigyanik naam ka aadhar kaun sa niyam aur kasauti hai? / Which code provides the basis for scientific naming of plants?",
        options: ["ICZN", "ICBN", "IUCN", "DNA"],
        correct: 1
    },
    {
        q: "3. ICBN ka pura naam kya hai? / What is the full form of ICBN?",
        options: ["International Code of Botanical Nomenclature", "Indian Code of Biology Nomenclature", "International Council of Botany Nature", "None of these"],
        correct: 0
    },
    {
        q: "4. Praniyon ke naamkaran ke liye kaun si sanstha hai? / Which organization handles animal nomenclature?",
        options: ["ICBN", "ICZN", "IUCN", "ISO"],
        correct: 1
    },
    {
        q: "5. ICZN ka pura naam kya hai? / What is the full form of ICZN?",
        options: ["International Code of Zoological Nomenclature", "Indian Code of Zoo Nomenclature", "International Central Zoology Name", "None of these"],
        correct: 0
    },
    {
        q: "6. Dwi-naam paddhati (Binomial Nomenclature) kisne di thi? / Who proposed Binomial Nomenclature?",
        options: ["Ernst Mayr", "Carolus Linnaeus", "Darwin", "Lamarck"],
        correct: 1
    },
    {
        q: "7. Pratyek jaivik naam ke kitne ghatak hote hain? / How many components are there in each scientific name?",
        options: ["1", "2", "3", "4"],
        correct: 1
    },
    {
        q: "8. Dwi-naam paddhati mein pehla shabd kya darshata hai? / What does the first word in binomial nomenclature represent?",
        options: ["Vanshnam (Genus)", "Jaati sanket pad (Species)", "Kul (Family)", "Gan (Order)"],
        correct: 0
    },
    {
        q: "9. Dwi-naam paddhati mein doosra shabd kya hota hai? / What is the second word in binomial nomenclature?",
        options: ["Vanshnam", "Jaati sanket pad (Specific epithet)", "Varg", "Jagat"],
        correct: 1
    },
    {
        q: "10. Aam ka vaigyanik naam kya hai? / What is the scientific name of Mango?",
        options: ["Homo sapiens", "Mangifera indica", "Solanum tuberosum", "Panthera leo"],
        correct: 1
    },
    {
        q: "11. Mangifera indica mein 'Mangifera' kya hai? / In Mangifera indica, 'Mangifera' is?",
        options: ["Jaati sanket pad", "Vanshnam (Genus)", "Kul", "Gan"],
        correct: 1
    },
    {
        q: "12. Mangifera indica mein 'indica' kya hai? / In Mangifera indica, 'indica' is?",
        options: ["Vanshnam", "Jaati sanket pad (Specific epithet)", "Varg", "Sang"],
        correct: 1
    },
    {
        q: "13. Jaivik naam prayah kis bhasha mein hote hain? / Scientific names are generally in which language?",
        options: ["English", "Hindi", "Latin", "Greek"],
        correct: 2
    },
    {
        q: "14. Jaivik naam ko jab haath se likhte hain tab unhein kya karte hain? / When handwritten, scientific names are?",
        options: ["Written in caps", "Separately underlined", "Circled", "Ignored"],
        correct: 1
    },
    {
        q: "15. Vanshnam ka pehla akshar kis case mein hona chahiye? / The first letter of genus should be in?",
        options: ["Small letter", "Capital letter", "Any case", "None"],
        correct: 1
    },
    {
        q: "16. Jaati sanket pad kis mein likha jana chahiye? / Specific epithet should be written in?",
        options: ["Capital letter", "Small letter", "Bold letter", "Roman"],
        correct: 1
    },
    {
        q: "17. Jaivik naam ke ant mein kiska naam likha jata hai? / Whose name appears at the end of the scientific name?",
        options: ["Person name", "Author name", "King name", "None"],
        correct: 1
    },
    {
        q: "18. Mangifera indica (Lin.) mein '(Lin.)' kya darshata hai? / What does '(Lin.)' in Mangifera indica (Lin.) indicate?",
        options: ["First described by Linnaeus", "Native to India", "Latin origin", "None"],
        correct: 0
    },
    {
        q: "19. Jeevon ki aasan pehchan ke liye unhein alag-alag vargon mein baantne ki prakriya kya kehlati hai? / Process of grouping organisms into categories is called?",
        options: ["Nomenclature", "Classification", "Evolution", "Rule"],
        correct: 1
    },
    {
        q: "20. Vargiki ke adhar par 'Taxa' kya represent karta hai? / What does 'Taxa' represent in taxonomy?",
        options: ["Categories at different levels", "Only plants", "Only animals", "Diseases"],
        correct: 0
    },
    {
        q: "21. Adhunik vargiki adhyayan ka aadhar kya hai? / What is the basis of modern taxonomic studies?",
        options: ["Cell structure", "Developmental process", "Ecological information", "All of the above"],
        correct: 3
    },
    {
        q: "22. 'Systematics' shabd kis bhasha se liya gaya hai? / The word 'Systematics' is derived from?",
        options: ["Greek", "Latin (Sistema)", "French", "English"],
        correct: 1
    },
    {
        q: "23. 'Sistema' ka kya arth hai? / What is the meaning of 'Sistema'?",
        options: ["Systematic arrangement of organisms", "Origin of life", "End of life", "Plant count"],
        correct: 0
    },
    {
        q: "24. Carolus Linnaeus ne apne publication ka title kya rakha tha? / What was the title of Linnaeus's publication?",
        options: ["Systema Naturae", "Origin of Species", "Genera Plantarum", "Philosophia Botanica"],
        correct: 0
    },
    {
        q: "25. Vargiki padanukram mein kitne mukhya samvarg hain? / How many main taxonomic categories are there in hierarchy?",
        options: ["5", "7", "10", "3"],
        correct: 1
    },
    {
        q: "26. Vargiki padanukram mein sabse upar kaun sa samvarg hota hai? / Which category is at the highest level in taxonomic hierarchy?",
        options: ["Species", "Genus", "Kingdom", "Class"],
        correct: 2
    },
    {
        q: "27. Vargiki padanukram mein sabse niche kaun sa samvarg hota hai? / Which category is at the lowest level in taxonomic hierarchy?",
        options: ["Species", "Order", "Family", "Phylum"],
        correct: 0
    },
    {
        q: "28. Spishij (Jaati) kise kehte hain? / What is a Species?",
        options: ["Group of organisms with fundamental similarities", "Different groups", "Only plants", "None"],
        correct: 0
    },
    {
        q: "29. Aalu ka vaigyanik naam kya hai? / What is the scientific name of Potato?",
        options: ["Mangifera indica", "Solanum tuberosum", "Panthera leo", "Homo sapiens"],
        correct: 1
    },
    {
        q: "30. Sher ka vaigyanik naam kya hai? / What is the scientific name of Lion?",
        options: ["Panthera leo", "Panthera tigris", "Panthera pardus", "Homo sapiens"],
        correct: 0
    },
    {
        q: "31. Cheetah ka vaigyanik naam kya hai? / What is the scientific name of Leopard?",
        options: ["Panthera leo", "Panthera pardus", "Panthera tigris", "Solanum tuberosum"],
        correct: 1
    },
    {
        q: "32. Bagh ka vaigyanik naam kya hai? / What is the scientific name of Tiger?",
        options: ["Panthera tigris", "Panthera leo", "Solanum melongena", "Homo sapiens"],
        correct: 0
    },
    {
        q: "33. Solanum kiska vansh hai? / Solanum is a genus of?",
        options: ["Potato, Tomato, Brinjal", "Lion, Leopard, Tiger", "Man, Monkey", "Wheat, Rice"],
        correct: 0
    },
    {
        q: "34. Panthera kiska vansh hai? / Panthera is a genus of?",
        options: ["Lion, Tiger, Leopard", "Cat, Dog", "Potato, Tomato", "Man"],
        correct: 0
    },
    {
        q: "35. Billi kis vansh mein aati hai? / Cat belongs to which genus?",
        options: ["Panthera", "Felis", "Solanum", "Homo"],
        correct: 1
    },
    {
        q: "36. Manav ke vaigyanik naam mein 'Homo' kya hai? / In human scientific name, 'Homo' is?",
        options: ["Genus", "Family", "Species", "Order"],
        correct: 0
    },
    {
        q: "37. Manav ki jaati (Species) kya hai? / What is the species name of Human?",
        options: ["homo", "sapiens", "indica", "leo"],
        correct: 1
    },
    {
        q: "38. Kul (Family) mein kiska samuh hota hai? / Family comprises a group of related?",
        options: ["Genera (Vansh)", "Species", "Orders", "Classes"],
        correct: 0
    },
    {
        q: "39. Solanaceae aur Convolvulaceae kiske udaharan hain? / Solanaceae and Convolvulaceae are examples of?",
        options: ["Family (Kul)", "Genus", "Order", "Class"],
        correct: 0
    },
    {
        q: "40. Felidae aur Canidae kya hain? / What are Felidae and Canidae?",
        options: ["Classes", "Families (Kul)", "Orders", "Phyla"],
        correct: 1
    },
    {
        q: "41. Gan (Order) mein kiska samuh hota hai? / Order includes related?",
        options: ["Families (Kul)", "Genera", "Classes", "Kingdoms"],
        correct: 0
    },
    {
        q: "42. Polymoniales aur Carnivora kiske udaharan hain? / Polymoniales and Carnivora are examples of?",
        options: ["Order (Gan)", "Family", "Class", "Phylum"],
        correct: 0
    },
    {
        q: "43. Varg (Class) mein kiska samuh hota hai? / Class includes related?",
        options: ["Orders (Gan)", "Families", "Phyla", "Genus"],
        correct: 0
    },
    {
        q: "44. Mammalia kiska udaharan hai? / Mammalia is an example of?",
        options: ["Class (Varg)", "Order", "Family", "Phylum"],
        correct: 0
    },
    {
        q: "45. Praniyon ke liye 'Sang' use hota hai, toh paudhon ke liye kya use hota hai? / For animals we use Phylum, for plants we use?",
        options: ["Division (Bhaag)", "Class", "Order", "Family"],
        correct: 0
    },
    {
        q: "46. Chordata kiska udaharan hai? / Chordata is an example of?",
        options: ["Phylum (Sang)", "Class", "Order", "Family"],
        correct: 0
    },
    {
        q: "47. Angiospermae kiska udaharan hai? / Angiospermae is an example of?",
        options: ["Division (Bhaag)", "Class", "Order", "Family"],
        correct: 0
    },
    {
        q: "48. Jaise-jaise hum species se kingdom ki taraf jaate hain, saman gunon mein kya hota hai? / As we go from species to kingdom, common characteristics?",
        options: ["Increase", "Decrease", "Remain same", "Vanish"],
        correct: 1
    },
    {
        q: "49. Sabse adhik saman gun kiske sadasyon mein hote hain? / Maximum common characters are found in members of?",
        options: ["Kingdom", "Phylum", "Species", "Class"],
        correct: 2
    },
    {
        q: "50. Vargiki padanukram mein sabse upar kaun sa samvarg hai? / Highest taxonomic category is?",
        options: ["Species", "Kingdom", "Class", "Order"],
        correct: 1
    },
    {
        q: "51. Manav ka biological name kya hai? / Biological name of Human?",
        options: ["Homo sapiens", "Musca domestica", "Mangifera indica", "Triticum aestivum"],
        correct: 0
    },
    {
        q: "52. Manav ka vansh kya hai? / Genus of Human?",
        options: ["Homo", "Hominidae", "Primata", "Mammalia"],
        correct: 0
    },
    {
        q: "53. Manav ka kul kaun sa hai? / Family of Human?",
        options: ["Hominidae", "Homo", "Primata", "Chordata"],
        correct: 0
    },
    {
        q: "54. Manav ka gan kya hai? / Order of Human?",
        options: ["Primata", "Carnivora", "Diptera", "Insecta"],
        correct: 0
    },
    {
        q: "55. Manav ka varg kaun sa hai? / Class of Human?",
        options: ["Mammalia", "Insecta", "Dicotyledonae", "Monocotyledonae"],
        correct: 0
    },
    {
        q: "56. Manav ka sang kya hai? / Phylum of Human?",
        options: ["Chordata", "Arthropoda", "Angiospermae", "Insecta"],
        correct: 0
    },
    {
        q: "57. Gharelu makkhi ka vaigyanik naam kya hai? / Scientific name of Housefly?",
        options: ["Musca domestica", "Homo sapiens", "Mangifera indica", "Triticum aestivum"],
        correct: 0
    },
    {
        q: "58. Gharelu makkhi ka vansh kya hai? / Genus of Housefly?",
        options: ["Musca", "Muscidae", "Diptera", "Insecta"],
        correct: 0
    },
    {
        q: "59. Gharelu makkhi ka kul kaun sa hai? / Family of Housefly?",
        options: ["Muscidae", "Musca", "Diptera", "Arthropoda"],
        correct: 0
    },
    {
        q: "60. Gharelu makkhi ka gan kya hai? / Order of Housefly?",
        options: ["Diptera", "Primata", "Carnivora", "Insecta"],
        correct: 0
    },
    {
        q: "61. Gharelu makkhi ka varg kaun sa hai? / Class of Housefly?",
        options: ["Insecta", "Mammalia", "Chordata", "Dicotyledonae"],
        correct: 0
    },
    {
        q: "62. Gharelu makkhi ka sang kya hai? / Phylum of Housefly?",
        options: ["Arthropoda", "Chordata", "Angiospermae", "Insecta"],
        correct: 0
    },
    {
        q: "63. Aam ka vaigyanik naam kya hai? / Scientific name of Mango?",
        options: ["Mangifera indica", "Solanum tuberosum", "Panthera leo", "Homo sapiens"],
        correct: 0
    },
    {
        q: "64. Aam ka vansh kya hai? / Genus of Mango?",
        options: ["Mangifera", "Anacardiaceae", "Sapindales", "Dicotyledonae"],
        correct: 0
    },
    {
        q: "65. Aam ka kul kaun sa hai? / Family of Mango?",
        options: ["Anacardiaceae", "Poaceae", "Solanaceae", "Felidae"],
        correct: 0
    },
    {
        q: "66. Aam ka gan kya hai? / Order of Mango?",
        options: ["Sapindales", "Poales", "Primata", "Diptera"],
        correct: 0
    },
    {
        q: "67. Aam ka varg kaun sa hai? / Class of Mango?",
        options: ["Dicotyledonae", "Monocotyledonae", "Mammalia", "Insecta"],
        correct: 0
    },
    {
        q: "68. Aam ka bhaag kya hai? / Division of Mango?",
        options: ["Angiospermae", "Gymnospermae", "Chordata", "Arthropoda"],
        correct: 0
    },
    {
        q: "69. Gehu ka vaigyanik naam kya hai? / Scientific name of Wheat?",
        options: ["Triticum aestivum", "Mangifera indica", "Solanum tuberosum", "Homo sapiens"],
        correct: 0
    },
    {
        q: "70. Gehu ka vansh kya hai? / Genus of Wheat?",
        options: ["Triticum", "Poaceae", "Poales", "Monocotyledonae"],
        correct: 0
    },
    {
        q: "71. Gehu ka kul kaun sa hai? / Family of Wheat?",
        options: ["Poaceae", "Anacardiaceae", "Hominidae", "Muscidae"],
        correct: 0
    },
    {
        q: "72. Gehu ka gan kya hai? / Order of Wheat?",
        options: ["Poales", "Sapindales", "Primata", "Diptera"],
        correct: 0
    },
    {
        q: "73. Gehu ka varg kaun sa hai? / Class of Wheat?",
        options: ["Monocotyledonae", "Dicotyledonae", "Mammalia", "Insecta"],
        correct: 0
    },
    {
        q: "74. Gehu ka bhaag kya hai? / Division of Wheat?",
        options: ["Angiospermae", "Gymnospermae", "Chordata", "Arthropoda"],
        correct: 0
    },
    {
        q: "75. Inmein se kaun sa ek dicyotyledonae varg ka paudha hai? / Which of these is dicot?",
        options: ["Mango", "Wheat", "Rice", "Maize"],
        correct: 0
    },
    {
        q: "76. Ernst Mayr ka janm kab hua tha? / When was Ernst Mayr born?",
        options: ["5 July 1904", "10 August 1910", "15 January 1900", "20 December 1920"],
        correct: 0
    },
    {
        q: "77. Ernst Mayr ka janm kahan hua tha? / Where was Ernst Mayr born?",
        options: ["Captain, Germany", "London, UK", "Harvard, USA", "Paris, France"],
        correct: 0
    },
    {
        q: "78. Ernst Mayr ko kis upadhi se nawaja gaya tha? / Ernst Mayr was known as?",
        options: ["Darwin of the 20th century", "Father of Biology", "Father of Botany", "Father of Zoology"],
        correct: 0
    },
    {
        q: "79. Ernst Mayr kis vishwavidyalaya ke scientist the? / Ernst Mayr was from which university?",
        options: ["Harvard University", "Oxford University", "Cambridge University", "Stanford University"],
        correct: 0
    },
    {
        q: "80. Ernst Mayr ka dehaant kis varsh hua tha? / In which year did Ernst Mayr pass away?",
        options: ["2004", "1999", "2010", "1983"],
        correct: 0
    },
    {
        q: "81. Ernst Mayr ki aayu dehaant ke samay kitni thi? / What was Mayr's age at death?",
        options: ["90 years", "100 years", "105 years", "80 years"],
        correct: 1
    },
    {
        q: "82. Ernst Mayr ko kitne puraskaron se sammanit kiya gaya tha? / How many major prizes did Ernst Mayr win?",
        options: ["3", "2", "4", "5"],
        correct: 0
    },
    {
        q: "83. Baljon prize Ernst Mayr ko kis varsh mila tha? / When did Mayr receive Balzan Prize?",
        options: ["1983", "1998", "1999", "2004"],
        correct: 0
    },
    {
        q: "84. International Prize for Biology kab mila? / When did he receive International Prize for Biology?",
        options: ["1998", "1983", "1999", "2000"],
        correct: 0
    },
    {
        q: "85. Krafoord prize kis varsh mila tha? / When did he receive Krafoord Prize?",
        options: ["1999", "1983", "1998", "2004"],
        correct: 0
    },
    {
        q: "86. 'Jaati vividhta ki utpatti' ko kisne khada kiya? / Who pioneered 'origin of species diversity'?",
        options: ["Ernst Mayr", "Linnaeus", "Darwin", "Aristotle"],
        correct: 0
    },
    {
        q: "87. Aadimanav ko apni moolbhoot aavashyaktaon ke liye kya khojna padta tha? / Early humans searched for?",
        options: ["New sources", "Books", "Computer", "Scientific names"],
        correct: 0
    },
    {
        q: "88. Aadimanav ke dwara vargikaran ka aadhar kya tha? / Basis of classification by early humans was?",
        options: ["Use (Upayog)", "DNA", "Cell", "Evolution"],
        correct: 0
    },
    {
        q: "89. Vargiki shabd ka mukhya aadhar kya hai? / Main components of taxonomy are?",
        options: ["Identification", "Nomenclature", "Classification", "All of the above"],
        correct: 3
    },
    {
        q: "90. Inmein se kaun sa ek taxa ke roop mein sahi hai? / Which of these is correct as a taxon?",
        options: ["Plants", "Wheat", "Dog", "All of the above"],
        correct: 3
    },
    {
        q: "91. Kya Kutta ek sthanhari hai aur sthanhari ek prani hai? / Is Dog a mammal and mammal an animal?",
        options: ["Yes, representing taxa at different levels", "No", "Maybe", "None"],
        correct: 0
    },
    {
        q: "92. Vargiki samvarg akeli kisko pradarshit karti hai? / Taxonomic category represents?",
        options: ["A rank or category", "The whole world", "Only plants", "Only genes"],
        correct: 0
    },
    {
        q: "93. Sabhi samvarg milkar kya banate hain? / All categories together constitute?",
        options: ["Taxonomic hierarchy", "Only species", "Only genus", "Nothing"],
        correct: 0
    },
    {
        q: "94. Har ek pad ya varg ko kya kehte hain? / Each rank or category is called?",
        options: ["Taxon", "Species", "Genus", "Order"],
        correct: 0
    },
    {
        q: "95. Keet ke varg mein kitni jodi sandhukt taangein hoti hain? / Insects have how many pairs of jointed legs?",
        options: ["2 pairs", "3 pairs", "4 pairs", "5 pairs"],
        correct: 1
    },
    {
        q: "96. Aam aur Baingan kiske udaharan hain? / Mango and Brinjal are examples of?",
        options: ["Species / Different categories", "Same genus", "Same family", "Same order"],
        correct: 0
    },
    {
        q: "97. Solanum tuberosum aur Solanum melongena mein kya saman hai? / What is common in Solanum tuberosum and S. melongena?",
        options: ["Solanum (Genus)", "tuberosum", "melongena", "None"],
        correct: 0
    },
    {
        q: "98. Felidae kul mein mukhya roop se kaun aate hain? / Family Felidae mainly includes?",
        options: ["Cats and big cats", "Dogs", "Flies", "Wheat"],
        correct: 0
    },
    {
        q: "99. Canidae kul mein mukhya roop se kaun aate hain? / Family Canidae mainly includes?",
        options: ["Dogs", "Cats", "Potato", "Fly"],
        correct: 0
    },
    {
        q: "100. Species se kingdom ki taraf jane par adhyayan kya hota hai? / Going from species to kingdom, study becomes?",
        options: ["Easy", "Complex (Jatil)", "Simple", "Finished"],
        correct: 1
    }
];