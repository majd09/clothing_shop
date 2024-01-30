import CategoryItem from '../componets/category-item/category-item.componets';
import '../directory/directory.style.scss'

const Directory=({categories})=>{

    return (
        <div  className="directory-container">
    {categories.map((category)=>(


        <CategoryItem key={category.id} category={category} />

    ))}
     

   </div>
    )


}

export default Directory;