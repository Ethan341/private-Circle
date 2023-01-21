import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import * as _ from 'lodash'

@Component({
  selector: 'table-comp',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Output() listSelected = new EventEmitter();
  @Input()
  tableData!: {
    updatedAt: string;
    listName: string;
    childEntities: {
        entityName: string;
        entityDescription: string;
    }[];
    isDeleted: boolean;
    isEditable: boolean;
    canBeShared: string;
}[];
  representationList : {
    updatedAt: string;
    listName: string;
    childEntities: {
        entityName: string;
        entityDescription: string;
    }[];
    isDeleted: boolean;
    isSelected?: boolean;
    isEditable: boolean;
    canBeShared: string;
}[]| undefined;
  listCollectionLength : number = 13
  pageSize :any = 10
  page = 1;
  cleanData :any
  selectedList : any
  constructor() { }
  ngOnInit(): void {
    this.cleanData = this.tableData;
    this.updateTable()

  }
  

  updateTable(){
    let tempList = _.cloneDeep(this.tableData ) 
    this.representationList = tempList.slice((this.page-1)*(parseInt(this.pageSize)), (this.page - 1) * parseInt(this.pageSize) + parseInt(this.pageSize) )
    this.listCollectionLength = this.tableData.length;
  }

  updateSelection(list : any){
    this.tableData?.forEach((singleList:any)=>{
      singleList.isSelected = false
      if(list.listName == singleList.listName){
        singleList.isSelected = true;
      }
    })
    this.updateTable()
    this.listSelected.next(list);

  }
  timer : any
  startSearching(event:any){
    console.log(event.target.value);
    console.log(this.timer);
    if(this.timer){
      clearTimeout(this.timer);
    }
      this.timer = setTimeout(()=>{
        this.filterData(event.target.value)
      },100)
  }
  filterData(key:string){
    
    let FilteredData : any = []
    this.cleanData.forEach((list:any)=>{
      if(list.listName.toLocaleLowerCase().includes(key.toLocaleLowerCase())){
        FilteredData.push(list);
      }
    })
    this.tableData = FilteredData
    this.updateTable()
  }

}
