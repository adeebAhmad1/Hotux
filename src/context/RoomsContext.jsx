import React, { Component,createContext } from 'react';
import img1 from "../resources/images/room-list/list1.jpg";
import img2 from "../resources/images/room-list/list2.jpg";
import img3 from "../resources/images/room-list/list3.jpg";
import img4 from "../resources/images/room-list/list4.jpg";
import img5 from "../resources/images/room-list/list5.jpg";
import img6 from "../resources/images/room-list/list6.jpg";
import img7 from "../resources/images/room-list/list7.jpg";
import img8 from "../resources/images/room-list/list8.jpg";
import img9 from "../resources/images/room-list/list9.jpg";
export const RoomsContext = createContext();
class RoomsContextProvider extends Component {
  state={
    titles: [
      "Royal Suite",
      "Deluxe Suite",
      "Villa Suite",
      "Terrace Suite",
      "Penthouse Suite",
      "Presidential Suite",
      "Super Deluxe",
      "Junior Suite",
      "Executive Suite"
    ],
    images: [img1, img2, img3, img4, img5, img6, img7, img8, img9]
  }
  render () {
    return (
      <RoomsContext.Provider value={{...this.state}}>
        {this.props.children}
      </RoomsContext.Provider>
    )
  }
}

export default RoomsContextProvider