/* ═══════════════════════════════════════════
   SOL-STANDARDS.JS — Virginia Standards of Learning
   Based on 2023 Math SOL, 2018 Science SOL,
   2024 English SOL, 2023 History & Social Science SOL
   
   Schema: subject → grade → standards[]
   Each standard: { code, title, strand, skills[], description }
   ═══════════════════════════════════════════ */

const SOL_STANDARDS = {
  // ═══════════════════════════════════════
  // MATHEMATICS — 2023 Standards of Learning
  // Strands: NS (Number & Number Sense), CE (Computation & Estimation),
  //          MG (Measurement & Geometry), PS (Probability & Statistics),
  //          PFA (Patterns, Functions & Algebra)
  // ═══════════════════════════════════════
  "Math": {
    "1st Grade": [
      { code: "1.NS.1", strand: "Number & Number Sense", title: "Count and Write 0-110",
        description: "Count forward orally by ones to 110, starting at any number. Count backward orally by ones when given any number between 1 and 30. Write numerals 0-110.",
        skills: ["Count forward by ones to 110", "Count backward from 30", "Write numerals 0-110", "Count by twos, fives, and tens to 110"] },
      { code: "1.NS.2", strand: "Number & Number Sense", title: "Place Value to 110",
        description: "Understand place value concepts for numbers 0-110. Group objects into tens and ones.",
        skills: ["Group objects into tens and ones", "Identify place value of each digit", "Read and write two-digit numbers", "Compare numbers using place value"] },
      { code: "1.NS.3", strand: "Number & Number Sense", title: "Ordinal Numbers",
        description: "Use ordinal numbers first through tenth to describe position in a sequence.",
        skills: ["Identify ordinal positions first through tenth", "Use ordinal words in context"] },
      { code: "1.NS.4", strand: "Number & Number Sense", title: "Compare and Order Numbers",
        description: "Compare and order whole numbers 0-110 using symbols and words.",
        skills: ["Compare two numbers using <, >, =", "Order up to 3 numbers least to greatest", "Use a number line for comparison"] },
      { code: "1.NS.5", strand: "Number & Number Sense", title: "Fractions: Halves and Fourths",
        description: "Represent and identify halves and fourths of a region/set using models.",
        skills: ["Identify halves of a whole", "Identify fourths of a whole", "Use models for fractions", "Equal parts vs unequal parts"] },
      { code: "1.CE.1", strand: "Computation & Estimation", title: "Addition Facts to 20",
        description: "Solve single-step addition problems with whole numbers where sums are 20 or less.",
        skills: ["Add with sums to 10", "Add with sums to 20", "Use strategies: counting on, doubles, making ten", "Solve word problems with addition"] },
      { code: "1.CE.2", strand: "Computation & Estimation", title: "Subtraction Facts to 20",
        description: "Solve single-step subtraction problems with whole numbers where differences are 20 or less.",
        skills: ["Subtract within 10", "Subtract within 20", "Use strategies: counting back, related facts", "Solve word problems with subtraction"] },
      { code: "1.CE.3", strand: "Computation & Estimation", title: "Addition and Subtraction Relationship",
        description: "Demonstrate understanding of the relationship between addition and subtraction.",
        skills: ["Identify fact families", "Use addition to check subtraction", "Missing addend problems"] },
      { code: "1.MG.1", strand: "Measurement & Geometry", title: "Nonstandard Measurement",
        description: "Use nonstandard units to measure and compare length, weight, and volume.",
        skills: ["Measure length with nonstandard units", "Compare objects by length", "Compare objects by weight", "Compare containers by volume"] },
      { code: "1.MG.2", strand: "Measurement & Geometry", title: "Time: Hour and Half Hour",
        description: "Tell time to the hour and half hour using analog and digital clocks.",
        skills: ["Read analog clock to the hour", "Read analog clock to half hour", "Read digital clock", "Relate time to daily activities"] },
      { code: "1.MG.3", strand: "Measurement & Geometry", title: "Coins and Their Values",
        description: "Identify and determine the value of pennies, nickels, dimes, and quarters.",
        skills: ["Identify penny, nickel, dime, quarter", "Know value of each coin", "Count collections of like coins", "Count collections of mixed coins"] },
      { code: "1.MG.4", strand: "Measurement & Geometry", title: "Geometric Shapes",
        description: "Identify, describe, compare, and combine plane figures (triangles, squares, rectangles, circles).",
        skills: ["Identify basic 2D shapes", "Describe attributes of shapes", "Combine shapes to make new shapes", "Identify shapes in the environment"] },
      { code: "1.PS.1", strand: "Probability & Statistics", title: "Data Collection and Graphs",
        description: "Collect, organize, and represent data using object graphs, picture graphs, and tables.",
        skills: ["Collect data by counting", "Organize data in a table", "Create picture graphs", "Read and interpret simple graphs"] },
      { code: "1.PFA.1", strand: "Patterns, Functions & Algebra", title: "Patterns",
        description: "Identify, describe, extend, and create repeating and growing patterns.",
        skills: ["Identify repeating patterns", "Extend a pattern", "Create patterns with objects", "Describe the rule of a pattern"] },
    ],
    "2nd Grade": [
      { code: "2.NS.1", strand: "Number & Number Sense", title: "Place Value to 999",
        description: "Read, write, and identify place value of each digit in a three-digit number.",
        skills: ["Read three-digit numbers", "Write three-digit numbers", "Identify hundreds, tens, ones", "Expanded form"] },
      { code: "2.NS.2", strand: "Number & Number Sense", title: "Compare and Order to 999",
        description: "Compare and order whole numbers 0-999 using symbols, a number line, and words.",
        skills: ["Compare using <, >, =", "Order numbers least to greatest", "Use number line for comparison", "Round to nearest ten"] },
      { code: "2.NS.3", strand: "Number & Number Sense", title: "Fractions: Halves, Thirds, Fourths",
        description: "Represent and identify halves, thirds, and fourths using models.",
        skills: ["Model halves of a whole", "Model thirds of a whole", "Model fourths of a whole", "Compare unit fractions"] },
      { code: "2.CE.1", strand: "Computation & Estimation", title: "Addition and Subtraction to 999",
        description: "Solve single-step and multistep addition and subtraction problems with sums to 999.",
        skills: ["Add two-digit numbers", "Add three-digit numbers", "Subtract two-digit numbers", "Subtract three-digit numbers with regrouping", "Solve two-step word problems"] },
      { code: "2.CE.2", strand: "Computation & Estimation", title: "Fluency: Addition/Subtraction to 20",
        description: "Demonstrate fluency with addition and subtraction within 20.",
        skills: ["Recall addition facts to 20", "Recall subtraction facts to 20", "Use mental math strategies", "Apply facts in problem solving"] },
      { code: "2.CE.3", strand: "Computation & Estimation", title: "Estimation Strategies",
        description: "Estimate sums and differences using compatible numbers and rounding.",
        skills: ["Use front-end estimation", "Use rounding to estimate", "Determine reasonableness of answers", "Use compatible numbers"] },
      { code: "2.MG.1", strand: "Measurement & Geometry", title: "Linear Measurement",
        description: "Estimate and measure length using U.S. Customary and metric units.",
        skills: ["Measure in inches", "Measure in centimeters", "Estimate lengths", "Compare measurements"] },
      { code: "2.MG.2", strand: "Measurement & Geometry", title: "Time to Nearest 5 Minutes",
        description: "Tell time to the nearest five minutes using analog and digital clocks.",
        skills: ["Read clock to five minutes", "Distinguish AM and PM", "Determine elapsed time in hours"] },
      { code: "2.MG.3", strand: "Measurement & Geometry", title: "Geometry: Sides and Angles",
        description: "Identify and describe plane figures by number of sides, vertices, and angles.",
        skills: ["Count sides of polygons", "Count vertices", "Identify right angles", "Compare shapes by attributes"] },
      { code: "2.PS.1", strand: "Probability & Statistics", title: "Data with Bar Graphs",
        description: "Collect, organize, and represent data in pictographs and bar graphs.",
        skills: ["Read bar graphs", "Create bar graphs", "Compare data categories", "Answer questions about data"] },
      { code: "2.PFA.1", strand: "Patterns, Functions & Algebra", title: "Numeric Patterns",
        description: "Identify, describe, extend, and create numeric patterns.",
        skills: ["Skip count by 2s, 5s, 10s", "Identify pattern rules", "Extend patterns", "Find missing numbers in patterns"] },
    ],
    "3rd Grade": [
      { code: "3.NS.1", strand: "Number & Number Sense", title: "Place Value to 999,999",
        description: "Read, write, and identify place value of each digit in a six-digit number.",
        skills: ["Read six-digit numbers", "Write six-digit numbers in standard form", "Write in expanded form", "Identify place value to hundred thousands", "Round to nearest ten, hundred, thousand"] },
      { code: "3.NS.2", strand: "Number & Number Sense", title: "Compare and Order to 999,999",
        description: "Compare and order whole numbers to 999,999 using symbols and a number line.",
        skills: ["Compare using <, >, =", "Order sets of numbers", "Use a number line", "Justify comparisons"] },
      { code: "3.NS.3", strand: "Number & Number Sense", title: "Fractions with Models",
        description: "Represent fractions (halves through tenths) using models, and compare unit fractions.",
        skills: ["Name fractions using models", "Represent fractions on number line", "Compare unit fractions", "Identify equivalent fractions with models"] },
      { code: "3.CE.1", strand: "Computation & Estimation", title: "Multiplication and Division through 10×10",
        description: "Represent and solve multiplication and division facts through 10×10.",
        skills: ["Multiply through 10×10", "Divide through 10×10", "Use arrays and groups", "Recall multiplication facts", "Relate multiplication and division"] },
      { code: "3.CE.2", strand: "Computation & Estimation", title: "Addition and Subtraction within 9,999",
        description: "Estimate and solve single-step and multistep problems with addition and subtraction.",
        skills: ["Add within 9,999", "Subtract within 9,999 with regrouping", "Estimate sums and differences", "Solve multistep word problems"] },
      { code: "3.CE.3", strand: "Computation & Estimation", title: "Add/Subtract Fractions (Like Denominators)",
        description: "Add and subtract fractions with like denominators using models.",
        skills: ["Add fractions with same denominator", "Subtract fractions with same denominator", "Use fraction models", "Solve word problems with fractions"] },
      { code: "3.MG.1", strand: "Measurement & Geometry", title: "U.S. Customary and Metric Measurement",
        description: "Estimate and measure length, liquid volume, and weight/mass.",
        skills: ["Measure in inches, feet, yards", "Measure in cm, m", "Estimate measurements", "Choose appropriate units"] },
      { code: "3.MG.2", strand: "Measurement & Geometry", title: "Area and Perimeter",
        description: "Determine area and perimeter of rectangles and squares.",
        skills: ["Find perimeter by adding sides", "Find area by counting square units", "Use formulas for area of rectangles", "Solve contextual problems"] },
      { code: "3.MG.3", strand: "Measurement & Geometry", title: "Polygons and Angles",
        description: "Identify and describe polygons with 10 or fewer sides and classify angles.",
        skills: ["Name polygons by sides", "Identify right angles", "Classify angles as right, acute, obtuse", "Combine and subdivide shapes"] },
      { code: "3.MG.4", strand: "Measurement & Geometry", title: "Time and Temperature",
        description: "Tell time to the nearest minute and solve elapsed time problems.",
        skills: ["Read clock to nearest minute", "Calculate elapsed time", "Read thermometers", "Solve time word problems"] },
      { code: "3.PS.1", strand: "Probability & Statistics", title: "Data Cycle with Bar/Picture Graphs",
        description: "Apply the data cycle: formulate questions, collect data, represent in graphs, analyze.",
        skills: ["Formulate data questions", "Collect data (up to 25 points)", "Create bar and picture graphs", "Analyze and interpret data"] },
      { code: "3.PS.2", strand: "Probability & Statistics", title: "Probability: Certain, Likely, Unlikely",
        description: "Determine probability as certain, likely, unlikely, or impossible.",
        skills: ["Identify certain events", "Identify impossible events", "Describe likelihood", "Conduct simple experiments"] },
      { code: "3.PFA.1", strand: "Patterns, Functions & Algebra", title: "Patterns and Function Tables",
        description: "Identify, describe, extend, and create single-operation input/output patterns.",
        skills: ["Complete input/output tables", "Identify the rule", "Extend patterns", "Use addition/subtraction/multiplication rules"] },
      { code: "3.PFA.2", strand: "Patterns, Functions & Algebra", title: "Equality and Equations",
        description: "Use the equals sign to represent equality and solve one-step equations.",
        skills: ["Understand equals sign as balance", "Solve for missing number", "Write equations from word problems", "Verify solutions"] },
    ],
    "4th Grade": [
      { code: "4.NS.1", strand: "Number & Number Sense", title: "Place Value: Whole Numbers and Decimals",
        description: "Read, write, represent, and identify place value of whole numbers to millions and decimals through thousandths.",
        skills: ["Read and write numbers to millions", "Understand decimal place value (tenths, hundredths, thousandths)", "Round whole numbers and decimals", "Compare and order decimals"] },
      { code: "4.NS.2", strand: "Number & Number Sense", title: "Fractions and Mixed Numbers",
        description: "Represent, compare, and order fractions and mixed numbers.",
        skills: ["Represent fractions on number lines", "Identify equivalent fractions", "Compare fractions with unlike denominators", "Convert between improper fractions and mixed numbers"] },
      { code: "4.CE.1", strand: "Computation & Estimation", title: "Multiplication and Division",
        description: "Estimate and solve problems with multiplication (up to 2-digit × 2-digit) and division (up to 2-digit divisor).",
        skills: ["Multiply up to 4-digit by 1-digit", "Multiply 2-digit by 2-digit", "Divide with 1-digit divisor", "Interpret remainders in context", "Estimate products and quotients"] },
      { code: "4.CE.2", strand: "Computation & Estimation", title: "Add/Subtract Fractions and Decimals",
        description: "Add and subtract fractions (like and unlike denominators) and decimals through thousandths.",
        skills: ["Add fractions with like denominators", "Add fractions with unlike denominators", "Add and subtract decimals", "Solve word problems with fractions and decimals"] },
      { code: "4.CE.3", strand: "Computation & Estimation", title: "Fluency: Multiplication/Division",
        description: "Demonstrate fluency with multiplication facts through 12×12 and related division facts.",
        skills: ["Recall multiplication facts to 12×12", "Recall related division facts", "Apply facts in multi-step problems", "Use properties of multiplication"] },
      { code: "4.MG.1", strand: "Measurement & Geometry", title: "Measurement Conversions",
        description: "Solve problems involving conversions within U.S. Customary and metric systems.",
        skills: ["Convert inches to feet to yards", "Convert cups to pints to quarts to gallons", "Convert within metric system", "Solve measurement word problems"] },
      { code: "4.MG.2", strand: "Measurement & Geometry", title: "Lines, Angles, and Symmetry",
        description: "Identify and draw points, lines, line segments, rays, angles, and lines of symmetry.",
        skills: ["Identify parallel and perpendicular lines", "Draw and measure angles with protractor", "Identify lines of symmetry", "Classify quadrilaterals"] },
      { code: "4.MG.3", strand: "Measurement & Geometry", title: "Area, Perimeter, and Transformations",
        description: "Determine area and perimeter and investigate geometric transformations.",
        skills: ["Find area and perimeter of rectangles", "Find area of combined rectangles", "Identify translations, reflections, rotations", "Solve multi-step measurement problems"] },
      { code: "4.PS.1", strand: "Probability & Statistics", title: "Data Cycle with Line Graphs",
        description: "Apply the data cycle with line graphs, bar graphs, and data tables.",
        skills: ["Create and read line graphs", "Interpret trends in data", "Compare data sets", "Formulate questions and collect data"] },
      { code: "4.PFA.1", strand: "Patterns, Functions & Algebra", title: "Number Patterns and Sequences",
        description: "Identify, describe, extend, and create patterns involving whole numbers, fractions, and decimals.",
        skills: ["Identify arithmetic patterns", "Extend growing patterns", "Complete function tables", "Write rules for patterns"] },
      { code: "4.PFA.2", strand: "Patterns, Functions & Algebra", title: "Equality and Properties",
        description: "Demonstrate understanding of equality and the properties of addition and multiplication.",
        skills: ["Apply commutative property", "Apply associative property", "Apply distributive property", "Use properties to simplify"] },
    ],
    "5th Grade": [
      { code: "5.NS.1", strand: "Number & Number Sense", title: "Fractions and Decimals Equivalency",
        description: "Identify and represent equivalency between fractions and decimals; compare and order fractions and decimals.",
        skills: ["Convert fractions to decimals", "Convert decimals to fractions", "Compare fractions and decimals", "Order sets of fractions and decimals"] },
      { code: "5.NS.2", strand: "Number & Number Sense", title: "Prime and Composite Numbers",
        description: "Identify prime and composite numbers and determine prime factorization up to 100.",
        skills: ["Identify prime numbers", "Identify composite numbers", "Find prime factorization", "Use factor trees"] },
      { code: "5.CE.1", strand: "Computation & Estimation", title: "Whole Number Operations",
        description: "Estimate, solve, and justify solutions to multi-step problems with whole numbers.",
        skills: ["Add and subtract within 5 digits", "Multiply up to 2-digit by 3-digit", "Divide with 2-digit divisors", "Interpret remainders", "Solve multi-step word problems"] },
      { code: "5.CE.2", strand: "Computation & Estimation", title: "Fraction Operations",
        description: "Add and subtract fractions with unlike denominators; multiply a whole number and proper fraction.",
        skills: ["Find least common denominator", "Add fractions with unlike denominators", "Subtract fractions with unlike denominators", "Multiply whole number by fraction with models"] },
      { code: "5.CE.3", strand: "Computation & Estimation", title: "Decimal Operations",
        description: "Estimate and solve problems with addition, subtraction, multiplication, and division of decimals.",
        skills: ["Add and subtract decimals", "Multiply decimals", "Divide decimals", "Estimate with decimals", "Solve decimal word problems"] },
      { code: "5.CE.4", strand: "Computation & Estimation", title: "Order of Operations",
        description: "Simplify numerical expressions with whole numbers using order of operations.",
        skills: ["Apply PEMDAS/order of operations", "Evaluate expressions with parentheses", "Describe operation sequence", "Simplify multi-operation expressions"] },
      { code: "5.MG.1", strand: "Measurement & Geometry", title: "Metric Measurement",
        description: "Solve problems involving length, mass, and liquid volume using metric units.",
        skills: ["Choose appropriate metric units", "Convert within metric system", "Estimate metric measurements", "Solve metric word problems"] },
      { code: "5.MG.2", strand: "Measurement & Geometry", title: "Perimeter, Area, and Volume",
        description: "Solve problems involving perimeter, area of triangles, and volume of rectangular prisms.",
        skills: ["Find area of right triangles", "Develop volume formula", "Calculate volume of rectangular prisms", "Distinguish perimeter, area, volume"] },
      { code: "5.MG.3", strand: "Measurement & Geometry", title: "Angles and Triangles",
        description: "Classify and measure angles and triangles; prove triangle angle sum is 180°.",
        skills: ["Classify angles (right, acute, obtuse, straight)", "Classify triangles by sides and angles", "Measure angles with protractor", "Find unknown angle in triangle"] },
      { code: "5.PS.1", strand: "Probability & Statistics", title: "Data Cycle: Line Plots and Stem-and-Leaf",
        description: "Apply the data cycle with line plots and stem-and-leaf plots.",
        skills: ["Create line plots with fractions/decimals", "Create stem-and-leaf plots", "Analyze data distributions", "Draw conclusions from data"] },
      { code: "5.PS.2", strand: "Probability & Statistics", title: "Measures of Center and Range",
        description: "Determine mean, median, mode, and range of data sets.",
        skills: ["Calculate mean (average)", "Find median", "Identify mode", "Calculate range"] },
      { code: "5.PS.3", strand: "Probability & Statistics", title: "Probability and Counting Principle",
        description: "Determine probability using sample spaces and the Fundamental Counting Principle.",
        skills: ["Construct sample spaces", "Use tree diagrams", "Apply counting principle", "Determine probability of outcomes"] },
      { code: "5.PFA.1", strand: "Patterns, Functions & Algebra", title: "Patterns with Fractions and Decimals",
        description: "Identify, describe, extend, and create increasing and decreasing patterns.",
        skills: ["Extend patterns with fractions", "Extend patterns with decimals", "Identify rules in function tables", "Solve pattern word problems"] },
      { code: "5.PFA.2", strand: "Patterns, Functions & Algebra", title: "Variables and Expressions",
        description: "Investigate and use variables to write and evaluate expressions.",
        skills: ["Understand variables as unknowns", "Write equations with variables", "Write expressions from word phrases", "Create word problems from equations"] },
    ],
  },

  // ═══════════════════════════════════════
  // SCIENCE — 2018 Standards of Learning
  // (To be fully populated in next build phase)
  // ═══════════════════════════════════════
  "Science": {
    "1st Grade": [
      { code: "1.1", strand: "Scientific Investigation", title: "Scientific Investigation", description: "Demonstrate understanding of scientific reasoning, logic, and the nature of science.", skills: ["Ask questions", "Make predictions", "Conduct investigations", "Record data"] },
      { code: "1.2", strand: "Force & Motion", title: "Force, Motion, and Energy", description: "Investigate and understand that moving objects exhibit different kinds of motion.", skills: ["Describe motion", "Push and pull forces", "Speed and direction"] },
      { code: "1.3", strand: "Matter", title: "Matter", description: "Investigate and understand how different common materials interact with water.", skills: ["Solids, liquids, gases", "Dissolving", "Floating and sinking"] },
      { code: "1.4", strand: "Life Processes", title: "Plants", description: "Investigate and understand that plants have basic life needs and functional parts.", skills: ["Parts of a plant", "What plants need", "Plant life cycle"] },
      { code: "1.5", strand: "Life Processes", title: "Animals", description: "Investigate and understand that animals have basic life needs and characteristics.", skills: ["Animal needs", "Animal coverings", "Animal habitats"] },
      { code: "1.6", strand: "Earth Science", title: "Weather and Seasons", description: "Investigate and understand the basic relationships between weather and seasons.", skills: ["Describe weather", "Four seasons", "Weather measurement tools"] },
      { code: "1.7", strand: "Earth Science", title: "Sun and Earth", description: "Investigate and understand the relationship of the sun to Earth.", skills: ["Day and night", "Shadows", "Sun as energy source"] },
      { code: "1.8", strand: "Earth Resources", title: "Natural Resources", description: "Investigate and understand that natural resources are limited.", skills: ["Identify natural resources", "Conservation", "Recycling and reusing"] },
    ],
    "2nd Grade": [
      { code: "2.1", strand: "Scientific Investigation", title: "Scientific Investigation", description: "Demonstrate understanding of scientific reasoning and investigation.", skills: ["Plan investigations", "Measure and record", "Draw conclusions", "Communicate results"] },
      { code: "2.2", strand: "Force & Motion", title: "Sound", description: "Investigate and understand that sound is created by vibrations.", skills: ["How sound is made", "Sound travels through materials", "Pitch and volume"] },
      { code: "2.3", strand: "Matter", title: "States of Matter", description: "Investigate and understand basic properties of solids, liquids, and gases.", skills: ["Identify states of matter", "Properties of each state", "Changes of state"] },
      { code: "2.4", strand: "Life Processes", title: "Life Cycles", description: "Investigate and understand that plants and animals go through life cycles.", skills: ["Plant life cycles", "Animal life cycles", "Compare life cycles"] },
      { code: "2.5", strand: "Living Systems", title: "Habitats", description: "Investigate and understand that living things are part of a system.", skills: ["Types of habitats", "Food chains", "Living vs nonliving things"] },
      { code: "2.6", strand: "Earth Science", title: "Weather", description: "Investigate and understand basic types, changes, and patterns of weather.", skills: ["Types of weather", "Weather patterns", "Weather tools and measurement"] },
      { code: "2.7", strand: "Earth Science", title: "Earth's Resources", description: "Investigate and understand that weather and seasonal changes affect plants and animals.", skills: ["Seasonal changes", "Animal adaptations", "Plant responses to seasons"] },
      { code: "2.8", strand: "Earth Science", title: "Water Cycle", description: "Investigate and understand that plants and animals depend on water.", skills: ["Water cycle basics", "Uses of water", "Water conservation"] },
    ],
    "3rd Grade": [
      { code: "3.1", strand: "Scientific Investigation", title: "Scientific Method", description: "Demonstrate understanding of scientific reasoning and the nature of science.", skills: ["Form hypotheses", "Design experiments", "Collect and organize data", "Make inferences"] },
      { code: "3.2", strand: "Force & Motion", title: "Simple Machines", description: "Investigate and understand simple machines and their uses.", skills: ["Identify simple machines", "Lever, pulley, inclined plane", "How machines help do work"] },
      { code: "3.3", strand: "Matter", title: "Properties of Matter", description: "Investigate and understand that objects can be described by physical properties.", skills: ["Mass, volume, color", "Magnetic properties", "Conductors and insulators", "Dissolving"] },
      { code: "3.4", strand: "Life Processes", title: "Animal Adaptations", description: "Investigate and understand that adaptations allow animals to satisfy life needs.", skills: ["Behavioral adaptations", "Physical adaptations", "Camouflage and mimicry", "Adaptations for survival"] },
      { code: "3.5", strand: "Living Systems", title: "Ecosystems", description: "Investigate and understand relationships among organisms in aquatic and terrestrial food chains.", skills: ["Producers, consumers, decomposers", "Food chains", "Predator and prey", "Energy flow"] },
      { code: "3.6", strand: "Earth Science", title: "Soil", description: "Investigate and understand that soil is a natural resource.", skills: ["Components of soil", "Soil types", "Soil conservation", "How soil is formed"] },
      { code: "3.7", strand: "Earth Science", title: "Water Cycle", description: "Investigate and understand the major components of the water cycle.", skills: ["Evaporation", "Condensation", "Precipitation", "Collection"] },
      { code: "3.8", strand: "Earth Science", title: "Natural Events", description: "Investigate and understand that natural events and human influences can affect the survival of species.", skills: ["Pollution effects", "Habitat destruction", "Conservation efforts", "Endangered species"] },
    ],
    "4th Grade": [
      { code: "4.1", strand: "Scientific Investigation", title: "Scientific Investigation", description: "Plan and conduct investigations using scientific method.", skills: ["Variables in experiments", "Fair testing", "Repeated trials", "Data analysis"] },
      { code: "4.2", strand: "Force & Motion", title: "Electricity", description: "Investigate and understand characteristics and interactions of moving objects.", skills: ["Static electricity", "Circuits", "Conductors/insulators", "Magnetism and electricity"] },
      { code: "4.3", strand: "Matter", title: "Matter Properties", description: "Investigate and understand that matter is composed of basic elements.", skills: ["Atoms and molecules", "Elements", "Physical changes", "Chemical changes"] },
      { code: "4.4", strand: "Life Processes", title: "Plant Anatomy", description: "Investigate and understand basic plant anatomy and life processes.", skills: ["Photosynthesis basics", "Plant cells", "Transpiration", "Plant reproduction"] },
      { code: "4.5", strand: "Living Systems", title: "Virginia Ecosystems", description: "Investigate and understand how organisms interact within their environment.", skills: ["Virginia habitats", "Food webs", "Organism interactions", "Community and population"] },
      { code: "4.6", strand: "Earth Science", title: "Weather", description: "Investigate and understand how weather conditions and phenomena occur.", skills: ["Cloud types", "Fronts and air masses", "Severe weather", "Weather prediction"] },
      { code: "4.7", strand: "Earth Science", title: "Earth's Surface", description: "Investigate and understand the organization and features of Earth's surface.", skills: ["Rocks and minerals", "Weathering and erosion", "Landforms", "Geologic processes"] },
      { code: "4.8", strand: "Earth Resources", title: "Resources and Conservation", description: "Investigate and understand that Virginia has important natural resources.", skills: ["Renewable vs nonrenewable", "Virginia's resources", "Conservation practices", "Human impact on resources"] },
    ],
    "5th Grade": [
      { code: "5.1", strand: "Scientific Investigation", title: "Scientific Investigation", description: "Plan and conduct investigations with multiple trials.", skills: ["Experimental design", "Independent/dependent variables", "Data tables and graphs", "Scientific conclusions"] },
      { code: "5.2", strand: "Force & Motion", title: "Sound", description: "Investigate and understand how sound is created and transmitted.", skills: ["Vibration and sound", "Sound through different mediums", "Pitch and frequency", "Volume and amplitude"] },
      { code: "5.3", strand: "Force & Motion", title: "Light", description: "Investigate and understand that visible light has certain properties.", skills: ["Transparent, translucent, opaque", "Reflection and refraction", "Light spectrum/prism", "Color and light"] },
      { code: "5.4", strand: "Matter", title: "Matter and Chemistry", description: "Investigate and understand that matter has properties that can be observed and measured.", skills: ["Physical properties", "Chemical properties", "Mixtures and solutions", "Changes in matter"] },
      { code: "5.5", strand: "Living Systems", title: "Cells", description: "Investigate and understand that organisms are made of cells.", skills: ["Cell parts and functions", "Plant vs animal cells", "Unicellular vs multicellular", "Cell processes"] },
      { code: "5.6", strand: "Living Systems", title: "Ocean Environment", description: "Investigate and understand characteristics of the ocean environment.", skills: ["Ocean zones", "Marine organisms", "Ocean floor features", "Tides and currents"] },
      { code: "5.7", strand: "Earth Science", title: "Earth's Surface Changes", description: "Investigate and understand how Earth's surface is constantly changing.", skills: ["Plate tectonics basics", "Earthquakes and volcanoes", "Weathering and erosion", "Rock cycle"] },
      { code: "5.8", strand: "Earth Science", title: "Space", description: "Investigate and understand the organization of the solar system.", skills: ["Planets and their properties", "Earth-Sun-Moon system", "Phases of the moon", "Day/night and seasons"] },
    ],
  },

  // ═══════════════════════════════════════
  // ENGLISH/READING — 2024 Standards of Learning
  // (Placeholder - to be fully populated)
  // ═══════════════════════════════════════
  "English": {
    "1st Grade": [
      { code: "1.R.1", strand: "Reading", title: "Phonics and Word Recognition", description: "Apply knowledge of phonics and word analysis skills to decode words.", skills: ["Short and long vowels", "Consonant blends", "Sight words", "Word families"] },
      { code: "1.R.2", strand: "Reading", title: "Fluency and Comprehension", description: "Read with purpose and understanding.", skills: ["Read grade-level text", "Retell stories", "Identify main idea", "Make predictions"] },
      { code: "1.W.1", strand: "Writing", title: "Writing", description: "Write to communicate ideas for a variety of purposes.", skills: ["Write simple sentences", "Use capital letters and periods", "Spell common words", "Write about personal experiences"] },
    ],
    "2nd Grade": [
      { code: "2.R.1", strand: "Reading", title: "Word Analysis", description: "Use phonics, word patterns, and context clues to read and understand words.", skills: ["Prefixes and suffixes", "Compound words", "Context clues", "Syllable patterns"] },
      { code: "2.R.2", strand: "Reading", title: "Comprehension", description: "Demonstrate comprehension of fiction and nonfiction texts.", skills: ["Identify characters and setting", "Sequence events", "Compare and contrast", "Identify cause and effect"] },
      { code: "2.W.1", strand: "Writing", title: "Writing Process", description: "Write in a variety of forms with focus on narrative and informational.", skills: ["Write paragraphs", "Use descriptive words", "Edit for spelling and grammar", "Organize ideas logically"] },
    ],
    "3rd Grade": [
      { code: "3.R.1", strand: "Reading", title: "Word Study", description: "Apply word analysis strategies and develop vocabulary.", skills: ["Use roots and affixes", "Use dictionary skills", "Multiple-meaning words", "Synonyms and antonyms"] },
      { code: "3.R.2", strand: "Reading", title: "Reading Comprehension", description: "Read and demonstrate comprehension of fiction and nonfiction.", skills: ["Identify theme and main idea", "Use text features", "Make inferences", "Summarize text"] },
      { code: "3.W.1", strand: "Writing", title: "Writing Composition", description: "Write clearly and effectively for different purposes.", skills: ["Write organized paragraphs", "Use transition words", "Revise and edit", "Write narratives and informational pieces"] },
    ],
    "4th Grade": [
      { code: "4.R.1", strand: "Reading", title: "Vocabulary Development", description: "Expand vocabulary through word study and context.", skills: ["Greek and Latin roots", "Context clues in text", "Figurative language", "Content-area vocabulary"] },
      { code: "4.R.2", strand: "Reading", title: "Reading Analysis", description: "Read, interpret, and analyze fiction and nonfiction texts.", skills: ["Identify author's purpose", "Compare texts", "Draw conclusions", "Distinguish fact from opinion"] },
      { code: "4.W.1", strand: "Writing", title: "Writing for Different Purposes", description: "Write effectively for narrative, persuasive, and informational purposes.", skills: ["Write multi-paragraph compositions", "Use evidence to support ideas", "Write with voice and style", "Edit and revise independently"] },
    ],
    "5th Grade": [
      { code: "5.R.1", strand: "Reading", title: "Word Analysis and Vocabulary", description: "Use word analysis and vocabulary strategies to comprehend text.", skills: ["Analyze word structure", "Use context to determine meaning", "Understand figurative language", "Build content vocabulary"] },
      { code: "5.R.2", strand: "Reading", title: "Literary and Informational Text", description: "Read, interpret, and evaluate a variety of fiction and nonfiction.", skills: ["Analyze point of view", "Evaluate arguments", "Synthesize information from multiple sources", "Identify literary devices"] },
      { code: "5.W.1", strand: "Writing", title: "Research and Composition", description: "Write clearly and effectively using research and various forms.", skills: ["Conduct short research projects", "Cite sources", "Write persuasive essays", "Use revision strategies"] },
    ],
  },

  // ═══════════════════════════════════════
  // HISTORY & SOCIAL SCIENCE — 2023 Standards of Learning
  // (Placeholder - to be fully populated)
  // ═══════════════════════════════════════
  "History": {
    "1st Grade": [
      { code: "1.HS.1", strand: "Civics", title: "Good Citizens", description: "Understand what it means to be a responsible citizen.", skills: ["Rules and laws", "Rights and responsibilities", "Community helpers", "Patriotic symbols"] },
      { code: "1.HS.2", strand: "History", title: "American Holidays and Symbols", description: "Recognize the significance of American holidays and symbols.", skills: ["American flag", "Pledge of Allegiance", "National holidays", "Famous Americans"] },
      { code: "1.HS.3", strand: "Geography", title: "Maps and Globes", description: "Use basic map skills to describe location and geography.", skills: ["Read simple maps", "Cardinal directions", "Land and water on globe", "Map symbols"] },
      { code: "1.HS.4", strand: "Economics", title: "Goods, Services, and Making Choices", description: "Understand basic economic concepts.", skills: ["Goods vs services", "Wants vs needs", "Producers and consumers", "Making choices"] },
    ],
    "2nd Grade": [
      { code: "2.HS.1", strand: "Civics", title: "Government and Community", description: "Understand contributions of citizens and the purpose of government.", skills: ["Local government", "Community roles", "Voting", "Problem-solving in communities"] },
      { code: "2.HS.2", strand: "History", title: "Historical Contributions", description: "Study contributions of notable Americans and other cultures.", skills: ["Famous Americans", "Cultural contributions", "Historical timelines", "Past and present"] },
      { code: "2.HS.3", strand: "Geography", title: "Geography of Virginia and the US", description: "Use maps and globes to develop understanding of geography.", skills: ["Continents and oceans", "Virginia geography", "Physical features", "Map reading skills"] },
      { code: "2.HS.4", strand: "Economics", title: "Resources and Trade", description: "Understand how people use resources and trade.", skills: ["Natural resources", "Human resources", "Scarcity", "Trade and exchange"] },
    ],
    "3rd Grade": [
      { code: "3.HS.1", strand: "Civics", title: "Ancient Civilizations: Government", description: "Study how ancient civilizations contributed to government concepts.", skills: ["Ancient Greece democracy", "Roman republic", "Rule of law", "Government structures"] },
      { code: "3.HS.2", strand: "History", title: "Ancient World History", description: "Study ancient civilizations including Egypt, Greece, Rome, China.", skills: ["Ancient Egypt", "Ancient Greece", "Ancient Rome", "Ancient China", "Contributions to modern world"] },
      { code: "3.HS.3", strand: "Geography", title: "World Geography", description: "Use maps to study geographic features and regions of the world.", skills: ["World regions", "Climate zones", "Physical geography", "Human geography"] },
      { code: "3.HS.4", strand: "Economics", title: "Economic Systems", description: "Understand how different economic systems work.", skills: ["Supply and demand", "Specialization", "Economic choices", "Trading between regions"] },
    ],
    "4th Grade": [
      { code: "4.HS.1", strand: "Virginia Studies", title: "Virginia Geography", description: "Understand the geography and physical features of Virginia.", skills: ["Five regions of Virginia", "Virginia rivers and bodies of water", "Climate of Virginia", "Natural resources"] },
      { code: "4.HS.2", strand: "Virginia Studies", title: "Virginia's First People", description: "Study the first people and cultures of Virginia.", skills: ["Indigenous peoples of Virginia", "Cultural practices", "Interaction with environment", "Powhatan Confederacy"] },
      { code: "4.HS.3", strand: "Virginia Studies", title: "Colonial Virginia", description: "Study the colonization of Virginia and its development.", skills: ["Jamestown settlement", "Colonial life", "Slavery in Virginia", "Virginia's role in the Revolution"] },
      { code: "4.HS.4", strand: "Virginia Studies", title: "Virginia Government", description: "Understand Virginia's government and its relationship to national government.", skills: ["Virginia Constitution", "Three branches", "Local government", "Citizen participation"] },
    ],
    "5th Grade": [
      { code: "5.HS.1", strand: "US History", title: "Early America and Exploration", description: "Study the Age of Exploration and early American settlements.", skills: ["European explorers", "Reasons for exploration", "Impact on indigenous peoples", "Colonial settlements"] },
      { code: "5.HS.2", strand: "US History", title: "Colonial America", description: "Study the development of the American colonies.", skills: ["Thirteen colonies", "Colonial economy", "Self-governance", "Road to revolution"] },
      { code: "5.HS.3", strand: "US History", title: "American Revolution", description: "Study the causes, key events, and outcomes of the American Revolution.", skills: ["Causes of the Revolution", "Key battles and figures", "Declaration of Independence", "Formation of new government"] },
      { code: "5.HS.4", strand: "US History", title: "New Nation and Westward Expansion", description: "Study the growth of the United States.", skills: ["Constitution and Bill of Rights", "Westward expansion", "Manifest Destiny", "Impact on Native Americans"] },
    ],
  },
};

