import { VivaQuestion } from '../types/presentation';

export const vivaQuestions: VivaQuestion[] = [
  {
    id: 1,
    question: "What is the fundamental difference between Data Mining and Exploratory Data Analysis (EDA)?",
    category: "Fundamentals",
    difficulty: "Basic",
    answer: "Data Mining uses algorithmic, machine learning, and statistical search methods to automatically discover unknown patterns across massive datasets. In contrast, EDA is an interactive, visual human-in-the-loop investigation pioneered by John Tukey to understand data distributions, validate assumptions, detect data collection flaws, and formulate testable hypotheses before applying modeling.",
    keyPoints: [
      "EDA is hypothesis-generating, exploratory, and largely visual.",
      "Data Mining is pattern-extracting and algorithm-driven.",
      "EDA prepares and validates data prior to modeling."
    ]
  },
  {
    id: 2,
    question: "Why do we prefer the Median over the Mean when measuring central tendency in skewed data?",
    category: "Statistics",
    difficulty: "Basic",
    answer: "The Mean incorporates all numeric values directly into the numerator sum, making it highly vulnerable to extreme outliers and asymmetric tails. The Median is the 50th percentile rank value; shifting extreme observations higher or lower does not perturb the middle position. Therefore, the Median is a robust statistic for skewed distributions (like salaries or housing prices).",
    keyPoints: [
      "Mean is sensitive to outliers: Mean = (Σ x) / n",
      "Median is resistant/robust: unaffected by extreme values",
      "For symmetrical distributions, Mean ≈ Median ≈ Mode"
    ],
    formula: "Skewness > 0 \\implies Mean > Median > Mode"
  },
  {
    id: 3,
    question: "Explain Tukey's 1.5 × IQR rule for outlier detection. Why 1.5 specifically?",
    category: "Statistics",
    difficulty: "Intermediate",
    answer: "Tukey defined the Interquartile Range as IQR = Q3 - Q1. Any value below Q1 - 1.5×IQR or above Q3 + 1.5×IQR is flagged as an outlier. John Tukey selected the 1.5 multiplier because in a theoretical standard Gaussian (normal) distribution, Q1 and Q3 are at ±0.6745σ. Setting fences at ±1.5×IQR extends bounds to ±2.7σ, leaving only ~0.7% of points outside the fences—a near-ideal balance between catching real anomalies and avoiding false alarms.",
    keyPoints: [
      "Lower Fence = Q1 - 1.5 × IQR",
      "Upper Fence = Q3 + 1.5 × IQR",
      "Extreme Outliers use 3.0 × IQR multiplier (approx ±4.72σ)",
      "Box plots directly render these thresholds as whiskers"
    ],
    formula: "IQR = Q_3 - Q_1 \\quad | \\quad \\text{Fences} = [Q_1 - 1.5\\cdot IQR, \\; Q_3 + 1.5\\cdot IQR]"
  },
  {
    id: 4,
    question: "How do you decide between dropping missing values (dropna) versus imputing them?",
    category: "Cleaning",
    difficulty: "Intermediate",
    answer: "Decision criteria depend on the proportion of missing data and the missingness mechanism: If missing rows are <3-5% and occur completely at random (MCAR), dropping may be safe. If missingness exceeds 5-10%, dropping causes catastrophic data loss and sample bias. Imputation is preferred: Mean/Median for continuous features (Median if skewed), Mode for categorical features, and MICE or KNN Imputer for multivariate dependencies.",
    keyPoints: [
      "Evaluate missingness mechanism: MCAR, MAR, or MNAR",
      "Drop if < 3% and random, or if a column is >60-70% missing",
      "Impute with Median for skewed features; never use Mean on skewed data",
      "Advanced: KNN Imputer, IterativeImputer (MICE)"
    ],
    exampleSnippet: "from sklearn.impute import SimpleImputer\nimputer = SimpleImputer(strategy='median')\ndf['age'] = imputer.fit_transform(df[['age']])"
  },
  {
    id: 5,
    question: "What is the difference between Pearson and Spearman correlation coefficients?",
    category: "Statistics",
    difficulty: "Intermediate",
    answer: "Pearson correlation (r) measures linear relationships between continuous variables and assumes normally distributed data with homoscedasticity. Spearman rank correlation (ρ) evaluates monotonic relationships (whether variables increase or decrease together regardless of linearity) by calculating Pearson's r on ranked values. Spearman is non-parametric and resistant to outliers.",
    keyPoints: [
      "Pearson: Linear relationship, sensitive to outliers, requires interval/ratio data",
      "Spearman: Monotonic relationship, robust to outliers, works on ordinal data",
      "Both range from -1.0 to +1.0"
    ],
    formula: "r_{pearson} = \\frac{\\sum(x-\\bar{x})(y-\\bar{y})}{\\sqrt{\\sum(x-\\bar{x})^2 \\sum(y-\\bar{y})^2}}"
  },
  {
    id: 6,
    question: "What is multicollinearity and how is it detected during EDA?",
    category: "Algorithms",
    difficulty: "Advanced",
    answer: "Multicollinearity occurs when two or more independent predictor features are strongly correlated, causing matrix singularity or unstable, high-variance coefficient estimates in linear models. In EDA, we detect it using: 1) Correlation Heatmaps (|r| > 0.8 is a warning), 2) Variance Inflation Factor (VIF > 5 to 10 indicates severe multicollinearity), and 3) Pairplots/Scatter matrices.",
    keyPoints: [
      "Destabilizes regression coefficients and inflates standard errors",
      "Detected via Correlation Matrix heatmap and VIF calculation",
      "Remedies: Drop redundant feature, combine via PCA, or apply Ridge regression"
    ],
    formula: "VIF_i = \\frac{1}{1 - R_i^2}"
  },
  {
    id: 7,
    question: "Why should we not remove every outlier encountered during EDA?",
    category: "Cleaning",
    difficulty: "Intermediate",
    answer: "Outliers are not always data entry mistakes or noise; in domains like cyber intrusion detection, financial fraud analysis, and medical diagnostics (e.g. rare disease markers), the outlier is precisely the high-value signal of interest! Blindly deleting outliers introduces sampling bias, artificially deflates variance, and creates models that fail on unseen extreme real-world events.",
    keyPoints: [
      "Distinguish between data entry errors vs legitimate extreme events",
      "In fraud detection, anomalies are the target labels",
      "Alternatives to deletion: Log transformation, Winsorization (capping), or tree-based models resistant to outliers"
    ]
  },
  {
    id: 8,
    question: "When would you use a Box Plot versus a Violin Plot?",
    category: "Visualization",
    difficulty: "Basic",
    answer: "A Box Plot highlights summary five-number statistics (Min, Q1, Median, Q3, Max) and isolated outliers. However, a Box Plot cannot reveal multimodal distributions (e.g. bimodal data with two peaks looks identical to uniform data). A Violin Plot combines a box plot with a rotated Kernel Density Estimation (KDE) curve on each side, showing probability density peaks alongside summary quartiles.",
    keyPoints: [
      "Box Plot: Compact 5-number summary + Tukey outlier markers",
      "Violin Plot: Shows multimodality, distribution peaks, and density shape",
      "Box plot is better for comparing 10+ groups without visual clutter"
    ]
  },
  {
    id: 9,
    question: "What Python libraries constitute the core modern EDA stack and why?",
    category: "Fundamentals",
    difficulty: "Basic",
    answer: "1) NumPy: Vectorized C-accelerated array computing. 2) Pandas: High-level DataFrame structures for slicing, filtering, grouping, and reshaping. 3) Matplotlib: Foundational canvas engine for publication-quality 2D plots. 4) Seaborn: High-level statistical visualization with attractive defaults and built-in categorical aggregations. 5) Jupyter / Colab: Interactive literate programming environment combining code, markdown, and visual outputs.",
    keyPoints: [
      "Data wrangling: Pandas + NumPy",
      "Visual analysis: Matplotlib + Seaborn",
      "Interactive exploration: Jupyter Notebooks"
    ]
  },
  {
    id: 10,
    question: "How does EDA directly impact feature engineering in a Machine Learning pipeline?",
    category: "Algorithms",
    difficulty: "Advanced",
    answer: "EDA uncovers non-linear relationships (prompting polynomial features), skewed distributions (prompting Box-Cox or Log transforms), high-cardinality categoricals (prompting target encoding or frequency grouping), zero-variance features (prompting elimination), and missing value patterns (prompting missingness indicator columns). Without EDA, machine learning models receive noisy, misaligned representations.",
    keyPoints: [
      "Guides transformations: Log transforms for right-skewed data",
      "Informs binning: Converting continuous variables into meaningful categorical buckets",
      "Prevents data leakage: Establishing baseline statistics strictly on training folds"
    ]
  }
];
