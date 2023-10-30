<div align="center">
  <img alt="Logo" src="https://imageupload.io/ib/aaR293jTN6F6ElL_1698653882.png" width="100" />
</div>
<h1 align="center">
  Enhanced-RDP - Client Side
</h1>
<p align="center">
  Welcome to the client-side code repository for the <a href="https://enhanced-rdp.vercel.app" target="_blank">E-RDP website</a>! This client-side application is built with <a href="https://react.dev" target="_blank">ReactJS</a>a> and serves as the user interface for our Enhanced Ramer-Douglas-Peucker (E-RDP) algorithm.
</p>
<br/>
<p align="center">
  👉🏻<a href="https://enhanced-rdp.vercel.app" target="_blank">Click here</a> to see the server side of the system made from Flask with our Enhanced Ramer-Douglas-Peucker algorithm.
</p>
<br/>
<a href="https://enhanced-rdp.vercel.app" target="_blank"><img alt="Logo" src="https://imageupload.io/ib/vRjvy7DTt0gdPg2_1698654762.png" width="100%" /></a>


## 🎓 Research Paper
Check out our research paper that fuels this project 👉🏻 [Thesis Link](https://drive.google.com/file/d/11mAPgrB04am47k5e7QxNAtHRAr3rnSFY/view?usp=sharing)

### Enhanced RDP for Efficient Time Series Data Simplification
The Ramer-Douglas-Peucker (RDP) algorithm is renowned for simplifying lines and curves while preserving their essential characteristics. However, its efficiency dwindles with larger datasets, such as time series data, laden with redundant points.

Our research introduces the Enhanced RDP (ERDP) algorithm. ERDP leverages parallel computing and dynamic epsilon values tailored to dataset characteristics. This innovation reduces processing time and successfully eliminates up to 96.88% of redundant data points while maintaining accuracy.

ERDP forms the core of our Enhanced-RDP website, offering users a powerful tool for efficient time series data simplification.

## 🌐 Technologies
### Client-Side
[ReactJS](https://react.dev)

[TailwindCSS](https://tailwindcss.com)

### Server-Side ([Server-Side (Flask) Code](https://github.com/bibmode/ERDP-API))
[Flask](https://flask.palletsprojects.com/en/3.0.x/)

### Deployment
[Vercel](https://vercel.com/docs)


## 🌟 How to Use

Follow these simple steps to utilize our tool effectively:

### Step 1 - Download Data From the Table
- Scroll down to the table in the home page, you'll find a selection of CSV files available for download.
- Click on the download link for the CSV file you want to process.
- Alternatively, you can upload your own CSV file as long as it follows this [format](#csv-format-rules).
<div align="center">
  <img alt="Logo" src="https://imageupload.io/ib/LJkXYFCwOvIACSk_1698656571.png" width="70%" />
</div>

### Step 2 - Upload Data
- Once you've downloaded the CSV file, locate it on your device.
- Drag and drop the CSV file into the designated drop box on our website.
- Wait for the file to finish uploading.
<div align="center">
  <img alt="Logo" src="https://imageupload.io/ib/vRjvy7DTt0gdPg2_1698654762.png" width="70%" />
</div>

### Step 3 - Start the Process
- After the file is uploaded, a "Simplify" button will appear.
- Click the "Simplify" button to begin the analysis.
<div align="center">
  <img alt="Logo" src="https://imageupload.io/ib/HocSlu5qOZOrUUL_1698657632.png" width="70%" />
</div>

### Step 4 - Review Results
- The tool will process the data and display the results.
- Examine the output and insights generated from the analysis.
<div align="center">
  <img alt="Logo" src="https://imageupload.io/ib/NFT4jjDgBgaLxxO_1698657780.png" width="70%" />
</div>

### CSV Format Rules
If you plan to use your own time-series data in the system, be sure to read this. To ensure successful processing of your time series data, please adhere to the following format rules when preparing your CSV file:
#### 1. Two Columns Required
- Your CSV file must consist of exactly two columns.
- The first column should be reserved for labels or headers.
- The second column should contain the numerical values of the time series.


#### 2. Numerical Values
- The values column (second column) should contain only numerical data.
- Ensure that the data in the second column consists of numbers (integers or floating-point) suitable for time series analysis.

  
#### 3. Header in the First Row

- The first row of your CSV file should contain the labels or headers for the two columns.
- The labels should clearly describe the data in the corresponding columns, with the first label for the first column and the second label for the second column.


## 🌟 Additional Features
### 1. Read the Blog Articles
Explore in-depth articles on the technologies developed and used in this research. Our blog provides valuable insights into the evolution and development of the Enhanced Ramer-Douglas-Peucker (ERDP) algorithm. Learn about the underlying concepts, methodologies, and the impact of our research. Stay informed and enhance your understanding of the technology behind our system.
<div align="center">
  <img alt="Logo" src="https://imageupload.io/ib/H7xJrKWoHrpYnCD_1698658364.png" width="70%" />
</div>

### 2. Download the Simplified Version of Your Time-Series Data
As a part of our user-centric approach, we offer the convenience of downloading the simplified version of your processed CSV data. After the analysis is complete, you can easily retrieve and store the optimized dataset for your records. This feature enables you to seamlessly integrate the ERDP-processed data into your projects or further analysis.
<div align="center">
  <img alt="Logo" src="https://imageupload.io/ib/qSskzlSTcaf8TOZ_1698658632.png" width="70%" />
</div>

## 🛠 Installation & Set Up

1. Install the dependencies

   ```sh
   npm install
   ```

2. Start the development server

   ```sh
   npm run dev
   ```

