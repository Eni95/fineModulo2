const jobs = [
  { title: "Marketing Intern", location: "US, NY, New York" },
  {
    title: "Customer Service - Cloud Video Production",
    location: "NZ, Auckland",
  },
  {
    title: "Commissioning Machinery Assistant (CMA)",
    location: "US, IA, Wever",
  },
  {
    title: "Account Executive - Washington DC",
    location: "US, DC, Washington",
  },
  { title: "Bill Review Manager", location: "US, FL, Fort Worth" },
  { title: "Accounting Clerk", location: "US, MD," },
  { title: "Head of Content (m/f)", location: "DE, BE, Berlin" },
  {
    title: "Lead Guest Service Specialist",
    location: "US, CA, San Francisco",
  },
  { title: "HP BSM SME", location: "US, FL, Pensacola" },
  {
    title: "Customer Service Associate - Part Time",
    location: "US, AZ, Phoenix",
  },
  {
    title: "ASP.net Developer Job opportunity at United States,New Jersey",
    location: "US, NJ, Jersey City",
  },
  {
    title: "Talent Sourcer (6 months fixed-term contract)",
    location: "GB, LND, London",
  },
  {
    title: "Applications Developer, Digital",
    location: "US, CT, Stamford",
  },
  { title: "Installers", location: "US, FL, Orlando" },
  { title: "Account Executive - Sydney", location: "AU, NSW, Sydney" },
  {
    title: "VP of Sales - Vault Dragon",
    location: "SG, 01, Singapore",
  },
  { title: "Hands-On QA Leader", location: "IL, Tel Aviv, Israel" },
  {
    title: "Southend-on-Sea Traineeships Under NAS 16-18 Year Olds Only",
    location: "GB, SOS, Southend-on-Sea",
  },
  { title: "Visual Designer", location: "US, NY, New York" },
  {
    title: "Process Controls Engineer - DCS PLC MS Office - PA",
    location: "US, PA, USA Northeast",
  },
  { title: "Marketing Assistant", location: "US, TX, Austin" },
  { title: "Front End Developer", location: "NZ, N, Auckland" },
  { title: "Engagement Manager", location: "AE," },
  {
    title: "Vice President, Sales and Sponsorship (Businessfriend.com)",
    location: "US, CA, Carlsbad",
  },
  { title: "Customer Service", location: "GB, LND, London" },
  { title: "H1B SPONSOR FOR L1/L2/OPT", location: "US, NY, New York" },
  { title: "Marketing Exec", location: "SG," },
  {
    title: "HAAD/DHA Licensed Doctors Opening in UAE",
    location: "AE, AZ, Abudhabi",
  },
  {
    title: "Talent Management Process Manager",
    location: "US, MO, St. Louis",
  },
  { title: "Customer Service Associate", location: "CA, ON, Toronto" },
  {
    title: "Customer Service Technical Specialist",
    location: "US, MA, Waltham",
  },
  { title: "Software Applications Specialist", location: "US, KS," },
  { title: "Craftsman Associate", location: "US, WA, Everett" },
  { title: "Completion Engineer", location: "US, CA, San Ramon" },
  { title: "I Want To Work At Karmarama", location: "GB, LND," },
  {
    title: "English Teacher Abroad",
    location: "US, NY, Saint Bonaventure",
  },
]

function searchJobs (what, where) {
  what = what.toLowerCase();
  where = where.toLowerCase();
  console.log(what, where);
  let res = {
      result: [],
      count: 0
  }
  if (what && where) {       
  for (let index = 0; index < jobs.length; index++) {
      if ((jobs[index].title.toLowerCase().includes(what)) && (jobs[index].location.toLowerCase().includes(where))) {
          res.result.push (jobs[index])      
      }   
  }
  res.count = res.result.length;
  } else {
      return "Completare tutti i campi richiesti!"
  }
  if (res.count) {
      return res;
  } else {
     return "Non sono presenti match!";
  }
  /*for (let index2 = 0; index2 < res.count; index2++) {
     res.result.title.replace()
      
  }*/
      
  }


function populateTable(matchTable) { 
      let table = document.getElementById("displayMatch");
      // table.tbody.innerText = '';
      table.style.visibility = "visible";
      let tbody = table.getElementsByTagName('tbody')[0];
      tbody.innerHTML = "";
      for (let index = 0; index < matchTable.result.length; index++) {
          let oggetto = matchTable.result[index];
          let row = tbody.insertRow(index);
          let cell0 = row.insertCell(0);
          let cell1 = row.insertCell(1);
          cell0.innerHTML = oggetto.title;
          cell0.style.border = "1px solid black"
          cell1.innerHTML = oggetto.location;
          cell1.style.border = "1px solid black"
      }
      tbody.insertRow(matchTable.result.length)
  } 
// let tab = document.getElementById("displayMatch");
document.getElementById("searchMatch").onclick = function() {
  let first = document.getElementById ("job").value;
  let second = document.getElementById ("place").value;
  let intermediate = searchJobs(first,second);
  // console.log(first, second);
  console.log(intermediate);
  if (typeof intermediate === "string") {
      document.getElementById("error").innerText = intermediate;
  } else {
      populateTable(intermediate);
  }
  first = "";
  second = ""; 
}