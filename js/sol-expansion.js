// SOL EXPANSION — English new standards + History doubled
// Merges into SOL_QUESTIONS via mergeSOLExpansion()
// English: adds R.3, L.1, L.2 per grade (8 Qs each)
// History: adds 8 more Qs per existing standard

const SOL_EXPANSION = {

"English": {
"1st Grade": {
"1.R.3":[
  {q:"What does the word 'big' mean?",correct:"Large in size",options:["Tiny","Large in size","Far away","Very fast"],sol:"1.R.3",skill:"Vocabulary"},
  {q:"Which word means the opposite of 'hot'?",correct:"Cold",options:["Warm","Cold","Cool","Burn"],sol:"1.R.3",skill:"Antonyms"},
  {q:"Which two words mean almost the same thing?",correct:"Happy and glad",options:["Happy and sad","Happy and glad","Big and tiny","Fast and slow"],sol:"1.R.3",skill:"Synonyms"},
  {q:"What does the word 'run' mean in 'The dog likes to run in the yard'?",correct:"To move fast on legs",options:["To swim","To fly","To move fast on legs","To sleep"],sol:"1.R.3",skill:"Context clues"},
  {q:"Which word names a feeling?",correct:"Scared",options:["Chair","Scared","Jump","Blue"],sol:"1.R.3",skill:"Emotion words"},
  {q:"What does the prefix 'un-' do to a word?",correct:"Makes it mean the opposite",options:["Makes it bigger","Makes it a question","Makes it mean the opposite","Adds a letter"],sol:"1.R.3",skill:"Prefixes"},
  {q:"What does 'cold' describe in 'the cold ice cream'?",correct:"What the ice cream is like",options:["An action","What the ice cream is like","Where it is","Who has it"],sol:"1.R.3",skill:"Describing words"},
  {q:"Which sentence uses 'bark' correctly?",correct:"The dog will bark at the mail carrier",options:["The dog will bark a cake","I bark my shoe","The dog will bark at the mail carrier","She barked the sky"],sol:"1.R.3",skill:"Word meaning in context"},
],
"1.L.1":[
  {q:"Which word is a noun (a person, place, or thing)?",correct:"Dog",options:["Run","Dog","Fast","Under"],sol:"1.L.1",skill:"Nouns"},
  {q:"Which word is an action verb?",correct:"Jump",options:["Ball","Jump","Red","Over"],sol:"1.L.1",skill:"Verbs"},
  {q:"Which sentence has a capital letter at the start?",correct:"My dog is brown.",options:["my dog is brown.","My dog is brown.","MY DOG IS BROWN.","my Dog is brown."],sol:"1.L.1",skill:"Capitalization"},
  {q:"Which sentence ends with a period?",correct:"I like cats.",options:["I like cats","I like cats!","I like cats?","I like cats."],sol:"1.L.1",skill:"End punctuation"},
  {q:"Which group of words is a complete sentence?",correct:"The bird sings.",options:["The bird","Sings loudly","The bird sings.","Bird tree"],sol:"1.L.1",skill:"Complete sentences"},
  {q:"Which word describes the noun in 'the tall tree'?",correct:"Tall",options:["The","Tree","Tall","A"],sol:"1.L.1",skill:"Adjectives"},
  {q:"How do you spell the plural of 'cat'?",correct:"Cats",options:["Cates","Cat","Catz","Cats"],sol:"1.L.1",skill:"Plurals"},
  {q:"Which word is a pronoun that could replace 'Maria'?",correct:"She",options:["He","It","She","They"],sol:"1.L.1",skill:"Pronouns"},
],
"1.L.2":[
  {q:"When someone is talking to you, what should you do?",correct:"Look at them and listen carefully",options:["Talk about something else","Look at them and listen carefully","Look away","Run around"],sol:"1.L.2",skill:"Listening"},
  {q:"What is the best way to ask a question?",correct:"Raise your hand and wait to be called on",options:["Yell it out","Raise your hand and wait to be called on","Walk away","Whisper to a friend"],sol:"1.L.2",skill:"Asking questions"},
  {q:"Which word helps join two ideas? 'I like cats ___ I like dogs too.'",correct:"And",options:["But","Or","And","So"],sol:"1.L.2",skill:"Connecting words"},
  {q:"What does it mean to retell a story?",correct:"To tell what happened in your own words",options:["To change the ending","To tell what happened in your own words","To read it again","To guess the title"],sol:"1.L.2",skill:"Retelling"},
  {q:"When you share your ideas with the class, you should speak how?",correct:"Clearly and loud enough for everyone to hear",options:["As fast as possible","Only to your neighbor","Clearly and loud enough for everyone to hear","With your eyes closed"],sol:"1.L.2",skill:"Speaking"},
  {q:"What is a question word?",correct:"Who",options:["Run","Who","Fast","Big"],sol:"1.L.2",skill:"Question words"},
  {q:"Which response answers the question 'What is your favorite color?'",correct:"My favorite color is blue.",options:["I like dogs.","My favorite color is blue.","The sky is nice.","I am eight."],sol:"1.L.2",skill:"Answering questions"},
  {q:"Why do we take turns when talking?",correct:"So everyone gets a chance to share",options:["To be faster","So everyone gets a chance to share","Because the teacher says so","To talk more"],sol:"1.L.2",skill:"Turn taking"},
],
},
"2nd Grade": {
"2.R.3":[
  {q:"What does the word 'enormous' mean?",correct:"Very large",options:["Very small","Very fast","Very large","Very bright"],sol:"2.R.3",skill:"Vocabulary"},
  {q:"Which word is a synonym for 'happy'?",correct:"Joyful",options:["Angry","Joyful","Sad","Tired"],sol:"2.R.3",skill:"Synonyms"},
  {q:"What does the word 'ancient' mean?",correct:"Very old",options:["Very new","Very old","Very far","Very heavy"],sol:"2.R.3",skill:"Vocabulary"},
  {q:"What does 'freezing' mean in 'The freezing water made me shiver'?",correct:"Extremely cold",options:["Very warm","Extremely cold","Moving fast","Very clean"],sol:"2.R.3",skill:"Context clues"},
  {q:"Which pair of words are antonyms?",correct:"Brave and cowardly",options:["Brave and strong","Brave and cowardly","Sad and unhappy","Fast and quick"],sol:"2.R.3",skill:"Antonyms"},
  {q:"What does the suffix '-ful' mean in 'cheerful'?",correct:"Full of cheer",options:["Without cheer","Full of cheer","Cheer again","Not cheer"],sol:"2.R.3",skill:"Suffixes"},
  {q:"What does 'purchase' mean?",correct:"To buy something",options:["To sell something","To throw something","To buy something","To break something"],sol:"2.R.3",skill:"Vocabulary"},
  {q:"Which word means 'to look at something very carefully'?",correct:"Examine",options:["Glance","Skip","Examine","Ignore"],sol:"2.R.3",skill:"Precise vocabulary"},
],
"2.L.1":[
  {q:"Which sentence uses the correct verb tense? 'Yesterday, she ___.'",correct:"played outside",options:["plays outside","will play outside","played outside","is playing outside"],sol:"2.L.1",skill:"Verb tenses"},
  {q:"Which word is an adjective?",correct:"Fluffy",options:["Run","Fluffy","Quickly","Over"],sol:"2.L.1",skill:"Adjectives"},
  {q:"Which sentence uses a comma correctly in a list?",correct:"I ate apples, bananas, and grapes.",options:["I ate apples bananas and grapes.","I ate apples, bananas, and grapes.","I ate, apples, bananas and grapes.","I ate apples bananas, and grapes."],sol:"2.L.1",skill:"Commas in lists"},
  {q:"What punctuation mark makes a question?",correct:"?",options:[".","!","?",","],sol:"2.L.1",skill:"Question marks"},
  {q:"Which word is an adverb that tells how?",correct:"Quickly",options:["Chair","Quickly","Blue","Eat"],sol:"2.L.1",skill:"Adverbs"},
  {q:"Which sentence has the correct subject-verb agreement?",correct:"The dogs run fast.",options:["The dogs runs fast.","The dogs run fast.","The dogs runned fast.","The dogs is fast."],sol:"2.L.1",skill:"Subject-verb agreement"},
  {q:"Which word is a proper noun?",correct:"Monday",options:["Day","Monday","Week","Time"],sol:"2.L.1",skill:"Proper nouns"},
  {q:"What does an apostrophe show in 'Sarah's book'?",correct:"The book belongs to Sarah",options:["Sarah is missing","The book belongs to Sarah","There are many Sarahs","A question"],sol:"2.L.1",skill:"Possessives"},
],
"2.L.2":[
  {q:"What is the purpose of a discussion in class?",correct:"To share and hear different ideas",options:["To be the loudest","To share and hear different ideas","To finish quickly","To agree with everyone"],sol:"2.L.2",skill:"Discussion purpose"},
  {q:"Which is the best way to disagree with a classmate respectfully?",correct:"I understand your idea, but I think...",options:["You are wrong!","I understand your idea, but I think...","Ignore them","Walk away"],sol:"2.L.2",skill:"Respectful disagreement"},
  {q:"What should you do if you do not understand something someone said?",correct:"Ask them to explain it again",options:["Pretend you understand","Ask them to explain it again","Talk about something else","Stay quiet forever"],sol:"2.L.2",skill:"Asking for clarification"},
  {q:"Which word helps give details? 'The dog barked ___ the stranger walked past.'",correct:"When",options:["And","But","When","Or"],sol:"2.L.2",skill:"Connecting ideas"},
  {q:"When giving a presentation, what is most important?",correct:"Speaking clearly so the audience understands",options:["Talking very fast","Using big words","Speaking clearly so the audience understands","Standing still the whole time"],sol:"2.L.2",skill:"Presenting"},
  {q:"What does it mean to make an inference?",correct:"To use clues to figure something out that is not said directly",options:["To copy from a book","To use clues to figure something out that is not said directly","To look in a dictionary","To guess randomly"],sol:"2.L.2",skill:"Inference"},
  {q:"What is a topic sentence?",correct:"The sentence that tells what a paragraph is about",options:["The last sentence","The sentence that tells what a paragraph is about","A question at the start","Any sentence with facts"],sol:"2.L.2",skill:"Topic sentence"},
  {q:"When does a speaker use an excited voice?",correct:"When sharing something surprising or thrilling",options:["When being very bored","When sharing something surprising or thrilling","When whispering a secret","When ending a story quietly"],sol:"2.L.2",skill:"Speaking expression"},
],
},
"3rd Grade": {
"3.R.3":[
  {q:"What does the word 'migrate' mean?",correct:"To move from one place to another with the seasons",options:["To sleep all winter","To move from one place to another with the seasons","To build a nest","To eat a lot"],sol:"3.R.3",skill:"Science vocabulary"},
  {q:"Which word is a synonym for 'courageous'?",correct:"Brave",options:["Afraid","Brave","Weak","Silly"],sol:"3.R.3",skill:"Synonyms"},
  {q:"What does the root word 'port' mean in 'transport'?",correct:"Carry",options:["Move fast","Carry","Build","Water"],sol:"3.R.3",skill:"Root words"},
  {q:"What does 'scarce' mean?",correct:"Hard to find because there is not much of it",options:["Easy to find","Very colorful","Hard to find because there is not much of it","Strong and heavy"],sol:"3.R.3",skill:"Vocabulary"},
  {q:"What does the prefix 'pre-' mean in 'preview'?",correct:"Before",options:["After","Again","Before","Against"],sol:"3.R.3",skill:"Prefixes"},
  {q:"Which words are antonyms?",correct:"Ancient and modern",options:["Ancient and old","Ancient and modern","Ancient and historical","Ancient and past"],sol:"3.R.3",skill:"Antonyms"},
  {q:"What does 'perspective' mean?",correct:"A point of view or way of seeing something",options:["A type of painting","A point of view or way of seeing something","A measurement tool","A kind of microscope"],sol:"3.R.3",skill:"Academic vocabulary"},
  {q:"What context clue helps you understand a word?",correct:"Words and sentences around the unknown word",options:["The page number","Words and sentences around the unknown word","The chapter title","The book cover"],sol:"3.R.3",skill:"Context clues"},
],
"3.L.1":[
  {q:"Which sentence uses a conjunction correctly?",correct:"I wanted to play, but it started raining.",options:["I wanted to play but it started raining","I wanted to play, but it started raining.","I wanted, to play but it started raining.","I wanted to play but, it started raining."],sol:"3.L.1",skill:"Conjunctions"},
  {q:"Which is a compound sentence?",correct:"I like dogs, and my sister likes cats.",options:["I like dogs.","I like dogs and cats.","I like dogs, and my sister likes cats.","Because I like dogs."],sol:"3.L.1",skill:"Compound sentences"},
  {q:"Which word is a preposition?",correct:"Under",options:["Run","Under","Happy","Quickly"],sol:"3.L.1",skill:"Prepositions"},
  {q:"Which sentence uses quotation marks correctly?",correct:"She said, \"I love science.\"",options:["She said I love science.","She said, I love science.","She said, \"I love science.\"","\"She said, I love science.\""],sol:"3.L.1",skill:"Quotation marks"},
  {q:"What is the comparative form of 'fast'?",correct:"Faster",options:["More fast","Fastest","Faster","Fastest"],sol:"3.L.1",skill:"Adjective comparison"},
  {q:"Which sentence is in the past tense?",correct:"She walked to school.",options:["She walks to school.","She will walk to school.","She walked to school.","She is walking to school."],sol:"3.L.1",skill:"Past tense"},
  {q:"Which is a complex sentence?",correct:"Although it was raining, we played outside.",options:["We played outside.","It was raining.","Although it was raining, we played outside.","We played and ran."],sol:"3.L.1",skill:"Complex sentences"},
  {q:"What does an abstract noun name?",correct:"An idea or feeling you cannot touch",options:["A place you can visit","An object you can hold","An idea or feeling you cannot touch","An animal that moves"],sol:"3.L.1",skill:"Abstract nouns"},
],
"3.L.2":[
  {q:"What is the purpose of a conclusion in a report?",correct:"To wrap up the main ideas",options:["To introduce new facts","To wrap up the main ideas","To list all the sources","To ask a question"],sol:"3.L.2",skill:"Text structure"},
  {q:"Which is an example of using evidence?",correct:"According to the article, sharks can smell blood from far away.",options:["I think sharks are interesting.","According to the article, sharks can smell blood from far away.","Sharks are scary.","My friend told me about sharks."],sol:"3.L.2",skill:"Evidence"},
  {q:"What does a speaker do to emphasize an important point?",correct:"Slow down and speak more clearly on that point",options:["Speak as fast as possible","Slow down and speak more clearly on that point","Change the topic quickly","Whisper the whole speech"],sol:"3.L.2",skill:"Emphasis in speaking"},
  {q:"What is the difference between a fact and an opinion?",correct:"A fact can be proven; an opinion is what someone believes",options:["They are the same thing","A fact is shorter","A fact can be proven; an opinion is what someone believes","An opinion uses numbers"],sol:"3.L.2",skill:"Fact vs opinion"},
  {q:"What should an effective oral presentation include?",correct:"A clear beginning, middle, and end with details",options:["Only the ending","As many words as possible","A clear beginning, middle, and end with details","Only pictures"],sol:"3.L.2",skill:"Oral presentation"},
  {q:"Which word best signals a contrasting idea?",correct:"However",options:["Also","Furthermore","However","Similarly"],sol:"3.L.2",skill:"Transition words"},
  {q:"What is the best way to prepare for a class discussion?",correct:"Read or learn about the topic beforehand",options:["Wait until class starts","Read or learn about the topic beforehand","Agree with everything","Say nothing"],sol:"3.L.2",skill:"Preparation"},
  {q:"What does it mean to paraphrase?",correct:"To restate information in your own words",options:["To copy word for word","To restate information in your own words","To make a drawing","To find a rhyme"],sol:"3.L.2",skill:"Paraphrasing"},
],
},
"4th Grade": {
"4.R.3":[
  {q:"What does 'perseverance' mean?",correct:"Continuing to try even when things are hard",options:["Giving up easily","Continuing to try even when things are hard","Moving to a new place","Asking for help"],sol:"4.R.3",skill:"Vocabulary"},
  {q:"Which sentence uses 'affect' correctly?",correct:"The rain will affect our plans.",options:["The rain will effect our plans.","The rain will affect our plans.","The affect of rain is wet.","We studied the affect."],sol:"4.R.3",skill:"Commonly confused words"},
  {q:"What does the root 'rupt' mean in 'interrupt'?",correct:"Break",options:["Sound","Break","Water","Move"],sol:"4.R.3",skill:"Latin roots"},
  {q:"What does 'abundant' mean?",correct:"Available in very large amounts",options:["Hard to find","Available in very large amounts","Extremely dangerous","Very colorful"],sol:"4.R.3",skill:"Vocabulary"},
  {q:"Which word is a synonym for 'determined'?",correct:"Persistent",options:["Lazy","Careless","Persistent","Confused"],sol:"4.R.3",skill:"Synonyms"},
  {q:"What does the suffix '-tion' usually indicate?",correct:"That the word is a noun",options:["That the word is a verb","That the word is a noun","That the word is an adjective","That the word is an adverb"],sol:"4.R.3",skill:"Suffixes"},
  {q:"What does 'inference' mean?",correct:"A conclusion reached using evidence and reasoning",options:["A wild guess","A direct quote","A conclusion reached using evidence and reasoning","A definition"],sol:"4.R.3",skill:"Academic vocabulary"},
  {q:"What does 'modify' mean?",correct:"To change or adjust something",options:["To remove entirely","To double in size","To change or adjust something","To combine two things"],sol:"4.R.3",skill:"Vocabulary"},
],
"4.L.1":[
  {q:"Which sentence uses a semicolon correctly?",correct:"I studied hard; I passed the test.",options:["I studied hard, I passed the test.","I studied hard; I passed the test.","I studied hard: I passed the test.","I studied; hard I passed the test."],sol:"4.L.1",skill:"Semicolons"},
  {q:"What is the function of an appositive?",correct:"To rename or describe a noun right next to it",options:["To ask a question","To rename or describe a noun right next to it","To show action","To connect two sentences"],sol:"4.L.1",skill:"Appositives"},
  {q:"Which sentence uses the subjective pronoun correctly?",correct:"She and I went to the store.",options:["Her and me went to the store.","She and me went to the store.","Her and I went to the store.","She and I went to the store."],sol:"4.L.1",skill:"Pronoun case"},
  {q:"What is a relative clause?",correct:"A clause that begins with who, which, or that and describes a noun",options:["A question about relatives","A clause that begins with who, which, or that and describes a noun","A sentence with two verbs","A list of adjectives"],sol:"4.L.1",skill:"Relative clauses"},
  {q:"Which sentence is written in the active voice?",correct:"The chef made the soup.",options:["The soup was made by the chef.","The chef made the soup.","The soup is being made.","Made was the soup."],sol:"4.L.1",skill:"Active vs passive voice"},
  {q:"What does a colon do in a sentence?",correct:"Introduces a list or explanation",options:["Shows ownership","Introduces a list or explanation","Ends a question","Separates syllables"],sol:"4.L.1",skill:"Colons"},
  {q:"Which sentence is grammatically correct?",correct:"Neither the dog nor the cat was inside.",options:["Neither the dog nor the cat were inside.","Neither the dog nor the cat was inside.","Neither the dogs or cat was inside.","Neither the dog and the cat was inside."],sol:"4.L.1",skill:"Correlative conjunctions"},
  {q:"What is a dangling modifier?",correct:"A describing phrase that does not clearly attach to the right word",options:["A very long sentence","A describing phrase that does not clearly attach to the right word","A question at the end","A missing period"],sol:"4.L.1",skill:"Modifiers"},
],
"4.L.2":[
  {q:"What is the purpose of a thesis statement?",correct:"To state the main argument or focus of a piece of writing",options:["To list all the facts","To state the main argument or focus of a piece of writing","To end a paragraph","To ask a question"],sol:"4.L.2",skill:"Thesis"},
  {q:"Which transitional phrase shows cause and effect?",correct:"As a result",options:["In addition","For example","On the other hand","As a result"],sol:"4.L.2",skill:"Transitions"},
  {q:"What makes a source reliable for research?",correct:"It is written by an expert and checked for accuracy",options:["It has lots of pictures","It was written recently by anyone","It is written by an expert and checked for accuracy","It matches your opinion"],sol:"4.L.2",skill:"Reliable sources"},
  {q:"What should you do after taking notes from a source?",correct:"Put the information in your own words when you write",options:["Copy everything exactly","Put the information in your own words when you write","Throw the notes away","Only use one source"],sol:"4.L.2",skill:"Note-taking"},
  {q:"What is an audience?",correct:"The people who will read or listen to your work",options:["The author of a book","The teacher only","The people who will read or listen to your work","The characters in the story"],sol:"4.L.2",skill:"Audience"},
  {q:"Which element is most important in persuasive writing?",correct:"A clear claim supported by reasons and evidence",options:["Lots of adjectives","A rhyme scheme","A clear claim supported by reasons and evidence","A list of definitions"],sol:"4.L.2",skill:"Persuasive writing"},
  {q:"What does it mean to revise your writing?",correct:"To improve the content, organization, and word choice",options:["To fix spelling only","To rewrite it from scratch","To improve the content, organization, and word choice","To read it once more"],sol:"4.L.2",skill:"Revision"},
  {q:"What is the purpose of a bibliography or works cited list?",correct:"To give credit to the sources you used",options:["To show how long you worked","To give credit to the sources you used","To list characters","To add extra pages"],sol:"4.L.2",skill:"Citations"},
],
},
"5th Grade": {
"5.R.3":[
  {q:"What does 'controversy' mean?",correct:"A strong disagreement about something",options:["A type of experiment","A strong disagreement about something","A kind of story","A long journey"],sol:"5.R.3",skill:"Vocabulary"},
  {q:"What does the Latin root 'vis' mean in 'visible'?",correct:"See",options:["Hear","Move","See","Build"],sol:"5.R.3",skill:"Latin roots"},
  {q:"Which pair of words are homographs (same spelling, different meaning)?",correct:"Bat (animal) and bat (sports equipment)",options:["Write and right","Bat (animal) and bat (sports equipment)","Happy and glad","Run and sprint"],sol:"5.R.3",skill:"Homographs"},
  {q:"What does 'bias' mean in the context of reading?",correct:"A slant toward one side of an issue",options:["A balanced view","A slant toward one side of an issue","A type of fiction","A heading in a text"],sol:"5.R.3",skill:"Bias"},
  {q:"What does 'elaborate' mean?",correct:"To explain or describe in more detail",options:["To shorten","To erase","To explain or describe in more detail","To disagree"],sol:"5.R.3",skill:"Vocabulary"},
  {q:"What does the prefix 'inter-' mean in 'international'?",correct:"Between",options:["Within","After","Before","Between"],sol:"5.R.3",skill:"Prefixes"},
  {q:"What does 'irony' mean?",correct:"When the opposite of what is expected happens",options:["A very serious scene","When the opposite of what is expected happens","A type of rhythm","A strong action"],sol:"5.R.3",skill:"Literary devices"},
  {q:"What does 'analyze' mean?",correct:"To examine something carefully to understand it",options:["To memorize","To describe quickly","To examine something carefully to understand it","To list facts"],sol:"5.R.3",skill:"Academic vocabulary"},
],
"5.L.1":[
  {q:"Which sentence correctly uses a parenthetical expression?",correct:"The answer, of course, was obvious.",options:["The answer of course was obvious.","The answer, of course was obvious.","The answer, of course, was obvious.","The answer of, course, was obvious."],sol:"5.L.1",skill:"Parenthetical expressions"},
  {q:"What is a participle phrase?",correct:"A phrase that uses a verb form to describe a noun",options:["A list of nouns","A phrase that uses a verb form to describe a noun","Two verbs in a row","A question within a sentence"],sol:"5.L.1",skill:"Participial phrases"},
  {q:"Which sentence correctly uses 'fewer' vs 'less'?",correct:"There are fewer students today.",options:["There are less students today.","There are fewer students today.","There are fewer water in the cup.","There are less books."],sol:"5.L.1",skill:"Commonly confused words"},
  {q:"What is the subjunctive mood used for?",correct:"To express wishes, hypotheticals, or things contrary to fact",options:["To give commands","To express wishes, hypotheticals, or things contrary to fact","To tell facts","To describe actions in the past"],sol:"5.L.1",skill:"Subjunctive mood"},
  {q:"Which word is an adverbial conjunction?",correct:"Therefore",options:["And","Therefore","Or","But"],sol:"5.L.1",skill:"Conjunctive adverbs"},
  {q:"What effect does varying sentence length have on writing?",correct:"Creates rhythm and keeps the reader interested",options:["Makes it harder to read","Creates rhythm and keeps the reader interested","Has no effect","Makes all sentences confusing"],sol:"5.L.1",skill:"Sentence variety"},
  {q:"What does 'parallel structure' mean in writing?",correct:"Using the same grammatical form for items in a list or series",options:["Rhyming every sentence","Using the same grammatical form for items in a list or series","Writing two paragraphs the same length","Starting every sentence the same way"],sol:"5.L.1",skill:"Parallel structure"},
  {q:"Which sentence contains a misplaced modifier?",correct:"Running down the street, the keys fell out of his pocket.",options:["He ran down the street and dropped his keys.","Running down the street, the keys fell out of his pocket.","He dropped his keys while running.","His keys fell as he ran."],sol:"5.L.1",skill:"Misplaced modifiers"},
],
"5.L.2":[
  {q:"What is plagiarism?",correct:"Using someone else's words or ideas without giving them credit",options:["Writing a long essay","Using someone else's words or ideas without giving them credit","Citing your sources","Summarizing a text"],sol:"5.L.2",skill:"Academic integrity"},
  {q:"What is the difference between a primary and secondary source?",correct:"A primary source is firsthand; a secondary source interprets primary sources",options:["They are the same","A primary source is more recent","A primary source is firsthand; a secondary source interprets primary sources","A secondary source is always more reliable"],sol:"5.L.2",skill:"Sources"},
  {q:"What does it mean to synthesize information from multiple sources?",correct:"To combine ideas from different sources into one understanding",options:["To copy from each source equally","To combine ideas from different sources into one understanding","To pick the best source only","To list summaries of each source"],sol:"5.L.2",skill:"Synthesis"},
  {q:"What is a counterargument?",correct:"The opposing side's argument in a debate or essay",options:["A stronger version of your own argument","The opposing side's argument in a debate or essay","A supporting detail","A conclusion"],sol:"5.L.2",skill:"Counterargument"},
  {q:"What is the purpose of a formal presentation?",correct:"To inform or persuade an audience using clear, organized ideas",options:["To entertain friends only","To inform or persuade an audience using clear, organized ideas","To practice speaking quietly","To read from a book"],sol:"5.L.2",skill:"Formal presentations"},
  {q:"What should you do when responding to a peer's idea in a discussion?",correct:"Listen, then build on or respectfully question their point",options:["Ignore what they said","Listen, then build on or respectfully question their point","Immediately disagree","Only talk about yourself"],sol:"5.L.2",skill:"Academic discussion"},
  {q:"What is a rhetorical question?",correct:"A question asked for effect, not expecting an answer",options:["A question with many answers","A question asked for effect, not expecting an answer","A math word problem","A question in a test"],sol:"5.L.2",skill:"Rhetorical devices"},
  {q:"Why is word choice important in writing?",correct:"The right words make ideas clear, precise, and engaging",options:["It is not very important","The right words make ideas clear, precise, and engaging","Longer words are always better","Simple words always work best"],sol:"5.L.2",skill:"Word choice"},
],
},
},

"History": {
"1st Grade": {
"1.HS.1":[
  {q:"What does a community need to work well?",correct:"People cooperating and following rules",options:["Only adults","Lots of money","People cooperating and following rules","No rules at all"],sol:"1.HS.1",skill:"Community"},
  {q:"What is one way YOU can be a good citizen at school?",correct:"Helping a classmate who needs it",options:["Taking more supplies than you need","Helping a classmate who needs it","Skipping cleanup time","Talking when others present"],sol:"1.HS.1",skill:"Citizenship actions"},
  {q:"What is a law?",correct:"A rule that everyone in a community must follow",options:["A suggestion you can ignore","A rule that everyone in a community must follow","A game","A type of job"],sol:"1.HS.1",skill:"Laws"},
  {q:"Why do people vote?",correct:"To have a say in decisions that affect everyone",options:["Because it is required every day","To have a say in decisions that affect everyone","To win a prize","Because voting is just for adults online"],sol:"1.HS.1",skill:"Voting"},
  {q:"What does it mean to show patriotism?",correct:"Showing love and pride for your country",options:["Winning a sports game","Showing love and pride for your country","Traveling to another country","Wearing a costume"],sol:"1.HS.1",skill:"Patriotism"},
  {q:"Which community helper delivers mail to your home?",correct:"Mail carrier",options:["Firefighter","Mail carrier","Doctor","Chef"],sol:"1.HS.1",skill:"Community helpers"},
  {q:"What do you call the leader of a local community?",correct:"Mayor",options:["President","Mayor","Judge","Governor"],sol:"1.HS.1",skill:"Local government"},
  {q:"What is the Pledge of Allegiance?",correct:"A promise of loyalty to the United States",options:["A song about the weather","A promise of loyalty to the United States","A list of rules","A school schedule"],sol:"1.HS.1",skill:"American symbols"},
],
"1.HS.2":[
  {q:"Who was George Washington?",correct:"The first President of the United States",options:["The first President of the United States","The inventor of the lightbulb","A famous explorer","A king of England"],sol:"1.HS.2",skill:"Historical figures"},
  {q:"What holiday celebrates the birthday of Martin Luther King Jr.?",correct:"Martin Luther King Jr. Day in January",options:["Thanksgiving","Martin Luther King Jr. Day in January","Presidents Day","Earth Day"],sol:"1.HS.2",skill:"Holidays"},
  {q:"What does the bald eagle represent?",correct:"The United States of America",options:["Canada","The United States of America","A state bird","Freedom from England only"],sol:"1.HS.2",skill:"National symbols"},
  {q:"What is the Liberty Bell famous for?",correct:"It is a symbol of American freedom",options:["It is the world's largest bell","It is a symbol of American freedom","It rings every hour in Washington D.C.","It was made in Virginia"],sol:"1.HS.2",skill:"American symbols"},
  {q:"Who was Abraham Lincoln?",correct:"The 16th President who helped end slavery",options:["The first President","The 16th President who helped end slavery","A colonial explorer","A Virginia governor"],sol:"1.HS.2",skill:"Historical figures"},
  {q:"What do we celebrate on Veterans Day?",correct:"The people who have served in the military",options:["The end of World War II","The people who have served in the military","The birthday of America","A harvest festival"],sol:"1.HS.2",skill:"Holidays"},
  {q:"What does the Statue of Liberty represent?",correct:"Freedom and welcome to people coming to America",options:["A lighthouse","Freedom and welcome to people coming to America","A fort","A museum"],sol:"1.HS.2",skill:"National symbols"},
  {q:"Who wrote the words 'I have a dream' in a famous speech?",correct:"Martin Luther King Jr.",options:["George Washington","Abraham Lincoln","Martin Luther King Jr.","Rosa Parks"],sol:"1.HS.2",skill:"Historical figures"},
],
"1.HS.3":[
  {q:"What does a compass rose on a map show?",correct:"The directions north, south, east, and west",options:["The scale of the map","The directions north, south, east, and west","The population","The weather"],sol:"1.HS.3",skill:"Map tools"},
  {q:"What is the difference between a map and a globe?",correct:"A globe is a round model of Earth; a map is flat",options:["A map shows space; a globe shows Earth","A globe is a round model of Earth; a map is flat","They show exactly the same thing","A map is older than a globe"],sol:"1.HS.3",skill:"Maps vs globes"},
  {q:"How many continents are there on Earth?",correct:"7",options:["5","6","7","8"],sol:"1.HS.3",skill:"Continents"},
  {q:"What continent is the United States on?",correct:"North America",options:["South America","Europe","North America","Asia"],sol:"1.HS.3",skill:"Geography"},
  {q:"What is an ocean?",correct:"A very large body of salt water",options:["A small lake","A very large body of salt water","A type of river","A wide road"],sol:"1.HS.3",skill:"Landforms"},
  {q:"What color is usually used to show water on a map?",correct:"Blue",options:["Green","Brown","Blue","Yellow"],sol:"1.HS.3",skill:"Map colors"},
  {q:"What does a map key or legend tell you?",correct:"What the symbols on the map mean",options:["How to fold the map","What the symbols on the map mean","The year the map was made","The size of the map"],sol:"1.HS.3",skill:"Map key"},
  {q:"What is the name of the large ocean on the east coast of the United States?",correct:"Atlantic Ocean",options:["Pacific Ocean","Atlantic Ocean","Indian Ocean","Arctic Ocean"],sol:"1.HS.3",skill:"Oceans"},
],
"1.HS.4":[
  {q:"What is the difference between a want and a need?",correct:"A need is something you must have to live; a want is something extra",options:["They are the same thing","A need is something you must have to live; a want is something extra","A want is more important","Needs are always free"],sol:"1.HS.4",skill:"Wants vs needs"},
  {q:"Which of these is a need?",correct:"Food",options:["Video game","Food","New sneakers","A vacation"],sol:"1.HS.4",skill:"Needs"},
  {q:"What is money used for?",correct:"To buy goods and services",options:["To play games","To buy goods and services","To measure things","To write with"],sol:"1.HS.4",skill:"Money"},
  {q:"What does a producer do?",correct:"Makes or grows goods to sell",options:["Only buys things","Makes or grows goods to sell","Delivers packages","Studies animals"],sol:"1.HS.4",skill:"Producers"},
  {q:"What does a consumer do?",correct:"Buys and uses goods and services",options:["Buys and uses goods and services","Only makes things","Works in a factory","Grows only food"],sol:"1.HS.4",skill:"Consumers"},
  {q:"What does scarcity mean?",correct:"There is not enough of something to meet everyone's wants",options:["There is plenty for everyone","There is not enough of something to meet everyone's wants","Something is free","A type of store"],sol:"1.HS.4",skill:"Scarcity"},
  {q:"What is a service?",correct:"Work that someone does to help others",options:["Something you can hold","Work that someone does to help others","A type of food","A building"],sol:"1.HS.4",skill:"Services"},
  {q:"If you have to choose between a toy and a book because you only have enough money for one, what did you make?",correct:"A spending decision",options:["A spending decision","A savings account","A trade","A bill"],sol:"1.HS.4",skill:"Economic decision-making"},
],
},
"2nd Grade": {
"2.HS.1":[
  {q:"What are the three branches of the U.S. government?",correct:"Legislative, executive, and judicial",options:["City, state, and federal","Senate, House, and Court","Legislative, executive, and judicial","President, mayor, and governor"],sol:"2.HS.1",skill:"Branches of government"},
  {q:"Who makes the laws for the United States?",correct:"Congress (the Senate and the House of Representatives)",options:["The President","Congress (the Senate and the House of Representatives)","The Supreme Court","The mayor"],sol:"2.HS.1",skill:"Legislative branch"},
  {q:"What is the job of the President of the United States?",correct:"To lead the country and carry out the laws",options:["To make all the laws","To decide court cases","To lead the country and carry out the laws","To collect taxes directly"],sol:"2.HS.1",skill:"Executive branch"},
  {q:"What is the Supreme Court?",correct:"The highest court in the United States",options:["A type of sports event","The highest court in the United States","The President's home","The building where laws are made"],sol:"2.HS.1",skill:"Judicial branch"},
  {q:"What is the capital of the United States?",correct:"Washington, D.C.",options:["New York City","Los Angeles","Washington, D.C.","Philadelphia"],sol:"2.HS.1",skill:"U.S. capital"},
  {q:"What do citizens have the right to do in a democracy?",correct:"Vote for their leaders",options:["Make any law they want","Vote for their leaders","Ignore all laws","Run any business without rules"],sol:"2.HS.1",skill:"Rights"},
  {q:"What does the word 'democracy' mean?",correct:"A government where the people have a say",options:["Rule by one king","A government where the people have a say","Rule by the military","A government with no leader"],sol:"2.HS.1",skill:"Democracy"},
  {q:"What is the national anthem of the United States?",correct:"The Star-Spangled Banner",options:["America the Beautiful","The Star-Spangled Banner","Yankee Doodle","My Country Tis of Thee"],sol:"2.HS.1",skill:"National symbols"},
],
"2.HS.2":[
  {q:"What did Susan B. Anthony fight for?",correct:"The right of women to vote",options:["The end of the Civil War","The right of women to vote","The building of railroads","Freedom for enslaved people"],sol:"2.HS.2",skill:"Historical figures"},
  {q:"Who was Frederick Douglass?",correct:"A formerly enslaved man who became a leader in the fight to end slavery",options:["A President of the United States","A formerly enslaved man who became a leader in the fight to end slavery","A famous scientist","A Civil War general"],sol:"2.HS.2",skill:"Historical figures"},
  {q:"Who was Sojourner Truth?",correct:"A formerly enslaved woman who spoke out for freedom and women's rights",options:["A teacher who started public schools","A formerly enslaved woman who spoke out for freedom and women's rights","The first woman in space","A colonial leader"],sol:"2.HS.2",skill:"Historical figures"},
  {q:"What is Thomas Jefferson famous for?",correct:"Writing the Declaration of Independence",options:["Inventing electricity","Writing the Declaration of Independence","Being the first President","Building the White House"],sol:"2.HS.2",skill:"Historical figures"},
  {q:"What is Rosa Parks famous for?",correct:"Refusing to give up her bus seat, helping spark the civil rights movement",options:["Being the first woman to fly a plane","Refusing to give up her bus seat, helping spark the civil rights movement","Signing the Constitution","Writing the national anthem"],sol:"2.HS.2",skill:"Historical figures"},
  {q:"What is Thurgood Marshall famous for?",correct:"Being the first African American Supreme Court Justice",options:["Inventing the telephone","Being the first African American Supreme Court Justice","Writing the Bill of Rights","Leading the Underground Railroad"],sol:"2.HS.2",skill:"Historical figures"},
  {q:"Who was Clara Barton?",correct:"A nurse who founded the American Red Cross",options:["A president's wife","A nurse who founded the American Red Cross","The first female pilot","A famous poet"],sol:"2.HS.2",skill:"Historical figures"},
  {q:"What did Benjamin Franklin invent?",correct:"The lightning rod and bifocals, among other things",options:["The telephone","The lightbulb","The lightning rod and bifocals, among other things","The steam engine"],sol:"2.HS.2",skill:"Historical figures"},
],
"2.HS.3":[
  {q:"What are the five regions of the United States?",correct:"Northeast, Southeast, Midwest, Southwest, and West",options:["North, South, East, West, and Center","Northeast, Southeast, Midwest, Southwest, and West","Atlantic, Pacific, Gulf, Mountain, and Plains","Urban, Rural, Suburban, Desert, and Coast"],sol:"2.HS.3",skill:"U.S. regions"},
  {q:"Which river is the longest in the United States?",correct:"The Missouri River",options:["The Mississippi River","The Missouri River","The Ohio River","The Colorado River"],sol:"2.HS.3",skill:"U.S. geography"},
  {q:"What large mountain range runs along the west coast of the United States?",correct:"The Rocky Mountains",options:["The Appalachian Mountains","The Sierra Nevada","The Rocky Mountains","The Blue Ridge Mountains"],sol:"2.HS.3",skill:"U.S. geography"},
  {q:"What is the capital of Virginia?",correct:"Richmond",options:["Norfolk","Richmond","Alexandria","Virginia Beach"],sol:"2.HS.3",skill:"Virginia capital"},
  {q:"What ocean borders Virginia on the east?",correct:"The Atlantic Ocean",options:["The Pacific Ocean","The Atlantic Ocean","The Gulf of Mexico","The Indian Ocean"],sol:"2.HS.3",skill:"Virginia geography"},
  {q:"Which Great Lake is closest to Virginia?",correct:"None — Virginia does not border a Great Lake",options:["Lake Erie","Lake Michigan","Lake Ontario","None — Virginia does not border a Great Lake"],sol:"2.HS.3",skill:"Geography"},
  {q:"What is the Chesapeake Bay?",correct:"A large bay on the eastern coast of Virginia",options:["A lake in the mountains","A large bay on the eastern coast of Virginia","A river that forms a border","A national forest"],sol:"2.HS.3",skill:"Virginia geography"},
  {q:"What U.S. state is directly north of Virginia?",correct:"Maryland",options:["Pennsylvania","West Virginia","Maryland","Kentucky"],sol:"2.HS.3",skill:"Virginia borders"},
],
"2.HS.4":[
  {q:"What is profit?",correct:"Money left over after paying all the costs of making or selling something",options:["Money you borrow","Money left over after paying all the costs of making or selling something","The price of a product","Money you save in a bank"],sol:"2.HS.4",skill:"Profit"},
  {q:"What is a budget?",correct:"A plan for how to spend and save money",options:["A type of bank","A plan for how to spend and save money","A list of prices","A government tax"],sol:"2.HS.4",skill:"Budget"},
  {q:"Why do countries trade with each other?",correct:"To get goods and resources they cannot easily make or grow themselves",options:["To share the same money","To get goods and resources they cannot easily make or grow themselves","Because they have to by law","To share borders"],sol:"2.HS.4",skill:"Trade"},
  {q:"What is an import?",correct:"A good brought into a country from another country",options:["A good sent to another country","A good brought into a country from another country","A type of tax","A government job"],sol:"2.HS.4",skill:"Imports"},
  {q:"What is an export?",correct:"A good sent from one country to another country",options:["A good brought from another country","A good sent from one country to another country","A law about money","A bank account"],sol:"2.HS.4",skill:"Exports"},
  {q:"What is a tax?",correct:"Money collected by the government to pay for public services",options:["A type of sale","Money collected by the government to pay for public services","A bank loan","A store discount"],sol:"2.HS.4",skill:"Taxes"},
  {q:"What does it mean to save money?",correct:"To set money aside for later use",options:["To spend all your money at once","To set money aside for later use","To give all your money away","To borrow money"],sol:"2.HS.4",skill:"Saving"},
  {q:"What is a natural resource?",correct:"Something found in nature that people use, like trees, water, or coal",options:["A factory product","Something found in nature that people use, like trees, water, or coal","A tool made in a factory","A government building"],sol:"2.HS.4",skill:"Natural resources"},
],
},
"3rd Grade": {
"3.HS.1":[
  {q:"What is the purpose of a constitution?",correct:"To set up the rules and structure of a government",options:["To list famous leaders","To set up the rules and structure of a government","To declare war","To record history"],sol:"3.HS.1",skill:"Constitution"},
  {q:"How did ancient Athens influence modern democracy?",correct:"It was one of the first governments where citizens voted on laws",options:["It invented the printing press","It was one of the first governments where citizens voted on laws","It created the first army","It built the first roads"],sol:"3.HS.1",skill:"Ancient Greece"},
  {q:"What type of government did the Roman Republic have?",correct:"A republic where elected representatives made laws",options:["A direct democracy","A monarchy","A republic where elected representatives made laws","A military dictatorship"],sol:"3.HS.1",skill:"Ancient Rome"},
  {q:"What is a republic?",correct:"A government where citizens elect leaders to represent them",options:["A government run by one king","A government where all citizens vote on every law","A government where citizens elect leaders to represent them","A government run by the military"],sol:"3.HS.1",skill:"Republic"},
  {q:"What does separation of powers mean?",correct:"Government authority is divided among different branches",options:["Each country has its own government","Government authority is divided among different branches","The president makes all decisions","Only judges can make laws"],sol:"3.HS.1",skill:"Separation of powers"},
  {q:"What is a monarchy?",correct:"A government ruled by a king or queen",options:["A government elected by the people","A government ruled by a king or queen","A government with no leaders","A republic"],sol:"3.HS.1",skill:"Monarchy"},
  {q:"Which ancient civilization created the first Olympic Games?",correct:"Ancient Greece",options:["Ancient Rome","Ancient Egypt","Ancient China","Ancient Greece"],sol:"3.HS.1",skill:"Ancient Greece"},
  {q:"What is one way the United States government is similar to the ancient Roman Republic?",correct:"Both have elected representatives who make laws",options:["Both are led by an emperor","Both have no written laws","Both have elected representatives who make laws","Both began in the same century"],sol:"3.HS.1",skill:"Comparison"},
],
"3.HS.2":[
  {q:"Where was the ancient civilization of Mesopotamia located?",correct:"Between the Tigris and Euphrates rivers in modern-day Iraq",options:["Along the Nile River","In modern-day China","Between the Tigris and Euphrates rivers in modern-day Iraq","In southern Europe"],sol:"3.HS.2",skill:"Ancient civilizations"},
  {q:"What writing system did the ancient Egyptians use?",correct:"Hieroglyphics",options:["The alphabet","Hieroglyphics","Roman numerals","Cuneiform only"],sol:"3.HS.2",skill:"Ancient Egypt"},
  {q:"What were the pyramids used for?",correct:"As tombs for pharaohs",options:["As temples for worship only","As tombs for pharaohs","As forts for soldiers","As homes for priests"],sol:"3.HS.2",skill:"Ancient Egypt"},
  {q:"What did ancient China invent that we still use today?",correct:"Paper, printing, and the compass",options:["The wheel and axle","Paper, printing, and the compass","The steam engine","The refrigerator"],sol:"3.HS.2",skill:"Ancient China"},
  {q:"What was the Silk Road?",correct:"A trade route connecting China to Europe and the Middle East",options:["A road made of silk fabric","A trade route connecting China to Europe and the Middle East","A road built by the Romans","A path across the Sahara Desert"],sol:"3.HS.2",skill:"Trade"},
  {q:"What was the job of a pharaoh in ancient Egypt?",correct:"To rule the kingdom as both king and religious leader",options:["To build the pyramids personally","To rule the kingdom as both king and religious leader","To trade with other countries only","To teach children"],sol:"3.HS.2",skill:"Ancient Egypt"},
  {q:"What is a civilization?",correct:"An organized society with government, writing, and culture",options:["A small village","An organized society with government, writing, and culture","A type of army","A religious ceremony"],sol:"3.HS.2",skill:"Civilizations"},
  {q:"Why did many ancient civilizations form near rivers?",correct:"Rivers provided water for drinking, farming, and transportation",options:["Rivers were beautiful","Rivers provided water for drinking, farming, and transportation","Rivers helped with defense","Rivers made trade impossible"],sol:"3.HS.2",skill:"River civilizations"},
],
"3.HS.3":[
  {q:"What is latitude?",correct:"Lines that measure distance north or south of the equator",options:["Lines that measure east or west","Lines that measure distance north or south of the equator","The height of a mountain","The length of a river"],sol:"3.HS.3",skill:"Latitude"},
  {q:"What is longitude?",correct:"Lines that measure distance east or west of the Prime Meridian",options:["Lines that measure north or south","Lines that measure distance east or west of the Prime Meridian","The depth of the ocean","The width of a continent"],sol:"3.HS.3",skill:"Longitude"},
  {q:"What is the Prime Meridian?",correct:"The starting line at 0 degrees longitude",options:["The equator","The starting line at 0 degrees longitude","The international date line","A line dividing North and South America"],sol:"3.HS.3",skill:"Prime Meridian"},
  {q:"Which hemisphere is most of the United States in?",correct:"Northern and Western hemispheres",options:["Southern and Eastern","Northern and Eastern","Northern and Western hemispheres","Southern and Western"],sol:"3.HS.3",skill:"Hemispheres"},
  {q:"What is a physical map?",correct:"A map that shows landforms like mountains, rivers, and deserts",options:["A map showing roads","A map that shows landforms like mountains, rivers, and deserts","A map showing political borders","A map with population data"],sol:"3.HS.3",skill:"Types of maps"},
  {q:"What is a political map?",correct:"A map showing country and state borders and capitals",options:["A map of mountains","A map showing country and state borders and capitals","A map of weather patterns","A physical landform map"],sol:"3.HS.3",skill:"Types of maps"},
  {q:"What are the seven continents?",correct:"Africa, Antarctica, Asia, Australia, Europe, North America, South America",options:["Africa, Asia, Europe, America, Australia, Arctic, Atlantic","Africa, Antarctica, Asia, Australia, Europe, North America, South America","Asia, Africa, Europe, Oceania, Americas, Arctic, Pacific","All of the above"],sol:"3.HS.3",skill:"Continents"},
  {q:"Which is the largest ocean on Earth?",correct:"The Pacific Ocean",options:["The Atlantic Ocean","The Indian Ocean","The Pacific Ocean","The Arctic Ocean"],sol:"3.HS.3",skill:"Oceans"},
],
"3.HS.4":[
  {q:"What is specialization in an economy?",correct:"When people or places focus on making certain goods they are best at",options:["When everyone makes the same product","When people or places focus on making certain goods they are best at","When a country makes everything itself","When goods are given away for free"],sol:"3.HS.4",skill:"Specialization"},
  {q:"What is opportunity cost?",correct:"What you give up when you choose one thing over another",options:["The price of a product","What you give up when you choose one thing over another","The cost of shipping","How much profit you earn"],sol:"3.HS.4",skill:"Opportunity cost"},
  {q:"What does interdependence mean in economics?",correct:"Countries and people depending on each other to trade goods and services",options:["Making everything yourself","Countries and people depending on each other to trade goods and services","Refusing to trade with others","Making the same goods as everyone else"],sol:"3.HS.4",skill:"Interdependence"},
  {q:"Why might one country be better at producing a certain good than another?",correct:"Because of its natural resources, climate, or workers' skills",options:["Because it has more people","Because it has been around longer","Because of its natural resources, climate, or workers' skills","Because it is closer to the equator"],sol:"3.HS.4",skill:"Comparative advantage"},
  {q:"What is the role of a bank in an economy?",correct:"To keep money safe and lend it to people and businesses",options:["To make products","To keep money safe and lend it to people and businesses","To set prices for goods","To collect taxes"],sol:"3.HS.4",skill:"Banking"},
  {q:"What is currency?",correct:"The money used in a particular country",options:["A type of natural resource","The money used in a particular country","A trading ship","A list of prices"],sol:"3.HS.4",skill:"Currency"},
  {q:"What does 'supply and demand' mean?",correct:"Price goes up when something is rare; down when it is plentiful",options:["Making supply equal to demand at all times","Price goes up when something is rare; down when it is plentiful","The government sets all prices","Stores always have what you need"],sol:"3.HS.4",skill:"Supply and demand"},
  {q:"What is the difference between a good and a service?",correct:"A good is a physical product; a service is work done for others",options:["They are the same thing","A good is free; a service costs money","A good is a physical product; a service is work done for others","Services are always more expensive"],sol:"3.HS.4",skill:"Goods vs services"},
],
},
"4th Grade": {
"4.HS.1":[
  {q:"What is the Blue Ridge region of Virginia known for?",correct:"The Blue Ridge Mountains and Shenandoah Valley",options:["Flat farmland near the sea","The Blue Ridge Mountains and Shenandoah Valley","Major seaports","Dense swamps"],sol:"4.HS.1",skill:"VA regions"},
  {q:"What is the fall line in Virginia?",correct:"A boundary where rivers drop from the Piedmont to the Coastal Plain",options:["A mountain ridge","A boundary where rivers drop from the Piedmont to the Coastal Plain","A type of waterfall in the ocean","A border with North Carolina"],sol:"4.HS.1",skill:"Fall line"},
  {q:"What is the Coastal Plain region of Virginia also called?",correct:"The Tidewater region",options:["The Piedmont","The Valley and Ridge","The Tidewater region","The Blue Ridge"],sol:"4.HS.1",skill:"VA Coastal Plain"},
  {q:"Which Virginia region is best for growing crops because of its rich soil?",correct:"The Piedmont",options:["The Coastal Plain","The Blue Ridge","The Piedmont","The Appalachian Plateau"],sol:"4.HS.1",skill:"VA agriculture"},
  {q:"What type of land makes up most of the Coastal Plain?",correct:"Flat, low-lying land with tidal rivers",options:["High mountains","Flat, low-lying land with tidal rivers","Rolling hills","Rocky desert"],sol:"4.HS.1",skill:"VA geography"},
  {q:"Which Virginia region contains the highest elevation?",correct:"The Blue Ridge and Allegheny Mountains",options:["The Coastal Plain","The Piedmont","The Blue Ridge and Allegheny Mountains","The Valley and Ridge near the border"],sol:"4.HS.1",skill:"VA elevation"},
  {q:"What is the Appalachian Plateau region of Virginia like?",correct:"High, rugged land with coal deposits in the far southwest",options:["Flat farmland near the coast","High, rugged land with coal deposits in the far southwest","A region of sandy beaches","A heavily forested area near Washington D.C."],sol:"4.HS.1",skill:"VA regions"},
  {q:"How did Virginia's geography influence where people settled?",correct:"People settled near rivers and fertile land for water and farming",options:["People only settled in mountains","People settled near rivers and fertile land for water and farming","People avoided all rivers","People settled only in caves"],sol:"4.HS.1",skill:"Settlement patterns"},
],
"4.HS.2":[
  {q:"Who was Powhatan?",correct:"The chief of the Powhatan Confederacy when the English arrived",options:["The first English governor of Virginia","The chief of the Powhatan Confederacy when the English arrived","A Spanish explorer","The founder of Jamestown"],sol:"4.HS.2",skill:"Virginia Indians"},
  {q:"What did the Siouan-speaking tribes live?",correct:"In the Piedmont region of Virginia",options:["Along the coast","In the Piedmont region of Virginia","In the mountains only","Along the Chesapeake Bay"],sol:"4.HS.2",skill:"Virginia Indians"},
  {q:"What were longhouses?",correct:"Large wooden homes used by some Virginia Indian groups",options:["Underground shelters","Large wooden homes used by some Virginia Indian groups","Tents made of animal skins","Stone buildings"],sol:"4.HS.2",skill:"Virginia Indians"},
  {q:"How did Virginia Indians use the land?",correct:"Through hunting, fishing, gathering, and farming",options:["Only farming","Through hunting, fishing, gathering, and farming","Only gathering wild plants","Only trading with others"],sol:"4.HS.2",skill:"Virginia Indians"},
  {q:"What crops did Virginia Indians grow?",correct:"Corn, beans, and squash",options:["Wheat and cotton only","Corn, beans, and squash","Rice and tea","Potatoes and tomatoes only"],sol:"4.HS.2",skill:"Virginia Indians"},
  {q:"Which language group lived in the mountains of Virginia?",correct:"Siouan-speaking tribes",options:["Algonquian","Iroquoian","Siouan-speaking tribes","Cherokee only"],sol:"4.HS.2",skill:"Language groups"},
  {q:"What is the Powhatan Confederacy?",correct:"A group of about 30 tribes united under Chief Powhatan",options:["A group of English settlers","A group of about 30 tribes united under Chief Powhatan","A French trading company","A Virginia government branch"],sol:"4.HS.2",skill:"Powhatan Confederacy"},
  {q:"What impact did English settlement have on Virginia Indians?",correct:"It brought disease, conflict, and loss of land",options:["It helped Virginia Indians gain more land","It brought disease, conflict, and loss of land","It led to immediate peace","It had no effect"],sol:"4.HS.2",skill:"Impact of colonization"},
],
"4.HS.3":[
  {q:"Who was John Smith?",correct:"A leader of Jamestown who helped the colony survive early hardships",options:["The first governor of Virginia","A leader of Jamestown who helped the colony survive early hardships","An English king","A Virginia Indian chief"],sol:"4.HS.3",skill:"Jamestown"},
  {q:"What role did tobacco play in Jamestown's success?",correct:"It became the colony's first profitable cash crop",options:["It fed the colonists","It became the colony's first profitable cash crop","It was used only for trade with England","It was used as medicine"],sol:"4.HS.3",skill:"Tobacco"},
  {q:"What was the House of Burgesses?",correct:"The first elected legislature in the American colonies, founded in Virginia",options:["A meeting place for Virginia Indians","The first elected legislature in the American colonies, founded in Virginia","The governor's home","A type of market in Jamestown"],sol:"4.HS.3",skill:"Colonial government"},
  {q:"Why did the first Africans arrive in Virginia in 1619?",correct:"They were brought as bound laborers, beginning a long history of enslaved labor",options:["They came as traders","They were brought as bound laborers, beginning a long history of enslaved labor","They came as explorers","They came voluntarily for land"],sol:"4.HS.3",skill:"Slavery beginnings"},
  {q:"What was a major challenge the Jamestown colonists faced?",correct:"Lack of food, disease, and conflict with Virginia Indians",options:["Too much farmland","Lack of food, disease, and conflict with Virginia Indians","Very cold weather every year","Too many supplies"],sol:"4.HS.3",skill:"Jamestown challenges"},
  {q:"What was the Starving Time?",correct:"A winter in 1609-1610 when most Jamestown colonists died from starvation",options:["A drought in 1607","A winter in 1609-1610 when most Jamestown colonists died from starvation","A period when crops failed in 1650","A time when food was rationed by the king"],sol:"4.HS.3",skill:"Jamestown history"},
  {q:"What was John Rolfe's contribution to Virginia?",correct:"He developed a type of tobacco that could be successfully grown and sold",options:["He built the first church","He developed a type of tobacco that could be successfully grown and sold","He created the first map of Virginia","He signed the first peace treaty with Powhatan"],sol:"4.HS.3",skill:"John Rolfe"},
  {q:"When was Jamestown founded?",correct:"1607",options:["1492","1587","1607","1620"],sol:"4.HS.3",skill:"Key dates"},
],
"4.HS.4":[
  {q:"What is the Virginia General Assembly?",correct:"Virginia's legislature, made up of the Senate and House of Delegates",options:["The governor's office","Virginia's legislature, made up of the Senate and House of Delegates","The Virginia Supreme Court","A local city council"],sol:"4.HS.4",skill:"General Assembly"},
  {q:"How many branches does Virginia's state government have?",correct:"3",options:["1","2","3","4"],sol:"4.HS.4",skill:"Virginia government"},
  {q:"What is the job of the judicial branch in Virginia?",correct:"To interpret laws and settle legal disputes",options:["To make laws","To run the state","To interpret laws and settle legal disputes","To collect taxes"],sol:"4.HS.4",skill:"Judicial branch"},
  {q:"What document sets up Virginia's government?",correct:"The Virginia Constitution",options:["The Declaration of Independence","The Virginia Constitution","The U.S. Constitution only","The Magna Carta"],sol:"4.HS.4",skill:"Virginia Constitution"},
  {q:"What is the role of the Governor of Virginia?",correct:"To lead the executive branch and carry out state laws",options:["To make all state laws","To interpret the Constitution","To lead the executive branch and carry out state laws","To oversee all courts"],sol:"4.HS.4",skill:"Governor"},
  {q:"What does 'checks and balances' mean in government?",correct:"Each branch has ways to limit the power of the other branches",options:["The government checks all bank accounts","Each branch has ways to limit the power of the other branches","Only one branch has real power","Judges check on legislators"],sol:"4.HS.4",skill:"Checks and balances"},
  {q:"Who can vote in Virginia elections?",correct:"U.S. citizens who are 18 or older and registered to vote",options:["Anyone who lives in Virginia","U.S. citizens who are 18 or older and registered to vote","Only property owners","Only people born in Virginia"],sol:"4.HS.4",skill:"Voting"},
  {q:"What is a bill?",correct:"A proposed law that must be approved before it becomes a real law",options:["Money issued by the government","A proposed law that must be approved before it becomes a real law","A court decision","A governor's executive order"],sol:"4.HS.4",skill:"Legislative process"},
],
},
"5th Grade": {
"5.HS.1":[
  {q:"Who was Christopher Columbus?",correct:"An explorer who sailed from Spain and reached the Americas in 1492",options:["A Portuguese explorer who sailed to Africa","An explorer who sailed from Spain and reached the Americas in 1492","The first European to reach North America","An English explorer who founded Virginia"],sol:"5.HS.1",skill:"Explorers"},
  {q:"What motivated European nations to explore the Americas?",correct:"They wanted wealth, trade routes, and to spread Christianity",options:["They wanted to escape cold weather","They wanted wealth, trade routes, and to spread Christianity","They were sent by Native Americans","They had run out of land in Europe"],sol:"5.HS.1",skill:"Motivations for exploration"},
  {q:"What was the Columbian Exchange?",correct:"The transfer of plants, animals, people, and diseases between the Old and New Worlds",options:["A trade deal between Columbus and Spain","The transfer of plants, animals, people, and diseases between the Old and New Worlds","A type of Spanish ship","A treaty between European nations"],sol:"5.HS.1",skill:"Columbian Exchange"},
  {q:"What disease had the most devastating impact on Native Americans after European contact?",correct:"Smallpox",options:["Malaria","Smallpox","The flu","Typhoid"],sol:"5.HS.1",skill:"Impact on Native Americans"},
  {q:"Who was Hernando de Soto?",correct:"A Spanish explorer who explored the southeastern United States",options:["A Portuguese explorer who sailed to India","A Spanish explorer who explored the southeastern United States","A French explorer who founded Quebec","A Dutch explorer who settled New York"],sol:"5.HS.1",skill:"Explorers"},
  {q:"Why did Spain fund many early voyages to the Americas?",correct:"To claim land, find gold, and expand its empire",options:["To help Native Americans","To claim land, find gold, and expand its empire","Because they had too many ships","To spread English culture"],sol:"5.HS.1",skill:"Spanish colonization"},
  {q:"What is mercantilism?",correct:"An economic policy where colonies exist to enrich the parent country",options:["A type of farming","An economic policy where colonies exist to enrich the parent country","A system of trading without money","A type of government"],sol:"5.HS.1",skill:"Mercantilism"},
  {q:"When did Columbus first reach the Americas?",correct:"1492",options:["1607","1492","1620","1776"],sol:"5.HS.1",skill:"Key dates"},
],
"5.HS.2":[
  {q:"What was the main economic activity of the New England colonies?",correct:"Fishing, shipbuilding, and trade",options:["Growing tobacco","Mining gold","Fishing, shipbuilding, and trade","Growing rice and indigo"],sol:"5.HS.2",skill:"New England colonies"},
  {q:"What crop made the Southern colonies economically powerful?",correct:"Tobacco, rice, and indigo",options:["Wheat and corn only","Tobacco, rice, and indigo","Lumber and fish","Furs and silver"],sol:"5.HS.2",skill:"Southern colonies"},
  {q:"What is indentured servitude?",correct:"Working for several years without pay in exchange for passage to the colonies",options:["A paid job in the colonies","Working for several years without pay in exchange for passage to the colonies","A type of land agreement","Volunteering to fight in wars"],sol:"5.HS.2",skill:"Indentured servitude"},
  {q:"Why were enslaved Africans brought to the Southern colonies?",correct:"To provide forced labor on large plantations growing cash crops",options:["To teach farming methods","To provide forced labor on large plantations growing cash crops","As willing immigrants seeking freedom","To help build towns"],sol:"5.HS.2",skill:"Slavery in colonies"},
  {q:"What was the Mayflower Compact?",correct:"An early self-government agreement signed by the Pilgrims",options:["A ship's log from the Mayflower","An early self-government agreement signed by the Pilgrims","A peace treaty with Native Americans","A trade agreement with England"],sol:"5.HS.2",skill:"Self-government"},
  {q:"What were the Middle Colonies known for producing?",correct:"Grain crops like wheat — earning them the nickname 'breadbasket'",options:["Rice and indigo","Cotton and tobacco","Grain crops like wheat — earning them the nickname 'breadbasket'","Fish and lumber only"],sol:"5.HS.2",skill:"Middle colonies"},
  {q:"Which group founded Plymouth Colony in 1620?",correct:"The Pilgrims, who sought religious freedom",options:["Spanish missionaries","English merchants for profit","The Pilgrims, who sought religious freedom","French traders"],sol:"5.HS.2",skill:"Plymouth Colony"},
  {q:"What was the significance of the colonial assemblies?",correct:"They gave colonists experience in self-government before independence",options:["They were controlled entirely by the king","They gave colonists experience in self-government before independence","They had no real power","They handled military affairs only"],sol:"5.HS.2",skill:"Colonial self-government"},
],
"5.HS.3":[
  {q:"What were the Intolerable Acts?",correct:"Laws passed by Britain that punished colonists, especially in Massachusetts",options:["Laws protecting colonist rights","Laws passed by Britain that punished colonists, especially in Massachusetts","A colonial constitution","Trade agreements with France"],sol:"5.HS.3",skill:"Causes of revolution"},
  {q:"What happened at the Boston Massacre in 1770?",correct:"British soldiers fired into a crowd of colonists, killing five people",options:["Colonists destroyed tea in Boston Harbor","British soldiers fired into a crowd of colonists, killing five people","A major battle of the Revolution","The signing of the Declaration of Independence"],sol:"5.HS.3",skill:"Key events"},
  {q:"What was the Boston Tea Party?",correct:"Colonists disguised as Indians dumped British tea into the harbor to protest the tea tax",options:["A celebration of colonial trade","Colonists disguised as Indians dumped British tea into the harbor to protest the tea tax","A battle between colonists and the British Navy","A meeting of colonial leaders"],sol:"5.HS.3",skill:"Key events"},
  {q:"Who was Thomas Paine?",correct:"The author of Common Sense, which argued for American independence",options:["A British general","The author of Common Sense, which argued for American independence","The second President","A colonial judge"],sol:"5.HS.3",skill:"Key figures"},
  {q:"What was the significance of Valley Forge?",correct:"It was where Washington's army endured a brutal winter and trained to fight better",options:["It was the site of the final battle","It was where Washington's army endured a brutal winter and trained to fight better","It was where the Declaration was signed","It was a British stronghold"],sol:"5.HS.3",skill:"Key events"},
  {q:"Who were the Loyalists during the American Revolution?",correct:"Colonists who remained loyal to the British king",options:["Soldiers who fought for independence","Colonists who remained loyal to the British king","French allies of the colonists","Colonists who fled to Canada after the war"],sol:"5.HS.3",skill:"Sides in the Revolution"},
  {q:"What role did France play in the American Revolution?",correct:"France provided military and financial support to the colonists",options:["France fought against the colonists","France provided military and financial support to the colonists","France stayed neutral","France helped Britain"],sol:"5.HS.3",skill:"Key groups"},
  {q:"What ended the American Revolution?",correct:"The Treaty of Paris in 1783, which recognized U.S. independence",options:["The signing of the Constitution","The Battle of Yorktown alone","The Treaty of Paris in 1783, which recognized U.S. independence","The death of King George III"],sol:"5.HS.3",skill:"Key dates"},
],
"5.HS.4":[
  {q:"What is the purpose of the Bill of Rights?",correct:"To protect individual freedoms from the government",options:["To create new laws","To protect individual freedoms from the government","To set up branches of government","To declare independence"],sol:"5.HS.4",skill:"Bill of Rights"},
  {q:"What does the Second Amendment protect?",correct:"The right to keep and bear arms",options:["Freedom of speech","The right to keep and bear arms","The right to a fair trial","Freedom of religion"],sol:"5.HS.4",skill:"Bill of Rights"},
  {q:"What was the Louisiana Purchase?",correct:"The U.S. buying a large territory from France in 1803, doubling the country's size",options:["Spain selling Florida to the U.S.","The U.S. buying a large territory from France in 1803, doubling the country's size","The purchase of Alaska from Russia","A treaty with Native Americans"],sol:"5.HS.4",skill:"Louisiana Purchase"},
  {q:"Who led the Lewis and Clark Expedition?",correct:"Meriwether Lewis and William Clark, sent by President Jefferson",options:["Daniel Boone and Davy Crockett","Meriwether Lewis and William Clark, sent by President Jefferson","George Washington and John Adams","Sacagawea and York"],sol:"5.HS.4",skill:"Westward expansion"},
  {q:"What is Manifest Destiny?",correct:"The belief that the U.S. was meant to expand across the entire continent",options:["A law about moving west","The belief that the U.S. was meant to expand across the entire continent","A treaty with Mexico","A plan to settle Alaska"],sol:"5.HS.4",skill:"Manifest Destiny"},
  {q:"What was the Indian Removal Act?",correct:"A law that forced Native Americans off their eastern lands to move west",options:["A law protecting Native American land","A law that forced Native Americans off their eastern lands to move west","A treaty ending conflict with Native Americans","A law allowing Native Americans to vote"],sol:"5.HS.4",skill:"Impact on Native Americans"},
  {q:"What is the Trail of Tears?",correct:"The forced march of the Cherokee Nation to Indian Territory, during which thousands died",options:["A famous hiking trail in the Appalachians","The forced march of the Cherokee Nation to Indian Territory, during which thousands died","A route used by pioneers to reach Oregon","A path used by Lewis and Clark"],sol:"5.HS.4",skill:"Impact on Native Americans"},
  {q:"How did westward expansion affect Native Americans?",correct:"It led to the loss of their lands, cultures, and lives",options:["It helped Native Americans gain new resources","It led to the loss of their lands, cultures, and lives","It had no effect on most Native Americans","It helped Native Americans form new governments"],sol:"5.HS.4",skill:"Impact on Native Americans"},
],
},
},
};

