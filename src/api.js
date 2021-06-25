const getSelectUnitFilters = projectId => {
  // TODO : Make API call to get Select Unit Filters

  // For time beign we are mocking the API call
  return {
    primary: 
    [
      {
        title: "Tower",
        options: ["Daisy", "Elderberry", "Fuscia", "Gardenia", "Hibiscus"]
      },
      {
        title: "Block",
        options: ["A", "B", "C"]
      },
      {
        title: "Floor",
        options: ["First Floor", "Second Floor", "Third Floor"]
      }
    ],

    secondary: 
    [
        {
          title: "Configuration",
          options: 
          [
              "1BHK",
              "1BHK-C",
              "2.5BHK-B",
              "2BHK-D",
              "2BHK-D1",
              "3BHK-3T-C",
              "3BHK-3T-C-BW",
              "3BHK-3T-C1",
              "3BHK-3T-C1-BW"
          ]
        },
        {
          title: "Facing",
          options: ["East", "West", "North", "South"]
        },
        {
          title: "PriceRange",
          options: ["5000000", "51,00,000 - 81,00,000", "8100000"]
        },
        {
          title: "View",
          options: 
          ["courtyardview",  "garden,sports & clubview",  "invert/anotherview"]
        }
    ]
  };
};

const getSVGUrls = projectId => {

  return {
    Daisy : 
    {
      url : "URLhere"
    },
    Elderberry : 
    {
      url : "URLhere"
    },
    Fuscia : 
    {
      url : "URLhere"
    },
    Gardenia : 
    {
      url : "URLhere"
    },
    Hibiscus : 
    {
      url : "URLhere"
    },
  }
}

const getCostSheet  = projectid => {

    return {
      CostSheet:
        [
          {
          titles : ['Unit No : ' , 'Super Built up Area', 'Tower and Block' , 'Floor', 'Configuration' , 'Carpet Area' , 'Agreement Cost' , 'All Inclusive total (excluding registration charges)'],
          values : [ 'Daisy - A1302 3BHK - 3T - C1 - BW' , ' 1406.1 Sq.Ft.' , 'Daisy - A' , '13th Floor' , '3BHK - 3T - C1 - BW' , '911.8 Sq.Ft' , ' ₹89,57,349 ', '₹91,36,871'],
          }
        ],
        
        CostBreakUp:
        [
         { 
            titles: ['Unit' ,'Super Built up Area' , 'Tower and Block' , 'Base Price per Sq.Ft' , 'PLC' , 'Floor Rise' , 'Effective Price Per Sqft (Basic Price + PLC + Floor Rising)', 'Total Value of Property' , 'GST (7.5%) on 2/3rd of toal value' , 'Cost of the Apartment (Agreement Value)'],
            values : ['Daisy - A1302 3BHK - 3T - C1 - BW' , '1354.3 911.8 Sq.Ft.' , 'Daisy - A','₹5,747',' ₹100','₹200','₹6,047','₹81,89,452','₹4,09,473','₹89,57,349'],
         }
        ],
        Additional:
        [
         { 
            titles: ['Water/Electricity/Power Backup @ Rs150/- psft' ,'Corpus Fund' , 'Advance annual Maintenance charges @Rs. 3 psft per month (Rs 3 x 12 months)' , 'City infrastructure charges @ Rs 200/-' , 'Club house & amenities Charges @ Rs 125000/-' , 'Total' , 'Grand Total of the Apartment'],
            values : ['₹2,13,302' , '₹1,69,288' , '₹51,193','₹2,84,403','₹1,31,250','₹6,80,148','₹91,36,871'],
         }
        ]
  }
}

const getPaymentSchemes  = projectid => {

  return {

    Default: 
    [
        {'Flat No:' : 'Daisy - A1302 3BHK - 3T - C1 - BW'}, 
        {'Super Built up Area' :' 1406.1 Sq.Ft.'},
        {'Tower and Block' : 'Daisy - A'}, 
        {'Floor' : '13th Floor'}, 
        {'Configuration' : '3BHK - 3T - C1 - BW'}, 
        {'Carpet Area': '911.8 Sq.Ft'}, 
        {'Agreement Cost' : '₹89,57,349'} ,
    ],
    Scheme108010: 
    [
        {'Flat No:' : 'Daisy - A1302 3BHK - 3T - C1 - BW'}, 
        {'Super Built up Area' :' 1406.1 Sq.Ft.'},
        {'Tower and Block' : 'Daisy - A'}, 
        {'Floor' : '13th Floor'}, 
        {'Configuration' : '3BHK - 3T - C1 - BW'}, 
        {'Carpet Area': '911.8 Sq.Ft'}, 
        {'Agreement Cost' : '₹89,57,349'} ,
    ],

  }
}

const getAgreementLink = projectid => {
  return {
    Agreement : 
    [
      {
        url : "https://i.ibb.co/cbksTJH/agreement.jpg"
      }
    ]
  }
}

const getOthersData = projectid => {
  return{
    info1 : "data1",
    info2 : "data2",
    info3 : "data3",
    info4 : "data4",
    info5 : "data5",
    info6 : "data6",
    info7 : "data7",
  }
}

const getDocumentsData = projectid => {
  return{
    document1 : '',
    document2 : '',
    document3 : '',
    document4 : '',
    document5 : '',
    document6 : '',
    document7 : '',
  }
}

const getCommunicationData = projectId => {
  return {
    Applicant1 : 
      {
        houseno : '1661',
        curraddr : 'camp',
        peraddr : 'pune cantonment'
      },
    Applicant2 : 
      {
        houseno : '1662',
        curraddr : 'nibm',
        peraddr : 'kothrud'
      },
    Applicant3 : 
      {
        houseno : '1663',
        curraddr : 'hingne',
        peraddr : 'karwenagar'
      },
  }
}

export {getCostSheet , getSelectUnitFilters , getPaymentSchemes , getAgreementLink , getOthersData , getDocumentsData , getCommunicationData , getSVGUrls};