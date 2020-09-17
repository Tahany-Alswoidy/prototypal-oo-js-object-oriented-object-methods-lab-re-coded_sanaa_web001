function BoardMember(name, homeState, training){
  this.name=name;
  this.homeState=homeState;
  this.training=training;
  this.veto=()=>{return "You can do that!";};
  this.approve=()=>{return "No, I must disagree";};
  this.doCharity=()=>{return "I like to help people.";};
  this.releasePressStatement =()=>{return "will see great things from Scuber.";};
  this.sayHi =()=>{return "No, I must disagree";};
}