// ── SOL Question Engine ──
// Uses pre-baked SOL_QUESTIONS as PRIMARY source (no API needed)
const SOLEngine = {
  // Get all standards for a subject and grade
  getStandards(subject, grade) {
    return SOL_STANDARDS[subject]?.[grade] || [];
  },

  // Get all subjects
  getSubjects() {
    return Object.keys(SOL_STANDARDS);
  },

  // Get all strands for a subject+grade
  getStrands(subject, grade) {
    const stds = this.getStandards(subject, grade);
    return [...new Set(stds.map(s => s.strand))];
  },

  // ── Fetch questions for a specific standard from pre-baked bank ──
  fetchForStandard(standard, count, grade) {
    if (typeof SOL_QUESTIONS === 'undefined') return [];
    // Map grade display name to subject lookup
    const subjectMap = { 'Math': 'Math', 'Science': 'Science', 'English': 'English', 'History': 'History' };
    // Find subject by checking which subject contains this standard code
    let subject = null;
    for (const subj of Object.keys(SOL_QUESTIONS)) {
      if (SOL_QUESTIONS[subj]?.[grade]?.[standard.code]) {
        subject = subj;
        break;
      }
    }
    if (!subject) return [];
    const bank = SOL_QUESTIONS[subject]?.[grade]?.[standard.code] || [];
    if (!bank.length) return [];
    // Shuffle and return requested count
    const shuffled = [...bank].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
  },

  // Generate a mixed quiz across all standards for a subject+grade
  async generateQuiz(subject, grade, totalQuestions, onProgress) {
    const standards = this.getStandards(subject, grade);
    if (!standards.length) return [];

    const qsPerStandard = Math.max(1, Math.ceil(totalQuestions / standards.length));
    let allQs = [];

    for (let i = 0; i < standards.length; i++) {
      if (onProgress) onProgress(`Loading ${subject} ${standards[i].code}... (${allQs.length}/${totalQuestions})`);
      const qs = this.fetchForStandard(standards[i], qsPerStandard, grade);
      allQs.push(...qs);
      if (allQs.length >= totalQuestions) break;
    }

    // Shuffle and trim
    return allQs.sort(() => Math.random() - 0.5).slice(0, totalQuestions);
  },

  // Generate a quiz for a specific strand
  async generateStrandQuiz(subject, grade, strand, totalQuestions, onProgress) {
    const standards = this.getStandards(subject, grade).filter(s => s.strand === strand);
    if (!standards.length) return [];

    const qsPerStandard = Math.max(2, Math.ceil(totalQuestions / standards.length));
    let allQs = [];

    for (const std of standards) {
      if (onProgress) onProgress(`Loading ${std.code}...`);
      const qs = this.fetchForStandard(std, qsPerStandard, grade);
      allQs.push(...qs);
      if (allQs.length >= totalQuestions) break;
    }

    return allQs.sort(() => Math.random() - 0.5).slice(0, totalQuestions);
  },
};