function mergeSOLExpansion() {
  if (typeof SOL_QUESTIONS === "undefined") {
    console.warn("mergeSOLExpansion: SOL_QUESTIONS not loaded yet");
    return;
  }

  for (const subject in SOL_EXPANSION) {
    if (!SOL_QUESTIONS[subject]) SOL_QUESTIONS[subject] = {};
    for (const grade in SOL_EXPANSION[subject]) {
      if (!SOL_QUESTIONS[subject][grade]) SOL_QUESTIONS[subject][grade] = {};
      for (const standard in SOL_EXPANSION[subject][grade]) {
        const newQs = SOL_EXPANSION[subject][grade][standard];
        if (!SOL_QUESTIONS[subject][grade][standard]) {
          SOL_QUESTIONS[subject][grade][standard] = newQs;
        } else {
          // Deduplicate by question text before merging
          const existingQs = SOL_QUESTIONS[subject][grade][standard].map(q => q.q);
          const filtered = newQs.filter(q => !existingQs.includes(q.q));
          SOL_QUESTIONS[subject][grade][standard].push(...filtered);
        }
      }
    }
  }
  console.log("SOL expansion merged:", 
    Object.keys(SOL_EXPANSION).map(s => {
      const total = Object.values(SOL_EXPANSION[s]).reduce((acc, grade) =>
        acc + Object.values(grade).reduce((a, qs) => a + qs.length, 0), 0);
      return s + ":" + total;
    }).join(", ")
  );
}

// Auto-run merge when this file loads (SOL_QUESTIONS is already defined above)
mergeSOLExpansion();
