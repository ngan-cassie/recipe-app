function myFunction() {
  const email = "sewanee-dining@appspot.gserviceaccount.com";
  const key = "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCmre01dbp++34J\nhgAtFbvGts2xvJNhKNGFoRKwwBBPkj7iHZqnR/tMfomkltcAxAiCzbI/Xwal9Beh\nKwgau3NyybTbjkbFvyEUwxWTMC319yw12PhefDoR2cFFzxnI9kDNkz3DVV3KDFPv\nCjYnRou+mjNQJWD45xDGLqgzGGvye+sUWdw1kuiCx1klG4VmbJ9C8mbwiOmtmIjN\negb/WNmWBa2RQqRq3dpQLBNropmtCJuQupZaAg4gvkC0311KxaPMOekw07N5Xaq4\nC9iqWw3mkZdhSR1xrKjaE0FIxlIy3ywF+6ohgC51TtriVO4lZ5eZBXM/x6y5cdyQ\ncul+utWdAgMBAAECggEAGml7KjqCl/agLUAnrP1BqSZ0h9KbBA1kzikM/ichLoq9\nHjWUuSdF4gQ3KXahkUR/GMMhmLslIY0BZY+dFCdaDvl5iEUOX+1+f3y+YXmD/vLw\n9YNxL/+9b/CymK5NprOm5yyK3/YaC5dSgZF7rVOXd1eWBAA4UpjC5rSkAJzBFkZc\n06XcfSM01vVTCMt0VtpLVKjBL9ALElmScxfFLqqIxYq4FY401nhpz9J2FsjmmxhA\nT8VvGZNz0SNlOcmm+GOo216ImRNUVV2lFTQ395G1KkoEpy8T6dUYEBcVV6qyfdVa\nDSF6W/shheG8Hm2hzQP8ww0hLpRMWlCZd8KhHzUj/QKBgQDlG2rXNeBMeKqd3fla\nGNSaAgGOuMQsJEDF3zfbN2nz9MOsKW2hmkqUEtpiIojilxHiq/Izgd2D5ZhPEVrj\nyI/wSKRSNtiEY012dTS4EU5x1V9n3R6wJp4+Nfa6uy4oLu7OvPdGBHmULdjxL209\nYtQpeDEk0LyBymqGdxWtOiQ7IwKBgQC6PpSMFgOpkZ1JUEqkh2J5YqlDFyAAQcPo\n+bDrwHJARQB+FVF2wY6CgVlWJRw+neR+xCa0KuHfx6dA9gCluzyMUXvnfv/bhupz\n1u+NXO8CqhnuNgEVvDqFCaUhZE2XVEe67Bg/ZZYItwyOBJq5fsQx+p9/kfygFaIZ\nq7bkz3cYPwKBgFzaZM2+Hx6/FN8QdJvITnnwcDMovRDqzHmlgxzMc5uUyqz+yVji\nkHE8xtdZCcNT2MLWTz4C1wU6yyTYcs64nWWT+0z6v3vAR0fILsqe8Pz/rkAJBQP9\nUssB0fJSJF3Sz6RoP4tYCvI8Np1hTFPBtxzrgndaRdwQbmX644UmeEKjAoGAR8mJ\nXnm5zamH89NUAhkBFwK1dVu7hP3Ucr+TtztFjopKR08WSG0Q7jLHaZICUgxwH4Ch\n3n5M9AGz8TEhTMBf9UIPPUrReh+FzULCsT1qDx/bwNrmDiewcskl8joEQllFEMKi\nEgWpEBDmcPNLZEZ9fzo4Mmbl9hqAkd6DL6zcHecCgYBtcxmeohiepvCASPRGBQKk\nY9pOq0n7Fh13mihHmaWumcXFD1BwrSFz053J/3vVfdefuP/FaPXYlLto21CzTYhb\nOHiyUHifr3lvGHE4qyv7JlOuHr4DOUU2Jjem8+EcddrvxDehgOu2gOR90+/UT1nr\n/2olp5jHras9KDKHohiN8A==\n-----END PRIVATE KEY-----\n";
   const projectId = "sewanee-dining";
   var firestore = FirestoreApp.getFirestore (email, key, projectId);

   // get document data from ther spreadsheet
   var ss = SpreadsheetApp.getActiveSpreadsheet();

   var sheetname = "Sheet2";
   var sheet = ss.getSheetByName(sheetname); 
      // get the last row and column in order to define range
   var sheetLR = sheet.getLastRow(); // get the last row
   var sheetLC = sheet.getLastColumn(); // get the last column
   var dataSR = 2; // the first row of data
   // define the data range
   var sourceRange = sheet.getRange(2,1,sheetLR-dataSR+1,sheetLC);
  // get the data
   var sourceData = sourceRange.getValues();
   // get the number of length of the object in order to establish a loop value
   var sourceLen = sourceData.length;
  //  Loop through the rows
   for (var i=0;i<sourceLen;i++){
     if(sourceData[i][0] !== '') {
       var data = {};
       data.title = sourceData[i][1];
       data.keywords_list = sourceData[i][2].split(", ");
       data.type = sourceData[i][3];
       data.img_url = sourceData[i][4];
       data.url = sourceData[i][5];
       firestore.createDocument("recipes",data);
   }
    
  }
}