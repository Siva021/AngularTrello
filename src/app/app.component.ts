import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularTask';
  hide:boolean = true;
  cardBoardArray:any = [];
  cardListObject = {
    title: '',
    list:[],
    create: false,
    cssClass:'',
    btn_card: false,
    hide_btn: false
  }

  ngOnInit() {
    this.addNewBoard("Title2");
    this.addNewBoard("Title1");
    this.addNewBoard("+ Add new list",true);
  }

  addNewBoard(title?,btn_add?) {
    this.cardListObject = {
      title: title?title:'',
      list:[],
      create: false,
      cssClass: btn_add?'add-card-list':'card',
      btn_card: btn_add?btn_add:false,
      hide_btn: false
    }
    if(!btn_add) {
      this.cardBoardArray.splice(this.cardBoardArray.length-1, 0,this.cardListObject);
    } else {
      this.cardBoardArray.push(this.cardListObject);
    }
  }

  // createNewBoard(title) {
  //   let board = document.createElement('div');
  //   board.id = "board_"+title+"_"+new Date().getTime();
  //   const boardTitle = this.createBoardTitle(title);
  //   const addButton = this.createAddButton(board.id);
  //   board.appendChild(boardTitle);
  //   const emptyList = document.createElement("ul");
  //   emptyList.id = "task-list";
  //   board.appendChild(emptyList);
  //   board.appendChild(addButton);
  //   board.classList.add("board");
  //   return board;
  // }

  removeCurrentCard(index) {
    this.cardBoardArray.splice(index,1);
    // let boardTitle = document.createElement('h5');
    // boardTitle.textContent = title;
    // boardTitle.classList.add('board-title');
    // return boardTitle;
  }

  // createAddButton(boardID) {
  //   let addBtn = document.createElement('button');
  //   addBtn.textContent = "Add Task";
  //   addBtn.classList.add('board-btn');
  //   addBtn.addEventListener("click", ()=>{
  //     this.addNewTask(boardID)
  //   });
  //   return addBtn;
  // }

  addNewTask(index) {
    // const taskDescription = prompt("Please enter task Description");
    // const desc = this.createTask(taskDescription);
    // const board = document.getElementById(boardID);
    // board.querySelector("ul").appendChild(desc);
    // console.log(boardID);    
    var listItem = {
      content: '',
      editable: true
    }
    this.cardBoardArray[index].hide_btn = true;
    this.cardBoardArray[index].list.push(listItem);
  }

  removeNewTask(i) {
    this.cardBoardArray[i].list.pop();
    this.cardBoardArray[i].hide_btn = false;
  }

  doAction(action,iindex,yindex) {
    if(action == 'edit') {
      this.cardBoardArray[iindex].list[yindex].editable = true;
    } else {
      if(this.cardBoardArray[iindex].list[yindex].content.trim() == '') {
        window.alert("Please enter some value or remoce item");
        return;
      }
      this.cardBoardArray[iindex].list[yindex].editable = false;
      this.cardBoardArray[iindex].hide_btn = false;
    }
  }

  // createTask(taskDescription) {
  //   let taskElement = document.createElement('li');
  //   taskElement.textContent = taskDescription;
  //   return taskElement;
  // }
}
