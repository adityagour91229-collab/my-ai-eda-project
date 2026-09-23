import { Slide } from '../types/presentation';

export const slidesData: Slide[] = [
  {
    id: 1,
    title: "Exploratory Data Analysis (EDA)",
    subtitle: "B.Tech Computer Science & Engineering · Major Project Presentation",
    category: "Title Slide",
    durationMinutes: 1,
    bulletPoints: [
      "Department of Computer Science & Engineering",
      "Academic Year 2025–2026 · Project Viva Voce",
      "Pioneering Data-Driven Understanding & Quality Assurance",
      "Presented by: Aditya Kumar"
    ],
    simpleNotes: {
      plainSummary: "The introductory slide introducing the student (Aditya Kumar) and project topic (Exploratory Data Analysis in Computer Science).",
      hinglishExplanation: "यह पहला टाइटल स्लाइड है। इसमें आपका नाम (Aditya Kumar), B.Tech CSE ब्रांच, और प्रोजेक्ट का नाम 'Exploratory Data Analysis' लिखा है।",
      whatToSayToExaminer: "Good morning respected teachers and examiners. My name is Aditya Kumar from B.Tech Computer Science. Today I am presenting my project on Exploratory Data Analysis.",
      keyBullets: [
        "Topic: Exploratory Data Analysis (EDA)",
        "Student: Aditya Kumar (B.Tech CSE)",
        "Branch: Computer Science & Engineering",
        "Purpose: Final Year Project Presentation & Viva Defense"
      ],
      oneLineCode: "# Start of Data Analysis Project\nimport pandas as pd\nimport numpy as np"
    },
    speakerNotes: {
      script: "Respected project coordinators, internal and external examiners. A very pleasant good morning to all of you. My name is Aditya Kumar, student of B.Tech Computer Science and Engineering. Today, I am proud to present my project on 'Exploratory Data Analysis'—commonly known as EDA—which forms the analytical bedrock of modern machine learning and computational statistics.",
      keyTakeaway: "Set a confident, academic tone. Introduce yourself clearly.",
      vivaTip: "Examiners may immediately ask: 'Why did you choose EDA?' Answer: 'Because 80% of machine learning success depends on data quality and preprocessing. If data is bad, machine learning models fail.'",
      commonQuestion: "Who pioneered EDA and in which year?",
      answer: "John W. Tukey, an American mathematician and statistician, formally introduced Exploratory Data Analysis in 1977."
    },
    keywords: ["EDA", "Computer Science", "B.Tech Presentation", "Aditya Kumar"]
  },
  {
    id: 2,
    title: "Introduction to EDA",
    subtitle: "What is EDA and why do we do it?",
    category: "Fundamentals",
    durationMinutes: 1.5,
    bulletPoints: [
      "What is Data Analysis? Inspecting, cleaning, and transforming raw data into useful information.",
      "What is EDA? An approach developed by John Tukey (1977) to explore and understand data before applying any model.",
      "Detective vs Judge: EDA acts like a detective finding clues; modeling acts like a judge giving a final verdict.",
      "Core Goal: Discover patterns, spot anomalies, test assumptions, and check data hygiene."
    ],
    simpleNotes: {
      plainSummary: "EDA means exploring and understanding the data visually and statistically before building any machine learning model.",
      hinglishExplanation: "EDA का सीधा मतलब है: डेटा पर मॉडल लगाने से पहले डेटा को अच्छी तरह समझना, देखना कि उसमें क्या गलतियाँ हैं और क्या पैटर्न हैं। जैसे डॉक्टर दवाई देने से पहले मरीज की जांच करता है।",
      whatToSayToExaminer: "Sir, EDA stands for Exploratory Data Analysis. It was introduced by John Tukey in 1977. Its goal is to analyze datasets to summarize their main characteristics, often using visual methods, before doing any machine learning modeling.",
      keyBullets: [
        "EDA = Exploratory Data Analysis (First step in Data Science)",
        "Introduced by John Tukey in 1977",
        "Acts like a 'Detective' looking for patterns and mistakes in data",
        "Helps avoid feeding bad data into algorithms"
      ],
      oneLineCode: "df.info()  # Check total rows, columns, and data types"
    },
    speakerNotes: {
      script: "To begin, what is Exploratory Data Analysis? It is the investigative phase of data science. Before training complex machine learning models, we must inspect our dataset, discover anomalies, and understand patterns. Think of EDA like a detective gathering clues before reaching a verdict.",
      keyTakeaway: "EDA emphasizes visual charts and summary numbers over premature modeling.",
      vivaTip: "Say clearly: 'EDA is like medical diagnosis: understand the patient first, prescribe medicine later.'",
      commonQuestion: "How is Exploratory Data Analysis different from Confirmatory Data Analysis?",
      answer: "Exploratory (EDA) looks for hidden patterns without strict assumptions (like a detective). Confirmatory (CDA) uses formal statistical hypothesis testing to confirm a pre-existing belief."
    },
    keywords: ["Data Analysis", "John Tukey", "Detective Approach", "Data Hygiene"]
  },
  {
    id: 3,
    title: "Core Objectives of EDA",
    subtitle: "The 5 Main Goals of Data Exploration",
    category: "Objectives",
    durationMinutes: 1.5,
    bulletPoints: [
      "1. Understand Dataset Structure: Check row count, column names, and data types (df.shape, df.info()).",
      "2. Detect Missing Values: Find empty cells and null values (df.isnull().sum()).",
      "3. Spot Outliers and Anomalies: Identify impossible numbers like Age = -5 or Salary = ₹10 Crore by mistake.",
      "4. Find Patterns and Trends: See how variables relate to each other (df.corr()).",
      "5. Prepare Features for Machine Learning: Ensure only clean, relevant features reach the ML model."
    ],
    simpleNotes: {
      plainSummary: "The 5 primary goals of EDA: understand dataset size, find missing data, detect outliers, uncover trends, and clean features for ML.",
      hinglishExplanation: "EDA के 5 मुख्य मकसद हैं: 1. डेटा का साइज और प्रकार जानना, 2. खाली जगहें (Nulls) ढूंढना, 3. अजीब या गलत वैल्यूज (Outliers) पकड़ना, 4. आपस में क्या रिश्ता है देखना, 5. मशीन लर्निंग के लिए डेटा तैयार करना।",
      whatToSayToExaminer: "Sir, there are 5 main objectives of EDA: understanding the dataset structure, detecting missing values, catching outliers, identifying patterns, and preparing clean features for machine learning algorithms.",
      keyBullets: [
        "1. Understand Shape: How many rows and columns?",
        "2. Find Missing Data: Where are the empty cells?",
        "3. Catch Outliers: Are there extreme or faulty values?",
        "4. Discover Trends: Which features move together?",
        "5. Prepare for ML: Clean features prevent bad model predictions"
      ],
      oneLineCode: "print(df.shape); df.isnull().sum()"
    },
    speakerNotes: {
      script: "Why do we perform EDA? There are five core goals: understanding data dimensions, identifying missing records, catching extreme outliers, uncovering trends, and preparing clean feature matrices for machine learning algorithms.",
      keyTakeaway: "Good data preparation guarantees high model accuracy.",
      vivaTip: "Remember the Golden Rule: 'Garbage In, Garbage Out'. If we skip EDA, bad data ruins the model.",
      commonQuestion: "What happens if we train a machine learning model without doing EDA?",
      answer: "The model will learn from noise, biased outliers, and missing patterns, leading to wrong predictions and high real-world failure rates."
    },
    keywords: ["Objectives", "Missing Values", "Outliers", "Patterns", "Shape"]
  },
  {
    id: 4,
    title: "The Step-by-Step EDA Process",
    subtitle: "6 Clear Stages from Raw Data to Actionable Insights",
    category: "Methodology",
    durationMinutes: 2,
    bulletPoints: [
      "Step 1: Data Collection — Loading CSV, Excel, SQL, or API data.",
      "Step 2: Data Cleaning — Removing null values and duplicate rows.",
      "Step 3: Data Inspection — Checking df.shape, df.dtypes, and df.describe().",
      "Step 4: Data Visualization — Drawing histograms, box plots, and scatter charts.",
      "Step 5: Pattern & Outlier Detection — Checking correlations and extreme points.",
      "Step 6: Summary & Decision Making — Selecting final features for modeling."
    ],
    simpleNotes: {
      plainSummary: "EDA follows a 6-step sequential pipeline: Collect → Clean → Inspect → Visualize → Detect Patterns → Make Decisions.",
      hinglishExplanation: "EDA एक 6-कदम का सीधा प्रोसेस है: पहले डेटा लाओ (Collect), फिर कचरा साफ करो (Clean), फिर डेटा को देखो (Inspect), फिर चार्ट्स बनाओ (Visualize), फिर गलतियां और पैटर्न पकड़ो (Pattern Detection), और अंत में मॉडल के लिए तैयार करो।",
      whatToSayToExaminer: "Sir, the EDA pipeline consists of six sequential stages: Data Collection, Data Cleaning, Initial Data Inspection, Visualization, Pattern and Anomaly Detection, and finally generating Insights for model training.",
      keyBullets: [
        "Step 1: Collection (Load CSV / Database)",
        "Step 2: Cleaning (Fix missing values & duplicates)",
        "Step 3: Exploration (Check summary numbers)",
        "Step 4: Visualization (Plot charts)",
        "Step 5: Pattern Detection (Find correlations & outliers)",
        "Step 6: Insights (Ready for ML training)"
      ],
      oneLineCode: "# 1-line pipeline\ndf = pd.read_csv('data.csv').drop_duplicates().dropna()"
    },
    speakerNotes: {
      script: "Here is the six-stage EDA pipeline. It is a systematic process where we collect raw data, clean inconsistencies, explore summary statistics, visualize distributions, detect correlations, and finalize clean features for deployment.",
      keyTakeaway: "Data cleaning and inspection take up nearly 70% of a data engineer's time.",
      vivaTip: "Mention that this process is iterative: if visualization reveals a strange pattern, we go back and check the cleaning step.",
      commonQuestion: "Which step in the EDA process takes the most time?",
      answer: "Data Cleaning takes approximately 60% to 80% of the total time because raw real-world data is always messy and inconsistent."
    },
    keywords: ["Pipeline", "Workflow", "Process", "Lifecycle", "Steps"]
  },
  {
    id: 5,
    title: "Data Cleaning Techniques",
    subtitle: "Fixing Missing Values, Duplicates & Data Inconsistencies",
    category: "Data Hygiene",
    durationMinutes: 2,
    bulletPoints: [
      "Handling Missing Values: Drop empty rows (df.dropna()) or fill them with Mean or Median (df.fillna()).",
      "Removing Duplicate Rows: Delete identical duplicate rows using df.drop_duplicates().",
      "Standardizing Inconsistent Text: Fix capitalization errors (e.g., 'delhi' vs 'Delhi') using .str.title().",
      "Correcting Data Types: Convert string numbers into float or int using .astype(float)."
    ],
    simpleNotes: {
      plainSummary: "Data cleaning fixes 4 common problems: missing values (impute with median), duplicate rows (drop), messy text (lowercase/strip), and wrong data types (cast).",
      hinglishExplanation: "डेटा क्लीनिंग में 4 काम होते हैं: 1. खाली जगह भरना (Mean या Median से), 2. डुप्लीकेट रो हटाना (drop_duplicates), 3. स्पेलिंग और कैपिटल लेटर सही करना, 4. टेक्स्ट को नंबर में बदलना (astype).",
      whatToSayToExaminer: "Sir, data cleaning resolves four major flaws: handling missing values through dropping or median imputation, removing duplicate rows, standardizing text formatting, and casting columns to their correct numeric or datetime data types.",
      keyBullets: [
        "Missing Data: If small drop; if important, fill with Median",
        "Duplicate Rows: Drop identical records to prevent bias",
        "Text Inconsistency: Standardize formatting ('USA' vs 'usa')",
        "Type Casting: Convert string '25' to integer number 25"
      ],
      oneLineCode: "df['age'] = df['age'].fillna(df['age'].median())"
    },
    speakerNotes: {
      script: "Real-world data is full of errors. In data cleaning, we solve missing values by filling them with the median or dropping them if negligible. We remove duplicate rows so models don't overfit, fix text case inconsistencies, and convert string numbers into proper numeric types.",
      keyTakeaway: "Use Median for filling skewed data because it is not affected by extreme outliers.",
      vivaTip: "Examiner question: 'Why use Median instead of Mean for missing values?' Answer: 'Because Mean is easily distorted by extreme values (like one billionaire in a salary column), while Median stays stable.'",
      commonQuestion: "What is Imputation in data cleaning?",
      answer: "Imputation is the statistical technique of replacing missing data with substitute values such as the Mean, Median, or Mode."
    },
    keywords: ["Data Cleaning", "Imputation", "Drop Duplicates", "Null Values", "Pandas"]
  },
  {
    id: 6,
    title: "Descriptive Statistics",
    subtitle: "Mean, Median, Mode & Standard Deviation Explained Simply",
    category: "Statistics",
    durationMinutes: 2,
    bulletPoints: [
      "Mean (Average): Sum of all values divided by total count. Very sensitive to extreme outliers.",
      "Median (Middle Value): The exact middle number when sorted. Robust and immune to outliers.",
      "Mode (Most Frequent): The number or category that appears most often.",
      "Range: Difference between Maximum and Minimum value (Max - Min).",
      "Standard Deviation (σ): Measures how spread out the numbers are around the average."
    ],
    simpleNotes: {
      plainSummary: "Descriptive statistics summarize continuous data into single numbers: Mean (average), Median (middle), Mode (most common), and Std Dev (spread).",
      hinglishExplanation: "Descriptive Statistics डेटा का सारांश देता है: Mean = औसत (यह आउटलायर से बिगड़ जाता है), Median = बीच की वैल्यू (यह आउटलायर से नहीं बिगड़ता), Mode = जो सबसे ज्यादा बार आए, Std Dev = डेटा कितना फैला हुआ है।",
      whatToSayToExaminer: "Sir, descriptive statistics summarize our data. The key difference to note is between Mean and Median: Mean is pulled heavily by extreme outliers, whereas Median remains stable. Standard deviation tells us how widely spread our data points are around the average.",
      keyBullets: [
        "Mean (Average): Sensitive to extreme numbers",
        "Median (Middle): Safe and robust against outliers",
        "Mode: Most common value (useful for categories)",
        "Std Dev (σ): How widely spread the data is",
        "Quick command: df.describe() calculates all of these in 1 line!"
      ],
      oneLineCode: "df.describe()  # Gives count, mean, std, min, 25%, 50%, 75%, max"
    },
    speakerNotes: {
      script: "Descriptive statistics allow us to summarize thousands of rows into key metrics. The Mean gives the central average, but if there is an extreme outlier, it gets distorted. That is why we use Median for skewed data like salaries. Standard deviation measures how much the values deviate from the mean.",
      keyTakeaway: "Always check both Mean and Median. If Mean >> Median, the data is positively skewed by high outliers.",
      vivaTip: "Example to give: 'If 5 people earn ₹20,000 and Elon Musk walks in, the Mean salary jumps to ₹10 Crore, but the Median stays around ₹20,000. That's why Median is better for salaries!'",
      commonQuestion: "What is the relation between Mean, Median, and Mode in a normal distribution?",
      answer: "In a perfectly symmetrical normal distribution (bell curve), Mean = Median = Mode."
    },
    keywords: ["Mean", "Median", "Mode", "Standard Deviation", "df.describe()"]
  },
  {
    id: 7,
    title: "Data Visualization in EDA",
    subtitle: "5 Essential Charts Every Computer Scientist Must Know",
    category: "Visualization",
    durationMinutes: 2,
    bulletPoints: [
      "1. Bar Chart: Best for comparing counts across categories (e.g., Python vs Java users).",
      "2. Histogram: Best for seeing the shape of continuous numbers (bell curve or skewed).",
      "3. Box Plot: Best for showing 5-number summary (Min, Q1, Median, Q3, Max) and spotting outliers.",
      "4. Scatter Plot: Best for seeing the relationship between two numbers (e.g., Study Hours vs Marks).",
      "5. Pie Chart: Best for showing parts of a whole (proportions under 5 slices)."
    ],
    simpleNotes: {
      plainSummary: "Charts reveal patterns human eyes cannot spot in raw numbers: Bar charts (categories), Histograms (distributions), Box plots (outliers), Scatter plots (relationships).",
      hinglishExplanation: "चार्ट्स से डेटा तुरंत समझ आता है: Bar Chart = कैटेगरीज गिनने के लिए, Histogram = डेटा का फैलाव देखने के लिए, Box Plot = आउटलायर पकड़ने के लिए, Scatter Plot = दो चीजों के बीच रिश्ता देखने के लिए।",
      whatToSayToExaminer: "Sir, visualization is crucial because human vision detects patterns faster than scanning raw tables. We use Bar Charts for categorical comparisons, Histograms for distribution shape, Box Plots for outlier detection, and Scatter Plots to observe correlations between two numerical variables.",
      keyBullets: [
        "Bar Chart: Compare distinct groups (sns.barplot)",
        "Histogram: Distribution and bell-curves (sns.histplot)",
        "Box Plot: Interquartile range & outliers (sns.boxplot)",
        "Scatter Plot: Relationship between X and Y (sns.scatterplot)",
        "Golden Lesson: Visuals catch what summary statistics hide"
      ],
      oneLineCode: "import seaborn as sns; sns.boxplot(x='category', y='value', data=df)"
    },
    speakerNotes: {
      script: "Visualization turns numbers into actionable visual signals. A histogram shows whether our data follows a bell curve or is skewed. A box plot instantly reveals if any data points lie beyond the standard statistical fences. And scatter plots reveal whether two variables move together linearly.",
      keyTakeaway: "Anscombe's Quartet proved that four datasets can have the exact same mean and variance, but look totally different on a chart.",
      vivaTip: "Always mention Seaborn and Matplotlib as the two primary Python visualization libraries.",
      commonQuestion: "Why is a Box Plot better than a Bar Chart for checking distributions?",
      answer: "A bar chart only shows a single average height, hiding spread and skewness. A box plot shows the full distribution: minimum, 25th percentile, median, 75th percentile, maximum, and individual outliers."
    },
    keywords: ["Bar Chart", "Histogram", "Box Plot", "Scatter Plot", "Seaborn"]
  },
  {
    id: 8,
    title: "Correlation Analysis",
    subtitle: "Understanding How Features Move Together (r ∈ [-1, +1])",
    category: "Relationships",
    durationMinutes: 2,
    bulletPoints: [
      "What is Correlation? Measures the strength and direction of linear relationship between two variables.",
      "Pearson's 'r' Value: Strictly lies between -1.0 and +1.0.",
      "Positive (+1.0): Both variables increase together (e.g., Study Hours vs Marks).",
      "Negative (-1.0): As one increases, the other decreases (e.g., Car Age vs Price).",
      "Zero (0.0): No linear relationship between the two features.",
      "Golden Rule: 'Correlation does NOT mean Causation' (Ice cream sales and drowning both rise in summer, but one does not cause the other)."
    ],
    simpleNotes: {
      plainSummary: "Correlation (r) tells if two numbers move together: +1 means both rise together, -1 means one rises as the other falls, 0 means no linear connection.",
      hinglishExplanation: "Correlation यह बताता है कि दो चीजें आपस में कैसे जुड़ी हैं: +1 का मतलब दोनों साथ बढ़ेंगी (जैसे पढ़ाई और मार्क्स), -1 का मतलब एक बढ़ेगी तो दूसरी घटेगी (जैसे गाड़ी की उम्र और उसकी कीमत), 0 का मतलब कोई संबंध नहीं। ध्यान रहे: Correlation का मतलब Causation (कारण) नहीं होता।",
      whatToSayToExaminer: "Sir, correlation measures the linear association between two continuous variables using Pearson's coefficient 'r', which ranges from -1 to +1. A value close to +1 is positive correlation, -1 is negative correlation, and 0 indicates no linear relationship.",
      keyBullets: [
        "Value Range: Exactly -1.0 to +1.0",
        "+1.0: Perfect Positive (Both go up)",
        "-1.0: Perfect Negative (One goes up, one goes down)",
        "0.0: No linear relationship",
        "Heatmap: sns.heatmap(df.corr(), annot=True)"
      ],
      oneLineCode: "correlation_matrix = df.corr(numeric_only=True)"
    },
    speakerNotes: {
      script: "Correlation analysis measures how two numeric features move together. Pearson's coefficient 'r' ranges from -1 to +1. A positive value means they rise together, negative means they move in opposite directions, and zero means no linear link exists. In computer science, we use correlation heatmaps to drop duplicate, redundant features before feeding them into machine learning.",
      keyTakeaway: "Correlation does not imply causation.",
      vivaTip: "Examiner favorite question: 'If r = 0, does it mean the two variables are completely independent?' Answer: 'No, it only means there is no linear relationship. They could have a non-linear relationship like Y = X^2.'",
      commonQuestion: "What is Multicollinearity and why is it dangerous?",
      answer: "Multicollinearity occurs when two independent input features have a very high correlation (r > 0.85). It confuses linear models and destabilizes feature importance weights."
    },
    keywords: ["Correlation", "Pearson r", "Heatmap", "Positive", "Negative", "Causation"]
  },
  {
    id: 9,
    title: "Outlier Detection",
    subtitle: "Spotting and Handling Abnormal Data Points",
    category: "Anomalies",
    durationMinutes: 2,
    bulletPoints: [
      "What is an Outlier? A data point that lies an abnormal distance from all other points in a dataset.",
      "Causes: Sensor failure, typo in data entry (typing 200 instead of 20), or genuine rare events (credit card fraud).",
      "The 1.5 × IQR Rule (Tukey's Method): Compute IQR = Q3 - Q1. Any value below (Q1 - 1.5×IQR) or above (Q3 + 1.5×IQR) is an outlier.",
      "Z-Score Rule: Any value having |Z| > 3 (more than 3 standard deviations away from the mean) is an outlier.",
      "Treatment: Keep it (if fraud), Transform it (Log transform), Cap it (Winsorization), or Remove it (if entry error)."
    ],
    simpleNotes: {
      plainSummary: "Outliers are extreme odd values. We catch them using the 1.5 × IQR Box Plot formula or Z-Score > 3, and then either cap them, transform them, or drop them.",
      hinglishExplanation: "Outlier का मतलब है कोई अजीब या बहुत बड़ा/छोटा नंबर (जैसे क्लास के बच्चों की उम्र 20 है और एक की गलती से 200 लिख गई)। इसे पकड़ने का सबसे आसान तरीका है Box Plot का 1.5 × IQR नियम। इसे बिना सोचे-समझे डिलीट नहीं करते क्योंकि बैंक फ्रॉड में यही आउटलायर काम का सिग्नल होता है।",
      whatToSayToExaminer: "Sir, an outlier is an observation that deviates significantly from the general distribution. We detect outliers using Tukey's 1.5 times IQR rule from the box plot or the Z-Score method. We treat them by Winsorizing (capping), Log Transformation, or dropping only if it is a proven sensor error.",
      keyBullets: [
        "IQR = Q3 - Q1 (Interquartile Range: Middle 50% data)",
        "Lower Fence = Q1 - 1.5 × IQR",
        "Upper Fence = Q3 + 1.5 × IQR",
        "Points outside fences = Outliers (shown as dots on Box Plot)",
        "Rule: Never blindly delete outliers without checking"
      ],
      oneLineCode: "IQR = df['col'].quantile(0.75) - df['col'].quantile(0.25)"
    },
    speakerNotes: {
      script: "Outliers are data points that lie far outside the expected range. They can be caused by recording typos or represent rare real events. We use the 1.5 times IQR rule or Z-Scores to flag them. We must never delete outliers blindly because in fraud detection or medical diagnosis, the outlier is the exact signal we want to predict.",
      keyTakeaway: "Tukey's IQR method does not assume a normal distribution, making it very robust.",
      vivaTip: "Remember the formula: IQR = Q3 - Q1. Lower boundary = Q1 - 1.5*IQR. Upper boundary = Q3 + 1.5*IQR.",
      commonQuestion: "What is Winsorization?",
      answer: "Winsorization is capping extreme outliers at a specific percentile (e.g. 95th or 99th percentile) instead of deleting the entire row."
    },
    keywords: ["Outliers", "IQR", "Tukey Rule", "Z-Score", "Winsorization", "Box Plot"]
  },
  {
    id: 10,
    title: "Essential EDA Tools & Libraries",
    subtitle: "The Python Data Science Arsenal",
    category: "Technology Stack",
    durationMinutes: 1.5,
    bulletPoints: [
      "1. Python: Easy-to-read programming language with the world's largest data science ecosystem.",
      "2. Pandas: The #1 library for tabular data manipulation, filtering, grouping, and cleaning.",
      "3. NumPy: Superfast C-powered library for mathematical array operations and linear algebra.",
      "4. Matplotlib: The fundamental plotting library giving total control over figures and axes.",
      "5. Seaborn: Modern statistical visualization library that draws beautiful charts in 1 line.",
      "6. Jupyter Notebook: Interactive browser environment where code, outputs, and charts run side-by-side."
    ],
    simpleNotes: {
      plainSummary: "The core Python EDA stack: Pandas (tables & cleaning), NumPy (fast math), Matplotlib & Seaborn (charts), and Jupyter Notebook (interactive IDE).",
      hinglishExplanation: "EDA के 5 मुख्य हथियार हैं: Pandas (टेबल और डेटा क्लीन करने के लिए), NumPy (तेज गणित और ऐरे के लिए), Matplotlib और Seaborn (सुंदर चार्ट्स बनाने के लिए), और Jupyter Notebook (कोड और चार्ट साथ देखने के लिए)।",
      whatToSayToExaminer: "Sir, we used the standard Python scientific stack: Pandas for tabular manipulation, NumPy for numerical array operations, Matplotlib and Seaborn for statistical plotting, all executed inside an interactive Jupyter Notebook environment.",
      keyBullets: [
        "Pandas: DataFrame operations & null handling (import pandas as pd)",
        "NumPy: Fast vectorized mathematical calculations (import numpy as np)",
        "Matplotlib: Base 2D graphing engine (import matplotlib.pyplot as plt)",
        "Seaborn: High-level statistical visuals (import seaborn as sns)",
        "Jupyter / Colab: Interactive coding with instant visual graphs"
      ],
      oneLineCode: "import pandas as pd, numpy as np, seaborn as sns, matplotlib.pyplot as plt"
    },
    speakerNotes: {
      script: "To implement EDA, we rely on the open-source Python ecosystem. Pandas gives us high-level DataFrames. NumPy accelerates mathematical calculations at C-speed. Matplotlib and Seaborn produce professional statistical graphs. And Jupyter Notebook provides an interactive workspace for reproducible analysis.",
      keyTakeaway: "Pandas + Seaborn form the heart of modern exploratory data analysis.",
      vivaTip: "Mention that libraries like 'ydata-profiling' can even generate automated 1-click HTML EDA reports.",
      commonQuestion: "Why is Python preferred over C++ or Java for EDA?",
      answer: "Python has high developer productivity, vectorized libraries (NumPy/Pandas) written in C for high speed, and unmatched plotting libraries (Seaborn/Matplotlib) that make exploratory analysis fast and flexible."
    },
    keywords: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Jupyter"]
  },
  {
    id: 11,
    title: "Real-World Applications of EDA",
    subtitle: "How Industries Use EDA to Solve Multi-Million Dollar Problems",
    category: "Applications",
    durationMinutes: 2,
    bulletPoints: [
      "1. Machine Learning: Selecting the best features, removing redundant columns, and balancing classes.",
      "2. Finance & Banking: Detecting credit card fraud by catching outlier transactions in real time.",
      "3. Healthcare & Medicine: Analyzing patient blood pressure and heart rates to predict sepsis early.",
      "4. E-Commerce & Business: Finding out why customers abandon shopping carts and stop buying.",
      "5. Marketing & Ads: Measuring which marketing campaigns produce the highest sales ROI.",
      "6. Education & Universities: Tracking student attendance and assignment scores to prevent dropouts."
    ],
    simpleNotes: {
      plainSummary: "EDA is used everywhere: in Machine Learning (feature selection), Banking (fraud detection), Healthcare (patient risk), and E-commerce (customer churn).",
      hinglishExplanation: "EDA का असली इस्तेमाल: मशीन लर्निंग में सही फीचर्स चुनना, बैंकों में क्रेडिट कार्ड फ्रॉड पकड़ना, अस्पतालों में मरीज के खतरे का पहले पता लगाना, और ई-कॉमर्स (Amazon/Flipkart) में कस्टमर की पसंद जानना।",
      whatToSayToExaminer: "Sir, EDA is applied across major engineering domains. In Machine Learning, it prevents feeding garbage features into algorithms. In Banking, it detects fraudulent transactions. In Healthcare, it flags abnormal patient vitals, and in E-commerce, it predicts customer churn.",
      keyBullets: [
        "ML: Pre-filters clean features and balances datasets",
        "Banking: Real-time fraud detection using outlier spikes",
        "Healthcare: Early disease prediction from medical sensor telemetry",
        "E-Commerce: Identifying customer churn patterns",
        "Real Value: Saves companies millions by preventing bad decisions"
      ],
      oneLineCode: "# Churn analysis example\ndf.groupby('churn')['monthly_spend'].mean()"
    },
    speakerNotes: {
      script: "EDA is not just academic; it solves critical problems across industries. In machine learning, it prevents models from learning from garbage data. In banking, it flags credit card fraud. In healthcare, it monitors patient vitals. Across all domains, EDA turns raw unstructured data into actionable engineering decisions.",
      keyTakeaway: "Real-world machine learning success relies directly on rigorous domain EDA.",
      vivaTip: "Give the Banking fraud example: fraud transactions are tiny 0.1% outliers, which EDA specifically isolates.",
      commonQuestion: "Give an example of how EDA saved a project from failing?",
      answer: "In a medical dataset, EDA discovered that missing blood pressure values were coded as '-99'. If fed directly into a machine learning algorithm, the model would assume patients had negative blood pressure, causing complete diagnostic failure."
    },
    keywords: ["Applications", "Machine Learning", "Healthcare", "Finance", "Fraud", "E-Commerce"]
  },
  {
    id: 12,
    title: "Conclusion & Key Takeaways",
    subtitle: "The 4 Core Lessons of Exploratory Data Analysis",
    category: "Summary",
    durationMinutes: 1.5,
    bulletPoints: [
      "1. Understand Before You Model: Never apply machine learning to data you haven't visually inspected.",
      "2. Catch Errors Early: Finding missing values and outliers early saves hundreds of engineering hours.",
      "3. Visuals Speak Louder Than Numbers: Charts reveal hidden clusters that summary statistics miss.",
      "4. Better Data Beats Fancier Algorithms: A simple model on clean data beats a complex neural network on noisy data.",
      "Core Maxim: 'Garbage In, Garbage Out' — EDA is the guarantee that ensures quality data goes in."
    ],
    simpleNotes: {
      plainSummary: "Conclusion: EDA is the foundation of data science. Better data beats fancier algorithms, and cleaning data first prevents expensive mistakes.",
      hinglishExplanation: "निष्कर्ष: बिना डेटा देखे कभी मॉडल मत बनाओ। फैंसी मॉडल से ज्यादा जरूरी होता है साफ डेटा। कंप्यूटर साइंस का सबसे बड़ा नियम यही है: 'Garbage In, Garbage Out'—अगर कचरा डेटा डालोगे तो नतीजा भी कचरा आएगा। EDA कचरा साफ करने का काम करता है।",
      whatToSayToExaminer: "To conclude, EDA is the most critical foundation of modern data science. It catches hidden bugs, cleans noise, and ensures algorithms ingest genuine signals. The golden principle remains: 'Better data beats fancier algorithms every single time'.",
      keyBullets: [
        "1. Never train ML models on uninspected data",
        "2. Always check distributions with histograms and box plots",
        "3. Clean missing values and treat outliers systematically",
        "4. 'Better data beats complex algorithms every time'",
        "Golden Principle: Garbage In, Garbage Out"
      ],
      oneLineCode: "# Mission Accomplished: Clean Data Ready for ML!\nmodel.fit(X_clean, y)"
    },
    speakerNotes: {
      script: "In conclusion, Exploratory Data Analysis is the indispensable bridge between raw observations and reliable machine learning systems. It saves engineering teams hundreds of debugging hours, exposes hidden patterns, and guarantees that our algorithms consume verified, high-quality data. Better data always beats complex algorithms.",
      keyTakeaway: "EDA guarantees data quality, fulfilling the core computer science requirement of Garbage-In, Garbage-Out prevention.",
      vivaTip: "End with a confident smile: 'Sir, EDA guarantees that our engineering decisions are backed by clean evidence.'",
      commonQuestion: "What is your biggest personal takeaway from this project?",
      answer: "My biggest takeaway is that spending time exploring and cleaning data upfront is far more impactful than tuning complicated model hyperparameters."
    },
    keywords: ["Conclusion", "Summary", "Garbage In Garbage Out", "Best Practices"]
  },
  {
    id: 13,
    title: "Thank You & Viva Voce",
    subtitle: "Presented by Aditya Kumar · Ready for Examiner Q&A",
    category: "Conclusion",
    durationMinutes: 1,
    bulletPoints: [
      "Thank you to the Honorable Project Examiners, Guides, and Teachers.",
      "Presented by: Aditya Kumar",
      "Department: Computer Science & Engineering (B.Tech)",
      "Ready for Viva Voce Examination & Project Questions."
    ],
    simpleNotes: {
      plainSummary: "Thank you slide expressing gratitude to project guides and examiners, opening the stage for the Viva Voce examination.",
      hinglishExplanation: "यह आखिरी धन्यवाद स्लाइड है। इसमें टीचर और एग्जामिनर को धन्यवाद कहकर वाइवा के सवालों के लिए तैयार होना है। नीचे 'Viva Voce Guide' बटन पर क्लिक करके सभी सवालों के जवाब देखे जा सकते हैं।",
      whatToSayToExaminer: "Thank you respected examiners, guides, and faculty members for your valuable time and attention. I am now open to your questions and feedback for the viva voce examination.",
      keyBullets: [
        "Presenter: Aditya Kumar",
        "Degree: B.Tech Computer Science & Engineering",
        "Project Status: Completed & Documented",
        "Viva Voce: Ready for Examiner Questions"
      ],
      oneLineCode: "# Thank You! Questions are welcome."
    },
    speakerNotes: {
      script: "Thank you very much to the respected project examiners, my guide, and faculty members for your time, mentorship, and patience. I am now ready and open for your valuable questions and the viva voce defense.",
      keyTakeaway: "Thank the panel sincerely, maintain steady eye contact, and invite questions.",
      vivaTip: "Click the 'Viva Guide' button to open the top 10 college examiner questions with ready model answers.",
      commonQuestion: "What would you improve in this project in the future?",
      answer: "I would add automated real-time streaming EDA with Apache Kafka and automated outlier explanation using SHAP values."
    },
    keywords: ["Thank You", "Aditya Kumar", "Viva Voce", "Defense", "Q&A"]
  }
];
