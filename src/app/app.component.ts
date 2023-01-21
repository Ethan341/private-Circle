import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'private-circle'; 
  selectedList :any
  savedLists = [
    {
      "updatedAt": "02-01-1970 00:03:44",
      "listName": "Two Companies",
      "childEntities": [
        {
          "entityName": "HDFC Bank",
          "entityDescription": "Dominant bank in finance sector"
        },
        {
          "entityName": "spacex",
          "entityDescription": "Aerospace"
        },
        {
          "entityName": "Google",
          "entityDescription": "Dominant in IT Sector"
        },
        {
          "entityName": "Amazon",
          "entityDescription": "Ecommerse leading "
        },
        {
          "entityName": "HDFC Bank",
          "entityDescription": "Dominant bank in finance sector"
        },
        {
          "entityName": "HDFC Bank",
          "entityDescription": "Dominant bank in finance sector"
        }
      ],
      "isDeleted": false,
      "isEditable": true,
      "canBeShared": "true"
    },
    {
      "updatedAt": "01-05-1970 00:03:44",
      "listName": "nestle",
      "childEntities": [
        {
          "entityName": "spacex",
          "entityDescription": "Aerospace"
        },
        {
          "entityName": "HDFC Bank",
          "entityDescription": "Dominant bank in finance sector"
        },
        {
          "entityName": "HDFC Bank",
          "entityDescription": "Dominant bank in finance sector"
        },
        {
          "entityName": "HDFC Bank",
          "entityDescription": "Dominant bank in finance sector"
        },
        {
          "entityName": "Google",
          "entityDescription": "Dominant in IT Sector"
        },
        {
          "entityName": "Amazon",
          "entityDescription": "Ecommerse leading "
        }
      ],
      "isDeleted": false,
      "isEditable": true,
      "canBeShared": "true"
    },
    {
      "updatedAt": "07-02-2200 00:03:44",
      "listName": "reliance",
      "childEntities": [
        
        {
          "entityName": "Balaji",
          "entityDescription": "FMCG"
        },
        {
          "entityName": "HDFC Bank",
          "entityDescription": "Dominant bank in finance sector"
        },
        {
          "entityName": "HDFC Bank",
          "entityDescription": "Dominant bank in finance sector"
        },
        {
          "entityName": "Google",
          "entityDescription": "Dominant in IT Sector"
        },
        {
          "entityName": "Amazon",
          "entityDescription": "Ecommerse leading "
        }
      ],
      "isDeleted": false,
      "isEditable": true,
      "canBeShared": "true"
    },
    {
      "updatedAt": "4-09-1970 00:03:44",
      "listName": "Tata Motors",
      "childEntities": [
        {
          "entityName": "HDFC Bank",
          "entityDescription": "Dominant bank in finance sector"
        },
        {
          "entityName": "Google",
          "entityDescription": "Dominant in IT Sector"
        },
        {
          "entityName": "Amazon",
          "entityDescription": "Ecommerse leading "
        },
        {
          "entityName": "HDFC Bank",
          "entityDescription": "Dominant bank in finance sector"
        },
        {
          "entityName": "spacex",
          "entityDescription": "Aerospace"
        },
        {
          "entityName": "HDFC Bank",
          "entityDescription": "Dominant bank in finance sector"
        }
      ],
      "isDeleted": false,
      "isEditable": true,
      "canBeShared": "true"
    },
    {
      "updatedAt": "01-01-1970 00:03:44",
      "listName": "Tesla1",
      "childEntities": [
        {
          "entityName": "HDFC Bank",
          "entityDescription": "Dominant bank in finance sector"
        },
        {
          "entityName": "spacex",
          "entityDescription": "Aerospace"
        },
        {
          "entityName": "HDFC Bank",
          "entityDescription": "Dominant bank in finance sector"
        },
        {
          "entityName": "HDFC Bank",
          "entityDescription": "Dominant bank in finance sector"
        },
        {
          "entityName": "Google",
          "entityDescription": "Dominant in IT Sector"
        },
        {
          "entityName": "Amazon",
          "entityDescription": "Ecommerse leading "
        }
      ],
      "isDeleted": false,
      "isEditable": true,
      "canBeShared": "true"
    },
    {
      "updatedAt": "01-01-1970 00:03:44",
      "listName": "Dista1",
      "childEntities": [
        {
          "entityName": "HDFC Bank",
          "entityDescription": "Dominant bank in finance sector"
        },
        {
          "entityName": "HDFC Bank",
          "entityDescription": "Dominant bank in finance sector"
        },
        {
          "entityName": "Google",
          "entityDescription": "Dominant in IT Sector"
        },
        {
          "entityName": "Amazon",
          "entityDescription": "Ecommerse leading "
        },
        {
          "entityName": "HDFC Bank",
          "entityDescription": "Dominant bank in finance sector"
        },
        {
          "entityName": "HDFC Bank",
          "entityDescription": "Dominant bank in finance sector"
        }
      ],
      "isDeleted": false,
      "isEditable": true,
      "canBeShared": "true"
    },
    {
      "updatedAt": "01-01-1970 00:03:44",
      "listName": "cipla1211",
      "childEntities": [
        {
          "entityName": "HDFC Bank",
          "entityDescription": "Dominant bank in finance sector"
        },
        {
          "entityName": "HDFC Bank",
          "entityDescription": "Dominant bank in finance sector"
        },
        {
          "entityName": "HDFC Bank",
          "entityDescription": "Dominant bank in finance sector"
        },
        {
          "entityName": "Google",
          "entityDescription": "Dominant in IT Sector"
        },
        {
          "entityName": "Amazon",
          "entityDescription": "Ecommerse leading "
        },
        {
          "entityName": "spacex",
          "entityDescription": "Aerospace"
        }
      ],
      "isDeleted": false,
      "isEditable": true,
      "canBeShared": "true"
    },
    {
      "updatedAt": "01-01-1970 00:03:44",
      "listName": "onePlus1",
      "childEntities": [
        {
          "entityName": "Google",
          "entityDescription": "Dominant in IT Sector"
        },
        {
          "entityName": "Amazon",
          "entityDescription": "Ecommerse leading "
        },
        {
          "entityName": "HDFC Bank",
          "entityDescription": "Dominant bank in finance sector"
        },
        {
          "entityName": "HDFC Bank",
          "entityDescription": "Dominant bank in finance sector"
        },
        {
          "entityName": "HDFC Bank",
          "entityDescription": "Dominant bank in finance sector"
        },
        {
          "entityName": "HDFC Bank",
          "entityDescription": "Dominant bank in finance sector"
        }
      ],
      "isDeleted": false,
      "isEditable": true,
      "canBeShared": "true"
    },
    {
      "updatedAt": "01-01-1970 00:03:44",
      "listName": "Mumbai1213",
      "childEntities": [
        {
          "entityName": "Axis Bank",
          "entityDescription": "Banking Sector"
        },
        {
          "entityName": "spacex",
          "entityDescription": "Aerospace"
        },
        {
          "entityName": "HDFC Bank",
          "entityDescription": "Dominant bank in finance sector"
        },
        {
          "entityName": "HDFC Bank",
          "entityDescription": "Dominant bank in finance sector"
        },
        {
          "entityName": "Axis Bank",
          "entityDescription": "Banking Sector"
        },
        {
          "entityName": "spacex",
          "entityDescription": "Aerospace"
        }
      ],
      "isDeleted": false,
      "isEditable": true,
      "canBeShared": "true"
    },
    {
      "updatedAt": "01-01-1970 00:03:44",
      "listName": "Banglore1",
      "childEntities": [
        {
          "entityName": "HDFC Bank",
          "entityDescription": "Dominant bank in finance sector"
        },
        {
          "entityName": "HDFC Bank",
          "entityDescription": "Dominant bank in finance sector"
        },
        {
          "entityName": "HDFC Bank",
          "entityDescription": "Dominant bank in finance sector"
        },
        {
          "entityName": "HDFC Bank",
          "entityDescription": "Dominant bank in finance sector"
        },
        {
          "entityName": "HDFC Bank",
          "entityDescription": "Dominant bank in finance sector"
        },
        {
          "entityName": "HDFC Bank",
          "entityDescription": "Dominant bank in finance sector"
        }
      ],
      "isDeleted": false,
      "isEditable": true,
      "canBeShared": "true"
    },
    {
      "updatedAt": "01-01-1970 00:03:44",
      "listName": "Delhi__",
      "childEntities": [
        {
          "entityName": "HDFC Bank",
          "entityDescription": "Dominant bank in finance sector"
        },
        {
          "entityName": "HDFC Bank",
          "entityDescription": "Dominant bank in finance sector"
        },
       {
          "entityName": "spacex",
          "entityDescription": "Aerospace"
        },
       
        {
          "entityName": "HDFC Bank",
          "entityDescription": "Dominant bank in finance sector"
        },
        {
          "entityName": "HDFC Bank",
          "entityDescription": "Dominant bank in finance sector"
        }
      ],
      "isDeleted": false,
      "isEditable": true,
      "canBeShared": "true"
    },
    {
      "updatedAt": "01-01-1970 00:03:44",
      "listName": "chennai1",
      "childEntities": [
        {
          "entityName": "HDFC Bank",
          "entityDescription": "Dominant bank in finance sector"
        },
        {
          "entityName": "spacex",
          "entityDescription": "Aerospace"
        },
        {
          "entityName": "HDFC Bank",
          "entityDescription": "Dominant bank in finance sector"
        },
        {
          "entityName": "HDFC Bank",
          "entityDescription": "Dominant bank in finance sector"
        }
      ],
      "isDeleted": false,
      "isEditable": true,
      "canBeShared": "true"
    },
    {
      "updatedAt": "01-01-1970 00:03:44",
      "listName": "Calcutta121",
      "childEntities": [
        {
          "entityName": "spacex",
          "entityDescription": "Aerospace"
        },
        {
          "entityName": "HDFC Bank",
          "entityDescription": "Dominant bank in finance sector"
        }
      ],
      "isDeleted": false,
      "isEditable": true,
      "canBeShared": "true"
    },
    {
      "updatedAt": "01-01-1970 00:03:44",
      "listName": "Two Companies1",
      "childEntities": [
        {
          "entityName": "HDFC Bank",
          "entityDescription": "Dominant bank in finance sector"
        },
        {
          "entityName": "spacex",
          "entityDescription": "Aerospace"
        },
        {
          "entityName": "Google",
          "entityDescription": "Dominant in IT Sector"
        },
        {
          "entityName": "Amazon",
          "entityDescription": "Ecommerse leading "
        },
        {
          "entityName": "HDFC Bank",
          "entityDescription": "Dominant bank in finance sector"
        },
        {
          "entityName": "HDFC Bank",
          "entityDescription": "Dominant bank in finance sector"
        }
      ],
      "isDeleted": false,
      "isEditable": true,
      "canBeShared": "true"
    },
    {
      "updatedAt": "01-01-1970 00:03:44",
      "listName": "nestle1",
      "childEntities": [
        {
          "entityName": "spacex",
          "entityDescription": "Aerospace"
        },
        {
          "entityName": "HDFC Bank",
          "entityDescription": "Dominant bank in finance sector"
        },
        {
          "entityName": "HDFC Bank",
          "entityDescription": "Dominant bank in finance sector"
        },
        {
          "entityName": "HDFC Bank",
          "entityDescription": "Dominant bank in finance sector"
        },
        {
          "entityName": "Google",
          "entityDescription": "Dominant in IT Sector"
        },
        {
          "entityName": "Amazon",
          "entityDescription": "Ecommerse leading "
        }
      ],
      "isDeleted": false,
      "isEditable": true,
      "canBeShared": "true"
    },
    {
      "updatedAt": "01-01-1970 00:03:44",
      "listName": "reliance1",
      "childEntities": [
        
        {
          "entityName": "Balaji",
          "entityDescription": "FMCG"
        },
        {
          "entityName": "HDFC Bank",
          "entityDescription": "Dominant bank in finance sector"
        },
        {
          "entityName": "HDFC Bank",
          "entityDescription": "Dominant bank in finance sector"
        },
        {
          "entityName": "Google",
          "entityDescription": "Dominant in IT Sector"
        },
        {
          "entityName": "Amazon",
          "entityDescription": "Ecommerse leading "
        }
      ],
      "isDeleted": false,
      "isEditable": true,
      "canBeShared": "true"
    },
    {
      "updatedAt": "01-01-1970 00:03:44",
      "listName": "Tata Motors1",
      "childEntities": [
        {
          "entityName": "HDFC Bank",
          "entityDescription": "Dominant bank in finance sector"
        },
        {
          "entityName": "Google",
          "entityDescription": "Dominant in IT Sector"
        },
        {
          "entityName": "Amazon",
          "entityDescription": "Ecommerse leading "
        },
        {
          "entityName": "HDFC Bank",
          "entityDescription": "Dominant bank in finance sector"
        },
        {
          "entityName": "spacex",
          "entityDescription": "Aerospace"
        },
        {
          "entityName": "HDFC Bank",
          "entityDescription": "Dominant bank in finance sector"
        }
      ],
      "isDeleted": false,
      "isEditable": true,
      "canBeShared": "true"
    },
    {
      "updatedAt": "01-01-1970 00:03:44",
      "listName": "Tesla12",
      "childEntities": [
        {
          "entityName": "HDFC Bank",
          "entityDescription": "Dominant bank in finance sector"
        },
        {
          "entityName": "spacex",
          "entityDescription": "Aerospace"
        },
        {
          "entityName": "HDFC Bank",
          "entityDescription": "Dominant bank in finance sector"
        },
        {
          "entityName": "HDFC Bank",
          "entityDescription": "Dominant bank in finance sector"
        },
        {
          "entityName": "Google",
          "entityDescription": "Dominant in IT Sector"
        },
        {
          "entityName": "Amazon",
          "entityDescription": "Ecommerse leading "
        }
      ],
      "isDeleted": false,
      "isEditable": true,
      "canBeShared": "true"
    },
    {
      "updatedAt": "01-01-1970 00:03:44",
      "listName": "Dista12",
      "childEntities": [
        {
          "entityName": "HDFC Bank",
          "entityDescription": "Dominant bank in finance sector"
        },
        {
          "entityName": "HDFC Bank",
          "entityDescription": "Dominant bank in finance sector"
        },
        {
          "entityName": "Google",
          "entityDescription": "Dominant in IT Sector"
        },
        {
          "entityName": "Amazon",
          "entityDescription": "Ecommerse leading "
        },
        {
          "entityName": "HDFC Bank",
          "entityDescription": "Dominant bank in finance sector"
        },
        {
          "entityName": "HDFC Bank",
          "entityDescription": "Dominant bank in finance sector"
        }
      ],
      "isDeleted": false,
      "isEditable": true,
      "canBeShared": "true"
    },
    {
      "updatedAt": "01-01-1970 00:03:44",
      "listName": "cipla1",
      "childEntities": [
        {
          "entityName": "HDFC Bank",
          "entityDescription": "Dominant bank in finance sector"
        },
        {
          "entityName": "HDFC Bank",
          "entityDescription": "Dominant bank in finance sector"
        },
        {
          "entityName": "HDFC Bank",
          "entityDescription": "Dominant bank in finance sector"
        },
        {
          "entityName": "Google",
          "entityDescription": "Dominant in IT Sector"
        },
        {
          "entityName": "Amazon",
          "entityDescription": "Ecommerse leading "
        },
        {
          "entityName": "spacex",
          "entityDescription": "Aerospace"
        }
      ],
      "isDeleted": false,
      "isEditable": true,
      "canBeShared": "true"
    },
    {
      "updatedAt": "01-01-1970 00:03:44",
      "listName": "onePlus1",
      "childEntities": [
        {
          "entityName": "Google",
          "entityDescription": "Dominant in IT Sector"
        },
        {
          "entityName": "Amazon",
          "entityDescription": "Ecommerse leading "
        },
        {
          "entityName": "HDFC Bank",
          "entityDescription": "Dominant bank in finance sector"
        },
        {
          "entityName": "HDFC Bank",
          "entityDescription": "Dominant bank in finance sector"
        },
        {
          "entityName": "HDFC Bank",
          "entityDescription": "Dominant bank in finance sector"
        },
        {
          "entityName": "HDFC Bank",
          "entityDescription": "Dominant bank in finance sector"
        }
      ],
      "isDeleted": false,
      "isEditable": true,
      "canBeShared": "true"
    },
    {
      "updatedAt": "01-01-1970 00:03:44",
      "listName": "Mumbai1",
      "childEntities": [
        {
          "entityName": "Axis Bank",
          "entityDescription": "Banking Sector"
        },
        {
          "entityName": "spacex",
          "entityDescription": "Aerospace"
        },
        {
          "entityName": "HDFC Bank",
          "entityDescription": "Dominant bank in finance sector"
        },
        {
          "entityName": "HDFC Bank",
          "entityDescription": "Dominant bank in finance sector"
        },
        {
          "entityName": "Axis Bank",
          "entityDescription": "Banking Sector"
        },
        {
          "entityName": "spacex",
          "entityDescription": "Aerospace"
        }
      ],
      "isDeleted": false,
      "isEditable": true,
      "canBeShared": "true"
    },
    {
      "updatedAt": "01-01-1970 00:03:44",
      "listName": "Banglore12",
      "childEntities": [
        {
          "entityName": "HDFC Bank",
          "entityDescription": "Dominant bank in finance sector"
        },
        {
          "entityName": "HDFC Bank",
          "entityDescription": "Dominant bank in finance sector"
        },
        {
          "entityName": "HDFC Bank",
          "entityDescription": "Dominant bank in finance sector"
        },
        {
          "entityName": "HDFC Bank",
          "entityDescription": "Dominant bank in finance sector"
        },
        {
          "entityName": "HDFC Bank",
          "entityDescription": "Dominant bank in finance sector"
        },
        {
          "entityName": "HDFC Bank",
          "entityDescription": "Dominant bank in finance sector"
        }
      ],
      "isDeleted": false,
      "isEditable": true,
      "canBeShared": "true"
    },
    {
      "updatedAt": "01-01-1970 00:03:44",
      "listName": "Delhi1",
      "childEntities": [
        {
          "entityName": "HDFC Bank",
          "entityDescription": "Dominant bank in finance sector"
        },
        {
          "entityName": "HDFC Bank",
          "entityDescription": "Dominant bank in finance sector"
        },
       {
          "entityName": "spacex",
          "entityDescription": "Aerospace"
        },
       
        {
          "entityName": "HDFC Bank",
          "entityDescription": "Dominant bank in finance sector"
        },
        {
          "entityName": "HDFC Bank",
          "entityDescription": "Dominant bank in finance sector"
        }
      ],
      "isDeleted": false,
      "isEditable": true,
      "canBeShared": "true"
    },
    {
      "updatedAt": "01-01-1970 00:03:44",
      "listName": "chennai12",
      "childEntities": [
        {
          "entityName": "HDFC Bank",
          "entityDescription": "Dominant bank in finance sector"
        },
        {
          "entityName": "spacex",
          "entityDescription": "Aerospace"
        },
        {
          "entityName": "HDFC Bank",
          "entityDescription": "Dominant bank in finance sector"
        },
        {
          "entityName": "HDFC Bank",
          "entityDescription": "Dominant bank in finance sector"
        }
      ],
      "isDeleted": false,
      "isEditable": true,
      "canBeShared": "true"
    },
    {
      "updatedAt": "01-01-1970 00:03:44",
      "listName": "Calcutta1214",
      "childEntities": [
        {
          "entityName": "spacex",
          "entityDescription": "Aerospace"
        },
        {
          "entityName": "HDFC Bank",
          "entityDescription": "Dominant bank in finance sector"
        }
      ],
      "isDeleted": false,
      "isEditable": true,
      "canBeShared": "true"
    },
    {
      "updatedAt": "01-01-1970 00:03:44",
      "listName": "Two Companies12",
      "childEntities": [
        {
          "entityName": "HDFC Bank",
          "entityDescription": "Dominant bank in finance sector"
        },
        {
          "entityName": "spacex",
          "entityDescription": "Aerospace"
        },
        {
          "entityName": "Google",
          "entityDescription": "Dominant in IT Sector"
        },
        {
          "entityName": "Amazon",
          "entityDescription": "Ecommerse leading "
        },
        {
          "entityName": "HDFC Bank",
          "entityDescription": "Dominant bank in finance sector"
        },
        {
          "entityName": "HDFC Bank",
          "entityDescription": "Dominant bank in finance sector"
        }
      ],
      "isDeleted": false,
      "isEditable": true,
      "canBeShared": "true"
    },
    {
      "updatedAt": "01-01-1970 00:03:44",
      "listName": "nestle12",
      "childEntities": [
        {
          "entityName": "spacex",
          "entityDescription": "Aerospace"
        },
        {
          "entityName": "HDFC Bank",
          "entityDescription": "Dominant bank in finance sector"
        },
        {
          "entityName": "HDFC Bank",
          "entityDescription": "Dominant bank in finance sector"
        },
        {
          "entityName": "HDFC Bank",
          "entityDescription": "Dominant bank in finance sector"
        },
        {
          "entityName": "Google",
          "entityDescription": "Dominant in IT Sector"
        },
        {
          "entityName": "Amazon",
          "entityDescription": "Ecommerse leading "
        }
      ],
      "isDeleted": false,
      "isEditable": true,
      "canBeShared": "true"
    },
    {
      "updatedAt": "01-01-1970 00:03:44",
      "listName": "reliance12",
      "childEntities": [
        
        {
          "entityName": "Balaji",
          "entityDescription": "FMCG"
        },
        {
          "entityName": "HDFC Bank",
          "entityDescription": "Dominant bank in finance sector"
        },
        {
          "entityName": "HDFC Bank",
          "entityDescription": "Dominant bank in finance sector"
        },
        {
          "entityName": "Google",
          "entityDescription": "Dominant in IT Sector"
        },
        {
          "entityName": "Amazon",
          "entityDescription": "Ecommerse leading "
        }
      ],
      "isDeleted": false,
      "isEditable": true,
      "canBeShared": "true"
    },
    {
      "updatedAt": "01-01-1970 00:03:44",
      "listName": "Tata Motors11",
      "childEntities": [
        {
          "entityName": "HDFC Bank",
          "entityDescription": "Dominant bank in finance sector"
        },
        {
          "entityName": "Google",
          "entityDescription": "Dominant in IT Sector"
        },
        {
          "entityName": "Amazon",
          "entityDescription": "Ecommerse leading "
        },
        {
          "entityName": "HDFC Bank",
          "entityDescription": "Dominant bank in finance sector"
        },
        {
          "entityName": "spacex",
          "entityDescription": "Aerospace"
        },
        {
          "entityName": "HDFC Bank",
          "entityDescription": "Dominant bank in finance sector"
        }
      ],
      "isDeleted": false,
      "isEditable": true,
      "canBeShared": "true"
    },
    {
      "updatedAt": "01-01-1970 00:03:44",
      "listName": "Tesla123",
      "childEntities": [
        {
          "entityName": "HDFC Bank",
          "entityDescription": "Dominant bank in finance sector"
        },
        {
          "entityName": "spacex",
          "entityDescription": "Aerospace"
        },
        {
          "entityName": "HDFC Bank",
          "entityDescription": "Dominant bank in finance sector"
        },
        {
          "entityName": "HDFC Bank",
          "entityDescription": "Dominant bank in finance sector"
        },
        {
          "entityName": "Google",
          "entityDescription": "Dominant in IT Sector"
        },
        {
          "entityName": "Amazon",
          "entityDescription": "Ecommerse leading "
        }
      ],
      "isDeleted": false,
      "isEditable": true,
      "canBeShared": "true"
    },
    {
      "updatedAt": "01-01-1970 00:03:44",
      "listName": "Dista121",
      "childEntities": [
        {
          "entityName": "HDFC Bank",
          "entityDescription": "Dominant bank in finance sector"
        },
        {
          "entityName": "HDFC Bank",
          "entityDescription": "Dominant bank in finance sector"
        },
        {
          "entityName": "Google",
          "entityDescription": "Dominant in IT Sector"
        },
        {
          "entityName": "Amazon",
          "entityDescription": "Ecommerse leading "
        },
        {
          "entityName": "HDFC Bank",
          "entityDescription": "Dominant bank in finance sector"
        },
        {
          "entityName": "HDFC Bank",
          "entityDescription": "Dominant bank in finance sector"
        }
      ],
      "isDeleted": false,
      "isEditable": true,
      "canBeShared": "true"
    },
    {
      "updatedAt": "01-01-1970 00:03:44",
      "listName": "cipla12",
      "childEntities": [
        {
          "entityName": "HDFC Bank",
          "entityDescription": "Dominant bank in finance sector"
        },
        {
          "entityName": "HDFC Bank",
          "entityDescription": "Dominant bank in finance sector"
        },
        {
          "entityName": "HDFC Bank",
          "entityDescription": "Dominant bank in finance sector"
        },
        {
          "entityName": "Google",
          "entityDescription": "Dominant in IT Sector"
        },
        {
          "entityName": "Amazon",
          "entityDescription": "Ecommerse leading "
        },
        {
          "entityName": "spacex",
          "entityDescription": "Aerospace"
        }
      ],
      "isDeleted": false,
      "isEditable": true,
      "canBeShared": "true"
    },
    {
      "updatedAt": "01-01-1970 00:03:44",
      "listName": "onePlus12",
      "childEntities": [
        {
          "entityName": "Google",
          "entityDescription": "Dominant in IT Sector"
        },
        {
          "entityName": "Amazon",
          "entityDescription": "Ecommerse leading "
        },
        {
          "entityName": "HDFC Bank",
          "entityDescription": "Dominant bank in finance sector"
        },
        {
          "entityName": "HDFC Bank",
          "entityDescription": "Dominant bank in finance sector"
        },
        {
          "entityName": "HDFC Bank",
          "entityDescription": "Dominant bank in finance sector"
        },
        {
          "entityName": "HDFC Bank",
          "entityDescription": "Dominant bank in finance sector"
        }
      ],
      "isDeleted": false,
      "isEditable": true,
      "canBeShared": "true"
    },
    {
      "updatedAt": "01-01-1970 00:03:44",
      "listName": "Mumbai12",
      "childEntities": [
        {
          "entityName": "Axis Bank",
          "entityDescription": "Banking Sector"
        },
        {
          "entityName": "spacex",
          "entityDescription": "Aerospace"
        },
        {
          "entityName": "HDFC Bank",
          "entityDescription": "Dominant bank in finance sector"
        },
        {
          "entityName": "HDFC Bank",
          "entityDescription": "Dominant bank in finance sector"
        },
        {
          "entityName": "Axis Bank",
          "entityDescription": "Banking Sector"
        },
        {
          "entityName": "spacex",
          "entityDescription": "Aerospace"
        }
      ],
      "isDeleted": false,
      "isEditable": true,
      "canBeShared": "true"
    },
    {
      "updatedAt": "01-01-1970 00:03:44",
      "listName": "Banglore121",
      "childEntities": [
        {
          "entityName": "HDFC Bank",
          "entityDescription": "Dominant bank in finance sector"
        },
        {
          "entityName": "HDFC Bank",
          "entityDescription": "Dominant bank in finance sector"
        },
        {
          "entityName": "HDFC Bank",
          "entityDescription": "Dominant bank in finance sector"
        },
        {
          "entityName": "HDFC Bank",
          "entityDescription": "Dominant bank in finance sector"
        },
        {
          "entityName": "HDFC Bank",
          "entityDescription": "Dominant bank in finance sector"
        },
        {
          "entityName": "HDFC Bank",
          "entityDescription": "Dominant bank in finance sector"
        }
      ],
      "isDeleted": false,
      "isEditable": true,
      "canBeShared": "true"
    },
    {
      "updatedAt": "01-01-1970 00:03:44",
      "listName": "Delhi12",
      "childEntities": [
        {
          "entityName": "HDFC Bank",
          "entityDescription": "Dominant bank in finance sector"
        },
        {
          "entityName": "HDFC Bank",
          "entityDescription": "Dominant bank in finance sector"
        },
       {
          "entityName": "spacex",
          "entityDescription": "Aerospace"
        },
       
        {
          "entityName": "HDFC Bank",
          "entityDescription": "Dominant bank in finance sector"
        },
        {
          "entityName": "HDFC Bank",
          "entityDescription": "Dominant bank in finance sector"
        }
      ],
      "isDeleted": false,
      "isEditable": true,
      "canBeShared": "true"
    },
    {
      "updatedAt": "01-01-1970 00:03:44",
      "listName": "chennai121",
      "childEntities": [
        {
          "entityName": "HDFC Bank",
          "entityDescription": "Dominant bank in finance sector"
        },
        {
          "entityName": "spacex",
          "entityDescription": "Aerospace"
        },
        {
          "entityName": "HDFC Bank",
          "entityDescription": "Dominant bank in finance sector"
        },
        {
          "entityName": "HDFC Bank",
          "entityDescription": "Dominant bank in finance sector"
        }
      ],
      "isDeleted": false,
      "isEditable": true,
      "canBeShared": "true"
    },
    {
      "updatedAt": "01-01-1970 00:03:44",
      "listName": "Calcutta1",
      "childEntities": [
        {
          "entityName": "spacex",
          "entityDescription": "Aerospace"
        },
        {
          "entityName": "HDFC Bank",
          "entityDescription": "Dominant bank in finance sector"
        }
      ],
      "isDeleted": false,
      "isEditable": true,
      "canBeShared": "true"
    },
    {
      "updatedAt": "01-01-1970 00:03:44",
      "listName": "Two Companies121",
      "childEntities": [
        {
          "entityName": "HDFC Bank",
          "entityDescription": "Dominant bank in finance sector"
        },
        {
          "entityName": "spacex",
          "entityDescription": "Aerospace"
        },
        {
          "entityName": "Google",
          "entityDescription": "Dominant in IT Sector"
        },
        {
          "entityName": "Amazon",
          "entityDescription": "Ecommerse leading "
        },
        {
          "entityName": "HDFC Bank",
          "entityDescription": "Dominant bank in finance sector"
        },
        {
          "entityName": "HDFC Bank",
          "entityDescription": "Dominant bank in finance sector"
        }
      ],
      "isDeleted": false,
      "isEditable": true,
      "canBeShared": "true"
    },
    {
      "updatedAt": "01-01-1970 00:03:44",
      "listName": "nestle121",
      "childEntities": [
        {
          "entityName": "spacex",
          "entityDescription": "Aerospace"
        },
        {
          "entityName": "HDFC Bank",
          "entityDescription": "Dominant bank in finance sector"
        },
        {
          "entityName": "HDFC Bank",
          "entityDescription": "Dominant bank in finance sector"
        },
        {
          "entityName": "HDFC Bank",
          "entityDescription": "Dominant bank in finance sector"
        },
        {
          "entityName": "Google",
          "entityDescription": "Dominant in IT Sector"
        },
        {
          "entityName": "Amazon",
          "entityDescription": "Ecommerse leading "
        }
      ],
      "isDeleted": false,
      "isEditable": true,
      "canBeShared": "true"
    },
    {
      "updatedAt": "01-01-1970 00:03:44",
      "listName": "reliance121",
      "childEntities": [
        
        {
          "entityName": "Balaji",
          "entityDescription": "FMCG"
        },
        {
          "entityName": "HDFC Bank",
          "entityDescription": "Dominant bank in finance sector"
        },
        {
          "entityName": "HDFC Bank",
          "entityDescription": "Dominant bank in finance sector"
        },
        {
          "entityName": "Google",
          "entityDescription": "Dominant in IT Sector"
        },
        {
          "entityName": "Amazon",
          "entityDescription": "Ecommerse leading "
        }
      ],
      "isDeleted": false,
      "isEditable": true,
      "canBeShared": "true"
    },
    {
      "updatedAt": "01-01-1970 00:03:44",
      "listName": "Tata Motors222",
      "childEntities": [
        {
          "entityName": "HDFC Bank",
          "entityDescription": "Dominant bank in finance sector"
        },
        {
          "entityName": "Google",
          "entityDescription": "Dominant in IT Sector"
        },
        {
          "entityName": "Amazon",
          "entityDescription": "Ecommerse leading "
        },
        {
          "entityName": "HDFC Bank",
          "entityDescription": "Dominant bank in finance sector"
        },
        {
          "entityName": "spacex",
          "entityDescription": "Aerospace"
        },
        {
          "entityName": "HDFC Bank",
          "entityDescription": "Dominant bank in finance sector"
        }
      ],
      "isDeleted": false,
      "isEditable": true,
      "canBeShared": "true"
    },
    {
      "updatedAt": "01-01-1970 00:03:44",
      "listName": "Tesla1234",
      "childEntities": [
        {
          "entityName": "HDFC Bank",
          "entityDescription": "Dominant bank in finance sector"
        },
        {
          "entityName": "spacex",
          "entityDescription": "Aerospace"
        },
        {
          "entityName": "HDFC Bank",
          "entityDescription": "Dominant bank in finance sector"
        },
        {
          "entityName": "HDFC Bank",
          "entityDescription": "Dominant bank in finance sector"
        },
        {
          "entityName": "Google",
          "entityDescription": "Dominant in IT Sector"
        },
        {
          "entityName": "Amazon",
          "entityDescription": "Ecommerse leading "
        }
      ],
      "isDeleted": false,
      "isEditable": true,
      "canBeShared": "true"
    },
    {
      "updatedAt": "01-01-1970 00:03:44",
      "listName": "Dista1211",
      "childEntities": [
        {
          "entityName": "HDFC Bank",
          "entityDescription": "Dominant bank in finance sector"
        },
        {
          "entityName": "HDFC Bank",
          "entityDescription": "Dominant bank in finance sector"
        },
        {
          "entityName": "Google",
          "entityDescription": "Dominant in IT Sector"
        },
        {
          "entityName": "Amazon",
          "entityDescription": "Ecommerse leading "
        },
        {
          "entityName": "HDFC Bank",
          "entityDescription": "Dominant bank in finance sector"
        },
        {
          "entityName": "HDFC Bank",
          "entityDescription": "Dominant bank in finance sector"
        }
      ],
      "isDeleted": false,
      "isEditable": true,
      "canBeShared": "true"
    },
    {
      "updatedAt": "01-01-1970 00:03:44",
      "listName": "cipla121",
      "childEntities": [
        {
          "entityName": "HDFC Bank",
          "entityDescription": "Dominant bank in finance sector"
        },
        {
          "entityName": "HDFC Bank",
          "entityDescription": "Dominant bank in finance sector"
        },
        {
          "entityName": "HDFC Bank",
          "entityDescription": "Dominant bank in finance sector"
        },
        {
          "entityName": "Google",
          "entityDescription": "Dominant in IT Sector"
        },
        {
          "entityName": "Amazon",
          "entityDescription": "Ecommerse leading "
        },
        {
          "entityName": "spacex",
          "entityDescription": "Aerospace"
        }
      ],
      "isDeleted": false,
      "isEditable": true,
      "canBeShared": "true"
    },
    {
      "updatedAt": "01-01-1970 00:03:44",
      "listName": "onePlus121",
      "childEntities": [
        {
          "entityName": "Google",
          "entityDescription": "Dominant in IT Sector"
        },
        {
          "entityName": "Amazon",
          "entityDescription": "Ecommerse leading "
        },
        {
          "entityName": "HDFC Bank",
          "entityDescription": "Dominant bank in finance sector"
        },
        {
          "entityName": "HDFC Bank",
          "entityDescription": "Dominant bank in finance sector"
        },
        {
          "entityName": "HDFC Bank",
          "entityDescription": "Dominant bank in finance sector"
        },
        {
          "entityName": "HDFC Bank",
          "entityDescription": "Dominant bank in finance sector"
        }
      ],
      "isDeleted": false,
      "isEditable": true,
      "canBeShared": "true"
    },
    {
      "updatedAt": "01-01-1970 00:03:44",
      "listName": "Mumbai121",
      "childEntities": [
        {
          "entityName": "Axis Bank",
          "entityDescription": "Banking Sector"
        },
        {
          "entityName": "spacex",
          "entityDescription": "Aerospace"
        },
        {
          "entityName": "HDFC Bank",
          "entityDescription": "Dominant bank in finance sector"
        },
        {
          "entityName": "HDFC Bank",
          "entityDescription": "Dominant bank in finance sector"
        },
        {
          "entityName": "Axis Bank",
          "entityDescription": "Banking Sector"
        },
        {
          "entityName": "spacex",
          "entityDescription": "Aerospace"
        }
      ],
      "isDeleted": false,
      "isEditable": true,
      "canBeShared": "true"
    },
    {
      "updatedAt": "01-01-1970 00:03:44",
      "listName": "Banglore12112",
      "childEntities": [
        {
          "entityName": "HDFC Bank",
          "entityDescription": "Dominant bank in finance sector"
        },
        {
          "entityName": "HDFC Bank",
          "entityDescription": "Dominant bank in finance sector"
        },
        {
          "entityName": "HDFC Bank",
          "entityDescription": "Dominant bank in finance sector"
        },
        {
          "entityName": "HDFC Bank",
          "entityDescription": "Dominant bank in finance sector"
        },
        {
          "entityName": "HDFC Bank",
          "entityDescription": "Dominant bank in finance sector"
        },
        {
          "entityName": "HDFC Bank",
          "entityDescription": "Dominant bank in finance sector"
        }
      ],
      "isDeleted": false,
      "isEditable": true,
      "canBeShared": "true"
    },
    {
      "updatedAt": "01-01-1970 00:03:44",
      "listName": "Delhi_",
      "childEntities": [
        {
          "entityName": "HDFC Bank",
          "entityDescription": "Dominant bank in finance sector"
        },
        {
          "entityName": "HDFC Bank",
          "entityDescription": "Dominant bank in finance sector"
        },
       {
          "entityName": "spacex",
          "entityDescription": "Aerospace"
        },
       
        {
          "entityName": "HDFC Bank",
          "entityDescription": "Dominant bank in finance sector"
        },
        {
          "entityName": "HDFC Bank",
          "entityDescription": "Dominant bank in finance sector"
        }
      ],
      "isDeleted": false,
      "isEditable": true,
      "canBeShared": "true"
    },
    {
      "updatedAt": "01-01-1970 00:03:44",
      "listName": "chennai1211",
      "childEntities": [
        {
          "entityName": "HDFC Bank",
          "entityDescription": "Dominant bank in finance sector"
        },
        {
          "entityName": "spacex",
          "entityDescription": "Aerospace"
        },
        {
          "entityName": "HDFC Bank",
          "entityDescription": "Dominant bank in finance sector"
        },
        {
          "entityName": "HDFC Bank",
          "entityDescription": "Dominant bank in finance sector"
        }
      ],
      "isDeleted": false,
      "isEditable": true,
      "canBeShared": "true"
    },
    {
      "updatedAt": "01-01-1970 00:03:44",
      "listName": "Calcutta12",
      "childEntities": [
        {
          "entityName": "spacex",
          "entityDescription": "Aerospace"
        },
        {
          "entityName": "HDFC Bank",
          "entityDescription": "Dominant bank in finance sector"
        }
      ],
      "isDeleted": false,
      "isEditable": true,
      "canBeShared": "true"
    }
  ]
  showListDetails(details: any){
    this.selectedList = details;
    console.log(details);
  }

}
