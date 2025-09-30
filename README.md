# Trubridge Healthcare - Blood Pressure Screening Dashboard

A comprehensive React-based dashboard analyzing blood pressure screening patterns from the 2023 National Health Interview Survey (NHIS) data. This project provides insights into healthcare equity, insurance status impacts, and demographic factors affecting preventive care access.

## 🏥 Project Overview

This dashboard visualizes key findings from a comprehensive analysis of blood pressure screening data, highlighting critical disparities in healthcare access and providing evidence-based policy recommendations.

### Key Features

- **Interactive Data Visualizations**: Bar charts, pie charts, and line charts using Recharts
- **Multi-Section Analysis**: Overview, Insurance Factors, Demographics, Regional Patterns, and Prevalence
- **Policy Recommendations**: Evidence-based suggestions for improving healthcare equity
- **Responsive Design**: Modern UI with Tailwind CSS styling
- **Real-time Data**: Based on 2023 NHIS dataset with 11,018 adult participants

## 📊 Data Insights

### Critical Findings
- **Insurance Gap**: Uninsured adults are 25% less likely to receive blood pressure screening (62.1% vs 87.3%)
- **Statistical Significance**: Insurance status strongly predicts screening access (χ² = 245.31, p < 0.001)
- **Age Disparities**: Younger adults (18-30) have lowest screening rates at 75.2%
- **Regional Variations**: South leads with 86.2% screening rates, West lowest at 82.7%

### Policy Recommendations
1. **Expand Medicaid and CHIP coverage** to reach more uninsured adults
2. **Target interventions** for younger uninsured populations (18-30 age group)
3. **Enhance outreach** in lower-screening regions, particularly the West

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm (comes with Node.js)

### Installation

1. **Clone the repository** (if applicable) or navigate to the project directory:
   ```bash
   cd Trubridge_Healthcare/trubridge_dashboard
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   # For Node.js v17+ (recommended)
   set NODE_OPTIONS=--openssl-legacy-provider && npm start
   
   # For older Node.js versions
   npm start
   ```

4. **Open your browser** and navigate to `http://localhost:3000`

### Troubleshooting

#### Node.js OpenSSL Error
If you encounter the error `error:0308010C:digital envelope routines::unsupported`, use:
```bash
set NODE_OPTIONS=--openssl-legacy-provider && npm start
```

#### React Scripts Not Found
If you get `'react-scripts' is not recognized`, try:
```bash
npm install react-scripts@4.0.3 --save
```

## 📁 Project Structure

```
trubridge_dashboard/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── App.js          # Main dashboard component
│   ├── App.css         # Styling
│   └── index.js        # Entry point
├── package.json        # Dependencies and scripts
└── README.md          # This file
```

## 🛠️ Available Scripts

- **`npm start`** - Runs the app in development mode
- **`npm run build`** - Builds the app for production
- **`npm test`** - Launches the test runner
- **`npm run eject`** - Ejects from Create React App (one-way operation)

## 📈 Technologies Used

- **React 19.1.1** - Frontend framework
- **Recharts 2.15.4** - Data visualization library
- **React Scripts 4.0.3** - Build tools and development server
- **Tailwind CSS** - Utility-first CSS framework (via CDN)

## 🔬 Data Source

- **Dataset**: 2023 National Health Interview Survey (NHIS)
- **Sample Size**: 11,018 adults aged 18+
- **Source**: IPUMS (Integrated Public Use Microdata Series)
- **Analysis**: Statistical significance tested using chi-square tests and XGBoost modeling

## 👨‍💻 Author

**Daniel Chukwudera** - Fisk University

## 📄 License

This project is for educational and research purposes. Data analysis conducted as part of academic research on healthcare equity and preventive care access.

## 🤝 Contributing

This is an academic research project. For questions or collaboration opportunities, please contact the author.

---

*Built with React and Recharts for data-driven healthcare insights.*
