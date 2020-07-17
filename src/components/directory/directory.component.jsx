import React from "react";

import MenuItem from "../menu-item/menu-item.component";

import "./directory.styles.scss";

class Directory extends React.Component {
  constructor() {
    super();
    this.state = {
      sections: [
        {
          title: "Mario",
          imageUrl: "https://wallpaperaccess.com/full/514007.jpg",
          id: 1,
        },
        {
          title: "Sonic",
          imageUrl:
            "https://i.pinimg.com/originals/fd/de/c6/fddec6b2a0e806216720bd6dba01a604.png",
          id: 2,
        },
        {
          title: "Link",
          imageUrl:
            "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bf3e9148-9803-4bc7-bbf4-8a7bdee78225/d5eu25x-7a386817-da4d-40ab-833b-d03c986c6878.png/v1/fill/w_900,h_507,q_80,strp/link_desktop_background_by_theamazinginfernape_d5eu25x-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD01MDciLCJwYXRoIjoiXC9mXC9iZjNlOTE0OC05ODAzLTRiYzctYmJmNC04YTdiZGVlNzgyMjVcL2Q1ZXUyNXgtN2EzODY4MTctZGE0ZC00MGFiLTgzM2ItZDAzYzk4NmM2ODc4LnBuZyIsIndpZHRoIjoiPD05MDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.lFGHm3TuBLliTXvXzlfU35Xi-N-OPw187LIB6exRpik",
          id: 3,
        },
        {
          title: "Pokemon",
          imageUrl:
            "https://i.pinimg.com/originals/78/0c/17/780c1775c94f0ca93807bd0a6d18535f.jpg",
          size: "large",
          id: 4,
        },
        {
          title: "Naruto",
          imageUrl: "https://cdn.wallpapersafari.com/78/32/cxXVUf.jpg",
          size: "large",
          id: 5,
        },
      ],
    };
  }
  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ title, imageUrl, id, size }) => (
          <MenuItem
            key={id}
            title={title}
            imageUrl={imageUrl}
            size={size}
          ></MenuItem>
        ))}
      </div>
    );
  }
}
export default Directory;
