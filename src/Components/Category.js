import React, {useState, useEffect} from 'react'
import { isAuthenticated } from './helper/auth'
import { createCategory } from './helper/category'
import VRecipeCard from './Shared/VRecipeCard'



// https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=700%2C636


const Category = () => {


    const [values, setValues] = useState({
      modal: false,
      categoryName: "",
      error: "",
      success: false
    })

    const [data, setData] = useState([
      {
        title: "Title 1",
        rating: "3",
        category:"veg",
        text:"Lorem ipsum dolor sit amet, consectetur adipis cingelit. Etiam lacinia elit et placerat finibus. Praesent justo metus, pharetra vel nibh sit amet, tincidunt posuere nulla. Vivamus odio antement, feugiat eget nisi sit amet, scelerisque dignissim velit antement."
      },
      {
        title: "Title 2",
        rating: "3",
        category:"veg",
        text:"Lorem ipsum dolor sit amet, consectetur adipis cingelit. Etiam lacinia elit et placerat finibus. Praesent justo metus, pharetra vel nibh sit amet, tincidunt posuere nulla. Vivamus odio antement, feugiat eget nisi sit amet, scelerisque dignissim velit antement."
      },
      {
        title: "Title 3",
        rating: "3",
        category:"non-veg",
        text:"Lorem ipsum dolor sit amet, consectetur adipis cingelit. Etiam lacinia elit et placerat finibus. Praesent justo metus, pharetra vel nibh sit amet, tincidunt posuere nulla. Vivamus odio antement, feugiat eget nisi sit amet, scelerisque dignissim velit antement."
      },
      {
        title: "Title 4",
        rating: "3",
        category:"veg",
        text:"Lorem ipsum dolor sit amet, consectetur adipis cingelit. Etiam lacinia elit et placerat finibus. Praesent justo metus, pharetra vel nibh sit amet, tincidunt posuere nulla. Vivamus odio antement, feugiat eget nisi sit amet, scelerisque dignissim velit antement."
      },
      {
        title: "Title 5",
        rating: "3",
        category:"veg",
        text:"Lorem ipsum dolor sit amet, consectetur adipis cingelit. Etiam lacinia elit et placerat finibus. Praesent justo metus, pharetra vel nibh sit amet, tincidunt posuere nulla. Vivamus odio antement, feugiat eget nisi sit amet, scelerisque dignissim velit antement."
      },
      {
        title: "Title 6",
        rating: "3",
        category:"non-veg",
        text:"Lorem ipsum dolor sit amet, consectetur adipis cingelit. Etiam lacinia elit et placerat finibus. Praesent justo metus, pharetra vel nibh sit amet, tincidunt posuere nulla. Vivamus odio antement, feugiat eget nisi sit amet, scelerisque dignissim velit antement."
      },
      {
        title: "Title 7",
        rating: "3",
        category:"starters",
        text:"Lorem ipsum dolor sit amet, consectetur adipis cingelit. Etiam lacinia elit et placerat finibus. Praesent justo metus, pharetra vel nibh sit amet, tincidunt posuere nulla. Vivamus odio antement, feugiat eget nisi sit amet, scelerisque dignissim velit antement."
      },
      {
        title: "Title 8",
        rating: "3",
        category:"non-veg",
        text:"Lorem ipsum dolor sit amet, consectetur adipis cingelit. Etiam lacinia elit et placerat finibus. Praesent justo metus, pharetra vel nibh sit amet, tincidunt posuere nulla. Vivamus odio antement, feugiat eget nisi sit amet, scelerisque dignissim velit antement."
      },
      {
        title: "Title 9",
        rating: "3",
        category:"salads",
        text:"Lorem ipsum dolor sit amet, consectetur adipis cingelit. Etiam lacinia elit et placerat finibus. Praesent justo metus, pharetra vel nibh sit amet, tincidunt posuere nulla. Vivamus odio antement, feugiat eget nisi sit amet, scelerisque dignissim velit antement."
      },
      {
        title: "Title 10",
        rating: "3",
        category:"starters",
        text:"Lorem ipsum dolor sit amet, consectetur adipis cingelit. Etiam lacinia elit et placerat finibus. Praesent justo metus, pharetra vel nibh sit amet, tincidunt posuere nulla. Vivamus odio antement, feugiat eget nisi sit amet, scelerisque dignissim velit antement."
      },
      {
        title: "Title 11",
        rating: "5",
        category:"non-veg",
        text:"Lorem ipsum dolor sit amet, consectetur adipis cingelit. Etiam lacinia elit et placerat finibus. Praesent justo metus, pharetra vel nibh sit amet, tincidunt posuere nulla. Vivamus odio antement, feugiat eget nisi sit amet, scelerisque dignissim velit antement."
      }
    ])

    const [activeCategory, setActiveCategory] = useState({
      category:"show all",
      filter_all:"filter-active"
    })



    const arr = [1,2,3,4,5]

    const showCards = () => {
      let count = 0;
      return data.map((ele, index) => {
        
        if((ele.category.toLowerCase() == activeCategory.category.toLowerCase() || activeCategory.category.toLowerCase() =="show all")&& count<4)
        {
          count++;
        return(
        <div className  = "col-lg-3" key = {index}>
        <VRecipeCard 
          img = "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=700%2C636"
          title = {ele.title}
          rating = {ele.rating}
          category = {ele.category}
          />
        </div>
        )
        }
    })
    }

    const handleCategoryClick = (e) => {
      console.log("Selected: ",e);
      setActiveCategory({[e.target.attributes.name.value]:"filter-active", category:e.target.innerText})
      
    }

    

    const handleCategory = () => {


      createCategory({name:values.categoryName}).then(
        data => {
          if(data.error)
          {
            setValues({...values, error: data.error});
          }
          else{
            setValues({...values, categoryName:"", modal:false, success: true});
            console.log("added successfully");
          }
        }
      )
    }

    const CategoryModal = () => {
        return (
          <div class="modal fade show" id="staticBackdropLive" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="staticBackdropLiveLabel" style={{display: "block"}} aria-modal="true" role="dialog">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-body">
                <h3>Are Category</h3>
                <input type="text" class="form-control" onChange = {(e) => {setValues({...values, categoryName: e.target.value})}} placeholder="Category Name" value = {values.categoryName} aria-label="Category Name" aria-describedby="addon-wrapping"></input>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-danger" onClick = {handleCategory} data-bs-dismiss="modal">Add</button>
                <button type="button" className="btn btn-primary" onClick = {() =>setValues({...values, modal: false})}>Close</button>
              </div>
            </div>
          </div>
        </div>
        )
    } 



  return (
    <section id="category" className="category">
      <div className="container">

        <div className="section-title">
          <h2>Check our tasty <span>Recipes</span></h2>
        </div>

        <div className="row">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="category-flters">
            {console.log(activeCategory)}
              <li name="filter_all" className = {activeCategory.filter_all?activeCategory.filter_all:""} onClick = {handleCategoryClick}>Show All</li>
              <li name="filter_veg" className = {activeCategory.filter_veg?activeCategory.filter_veg:""} onClick = {handleCategoryClick}>Veg</li>
              <li name="filter_nveg" className = {activeCategory.filter_nveg?activeCategory.filter_nveg:""} onClick = {handleCategoryClick}>Non-veg</li>
              <li name="filter_starters" className = {activeCategory.filter_starters?activeCategory.filter_starters:""} onClick = {handleCategoryClick}>Starters</li>
              <li name="filter_salads" className = {activeCategory.filter_salads?activeCategory.filter_salads:""} onClick = {handleCategoryClick}>Salads</li>
              <li name="filter_specialty" className = {activeCategory.filter_specialty?activeCategory.filter_specialty:""} onClick = {handleCategoryClick}> Specialty</li>
              {isAuthenticated()&&isAuthenticated().user._id==1? 
                <li name=".filter-specialty" onClick = {() => setValues({...values, modal:true})}>Add Category</li>
                :""
              }
              
            </ul>
          </div>
        </div>

        <div className="row category-container">
        {showCards()}
        </div>

        <div>
            {arr.length>4? <a href = "/blogs">See more posts</a>:"" }
        </div>
      </div>
      {values.modal ? CategoryModal():""}
    </section>
  )
}

export default Category
