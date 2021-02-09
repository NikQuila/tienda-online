const INITIAL_STATE = {
    sections: [
        {
          title: "Hats",
          imageUrl: "http://images.unsplash.com/photo-1514327605112-b887c0e61c0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMjA3fDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080",
          id: 1,
          linkUrl: "shop/hats",
        },
        {
          title: "Jackets",
          imageUrl:
            "https://images-na.ssl-images-amazon.com/images/I/51ylk6F0rfL._AC_UY445_.jpg",
          id: 2,
          linkUrl: "shop/jackets",
        },
        {
          title: "Sneakers",
          imageUrl:
            "https://sneakerize.gr/wp-content/uploads/2018/12/Sneaker-Feature-.jpg",
          id: 3,
          linkUrl: "",
        },
        {
          title: "Mens",
          imageUrl: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.creativefabrica.com%2Fes%2Fproduct%2Fbusiness-men-logo%2F&psig=AOvVaw34O59ClJIWuOtU7ttIi9K2&ust=1612968682894000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCICmpN6G3e4CFQAAAAAdAAAAABAD",
          size: "large",
          id: 4,
          linkUrl: "",
        },
        {
          title: "Womens",
          imageUrl: "https://i.pinimg.com/originals/6a/88/98/6a889889f8f8bd8962818dfe13fcd4c8.png",
          size: "large",
          id: 5,
          linkUrl: "",
        },
      ]
}

const directoryReducer = (state = INITIAL_STATE, action) =>{
    switch(action.type){
        default:
            return state;
    }
}

export default directoryReducer;