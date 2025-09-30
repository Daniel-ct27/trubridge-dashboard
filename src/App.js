import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';
import './App.css';

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState('overview');

  // Simple Card components
  const Card = ({ children, className = "" }) => (
    <div className={`bg-white rounded-lg shadow border ${className}`}>
      {children}
    </div>
  );

  const CardHeader = ({ children }) => (
    <div className="px-6 py-4 border-b">
      {children}
    </div>
  );

  const CardContent = ({ children }) => (
    <div className="px-6 py-4">
      {children}
    </div>
  );

  const CardTitle = ({ children, className = "" }) => (
    <h3 className={`text-lg font-semibold ${className}`}>
      {children}
    </h3>
  );

  // Data based on the research findings
  const overviewData = {
    totalRecords: 11018,
    meanAge: 46.3,
    insuredRate: 90.2,
    screeningRate: 84.7,
    demographics: {
      female: 51.4,
      northeast: 17.8,
      midwest: 23.1,
      south: 37.6,
      west: 21.5
    }
  };

  const insuranceData = [
    { status: 'Insured', screeningRate: 87.3, count: 9938 },
    { status: 'Uninsured', screeningRate: 62.1, count: 1080 }
  ];

  const demographicData = [
    { group: 'Female', screeningRate: 86.9 },
    { group: 'Male', screeningRate: 82.3 }
  ];

  const ageGroupData = [
    { ageGroup: '18-30', screeningRate: 75.2 },
    { ageGroup: '31-45', screeningRate: 82.1 },
    { ageGroup: '46-60', screeningRate: 87.8 },
    { ageGroup: '61 and older', screeningRate: 91.4 }
  ];

  const regionData = [
    { region: 'South', screeningRate: 86.2, percentage: 37.6 },
    { region: 'Midwest', screeningRate: 85.1, percentage: 23.1 },
    { region: 'Northeast', screeningRate: 84.3, percentage: 17.8 },
    { region: 'West', screeningRate: 82.7, percentage: 21.5 }
  ];

  const overallScreeningData = [
    { category: 'Screened (2+ visits)', value: 84.7, count: 9332 },
    { category: 'Not Screened', value: 15.3, count: 1686 }
  ];

  const COLORS = ['#3b82f6', '#ef4444', '#10b981', '#f59e0b'];

  const sections = [
    { id: 'recommendations', label: 'Final Recommendations' },
    { id: 'overview', label: 'Dataset Overview' },
    { id: 'insurance', label: 'Insurance Factors' },
    { id: 'demographics', label: 'Demographic Factors' },
    { id: 'regional', label: 'Regional Factors' },
    { id: 'prevalence', label: 'BP Screening Prevalence' }
  ];

  const renderRecommendations = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl text-blue-800">Key Public Health Recommendations</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
              <h3 className="font-bold text-red-800 mb-2">Critical Finding</h3>
              <p className="text-sm">Uninsured adults are 25% less likely to receive blood pressure screening (62.1% vs 87.3%)</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
              <h3 className="font-bold text-blue-800 mb-2">Statistical Significance</h3>
              <p className="text-sm">Insurance status strongly predicts screening access (χ² = 245.31, p &lt; 0.001)</p>
            </div>
          </div>
          
          <div className="mt-6 grid md:grid-cols-3 gap-4">
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">Policy Action 1</h4>
              <p className="text-sm">Expand Medicaid and CHIP coverage to reach more uninsured adults</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-semibold text-purple-800 mb-2">Policy Action 2</h4>
              <p className="text-sm">Target interventions for younger uninsured populations (18-30 age group)</p>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg">
              <h4 className="font-semibold text-orange-800 mb-2">Policy Action 3</h4>
              <p className="text-sm">Enhance outreach in lower-screening regions, particularly the West</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderOverview = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>2023 NHIS Dataset Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">{overviewData.totalRecords.toLocaleString()}</div>
              <div className="text-sm text-gray-600">Total Adults</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-2xl font-bold text-green-600">{overviewData.meanAge}</div>
              <div className="text-sm text-gray-600">Mean Age</div>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <div className="text-2xl font-bold text-purple-600">{overviewData.insuredRate}%</div>
              <div className="text-sm text-gray-600">Insured</div>
            </div>
            <div className="text-center p-4 bg-orange-50 rounded-lg">
              <div className="text-2xl font-bold text-orange-600">{overviewData.screeningRate}%</div>
              <div className="text-sm text-gray-600">Screened</div>
            </div>
          </div>
          
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={[
                    { name: 'Northeast', value: overviewData.demographics.northeast },
                    { name: 'Midwest', value: overviewData.demographics.midwest },
                    { name: 'South', value: overviewData.demographics.south },
                    { name: 'West', value: overviewData.demographics.west }
                  ]}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, value }) => `${name}: ${value}%`}
                >
                  {regionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <p className="text-sm text-gray-600 mt-2">
            <strong>Caption:</strong> Regional distribution of survey participants across the United States.
          </p>
          <p className="text-sm mt-2">
            <strong>Interpretation:</strong> The dataset provides comprehensive national coverage with strong representation from the South (37.6%) and balanced samples from other regions, ensuring robust analysis of regional health screening patterns.
          </p>
        </CardContent>
      </Card>
    </div>
  );

  const renderInsurance = () => (
    <Card>
      <CardHeader>
        <CardTitle>Insurance Impact on Blood Pressure Screening</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-64 mb-4">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={insuranceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="status" />
              <YAxis domain={[0, 100]} />
              <Tooltip formatter={(value) => [`${value}%`, 'Screening Rate']} />
              <Bar dataKey="screeningRate" fill="#3b82f6" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <p className="text-sm text-gray-600 mb-2">
          <strong>Caption:</strong> Blood pressure screening rates by insurance status showing significant disparities.
        </p>
        <p className="text-sm">
          <strong>Interpretation:</strong> Insurance coverage creates a substantial 25 percentage point difference in screening access (87.3% vs 62.1%). This represents a critical healthcare equity gap, with uninsured adults facing significant barriers to preventive hypertension care. The statistical significance (p &lt; 0.001) confirms insurance as a primary determinant of screening access.
        </p>
      </CardContent>
    </Card>
  );

  const renderDemographics = () => (
    <Card>
      <CardHeader>
        <CardTitle>Screening Trends by Age and Sex</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold mb-2">By Sex</h4>
            <div className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={demographicData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="group" />
                  <YAxis domain={[80, 90]} />
                  <Tooltip formatter={(value) => [`${value}%`, 'Screening Rate']} />
                  <Bar dataKey="screeningRate" fill="#10b981" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-2">By Age Group</h4>
            <div className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={ageGroupData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="ageGroup" />
                  <YAxis domain={[70, 95]} />
                  <Tooltip formatter={(value) => [`${value}%`, 'Screening Rate']} />
                  <Line type="monotone" dataKey="screeningRate" stroke="#f59e0b" strokeWidth={3} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
        
        <p className="text-sm text-gray-600 mt-4 mb-2">
          <strong>Caption:</strong> Blood pressure screening rates vary by sex and increase with age.
        </p>
        <p className="text-sm">
          <strong>Interpretation:</strong> Females show higher screening rates (86.9% vs 82.3%, p &lt; 0.01), reflecting patterns in healthcare utilization. Age demonstrates a clear gradient - younger adults (18-30) have the lowest screening rates at 75.2%, while adults 61 and older achieve 91.4%. This age pattern suggests both increased health awareness with age and potentially more frequent healthcare contact among older adults.
        </p>
      </CardContent>
    </Card>
  );

  const renderRegional = () => (
    <Card>
      <CardHeader>
        <CardTitle>Regional Screening Patterns</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-64 mb-4">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={regionData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="region" />
              <YAxis domain={[80, 90]} />
              <Tooltip formatter={(value, name) => [
                name === 'screeningRate' ? `${value}%` : `${value}% of sample`,
                name === 'screeningRate' ? 'Screening Rate' : 'Sample Size'
              ]} />
              <Bar dataKey="screeningRate" fill="#ef4444" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <p className="text-sm text-gray-600 mb-2">
          <strong>Caption:</strong> Blood pressure screening rates across U.S. regions show modest variation.
        </p>
        <p className="text-sm">
          <strong>Interpretation:</strong> Regional differences are relatively small but statistically significant (p = 0.008). The South leads with 86.2% screening rates, while the West has the lowest at 82.7%. This 3.5 percentage point gap may reflect regional differences in healthcare infrastructure, hypertension prevalence, or healthcare-seeking behaviors. The South's higher rates could be related to greater awareness of cardiovascular risks in the region.
        </p>
      </CardContent>
    </Card>
  );

  const renderPrevalence = () => (
    <Card>
      <CardHeader>
        <CardTitle>Overall Blood Pressure Screening Prevalence</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={overallScreeningData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ category, value }) => `${category}: ${value}%`}
                >
                  <Cell fill="#3b82f6" />
                  <Cell fill="#ef4444" />
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          
          <div className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800">Screened Population</h4>
              <p className="text-2xl font-bold text-blue-600">9,332 adults</p>
              <p className="text-sm text-gray-600">84.7% received BP checks on 2+ visits</p>
            </div>
            <div className="bg-red-50 p-4 rounded-lg">
              <h4 className="font-semibold text-red-800">Unscreened Population</h4>
              <p className="text-2xl font-bold text-red-600">1,686 adults</p>
              <p className="text-sm text-gray-600">15.3% lack adequate screening</p>
            </div>
          </div>
        </div>
        
        <p className="text-sm text-gray-600 mt-4 mb-2">
          <strong>Caption:</strong> Overall distribution of blood pressure screening coverage among U.S. adults.
        </p>
        <p className="text-sm">
          <strong>Interpretation:</strong> While 84.7% of adults receive adequate blood pressure screening, 1 in 6 adults (15.3%) lack proper preventive care. This represents approximately 1,686 individuals in our sample - extrapolated nationally, millions of adults may be missing critical hypertension screening. The gap is most pronounced among uninsured populations, highlighting the urgent need for policy interventions to ensure universal access to preventive cardiovascular care.
        </p>
      </CardContent>
    </Card>
  );

  const renderContent = () => {
    switch(activeSection) {
      case 'recommendations': return renderRecommendations();
      case 'overview': return renderOverview();
      case 'insurance': return renderInsurance();
      case 'demographics': return renderDemographics();
      case 'regional': return renderRegional();
      case 'prevalence': return renderPrevalence();
      default: return renderOverview();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <h1 className="text-3xl font-bold text-gray-900">
            Blood Pressure Screening Dashboard
          </h1>
          <p className="text-gray-600 mt-2">
            2023 NHIS Analysis: Insurance Status and Health Equity in Preventive Care
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-wrap gap-2 mb-6">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeSection === section.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border'
              }`}
            >
              {section.label}
            </button>
          ))}
        </div>

        {renderContent()}

        <div className="mt-8 bg-gray-100 p-4 rounded-lg">
          <p className="text-sm text-gray-600">
            <strong>Data Source:</strong> 2023 National Health Interview Survey (NHIS) via IPUMS, n=11,018 adults aged 18+. 
            Analysis conducted by Daniel Chukwudera, Fisk University. Statistical significance tested using chi-square tests and XGBoost modeling.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;