import React, { Component } from 'react'

class Megamenu extends Component {

    constructor(props){
        super();

   }


   menuClick=(e)=>{
     e.target.classList.toggle("active");
     var panel =  e.target.nextElementSibling;
     if(panel.style.maxHeight){
          panel.style.maxHeight = null;
     }else{
          panel.style.maxHeight= panel.scrollHeight+ "px"
     }
   }



    render() {

          const Catlist = this.props.data;
          const View = Catlist.map((Catlist,i)=>{
               return <div key={i.toString()}>
                    <button onClick={this.menuClick} className="accordion">
                    <img alt='' className="accordionMenuIcon" src="https://image.flaticon.com/icons/png/128/739/739249.png" />&nbsp; {Catlist.category_name} 
                           </button>
                  <div className="panel">
                       <ul>

                              {
                                   (Catlist.subcategory_name).map((Sublist,i)=>{
                                        return <li><a href="#" className="accordionItem" >{Sublist.subcategory_name}</a></li>
                                   })
                              }




                            
                       </ul>
                  </div>
                  </div>
          });



        return (
            <>
             <div className="accordionMenuDiv">
                   <div className="accordionMenuDivInside">


                    {View}

                   </div>

              </div>
            </>
        )
    }
}

export default Megamenu
